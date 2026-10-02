/**
 * A SCRIPT UNICODE CANNOT SPELL IS DRAWN ON THE BOARD, NOT WRITTEN OUT FLAT.
 *
 * `latexToText` has no subscript c, q, g or β, so it wrote such scripts out
 * flat: a live Ampère class (2026-10-02) showed "∮ B · dl = μ₀ I_(enc)" in its
 * formula box, and 1,032 stored formula lines did the same ("θ_β",
 * "lim_(h → 0⁺)", "P_(avg)"). The board now draws those lines with MathLine,
 * as every solution already is, and leaves every other line on its one Text.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import type { BoardEvent } from '@/lib/drona-voice-client';

import { BoardBlockView } from '../board-text';

type Json = TestRenderer.ReactTestRendererJSON;

function draw(event: BoardEvent) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(
      <BoardBlockView event={event} diagramBox={{ availableWidth: 900, maxHeight: 430 }} />
    );
  });
  return r.toJSON();
}

function nodes(json: ReturnType<typeof draw>): Json[] {
  const out: Json[] = [];
  const walk = (n: Json) => {
    out.push(n);
    for (const c of n.children ?? []) if (c && typeof c === 'object') walk(c as Json);
  };
  (Array.isArray(json) ? json : json ? [json] : []).forEach(walk);
  return out;
}

/** Every string in the tree, concatenated in order. */
function textOf(json: ReturnType<typeof draw>): string {
  let s = '';
  const walk = (n: Json) => {
    for (const c of n.children ?? []) {
      if (typeof c === 'string') s += c;
      else if (c) walk(c as Json);
    }
  };
  (Array.isArray(json) ? json : json ? [json] : []).forEach(walk);
  return s;
}

/** The Text nodes holding exactly `text` that are shifted off the baseline. */
function scripts(json: ReturnType<typeof draw>, text: string): Json[] {
  return nodes(json).filter((n) => {
    if (n.type !== 'Text' || (n.children ?? []).join('') !== text) return false;
    const style = StyleSheet.flatten(n.props.style as never) as { transform?: unknown[] } | undefined;
    return Array.isArray(style?.transform) && style.transform.length > 0;
  });
}

test("Ampère's law: I_enc is I with a drawn subscript, never I_(enc)", () => {
  const json = draw({ seq: 4, type: 'formula', latex: '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}' });
  expect(textOf(json)).not.toContain('_(');
  expect(textOf(json)).toContain('μ₀');
  expect(scripts(json, 'enc')).toHaveLength(1);
});

test('a script Unicode can spell stays one Text, as before', () => {
  const json = draw({ seq: 4, type: 'formula', latex: 'F = q_m B' });
  const texts = nodes(json).filter((n) => n.type === 'Text');
  expect(texts).toHaveLength(1);
  expect(textOf(json)).toBe('F = qₘ B');
});

test('a Greek subscript and a fraction in one formula are both drawn', () => {
  const json = draw({ seq: 4, type: 'formula', latex: '\\theta_{\\beta} = \\dfrac{\\beta}{D}' });
  expect(textOf(json)).not.toContain('θ_β');
  expect(scripts(json, 'β')).toHaveLength(1);
});

test('a prose line with maths in it is drawn, and its spacing stays on a box', () => {
  const json = draw({ seq: 5, type: 'text', text: 'Average power is $P_{avg} = V I \\cos\\phi$ here.' });
  expect(textOf(json)).not.toContain('P_(avg)');
  expect(scripts(json, 'avg')).toHaveLength(1);
  // The box carries the 20pt above the line; no word carries a margin.
  const words = nodes(json).filter((n) => n.type === 'Text');
  for (const w of words) {
    const style = StyleSheet.flatten(w.props.style as never) as { marginTop?: number } | undefined;
    expect(style?.marginTop ?? 0).toBe(0);
  }
});

test('a plain prose line is one Text with the body style, unchanged', () => {
  const json = draw({ seq: 5, type: 'text', text: 'Only enclosed current counts.' });
  const texts = nodes(json).filter((n) => n.type === 'Text');
  expect(texts).toHaveLength(1);
  const style = StyleSheet.flatten(texts[0].props.style as never) as { marginTop?: number };
  expect(style.marginTop).toBe(20);
});
