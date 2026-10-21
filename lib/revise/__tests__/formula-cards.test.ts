import ch1 from '@/content/textbooks/phy-11-01-units-measurements';
import ch2 from '@/content/textbooks/phy-11-02-motion-straight-line';
import ch3 from '@/content/textbooks/phy-11-03-motion-plane';
import ch4 from '@/content/textbooks/phy-11-04-laws-of-motion';
import ch5 from '@/content/textbooks/phy-11-05-work-energy-power';
import ch6 from '@/content/textbooks/phy-11-06-rotational-motion';
import ch7 from '@/content/textbooks/phy-11-07-gravitation';
import ch8 from '@/content/textbooks/phy-11-08-mech-solids';
import ch9 from '@/content/textbooks/phy-11-09-mech-fluids';
import ch10 from '@/content/textbooks/phy-11-10-thermal-properties';
import ch11 from '@/content/textbooks/phy-11-11-thermodynamics';
import ch12 from '@/content/textbooks/phy-11-12-kinetic-theory';
import ch13 from '@/content/textbooks/phy-11-13-oscillations';
import ch14 from '@/content/textbooks/phy-11-14-waves';
import { buildFormulaCards, formulaName, isWordBracket, italicMaths, keepTogether, pieceWidth, softBreaks, titleBreaks } from '@/lib/revise/formula-cards';

const OPS = '=+−⟹⟺⇔⇌≈→⇒∝';
const shown = (h: string) => h.replace(/<[^>]+>/g, '').replace(/\u2060/g, '');

/** Each regular space, with the innermost bracket around it (null outside brackets). */
function spaces(expr: string): { at: number; bracket: string | null }[] {
  const open: number[] = [];
  const out: { at: number; bracket: string | null }[] = [];
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '(' || expr[i] === '[') open.push(i);
    else if ((expr[i] === ')' || expr[i] === ']') && open.length) open.pop();
    else if (expr[i] === ' ') {
      const from = open[open.length - 1];
      if (from === undefined) out.push({ at: i, bracket: null });
      else {
        // the bracket's own text, to its matching close
        let depth = 0, end = expr.length; // a bracket a clause cut open runs to the end
        for (let k = from; k < expr.length; k++) {
          if (expr[k] === '(' || expr[k] === '[') depth++;
          else if (expr[k] === ')' || expr[k] === ']') depth--;
          if (depth === 0) { end = k; break; }
        }
        out.push({ at: i, bracket: expr.slice(from + 1, end) });
      }
    }
  }
  return out;
}

/**
 * The formula sheet's cards: one shape, every card, in every chapter that
 * opens on its formula sheet.
 */
for (const chapter of [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14]) {
  describe(`formula cards, Physics 11 Chapter ${Number(chapter.chapter)}`, () => {
    const cards = buildFormulaCards(chapter);
    const formulaBlocks = chapter.topics.flatMap((t) => t.blocks).filter((b) => b.t === 'formula').length;

    it('makes one card per formula block', () => {
      expect(cards).toHaveLength(formulaBlocks);
    });

    it('names every card', () => {
      for (const c of cards) expect(c.name.trim()).not.toBe('');
    });

    it('breaks a formula only before an operator, after a comma, before a bracket of words or inside one', () => {
      for (const c of cards)
        for (const it of c.items)
          if (!it.words) {
            expect(it.expr).not.toMatch(/[=+−⟹⟺⇔≈→⇒∝] /); // never right after an operator
            for (const sp of spaces(it.expr)) {
              const before = it.expr[sp.at - 1], after = it.expr[sp.at + 1];
              // ...or between two words of a phrase too long for a line (see loosen)
              const words = /[A-Za-z]{2,}[.,]?$/.test(shown(it.expr.slice(0, sp.at))) || /^[A-Za-z]{2,}/.test(shown(it.expr.slice(sp.at + 1)));
              const allowed = ',;'.includes(before) || OPS.includes(after) || after === '(' || words || (sp.bracket !== null && isWordBracket(sp.bracket));
              expect([allowed, it.expr]).toEqual([true, it.expr]);
            }
          }
    });

    it('never breaks inside a short bracket of maths, nor inside a short equation between commas', () => {
      for (const c of cards)
        for (const it of c.items)
          if (!it.words) {
            for (const clause of it.expr.split(/[,;] /)) {
              if (shown(clause).length <= 24) expect(clause).not.toContain(' ');
              // a short bracket of maths opens only in a clause too long for a line
              if (shown(clause).length <= 30)
                for (const sp of spaces(clause)) if (sp.bracket !== null && !isWordBracket(sp.bracket)) expect(shown(sp.bracket).length).toBeGreaterThan(20);
            }
          }
    });

    // A stacked fraction is as wide as its wider side (see pieceWidth).
    it('leaves no piece too long for a line without a break (Android would cut it mid-word)', () => {
      for (const c of cards)
        for (const it of c.items)
          if (!it.words) for (const p of it.expr.split(' ')) if (pieceWidth(p) > 30) expect(shown(p)).not.toMatch(/\u00a0/);
    });

    it('keeps every meaning to one clause', () => {
      for (const c of cards) for (const m of c.meaning) expect(m.text.replace(/<[^>]+>/g, '')).not.toMatch(/\. [A-Z]/);
    });

    it('leaves no shouted capitals', () => {
      for (const c of cards) for (const m of c.meaning) expect(m.text).not.toMatch(/\b(SIZES|ADDED|WRONG|RELATIVE|POSITION|ONE|BEFORE|IN)\b/);
    });
  });
}

/** The line-break rules, one at a time (Android display review, 2026-10-20). */
describe('keepTogether', () => {
  const nb = (s: string) => s.replace(/\u00a0/g, '·').replace(/\u2060/g, '');

  it('keeps a bracket of maths whole: (m₁ + m₂), (1 + k²/R²), (v² − v₀²)', () => {
    expect(nb(keepTogether('<i>r</i> = <i>m</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)'))).toContain('(<i>m</i><sub>1</sub>·+·<i>m</i><sub>2</sub>)');
    expect(nb(keepTogether('<i>K</i> = ½<i>mv</i><sup>2</sup>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)'))).toContain('(1·+·');
    expect(nb(keepTogether('<i>s</i> = (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2'))).toContain('(<i>v</i><sup>2</sup>·−·');
  });

  it('lets a bracket of words wrap between its words, never mid-word', () => {
    const out = keepTogether('∑ <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub> = 0⃗ (position vectors measured from the CoM)');
    expect(out).toContain('(position vectors measured from the CoM)');
  });

  it('may break before ⇔ and ⟺, never after', () => {
    expect(keepTogether('<i>A</i> = 0 and more words here ⇔ the three vectors are coplanar')).toContain(' ⇔\u00a0');
    expect(keepTogether('Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i> and so on and so forth ⟺ Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i>')).toContain(' ⟺\u00a0');
  });

  it('breaks between equations at the comma, not inside a short one', () => {
    const out = nb(keepTogether('<i>s</i> = <i>rθ</i>, <i>v</i> = <i>rω</i>, <i>P</i> = <i>τ</i>·<i>ω</i>, <i>a</i><sub>c</sub> = <i>ω</i><sup>2</sup><i>r</i> = <i>v</i><sup>2</sup>/<i>r</i>'));
    expect(out).toContain(', <i>P</i>·=·<i>τ</i>·<i>ω</i>,');
    expect(out.split(' ')).toHaveLength(4); // only after the three commas
  });

  it('keeps a lone symbol with the operator after it, in a long equation', () => {
    const out = nb(keepTogether('<i>x</i> = 1, <i>B</i><sub>polytropic</sub> = <i>nP</i> + something long enough to wrap'));
    expect(out).toContain('<i>B</i><sub>polytropic</sub>·=');
  });

  it('opens a phrase too long for a line between its words rather than cutting a word', () => {
    const out = keepTogether('<i>e</i> = velocity of separation/velocity of approach');
    expect(out).toContain('velocity of separation');
    expect(out).not.toMatch(/= /);
  });

  it('tells a bracket of words from a bracket of maths', () => {
    expect(isWordBracket('position vectors measured from the CoM')).toBe(true);
    expect(isWordBracket('net driving force')).toBe(true);
    expect(isWordBracket('<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>')).toBe(false);
    expect(isWordBracket('tan <i>θ</i> + <i>μ</i>')).toBe(false);
    expect(isWordBracket('<i>v</i><sub>max</sub> − <i>v</i><sub>min</sub>')).toBe(false);
  });
});

/** The second Android review's rules (2026-10-20, pass 2). */
describe('keepTogether, pass 2', () => {
  const nb = (s: string) => s.replace(/\u00a0/g, '·').replace(/\u2060/g, '¦');

  it('never breaks after "|", between ")(", or between an operator and its bracket', () => {
    expect(nb(keepTogether('<i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i>, |<i>L⃗</i>| = <i>mvr</i> sin <i>θ</i>'))).toContain('|¦<i>L⃗</i>|¦·=');
    expect(nb(keepTogether('<i>P</i> = (<i>RT</i>/<i>V</i>)(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)'))).toContain(')¦(');
    expect(nb(keepTogether('<i>ν</i> = −(Δ<i>D</i>/<i>D</i>)/(Δ<i>L</i>/<i>L</i>)'))).toContain('−¦(');
  });

  it('keeps a short symbol with the operator after it, after an arrow, a word or a bracket', () => {
    expect(nb(keepTogether('(<i>GMm</i>/<i>d</i><sup>2</sup>) · <i>L</i> (gravitational torque) = <i>κθ</i> (fibre torque) ⇒ <i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>)'))).toContain('⇒·<i>G</i>·=');
    expect(nb(keepTogether('<i>F</i> = <i>k</i> Δ<i>L</i> with <i>k</i> = <i>YA</i>/<i>L</i> (<i>k</i> ∝ <i>A</i>, <i>k</i> ∝ 1/<i>L</i>)'))).toContain('with·<i>k</i>·=');
    expect(nb(keepTogether('<i>T</i> = 2π√(<i>h</i>/<i>g</i>) = 2π√(<i>m</i>/(<i>Aρg</i>)) (<i>h</i> = equilibrium submerged depth)'))).toContain('(<i>h</i>·=·equilibrium');
    // but a term in the middle of a chain may still end a line
    expect(nb(keepTogether('<i>P</i><sub>total</sub> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + ⋯ + <i>P</i><sub><i>n</i></sub> = (<i>RT</i>/<i>V</i>)(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> + ⋯)'))).toContain('<i>P</i><sub>1</sub> +·');
  });

  it('keeps a list of numbers whole, and a last short term with its line', () => {
    expect(nb(keepTogether('<i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>), <i>n</i> = 1, 2, 3, … (all harmonics)'))).toContain('1,·2,·3,·…');
    expect(nb(keepTogether('<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub> ⟺ Δ<i>E</i> = Δ<i>K</i> + Δ<i>U</i> = 0'))).toMatch(/Δ<i>U<\/i>·=·0$/);
  });

  it('holds a short bracket of words whole', () => {
    expect(nb(keepTogether('<i>v</i><sub>avg</sub> = (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)/2 (arithmetic mean)'))).toContain('(arithmetic·mean)');
    expect(nb(keepTogether('<i>T</i> = 273.16 K, <i>P</i> = 611.7 Pa (≈ 4.58 mm Hg)'))).toContain('(≈·4.58·mm·Hg)');
  });

  it('treats ⇌ as an operator', () => {
    expect(keepTogether('A long enough line of words here ⇌ and more words after it')).toContain(' ⇌\u00a0');
  });
});

describe('softBreaks: labels and meanings', () => {
  const nb = (s: string) => s.replace(/\u00a0/g, '·').replace(/\u2060/g, '¦');
  it('never after an operator, nor inside a number with its units', () => {
    expect(nb(softBreaks('Boltzmann constant, <i>R</i>/<i>N</i><sub>A</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>'))).toContain('=·1.38 ×·10<sup>−23</sup>·J·K<sup>−1</sup>');
    expect(nb(softBreaks('universal gas constant, 8.314 J mol<sup>−1</sup> K<sup>−1</sup>'))).toContain('8.314·J·mol<sup>−1</sup>·K<sup>−1</sup>');
    expect(nb(softBreaks('volume of the body submerged (= volume of fluid displaced)'))).toContain('(=·volume');
  });
  it('holds short brackets, function names and slashes', () => {
    expect(nb(softBreaks('the angle between the vectors (0 ≤ <i>θ</i> ≤ π)'))).toContain('(0·≤·<i>θ</i>·≤·π)');
    expect(nb(softBreaks('dimensional formula [M T<sup>−3</sup> Θ<sup>−4</sup>]'))).toContain('[M·T<sup>−3</sup>·Θ<sup>−4</sup>]');
    expect(nb(softBreaks('latent heat of <b>vaporization</b> (liquid ⇌ gas)'))).toContain('(liquid·⇌·gas)');
    expect(nb(softBreaks('driving force <i>F</i><sub>0</sub> cos <i>ωt</i>'))).toContain('cos·<i>ωt</i>');
    expect(nb(softBreaks('(independent of shape/size)'))).toContain('shape/¦size');
  });
});

describe('card names', () => {
  it('sets the maths letters italic, not the article or a possessive', () => {
    expect(italicMaths('Rolling down an incline of angle θ')).toBe('Rolling down an incline of angle <i>θ</i>');
    expect(italicMaths('Case 3 — acceleration depends on position, a = f(x)')).toBe('Case 3 — acceleration depends on position, <i>a</i> = <i>f</i>(<i>x</i>)');
    expect(italicMaths('Thrust on a Variable-Mass Body (e.g., a rocket)')).toBe('Thrust on a Variable-Mass Body (e.g., a rocket)');
    expect(italicMaths('Newton’s law of cooling')).toBe('Newton’s law of cooling');
    expect(italicMaths('Projection of A⃗ along B⃗')).toBe('Projection of <i>A⃗</i> along <i>B⃗</i>');
    expect(italicMaths('Doppler effect (2πf, 1D)')).toBe('Doppler effect (2πf, 1D)');
  });
  it('keeps the maths markup a kicker has, and lowers only the words around it', () => {
    expect(formulaName('Internal energy from C<sub>V</sub>', true)).toBe('Internal energy from\u00a0<i>C</i><sub>V</sub>');
    expect(formulaName('FORMULA · DEPENDENCES OF <i>λ</i>')).toBe('Dependences of\u00a0<i>λ</i>');
  });
  it('leaves no lone symbol on the last line, and never starts one on an em dash', () => {
    expect(titleBreaks('String fixed at both ends (length <i>L</i>)')).toBe('String fixed at both ends (length\u00a0<i>L</i>)');
    expect(titleBreaks('Case 1 — acceleration depends on time')).toBe('Case 1\u00a0— acceleration depends on time');
  });
});

describe('lead-ins', () => {
  const card = (ch: typeof ch13, name: RegExp) => buildFormulaCards(ch).find((c) => name.test(c.name))!;
  it('keeps a lead-in as its own line when the next line has a label (Lissajous)', () => {
    const c = card(ch13, /perpendicular SHMs/);
    expect(c.items[0]).toEqual(expect.objectContaining({ expr: '' }));
    expect(c.items[0].label).toContain('equal frequency');
  });
  it('turns "with molar heat capacity C = …" into a label', () => {
    const c = card(ch11, /Polytropic/);
    expect(c.items.find((it) => it.label === 'With molar heat capacity')).toBeDefined();
  });
});
