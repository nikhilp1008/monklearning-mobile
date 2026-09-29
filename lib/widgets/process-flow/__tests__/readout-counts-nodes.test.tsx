/**
 * THE READOUT'S "N STEPS" COUNTS STEPS, AND A STEP IS A NODE.
 *
 * `ProcessFlowParams.nodes` is "One label per step", but the readout printed
 * `stepCount` — the ARROWS. So an open chain of five processes read
 * "4 steps · open" beside its own caption "Five steps of decomposition in
 * order" (645cf0f8:8), and every open chain under-reported by one.
 *
 * A closed loop is where the two counts agree: its return edge is the n-th
 * arrow. Those readouts must not change, and the rings and closed chains
 * below pin that.
 *
 * `stepCount` itself is untouched — it is a derived value, it means directed
 * edges, and physics.test.ts holds it to NCERT (glycolysis: 10 nodes, 9).
 */
import { processFlow } from '../index';
import { derive, type ProcessFlowParams } from '../flow-math';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

interface El { type: string; props: Record<string, unknown>; children?: unknown }

function walk(n: unknown, out: El[] = []): El[] {
  if (!n || typeof n !== 'object') return out;
  if (Array.isArray(n)) { n.forEach((x) => walk(x, out)); return out; }
  const el = n as El;
  out.push(el);
  walk(el.children, out);
  return out;
}

/** The readout is the one 14pt line; node labels are 12. */
function readout(p: unknown, w: number, h: number): string {
  const v = processFlow.validate(p);
  if (!v.ok) throw new Error(v.errors.join('; '));
  const els = walk(renderWidgetTreeAt(processFlow, v.params, {}, w, h));
  const line = els.find((e) => e.type === 'RNSVGText'
    && ((e.props.font ?? {}) as { fontSize?: number }).fontSize === 14);
  if (!line) throw new Error('no readout');
  return walk(line.children)
    .map((e) => (typeof e.props?.content === 'string' ? e.props.content : ''))
    .join('');
}

const DECOMPOSITION = {   // 645cf0f8:8, as stored
  nodes: ['Fragmentation', 'Leaching', 'Catabolism', 'Humification', 'Mineralisation'],
  closes: false, layout: 'chain', caption: 'Five steps of decomposition in order',
  branch_at: -1, active_node: -1,
};

test.each([
  ['an open chain of five', DECOMPOSITION, '5 steps · open'],
  ['a closed chain of four (b97e8ea8:7)', {
    nodes: ['Rock (phosphate)', 'Soil', 'Biota', 'Sediment'], closes: true, layout: 'chain',
    caption: 'Phosphorus: a closed sedimentary loop', branch_at: -1, active_node: -1,
  }, '4 steps · closed loop'],
  ['a ring of six (b5ef88c9:7)', {
    nodes: ['Atmosphere (CO2)', 'Producers', 'Consumers', 'Decomposers', 'Fossil fuels',
      'Oceans (sink)'], closes: true, layout: 'ring', branch_at: -1, active_node: -1,
  }, '6 steps · closed loop'],
  ['the default Krebs ring of eight', processFlow.defaults, '8 steps · closed loop'],
  ['an open chain with a branch', {
    nodes: ['Living organisms', 'Dead matter', 'Decomposers', 'Respiration', 'CO2 to air'],
    closes: false, layout: 'chain', caption: 'Two routes back to the air',
    branch_at: 0, active_node: -1,
  }, '5 steps · open · 1 branch'],
])('%s reads %p', (_name, payload, value) => {
  // 900 wide has room for caption and value; 343 cuts the caption, never the value.
  const wide = readout(payload, 900, 430);
  const small = readout(payload, 343, 236);
  expect(wide.endsWith(value)).toBe(true);
  expect(small.endsWith(value)).toBe(true);
});

test('the caption and the count agree where the caption says how many', () => {
  expect(readout(DECOMPOSITION, 900, 430))
    .toBe('Five steps of decomposition in order   5 steps · open');
});

test('stepCount still counts arrows, for the captions that count arrows', () => {
  const p = processFlow.validate(DECOMPOSITION);
  if (!p.ok) throw new Error('fixture invalid');
  const d = derive(p.params as ProcessFlowParams);
  expect(d.nodeCount).toBe(5);
  expect(d.stepCount).toBe(4);
});
