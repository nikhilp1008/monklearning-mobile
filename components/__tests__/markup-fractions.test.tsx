/**
 * STACKED FRACTIONS IN THE READER. Mathematics prints every fraction with the
 * numerator over the denominator, and so does the app (the founder's rule,
 * 2026-11-10): <frac><num>a</num><den>b</den></frac> draws a stack, never
 * "a/b" on one line.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { Markup, markupToText, STIX, WJ } from '@/components/textbook/markup';
import { font } from '@/content/textbooks/test-support/font-file';
import { cutAtSpaces } from '@/lib/revise/formula-layout';

type Json = TestRenderer.ReactTestRendererJSON;

function draw(html: string, look: 'pilot' | 'stix' = 'pilot') {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<Markup html={html} size={16} look={look} style={{ fontFamily: 'Onest_400Regular', color: '#111' }} />);
  });
  return r.toJSON() as Json;
}

/** Every string in the drawn tree, in order. */
function strings(j: Json | string | null): string[] {
  if (j == null) return [];
  if (typeof j === 'string') return [j];
  return (j.children ?? []).flatMap((c) => strings(c as Json | string));
}

/** The Views in the tree that are drawn with a fill: a fraction's rule. */
function rules(j: Json | string | null): Json[] {
  if (j == null || typeof j === 'string') return [];
  const own = j.type === 'View' && (j.props.style as { backgroundColor?: string })?.backgroundColor ? [j] : [];
  return [...own, ...(j.children ?? []).flatMap((c) => rules(c as Json | string))];
}

describe('stacked fractions', () => {
  it('draws the numerator and the denominator apart, with a rule and no slash', () => {
    const tree = draw('P(E) = <frac><num>n(E)</num><den>n(S)</den></frac>.');
    const text = strings(tree).join('');
    expect(text).toContain('n(E)');
    expect(text).toContain('n(S)');
    expect(text).not.toContain('/');
    expect(text).not.toContain('<frac>');
    expect(rules(tree)).toHaveLength(1);
  });

  it('keeps a fraction joined to the punctuation beside it', () => {
    const text = strings(draw('so x = <frac><num>1</num><den>2</den></frac>, and')).join('');
    expect(text).toContain(`${WJ},`);
  });

  it('draws a fraction inside a fraction', () => {
    const tree = draw('<frac><num>1</num><den>1 + <frac><num>1</num><den><i>x</i></den></frac></den></frac>');
    expect(rules(tree)).toHaveLength(2);
  });

  it('draws in the cards’ STIX look too', () => {
    expect(rules(draw('sin <i>θ</i> = <frac><num>1</num><den>2</den></frac>', 'stix'))).toHaveLength(1);
  });

  it('reads as a/b where a plain string is needed, bracketing a half with an operator', () => {
    expect(markupToText('P(E) = <frac><num>n(E)</num><den>n(S)</den></frac>')).toBe('P(E) = n(E)/n(S)');
    expect(markupToText('<frac><num><i>a</i> + <i>b</i></num><den>2</den></frac>')).toBe('(a + b)/2');
    expect(markupToText('<frac><num>1</num><den>1 + <frac><num>1</num><den>x</den></frac></den></frac>')).toBe('1/(1 + 1/x)');
  });

  it('keeps the text of a fraction missing a half', () => {
    expect(strings(draw('<frac><num>1</num></frac>')).join('')).toContain('1');
  });

  it('is never cut in two where a formula card breaks a line at its spaces', () => {
    const pieces = cutAtSpaces('<i>S</i> = <frac><num><i>a</i> + <i>b</i></num><den>1 − <i>r</i></den></frac> here');
    expect(pieces).toEqual(['<i>S</i>', '=', '<frac><num><i>a</i> + <i>b</i></num><den>1 − <i>r</i></den></frac>', 'here']);
  });

  it('sets the double-struck 𝕎 and 𝕋 in STIX Two Math, which has them', () => {
    const find = (j: Json | string | null): string[] => {
      if (j == null || typeof j === 'string') return [];
      const fam = (j.props.style as { fontFamily?: string } | undefined)?.fontFamily;
      const own = j.type === 'Text' && fam === STIX.math ? (j.children ?? []).filter((c): c is string => typeof c === 'string') : [];
      return [...own, ...(j.children ?? []).flatMap((c) => find(c as Json | string))];
    };
    for (const look of ['pilot', 'stix'] as const) expect(find(draw('ℕ ⊂ 𝕎 ⊂ ℤ, and 𝕋', look)).join('')).toContain('𝕎');
    for (const cp of [0x1d54e, 0x1d54b]) expect(font('stixMath').advance(cp)).toBeGreaterThan(0);
  });
});
