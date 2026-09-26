/**
 * `labelled_figure` — the illustration tier.
 *
 * Sourced-but-unlabelled art plus a label layer we supply, drawn over it with
 * react-native-svg's `Image`. This is the renderer for the ~146
 * `build_class = illustration` rows in `content/concept-archetypes.csv` that
 * no generative widget can draw: labelled anatomy, dissections, floral
 * diagrams.
 *
 * Contract notes that matter here:
 *
 *  - `animatable: []`, and it always will be. CLAUDE.md §3: a widget whose
 *    moving geometry is LABEL-TERMINATED is snap-only. Every moving thing in
 *    this widget ends in a `<Text>`, and `SCAFFOLDING_TYPES` reports any
 *    motion-driven change to `Text`/`Line` as a params/motion violation. The
 *    reveal therefore runs on `params` through successive cues, which
 *    re-render freely — the same call `molecule_struct` and the rest of the
 *    structural family make.
 *  - No fetch, no await, no network. The art is a bundled asset id or a local
 *    file uri the resolver already wrote to disk. See ./figure-resolver.
 *  - No WebView. CLAUDE.md forbids it by name outside `molecule_3d`.
 */
import React, { useMemo } from 'react';
import Svg, { Circle, G, Image as SvgImage, Line, Rect } from 'react-native-svg';
import { BoardText as SvgText } from '../board-text';

import { HAIRLINE_STROKE, LABEL_SIZE, READOUT_SIZE, hasDevanagari } from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  ANCHOR_R, LEADER_STROKE, MAX_LABELS_PER_GROUP, MAX_TERM_DEVA, MAX_TERM_LATIN,
  activeLabels, layoutFigure,
  LEADER_MIN_DRAW, PILL_LINE_H, PILL_RADIUS,
  type LabelledFigureParams, type Lang, type Side,
} from './figure-layout';
import { PLACEHOLDER_FIGURE } from './placeholder-figure';

export type { LabelledFigureParams } from './figure-layout';

/**
 * The Devanagari face the app loads (`app/_layout.tsx`, used at
 * `components/classroom-chrome.tsx:410`). Onest has no Devanagari coverage, so
 * a Devanagari label set in `theme.fontFamily` would render as tofu.
 *
 * THE FACE FOLLOWS THE SCRIPT, NOT THE LANGUAGE. This used to read
 *
 *     params.lang === 'hinglish' ? DEVANAGARI_FONT : theme.fontFamily
 *
 * which is the hinglish-means-Devanagari conflation this repo has now made
 * twice (see figure-layout.ts's `Lang` note, and `git show c482452`).
 * Hinglish is romanised LATIN — the checked-in trees for this widget carried
 * `Koshika bhitti` and `Jeevadravya jhilli`, ordinary Latin strings, set in
 * the Devanagari face on every board. Anek Devanagari covers Latin, so it did
 * not tofu; it just drew the diagram in a different typeface from the board
 * around it, which CLAUDE.md §3 calls out as reading like a bug.
 *
 * Deciding per string also keeps the widget honest with chrome.ts, which now
 * prices each code unit at the advance of the face that draws it. If the face
 * were chosen by language and the width by script, the two would disagree on
 * exactly the mixed-script label both of them exist to get right.
 */
const DEVANAGARI_FONT = 'AnekDevanagari_500Medium';

/* validate() lives in ./validate — a module with no React in its import graph,
 * so scripts/gate-label-set.mjs can import the REAL function instead of
 * approximating it. See the header there for what that gap cost. */
import { validate } from './validate';
export { validate };

/* ----------------------------------------------------------------- component */

function LabelledFigure({ params, width, height, theme }: WidgetRenderProps<LabelledFigureParams>) {
  const layout = useMemo(
    () => layoutFigure(params, width, height),
    [params, width, height]
  );
  const { fit, labels, strip } = layout;
  const familyFor = (text: string) =>
    hasDevanagari(text) ? DEVANAGARI_FONT : theme.fontFamily;

  return (
    <Svg width={width} height={height}>
      {/*
        preserveAspectRatio="none" is LOAD-BEARING, not a stylistic default.
        The fitted rect is computed here (figure-layout.fitRect), so x/y/width/
        height ARE the drawn art exactly. Letting the element letterbox
        internally instead would leave the drawn art smaller than the element
        box, and scripts/verify-render.mjs's new RNSVGImage bounds case — which
        reads exactly these four props — would report an area the art does not
        occupy. Two systems computing the same letterbox two ways is how they
        drift; only one of them computes it.
      */}
      <SvgImage
        x={fit.ox}
        y={fit.oy}
        width={fit.sW}
        height={fit.sH}
        href={params.art.source}
        preserveAspectRatio="none"
      />

      {strip ? (
        <G>
          <Rect
            x={strip.plate.x}
            y={strip.plate.y}
            width={strip.plate.w}
            height={strip.plate.h}
            fill={theme.surface}
          />
          <SvgText
            x={strip.x}
            y={strip.y}
            fontSize={READOUT_SIZE}
            fontFamily={familyFor(strip.text)}
            fill={theme.inkMuted}
            textAnchor="start"
          >
            {strip.text}
          </SvgText>
        </G>
      ) : null}

      {labels.map((l) => (
        <G key={l.id}>
          {/*
            NO LEADER WHEN THERE IS NOTHING TO LEAD. The pill now sits beside
            its own anchor, so under LEADER_MIN_DRAW the line is a smudge
            between two things already touching — and the gate counts it as
            ink either way. `via` is still honoured when an author routed the
            leader deliberately.
          */}
          {l.leaderLen >= LEADER_MIN_DRAW ? (
            l.via ? (
              <>
                <Line
                  x1={l.stub.x} y1={l.stub.y} x2={l.via.x} y2={l.via.y}
                  stroke={theme.ink} strokeWidth={LEADER_STROKE}
                />
                <Line
                  x1={l.via.x} y1={l.via.y} x2={l.anchor.x} y2={l.anchor.y}
                  stroke={theme.ink} strokeWidth={LEADER_STROKE}
                />
              </>
            ) : (
              <Line
                x1={l.stub.x} y1={l.stub.y} x2={l.anchor.x} y2={l.anchor.y}
                stroke={theme.ink} strokeWidth={LEADER_STROKE}
              />
            )
          ) : null}
          {/* Fill only, no stroke — assertion 7's 1.2 floor would otherwise
              become a live risk for a decorative hairline. */}
          <Circle cx={l.anchor.x} cy={l.anchor.y} r={ANCHOR_R} fill={theme.accent} />
          {/*
            A PLATE, not a halo. chrome.ts is explicit and it was verified
            empirically: a halo drawn as the same string twice at the same x/y
            gives verify-render two IDENTICAL text boxes, and its overlap test
            is true for identical boxes — `labels collide: "Labrum" and
            "Labrum"`. One Rect, one Text.
          */}
          {/*
            A STROKED pill now, not a bare fill — it sits ON the art rather
            than in a margin, and without an edge a white plate on pale art
            has no boundary.

            The colour is `theme.rule`, which IS this runtime's hairline. The
            stroke is HAIRLINE_STROKE (1.5), not the 1.0 the brief asked for: verify-render's assertion 7 refuses any stroke below 1.2, so
            a 1px hairline would render and then fail the gate. 1.5 is the
            chrome hairline and the thinnest line this runtime is allowed to
            draw.
          */}
          <Rect
            x={l.plate.x} y={l.plate.y} width={l.plate.w} height={l.plate.h}
            rx={PILL_RADIUS} ry={PILL_RADIUS}
            fill={theme.surface}
            stroke={theme.rule}
            strokeWidth={HAIRLINE_STROKE}
          />
          {/* One <SvgText> per line, not tspans: `dy` on a tspan is measured
              against the PREVIOUS tspan in react-native-svg, so a two-line
              pill drifts if a line is ever empty. Absolute baselines cannot
              drift, and the box model here is the one the gate measures. */}
          {l.lines.map((line, i) => (
            <SvgText
              key={i}
              x={l.tx}
              y={l.ty + i * PILL_LINE_H}
              fontSize={LABEL_SIZE}
              fontFamily={familyFor(l.text)}
              fill={theme.ink}
              textAnchor={l.textAnchor}
            >
              {line}
            </SvgText>
          ))}
        </G>
      ))}
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

/**
 * `defaults` is the bundled placeholder.
 *
 * Deliberate: it makes the dev preview and the render harness work with no
 * asset store, and it is what "the placeholder proves the wiring" means in
 * practice. A real board event never uses it — `BoardWidget` resolves the
 * slug through a `FigureResolver` and validates the resolved record.
 */
export const labelledFigure: WidgetModule<LabelledFigureParams> = {
  id: 'labelled_figure',
  version: 1,
  defaults: {
    asset_slug: PLACEHOLDER_FIGURE.asset_slug,
    art: PLACEHOLDER_FIGURE.art,
    groups: PLACEHOLDER_FIGURE.groups,
    labels: PLACEHOLDER_FIGURE.labels,
    lang: 'english',
    active_group: PLACEHOLDER_FIGURE.groups[0].id,
  },
  /* Snap-only, permanently — see the header. */
  animatable: [],
  derived: ['label_count', 'group_index', 'group_count'],
  computeDerived(params) {
    const i = params.groups.findIndex((g) => g.id === params.active_group);
    return {
      label_count: activeLabels(params).length,
      group_index: i + 1,
      group_count: params.groups.length,
    };
  },
  derivedAliases: {
    label_count: ['labels', 'structures', 'parts'],
    group_index: ['group', 'system'],
    group_count: ['groups', 'systems'],
  },
  validate,
  Component: LabelledFigure,
};

export { MAX_LABELS_PER_GROUP, MAX_TERM_DEVA, MAX_TERM_LATIN };
