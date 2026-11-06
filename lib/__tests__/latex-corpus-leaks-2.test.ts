import { latexToSegments, latexToText } from '@/lib/latex-text';

/**
 * WHAT A SECOND QA PASS OVER EVERY STORED BOARD LINE FOUND STILL WRONG ON SCREEN.
 *
 * The first pass (latex-corpus-leaks.test.ts) closed the lines that showed markup. This
 * one read the 33,247 stored lines for what a student SEES, and found eight things that
 * were not markup but were still not what the author meant. Every raw string below is a
 * real stored line, copied from that corpus with its lesson named; the few marked
 * "no stored line yet" are the siblings of one that is. Lines changed per class, of the
 * 33,247, against the converter before this one:
 *
 *   A. `\bar{x}` and `\overline{…}` printed the base with no bar ................ 45
 *   B. `\xrightarrow[below]{above}` showed "→([) hot]NH₂NH₂, KOH/glycol" .......... 5
 *   C. `\overset{+}{N}` showed "N (+)", a neutral atom with an aside ................ 3
 *   D. `\text{--}` showed two hyphens where TeX makes a dash ........................ 6
 *   E. `r\cos\theta` ran together as "rcosθ", `n\ln a` as "nln a" ................ 268
 *   F. a fraction in a fraction read "sin(θ)/(2)", and in a script showed "1n+1" .... 34
 *   G. one expression mixed a Unicode subscript with a drawn one ................... 514
 *   H. `\,`, `\;` and `\{` `\}` survived in lines with no command to read them ...... 40
 *
 * 896 distinct lines in all; every one of them is in a class above.
 */

/** A line as the board draws it, written the way the QA harness wrote it down: a drawn
 *  subscript as ⟦↓x⟧ and a drawn superscript as ⟦↑x⟧, a stacked fraction as ⟦(a) over (b)⟧,
 *  everything else as the text it is. */
function drawn(raw: string): string {
  return latexToSegments(raw)
    .map((s) => {
      if (s.kind === 'sub') return `⟦↓${s.text}⟧`;
      if (s.kind === 'sup') return `⟦↑${s.text}⟧`;
      if (s.kind === 'fraction') {
        const half = (text: string, parts?: { text: string; script?: 'sub' | 'sup' }[]) =>
          parts ? parts.map((p) => (p.script ? `⟦${p.script === 'sub' ? '↓' : '↑'}${p.text}⟧` : p.text)).join('') : text;
        return `⟦(${half(s.numerator, s.numeratorParts)}) over (${half(s.denominator, s.denominatorParts)})⟧`;
      }
      return 'text' in s ? s.text : `⟦${s.kind}⟧`;
    })
    .join('');
}

const MACRON = '̄';
const BAR = '̅';

/** `text` with a bar over every character, as `\overline` is meant to read: each character,
 *  and the marks it already carries, takes one more. */
const overlined = (text: string) => text.replace(/(.\p{M}*)/gsu, `$1${BAR}`);

describe('A. a bar over what it covers', () => {
  test.each([
    // electromagnetic-radiation-and-planck-s-quantum-theory
    [String.raw`\bar{\nu} = \dfrac{1}{\lambda}`, `ν${MACRON} = ⟦(1) over (λ)⟧`],
    [String.raw`E = hc\bar{\nu}`, `E = hcν${MACRON}`],
    // photoelectric-effect
    [String.raw`E = h\nu = \dfrac{hc}{\lambda} = hc\bar{\nu}`, `E = hν = ⟦(hc) over (λ)⟧ = hcν${MACRON}`],
    // random-experiments-sample-space-and-events: Ā is one letter, not an A and a loose mark
    [
      String.raw`A' = \bar{A} = S - A = \{\omega : \omega \in S \text{ and } \omega \notin A\}`,
      "A' = Ā = S - A = {ω : ω ∈ S  and  ω ∉ A}",
    ],
    // geometric-progression-nth-term-sum-and-infinite-gp: 0.3 is three tenths, 0.3̅ is a third
    [
      String.raw`0.\overline{3} = \dfrac{3/10}{1 - 1/10} = \dfrac{3/10}{9/10} = \dfrac{1}{3}`,
      `0.3${BAR} = ⟦(3/10) over (1 - 1/10)⟧ = ⟦(3/10) over (9/10)⟧ = ⟦(1) over (3)⟧`,
    ],
  ])('%s', (raw, expected) => {
    expect(drawn(raw)).toBe(expected);
  });

  test('the same line is the same text in the flat form, for chips and options', () => {
    expect(latexToText(String.raw`E = hc\bar{\nu}`)).toBe(`E = hcν${MACRON}`);
    expect(latexToText(String.raw`A' = \bar{A} = S - A`)).toBe("A' = Ā = S - A");
    expect(latexToText(String.raw`0.\overline{3}`)).toBe(`0.3${BAR}`);
  });

  test('a bar over a whole expression is one unbroken bar: NAND is not AND', () => {
    // boolean-expressions-and-combinational-logic-circuits. Each character, spaces inside the
    // span included, carries the mark: a bar with gaps reads as separate bars, and
    // "Ā · B̄" is not the complement of "A · B" — which is the law these lines teach.
    expect(drawn(String.raw`\text{NAND: } Y = \overline{A \cdot B}`)).toBe(`NAND:  Y = ${overlined('A · B')}`);
    expect(drawn(String.raw`\text{NOR: } Y = \overline{A + B}`)).toBe(`NOR:  Y = ${overlined('A + B')}`);
    expect(drawn(String.raw`\text{XNOR: } Y = \overline{A \oplus B}`)).toBe(`XNOR:  Y = ${overlined('A ⊕ B')}`);
    expect(drawn(String.raw`\overline{A + B} = \overline{A} \cdot \overline{B}`)).toBe(
      `${overlined('A + B')} = ${overlined('A')} · ${overlined('B')}`,
    );
    expect(drawn(String.raw`\overline{A \cdot B} = \overline{A} + \overline{B}`)).toBe(
      `${overlined('A · B')} = ${overlined('A')} + ${overlined('B')}`,
    );
    // The old output, for the record: the two sides were the same line.
    expect(drawn(String.raw`\overline{A + B} = \overline{A} \cdot \overline{B}`)).not.toBe('A + B = A · B');
  });

  test('a bar over a bar is a second mark on the same letters', () => {
    // boolean-expressions-and-combinational-logic-circuits: double complement
    expect(drawn(String.raw`\overline{\overline{A \cdot B}} = A \cdot B`)).toBe(
      `${overlined(overlined('A · B'))} = A · B`,
    );
    // ...and a macron letter under a bar keeps its macron: the bar goes after the LAST mark.
    expect(drawn(String.raw`T_3 = \overline{T_1 \cdot T_2} = \overline{\bar{A} \cdot \bar{B}}`)).toBe(
      `T₃ = ${overlined('T₁ · T₂')} = ${overlined(`Ā · B${MACRON}`)}`,
    );
  });

  test('`\\bar` over more than one character is a bar over all of it', () => {
    // boolean-expressions-and-combinational-logic-circuits
    expect(drawn(String.raw`Y = \overline{T_3 \cdot C} = \bar{T_3} + \bar{C} = \overline{A + B} + \bar{C}`)).toBe(
      `Y = ${overlined('T₃ · C')} = ${overlined('T₃')} + C${MACRON} = ${overlined('A + B')} + C${MACRON}`,
    );
  });

  test('every vowel Unicode has with a macron is one letter; the rest take the mark', () => {
    // no stored line yet: the corpus only bars A, B, C, P and ν.
    const table: [string, string][] = [
      ['a', 'ā'], ['e', 'ē'], ['i', 'ī'], ['o', 'ō'], ['u', 'ū'],
      ['A', 'Ā'], ['E', 'Ē'], ['I', 'Ī'], ['O', 'Ō'], ['U', 'Ū'],
    ];
    for (const [letter, precomposed] of table) {
      expect(latexToText(String.raw`\bar{${letter}}`)).toBe(precomposed);
      expect(precomposed).toHaveLength(1);
    }
    expect(latexToText(String.raw`\bar{x}`)).toBe(`x${MACRON}`);
    expect(latexToText(String.raw`\bar x`)).toBe(`x${MACRON}`);
    expect(latexToText(String.raw`\bar{\alpha}`)).toBe(`α${MACRON}`);
  });

  test('a mark is never left without a base', () => {
    // no stored line yet: an empty argument, or one that is only a space.
    for (const empty of [String.raw`\bar{}`, String.raw`\overline{}`, String.raw`\overline{ }`, String.raw`\overline{\,}`]) {
      expect(latexToText(empty)).toBe('');
      expect(latexToText(`a${empty}b`)).toBe('ab');
    }
    // And over a real set of lines, no run of text opens on a mark.
    for (const raw of [
      String.raw`\bar{P}_{\text{vol}} \sim \dfrac{B_{\text{max}}^2 \omega^2 t^2}{2\rho}`, // alternating-current-... mean power
      String.raw`\overline{\overline{A} \cdot \overline{B}} = A + B`,
      String.raw`\bar{\nu} = R_H Z^2 \left( \dfrac{1}{n_1^2} - \dfrac{1}{n_2^2} \right)`,
    ]) {
      for (const segment of latexToSegments(raw)) {
        if ('text' in segment) expect(segment.text).not.toMatch(/^\p{M}/u);
      }
    }
  });

  test('a mark is not pushed into a piece the board draws on its own', () => {
    // no stored line yet: a drawn subscript inside the bar.
    expect(latexToSegments(String.raw`\overline{x_{max}}`)).toEqual([
      { kind: 'math', text: `x${BAR}` },
      { kind: 'sub', text: 'max' },
    ]);
  });
});

describe('B. an arrow with a label above AND below', () => {
  test.each([
    // multi-step-conversions-and-reaction-maps
    [
      String.raw`>\text{C=O} \xrightarrow[\text{hot}]{\text{NH}_2\text{NH}_2,\ \text{KOH/glycol}} >\text{CH}_2`,
      '>C=O →(NH₂NH₂, KOH/glycol, hot) >CH₂',
    ],
    // preparation-of-aldehydes-and-ketones
    [
      String.raw`\text{RCH}_2\text{OH} \xrightarrow[573\text{ K}]{\text{Cu}} \text{RCHO} + \text{H}_2`,
      'RCH₂OH →(Cu, 573 K) RCHO + H₂',
    ],
    [
      String.raw`\text{R}_2\text{CHOH} \xrightarrow[573\text{ K}]{\text{Cu}} \text{R}_2\text{C=O} + \text{H}_2`,
      'R₂CHOH →(Cu, 573 K) R₂C=O + H₂',
    ],
    [String.raw`\text{RCOOR}' \xrightarrow[\text{low } T]{\text{DIBAL-H}} \text{RCHO}`, "RCOOR' →(DIBAL-H, low T) RCHO"],
    // preparation-of-carboxylic-acids
    [
      String.raw`\text{RCOOR}' \;\xrightarrow[\text{H}_3\text{O}^+]{1)\,\text{NaOH},\ \Delta}\; \text{RCOOH} + \text{R}'\text{OH}`,
      "RCOOR' →(1) NaOH, Δ, H₃O⁺) RCOOH + R'OH",
    ],
  ])('%s', (raw, expected) => {
    // Above first, then below, one space either side of the arrow however the source spaced it.
    expect(latexToText(raw)).toBe(expected);
    expect(drawn(raw)).toBe(expected);
  });

  test('the optional argument is read first, whatever the label is made of', () => {
    // no stored line yet: the three arrows, a flat label (the pre-pass reads these) and a nested one.
    expect(latexToText(String.raw`A \xrightarrow[573 K]{Cu} B`)).toBe('A →(Cu, 573 K) B');
    expect(latexToText(String.raw`A \xrightarrow[\text{573 K}]{\text{Cu}} B`)).toBe('A →(Cu, 573 K) B');
    expect(latexToText(String.raw`A \xleftarrow[\text{b}]{\text{a}} B`)).toBe('A ←(a, b) B');
    expect(latexToText(String.raw`A \xrightleftharpoons[\text{b}]{\text{a}} B`)).toBe('A ⇌(a, b) B');
    // one label alone, and an empty optional argument (a board line seen on a live device)
    expect(latexToText(String.raw`A \xrightarrow[\text{b}]{} B`)).toBe('A →(b) B');
    expect(latexToText(String.raw`6CO_2 + 6H_2O \xrightarrow[]{sunlight} C_6H_{12}O_6 + 6O_2`)).toBe(
      '6CO₂ + 6H₂O →(sunlight) C₆H₁₂O₆ + 6O₂',
    );
    expect(latexToText(String.raw`6CO_2 \xrightarrow[]{\text{sunlight}} C_6H_{12}O_6`)).toBe('6CO₂ →(sunlight) C₆H₁₂O₆');
    // a bracket that never closes does not swallow the rest of the line
    expect(latexToText(String.raw`A \xrightarrow[unclosed{a} B`)).toMatch(/unclosed.*B$/);
  });

  test('`\\xrightleftharpoons` with nested braces no longer prints its own name', () => {
    // no stored line yet: it printed "xrightleftharpoonsPt".
    expect(latexToText(String.raw`A \xrightleftharpoons{\text{Pt}} B`)).toBe('A  ⇌(Pt)  B');
  });

  test('an arrow with ONE label is exactly what it was', () => {
    // carbon-cycle: nested braces, padded both sides by the converter
    expect(drawn(String.raw`\text{CO}_2 \xrightarrow{\text{photosynthesis}} \text{producers} \rightarrow \text{food chain}`)).toBe(
      'CO₂  →(photosynthesis)  producers → food chain',
    );
    // oxidation-and-reduction-of-aldehydes-and-ketones: flat label, read before the line is
    expect(drawn(String.raw`R{-}CHO \xrightarrow{[O]} R{-}COOH`)).toBe('R-CHO →([O]) R-COOH');
  });
});

describe('C. a charge on an atom is on the atom', () => {
  test.each([
    // electrophilic-substitution-in-aromatic-amines (the `\text{--}` in it is class D)
    [
      String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{AlCl}_3 \rightarrow \text{C}_6\text{H}_5\overset{+}{\text{N}}\text{H}_2\text{--AlCl}_3^-`,
      'C₆H₅NH₂ + AlCl₃ → C₆H₅N⁺H₂–AlCl₃⁻',
    ],
    // preparation-and-structure-of-diazonium-salts
    [
      String.raw`\text{Ar}-\overset{+}{N}\equiv N \;\longleftrightarrow\; \text{Ar}^+\text{-}N=N \;\longleftrightarrow\; \text{Ar}\text{-}N=N^+`,
      'Ar-N⁺≡ N ⟷ Ar⁺-N=N ⟷ Ar-N=N⁺',
    ],
    [String.raw`\text{R}-\overset{+}{N}\equiv N \;\longrightarrow\; \text{R}^+ + N_2`, 'R-N⁺≡ N ⟶ R⁺ + N₂'],
  ])('%s', (raw, expected) => {
    expect(latexToText(raw)).toBe(expected);
    expect(drawn(raw)).toBe(expected);
  });

  test('a charge Unicode cannot spell is drawn, as a typed `^` is; `\\underset` hangs it below', () => {
    // no stored line yet
    expect(drawn(String.raw`\text{R}\overset{\delta+}{C}=\overset{\delta-}{O}`)).toBe('RC⟦↑δ+⟧=O⟦↑δ-⟧');
    expect(latexToText(String.raw`\overset{\delta+}{C}`)).toBe('C^(δ+)');
    expect(drawn(String.raw`\overset{\oplus}{N}`)).toBe('N⟦↑⊕⟧');
    expect(latexToText(String.raw`\overset{-}{O}`)).toBe('O⁻');
    expect(latexToText(String.raw`\overset{2+}{Cu}`)).toBe('Cu²⁺');
    expect(latexToText(String.raw`\stackrel{+}{N}`)).toBe('N⁺');
    expect(latexToText(String.raw`\underset{-}{X}`)).toBe('X₋');
    expect(latexToText(String.raw`\overset{\cdot}{C}`)).toBe('C·');
  });

  test('anything that is not a charge is the remark it always was', () => {
    // no stored line yet: none of the stored `\overset` lines is anything but a plus
    expect(latexToText(String.raw`\stackrel{\text{def}}{=}`)).toBe('= (def)');
    expect(latexToText(String.raw`\overset{!}{=}`)).toBe('= (!)');
    expect(latexToText(String.raw`A \underset{\text{(excess)}}{B}`)).toBe('A B (excess)');
    expect(latexToText(String.raw`\underset{\text{heat}}{\longrightarrow}`)).toBe('⟶ (heat)');
  });
});

describe('D. `--` inside \\text is a dash', () => {
  test.each([
    // human-evolution-hominid-fossils-and-timeline
    [String.raw`\text{Homo habilis} = 650\text{--}800\ \text{cc}`, 'Homo habilis = 650–800 cc'],
    [
      String.raw`\text{Australopithecus }(\sim 400) < H.\ habilis\ (650\text{--}800) < H.\ erectus\ (\sim 900) < \text{Neanderthal }(1400) < \text{Cro-Magnon }(\sim 1600)\ \text{cc}`,
      'Australopithecus (∼ 400) < H. habilis (650–800) < H. erectus (∼ 900) < Neanderthal (1400) < Cro-Magnon (∼ 1600) cc',
    ],
    // reactions-of-diazonium-salts-sandmeyer-gattermann-and-coupling: a range inside an arrow's label
    [
      String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\,\text{HCl} \xrightarrow{273\text{--}278\,\text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\,\text{H}_2\text{O}`,
      'C₆H₅NH₂ + NaNO₂ + 2 HCl  →(273–278 K)  C₆H₅N₂⁺Cl⁻ + NaCl + 2 H₂O',
    ],
    // electrophilic-substitution-in-aromatic-amines: a bond between two groups
    [String.raw`\text{H}_3\text{N}^+\text{--C}_6\text{H}_4\text{--SO}_3^-`, 'H₃N⁺–C₆H₄–SO₃⁻'],
  ])('%s', (raw, expected) => {
    expect(latexToText(raw)).toBe(expected);
    expect(drawn(raw)).toBe(expected);
  });

  test('three hyphens are an em dash', () => {
    // no stored line yet
    expect(latexToText(String.raw`\text{Dec---Mar}`)).toBe('Dec—Mar');
  });

  test('a sentence is left alone: its "--" is an ASCII arrow', () => {
    // alpha-halogenation-and-hell-volhard-zelinsky-reaction
    for (const prose of [
      'Worked route: propanoic acid --HVZ--> 2-chloropropanoic acid --H₂O--> lactic acid (2-hydroxypropanoic acid).',
      'Same intermediate, different nucleophile: 2-chloropropanoic acid + NH₃ --> alanine (2-aminopropanoic acid).',
    ]) {
      expect(latexToText(prose)).toBe(prose);
    }
  });

  test('in maths proper they are two minus signs, and an arrow keeps its label', () => {
    // Stored question-bank rows (backup 2026-10-01-laststep-verdict-strip.json): the distance from
    // (1, 3) to (-2, 5) written with its signs. Read as a range, "(3--3)" would show 3–3 = 0.
    expect(latexToText('$r^2 = (1--2)^2 + (-5--1)^2 = 9 + 16 = 25$')).toBe('r² = (1--2)² + (-5--1)² = 9 + 16 = 25');
    expect(latexToText('$r^2 = (3--3)^2 + (8-0)^2 = 36 + 64 = 100$')).toBe('r² = (3--3)² + (8-0)² = 36 + 64 = 100');
    // Stored rows (backup BACKUP-laststep-before-strip.json.gz): an ASCII arrow with its label.
    expect(latexToText('$C₆H₆ + CH₃Cl --AlCl₃--> C₆H₅CH₃ + HCl$')).toBe('C₆H₆ + CH₃Cl --AlCl₃--> C₆H₅CH₃ + HCl');
    expect(latexToText('$C₆H₅CH₃ --alk. KMnO₄, Δ--> C₆H₅COO⁻K⁺$')).toBe('C₆H₅CH₃ --alk. KMnO₄, Δ--> C₆H₅COO⁻K⁺');
  });
});

describe('E. a function name is set apart from the symbol before it', () => {
  test.each([
    // area-of-regions-bounded-by-circles-and-ellipses
    [
      String.raw`A = \dfrac{b}{a}\, S_{\text{circle}} = ab\cos^{-1}\!\left(\dfrac{c}{a}\right) - \dfrac{bc}{a}\sqrt{a^2 - c^2}`,
      'A = ⟦(b) over (a)⟧ S⟦↓circle⟧ = ab cos⁻¹(⟦(c) over (a)⟧) - ⟦(bc) over (a)⟧√(a² - c²)',
    ],
    // logarithmic-differentiation
    [
      String.raw`\ln(ab) = \ln a + \ln b, \quad \ln\!\left(\dfrac{a}{b}\right) = \ln a - \ln b, \quad \ln(a^n) = n\ln a`,
      'ln(ab) = ln a + ln b,   ln(⟦(a) over (b)⟧) = ln a - ln b,   ln(aⁿ) = n ln a',
    ],
    [String.raw`\ln(a^n) = n\ln a`, 'ln(aⁿ) = n ln a'],
    [
      String.raw`\dfrac{1}{y}\dfrac{dy}{dx} = \cos x\ln x + \sin x \cdot \dfrac{1}{x}`,
      '⟦(1) over (y)⟧⟦(dy) over (dx)⟧ = cos x ln x + sin x · ⟦(1) over (x)⟧',
    ],
    [
      String.raw`\dfrac{dy}{dx} = x^{\sin x}\left(\cos x\ln x + \dfrac{\sin x}{x}\right)`,
      '⟦(dy) over (dx)⟧ = xˢⁱⁿˣ(cos x ln x + ⟦(sin x) over (x)⟧)',
    ],
    // parametric-differentiation
    [String.raw`x = r\cos\theta, \quad y = r\sin\theta`, 'x = r cosθ,   y = r sinθ'],
    [String.raw`x = a\cos^{3} t, \quad y = a\sin^{3} t`, 'x = a cos³ t,   y = a sin³ t'],
    [
      String.raw`\dfrac{dx}{dt} = 3a\cos^{2} t \cdot (-\sin t) = -3a\cos^{2} t\sin t`,
      '⟦(dx) over (dt)⟧ = 3a cos² t · (-sin t) = -3a cos² t sin t',
    ],
    [
      String.raw`\dfrac{dy}{dt} = 3a\sin^{2} t \cdot \cos t = 3a\sin^{2} t\cos t`,
      '⟦(dy) over (dt)⟧ = 3a sin² t · cos t = 3a sin² t cos t',
    ],
    [
      String.raw`\dfrac{dy}{dx} = \dfrac{3a\sin^{2} t\cos t}{-3a\cos^{2} t\sin t}`,
      '⟦(dy) over (dx)⟧ = ⟦(3a sin² t cos t) over (-3a cos² t sin t)⟧',
    ],
    // standard-derivatives-with-the-product-and-quotient-rules
    [String.raw`y' = (2x)(\sin x) + (x^2)(\cos x) = 2x\sin x + x^2\cos x`, "y' = (2x)(sin x) + (x²)(cos x) = 2x sin x + x² cos x"],
    [String.raw`\dfrac{d}{dx}(x^2 \cos x) = 2x\cos x - x^2 \sin x`, '⟦(d) over (dx)⟧(x² cos x) = 2x cos x - x² sin x'],
  ])('%s', (raw, expected) => {
    expect(drawn(raw)).toBe(expected);
  });

  test('nothing is added after the name, and nothing where a gap already is', () => {
    // no stored line yet: these are the neighbours of the lines above, which must not move.
    expect(latexToText(String.raw`r\cos\theta`)).toBe('r cosθ'); // the name's argument stays attached
    expect(latexToText(String.raw`\cos\theta`)).toBe('cosθ');
    expect(latexToText(String.raw`\sin x + \cos x - \tan x`)).toBe('sin x + cos x - tan x');
    expect(latexToText(String.raw`x + \sin t`)).toBe('x + sin t');
    expect(latexToText(String.raw`\left(\sin x\right)`)).toBe('(sin x)');
    expect(latexToText(String.raw`2x \, \sin x`)).toBe('2x sin x');
    expect(latexToText(String.raw`\max(a,b) \min \arctan z`)).toBe('max(a,b) min arctan z');
  });

  test('a function after another function, a digit or a closing bracket gets the gap', () => {
    // no stored line yet
    expect(latexToText(String.raw`\sin\cos x`)).toBe('sin cos x');
    expect(latexToText(String.raw`2\ln x`)).toBe('2 ln x');
    expect(latexToText(String.raw`(x+1)\ln x`)).toBe('(x+1) ln x');
    expect(latexToText(String.raw`x^{2}\sin x`)).toBe('x² sin x');
    expect(latexToText(String.raw`e^{\alpha}\cos x`)).toBe('e^α cos x');
    expect(drawn(String.raw`e^{\alpha}\cos x`)).toBe('e⟦↑α⟧ cos x');
    expect(latexToText(String.raw`f'\sin x`)).toBe("f' sin x");
  });

  test('the flat form gets the same gap', () => {
    expect(latexToText(String.raw`x = r\cos\theta, \quad y = r\sin\theta`)).toBe('x = r cosθ,   y = r sinθ');
    expect(latexToText(String.raw`\ln(a^n) = n\ln a`)).toBe('ln(aⁿ) = n ln a');
  });
});

describe('F. a fraction inside a fraction or a script is written on the line', () => {
  test.each([
    // derivatives-of-inverse-trigonometric-functions: the half-angle fractions are sin(θ/2), not sin(θ)/2
    [
      String.raw`\dfrac{1-\cos\theta}{\sin\theta} = \dfrac{2\sin^{2}\tfrac{\theta}{2}}{2\sin\tfrac{\theta}{2}\cos\tfrac{\theta}{2}} = \tan\dfrac{\theta}{2}`,
      // `2 sin` and `sin(θ/2) cos` carry class E's gap; the last fraction is not nested and still stacks
      '⟦(1-cosθ) over (sinθ)⟧ = ⟦(2 sin²(θ/2)) over (2 sin(θ/2) cos(θ/2))⟧ = tan⟦(θ) over (2)⟧',
    ],
    // geometric-progression-nth-term-sum-and-infinite-gp: a fraction in an exponent
    [
      String.raw`r = \left(\dfrac{b}{a}\right)^{\frac{1}{n+1}}, \qquad G_k = a\,r^{k} = a\left(\dfrac{b}{a}\right)^{\frac{k}{n+1}}`,
      'r = (⟦(b) over (a)⟧)⟦↑1/(n+1)⟧,    Gₖ = a rᵏ = a(⟦(b) over (a)⟧)⟦↑k/(n+1)⟧',
    ],
    [
      String.raw`P = a^n \left(\dfrac{b}{a}\right)^{\frac{1}{n+1} \cdot \frac{n(n+1)}{2}} = a^n \left(\dfrac{b}{a}\right)^{n/2}`,
      'P = aⁿ (⟦(b) over (a)⟧)⟦↑1/(n+1) · n(n+1)/2⟧ = aⁿ (⟦(b) over (a)⟧)ⁿᐟ²',
    ],
    // differentiation-of-one-function-with-respect-to-another
    [String.raw`\dfrac{dy}{dx} = \dfrac{\dfrac{dy}{dt}}{\dfrac{dx}{dt}}`, '⟦(dy) over (dx)⟧ = ⟦(dy/dt) over (dx/dt)⟧'],
    // applications-and-word-problems-on-progressions: touching the next factor, so bracketed
    [
      String.raw`\dfrac{S_7}{S_{11}} = \dfrac{\frac{7}{2}(2a+6d)}{\frac{11}{2}(2a+10d)} = \dfrac{6}{11}`,
      '⟦(S₇) over (S₁₁)⟧ = ⟦((7/2)(2a+6d)) over ((11/2)(2a+10d))⟧ = ⟦(6) over (11)⟧',
    ],
    // nature-and-properties-of-electromagnetic-waves
    [
      String.raw`\dfrac{u_E}{u_B} = \dfrac{\tfrac{1}{2}\varepsilon_0 E^2}{B^2/2\mu_0} = \mu_0 \varepsilon_0 c^2 = 1`,
      '⟦(u⟦↓E⟧) over (u⟦↓B⟧)⟧ = ⟦((1/2)ε₀ E²) over (B²/2μ₀)⟧ = μ₀ ε₀ c² = 1',
    ],
    // summation-of-trigonometric-series: the fractions inside the first two brackets are written
    // on the line; the one in the third bracket is not inside a fraction, and still stacks
    [
      String.raw`\sum_{r=0}^{n-1} \sin(a + r\beta) = \dfrac{\sin\left(\dfrac{n\beta}{2}\right)}{\sin\left(\dfrac{\beta}{2}\right)} \sin\left(a + \dfrac{(n-1)\beta}{2}\right)`,
      '∑ᵣ₌₀ⁿ⁻¹ sin(a + rβ) = ⟦(sin(nβ/2)) over (sin(β/2))⟧ sin(a + ⟦((n-1)β) over (2)⟧)',
    ],
  ])('%s', (raw, expected) => {
    expect(drawn(raw)).toBe(expected);
    // No fraction marker ever reaches the screen: it used to, in the drawn exponent. (JSON writes a
    // control character as \u00XX, which is what this looks for.)
    expect(JSON.stringify(latexToSegments(raw))).not.toMatch(/\\u00[01][0-9a-f]/);
  });

  test('the half of a stacked fraction carries the written fraction as plain text', () => {
    const [fraction] = latexToSegments(String.raw`\dfrac{\dfrac{dy}{dt}}{\dfrac{dx}{dt}}`);
    expect(fraction).toEqual({ kind: 'fraction', numerator: 'dy/dt', denominator: 'dx/dt' });
    const [exponent] = latexToSegments(String.raw`x^{\frac{1}{n+1}}`).slice(1);
    expect(exponent).toEqual({ kind: 'sup', text: '1/(n+1)' });
  });

  test('a fraction beside an operator or alone is bare; one touching another factor is bracketed', () => {
    // no stored line yet: the shapes the stored lines above are made of.
    expect(drawn(String.raw`\dfrac{a}{\dfrac{b}{\dfrac{c}{d}}}`)).toBe('⟦(a) over (b/(c/d))⟧');
    expect(drawn(String.raw`\dfrac{\dfrac{a+b}{2}}{c}`)).toBe('⟦((a+b)/2) over (c)⟧');
    expect(drawn(String.raw`\dfrac{x}{\dfrac{1}{a}+\dfrac{1}{b}}`)).toBe('⟦(x) over (1/a+1/b)⟧');
    expect(drawn(String.raw`\dfrac{2\frac{a}{b}}{c}`)).toBe('⟦(2(a/b)) over (c)⟧');
    expect(drawn(String.raw`\dfrac{\frac{a}{b}\frac{c}{d}}{e}`)).toBe('⟦((a/b)(c/d)) over (e)⟧');
    expect(drawn(String.raw`\dfrac{\frac{a}{b}^2}{c}`)).toBe('⟦((a/b)²) over (c)⟧');
    expect(drawn(String.raw`\dfrac{-\frac{1}{2}}{3}`)).toBe('⟦(-1/2) over (3)⟧');
    expect(drawn(String.raw`\dfrac{1}{\frac{-1}{2}}`)).toBe('⟦(1) over (-1/2)⟧');
    expect(drawn(String.raw`e^{-\frac{t}{\tau}}`)).toBe('e⟦↑-t/τ⟧');
    expect(drawn(String.raw`x_{\frac{1}{2}}^{\frac{3}{4}}`)).toBe('x⟦↓1/2⟧⟦↑3/4⟧');
    // a function applied to one gets brackets, spaced or not
    expect(drawn(String.raw`\dfrac{\sin \tfrac{\theta}{2}}{c}`)).toBe('⟦(sin (θ/2)) over (c)⟧');
    expect(drawn(String.raw`\dfrac{\sin\tfrac{\theta}{2} + 1}{c}`)).toBe('⟦(sin(θ/2) + 1) over (c)⟧');
    // a radical over one is bracketed, or "√a/b" would read as √a over b
    expect(drawn(String.raw`\dfrac{\sqrt{\frac{a}{b}}}{2}`)).toBe('⟦(√(a/b)) over (2)⟧');
  });

  test('a fraction that is not inside anything still stacks, function name or not', () => {
    // derivatives-of-inverse-trigonometric-functions (the last term of the first line above)
    expect(drawn(String.raw`\tan\dfrac{\theta}{2}`)).toBe('tan⟦(θ) over (2)⟧');
    expect(drawn(String.raw`\sin\dfrac{\theta}{2}\cos\dfrac{\theta}{2}`)).toBe('sin⟦(θ) over (2)⟧cos⟦(θ) over (2)⟧');
    expect(drawn(String.raw`S = \dfrac{a}{1-r}`)).toBe('S = ⟦(a) over (1-r)⟧');
  });

  test('the flat form is exactly what it was', () => {
    // These lines have no function name, so no other class touches them: the expected text is the
    // old converter's, character for character.
    expect(latexToText(String.raw`r = \left(\dfrac{b}{a}\right)^{\frac{1}{n+1}}, \qquad G_k = a\,r^{k} = a\left(\dfrac{b}{a}\right)^{\frac{k}{n+1}}`)).toBe(
      'r = ((b/a))¹ᐟ⁽ⁿ⁺¹⁾,    Gₖ = a rᵏ = a((b/a))ᵏᐟ⁽ⁿ⁺¹⁾',
    );
    expect(latexToText(String.raw`\dfrac{dy}{dx} = \dfrac{\dfrac{dy}{dt}}{\dfrac{dx}{dt}}`)).toBe('dy/dx = dy/dt/dx/dt');
    expect(latexToText(String.raw`\dfrac{S_7}{S_{11}} = \dfrac{\frac{7}{2}(2a+6d)}{\frac{11}{2}(2a+10d)} = \dfrac{6}{11}`)).toBe(
      'S₇/S₁₁ = (⁷⁄₂(2a+6d))/(¹¹⁄₂(2a+10d)) = ⁶⁄₁₁',
    );
    expect(latexToText(String.raw`\dfrac{u_E}{u_B} = \dfrac{\tfrac{1}{2}\varepsilon_0 E^2}{B^2/2\mu_0} = \mu_0 \varepsilon_0 c^2 = 1`)).toBe(
      'u_E/u_B = (¹⁄₂ε₀ E²)/B²/2μ₀ = μ₀ ε₀ c² = 1',
    );
    expect(latexToText(String.raw`x^{\frac{a+b}{2}}`)).toBe('x⁽ᵃ⁺ᵇ⁾ᐟ²');
  });

  test('where a function name is in the line, the flat form changes only as class E says', () => {
    // derivatives-of-inverse-trigonometric-functions. The gap before `sin` makes `2 sin²θ/2` more
    // than one term, so the flat fraction brackets it where the old text ran the halves together
    // ("2sin²θ/2/2sin(θ/2)cosθ/2"). The fractions inside are written exactly as they were.
    expect(latexToText(String.raw`\dfrac{1-\cos\theta}{\sin\theta} = \dfrac{2\sin^{2}\tfrac{\theta}{2}}{2\sin\tfrac{\theta}{2}\cos\tfrac{\theta}{2}} = \tan\dfrac{\theta}{2}`)).toBe(
      '(1-cosθ)/sinθ = (2 sin²θ/2)/(2 sin(θ/2) cosθ/2) = tanθ/2',
    );
  });
});

describe('G. one expression, one notation for its scripts', () => {
  test.each([
    // area-bounded-by-a-curve-and-its-tangent-or-normal: `top` is spelled in Unicode, `bottom` cannot be
    [String.raw`A = \int_{a}^{b} [y_{top} - y_{bottom}]\, dx`, 'A = ∫ₐᵇ [y⟦↓top⟧ - y⟦↓bottom⟧] dx'],
    // area-bounded-by-a-parabola-and-a-line
    [
      String.raw`A = \int_{a}^{b} [y_{\text{parabola}} - y_{\text{line}}]\, dx`,
      'A = ∫ₐᵇ [y⟦↓parabola⟧ - y⟦↓line⟧] dx',
    ],
    // torque-and-potential-energy-of-a-dipole-in-a-uniform-electric-field
    [
      'Trap 1: $E_{axial}$ = 2 $E_{equatorial}$ at the same distance - never forget the factor of 2.',
      'Trap 1: E⟦↓axial⟧ = 2 E⟦↓equatorial⟧ at the same distance - never forget the factor of 2.',
    ],
    // power-in-ac-circuits-and-power-factor: `in` is made of index letters and means "input";
    // the single letters beside it keep the Unicode they had
    [
      String.raw`\eta = \dfrac{P_{out}}{P_{in}} \times 100\% = \dfrac{V_s I_s}{V_p I_p} \times 100\%`,
      'η = ⟦(P⟦↓out⟧) over (P⟦↓in⟧)⟧ × 100% = ⟦(Vₛ Iₛ) over (Vₚ Iₚ)⟧ × 100%',
    ],
    // series-lr-circuit: a word in a pair, in `$ $`
    [String.raw`P = I_{rms}^{2}\, R`, 'P = I⟦↓rms⟧⟦↑2⟧ R'],
  ])('%s', (raw, expected) => {
    expect(drawn(raw)).toBe(expected);
  });

  test('a pair is decided together, bare or in $ $', () => {
    // area-by-integration-along-the-y-axis (takeaway): `_c^d` in prose, read one script at a time
    // it was "∫⟦↓c⟧ᵈ", one limit drawn and the other spelled
    expect(
      drawn('The area of a region bounded by x = g(y), the y-axis, and horizontal lines y = c and y = d is given by ∫_c^d g(y) dy.'),
    ).toBe('The area of a region bounded by x = g(y), the y-axis, and horizontal lines y = c and y = d is given by ∫⟦↓c⟧⟦↑d⟧ g(y) dy.');
    // phasors-and-phase-relationships, series-lcr-circuit-impedance-and-phase
    expect(drawn('General case with three voltages: V = sqrt(V_R^2 + (V_L - V_C)^2), since V_L and V_C are anti-parallel and partially cancel.')).toBe(
      'General case with three voltages: V = sqrt(V⟦↓R⟧⟦↑2⟧ + (V⟦↓L⟧ - V⟦↓C⟧)²), since V⟦↓L⟧ and V⟦↓C⟧ are anti-parallel and partially cancel.',
    );
    expect(drawn(String.raw`V = \sqrt{V_R^2 + (V_L - V_C)^2} \quad (\text{never } V_R + V_L + V_C)`)).toBe(
      'V = √(V⟦↓R⟧⟦↑2⟧ + (V⟦↓L⟧ - V⟦↓C⟧)²)   (never  V⟦↓R⟧ + V⟦↓L⟧ + V⟦↓C⟧)',
    );
    // a pair that Unicode can spell whole is still spelled: nothing needs drawing
    expect(drawn('the sum of x_1^2 and y_i^n')).toBe('the sum of x₁² and yᵢⁿ');
  });

  test('an index pair stays Unicode, and so do single letters, digits and mixed indices', () => {
    // electrostatic-potential-energy-of-charge-system
    expect(drawn(String.raw`U = \sum_{i<j} \dfrac{k q_i q_j}{r_{ij}}`)).toBe('U = ∑⟦↓i<j⟧ ⟦(k qᵢ qⱼ) over (rᵢⱼ)⟧');
    // no stored line yet: the others in the same family, and the forms the rule does not touch
    expect(drawn(String.raw`a_{mn} + a_{kl} + a_{n+1} + a_0 + a_i`)).toBe('aₘₙ + aₖₗ + aₙ₊₁ + a₀ + aᵢ');
    expect(drawn(String.raw`x_{i} + x_{12}`)).toBe('xᵢ + x₁₂');
  });

  test('the flat form is exactly what it was', () => {
    // The plain-string path has no drawn subscript to be consistent with, and keeps the Unicode it
    // always spelled (chips and options are read as text, not drawn).
    expect(latexToText(String.raw`A = \int_{a}^{b} [y_{top} - y_{bottom}]\, dx`)).toBe('A = ∫ₐᵇ [yₜₒₚ - y_(bottom)] dx');
    expect(latexToText(String.raw`A = \int_{a}^{b} [y_{\text{parabola}} - y_{\text{line}}]\, dx`)).toBe(
      'A = ∫ₐᵇ [y_(parabola) - yₗᵢₙₑ] dx',
    );
    expect(latexToText('Trap 1: $E_{axial}$ = 2 $E_{equatorial}$ at the same distance - never forget the factor of 2.')).toBe(
      'Trap 1: Eₐₓᵢₐₗ = 2 E_(equatorial) at the same distance - never forget the factor of 2.',
    );
    expect(
      latexToText('The area of a region bounded by x = g(y), the y-axis, and horizontal lines y = c and y = d is given by ∫_c^d g(y) dy.'),
    ).toBe('The area of a region bounded by x = g(y), the y-axis, and horizontal lines y = c and y = d is given by ∫_cᵈ g(y) dy.');
    expect(latexToText(String.raw`\eta = \dfrac{P_{out}}{P_{in}} \times 100\%`)).toBe('η = Pₒᵤₜ/Pᵢₙ × 100%');
    expect(latexToText(String.raw`V = \sqrt{V_R^2 + (V_L - V_C)^2} \quad (\text{never } V_R + V_L + V_C)`)).toBe(
      'V = √(V_R^2 + (V_L - V_C)²)   (never  V_R + V_L + V_C)',
    );
  });
});

describe('H. escapes that survive in a line with no command', () => {
  test.each([
    // cannizzaro-reaction: the arrow is rewritten before the line is read, which leaves no command in it
    [String.raw`2\,HCHO \xrightarrow{conc.\,NaOH} CH_3OH + HCOONa`, '2 HCHO →(conc. NaOH) CH₃OH + HCOONa'],
    // random-experiments-sample-space-and-events
    [String.raw`S = \{1, 2, 3, 4, 5, 6\}`, 'S = {1, 2, 3, 4, 5, 6}'],
    // types-of-sets-empty-finite-infinite-and-equal-sets
    [String.raw`\{x : x^2 = 2\}`, '{x : x² = 2}'],
    // quantum-numbers-and-orbital-designation
    [String.raw`1s\;2s\;2p\;3s\;3p\;4s\;3d\;4p\;5s\;4d\;5p\;6s\;4f\;5d\;6p\;7s`, '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s'],
    // area-between-two-intersecting-curves
    [String.raw`dA = [f(x) - g(x)]\,dx`, 'dA = [f(x) - g(x)] dx'],
    // electric-field
    [String.raw`[E] = [M\,L\,T^{-3}\,A^{-1}]`, '[E] = [M L T⁻³ A⁻¹]'],
    // continuity-of-composite-functions-and-the-intermediate-value-property
    [String.raw`f(x+y)=f(x)\,f(y)`, 'f(x+y)=f(x) f(y)'],
    // emf-terminal-voltage-and-internal-resistance
    [String.raw`V = E + Ir = 6 + (1.6)(0.5) = 6.8\,V`, 'V = E + Ir = 6 + (1.6)(0.5) = 6.8 V'],
    // series-lr-circuit
    [String.raw`V_{rms} = I_{rms} \, Z`, 'V⟦↓rms⟧ = I⟦↓rms⟧ Z'],
  ])('%s', (raw, expected) => {
    expect(drawn(raw)).toBe(expected);
  });

  test('a gap swallows the spaces round it, as it does inside maths', () => {
    expect(latexToText(String.raw`dA = x \, dy`)).toBe('dA = x dy');
    expect(latexToText(String.raw`CH_3CHFCH_2COOH \;>\; CH_2FCH_2CH_2COOH`)).toBe('CH₃CHFCH₂COOH > CH₂FCH₂CH₂COOH');
    // no stored line yet
    expect(latexToText(String.raw`a\:b`)).toBe('a b');
    expect(latexToText(String.raw`a\!b`)).toBe('ab');
  });

  test('a line break before a comma is not a thin space', () => {
    // no stored line yet
    expect(latexToText(String.raw`a \\, b`)).toBe(String.raw`a \\, b`);
  });

  test('the same escapes were already read inside maths, and still are', () => {
    expect(latexToText(String.raw`$\sin x \, dx$`)).toBe('sin x dx');
    expect(latexToText(String.raw`$P(\{a, b\})$`)).toBe('P({a, b})');
  });
});
