import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (/\.(css|tsx)$/.test(p)) files.push(p);
  }
}
walk("src");
walk("public/styles");
const urls = new Set();
for (const file of files) {
  const s = fs.readFileSync(file, "utf8");
  for (const m of s.matchAll(
    /https:\/\/(?:framerusercontent\.com\/(?:images|assets|third-party-assets)\/|fonts\.gstatic\.com\/)[^\s"'<>),\\]+/g,
  ))
    urls.add(m[0]);
}
const manifest = {};
let failed = 0;
const queue = [...urls];
fs.mkdirSync("public/assets", { recursive: true });
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      let ext = path.extname(new URL(url).pathname) || ".bin";
      const local =
        "/assets/" +
        createHash("sha1").update(url).digest("hex").slice(0, 16) +
        ext;
      try {
        if (!fs.existsSync("public" + local)) {
          const r = await fetch(url, { signal: AbortSignal.timeout(40000) });
          if (!r.ok) throw new Error(r.status);
          fs.writeFileSync(
            "public" + local,
            Buffer.from(await r.arrayBuffer()),
          );
        }
        manifest[url] = local;
      } catch (e) {
        failed++;
        console.log("FAILED", url, e.message);
      }
    }
  }),
);
for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  for (const [url, local] of Object.entries(manifest).sort(
    (a, b) => b[0].length - a[0].length,
  ))
    s = s.replaceAll(url, local);
  fs.writeFileSync(file, s);
}
fs.writeFileSync(
  "scripts/asset-manifest.json",
  JSON.stringify(manifest, null, 2),
);
console.log("Local assets:", Object.keys(manifest).length, "Failed:", failed);
