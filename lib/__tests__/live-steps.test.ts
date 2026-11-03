import { settledPartial, upsertLiveStep } from '@/lib/live-steps';

describe('settledPartial', () => {
  it('shows prose as written', () => {
    expect(settledPartial('Use conservation of en')).toBe('Use conservation of en');
  });

  it('holds back an unclosed maths run until it closes', () => {
    expect(settledPartial('So $v = \\sqrt{2')).toBe('So');
    expect(settledPartial('So $v = \\sqrt{2gh}$ and')).toBe('So $v = \\sqrt{2gh}$ and');
  });

  it('holds back both signs of an opening display block', () => {
    expect(settledPartial('Then\n$$\\int_0^1 x')).toBe('Then');
  });

  it('ignores an escaped dollar', () => {
    expect(settledPartial('It costs \\$5 each')).toBe('It costs \\$5 each');
  });

  it('drops a half-typed command at the end', () => {
    expect(settledPartial('Take the \\fra')).toBe('Take the');
  });
});

describe('upsertLiveStep', () => {
  it('replaces a step by number and keeps step order', () => {
    let steps = upsertLiveStep(undefined, { n: 2, text: 'b', final: false });
    steps = upsertLiveStep(steps, { n: 1, text: 'a', final: true });
    steps = upsertLiveStep(steps, { n: 2, text: 'bc', final: false });
    expect(steps).toEqual([
      { n: 1, text: 'a', final: true },
      { n: 2, text: 'bc', final: false },
    ]);
  });

  it('never lets a late partial overwrite a finished step', () => {
    let steps = upsertLiveStep(undefined, { n: 1, text: 'done', final: true });
    steps = upsertLiveStep(steps, { n: 1, text: 'do', final: false });
    expect(steps).toEqual([{ n: 1, text: 'done', final: true }]);
  });

  it('keeps a finished step exactly as sent', () => {
    const steps = upsertLiveStep(undefined, { n: 1, text: 'So $x', final: true });
    expect(steps[0].text).toBe('So $x');
  });
});
