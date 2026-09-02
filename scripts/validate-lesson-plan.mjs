#!/usr/bin/env node
/**
 * Enforces the visual-coverage rule mechanically.
 *
 *   node scripts/validate-lesson-plan.mjs <plan.json> [--registry <manifest.json>]
 *
 * "Every concept has an appropriate diagram" is not a prompting problem. A model
 * asked to "add a diagram where helpful" answers inconsistently across 40 sections
 * and leaves you no way to audit which calls it got wrong. This script turns the
 * question into a schema check against a human-owned taxonomy, so a missing
 * diagram fails the build instead of shipping.
 *
 * Exit 0 = plan is publishable. Exit 1 = errors. Warnings never fail the build.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const argv = process.argv.slice(2);
const planPath = argv.find((a) => !a.startsWith('--'));
const registryPath =
  argv.includes('--registry') ? argv[argv.indexOf('--registry') + 1] : null;
// Was hard-coded to content/concept-types.seed.json relative to this script's
// own directory — "put this file exactly here or the build breaks" is a trap
// for whoever moves it. Default preserved so every existing invocation still
// works; --taxonomy lets a caller point elsewhere without editing the script.
const taxonomyPath =
  argv.includes('--taxonomy')
    ? argv[argv.indexOf('--taxonomy') + 1]
    : resolve(root, 'content/concept-types.seed.json');

if (!planPath) {
  console.error(
    'usage: validate-lesson-plan.mjs <plan.json> [--registry <manifest.json>] [--taxonomy <concept-types.json>]'
  );
  process.exit(2);
}

const taxonomy = JSON.parse(readFileSync(resolve(process.cwd(), taxonomyPath), 'utf8'));
const TYPES = new Map(taxonomy.concept_types.map((t) => [t.id, t]));

/** Widgets the client can actually render. Export this from lib/widgets/registry.ts. */
const REGISTRY = new Set(
  registryPath
    ? JSON.parse(readFileSync(resolve(process.cwd(), registryPath), 'utf8')).map(
        (m) => `${m.id}@${m.version}`
      )
    : ['projectile_motion@1', 'molecule_3d@1']
);

/** Per-subject segment bands. Calibrate against your own corpus; see docs/visual-grammar.md §6. */
const BANDS = {
  'physics.mechanics': [6, 10],
  'physics.optics': [6, 10],
  'physics.modern': [5, 8],
  'physics.thermo': [5, 8],
  'maths.algebra': [5, 9],
  'maths.calculus': [5, 9],
  'chemistry.physical': [5, 8],
  'chemistry.organic': [8, 14],
  'chemistry.inorganic': [4, 8],
  biology: [6, 12],
  default: [4, 14],
};

const errors = [];
const warnings = [];
const stats = { segments: 0, withVisual: 0, waived: 0, gapTier3: 0 };

const plan = JSON.parse(readFileSync(resolve(process.cwd(), planPath), 'utf8'));

/* ------------------------------------------------------------------ concept */

if (!plan.concept_id) errors.push('plan.concept_id is required');
if (!Array.isArray(plan.segments) || plan.segments.length === 0) {
  errors.push('plan.segments must be a non-empty array');
}

const band = BANDS[plan.syllabus_area] ?? BANDS.default;
if (Array.isArray(plan.segments)) {
  const n = plan.segments.length;
  if (n < band[0] || n > band[1]) {
    warnings.push(
      `segment count ${n} is outside the ${plan.syllabus_area ?? 'default'} band ${band[0]}-${band[1]} — justify it in plan.pacing_note or re-decompose`
    );
  }
  if (n > band[1] && !plan.pacing_note) {
    errors.push(`segment count ${n} exceeds the band maximum ${band[1]} with no pacing_note`);
  }
}

/* ----------------------------------------------------------------- segments */

for (const [i, seg] of (plan.segments ?? []).entries()) {
  const at = `segments[${i}]${seg.title ? ` "${seg.title}"` : ''}`;
  stats.segments++;

  if (!seg.concept_type) {
    errors.push(`${at}: concept_type is required`);
    continue;
  }
  const type = TYPES.get(seg.concept_type);
  if (!type) {
    errors.push(`${at}: unknown concept_type "${seg.concept_type}" — add it to the taxonomy first`);
    continue;
  }

  if (!Array.isArray(seg.objectives) || seg.objectives.length === 0) {
    errors.push(`${at}: at least one objective is required`);
  } else if (seg.objectives.length > 2) {
    warnings.push(
      `${at}: ${seg.objectives.length} objectives — segments carrying more than two tend to want splitting`
    );
  }

  const turns = seg.turns ?? 3;
  if (turns < 2 || turns > 4) {
    errors.push(`${at}: turns must be 2-4 (got ${turns})`);
  }

  const v = seg.visual ?? null;
  const policy = type.policy;

  if (policy === 'prohibited') {
    if (v && v.widget) {
      errors.push(
        `${at}: concept_type "${type.id}" is policy=prohibited but declares widget "${v.widget}"`
      );
    }
    continue;
  }

  if (!v || !v.widget) {
    if (policy === 'required') {
      errors.push(
        `${at}: concept_type "${type.id}" is policy=required and declares no widget` +
          (type.widgets.length
            ? ` — eligible: ${type.widgets.join(', ')}`
            : ' — and the taxonomy lists no widget for it, so this is a REGISTRY GAP: build the widget or re-scope the segment')
      );
    } else if (policy === 'expected') {
      if (!v || !v.waiver) {
        errors.push(`${at}: policy=expected requires either a widget or visual.waiver with a reason`);
      } else {
        stats.waived++;
        warnings.push(`${at}: visual waived — "${v.waiver}"`);
      }
    }
    continue;
  }

  stats.withVisual++;

  if (type.widgets.length && !type.widgets.includes(v.widget)) {
    warnings.push(
      `${at}: widget "${v.widget}" is not among the taxonomy's eligible widgets (${type.widgets.join(', ')}) — intentional?`
    );
  }
  if (!REGISTRY.has(v.widget)) {
    stats.gapTier3++;
    errors.push(
      `${at}: widget "${v.widget}" is not in the client registry — this segment would render as tier-3 fallback SVG`
    );
  }
  if (v.params === undefined) {
    warnings.push(`${at}: no params yet (fine at plan time; pass B must fill them)`);
  }
}

/* ------------------------------------------------------------------- report */

const pct = stats.segments ? Math.round((stats.withVisual / stats.segments) * 100) : 0;
console.log(`\n  ${plan.concept_id ?? '(no concept_id)'}  ·  ${plan.syllabus_area ?? 'unscoped'}`);
console.log(`  ${stats.segments} segments · ${stats.withVisual} with a diagram (${pct}%) · ${stats.waived} waived\n`);

for (const w of warnings) console.log(`  warn   ${w}`);
if (warnings.length) console.log('');
for (const e of errors) console.log(`  ERROR  ${e}`);

if (errors.length) {
  console.log(`\n  ${errors.length} error(s). Plan is not publishable.\n`);
  process.exit(1);
}
console.log(`  OK — plan is publishable.\n`);
