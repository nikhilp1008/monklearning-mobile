/**
 * Near-anchor placement — the invariants that replace the edge columns.
 *
 * The column layout put every label at the frame edge and ran a leader back
 * to its dot. Raasikh rejected that render on 2026-09-11: the anchors were
 * right, the layout was not. A reader should not trace a line across the
 * plate to learn what a dot is called.
 *
 * What is asserted here is exactly the four things the rewrite promises, at
 * every frame the runtime draws, for the three tissue slides and the frog
 * heart:
 *
 *   1. no pill leaves the frame (FRAME_INSET honoured);
 *   2. no two pills overlap;
 *   3. every leader is <= LEADER_MAX;
 *   4. the phone frame never draws more than MAX_LABELS_PHONE at once.
 *
 * These are not sampled at the default payload — a layout that is only
 * checked in the middle of its range is the defect CLAUDE.md's "corners, not
 * endpoints" section is about. Every label of every fixture is checked at
 * every frame.
 */
import {
  FRAME_INSET, LEADER_MAX, MAX_LABELS_PHONE, PHONE_MAX_W,
  layoutFigure, pagesFor,
  type FigureGroup, type LabelRecord, type LabelledFigureParams,
} from '../figure-layout';

const FRAMES = [
  { name: '343x236', w: 343, h: 236 },
  { name: '495x270', w: 495, h: 270 },
  { name: '900x430', w: 900, h: 430 },
] as const;

const SOLE: FigureGroup[] = [{ id: 'all', label: { english: 'All', hinglish: 'Sabhi' } }];

function label(id: string, u: number, v: number, term = id): LabelRecord {
  return {
    id,
    term: { english: term, hinglish: term },
    anchor: { u, v },
    side: u < 0.5 ? 'left' : 'right',
    group: 'all',
  };
}

/**
 * The three sclerenchyma-set slides and the frog heart.
 *
 * The tissue anchors are spread the way a microscope field is — clustered
 * mid-plate, which is the case the column layout handled worst and the case
 * near-anchor placement has to handle best. The frog heart anchors are the
 * REAL ones, read from the authored SVG's leader endpoints
 * (content/label-drafts/bio11-ch7-frog--circulatory-and-respiratory-systems--a).
 */
const FIXTURES: { name: string; iw: number; ih: number; groups: FigureGroup[]; labels: LabelRecord[] }[] = [
  {
    name: 'sclerenchyma --a',
    iw: 1800, ih: 1240, groups: SOLE,
    labels: [
      label('lumen', 0.42, 0.38), label('lignified-wall', 0.55, 0.44),
      label('pit', 0.48, 0.61), label('middle-lamella', 0.62, 0.55),
      label('fibre', 0.35, 0.52),
    ],
  },
  {
    name: 'sclerenchyma --b',
    iw: 1800, ih: 1240, groups: SOLE,
    labels: [
      label('sclereid', 0.5, 0.5), label('branched-pit', 0.58, 0.4),
      label('thick-wall', 0.4, 0.6), label('cytoplasm', 0.52, 0.66),
    ],
  },
  {
    name: 'sclerenchyma --c',
    iw: 1800, ih: 1240, groups: SOLE,
    labels: [
      label('fibre-bundle', 0.3, 0.3), label('vessel', 0.7, 0.3),
      label('parenchyma', 0.3, 0.7), label('sclerenchyma', 0.7, 0.7),
      label('epidermis', 0.5, 0.12), label('cortex', 0.5, 0.88),
    ],
  },
  {
    name: 'frog heart --a (real anchors, as it will ship: 3 groups)',
    iw: 1800, ih: 1240,
    // The grouping proposed to Raasikh on 2026-09-11 and the shape this set
    // will actually ship in. Twelve labels at once is NOT that shape — see
    // the density bound recorded at the bottom of this file.
    groups: [
      { id: 'heart', label: { english: 'Heart chambers', hinglish: 'Heart ke chambers' } },
      { id: 'arterial', label: { english: 'Arterial arches', hinglish: 'Arterial arches' } },
      { id: 'venous', label: { english: 'Veins', hinglish: 'Veins' } },
    ],
    labels: [
      g('heart', label('sinus-venosus', 0.6583, 0.4113, 'sinus venosus')),
      g('heart', label('right-atrium', 0.4528, 0.5323, 'right atrium')),
      g('heart', label('left-atrium', 0.5944, 0.5242, 'left atrium')),
      g('heart', label('ventricle', 0.4667, 0.7903, 'ventricle')),
      g('heart', label('conus-arteriosus', 0.3889, 0.5081, 'conus arteriosus')),
      g('arterial', label('truncus-arteriosus', 0.45, 0.3468, 'truncus arteriosus')),
      g('arterial', label('carotid-arch', 0.3611, 0.0685, 'carotid arch')),
      g('arterial', label('systemic-arch', 0.4167, 0.1129, 'systemic arch')),
      g('arterial', label('pulmocutaneous-arch', 0.4639, 0.1371, 'pulmocutaneous arch')),
      g('venous', label('pulmonary-vein', 0.6528, 0.7137, 'pulmonary vein')),
      g('venous', label('precaval-vein', 0.6528, 0.3065, 'precaval vein')),
      g('venous', label('postcaval-vein', 0.6556, 0.5726, 'postcaval vein')),
    ],
  },
];

/** Re-home a label into a group. */
function g(group: string, l: LabelRecord): LabelRecord {
  return { ...l, group };
}

function paramsFor(f: (typeof FIXTURES)[number], group: string, page: number): LabelledFigureParams {
  return {
    asset_slug: f.name,
    art: { source: 1, intrinsic_w: f.iw, intrinsic_h: f.ih },
    groups: f.groups,
    labels: f.labels,
    active_group: group,
    lang: 'english',
    page,
  } as LabelledFigureParams;
}

describe.each(FIXTURES)('$name', (f) => {
  describe.each(FRAMES)('at $name', (frame) => {
    // Every group of every fixture, at every frame — a layout checked on one
    // group is a layout checked in the middle of its range.
    const runs = f.groups.flatMap((grp) => {
      const inGroup = f.labels.filter((l) => l.group === grp.id);
      return pagesFor(inGroup, frame.w).map((_, page) => ({ group: grp.id, page, inGroup }));
    });

    test('no pill leaves the frame', () => {
      for (const r of runs) {
        for (const l of layoutFigure(paramsFor(f, r.group, r.page), frame.w, frame.h).labels) {
          expect(l.plate.x).toBeGreaterThanOrEqual(FRAME_INSET - 0.001);
          expect(l.plate.y).toBeGreaterThanOrEqual(FRAME_INSET - 0.001);
          expect(l.plate.x + l.plate.w).toBeLessThanOrEqual(frame.w - FRAME_INSET + 0.001);
          expect(l.plate.y + l.plate.h).toBeLessThanOrEqual(frame.h - FRAME_INSET + 0.001);
        }
      }
    });

    test('no two pills overlap', () => {
      for (const r of runs) {
        const ls = layoutFigure(paramsFor(f, r.group, r.page), frame.w, frame.h).labels;
        for (let i = 0; i < ls.length; i++) {
          for (let j = i + 1; j < ls.length; j++) {
            const a = ls[i].plate;
            const b = ls[j].plate;
            const hit =
              a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
            expect(
              hit ? `${ls[i].id} overlaps ${ls[j].id}` : 'clear'
            ).toBe('clear');
          }
        }
      }
    });

    test(`every leader is <= ${LEADER_MAX}pt`, () => {
      for (const r of runs) {
        for (const l of layoutFigure(paramsFor(f, r.group, r.page), frame.w, frame.h).labels) {
          expect(l.leaderLen).toBeLessThanOrEqual(LEADER_MAX + 0.001);
        }
      }
    });

    test('the phone frame draws at most five at once', () => {
      for (const r of runs) {
        const n = layoutFigure(paramsFor(f, r.group, r.page), frame.w, frame.h).labels.length;
        if (frame.w < PHONE_MAX_W) expect(n).toBeLessThanOrEqual(MAX_LABELS_PHONE);
        else expect(n).toBe(r.inGroup.length);
      }
    });

    test('nothing was placed with overlap as a last resort', () => {
      // `overlapped` means the search exhausted all eight directions at every
      // leader length. It is a legal outcome (a wrong figure beats a missing
      // one) but it is never an ACCEPTABLE one for these fixtures — if this
      // fires, the group is too dense for the board and wants splitting, not
      // a looser assertion.
      for (const r of runs) {
        const bad = layoutFigure(paramsFor(f, r.group, r.page), frame.w, frame.h)
          .labels.filter((l) => l.overlapped).map((l) => l.id);
        expect(bad).toEqual([]);
      }
    });
  });
});

describe('paging', () => {
  test('a group over five pages only at the phone frame', () => {
    const twelve = FIXTURES[3].labels.map((l) => ({ ...l, group: 'all' }));
    expect(pagesFor(twelve, 343).map((p) => p.length)).toEqual([5, 5, 2]);
    expect(pagesFor(twelve, 495).map((p) => p.length)).toEqual([12]);
    expect(pagesFor(twelve, 900).map((p) => p.length)).toEqual([12]);
  });

  test('paging preserves group order and loses nothing', () => {
    const twelve = FIXTURES[3].labels.map((l) => ({ ...l, group: 'all' }));
    const flat = pagesFor(twelve, 343).flat().map((l) => l.id);
    expect(flat).toEqual(twelve.map((l) => l.id));
  });

  test('a page index past the end clamps rather than rendering nothing', () => {
    const p = paramsFor(FIXTURES[3], 'heart', 99);
    expect(layoutFigure(p, 343, 236).labels.length).toBe(5); // the sole page
  });
});

/* ------------------------------------------------------------ density bound */

describe('how many labels one plate actually holds', () => {
  /**
   * MEASURED, not chosen. The frog heart's twelve anchors in a SINGLE group
   * cannot all be placed clear at 495x270 — three of them exhaust all eight
   * directions at every leader length up to LEADER_MAX and fall back to an
   * overlapping placement.
   *
   * This is the arithmetic behind the grouping proposed to Raasikh: the set
   * ships as heart/arterial/venous (5+4+3) because twelve-at-once does not
   * fit, not because three groups read nicely. If a future change makes this
   * pass, that is a real improvement and this test should be updated with the
   * new bound rather than deleted.
   */
  test('twelve in one group overflows the small tablet frame', () => {
    const flat = FIXTURES[3].labels.map((l) => ({ ...l, group: 'all' }));
    const params = {
      asset_slug: 'frog-stress',
      art: { source: 1, intrinsic_w: 1800, intrinsic_h: 1240 },
      groups: SOLE,
      labels: flat,
      active_group: 'all',
      lang: 'english',
      page: 0,
    } as LabelledFigureParams;
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    // MEASURED at each frame, not asserted from intuition:
    //   343x236  5 drawn (paged), none overlapping
    //   495x270  12 drawn, `postcaval-vein` cannot be placed clear
    //   900x430  12 drawn, none overlapping
    // So the small tablet frame is the binding one for density — NOT the
    // phone, which pages, and not the wide board, which has the room. That is
    // the opposite of the usual "343 binds" rule, and it is why this is
    // written down rather than assumed.
    expect(layoutFigure(params, 343, 236).labels.filter((l) => l.overlapped)).toEqual([]);
    expect(layoutFigure(params, 900, 430).labels.filter((l) => l.overlapped)).toEqual([]);
    const mid = layoutFigure(params, 495, 270).labels.filter((l) => l.overlapped);
    expect(mid.map((l) => l.id)).toEqual(['postcaval-vein']);
    // Named, not silent.
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('postcaval-vein'));
    warn.mockRestore();
  });

  test('the same twelve fit once split into the shipping groups', () => {
    const f = FIXTURES[3];
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    for (const grp of f.groups) {
      const ls = layoutFigure(paramsFor(f, grp.id, 0), 495, 270).labels;
      expect(ls.filter((l) => l.overlapped)).toEqual([]);
    }
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
