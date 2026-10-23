/**
 * THE FORMULA SHEET AND DIAGRAM CAPTIONS, AS ANDROID LAYS THEM OUT.
 *
 * An Android emulator sweep of Physics 11 (2026-10-20) found lines broken in
 * the wrong places: a drawn subscript fallen to the next line away from its
 * letter, word fractions never stacked, a meaning's symbol wrapped onto the
 * text beside it, a caption's "20 | m/s". These pin the fixes that can be
 * checked without a device.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { captionBreaks, DiagramCard, hiddenBelow } from '@/components/revise/diagram-card';
import { PilotFormula } from '@/components/textbook/formula-pilot';
import type { Diagram } from '@/lib/diagrams/types';
import { FormulaCard, symbolHtml } from '@/components/revise/formula-card';
import { ARROW_ROOM, hairSpaces, ITALIC_G, isWordScript, Markup, SIGN_SUB_DROP, STIX, SUB_DROP, WJ } from '@/components/textbook/markup';
import { tspans } from '@/lib/diagrams/kit';
import ch4 from '@/content/textbooks/phy-11-04-laws-of-motion';
import ch5 from '@/content/textbooks/phy-11-05-work-energy-power';
import ch6 from '@/content/textbooks/phy-11-06-rotational-motion';
import ch8 from '@/content/textbooks/phy-11-08-mech-solids';
import { buildFormulaCards, keepTogether, type FormulaCard as Card } from '@/lib/revise/formula-cards';
import { boxes, cutAtSpaces, parts, type Box } from '@/lib/revise/formula-layout';

jest.mock('@/constants/scale', () => ({ useScale: () => ({ scale: (n: number) => n }) }));

type Json = TestRenderer.ReactTestRendererJSON;

function draw(el: React.ReactElement) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(el);
  });
  return r;
}

function nodes(json: Json | Json[] | null): Json[] {
  const out: Json[] = [];
  const walk = (n: Json) => {
    out.push(n);
    for (const c of n.children ?? []) if (c && typeof c === 'object') walk(c as Json);
  };
  (Array.isArray(json) ? json : json ? [json] : []).forEach(walk);
  return out;
}

/** The children of the outer Text, in order, with each drawn script as "[script]". */
function flat(n: Json): string {
  return (n.children ?? []).map((c) => (typeof c === 'string' ? c : c.type === 'View' ? `[${flat(c)}]` : flat(c))).join('');
}

describe('a drawn script never leaves its letter', () => {
  it('sits between word joiners, so no line can break on either side of it', () => {
    const r = draw(<Markup html="∑ <i>m</i><sub><i>i</i></sub><i>a⃗</i><sub><i>i</i></sub>" size={19} look="stix" />);
    const text = flat(r.toJSON() as Json);
    expect(text).toBe(`∑ m${WJ}[i]${WJ}a⃗${WJ}[i]${WJ}`);
  });

  it('a numeric script stays a Unicode character, with no joiners needed', () => {
    const r = draw(<Markup html="<i>m</i><sub>1</sub>" size={19} look="stix" />);
    expect(flat(r.toJSON() as Json)).toBe('m₁');
  });
});

describe('a subscript and a superscript on one base are one stacked unit', () => {
  const shiftOf = (n: Json) => ((StyleSheet.flatten(n.props.style) as { transform?: { translateY: number }[] }).transform?.[0]?.translateY ?? 0);
  const views = (html: string) => {
    const r = draw(<Markup html={html} size={20} look="stix" />);
    return { r, outer: (r.toJSON() as Json).children!.filter((c): c is Json => typeof c === 'object' && c.type === 'View') };
  };

  it('Σ from i=1 to n: one View, the n above the i=1, between word joiners', () => {
    const { r, outer } = views('Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>q</i><sub><i>i</i></sub>');
    expect(outer).toHaveLength(2); // the pair, and qᵢ's own script
    expect(flat(r.toJSON() as Json)).toBe(`Σ${WJ}[[n][i=1]]${WJ} q${WJ}[i]${WJ}`);
    expect(StyleSheet.flatten(outer[0].props.style)).toEqual(expect.objectContaining({ alignItems: 'flex-start' }));
  });

  it('−∫ from A to B, and a <sup> before its <sub> (ᴬ_Z X), stack the same way', () => {
    expect(flat(draw(<Markup html="−∫<sub><i>A</i></sub><sup><i>B</i></sup> <i>E⃗</i>" size={20} look="stix" />).toJSON() as Json)).toBe(`−∫${WJ}[[B][A]]${WJ} E⃗${ARROW_ROOM}`);
    expect(flat(draw(<Markup html="<sup><i>A</i></sup><sub><i>Z</i></sub>X" size={20} look="stix" />).toJSON() as Json)).toBe(`${WJ}[[A][Z]]${WJ}X`);
  });

  it('a pair with one drawn half draws both: ∫₀ᵗ, vₓ²', () => {
    expect(flat(draw(<Markup html="∫<sub>0</sub><sup><i>t</i></sup>" size={20} look="stix" />).toJSON() as Json)).toBe(`∫${WJ}[[t][0]]${WJ}`);
    expect(flat(draw(<Markup html="<i>v</i><sub><i>x</i></sub><sup>2</sup>" size={20} look="stix" />).toJSON() as Json)).toBe(`v${WJ}[[2][x]]${WJ}`);
  });

  it('two numeric halves stay STIX’s own glyphs: v₀²', () => {
    expect(flat(draw(<Markup html="<i>v</i><sub>0</sub><sup>2</sup>" size={20} look="stix" />).toJSON() as Json)).toBe('v₀²');
  });

  it('each half sits exactly where a single drawn run of its kind sits, in a box one script high', () => {
    const [pair] = views('Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup>').outer;
    const [sup] = views('<i>x</i><sup><i>n</i></sup>').outer;
    const [sub] = views('<i>x</i><sub><i>i</i></sub>').outer;
    const [top, bottom] = pair.children as Json[];
    expect(shiftOf(pair) + shiftOf(top)).toBeCloseTo(shiftOf(sup));
    expect(shiftOf(pair) + shiftOf(bottom)).toBeCloseTo(shiftOf(sub));
    const b = StyleSheet.flatten(bottom.props.style) as { height: number; marginTop: number };
    expect(b.marginTop).toBeCloseTo(-b.height);
  });

  it('in a formula card too, plain and with a fraction on the line', () => {
    const cardOf = (expr: string): Card => ({ topic: 0, name: 'T', items: [{ label: null, expr, words: false }], meaning: [] });
    for (const expr of ['<i>V</i> = Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>V</i><sub><i>i</i></sub>', '<i>U</i> = (sum of pair energies)/(two) Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>q</i><sub><i>i</i></sub>']) {
      const r = draw(<FormulaCard card={cardOf(expr)} />);
      const stacked = nodes(r.toJSON() as Json).filter((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { alignItems?: string })?.alignItems === 'flex-start');
      expect(stacked).toHaveLength(1);
    }
  });
});

describe('a raised word is upright, a raised letter is italic', () => {
  const family = (html: string) => {
    const r = draw(<Markup html={html} size={19} look="stix" />);
    const view = nodes(r.toJSON() as Json).find((n) => n.type === 'View')!;
    const text = nodes(view).find((n) => n.type === 'Text')!;
    return (StyleSheet.flatten(text.props.style) as { fontFamily?: string }).fontFamily;
  };
  /** The family of the Text that draws `letter` inside the drawn script. */
  const letterFamily = (html: string, letter: string) => {
    const r = draw(<Markup html={html} size={19} look="stix" />);
    const view = nodes(r.toJSON() as Json).find((n) => n.type === 'View')!;
    const text = nodes(view).find((n) => n.type === 'Text' && (n.children ?? []).includes(letter))!;
    return (StyleSheet.flatten(text.props.style) as { fontFamily?: string }).fontFamily;
  };
  it('n<sup>th</sup>, v<sup>max</sup>: upright labels', () => {
    expect(family('<i>n</i><sup>th</sup>')).toBe(STIX.regular);
    expect(family('<i>v</i><sup>max</sup>')).toBe(STIX.regular);
  });
  it('M<sup>a</sup> and x<sup>n</sup>: italic exponents', () => {
    expect(letterFamily('M<sup>a</sup>', 'a')).toBe(STIX.italic);
    expect(letterFamily('<i>x</i><sup>n</sup>', 'n')).toBe(STIX.italic);
  });
  it('V<sup>γ−1</sup>: only the letters of an exponent are italic, its digits and signs upright', () => {
    expect(family('<i>V</i><sup><i>γ</i>−1</sup>')).toBe(STIX.regular);
    expect(letterFamily('<i>V</i><sup><i>γ</i>−1</sup>', 'γ')).toBe(STIX.italic);
    expect(letterFamily('<i>P</i><sup>1−γ</sup>', 'γ')).toBe(STIX.italic);
  });
  it('tells a word from a variable by its own letters', () => {
    expect(isWordScript('th')).toBe(true);
    expect(isWordScript('rms')).toBe(true);
    expect(isWordScript('a')).toBe(false);
    expect(isWordScript('−y+z')).toBe(false);
  });
});

describe('word fractions stack again', () => {
  const card = (cards: Card[], name: RegExp) => cards.find((c) => name.test(c.name.replace(/\u00a0/g, ' ').replace(/\u2060/g, '')))!;
  const fracs = (expr: string) => parts(expr).filter((s) => s.kind === 'frac');

  it('through the word joiner keepTogether puts after every slash', () => {
    expect(fracs(keepTogether('<i>a</i> = (net driving force)/(total mass)'))).toHaveLength(1);
    expect(fracs(keepTogether('LC = Pitch/(Number of divisions on the circular scale)'))).toHaveLength(1);
    expect(fracs(keepTogether('<i>T</i> = (2<i>u</i> sin <i>θ</i>)/<i>g</i>'))).toHaveLength(1);
  });

  it('on the cards: Strain, Poisson’s ratio, Mechanical advantage, System acceleration', () => {
    const c8 = buildFormulaCards(ch8);
    expect(fracs(card(c8, /^Strain$/).items[0].expr)).toEqual([expect.objectContaining({ top: expect.stringContaining('change'), bottom: expect.stringContaining('original') })]);
    // "ν = −" goes with the fraction, never left at a line's end
    const poisson = boxes(card(c8, /Poisson/).items[0].expr);
    expect(poisson[0]).toEqual([{ kind: 'text', html: '<i>ν</i>\u00a0=\u00a0−\u2060' }, expect.objectContaining({ kind: 'frac' })]);
    expect(fracs(card(buildFormulaCards(ch6), /Mechanical advantage of a lever/).items[0].expr).length).toBeGreaterThan(0);
    expect(fracs(card(buildFormulaCards(ch4), /System acceleration/).items[0].expr)).toHaveLength(1);
  });

  it('allows one bracket inside a side: "(Number of vernier scale divisions (n))"', () => {
    expect(fracs(keepTogether('LC = (Value of 1 main scale division)/(Number of vernier scale divisions (<i>n</i>))'))).toEqual([
      expect.objectContaining({ bottom: expect.stringContaining('(<i>n</i>)') }),
    ]);
  });

  it('never reads the "i" of a closing </i> as the top of a fraction', () => {
    expect(fracs(keepTogether('<i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)'))).toHaveLength(0);
  });
});

describe('a fraction and its brackets (Android review, pass 2)', () => {
  const fracs = (expr: string) => parts(expr).filter((s) => s.kind === 'frac');
  it('drops the brackets a fraction exactly fills: ((m₁ − m₂)/(m₁ + m₂))u₁, (2m₂/(m₁ + m₂))u₂', () => {
    const p = parts(buildFormulaCards(ch5).find((c) => /Elastic collision in 1-D — final/.test(c.name.replace(/\u00a0/g, ' ').replace(/\u2060/g, '')))!.items[0].expr);
    expect(p.filter((x) => x.kind === 'frac')).toHaveLength(2);
    for (const x of p) if (x.kind === 'text') expect(x.html).not.toMatch(/\($|^\)/);
  });
  it('keeps them, tall, under a root: √((restoring constant)/inertia)', () => {
    expect(fracs(keepTogether('<i>ω</i> = √((restoring constant)/inertia)'))).toEqual([expect.objectContaining({ tall: true, top: expect.stringContaining('restoring') })]);
  });
  it('leaves a fraction inline inside an open bracket: k((T₁ + T₂)/2 − T₀), √(rg(tan θ + μ)/(1 − μ tan θ))', () => {
    expect(fracs(keepTogether('<i>k</i>((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>)'))).toHaveLength(0);
    expect(fracs(keepTogether('<i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))'))).toHaveLength(0);
  });
});

describe('boxes: a line with a fraction breaks only between whole pieces', () => {
  const show = (bx: Box[]) => bx.map((b) => b.map((p) => (p.kind === 'text' ? p.html : '[f]')).join(''));
  it('glues the punctuation and the symbol after a fraction to it', () => {
    const bx = show(boxes(keepTogether('<i>C</i><sub><i>V</i>,mix</sub> = (∑ <i>n</i><sub><i>i</i></sub><i>C</i><sub><i>V</i>,<i>i</i></sub>)/(∑ <i>n</i><sub><i>i</i></sub>), and similarly for <i>C</i><sub><i>P</i></sub>;')));
    expect(bx[0]).toMatch(/\[f\],$/);
  });
  it('keeps the drawn scripts of a text piece in a box of their own line: ∫ limits, ρ_water', () => {
    const bx = boxes(keepTogether('RD = <i>ρ</i><sub>substance</sub>/<i>ρ</i><sub>water</sub> = (weight in air)/(loss of weight in water)'));
    expect(bx[0]).toEqual([{ kind: 'text', html: expect.stringContaining('<sub>water</sub>') }]);
    expect(bx[1][1]).toEqual(expect.objectContaining({ kind: 'frac' }));
  });
  it('cuts markup at its spaces as whole markup', () => {
    expect(cutAtSpaces('<i>a b</i> c')).toEqual(['<i>a</i>', '<i>b</i>', 'c']);
    expect(cutAtSpaces('<i>x</i><sub>a b</sub> y')).toEqual(['<i>x</i><sub>a b</sub>', 'y']);
  });
});

describe('the italic g', () => {
  const text = (html: string) => {
    const r = draw(<Markup html={html} size={19} look="stix" />);
    return JSON.stringify(r.toJSON());
  };
  it('is the single-storey g in an italic run, and only there', () => {
    expect(text('<i>ρg</i>')).toContain(`ρ${ITALIC_G}`);
    expect(text('<i>ρg</i>')).not.toContain('ρg');
    expect(text('gravity')).toContain('gravity');
    expect(text('<i>E</i><sub><i>g</i></sub>')).toContain(ITALIC_G);
  });
  it('a name in SemiBold sets its maths letters in SemiBold italic', () => {
    const r = draw(<Markup html="Angle of friction <i>λ</i>" size={19} look="stix" style={{ fontFamily: STIX.semibold }} />);
    const i = nodes(r.toJSON() as Json).find((n) => n.type === 'Text' && (n.children ?? []).includes('λ'))!;
    expect((StyleSheet.flatten(i.props.style) as { fontFamily?: string }).fontFamily).toBe(STIX.semiboldItalic);
  });
});

describe('the formula card', () => {
  const card: Card = { topic: 0, name: 'Test', items: [{ label: null, expr: '<i>p⃗</i> = <i>mv⃗</i>', words: false }], meaning: [] };

  it('draws no hairline under nothing when a card has no meanings', () => {
    const r = draw(<FormulaCard card={card} />);
    const rules = nodes(r.toJSON() as Json).filter((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { borderTopWidth?: number })?.borderTopWidth === 1);
    expect(rules).toHaveLength(1);
  });

  it('sets a meaning symbol so it cannot wrap: non-breaking spaces and a hanging hair space', () => {
    expect(symbolHtml('<i>x</i> and <i>y</i>')).toBe('<i>x</i>\u00a0and\u00a0<i>y</i>\u200a');
    const r = draw(<FormulaCard card={{ ...card, meaning: [{ sym: '<i>a</i><sub><i>t</i></sub>', text: 'the tangential acceleration' }] }} />);
    const box = nodes(r.toJSON() as Json).find((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { flexShrink?: number })?.flexShrink === 0);
    expect(box).toBeDefined();
  });
});

describe('diagram captions', () => {
  it('keeps a number with its unit, and a unit whole at its slash', () => {
    const out = captionBreaks('from 0 to 20 m/s in 4 s; a 3 kg block; +0.04 cm; 6 m/s<sup>2</sup>');
    expect(out).toContain('20\u00a0m/\u2060s');
    expect(out).toContain('4\u00a0s');
    expect(out).toContain('3\u00a0kg');
    expect(out).toContain('0.04\u00a0cm');
    expect(out).toContain('6\u00a0m/\u2060s<sup>');
    // not a word that only starts like a unit
    expect(captionBreaks('Ball 1 is thrown at 2 mass')).not.toContain('2\u00a0mass');
  });

  it('never ends a line on =, −, + or ×', () => {
    expect(captionBreaks('<i>R</i> = <i>OQ</i>, so displacement = area above − area below')).toBe('<i>R</i>\u00a0=\u00a0<i>OQ</i>, so displacement =\u00a0area above −\u00a0area below');
  });

  it('keeps cos θ with its angle and its coefficient', () => {
    expect(captionBreaks('<i>PS</i> = <i>B</i> cos <i>θ</i>')).toContain('<i>B</i>\u00a0cos\u00a0<i>θ</i>');
  });

  it('leaves the tags alone', () => {
    expect(captionBreaks('<i>x</i>/<i>t</i> and <sub>1</sub>')).toBe('<i>x</i>/\u2060<i>t</i> and <sub>1</sub>');
  });
});

describe('where two glyphs meet that the font never set side by side (Physics 12 review, 2026-10-22)', () => {
  const marginOf = (n: Json) => (StyleSheet.flatten(n.props.style) as { marginLeft?: number }).marginLeft ?? 0;
  const pairTop = (html: string) => {
    const pair = nodes(draw(<Markup html={html} size={20} look="stix" />).toJSON() as Json).find((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { alignItems?: string })?.alignItems === 'flex-start')!;
    return (pair.children as Json[])[0];
  };

  it('a stacked pair after an italic letter steps its superscript off the letter (rᵢ²), after an upright one it does not (Σ)', () => {
    expect(marginOf(pairTop('<i>r</i><sub><i>i</i></sub><sup>2</sup>'))).toBeCloseTo(1);
    expect(marginOf(pairTop('Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup>'))).toBe(0);
  });

  it('a vector arrow before a closing bar gets a thin space it cannot break at: |τ⃗|', () => {
    expect(hairSpaces('|<i>τ⃗</i>| = <i>pE</i>')).toBe(`|<i>τ⃗</i>\u2009${WJ}| = <i>pE</i>`);
    expect(hairSpaces('(<i>E⃗</i>)')).toBe(`(<i>E⃗</i>\u2009${WJ})`);
    expect(hairSpaces('<i>E⃗</i> = 0')).toBe('<i>E⃗</i> = 0');
  });

  it('a lowered digit before an italic capital with a foot gets a hair space: ε₀A, 4πε₀R; not before V or C', () => {
    expect(hairSpaces('ε<sub>0</sub><i>A</i>/<i>d</i>')).toBe(`ε<sub>0</sub>\u200a${WJ}<i>A</i>/<i>d</i>`);
    expect(hairSpaces('4πε₀<i>R</i>')).toBe(`4πε₀\u200a${WJ}<i>R</i>`);
    expect(hairSpaces('<i>C</i><sub>1</sub><i>V</i><sub>1</sub>')).toBe('<i>C</i><sub>1</sub><i>V</i><sub>1</sub>');
    expect(hairSpaces('<i>C</i><sub>1</sub><i>C</i><sub>2</sub>')).toBe('<i>C</i><sub>1</sub><i>C</i><sub>2</sub>');
  });

  it('every lowered digit gets it, ₀ to ₉ and a <sub> of digits: μ₀I₁I₂ (Physics 12 Ch 4)', () => {
    expect(hairSpaces('μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>)')).toBe(`μ<sub>0</sub>\u200a${WJ}<i>I</i><sub>1</sub>\u200a${WJ}<i>I</i><sub>2</sub>/(2π<i>d</i>)`);
    for (const d of '₀₁₂₃₄₅₆₇₈₉') expect(hairSpaces(`<i>E</i>${d}<i>I</i>`)).toBe(`<i>E</i>${d}\u200a${WJ}<i>I</i>`);
    expect(hairSpaces('<i>R</i><sub>12</sub><i>R</i>')).toBe(`<i>R</i><sub>12</sub>\u200a${WJ}<i>R</i>`);
  });

  it('a superscript after an italic capital steps off its top (I²R, E²), not after a small letter or a subscript', () => {
    expect(hairSpaces('<i>P</i> = <i>I</i><sup>2</sup><i>R</i>')).toBe(`<i>P</i> = <i>I</i>\u200a${WJ}<sup>2</sup><i>R</i>`);
    expect(hairSpaces('<i>E</i><sup>2</sup><i>R</i>')).toBe(`<i>E</i>\u200a${WJ}<sup>2</sup><i>R</i>`);
    expect(hairSpaces('<i>NIA</i><sup><i>n</i></sup>')).toBe(`<i>NIA</i>\u200a${WJ}<sup><i>n</i></sup>`);
    expect(hairSpaces('<i>r</i><sup>2</sup>')).toBe('<i>r</i><sup>2</sup>');
    expect(hairSpaces('<i>V</i><sub>rated</sub><sup>2</sup>')).toBe('<i>V</i><sub>rated</sub><sup>2</sup>');
    // a stacked pair steps itself (PAIR_KERN), so it gets no space too
    expect(hairSpaces('<i>I</i><sup>2</sup><sub><i>x</i></sub>')).toBe('<i>I</i><sup>2</sup><sub><i>x</i></sub>');
    expect(flat(draw(<Markup html="<i>I</i><sup>2</sup><i>R</i>" size={19} look="stix" />).toJSON() as Json)).toBe(`I\u200a${WJ}²R`);
  });

  it('a fraction\'s two sides and a meaning\'s symbol get room above for an arrow over a tall letter (dl⃗), without moving', () => {
    const card: Card = {
      topic: 0,
      name: 'Biot–Savart',
      items: [{ label: null, expr: keepTogether('d<i>B⃗</i> = (<i>I</i> d<i>l⃗</i> × <i>r̂</i>)/<i>r</i><sup>2</sup>'), words: false }],
      meaning: [{ sym: '∮ <i>B⃗</i> · d<i>l⃗</i>', text: 'the line integral of <i>B⃗</i> round the loop' }],
    };
    const texts = nodes(draw(<FormulaCard card={card} />).toJSON() as Json).filter((n) => n.type === 'Text' && n.props.style);
    const roomy = texts.map((n) => StyleSheet.flatten(n.props.style) as { paddingTop?: number; marginTop?: number }).filter((st) => (st.paddingTop ?? 0) > 0);
    // the name, numerator, denominator, the meaning's symbol: and nothing else (the formula's own line and the meaning's words keep their spacing)
    expect(roomy).toHaveLength(4);
    for (const st of roomy) {
      expect(st.paddingTop).toBeGreaterThanOrEqual(16 * 0.3);
      expect(st.marginTop).toBeCloseTo(-st.paddingTop!);
    }
  });

  it('a subscript that is only a sign is drawn, lowered less than a letter, so E₋ is not "E_"', () => {
    const shift = (html: string) => {
      const v = nodes(draw(<Markup html={html} size={20} look="stix" />).toJSON() as Json).find((n) => n.type === 'View')!;
      return (StyleSheet.flatten(v.props.style) as { transform: { translateY: number }[] }).transform[0].translateY;
    };
    expect(shift('<i>E</i><sub>−</sub>')).toBeCloseTo(20 * SIGN_SUB_DROP);
    expect(shift('<i>E</i><sub>+</sub>')).toBeCloseTo(20 * SIGN_SUB_DROP);
    expect(shift('<i>E</i><sub><i>i</i></sub>')).toBeCloseTo(20 * SUB_DROP);
    expect(flat(draw(<Markup html="<i>E</i><sub>-</sub>" size={20} look="stix" />).toJSON() as Json)).toBe(`E${WJ}[−]${WJ}`);
    // digits still STIX's own lowered glyphs
    expect(flat(draw(<Markup html="<i>E</i><sub>1</sub>" size={20} look="stix" />).toJSON() as Json)).toBe('E₁');
  });

  it('and on a diagram drawn as SVG, the sign sits higher than a lowered digit', () => {
    const dy = (html: string) => Number(/dy="([\d.]+)"/.exec(tspans(html, 20))![1]);
    expect(dy('<i>E</i><sub>−</sub>')).toBeLessThan(dy('<i>E</i><sub>1</sub>'));
    expect(dy('<i>E</i><sub>+</sub>')).toBe(dy('<i>E</i><sub>−</sub>'));
  });
});

describe('Physics 12 Ch 5–6 review (2026-10-22)', () => {
  const H = `\u200a${WJ}`, T = `\u2009${WJ}`;

  it('a card name gets room above for an arrow over a tall letter, without moving: "Motional emf (rod, v⃗, B⃗, l⃗ …)"', () => {
    const card: Card = { topic: 0, name: 'Motional emf (rod, <i>v⃗</i>, <i>B⃗</i>, <i>l⃗</i> mutually perpendicular)', items: [{ label: null, expr: '<i>ε</i> = <i>Bvl</i>', words: false }], meaning: [] };
    const name = nodes(draw(<FormulaCard card={card} />).toJSON() as Json).find((n) => n.type === 'Text' && (StyleSheet.flatten(n.props.style) as { fontFamily?: string }).fontFamily === STIX.semibold)!;
    const st = StyleSheet.flatten(name.props.style) as { paddingTop?: number; marginTop?: number; lineHeight?: number };
    expect(st.paddingTop).toBeGreaterThanOrEqual(19 * 0.3);
    expect(st.marginTop).toBeCloseTo(-st.paddingTop!);
    expect(st.lineHeight).toBe(25);
  });

  it('and so does the reader\'s formula title set as maths, on top of its own margin', () => {
    const block = { t: 'formula', kicker: 'Motional emf (rod, <i>v⃗</i>, <i>B⃗</i>, <i>l⃗</i> mutually perpendicular)', main: '<i>ε</i> = <i>Bvl</i>', legend: [], note: '' } as unknown as React.ComponentProps<typeof PilotFormula>['block'];
    const id = (n: number) => n;
    const title = nodes(draw(<PilotFormula block={block} scale={id} type={id} />).toJSON() as Json).find((n) => n.type === 'Text' && (StyleSheet.flatten(n.props.style) as { fontFamily?: string }).fontFamily === 'Onest_700Bold')!;
    const st = StyleSheet.flatten(title.props.style) as { paddingTop?: number; marginTop?: number };
    expect(st.paddingTop).toBeGreaterThanOrEqual(17 * 0.3);
    expect(st.marginTop).toBeCloseTo(2 - st.paddingTop!);
  });

  it('a lowered digit before an italic letter whose foot or tail reaches left gets a hair space: μ₀μᵣ', () => {
    expect(hairSpaces('<i>μ</i> = μ<sub>0</sub><i>μ</i><sub>r</sub>')).toBe(`<i>μ</i> = μ<sub>0</sub>${H}<i>μ</i><sub>r</sub>`);
    expect(hairSpaces('μ₀<i>χ</i>')).toBe(`μ₀${H}<i>χ</i>`);
    expect(hairSpaces('<i>x</i><sub>0</sub><i>f</i>')).toBe(`<i>x</i><sub>0</sub>${H}<i>f</i>`);
    // letters that start on or right of their advance: no space
    for (const c of 'COVSnsptεα') expect(hairSpaces(`μ<sub>0</sub><i>${c}</i>`)).toBe(`μ<sub>0</sub><i>${c}</i>`);
  });

  it('a drawn letter subscript before such a letter gets one too: μᵣNIA, ε_rms I_rms; not μᵣ nI', () => {
    expect(hairSpaces('μ<sub>0</sub><i>μ</i><sub>r</sub><i>NIA</i>')).toBe(`μ<sub>0</sub>${H}<i>μ</i><sub>r</sub>${H}<i>NIA</i>`);
    expect(hairSpaces('<i>ε</i><sub>rms</sub><i>I</i><sub>rms</sub>')).toBe(`<i>ε</i><sub>rms</sub>${H}<i>I</i><sub>rms</sub>`);
    expect(hairSpaces('<i>v</i><sub><i>x</i></sub><i>A</i>')).toBe(`<i>v</i><sub><i>x</i></sub>${H}<i>A</i>`);
    expect(hairSpaces('μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i>')).toBe(`μ<sub>0</sub>${H}<i>μ</i><sub>r</sub><i>nI</i>`);
    // the cases that were fine stay as they were
    expect(hairSpaces('<i>C</i><sub>1</sub><i>V</i><sub>1</sub>')).toBe('<i>C</i><sub>1</sub><i>V</i><sub>1</sub>');
    expect(hairSpaces('<i>V</i><sub>rated</sub><sup>2</sup>')).toBe('<i>V</i><sub>rated</sub><sup>2</sup>');
    // one subscript at a time: the space goes after the one that meets the letter
    expect(hairSpaces('<i>a</i><sub>1</sub> + <i>b</i><sub>r</sub><i>N</i>')).toBe(`<i>a</i><sub>1</sub> + <i>b</i><sub>r</sub>${H}<i>N</i>`);
  });

  it('the drawn subscript keeps its word joiners round it, and the hair space joins on', () => {
    expect(flat(draw(<Markup html="<i>μ</i><sub>r</sub><i>N</i>" size={19} look="stix" />).toJSON() as Json)).toBe(`μ${WJ}[r]${WJ}${H}N`);
  });

  it('an italic f before a spaced operator gets a thin space: f × (loop area); not another letter, not f without an operator', () => {
    expect(hairSpaces('<i>p</i> = <i>f</i> × (loop area)')).toBe(`<i>p</i> = <i>f</i>${T} × (loop area)`);
    expect(hairSpaces('<i>f</i>\u00a0=\u00a050 Hz')).toBe(`<i>f</i>${T}\u00a0=\u00a050 Hz`);
    expect(hairSpaces('<i>p</i> × <i>V</i>')).toBe('<i>p</i> × <i>V</i>');
    expect(hairSpaces('<i>f</i> (the frequency)')).toBe('<i>f</i> (the frequency)');
  });

  it('⇒ gets a thin space before and a hair space after, outside the content\'s own spaces; ⇔ a hair space each side', () => {
    expect(hairSpaces('<i>LI</i> ⇒ <i>L</i>')).toBe(`<i>LI</i>${T} ⇒${H} <i>L</i>`);
    expect(hairSpaces('<i>a</i>\u00a0⇔\u00a0<i>b</i>')).toBe(`<i>a</i>${H}\u00a0⇔${H}\u00a0<i>b</i>`);
    // no space in the content, none added; → and ⟹ carry their own
    expect(hairSpaces('(a)⇒(b)')).toBe('(a)⇒(b)');
    expect(hairSpaces('<i>r</i> → ∞, <i>p</i> ⟹ <i>q</i>')).toBe('<i>r</i> → ∞, <i>p</i> ⟹ <i>q</i>');
    // the arrow is still drawn from STIX Two Math, the spaces are not
    const math = nodes(draw(<Markup html="<i>LI</i> ⇒ <i>L</i>" size={19} look="stix" />).toJSON() as Json).filter((n) => (StyleSheet.flatten(n.props.style) as { fontFamily?: string })?.fontFamily === STIX.math);
    expect(math.map((n) => n.children)).toEqual([['⇒']]);
  });

  describe('a diagram taller than its card says there is more', () => {
    const d = { id: 't', name: 'Test', cases: [{ chip: 'a', cap: 'A caption.' }], draw: () => ({ w: 100, h: 50, texts: [], svg: () => '<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg"></svg>', height: 50 }) } as unknown as Diagram;
    const fades = (r: TestRenderer.ReactTestRenderer) => r.root.findAll((n) => (n.type as { displayName?: string; name?: string })?.name === 'LinearGradient' || (n.props as { colors?: string[] }).colors?.[1] === '#FFFFFF').length;
    const scroll = (r: TestRenderer.ReactTestRenderer) => r.root.findAll((n) => typeof n.props.onContentSizeChange === 'function')[0];

    it('fades the bottom and shows the scroll bar while the content runs past the card, and not once scrolled to the end', () => {
      const r = draw(<DiagramCard d={d} />);
      expect(fades(r)).toBe(0);
      const sv = scroll(r);
      act(() => {
        sv.props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 300, height: 500 } } });
        sv.props.onContentSizeChange(300, 640);
      });
      expect(fades(r)).toBeGreaterThan(0);
      expect(scroll(r).props.showsVerticalScrollIndicator).toBe(true);
      act(() => sv.props.onScroll({ nativeEvent: { contentOffset: { x: 0, y: 140 } } }));
      expect(fades(r)).toBe(0);
    });

    it('the padding under the caption is not "more": a caption fully on the card is never faded (Fig 5.5 (c), 9 px over)', () => {
      expect(hiddenBelow(500, 509, 0, 24)).toBe(-15);
      const r = draw(<DiagramCard d={d} />);
      const sv = scroll(r);
      act(() => {
        sv.props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 300, height: 500 } } });
        sv.props.onContentSizeChange(300, 509);
      });
      expect(fades(r)).toBe(0);
      expect(scroll(r).props.showsVerticalScrollIndicator).toBe(false);
      // a few points of rounding past that are not ink either
      act(() => sv.props.onContentSizeChange(300, 527.5));
      expect(fades(r)).toBe(0);
    });

    it('a caption hidden by a real margin fades, and the fade is gone once its last line is in view', () => {
      const r = draw(<DiagramCard d={d} />);
      const sv = scroll(r);
      act(() => {
        sv.props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 300, height: 500 } } });
        sv.props.onContentSizeChange(300, 540);
      });
      expect(fades(r)).toBeGreaterThan(0);
      // scrolled till the caption's last line is on the card, short of the very end (the padding still below)
      act(() => sv.props.onScroll({ nativeEvent: { contentOffset: { x: 0, y: 16 } } }));
      expect(fades(r)).toBe(0);
      // and at the very end, with Android's fractional offsets
      act(() => sv.props.onScroll({ nativeEvent: { contentOffset: { x: 0, y: 39.6 } } }));
      expect(fades(r)).toBe(0);
    });

    it('a diagram that fits shows neither', () => {
      const r = draw(<DiagramCard d={d} />);
      const sv = scroll(r);
      act(() => {
        sv.props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 300, height: 500 } } });
        sv.props.onContentSizeChange(300, 420);
      });
      expect(fades(r)).toBe(0);
      expect(scroll(r).props.showsVerticalScrollIndicator).toBe(false);
    });
  });
});

describe('Physics 12 Ch 4–6 re-check (2026-10-22)', () => {
  const T = `\u2009${WJ}`;

  it('a vector arrow that ends a text gets room for its head: the meaning symbol ∮ B⃗ · dl⃗', () => {
    expect(hairSpaces('∮ <i>B⃗</i> · d<i>l⃗</i>')).toBe(`∮ <i>B⃗</i> · d<i>l⃗</i>${ARROW_ROOM}`);
    // after the slack a caller adds, and inside a SemiBold name
    expect(hairSpaces(`d<i>l⃗</i>\u200a`)).toBe(`d<i>l⃗</i>${ARROW_ROOM}\u200a`);
    expect(hairSpaces('<b>Force on <i>l⃗</i></b>')).toBe(`<b>Force on <i>l⃗</i></b>${ARROW_ROOM}`);
    // not an arrow with more after it on its line
    expect(hairSpaces('<i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i>')).toBe(`<i>B⃗</i> · d<i>l⃗</i>${T} = μ<sub>0</sub>\u200a${WJ}<i>I</i>`);
    expect(hairSpaces('(<i>E⃗</i>)')).toBe(`(<i>E⃗</i>${T})`);
  });

  it('and the formula card\'s meaning symbol carries it, inside its own width', () => {
    const card: Card = { topic: 0, name: 'Ampère', items: [{ label: null, expr: '<i>x</i>', words: false }], meaning: [{ sym: '∮ <i>B⃗</i> · d<i>l⃗</i>', text: 'the line integral' }] };
    const sym = nodes(draw(<FormulaCard card={card} />).toJSON() as Json).find((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { flexShrink?: number })?.flexShrink === 0)!;
    expect(JSON.stringify(sym)).toContain(ARROW_ROOM);
  });

  it('an italic f before a closing bracket gets a thin space: NBA(2πf)', () => {
    expect(hairSpaces('<i>NBA</i>(2π<i>f</i>)')).toBe(`<i>NBA</i>(2π<i>f</i>${T})`);
    expect(hairSpaces('|<i>f</i>|')).toBe(`|<i>f</i>${T}|`);
    expect(hairSpaces('(<i>f</i><sub>0</sub>)')).toBe('(<i>f</i><sub>0</sub>)');
    expect(hairSpaces('(<i>ω</i>)')).toBe('(<i>ω</i>)');
  });

  it('a fraction glued to the term before it keeps the space between them, as when that space was already non-breaking', () => {
    const lead = (expr: string) => (boxes(expr)[2][0] as { html: string }).html;
    const plain = '<i>B</i><sub>E</sub> = (μ<sub>0</sub>/\u2060(4π)) (<i>M</i> √(1 + 3 sin<sup>2</sup> <i>λ</i>))/\u2060<i>r</i><sup>3</sup>';
    const joined = '<i>B</i><sub>V</sub> = (μ<sub>0</sub>/\u2060(4π))\u00a0(2<i>M</i> sin <i>λ</i>)/\u2060<i>r</i><sup>3</sup>';
    expect(lead(plain)).toBe('(μ<sub>0</sub>/\u2060(4π))\u00a0');
    expect(lead(joined)).toBe('(μ<sub>0</sub>/\u2060(4π))\u00a0');
    expect(boxes(plain)[2][1]).toEqual(expect.objectContaining({ kind: 'frac' }));
  });

  const H = `\u200a${WJ}`;

  it('an arrow over a narrow italic letter before a spaced operator gets room in proportion: dl⃗ = (thin), S⃗ = (hair), B⃗ = (none)', () => {
    expect(hairSpaces('d<i>l⃗</i>\u00a0=\u00a0μ')).toBe(`d<i>l⃗</i>${T}\u00a0=\u00a0μ`);
    expect(hairSpaces('<i>S⃗</i> = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub>')).toBe(`<i>S⃗</i>${H} = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub>`);
    expect(hairSpaces('<i>B⃗</i> = 0')).toBe('<i>B⃗</i> = 0');
    expect(hairSpaces('<i>E⃗</i> · d<i>l⃗</i>')).toBe(`<i>E⃗</i> · d<i>l⃗</i>${ARROW_ROOM}`);
  });

  it('an italic f before a tall letter gets a thin space (fλ, 2πfC), not before an x-height one (fx)', () => {
    expect(hairSpaces('<i>c</i> = <i>fλ</i>')).toBe(`<i>c</i> = <i>f${T}λ</i>`);
    expect(hairSpaces('1/(2π<i>fC</i>)')).toBe(`1/(2π<i>f${T}C</i>)`);
    expect(hairSpaces('<i>fx</i>')).toBe('<i>fx</i>');
    expect(hairSpaces('of Bob')).toBe('of Bob');
  });

  it('a script pair whose subscript is the wider half steps off a footed italic letter: I²ᵣₘₛR; not v₀²A, not x²ᵢA', () => {
    expect(hairSpaces('<i>I</i><sub>rms</sub><sup>2</sup><i>R</i>')).toBe(`<i>I</i><sub>rms</sub><sup>2</sup>${H}<i>R</i>`);
    expect(hairSpaces('<i>v</i><sub>0</sub><sup>2</sup><i>A</i>')).toBe('<i>v</i><sub>0</sub><sup>2</sup><i>A</i>');
    expect(hairSpaces('<i>x</i><sub><i>i</i></sub><sup>max</sup><i>A</i>')).toBe('<i>x</i><sub><i>i</i></sub><sup>max</sup><i>A</i>');
  });

  it('a hair space between ")" and √, and between a differential d and a footed capital: (1/R)√(L/C), dA⃗', () => {
    expect(hairSpaces('(1/<i>R</i>)√(<i>L</i>/<i>C</i>)')).toBe(`(1/<i>R</i>)${H}√(<i>L</i>/<i>C</i>)`);
    expect(hairSpaces('∮ <i>E⃗</i> · d<i>A⃗</i> = 0')).toBe(`∮ <i>E⃗</i> · d${H}<i>A⃗</i> = 0`);
    expect(hairSpaces('d<i>x</i>/d<i>t</i>')).toBe('d<i>x</i>/d<i>t</i>');
    expect(hairSpaces('and<i>A</i>')).toBe('and<i>A</i>');
  });

  it('a fraction after text that ends on a space takes no left margin; after a letter it keeps it', () => {
    const marginsOf = (expr: string) => {
      const card: Card = { topic: 0, name: 'T', items: [{ label: null, expr, words: false }], meaning: [] };
      const frac = nodes(draw(<FormulaCard card={card} />).toJSON() as Json).find((n) => n.type === 'View' && (StyleSheet.flatten(n.props.style) as { alignItems?: string })?.alignItems === 'stretch')!;
      return StyleSheet.flatten(frac.props.style) as { marginLeft: number; marginRight: number };
    };
    expect(marginsOf(keepTogether('<i>Y</i> = 1/<i>Z</i> = (<i>R</i> − <i>jX</i>)/(<i>R</i><sup>2</sup> + <i>X</i><sup>2</sup>) = <i>G</i> + <i>jB</i>'))).toEqual(expect.objectContaining({ marginLeft: 0, marginRight: 4 }));
    expect(marginsOf(keepTogether('<i>k</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>3</sub>)'))).toEqual(expect.objectContaining({ marginLeft: 4 }));
  });
});

describe('Physics 12 Ch 4–8 re-check (2026-10-23)', () => {
  it('a legend\'s meanings all start at one x: every symbol takes the widest one\'s width, as measured', () => {
    const card: Card = {
      topic: 0,
      name: 'Magnetic force on a moving charge',
      items: [{ label: null, expr: '<i>x</i>', words: false }],
      meaning: [
        { sym: '<i>q</i>', text: 'the charge (C)' },
        { sym: '<i>v⃗</i>', text: 'its velocity' },
        { sym: null, text: 'a bullet row has no symbol' },
        { sym: '<i>B⃗</i>', text: 'the magnetic field (T)' },
      ],
    };
    const r = draw(<FormulaCard card={card} />);
    const measured = r.root.findAll((n) => (n.type as unknown) === 'View' && typeof n.props.onLayout === 'function' && !!n.props.style);
    const syms = () => r.root.findAll((n) => (n.type as unknown) === 'View' && (StyleSheet.flatten(n.props.style) as { minWidth?: number })?.minWidth !== undefined);
    expect(syms()).toHaveLength(3);
    // Before anything is measured the column is 0: each symbol sizes to itself.
    expect(syms().map((n) => (StyleSheet.flatten(n.props.style) as { minWidth: number }).minWidth)).toEqual([0, 0, 0]);
    // The symbols' own widths, the arrowed ones wider by their head's room.
    const own = measured.filter((n) => (StyleSheet.flatten(n.props.style) as { flexShrink?: number }).flexShrink === 0 && (StyleSheet.flatten(n.props.style) as { minWidth?: number }).minWidth === undefined);
    expect(own).toHaveLength(3);
    act(() => [9, 14, 17].forEach((width, i) => own[i].props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width, height: 23 } } })));
    expect(syms().map((n) => (StyleSheet.flatten(n.props.style) as { minWidth: number }).minWidth)).toEqual([17, 17, 17]);
    // The symbol inside keeps its own width: the column does not stretch it, so measuring again changes nothing.
    expect(syms().every((n) => (StyleSheet.flatten(n.props.style) as { alignItems?: string }).alignItems === 'flex-start')).toBe(true);
  });
});
