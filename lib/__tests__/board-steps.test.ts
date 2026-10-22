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

it('never splits inside brackets, after an abbreviation or a list number', () => {
  expect(
    sentenceSteps('Taxonomic category = a rank or level in the hierarchy (e.g. Genus, Family, Class). It is abstract and names no organism.')
  ).toEqual([
    'Taxonomic category = a rank or level in the hierarchy (e.g. Genus, Family, Class).',
    'It is abstract and names no organism.',
  ]);
  expect(
    sentenceSteps('1. Gene flow (gene migration): alleles are added to or lost from a population as individuals migrate in or out.')
  ).toBeNull();
  expect(
    sentenceSteps('The general formula is Ar-N₂⁺ X⁻, where X⁻ is Cl⁻, HSO₄⁻ etc. and the counter-ion varies widely. See Fig. 3 for the structure here.')
  ).toEqual([
    'The general formula is Ar-N₂⁺ X⁻, where X⁻ is Cl⁻, HSO₄⁻ etc. and the counter-ion varies widely.',
    'See Fig. 3 for the structure here.',
  ]);
});

it('still splits a sentence that ends in a number', () => {
  expect(
    sentenceSteps('Test y = 0: the line gives x = 2, the parabola gives x = 0. So the line is the right curve and the parabola the left one.')
  ).toHaveLength(2);
});

it('keeps a label or an initial with the sentence after it', () => {
  expect(
    sentenceSteps('Postulate 1. The electron moves in circular orbits of fixed energy around the nucleus without radiating any energy.')
  ).toBeNull();
});
