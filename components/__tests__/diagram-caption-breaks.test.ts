/**
 * WHERE A DIAGRAM CAPTION MAY BREAK, AS ANDROID LAYS IT OUT.
 *
 * The Android sweep of Physics 11's diagrams (2026-10-20, second pass) found
 * captions broken inside the maths: a lone "x" at a line's end and "= …" on
 * the next, "r" / "→ ∞", "C = A" / "× B", "(R₂T₁" / "+ R₁T₃)", "½(t)" /
 * "(at)", "T" / "Δℓ/R", "(end" / "1: …". Android breaks at any space, so
 * captionBreaks() turns the spaces inside these into non-breaking ones.
 */
import { captionBreaks } from '@/components/revise/diagram-card';
import { DIAGRAMS } from '@/lib/diagrams';

jest.mock('@/constants/scale', () => ({ useScale: () => ({ scale: (n: number) => n }) }));

const NB = ' ', WJ = '⁠';
/** The caption as plain text, with each place a line can no longer break shown as "·". */
const shown = (html: string) => captionBreaks(html).replace(/<[^>]+>/g, '').replace(/ /g, '·').replace(/⁠/g, '');

describe('a short left side stays with its sign', () => {
  it('one italic letter: "(a = 0)", "v = 12 m/s", "E = K + U"', () => {
    expect(shown('constant velocity (<i>a</i> = 0); then')).toBe('constant velocity (a·=·0); then');
    expect(shown('with <i>v</i> = 12 m/s at')).toContain('v·=·12·m/s');
    expect(shown('constant total <i>E</i> = <i>K</i> + <i>U</i>.')).toContain('E·=·K·+·U.');
  });
  it('Δ and a letter, a letter and its subscript', () => {
    expect(shown('longer by Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>.')).toContain('ΔL·=·αL0ΔT.');
    expect(shown('Hence <i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>)')).toContain('fn·=·(2n·−·1)v/(4L)');
  });
  it('→, ⇒, ≈ and the comparisons are operators too, never left at a line\'s end', () => {
    expect(shown('from below as <i>r</i> → ∞.')).toBe('from below as·r·→·∞.');
    expect(shown('so <i>W</i>(isothermal) > <i>W</i>(adiabatic).')).toBe('so W(isothermal) >·W(adiabatic).');
    expect(shown('for −<i>L</i>/2 ≤ <i>x</i> ≤ <i>L</i>/2')).toContain('≤·x·≤·L/2');
    expect(shown('<i>a</i> ⇒ <i>b</i>')).toBe('a·⇒·b');
    expect(captionBreaks('<i>θ</i> < 90°')).toBe(`<i>θ</i>${NB}<${NB}90°`);
  });
  it('a longer left side may still end a line before its sign', () => {
    expect(shown('the chord <i>AB</i> = <i>OQ</i>')).toBe('the chord AB =·OQ');
  });
});

describe('a short sum or product never splits', () => {
  it('× and − between two single symbols', () => {
    expect(shown('<i>C</i> = <i>A</i> × <i>B</i> is perpendicular')).toBe('C·=·A·×·B is perpendicular');
    expect(shown('Δ<i>v</i> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub> points')).toBe('Δv·=·v2·−·v1 points');
  });
  it('+ and − inside a short bracket', () => {
    expect(shown('<i>T</i><sub>2</sub> = (<i>R</i><sub>2</sub><i>T</i><sub>1</sub> + <i>R</i><sub>1</sub><i>T</i><sub>3</sub>)/(<i>R</i><sub>1</sub>+<i>R</i><sub>2</sub>).')).toContain('(R2T1·+·R1T3)');
    expect(shown('<i>y</i> = ½<i>φ</i>(<i>x</i> − <i>vt</i>) + ½<i>φ</i>(<i>x</i> + <i>vt</i>).')).toBe('y·=·½φ(x·−·vt) +·½φ(x·+·vt).');
  });
  it('but not inside a long one: a bracketed sentence still breaks', () => {
    expect(shown('(the area above the axis − the area below it, in metres)')).toContain('axis −·the');
  });
  it('no break between ")(": ½(t)(at), (2)(2πR)S', () => {
    expect(captionBreaks('½(<i>t</i>)(<i>at</i>)')).toBe(`½(<i>t</i>)${WJ}(<i>at</i>)`);
    expect(captionBreaks('(2)(2π<i>R</i>)<i>S</i>')).toBe(`(2)${WJ}(2π<i>R</i>)<i>S</i>`);
  });
  it('two maths runs side by side are one product', () => {
    expect(shown('2<i>T</i> sin <i>θ</i> ≈ <i>T</i> Δ<i>ℓ</i>/<i>R</i>;')).toBe('2T·sin·θ·≈·T·Δℓ/R;');
    expect(shown('force <i>μ</i> Δ<i>ℓ</i> <i>v</i><sup>2</sup>/<i>R</i>,')).toBe('force·μ·Δℓ·v2/R,');
    expect(shown('then <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>,')).toBe('then·a·=·v·dv/dx,');
  });
});

describe('a word keeps its number or letter', () => {
  it('"end 1", "height H"', () => {
    expect(shown('(end 1: <i>A</i><sub>1</sub>, <i>v</i><sub>1</sub>)')).toContain('(end·1:');
    expect(shown('a cliff (height <i>H</i>) and')).toContain('(height·H)');
  });
  it('but not a word that only follows a number', () => {
    expect(captionBreaks('thrown at 2 mass')).not.toContain(`2${NB}mass`);
  });
});

describe('every caption in the app', () => {
  const caps = Object.values(DIAGRAMS).flat().flatMap((d) => d.cases.map((c) => [d.id, c.cap] as const));
  it('only ever turns spaces into non-breaking ones and adds joiners', () => {
    for (const [, cap] of caps) expect(captionBreaks(cap).replace(/⁠/g, '').replace(/ /g, ' ')).toBe(cap.replace(/ /g, ' '));
  });
  it('leaves no unbreakable run longer than most of a phone line', () => {
    const long = caps.flatMap(([id, cap]) => captionBreaks(cap).replace(/<[^>]+>/g, '').replace(/⁠/g, '').split(' ').filter((r) => r.length > 30).map((r) => `${id}: ${r}`));
    expect(long).toEqual([]);
  });
});
