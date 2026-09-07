/**
 * The LABEL SET: the wire format an author writes and the resolver reads.
 *
 * One JSON per asset, stored beside its `concept_assets` row. This is what
 * turns a plate into a figure — the art is the same picture with or without it,
 * and the labels are the whole teaching payload.
 *
 * WHY THIS IS A SEPARATE SHAPE FROM `LabelRecord`
 * ----------------------------------------------
 * `figure-layout.ts` already defines what the RENDERER consumes: `term`,
 * `anchor: {u, v}`, `side: 'left' | 'right'`, a required `group`. That shape is
 * tuned for layout and is not a good authoring format — `{u, v}` is a worse
 * thing to type than `[x, y]`, and `left | right` is a rendering decision an
 * author should be able to defer.
 *
 * So there are two shapes and one converter (`toFigureRecord`). The wire format
 * is what the authoring tool writes and what ships in the bucket; the record is
 * what the widget draws. Keeping them separate is what lets the renderer change
 * its mind about placement without invalidating 65 authored files.
 *
 * WHAT IS DELIBERATELY STRICT
 * ---------------------------
 * Every refusal below exists because the alternative renders as something
 * plausible and wrong, which is worse for a figure than for anything else on
 * the board: a mislabelled diagram teaches the wrong word with full confidence.
 */
import type { FigureGroup, LabelRecord, Lang, Side } from './figure-layout';
import type { FigureRecord } from './figure-resolver';

/** Bumped when a change would make an OLD file render differently. Adding an
 *  optional key does not qualify; changing what `anchor` is measured against
 *  does. A file with no `schema_version` is not "version 1 by default" — it is
 *  a file nobody versioned, and it is refused. */
export const LABEL_SET_SCHEMA_VERSION = 1;

/** `auto` is a real answer: "no strong opinion, place it where it fits". It is
 *  NOT the same as omitting `side`, which is an author who did not consider it. */
export type AuthoredSide = 'l' | 'r' | 't' | 'b' | 'auto';

export interface AuthoredLabel {
  id: string;
  /** `hi` is HINGLISH — romanised Latin, not Devanagari. See `LANG_KEY`. */
  text: { en: string; hi: string };
  /** Normalised 0..1 against the IMAGE, not the board. */
  anchor: [number, number];
  side: AuthoredSide;
  group?: string;
  /** Reveal order within a group. Absent means "with the group". */
  reveal?: number;
}

export interface LabelSet {
  asset_slug: string;
  image_w: number;
  image_h: number;
  schema_version: number;
  labels: AuthoredLabel[];
  /**
   * WHO CHECKED THIS, and the reason drafts exist at all.
   *
   * `draft-labels` proposes anchors from the image by vision. A proposal is a
   * guess about where a structure IS, and a wrong one puts a correct word on
   * the wrong part of the body — which reads as authoritative and is the worst
   * failure this whole pipeline can produce. So an unreviewed set is not
   * "lower quality"; it is not shippable, and `isReviewed` is what the resolver
   * asks before caching one.
   *
   * Absent, empty or a placeholder all mean the same thing: nobody has looked.
   */
  reviewed_by?: string;
  /** Optional, and only needed when a figure has more than one group. */
  groups?: FigureGroup[];
}

const PLACEHOLDER = new Set(['', 'unknown', 'tbd', 'n/a', 'na', 'todo', '-', 'null', 'none', '?']);

/**
 * THE ONE PLACE THE LANGUAGE MAPPING LIVES.
 *
 * `hi` HOLDS HINGLISH — romanised Latin, e.g. "Koshika bhitti", NOT
 * "कोशिका भित्ति". The key is two letters because it is a wire format; the
 * language it names is the app's `hinglish`, which is one of exactly two
 * members of `LanguageId` alongside `english`. There is no Devanagari mode and
 * no Devanagari label content.
 *
 * SO THE PRESSURE ON A LABEL IS LENGTH, NOT SCRIPT. `lib/widgets/CLAUDE.md`
 * makes the same point about every widget readout: Hinglish says the same thing
 * in more characters, every time, and the width model is what degrades under
 * that. `MAX_TERM_LATIN` is the cap that binds here; `MAX_TERM_DEVA` and the
 * two Devanagari fixtures stay where they are as a guardrail-liveness test for
 * the width branch, and nothing in a label set reaches them.
 *
 * Isolated rather than inlined so that if this ever does change, it changes
 * here and 65 authored files do not.
 */
export const LANG_KEY: Record<Lang, keyof AuthoredLabel['text']> = {
  english: 'en',
  hinglish: 'hi',
};

export function isReviewed(set: Pick<LabelSet, 'reviewed_by'>): boolean {
  const by = (set.reviewed_by ?? '').trim().toLowerCase();
  return by.length > 0 && !PLACEHOLDER.has(by);
}

/** Every problem, not the first — an author fixing one field per round trip is
 *  how a 65-file batch becomes a week. */
export function validateLabelSet(raw: unknown): { ok: true; set: LabelSet } | { ok: false; errors: string[] } {
  const e: string[] = [];
  if (typeof raw !== 'object' || raw === null) return { ok: false, errors: ['not an object'] };
  const s = raw as Record<string, unknown>;

  if (typeof s.asset_slug !== 'string' || !s.asset_slug.trim()) e.push('asset_slug is required');
  if (s.schema_version !== LABEL_SET_SCHEMA_VERSION) {
    // Not defaulted. A file with no version is a file nobody versioned, and
    // guessing 1 for it is how a v2 reader silently mis-reads a v1 anchor.
    e.push(`schema_version must be ${LABEL_SET_SCHEMA_VERSION}, got ${JSON.stringify(s.schema_version)}`);
  }
  for (const k of ['image_w', 'image_h'] as const) {
    if (typeof s[k] !== 'number' || !(s[k] as number > 0)) {
      // Every anchor is a fraction OF these. Zero makes every label position
      // meaningless while still producing coordinates.
      e.push(`${k} must be a positive number, got ${JSON.stringify(s[k])}`);
    }
  }

  const labels = Array.isArray(s.labels) ? s.labels : null;
  if (!labels) e.push('labels must be an array');
  else if (labels.length === 0) e.push('labels is empty — that is art, not a figure');

  const seen = new Set<string>();
  (labels ?? []).forEach((l: unknown, i: number) => {
    const at = `labels[${i}]`;
    if (typeof l !== 'object' || l === null) { e.push(`${at} is not an object`); return; }
    const L = l as Record<string, unknown>;

    if (typeof L.id !== 'string' || !L.id.trim()) e.push(`${at}.id is required`);
    else if (seen.has(L.id)) e.push(`${at}.id "${L.id}" is a duplicate — a Cue.patch names labels by id`);
    else seen.add(L.id);

    const t = L.text as Record<string, unknown> | undefined;
    for (const k of ['en', 'hi'] as const) {
      const v = t?.[k];
      if (typeof v !== 'string' || PLACEHOLDER.has(v.trim().toLowerCase())) {
        // BOTH languages, always. A half-translated set renders a blank label
        // for one audience and nothing says which.
        e.push(`${at}.text.${k} is missing or a placeholder: ${JSON.stringify(v)}`);
      }
    }

    const a = L.anchor;
    if (!Array.isArray(a) || a.length !== 2 || a.some((n) => typeof n !== 'number')) {
      e.push(`${at}.anchor must be [x, y]`);
    } else if (a.some((n) => (n as number) < 0 || (n as number) > 1)) {
      // Normalised, and checked. An anchor in PIXELS looks like a number and
      // lands off the plate, which is the mistake an editor exporting the
      // wrong units would make.
      e.push(`${at}.anchor must be normalised 0..1 of the image, got [${a.join(', ')}] — pixels?`);
    }

    if (!['l', 'r', 't', 'b', 'auto'].includes(L.side as string)) {
      e.push(`${at}.side must be one of l, r, t, b, auto`);
    }
    if (L.reveal !== undefined && (typeof L.reveal !== 'number' || !Number.isInteger(L.reveal))) {
      e.push(`${at}.reveal must be an integer`);
    }
    if (L.group !== undefined && (typeof L.group !== 'string' || !L.group.trim())) {
      e.push(`${at}.group must be a non-empty string when present`);
    }
  });

  // MIXED grouping is refused, and this is the one place this file is stricter
  // than the schema as written. `figure-layout.ts` requires `group` on every
  // record precisely because a `group: "general"` auto-filled by a tool is a
  // value nobody supplied. Optional-per-label is fine; SOME labels grouped and
  // others not is a set that was half-organised, and picking a bucket for the
  // remainder is exactly the auto-fill that rule forbids.
  const grouped = (labels ?? []).filter((l) => (l as Record<string, unknown>)?.group !== undefined);
  if (grouped.length > 0 && grouped.length !== (labels ?? []).length) {
    e.push(
      `${grouped.length} of ${labels?.length} labels declare a group. Either all do or none do — ` +
        `filling the rest with a default is a value nobody supplied.`
    );
  }

  return e.length ? { ok: false, errors: e } : { ok: true, set: raw as unknown as LabelSet };
}

/** The single group a set falls back to when it declares none. Named, not
 *  invented per-label: one group for the whole figure is a real answer. */
export const SOLE_GROUP = 'all';

/**
 * Wire format -> what the renderer draws.
 *
 * `t` and `b` are ACCEPTED AND RESOLVED, not rendered as authored. The board is
 * 2.09:1 at its widest and the art is letterboxed into it, so a landscape plate
 * leaves almost no vertical margin — a label placed above or below it would sit
 * on the art or off the board. `figure-layout.ts` places into left/right
 * columns for that reason and its `Side` has only those two members.
 *
 * So a `t`/`b`/`auto` label is placed on the side its anchor is nearer, which is
 * what "auto" asks for and the closest honest reading of "top" on a board with
 * no top. This is a documented resolution rather than a silent one: the
 * authoring tool shows which side a label will actually land on.
 */
export function resolveSide(side: AuthoredSide, x: number): Side {
  if (side === 'l') return 'left';
  if (side === 'r') return 'right';
  return x <= 0.5 ? 'left' : 'right';
}

export function toFigureRecord(set: LabelSet, artUri: string | number): FigureRecord {
  const groups: FigureGroup[] =
    set.groups && set.groups.length > 0
      ? set.groups
      : [{ id: SOLE_GROUP, label: { english: 'All labels', hinglish: 'Sabhi labels' } }];

  const labels: LabelRecord[] = [...set.labels]
    // `reveal` orders WITHIN a group; absent sorts last, stably.
    .sort((a, b) => (a.reveal ?? Number.MAX_SAFE_INTEGER) - (b.reveal ?? Number.MAX_SAFE_INTEGER))
    .map((l) => ({
      id: l.id,
      term: { english: l.text.en, hinglish: l.text.hi },
      anchor: { u: l.anchor[0], v: l.anchor[1] },
      side: resolveSide(l.side, l.anchor[0]),
      group: l.group ?? groups[0].id,
    }));

  return {
    asset_slug: set.asset_slug,
    art: {
      source: typeof artUri === 'number' ? artUri : { uri: artUri },
      intrinsic_w: set.image_w,
      intrinsic_h: set.image_h,
    },
    groups,
    labels,
  };
}
