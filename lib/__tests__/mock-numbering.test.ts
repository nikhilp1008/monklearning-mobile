import { subjectNumbers, subjectTotals } from '../mock-numbering';

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
const paper = (...parts: [string, number][]) =>
  parts.flatMap(([subject, n]) => Array.from({ length: n }, () => ({ subject })));

describe('subjectNumbers', () => {
  it('restarts at 1 in each subject of a NEET 9/9/17 paper', () => {
    const qs = paper(['physics', 9], ['chemistry', 9], ['biology', 17]);
    const nums = subjectNumbers(qs);
    expect(nums).toHaveLength(35);
    expect(nums.slice(0, 9)).toEqual(range(9));
    expect(nums.slice(9, 18)).toEqual(range(9));
    expect(nums.slice(18)).toEqual(range(17));
    expect(subjectTotals(qs)).toEqual(
      new Map([
        ['physics', 9],
        ['chemistry', 9],
        ['biology', 17],
      ])
    );
  });

  it('numbers a one-subject paper straight through', () => {
    const qs = paper(['biology', 5]);
    expect(subjectNumbers(qs)).toEqual(range(5));
    expect(subjectTotals(qs)).toEqual(new Map([['biology', 5]]));
  });

  it('numbers by position within the subject when subjects are not contiguous', () => {
    const qs = ['physics', 'chemistry', 'physics', 'biology', 'chemistry', 'physics'].map(
      (subject) => ({ subject })
    );
    expect(subjectNumbers(qs)).toEqual([1, 1, 2, 1, 2, 3]);
    expect([...subjectTotals(qs).entries()]).toEqual([
      ['physics', 3],
      ['chemistry', 2],
      ['biology', 1],
    ]);
  });

  it('runs on across sections within one JEE subject (per subject, not per section)', () => {
    // 20 single-correct then 5 numerical per subject: still 1..25 each.
    const qs = paper(['physics', 25], ['chemistry', 25], ['mathematics', 25]);
    const nums = subjectNumbers(qs);
    expect(nums.slice(0, 25)).toEqual(range(25));
    expect(nums.slice(25, 50)).toEqual(range(25));
    expect(nums.slice(50)).toEqual(range(25));
  });

  it('returns nothing for an empty paper', () => {
    expect(subjectNumbers([])).toEqual([]);
    expect(subjectTotals([]).size).toBe(0);
  });
});
