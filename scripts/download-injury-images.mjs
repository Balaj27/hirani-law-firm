import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const photos = [
  {
    id: "11985980",
    file: "injury-accident-pexels.webp",
    photographer: "Mike Bird",
    page: "https://www.pexels.com/photo/car-crash-on-dirt-road-11985980/",
  },
  {
    id: "11870397",
    file: "injury-texas-highway-pexels.webp",
    photographer: "Christopher Hyer",
    page: "https://www.pexels.com/photo/aerial-view-of-the-highway-11870397/",
  },
  {
    id: "6077447",
    file: "injury-legal-preparation-pexels.webp",
    photographer: "KATRIN BOLOVTSOVA",
    page: "https://www.pexels.com/photo/judge-signing-on-the-papers-6077447/",
  },
];
await Promise.all(
  photos.map(async (photo) => {
    const url = `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=srgb&w=1600`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${photo.id}: HTTP ${response.status}`);
    const input = Buffer.from(await response.arrayBuffer());
    const target = fileURLToPath(
      new URL(`../public/assets/${photo.file}`, import.meta.url),
    );
    await sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(target);
    console.log(photo.file);
  }),
);
await writeFile(
  new URL("../docs/injury-photo-credits.json", import.meta.url),
  JSON.stringify(
    {
      license: "https://www.pexels.com/license/",
      usage:
        "Illustrative stock photography in the homepage personal injury benefits section; not Hirani clients, staff, or case results.",
      photos,
    },
    null,
    2,
  ) + "\n",
);
