import fs from 'fs';

const data = JSON.parse(fs.readFileSync('d:/antigravity projects/Capitol SR22 Insurance Austin/data/siteData.json', 'utf8'));

console.log("Home title:", data.home.title);
console.log("Home target keyword:", data.home.keyword);
console.log("Home SEO title:", data.home.seoTitle);
console.log("Home meta desc:", data.home.metaDesc);

// Extract headings in home.content
const h2Matches = [...data.home.content.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]);
console.log("H2 headings:", h2Matches);
const h3Matches = [...data.home.content.matchAll(/<h3>(.*?)<\/h3>/g)].map(m => m[1]);
console.log("H3 headings:", h3Matches);
