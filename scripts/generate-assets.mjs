// Generates favicon / apple-touch-icon / OG / logo derivatives from
// the master 399apps.com.png. Run via `node scripts/generate-assets.mjs`.
import sharp from 'sharp';
import { mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const publicDir = path.join(root, 'public');

// The brand master lives in public/399apps.com.png so the script is
// idempotent and can be re-run any time (e.g. after a logo refresh).
const source = path.join(publicDir, '399apps.com.png');
await access(source);
await mkdir(publicDir, { recursive: true });

const tasks = [
  { out: 'logo.png', size: 512 },
  { out: 'favicon-16.png', size: 16 },
  { out: 'favicon-32.png', size: 32 },
  { out: 'favicon.png', size: 64 },
  { out: 'favicon-192.png', size: 192 },
  { out: 'favicon-512.png', size: 512 },
  { out: 'apple-touch-icon.png', size: 180 },
];

for (const t of tasks) {
  await sharp(source)
    .resize(t.size, t.size, { fit: 'cover' })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(path.join(publicDir, t.out));
  console.log(`✓ ${t.out} (${t.size}×${t.size})`);
}

// OG image: 1200×630 with the logo on the left and brand text on the right.
const ogWidth = 1200;
const ogHeight = 630;
const logoSize = 440;
const logoBuffer = await sharp(source)
  .resize(logoSize, logoSize, { fit: 'cover' })
  .png()
  .toBuffer();

const bg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ogWidth} ${ogHeight}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${ogWidth}" y2="${ogHeight}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#fef2f2"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#b91c1c"/>
      <stop offset="0.5" stop-color="#dc2626"/>
      <stop offset="1" stop-color="#fb923c"/>
    </linearGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#0f172a" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)"/>
  <rect width="${ogWidth}" height="${ogHeight}" fill="url(#grid)"/>
  <text x="560" y="220" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="64" fill="#0a0b12" letter-spacing="-2">An app store of</text>
  <text x="560" y="300" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="64" letter-spacing="-2" fill="url(#accent)">honest business</text>
  <text x="560" y="380" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="64" letter-spacing="-2" fill="url(#accent)">software.</text>
  <text x="560" y="460" font-family="Inter, system-ui, sans-serif" font-weight="500" font-size="24" fill="#67718c">Books · Inventory · Matrimonials · Job Portal</text>
  <text x="560" y="496" font-family="Inter, system-ui, sans-serif" font-weight="500" font-size="24" fill="#67718c">Cloud or self-hosted.</text>
  <text x="560" y="560" font-family="Inter, system-ui, sans-serif" font-weight="600" font-size="22" fill="#0a0b12">399apps.com</text>
</svg>`;

await sharp(Buffer.from(bg))
  .composite([{ input: logoBuffer, top: Math.round((ogHeight - logoSize) / 2), left: 80 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, 'og-image.png'));
console.log(`✓ og-image.png (${ogWidth}×${ogHeight})`);

console.log('Done. Source kept at public/399apps.com.png.');
