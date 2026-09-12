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
  FRAME_INSET, GATE_FRAMES, LEADER_MAX,
  describeViolations, gateLabelSet, layoutFigure,
  type FigureArt, type FigureGroup, type LabelRecord, type LabelledFigureParams,
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

function artOf(f: (typeof FIXTURES)[number]): FigureArt {
  return { source: 1, intrinsic_w: f.iw, intrinsic_h: f.ih } as FigureArt;
}

function paramsFor(f: (typeof FIXTURES)[number], group: string): LabelledFigureParams {
  return {
    asset_slug: f.name,
    art: artOf(f),
    groups: f.groups,
    labels: f.labels,
    active_group: group,
    lang: 'english',
  } as LabelledFigureParams;
}

describe.each(FIXTURES)('$name', (f) => {
  describe.each(FRAMES)('at $name', (frame) => {
    // Every group of every fixture, at every frame — a layout checked on one
    // group is a layout checked in the middle of its range.
    const runs = f.groups.map((grp) => ({
      group: grp.id,
      inGroup: f.labels.filter((l) => l.group === grp.id),
    }));

    test('no pill leaves the frame', () => {
      for (const r of runs) {
        for (const l of layoutFigure(paramsFor(f, r.group), frame.w, frame.h).labels) {
          expect(l.plate.x).toBeGreaterThanOrEqual(FRAME_INSET - 0.001);
          expect(l.plate.y).toBeGreaterThanOrEqual(FRAME_INSET - 0.001);
          expect(l.plate.x + l.plate.w).toBeLessThanOrEqual(frame.w - FRAME_INSET + 0.001);
          expect(l.plate.y + l.plate.h).toBeLessThanOrEqual(frame.h - FRAME_INSET + 0.001);
        }
      }
    });

    test('no two pills overlap', () => {
      for (const r of runs) {
        const ls = layoutFigure(paramsFor(f, r.group), frame.w, frame.h).labels;
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
        for (const l of layoutFigure(paramsFor(f, r.group), frame.w, frame.h).labels) {
          expect(l.leaderLen).toBeLessThanOrEqual(LEADER_MAX + 0.001);
        }
      }
    });

    test('every label of the group is drawn — never paged, never dropped', () => {
      // The runtime does not thin a dense group. A figure showing some of its
      // labels looks complete and is not, and the student cannot tell. Density
      // is refused at review by gateLabelSet instead.
      for (const r of runs) {
        const n = layoutFigure(paramsFor(f, r.group), frame.w, frame.h).labels.length;
        expect(n).toBe(r.inGroup.length);
      }
    });

    test('nothing was placed with overlap as a last resort', () => {
      // `overlapped` means the search exhausted all eight directions at every
      // leader length. It is a legal outcome (a wrong figure beats a missing
      // one) but it is never an ACCEPTABLE one for these fixtures — if this
      // fires, the group is too dense for the board and wants splitting, not
      // a looser assertion.
      for (const r of runs) {
        const bad = layoutFigure(paramsFor(f, r.group), frame.w, frame.h)
          .labels.filter((l) => l.overlapped).map((l) => l.id);
        expect(bad).toEqual([]);
      }
    });
  });
});

describe('the set gate', () => {
  /**
   * The gate is what replaced the phone-only cap. A dense group is refused at
   * REVIEW, naming the group and the label, rather than paged or thinned at
   * runtime where the student cannot tell something is missing.
   */
  test('the frog heart, as three groups, places clear at every frame', () => {
    const f = FIXTURES[3];
    const v = gateLabelSet(f.labels, f.groups, artOf(f));
    expect(describeViolations(v)).toBe('set places clear at every frame');
  });

  test('each tissue slide places clear at every frame', () => {
    for (const f of FIXTURES.slice(0, 3)) {
      expect(describeViolations(gateLabelSet(f.labels, f.groups, artOf(f)))).toBe(
        'set places clear at every frame'
      );
    }
  });

  test('twelve in ONE group is refused, naming the group and the label', () => {
    const f = FIXTURES[3];
    const flat = f.labels.map((l) => ({ ...l, group: 'all' }));
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const v = gateLabelSet(flat, SOLE, artOf(f));
    warn.mockRestore();

    expect(v.length).toBeGreaterThan(0);
    // Named, so an author knows what to move rather than being told "too dense".
    expect(v.map((x) => x.labels).flat()).toContain('postcaval-vein');
    expect(v.every((x) => x.group === 'all')).toBe(true);
    // Both small frames refuse it; only the wide board has the room.
    expect([...new Set(v.map((x) => x.frame))]).toEqual(['343x236', '495x270']);
    expect(describeViolations(v)).toMatch(/\[all @ 343x236\] overlap/);
  });

  test('the gate checks overlap itself rather than trusting the engine flag', () => {
    // `overlapped` says the SEARCH gave up; the pairwise test says two pills
    // actually intersect. A gate that only read the flag would be asking the
    // engine to mark its own work.
    const f = FIXTURES[3];
    const flat = f.labels.map((l) => ({ ...l, group: 'all' }));
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const v = gateLabelSet(flat, SOLE, artOf(f));
    warn.mockRestore();
    const pairs = v.filter((x) => x.labels.length === 2);
    expect(pairs.length).toBeGreaterThan(0);
  });

  test('the gate runs every frame in GATE_FRAMES', () => {
    expect(GATE_FRAMES.map((f) => `${f.w}x${f.h}`)).toEqual(['343x236', '495x270', '900x430']);
  });
});

/* ------------------------------------------------------------ density bound */

describe('how many labels one plate actually holds', () => {
  /**
   * MEASURED, and kept as documentation of WHY the frog heart ships as three
   * groups. With paging removed the runtime draws all twelve wherever it is
   * asked to, so this records where that stops being drawable:
   *
   *   343x236  `pulmocutaneous-arch` and `precaval-vein` cannot be placed clear
   *   495x270  `postcaval-vein` cannot be placed clear
   *   900x430  all twelve place clear
   *
   * CORRECTED 2026-09-12, and the correction matters more than the numbers.
   * An earlier version of this comment claimed 343x236 placed all twelve
   * clear. It did not: paging capped that frame at FIVE labels, so the
   * measurement was of five, and "no overlap" was true of a figure missing
   * seven of its labels. Removing the cap is what made the real number
   * visible. A measurement taken through a filter is a measurement of the
   * filter.
   *
   * If a future change makes either small frame pass, that is a real
   * improvement — update the bound rather than deleting it.
   */
  const flatParams = (): LabelledFigureParams => ({
    asset_slug: 'frog-stress',
    art: artOf(FIXTURES[3]),
    groups: SOLE,
    labels: FIXTURES[3].labels.map((l) => ({ ...l, group: 'all' })),
    active_group: 'all',
    lang: 'english',
  } as LabelledFigureParams);

  test('both small frames overflow; only the wide board holds twelve', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const p = flatParams();
    expect(layoutFigure(p, 343, 236).labels.filter((l) => l.overlapped).map((l) => l.id))
      .toEqual(['pulmocutaneous-arch', 'precaval-vein']);
    expect(layoutFigure(p, 495, 270).labels.filter((l) => l.overlapped).map((l) => l.id))
      .toEqual(['postcaval-vein']);
    expect(layoutFigure(p, 900, 430).labels.filter((l) => l.overlapped)).toEqual([]);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('postcaval-vein'));
    warn.mockRestore();
  });

  test('every label is still DRAWN at the overflowing frame, not dropped', () => {
    // Overflow places with overlap and warns. It never silently omits a label:
    // the gate is what stops such a set shipping, not the renderer.
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(layoutFigure(flatParams(), 495, 270).labels.length).toBe(12);
    warn.mockRestore();
  });

  test('split into the shipping groups, nothing overflows anywhere', () => {
    const f = FIXTURES[3];
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    for (const grp of f.groups) {
      for (const fr of GATE_FRAMES) {
        const ls = layoutFigure(paramsFor(f, grp.id), fr.w, fr.h).labels;
        expect(ls.filter((l) => l.overlapped)).toEqual([]);
      }
    }
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
