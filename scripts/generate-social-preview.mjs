import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const photo = await sharp(path.join(root, "public/assets/sehar-hirani.jpg"))
  .rotate()
  .resize(465, 630, { fit: "cover", position: "attention" })
  .toBuffer();
const logo = await sharp(path.join(root, "public/assets/hirani-logo.png"))
  .resize({ width: 320 })
  .toBuffer();
const artwork =
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="fade"><stop stop-color="#202216" stop-opacity=".7"/><stop offset="1" stop-color="#202216" stop-opacity="0"/></linearGradient>
  </defs>
  <rect x="735" width="465" height="630" fill="#111" opacity=".07"/>
  <rect x="735" width="100" height="630" fill="url(#fade)"/>
  <path d="M64 176H664" stroke="#f3e6b5" stroke-opacity=".2"/>
  <g fill="#f8f5e9" font-family="Georgia, 'Times New Roman', serif" font-size="66" letter-spacing="-2">
    <text x="60" y="260">Your family.</text>
    <text x="60" y="333">Your future.</text>
    <text x="60" y="406">Our commitment.</text>
  </g>
  <g font-family="Arial, sans-serif">
    <text x="64" y="468" fill="#e7cf80" font-size="25">Family Law &amp; Personal Injury</text>
    <text x="64" y="504" fill="#d0d0bf" font-size="21">Houston &amp; Katy, Texas</text>
    <text x="64" y="562" fill="#f8f5e9" font-size="23">Free confidential consultation</text>
    <text x="64" y="598" fill="#e7cf80" font-size="23">281-665-8188</text>
  </g>
  <rect y="624" width="1200" height="6" fill="#d9b649"/>
</svg>`);
await mkdir(path.join(root, "public/images"), { recursive: true });
const output = path.join(root, "public/images/hirani-social-preview.jpg");
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#202216" },
})
  .composite([
    { input: photo, left: 735, top: 0 },
    { input: artwork, left: 0, top: 0 },
    { input: logo, left: 64, top: 50 },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(output);
console.log(output);
