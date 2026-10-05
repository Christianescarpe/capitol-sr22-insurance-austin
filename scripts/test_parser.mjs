import fs from 'fs';

const data = JSON.parse(fs.readFileSync('d:/antigravity projects/Capitol SR22 Insurance Austin/data/siteData.json', 'utf8'));

export function parseSheetContent(rawOrWithAnchorsHtml, defaultTitle) {
  const html = rawOrWithAnchorsHtml || '';
  
  // 1. Extract H1 if present
  const h1Match = html.match(/<h1>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : defaultTitle;

  // Remove H1 from body
  const withoutH1 = html.replace(/<h1>[\s\S]*?<\/h1>/i, '').trim();

  // 2. Extract intro (content before the first H2)
  const firstH2Match = withoutH1.match(/<h2\b[^>]*>/i);
  let intro = '';
  let rest = withoutH1;

  if (firstH2Match) {
    const idx = withoutH1.indexOf(firstH2Match[0]);
    intro = withoutH1.slice(0, idx).trim();
    rest = withoutH1.slice(idx).trim();
  } else {
    intro = withoutH1;
    rest = '';
  }

  // 3. Extract the first H2 section (for the Overview section in design)
  let firstSection = null;
  let remainingContent = rest;

  if (rest.startsWith('<h2') || rest.startsWith('<H2')) {
    const endH2Tag = rest.indexOf('</h2>');
    if (endH2Tag !== -1) {
      const titleStart = rest.indexOf('>') + 1;
      const title = rest.slice(titleStart, endH2Tag).trim();
      const afterH2 = rest.slice(endH2Tag + 5).trim();

      // Find the next H2
      const nextH2Match = afterH2.match(/<h2\b[^>]*>/i);
      if (nextH2Match) {
        const nextH2Idx = afterH2.indexOf(nextH2Match[0]);
        firstSection = {
          title,
          body: afterH2.slice(0, nextH2Idx).trim()
        };
        remainingContent = afterH2.slice(nextH2Idx).trim();
      } else {
        firstSection = {
          title,
          body: afterH2
        };
        remainingContent = '';
      }
    }
  }

  return { h1, intro, firstSection, remainingContent };
}

// Test on Home
const homeP = parseSheetContent(data.home.content, data.home.title);
console.log('Home H1:', homeP.h1);
console.log('Home FirstSection Title:', homeP.firstSection?.title);
console.log('Home Remaining content length:', homeP.remainingContent.length);

// Test on Service 0
const s0 = data.services[0];
const s0P = parseSheetContent(s0.content, s0.title);
console.log('\nService 0 H1:', s0P.h1);
console.log('Service 0 FirstSection Title:', s0P.firstSection?.title);
console.log('Service 0 Remaining content length:', s0P.remainingContent.length);

// Test on Location 0
const l0 = data.locations[0];
const l0P = parseSheetContent(l0.content, l0.title);
console.log('\nLocation 0 H1:', l0P.h1);
console.log('Location 0 FirstSection Title:', l0P.firstSection?.title);
console.log('Location 0 Remaining content length:', l0P.remainingContent.length);
