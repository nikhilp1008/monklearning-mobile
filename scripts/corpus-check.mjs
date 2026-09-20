/**
 * The whole served corpus, laid out at both shipping frames, as JSON.
 *
 *   node scripts/corpus-check.mjs [--sets <served-sets.json>]
 *
 * Exists so `monk-learning-api/scripts/corpus_check.py` can assert on the
 * corpus from the API test suite without a second layout implementation in
 * Python — the same reason `gate-label-set.mjs` exists. Both are CLIs over
 * lib/widgets/labelled-figure; neither decides anything itself.
 *
 * Emits, per set: groups, labels, placed, expected, and — when the widget
 * refuses a label — the anchor pair and their measured separation, so the
 * Python side can check the reason and not merely the count.
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const FRAMES = [[343, 236], [702, 289]];

function loadTs(relPaths) {
  const outDir = join(ROOT, 'build', 'gate-cli');
  mkdirSync(outDir, { recursive: true });
  ts.createProgram(relPaths.map((r) => join(ROOT, r)), {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext, outDir, rootDir: ROOT,
    skipLibCheck: true, esModuleInterop: true, allowJs: true,
    resolveJsonModule: true, noEmitOnError: false,
  }).emit();
  return outDir;
}

const OUT = loadTs([
  'lib/widgets/labelled-figure/figure-layout.ts',
  'lib/widgets/labelled-figure/label-set.ts',
  'lib/widgets/labelled-figure/validate.ts',
  'lib/widgets/labelled-figure/gate.ts',
]);
const { layoutFigure } = await import(join(OUT, 'lib/widgets/labelled-figure/figure-layout.js'));
const { toFigureRecord } = await import(join(OUT, 'lib/widgets/labelled-figure/label-set.js'));
const { validate } = await import(join(OUT, 'lib/widgets/labelled-figure/validate.js'));

const argv = process.argv.slice(2);
const setsArg = argv.indexOf('--sets');
const SETS_PATH = setsArg >= 0
  ? argv[setsArg + 1]
  : join(ROOT, 'lib/widgets/labelled-figure/__tests__/served-sets.json');
const SERVED = JSON.parse(readFileSync(SETS_PATH, 'utf8'));

// The widget warns on every degraded label; the message carries the measured
// separation, which is the only place it exists. Capture rather than silence:
// a check that reports a count without a reason is the instrument that sent
// this corpus looking in the wrong place twice.
const warns = [];
const realWarn = console.warn;
console.warn = (...a) => { warns.push(a.join(' ')); };

const rows = [];
for (const [slug, raw] of Object.entries(SERVED)) {
  warns.length = 0;
  let rec = null;
  const why = [];
  try {
    rec = toFigureRecord(raw, `file:///${slug}.png`);
  } catch (e) {
    rows.push({ slug, groups: 0, labels: 0, placed: 0, expected: 0, dropped: [], gaps: [],
                why: [`toFigureRecord threw: ${String(e).slice(0, 120)}`] });
    continue;
  }
  let placed = 0;
  let expected = 0;
  const dropped = [];
  for (const g of rec.groups) {
    const want = rec.labels.filter((l) => l.group === g.id).length;
    const checked = validate({
      asset_slug: slug, art: rec.art, groups: rec.groups,
      labels: rec.labels, lang: 'english', active_group: g.id,
    });
    for (const [fw, fh] of FRAMES) {
      expected += want;
      if (!checked.ok) { if (why.length < 2) why.push(`${g.id}: ${checked.errors[0]}`); continue; }
      placed += layoutFigure(checked.params, fw, fh).labels.length;
    }
    if (checked.ok) {
      const kept = checked.params.labels.filter((l) => l.group === g.id);
      for (const l of rec.labels.filter((l) => l.group === g.id)) {
        if (!kept.some((k) => k.id === l.id)) dropped.push(l.id);
      }
    }
  }
  const gaps = [];
  for (const w of warns) {
    const m = w.matchAll(/anchors "([a-z0-9-]+)" and "([a-z0-9-]+)" are ([0-9.]+)pt apart/g);
    for (const [, a, b, pt] of m) gaps.push({ a, b, pt: Number(pt) });
  }
  rows.push({ slug, groups: rec.groups.length, labels: rec.labels.length,
              placed, expected, dropped: [...new Set(dropped)], gaps, why });
}

console.warn = realWarn;
const totals = {
  sets: rows.length,
  placed: rows.reduce((a, r) => a + r.placed, 0),
  expected: rows.reduce((a, r) => a + r.expected, 0),
  full: rows.filter((r) => r.placed === r.expected).length,
  short: rows.filter((r) => r.placed !== r.expected).length,
  dark: rows.filter((r) => r.placed === 0 && r.expected > 0).length,
};
console.log(JSON.stringify({ frames: FRAMES.map(([w, h]) => `${w}x${h}`), totals, rows }, null, 1));
