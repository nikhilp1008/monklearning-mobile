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
import Svg, { Circle, G, Image as SvgImage, Line, Rect, Text as SvgText } from 'react-native-svg';

import { LABEL_SIZE, READOUT_SIZE, hasDevanagari } from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  ANCHOR_R, LEADER_STROKE, MAX_LABELS_PER_GROUP, MAX_TERM_DEVA, MAX_TERM_LATIN,
  activeLabels, layoutFigure, termCapFor, tooCloseAnchors,
  type FigureArt, type FigureGroup, type LabelRecord, type LabelledFigureParams, type Lang,
  type Side,
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

const LANGS: readonly Lang[] = ['english', 'hinglish'];
const SIDES: readonly Side[] = ['left', 'right'];

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
const isFrac = (v: unknown): v is number => typeof v === 'number' && isFinite(v) && v >= 0 && v <= 1;

function readTerm(v: unknown, where: string, errors: string[]): { english: string; hinglish: string } | null {
  if (typeof v !== 'object' || v === null) {
    errors.push(`${where}: term must be an object with en and hi`);
    return null;
  }
  const t = v as Record<string, unknown>;
  // BOTH languages, from the first record (§1.2). An `en`-only record is
  // invalid at ingest, not "to be translated later" — retrofitting a second
  // language is how a layout budget gets discovered after the fact.
  if (!isStr(t.english) || !isStr(t.hinglish)) {
    errors.push(`${where}: term needs a non-empty english AND hinglish — both languages ship from the start`);
    return null;
  }
  return { english: t.english.trim(), hinglish: t.hinglish.trim() };
}

/**
 * Total, throwing-free validation.
 *
 * NOTE what this does NOT do: it does not truncate an over-long term. §2.4 is
 * explicit — a term over the cap "must be shortened by the author, in the
 * vocabulary, once — not truncated at render time". "Rough endoplasmic
 * reticulum" silently becoming "Rough endoplasmic re" is a wrong label
 * rendered confidently, which is worse than a missing figure. It is rejected,
 * loudly, and routed back to the author.
 *
 * The schema's legal range is a SUBSET of what renders correctly (CLAUDE.md
 * §3): the caps here are all derived at 343x236, the smallest board, and a
 * payload this function returns cannot collide or run off the board at any
 * board size this runtime renders into.
 */
export function validate(raw: unknown): ValidationResult<LabelledFigureParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  if (!isStr(r.asset_slug)) errors.push('asset_slug must be a non-empty string');

  /* --- art --- */
  let art: FigureArt | null = null;
  if (typeof r.art !== 'object' || r.art === null) {
    errors.push('art must be an object');
  } else {
    const a = r.art as Record<string, unknown>;
    /*
     * A bundled asset module id (Metro yields a number; jest-expo yields a
     * `{ testUri }` object for the same require), or a source object pointing
     * at a LOCAL file the resolver already downloaded.
     *
     * What is rejected is the thing that would break the offline guarantee: a
     * URL. `<Image href={{ uri: 'https://…' }} />` would silently make the
     * board fetch at render time, which is the one rule this tier cannot
     * bend. It is checked here rather than trusted, because it is a one-word
     * edit away in any record the resolver loads.
     */
    const src = a.source;
    const okSrc =
      typeof src === 'number' || (typeof src === 'object' && src !== null && !Array.isArray(src));
    if (!okSrc) {
      errors.push('art.source must be a bundled asset id or a local source object, not a string');
    } else if (typeof src === 'object' && src !== null) {
      const uri = (src as Record<string, unknown>).uri;
      if (typeof uri === 'string' && /^(https?|ftp):/i.test(uri)) {
        errors.push(
          `art.source.uri "${uri}" is a remote URL — never a remote URL. ` +
            `The resolver downloads before the class; the board never fetches while rendering.`
        );
      }
    }
    const iw = a.intrinsic_w;
    const ih = a.intrinsic_h;
    if (typeof iw !== 'number' || !isFinite(iw) || iw <= 0) errors.push('art.intrinsic_w must be > 0');
    if (typeof ih !== 'number' || !isFinite(ih) || ih <= 0) errors.push('art.intrinsic_h must be > 0');
    if (okSrc && errors.length === 0 && typeof iw === 'number' && typeof ih === 'number' && iw > 0 && ih > 0) {
      art = { source: src as FigureArt['source'], intrinsic_w: iw, intrinsic_h: ih };
    }
  }

  /* --- groups --- */
  const groups: FigureGroup[] = [];
  const groupIds = new Set<string>();
  // EMPTY IS LEGAL, and it is the normal state of a freshly ingested plate.
  // The review gate withholds LABELS, not art: a plate whose label set is
  // absent or unreviewed is drawn with no labels and therefore no groups.
  // Requiring a group here would turn "nobody has reviewed the anchors yet"
  // into a blank board, which is the failure this widget exists to avoid.
  if (!Array.isArray(r.groups)) {
    errors.push('groups must be an array');
  } else if (r.groups.length > 0) {
    r.groups.forEach((g, i) => {
      if (typeof g !== 'object' || g === null) {
        errors.push(`groups[${i}] must be an object`);
        return;
      }
      const gr = g as Record<string, unknown>;
      if (!isStr(gr.id)) {
        errors.push(`groups[${i}].id must be a non-empty string`);
        return;
      }
      if (groupIds.has(gr.id)) {
        errors.push(`groups[${i}]: duplicate group id "${gr.id}"`);
        return;
      }
      const label = readTerm(gr.label, `groups[${i}]`, errors);
      if (!label) return;
      groupIds.add(gr.id);
      groups.push({ id: gr.id, label });
    });
  }

  /* --- labels --- */
  const labels: LabelRecord[] = [];
  const labelIds = new Set<string>();
  // Same rule as groups: an unlabelled plate is a legal render, not an error.
  // `label-set.ts` still refuses a PUBLISHED set with zero labels — that JSON
  // really is art claiming to be a figure — and the two are different claims.
  if (!Array.isArray(r.labels)) {
    errors.push('labels must be an array');
  } else if (r.labels.length > 0) {
    r.labels.forEach((l, i) => {
      if (typeof l !== 'object' || l === null) {
        errors.push(`labels[${i}] must be an object`);
        return;
      }
      const lr = l as Record<string, unknown>;
      const where = isStr(lr.id) ? `label "${lr.id}"` : `labels[${i}]`;
      if (!isStr(lr.id)) {
        errors.push(`labels[${i}].id must be a non-empty string`);
        return;
      }
      if (labelIds.has(lr.id)) {
        errors.push(`${where}: duplicate label id`);
        return;
      }
      const term = readTerm(lr.term, where, errors);
      if (!term) return;
      for (const lang of LANGS) {
        const cap = termCapFor(term[lang]);
        if (term[lang].length > cap) {
          errors.push(
            `${where}: ${lang} term "${term[lang]}" is ${term[lang].length} code units, over the ` +
              `${cap}-unit cap measured at 343x236. Shorten it in the vocabulary, once — ` +
              `this is not truncated at render time.`
          );
        }
      }
      const anchor = lr.anchor as Record<string, unknown> | undefined;
      if (!anchor || !isFrac(anchor.u) || !isFrac(anchor.v)) {
        errors.push(`${where}: anchor must be { u, v } normalised 0..1 against the art`);
        return;
      }
      if (!isStr(lr.side) || !SIDES.includes(lr.side as Side)) {
        errors.push(`${where}: side must be 'left' or 'right' — it is authored, not derived`);
        return;
      }
      if (!isStr(lr.group) || !groupIds.has(lr.group)) {
        errors.push(`${where}: group "${String(lr.group)}" is not one of the declared groups`);
        return;
      }
      if (lr.v_hint !== undefined && !isFrac(lr.v_hint)) {
        errors.push(`${where}: v_hint must be 0..1 when present`);
        return;
      }
      const via = lr.leader_via as Record<string, unknown> | undefined;
      if (via !== undefined && (!isFrac(via.u) || !isFrac(via.v))) {
        errors.push(`${where}: leader_via must be { u, v } normalised 0..1`);
        return;
      }
      labelIds.add(lr.id);
      labels.push({
        id: lr.id,
        term,
        anchor: { u: anchor.u, v: anchor.v },
        side: lr.side as Side,
        group: lr.group,
        ...(lr.v_hint !== undefined ? { v_hint: lr.v_hint as number } : {}),
        ...(via !== undefined ? { leader_via: { u: via.u as number, v: via.v as number } } : {}),
      });
    });
  }

  if (errors.length > 0) return { ok: false, errors };

  /* --- the density caps, which need the whole set --- */
  for (const g of groups) {
    const n = labels.filter((l) => l.group === g.id).length;
    if (n > MAX_LABELS_PER_GROUP) {
      errors.push(
        `group "${g.id}" has ${n} labels; at most ${MAX_LABELS_PER_GROUP} are drawn at once. ` +
          `Split it — the board holds more, but past this the columns are dense enough that ` +
          `de-collision starts moving labels off their own structures.`
      );
    }
    if (n === 0) errors.push(`group "${g.id}" has no labels — an empty group draws an empty board`);
  }
  if (art) {
    for (const [a, b, gap] of tooCloseAnchors(labels, art)) {
      errors.push(
        `anchors "${a}" and "${b}" are ${gap.toFixed(1)}pt apart at 343x236 — under the ` +
          `2r+4 = 10pt glyph floor. Two points that close are not separately readable on a phone.`
      );
    }
  }

  const lang = r.lang === undefined ? 'english' : r.lang;
  if (!LANGS.includes(lang as Lang)) errors.push(`lang must be 'english' or 'hinglish'`);

  // An UNKNOWN active_group is an error (the typo class); an ABSENT one is
  // the start of the reveal, which is groups[0] by definition of "ordered".
  let active = groups.length > 0 ? groups[0].id : '';
  if (r.active_group !== undefined) {
    if (!isStr(r.active_group) || !groupIds.has(r.active_group)) {
      errors.push(`active_group "${String(r.active_group)}" is not one of the declared groups`);
    } else {
      active = r.active_group;
    }
  }

  if (errors.length > 0 || !art) return { ok: false, errors };

  return {
    ok: true,
    params: {
      asset_slug: (r.asset_slug as string).trim(),
      art,
      groups,
      labels,
      lang: lang as Lang,
      active_group: active,
    },
  };
}

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
          {l.via ? (
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
          )}
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
          <Rect
            x={l.plate.x} y={l.plate.y} width={l.plate.w} height={l.plate.h}
            fill={theme.surface}
          />
          <SvgText
            x={l.tx}
            y={l.ty}
            fontSize={LABEL_SIZE}
            fontFamily={familyFor(l.text)}
            fill={theme.ink}
            textAnchor={l.textAnchor}
          >
            {l.text}
          </SvgText>
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
