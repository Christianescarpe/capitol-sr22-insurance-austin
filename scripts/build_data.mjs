import fs from 'fs';
import path from 'path';

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentField);
        currentField = '';
      } else if (char === '\r') {
      } else if (char === '\n') {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
      } else {
        currentField += char;
      }
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }
  return rows;
}

const pageCSV = fs.readFileSync('C:/Users/Christian/.gemini/antigravity/brain/d1d4116e-bb89-49f1-92c1-5a9c763f738d/scratch/page_content.csv', 'utf8');
const blogCSV = fs.readFileSync('C:/Users/Christian/.gemini/antigravity/brain/d1d4116e-bb89-49f1-92c1-5a9c763f738d/scratch/blog_content.csv', 'utf8');

const pageRows = parseCSV(pageCSV);
const blogRows = parseCSV(blogCSV);

const routeMap = {
  'Homepage': '/',
  'SR22 insurance Austin, TX': '/',
  'Non-Owner SR22 Insurance Austin TX': '/non-owner-sr22-insurance-austin-tx',
  'SR22 Insurance Quotes Austin TX': '/sr22-insurance-quotes-austin-tx',
  'SR22 Insurance Requirements Austin TX': '/sr22-insurance-requirements-austin-tx',
  'Cheap FR44 Insurance Company Austin TX': '/cheap-fr44-insurance-company-austin-tx',
  'SR22 Insurance Pasadena TX': '/sr22-insurance-pasadena-tx',
  'SR22 Insurance Pearland TX': '/sr22-insurance-pearland-tx',
  'SR22 Insurance Sugar Land TX': '/sr22-insurance-sugar-land-tx',
  'SR22 Insurance Katy TX': '/sr22-insurance-katy-tx',
  'SR22 Insurance The Woodlands TX': '/sr22-insurance-the-woodlands-tx',
  'SR22 Insurance Baytown TX': '/sr22-insurance-baytown-tx',
  'SR22 Insurance Conroe TX': '/sr22-insurance-conroe-tx',
  'SR22 Insurance Spring TX': '/sr22-insurance-spring-tx',
  'SR22 Insurance League City TX': '/sr22-insurance-league-city-tx',
  'SR22 Insurance Cypress TX': '/sr22-insurance-cypress-tx',
};

function resolveInternalUrl(target) {
  if (!target) return '#';
  const clean = target.trim();
  if (routeMap[clean]) return routeMap[clean];
  if (clean.startsWith('http://') || clean.startsWith('https://')) return clean;
  // If slug provided
  const slug = clean.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `/${slug}`;
}

function injectAnchors(html, anchors, pageTitle) {
  let result = html;
  for (const a of anchors) {
    if (!a.text) continue;
    const text = a.text.trim();
    const isExt = !!a.isExt;
    const targetUrl = isExt ? a.url.trim() : resolveInternalUrl(a.url);
    
    // Check if anchor is already an <a> tag
    if (result.includes(`>${text}</a>`)) {
      continue;
    }

    // Replace first occurrence of text not already inside a tag
    const linkHtml = isExt
      ? `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">${text}</a>`
      : `<a href="${targetUrl}" class="text-blue-600 hover:text-blue-800 underline font-medium">${text}</a>`;

    const idx = result.indexOf(text);
    if (idx !== -1) {
      result = result.slice(0, idx) + linkHtml + result.slice(idx + text.length);
    } else {
      console.warn(`[${pageTitle}] Could not find anchor text: "${text}"`);
    }
  }
  return result;
}

// Process Pages
const pages = [];
for (let i = 1; i < pageRows.length; i++) {
  const r = pageRows[i];
  if (!r[0] || r[0] === 'Page Title' || r[0] === 'Page') continue;
  
  const title = r[0].trim();
  const keyword = r[1]?.trim() || '';
  const rawContent = r[2] || '';
  const metaDesc = r[3]?.trim() || '';
  const anchors = [
    { text: r[4], url: r[5] },
    { text: r[6], url: r[7] },
    { text: r[8], url: r[9] },
    { text: r[10], url: r[11], isExt: true },
  ];
  let slug = r[12]?.trim() || '';
  if (!slug) {
    if (title === 'Homepage') slug = '';
    else slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  } else if (slug === 'SR22 Insurance Austin TX | Capitol SR22 Insurance') {
    slug = '';
  }
  const seoTitle = r[13]?.trim() || `${title} | Capitol SR22 Insurance`;
  const contentWithAnchors = injectAnchors(rawContent, anchors, title);

  let type = 'location';
  if (title === 'Homepage') type = 'home';
  else if (i >= 3 && i <= 6) type = 'service';

  pages.push({
    title,
    keyword,
    slug,
    url: slug ? `/${slug}` : '/',
    seoTitle,
    metaDesc,
    type,
    rawContent,
    content: contentWithAnchors,
    anchors: anchors.map(a => ({
      text: a.text?.trim() || '',
      url: a.isExt ? a.url?.trim() : resolveInternalUrl(a.url),
      isExt: !!a.isExt
    }))
  });
}

// Process Blogs
const blogs = [];
for (let i = 1; i < blogRows.length; i++) {
  const r = blogRows[i];
  if (!r[0] || r[0] === 'Page Title') continue;

  const title = r[0].trim();
  const keyword = r[1]?.trim() || '';
  const rawContent = r[2] || '';
  const metaDesc = r[3]?.trim() || '';
  const anchors = [
    { text: r[4], url: r[5] },
    { text: r[6], url: r[7] },
    { text: r[8], url: r[9] },
    { text: r[10], url: r[11], isExt: true },
  ];
  const slug = r[12]?.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const seoTitle = r[13]?.trim() || `${title} | Capitol SR22 Insurance`;
  const contentWithAnchors = injectAnchors(rawContent, anchors, title);

  blogs.push({
    title,
    keyword,
    slug,
    url: `/blog/${slug}`,
    seoTitle,
    metaDesc,
    rawContent,
    content: contentWithAnchors,
    anchors: anchors.map(a => ({
      text: a.text?.trim() || '',
      url: a.isExt ? a.url?.trim() : resolveInternalUrl(a.url),
      isExt: !!a.isExt
    }))
  });
}

const siteData = {
  company: {
    name: "Capitol SR22 Insurance Austin",
    phone: "+17373094205",
    phoneDisplay: "(737) 309-4205",
    tel: "tel:+17373094205",
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263824.0544036639!2d-97.73297004999999!3d30.296113950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac670850dfe6e4c5%3A0x6d4604bf7fad8e1f!2sCapitol%20SR22%20Insurance%20Austin!5e1!3m2!1sen!2sph!4v1791183304121!5m2!1sen!2sph" width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    mapLink: "https://maps.app.goo.gl/qgKR6DQWxGe3p4eo8"
  },
  home: pages.find(p => p.type === 'home'),
  services: pages.filter(p => p.type === 'service'),
  locations: pages.filter(p => p.type === 'location'),
  blogs: blogs,
  allPages: pages
};

const dataDir = path.resolve('data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, 'siteData.json'), JSON.stringify(siteData, null, 2));

console.log("Successfully built siteData.json!");
console.log(`Home: 1 | Services: ${siteData.services.length} | Locations: ${siteData.locations.length} | Blogs: ${siteData.blogs.length}`);
