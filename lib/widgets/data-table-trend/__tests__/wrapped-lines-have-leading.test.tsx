/**
 * THE TWO LINES OF A WRAPPED CELL MUST NOT SIT ON EACH OTHER.
 *
 * Wrapped lines were placed one FONT SIZE apart — zero leading. The gate
 * models a line as 1.15 of the size tall, so the two lines of every wrapped
 * cell overlapped by 1.8pt: "labels collide: "Crustose" and "lichen"" on the
 * stored hydrarch and xerarch tables at 340 and 343 wide, where cells wrap.
 * comparison_table had the same defect and fixed it with LINE_LEADING = 1.2.
 *
 * The header had it twice over. Its second line sat 1.2pt above the header
 * rule, so descenders touched it, and its first line reached up into the
 * readout ("Common" collides with "Trends in the Taxonomic Hierarchy").
 *
 * Checked with the REAL scripts/verify-render.mjs, not a copy of its rules,
 * on stored payloads the server authored — plus the rule, which the gate
 * cannot see because it only checks text against text.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

import { dataTableTrend } from '../index';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const ROOT = resolve(__dirname, '../../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'dtt-leading-'));
const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

const CASES = {
  // aa1f948f:5 — six rows; ten of twelve cells wrap at 340 and 343.
  hydrarch: {
    unit: '', caption: 'Hydrarch seral stages: pond to forest', cell_kind: 'categorical',
    trend_col: 0, col_labels: ['Community', 'Examples'],
    row_labels: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'],
    text_values: ['Phytoplankton', 'Diatoms, algae', 'Submerged rooted', 'Hydrilla, etc.',
      'Free-floating', 'Wolffia, Lemna', 'Reed-swamp', 'Sagittaria', 'Mesic herbs/shrubs',
      'Grasses, shrubs', 'Climax forest', 'Terrestrial forest'],
    highlight_row: 0,
  },
  // dbc76ce0:5 — seven rows, both column labels wrap.
  hierarchy: {
    unit: '', caption: 'Trends in the Taxonomic Hierarchy', cell_kind: 'categorical',
    trend_col: 0, col_labels: ['Common Characters', 'Number of Organisms'],
    row_labels: ['Species', 'Genus', 'Family', 'Order', 'Class', 'Phylum/Division', 'Kingdom'],
    text_values: ['Most', 'Smallest', 'Many', 'Small', 'Moderate', 'Moderate', 'Fewer',
      'Large', 'Few', 'Larger', 'Very Few', 'Very Large', 'Least', 'Largest'],
    highlight_row: -1,
  },
  // f5e2af85:3 — three columns: labels AND cells wrap, and wrap at 495 too.
  discontinuity: {
    unit: '', caption: 'Discontinuity types by limit behavior', cell_kind: 'categorical',
    trend_col: 0, col_labels: ['LHL vs RHL', 'f(c) status', 'Graph feature'],
    row_labels: ['Jump', 'Removable', 'Infinite'],
    text_values: ['LHL ≠ RHL', 'f(c) any', 'step / gap', 'LHL = RHL', 'f(c) ≠ limit', 'hole',
      '≥1 infinite', 'f(c) undef/inf', 'vert. asymptote'],
    highlight_row: -1,
  },
};

interface El { type: string; props: Record<string, unknown>; children?: unknown }

function walk(n: unknown, out: El[] = []): El[] {
  if (!n || typeof n !== 'object') return out;
  if (Array.isArray(n)) { n.forEach((x) => walk(x, out)); return out; }
  const el = n as El;
  out.push(el);
  walk(el.children, out);
  return out;
}

const num = (v: unknown) => Number(Array.isArray(v) ? v[0] : v);

describe.each(Object.keys(CASES) as (keyof typeof CASES)[])('%s', (name) => {
  test.each(GATE_FRAMES)('%ix%i passes the real gate', (w, h) => {
    const v = dataTableTrend.validate(CASES[name]);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const f = join(dir, `${name}-${w}x${h}.json`);
    writeFileSync(f, JSON.stringify(renderWidgetTreeAt(dataTableTrend, v.params, {}, w, h)));
    const r = spawnSync('node', [GATE, f, '--w', String(w), '--h', String(h)],
      { cwd: ROOT, encoding: 'utf8' });
    if (r.status !== 0) throw new Error(`${name} ${w}x${h}:\n${r.stdout}${r.stderr}`);
  });

  test.each(GATE_FRAMES)('%ix%i: every header line clears the header rule', (w, h) => {
    const v = dataTableTrend.validate(CASES[name]);
    if (!v.ok) throw new Error('fixture invalid');
    const els = walk(renderWidgetTreeAt(dataTableTrend, v.params, {}, w, h));
    // Header labels are the text drawn BEFORE the first rule, which is the
    // header rule; the second is the bottom rule.
    const ruleAt = els.findIndex((e) => e.type === 'RNSVGLine');
    const rule = els[ruleAt];
    const header = els.slice(0, ruleAt).filter((e) => e.type === 'RNSVGText');
    expect(header.length).toBeGreaterThanOrEqual(CASES[name].col_labels.length);
    for (const t of header) {
      const size = ((t.props.font ?? {}) as { fontSize?: number }).fontSize ?? 12;
      // verify-render's box reaches 1.15 - 0.82 of the size below the baseline.
      expect(num(t.props.y) + (1.15 - 0.82) * size)
        .toBeLessThanOrEqual(num(rule.props.y1) - num(rule.props.strokeWidth) / 2);
    }
  });
});
