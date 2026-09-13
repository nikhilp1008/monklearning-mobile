/**
 * A set that VALIDATES must never crash the board.
 *
 * `validateLabelSet` checked every label and never looked at `groups` at all.
 * So a group whose label carried the WIRE keys (`en`/`hi`) instead of the
 * record keys (`english`/`hinglish`) passed validation, reached `stripFor`,
 * and threw "Cannot read properties of undefined (reading 'slice')" from
 * inside layout. Eleven of the twenty-two bio11 ch7 sets did exactly that on
 * 2026-09-12. In the harness it merely looked like a layout refusal — on a
 * live board it is an exception where a figure should be.
 */
import { validateLabelSet } from '../label-set';

const base = {
  asset_slug: 'test--set--a',
  schema_version: 1,
  image_w: 900,
  image_h: 600,
  reviewed_by: 'test',
  labels: [
    { id: 'a', text: { en: 'alpha', hi: 'alpha' }, anchor: [0.3, 0.3], side: 'auto', group: 'one' },
    { id: 'b', text: { en: 'beta', hi: 'beta' }, anchor: [0.6, 0.6], side: 'auto', group: 'one' },
  ],
};
const err = (raw: unknown) => {
  const r = validateLabelSet(raw);
  return r.ok ? [] : r.errors;
};

test('a group label with the wire keys is refused, and the message names them', () => {
  const e = err({ ...base, groups: [{ id: 'one', label: { en: 'One', hi: 'One' } }] });
  expect(e.join(' ')).toMatch(/label\.english/);
  // The reviewer has to be able to see WHY: "english is missing" next to
  // "keys present: en, hi" is the whole diagnosis in one line.
  expect(e.join(' ')).toMatch(/keys present: en, hi/);
});

test('the record keys pass', () => {
  expect(err({ ...base, groups: [{ id: 'one', label: { english: 'One', hinglish: 'One' } }] }))
    .toEqual([]);
});

test('a label naming an undeclared group is refused', () => {
  // It would be kept in the record, match no group, and be drawn in none of
  // them — present in the file and absent from every screen.
  const e = err({
    ...base,
    labels: [...base.labels, { id: 'c', text: { en: 'gamma', hi: 'gamma' }, anchor: [0.5, 0.5], side: 'auto', group: 'two' }],
    groups: [{ id: 'one', label: { english: 'One', hinglish: 'One' } }],
  });
  expect(e.join(' ')).toMatch(/"two" is not declared/);
});

test('duplicate group ids are refused', () => {
  const e = err({
    ...base,
    groups: [
      { id: 'one', label: { english: 'One', hinglish: 'One' } },
      { id: 'one', label: { english: 'Uno', hinglish: 'Uno' } },
    ],
  });
  expect(e.join(' ')).toMatch(/duplicate group id/);
});

test('an empty group label is refused — the caption would read " · 2/3"', () => {
  const e = err({ ...base, groups: [{ id: 'one', label: { english: '  ', hinglish: 'One' } }] });
  expect(e.join(' ')).toMatch(/label\.english/);
});
