import { latexToSegments, latexToText, type ScriptPart } from '@/lib/latex-text';

/**
 * WHAT A THIRD READ OF THE STORED BOARD LINES LEFT WRONG ON SCREEN.
 *
 * The first two passes (latex-corpus-leaks.test.ts, latex-corpus-leaks-2.test.ts) closed what
 * the 33,247 stored board lines showed as markup and as the wrong notation. Three things were
 * left, each seen and measured then and closed here. Every raw string below is a real stored
 * line with its lesson named (or, where it says so, a real stored practice solution from the
 * backups); the few marked "no stored line" are the siblings of one that is. Lines changed
 * per class, of the 33,247, against the converter before this one:
 *
 *   A. a script inside a script ended the outer one early and printed U+0018 ........... 9
 *   B. `X_L²`: a real ² left floating after a drawn subscript ...... 2 (3 once the batch lands)
 *   C. `*` typed for multiplication in running text, shown as a star ................... 152
 *
 * 163 distinct lines in all, every one of them in a class above. Over the 102,063 more strings
 * of the textbooks and the backups: A 37, B 99, C 4 (24 more are held back on purpose, see C).
 */

/** The pieces of a script, written the way the harness writes them: a script as ⟦↓x⟧ or
 *  ⟦↑x⟧ and, when another is drawn inside it, that one inside the brackets. */
function written(parts: ScriptPart[]): string {
  return parts
    .map((part) => {
      const inside = part.parts ? written(part.parts) : part.text;
      return part.script ? `⟦${part.script === 'sub' ? '↓' : '↑'}${inside}⟧` : inside;
    })
    .join('');
}

/** A line as the board draws it, written the way the QA harness wrote it down: a drawn
 *  subscript as ⟦↓x⟧ and a drawn superscript as ⟦↑x⟧ (a script drawn inside one inside it:
 *  n⟦↓t⟦↓2g⟧⟧), a stacked fraction as ⟦(a) over (b)⟧, everything else as the text it is. */
function drawn(raw: string): string {
  return latexToSegments(raw)
    .map((s) => {
      if (s.kind === 'sub') return `⟦↓${s.parts ? written(s.parts) : s.text}⟧`;
      if (s.kind === 'sup') return `⟦↑${s.parts ? written(s.parts) : s.text}⟧`;
      if (s.kind === 'fraction') {
        const half = (text: string, parts?: ScriptPart[]) => (parts ? written(parts) : text);
        return `⟦(${half(s.numerator, s.numeratorParts)}) over (${half(s.denominator, s.denominatorParts)})⟧`;
      }
      return 'text' in s ? s.text : `⟦${s.kind}⟧`;
    })
    .join('');
}

/** The markers the converter writes with and strips: none of them may reach a student. */
const MARKER = /[\u0011-\u0018]/;

/** Every string a segment list carries, nested pieces included. */
function everyString(raw: string): string[] {
  const out: string[] = [];
  const parts = (list: ScriptPart[]) =>
    list.forEach((p) => {
      out.push(p.text);
      if (p.parts) parts(p.parts);
    });
  for (const s of latexToSegments(raw)) {
    if ('text' in s) out.push(s.text);
    if ((s.kind === 'sub' || s.kind === 'sup') && s.parts) parts(s.parts);
    if (s.kind === 'fraction') {
      out.push(s.numerator, s.denominator);
      if (s.numeratorParts) parts(s.numeratorParts);
      if (s.denominatorParts) parts(s.denominatorParts);
    }
  }
  return out;
}

describe('A. a script drawn inside a script closes with its own marker', () => {
  test.each([
    // colour-of-complexes-and-d-d-transitions s4.b2: the closing marker of the outer subscript was
    // printed after "t2g", and the "e_g" beside it did the same
    [
      'colour-of-complexes-and-d-d-transitions s4.b2',
      String.raw`\text{CFSE} = (-0.4\, n_{t_{2g}} + 0.6\, n_{e_g})\,\Delta_o`,
      'CFSE = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧) Δₒ',
      'CFSE = (-0.4 n_(t_(2g)) + 0.6 n_(e_g)) Δₒ',
    ],
    [
      'colour-of-complexes-and-d-d-transitions s6.b8',
      String.raw`\text{CFSE}_{\text{oct}} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\Delta_o`,
      'CFSE⟦↓oct⟧ = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧)Δₒ',
      'CFSE_(oct) = (-0.4 n_(t_(2g)) + 0.6 n_(e_g))Δₒ',
    ],
    [
      'crystal-field-theory-and-d-orbital-splitting s3.b3',
      String.raw`\text{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o`,
      'CFSE = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧) Δₒ',
      'CFSE = (-0.4 n_(t_(2g)) + 0.6 n_(e_g)) Δₒ',
    ],
    [
      'crystal-field-theory-and-d-orbital-splitting s3.b9',
      String.raw`\text{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o + mP`,
      'CFSE = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧) Δₒ + mP',
      'CFSE = (-0.4 n_(t_(2g)) + 0.6 n_(e_g)) Δₒ + mP',
    ],
    [
      'crystal-field-theory-and-d-orbital-splitting s6.b6',
      String.raw`\text{CFSE} = (-0.4 n_{t_{2g}} + 0.6 n_{e_g})\Delta_o`,
      'CFSE = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧)Δₒ',
      'CFSE = (-0.4 n_(t_(2g)) + 0.6 n_(e_g))Δₒ',
    ],
    [
      'magnetic-behaviour-and-spin-only-magnetic-moment s4.b9',
      String.raw`CFSE_{oct} = (-0.4 \, n_{t_{2g}} + 0.6 \, n_{e_g}) \Delta_o`,
      'CFSE⟦↓oct⟧ = (-0.4 n⟦↓t⟦↓2g⟧⟧ + 0.6 n⟦↓e⟦↓g⟧⟧) Δₒ',
      'CFSE_(oct) = (-0.4 n_(t_(2g)) + 0.6 n_(e_g)) Δₒ',
    ],
    // area-bounded-by-a-curve-and-its-tangent-or-normal s5.b6: both limits hold a subscript, and each
    // closing marker was printed after the limit
    [
      'area-bounded-by-a-curve-and-its-tangent-or-normal s5.b6',
      String.raw`A = \int_{y_Q}^{y_P} \left[ \dfrac{2a t + a t^{3} - y}{t} - \dfrac{y^{2}}{4a} \right] dy`,
      'A = ∫⟦↓y⟦↓Q⟧⟧⟦↑y⟦↓P⟧⟧ [ ⟦(2a t + a t³ - y) over (t)⟧ - ⟦(y²) over (4a)⟧ ] dy',
      'A = ∫_(y_Q)^(y_P) [ (2a t + a t³ - y)/t - y²/4a ] dy',
    ],
    // continuity-at-a-point-and-on-an-interval s2.b9: a superscript inside the subscript of a limit
    [
      'continuity-at-a-point-and-on-an-interval s2.b9',
      String.raw`\lim_{x \to c^\pm} f(x) = \pm\infty`,
      'lim⟦↓x → c⟦↑±⟧⟧ f(x) = ±∞',
      'lim_(x → c^±) f(x) = ±∞',
    ],
    // electric-dipole-in-external-field s5.b3: only the upper limit has a script inside it, and the
    // lower limit, which Unicode spells whole, is untouched
    [
      'electric-dipole-in-external-field s5.b3',
      String.raw`W_{ext} = \int_{\theta_i}^{\theta_f} \tau \, d\theta = \int_{\theta_i}^{\theta_f} pE \sin\theta \, d\theta`,
      'W⟦↓ext⟧ = ∫⟦↓θᵢ⟧⟦↑θ⟦↓f⟧⟧ τ dθ = ∫⟦↓θᵢ⟧⟦↑θ⟦↓f⟧⟧ pE sinθ dθ',
      'Wₑₓₜ = ∫_(θᵢ)^(θ_f) τ dθ = ∫_(θᵢ)^(θ_f) pE sinθ dθ',
    ],
  ])('%s: %s', (_line, raw, expectedDrawn, expectedFlat) => {
    expect(drawn(raw)).toBe(expectedDrawn);
    // The flat form was already one bracket per level, and still is.
    expect(latexToText(raw)).toBe(expectedFlat);
    for (const text of [...everyString(raw), latexToText(raw)]) expect(text).not.toMatch(MARKER);
  });

  test('n_{t_{2g}}: the segments hold a subscript t and, inside it, a subscript 2g', () => {
    // colour-of-complexes-and-d-d-transitions s4.b2, on its own. `text` is the whole script
    // flattened, which is what a reader that cannot nest draws; `parts` is the nesting.
    expect(latexToSegments(String.raw`$n_{t_{2g}}$`)).toEqual([
      { kind: 'math', text: 'n' },
      { kind: 'sub', text: 't2g', parts: [{ text: 't' }, { text: '2g', script: 'sub' }] },
    ]);
  });

  test('\\int_{y_Q}^{y_P}: each limit is its own script with its own subscript', () => {
    // area-bounded-by-a-curve-and-its-tangent-or-normal s5.b6
    expect(latexToSegments(String.raw`\int_{y_Q}^{y_P}`)).toEqual([
      { kind: 'math', text: '∫' },
      { kind: 'sub', text: 'yQ', parts: [{ text: 'y' }, { text: 'Q', script: 'sub' }] },
      { kind: 'sup', text: 'yP', parts: [{ text: 'y' }, { text: 'P', script: 'sub' }] },
    ]);
  });

  test('a script with nothing drawn inside it has no parts', () => {
    // The segments of every other line are exactly what they were.
    expect(latexToSegments(String.raw`$x_{ab}$`)).toEqual([
      { kind: 'math', text: 'x' },
      { kind: 'sub', text: 'ab' },
    ]);
    expect(latexToSegments(String.raw`$\int_{a}^{b} y_{top}\,dx$`).some((s) => 'parts' in s)).toBe(false);
  });

  test('three deep: the innermost script is the last to close', () => {
    // no stored line: the corpus goes two deep
    expect(drawn(String.raw`$x_{a_{b_{c}}}$`)).toBe('x⟦↓a⟦↓b⟦↓c⟧⟧⟧');
    expect(drawn(String.raw`$x_{a^{b_{c}}}$`)).toBe('x⟦↓a⟦↑b⟦↓c⟧⟧⟧');
    expect(latexToText(String.raw`$x_{a_{b_{c}}}$`)).toBe('x_(a_(b_c))');
    expect(everyString(String.raw`$x_{a_{b_{c}}}$`).join('')).not.toMatch(MARKER);
  });

  test('a script inside a script, and another after it: the outer one keeps what follows', () => {
    // no stored line: both limits, each with a script inside it
    expect(drawn(String.raw`$x_{a_{b}}^{c_{d}}$`)).toBe('x⟦↓a⟦↓b⟧⟧⟦↑c⟦↓d⟧⟧');
  });

  test('the rest of an exponent stays inside it', () => {
    // A stored practice solution (2026-09-30-before-multiline-maths-split): the old pairing ended
    // the exponent at the end of "k_A" and put " t" on the line beside it, so the decay law read
    // "e^(−kA) t". The whole of −k_A t is the exponent.
    expect(drawn('$[A] = [A]₀e^(−k_A t),  [B] = [B]₀e^(−k_B t)$')).toBe('[A] = [A]₀e⟦↑−k⟦↓A⟧ t⟧, [B] = [B]₀e⟦↑−k⟦↓B⟧ t⟧');
    // ...and a power of a power, from a stored solution (BACKUP-laststep-before-strip)
    expect(drawn('$2ᴷ/(7^(2ᴷ) + 1) = 2ᴷ/(7^(2ᴷ) − 1) − 2^(K+1)/(7^(2^(K+1)) − 1)$')).toBe(
      '2ᴷ/(7⟦↑2ᴷ⟧ + 1) = 2ᴷ/(7⟦↑2ᴷ⟧ − 1) − 2⟦↑K+1⟧/(7⟦↑2⟦↑K+1⟧⟧ − 1)',
    );
  });

  test('a fraction half with a script inside a script draws it, and no empty piece is left behind', () => {
    // no stored line: the half is read by the same matcher as a line is
    const [fraction] = latexToSegments(String.raw`$\frac{n_{t_{2g}}}{2}$`);
    expect(fraction).toEqual({
      kind: 'fraction',
      numerator: 'nt2g',
      denominator: '2',
      numeratorParts: [{ text: 'n' }, { text: 't2g', script: 'sub', parts: [{ text: 't' }, { text: '2g', script: 'sub' }] }],
    });
    expect(drawn(String.raw`$\frac{1}{n_{t_{2g}}}$`)).toBe('⟦(1) over (n⟦↓t⟦↓2g⟧⟧)⟧');
  });

  test('an answer blank typed \\_\\_\\_\\_ no longer prints markers', () => {
    // A stored practice question (2026-09-30-duplicate-groups): the four underscores were read as a
    // subscript of a subscript, twice, and each outer one printed its closing marker. 33 of the 37
    // backup strings that did this are such blanks. They draw as empty scripts, which is a separate
    // matter; the flat form, where the practice stem is read, has always printed the blank.
    const stem = String.raw`A body covers 100m in 20s, then the speed of a body is $\_\_\_\_$`;
    expect(everyString(stem).join('')).not.toMatch(MARKER);
    expect(latexToText(stem)).toBe('A body covers 100m in 20s, then the speed of a body is ____');
  });
});

describe('B. a real superscript after a drawn subscript belongs to the same base', () => {
  test.each([
    // series-lr-circuit wrap2: Unicode has no subscript L, so it is drawn, and the ² stayed behind
    [
      'series-lr-circuit wrap2',
      'Impedance Z = √(R² + X_L²) is the total opposition to AC, always greater than R.',
      'Impedance Z = √(R² + X⟦↓L⟧⟦↑2⟧) is the total opposition to AC, always greater than R.',
    ],
    // series-rc-circuit s2.fig: a picture label
    [
      'series-rc-circuit s2.fig',
      'R = 30 Ω | X_C = 40 Ω | Z = 50 Ω | Z = √(R² + X_C²) = √(30² + 40²) = √2500 = 50 Ω | Z ≠ R + X_C  (they are 90° out of phase) | 3-4-5 triangle',
      'R = 30 Ω | X⟦↓C⟧ = 40 Ω | Z = 50 Ω | Z = √(R² + X⟦↓C⟧⟦↑2⟧) = √(30² + 40²) = √2500 = 50 Ω | Z ≠ R + X⟦↓C⟧ (they are 90° out of phase) | 3-4-5 triangle',
    ],
    // series-rc-circuit wrap2, once the pending plain-digit batch turns its X_C^2 into X_C²
    [
      'series-rc-circuit wrap2',
      'Impedance Z = sqrt(R² + X_C²) is found using the impedance triangle, not by adding R and X_C directly.',
      'Impedance Z = sqrt(R² + X⟦↓C⟧⟦↑2⟧) is found using the impedance triangle, not by adding R and X⟦↓C⟧ directly.',
    ],
  ])('%s: %s', (_line, raw, expected) => {
    expect(drawn(raw)).toBe(expected);
  });

  test('X_C² draws as X_C^2 does: the way it is stored today and the way the batch will write it', () => {
    // series-rc-circuit wrap2: production holds the caret, the pending batch writes the ²
    const stored = 'Impedance Z = sqrt(R^2 + X_C^2) is found using the impedance triangle, not by adding R and X_C directly.';
    const batch = 'Impedance Z = sqrt(R² + X_C²) is found using the impedance triangle, not by adding R and X_C directly.';
    expect(drawn(batch)).toBe(drawn(stored));
    for (const [typed, literal] of [
      ['X_L^2', 'X_L²'],
      ['$V_{rms}^2$', '$V_{rms}²$'],
      ['f_c^2', 'f_c²'],
      ['n_f^2', 'n_f²'],
    ]) {
      expect(drawn(literal)).toBe(drawn(typed));
    }
    expect(drawn('X_L²')).toBe('X⟦↓L⟧⟦↑2⟧');
  });

  test('a run of superscript characters is one superscript, as ^{2+} is', () => {
    // no stored line: the corpus has ² only. ⁻ is the real minus sign in the drawn script.
    expect(drawn('X_L²⁺')).toBe('X⟦↓L⟧⟦↑2+⟧');
    expect(drawn('X_L⁻¹')).toBe('X⟦↓L⟧⟦↑−1⟧');
    expect(drawn('X_L⁻')).toBe('X⟦↓L⟧⟦↑−⟧');
    expect(drawn('V_{rms}³ and V_{rms}ⁿ')).toBe('V⟦↓rms⟧⟦↑3⟧ and V⟦↓rms⟧⟦↑n⟧');
    expect(drawn('X_C⁰¹²³⁴⁵⁶⁷⁸⁹')).toBe('X⟦↓C⟧⟦↑0123456789⟧');
  });

  test('the same holds in a stored practice solution, a textbook line and an orbital', () => {
    // 2026-10-01-newrows-reformat-applied: `V_R²` inside a root, and the bracket after it is not a subscript
    expect(drawn('$V = √(V_R² + (V_L − V_C)²) = √(28² + 96²)$')).toBe('V = √(V⟦↓R⟧⟦↑2⟧ + (V⟦↓L⟧ − V⟦↓C⟧)²) = √(28² + 96²)');
    // textbook phy-12-12-atoms: Rydberg's formula
    expect(drawn('1/λ = RZ²(1/n_f² − 1/n_i²)')).toBe('1/λ = RZ²(1/n⟦↓f⟧⟦↑2⟧ − 1/nᵢ²)');
    // BACKUP-laststep-before-strip: an electron count on e_g, and a lone zero
    expect(drawn('$[CoF₆]³⁻: t₂g⁴ e_g² → 4 unpaired$')).toBe('[CoF₆]³⁻: t₂g⁴ e⟦↓g⟧⟦↑2⟧ → 4 unpaired');
    expect(drawn('$t₂g⁶ e_g⁰$')).toBe('t₂g⁶ e⟦↓g⟧⟦↑0⟧');
  });

  test('inside a fraction half and after a nested subscript the superscript attaches too', () => {
    // no stored line
    expect(drawn(String.raw`$\frac{X_L²}{R}$`)).toBe('⟦(X⟦↓L⟧⟦↑2⟧) over (R)⟧');
    expect(drawn('$X_{a_b}²$')).toBe('X⟦↓a⟦↓b⟧⟧⟦↑2⟧');
  });

  test('nothing else moves', () => {
    // A subscript Unicode can spell: both are spelled, as they were.
    expect(drawn('x_n² + y_i²')).toBe('xₙ² + yᵢ²');
    expect(drawn('X_{12}²')).toBe('X₁₂²');
    // A superscript after anything but a drawn subscript.
    expect(drawn('(V_L − V_C)² and R²')).toBe('(V⟦↓L⟧ − V⟦↓C⟧)² and R²');
    expect(drawn('x^{q}²')).toBe('x⟦↑q⟧²');
    // A space, a maths boundary or a letter between them.
    expect(drawn('X_L ²')).toBe('X⟦↓L⟧ ²');
    expect(drawn('$X_L$²')).toBe('X⟦↓L⟧²');
    expect(drawn('X_L cubed ³')).toBe('X⟦↓L⟧ cubed ³');
    // A superscript the converter has no character for stays a letter of the word.
    expect(drawn('X_L² and X_C^{ab}')).toBe('X⟦↓L⟧⟦↑2⟧ and X⟦↓C⟧⟦↑ab⟧');
  });

  test('a grid cell is flattened as it was: no "XL2"', () => {
    // no stored line: a cell is plain text, flattened before the line is read for superscripts,
    // so the ² stays a ² and is not turned into a digit set against the L
    expect(latexToSegments(String.raw`$\begin{pmatrix} X_L² & 1 \end{pmatrix}$`)).toEqual([
      { kind: 'matrix', open: '(', close: ')', rows: [['XL²', '1']] },
    ]);
  });

  test('the flat form is exactly what it was', () => {
    // The plain-string path has no drawn subscript, and prints the subscript it always printed.
    expect(latexToText('Impedance Z = √(R² + X_L²) is the total opposition to AC.')).toBe(
      'Impedance Z = √(R² + X_L²) is the total opposition to AC.',
    );
    expect(latexToText('X_L^2 and X_L²')).toBe('X_L² and X_L²');
  });
});

describe('C. `*` typed for multiplication in running text', () => {
  test.each([
    // measurement-of-angles-degrees-radians-and-arc-length s5.b10: a symbol times a symbol is a dot
    [
      'measurement-of-angles-degrees-radians-and-arc-length s5.b10',
      'Bridge to physics: ω in rad s^-1 feeds straight into linear speed v = r*ω in rotational mechanics.',
      'Bridge to physics: ω in rad s⁻¹ feeds straight into linear speed v = r·ω in rotational mechanics.',
    ],
    // photoelectric-effect-experimental-laws-and-observations s4.b6: h*ν twice in one line
    [
      'photoelectric-effect-experimental-laws-and-observations s4.b6',
      'Photon picture: one photon of energy h*ν collides with one electron. If h*ν < φ₀, the electron cannot escape — no accumulation from many photons.',
      'Photon picture: one photon of energy h·ν collides with one electron. If h·ν < φ₀, the electron cannot escape — no accumulation from many photons.',
    ],
    // eddy-currents-and-electromagnetic-damping s4.b11: spaced, with a power on one side
    [
      'eddy-currents-and-electromagnetic-damping s4.b11',
      'Units check: τ = mR/(B^2 l^2) = kg * ohm / (T^2 * m^2) = seconds. Correct.',
      'Units check: τ = mR/(B² l²) = kg · ohm / (T² · m²) = seconds. Correct.',
    ],
    // thermal-expansion s6.b8: numbers on both sides is a times sign, e-notation included
    [
      'thermal-expansion s6.b8',
      'Worked example: steel pendulum, α = 1.2e-5 per degree C, ΔT = 25 C. Δt = 0.5 * 1.2e-5 * 25 * 86400 = 12.96 s lost per day.',
      'Worked example: steel pendulum, α = 1.2e-5 per degree C, ΔT = 25 C. Δt = 0.5 × 1.2e-5 × 25 × 86400 = 12.96 s lost per day.',
    ],
    // arithmetic-mean-and-insertion-of-arithmetic-means s4.b9: unspaced, a bracket of numbers is a number
    [
      'arithmetic-mean-and-insertion-of-arithmetic-means s4.b9',
      'Example: insert 5 AMs between 4 and 20. Sum = 5*(4+20)/2 = 5*12 = 60.',
      'Example: insert 5 AMs between 4 and 20. Sum = 5 × (4+20)/2 = 5 × 12 = 60.',
    ],
    // telescoping-series-and-the-method-of-differences s4.b11
    [
      'telescoping-series-and-the-method-of-differences s4.b11',
      'Check: For n=1, sum r(r+1)(r+2) = 1*2*3 = 6, and formula gives 1*2*3*4/4 = 6. Works.',
      'Check: For n=1, sum r(r+1)(r+2) = 1 × 2 × 3 = 6, and formula gives 1 × 2 × 3 × 4/4 = 6. Works.',
    ],
    // am-gm-hm-relations-and-the-am-gm-inequality s0.b8: inside a call, and after a number
    [
      'am-gm-hm-relations-and-the-am-gm-inequality s0.b8',
      'Worked example with a = 4, b = 16: A = (4+16)/2 = 10, G = sqrt(4*16) = 8, H = 2*4*16/(4+16) = 128/20 = 6.4.',
      'Worked example with a = 4, b = 16: A = (4+16)/2 = 10, G = sqrt(4 × 16) = 8, H = 2 × 4 × 16/(4+16) = 128/20 = 6.4.',
    ],
    // logarithms-definition-properties-and-change-of-base s3.b9: the exponent is not in the way
    [
      'logarithms-definition-properties-and-change-of-base s3.b9',
      'Example: log_5(25^3) = 3 log_5(25) = 3*2 = 6.',
      'Example: log₅(25³) = 3 log₅(25) = 3 × 2 = 6.',
    ],
    // area-between-two-intersecting-curves s6.b6: a number times a call is a dot, not a times sign
    [
      'area-between-two-intersecting-curves s6.b6',
      'Test x = a: 2*sqrt(a*a) = 2a versus a^2/(4a) = a/4. Since 2a > a/4, y = 2*sqrt(ax) is on top.',
      'Test x = a: 2·sqrt(a·a) = 2a versus a²/(4a) = a/4. Since 2a > a/4, y = 2·sqrt(ax) is on top.',
    ],
    // area-of-regions-bounded-by-circles-and-ellipses s0.b6: π is a symbol, so these are dots
    [
      'area-of-regions-bounded-by-circles-and-ellipses s0.b6',
      'Degeneration check: put b = a in π*a*b and you get π*a^2, the circle. A formula that collapses correctly onto a known shape is almost certainly right.',
      'Degeneration check: put b = a in π·a·b and you get π·a², the circle. A formula that collapses correctly onto a known shape is almost certainly right.',
    ],
    // area-of-regions-bounded-by-circles-and-ellipses s0.b7: a bracket of symbols is not a number
    [
      'area-of-regions-bounded-by-circles-and-ellipses s0.b7',
      'Trap 1: ellipse area is NOT π*(a + b). Trap 2: it is NOT π*a^2*b^2. It is π times the PRODUCT of the semi-axes.',
      'Trap 1: ellipse area is NOT π·(a + b). Trap 2: it is NOT π·a²·b². It is π times the PRODUCT of the semi-axes.',
    ],
    // area-of-regions-bounded-by-circles-and-ellipses s0.wid: the words of a widget
    [
      'area-of-regions-bounded-by-circles-and-ellipses s0.wid',
      'axes | vertices | interior | Ellipse: A = pi*a*b',
      'axes | vertices | interior | Ellipse: A = pi·a·b',
    ],
    // summation-of-trigonometric-series s8.fig: a picture label
    [
      'summation-of-trigonometric-series s8.fig',
      'many or n: quote AP formula | check sin(β/2) != 0 | else sum = n * first term',
      'many or n: quote AP formula | check sin(β/2) != 0 | else sum = n · first term',
    ],
    // magnetic-field-and-biot-savart-law s6.b8: a letter times a letter, and a number before π
    [
      'magnetic-field-and-biot-savart-law s6.b8',
      'Example: infinite wire at distance d from loop centre. B1 = μ₀*I1/(2π*d) = 50 μT; B2 = μ₀*I2/(2R) = 78.5 μT. Net = sqrt(50^2 + 78.5^2) = 93 μT.',
      'Example: infinite wire at distance d from loop centre. B1 = μ₀·I1/(2π·d) = 50 μT; B2 = μ₀·I2/(2R) = 78.5 μT. Net = sqrt(50² + 78.5²) = 93 μT.',
    ],
    // mutual-inductance s1.b7: a unit times a unit
    [
      'mutual-inductance s1.b7',
      'SI unit: the henry (H). 1 H = 1 Wb/A = 1 V*s/A = 1 ohm*s = 1 J/A^2.',
      'SI unit: the henry (H). 1 H = 1 Wb/A = 1 V·s/A = 1 ohm·s = 1 J/A².',
    ],
    // wheatstone-bridge s4.b3: σ here is a resistance per length, a symbol
    [
      'wheatstone-bridge s4.b3',
      'Let σ be the resistance per unit length of the uniform wire. Then the two wire segments have resistances σ*l and σ*(100-l).',
      'Let σ be the resistance per unit length of the uniform wire. Then the two wire segments have resistances σ·l and σ·(100-l).',
    ],
    // resonance-and-q-factor s0.b1: ω*L beside a subscript
    [
      'resonance-and-q-factor s0.b1',
      'Recall: X_L = ω*L grows with frequency, while X_C = 1/(ω*C) shrinks with frequency. They are opposites.',
      'Recall: X_L = ω·L grows with frequency, while X_C = 1/(ω·C) shrinks with frequency. They are opposites.',
    ],
  ])('%s: %s', (_line, raw, expected) => {
    expect(latexToText(raw)).toBe(expected);
  });

  test('a star spaced on one side only is a label, not a product', () => {
    // relative-velocity-in-a-plane s5.b10: t* is the time of closest approach
    expect(latexToText('Geometric shortcut: t* = -(r_0 . v)/|v|^2 and $s_{min}$ = |r_0 x v|/|v|. No calculus needed.')).toBe(
      'Geometric shortcut: t* = -(r₀ . v)/|v|² and sₘᵢₙ = |r₀ x v|/|v|. No calculus needed.',
    );
    // no stored line: the other side
    expect(latexToText('a *b and c* d')).toBe('a *b and c* d');
    expect(latexToText('a* b, a *b')).toBe('a* b, a *b');
  });

  test('the antibonding orbitals are untouched', () => {
    // metal-carbonyls-and-synergic-bonding s1.b7, s1.b11, s3.b1 and the nine other lines that name π*
    expect(
      latexToText('The metal is in a low or zero oxidation state, so it is electron-rich with filled d-orbitals. It pushes some of that electron density back into an empty antibonding π* orbital of the CO molecule.'),
    ).toBe(
      'The metal is in a low or zero oxidation state, so it is electron-rich with filled d-orbitals. It pushes some of that electron density back into an empty antibonding π* orbital of the CO molecule.',
    );
    expect(latexToText('Exam trap: describing only the σ donation loses most marks. Always write both arrows — C to M (σ) and M to π* of CO (π) — and use the word synergic.')).toBe(
      'Exam trap: describing only the σ donation loses most marks. Always write both arrows — C to M (σ) and M to π* of CO (π) — and use the word synergic.',
    );
    expect(latexToText('M | C | O | filled d | empty π* | σ donation | π back-donation')).toBe(
      'M | C | O | filled d | empty π* | σ donation | π back-donation',
    );
    // metal-carbonyls-and-synergic-bonding s1.b8: in maths the star is the one typed, raised
    expect(drawn(String.raw`\text{M (filled } d \text{ orbital)} \rightarrow \pi^{*} \text{ of CO}`)).toBe(
      'M (filled  d  orbital) → π⟦↑*⟧  of CO',
    );
    // The same orbitals typed with the star against the name, which the stored solutions do
    // (BACKUP-laststep-before-strip, 2026-09-30-before-multiline-maths-split, 2026-10-01-newrows-…):
    // "σ·1s" would be a different orbital, so the star stays when an orbital follows it.
    expect(
      latexToText('Judge Statement II.\nEqual bond order does not mean equal stability. H₂⁻ carries an electron in the antibonding σ*1s orbital and has three electrons crowded in a small two-nucleus system.'),
    ).toBe(
      'Judge Statement II. Equal bond order does not mean equal stability. H₂⁻ carries an electron in the antibonding σ*1s orbital and has three electrons crowded in a small two-nucleus system.',
    );
    expect(latexToText('For these light diatomics the filling order is σ2s, σ*2s, π2p, σ2pz, then π*2p, and the bond order is half of (bonding − antibonding) electrons.')).toBe(
      'For these light diatomics the filling order is σ2s, σ*2s, π2p, σ2pz, then π*2p, and the bond order is half of (bonding − antibonding) electrons.',
    );
    // (the subscripts after them are read as they always were: pₓ is spelled, p_y and p_z are not)
    expect(latexToText('The π*2p_x and π*2p_y orbitals are singly occupied; the lowest completely empty orbital is σ*2p_z.')).toBe(
      'The π*2pₓ and π*2p_y orbitals are singly occupied; the lowest completely empty orbital is σ*2p_z.',
    );
    expect(latexToText('Describe the π back-donation. M(d, filled) → π*(CO, vacant)')).toBe(
      'Describe the π back-donation. M(d, filled) → π*(CO, vacant)',
    );
    // ...while a product with π or σ in it is still a product.
    expect(latexToText('the area is π*a*b, and a wire of σ*l has resistance σ*(100-l)')).toBe(
      'the area is π·a·b, and a wire of σ·l has resistance σ·(100-l)',
    );
    // a bare 2 is a number, but π and σ are not: a dot
    expect(latexToText('x = π*2 and y = σ*2')).toBe('x = π·2 and y = σ·2');
  });

  test('** is emphasis, and a star in maths is the star that was typed', () => {
    // 2026-10-01-newrows-before-dedupe-reformat, a stored question
    expect(latexToText("Which of the following refer to **correct** example(s) of organisms which have evolved due to changes in environment ?")).toBe(
      'Which of the following refer to **correct** example(s) of organisms which have evolved due to changes in environment ?',
    );
    expect(latexToText('a**b, a ** b and a * * b')).toBe('a**b, a ** b and a * * b');
    // BACKUP-laststep-before-strip: σ*2s² inside $…$, whatever stands beside it
    expect(latexToText('$a*b$ and $2 * 3$ and $σ*2s²$')).toBe('a*b and 2 * 3 and σ*2s²');
    // A run that carries a command is maths, and is read as maths.
    expect(latexToText(String.raw`F = m*a \cdot b`)).toBe('F = m*a · b');
  });

  test('the edge of a $…$ piece is an operand', () => {
    // ac-through-pure-capacitor s6.b9: a star between two formulas
    expect(
      latexToText('Exam trap: in a pure capacitor the average power is zero (cos φ = 0), so never report P = $V_{rms}$ * $I_{rms}$ as the power dissipated.'),
    ).toBe('Exam trap: in a pure capacitor the average power is zero (cos φ = 0), so never report P = Vᵣₘₛ · Iᵣₘₛ as the power dissipated.');
    // no stored line: unspaced, and against a letter on one side only
    expect(latexToText('$a$*$b$ and $a$ * $b$ and $a$*b and a*$b$')).toBe('a·b and a · b and a·b and a·b');
    // one side spaced is still a label beside a formula
    expect(latexToText('$a$ *b and $a$* b')).toBe('a *b and a* b');
    // a number beside a formula is not a number operand on that side
    expect(latexToText('2 * $V$ and $V$*2 and 2*$V$')).toBe('2 · V and V·2 and 2·V');
  });

  test('numbers on both sides are a times sign; anything else is a dot', () => {
    // no stored line for most of these: the numbers the rule reads, one by one
    expect(latexToText('5*12 and 5 * 12 and 0.5*25 and 2.5e-3 * 4')).toBe('5 × 12 and 5 × 12 and 0.5 × 25 and 2.5e-3 × 4');
    expect(latexToText('10^-3 * 5 and 10^3*10^-3 and 6.63 * 10^-34')).toBe('10⁻³ × 5 and 10³ × 10⁻³ and 6.63 × 10⁻³⁴');
    expect(latexToText('(2+3)*(4+5) and (0.05) * 2 and (1/2) * 4 and (6.63 × 10^-34)*3')).toBe(
      '(2+3) × (4+5) and (0.05) × 2 and (1/2) × 4 and (6.63 × 10⁻³⁴) × 3',
    );
    // a symbol, a call, a power of a symbol or a bracket of symbols on either side
    expect(latexToText('2*x and x*2 and x^2*3 and f(2)*3 and (a+1)*2 and 2*(a+1) and (x+e)*2')).toBe(
      '2·x and x·2 and x²·3 and f(2)·3 and (a+1)·2 and 2·(a+1) and (x+e)·2',
    );
    // a number with a letter after it is a term (2x), not a number
    expect(latexToText('3*2x and 3 * 2x')).toBe('3·2x and 3 · 2x');
    // a dot, never a juxtaposition: n*2^n would read n2^n
    expect(latexToText('terms like n*2^n and 2^n*n')).toBe('terms like n·2ⁿ and 2ⁿ·n');
    expect(latexToText('C(n,k) * (n-k)!/n! and |v|*|u| and n!*m!')).toBe('C(n,k) · (n-k)!/n! and |v|·|u| and n!·m!');
  });

  test('a star with no operand beside it is left alone', () => {
    // no stored line: footnotes, a bullet, markup, an ellipsis
    expect(latexToText('Note*: see below. * a bullet. *emphasis* here. 5 *')).toBe('Note*: see below. * a bullet. *emphasis* here. 5 *');
    expect(latexToText('a*, *b and a*:b and a*.b')).toBe('a*, *b and a*:b and a*.b');
  });

  test('a price is not read as maths, and a star in one is left alone', () => {
    // currency-not-math: "US $33 trillion" and "$18 trillion" are kept as text
    expect(latexToText('US $33 trillion * 3 vs ~US $18 trillion')).toBe('US $33 trillion * 3 vs ~US $18 trillion');
  });

  test('the bold tags round a star change nothing: the flat and the drawn form read alike', () => {
    // A solution marks the term a step turns on with <b>…</b>; the tags are not text. Plain text
    // drops them and the drawn form turns them into markers, so the rule steps over both.
    const raw = 'Power is <b>F</b>*<b>v</b> and <b>F</b> * <b>v</b> and <b>2</b>*<b>3</b>.';
    expect(latexToText(raw)).toBe('Power is F·v and F · v and 2 × 3.');
    const segments = latexToSegments(raw);
    expect(segments.map((s) => ('text' in s ? s.text : '')).join('')).toBe('Power is F·v and F · v and 2 × 3.');
    // ...with each bold run still exactly where it was
    expect(segments.filter((s) => 'bold' in s && s.bold).map((s) => ('text' in s ? s.text : ''))).toEqual(['F', 'v', 'F', 'v', '2', '3']);
  });

  test('the flat and the drawn form agree on the lines of the class', () => {
    // The rule runs before either form is read, so what it writes is the same text in both; only
    // a word subscript is drawn in one and spelled in the other.
    expect(drawn('Units check: τ = mR/(B^2 l^2) = kg * ohm / (T^2 * m^2) = seconds. Correct.')).toBe(
      'Units check: τ = mR/(B² l²) = kg · ohm / (T² · m²) = seconds. Correct.',
    );
    expect(drawn('Worked example: Δt = 0.5 * 1.2e-5 * 25 * 86400 = 12.96 s lost per day.')).toBe(
      'Worked example: Δt = 0.5 × 1.2e-5 × 25 × 86400 = 12.96 s lost per day.',
    );
    expect(drawn('put b = a in π*a*b and you get π*a^2, the circle.')).toBe('put b = a in π·a·b and you get π·a², the circle.');
    expect(drawn('never report P = $V_{rms}$ * $I_{rms}$ as the power dissipated.')).toBe(
      'never report P = V⟦↓rms⟧ · I⟦↓rms⟧ as the power dissipated.',
    );
    expect(latexToText('never report P = $V_{rms}$ * $I_{rms}$ as the power dissipated.')).toBe(
      'never report P = Vᵣₘₛ · Iᵣₘₛ as the power dissipated.',
    );
  });
});
