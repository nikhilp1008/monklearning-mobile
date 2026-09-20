/**
 * THE PLATE INVARIANT: a problem with the LABELS never costs the PICTURE.
 *
 * The Taenia published on 2026-09-18 with `groups: []`. PublishedLab passed
 * `active_group: ''`, `groupIds.has('')` was false, `validate` returned
 * ok:false, and the board drew NOTHING — with the art already in cache. The
 * publish gate was green, the layout gate was green at all five frames, the
 * bytes verified byte-for-byte against R2, and the resolver reported
 * "5 labels, 0 missing" over an empty rectangle.
 *
 * Every check was green because none of them asked whether a label could ever
 * be drawn, and none of them asked whether the plate had drawn.
 */
import { validate, labelledFigure } from '../index';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

// The art shape the schema actually wants: a bundled/local SOURCE, never a
// remote URL, plus the intrinsic pixel size the anchors are fractions of.
const ART = (labelledFigure.defaults as { art: unknown }).art;

const label = (id: string, group: string | undefined, u = 0.3, v = 0.4) => ({
  id, term: { english: id, hinglish: id }, anchor: { u, v },
  side: 'left', ...(group === undefined ? {} : { group }),
});

const base = (over: Record<string, unknown> = {}) => ({
  asset_slug: 'bio11-ch4-phylum-platyhelminthes--c',
  art: ART,
  groups: [{ id: 'body', label: { english: 'Body', hinglish: 'Body' } }],
  labels: [label('scolex', 'body', 0.22, 0.23), label('neck', 'body', 0.44, 0.62)],
  lang: 'english',
  ...over,
});

const warnings: string[] = [];
beforeEach(() => {
  warnings.length = 0;
  jest.spyOn(console, 'warn').mockImplementation((m?: unknown) => {
    warnings.push(String(m));
  });
});
afterEach(() => jest.restoreAllMocks());

function drawsThePlate(params: unknown) {
  const r = validate(params);
  expect(r.ok).toBe(true);
  if (!r.ok) throw new Error(r.errors.join('; '));
  const tree = renderWidgetTreeAt(labelledFigure as never, r.params as never, {}, 343, 236);
  const json = JSON.stringify(tree);
  // An RNSVGImage with a href IS the plate being drawn. Asserted on the
  // element, not on a URL string, because the source is a bundled asset id.
  expect(json).toMatch(/RNSVGImage|"href"/);
  return json;
}

test('groups: [] — the plate draws, no labels, ONE warning naming the set', () => {
  const json = drawsThePlate(base({ groups: [], active_group: '' }));
  expect(json).not.toContain('scolex');
  expect(warnings).toHaveLength(1);
  expect(warnings[0]).toContain('bio11-ch4-phylum-platyhelminthes--c');
});

test('orphan labels are skipped and the rest still draw', () => {
  const json = drawsThePlate(base({
    labels: [label('scolex', 'body', 0.22, 0.23), label('ghost', 'nope', 0.7, 0.7)],
  }));
  expect(json).toContain('scolex');
  expect(json).not.toContain('ghost');
  expect(warnings).toHaveLength(1);
});

test('a label with NO group is skipped, not fatal', () => {
  drawsThePlate(base({
    labels: [label('scolex', 'body', 0.22, 0.23), label('loose', undefined, 0.7, 0.7)],
  }));
  expect(warnings).toHaveLength(1);
});

test('a malformed group entry does not blank the board', () => {
  drawsThePlate(base({
    groups: [{ id: 'body', label: { english: 'Body', hinglish: 'Body' } }, 42],
  }));
  expect(warnings).toHaveLength(1);
});

test('an unknown active_group falls back to the first group', () => {
  const r = validate(base({ active_group: 'does-not-exist' }));
  expect(r.ok).toBe(true);
  expect((r as { params: { active_group: string } }).params.active_group).toBe('body');
  expect(warnings).toHaveLength(1);
});

test('a HEALTHY set warns about nothing', () => {
  const json = drawsThePlate(base());
  expect(json).toContain('scolex');
  expect(warnings).toHaveLength(0);
});

test('a broken ART is still fatal — there is no picture to protect', () => {
  const r = validate(base({ art: { source: 'nope', intrinsic_w: 0, intrinsic_h: 0 } }));
  expect(r.ok).toBe(false);
});
