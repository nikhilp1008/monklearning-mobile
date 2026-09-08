import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  ARROW_HALF_W, ARROW_LEN, EMPHASIS_STROKE, GLYPH_R, HAIRLINE_STROKE, LABEL_SIZE,
  LINE_STROKE, PAD_SIDE, READOUT_BAND, READOUT_SIZE, dirArrowHead, fitReadout,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  CELL_PITCH, CHARGE_WINDOW_TAU, ELEMENT_KINDS, ELEM_LEN, LAMP_R, MAX_CAPTION_CHARS,
  MAX_NAME_CHARS, NODE_R, NULL_CM_MAX, NULL_CM_MIN, REF_H, REF_W, SLOTS,
  SOURCE_V_MAX, SOURCE_V_MIN, INTERNAL_R_MAX, INTERNAL_R_MIN, TOPOLOGIES,
  VALUE_MIN, VALUE_MAX_BY_KIND,
  capacitanceOf, derive, fitProblems, fmtAmps, fmtFarad, fmtOhms, fmtSeconds,
  fmtVolts, labelSlots, layout, parallelBanks, resistanceOf, sourceLabels,
  type CircuitElement, type CircuitNetworkParams, type ElementKind,
  type PlacedElement, type Topology,
} from './circuit-math';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * Chrome constants — device points, NEVER a function of width/height
 * (docs/small-screen-rendering-rules.md). Chosen to sit clear of the render
 * harness's 11px / 1.2 floors rather than on them. Everything that DOES scale
 * with the board lives in circuit-math.ts and takes the measured box as an
 * argument.
 */
const NAME_SIZE = LABEL_SIZE;
const VALUE_SIZE = LABEL_SIZE;
const WIRE_STROKE = LINE_STROKE;
const SYMBOL_STROKE = EMPHASIS_STROKE;
const PLATE_STROKE = EMPHASIS_STROKE;
const NEEDLE_STROKE = HAIRLINE_STROKE;
/** Half the drawn length of an element symbol. */
const H = ELEM_LEN / 2;
/** Half-height of a resistor's zig-zag and of a capacitor's plate. */
const ZIG = 5;
const PLATE_HALF = 9;
/** Plate separation of the capacitor symbol, either side of centre. */
const PLATE_T = 3;
/** How far the needle reaches inside the galvanometer's circle. */
const NEEDLE_R = GLYPH_R - 2;
/** Full-scale needle swing, radians (±52°). */
const NEEDLE_SWING = 0.91;
/** Charge fill travels this far between the plates. */
const FILL_SPAN = 2 * PLATE_HALF;

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string';
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/**
 * Total, throwing-free validation.
 *
 * Three things it does that a shape check would not, and each exists because
 * the alternative produces a WRONG diagram rather than an ugly one:
 *
 *  1. AN ELEMENT COUNT THAT DOES NOT MATCH THE TOPOLOGY IS AN ERROR, never
 *     padded. Padding a `bridge` payload that arrived with four elements
 *     invents a fifth the model did not send, and the board then labels a
 *     galvanometer that is not in the question.
 *  2. KIND/TOPOLOGY RULES. A galvanometer is a null detector across a bridge
 *     diagonal and has nowhere to sit in a series loop; a switch belongs to a
 *     single reducible path (series, series_parallel) and in a mesh it would
 *     silently change which branches exist; a parallel bank that mixes a
 *     capacitor with a resistor has NO equivalent to report — r_eq and c_eq
 *     are both meaningless — so the widget refuses rather than printing one.
 *  3. THE GEOMETRIC BACKSTOP. `fitProblems` at REF_W x REF_H, the smallest
 *     board this app checks, asserting exactly what verify-render's
 *     assertions 3, 4 and 8 assert. THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET
 *     OF WHAT RENDERS CORRECTLY (CLAUDE.md §3), and 343x236 is the binding box
 *     for both axes: width enters only through the rail length and height only
 *     through the branch pitch, both of which grow on a bigger board.
 *
 * Scalars are treated in two ways, deliberately. `source_v`, `internal_r` and
 * `bridge_null_cm` are CLAIMS about a circuit and are REJECTED when out of
 * range — silently clamping 900 V to 500 V would put a number on the board the
 * lesson never said. `t_frac` and `bridge_delta` are animation PHASES, i.e.
 * positions in a render, and are clamped.
 */
function validate(raw: unknown): ValidationResult<CircuitNetworkParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const topology = r.topology;
  if (!isStr(topology) || !(TOPOLOGIES as readonly string[]).includes(topology)) {
    return { ok: false, errors: [`topology must be one of ${TOPOLOGIES.join(', ')}`] };
  }
  const topo = topology as Topology;
  const slots = SLOTS[topo];

  const rawEls = r.elements;
  if (!Array.isArray(rawEls)) {
    return { ok: false, errors: ['elements must be an array'] };
  }
  if (rawEls.length < slots.min || rawEls.length > slots.max) {
    const want = slots.min === slots.max ? `exactly ${slots.min}` : `${slots.min} to ${slots.max}`;
    return {
      ok: false,
      errors: [
        `topology ${topo} takes ${want} elements, got ${rawEls.length} — the slot count is fixed by the topology and is never padded`,
      ],
    };
  }

  const elements: CircuitElement[] = [];
  for (let i = 0; i < rawEls.length; i++) {
    const e = rawEls[i];
    if (typeof e !== 'object' || e === null || Array.isArray(e)) {
      errors.push(`elements[${i}] must be an object with kind, name and value`);
      continue;
    }
    const el = e as Record<string, unknown>;
    const kind = el.kind;
    if (!isStr(kind) || !(ELEMENT_KINDS as readonly string[]).includes(kind)) {
      errors.push(`elements[${i}].kind must be one of ${ELEMENT_KINDS.join(', ')}`);
      continue;
    }
    const k = kind as ElementKind;
    const name = el.name;
    if (!isStr(name) || name.trim().length < 1 || name.trim().length > MAX_NAME_CHARS) {
      errors.push(
        `elements[${i}].name must be 1 to ${MAX_NAME_CHARS} characters — the ${CELL_PITCH}pt cell pitch cannot hold more`
      );
      continue;
    }
    const value = el.value;
    const max = VALUE_MAX_BY_KIND[k];
    if (!finite(value) || value < VALUE_MIN || value > max) {
      errors.push(
        `elements[${i}].value must be a finite number in ${VALUE_MIN}..${max} (the unit is fixed by kind, never sent as text)`
      );
      continue;
    }
    elements.push({ kind: k, name: name.trim(), value });
  }
  if (errors.length > 0) return { ok: false, errors };

  /* --- kind/topology rules --- */
  for (let i = 0; i < elements.length; i++) {
    const k = elements[i].kind;
    if (k === 'galvanometer' && topo !== 'bridge') {
      errors.push(
        `elements[${i}] is a galvanometer, which only exists in a bridge — it is the null detector across the W-E diagonal and has no slot in a ${topo}`
      );
    }
    if (k === 'switch' && topo !== 'series' && topo !== 'series_parallel') {
      errors.push(
        `elements[${i}] is a switch, which is only allowed in series or series_parallel — in a ${topo} it would change which branches exist rather than break one path`
      );
    }
  }
  if (topo === 'bridge') {
    if (elements[4] && elements[4].kind !== 'galvanometer') {
      errors.push('a bridge needs its galvanometer in slot 4 — slots 0..3 are the four arms');
    }
    for (let i = 0; i < 4; i++) {
      if (elements[i] && elements[i].kind === 'galvanometer') {
        errors.push(`elements[${i}] is a galvanometer on a bridge ARM; the detector goes in slot 4`);
      }
    }
  }

  /* --- a parallel bank may not mix families --- */
  for (const bank of parallelBanks(topo, elements.length)) {
    let resistive = -1;
    let capacitive = -1;
    for (let b = 0; b < bank.length; b++) {
      let hasR = false;
      let hasC = false;
      for (const slot of bank[b]) {
        if (resistanceOf(elements[slot]) > 0) hasR = true;
        if (capacitanceOf(elements[slot]) > 0) hasC = true;
      }
      if (hasR && resistive < 0) resistive = b;
      if (hasC && capacitive < 0) capacitive = b;
    }
    if (resistive >= 0 && capacitive >= 0) {
      errors.push(
        `slots [${bank[resistive].join(',')}] and [${bank[capacitive].join(',')}] are in parallel but one branch is resistive and the other capacitive — r_eq and c_eq are BOTH meaningless there, so this network has no equivalent to report`
      );
      break;
    }
  }

  /* --- scalars --- */
  const source_v = r.source_v;
  if (!finite(source_v) || source_v < SOURCE_V_MIN || source_v > SOURCE_V_MAX) {
    errors.push(`source_v must be a finite number in ${SOURCE_V_MIN}..${SOURCE_V_MAX}`);
  }
  const internal_r = r.internal_r ?? 0;
  if (!finite(internal_r) || internal_r < INTERNAL_R_MIN || internal_r > INTERNAL_R_MAX) {
    errors.push(`internal_r must be a finite number in ${INTERNAL_R_MIN}..${INTERNAL_R_MAX}`);
  }
  const nullCm = r.bridge_null_cm ?? 50;
  if (!finite(nullCm) || nullCm < NULL_CM_MIN || nullCm > NULL_CM_MAX) {
    errors.push(`bridge_null_cm must be a finite number in ${NULL_CM_MIN}..${NULL_CM_MAX}`);
  }
  if (r.show_current !== undefined && typeof r.show_current !== 'boolean') {
    errors.push('show_current must be a boolean');
  }
  if (r.t_frac !== undefined && !finite(r.t_frac)) errors.push('t_frac must be a finite number');
  if (r.bridge_delta !== undefined && !finite(r.bridge_delta)) {
    errors.push('bridge_delta must be a finite number');
  }
  if (r.caption !== undefined && !isStr(r.caption)) errors.push('caption must be a string');
  if (errors.length > 0) return { ok: false, errors };

  const params: CircuitNetworkParams = {
    topology: topo,
    elements,
    source_v: source_v as number,
    internal_r: internal_r as number,
    bridge_null_cm: nullCm as number,
    show_current: r.show_current !== false,
    t_frac: clamp(finite(r.t_frac) ? r.t_frac : 0, 0, 1),
    bridge_delta: clamp(finite(r.bridge_delta) ? r.bridge_delta : 0, -1, 1),
    caption: isStr(r.caption) ? r.caption.slice(0, MAX_CAPTION_CHARS) : '',
  };

  const problems = fitProblems(params, REF_W, REF_H);
  if (problems.length > 0) return { ok: false, errors: problems };

  return { ok: true, params };
}

/* ----------------------------------------------------------------- symbols */

interface Pt { x: number; y: number }
interface Symbols {
  paths: string[];
  lines: { x0: number; y0: number; x1: number; y1: number }[];
  circles: { x: number; y: number; r: number }[];
}

const f2 = (n: number) => n.toFixed(2);

/**
 * A point in the element's OWN frame: `t` along the wire, `s` across it.
 *
 * Every symbol is built from this rather than from a rotation transform,
 * because a bridge arm is diagonal and verify-render's `boundsOf` ignores
 * `transform` entirely — a rotated Rect would be measured at the place it was
 * authored, not the place it is drawn, so assertion 3 would police the wrong
 * rectangle. Baking the angle into the coordinates keeps the checker and the
 * screen looking at the same geometry.
 */
function pt(el: PlacedElement, t: number, s: number): Pt {
  return { x: el.cx + el.ux * t - el.uy * s, y: el.cy + el.uy * t + el.ux * s };
}

/** M/L only — NEVER an `A` arc. verify-render's pathBounds pairs the numbers
 *  in `d` positionally, so an arc's `rx ry rot laf sf` would be read as
 *  coordinates and reported as bounds that do not exist. */
function poly(points: readonly Pt[]): string {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${f2(p.x)} ${f2(p.y)}`).join('');
}

function lineOf(el: PlacedElement, t0: number, s0: number, t1: number, s1: number) {
  const a = pt(el, t0, s0);
  const b = pt(el, t1, s1);
  return { x0: a.x, y0: a.y, x1: b.x, y1: b.y };
}

/** Symbol geometry for one element, in board coordinates. */
export function symbolsFor(el: PlacedElement): Symbols {
  const out: Symbols = { paths: [], lines: [], circles: [] };
  const stub = (from: number) => {
    out.lines.push(lineOf(el, -H, 0, -from, 0));
    out.lines.push(lineOf(el, from, 0, H, 0));
  };

  switch (el.kind) {
    case 'resistor': {
      out.paths.push(
        poly([
          pt(el, -H, 0), pt(el, -11, -ZIG), pt(el, -7, ZIG), pt(el, -3, -ZIG),
          pt(el, 1, ZIG), pt(el, 5, -ZIG), pt(el, 9, ZIG), pt(el, 11, 0), pt(el, H, 0),
        ])
      );
      break;
    }
    case 'inductor': {
      // Four humps, each a half-ellipse sampled as six straight segments.
      const pts: Pt[] = [pt(el, -H, 0), pt(el, -12, 0)];
      for (let k = 0; k < 4; k++) {
        const tc = -12 + 6 * k + 3;
        for (let j = 1; j <= 6; j++) {
          const th = Math.PI - (j * Math.PI) / 6;
          pts.push(pt(el, tc + 3 * Math.cos(th), -6 * Math.sin(th)));
        }
      }
      pts.push(pt(el, H, 0));
      out.paths.push(poly(pts));
      break;
    }
    case 'capacitor': {
      stub(PLATE_T);
      out.lines.push(lineOf(el, -PLATE_T, -PLATE_HALF, -PLATE_T, PLATE_HALF));
      out.lines.push(lineOf(el, PLATE_T, -PLATE_HALF, PLATE_T, PLATE_HALF));
      break;
    }
    case 'cell': {
      stub(PLATE_T);
      out.lines.push(lineOf(el, -PLATE_T, -PLATE_HALF, -PLATE_T, PLATE_HALF));
      out.lines.push(lineOf(el, PLATE_T, -5, PLATE_T, 5));
      break;
    }
    case 'switch': {
      // Drawn OPEN so the symbol reads as a switch rather than as a wire; the
      // reduction treats it as an ideal closed contact (0 Ω) either way, which
      // is what `resistanceOf` says and what the readout reports.
      out.lines.push(lineOf(el, -H, 0, -9, 0));
      out.lines.push(lineOf(el, -9, 0, 7, -9));
      out.lines.push(lineOf(el, 9, 0, H, 0));
      out.lines.push(lineOf(el, 9, 0, 9, -3));
      break;
    }
    case 'lamp': {
      stub(LAMP_R);
      const d = LAMP_R * Math.SQRT1_2;
      out.lines.push(lineOf(el, -d, -d, d, d));
      out.lines.push(lineOf(el, -d, d, d, -d));
      out.circles.push({ x: el.cx, y: el.cy, r: LAMP_R });
      break;
    }
    default: {
      // galvanometer
      stub(GLYPH_R);
      out.circles.push({ x: el.cx, y: el.cy, r: GLYPH_R });
      break;
    }
  }
  return out;
}

/* --------------------------------------------------------------- component */

function CircuitNetwork({
  params, motion, width, height, theme,
}: WidgetRenderProps<CircuitNetworkParams>) {
  const tSv = motion.t_frac;
  const deltaSv = motion.bridge_delta;

  /**
   * Static scaffolding: every wire, symbol, glyph and label, computed from
   * `params` and the measured box ONLY — never from `t_frac` or
   * `bridge_delta`. The network must hold perfectly still while charge fills a
   * capacitor and a needle swings, or the student cannot tell which change the
   * narration is describing. Same rule as projectile_motion's pxPerM ignoring
   * launch angle (CLAUDE.md §3).
   */
  const frame = useMemo(() => {
    const l = layout(params, width, height);
    return {
      l,
      symbols: l.elements.map(symbolsFor),
      sourceLines: sourceLabels(params),
    };
  }, [params, width, height]);

  const d = useMemo(() => derive(params), [params]);

  /**
   * The readout, fitted to the measured width. READOUT_SIZE is chrome and does
   * not scale; how many characters FIT is legitimately a function of the box,
   * which is what `fitReadout` is for — and the caption gives up its
   * characters before any number does.
   */
  const readout = useMemo(() => {
    const parts: string[] = [];
    if (d.r_eq > 0) parts.push(`Req ${fmtOhms(d.r_eq)}`);
    if (d.c_eq > 0) parts.push(`Ceq ${fmtFarad(d.c_eq)}`);
    if (d.i_total > 0) parts.push(`I ${fmtAmps(d.i_total)}`);
    if (params.internal_r > 0) parts.push(`V ${fmtVolts(d.terminal_v)}`);
    if (d.tau > 0) parts.push(`τ ${fmtSeconds(d.tau)}`);
    if (d.r_unknown > 0) parts.push(`X ${fmtOhms(d.r_unknown)}`);
    if (parts.length === 0) parts.push(fmtVolts(params.source_v));
    /*
     * The Devanagari budget defect this widget found is fixed in shared
     * chrome now, not here: `maxChars` takes the text and measures it at
     * CHAR_W_DEVA when it contains any. The local pre-scaling that used to
     * sit on this line would double-count against that fix and truncate a
     * Hindi caption roughly twice as hard as needed.
     *
     * The defect was real and is worth keeping in view: at the old Latin
     * budget a Hindi caption produced a readout 409pt wide on a 343pt board
     * -- assertion 3, "label runs off the board", at 343x236 and 495x270,
     * with 900x430 surviving. It affected every widget with a readout, which
     * is why the fix belongs upstream.
     */
    return fitReadout(params.caption, parts.join('   '), width - 2 * PAD_SIDE);
  }, [params, d, width]);

  /* ---- the two animated quantities, precomputed on the JS thread ---- */

  const run = frame.l.currentRun;
  const runGeom = useMemo(() => {
    const dx = run.x1 - run.x0;
    const dy = run.y1 - run.y0;
    const len = Math.hypot(dx, dy) || 1;
    const ang = Math.atan2(dy, dx);
    // The arrowhead triangle, as three fixed offsets from the moving point.
    // dirArrowHead() computes exactly this but is NOT marked 'worklet', so it
    // cannot be called from the UI thread — the offsets are computed here
    // instead and the worklet only adds them to an interpolated centre.
    const hx = Math.cos(ang) * ARROW_LEN * 0.5;
    const hy = Math.sin(ang) * ARROW_LEN * 0.5;
    const nx = -Math.sin(ang) * ARROW_HALF_W;
    const ny = Math.cos(ang) * ARROW_HALF_W;
    return {
      x0: run.x0, y0: run.y0, dx, dy, len, ang,
      ax: hx, ay: hy,
      bx: -hx + nx, by: -hy + ny,
      cx: -hx - nx, cy: -hy - ny,
    };
  }, [run]);

  const headProps = useAnimatedProps(() => {
    const t = Math.min(1, Math.max(0, tSv.value));
    const x = runGeom.x0 + runGeom.dx * t;
    const y = runGeom.y0 + runGeom.dy * t;
    return {
      d:
        `M${(x + runGeom.ax).toFixed(2)} ${(y + runGeom.ay).toFixed(2)}` +
        `L${(x + runGeom.bx).toFixed(2)} ${(y + runGeom.by).toFixed(2)}` +
        `L${(x + runGeom.cx).toFixed(2)} ${(y + runGeom.cy).toFixed(2)}Z`,
    };
  });

  /**
   * The charge fill: a quad that grows between the capacitor's plates as
   * q(t) = 1 − e^(−2.5 t). Anchored on the two fixed plate corners, so at
   * t_frac 0 it is a valid zero-height quad rather than an unmounted element —
   * `motionFor` defaults an unsupplied key to 0 and 0 must render.
   */
  const fillGeom = useMemo(() => {
    const cap = frame.l.elements.find((e) => e.kind === 'capacitor');
    // Parked ON the source glyph when there is no capacitor, not at (0,0), for
    // the same reason the needle is: verify-render's boundsOf reads this Path
    // whatever its opacity, so a zero-area quad at the origin stretched the
    // ink-coverage bbox to the board's top-left corner — series_parallel
    // measured 93.6% of a 343x236 board where its ink is 68.9%. Assertion 2
    // then passes for the wrong reason, exactly the failure its own
    // RNSVGImage note describes.
    if (!cap) {
      const s = frame.l.source;
      return { ax: s.x, ay: s.y, bx: s.x, by: s.y, vx: 0, vy: 0, on: false };
    }
    const a = pt(cap, -PLATE_T, -PLATE_HALF);
    const b = pt(cap, PLATE_T, -PLATE_HALF);
    // The fill grows ACROSS the plates, along the element's own normal.
    return {
      ax: a.x, ay: a.y, bx: b.x, by: b.y,
      vx: -cap.uy * FILL_SPAN, vy: cap.ux * FILL_SPAN,
      on: true,
    };
  }, [frame]);

  const chargeWindow = CHARGE_WINDOW_TAU;
  const fillProps = useAnimatedProps(() => {
    const t = Math.min(1, Math.max(0, tSv.value));
    const q = 1 - Math.exp(-chargeWindow * t);
    const ax = fillGeom.ax;
    const ay = fillGeom.ay;
    const bx = fillGeom.bx;
    const by = fillGeom.by;
    const vx = fillGeom.vx * q;
    const vy = fillGeom.vy * q;
    return {
      d:
        `M${ax.toFixed(2)} ${ay.toFixed(2)}L${bx.toFixed(2)} ${by.toFixed(2)}` +
        `L${(bx + vx).toFixed(2)} ${(by + vy).toFixed(2)}` +
        `L${(ax + vx).toFixed(2)} ${(ay + vy).toFixed(2)}Z`,
    };
  });

  /**
   * The galvanometer needle. Rotates about the circle's own centre, so nothing
   * is attached to its moving end — see the `animatable` note on the module.
   * At bridge_delta 0 it points straight up, which is a balanced bridge and a
   * perfectly valid frame.
   */
  const pivot = frame.l.galvo ?? frame.l.source;
  const needleProps = useAnimatedProps(() => {
    const v = Math.min(1, Math.max(-1, deltaSv.value));
    const ang = -Math.PI / 2 + v * NEEDLE_SWING;
    return {
      d:
        `M${pivot.x.toFixed(2)} ${pivot.y.toFixed(2)}` +
        `L${(pivot.x + Math.cos(ang) * NEEDLE_R).toFixed(2)} ` +
        `${(pivot.y + Math.sin(ang) * NEEDLE_R).toFixed(2)}`,
    };
  });

  /** Static direction arrows. Params-driven, so they may appear and disappear
   *  with `show_current` without touching the motion invariant. */
  const staticHeads = useMemo(() => {
    if (!params.show_current) return [];
    return [0.32, 0.72].map((t) =>
      dirArrowHead(run.x0 + runGeom.dx * t, run.y0 + runGeom.dy * t, runGeom.ang)
    );
  }, [params.show_current, run, runGeom]);

  const sourceSlots = labelSlots(
    frame.l.source.x, frame.l.source.y, frame.l.source.side, frame.l.source.off
  );

  return (
    <Svg width={width} height={height}>
      {/* Wires. Carved around every element, so a capacitor's gap is a real
          gap and the board never shows a short where the model sent one. */}
      <G>
        {frame.l.wires.map((w, i) => (
          <Line
            key={`w${i}`}
            x1={w.x0} y1={w.y0} x2={w.x1} y2={w.y1}
            stroke={theme.rule}
            strokeWidth={WIRE_STROKE}
            strokeLinecap="round"
          />
        ))}
      </G>

      {/* Element symbols. */}
      {frame.symbols.map((sym, i) => (
        <G key={`s${i}`}>
          {sym.paths.map((p, j) => (
            <Path
              key={`p${j}`}
              d={p}
              fill="none"
              stroke={theme.ink}
              strokeWidth={SYMBOL_STROKE}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {sym.lines.map((ln, j) => (
            <Line
              key={`l${j}`}
              x1={ln.x0} y1={ln.y0} x2={ln.x1} y2={ln.y1}
              stroke={theme.ink}
              strokeWidth={PLATE_STROKE}
              strokeLinecap="round"
            />
          ))}
          {sym.circles.map((c, j) => (
            <Circle
              key={`c${j}`}
              cx={c.x} cy={c.y} r={c.r}
              fill={theme.surface}
              stroke={theme.ink}
              strokeWidth={SYMBOL_STROKE}
            />
          ))}
        </G>
      ))}

      {/* The charge fill, under the plates it sits between. */}
      <AnimatedPath
        animatedProps={fillProps}
        fill={theme.accent}
        fillOpacity={fillGeom.on ? 0.35 : 0}
      />

      {/* The source. A circle at GLYPH_R with its own polarity cross — the
          same radius as the galvanometer, which is why fitProblems polices
          the distance between them. */}
      <Circle
        cx={frame.l.source.x} cy={frame.l.source.y} r={GLYPH_R}
        fill={theme.surface} stroke={theme.ink} strokeWidth={SYMBOL_STROKE}
      />
      <Line
        x1={frame.l.source.x - 5} y1={frame.l.source.y}
        x2={frame.l.source.x + 5} y2={frame.l.source.y}
        stroke={theme.ink} strokeWidth={PLATE_STROKE}
      />
      <Line
        x1={frame.l.source.x} y1={frame.l.source.y - 5}
        x2={frame.l.source.x} y2={frame.l.source.y + 5}
        stroke={theme.ink} strokeWidth={PLATE_STROKE}
      />

      {/* The needle, always mounted, parked invisible off a bridge. */}
      <AnimatedPath
        animatedProps={needleProps}
        fill="none"
        stroke={theme.accent}
        strokeWidth={NEEDLE_STROKE}
        strokeOpacity={frame.l.galvo ? 1 : 0}
        strokeLinecap="round"
      />

      {/* Junction dots. */}
      {frame.l.glyphs
        .filter((g) => g.what === 'node')
        .map((g, i) => (
          <Circle key={`n${i}`} cx={g.x} cy={g.y} r={NODE_R} fill={theme.ink} />
        ))}

      {/* Current direction: fixed arrows from params, plus the one that moves. */}
      {staticHeads.map((p, i) => (
        <Path key={`a${i}`} d={p} fill={theme.inkMuted} />
      ))}
      <AnimatedPath
        animatedProps={headProps}
        fill={theme.accent}
        fillOpacity={params.show_current ? 1 : 0}
      />

      {/* Labels. Every one of these is a Text, i.e. SCAFFOLDING — none of them
          may move, which is what keeps both animatable params legal. */}
      {frame.l.elements.map((el, i) => {
        const [a, b] = labelSlots(el.cx, el.cy, el.side, el.off);
        return (
          <G key={`t${i}`}>
            <SvgText
              x={a.x} y={a.y} fill={theme.ink} fontSize={NAME_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor={a.anchor}
            >
              {el.name}
            </SvgText>
            {el.display !== '' && (
              <SvgText
                x={b.x} y={b.y} fill={theme.inkMuted} fontSize={VALUE_SIZE}
                fontFamily={theme.monoFontFamily} textAnchor={b.anchor}
              >
                {el.display}
              </SvgText>
            )}
          </G>
        );
      })}

      {frame.sourceLines.length === 1 ? (
        <SvgText
          x={sourceSlots[0].x} y={frame.l.source.y + LABEL_SIZE * 0.35}
          fill={theme.ink} fontSize={NAME_SIZE}
          fontFamily={theme.monoFontFamily} textAnchor={sourceSlots[0].anchor}
        >
          {frame.sourceLines[0]}
        </SvgText>
      ) : (
        <G>
          <SvgText
            x={sourceSlots[0].x} y={sourceSlots[0].y} fill={theme.ink}
            fontSize={NAME_SIZE} fontFamily={theme.monoFontFamily}
            textAnchor={sourceSlots[0].anchor}
          >
            {frame.sourceLines[0]}
          </SvgText>
          <SvgText
            x={sourceSlots[1].x} y={sourceSlots[1].y} fill={theme.inkMuted}
            fontSize={VALUE_SIZE} fontFamily={theme.monoFontFamily}
            textAnchor={sourceSlots[1].anchor}
          >
            {frame.sourceLines[1]}
          </SvgText>
        </G>
      )}

      <SvgText
        x={PAD_SIDE} y={READOUT_BAND - READOUT_SIZE * 0.5}
        fill={theme.ink} fontSize={READOUT_SIZE} fontFamily={theme.monoFontFamily}
      >
        {readout}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const circuitNetwork: WidgetModule<CircuitNetworkParams> = {
  id: 'circuit_network',
  version: 1,
  /**
   * Reference 1 — NCERT Class 12 Physics Part I, Ch.3's combination of
   * resistors with a real cell. Chosen as the default because it is the one
   * payload that exercises BOTH reductions (two parallel banks in series) and
   * both readings (ε versus terminal voltage), so a stub renderer cannot look
   * right at defaults.
   */
  defaults: {
    topology: 'series_parallel',
    elements: [
      { kind: 'resistor', name: 'R1', value: 4 },
      { kind: 'resistor', name: 'R2', value: 4 },
      { kind: 'resistor', name: 'R3', value: 12 },
      { kind: 'resistor', name: 'R4', value: 6 },
    ],
    source_v: 16,
    internal_r: 1,
    bridge_null_cm: 50,
    show_current: true,
    t_frac: 0,
    bridge_delta: 0,
    caption: 'Two banks in series',
  },
  /**
   * TWO of the four the pool allows, and BOTH are checked against CLAUDE.md
   * §3's snap-only rule rather than assumed legal.
   *
   * The rule bars a param whose moving geometry is LABEL-TERMINATED: a bond
   * that swings while its atom label stays put draws a wrong molecule, and
   * SCAFFOLDING_TYPES includes Text/TSpan precisely so `scaffoldingDiffs`
   * catches it. Neither of these is that.
   *
   *  `t_frac` (0..1) drives exactly two Paths: a quad that grows between a
   *  capacitor's two plates as q = 1 − e^(−2.5 t), and one arrowhead
   *  travelling along a straight run of wire. Both plates, the wire, the
   *  element name and its value are drawn at FULL extent from `params` on
   *  every frame; nothing is attached to either moving end. At a fractional
   *  value the arrow sits partway along a wire, which is not a mislabelled
   *  component — it is the state that wire is in.
   *
   *  `bridge_delta` (−1..1) rotates ONE needle Path about the galvanometer's
   *  own circle centre. The circle, the arms and every label hold still; a
   *  deflecting needle inside a fixed dial is what a galvanometer does.
   *
   * BOTH ALWAYS RENDER. `motionFor` defaults an unsupplied key to 0, so 0 has
   * to be a valid drawable frame: at t_frac 0 the fill is a zero-height quad
   * with real coordinates (not an unmounted element, which would change the
   * element count between two motion values and be reported as a params/motion
   * violation), and at bridge_delta 0 the needle points straight up, which is
   * a balanced bridge. Off a bridge the needle is parked by strokeOpacity
   * rather than unmounted, for the same reason.
   *
   * EVERYTHING ELSE IS SNAP-ONLY, and not by omission:
   *   `elements` and `topology` change the ELEMENT COUNT — adding a resistor
   *   adds a Path, a Line and two Texts — which is a snap wearing an
   *   animation's clothes.
   *   `kind` swaps one symbol for another; there is no intermediate between a
   *   resistor and a capacitor to interpolate through.
   *   `value` renders as Text, and Text is in SCAFFOLDING_TYPES. A resistance
   *   that tweened while its label stayed at the old number is the exact
   *   wrong diagram the rule exists to prevent — so a lesson that changes a
   *   value does it with a second board event and a fresh `params`, which
   *   re-renders freely.
   */
  animatable: ['t_frac', 'bridge_delta'],
  /**
   * EXACTLY SEVEN, THE SAME SET IN EVERY TOPOLOGY, zeros where inapplicable —
   * a `{{token}}` caption is written before the payload exists, so a derived
   * map whose shape depended on the topology could not be referenced at all.
   */
  derived: ['r_eq', 'c_eq', 'i_total', 'terminal_v', 'power', 'tau', 'r_unknown'],
  computeDerived: derive,
  derivedAliases: {
    r_eq: ['equivalent resistance', 'net resistance', 'total resistance', 'R eq', 'combined'],
    c_eq: ['equivalent capacitance', 'net capacitance', 'C eq', 'combined capacitance'],
    i_total: ['current', 'total current', 'the current', 'I', 'draws'],
    terminal_v: ['terminal voltage', 'terminal p.d.', 'across the cell', 'potential difference'],
    power: ['power', 'dissipated', 'heat', 'watts'],
    tau: ['time constant', 'tau', 'how long', 'charging time'],
    r_unknown: ['unknown resistance', 'the unknown', 'X', 'balance', 'null point'],
  },
  validate,
  Component: CircuitNetwork,
};

export type { CircuitNetworkParams, CircuitElement, Topology, ElementKind };
