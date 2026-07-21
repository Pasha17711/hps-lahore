const fs = require('fs');
const path = require('path');

const root = __dirname;
const output = path.join(root, 'dist');
const excluded = new Set(['dist', 'node_modules', '.git']);

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (excluded.has(entry.name)) continue;
  const source = path.join(root, entry.name);
  const target = path.join(output, entry.name);
  if (entry.isDirectory()) {
    fs.cpSync(source, target, { recursive: true });
  } else {
    fs.copyFileSync(source, target);
  }
}

const encodedPath = path.join(root, 'images', 'hero-approved.b64');
const imagePath = path.join(output, 'images', 'hero-approved.webp');
const encoded = fs.readFileSync(encodedPath, 'utf8').trim();
fs.mkdirSync(path.dirname(imagePath), { recursive: true });
fs.writeFileSync(imagePath, Buffer.from(encoded, 'base64'));

console.log(`Built static site in ${output}`);
console.log(`Decoded hero image to ${imagePath}`);
