/** One long board item is written as the rows a teacher would write. */
import { formulaSteps, paceSteps, sentenceSteps, toSteps } from '@/lib/board-steps';

jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));

it('writes a derivation chain one step under the other', () => {
  expect(formulaSteps('τ = r (F sin θ) = (r sin θ) F = r⊥ F')).toEqual([
    'τ = r (F sin θ)',
    '= (r sin θ) F',
    '= r⊥ F',
  ]);
});

it('keeps a single equation whole, and ignores = inside brackets', () => {
  expect(formulaSteps('Size of the torque: τ = r F sin θ (unit N·m)')).toBeNull();
  expect(formulaSteps('f(x = 2) = 5')).toBeNull();
});

it('splits a long note into its sentences, never at a decimal point', () => {
  const note =
    'A force along the line through O has θ = 0° or 180°, so sin θ = 0 and the torque is zero, like pushing a door at its hinge. Also sin θ = sin (180° − θ): 150° and 30° give the same torque.';
  const steps = sentenceSteps(note)!;
  expect(steps).toHaveLength(2);
  expect(steps[1].startsWith('Also sin θ')).toBe(true);
  expect(sentenceSteps('Spanner example: r = 0.25 m from the bolt O, with F = 40 N at θ = 30° to the handle.')).toBeNull();
});

it('marks formula steps and leaves headings and short lines alone', () => {
  const rows = toSteps({ seq: 5, type: 'formula', text: 'a = b = c' } as never);
  expect(rows.map((r) => r.step)).toEqual(['first', 'cont']);
  expect(toSteps({ seq: 1, type: 'heading', text: 'Torque. The turning effect of a force, defined.' } as never)).toHaveLength(1);
});

it('shares one write budget across the rows, in order', () => {
  const rows = toSteps({ seq: 5, type: 'formula', text: 'τ = r (F sin θ) = (r sin θ) F = r⊥ F' } as never);
  const pace = paceSteps(rows, { delayMs: 1000, ms: 3000 });
  expect(pace[0].delayMs).toBe(1000);
  expect(pace[1].delayMs).toBeGreaterThan(pace[0].delayMs);
  expect(pace[2].delayMs).toBeGreaterThan(pace[1].delayMs);
  expect(paceSteps(rows, undefined).map((p) => p.delayMs)).toEqual([0, 700, 1400]);
});
