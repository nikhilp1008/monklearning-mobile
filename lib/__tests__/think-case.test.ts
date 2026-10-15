import { thinkCase } from '@/lib/think-case';

describe('thinkCase', () => {
  it('capitalises sentence starts, names and abbreviations', () => {
    expect(thinkCase('picture the seven si base units as the notes of indian classical music. just seven.')).toBe(
      'Picture the seven SI base units as the notes of Indian classical music. Just seven.'
    );
  });

  it('leaves maths at a sentence start alone', () => {
    expect(thinkCase('two choices. n elements, n choices.')).toBe('Two choices. n elements, n choices.');
    expect(thinkCase('i is not a ghost number.')).toBe('i is not a ghost number.');
    expect(thinkCase('ds/r is the angle. sin θ is small.')).toBe('ds/r is the angle. sin θ is small.');
    expect(thinkCase('the slope <i>flips</i> sign, <i>f</i>′ < 0. at a valley it flips back.')).toBe(
      'The slope <i>flips</i> sign, <i>f</i>′ < 0. At a valley it flips back.'
    );
  });

  it('tells "I" the speaker from i the number', () => {
    expect(thinkCase('“which train do i take?” has no single answer.')).toBe('“Which train do I take?” has no single answer.');
    expect(thinkCase('heating goes as i squared.')).toBe('Heating goes as i squared.');
  });

  it('capitalises a person who names a unit only as the person', () => {
    expect(thinkCase("by newton's third law, and ohm's law too.")).toBe("By Newton's third law, and Ohm's law too.");
    expect(thinkCase('a few tenths of a gauss, or a sixty-ohm coil.')).toBe('A few tenths of a gauss, or a sixty-ohm coil.');
  });

  it('carries a sentence end across markup', () => {
    expect(thinkCase('one question: <b>did it change?</b> if the source moved, yes.')).toBe(
      'One question: <b>did it change?</b> If the source moved, yes.'
    );
  });
});
