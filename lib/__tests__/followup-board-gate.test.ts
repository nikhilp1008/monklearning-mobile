import { earnsTheBoard } from '@/lib/followup-board';
import type { FollowUpStep } from '@/lib/doubt-followup';

/**
 * WHEN A SPOKEN FOLLOW-UP IS ALSO WORTH WRITING DOWN.
 *
 * The bar is a microphone and students talk into microphones — "hi", "can you
 * hear me", "wait". Every one of those came back with an answer, and the sheet
 * flew up over the solution for all of them.
 *
 * The rule is the server's own: a step exists to carry what the ear cannot —
 * the equation, the substitution, the number, the unit. The cases below are the
 * two sides of that line, and the greeting cases are the ones that were the bug.
 */

const steps = (...texts: string[]): FollowUpStep[] =>
  texts.map((text, i) => ({ n: i + 1, text }));

describe('earnsTheBoard', () => {
  it('stays shut on a greeting', () => {
    expect(earnsTheBoard(steps('Ask me about any step you are unsure of.'))).toBe(false);
    expect(earnsTheBoard(steps('Happy to help whenever you are ready.'))).toBe(false);
  });

  it('stays shut when the server sends nothing written', () => {
    expect(earnsTheBoard([])).toBe(false);
    expect(earnsTheBoard(steps('', '   '))).toBe(false);
  });

  it('opens on maths', () => {
    expect(earnsTheBoard(steps('$V = IR = 2 \\times 4 = 8\\,\\text{V}$'))).toBe(true);
  });

  it('opens on a bare quantity, without needing the delimiters', () => {
    expect(earnsTheBoard(steps('The 2 comes from the two identical halves.'))).toBe(true);
  });

  it('opens on a method, even in plain words', () => {
    expect(
      earnsTheBoard(
        steps(
          'Balance the torques about the hinge, so the wall force drops out.',
          'Solve the remaining equation for the tension.'
        )
      )
    ).toBe(true);
  });

  it('does not count blank steps towards a method', () => {
    expect(earnsTheBoard(steps('Yes, that is right.', '', '  '))).toBe(false);
  });
});
