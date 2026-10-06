import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const data = JSON.parse(fs.readFileSync(path.join(projectRoot, 'data', 'siteData.json'), 'utf8'));

const BASE = 'https://sr22insuranceaustintx.site';
const TODAY = '2026-10-06';

const urls = [
  { url: `${BASE}/`, priority: '1.0', changefreq: 'daily' },
  { url: `${BASE}/contact`, priority: '0.9', changefreq: 'weekly' },
  { url: `${BASE}/blog`, priority: '0.8', changefreq: 'daily' },
  ...data.services.map((s) => ({ url: `${BASE}${s.url}`, priority: '0.9', changefreq: 'weekly' })),
  ...data.locations.map((l) => ({ url: `${BASE}${l.url}`, priority: '0.8', changefreq: 'weekly' })),
  ...data.blogs.map((b) => ({ url: `${BASE}${b.url}`, priority: '0.7', changefreq: 'monthly' })),
];

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const item of urls) {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${item.url}</loc>`);
  xmlLines.push(`    <lastmod>${TODAY}</lastmod>`);
  xmlLines.push(`    <changefreq>${item.changefreq}</changefreq>`);
  xmlLines.push(`    <priority>${item.priority}</priority>`);
  xmlLines.push('  </url>');
}

xmlLines.push('</urlset>');
xmlLines.push('');

const sitemapContent = xmlLines.join('\n');
fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap.xml'), sitemapContent, 'utf8');
console.log(`Generated public/sitemap.xml with ${urls.length} URLs`);

const robotsContent = `User-agent: *
Allow: /
Sitemap: https://sr22insuranceaustintx.site/sitemap.xml
`;
fs.writeFileSync(path.join(projectRoot, 'public', 'robots.txt'), robotsContent, 'utf8');
console.log('Generated public/robots.txt');
