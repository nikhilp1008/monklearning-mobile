/**
 * A term too wide for the frame WRAPS. It does not shrink, and the leader
 * does not stretch to reach it.
 *
 * `supra-oesophageal ganglion` renders a 209pt pill against 328pt of usable
 * width at 340x340. With LEADER_MAX at 40pt, a pill that wide has nowhere to
 * go unless its anchor happens to sit near the horizontal centre — so two of
 * the twenty-two bio11 ch7 sets were refused on 2026-09-12 for a reason that
 * had nothing to do with where the anchors were. Regrouping did not help; it
 * was tested down to two labels per group.
 *
 * Raasikh's rule: wrap at the last space, 12pt unchanged, pill grows
 * downward, LEADER_MAX stays 40. A two-line pill that still cannot place is
 * refused exactly as before — the gate does not get more permissive, the
 * label gets narrower.
 */
import {
  FRAME_INSET, GATE_FRAMES, PILL_PAD_X, WRAP_FRACTION,
  gateLabelSet, layoutFigure, pillHeight, wrapTerm,
} from '../figure-layout';
import { LABEL_SIZE, textWidth } from '../../chrome';

const art = { uri: 'x', intrinsic_w: 900, intrinsic_h: 600 } as never;
const mk = (id: string, en: string, u: number, v: number) => ({
  id, term: { english: en, hinglish: en }, anchor: { u, v },
  side: 'left' as const, group: 'g',
});
const groups = [{ id: 'g', label: { english: 'Brain', hinglish: 'Brain' } }];
const lay = (labels: unknown[], w: number, h: number) =>
  layoutFigure({ art, groups, labels, active_group: 'g', lang: 'english' } as never, w, h);

describe('wrapTerm splits at the last space', () => {
  test('the qualifier stays with what it qualifies', () => {
    expect(wrapTerm('supra-oesophageal ganglion')).toEqual(['supra-oesophageal', 'ganglion']);
    expect(wrapTerm('integumentary nephridium')).toEqual(['integumentary', 'nephridium']);
    expect(wrapTerm('dorsal blood vessel')).toEqual(['dorsal blood', 'vessel']);
  });
  test('a single word is returned whole — hyphenating would teach a wrong string', () => {
    expect(wrapTerm('ventricle')).toEqual(['ventricle']);
    expect(wrapTerm('')).toEqual(['']);
  });
});

describe('the wrap threshold moves with the frame', () => {
  const term = 'supra-oesophageal ganglion';
  const pill = textWidth(term, LABEL_SIZE) + 2 * PILL_PAD_X;

  test('the term that caused this is over the line at 340x340 and under it at 702x289', () => {
    const narrow = 340 - 2 * FRAME_INSET;
    const wide = 702 - 2 * FRAME_INSET;
    expect(pill).toBeGreaterThan(WRAP_FRACTION * narrow);
    expect(pill).toBeLessThan(WRAP_FRACTION * wide);
  });

  test('so it wraps on the phone and stays one line on the board', () => {
    const labels = [mk('sog', term, 0.3, 0.3)];
    expect(lay(labels, 340, 340).labels[0].lines).toHaveLength(2);
    expect(lay(labels, 702, 289).labels[0].lines).toHaveLength(1);
  });
});

describe('the two ch7 refusals place clear once they wrap', () => {
  // The real anchors from the pointed drafts.
  const brain = [
    mk('supra-oesophageal-ganglion', 'supra-oesophageal ganglion', 0.192, 0.225),
    mk('sub-oesophageal-ganglion', 'sub-oesophageal ganglion', 0.192, 0.265),
  ];
  const neph = [
    mk('integumentary-nephridium', 'integumentary nephridium', 0.22, 0.45),
    mk('septal-nephridium', 'septal nephridium', 0.52, 0.42),
    mk('pharyngeal-nephridium', 'pharyngeal nephridium', 0.79, 0.42),
  ];

  test('the gate sees these labels at all — guard against a vacuous pass', () => {
    // `gateLabelSet` takes RECORDS and lays them out itself, filtering by
    // `group`. Handing it PlacedLabels instead matches nothing and returns []
    // — a green assertion about an empty set. This pins that the fixture's
    // records really do land in the group the gate iterates.
    expect(brain.filter((l) => l.group === 'g')).toHaveLength(2);
    expect(lay(brain, 340, 340).labels).toHaveLength(2);
  });

  test('supra-oesophageal ganglion places clear at 340x340 as a two-line pill', () => {
    const out = lay(brain, 340, 340);
    const sog = out.labels.find((l) => l.id === 'supra-oesophageal-ganglion')!;
    expect(sog.lines).toEqual(['supra-oesophageal', 'ganglion']);
    expect(sog.overlapped).toBe(false);
    // The pill really is taller, not just narrower.
    expect(sog.plate.h).toBeCloseTo(pillHeight(2), 5);
    // And the leader did NOT stretch to buy the room.
    expect(sog.leaderLen).toBeLessThanOrEqual(40);
  });

  test('both refused groups now clear every gate frame', () => {
    // One call each: the gate runs all five GATE_FRAMES internally.
    expect(GATE_FRAMES.length).toBe(5);
    expect(gateLabelSet(brain, groups, art)).toEqual([]);
    expect(gateLabelSet(neph, groups, art)).toEqual([]);
  });
});

test('a two-line pill that still cannot place is refused, not forced', () => {
  // Five of the widest terms stacked on one anchor cluster: wrapping halves
  // the width and it is still not enough, which must stay a refusal.
  const crowd = ['supra-oesophageal ganglion', 'sub-oesophageal ganglion',
                 'circum-oesophageal connective', 'integumentary nephridium',
                 'pharyngeal nephridium', 'skeletal muscle fibre',
                 'ventral blood vessel', 'dorsal blood vessel']
    .map((t, i) => mk(`x${i}`, t, 0.5, 0.49 + i * 0.004));
  const v = gateLabelSet(crowd, groups, art);
  expect(v.length).toBeGreaterThan(0);
  expect(v.some((x) => x.reason === 'overlap')).toBe(true);
});
