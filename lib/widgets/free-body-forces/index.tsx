import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';

import { LABEL_SIZE, LINE_STROKE, EMPHASIS_STROKE, HAIRLINE_STROKE, bandFor, dirArrowHead, textWidth } from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  ARROW_SCALE, BODY_R, LABEL_GAP, MIN_SEPARATION_DEG,
  derive, layoutFbd, layoutHeadToTail, minSeparationDeg,
  type FbdForce, type FreeBodyParams,
} from './physics';

/**
 * free_body_forces@1 — force arrows on an isolated body, or laid head to
 * tail. See physics.ts for the evidence rows this answers and for why the
 * two-body action–reaction pair is deliberately NOT a mode.
 *
 * SNAP-ONLY. Every arrow terminates in a label, and the label-terminated rule
 * (CLAUDE.md §3) makes that geometry unanimatable: an arrow that swings while
 * its "mg" stays put is a wrong diagram. Change arrives as successive board
 * events with different params, which re-render freely.
 */

const MAX_FORCES = 5;
const MIN_FORCES = 2;
const MAX_LABEL = 8;
const MAX_CAPTION = 40;

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const norm360 = (d: number) => ((d % 360) + 360) % 360;

function validate(raw: unknown): ValidationResult<FreeBodyParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const mode = r.mode ?? 'fbd';
  if (mode !== 'fbd' && mode !== 'head_to_tail') {
    errors.push(`mode must be "fbd" or "head_to_tail"`);
  }
  const body = r.body ?? 'block';
  if (body !== 'block' && body !== 'sphere' && body !== 'particle') {
    errors.push('body must be "block", "sphere" or "particle"');
  }
  const context = r.context ?? 'none';
  if (context !== 'none' && context !== 'floor' && context !== 'incline' && context !== 'string') {
    errors.push('context must be "none", "floor", "incline" or "string"');
  }
  if (mode === 'head_to_tail' && context !== 'none') {
    // Narrow, not permissive: a head-to-tail polygon has no body to stand on
    // a floor. Accepting-and-ignoring would let a payload claim a context the
    // picture does not draw.
    errors.push('head_to_tail takes context "none" — the polygon has no body');
  }

  const rawForces = r.forces;
  const forces: FbdForce[] = [];
  if (!Array.isArray(rawForces) || rawForces.length < MIN_FORCES || rawForces.length > MAX_FORCES) {
    errors.push(`forces must be an array of ${MIN_FORCES}..${MAX_FORCES}`);
  } else {
    rawForces.forEach((f, i) => {
      if (typeof f !== 'object' || f === null) {
        errors.push(`forces[${i}] must be an object`);
        return;
      }
      const ff = f as Record<string, unknown>;
      const label = ff.label;
      const angle = ff.angle_deg;
      const mag = ff.magnitude_rel;
      if (typeof label !== 'string' || label.trim().length === 0 || label.length > MAX_LABEL) {
        errors.push(`forces[${i}].label must be 1..${MAX_LABEL} chars — the book's symbol ("mg", "N", "F_B")`);
        return;
      }
      if (typeof angle !== 'number' || !Number.isFinite(angle)) {
        errors.push(`forces[${i}].angle_deg must be a finite number (anticlockwise from +x; 90 is up)`);
        return;
      }
      if (typeof mag !== 'number' || !Number.isFinite(mag)) {
        errors.push(`forces[${i}].magnitude_rel must be a finite number`);
        return;
      }
      forces.push({
        label: label.trim(),
        angle_deg: norm360(angle),
        /**
         * Floor 0.35, and it is the schema-subset rule, not taste: below it
         * the arrow at 343x236 is shorter than ~28pt and its head crowds the
         * body glyph under the gate's 12px spacing floor. Measured at the
         * corner (5 forces, particle body, smallest board), not at 900x430.
         */
        magnitude_rel: clamp(mag, 0.35, 1),
      });
    });
  }

  if (errors.length === 0) {
    const sep = minSeparationDeg(forces);
    if (sep < MIN_SEPARATION_DEG) {
      errors.push(
        `two forces are ${sep.toFixed(0)}° apart; minimum is ${MIN_SEPARATION_DEG}° — ` +
          `closer than that, their labels collide at 343x236. Merge them or space them.`
      );
    }
  }

  const components = r.components_of ?? -1;
  if (typeof components !== 'number' || !Number.isInteger(components) || components < -1) {
    errors.push('components_of must be -1 or a force index');
  } else if (components >= 0) {
    if (mode !== 'fbd') errors.push('components_of needs mode "fbd"');
    if (components >= forces.length) errors.push(`components_of ${components} is out of range`);
    if (context !== 'incline' && context !== 'string') {
      errors.push('components_of needs context "incline" or "string" — the axis the components resolve onto');
    }
  }

  const incline = r.incline_angle_deg ?? 30;
  if (typeof incline !== 'number' || !Number.isFinite(incline)) {
    errors.push('incline_angle_deg must be a finite number');
  }

  const caption = r.caption ?? '';
  if (typeof caption !== 'string' || caption.length > MAX_CAPTION) {
    errors.push(`caption must be a string of at most ${MAX_CAPTION} chars`);
  }

  if (errors.length > 0) return { ok: false, errors };

  // Degenerate components: a force within 8° of its axis has a sin-component
  // shorter than the arrowhead. The picture would draw a "component" the eye
  // reads as a rendering error, so the schema refuses it.
  if ((components as number) >= 0) {
    const axis = context === 'incline' ? clamp(incline as number, 10, 40) : 90;
    const f = forces[components as number];
    const rel = Math.abs(((f.angle_deg - axis) % 180) + 180) % 180;
    const offAxis = Math.min(rel, 180 - rel);
    if (offAxis < 8 || offAxis > 172) {
      return {
        ok: false,
        errors: [
          `components_of: force "${f.label}" lies within 8° of the resolution axis — ` +
            `one component would be shorter than its own arrowhead`,
        ],
      };
    }
  }

  return {
    ok: true,
    params: {
      mode: mode as FreeBodyParams['mode'],
      body: body as FreeBodyParams['body'],
      context: context as FreeBodyParams['context'],
      incline_angle_deg: clamp(incline as number, 10, 40),
      forces,
      components_of: components as number,
      caption: caption as string,
    },
  };
}

/* ----------------------------------------------------------------- component */

/** Label anchor from the arrow's direction: a label sits beyond the tip,
 *  pulled toward the side the arrow points to. */
function labelPlacement(a: ArrowLike, fontSize: number): { x: number; y: number; anchor: 'start' | 'middle' | 'end' } {
  const rad = (a.angle_deg * Math.PI) / 180;
  const x = a.x2 + (LABEL_GAP + 2) * Math.cos(rad);
  const y = a.y2 - (LABEL_GAP + 2) * Math.sin(rad) + fontSize * 0.35;
  const c = Math.cos(rad);
  const anchor = c > 0.35 ? 'start' : c < -0.35 ? 'end' : 'middle';
  return { x, y, anchor };
}
interface ArrowLike { x2: number; y2: number; angle_deg: number }

function Arrow({
  a, color, width: strokeW, dashed,
}: { a: { x1: number; y1: number; x2: number; y2: number; angle_deg: number }; color: string; width: number; dashed?: boolean }) {
  const rad = (-a.angle_deg * Math.PI) / 180; // screen-space angle for the head
  return (
    <G>
      <Line
        x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
        stroke={color} strokeWidth={strokeW}
        strokeDasharray={dashed ? '5 4' : undefined}
        strokeLinecap="round"
      />
      <Path d={dirArrowHead(a.x2, a.y2, rad)} fill={color} />
    </G>
  );
}

function FreeBodyForces({ params, width, height, theme }: WidgetRenderProps<FreeBodyParams>) {
  const captionShown =
    params.caption.length > 0 && textWidth(params.caption, LABEL_SIZE) <= width - 24;
  const layout = useMemo(
    () =>
      params.mode === 'fbd'
        ? layoutFbd(params, width, height, captionShown ? bandFor(LABEL_SIZE) : 0)
        : null,
    [params, width, height, captionShown]
  );
  const chain = useMemo(
    () => (params.mode === 'head_to_tail' ? layoutHeadToTail(params, width, height) : null),
    [params, width, height]
  );
  const d = useMemo(() => derive(params), [params]);

  const arrows = layout ? layout.arrows : chain ? chain.arrows : [];

  return (
    <Svg width={width} height={height}>
      {/* ghosted scaffold — behind everything, hairline, muted */}
      {layout?.scaffold && (
        <Line
          x1={layout.scaffold.x1} y1={layout.scaffold.y1}
          x2={layout.scaffold.x2} y2={layout.scaffold.y2}
          stroke={theme.rule} strokeWidth={HAIRLINE_STROKE}
        />
      )}

      {/* the isolated body */}
      {layout && params.body === 'block' && (
        <Rect
          x={layout.cx - layout.bodyR} y={layout.cy - layout.bodyR * 0.72}
          width={layout.bodyR * 2} height={layout.bodyR * 1.44}
          fill="none" stroke={theme.ink} strokeWidth={LINE_STROKE}
        />
      )}
      {layout && params.body === 'sphere' && (
        <Circle cx={layout.cx} cy={layout.cy} r={layout.bodyR} fill="none" stroke={theme.ink} strokeWidth={LINE_STROKE} />
      )}
      {layout && params.body === 'particle' && (
        <Circle cx={layout.cx} cy={layout.cy} r={layout.bodyR} fill={theme.ink} />
      )}

      {/* dashed components, under the force they resolve */}
      {layout?.components && (
        <G>
          <Arrow a={layout.components.along} color={theme.inkMuted} width={LINE_STROKE} dashed />
          <Arrow a={layout.components.perp} color={theme.inkMuted} width={LINE_STROKE} dashed />
        </G>
      )}

      {/* the forces */}
      {arrows.map((a, i) => (
        <Arrow key={`f${i}`} a={a} color={theme.accent} width={EMPHASIS_STROKE} />
      ))}

      {/* closure of an unbalanced head-to-tail chain: this dashed segment IS
          the net force, and its number is derive()'s net_rel */}
      {chain?.closure && (
        <Line
          x1={chain.closure.x1} y1={chain.closure.y1}
          x2={chain.closure.x2} y2={chain.closure.y2}
          stroke={theme.ink} strokeWidth={LINE_STROKE} strokeDasharray="6 4"
        />
      )}

      {/* labels — one per force, beyond each tip */}
      {arrows.map((a, i) => {
        const p = labelPlacement(a, LABEL_SIZE);
        return (
          <SvgText
            key={`l${i}`}
            x={p.x} y={p.y}
            fill={theme.ink}
            fontSize={LABEL_SIZE}
            fontFamily={theme.fontFamily}
            textAnchor={p.anchor}
          >
            {a.label}
          </SvgText>
        );
      })}

      {/* component labels: cos/sin of the resolved force's own symbol */}
      {layout?.components && params.components_of >= 0 && (
        <G>
          {([['along', 'cos'], ['perp', 'sin']] as const).map(([k, fn]) => {
            const seg = layout.components![k];
            const p = labelPlacement(seg, LABEL_SIZE - 1);
            const sym = params.forces[params.components_of].label;
            const text = `${sym}·${fn}θ`;
            return (
              <SvgText
                key={k}
                x={p.x} y={p.y}
                fill={theme.inkMuted}
                fontSize={LABEL_SIZE - 1}
                fontFamily={theme.fontFamily}
                textAnchor={p.anchor}
              >
                {text}
              </SvgText>
            );
          })}
        </G>
      )}

      {/* caption, top-left, width-fitted the cheap way: dropped whole if it
          cannot fit — a truncated physics sentence is worse than none */}
      {captionShown && (
          <SvgText
            x={12} y={LABEL_SIZE + 6}
            fill={theme.inkMuted}
            fontSize={LABEL_SIZE}
            fontFamily={theme.fontFamily}
          >
            {params.caption}
          </SvgText>
        )}
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const freeBodyForces: WidgetModule<FreeBodyParams> = {
  id: 'free_body_forces',
  version: 1,
  defaults: {
    mode: 'fbd',
    body: 'block',
    context: 'floor',
    incline_angle_deg: 30,
    forces: [
      { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
      { label: 'N', angle_deg: 90, magnitude_rel: 1 },
    ],
    components_of: -1,
    caption: '',
  },
  // Label-terminated geometry: snap-only by contract, not by choice.
  animatable: [],
  derived: ['net_fx_rel', 'net_fy_rel', 'net_rel'],
  computeDerived: derive,
  derivedAliases: {
    net_rel: ['net force', 'resultant', 'unbalanced', 'balance', 'balanced', 'equilibrium', 'closes'],
    net_fx_rel: ['horizontal net', 'net horizontal force'],
    net_fy_rel: ['vertical net', 'net vertical force'],
  },
  validate,
  Component: FreeBodyForces,
};

export { ARROW_SCALE, BODY_R, MIN_SEPARATION_DEG };
export type { FreeBodyParams, FbdForce };
