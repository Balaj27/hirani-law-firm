import fs from "node:fs";
import path from "node:path";
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      let s = fs
        .readFileSync(p, "utf8")
        .replace(
          /\b(aria-posinset|aria-setsize|tabIndex|maxLength|minLength|rows|cols|size|colSpan|rowSpan)="(-?\d+)"/g,
          "$1={$2}",
        )
        .replace(/ as="[^"]*"/g, "");
      fs.writeFileSync(p, s);
    }
  }
}
walk("src");
