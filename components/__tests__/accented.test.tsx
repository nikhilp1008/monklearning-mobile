/**
 * k̂ IN A <Text> (iPhone, 2026-11-05): Onest has î and ĵ as single glyphs and
 * nothing for k̂, and places the combining hat wrongly. The letter and its mark
 * go in a nested Text in the system font; everything else stays as it was.
 */
import React from 'react';
import { Text } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { withAccents } from '@/components/accented';

const K = 'k̂';

function render(text: string) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<Text style={{ fontFamily: 'Onest_400Regular' }}>{withAccents(text)}</Text>);
  });
  return r;
}

describe('withAccents', () => {
  it('returns text with no combining mark untouched', () => {
    expect(withAccents('A = (2î + 3ĵ − 4)')).toBe('A = (2î + 3ĵ − 4)');
  });

  it('sets a letter with a mark in the system font, and only that', () => {
    const r = render(`î × ĵ = ${K} m`);
    const nested = r.root.findAllByType(Text).filter((n) => (n.props.style as any)?.fontFamily === 'System');
    expect(nested).toHaveLength(1);
    expect(nested[0].props.children).toBe(K);
  });

  it('keeps the words around it in the one line, in order', () => {
    const r = render(`A = (2î − ${K}) and r̂`);
    const flat = (n: any): string =>
      typeof n === 'string' ? n : Array.isArray(n) ? n.map(flat).join('') : n?.props ? flat(n.props.children) : '';
    expect(flat(r.root.findAllByType(Text)[0].props.children)).toBe(`A = (2î − ${K}) and r̂`);
    expect(r.root.findAllByType(Text).filter((n) => (n.props.style as any)?.fontFamily === 'System')).toHaveLength(2);
  });
});
