/**
 * CAPITALS FOR THE "THINK ABOUT IT THIS WAY" BOXES.
 *
 * All 378 of them, in every chapter, were written in lowercase on purpose:
 * the first reader set them in a handwriting face as a scribbled aside after
 * "think about it this way…". The pilot reader sets them as ordinary reading
 * text under a small label, where lowercase reads as a typo ("picture the
 * seven si base units as the seven notes of indian classical music").
 *
 * So the pilot reader puts the capitals back as it draws them, and the content
 * stays as written. Three things get a capital:
 *
 *   The start of a sentence, unless it starts with maths: "n elements",
 *     "ds/r", "sin θ" and "i is not a ghost number" stay as they are.
 *   Names, places and languages: Newton's, Bohr, Mumbai, Hindi. A person who
 *     is also a unit only with "'s" or "law": "Ohm's law", but "sixty-ohm" and
 *     "a few tenths of a gauss" stay units.
 *   Abbreviations: SI, LED, SHM, AP and GP.
 *
 * And "i" as the speaker ("which train do I take?"), told apart from the
 * imaginary unit and a current by the words around it.
 *
 * Earth, sun and moon stay lowercase, as NCERT prints them.
 */

const NAMES = new Set(
  (
    'archimedes avogadro balmer bayes bernoulli biot bohr boyle bose brewster carnot cauchy chandrasekhar compton ' +
    'coulomb dalton doppler einstein euler fermat fleming fourier galileo galvani hooke huygens kepler kirchhoff ' +
    'lagrange laplace leibniz lenz lyman malus maxwell mayer millikan moseley oersted planck poisson prevost ' +
    'pythagoras raman rolle rutherford rydberg savart schrodinger snell stefan stokes thomson torricelli ' +
    'vandermonde venn wheatstone wien zener ramesh suresh ' +
    'delhi mumbai pune kolkata chennai bengaluru bangalore hyderabad kerala konkan india indian hindi tamil ' +
    'diwali holi ganga himalaya himalayas everest'
  ).split(' ')
);

/** People who also name a unit: a capital only for the person ("Newton's", "Ohm's law"). */
const UNIT_NAMES = new Set('newton ohm ampere coulomb gauss faraday curie joule watt volt kelvin tesla weber henry pascal hertz young'.split(' '));

const ACRONYMS = new Set('si ac dc ap gp hp lc lcr led shm tv uv ir cbse jee neet ncert dna rna gps isro nasa ipl upi lpg cng'.split(' '));

/** Words that start a sentence but are maths or a unit, and keep their case. */
const MATH = new Set('sin cos tan cot sec cosec log ln exp lim max min mod det dx dy dz dt dv ds dr dq dl kg km cm mm mol cd rad sr'.split(' '));

/** "e.g." and friends end in a full stop without ending the sentence. */
const ABBREVIATION = /(?:\be\.g|\bi\.e|\betc|\bvs|\bapprox|\bfig|\beq)$/i;

/** "i" the speaker sits next to these; "i" the number does not. */
const I_BEFORE = new Set('am do did have can could should will would must shall'.split(' '));
const I_AFTER = new Set(
  'am must take give throw have had was will would can could do did need know think said say want move collect get see go put keep'.split(' ')
);

const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);

export function thinkCase(html: string): string {
  // Tags and text, in order. Maths (and some emphasis) sits in <i>, <sub>
  // and <sup>. A tag starts with a letter, so "f′ < 0" stays text.
  const pieces = html.split(/(<\/?[a-z][^>]*>)/i);
  let math = 0;
  let atStart = true;
  let boundary = false;
  let prevWord = '';
  return pieces
    .map((piece) => {
      if (/^<\/?[a-z]/i.test(piece)) {
        const tag = /^<\s*(\/?)\s*([a-z]+)/i.exec(piece);
        if (tag && /^(i|sub|sup)$/i.test(tag[2])) math += tag[1] ? -1 : 1;
        if (tag && /^br$/i.test(tag[2])) atStart = true;
        return piece;
      }
      let out = '';
      const re = /([A-Za-z][A-Za-z'’]*)|([.!?])|(\s+)|([\s\S])/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(piece))) {
        const [token, word, stop, space] = m;
        const rest = piece.slice(re.lastIndex);
        if (word) {
          let w = word;
          if (math === 0 && word === word.toLowerCase()) {
            const base = word.replace(/['’]s$/, '');
            const lower = base.toLowerCase();
            if (NAMES.has(lower)) w = cap(word);
            else if (UNIT_NAMES.has(lower) && (base !== word || /^\s+law\b/.test(rest))) w = cap(word);
            else if (ACRONYMS.has(word)) w = word.toUpperCase();
            else if (word === 'i' && (I_BEFORE.has(prevWord) || I_AFTER.has((/^\s+([a-z]+)/.exec(rest) ?? [])[1] ?? ''))) w = 'I';
            else if (atStart) {
              const mathy = MATH.has(word) || /^[/=(_^]/.test(rest);
              if (word.length > 1 && !mathy) w = cap(word);
              else if (word === 'a' && /^\s+([^\s,=)]|$)/.test(rest)) w = 'A';
            }
          }
          out += w;
          prevWord = word.toLowerCase();
          atStart = false;
          boundary = false;
        } else if (stop) {
          out += token;
          // A sentence ends at . ! ? before a space, or at ." before one; a
          // question inside quotes ("which train do I take?" has…) does not.
          // At the end of a piece ("…change?</b> if") the next piece decides.
          const closes = stop === '.' ? /^["”’)]*(\s|$)/.test(rest) : /^(\s|$)/.test(rest);
          boundary = closes && !(stop === '.' && ABBREVIATION.test(out.slice(0, -1)));
        } else if (space) {
          out += token;
          if (boundary) atStart = true;
          boundary = false;
        } else {
          out += token;
          // An opening quote or bracket keeps the sentence start; anything
          // else (a digit, a symbol, a closing quote) is the sentence begun.
          if (!/[“"‘(]/.test(token)) {
            atStart = false;
            if (!/[”"’)]/.test(token)) boundary = false;
          }
        }
      }
      return out;
    })
    .join('');
}
