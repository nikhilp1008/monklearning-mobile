import type { FollowUpStep } from '@/lib/doubt-followup';
import { absorbStep, earnsTheBoard } from '@/lib/followup-board';

/**
 * WHEN A SPOKEN FOLLOW-UP GETS A BOARD, AND HOW A STREAMING STEP IS STORED.
 *
 * The rule is the server's: chit-chat, facts, yes/nos and every guardrail
 * decline come back as exactly one short step, so one short step means "there
 * was nothing to write down". Two earlier client-side rules — reading the
 * answer for maths, then reading the question for words like "explain" — are
 * both gone; the first case below is the greeting that defeated the first of
 * them, written the way the model actually wrote it.
 */

const steps = (...texts: string[]): FollowUpStep[] =>
  texts.map((text, i) => ({ n: i + 1, text }));

describe('earnsTheBoard', () => {
  it('stays shut on the one short step chit-chat now comes back as', () => {
    expect(earnsTheBoard(steps('Ask away — which step is bugging you?'))).toBe(false);
    expect(earnsTheBoard(steps('Yes, that is right.'))).toBe(false);
  });

  it('stays shut when nothing was written', () => {
    expect(earnsTheBoard([])).toBe(false);
    expect(earnsTheBoard(steps('', '   '))).toBe(false);
  });

  it('opens on a second step, which is a claim that a second move was needed', () => {
    expect(
      earnsTheBoard(
        steps('$v^2 = u^2 + 2as$ with $v = 0$', 'so $h = (29.4)^2 / (2 \\times 9.8)$')
      )
    ).toBe(true);
  });

  it('opens on one step that is long enough to be working', () => {
    expect(earnsTheBoard(steps('x'.repeat(241)))).toBe(true);
    expect(earnsTheBoard(steps('x'.repeat(240)))).toBe(false);
  });

  it('does not count a blank step towards a second move', () => {
    expect(earnsTheBoard(steps('Yes, exactly.', '   '))).toBe(false);
  });
});

describe('absorbStep', () => {
  it('replaces a step as it streams rather than appending it', () => {
    const into: FollowUpStep[] = [];
    absorbStep(into, { n: 1, text: 'The two' });
    absorbStep(into, { n: 1, text: 'The two comes from' });
    absorbStep(into, { n: 1, text: 'The two comes from the halves.' });
    expect(into).toEqual([{ n: 1, text: 'The two comes from the halves.' }]);
  });

  it('keeps steps in order however they arrive', () => {
    const into: FollowUpStep[] = [];
    absorbStep(into, { n: 2, text: 'second' });
    absorbStep(into, { n: 1, text: 'first' });
    absorbStep(into, { n: 3, text: 'third' });
    expect(into.map((s) => s.text)).toEqual(['first', 'second', 'third']);
  });
});
