import fs from "node:fs";
import path from "node:path";
const valid = new Set([
  "/",
  "/about",
  "/attorneys",
  "/blog",
  "/contact",
  "/practice-areas",
  "/practice-areas/corporate-law",
]);
const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) files.push(p);
  }
}
walk("src");
for (const p of files) {
  let s = fs
    .readFileSync(p, "utf8")
    .replace(/href="(\/[^\"]*)"/g, (match, href) =>
      href.startsWith("/styles/") || valid.has(href.split("#")[0])
        ? match
        : `href="https://jurista-tambe.framer.website${href}"`,
    );
  s = s
    .replace(/import \{ ContactForm \}[^\n]+\n/g, (m) =>
      s.includes("<ContactForm") ? m : "",
    )
    .replace(/import \{ AccordionItem \}[^\n]+\n/g, (m) =>
      s.includes("<AccordionItem") ? m : "",
    );
  fs.writeFileSync(p, s);
}
const used = new Set();
function visit(file) {
  if (used.has(file) || !fs.existsSync(file)) return;
  used.add(file);
  const s = fs.readFileSync(file, "utf8");
  for (const m of s.matchAll(/from ['"]([^'"]+)['"]/g)) {
    let p;
    if (m[1].startsWith("@/")) p = "src/" + m[1].slice(2) + ".tsx";
    else if (m[1].startsWith("."))
      p = path.join(path.dirname(file), m[1] + ".tsx");
    if (p) visit(path.normalize(p));
  }
}
for (const f of files.filter((p) => p.startsWith(path.join("src", "app"))))
  visit(path.normalize(f));
let removed = 0;
for (const f of files.filter((p) =>
  p.startsWith(path.join("src", "components", "shared")),
)) {
  if (!used.has(path.normalize(f))) {
    fs.unlinkSync(f);
    removed++;
  }
}
console.log("Removed unused generated components:", removed);
