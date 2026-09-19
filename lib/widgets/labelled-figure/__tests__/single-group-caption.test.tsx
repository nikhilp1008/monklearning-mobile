/**
 * A single-group set draws NO caption; a multi-group set still says "n/m".
 *
 * The strip exists to tell a student they are looking at a SUBSET of a figure.
 * With one group there is no subset, so "1/1" is noise on a 343pt board — and
 * more importantly, a single-group set then needs no display NAME, which is
 * why the 45 sets repaired on 2026-09-18 carry `id: "all"` and an empty label.
 *
 * This behaviour already existed (`multi = params.groups.length > 1`). It is
 * pinned here because the repair now DEPENDS on it: if a caption were ever
 * drawn for one group, 46 sets would show an empty name under the plate.
 */
import { layoutFigure } from '../figure-layout';
import { labelledFigure, validate } from '../index';

const ART = (labelledFigure.defaults as { art: unknown }).art;

const label = (id: string, group: string, u: number, v: number) => ({
  id, term: { english: id, hinglish: id }, anchor: { u, v }, side: 'left', group,
});

function params(groups: { id: string; name: string }[], labels: unknown[]) {
  const r = validate({
    asset_slug: 'test--x',
    art: ART,
    groups: groups.map((g) => ({ id: g.id, label: { english: g.name, hinglish: g.name } })),
    labels,
    lang: 'english',
    active_group: groups[0].id,
  });
  if (!r.ok) throw new Error(r.errors.join('; '));
  return r.params;
}

const FRAMES: [number, number][] = [[343, 236], [702, 289]];

test.each(FRAMES)('one group draws no caption at %ix%i', (w, h) => {
  const p = params([{ id: 'all', name: '' }],
                   [label('scolex', 'all', 0.22, 0.23), label('neck', 'all', 0.44, 0.62)]);
  const out = layoutFigure(p, w, h);
  expect(out.strip).toBeNull();
  expect(out.labels).toHaveLength(2);
});

test.each(FRAMES)('two groups still say 1/2 at %ix%i', (w, h) => {
  const p = params([{ id: 'a', name: 'Nervous system' }, { id: 'b', name: 'Digestive' }],
                   [label('brain', 'a', 0.3, 0.3), label('gut', 'b', 0.6, 0.6)]);
  const out = layoutFigure(p, w, h);
  expect(out.strip).not.toBeNull();
  expect(out.strip!.text).toContain('1/2');
  expect(out.strip!.text).toContain('Nervous system');
});

test('a one-group set with an EMPTY name never renders an empty caption', () => {
  const p = params([{ id: 'all', name: '' }], [label('x', 'all', 0.3, 0.3)]);
  const out = layoutFigure(p, 343, 236);
  expect(out.strip).toBeNull();
});
