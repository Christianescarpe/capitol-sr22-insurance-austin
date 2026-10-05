import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

// Copy logo
const logoSrc = 'C:/Users/Christian/.gemini/antigravity/brain/d1d4116e-bb89-49f1-92c1-5a9c763f738d/.user_uploaded/media_1791183411156.jpg';
if (fs.existsSync(logoSrc)) {
  await sharp(logoSrc)
    .resize(600, 600, { fit: 'inside' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log("Created public/logo.png");
}

// Process fence images
const srcFenceDir = 'D:/images/fence';
const files = fs.readdirSync(srcFenceDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
console.log(`Found ${files.length} images in D:/images/fence`);

const selected = [
  { file: 'modern-residence-exterior-with-landscaped-garden-a-2026-09-23-21-55-47-utc.jpg', name: 'hero-main.webp', width: 1200 },
  { file: 'suburban-houses-and-fencing-on-a-sunny-day-2026-09-23-11-00-42-utc.jpg', name: 'about-feature.webp', width: 1000 },
  { file: 'quiet-suburban-street-with-wood-fences-and-trees-2026-09-23-22-34-28-utc.jpg', name: 'service-1.webp', width: 800 },
  { file: 'white-fence-and-greenery-in-a-suburban-setting-2026-09-22-16-31-01-utc.jpg', name: 'service-2.webp', width: 800 },
  { file: 'new-wooden-fence-on-a-sunny-day-2026-09-23-05-32-26-utc.jpg', name: 'service-3.webp', width: 800 },
  { file: 'slatted-fence-on-a-suburban-property-line-2026-09-23-23-21-44-utc.jpg', name: 'service-4.webp', width: 800 },
  { file: 'white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.jpg', name: 'cta-bg.webp', width: 1200 },
  { file: 'cozy-urban-outdoor-patio-with-artificial-turf-2026-09-23-12-28-33-utc.jpg', name: 'feature-2.webp', width: 800 },
  { file: 'adult-man-constructing-a-fence-in-rural-setting-2026-09-24-11-17-38-utc.jpg', name: 'blog-1.webp', width: 800 },
  { file: 'craftsman-uses-nail-gun-to-build-fence-2026-09-24-11-17-47-utc.jpg', name: 'blog-2.webp', width: 800 },
  { file: 'building-wooden-fence-with-drill-in-golden-sunligh-2026-09-24-08-01-19-utc.jpg', name: 'blog-3.webp', width: 800 },
  { file: 'young-man-building-a-wooden-fence-outdoors-2026-09-23-12-44-44-utc.jpg', name: 'blog-4.webp', width: 800 },
  { file: 'person-repairing-a-wooden-fence-outdoors-during-da-2026-09-24-07-56-06-utc.jpg', name: 'blog-5.webp', width: 800 },
  { file: 'construction-worker-building-a-fence-with-a-power-2026-09-22-14-18-01-utc.jpg', name: 'gallery-1.webp', width: 600 },
  { file: 'assembling-a-metal-structure-in-a-suburban-yard-2026-09-25-00-35-37-utc.jpg', name: 'gallery-2.webp', width: 600 },
  { file: 'bearded-man-working-on-outdoor-metal-railing-2026-09-22-13-39-19-utc.jpg', name: 'gallery-3.webp', width: 600 },
  { file: 'framing-a-wooden-fence-in-a-suburban-yard-2026-09-24-11-43-18-utc.jpg', name: 'gallery-4.webp', width: 600 },
  { file: 'worker-installing-metal-fence-along-brick-foundati-2026-09-24-14-40-20-utc.jpg', name: 'gallery-5.webp', width: 600 }
];

for (const item of selected) {
  const srcPath = path.join(srcFenceDir, item.file);
  const destPath = path.join(imagesDir, item.name);
  if (fs.existsSync(srcPath)) {
    await sharp(srcPath)
      .resize(item.width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(destPath);
    console.log(`Processed ${item.name}`);
  } else {
    console.log(`Not found: ${srcPath}`);
  }
}
console.log("Image processing complete!");
