/**
 * A NOT BAR IS ONE BAR OVER ALL IT NEGATES.
 *
 * The content writes NOT as a combining overline after each character under
 * it (lib/overline.ts). Drawn as text, NAND, (A·B)‾, came out as three short
 * bars at three heights and read as Ā·B̄, which is NOR (Android review of
 * Physics 12 Ch 14). Markup now draws each barred run as one View with its
 * bars laid over the whole of it, nested runs inside it.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { Markup, STIX } from '@/components/textbook/markup';
import { overRuns, spreadOverGlue } from '@/lib/overline';

type Json = TestRenderer.ReactTestRendererJSON;
type Look = 'stix' | 'pilot';

function draw(html: string, look: Look = 'stix'): Json {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<Markup html={html} size={20} look={look} style={{ fontFamily: look === 'stix' ? STIX.regular : 'Onest_400Regular', color: '#1C1A16' }} />);
  });
  return r.toJSON() as Json;
}

const styleOf = (n: Json) => (StyleSheet.flatten(n.props.style as never) ?? {}) as Record<string, unknown>;
const kids = (n: Json) => (n.children ?? []).filter((c): c is Json => typeof c === 'object' && c !== null);
const isBar = (n: Json) => n.type === 'View' && styleOf(n).position === 'absolute' && !!styleOf(n).backgroundColor;
const isGroup = (n: Json) => n.type === 'View' && kids(n).some(isBar);

/** Every string in a tree, in order. */
function textOf(n: Json | string): string {
  if (typeof n === 'string') return n;
  return (n.children ?? []).map((c) => textOf(c as Json | string)).join('');
}
/** The text a reader sees: without the joiners and hair spaces the app adds, its glued spaces as spaces. */
const seen = (n: Json) => textOf(n).replace(/[\u2060\u200a\u2009\u2005\ufe0e]/g, '').replace(/\u00a0/g, ' ');

/** The barred runs directly under `n` (not inside another run). */
function groups(n: Json): Json[] {
  const out: Json[] = [];
  const walk = (x: Json) => (isGroup(x) ? out.push(x) : kids(x).forEach(walk));
  kids(n).forEach(walk);
  return out;
}
const bars = (g: Json) => kids(g).filter(isBar);
/** A run's own Text: its characters, and the runs inside it. */
const body = (g: Json) => kids(g).find((c) => c.type === 'Text')!;

function noMarks(n: Json) {
  expect(textOf(n)).not.toMatch(/[\u0305\u033f]/);
}

describe.each<Look>(['stix', 'pilot'])('the %s look', (look) => {
  it('NAND: one bar over the whole of A·B', () => {
    const tree = draw('<i>Y</i> = <i>A</i>\u0305·\u0305<i>B</i>\u0305', look);
    const [g, ...rest] = groups(tree);
    expect(rest).toEqual([]);
    expect(seen(g)).toBe('A·B');
    expect(bars(g)).toHaveLength(1);
    expect(groups(body(g))).toEqual([]);
    expect(seen(tree)).toBe('Y = A·B');
    noMarks(tree);
  });

  it('A̅ · B̅: separately barred letters keep bars of their own', () => {
    const tree = draw('<i>A</i>\u0305 · <i>B</i>\u0305', look);
    const gs = groups(tree);
    expect(gs.map(seen)).toEqual(['A', 'B']);
    gs.forEach((g) => expect(bars(g)).toHaveLength(1));
    noMarks(tree);
  });

  it('A̿·̅B̿: one bar over A·B, above a bar over A and a bar over B', () => {
    const tree = draw('<i>A</i>\u033f·\u0305<i>B</i>\u033f = <i>A</i> + <i>B</i>', look);
    const [g, ...rest] = groups(tree);
    expect(rest).toEqual([]);
    expect(seen(g)).toBe('A·B');
    expect(bars(g)).toHaveLength(1);
    const inner = groups(body(g));
    expect(inner.map(seen)).toEqual(['A', 'B']);
    inner.forEach((x) => expect(bars(x)).toHaveLength(1));
    // Both Views stand on the same baseline, so a smaller `top` is higher: the long (outer) bar is above.
    const outerTop = styleOf(bars(g)[0]).top as number;
    inner.forEach((x) => expect(styleOf(bars(x)[0]).top as number).toBeGreaterThan(outerTop));
    noMarks(tree);
  });

  it('A̿: two bars over one letter, drawn by one run', () => {
    const tree = draw('<i>A</i>\u033f = <i>A</i>', look);
    const [g] = groups(tree);
    expect(seen(g)).toBe('A');
    expect(bars(g)).toHaveLength(2);
    noMarks(tree);
  });

  it('three levels (Physics 12 Ch 14, XOR from NANDs): Y = (Ā̄̄B̄̄ · ĀB̄̄̄)‾', () => {
    // content/textbooks/phy-12-14/extras-c-e.ts: A carries 3, B 2, · 1, A 2, B 3.
    const tree = draw('<i>Y</i> = <i>A</i>\u033f\u0305<i>B</i>\u033f·\u0305<i>A</i>\u033f<i>B</i>\u033f\u0305', look);
    const [g, ...rest] = groups(tree);
    expect(rest).toEqual([]);
    expect(seen(g)).toBe('AB·AB');
    expect(bars(g)).toHaveLength(1);
    const two = groups(body(g));
    expect(two.map(seen)).toEqual(['AB', 'AB']);
    const three = two.map((x) => groups(body(x)));
    expect(three.map((x) => x.map(seen))).toEqual([['A'], ['B']]);
    // Each level higher than the one inside it.
    const top = (x: Json) => styleOf(bars(x)[0]).top as number;
    expect(top(two[0])).toBeGreaterThan(top(g));
    expect(top(three[0][0])).toBeGreaterThan(top(two[0]));
    noMarks(tree);
  });

  it('a barred subscript belongs to the run: T̅₁̅·̅T̅₂̅ is one bar', () => {
    const tree = draw('<i>T</i>\u0305<sub>1\u0305</sub>·\u0305<i>T</i>\u0305<sub>2\u0305</sub>', look);
    const [g, ...rest] = groups(tree);
    expect(rest).toEqual([]);
    expect(seen(g)).toBe('T₁·T₂');
    expect(bars(g)).toHaveLength(1);
    noMarks(tree);
  });

  it('a bar ending on a barred subscript and an unbarred letter after it: T̅₃̅ = A', () => {
    const tree = draw('<i>T</i>\u0305<sub>3\u0305</sub> = <i>A</i>\u0305+\u0305<i>B</i>\u0305', look);
    expect(groups(tree).map(seen)).toEqual(['T₃', 'A+B']);
    noMarks(tree);
  });
});

it('a barred run is held to the letter beside it (no line break in A̅B), not to a space', () => {
  const tree = draw('<i>Y</i> = <i>AB</i>\u0305 + <i>A</i>\u0305<i>B</i>');
  const text = textOf(tree);
  // "AB̅": B is barred, A is not, so A and B̅ are held together; "A̅B": the same.
  expect(groups(tree).map(seen)).toEqual(['B', 'A']);
  expect(text).toContain('A\u2060');
  expect(text).toContain('\u2060B');
  expect(text).not.toContain(' \u2060');
});

it('bars are the text’s ink, and leave every other string alone', () => {
  const tree = draw('<i>A</i>\u0305·\u0305<i>B</i>\u0305');
  expect(styleOf(bars(groups(tree)[0])[0]).backgroundColor).toBe('#1C1A16');
  expect(groups(draw('<i>A</i> · <i>B</i> = <i>x</i><sup>2</sup>'))).toEqual([]);
});

describe('the levels behind the drawing (lib/overline.ts)', () => {
  it('a level-k bar spans each run of characters with k bars or more', () => {
    expect(overRuns([2, 1, 2])).toEqual([
      { level: 1, start: 0, end: 3 },
      { level: 2, start: 0, end: 1 },
      { level: 2, start: 2, end: 3 },
    ]);
    expect(overRuns([1, 0, 1])).toEqual([
      { level: 1, start: 0, end: 1 },
      { level: 1, start: 2, end: 3 },
    ]);
  });
  it('a hair space the app adds inside a run does not cut its bar', () => {
    expect(spreadOverGlue([1, 0, 1], [false, true, false])).toEqual([1, 1, 1]);
    expect(spreadOverGlue([1, 0, 0], [false, true, false])).toEqual([1, 0, 0]);
  });
});

describe('a mass and atomic number before a symbol stack (Physics 12 Ch 13)', () => {
  /** The stacked pairs' Views: their style says which side they align to. */
  const pairs = (tree: Json) => {
    const out: Json[] = [];
    const walk = (n: Json) => {
      const s = styleOf(n);
      if (n.type === 'View' && (s.alignItems === 'flex-end' || s.alignItems === 'flex-start') && kids(n).length === 2) out.push(n);
      kids(n).forEach(walk);
    };
    walk(tree);
    return out;
  };

  it('the neutron ¹₀n, before an italic n, stacks flush right like ²³⁵₉₂U', () => {
    const tree = draw('<sup>1</sup><sub>0</sub><i>n</i> + <sup>235</sup><sub>92</sub>U →', 'pilot');
    const ps = pairs(tree);
    expect(ps.map(seen)).toEqual(['10', '23592']);
    ps.forEach((p) => expect(styleOf(p).alignItems).toBe('flex-end'));
  });

  it('m_e²c keeps its scripts after their base: a stacked pair, not a pre-script', () => {
    const ps = pairs(draw('<i>m</i><sub>e</sub><sup>2</sup><i>c</i>', 'pilot'));
    expect(ps.map(seen)).toEqual(['2e']);
    expect(styleOf(ps[0]).alignItems).toBe('flex-start');
  });

  it('v₀²t keeps STIX’s own raised and lowered digits, unstacked', () => {
    const tree = draw('<i>v</i><sub>0</sub><sup>2</sup><i>t</i>', 'pilot');
    expect(pairs(tree)).toEqual([]);
    expect(seen(tree)).toBe('v₀²t');
  });
});
