/**
 * ONE LAYOUT AUTHORITY, callable from anywhere.
 *
 *   node scripts/gate-label-set.mjs <set.json>          # human
 *   node scripts/gate-label-set.mjs <set.json> --json   # machine
 *
 * exit 0 = places clear at every frame, 1 = refused, 2 = could not judge.
 *
 * WHY THIS EXISTS
 * ===============
 * `gateLabelSet` is TypeScript and lives beside the renderer, which is correct:
 * whether a label places clear is a question only the layout engine can
 * answer, and a second implementation would drift from the first. But
 * `apply_review.py` publishes, and it is Python — so it had grown its own
 * hardcoded guesses about shape (no groups over five, and so on).
 *
 * That is two gates with no mechanism to agree, and it already cost something:
 * the frog heart's three-group split was confirmed and screenshotted on
 * 2026-09-11 and written only into the mobile PREVIEW fixture, so the draft
 * Python was about to publish had no groups at all. Python reported it READY;
 * the TypeScript gate would have refused it; it would have published cleanly
 * and then failed to draw on every phone frame.
 *
 * So the Python side stops judging layout and asks this instead, on the exact
 * bytes it is about to upload.
 *
 * WHAT IT DOES NOT DO. It does not validate licence, provenance, anchors
 * against the art, or reviewed_by. Those are `apply_review.py`'s job and it
 * keeps them. This answers exactly one question: does every group of this set
 * place clear at every gate frame?
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

/*
 * The layout modules are TypeScript and node cannot import them directly.
 * Rather than add a runtime dependency (tsx, esbuild) for one script, they are
 * transpiled with the `typescript` the repo already pins and cached under
 * build/. Type CHECKING is not repeated here — `npx tsc --noEmit` does that in
 * the suite; this only needs the JavaScript.
 */
function loadTs(relPaths) {
  const outDir = join(ROOT, 'build', 'gate-cli');
  mkdirSync(outDir, { recursive: true });
  const files = relPaths.map((r) => join(ROOT, r));
  const program = ts.createProgram(files, {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    outDir,
    rootDir: ROOT,
    skipLibCheck: true,
    esModuleInterop: true,
    allowJs: true,
    resolveJsonModule: true,
    noEmitOnError: false,
  });
  program.emit();
  return outDir;
}

const OUT = loadTs([
  'lib/widgets/labelled-figure/figure-layout.ts',
  'lib/widgets/labelled-figure/label-set.ts',
]);

const { GATE_FRAMES, describeViolations, gateLabelSet } =
  await import(join(OUT, 'lib/widgets/labelled-figure/figure-layout.js'));
const { toFigureRecord, validateLabelSet } =
  await import(join(OUT, 'lib/widgets/labelled-figure/label-set.js'));

const [, , file, ...flags] = process.argv;
const asJson = flags.includes('--json');

if (!file) {
  console.error('usage: node scripts/gate-label-set.mjs <set.json> [--json]');
  process.exit(2);
}

function out(verdict, ok, extra = {}) {
  if (asJson) {
    console.log(JSON.stringify({ ok, verdict, frames: GATE_FRAMES.map((f) => `${f.w}x${f.h}`), ...extra }));
  } else {
    console.log(verdict);
  }
  process.exit(ok ? 0 : 1);
}

let raw;
try {
  raw = JSON.parse(readFileSync(file, 'utf8'));
} catch (e) {
  console.error(`could not read ${file}: ${e.message}`);
  process.exit(2);
}

/*
 * The set is validated with the CLIENT'S OWN validator before it is laid out.
 * A set that the resolver would reject has no meaningful layout verdict, and
 * reporting "places clear" for something that will never be drawn is the
 * false-confidence failure this whole gate exists to prevent.
 */
const checked = validateLabelSet(raw);
if (!checked.ok) {
  out(`refused by validateLabelSet: ${checked.errors.join('; ')}`, false,
      { stage: 'validate', errors: checked.errors });
}

const set = checked.set;
// `toFigureRecord` is what the widget actually draws from, so the gate runs on
// the converted record rather than on the wire format — the same bytes the
// board would see.
const record = toFigureRecord(set, 1);
const violations = gateLabelSet(record.labels, record.groups, record.art);
const verdict = describeViolations(violations);

out(verdict, violations.length === 0, {
  stage: 'layout',
  asset_slug: set.asset_slug,
  labels: record.labels.length,
  groups: record.groups.length,
  violations: violations.map((v) => ({
    group: v.group, frame: v.frame, reason: v.reason, labels: v.labels, detail: v.detail,
  })),
});
