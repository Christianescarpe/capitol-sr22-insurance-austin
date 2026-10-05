import fs from 'fs';

const data = JSON.parse(fs.readFileSync('d:/antigravity projects/Capitol SR22 Insurance Austin/data/siteData.json', 'utf8'));

function analyzePage(p) {
  const html = p.content;
  // match h1
  const h1Match = html.match(/<h1>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : p.title;

  // content without h1
  const withoutH1 = html.replace(/<h1>[\s\S]*?<\/h1>/i, '').trim();

  // find first h2
  const firstH2Idx = withoutH1.indexOf('<h2');
  let intro = '';
  let rest = withoutH1;
  if (firstH2Idx !== -1) {
    intro = withoutH1.slice(0, firstH2Idx).trim();
    rest = withoutH1.slice(firstH2Idx).trim();
  }

  // split rest by h2
  const sections = [];
  const parts = rest.split(/<h2\b[^>]*>/i);
  for (let i = 1; i < parts.length; i++) {
    const end = parts[i].indexOf('</h2>');
    const title = parts[i].slice(0, end).trim();
    const body = parts[i].slice(end + 5).trim();
    sections.push({ title, body });
  }

  return { h1, intro, sections };
}

const homeParsed = analyzePage(data.home);
console.log('Homepage parsed:');
console.log('H1:', homeParsed.h1);
console.log('Intro snippet:', homeParsed.intro.slice(0, 200));
console.log('Section count:', homeParsed.sections.length);
homeParsed.sections.forEach((s, i) => console.log(`  Section ${i}: ${s.title}`));
