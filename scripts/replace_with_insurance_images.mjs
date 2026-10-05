import fs from 'fs';
import path from 'path';

const srcDir = 'D:/images/insurance images';
const destDir = path.resolve('public/images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'hero-main.webp': 'insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp',
  'about-feature.webp': 'signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp',
  'service-1.webp': 'car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp',
  'service-2.webp': 'car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
  'service-3.webp': 'car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp',
  'service-4.webp': 'insurance-concept-of-person-protecting-blue-car-wi-2026-08-04-06-18-31-utc.webp',
  'cta-bg.webp': 'car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
  'feature-2.webp': 'man-holding-insurance-document-in-a-corporate-sett-2026-01-09-11-36-08-utc.webp',
  'blog-1.webp': 'car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
  'blog-2.webp': 'protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp',
  'blog-3.webp': 'insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp',
  'blog-4.webp': 'woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp',
  'blog-5.webp': 'car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp',
  'gallery-1.webp': 'car-insurance-coverage-with-protection-concept-2026-01-08-08-12-25-utc.webp',
  'gallery-2.webp': 'car-insurance-protection-covered-by-an-umbrella-2026-01-08-08-12-25-utc.webp',
  'gallery-3.webp': 'insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp',
  'gallery-4.webp': 'car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
  'gallery-5.webp': 'car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp',
};

// Also copy all files from D:/images/insurance images into public/images/insurance/
const insuranceSubDir = path.join(destDir, 'insurance');
if (!fs.existsSync(insuranceSubDir)) {
  fs.mkdirSync(insuranceSubDir, { recursive: true });
}

const allFiles = fs.readdirSync(srcDir);
for (const file of allFiles) {
  const src = path.join(srcDir, file);
  if (fs.statSync(src).isFile()) {
    fs.copyFileSync(src, path.join(insuranceSubDir, file));
  }
}
console.log(`Copied ${allFiles.length} files to public/images/insurance/`);

// Copy mapped files to standard targets
for (const [targetName, srcFileName] of Object.entries(mapping)) {
  const src = path.join(srcDir, srcFileName);
  const dest = path.join(destDir, targetName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Replaced ${targetName} with ${srcFileName}`);
  } else {
    console.error(`Source not found: ${src}`);
  }
}

console.log("All images successfully replaced with insurance images!");
