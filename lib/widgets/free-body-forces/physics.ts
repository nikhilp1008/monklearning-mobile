/**
 * free_body_forces — the geometry of a free-body diagram, no rendering.
 *
 * Built for the six `gap_free_body_diagram` concepts and the one
 * `gap_vector_resolution` concept the archetype column carries (physics 11
 * ch3/4/7/9/13), from the classifier's own evidence rows:
 *
 *   ch4  "a body, isolated, with arrows for every force acting on it …
 *         the arrows are drawn from a small, fixed menu of forces"
 *   ch4  "if you drew their three force arrows head to tail, the arrows
 *         would close up into a triangle with no gap"          (equilibrium)
 *   ch9  sphere falling at terminal velocity: weight down, buoyancy and
 *         drag up — "At terminal velocity: W = F_B + F_v"
 *   ch13 pendulum: "mg … resolved into mg cos theta along the string and
 *         mg sin theta tangent to the arc"                     (components)
 *   ch3  parallelogram/resolution: B cos(theta), B sin(theta)  (components)
 *
 * Two modes fall straight out of that list: `fbd` (arrows on an isolated
 * body) and `head_to_tail` (the same forces laid tip-to-tail, where the gap
 * between last tip and first tail IS the net force). The two-body
 * action–reaction pair (ch7 gravitation, F12/F21) is deliberately NOT in v1 —
 * it needs two bodies and a separation, which is a different layout problem,
 * and folding it in as a special case is how a widget grows a mode nobody
 * gated. It stays a gap until it is its own decision.
 *
 * SNAP-ONLY BY CONTRACT, not by choice: every force arrow terminates in a
 * text label, and CLAUDE.md's label-terminated rule makes such geometry
 * unanimatable — a bond that swings while its label stays put is a wrong
 * diagram. `animatable` is [] and nothing here is a worklet.
 *
 * ANGLES are measured anticlockwise from +x, in degrees, the physics
 * convention: 90 is UP. Screen y grows downward, so every consumer of these
 * points has already had the flip applied HERE, in one place — index.tsx
 * never negates a sine.
 */

import { textWidth } from '../chrome';

export interface FbdForce {
  /** "mg", "N", "T", "f", "F_B" — the book's own symbols. Max 8 chars. */
  label: string;
  /** Direction the arrow POINTS, degrees anticlockwise from +x. 90 is up. */
  angle_deg: number;
  /** Length relative to the longest arrow, 0.35..1. Relative on purpose:
   *  a free-body diagram teaches direction and comparison, not newtons. */
  magnitude_rel: number;
}

export interface FreeBodyParams {
  mode: 'fbd' | 'head_to_tail';
  body: 'block' | 'sphere' | 'particle';
  /** Ghosted scaffold behind the isolated body. `incline` rotates the
   *  component axes; `string` hangs the body from above (pendulum). */
  context: 'none' | 'floor' | 'incline' | 'string';
  /** Only read when context === 'incline'. */
  incline_angle_deg: number;
  forces: FbdForce[];
  /** Index into `forces` whose components are drawn dashed onto the context
   *  axes (mg cos θ / mg sin θ), or -1 for none. */
  components_of: number;
  caption: string;
}

/* ------------------------------------------------------------- derived */

const rad = (d: number) => (d * Math.PI) / 180;

/**
 * Net force, in units of the longest arrow.
 *
 * One set of numbers serves both modes, and that is the point of computing it
 * here: in `fbd` the readout says whether the forces balance; in
 * `head_to_tail` the polygon's closure gap IS `net_rel`, drawn and numbered
 * from the same sums — the caption and the picture cannot disagree because
 * there is only one number.
 *
 * Reference values, checked in __tests__/derive.test.ts:
 *   3@0° and 4@90°                → net 5 (the 3-4-5 triangle), 1.0-scaled
 *   1@0°, 1@120°, 1@240°          → net 0 (Lami's closing triangle)
 *   mg down on a 30° incline vs N → components 0.5 / 0.866 of mg
 */
export function derive(params: FreeBodyParams): Record<string, number> {
  let fx = 0;
  let fy = 0;
  for (const f of params.forces) {
    fx += f.magnitude_rel * Math.cos(rad(f.angle_deg));
    fy += f.magnitude_rel * Math.sin(rad(f.angle_deg));
  }
  // -0 from summing exact opposites prints as "-0.00" in a readout.
  if (Object.is(fx, -0)) fx = 0;
  if (Object.is(fy, -0)) fy = 0;
  return {
    net_fx_rel: fx,
    net_fy_rel: fy,
    net_rel: Math.hypot(fx, fy),
  };
}

/* ------------------------------------------------------------- layout */

export interface ArrowGeom {
  /** Tail, at the body's edge (fbd) or the previous tip (head_to_tail). */
  x1: number;
  y1: number;
  /** Tip — where the arrowhead and, beyond it, the label sit. */
  x2: number;
  y2: number;
  angle_deg: number;
  label: string;
}

export interface FbdLayout {
  cx: number;
  cy: number;
  /** Half-extent of the body glyph, so arrows start at its edge. */
  bodyR: number;
  arrows: ArrowGeom[];
  /** Dashed component pair for `components_of`, or null. Each runs from the
   *  force's tail; together with the force they close a right triangle. */
  components: { along: ArrowGeom; perp: ArrowGeom } | null;
  /** Ghost scaffold line for floor/incline/string, or null. */
  scaffold: { x1: number; y1: number; x2: number; y2: number } | null;
}

/** Fixed glyph half-sizes, device points — chrome, so they never scale. */
export const BODY_R = { block: 22, sphere: 16, particle: 5 } as const;

/**
 * The longest arrow, as a fraction of the SHORTER box side. A world constant:
 * it scales with the frame, which is what lets the same diagram breathe at
 * 900x430 and still fit 343x236. Chosen so that at 343x236 the longest arrow
 * is 0.34 * 236 ≈ 80pt — room for a 12pt label beyond the tip — and the
 * SHORTEST legal arrow (magnitude_rel 0.35) is 28pt, still comfortably above
 * the ~12px glyph floor the gate enforces.
 */
export const ARROW_SCALE = 0.34;

/** Label clearance beyond the arrow tip, device points. Chrome. */
export const LABEL_GAP = 7;

/** Vertical clearance a label needs beyond an arrow tip: gap + one line. */
const LABEL_CLEAR_V = LABEL_GAP + 2 + 14;

/**
 * Lane offsets for near-vertical parallel forces. NCERT's own Stokes figure
 * draws W, F_B and F_v SIDE BY SIDE, not superimposed — three arrows on one
 * vertical line are unreadable, and this is also what keeps a purely vertical
 * force set from collapsing to a sliver the wide board's ink-coverage ratio
 * refuses. Forces within 14° of straight up or straight down are assigned
 * lanes: 0, +1, -1, +2 … in force order per direction.
 */
function laneOffsets(forces: readonly FbdForce[], bodyR: number): number[] {
  const lanes = forces.map(() => 0);
  for (const dir of [90, 270]) {
    const idx = forces
      .map((f, i) => ({ f, i }))
      .filter(({ f }) => {
        let d = Math.abs(f.angle_deg - dir) % 360;
        if (d > 180) d = 360 - d;
        return d <= 14;
      })
      .map(({ i }) => i);
    idx.forEach((i, k) => {
      const slot = k === 0 ? 0 : k % 2 === 1 ? Math.ceil(k / 2) : -Math.ceil(k / 2);
      lanes[i] = slot * (bodyR + 8);
    });
  }
  return lanes;
}

export function layoutFbd(
  params: FreeBodyParams,
  width: number,
  height: number,
  /** Fixed chrome reserved at the top — the caption band, when there is a
   *  caption. Solved into the vertical budget like every other extent: the
   *  first draft let the up-arrow's label rise into the caption's line and
   *  the gate caught the collision at both small boards. */
  topInset = 0
): FbdLayout {
  const bodyR = BODY_R[params.body];
  const lanes = laneOffsets(params.forces, bodyR);

  /*
   * THE CONTAINER RULE, done as arithmetic rather than hope. Every extent of
   * this diagram is linear in the arrow scale L: extent(L) = A + B·L, where A
   * is fixed chrome (body radius, label clearance, measured label width) and
   * B comes from the force magnitudes. So the largest L that fits is solved
   * per side and taken as a minimum — the first draft picked
   * L = ARROW_SCALE·min(w,h) and "mg" hung off the bottom of every board
   * whose height was the short side, which is all of them.
   */
  const PAD = 8;
  const ext = { up: { A: 0, B: 0 }, down: { A: 0, B: 0 }, left: { A: 0, B: 0 }, right: { A: 0, B: 0 } };
  const bump = (side: keyof typeof ext, A: number, B: number) => {
    // Track the side's worst case at any L: conservative merge of intercepts
    // and slopes. Slightly over-tight is a smaller diagram; under-tight is a
    // label off the board.
    ext[side].A = Math.max(ext[side].A, A);
    ext[side].B = Math.max(ext[side].B, B);
  };
  params.forces.forEach((f, i) => {
    const a = rad(f.angle_deg);
    const cosA = Math.cos(a);
    const sinA = Math.sin(a);
    const lane = Math.abs(lanes[i]);
    const labelW = textWidth(f.label, 12) + LABEL_GAP + 2;
    if (sinA > 0) bump('up', bodyR * sinA + LABEL_CLEAR_V, f.magnitude_rel * sinA);
    if (sinA < 0) bump('down', -bodyR * sinA + LABEL_CLEAR_V, -f.magnitude_rel * sinA);
    if (cosA > 0.35) bump('right', bodyR * cosA + labelW + lane, f.magnitude_rel * cosA);
    else bump('right', bodyR + lane + labelW * 0.5, Math.max(0, f.magnitude_rel * cosA));
    if (cosA < -0.35) bump('left', -bodyR * cosA + labelW + lane, -f.magnitude_rel * cosA);
    else bump('left', bodyR + lane + labelW * 0.5, Math.max(0, -f.magnitude_rel * cosA));
  });
  const halfW = width / 2 - PAD;
  const solve = (avail: number, e: { A: number; B: number }) =>
    e.B > 0 ? (avail - e.A) / e.B : Number.POSITIVE_INFINITY;
  const L = Math.max(
    24,
    Math.min(
      // Height-driven, both directions share the vertical budget:
      (height - 2 * PAD - topInset - ext.up.A - ext.down.A) / Math.max(1e-6, ext.up.B + ext.down.B),
      solve(halfW, ext.left),
      solve(halfW, ext.right),
      // And never longer than the frame is generous:
      0.55 * Math.min(width, height)
    )
  );
  // Centre so the up- and down-extents balance inside the box.
  const upE = ext.up.A + ext.up.B * L;
  const downE = ext.down.A + ext.down.B * L;
  const cy = PAD + topInset + upE + (height - 2 * PAD - topInset - upE - downE) / 2;
  const cx = width * 0.5;

  const arrows: ArrowGeom[] = params.forces.map((f, i) => {
    const a = rad(f.angle_deg);
    const len = f.magnitude_rel * L;
    // Tail on the body's edge, tip len beyond it. Screen-y flip happens here.
    const x1 = cx + lanes[i] + bodyR * Math.cos(a);
    const y1 = cy - bodyR * Math.sin(a);
    return {
      x1,
      y1,
      x2: x1 + len * Math.cos(a),
      y2: y1 - len * Math.sin(a),
      angle_deg: f.angle_deg,
      label: f.label,
    };
  });

  let components: FbdLayout['components'] = null;
  if (params.components_of >= 0 && params.components_of < params.forces.length) {
    const f = params.forces[params.components_of];
    // The axis the components resolve onto: the incline surface when there is
    // one, the string direction for a pendulum, else horizontal. This is the
    // ch13 picture — mg cos θ along the string, mg sin θ tangent — and the
    // ch3 parallelogram with θ read from the axis.
    const axis =
      params.context === 'incline' ? params.incline_angle_deg :
      params.context === 'string' ? 90 :
      0;
    const src = arrows[params.components_of];
    const len = f.magnitude_rel * L;
    const rel = rad(f.angle_deg - axis);
    const alongLen = len * Math.cos(rel);
    const perpLen = len * Math.sin(rel);
    const ax = rad(axis);
    const along: ArrowGeom = {
      x1: src.x1,
      y1: src.y1,
      x2: src.x1 + alongLen * Math.cos(ax),
      y2: src.y1 - alongLen * Math.sin(ax),
      angle_deg: axis,
      label: 'cos',
    };
    const perp: ArrowGeom = {
      x1: src.x1,
      y1: src.y1,
      x2: src.x1 + perpLen * Math.cos(ax + Math.PI / 2),
      y2: src.y1 - perpLen * Math.sin(ax + Math.PI / 2),
      angle_deg: axis + 90,
      label: 'sin',
    };
    components = { along, perp };
  }

  let scaffold: FbdLayout['scaffold'] = null;
  const reach = L + bodyR;
  if (params.context === 'floor') {
    scaffold = { x1: cx - reach, y1: cy + bodyR + 4, x2: cx + reach, y2: cy + bodyR + 4 };
  } else if (params.context === 'incline') {
    const a = rad(params.incline_angle_deg);
    scaffold = {
      x1: cx - reach * Math.cos(a),
      y1: cy + bodyR + 4 + reach * Math.sin(a),
      x2: cx + reach * Math.cos(a),
      y2: cy + bodyR + 4 - reach * Math.sin(a),
    };
  } else if (params.context === 'string') {
    scaffold = { x1: cx, y1: cy - bodyR, x2: cx, y2: Math.max(8, cy - reach) };
  }

  return { cx, cy, bodyR, arrows, components, scaffold };
}

/**
 * The same forces, tip-to-tail. The polygon is laid out in force order and
 * then translated/scaled to fit the box — WORLD scaling: the shape is the
 * physics, the box is the frame. If the forces balance, the last tip lands on
 * the first tail and the dashed closure segment has length zero; otherwise
 * the closure IS the net force, which `derive` numbers.
 */
export function layoutHeadToTail(
  params: FreeBodyParams,
  width: number,
  height: number
): { arrows: ArrowGeom[]; closure: { x1: number; y1: number; x2: number; y2: number } | null } {
  // Unit-space chain first.
  const pts: { x: number; y: number }[] = [{ x: 0, y: 0 }];
  for (const f of params.forces) {
    const a = rad(f.angle_deg);
    const p = pts[pts.length - 1];
    pts.push({ x: p.x + f.magnitude_rel * Math.cos(a), y: p.y - f.magnitude_rel * Math.sin(a) });
  }
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const w0 = Math.max(...xs) - Math.min(...xs) || 1e-6;
  const h0 = Math.max(...ys) - Math.min(...ys) || 1e-6;

  // Fit with a fixed-chrome margin: labels sit outside the polygon, so the
  // margin holds a 12pt label plus its gap on every side.
  const MARGIN = 34;
  const s = Math.min((width - 2 * MARGIN) / w0, (height - 2 * MARGIN) / h0);
  const ox = (width - s * w0) / 2 - s * Math.min(...xs);
  const oy = (height - s * h0) / 2 - s * Math.min(...ys);

  const P = pts.map((p) => ({ x: ox + s * p.x, y: oy + s * p.y }));
  const arrows: ArrowGeom[] = params.forces.map((f, i) => ({
    x1: P[i].x,
    y1: P[i].y,
    x2: P[i + 1].x,
    y2: P[i + 1].y,
    angle_deg: f.angle_deg,
    label: f.label,
  }));

  const gap = Math.hypot(P[P.length - 1].x - P[0].x, P[P.length - 1].y - P[0].y);
  // Under 1.5pt of screen gap is closure: drawing a dashed "net" shorter than
  // a stroke width asserts an imbalance the eye cannot see and the physics
  // does not have.
  const closure =
    gap < 1.5
      ? null
      : { x1: P[P.length - 1].x, y1: P[P.length - 1].y, x2: P[0].x, y2: P[0].y };
  return { arrows, closure };
}

/**
 * Smallest angular separation between any two forces, degrees in [0, 180].
 * validate() refuses below MIN_SEPARATION_DEG: two arrows 15° apart put two
 * 12pt labels on top of each other at 343x236, and the schema's legal range
 * must be a subset of what renders — the gate found exactly this at the
 * corners, so the schema is what narrowed.
 */
export function minSeparationDeg(forces: readonly FbdForce[]): number {
  let min = 180;
  for (let i = 0; i < forces.length; i++) {
    for (let j = i + 1; j < forces.length; j++) {
      let d = Math.abs(forces[i].angle_deg - forces[j].angle_deg) % 360;
      if (d > 180) d = 360 - d;
      min = Math.min(min, d);
    }
  }
  return min;
}

export const MIN_SEPARATION_DEG = 24;
