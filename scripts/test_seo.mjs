import http from 'http';

function get(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, headers: res.headers, data });
      });
    });
  });
}

const robotsRes = await get('/robots.txt');
console.log('=== ROBOTS.TXT (status ' + robotsRes.status + ') ===');
console.log(robotsRes.data);

const sitemapRes = await get('/sitemap.xml');
console.log('\n=== SITEMAP.XML (status ' + sitemapRes.status + ') ===');
console.log('Total URLs count:', (sitemapRes.data.match(/<loc>/g) || []).length);
console.log('Sample snippet:\n', sitemapRes.data.slice(0, 500));

const homeRes = await get('/');
console.log('\n=== HOME HEAD CHECK ===');
const canonicalMatch = homeRes.data.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
console.log('Canonical tag:', canonicalMatch ? canonicalMatch[0] : 'NOT FOUND');
const metaGoogle = homeRes.data.match(/<meta[^>]*google-site-verification[^>]*>/i);
console.log('Google verification tag:', metaGoogle ? metaGoogle[0] : 'NOT FOUND');
const robotsTag = homeRes.data.match(/<meta[^>]*robots[^>]*>/i);
console.log('Robots tag:', robotsTag ? robotsTag[0] : 'NOT FOUND');
