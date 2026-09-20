/**
 * `labelled_figure`'s validation — ONE path, shared by the runtime and the gate.
 *
 * WHY THIS IS ITS OWN FILE. It used to live in `index.tsx`, and the publish
 * gate (`scripts/gate-label-set.mjs`) therefore could not call it: `index.tsx`
 * imports `react-native-svg` at module scope, which a bare node script cannot
 * resolve. So the gate ran `validateLabelSet` + `gateLabelSet` instead — a
 * SECOND, similar, not-identical set of checks.
 *
 * That gap was measured, not theorised. The Taenia set passed the gate at all
 * five frames and the runtime then refused it, because the anchor floor
 * (`tooCloseAnchors`, 2r+4 = 10pt at 343x236) lived in `validate()` alone:
 * `hook` and `sucker` were 5.6pt apart, the widget refused the payload, and
 * the student got a blank board on a set the gate had passed.
 *
 * Nothing in here touches React, react-native-svg or the DOM, and nothing may.
 * That is the property that lets the gate import the real function rather than
 * approximate it. `index.tsx` re-exports it, so the widget module is unchanged.
 */
import type { ValidationResult } from '../types';
import {
  MAX_LABELS_PER_GROUP, MAX_TERM_LINE, MAX_TERM_TOTAL, termCapFor, tooCloseAnchors,
  wrapTerm,
  type FigureArt, type FigureGroup, type LabelRecord, type LabelledFigureParams,
  type Lang, type Side,
} from './figure-layout';


const LANGS: readonly Lang[] = ['english', 'hinglish'];
const SIDES: readonly Side[] = ['left', 'right'];

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
const isFrac = (v: unknown): v is number => typeof v === 'number' && isFinite(v) && v >= 0 && v <= 1;

function readTerm(v: unknown, where: string, errors: string[],
                  allowEmpty = false): { english: string; hinglish: string } | null {
  if (typeof v !== 'object' || v === null) {
    errors.push(`${where}: term must be an object with en and hi`);
    return null;
  }
  const t = v as Record<string, unknown>;
  // BOTH languages, from the first record (§1.2). An `en`-only record is
  // invalid at ingest, not "to be translated later" — retrofitting a second
  // language is how a layout budget gets discovered after the fact.
  // `allowEmpty` is for the label of a SOLE group, and only that. A
  // single-group set draws no caption, so its name is never shown — requiring
  // one meant inventing a name for 46 sets that could only ever be wrong. Both
  // languages must still be PRESENT, they may just both be empty.
  if (allowEmpty && t.english === '' && t.hinglish === '') {
    return { english: '', hinglish: '' };
  }
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
  /* THE PLATE INVARIANT.
   *
   * A problem with the LABELS must never cost the student the PICTURE. Until
   * 2026-09-18 every label and group fault went into `errors`, so one bad
   * group id failed the whole widget and the board went blank with the art
   * sitting in cache, already downloaded.
   *
   * Measured: the Taenia published with `groups: []`, so PublishedLab passed
   * `active_group: ''`, `groupIds.has('')` was false, validate returned
   * ok:false — and the plate did not draw. The publish gate was green, the
   * layout gate was green at all five frames, the bytes verified against R2,
   * and the resolver reported "5 labels, 0 missing" over an empty rectangle.
   *
   * So label faults are collected here instead: the offending labels are
   * DROPPED, the plate still draws, and one warning names the set. Publishing
   * such a set is still refused — by `apply_review.unfit`, which is the layer
   * that can refuse without costing anyone a board. */
  const labelProblems: string[] = [];
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
        labelProblems.push(`groups[${i}] must be an object`); return;
        return;
      }
      const gr = g as Record<string, unknown>;
      if (!isStr(gr.id)) {
        labelProblems.push(`groups[${i}].id must be a non-empty string`); return;
        return;
      }
      if (groupIds.has(gr.id)) {
        labelProblems.push(`groups[${i}]: duplicate group id "${gr.id}"`); return;
        return;
      }
      // Only a SOLE group may be unnamed; with two groups the name is what
      // tells the student which subset they are looking at.
      const label = readTerm(gr.label, `groups[${i}]`, errors,
                             (r.groups as unknown[]).length === 1);
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
        // THE CAP BINDS ON THE LONGEST WRAPPED LINE, NOT THE WHOLE TERM.
        //
        // It is derived from two labels sitting side by side on ONE row, so it
        // only ever described a single-line pill. Terms wrap at the last space
        // — "supra-oesophageal ganglion" becomes two lines of 17 and 8 — and
        // measuring the unwrapped 26 refused a name that fits comfortably.
        // Two published sets were dark for that reason alone, and the fix was
        // being written down as "shorten the vocabulary".
        //
        // The total is still bounded (MAX_TERM_TOTAL) so a term cannot be
        // unbounded prose, and WIDTH is still decided by layout, which places
        // the two-line pill or refuses it.
        const lines = wrapTerm(term[lang]);
        const longest = lines.reduce((a, b) => (a.length >= b.length ? a : b), '');
        // Two limits, and the tighter one wins: what the board can FIT for
        // this line's actual script mixture (`termCapFor`, pure geometry), and
        // what a label may be before it stops being a name (`MAX_TERM_LINE`,
        // editorial). They are applied separately because they answer
        // different questions — folding the ceiling into `termCapFor` made it
        // return one number for every script and undid the measured advance
        // tables.
        const cap = Math.min(termCapFor(longest), MAX_TERM_LINE);
        if (term[lang].length > MAX_TERM_TOTAL) {
          errors.push(
            `${where}: ${lang} term "${term[lang]}" is ${term[lang].length} code units, over ` +
              `the ${MAX_TERM_TOTAL}-unit total. A label is a name, not a sentence.`
          );
        } else if (longest.length > cap) {
          errors.push(
            `${where}: ${lang} term "${term[lang]}" wraps to a longest line of ` +
              `${longest.length} code units ("${longest}"), over the ${cap}-unit cap ` +
              `measured at 343x236. Shorten it in the vocabulary, once — this is not ` +
              `truncated at render time.`
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
        labelProblems.push(`${where}: group "${String(lr.group)}" is not one of the declared groups`);
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
    if (n === 0) labelProblems.push(`group "${g.id}" has no labels`);
  }
  // ANCHORS TOO CLOSE: DROP THE LATER LABEL, NOT THE FIGURE.
  //
  // This was fatal, and it is the single reason 19 published sets drew a plate
  // with no labels on it at all: two anchors under the floor — "epidermis" and
  // "cuticle" 1.3pt apart, "tibia" and "fibula" 3.1pt — refused the whole set,
  // so a student lost eleven good labels to one crowded pair.
  //
  // The floor itself is right: two points that close are not separately
  // readable, and drawing both would be a lie about where each structure is.
  // So the LATER label of the pair goes and every other label stays. Which one
  // is "later" is the authored order, which is the reveal order — the earlier
  // term is the one the author chose to introduce first.
  const dropped = new Set<string>();
  if (art) {
    for (const [a, b, gap] of tooCloseAnchors(labels, art)) {
      const ia = labels.findIndex((l) => l.id === a);
      const ib = labels.findIndex((l) => l.id === b);
      const later = ib >= ia ? b : a;
      const kept = later === b ? a : b;
      if (dropped.has(a) || dropped.has(b)) continue;
      dropped.add(later);
      labelProblems.push(
        `anchors "${a}" and "${b}" are ${gap.toFixed(1)}pt apart at 343x236, under the ` +
        `2r+4 = 10pt glyph floor — "${later}" dropped, "${kept}" kept. Re-point them ` +
        `further apart along their structures to show both.`
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
      // NOT fatal: an unknown active_group means "show no labels", not
      // "show no picture". `''` arrives whenever a set has no groups at all.
      labelProblems.push(
        `active_group "${String(r.active_group)}" is not one of the declared groups`);
    } else {
      active = r.active_group;
    }
  }

  if (errors.length > 0 || !art) return { ok: false, errors };

  // Drop what cannot be drawn, keep the plate. A label whose group is not
  // declared can never be shown, so it is removed rather than carried.
  const orphaned = groups.length === 0
    ? labels
    : labels.filter((l) => !groupIds.has(l.group));
  const drawable = labels.filter((l) => groupIds.has(l.group) && !dropped.has(l.id));
  // COUNT ONLY THE ORPHANS HERE. This used to read `drawable.length <
  // labels.length`, which also counts the labels the anchor floor dropped just
  // above — so the Taenia, whose `sucker` was dropped for sitting 5.6pt from
  // `hook`, was reported as "1 of 5 label(s) belong to no declared group" on a
  // set where all five were correctly grouped. A reason that names the wrong
  // cause sends the repair to the wrong place; each drop is already reported
  // by the check that made it.
  if (orphaned.length > 0) {
    labelProblems.push(
      `${orphaned.length} of ${labels.length} label(s) belong to no ` +
      `declared group and cannot be drawn`);
  }
  if (labelProblems.length > 0) {
    // ONE warning, naming the set, so a corpus sweep can grep for it.
    console.warn(
      `[labelled_figure] ${String(r.asset_slug)}: the plate draws, ` +
      `${drawable.length}/${labels.length} label(s) drawn — ` +
      labelProblems.join('; '));
  }

  return {
    ok: true,
    params: {
      asset_slug: (r.asset_slug as string).trim(),
      art,
      groups,
      labels: drawable,
      lang: lang as Lang,
      active_group: groupIds.has(active) ? active : (groups[0]?.id ?? ''),
    },
  };
}
