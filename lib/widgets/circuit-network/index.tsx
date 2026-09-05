import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  ARROW_HALF_W, ARROW_LEN, EMPHASIS_STROKE, GLYPH_R, HAIRLINE_STROKE, LABEL_SIZE,
  LINE_STROKE, PAD_SIDE, READOUT_BAND, READOUT_SIZE, dirArrowHead, fitReadout,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  CHARGE_WINDOW_TAU, ELEMENT_KINDS, ELEM_LEN, LAMP_R, MAX_CAPTION_CHARS,
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
        `elements[${i}].name must be 1 to ${MAX_NAME_CHARS} characters — the ${REF_W}pt cell pitch cannot hold more`
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
