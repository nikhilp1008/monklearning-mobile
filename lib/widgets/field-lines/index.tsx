import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import {
  EMPHASIS_STROKE, GLYPH_R, HAIRLINE_STROKE, LABEL_SIZE,
  LINE_STROKE, MARKER_R, READOUT_BAND, READOUT_SIZE, dirArrowHead,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  chargesFor,
  deriveFieldLines,
  neutralPointWorld,
  pathFromWorldPoints,
  terminationPointWorld,
  traceFieldLine,
  PLATE_GAP_M,
  WORLD_HALF_H,
  WORLD_HALF_W,
  type FieldLinesParams,
} from './physics';

/**
 * Chrome constants — device points, never a function of width/height. See
 * docs/small-screen-rendering-rules.md.
 */
const CHARGE_GLYPH_R = GLYPH_R;
const CHARGE_LABEL_SIZE = LABEL_SIZE;
const ANNOTATION_LABEL_SIZE = LABEL_SIZE;
const ANNOTATION_MARKER_R = MARKER_R;
const FIELD_LINE_STROKE = LINE_STROKE;
// Was 2.4 while xy_plot's curve — the same role — was 2.6. Unified in chrome.ts.
const PLATE_STROKE = EMPHASIS_STROKE;
/** Gap, in device points, between a charge's glyph edge and where its field
 *  lines are seeded. Converted to world metres via `/ pxPerM` at render time —
 *  NOT authored as a world constant. This is the exact bug
 *  docs/small-screen-rendering-rules.md documents against this widget: a
 *  fixed-metre seed ring collapses to nothing on a small board because a
 *  world constant was standing in for what should have been a chrome offset. */
const SEED_GAP = 4;


/** FRACTION of board width — a world quantity, not chrome. */
const PAD_SIDE_FRAC = 0.06;
/** FRACTION of board height — a world quantity, not chrome. */
const PAD_BOTTOM_FRAC = 0.06;
/**
 * The top margin holds ONLY the fixed-size readout text — nothing in it
 * scales with the board — so it is sized from that chrome, not from a
 * fraction of the frame. See docs/small-screen-rendering-rules.md's
 * container-sizing rule (added after `projectile-motion`'s PAD.bottom shipped
 * the opposite mistake: a fraction holding fixed content).
 */
const TOP_MARGIN_PX = READOUT_BAND;

const CONFIGURATIONS = ['point', 'dipole', 'like_charges', 'parallel_plates'] as const;
const ANNOTATIONS = ['neutral_point', 'termination'] as const;

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function validate(raw: unknown): ValidationResult<FieldLinesParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const configuration = r.configuration;
  const chargeUc = r.charge_uc;
  const showArrows = r.show_arrows ?? true;
  const annotate = r.annotate ?? null;

  if (
    typeof configuration !== 'string' ||
    !(CONFIGURATIONS as readonly string[]).includes(configuration)
  ) {
    errors.push(`configuration must be one of ${CONFIGURATIONS.join(', ')}`);
  }
  if (typeof chargeUc !== 'number' || !Number.isFinite(chargeUc)) {
    errors.push('charge_uc must be a finite number');
  }
  if (typeof showArrows !== 'boolean') {
    errors.push('show_arrows must be a boolean');
  }
  if (annotate !== null && (typeof annotate !== 'string' || !(ANNOTATIONS as readonly string[]).includes(annotate))) {
    errors.push(`annotate must be null or one of ${ANNOTATIONS.join(', ')}`);
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      configuration: configuration as FieldLinesParams['configuration'],
      // The cap that keeps line density teachable rather than thinned
      // adaptively for a small board — docs/small-screen-rendering-rules.md
      // "what does not survive a small screen". 20 is the ceiling regardless
      // of board size; it is enforced here, not at render time.
      charge_uc: clamp(chargeUc as number, 4, 20),
      show_arrows: showArrows as boolean,
      annotate: annotate as FieldLinesParams['annotate'],
    },
  };
}

/* ----------------------------------------------------------------- component */


function formatField(v: number): string {
  if (v === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(v)));
  const mant = v / Math.pow(10, exp);
  return `${mant.toFixed(2)}e${exp}`;
}

interface SceneLine {
  d: string;
  arrow?: { x: number; y: number; angle: number };
}

function FieldLines({ params, width, height, theme }: WidgetRenderProps<FieldLinesParams>) {
  /*
   * Static scaffolding. Computed from `width`/`height` only — never from
   * `params.charge_uc` — so the scale holds still regardless of how many
   * lines a cue asks for. (This widget has no animatable params at all; see
   * the module export below for why. This computation would still be
   * correct even if it did.)
   */
  const frame = useMemo(() => {
    const left = width * PAD_SIDE_FRAC;
    const right = width * (1 - PAD_SIDE_FRAC);
    const top = TOP_MARGIN_PX;
    const bottom = height * (1 - PAD_BOTTOM_FRAC);
    const plotW = right - left;
    const plotH = bottom - top;
    const cx = (left + right) / 2;
    const cy = (top + bottom) / 2;
    const pxPerM = Math.min(plotW / (2 * WORLD_HALF_W), plotH / (2 * WORLD_HALF_H));
    return { left, right, top, bottom, cx, cy, pxPerM };
  }, [width, height]);

  const d = useMemo(() => deriveFieldLines(params), [params]);

  const scene = useMemo(() => {
    const charges = chargesFor(params);
    // Chrome distance, converted to world metres at render time — never the
    // reverse. See the SEED_GAP comment above.
    const seedGapWorld = (CHARGE_GLYPH_R + SEED_GAP) / frame.pxPerM;
    const absorbR = seedGapWorld;
    const numLines = Math.max(1, Math.round(params.charge_uc));
    const lines: SceneLine[] = [];

    const toArrow = (mid: readonly [number, number], next: readonly [number, number]) => ({
      x: frame.cx + mid[0] * frame.pxPerM,
      y: frame.cy + mid[1] * frame.pxPerM,
      angle: Math.atan2(next[1] - mid[1], next[0] - mid[0]),
    });

    if (params.configuration === 'parallel_plates') {
      const rowSpan = WORLD_HALF_H * 1.2;
      for (let i = 0; i < numLines; i++) {
        const t = numLines === 1 ? 0.5 : i / (numLines - 1);
        const y = -rowSpan / 2 + t * rowSpan;
        const pts: Array<[number, number]> = [
          [-PLATE_GAP_M / 2, y],
          [PLATE_GAP_M / 2, y],
        ];
        lines.push({
          d: pathFromWorldPoints(pts, frame.cx, frame.cy, frame.pxPerM),
          arrow: { x: frame.cx, y: frame.cy + y * frame.pxPerM, angle: 0 },
        });
      }
    } else {
      for (const charge of charges) {
        if (charge.q <= 0) continue; // field lines originate on positive sources only
        const isDipole = params.configuration === 'dipole';
        const other = charges.find((c) => c !== charge);
        const baseAngle =
          isDipole && other ? Math.atan2(other.y - charge.y, other.x - charge.x) : 0;
        // Dipole lines are seeded across an arc facing the other charge, so
        // every traced line curves to its termination inside this widget's
        // fixed world box. All flux from a positive charge does reach the
        // equal-and-opposite negative charge physically, but a line seeded
        // facing away would have to loop far outside a diagram this size —
        // representative, not exhaustive. Point and like_charges seed the
        // full circle; those lines never need to double back.
        const spreadRad = isDipole ? (165 * Math.PI) / 180 : 2 * Math.PI;
        for (let i = 0; i < numLines; i++) {
          const angle = isDipole
            ? baseAngle + (numLines === 1 ? 0 : (i / (numLines - 1) - 0.5) * spreadRad)
            : (i / numLines) * spreadRad;
          const start = {
            x: charge.x + Math.cos(angle) * seedGapWorld,
            y: charge.y + Math.sin(angle) * seedGapWorld,
          };
          const pts = traceFieldLine(charges, start, WORLD_HALF_W, WORLD_HALF_H, absorbR);
          let arrow: SceneLine['arrow'];
          if (pts.length > 3) {
            const mIdx = Math.floor(pts.length * 0.45);
            arrow = toArrow(pts[mIdx], pts[Math.min(pts.length - 1, mIdx + 1)]);
          }
          lines.push({ d: pathFromWorldPoints(pts, frame.cx, frame.cy, frame.pxPerM), arrow });
        }
      }
    }

    return { charges, lines };
  }, [params, frame]);

  const neutral = neutralPointWorld(params);
  const termination = terminationPointWorld(params);
  const showNeutral = neutral && params.annotate === 'neutral_point';
  const showTermination = termination && params.annotate === 'termination';

  return (
    <Svg width={width} height={height}>
      {scene.lines.map((line, i) => (
        <G key={`line${i}`}>
          <Path
            d={line.d}
            fill="none"
            stroke={theme.accent}
            strokeWidth={FIELD_LINE_STROKE}
            strokeLinecap="round"
          />
          {params.show_arrows && line.arrow && (
            <Path d={dirArrowHead(line.arrow.x, line.arrow.y, line.arrow.angle)} fill={theme.accent} />
          )}
        </G>
      ))}

      {params.configuration === 'parallel_plates' ? (
        <G>
          <Line
            x1={frame.cx - (PLATE_GAP_M / 2) * frame.pxPerM}
            y1={frame.top}
            x2={frame.cx - (PLATE_GAP_M / 2) * frame.pxPerM}
            y2={frame.bottom}
            stroke={theme.ink}
            strokeWidth={PLATE_STROKE}
          />
          <Line
            x1={frame.cx + (PLATE_GAP_M / 2) * frame.pxPerM}
            y1={frame.top}
            x2={frame.cx + (PLATE_GAP_M / 2) * frame.pxPerM}
            y2={frame.bottom}
            stroke={theme.ink}
            strokeWidth={PLATE_STROKE}
          />
        </G>
      ) : (
        scene.charges.map((c, i) => {
          const cx = frame.cx + c.x * frame.pxPerM;
          const cy = frame.cy + c.y * frame.pxPerM;
          return (
            <G key={`charge${i}`}>
              <Circle cx={cx} cy={cy} r={CHARGE_GLYPH_R} fill={c.q >= 0 ? theme.accent : theme.ink} />
              <SvgText
                x={cx}
                y={cy + CHARGE_LABEL_SIZE * 0.35}
                fontSize={CHARGE_LABEL_SIZE}
                fill={theme.surface}
                fontFamily={theme.monoFontFamily}
                textAnchor="middle"
              >
                {c.q >= 0 ? '+' : '−'}
              </SvgText>
            </G>
          );
        })
      )}

      {showNeutral && neutral && (
        <Circle
          cx={frame.cx + neutral.x * frame.pxPerM}
          cy={frame.cy + neutral.y * frame.pxPerM}
          r={ANNOTATION_MARKER_R}
          fill="none"
          stroke={theme.ink}
          strokeWidth={HAIRLINE_STROKE}
        />
      )}
      {showTermination && termination && (
        <Circle
          cx={frame.cx + termination.x * frame.pxPerM}
          cy={frame.cy + termination.y * frame.pxPerM}
          r={ANNOTATION_MARKER_R}
          fill="none"
          stroke={theme.ink}
          strokeWidth={HAIRLINE_STROKE}
        />
      )}
      {/* Annotation labels sit at a fixed corner, independent of the marker's
          geometry — pinning label text to a moving physical point risks it
          colliding with a charge glyph's own "+"/"-" label at that exact
          spot (this IS that spot, for `termination`). */}
      {showNeutral && (
        <SvgText
          x={frame.left}
          y={frame.bottom - 4}
          fontSize={ANNOTATION_LABEL_SIZE}
          fill={theme.inkMuted}
          fontFamily={theme.monoFontFamily}
        >
          NEUTRAL POINT — E = 0
        </SvgText>
      )}
      {showTermination && (
        <SvgText
          x={frame.left}
          y={frame.bottom - 4}
          fontSize={ANNOTATION_LABEL_SIZE}
          fill={theme.inkMuted}
          fontFamily={theme.monoFontFamily}
        >
          LINES TERMINATE HERE
        </SvgText>
      )}

      <SvgText
        x={frame.left}
        y={TOP_MARGIN_PX - READOUT_SIZE * 0.5}
        fontSize={READOUT_SIZE}
        fill={theme.ink}
        fontFamily={theme.monoFontFamily}
      >
        {`E ${formatField(d.fieldMagnitude)} N/C    lines ${d.lineCount}`}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const fieldLines: WidgetModule<FieldLinesParams> = {
  id: 'field_lines',
  version: 1,
  defaults: {
    configuration: 'point',
    charge_uc: 10,
    show_arrows: true,
    annotate: null,
  },
  // Empty on purpose: charge_uc is the only numeric param and it drives line
  // COUNT (proportional to charge, by design — see validate()'s comment).
  // Tweening a count continuously would mean Path elements appearing and
  // disappearing mid-tween, which is a snap wearing an animation's clothes,
  // not a real one. Every cue-driven change to this widget snaps and
  // re-renders instead — see physics.ts's header comment.
  animatable: [],
  derived: ['fieldMagnitude', 'lineCount'],
  computeDerived: deriveFieldLines,
  derivedAliases: {
    fieldMagnitude: ['field', 'field strength', 'field magnitude', 'how strong', 'stronger', 'weaker'],
    lineCount: ['lines', 'line count', 'more lines', 'fewer lines', 'density', 'how many lines'],
  },
  validate,
  Component: FieldLines,
};

export type { FieldLinesParams };
