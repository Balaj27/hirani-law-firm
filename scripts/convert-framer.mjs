import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { parseDocument } from "htmlparser2";
const walk = (n, f) => {
  f(n);
  n.children?.forEach((c) => walk(c, f));
};
const find = (n, f) => {
  let out;
  walk(n, (x) => {
    if (!out && f(x)) out = x;
  });
  return out;
};
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
};
const configs = [
  ["home.html", "home", "/"],
  ["about.html", "about", "/about"],
  ["practice-areas.html", "practice-areas", "/practice-areas"],
  [
    "inner-practice-area.html",
    "practice-detail",
    "/practice-areas/corporate-law",
  ],
  ["Attorneys.html", "attorneys", "/attorneys"],
  ["blog.html", "blog", "/blog"],
  ["contact.html", "contact", "/contact"],
];
const aliases = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  fetchpriority: "fetchPriority",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  autofocus: "autoFocus",
  autocomplete: "autoComplete",
  colspan: "colSpan",
  rowspan: "rowSpan",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  playsinline: "playsInline",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  referrerpolicy: "referrerPolicy",
};
const bools = new Set([
  "required",
  "disabled",
  "checked",
  "selected",
  "multiple",
  "muted",
  "autoplay",
  "loop",
  "controls",
  "playsinline",
  "readonly",
  "autofocus",
  "hidden",
]);
const voids = new Set([
  "img",
  "input",
  "br",
  "hr",
  "area",
  "base",
  "embed",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
  "col",
  "param",
]);
function style(s) {
  const out = {};
  for (const piece of s.split(";")) {
    const p = piece.indexOf(":");
    if (p < 0) continue;
    let k = piece.slice(0, p).trim();
    let v = piece.slice(p + 1).trim();
    if (!k) continue;
    if (!k.startsWith("--"))
      k = k.replace(/-([a-z])/g, (_, a) => a.toUpperCase());
    out[k] = v;
  }
  if (out.opacity === "0") {
    out.opacity = "1";
    if (out.transform) out.transform = "none";
  }
  delete out.willChange;
  return out;
}
const shared = new Map(),
  counts = new Map();
let current;
function props(n) {
  const route = n._route || current.route;
  let out = "";
  for (let [k, v] of Object.entries(n.attribs || {})) {
    if (
      k.startsWith("on") ||
      k === "data-framer-hydrate-v2" ||
      k === "data-framer-appear-id" ||
      k === "data-framer-root" ||
      k === "data-framer-form-hydrated" ||
      k === "data-framer-page-link-current"
    )
      continue;
    if (k === "href" && v.startsWith("."))
      v =
        new URL(v, "https://local.test" + (route === "/" ? "/" : route))
          .pathname + new URL(v, "https://local.test" + route).hash;
    if (k === "href" && v.includes(":avUH"))
      v = "/practice-areas/corporate-law";
    if (k === "style") {
      out += " style={" + JSON.stringify(style(v)) + "}";
      continue;
    }
    if (k === "checked") k = "defaultChecked";
    if (k === "value" && ["input", "select", "textarea"].includes(n.name))
      k = "defaultValue";
    if (k === "selected") continue;
    if (k === "autoplay") k = "autoPlay";
    else
      k =
        aliases[k] ||
        (k.includes("-") && !k.startsWith("data-") && !k.startsWith("aria-")
          ? k.replace(/-([a-z])/g, (_, a) => a.toUpperCase())
          : k);
    if (bools.has(k.toLowerCase()) || k === "defaultChecked")
      out += " " + k + "={true}";
    else out += " " + k + "=" + JSON.stringify(v);
  }
  return out;
}
function jsx(n, level = 0, useShared = true) {
  if (!useShared) n._route = current.route;
  if (useShared && shared.has(n._hash))
    return "<" + shared.get(n._hash).name + " />";
  if (n.type === "text")
    return n.data.trim() ? "{" + JSON.stringify(n.data) + "}" : "";
  if (n.type !== "tag") return "";
  if (["script", "style", "iframe"].includes(n.name)) return "";
  let tag = n.name;
  if (tag === "form") tag = "ContactForm";
  const children = (n.children || [])
    .map((c) => jsx(c, level + 1, useShared))
    .join("");
  const s =
    "<" +
    tag +
    props(n) +
    (voids.has(tag) ? " />" : ">" + children + "</" + tag + ">");
  const hash = createHash("sha1").update(s).digest("hex");
  n._hash = hash;
  if (!useShared) {
    if (s.length > 650 && s.length < 90000)
      counts.set(hash, {
        count: (counts.get(hash)?.count || 0) + 1,
        node: n,
        source: s,
      });
    return s;
  }
  if (shared.has(hash)) return "<" + shared.get(hash).name + " />";
  return s;
}
const pages = configs.map(([file, id, route]) => {
  const doc = parseDocument(fs.readFileSync("inspo/" + file, "utf8"), {
    decodeEntities: true,
  });
  const main = find(doc, (n) => n.attribs?.id === "main");
  const root = find(main, (n) => n.attribs?.["data-framer-root"] !== undefined);
  const layout = main.children.find((n) => n.type === "tag");
  const content = find(root, (n) => n.name === "main");
  const svg = find(doc, (n) => n.attribs?.id === "svg-templates");
  const css = [];
  walk(doc, (n) => {
    if (
      n.name === "style" &&
      (n.attribs["data-framer-font-css"] !== undefined ||
        n.attribs["data-framer-css-ssr-minified"] !== undefined)
    )
      css.push(n.children.map((c) => c.data || "").join(""));
  });
  return {
    file,
    id,
    route,
    doc,
    main,
    root,
    layout,
    content,
    svg,
    css: css.join("\n"),
  };
});
for (const page of pages) {
  walk(page.root, (n) => {
    if (n.type !== "tag") return;
    const q = n.children?.find(
      (c) => c.attribs?.["data-framer-name"] === "Question",
    );
    if (!q) return;
    let text = "";
    walk(q, (c) => {
      if (c.type === "text") text += c.data;
    });
    const answer = n.children.find(
      (c) => c.attribs?.["data-framer-name"] === "Answer",
    );
    n.name = "AccordionItem";
    n.attribs.question = text.trim();
    n.attribs.initialOpen = answer ? "true" : "false";
    n.children = answer ? [answer] : [];
  });
  current = page;
  jsx(page.root, 0, false);
}
const names = new Set();
for (const [hash, item] of [...counts].sort(
  (a, b) => b[1].source.length - a[1].source.length,
)) {
  if (item.count < 2) continue;
  let name = (
    item.node.attribs["data-framer-name"] ||
    (item.node.name === "footer" && "Footer") ||
    "SharedBlock"
  )
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
  if (!/^[A-Z]/.test(name)) name = "Shared" + name;
  const base = name;
  let i = 2;
  while (names.has(name)) name = base + i++;
  names.add(name);
  shared.set(hash, { ...item, name });
}
const imports = `import { AccordionItem } from '@/components/ui/accordion-item';
import { ContactForm } from '@/components/ui/contact-form';\n`;
for (const [hash, item] of [...shared]) {
  current = pages[0];
  shared.delete(hash);
  const source = jsx(item.node);
  shared.set(hash, item);
  const used = [...shared.values()].filter((x) =>
    source.includes("<" + x.name + " "),
  );
  write(
    "src/components/shared/" + item.name + ".tsx",
    imports +
      used.map((x) => `import { ${x.name} } from './${x.name}';`).join("\n") +
      `\nexport function ${item.name}(){return (${source});}\n`,
  );
}
const manifest = [];
for (const page of pages) {
  current = page;
  let idx = 0;
  const sectionImports = [],
    sectionCalls = [];
  for (const section of page.content.children.filter((n) => n.type === "tag")) {
    const name =
      (section.attribs["data-framer-name"] || "Section").replace(
        /[^a-zA-Z0-9]/g,
        "",
      ) + ++idx;
    const source = jsx(section);
    const used = [...shared.values()].filter((x) =>
      source.includes("<" + x.name + " "),
    );
    write(
      `src/components/pages/${page.id}/${name}.tsx`,
      imports +
        used
          .map(
            (x) => `import { ${x.name} } from '@/components/shared/${x.name}';`,
          )
          .join("\n") +
        `\nexport function ${name}(){return (${source});}\n`,
    );
    sectionImports.push(
      `import { ${name} } from '@/components/pages/${page.id}/${name}';`,
    );
    sectionCalls.push("<" + name + " />");
  }
  const footer = page.root.children
    .slice(page.root.children.indexOf(page.content) + 1)
    .filter((n) => n.type === "tag")
    .map((n) => jsx(n))
    .join("");
  const used = [...shared.values()].filter((x) =>
    footer.includes("<" + x.name + " "),
  );
  const source = `<div${props(page.layout)}><div${props(page.root)}><SiteHeader transparent={${page.id === "home"}} /><main${props(page.content)}>${sectionCalls.join("")}</main>${footer}</div></div>${page.svg ? jsx(page.svg) : ""}`;
  const route =
    page.route === "/" ? "src/app/page.tsx" : `src/app${page.route}/page.tsx`;
  write(
    route,
    `import { SiteHeader } from '@/components/layout/site-header';\n${imports}${sectionImports.join("\n")}\n${used.map((x) => `import { ${x.name} } from '@/components/shared/${x.name}';`).join("\n")}\nexport default function Page(){return (<><link rel="stylesheet" href="/styles/${page.id}.css" />${source}</>);}\n`,
  );
  write("public/styles/" + page.id + ".css", page.css);
  manifest.push({ id: page.id, route: page.route, sections: idx });
}
write("src/content/pages.json", JSON.stringify(manifest, null, 2));
console.log("Converted", manifest, "shared components", shared.size);

current = pages[0];
const footerNode = find(pages[0].doc, (n) => n.name === "footer");
const footerSource = jsx(footerNode);
const footerUsed = [...shared.values()].filter((x) =>
  footerSource.includes("<" + x.name + " "),
);
write(
  "src/components/layout/site-footer.tsx",
  imports +
    footerUsed
      .map((x) => `import { ${x.name} } from '@/components/shared/${x.name}';`)
      .join("\n") +
    `\nexport function SiteFooter(){return (${footerSource});}\n`,
);
for (const page of pages) {
  const p =
    page.route === "/" ? "src/app/page.tsx" : `src/app${page.route}/page.tsx`;
  let s = fs.readFileSync(p, "utf8");
  s = `import { SiteFooter } from '@/components/layout/site-footer';\n` + s;
  s = s.replace("</>);", "<SiteFooter /></>);");
  write(p, s);
}
