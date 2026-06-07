import { copyFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

// Possible locations for the pdf.worker (npm may hoist differently on CI vs local)
const candidates = [
  join(root, "node_modules", "react-pdf", "node_modules", "pdfjs-dist", "build", "pdf.worker.min.mjs"),
  join(root, "node_modules", "pdfjs-dist", "build", "pdf.worker.min.mjs"),
];

// Also search for any pdfjs-dist inside react-pdf's tree (handles version bumps)
try {
  const rpModules = join(root, "node_modules", "react-pdf", "node_modules");
  if (existsSync(rpModules)) {
    for (const name of readdirSync(rpModules)) {
      if (name.startsWith("pdfjs-dist")) {
        candidates.unshift(join(rpModules, name, "build", "pdf.worker.min.mjs"));
      }
    }
  }
} catch {}

let src = null;
for (const c of candidates) {
  if (existsSync(c)) {
    src = c;
    break;
  }
}

if (!src) {
  console.error("ERROR: Could not find pdf.worker.min.mjs in any of:");
  candidates.forEach((c) => console.error(`  - ${c}`));
  process.exit(1);
}

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const dest = join(publicDir, "pdf.worker.min.mjs");

console.log("Copying PDF.js worker...");
console.log(`  from: ${src}`);
console.log(`  to:   ${dest}`);
copyFileSync(src, dest);
console.log("Done.");
