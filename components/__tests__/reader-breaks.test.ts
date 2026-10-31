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

describe('a unit stays with the quantity it measures', () => {
  it('"12.27/√V Å", not "12.27/√V" | "Å" (Android check of Physics 12 Ch 11)', () => {
    expect(plainSpaces('= (1.227 × 10<sup>−9</sup>)/√<i>V</i> m = 12.27/√<i>V</i> Å.').some((p) => p.includes('√V Å'))).toBe(true);
  });
});

describe('compound units and long runs', () => {
  it('"1240 eV·nm" stays together', () => {
    expect(plainSpaces('= 1236 eV·nm ≈ 1240 eV·nm.').some((p) => p.includes('1240 eV·nm'))).toBe(true);
  });
  it('a run too long to hold whole breaks before "×", not between "×" and "10⁻ⁿ"', () => {
    const pieces = plainSpaces('Convert to keV: <i>K</i><sub>c</sub> = 1.64 × 10<sup>−13</sup>/(1.60 × 10<sup>−16</sup>) = 1025 keV');
    expect(pieces.some((p) => p.endsWith('×'))).toBe(false);
  });
});

describe('a long run breaks before a pair, not inside it', () => {
  it('"−13.6 Z²/n² eV": the unit keeps its quantity', () => {
    const pieces = plainSpaces('<i>E</i><sub><i>n</i></sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>) = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV');
    expect(pieces.some((p) => /^eV/.test(p))).toBe(false);
  });
});
