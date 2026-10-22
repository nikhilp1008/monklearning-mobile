/**
 * Notes keep a line's original markup so a subscript Unicode cannot write
 * (v_{AB}, v_{rms}) is drawn, not shown as the plain-text "v_(AB)".
 */
import { hasDrawnScripts } from '@/components/script-text';
import { latexToText } from '@/lib/latex-text';

jest.mock('@/components/math-line', () => ({ MathLine: () => null }));

it('knows a relative-velocity line needs drawing, and plain prose does not', () => {
  expect(hasDrawnScripts('v_{AB} = v_{A} − v_{B}')).toBe(true);
  expect(hasDrawnScripts('L_{f} and F_{b}')).toBe(true); // no subscript f or b in Unicode
  // r, m, s exist as Unicode subscripts: written, not drawn.
  expect(hasDrawnScripts('v_{rms} = √(3RT/M)')).toBe(false);
  expect(latexToText('v_{rms}')).toBe('vᵣₘₛ');
  expect(hasDrawnScripts('The car moves at 20 m/s.')).toBe(false);
  expect(hasDrawnScripts(undefined)).toBe(false);
});

it('is exactly the case the plain-text path gets wrong', () => {
  expect(latexToText('v_{AB}')).toBe('v_(AB)');
});
