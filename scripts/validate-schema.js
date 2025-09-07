/* Minimal JSON-LD validator for local pages
   Usage: pnpm run schema:lint (ensure dev server running on :3000)
*/
import { JSDOM } from "jsdom";

const base = process.env.VALIDATE_BASE || "http://localhost:3000";
const paths = ["/", "/services", "/case-studies"];

async function getSchemas(path) {
  const res = await fetch(base + path);
  const html = await res.text();
  const dom = new JSDOM(html);
  const docs = Array.from(dom.window.document.querySelectorAll('script[type="application/ld+json"]'));
  return docs.map((n) => {
    try {
      return JSON.parse(n.textContent || "{}");
    } catch {
      return null;
    }
  }).filter(Boolean);
}

async function main() {
  let failures = 0;
  for (const p of paths) {
    const schemas = await getSchemas(p);
    if (!schemas.length) {
      console.warn(`[warn] ${p}: no JSON-LD found`);
      continue;
    }
    for (const s of schemas) {
      if (!s["@context"] || !s["@type"]) {
        failures++;
        console.error(`[error] ${p}: missing @context/@type in`, s);
      }
    }
    console.log(`[ok] ${p}: ${schemas.length} script(s)`);
  }
  if (failures) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

