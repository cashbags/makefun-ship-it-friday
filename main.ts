import { mkdirSync, writeFileSync } from "node:fs";
const ENTRY = "docs: published Friday's README to prod, it renders beautifully over the outage page — ship it, it's Friday";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", ENTRY, "utf8");
