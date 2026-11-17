import { withTurn } from '@/lib/followup-history';

describe('withTurn', () => {
  it('adds the question and the answer that arrived', () => {
    expect(withTurn([], 'What is a GP?', 'A sequence with a fixed ratio.')).toEqual([
      { role: 'user', content: 'What is a GP?' },
      { role: 'assistant', content: 'A sequence with a fixed ratio.' },
    ]);
  });

  it('keeps the question of an answer that was interrupted before anything arrived', () => {
    const before = [{ role: 'user' as const, content: 'a' }, { role: 'assistant' as const, content: 'b' }];
    expect(withTurn(before, 'And the common ratio?', '')).toEqual([
      ...before,
      { role: 'user', content: 'And the common ratio?' },
    ]);
  });

  it('ignores a recording that never became words', () => {
    const before = [{ role: 'user' as const, content: 'a' }];
    expect(withTurn(before, '   ', 'whatever')).toBe(before);
  });

  it('does not change the list it was given', () => {
    const before: { role: 'user' | 'assistant'; content: string }[] = [];
    withTurn(before, 'q', 'a');
    expect(before).toEqual([]);
  });
});
