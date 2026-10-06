async function verifyLive() {
  const sitemapUrl = 'https://sr22insuranceaustintx.site/sitemap.xml';
  const robotsUrl = 'https://sr22insuranceaustintx.site/robots.txt';

  console.log('=== Checking /robots.txt ===');
  const rRes = await fetch(robotsUrl, {
    redirect: 'manual',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
  });
  console.log('Status:', rRes.status, rRes.statusText);
  console.log('Content-Type:', rRes.headers.get('content-type'));
  console.log('X-Robots-Tag:', rRes.headers.get('x-robots-tag'));
  const rText = await rRes.text();
  console.log('Content:\n' + rText);

  console.log('=== Checking /sitemap.xml ===');
  const sRes = await fetch(sitemapUrl, {
    redirect: 'manual',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
  });
  console.log('Status:', sRes.status, sRes.statusText);
  console.log('Content-Type:', sRes.headers.get('content-type'));
  console.log('X-Robots-Tag:', sRes.headers.get('x-robots-tag'));
  const sText = await sRes.text();
  console.log('Length:', sText.length);
  console.log('Valid XML header:', sText.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  
  const locs = [...sText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log('Total URLs found in sitemap:', locs.length);
  const invalidDomain = locs.filter(u => !u.startsWith('https://sr22insuranceaustintx.site'));
  console.log('Invalid domain URLs count:', invalidDomain.length);
  if (invalidDomain.length > 0) {
    console.error('Invalid URLs:', invalidDomain);
  } else {
    console.log('All URLs strictly use https://sr22insuranceaustintx.site!');
  }
}
verifyLive();
