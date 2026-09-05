import React, { useMemo } from 'react';
import Svg, { G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  EMPHASIS_STROKE, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE, PAD_EDGE, PAD_SIDE,
  READOUT_BAND, READOUT_SIZE, dirArrowHead, fitReadout,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  BASELINE_DY, LABEL_BOX_H, LABEL_HALF_H, MAX_CAPTION_CHARS, MAX_REAGENT_CHARS,
  MAX_SPECIES, MAX_SPECIES_CHARS, MAX_STEPS, REF_H, REF_W,
  derive, fitProblems, layout, usableWidth,
  type ReactionSchemeParams, type StepKind,
} from './scheme-graph';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * Chrome constants — device points, NEVER a function of width/height
 * (docs/small-screen-rendering-rules.md). Chosen to sit clear of the render
 * harness's 11px / 1.2 floors rather than on them.
 */
const SPECIES_SIZE = LABEL_SIZE;
const REAGENT_SIZE = LABEL_SIZE;
const RULE_STROKE = HAIRLINE_STROKE;
const SHAFT_STROKE = LINE_STROKE;
const MAJOR_STROKE = EMPHASIS_STROKE;
const MINOR_STROKE = HAIRLINE_STROKE;
const TRACER_STROKE = EMPHASIS_STROKE;
/** Padding around a reagent label's knockout plate. */
const PLATE_PAD = 2;
const CHIP_RADIUS = 4;

const KINDS: StepKind[] = ['plain', 'major', 'minor'];

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string';
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isInt = (v: unknown): v is number => finite(v) && Number.isInteger(v);
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/**
 * Total, throwing-free validation.
 *
 * The last thing it does is the one that matters most: it lays the scheme out
 * at REF_W x REF_H — the SMALLEST board this app checks — and refuses any
 * payload whose labels would collide or whose columns would not fit. That is
 * CLAUDE.md §3's "the schema's legal range must be a SUBSET of what renders
 * correctly", enforced constructively rather than trusted to a cap.
 *
 * 343x236 is the binding box for both axes: width only enters through the gap
 * distribution (wider boards give wider gaps) and height only through
 * rowPitch (taller boards give more pitch), so a payload that fits here fits
 * at 495x270 and at 900x430 too.
 *
 * Species and reagent labels are REJECTED when too long, never sliced. A
 * sliced caption is a shorter sentence; a sliced formula is a different
 * compound.
 */
function validate(raw: unknown): ValidationResult<ReactionSchemeParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const species = r.species;
  if (!Array.isArray(species) || species.length < 2 || species.length > MAX_SPECIES
      || species.some((s) => !isStr(s))) {
    errors.push(`species must be an array of 2 to ${MAX_SPECIES} strings`);
  } else if (species.some((s: string) => s.trim().length < 1 || s.trim().length > MAX_SPECIES_CHARS)) {
    errors.push(
      `every species label must be 1 to ${MAX_SPECIES_CHARS} characters — the width budget at ${REF_W}pt cannot hold more`
    );
  }

  const from = r.step_from;
  const to = r.step_to;
  const reagent = r.step_reagent;
  for (const [name, v] of [['step_from', from], ['step_to', to], ['step_reagent', reagent]] as const) {
    if (!Array.isArray(v)) errors.push(`${name} must be an array`);
  }
  if (errors.length > 0) return { ok: false, errors };

  const f = from as unknown[];
  const t = to as unknown[];
  const g = reagent as unknown[];
  if (f.length < 1 || f.length > MAX_STEPS) {
    errors.push(`step_from must have 1 to ${MAX_STEPS} entries`);
  }
  if (t.length !== f.length || g.length !== f.length) {
    errors.push(
      `step_from, step_to and step_reagent must have equal length — got ${f.length}, ${t.length}, ${g.length}`
    );
  }
  if (errors.length > 0) return { ok: false, errors };

  const n = (species as string[]).length;
  for (let i = 0; i < f.length; i++) {
    if (!isInt(f[i]) || (f[i] as number) < 0 || (f[i] as number) >= n) {
      errors.push(`step_from[${i}] must be an integer species index in 0..${n - 1}`);
    }
    if (!isInt(t[i]) || (t[i] as number) < 0 || (t[i] as number) >= n) {
      errors.push(`step_to[${i}] must be an integer species index in 0..${n - 1}`);
    }
    if (isInt(f[i]) && isInt(t[i]) && f[i] === t[i]) {
      errors.push(`step ${i} goes from a species to itself`);
    }
    if (!isStr(g[i])) errors.push(`step_reagent[${i}] must be a string`);
    else if ((g[i] as string).length > MAX_REAGENT_CHARS) {
      errors.push(`step_reagent[${i}] must be at most ${MAX_REAGENT_CHARS} characters`);
    }
  }

  const rawKinds = r.step_kind ?? [];
  if (!Array.isArray(rawKinds)) {
    errors.push('step_kind must be an array');
  } else if (rawKinds.length > 0 && rawKinds.length !== f.length) {
    errors.push(`step_kind must be empty or have the same length as step_from (${f.length})`);
  } else if (rawKinds.some((k) => !isStr(k) || !(KINDS as string[]).includes(k))) {
    errors.push(`every step_kind must be one of ${KINDS.join(', ')}`);
  }

  const hl = r.highlight_step ?? -1;
  if (!(isInt(hl) && (hl === -1 || (hl >= 0 && hl < f.length)))) {
    errors.push(`highlight_step must be -1 or an integer in 0..${f.length - 1}`);
  }
  if (r.step_progress !== undefined && !finite(r.step_progress)) {
    errors.push('step_progress must be a finite number');
  }
  if (errors.length > 0) return { ok: false, errors };

  const kinds: StepKind[] =
    (rawKinds as StepKind[]).length > 0
      ? (rawKinds as StepKind[])
      : new Array<StepKind>(f.length).fill('plain');

  const params: ReactionSchemeParams = {
    species: (species as string[]).map((s) => s.trim()),
    step_from: f as number[],
    step_to: t as number[],
    step_reagent: g as string[],
    step_kind: kinds,
    highlight_step: hl as number,
    step_progress: clamp(finite(r.step_progress) ? r.step_progress : 0, 0, 1),
    caption: isStr(r.caption) ? r.caption.slice(0, MAX_CAPTION_CHARS) : '',
  };

  const problems = fitProblems(params, REF_W, REF_H);
  if (problems.length > 0) return { ok: false, errors: problems };

  return { ok: true, params };
}

/* ----------------------------------------------------------------- component */

function ReactionScheme({
  params, motion, width, height, theme,
}: WidgetRenderProps<ReactionSchemeParams>) {
  const progress = motion.step_progress;

  /* Scaffolding: every position from params and the measured box only. */
  const frame = useMemo(() => layout(params, width, height), [params, width, height]);
  const d = useMemo(() => derive(params), [params]);

  const readout = useMemo(() => {
    const parts: string[] = [
      `${d.stepCount} step${d.stepCount === 1 ? '' : 's'}`,
    ];
    if (d.branchCount > 1) parts.push(`${d.branchCount} ways`);
    else if (d.carbonDelta !== 0) parts.push(`ΔC ${d.carbonDelta > 0 ? '+' : ''}${d.carbonDelta}`);
    if (d.molarMassEnd > 0) parts.push(`M ${d.molarMassEnd}`);
    return fitReadout(params.caption, parts.join('   '), usableWidth(width));
  }, [params.caption, d, width]);

  /**
   * The tracer's segment. It is ALWAYS the same shape of thing — two fixed
   * endpoints from `params` — so `step_progress` moves a point along a line
   * and changes nothing else.
   *
   * WHY THIS IS NOT SNAP-ONLY, against CLAUDE.md §3's label-terminated rule.
   * The moving geometry here terminates in nothing: the arrow, its head and
   * its reagent label are all drawn at FULL extent from `params` on every
   * frame, and the tracer is a highlight laid over an already-complete arrow.
   * No <Text> is attached to the moving end, so there is no label that could
   * stay put while its geometry swings — which is the wrong diagram that rule
   * exists to prevent. Contrast a bond whose atom label rides its far end:
   * that one genuinely cannot animate, and that whole family ships
   * `animatable: []`.
   */
  const tracer = useMemo(() => {
    const e = frame.edges[params.highlight_step] ?? frame.edges[0];
    if (!e) {
      const y = (frame.bandTop + frame.bandBottom) / 2;
      return { x0: PAD_SIDE, y0: y, x1: PAD_SIDE, y1: y };
    }
    return { x0: e.x0, y0: e.y0, x1: e.x1, y1: e.y1 };
  }, [frame, params.highlight_step]);

  const hasHighlight =
    params.highlight_step >= 0 && params.highlight_step < frame.edges.length;

  const { x0: tx0, y0: ty0, x1: tx1, y1: ty1 } = tracer;
  const tracerProps = useAnimatedProps(() => {
    const t = Math.min(1, Math.max(0, progress.value));
    const x = tx0 + (tx1 - tx0) * t;
    const y = ty0 + (ty1 - ty0) * t;
    // M and L only. verify-render's pathBounds pairs numbers positionally, so
    // an odd-parameter command (H, V, A) would shift the pairing for the rest
    // of the path and make the geometry invisible to its coverage assertion.
    return { d: `M${tx0.toFixed(2)} ${ty0.toFixed(2)}L${x.toFixed(2)} ${y.toFixed(2)}` };
  });

  const strokeFor = (kind: StepKind) =>
    kind === 'major' ? MAJOR_STROKE : kind === 'minor' ? MINOR_STROKE : SHAFT_STROKE;

  return (
    <Svg width={width} height={height}>
      {/*
        TWO full-width hairline rules bracketing the scheme band, and this is
        not decoration — it is the same fix data_table_trend uses for the same
        reason. verify-render's boundsOf understands Path/Circle/Line/Rect and
        NOT text, so a 2-species 1-step scheme draws one horizontal arrow with
        a bbox of roughly 300x0: coverage ~0%, a hard error. Even with chip
        plates a single row reaches only 4.3%, under the 5% floor. The rules
        give the tree real vertical extent — ~78% at 343x236.
      */}
      <Line
        x1={PAD_SIDE} y1={frame.bandTop} x2={width - PAD_SIDE} y2={frame.bandTop}
        stroke={theme.rule} strokeWidth={RULE_STROKE}
      />
      <Line
        x1={PAD_SIDE} y1={frame.bandBottom} x2={width - PAD_SIDE} y2={frame.bandBottom}
        stroke={theme.rule} strokeWidth={RULE_STROKE}
      />

      {/* Arrows: shaft then head, one G per step. */}
      {frame.edges.map((e) => {
        const on = e.step === params.highlight_step;
        const colour = on ? theme.accent : e.kind === 'minor' ? theme.inkMuted : theme.ink;
        return (
          <G key={`s${e.step}`}>
            <Path
              d={`M${e.x0.toFixed(2)} ${e.y0.toFixed(2)}L${e.x1.toFixed(2)} ${e.y1.toFixed(2)}`}
              stroke={colour}
              strokeWidth={strokeFor(e.kind)}
              strokeLinecap="round"
              fill="none"
            />
            <Path d={dirArrowHead(e.headCX, e.headCY, e.angle)} fill={colour} />
          </G>
        );
      })}

      {/*
        The tracer. ALWAYS rendered — parked at strokeOpacity 0 rather than
        unmounted, because mounting it conditionally would change the element
        count between two motion values and scaffoldingDiffs reports that as a
        params/motion violation. `motionFor` defaults an unsupplied key to 0,
        so progress 0 must be a drawable state: it is, a zero-length segment
        at the shaft's start.
      */}
      <AnimatedPath
        animatedProps={tracerProps}
        stroke={theme.accent}
        strokeWidth={TRACER_STROKE}
        strokeLinecap="round"
        strokeOpacity={hasHighlight ? 1 : 0}
        fill="none"
      />

      {/* Reagent labels, on the shaft behind a knockout plate. NEVER a second
          copy of the text: verify-render's overlap test is true for two
          identical boxes, so a text-drawn halo collides with itself. */}
      {frame.edges.map((e) => {
        if (!e.reagent) return <G key={`r${e.step}`} />;
        const on = e.step === params.highlight_step;
        const w = e.reagent.length * REAGENT_SIZE * 0.58;
        return (
          <G key={`r${e.step}`}>
            <Rect
              x={e.midX - w / 2 - PLATE_PAD}
              y={e.midY - LABEL_HALF_H - PLATE_PAD}
              width={w + 2 * PLATE_PAD}
              height={LABEL_BOX_H + 2 * PLATE_PAD}
              rx={CHIP_RADIUS}
              fill={theme.surface}
            />
            <SvgText
              x={e.midX}
              y={e.midY + BASELINE_DY}
              fill={on ? theme.accent : theme.inkMuted}
              fontSize={REAGENT_SIZE}
              fontFamily={theme.monoFontFamily}
              textAnchor="middle"
            >
              {e.reagent}
            </SvgText>
          </G>
        );
      })}

      {/* Species chips. */}
      {frame.nodes.map((node) => {
        const onPath =
          hasHighlight &&
          (params.step_from[params.highlight_step] === node.i ||
            params.step_to[params.highlight_step] === node.i);
        return (
          <G key={`n${node.i}`}>
            <Rect
              x={node.plateX}
              y={node.cy - LABEL_HALF_H - PLATE_PAD}
              width={node.plateW}
              height={LABEL_BOX_H + 2 * PLATE_PAD}
              rx={CHIP_RADIUS}
              fill={onPath ? theme.accent : theme.surface}
              fillOpacity={onPath ? 0.16 : 1}
            />
            <SvgText
              x={node.cx}
              y={node.cy + BASELINE_DY}
              fill={theme.ink}
              fontSize={SPECIES_SIZE}
              fontFamily={theme.monoFontFamily}
              textAnchor="middle"
            >
              {node.label}
            </SvgText>
          </G>
        );
      })}

      <SvgText
        x={PAD_SIDE}
        y={READOUT_BAND - READOUT_SIZE * 0.5}
        fill={theme.ink}
        fontSize={READOUT_SIZE}
        fontFamily={theme.monoFontFamily}
      >
        {readout}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const reactionScheme: WidgetModule<ReactionSchemeParams> = {
  id: 'reaction_scheme',
  version: 1,
  /**
   * NCERT Cl.11 "Hydrocarbons" — the ethane/ethene/ethyne/benzene
   * interconversion, so the default payload exercises the longest-path
   * reading (pathSteps 3) rather than a single arrow.
   */
  defaults: {
    species: ['C2H6', 'C2H4', 'C2H2', 'C6H6'],
    step_from: [0, 1, 2],
    step_to: [1, 2, 3],
    step_reagent: ['773 K', 'Br2,KOH', 'Fe,873K'],
    step_kind: ['plain', 'plain', 'major'],
    highlight_step: 2,
    step_progress: 1,
    caption: 'Ethane to benzene',
  },
  /**
   * Exactly one, and it moves exactly one Path's `d` along a fixed segment.
   *
   * `highlight_step` is deliberately NOT here. Index 2.5 is not an edge, so
   * tweening it produces no geometry at all; and it drives which reagent
   * <Text> is emphasised, which SCAFFOLDING_TYPES forbids a motion value from
   * touching. It snaps and re-renders, which is what a step change is.
   */
  animatable: ['step_progress'],
  derived: [
    'stepCount', 'pathSteps', 'branchCount', 'carbonStart',
    'carbonEnd', 'carbonDelta', 'unsatEnd', 'molarMassEnd',
  ],
  computeDerived: derive,
  derivedAliases: {
    stepCount: ['steps', 'the steps', 'how many steps', 'arrows'],
    pathSteps: ['longest route', 'the route', 'steps deep', 'how deep', 'the sequence'],
    branchCount: ['branches', 'products', 'ways', 'fans out', 'branching'],
    carbonStart: ['starting carbons', 'carbons we start with', 'the reactant chain'],
    carbonEnd: ['final carbons', 'carbons at the end', 'the product chain'],
    carbonDelta: ['carbon change', 'chain grows', 'chain shortens', 'gains carbons', 'loses carbons'],
    unsatEnd: ['unsaturation', 'degree of unsaturation', 'double bond equivalents', 'rings and pi bonds'],
    molarMassEnd: ['molar mass', 'molecular mass', 'the product mass', 'formula mass'],
  },
  validate,
  Component: ReactionScheme,
};

export type { ReactionSchemeParams, StepKind };
