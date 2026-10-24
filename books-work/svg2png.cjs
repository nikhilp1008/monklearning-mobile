// Turn the diagram dump's SVGs into PNGs (the cloud stand-in for macOS qlmanage).
// Usage: node books-work/svg2png.cjs <dir> [prefix]   → writes <file>.png beside each <file>.svg
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const [dir, prefix = ''] = process.argv.slice(2);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.svg') && f.startsWith(prefix));
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  for (const f of files) {
    const svg = fs.readFileSync(path.join(dir, f), 'utf8');
    await page.setContent(`<html><body style="margin:0;background:#fff">${svg}</body></html>`);
    const el = await page.$('svg');
    await el.screenshot({ path: path.join(dir, f.replace(/\.svg$/, '.png')) });
  }
  await browser.close();
  console.log(`${files.length} PNGs written`);
})();
