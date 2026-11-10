import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const asset = new URL("../public/assets/hirani-logo.png", import.meta.url);
const crop = await sharp(fileURLToPath(asset))
  .extract({ left: 0, top: 0, width: 220, height: 139 })
  .png()
  .toBuffer();
const monogram = await sharp(crop)
  .trim()
  .resize({ width: 440 })
  .png()
  .toBuffer();
const mark = await sharp(monogram).metadata();
const icon = await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#1f2115" },
})
  .composite([
    {
      input: monogram,
      left: Math.round((512 - mark.width) / 2),
      top: Math.round((512 - mark.height) / 2),
    },
  ])
  .png()
  .toBuffer();
await writeFile(new URL("../src/app/icon.png", import.meta.url), icon);
await sharp(icon)
  .resize(180, 180)
  .png()
  .toFile(fileURLToPath(new URL("../src/app/apple-icon.png", import.meta.url)));

const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) => sharp(icon).resize(size, size).png().toBuffer()),
);
const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(
  new URL("../src/app/favicon.ico", import.meta.url),
  Buffer.concat([header, ...images]),
);
console.log(
  "Created favicon.ico (16/32/48px), icon.png (512px), apple-icon.png (180px)",
);
