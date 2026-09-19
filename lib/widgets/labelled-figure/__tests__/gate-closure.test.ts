/**
 * The gate must refuse a set whose labels can never be drawn.
 *
 * `gateLabelSet` loops over GROUPS. So until 2026-09-18 a label belonging to no
 * group was never iterated, and an empty group hit a bare `continue` — a set
 * with `groups: []` produced ZERO violations and was reported CLEAR.
 *
 * That is how 45 of 116 published sets shipped with 140 labels that could never
 * appear. The Taenia's own groupless JSON is the fixture below: it passed this
 * gate at all five frames, passed the publish gate, verified byte-for-byte
 * against R2, and drew a plate with nothing on it.
 */
import { gateLabelSet } from '../figure-layout';
import { labelledFigure } from '../index';
import type { FigureArt, FigureGroup, LabelRecord } from '../figure-layout';

const ART = (labelledFigure.defaults as { art: FigureArt }).art;

/** The Taenia exactly as it was published: five labels, no groups. */
const TAENIA_LABELS = [
  ['scolex', 0.2224, 0.2349], ['hook', 0.2253, 0.1256],
  ['sucker', 0.2326, 0.1488], ['neck', 0.2653, 0.2733],
  ['proglottid', 0.3634, 0.3465],
].map(([id, u, v]) => ({
  id: id as string, term: { english: id as string, hinglish: id as string },
  anchor: { u: u as number, v: v as number }, side: 'left',
})) as unknown as LabelRecord[];

const ONE_GROUP: FigureGroup[] = [
  { id: 'all', label: { english: '', hinglish: '' } },
];

test("the Taenia's original groupless JSON is refused BY THE GATE", () => {
  const v = gateLabelSet(TAENIA_LABELS, [], ART);
  expect(v.length).toBeGreaterThan(0);
  expect(v.some((x) => x.reason === 'no-group')).toBe(true);
  expect(JSON.stringify(v)).toContain('scolex');
});

test('the same labels WITH one group pass', () => {
  const labelled = TAENIA_LABELS.map((l) => ({ ...l, group: 'all' }));
  expect(gateLabelSet(labelled as LabelRecord[], ONE_GROUP, ART)).toEqual([]);
});

test('a label in a group the set does not declare is refused', () => {
  const labelled = TAENIA_LABELS.map((l, i) => ({ ...l, group: i === 0 ? 'ghost' : 'all' }));
  const v = gateLabelSet(labelled as LabelRecord[], ONE_GROUP, ART);
  expect(v.some((x) => x.reason === 'no-group' && x.labels.includes('scolex'))).toBe(true);
});

test('an empty group is refused rather than skipped', () => {
  const labelled = TAENIA_LABELS.map((l) => ({ ...l, group: 'all' }));
  const groups: FigureGroup[] = [
    ...ONE_GROUP,
    { id: 'spare', label: { english: 'Spare', hinglish: 'Spare' } },
  ];
  const v = gateLabelSet(labelled as LabelRecord[], groups, ART);
  expect(v.some((x) => x.reason === 'empty-group' && x.group === 'spare')).toBe(true);
});

test('a set with labels and no groups names every label it cannot draw', () => {
  const v = gateLabelSet(TAENIA_LABELS, [], ART);
  const wide = v.find((x) => x.labels.length === TAENIA_LABELS.length);
  expect(wide).toBeDefined();
  expect(wide!.detail).toContain('no groups at all');
});
