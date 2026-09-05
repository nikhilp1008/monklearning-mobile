import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  derive,
  metresToPx,
  tickStep,
  trajectoryArea,
  trajectoryPath,
  type ProjectileParams,
} from './physics';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/**
 * Board geometry, landscape. Fractions of the given box.
 *
 * `bottom` is proportional on purpose — it is a layout margin, not a chrome
 * constant, so scaling with the box is correct here (see
 * docs/small-screen-rendering-rules.md — that rule is about font/stroke/glyph
 * sizes staying fixed, not about every fraction in a widget). But a
 * proportional margin still has to be large enough to hold the FIXED chrome
 * stacked inside it: the axis title sits at `ground + TICK_LABEL_SIZE * 3.1`,
 * a fixed 37.2pt below the axis regardless of board size, plus its own
 * ~4pt of descender room. At `bottom: 0.16` that fit at H=430 and H=270 but
 * not H=236 (spec-small, 343x236) — 0.16*236=37.76pt of margin against a
 * ~41.2pt requirement, found by rendering at that board size and running the
 * render harness's off-board-label check. 0.19 clears both real board
 * heights (236 and 270) with room to spare.
 */
const PAD = { left: 0.085, right: 0.03, top: 0.08, bottom: 0.19 } as const;
const SAMPLES = 72;

/**
 * Chrome constants — device points, and NEVER a function of width/height.
 * See CLAUDE.md's frame rule and docs/small-screen-rendering-rules.md.
 *
 * This widget used to compute one shared `tickFont` as
 * `Math.max(9, Math.min(13, width * 0.014))` and derive every other text size
 * and label offset from it by multiplication. That formula never actually
 * operated on a real device: 343/361/495/734 (every board size this app's
 * classroom renders into) all land under the clamp's 9px floor or just above
 * it, and only an unreachable ~900px+ width reaches the 13px ceiling. It was
 * a hardcoded 9 wearing a responsive costume — worth stating plainly, since
 * this file is the reference implementation every other widget is meant to
 * pattern-match. Three independent fixed sizes, chosen by rendering the real
 * SE board box (343x236) and comparing candidates directly rather than by
 * picking values that merely clear the render harness's 11px/1.2 floors —
 * those are floors, not targets.
 */
const TICK_LABEL_SIZE = 12;
const AXIS_TITLE_SIZE = 12;
const READOUT_SIZE = 14;
const GRIDLINE_STROKE = 1.5;

const BODIES: Record<ProjectileParams['body'], number> = {
  moon: 1.62,
  mars: 3.72,
  earth: 9.81,
  jupiter: 24.79,
};

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function validate(raw: unknown): ValidationResult<ProjectileParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const angle = r.launch_angle_deg;
  const speed = r.initial_speed_ms;
  const body = r.body ?? 'earth';
  let gravity = r.gravity_ms2;

  if (typeof angle !== 'number' || !Number.isFinite(angle)) {
    errors.push('launch_angle_deg must be a finite number');
  }
  if (typeof speed !== 'number' || !Number.isFinite(speed) || speed <= 0) {
    errors.push('initial_speed_ms must be a positive finite number');
  }
  if (typeof body !== 'string' || !(body in BODIES)) {
    errors.push(`body must be one of ${Object.keys(BODIES).join(', ')}`);
  }
  // gravity is derivable from body; accept either, prefer an explicit value.
  if (gravity === undefined && typeof body === 'string' && body in BODIES) {
    gravity = BODIES[body as ProjectileParams['body']];
  }
  if (typeof gravity !== 'number' || !Number.isFinite(gravity) || gravity <= 0) {
    errors.push('gravity_ms2 must be a positive finite number');
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      // Floor is 3, not 1, and the reason is a rule not a tuning:
      // THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY.
      // At 1 degree apexX is 0.86 m, so the apex marker lands 4.8px from the
      // origin dot at 343x236 and 9.6px at 900x430 — both under verify-render's
      // 2r+4=12px glyph floor. validate() accepted a payload the gate then
      // rejected. Measured by sweeping every angle at all three board sizes:
      // 1 fails everywhere, 2 still fails at 343x236, 3 is clean at all of them.
      // The fix is to narrow the schema, NEVER to widen the gate.
      // The top of the range is fine: at 89 degrees apexX is the same as at 1
      // (sin 178 = sin 2), but apexHeight is near-maximal, so the marker is far
      // from the origin. Only the low end degenerates.
      launch_angle_deg: clamp(angle as number, 3, 89),
      initial_speed_ms: clamp(speed as number, 1, 200),
      gravity_ms2: clamp(gravity as number, 0.1, 100),
      body: body as ProjectileParams['body'],
    },
  };
}

/* ----------------------------------------------------------------- component */

function ProjectileMotion({
  params,
  motion,
  width,
  height,
  theme,
}: WidgetRenderProps<ProjectileParams>) {
  const angleSv = motion.launch_angle_deg;

  /*
   * Static scaffolding. Computed from `params` only — never from the animated
   * angle — so axes and gridlines hold still while the trajectory sweeps.
   */
  const frame = useMemo(() => {
    const left = width * PAD.left;
    const right = width * (1 - PAD.right);
    const top = height * PAD.top;
    const ground = height * (1 - PAD.bottom);
    const plotW = right - left;
    const plotH = ground - top;
    const pxPerM = metresToPx(params.initial_speed_ms, params.gravity_ms2, plotW, plotH);
    const step = tickStep(plotW / pxPerM);

    const xTicks: number[] = [];
    for (let x = step; x * pxPerM < plotW; x += step) xTicks.push(x);
    const yTicks: number[] = [];
    for (let y = step; y * pxPerM < plotH; y += step) yTicks.push(y);

    return { left, right, top, ground, plotW, plotH, pxPerM, xTicks, yTicks };
  }, [width, height, params.initial_speed_ms, params.gravity_ms2]);

  const d = useMemo(() => derive(params), [params]);

  const pathProps = useAnimatedProps(() => ({
    d: trajectoryPath(
      angleSv.value,
      params.initial_speed_ms,
      params.gravity_ms2,
      frame.left,
      frame.ground,
      frame.pxPerM,
      SAMPLES
    ),
  }));

  const areaProps = useAnimatedProps(() => ({
    d: trajectoryArea(
      angleSv.value,
      params.initial_speed_ms,
      params.gravity_ms2,
      frame.left,
      frame.ground,
      frame.pxPerM,
      SAMPLES
    ),
  }));

  const apexProps = useAnimatedProps(() => {
    const th = (angleSv.value * Math.PI) / 180;
    const v = params.initial_speed_ms;
    const g = params.gravity_ms2;
    return {
      cx: frame.left + ((v * v * Math.sin(2 * th)) / (2 * g)) * frame.pxPerM,
      cy: frame.ground - (Math.pow(v * Math.sin(th), 2) / (2 * g)) * frame.pxPerM,
    };
  });

  return (
    <Svg width={width} height={height}>
      <G>
        {frame.xTicks.map((x) => (
          <G key={`x${x}`}>
            <Line
              x1={frame.left + x * frame.pxPerM}
              y1={frame.top}
              x2={frame.left + x * frame.pxPerM}
              y2={frame.ground}
              stroke={theme.rule}
              strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={frame.left + x * frame.pxPerM}
              y={frame.ground + TICK_LABEL_SIZE * 1.6}
              fill={theme.inkMuted}
              fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily}
              textAnchor="middle"
            >
              {String(x)}
            </SvgText>
          </G>
        ))}
        {frame.yTicks.map((y) => (
          <G key={`y${y}`}>
            <Line
              x1={frame.left}
              y1={frame.ground - y * frame.pxPerM}
              x2={frame.right}
              y2={frame.ground - y * frame.pxPerM}
              stroke={theme.rule}
              strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={frame.left - TICK_LABEL_SIZE * 0.6}
              y={frame.ground - y * frame.pxPerM + TICK_LABEL_SIZE * 0.35}
              fill={theme.inkMuted}
              fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily}
              textAnchor="end"
            >
              {String(y)}
            </SvgText>
          </G>
        ))}
      </G>

      <AnimatedPath animatedProps={areaProps} fill={theme.accent} fillOpacity={0.08} />
      <AnimatedPath
        animatedProps={pathProps}
        fill="none"
        stroke={theme.accent}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Line
        x1={frame.left}
        y1={frame.ground}
        x2={frame.right}
        y2={frame.ground}
        stroke={theme.ink}
        strokeWidth={1.6}
      />
      <Circle cx={frame.left} cy={frame.ground} r={4} fill={theme.ink} />
      <AnimatedCircle animatedProps={apexProps} r={4.5} fill={theme.accent} />

      <SvgText
        x={frame.right}
        y={frame.ground + TICK_LABEL_SIZE * 3.1}
        fill={theme.inkMuted}
        fontSize={AXIS_TITLE_SIZE}
        fontFamily={theme.monoFontFamily}
        textAnchor="end"
      >
        HORIZONTAL DISTANCE (m)
      </SvgText>
      <SvgText
        x={frame.left}
        y={frame.top - TICK_LABEL_SIZE * 0.4}
        fill={theme.ink}
        fontSize={READOUT_SIZE}
        fontFamily={theme.monoFontFamily}
      >
        {`R ${d.range.toFixed(1)} m    H ${d.apexHeight.toFixed(1)} m    t ${d.flightTime.toFixed(2)} s`}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const projectileMotion: WidgetModule<ProjectileParams> = {
  id: 'projectile_motion',
  version: 1,
  defaults: {
    launch_angle_deg: 45,
    initial_speed_ms: 22,
    gravity_ms2: 9.81,
    body: 'earth',
  },
  animatable: ['launch_angle_deg'],
  // The exact shape derive() returns — asserted in
  // lib/widgets/__tests__/derived-consistency.test.ts so the two cannot drift.
  derived: ['range', 'apexHeight', 'flightTime', 'apexX'],
  computeDerived: derive,
  // The words a caption might use for each quantity, for the direction lint
  // (docs/narration-diagram-alignment.md Rule 3). "further"/"closer" cover
  // range read as a horizontal distance; "higher"/"lower" cover apex height.
  derivedAliases: {
    range: ['range', 'distance', 'how far', 'further', 'closer', 'farther'],
    apexHeight: ['height', 'apex', 'peak', 'how high', 'higher', 'lower'],
    flightTime: ['time', 'flight time', 'in the air', 'longer', 'shorter'],
    apexX: ['apex x', 'horizontal distance to the apex'],
  },
  validate,
  Component: ProjectileMotion,
};

export type { ProjectileParams };
