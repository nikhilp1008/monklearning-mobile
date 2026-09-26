/**
 * A sequence, with every step run through its OWN widget's `validate()`.
 *
 * Split from ./board-sequence so that module stays free of the registry, and
 * so the API's node CLI can import the shape check without dragging every
 * widget — and therefore react-native-svg — into its graph. The same split,
 * and the same reason, as labelled-figure's validate.ts.
 *
 * THE DEGRADE RULE, which is the plate invariant one level up: a step the
 * widget refuses is DROPPED and the rest still show, renumbered, so the strip
 * reads 1/2 rather than a hole at 2/3. A problem with one case must not cost
 * the student the other case. Only a sequence with NOTHING left is refused.
 *
 * At PUBLISH time a dropped step is a refusal — `gateSequence` below — for
 * the same reason a dropped label is: a board we are about to freeze should
 * draw everything it declares. Runtime degrades; publish refuses.
 */
import { readSequence, type BoardStep, type SequenceValidation } from './board-sequence';
import { lookup } from './registry';

export function validateSequence(raw: unknown): SequenceValidation {
  const shape = readSequence(raw);
  if (!shape.ok) return shape;

  const kept: BoardStep[] = [];
  const dropped: string[] = [];
  shape.steps.forEach((s, i) => {
    const mod = lookup(s.payload.widget, s.payload.version);
    const fail = (why: string) => {
      // TIER 3, PER STEP. A step that cannot draw as a widget still draws if
      // it carried an SVG, and the comparison survives with that case in it.
      // Dropping a case the author DID supply art for would lose the very
      // thing the sequence exists to show.
      if (s.fallback_svg) {
        kept.push({ ...s, payload: { ...s.payload, widget: '', params: {} as never } });
        return;
      }
      dropped.push(why);
    };
    if (!mod) {
      fail(`step ${i} names "${s.payload.widget}", which is not in the registry`);
      return;
    }
    const checked = mod.validate(s.payload.params ?? {});
    if (!checked.ok) {
      fail(`step ${i} (${s.payload.widget}) was refused: ${checked.errors[0]}`);
      return;
    }
    kept.push({ ...s, payload: { ...s.payload, params: checked.params as never } });
  });

  if (kept.length === 0) {
    return {
      ok: false, steps: [], dropped,
      errors: ['every step was refused, so there is no board left to show'],
    };
  }
  // RENUMBERED. Step 0 never carries a seq; if the original step 0 was the one
  // dropped, whichever step now leads must lose its seq or it would wait for a
  // sentence to reveal a board that is already the only one there.
  const renumbered = kept.map((s, i) => (i === 0 ? { ...s, seq: undefined } : s));
  if (dropped.length > 0) {
    console.warn(
      `[board_sequence] ${dropped.length} of ${shape.steps.length} step(s) dropped; ` +
      `${kept.length} still show — ${dropped.join('; ')}`);
  }
  return { ok: true, steps: renumbered, errors: [], dropped };
}

/** The publish gate: no step may be dropped, and the shape must be clean. */
export function gateSequence(raw: unknown): { ok: boolean; why: string } {
  const v = validateSequence(raw);
  if (!v.ok) return { ok: false, why: v.errors.join('; ') };
  if (v.dropped.length > 0) {
    return {
      ok: false,
      why: `the widget would DROP ${v.dropped.length} step(s): ${v.dropped.join('; ')} — ` +
           `at runtime the rest still show, but a published sequence must draw every ` +
           `case it declares`,
    };
  }
  return { ok: true, why: '' };
}
