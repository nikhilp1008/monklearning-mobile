/**
 * A CUT READOUT ENDS ON A WHOLE WORD, AND SAYS IT WAS CUT.
 *
 * The categorical readout was `caption.slice(0, maxChars(...))`: at 340 and
 * 343 wide "Discontinuity types by limit behavior" drew as "Discontinuity
 * types by limit beha", and "Hydrarch seral stages: pond to forest" as
 * "…pond to fo" — half a word, reading as complete text. The numeric readout
 * never did this: it goes through `fitReadout`, which marks the cut with an
 * ellipsis. This makes the categorical one do the same, at a word boundary.
 */
import { dataTableTrend } from '../index';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

const CAPTION = 'Discontinuity types by limit behavior';
const PAYLOAD = {     // f5e2af85:3, as stored
  unit: '', caption: CAPTION, cell_kind: 'categorical', trend_col: 0,
  col_labels: ['LHL vs RHL', 'f(c) status', 'Graph feature'],
  row_labels: ['Jump', 'Removable', 'Infinite'],
  text_values: ['LHL ≠ RHL', 'f(c) any', 'step / gap', 'LHL = RHL', 'f(c) ≠ limit', 'hole',
    '≥1 infinite', 'f(c) undef/inf', 'vert. asymptote'],
  highlight_row: -1,
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

/** The readout is the one 14pt line; everything else on the board is 12. */
function readoutAt(w: number, h: number): string {
  const v = dataTableTrend.validate(PAYLOAD);
  if (!v.ok) throw new Error(v.errors.join('; '));
  const els = walk(renderWidgetTreeAt(dataTableTrend, v.params, {}, w, h));
  const line = els.find((e) => e.type === 'RNSVGText'
    && ((e.props.font ?? {}) as { fontSize?: number }).fontSize === 14);
  if (!line) throw new Error('no readout');
  return walk(line.children)
    .map((e) => (typeof e.props?.content === 'string' ? e.props.content : ''))
    .join('');
}

test.each(GATE_FRAMES)('%ix%i: the caption whole, or whole words and "…"', (w, h) => {
  const shown = readoutAt(w, h);
  if (shown === CAPTION) return;
  expect(shown.endsWith('…')).toBe(true);
  const kept = shown.slice(0, -1);
  expect(kept.length).toBeGreaterThan(0);
  expect(CAPTION.startsWith(kept)).toBe(true);
  expect(CAPTION[kept.length]).toBe(' ');     // the cut fell between two words
});

test('it is not vacuous: the small boards cut, the wide one does not', () => {
  expect(readoutAt(343, 236)).toBe('Discontinuity types by limit…');
  expect(readoutAt(340, 340)).toBe('Discontinuity types by limit…');
  expect(readoutAt(900, 430)).toBe(CAPTION);
});
