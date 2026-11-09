import fs from "node:fs/promises";
const members = JSON.parse(await fs.readFile(new URL("../src/content/team.json", import.meta.url), "utf8"));
await Promise.all(members.map(async member => {
  const response = await fetch(member.imageUrl);
  if (!response.ok) throw new Error(`${member.name}: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(new URL(`../public${member.image}`, import.meta.url), bytes);
  console.log(`${member.name}: ${bytes.length} bytes`);
}));
