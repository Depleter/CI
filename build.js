import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(".");
const outputDirectory = resolve(root, "dist");
const files = [
  "index.html",
  "styles.css",
  "script.js",
  "healthCheck.js",
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(outputDirectory, file));
}

console.log(`Built ${files.length} files in ${outputDirectory}`);
