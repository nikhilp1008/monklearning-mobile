/**
 * A label must never cover the group caption.
 *
 * CAUGHT BY LOOKING, NOT BY THE GATE. The frog heart published on
 * 2026-09-12 with `gateLabelSet` calling it clear at all five frames. It was
 * not: at 343x236 the "carotid arch" pill sat squarely on top of
 * "Arterial arches · 2/3", because the caption rect was computed AFTER every
 * label had been placed and the gate compares labels only against each other
 * and against the frame. Nothing in either had ever heard of the caption.
 *
 * That caption is the one piece of chrome that must survive: it is what says
 * "2/3", the difference between a subset a student knows is a subset and a
 * figure that looks complete and is not. Covering it turns a correct partial
 * figure into a silently wrong whole one.
 */
import frogSet from '../../../../test/fixtures/frog-circulatory-labels.preview.json';
import { toFigureRecord, validateLabelSet } from '../label-set';
import { GATE_FRAMES, gateLabelSet, layoutFigure } from '../figure-layout';

const checked = validateLabelSet(frogSet as unknown as Record<string, unknown>);
if (!checked.ok) throw new Error(`fixture invalid: ${checked.errors.join('; ')}`);
const record = toFigureRecord(checked.set, 1);

const overlaps = (a: {x:number;y:number;w:number;h:number}, b: typeof a) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

describe('the group caption is never covered by a label', () => {
  for (const frame of GATE_FRAMES) {
    for (const group of record.groups) {
      test(`${group.id} at ${frame.w}x${frame.h}`, () => {
        const out = layoutFigure(
          { ...record, active_group: group.id, lang: 'english' } as never,
          frame.w, frame.h
        );
        expect(out.strip).not.toBeNull();
        const covering = out.labels
          .filter((l) => overlaps(l.plate, out.strip!.plate))
          .map((l) => l.id);
        expect(covering).toEqual([]);
      });
    }
  }

  test('the caption moves rather than forcing an overlap', () => {
    // Arterial is the group that proves it: four long terms whose anchors are
    // all at the top of the plate, where the caption starts. At the narrowest
    // landscape frame there is no room for both, so the caption goes to the
    // bottom — which costs nothing, that half of the plate being empty.
    const narrow = layoutFigure(
      { ...record, active_group: 'arterial', lang: 'english' } as never,
      343, 236
    );
    expect(narrow.strip!.plate.y).toBeGreaterThan(236 / 2);

    // Heart has room at the top and must keep it: a caption that wandered
    // between groups would read as a rendering bug.
    const roomy = layoutFigure(
      { ...record, active_group: 'heart', lang: 'english' } as never,
      343, 236
    );
    expect(roomy.strip!.plate.y).toBeLessThan(236 / 2);
  });

  test('the gate refuses a set whose caption cannot be cleared', () => {
    // Same twelve labels in one group: no arrangement clears the caption AND
    // the neighbours, and the gate must say so rather than shipping it.
    const flat = {
      ...record,
      groups: [{ id: 'all', label: { english: 'Everything', hinglish: 'Everything' } }],
      labels: record.labels.map((l) => ({ ...l, group: 'all' })),
    };
    expect(gateLabelSet(flat.labels, flat.groups, flat.art).length).toBeGreaterThan(0);
  });
});
