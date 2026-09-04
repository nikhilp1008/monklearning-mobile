/**
 * Renders the maths in a spoken caption as notation.
 *
 * Drona's `speech` is authored for a text-to-speech engine, so prompts/tutor.md
 * forbids LaTeX in it outright — the engine would read the delimiters aloud
 * (measured: "$C$ $r$" became "8 nuvas in NEMBEG R per set 8 DOLLAR"). What is
 * right for the ear is wrong for the eye: the caption strip inherits that same
 * string and shows a student "3.2 times 10 to the power minus 19 coulombs"
 * while the board beside it renders a clean 1.6 × 10⁻¹⁹ C.
 *
 * This closes that gap on the DISPLAY side only. The audio is untouched and
 * still says the words; the caption just stops spelling them out.
 *
 * SCOPE, deliberately small. This is pattern-matching on natural-language
 * prose, which is guessy by nature, so it only handles the two constructions
 * the content actually produces constantly — powers of ten, and a multiplying
 * "times" between two numbers — and leaves everything else exactly as spoken.
 * Failing to convert reads as normal English; converting the wrong thing
 * (turning "three times faster" into "three × faster") reads as a bug, so
 * every rule below requires a digit on both sides rather than trusting the
 * word alone.
 *
 * The durable fix is server-side — the model emitting a display caption
 * alongside the spoken one, the way board events already carry `latex`
 * separately from `text`. Until that exists this keeps the caption readable
 * without a deploy, and it is safe to delete the day the server sends
 * notation itself.
 */

const SUPERSCRIPT_DIGIT: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

function superscript(digits: string, negative: boolean): string {
  const body = digits
    .split('')
    .map((d) => SUPERSCRIPT_DIGIT[d] ?? d)
    .join('');
  return (negative ? '⁻' : '') + body;
}

/**
 * "10 to the power minus 19" / "ten raised to the power of 8" -> 10⁻¹⁹ / 10⁸.
 * The exponent must be written in digits: the content writes "minus 19", not
 * "minus nineteen", and a word-number table would be a much larger guess than
 * this is worth.
 */
const POWER_OF_TEN =
  /\b(?:10|ten)\s+(?:(?:is\s+)?raised\s+to|to)\s+the\s+power(?:\s+of)?\s+(minus\s+|negative\s+|-|−)?(\d+)/gi;

/**
 * A multiplying "times", only between two numbers. "3.2 times 10⁻¹⁹" is a
 * product; "three times faster" and "2 times a day" are not, and neither has a
 * digit immediately after the word.
 */
const TIMES_BETWEEN_NUMBERS = /(\d(?:[.,]\d+)?)\s+times\s+(?=\d)/gi;

export function spokenMathToNotation(text: string): string {
  if (!text) return text;
  return text
    .replace(POWER_OF_TEN, (_match, sign: string | undefined, digits: string) =>
      `10${superscript(digits, Boolean(sign))}`
    )
    .replace(TIMES_BETWEEN_NUMBERS, '$1 × ');
}
