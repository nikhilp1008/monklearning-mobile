/**
 * A WRAPPED COLUMN LABEL SITS ABOVE THE HEADER RULE, NOT UNDER IT.
 *
 * The rule was drawn at `top + BAND_H` whatever the header held. A two-line
 * label is centred on the one-line baseline, so its lines land at 14.8 and
 * 29.2 — and the rule, at 28, went through the second one: "Ecosystem" over
 * a struck-through "services". The 2026-09-29 review of the stored payloads in
 * adopted chapters found it on 15 of 39 tables, at every frame.
 *
 * verify-render cannot see this. Its overlap check is text against text, and
 * a rule is a Line. So this uses the gate's own text box — 0.82 of the size
 * above the baseline, 1.15 of it tall — and checks that box against the rule.
 */
import { comparisonTable, validate } from '../index';
import { BAND_H, CAPTION_SIZE, GUTTER, layoutTable } from '../table-layout';
import { PAD_EDGE } from '../../chrome';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

/** verify-render.mjs's text box, as fractions of the font size. */
const ABOVE = 0.82;
const BELOW = 1.15 - 0.82;

// Stored payloads, as the server authored them.
const ECOSYSTEM = {   // c8f327b8:4 — one label wraps
  kind: 'comparison',
  rows: ['Annual value', 'Nature'],
  cells: ['US $33 trillion', 'US $18 trillion', 'Non-market gift', 'Measured GDP'],
  caption: 'Costanza valuation vs global GNP',
  columns: ['Ecosystem services', 'Global GNP'],
  highlight: null,
};
const DIGITS = {      // 65b4543d:3 — four rows AND both labels wrap: the tallest case
  kind: 'comparison',
  rows: ['What they carry', 'Position rule', 'Count in 0.00450', 'Status change'],
  cells: ['real precision', 'only fixes decimal', '4, 5, trailing 0',
    'never becomes place-holder', 'no precision', 'left of 1st nonzero',
    'three leading zeros', 'can become load-bearing'],
  caption: 'Load-bearing vs scaffolding digits',
  columns: ['Load-bearing (significant)', 'Scaffolding (placeholder)'],
  highlight: null,
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

function parts(tree: unknown) {
  const els = walk(tree);
  const texts = els.filter((e) => e.type === 'RNSVGText').map((e) => {
    const font = (e.props.font ?? {}) as { fontSize?: number; fontWeight?: string };
    return { y: num(e.props.y), size: font.fontSize ?? 12, bold: font.fontWeight === '700' };
  });
  // The header rule is the first Line drawn; the row separators come after it.
  const rule = els.find((e) => e.type === 'RNSVGLine');
  if (!rule) throw new Error('no header rule in the tree');
  return {
    header: texts.filter((t) => t.bold),
    body: texts.filter((t) => !t.bold),
    ruleY: num(rule.props.y1),
    halfStroke: num(rule.props.strokeWidth) / 2,
  };
}

describe.each([
  ['one label wraps', ECOSYSTEM],
  ['four rows, both labels wrap', DIGITS],
])('%s', (_name, payload) => {
  test.each(GATE_FRAMES)('%ix%i: every header line is above the rule, every row below it', (w, h) => {
    const v = validate(payload);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const { header, body, ruleY, halfStroke } =
      parts(renderWidgetTreeAt(comparisonTable, v.params, {}, w, h));
    // Not vacuous: the header really did take two lines.
    expect(header.length).toBeGreaterThan(payload.columns.length);
    for (const t of header) {
      expect(t.y + BELOW * t.size).toBeLessThanOrEqual(ruleY - halfStroke);
    }
    for (const t of body) {
      expect(t.y - ABOVE * t.size).toBeGreaterThanOrEqual(ruleY + halfStroke);
    }
  });
});

describe('the band grows with the header, and only then', () => {
  test('a one-line header does not move', () => {
    // Every table whose labels fit one line draws exactly where it did.
    expect(layoutTable(3, 2, 343, 236).headerY).toBe(PAD_EDGE + BAND_H);
    expect(layoutTable(3, 2, 343, 236, 1).headerY).toBe(PAD_EDGE + BAND_H);
  });

  test('a two-line header moves the rule down, inside the height needH reserved', () => {
    const one = layoutTable(4, 2, 343, 236, 1);
    const two = layoutTable(4, 2, 343, 236, 2);
    expect(two.headerY).toBeGreaterThan(one.headerY);
    // needH is unchanged, so no payload that validated stops validating...
    expect(two.needH).toBe(one.needH);
    // ...and it is still an honest bound on what is drawn.
    expect(two.headerY + 4 * two.rowH + GUTTER + CAPTION_SIZE + PAD_EDGE)
      .toBeLessThanOrEqual(two.needH);
  });
});
