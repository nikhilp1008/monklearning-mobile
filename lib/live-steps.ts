/**
 * The working of a snap, step by step, while it is still being written.
 *
 * The API streams each step twice over: `step_partial` frames carrying the
 * step's text so far, then one `step` frame with the finished text. Both key
 * on the step number, so a later frame always replaces an earlier one and a
 * dropped frame heals itself on the next.
 */

export type LiveStep = { n: number; text: string; final: boolean };

/** `steps` with step `next.n` replaced (or added), kept in step order. */
export function upsertLiveStep(steps: LiveStep[] | undefined, next: LiveStep): LiveStep[] {
  const current = steps ?? [];
  const existing = current.find((s) => s.n === next.n);
  // A finished step is never overwritten by a late partial frame for it.
  if (existing?.final && !next.final) return current;
  const text = next.final ? next.text : settledPartial(next.text);
  return [...current.filter((s) => s.n !== next.n), { ...next, text }].sort((a, b) => a.n - b.n);
}

/**
 * A step cut mid-write, trimmed back to the part that renders cleanly.
 *
 * The cut lands anywhere, including inside maths: `v = \sqrt{2` would reach
 * the renderer as an unclosed `$` and show its raw source until the next
 * frame. So an unclosed `$…` (or `$$…`) run is held back until it closes,
 * and so is a half-typed `\command` at the very end. The prose before it is
 * shown as written.
 */
export function settledPartial(text: string): string {
  // Walk the delimiters: `$$` opens/closes a display block, `$` an inline
  // run, `\$` is a literal dollar. Remember where the open run began.
  let openAt = -1;
  let openKind: '$' | '$$' | null = null;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '\\') {
      i += 1;
      continue;
    }
    if (c !== '$') continue;
    const kind = text[i + 1] === '$' ? '$$' : '$';
    if (openKind === null) {
      openKind = kind;
      openAt = i;
    } else if (openKind === kind) {
      openKind = null;
    }
    if (kind === '$$') i += 1;
  }
  const out = openKind === null ? text : text.slice(0, openAt);
  return out.replace(/\\[A-Za-z]*$/, '').trimEnd();
}
