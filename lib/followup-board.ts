import type { FollowUpStep } from '@/lib/doubt-followup';

/**
 * DOES THIS ANSWER NEED A BOARD AT ALL?
 *
 * The bar is a microphone, and students talk into microphones. "Hi." "Can you
 * hear me." "Wait, one sec." A reply comes back for every one of those, because
 * the server answers whatever it is given — and the sheet was flying up over
 * the solution for all of them. A board that appears when you say hello is a
 * board you learn to dismiss without reading.
 *
 * So the sheet is no longer keyed to "an answer exists". It is keyed to the
 * answer having something WORTH WRITING DOWN, using the server's own rule for
 * what a step is for: "what the ear cannot hold — the equation, the
 * substitution, the number, the unit." An answer carrying any of that is
 * working, and working belongs on a board. An answer that is one line of
 * ordinary prose has already been said out loud, and printing it over the
 * student's solution adds nothing they did not just hear.
 *
 * More than one step counts too, whatever it contains: several moves in order
 * is a method, and following a method is reading, not listening.
 *
 * THIS IS A READING OF THE ANSWER, NOT A DECISION BY THE ONE WHO WROTE IT. The
 * model knows perfectly well whether it just explained a step or said hello,
 * and one line in `snap_followup.md` — return no steps when the question is not
 * about the working — would settle it at the source and make this redundant.
 * That is Raasikh's call on a production repo, so it is written up in
 * ASK-RAASIKH-followup-board.md rather than done here. Until then this is the
 * client reading the room, and it errs towards silence: the voice always
 * answers, whatever this decides.
 */
export function earnsTheBoard(steps: FollowUpStep[]): boolean {
  const written = steps.map((s) => s.text.trim()).filter(Boolean);
  if (written.length === 0) return false;
  // Maths, a quantity, a unit — the things a sentence cannot hold.
  if (written.some((t) => t.includes('$') || /\d/.test(t))) return true;
  // Or a method: more than one move, in order.
  return written.length > 1;
}
