/**
 * The conversions are narrow on purpose (see lib/spoken-math.ts), so the cases
 * that must NOT convert matter more than the ones that must: a caption that
 * fails to prettify reads as ordinary English, while one that turns "three
 * times faster" into "three × faster" reads as a bug.
 *
 * The real sentences below are taken from an actual Class 12 Physics Ch 1
 * session on 2026-09-03, not invented.
 */
import { spokenMathToNotation } from '../spoken-math';

describe('converts what it should', () => {
  test('a negative power of ten, as the lesson actually says it', () => {
    expect(
      spokenMathToNotation(
        'Now, if a body has a charge of minus 3.2 times 10 to the power minus 19 coulombs, how many excess electrons does it have?'
      )
    ).toBe(
      'Now, if a body has a charge of minus 3.2 × 10⁻¹⁹ coulombs, how many excess electrons does it have?'
    );
  });

  test('the elementary charge, spelled out', () => {
    expect(spokenMathToNotation('e is 1.6 times 10 to the power minus 19 coulombs')).toBe(
      'e is 1.6 × 10⁻¹⁹ coulombs'
    );
  });

  test('a positive power, and the "ten" spelling', () => {
    expect(spokenMathToNotation('about 6 times ten to the power 24 kilograms')).toBe(
      'about 6 × 10²⁴ kilograms'
    );
  });

  test('"raised to the power of" is the same construction', () => {
    expect(spokenMathToNotation('10 raised to the power of 8')).toBe('10⁸');
  });

  test('a bare power of ten with no multiplier', () => {
    expect(spokenMathToNotation('that is 10 to the power minus 6 metres')).toBe(
      'that is 10⁻⁶ metres'
    );
  });
});

describe('leaves alone what it should', () => {
  test('a comparative "times" is not a product', () => {
    expect(spokenMathToNotation('the field is three times faster there')).toBe(
      'the field is three times faster there'
    );
    // Digit on the left, but a word on the right — still not a product.
    expect(spokenMathToNotation('it is 3 times stronger')).toBe('it is 3 times stronger');
  });

  test('frequency, not multiplication', () => {
    expect(spokenMathToNotation('revise this 2 times a day')).toBe('revise this 2 times a day');
  });

  test('prose with no maths is untouched', () => {
    const s = 'Rub a plastic comb on your dry hair and bring it near tiny bits of paper.';
    expect(spokenMathToNotation(s)).toBe(s);
  });

  test('an exponent spelled as a word is left spoken rather than guessed at', () => {
    // Out of scope by design — a word-number table is a bigger guess than the
    // problem is worth, and the content writes exponents in digits.
    expect(spokenMathToNotation('10 to the power nineteen')).toBe('10 to the power nineteen');
  });

  test('empty and undefined-ish input does not throw', () => {
    expect(spokenMathToNotation('')).toBe('');
  });
});
