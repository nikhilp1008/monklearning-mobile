/**
 * Build-time checks for docs/narration-diagram-alignment.md.
 *
 * No validator before this checked whether the WORDS and the PICTURE agree.
 * `validate()` proves a payload is well-formed; verify-render.mjs proves a
 * diagram is legible; neither has any way to know that a caption saying "the
 * range grows" is being said over a patch that shrinks it. Every existing
 * check passes in that case. The student learns the opposite of the truth,
 * confidently, next to a correct-looking diagram.
 *
 * These are pure functions, not test-only helpers, on purpose: the logic
 * (direction-word detection, before/after comparison via a widget's own
 * `computeDerived`) is real enough to reuse from a server-side content
 * pipeline later, and keeping it beside the contract it checks is clearer
 * than burying it in __tests__.
 */
import type { Cue, WidgetModule } from './types';

const TOKEN_RE = /\{\{(\w+)\}\}/g;
const NUMBER_RE = /-?\d+(?:\.\d+)?/g;

export interface LintResult {
  errors: string[];
  warnings: string[];
}

function emptyResult(): LintResult {
  return { errors: [], warnings: [] };
}

/**
 * Rule 2 — numbers in narration are derived, not written.
 *
 * An unknown `{{token}}` is an ERROR: it means the caption references a
 * quantity this widget cannot compute, which can only be a typo or a stale
 * template. A bare numeral close to a real derived value is a WARNING — it is
 * probably a hardcoded number the model should have expressed as a token
 * instead, but a bare number is not necessarily wrong (a constant, an option
 * label) the way an unknown token always is.
 */
export function lintCaptionTokens<P extends object>(
  caption: string,
  mod: WidgetModule<P>,
  params: P
): LintResult {
  const result = emptyResult();

  TOKEN_RE.lastIndex = 0;
  let tokenMatch: RegExpExecArray | null;
  while ((tokenMatch = TOKEN_RE.exec(caption))) {
    const key = tokenMatch[1];
    if (!mod.derived.includes(key)) {
      result.errors.push(
        `unknown token {{${key}}} — ${mod.id}'s derived list is [${mod.derived.join(', ')}]`
      );
    }
  }

  const values = mod.computeDerived(params);
  const withoutTokens = caption.replace(TOKEN_RE, '');
  NUMBER_RE.lastIndex = 0;
  let numMatch: RegExpExecArray | null;
  while ((numMatch = NUMBER_RE.exec(withoutTokens))) {
    const n = Number(numMatch[0]);
    for (const [key, value] of Object.entries(values)) {
      if (value === 0) continue;
      if (Math.abs(n - value) / Math.abs(value) < 0.05) {
        result.warnings.push(
          `"${numMatch[0]}" is within 5% of ${key}=${value.toFixed(2)} — probably should be {{${key}}}`
        );
      }
    }
  }

  return result;
}

const INCREASE_WORDS = [
  'increase', 'increases', 'grow', 'grows', 'rise', 'rises',
  'more', 'longer', 'higher', 'further', 'farther',
];
const DECREASE_WORDS = [
  'decrease', 'decreases', 'fall', 'falls', 'drop', 'drops',
  'less', 'shorter', 'lower', 'closer',
];
const SAME_WORDS = ['same', 'unchanged', 'identical', 'equal'];

type Direction = 'up' | 'down' | 'same';

function directionOf(lowerCaption: string): Direction | null {
  if (INCREASE_WORDS.some((w) => lowerCaption.includes(w))) return 'up';
  if (DECREASE_WORDS.some((w) => lowerCaption.includes(w))) return 'down';
  if (SAME_WORDS.some((w) => lowerCaption.includes(w))) return 'same';
  return null;
}

/**
 * Rule 3 — direction lint. Cheap and mechanical; it does not prove the
 * diagram teaches the right idea (only rung 4, the human sample reviewed with
 * audio playing, does that) — it catches the sign errors, which are the ones
 * that actually ship.
 *
 * A direction word with no quantity the lint can name is a WARNING that
 * prints the caption, never a silent pass — the alias map is necessarily
 * incomplete on day one, and a lint that finds nothing and reports success is
 * the same false-confidence failure docs/render-verification.md documents for
 * the text-prop reader that found zero labels and passed everything.
 */
export function lintCueDirection<P extends object>(
  cue: Cue,
  mod: WidgetModule<P>,
  basePar: P
): LintResult {
  const result = emptyResult();
  if (!cue.caption) return result;

  const lower = cue.caption.toLowerCase();
  const direction = directionOf(lower);
  if (!direction) return result;

  const candidates: { key: string; alias: string }[] = [];
  for (const [key, aliases] of Object.entries(mod.derivedAliases)) {
    for (const alias of aliases) {
      if (lower.includes(alias.toLowerCase())) candidates.push({ key, alias });
    }
  }
  // Longest alias wins — "how far" should not lose to a shorter substring of
  // an unrelated alias.
  candidates.sort((a, b) => b.alias.length - a.alias.length);
  const matched = candidates[0];

  if (!matched) {
    result.warnings.push(
      `direction word found but no recognisable quantity — caption: "${cue.caption}"`
    );
    return result;
  }

  const merged = { ...basePar, ...(cue.patch as Partial<P>) };
  const checked = mod.validate(merged);
  if (!checked.ok) {
    result.errors.push(`cue patch is invalid: ${checked.errors.join('; ')}`);
    return result;
  }

  const before = mod.computeDerived(basePar)[matched.key];
  const after = mod.computeDerived(checked.params)[matched.key];

  if (direction === 'up' && after <= before) {
    result.errors.push(
      `caption says "${matched.alias}" increases, but ${matched.key} went ${before.toFixed(2)} -> ${after.toFixed(2)}`
    );
  } else if (direction === 'down' && after >= before) {
    result.errors.push(
      `caption says "${matched.alias}" decreases, but ${matched.key} went ${before.toFixed(2)} -> ${after.toFixed(2)}`
    );
  } else if (direction === 'same') {
    const rel = before === 0 ? Math.abs(after) : Math.abs(after - before) / Math.abs(before);
    if (rel > 0.01) {
      result.errors.push(
        `caption says "${matched.alias}" stays the same, but ${matched.key} moved ${(rel * 100).toFixed(1)}%: ${before.toFixed(2)} -> ${after.toFixed(2)}`
      );
    }
  }

  return result;
}

/**
 * Cue integrity — the live-session analogue of a seconds/duration bounds
 * check. There is no `at` or duration here (see `Cue.seq`'s doc comment), so
 * what can actually go wrong is: a cue naming a `seq` absent from its own
 * turn (it will simply never fire), a patch `validate()` rejects (silently
 * dropped today — `use-cue-track` warns in dev and does nothing else), or a
 * widget declaring more animatable params than `useCueTrack`'s fixed pool of
 * 4 (a runtime throw in `__DEV__`, a silent truncation otherwise).
 */
export function lintCueIntegrity<P extends object>(
  cues: readonly Cue[],
  mod: WidgetModule<P>,
  basePar: P,
  turnSeqs: ReadonlySet<number>
): string[] {
  const errors: string[] = [];
  if (mod.animatable.length > 4) {
    errors.push(
      `${mod.id} declares ${mod.animatable.length} animatable params; useCueTrack's pool holds 4`
    );
  }
  for (const cue of cues) {
    if (!turnSeqs.has(cue.seq)) {
      errors.push(`cue.seq=${cue.seq} does not name a board event in this turn`);
    }
    const merged = { ...basePar, ...(cue.patch as Partial<P>) };
    const checked = mod.validate(merged);
    if (!checked.ok) {
      errors.push(`cue.seq=${cue.seq}: patch rejected by validate() — ${checked.errors.join('; ')}`);
    }
  }
  return errors;
}
