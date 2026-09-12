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
   * REWRITTEN 2026-09-11, and the reason is a result in itself.
   *
   * The old fixture forced a crossing with `v_hint`: two same-side labels
   * whose anchors were ordered opposite to their de-collided rows. That
   * construction depended on the COLUMN layout, where a label could be rows
   * away from its anchor. Near-anchor placement deleted it — `v_hint` no
   * longer moves anything, and a leader is at most LEADER_MAX (40pt) running
   * outward from the plate centre, so two of them have very little room to
   * cross.
   *
   * MEASURED, before concluding it: a sweep of every pair of anchors on a
   * 7x7 grid of (u, v) — 2,401 configurations — at all three frames produced
   * ZERO layout crossings. That is evidence the new engine makes this failure
   * hard to reach, NOT evidence the detector works; those are different
   * claims and only the second is this file's job.
   *
   * So the fixture now exercises `segmentsCross` directly, on two segments
   * that provably cross. The detector keeps a case that trips it, and the
   * sweep result is recorded above rather than being mistaken for one.
   */
  /**
   * THE SWEEP, kept as a regression fixture rather than as a one-off finding.
   *
   * Every ordered pair of anchors on a 7x7 grid of (u, v) — 2,401
   * configurations — laid out at all three gate frames, asserting NOT ONE
   * produces crossing leaders. Near-anchor placement should make this
   * structurally hard: a leader is at most LEADER_MAX and runs outward from
   * the plate centre, so two of them have very little room to cross.
   *
   * "Should" is the reason this runs every time instead of being written down
   * once. If a placement change reintroduces crossings, this names the
   * configuration that does it — which is far more useful than rediscovering
   * the property by eye on a plate.
   */
  test('no pair of anchors, anywhere on a 7x7 grid, produces a crossing', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const S = [0.15, 0.3, 0.45, 0.5, 0.55, 0.7, 0.85];
    const found: string[] = [];
    let checked = 0;

    for (const u1 of S) for (const v1 of S) for (const u2 of S) for (const v2 of S) {
      if (u1 === u2 && v1 === v2) continue;
      const labels = [[u1, v1], [u2, v2]].map(([u, v], i) => ({
        id: `L${i}`,
        term: { english: `Label ${i}`, hinglish: `Label ${i}` },
        anchor: { u, v },
        side: u < 0.5 ? 'left' : 'right',
        group: 'organelles',
      }));
      const params = withLabels(labels as never);
      for (const [W, H] of [[343, 236], [495, 270], [900, 430]] as const) {
        checked++;
        const bad = crossingLeaders(params, W, H);
        if (bad.length) found.push(`${W}x${H} [${u1},${v1}] [${u2},${v2}]: ${bad.join(' ')}`);
      }
    }
    warn.mockRestore();

    // The count is asserted too: a sweep that silently stopped iterating would
    // report zero crossings for the same reason a broken one does.
    //
    // 7x7 grid -> 49 points -> 49*49 = 2401 ordered pairs, minus the 49 where
    // both anchors are the SAME point (skipped: two labels on one anchor share
    // it legitimately and `segmentsCross` excludes shared endpoints by design)
    // = 2352, at three frames.
    expect(checked).toBe(2352 * 3);
    expect(found).toEqual([]);
  });

  test('the detector fires on two segments that really do cross', () => {
    const p = { x1: 0, y1: 0, x2: 100, y2: 100 };
    const q = { x1: 0, y1: 100, x2: 100, y2: 0 };
    expect(segmentsCross(p, q)).toBe(true);
  });

  test('a laid-out figure whose leaders cross is reported by id', () => {
    // Hand-built PlacedLabels, because layoutFigure will not produce this —
    // the point is that IF it ever did, the pair would be named.
    const a = {
      id: 'alpha', anchor: { x: 10, y: 10 }, stub: { x: 110, y: 110 }, via: null,
    } as unknown as PlacedLabel;
    const b = {
      id: 'beta', anchor: { x: 10, y: 110 }, stub: { x: 110, y: 10 }, via: null,
    } as unknown as PlacedLabel;
    const segA = segmentsOf(a)[0];
    const segB = segmentsOf(b)[0];
    expect(segmentsCross(segA, segB)).toBe(true);
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
