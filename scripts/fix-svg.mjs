import fs from "node:fs";
import path from "node:path";
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      let s = fs.readFileSync(p, "utf8");
      for (const [a, b] of Object.entries({
        foreignobject: "foreignObject",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        clippath: "clipPath",
      }))
        s = s.replaceAll("<" + a, "<" + b).replaceAll("</" + a, "</" + b);
      s = s.replace(
        'type="submit"\n',
        'type="submit" aria-label="Submit form"\n',
      );
      fs.writeFileSync(p, s);
    }
  }
}
walk("src");
const footerPath = 'src/components/layout/site-footer.tsx';
fs.writeFileSync(footerPath, fs.readFileSync(footerPath, 'utf8').replace(/ weight="[^"]*"/g, ''));
