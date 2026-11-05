import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve(process.argv[2] || 'dist');
function allFiles(dir) { return readdirSync(dir, {withFileTypes:true}).flatMap(item => item.isDirectory() ? allFiles(resolve(dir,item.name)) : [resolve(dir,item.name)]); }
const files = allFiles(root), htmlFiles = files.filter(file => file.endsWith('.html'));
let checkedLinks = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file,'utf8');
  assert.match(html, /<html[^>]+lang=/, `Missing language: ${file}`);
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title: ${file}`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Expected one H1: ${file}`);
  assert(!/你的姓名|待补充|Your Name|ChickenDL|草稿|Draft website/.test(html), `Placeholder or outdated identity: ${file}`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate IDs: ${file}`);
  for (const match of html.matchAll(/aria-labelledby="([^"]+)"/g)) for (const id of match[1].split(' ')) assert(ids.includes(id), `Broken aria reference ${id} in ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replace(/&amp;/g,'&');
    if (/^(?:https?:|mailto:|data:|tel:)/.test(url)) continue;
    const [pathnameAndQuery, hash] = url.split('#');
    const pathname = decodeURIComponent(pathnameAndQuery.split('?')[0]);
    let target = pathname ? pathname.startsWith('/') ? resolve(root, '.' + pathname) : resolve(dirname(file), pathname) : file;
    if (pathname.endsWith('/')) target = resolve(target,'index.html');
    assert(existsSync(target), `Missing local resource ${url} in ${file}`);
    if (hash && target.endsWith('.html')) assert(readFileSync(target,'utf8').includes(`id="${decodeURIComponent(hash)}"`), `Missing anchor ${url} in ${file}`);
    checkedLinks++;
  }
}
for (const lang of ['zh','en']) for (const page of ['','research','publications','experience']) {
  const file = resolve(root,lang,page,'index.html'); assert(existsSync(file));
  const html = readFileSync(file,'utf8');
  assert.match(html, /rel="canonical"/); assert.match(html, /hreflang="zh-CN"/); assert.match(html, /hreflang="en"/);
  assert.match(html, /南开大学|Nankai University/);
}
const bib = readFileSync(resolve(root,'publications.bib'),'utf8');
assert.equal((bib.match(/@(?:article|inproceedings)\{/g) || []).length, 3);
assert.match(bib,/2650009/); assert.match(bib,/9631--9644/);
console.log(`PASS: ${htmlFiles.length} HTML pages, ${checkedLinks} internal references, 8 localized routes, and 3 bibliography records.`);
