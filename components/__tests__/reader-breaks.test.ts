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
  it('a short term with ≲ or ≳: "V_Z ≲ 5 V", not "threshold V_Z" | "≲ 5 V" (Physics 12 Ch 14)', () => {
    expect(plainSpaces('• Zener: threshold <i>V</i><sub>Z</sub> ≲ 5 V').some((p) => p.includes('VZ\u00a0≲\u00a05\u00a0V'))).toBe(true);
  });
  it('a short bracket, an option letter and a unit stay whole (Chemistry 12 Ch 3)', () => {
    expect(plainSpaces('<i>p</i><sub>t</sub> = (0.50 − <i>x</i>) + 2<i>x</i>').some((p) => p.includes('(0.50\u00a0−\u00a0x)'))).toBe(true);
    expect(plainSpaces('(a) 75 min (d) 240 min').some((p) => p.includes('(d)\u00a0240'))).toBe(true);
    expect(plainSpaces('[A] = 0.133 mol L<sup>−1</sup> to two').some((p) => p.includes('mol\u00a0L−1'))).toBe(true);
    expect(plainSpaces('2: L mol<sup>−1</sup> s<sup>−1</sup>').some((p) => p.includes('L\u00a0mol−1'))).toBe(true);
    // "kJ" | "mol⁻¹" split at a line end (Android check of Chemistry 12 Ch 11, the Contact process).
    expect(plainSpaces('Δ<sub>r</sub><i>H</i>° = −196.6 kJ mol<sup>−1</sup>').some((p) => p.includes('kJ\u00a0mol−1'))).toBe(true);
    expect(plainSpaces('a value of 46.1 J mol<sup>−1</sup> K<sup>−1</sup>').some((p) => p.includes('J\u00a0mol−1'))).toBe(true);
    expect(readerBreaks('<i>k</i>′[A]')).toContain('′\u2060[');
  });
  it('a coefficient stays with its species (Chemistry 12 Ch 4)', () => {
    expect(plainSpaces('→ 2 Mn<sup>2+</sup> + 5 I<sub>2</sub> + 8H<sub>2</sub>O').some((p) => p.includes('5\u00a0I2'))).toBe(true);
    expect(plainSpaces('+ 2 H<sub>2</sub>O').some((p) => p.includes('2\u00a0H2O'))).toBe(true);
    expect(plainSpaces('8 H<sup>+</sup> + 5 e<sup>−</sup> →').some((p) => p.includes('5\u00a0e−'))).toBe(true);
    expect(plainSpaces('→ 2 CO<sub>2</sub> gives').some((p) => p.includes('2\u00a0CO2'))).toBe(true);
    expect(plainSpaces('B →<sup>H₂O₂, OH⁻</sup> 3 R–CH<sub>2</sub>–OH').some((p) => p.includes('3\u00a0R–CH2–OH'))).toBe(true);
    expect(plainSpaces('3 R–OH + PBr<sub>3</sub>').some((p) => p.includes('3\u00a0R–OH'))).toBe(true);
  });
  it('a couple stays whole across the slash, and words may still break', () => {
    const WJ = '\u2060';
    expect(readerBreaks('E°(Ni<sup>2+</sup>/Ni) = −0.25 V')).toContain(`/${WJ}Ni)`);
    expect(readerBreaks('the AgCl/Ag couple')).toContain(`/${WJ}Ag `);
    expect(readerBreaks('E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>)')).toContain(`/${WJ}Fe<sup>`);
    expect(readerBreaks('Strong/Weak')).not.toContain(WJ);
    expect(readerBreaks('<i>E</i>°(Ni<sup>2+</sup>/Ni)')).toContain(`°${WJ}(`);
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

describe('intervals (Android check of Mathematics 11 Ch 1)', () => {
  it('keeps a short interval or pair on one line', () => {
    const out = readerBreaks('so A<sub>1</sub> = [1, 6], A<sub>2</sub> = [1.5, 5.5] and (0, 1) shrink');
    expect(out).not.toMatch(/\[1, 6\]/);
    expect(out).toMatch(/\[1 6\]|\[1, 6\]/);
    expect(out).toMatch(/\(0, 1\)/);
  });

  // Android check of Mathematics 11 Ch 5: a lone "|" ended a line and "x − 2|" began the next.
  it('keeps an opening modulus bar with what it encloses, and leaves a closing one alone', () => {
    const WJ = '\u2060';
    const out = readerBreaks('so |<i>x</i> − 2| ≥ 5 and (|<i>x</i>| + 1)');
    expect(out).toContain(`so |${WJ}<i>x</i>`);
    expect(out).toContain(`(|${WJ}<i>x</i>|`);
    expect(out).not.toContain(`2|${WJ}`);
  });
});
