/**
 * "ArF" printed "M 58.95" on a stored Class 12 chemistry widget (2026-10-23):
 * `Ar` is argon in the atomic-mass table, so the aryl group read as the noble
 * gas and the readout gave the mass of an argon-fluorine pair. Aryl labels have
 * no molar mass; the real formulas still do.
 */
import { molarMass } from '../scheme-graph';

describe('aryl labels are not formulas', () => {
  for (const label of ['ArF', 'ArCl', 'ArBr', 'ArI', 'ArOH', 'ArN2', 'Ar(N2)']) {
    test(`${label} has no molar mass`, () => expect(molarMass(label)).toBe(0));
  }
  test('real formulas are unchanged', () => {
    expect(molarMass('C6H5Cl')).toBeCloseTo(112.56, 1);
    expect(molarMass('CH3Br')).toBeCloseTo(94.94, 1);
    expect(molarMass('C4H10')).toBeCloseTo(58.12, 1);
  });
  test('argon on its own still has its mass', () => expect(molarMass('Ar')).toBeCloseTo(39.95, 2));
});
