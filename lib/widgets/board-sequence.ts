/**
 * A BOARD SEQUENCE — 1 to 3 full boards on one segment, revealed in turn.
 *
 * G1 in docs/widget-gaps.md, and the largest single defect class the
 * 2026-09-19 hand review found: 50 of 191 published boards drew ONE of the
 * several things their objective named. "Choose between Clemmensen and
 * Wolff-Kishner" drew only Clemmensen. "Derive the field inside AND outside a
 * charged shell" drew one Gaussian surface. "The three life-cycle patterns"
 * drew one. Every one of those payloads was valid and rendered perfectly; the
 * widget simply has one configuration per payload and the objective has two.
 *
 * So the fix is not a new subject widget. It is a FRAME: an ordered list of
 * payloads, each a complete board of its own — and deliberately allowed to be
 * DIFFERENT widgets, because "compare a projectile at 30 and at 60 degrees"
 * is two `projectile_motion`s while "Gabriel versus ammonolysis" is two
 * `reaction_scheme`s and "the shell, then the field it produces" is not
 * necessarily either.
 *
 * REVEAL USES THE SAME CLOCK AS EVERYTHING ELSE. A step names the board-event
 * `seq` whose sentence introduces it, exactly as `Cue.seq` does, and for the
 * same reason: a live session has no seconds to anchor to, so a step cannot
 * fire early or late — it fires when its sentence is spoken, by construction.
 * Step 0 has no seq and is shown with the board itself.
 *
 * WHAT THIS MODULE DOES NOT DO: it does not validate a payload. Each step goes
 * through its own widget's `validate()`, unchanged — one validation path, the
 * rule this corpus has already paid to learn twice.
 */
import type { WidgetPayload } from './types';

/** The most boards one segment may carry. Three is the cap because the strip
 *  reads "1/3" and a student tracking four parallel cases has stopped
 *  comparing and started memorising. */
export const MAX_STEPS = 3;

export interface BoardStep<P extends object = Record<string, unknown>> {
  payload: WidgetPayload<P>;
  /** Shown under this step's board. English only — `hi == en` by standing
   *  rule, so a second field would be a second place to get it wrong. */
  caption: string;
  /**
   * The board-event `seq` at which this step is revealed. Absent on step 0,
   * required and strictly increasing afterwards: two steps sharing a seq
   * would both want the board at the same sentence and the later one would
   * silently win.
   */
  seq?: number;
  /** Tier-3 fallback for THIS step, if its widget cannot draw on this host. */
  fallback_svg?: string;
}

export interface BoardSequence {
  kind: 'board_sequence';
  steps: readonly BoardStep[];
}

export interface SequenceValidation {
  ok: boolean;
  /** The steps that survived, renumbered. Empty only when `ok` is false. */
  steps: readonly BoardStep[];
  /** Fatal problems — the sequence cannot be shown at all. */
  errors: readonly string[];
  /** Steps dropped, with the reason. The rest still show. */
  dropped: readonly string[];
}

const isStr = (v: unknown): v is string =>
  typeof v === 'string' && v.trim().length > 0;

export function isBoardSequence(v: unknown): v is BoardSequence {
  return (
    typeof v === 'object' && v !== null &&
    (v as { kind?: unknown }).kind === 'board_sequence' &&
    Array.isArray((v as { steps?: unknown }).steps)
  );
}

/**
 * Shape and ordering only. Payload validity is the widget's own business and
 * is checked by the caller, which owns the registry — see `validateSequence`
 * in ./board-sequence-validate for the version that does both.
 */
export function readSequence(raw: unknown): SequenceValidation {
  const errors: string[] = [];
  if (!isBoardSequence(raw)) {
    return { ok: false, steps: [], errors: ['not a board_sequence'], dropped: [] };
  }
  const steps = raw.steps as BoardStep[];
  if (steps.length === 0) {
    return { ok: false, steps: [], errors: ['a sequence with no steps is not a sequence'], dropped: [] };
  }
  if (steps.length > MAX_STEPS) {
    errors.push(
      `${steps.length} steps, and the cap is ${MAX_STEPS} — past three a student ` +
      `tracking parallel cases has stopped comparing and started memorising`);
  }
  steps.forEach((s, i) => {
    if (typeof s !== 'object' || s === null) {
      errors.push(`step ${i} is not an object`);
      return;
    }
    if (!s.payload || !isStr((s.payload as WidgetPayload).widget)) {
      errors.push(`step ${i} has no widget payload`);
    }
    if (!isStr(s.caption)) {
      // EVERY STEP IS CAPTIONED, including the first. A sequence is a
      // comparison and an uncaptioned panel is the half the reader cannot
      // name; the whole point is that they can tell the cases apart.
      errors.push(`step ${i} has no caption — every step in a comparison must say which case it is`);
    }
    if (i === 0) {
      if (s.seq !== undefined) errors.push('step 0 must not name a seq; it is shown with the board');
    } else {
      if (typeof s.seq !== 'number' || !Number.isFinite(s.seq)) {
        errors.push(`step ${i} needs a finite seq — the sentence that introduces it`);
      } else {
        const prev = steps[i - 1].seq ?? -Infinity;
        if (s.seq <= prev) {
          errors.push(
            `step ${i} has seq ${s.seq}, not greater than step ${i - 1}'s ${prev} — ` +
            `two steps at one sentence means the later silently wins`);
        }
      }
    }
  });
  if (errors.length > 0) return { ok: false, steps: [], errors, dropped: [] };
  return { ok: true, steps, errors: [], dropped: [] };
}

/**
 * Which step is showing, given how far the turn has been revealed.
 *
 * The greatest step whose `seq` is `<= activeSeq`, mirroring `Cue`'s rule.
 * A null `activeSeq` — a host with no reveal clock, e.g. a preview — shows
 * step 0, never the last: a sequence read backwards teaches the comparison in
 * reverse.
 */
export function stepAt(steps: readonly BoardStep[], activeSeq: number | null): number {
  if (steps.length === 0) return -1;
  if (activeSeq === null) return 0;
  let at = 0;
  for (let i = 1; i < steps.length; i++) {
    const s = steps[i].seq;
    if (typeof s === 'number' && s <= activeSeq) at = i;
    else break;
  }
  return at;
}
