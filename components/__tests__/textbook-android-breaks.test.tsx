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

import { captionBreaks } from '@/components/revise/diagram-card';
import { FormulaCard, symbolHtml } from '@/components/revise/formula-card';
import { ITALIC_G, isWordScript, Markup, STIX, WJ } from '@/components/textbook/markup';
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
  const card = (cards: Card[], name: RegExp) => cards.find((c) => name.test(c.name))!;
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
    const p = parts(buildFormulaCards(ch5).find((c) => /Elastic collision in 1-D — final/.test(c.name.replace(/\u00a0/g, ' ')))!.items[0].expr);
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
