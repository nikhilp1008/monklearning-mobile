/**
 * THE TEXTBOOK'S SECTION LABELS, OUT OF CAPITALS.
 *
 * "HOW TO · EXTRACTING MOTION DATA FROM A SINGLE GRAPH" over a page of prose
 * is a label shouting at someone who is reading. Every one of them had to come
 * down, and the interesting part is why they come down to LOWERCASE rather than
 * to sentence case, which is what a label would normally want.
 *
 * BECAUSE THE CAPITALS ARE IN THE CONTENT. Measured: of 2,748 authored kicker
 * and title strings, 1,515 are written in full capitals in the chapter files
 * themselves. The old style added `textTransform: 'uppercase'` on top, so
 * dropping that fixes fewer than half of them and leaves the page mixed, which
 * is worse than consistent shouting.
 *
 * AND ALL-CAPS HAS ALREADY THROWN THE INFORMATION AWAY. Sentence-casing
 * "FORMULA · THE BIOT-SAVART LAW" gives "the biot-savart law". There is nothing
 * in the string that says Biot and Savart were people — 67 of those 1,515
 * labels carry a physicist's name that sentence case destroys, and that list is
 * only the names I thought to grep for:
 *
 *   FORMULA · NEWTON'S LAW OF GRAVITATION    -> newton's law of gravitation
 *   DERIVATION · KEPLER'S THIRD LAW FROM IT  -> kepler's third law from it
 *
 * In a label that is DELIBERATELY all lowercase, "biot-savart law" reads as a
 * house style. In a sentence-cased one it reads as a bug. So the whole label
 * goes down, which is a choice the page can carry, rather than half-way, which
 * it cannot.
 *
 * ACRONYMS STAY UP, because "rms value of ac" is not a style, it is wrong. See
 * the list below for how that list was arrived at — by measurement, after the
 * obvious rule failed.
 *
 * True sentence case is still the better end state and it needs the CONTENT
 * fixed — 1,515 strings rewritten with their capitals where they belong. This
 * is what can be done without touching a word of it.
 */

/**
 * THE ONLY WORDS THAT KEEP THEIR CAPITALS — a whitelist, not a stoplist, and
 * that direction is the whole difficulty.
 *
 * The first attempt kept any all-caps word of two or three letters unless it
 * was ordinary English. It cannot work on this corpus: "FORMULA · NEWTON'S
 * LAW" came back as "newton's LAW", because LAW is three letters and was not on
 * anybody's list of short words. Physics labels are full of them — GAS, NET,
 * SUM, ROD, ARC, AIR, ICE — and no stoplist finishes.
 *
 * So the list below is EVIDENCE rather than invention. It was derived by
 * scanning every authored string in the 55 chapters for tokens the authors
 * capitalise INSIDE ordinary mixed-case prose — where the capitals were a
 * deliberate choice rather than a shouting label — and then removing the words
 * they were merely emphasising (AND, ONLY, THE, SAME, AREA…). What is left is
 * what this corpus actually treats as an acronym, a unit pair, or a geometry
 * label: the two-letter circuit and thermodynamic symbols (XC, XL, CP, CV), the
 * point pairs (AB, PQ, XY), and the initialisms.
 *
 * Anything not on it goes down with the rest. An acronym that only ever appears
 * inside an all-caps label — never once in prose — is invisible to the scan and
 * will be lowercased; that is the known cost of a whitelist, and it is a much
 * smaller one than "newton's LAW".
 */
const KEEPS_CAPITALS = new Set([
  // Initialisms and exam vocabulary
  'CBSE', 'CUET', 'JEE', 'NEET', 'NCERT', 'MCQ', 'HOTS', 'LPP',
  'EMF', 'RMS', 'SHM', 'SI', 'TIR', 'PIV', 'LCR', 'NAND', 'NOR', 'XOR',
  'IUPAC', 'LED', 'NPN', 'PNP', 'KVL', 'KCL', 'LHS', 'RHS', 'STP', 'NTP',
  // Quantities, symbol pairs and units
  'AC', 'DC', 'KE', 'PE', 'MO', 'BM', 'UV', 'IR', 'NA', 'PF', 'PV',
  'CP', 'CV', 'XC', 'XL', 'VA', 'VC', 'VI', 'VL', 'RL', 'RT', 'LC', 'TH',
  'GM', 'GP', 'AM', 'HP', 'FL',
  // Geometry point labels
  'AA', 'AB', 'AP', 'BA', 'BC', 'BH', 'EA', 'IA', 'KA', 'PQ', 'XY', 'YA',
  'YZ', 'ZX', 'VZ', 'NIA', 'NBA', 'LHL', 'RHL',
]);

/** "Q1", "T2", "V2" — a capital carrying a number is a symbol, not a word. */
const SYMBOL_WITH_INDEX = /^[A-Z][0-9]+$/;

export function labelCase(text: string): string {
  return text
    .split(/(\s+)/)
    .map((word) => {
      // Tested without punctuation, so "(AC)" and "AC." both count.
      const bare = word.replace(/[^A-Za-z0-9]/g, '');
      if (SYMBOL_WITH_INDEX.test(bare)) return word;
      const letters = bare.replace(/[^A-Za-z]/g, '');
      if (letters && letters === letters.toUpperCase() && KEEPS_CAPITALS.has(letters)) {
        return word;
      }
      return word.toLowerCase();
    })
    .join('');
}
