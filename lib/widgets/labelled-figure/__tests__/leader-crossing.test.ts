/**
 * NO LEADER MAY CROSS ANOTHER, at the board that binds.
 *
 * A crossed pair of leaders is the specific failure that makes a labelled
 * figure worse than no figure: both lines still reach an anchor, both terms
 * still read, and the student follows the wrong one. Nothing about the picture
 * announces it — unlike an overlapping label, which looks broken and is
 * therefore self-reporting.
 *
 * WHY THIS IS NOT IN scripts/verify-render.mjs. That gate is generic over every
 * widget, and `circuit_network` crosses lines by design — a bridge network is
 * two crossing conductors. A global no-crossing assertion would fail a correct
 * schematic. Leaders are a labelled-figure concept, so the rule lives with the
 * widget, which is also what lib/widgets/CLAUDE.md asks for.
 *
 * A FAILING FIXTURE IS REQUIRED and is at the bottom: an assertion with no case
 * that trips it is trusted on the strength of having been written, which is the
 * defect shape this whole subsystem keeps producing.
 */
import { layoutFigure, type LabelledFigureParams, type PlacedLabel } from '../figure-layout';
import { PLACEHOLDER_FIGURE } from '../placeholder-figure';

const SPEC_SMALL = { W: 343, H: 236 };

type Seg = { x1: number; y1: number; x2: number; y2: number };

/** The leader as DRAWN: anchor to stub, elbowed through `via` when there is one. */
function segmentsOf(l: PlacedLabel): Seg[] {
  const a = l.anchor;
  const s = l.stub;
  if (!l.via) return [{ x1: a.x, y1: a.y, x2: s.x, y2: s.y }];
  return [
    { x1: a.x, y1: a.y, x2: l.via.x, y2: l.via.y },
    { x1: l.via.x, y1: l.via.y, x2: s.x, y2: s.y },
  ];
}

const cross = (ax: number, ay: number, bx: number, by: number) => ax * by - ay * bx;

/**
 * Proper segment intersection: the two must cross, not merely touch at a shared
 * endpoint. Touching is excluded because two leaders from the same anchor point
 * legitimately share it, and calling that a crossing would make the assertion
 * fire on a correct figure — the direction that gets a real check deleted.
 */
export function segmentsCross(p: Seg, q: Seg): boolean {
  const d1 = cross(q.x2 - q.x1, q.y2 - q.y1, p.x1 - q.x1, p.y1 - q.y1);
  const d2 = cross(q.x2 - q.x1, q.y2 - q.y1, p.x2 - q.x1, p.y2 - q.y1);
  const d3 = cross(p.x2 - p.x1, p.y2 - p.y1, q.x1 - p.x1, q.y1 - p.y1);
  const d4 = cross(p.x2 - p.x1, p.y2 - p.y1, q.x2 - p.x1, q.y2 - p.y1);
  const EPS = 1e-9;
  const opposite = (a: number, b: number) => (a > EPS && b < -EPS) || (a < -EPS && b > EPS);
  return opposite(d1, d2) && opposite(d3, d4);
}

/** Every crossing pair of leaders in one laid-out figure. */
export function crossingLeaders(params: LabelledFigureParams, W: number, H: number): string[] {
  const { labels } = layoutFigure(params, W, H);
  const bad: string[] = [];
  for (let i = 0; i < labels.length; i++) {
    for (let j = i + 1; j < labels.length; j++) {
      // Only leaders on the SAME side can cross: the two columns are on
      // opposite halves of the board and their leaders run outward.
      if (labels[i].side !== labels[j].side) continue;
      const a = segmentsOf(labels[i]);
      const b = segmentsOf(labels[j]);
      if (a.some((s) => b.some((t) => segmentsCross(s, t)))) {
        bad.push(`${labels[i].id} x ${labels[j].id}`);
      }
    }
  }
  return bad;
}

const withLabels = (labels: LabelledFigureParams['labels']): LabelledFigureParams => ({
  ...(PLACEHOLDER_FIGURE as unknown as LabelledFigureParams),
  labels,
  lang: 'english',
  active_group: 'organelles',
});

describe('the shipped fixture is clean', () => {
  test.each([
    ['spec-small', 343, 236],
    ['real-small', 495, 270],
    ['wide', 900, 430],
  ])('no leader crosses another at %s', (_n, W, H) => {
    const params = {
      ...(PLACEHOLDER_FIGURE as unknown as LabelledFigureParams),
      lang: 'english' as const,
      active_group: 'organelles',
    };
    expect(crossingLeaders(params, W, H)).toEqual([]);
  });

  test('every label is legible at the binding board', () => {
    // 343x236 is the board that binds for a device-point floor, and the label
    // type is 12pt Onest from chrome — never scaled with the image, so this is
    // a fact about the constant rather than about this figure.
    const { labels } = layoutFigure(
      {
        ...(PLACEHOLDER_FIGURE as unknown as LabelledFigureParams),
        lang: 'english',
        active_group: 'organelles',
      },
      SPEC_SMALL.W,
      SPEC_SMALL.H
    );
    expect(labels.length).toBeGreaterThan(0);
    for (const l of labels) {
      expect(l.plate.x).toBeGreaterThanOrEqual(0);
      expect(l.plate.x + l.plate.w).toBeLessThanOrEqual(SPEC_SMALL.W);
      expect(l.plate.y).toBeGreaterThanOrEqual(0);
      expect(l.plate.y + l.plate.h).toBeLessThanOrEqual(SPEC_SMALL.H);
    }
  });

  test('no two label plates overlap', () => {
    const { labels } = layoutFigure(
      {
        ...(PLACEHOLDER_FIGURE as unknown as LabelledFigureParams),
        lang: 'english',
        active_group: 'organelles',
      },
      SPEC_SMALL.W,
      SPEC_SMALL.H
    );
    for (let i = 0; i < labels.length; i++) {
      for (let j = i + 1; j < labels.length; j++) {
        const a = labels[i].plate;
        const b = labels[j].plate;
        const apart =
          a.x + a.w <= b.x || b.x + b.w <= a.x || a.y + a.h <= b.y || b.y + b.h <= a.y;
        expect([`${labels[i].id} vs ${labels[j].id}`, apart]).toEqual([
          `${labels[i].id} vs ${labels[j].id}`,
          true,
        ]);
      }
    }
  });
});

describe('THE FAILING FIXTURE — the assertion must be able to fire', () => {
  /**
   * Two labels on the same side whose anchors are ordered OPPOSITELY to their
   * rows. `decollide` assigns rows by anchor order, so the only way to force a
   * crossing is to override it — which `v_hint` does, and which is exactly what
   * a careless author does when they nudge a label "up a bit" to make room.
   */
  const CROSSED = withLabels([
    {
      id: 'high-anchor-low-row',
      term: { english: 'Nucleus', hinglish: 'Kendrak' },
      anchor: { u: 0.4, v: 0.15 },
      side: 'left',
      group: 'organelles',
      v_hint: 0.95,
    },
    {
      id: 'low-anchor-high-row',
      term: { english: 'Vacuole', hinglish: 'Riktika' },
      anchor: { u: 0.4, v: 0.85 },
      side: 'left',
      group: 'organelles',
      v_hint: 0.05,
    },
  ]);

  test('it really does cross, at every board', () => {
    for (const [W, H] of [
      [343, 236],
      [495, 270],
      [900, 430],
    ]) {
      const found = crossingLeaders(CROSSED, W, H);
      expect([`${W}x${H}`, found.length]).toEqual([`${W}x${H}`, 1]);
      // Order-insensitive: `layoutFigure` returns labels sorted by ROW, so
      // which of the pair is named first depends on the de-collision, not on
      // the crossing. Asserting a fixed string made this fail for a reason
      // that had nothing to do with the geometry.
      expect(found[0].split(' x ').sort()).toEqual(
        ['high-anchor-low-row', 'low-anchor-high-row'].sort()
      );
    }
  });

  test('and the detector does not fire on merely touching segments', () => {
    // Shared endpoint, not a crossing. Without this the check would reject
    // correct figures and get deleted by whoever it inconvenienced.
    expect(
      segmentsCross(
        { x1: 0, y1: 0, x2: 10, y2: 10 },
        { x1: 10, y1: 10, x2: 20, y2: 0 }
      )
    ).toBe(false);
    // A genuine X.
    expect(
      segmentsCross(
        { x1: 0, y1: 0, x2: 10, y2: 10 },
        { x1: 0, y1: 10, x2: 10, y2: 0 }
      )
    ).toBe(true);
  });
});
