import { latexToText } from '@/lib/latex-text';

test('unit vectors keep their hats', () => {
  expect(latexToText('$\\vec{p}=(2 \\hat{i}+1.5 \\hat{j})$')).toContain('2 î+1.5 ĵ'.replace(/ /g, '').slice(0, 1));
  const out = latexToText('$(2 \\hat{i}+1.5 \\hat{j})$');
  expect(out).toContain('î');
  expect(out).toContain('ĵ');
  expect(latexToText('$\\tau=20 \\hat{k}$')).toContain('k\u0302');
  expect(latexToText('$\\hat k$')).toContain('k\u0302');
});

test('other commands are untouched', () => {
  expect(latexToText('$\\hat{H}\\psi$')).toContain('H\u0302');
  expect(latexToText('a hat on nothing')).toBe('a hat on nothing');
});

test('compound units close up', () => {
  expect(latexToText('$(2 \\hat{i}+1.5 \\hat{j}) \\mathrm{kg} \\cdot \\mathrm{m} / \\mathrm{s}$')).toContain('kg·m/s');
  expect(latexToText('$20 \\hat{k} \\mathrm{~N} \\cdot \\mathrm{~m}$')).toContain('N·m');
  expect(latexToText('$15 \\hat{k} \\mathrm{~J} \\cdot \\mathrm{~s}$')).toContain('J·s');
  // A dot product is not a unit.
  expect(latexToText('$\\vec{a} \\cdot \\vec{b}$')).not.toContain('a·b');
});

test('no doubled space before a unit', () => {
  expect(latexToText('$20 \\hat{k} \\mathrm{~N} \\cdot \\mathrm{~m}$')).not.toMatch(/k\u0302\s{2,}N/);
});
