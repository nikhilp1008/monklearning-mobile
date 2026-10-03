/**
 * A DRAWN LINE KEEPS EVERY OPERATOR IT WAS GIVEN.
 *
 * A takeaway "ρ_T = ρ₀[1 + α(T - T₀)] approximates …" is a row of words once a script is drawn
 * in it; on the simulator its "+" was missing while its "-" was there.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { MathLine } from '../math-line';

function textOf(json: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): string {
  let s = '';
  const walk = (n: TestRenderer.ReactTestRendererJSON | string) => {
    if (typeof n === 'string') { s += n; return; }
    for (const c of n.children ?? []) walk(c as never);
  };
  (Array.isArray(json) ? json : json ? [json] : []).forEach((n) => walk(n as never));
  return s;
}

function draw(text: string) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<MathLine text={text} fontSize={14.5} color="#000" />);
  });
  return textOf(r.toJSON());
}

test('a plus and a minus survive in a line with a drawn script', () => {
  const out = draw('The linear law ρ_T = ρ₀[1 + α(T - T₀)] approximates resistivity.');
  expect(out).toContain('+');
  expect(out).toContain('-');
});

test('the same line without a drawn script is unchanged', () => {
  expect(draw('ρ₀[1 + α(T - T₀)]')).toBe('ρ₀[1 + α(T - T₀)]');
});
