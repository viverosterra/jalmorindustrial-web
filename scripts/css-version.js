// Pone el hash de css/site.css en el <link> de cada página (?v=xxxxxxxx) para romper la caché tras cada build.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const DIRS = ['.', 'blog', 'costa-afuera', 'alimentacion-y-hoteleria', 'en'];
const LINK_RE = /href="\/css\/site\.css(\?v=[0-9a-f]+)?"/g;

const css = fs.readFileSync(path.join(ROOT, 'css/site.css'));
const version = crypto.createHash('md5').update(css).digest('hex').slice(0, 8);

let updated = 0;
for (const dir of DIRS) {
  for (const name of fs.readdirSync(path.join(ROOT, dir))) {
    if (!name.endsWith('.html')) continue;
    const file = path.join(ROOT, dir, name);
    const html = fs.readFileSync(file, 'utf8');
    const next = html.replace(LINK_RE, `href="/css/site.css?v=${version}"`);
    if (next !== html) {
      fs.writeFileSync(file, next);
      updated += 1;
    }
  }
}
console.log(`css/site.css v=${version} (${css.length} bytes) · ${updated} páginas actualizadas`);
