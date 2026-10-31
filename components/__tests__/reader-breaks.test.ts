/**
 * Where a reading line may NOT break: each case is a break Android made on a
 * real page (Android review of Physics 12 Ch 9–10, 2026-10-30), with the
 * markup readerBreaks gives it. Only plain spaces are break points; a glued
 * space is U+00A0, and a word joiner (U+2060) holds two characters together.
 */
import { readerBreaks } from '@/components/textbook/markup';

const plainSpaces = (h: string) => readerBreaks(h).replace(/<[^>]*>/g, '').split(' ');

describe('a reading line keeps a term whole', () => {
  it('a number with the symbol it multiplies: "PC = 2 PF", not "PC = 2" | "PF"', () => {
    expect(plainSpaces('⇒ <i>PC</i> = 2 <i>PF</i> ⇒').some((p) => /2 PF/.test(p))).toBe(true);
  });
  it('a function with its argument: "sin 30°", "sin² r", "2t tan r"', () => {
    expect(plainSpaces('= √3 × sin 30° = √3/2').some((p) => p.includes('sin 30°'))).toBe(true);
    expect(plainSpaces('(1 − sin<sup>2</sup> <i>r</i>))').some((p) => p.includes('sin2 r'))).toBe(true);
    expect(plainSpaces('and <i>AC</i> = 2<i>t</i> tan <i>r</i>.').some((p) => p.includes('2t tan r'))).toBe(true);
  });
  it('a minus with the bracket it negates, and a slash with the root after it', () => {
    expect(readerBreaks('= −(−30)/(−15)')).toContain('−⁠(');
    expect(readerBreaks('= (1/√2)/(1/2)')).toContain('/⁠√');
  });
  it('a number with its thousands groups: "589.3/10 000", not "589.3/10" | "000"', () => {
    expect(plainSpaces('= 589.3/10 000 = 0.0589 nm').some((p) => p.includes('10 000'))).toBe(true);
    expect(plainSpaces('= 3 × 12 000 = 36 000').filter((p) => /^000/.test(p))).toEqual([]);
  });
});

describe('a number keeps its power of ten', () => {
  it('"(550 × 10⁻⁹)/(4 × …)", not "(550 ×" | "10⁻⁹)/(4"', () => {
    expect(plainSpaces('= (550 × 10<sup>−9</sup>)/(4 × (1.658 − 1.486))').some((p) => p.includes('550 × 10−9'))).toBe(true);
  });
});
