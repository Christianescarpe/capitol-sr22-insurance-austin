import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const siteData = JSON.parse(fs.readFileSync(path.join(projectRoot, 'data', 'siteData.json'), 'utf8'));

const PROD_BASE_NON_WWW = 'https://sr22insuranceaustintx.site';
const PROD_BASE_WWW = 'https://www.sr22insuranceaustintx.site';

const paths = [
  '/',
  '/contact',
  '/blog',
  ...siteData.services.map(s => s.url),
  ...siteData.locations.map(l => l.url),
  ...siteData.blogs.map(b => b.url)
];

async function audit() {
  console.log(`Starting comprehensive audit of ${paths.length} pages...`);
  const results = [];

  for (const p of paths) {
    const wwwUrl = `${PROD_BASE_WWW}${p}`;
    const nonWwwUrl = `${PROD_BASE_NON_WWW}${p}`;

    try {
      // Test non-www redirect
      const nonWwwRes = await fetch(nonWwwUrl, { redirect: 'manual' });
      const nonWwwStatus = nonWwwRes.status;
      const nonWwwLoc = nonWwwRes.headers.get('location');

      // Test www live response
      const res = await fetch(wwwUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }
      });
      const status = res.status;
      const contentType = res.headers.get('content-type') || '';
      const xRobots = res.headers.get('x-robots-tag') || 'none';
      const html = await res.text();

      // Extract SEO elements
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : '';

      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
      const metaDesc = descMatch ? descMatch[1] : '';

      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : '';

      const robotsMetaMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
      const robotsMeta = robotsMetaMatch ? robotsMetaMatch[1] : '';

      const h1Matches = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      const hasSchema = html.includes('application/ld+json');

      // Check all internal links on this page
      const linkMatches = [...html.matchAll(/href=["'](\/[^"']*|https?:\/\/[^"']*)["']/gi)].map(m => m[1]);
      const internalLinks = linkMatches.filter(l => 
        l.startsWith('/') && !l.startsWith('//') && !l.startsWith('/_next') && !l.startsWith('/images') && !l.startsWith('/favicon')
      );

      results.push({
        path: p,
        wwwUrl,
        status,
        nonWwwStatus,
        nonWwwLoc,
        contentType,
        xRobots,
        title,
        metaDesc,
        canonical,
        robotsMeta,
        h1Count: h1Matches.length,
        h1: h1Matches[0] || 'MISSING',
        hasSchema,
        internalLinksCount: internalLinks.length,
      });

    } catch (e) {
      results.push({
        path: p,
        error: e.message
      });
    }
  }

  // Also audit robots.txt and sitemap.xml
  const robotsRes = await fetch(`${PROD_BASE_WWW}/robots.txt`);
  const robotsText = await robotsRes.text();

  const sitemapRes = await fetch(`${PROD_BASE_WWW}/sitemap.xml`);
  const sitemapText = await sitemapRes.text();

  const auditReport = {
    totalAudited: paths.length,
    robots: {
      status: robotsRes.status,
      content: robotsText.trim()
    },
    sitemap: {
      status: sitemapRes.status,
      locs: [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    },
    pages: results
  };

  fs.writeFileSync(path.join(projectRoot, 'scripts', 'audit_report.json'), JSON.stringify(auditReport, null, 2), 'utf8');
  console.log('Audit completed. Report saved to scripts/audit_report.json');
}

audit();
