import { latexToSegments, latexToText } from '@/lib/latex-text';

/**
 * WHAT A QA PASS OVER EVERY STORED BOARD LINE FOUND STILL WRONG ON SCREEN.
 *
 * All 33,247 stored lines (board lines, notes, takeaways, figure labels, titles) were
 * rendered through this converter and read as a student would read them. Five
 * constructs were still showing markup. Every raw string below is a real stored line,
 * copied from that corpus, and the expected text is what the same line shows now.
 *
 *   1. A command with no symbol printed its own NAME ("A iff B", "p implies q").
 *   2. `\$` was taken for a maths delimiter, so two of them ate the money between.
 *   3. `e^(-t/τ)` and `x^(1/3)` kept their caret and both brackets.
 *   4. Braces that only group stayed on screen: "{}⁵²C₅", "R{-}CHO", "({base})".
 *   5. `\ce{C^{\delta+}=O^{\delta-}}` printed "C^\delta+=O^\delta-".
 *
 * Currency has its own cases beside the rule it extends, in currency-not-math.test.ts.
 */

/** A line as the board draws it, written the way the QA harness wrote it down: a drawn
 *  subscript as ⟦↓x⟧ and a drawn superscript as ⟦↑x⟧, everything else as the text it is. */
function drawn(raw: string): string {
  return latexToSegments(raw)
    .map((s) => {
      if (s.kind === 'sub') return `⟦↓${s.text}⟧`;
      if (s.kind === 'sup') return `⟦↑${s.text}⟧`;
      return 'text' in s ? s.text : `⟦${s.kind}⟧`;
    })
    .join('');
}

describe('1. a command with no symbol printed its own name', () => {
  test.each([
    // iff (44 stored lines) and implies (39)
    [
      String.raw`\text{Optically active} \iff \text{no plane or centre of symmetry}`,
      'Optically active ⟺ no plane or centre of symmetry',
    ],
    [String.raw`(a,\,b) \in f \iff (b,\,a) \in f^{-1}`, '(a, b) ∈ f ⟺ (b, a) ∈ f⁻¹'],
    [String.raw`\sin^{-1}x = \cos^{-1}x \implies x = \dfrac{1}{\sqrt{2}}`, 'sin⁻¹x = cos⁻¹x ⟹ x = 1/√2'],
    [
      String.raw`y \geq |x| \implies \text{above } y = x \text{ and } y = -x`,
      'y ≥ |x| ⟹ above  y = x  and  y = -x',
    ],
    // Longrightarrow (8) and Longleftrightarrow (13)
    [String.raw`A = Z + N \quad \Longrightarrow \quad N = A - Z`, 'A = Z + N   ⟹   N = A - Z'],
    [
      String.raw`f \text{ differentiable at } c \;\Longrightarrow\; f \text{ continuous at } c`,
      'f  differentiable at  c ⟹ f  continuous at  c',
    ],
    [String.raw`b^2 = ac \;\Longleftrightarrow\; b = \pm\sqrt{ac}`, 'b² = ac ⟺ b = ±√ac'],
    // longleftrightarrow (7) and longleftarrow (1)
    [String.raw`>\text{C}=\text{O} \longleftrightarrow >\text{C}^{+}-\text{O}^{-}`, '>C=O ⟷ >C⁺-O⁻'],
    [
      String.raw`\text{Human line} \;\longleftarrow\; \text{Last Common Ancestor (6-8 mya)} \;\longrightarrow\; \text{Chimpanzee line}`,
      'Human line ⟵ Last Common Ancestor (6-8 mya) ⟶ Chimpanzee line',
    ],
    // mapsto, subsetneq, lnot, checkmark
    [
      String.raw`s \mapsto 3 - 4s \text{ is decreasing, so } (0, 1] \mapsto [3 - 4, 3) = [-1, 3)`,
      's ↦ 3 - 4s  is decreasing, so  (0, 1] ↦ [3 - 4, 3) = [-1, 3)',
    ],
    [String.raw`A \subsetneq B \iff A \subseteq B \text{ and } A \neq B`, 'A ⊊ B ⟺ A ⊆ B  and  A ≠ B'],
    [
      String.raw`x \in (A \cup B) - (A \cap B) \iff (x \in A \lor x \in B) \land \lnot (x \in A \land x \in B)`,
      'x ∈ (A ∪ B) - (A ∩ B) ⟺ (x ∈ A ∨ x ∈ B) ∧ ¬ (x ∈ A ∧ x ∈ B)',
    ],
    [String.raw`[ut] = [LT^{-1}][T] = [L] \;\checkmark`, '[ut] = [LT⁻¹][T] = [L] ✓'],
    [String.raw`[at^2] = [LT^{-2}][T^2] = [L] \;\checkmark`, '[at²] = [LT⁻²][T²] = [L] ✓'],
  ])('%s', (raw, expected) => {
    expect(latexToText(raw)).toBe(expected);
  });

  test('the same line is the same text in the drawn path', () => {
    expect(drawn(String.raw`A = Z + N \quad \Longrightarrow \quad N = A - Z`)).toBe('A = Z + N   ⟹   N = A - Z');
    expect(drawn(String.raw`A \subsetneq B \iff A \subseteq B`)).toBe('A ⊊ B ⟺ A ⊆ B');
  });

  test('every sibling of those commands prints its symbol too, not its name', () => {
    // The ones with no stored line yet are the same defect waiting for the next lesson.
    const table: [string, string][] = [
      ['iff', '⟺'], ['implies', '⟹'], ['impliedby', '⟸'],
      ['Longrightarrow', '⟹'], ['Longleftarrow', '⟸'], ['Longleftrightarrow', '⟺'],
      ['longleftrightarrow', '⟷'], ['longleftarrow', '⟵'],
      ['mapsto', '↦'], ['longmapsto', '⟼'], ['checkmark', '✓'],
      ['subsetneq', '⊊'], ['supsetneq', '⊋'], ['lnot', '¬'], ['neg', '¬'],
      ['triangle', '△'], ['bigtriangleup', '△'],
    ];
    for (const [name, glyph] of table) {
      expect(latexToText(`A \\${name} B`)).toBe(`A ${glyph} B`);
    }
  });

  test('a function name is a word, and stays one', () => {
    // sin, cos, tan, log, ln, lim, min, max and arctan are meant to read as words.
    expect(latexToText(String.raw`\sin x + \cos x - \tan x`)).toBe('sin x + cos x - tan x');
    expect(latexToText(String.raw`\ln y = \log z`)).toBe('ln y = log z');
    expect(latexToText(String.raw`\max(a,b) \min \arctan z`)).toBe('max(a,b) min arctan z');
  });
});

describe('3. a bracketed exponent is the exponent, not a caret and two brackets', () => {
  test('a script Unicode can spell is spelled, as it is with braces', () => {
    expect(latexToText('y = x^(1/3) | y = x³')).toBe('y = x¹ᐟ³ | y = x³');
    expect(latexToText('y = t³ = ±x^(3/2) | dy/dx = ±(3/2)√x')).toBe('y = t³ = ±x³ᐟ² | dy/dx = ±(3/2)√x');
    expect(latexToText('(x+x+3/x²)/3 ≥ 3^(1/3) | Min = 3^(4/3) at x = 3^(1/3)')).toBe(
      '(x+x+3/x²)/3 ≥ 3¹ᐟ³ | Min = 3⁴ᐟ³ at x = 3¹ᐟ³',
    );
    // The space inside "sin x" goes, exactly as `x^{\sin x}` always dropped it.
    expect(latexToText('dy/dx = x^(sin x)(cos x ln x + (sin x)/x)')).toBe('dy/dx = xˢⁱⁿˣ(cos x ln x + (sin x)/x)');
    expect(latexToText('the field is μ₀IR² / [2(x² + R²)^(3/2)], and it reduces')).toBe(
      'the field is μ₀IR² / [2(x² + R²)³ᐟ²], and it reduces',
    );
  });

  test('nested brackets are one group', () => {
    expect(
      latexToText('Exam trap: writing r = (b/a)^(1/n) instead of (b/a)^(1/(n+1)) gives the wrong ratio.'),
    ).toBe('Exam trap: writing r = (b/a)¹ᐟⁿ instead of (b/a)¹ᐟ⁽ⁿ⁺¹⁾ gives the wrong ratio.');
  });

  test('a script Unicode cannot spell is drawn, not left as a caret', () => {
    // There is no superscript τ, so "−t/τ" is drawn raised, as `e^{-t/\tau}` is.
    expect(drawn('v(t) = vₜ(1 - e^(-t/τ)) | vₜ | t | v')).toBe('v(t) = vₜ(1 - e⟦↑-t/τ⟧) | vₜ | t | v');
    expect(drawn('L | R | I(t) = I₀ e^(-t/τ) | t | I₀')).toBe('L | R | I(t) = I₀ e⟦↑-t/τ⟧ | t | I₀');
    expect(latexToSegments('I = I₀ e^(-t/τ)')).toEqual([
      { kind: 'text', text: 'I = I₀ e' },
      { kind: 'sup', text: '-t/τ' },
    ]);
    expect(drawn(String.raw`$e^{-t/\tau}$`)).toBe(drawn('e^(-t/τ)'));
  });

  test('a radical straight after a caret is the exponent', () => {
    // From the chain-rule board: "e^√x" showed its caret, and the ratio beside it did too.
    expect(drawn('e^√x | e^√x | × 1/(2√x) | = e^√x/(2√x)')).toBe('e⟦↑√x⟧ | e⟦↑√x⟧ | × 1/(2√x) | = e⟦↑√x⟧/(2√x)');
    expect(latexToSegments('e^√x')).toEqual([{ kind: 'text', text: 'e' }, { kind: 'sup', text: '√x' }]);
    expect(drawn('e^√(x+1)')).toBe('e⟦↑√(x+1)⟧');
  });

  test('inside $…$ the same exponent converts, and a lone "(" is no longer the exponent', () => {
    expect(latexToText('$x^(1/3)$')).toBe('x¹ᐟ³');
    expect(drawn('$e^(-t/\\tau)$')).toBe(drawn('$e^{-t/\\tau}$'));
    expect(latexToText('$x^(2)$ and $x^(-1)$')).toBe('x² and x⁻¹');
  });

  test('converting the converter\'s own flat output changes nothing', () => {
    // "I_(enc)" is what the plain-string path writes for a script it cannot spell. It is
    // read again by every consumer that converts text that is already converted.
    for (const flat of [
      'I_(enc)',
      'e^(−t/τ)',
      'x^(A)',
      'e^(√x)',
      'E_(Cu)',
      'C^(δ+)=O^(δ-)',
    ]) {
      expect(latexToText(flat)).toBe(flat);
    }
    for (const source of [
      String.raw`$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$`,
      String.raw`$e^{-t/\tau}$`,
      String.raw`$x^{(A)}$`,
      String.raw`$E_{(Cu)}$`,
      'e^√x',
      'x^(A)',
      String.raw`\ce{C^{\delta+}=O^{\delta-}}`,
    ]) {
      const once = latexToText(source);
      expect(latexToText(once)).toBe(once);
    }
    // And the flat subscript is not read as one: it stays text in the drawn path too.
    expect(latexToSegments('I_(enc)')).toEqual([{ kind: 'text', text: 'I_(enc)' }]);
  });

  test('snake_case, ordinary brackets and a caret that is not an exponent are left alone', () => {
    for (const prose of [
      'see the snake_case name and my_var_name',
      'f(x) and g(x) with (an aside)',
      'F_mag (up) | mg (down)',
      'x ^ (aside)',
      'an unclosed x^(1/3 stays as typed',
    ]) {
      expect(latexToText(prose)).toBe(prose);
    }
    expect(latexToText('x^2 (see below)')).toBe('x² (see below)');
  });
});

describe('4. braces that only group do not reach the screen', () => {
  test('an empty group before a prescript', () => {
    expect(latexToText('n(S) = {}^{52}C_5 = 2{,}598{,}960')).toBe('n(S) = ⁵²C₅ = 2,598,960');
    expect(latexToText('n(S) = {}^{11}C_4 = 330')).toBe('n(S) = ¹¹C₄ = 330');
    // No Unicode for A or Z, so both are drawn, and the empty group leaves nothing behind.
    expect(latexToSegments('{}^{A}_{Z}X')).toEqual([
      { kind: 'sup', text: 'A' },
      { kind: 'sub', text: 'Z' },
      { kind: 'text', text: 'X' },
    ]);
  });

  test('a bond sign in braces, in a line with no command to read it', () => {
    expect(latexToText('(CH_3)_3C{-}NH_2')).toBe('(CH₃)₃C-NH₂');
    expect(latexToText('CH_3CH_2CH_2{-}N(CH_3){-}CH_2CH_3')).toBe('CH₃CH₂CH₂-N(CH₃)-CH₂CH₃');
    // The arrow is rewritten before the line is read, which leaves no command in it.
    expect(latexToText(String.raw`R{-}CHO \xrightarrow{[O]} R{-}COOH`)).toBe('R-CHO →([O]) R-COOH');
  });

  test('a reagent written with \\text inside an arrow label keeps the words and loses the braces', () => {
    expect(latexToText(String.raw`\ce{R2C=O + HCN ->[\text{base}] R2C(OH)CN}`)).toBe('R₂C=O + HCN →(base) R₂C(OH)CN');
    expect(latexToText(String.raw`\ce{R-MgX + >C=O ->[][\text{then } H_3O^+] >C(R)-OH}`)).toBe(
      'R-MgX + >C=O →(then H₃O⁺) >C(R)-OH',
    );
    expect(latexToText(String.raw`\ce{RCHO + 2 R'OH ->[\text{dry HCl}] RCH(OR')_2 + H_2O}`)).toBe(
      "RCHO + 2 R'OH →(dry HCl) RCH(OR')₂ + H₂O",
    );
  });

  test('set notation keeps its braces', () => {
    // \{ \} where a command is in the line to read them, and plain {a, b} where none is.
    expect(latexToText(String.raw`P(\{a, b\}) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}`)).toBe(
      'P({a, b}) = {∅, {a}, {b}, {a, b}}',
    );
    expect(latexToText(String.raw`A \triangle B = \{ x : x \in A \cup B \text{ and } x \notin A \cap B \}`)).toBe(
      'A △ B = { x : x ∈ A ∪ B  and  x ∉ A ∩ B }',
    );
    for (const line of [
      'Trap 1: {0} and {∅} are NOT empty. Only ∅ (or { }) has zero elements.',
      'Check: For n=2 (one coin toss), total events = 4, compound = 1 (the sure event {H,T}).',
      'Examples: [2.7] = 2, [-1.2] = -2, {2.7} = 0.7, {-1.2} = 0.8.',
      'Challenging example: Find the area between y = {x} and y = {2x} from x = 0 to x = 1.',
      'P(∅) = {∅} — one subset, not none | Common trap: P(∅) ≠ ∅ and P(∅) ≠ { }',
      'the empty set is A = {}',
    ]) {
      expect(latexToText(line)).toBe(line);
    }
  });
});

describe('5. a command inside a \\ce script is converted, not printed', () => {
  test('partial charges on a carbonyl', () => {
    const raw = String.raw`\ce{C^{\delta+}=O^{\delta-}}`;
    // There is no superscript δ, so the charge is drawn raised, as it is outside \ce.
    expect(latexToSegments(raw)).toEqual([
      { kind: 'math', text: 'C' },
      { kind: 'sup', text: 'δ+' },
      { kind: 'math', text: '=O' },
      { kind: 'sup', text: 'δ-' },
    ]);
    // The plain-string path writes the same script flat, bracketed so it reads as one.
    expect(latexToText(raw)).toBe('C^(δ+)=O^(δ-)');
    expect(latexToText(raw)).not.toMatch(/\\/);
  });

  test('a degree sign is already raised', () => {
    // "(1^°)": the caret stayed because \circ was never read.
    expect(latexToText(String.raw`\ce{HCHO ->[RMgX][H_3O^+] RCH_2OH \ (1^\circ)}`)).toBe(
      'HCHO →(RMgX/H₃O⁺) RCH₂OH (1°)',
    );
    expect(latexToText(String.raw`\ce{R'COR'' ->[RMgX][H_3O^+] R'C(OH)(R)R'' \ (3^\circ)}`)).toBe(
      "R'COR'' →(RMgX/H₃O⁺) R'C(OH)(R)R'' (3°)",
    );
  });

  test('charges Unicode can spell are unchanged', () => {
    expect(latexToText(String.raw`\ce{Fe^{3+} + 2e^-}`)).toBe('Fe³⁺ + 2e⁻');
    expect(latexToText(String.raw`\ce{^{14}C}`)).toBe('¹⁴C');
    expect(latexToText(String.raw`\ce{A ->[\text{H}_2\text{O}] B}`)).toBe('A →(H₂O) B');
  });
});
