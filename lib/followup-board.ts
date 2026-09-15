import type { FollowUpStep } from '@/lib/doubt-followup';

/**
 * DOES THIS ANSWER GET A BOARD, OR JUST A VOICE?
 *
 * The bar is a microphone and students talk into microphones. "Hello wassup."
 * "Can you hear me." "Wait, one sec." The teacher answers all of them, as she
 * should — but the answer sheet was rising over the solution every time, and a
 * board that appears when you say hello is a board you learn to swipe away
 * without reading.
 *
 * THE DECISION IS THE SERVER'S, AND THE RULE IS STEP COUNT. `snap_followup.md`
 * now says it outright: a second step is a claim that the question required a
 * second reasoning move, and a fact, a yes/no, a thanks, a name and every
 * guardrail decline get exactly one short step and never more. So one short
 * step means "there was nothing to write down", and the board stays shut.
 *
 * WHICH IS WHY THIS IS NOT A GUESS ANY MORE. The client tried twice to decide
 * this for itself and both attempts were wrong in an instructive way:
 *
 *   Reading the answer for maths or numbers failed on the first real test.
 *   Asked "hello wassup" the model wrote two perfectly step-shaped lines — the
 *   question restated with its own numbers, then an invitation to ask
 *   something — and nothing about that is distinguishable from working by
 *   looking at it.
 *
 *   Reading the QUESTION for words like "explain" and "why" worked better, but
 *   it was a list of words standing in for language understanding, and it
 *   would have kept being wrong in both directions as students said new
 *   things.
 *
 * The model knows what it just wrote. Now it is made to say so in the shape of
 * the answer, and the client only has to count.
 *
 * A LONG SINGLE STEP STILL EARNS ONE. Some real answers are a single move —
 * "where did the 2 come from" is one move — and a long one is working whatever
 * its step count says. The threshold is the server's own, so the two ends of
 * this agree on what "short" means.
 */

/** The server's own figure for a one-liner that belongs on the bar. */
const SHORT_ANSWER_CHARS = 240;

export function earnsTheBoard(steps: FollowUpStep[]): boolean {
  const written = steps.filter((s) => s.text.trim().length > 0);
  if (written.length === 0) return false;
  if (written.length > 1) return true;
  return written[0].text.trim().length > SHORT_ANSWER_CHARS;
}

/**
 * The steps, with one step replaced rather than added.
 *
 * Partials carry the whole text so far and arrive many times for the same `n`,
 * so this has to upsert: appending would turn a step that streamed as six
 * frames into six steps. The final `step` frame for an `n` is simply its last
 * replacement, which is why finished steps and mid-write steps can share one
 * writer.
 */
export function absorbStep(into: FollowUpStep[], step: FollowUpStep): FollowUpStep[] {
  const at = into.findIndex((s) => s.n === step.n);
  if (at >= 0) into[at] = step;
  else into.push(step);
  into.sort((a, b) => a.n - b.n);
  return into;
}
