/**
 * `lcr_resonance@1` — |Z|, current and phase against frequency for a series
 * LCR circuit, with f0 marked and the half-power points computed.
 *
 * L3. `xy_plot`'s `named_shape: 'resonance'` draws a real peak and covers the
 * qualitative objectives, but it is a FIXED normalised figure — F0/m = 1,
 * w0 = 1, three fixed dampings — with no R, L or C to read, no impedance, no
 * phase, and no half-power points marked. Two Alternating Current objectives
 * need exactly those: "why a series LCR has a resonant frequency where X_L
 * and X_C are equal", and "derive the bandwidth and half-power frequencies".
 * Neither can be drawn by a curve whose axes carry no circuit.
 *
 * The board draws ONE view at a time — `view` picks it — because three curves
 * with three different y-units on one axis is a graph that teaches nothing.
 */
import React, { useMemo } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import { BoardText as SvgText } from '../board-text';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import { HAIRLINE_STROKE, LABEL_SIZE, PAD_EDGE, READOUT_SIZE } from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  bandwidth, capacitiveReactance, current, halfPowerFrequencies, impedance,
  inductiveReactance, omega0, phase, qFactor,
} from './physics';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const VIEWS = ['impedance', 'current', 'phase', 'reactances'] as const;
export type LcrView = (typeof VIEWS)[number];

export interface LcrResonanceParams {
  view: LcrView;
  /** Resistance, ohm. Animatable: the sharpness of the peak is what it moves. */
  r_ohm: number;
  l_henry: number;
  c_farad: number;
  source_v: number;
  /** The plotted window, as MULTIPLES of w0 — so a view box can never exclude
   *  resonance by construction, whatever L and C are. */
  w_min_rel: number;
  w_max_rel: number;
  /** A marker the narration can slide along the curve, in multiples of w0. */
  probe_rel: number;
  show_half_power: boolean;
  caption: string;
}

const SAMPLES = 160;
const fin = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

export function validate(raw: unknown): ValidationResult<LcrResonanceParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const view = (r.view ?? 'current') as LcrView;
  if (!VIEWS.includes(view)) {
    errors.push(`view must be one of ${VIEWS.join(', ')} — one quantity per board, ` +
                `because three y-units on one axis is a graph that teaches nothing`);
  }
  const num = (k: string, v: unknown, lo: number, hi: number, dflt: number): number => {
    if (v === undefined) return dflt;
    if (!fin(v)) { errors.push(`${k} must be a finite number`); return dflt; }
    if (v <= 0) { errors.push(`${k} must be positive; a series LCR has no negative ${k}`); return dflt; }
    if (v < lo || v > hi) {
      errors.push(`${k} is ${v}, outside the drawable range ${lo} to ${hi}`);
      return dflt;
    }
    return v;
  };
  const R = num('r_ohm', r.r_ohm, 0.1, 1e4, 40);
  const L = num('l_henry', r.l_henry, 1e-6, 1e3, 5);
  const C = num('c_farad', r.c_farad, 1e-12, 1, 80e-6);
  const V = num('source_v', r.source_v, 0.1, 1e4, 230);

  const wMin = fin(r.w_min_rel) ? r.w_min_rel : 0.4;
  const wMax = fin(r.w_max_rel) ? r.w_max_rel : 1.8;
  if (!(wMax > wMin)) errors.push('w_max_rel must be greater than w_min_rel');
  /*
   * THE VIEW BOX MUST CONTAIN RESONANCE. A resonance board whose window
   * excludes f0 draws the one part of the curve the objective is not about,
   * and does it confidently. The window is expressed in MULTIPLES of w0
   * precisely so this is checkable without knowing L and C.
   */
  if (wMin >= 1 || wMax <= 1) {
    errors.push(
      `the window ${wMin} to ${wMax} times w0 does not contain resonance at 1.0 — ` +
      `a resonance board that excludes f0 shows the one part of the curve the ` +
      `objective is not about`);
  }
  if (wMin <= 0) errors.push('w_min_rel must be positive; w = 0 is a pole for X_C');

  const probe = fin(r.probe_rel) ? r.probe_rel : 1;
  if (probe < wMin || probe > wMax) {
    errors.push(`probe_rel ${probe} is outside the plotted window ${wMin} to ${wMax}`);
  }

  const caption = typeof r.caption === 'string' ? r.caption.trim().slice(0, 44) : '';
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      view, r_ohm: R, l_henry: L, c_farad: C, source_v: V,
      w_min_rel: wMin, w_max_rel: wMax, probe_rel: probe,
      show_half_power: r.show_half_power !== false,
      caption,
    },
  };
}

function valueAt(p: LcrResonanceParams, w: number, view: LcrView): number {
  'worklet';
  if (view === 'impedance') return impedance(w, p.r_ohm, p.l_henry, p.c_farad);
  if (view === 'current') return current(w, p.r_ohm, p.l_henry, p.c_farad, p.source_v);
  if (view === 'phase') return phase(w, p.r_ohm, p.l_henry, p.c_farad);
  return inductiveReactance(w, p.l_henry);
}

function LcrResonance({ params, motion, width, height, theme }:
                      WidgetRenderProps<LcrResonanceParams>) {
  const rSv = motion.r_ohm;
  const probeSv = motion.probe_rel;

  /*
   * STATIC SCAFFOLDING, from `params` only — never from the animated R. The
   * axes must hold still while the peak sharpens, or two dampings stop being
   * comparable, which is the one thing this board exists to show.
   */
  const frame = useMemo(() => {
    const left = PAD_EDGE + 30;
    const right = width - PAD_EDGE;
    const top = PAD_EDGE + 4;
    const bottom = height - PAD_EDGE - LABEL_SIZE - 6;
    const w0 = omega0(params.l_henry, params.c_farad);
    const wLo = w0 * params.w_min_rel;
    const wHi = w0 * params.w_max_rel;

    // The y-range is fixed from `params`' R, so a cue that sharpens the peak
    // makes it TALLER rather than rescaling the axis under it.
    let yMax = 0;
    for (let i = 0; i <= SAMPLES; i++) {
      const w = wLo + ((wHi - wLo) * i) / SAMPLES;
      yMax = Math.max(yMax, Math.abs(valueAt(params, w, params.view)));
    }
    if (params.view === 'reactances') {
      for (let i = 0; i <= SAMPLES; i++) {
        const w = wLo + ((wHi - wLo) * i) / SAMPLES;
        yMax = Math.max(yMax, capacitiveReactance(w, params.c_farad));
      }
    }
    if (params.view === 'phase') yMax = Math.PI / 2;
    yMax = yMax > 0 && Number.isFinite(yMax) ? yMax * 1.08 : 1;
    const signed = params.view === 'phase';
    const yMin = signed ? -yMax : 0;

    const x = (w: number) => left + ((w - wLo) / (wHi - wLo)) * (right - left);
    const y = (v: number) => bottom - ((v - yMin) / (yMax - yMin)) * (bottom - top);
    return { left, right, top, bottom, w0, wLo, wHi, yMin, yMax, x, y };
  }, [params, width, height]);

  const pathFor = (view: LcrView, R: number): string => {
    'worklet';
    let d = '';
    for (let i = 0; i <= SAMPLES; i++) {
      const w = frame.wLo + ((frame.wHi - frame.wLo) * i) / SAMPLES;
      const v = view === 'impedance' ? impedance(w, R, params.l_henry, params.c_farad)
        : view === 'current' ? current(w, R, params.l_henry, params.c_farad, params.source_v)
        : view === 'phase' ? phase(w, R, params.l_henry, params.c_farad)
        : inductiveReactance(w, params.l_henry);
      if (!Number.isFinite(v)) continue;
      d += `${i === 0 ? 'M' : 'L'}${frame.x(w).toFixed(2)} ${frame.y(v).toFixed(2)}`;
    }
    return d;
  };

  const curveProps = useAnimatedProps(() => ({ d: pathFor(params.view, rSv.value) }));

  const xc = params.view === 'reactances'
    ? Array.from({ length: SAMPLES + 1 }, (_, i) => {
        const w = frame.wLo + ((frame.wHi - frame.wLo) * i) / SAMPLES;
        return `${i === 0 ? 'M' : 'L'}${frame.x(w).toFixed(2)} ` +
               `${frame.y(capacitiveReactance(w, params.c_farad)).toFixed(2)}`;
      }).join('')
    : '';

  const [hpLo, hpHi] = halfPowerFrequencies(params.r_ohm, params.l_henry, params.c_farad);
  const showHp = params.show_half_power && params.view !== 'reactances' &&
                 hpLo >= frame.wLo && hpHi <= frame.wHi;

  const probeProps = useAnimatedProps(() => {
    const w = frame.w0 * probeSv.value;
    return { cx: frame.x(w), cy: frame.y(valueAt(params, w, params.view)) };
  });
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const unit = params.view === 'impedance' ? '|Z| (ohm)'
    : params.view === 'current' ? 'I (A)'
    : params.view === 'phase' ? 'phase (rad)'
    : 'X (ohm)';

  return (
    <Svg width={width} height={height}>
      <Line x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom}
            stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
      <Line x1={frame.left} y1={frame.top} x2={frame.left} y2={frame.bottom}
            stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />

      {/* f0, always drawn — the window is guaranteed to contain it. */}
      <Line x1={frame.x(frame.w0)} y1={frame.top} x2={frame.x(frame.w0)} y2={frame.bottom}
            stroke={theme.accent} strokeWidth={HAIRLINE_STROKE} strokeDasharray="4 4" />
      <SvgText x={frame.x(frame.w0)} y={frame.top + LABEL_SIZE} fill={theme.accent}
               fontSize={LABEL_SIZE} fontFamily={theme.fontFamily} textAnchor="middle">
        f0
      </SvgText>

      {showHp && [hpLo, hpHi].map((w, i) => (
        <Line key={`hp${i}`} x1={frame.x(w)} y1={frame.top} x2={frame.x(w)} y2={frame.bottom}
              stroke={theme.inkMuted} strokeWidth={HAIRLINE_STROKE} strokeDasharray="2 5" />
      ))}

      {xc ? <Path d={xc} fill="none" stroke={theme.inkMuted}
                  strokeWidth={2} strokeDasharray="6 4" /> : null}
      <AnimatedPath animatedProps={curveProps} fill="none"
                    stroke={theme.accent} strokeWidth={2.4} />
      <AnimatedCircle animatedProps={probeProps} r={4} fill={theme.accent} />

      <SvgText x={frame.left} y={frame.top + LABEL_SIZE} fill={theme.inkMuted}
               fontSize={LABEL_SIZE} fontFamily={theme.fontFamily}>
        {unit}
      </SvgText>
      <SvgText x={frame.left} y={height - PAD_EDGE} fill={theme.inkMuted}
               fontSize={READOUT_SIZE} fontFamily={theme.monoFontFamily}>
        {`f0 ${(frame.w0 / (2 * Math.PI)).toFixed(1)} Hz   Q ${qFactor(params.r_ohm, params.l_henry, params.c_farad).toFixed(2)}   BW ${bandwidth(params.r_ohm, params.l_henry).toFixed(1)} rad/s`}
      </SvgText>
    </Svg>
  );
}

export const lcrResonance: WidgetModule<LcrResonanceParams> = {
  id: 'lcr_resonance' as never,
  version: 1,
  defaults: {
    view: 'current', r_ohm: 40, l_henry: 5, c_farad: 80e-6, source_v: 230,
    w_min_rel: 0.4, w_max_rel: 1.8, probe_rel: 1, show_half_power: true,
    caption: 'Series LCR: current peaks at f0',
  },
  // TWO. R sharpens the peak — the whole of what Q means — and the probe
  // slides along the curve. L and C are deliberately NOT animatable: moving
  // either moves w0 itself, so the f0 marker and the axis would travel with
  // the curve and two dampings would stop being comparable.
  animatable: ['r_ohm', 'probe_rel'],
  derived: ['f0', 'q', 'bandwidth', 'peakCurrent', 'zAtResonance'],
  computeDerived(p) {
    const w0 = omega0(p.l_henry, p.c_farad);
    return {
      f0: w0 / (2 * Math.PI),
      q: qFactor(p.r_ohm, p.l_henry, p.c_farad),
      bandwidth: bandwidth(p.r_ohm, p.l_henry),
      peakCurrent: p.source_v / p.r_ohm,
      zAtResonance: p.r_ohm,
    };
  },
  derivedAliases: {
    f0: ['resonant frequency', 'f0', 'resonance'],
    q: ['q factor', 'q', 'sharpness', 'sharper', 'broader'],
    bandwidth: ['bandwidth', 'half power', 'width'],
    peakCurrent: ['peak current', 'maximum current'],
    zAtResonance: ['impedance at resonance', 'minimum impedance'],
  },
  validate,
  Component: LcrResonance,
};
