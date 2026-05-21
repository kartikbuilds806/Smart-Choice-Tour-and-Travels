const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folders = [
  path.join(__dirname, '..', 'public', 'images'),
  path.join(__dirname, '..', 'public', 'gallery')
];

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  if (ext === '.webp') return; // already webp

  const outPath = filePath.replace(ext, '.webp');
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log('Converted:', filePath, '->', outPath);
  } catch (e) {
    console.error('Failed to convert', filePath, e.message);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      await convertFile(full);
    }
  }
}

(async () => {
  for (const folder of folders) {
    if (fs.existsSync(folder)) {
      console.log('Processing folder:', folder);
      await walk(folder);
    } else {
      console.warn('Folder not found, skipping:', folder);
    }
  }
  console.log('Done.');
})();
