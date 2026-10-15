import chapter from '@/content/textbooks/phy-11-01-units-measurements';
import { buildFormulaCards } from '@/lib/revise/formula-cards';

/** The formula sheet's cards for Physics 11, Chapter 1: one shape, every card. */
describe('formula cards, Physics 11 Chapter 1', () => {
  const cards = buildFormulaCards(chapter);

  it('makes one card per formula block', () => {
    expect(cards.map((c) => c.name)).toEqual([
      'The conversion master relation',
      'The two supplementary units',
      'The principle of homogeneity',
      'The combination rules',
      'The two arithmetic rules',
      'The vernier callipers',
      'The screw gauge',
      'Parallax, and angular size',
      'Echo methods, and the monolayer',
    ]);
  });

  it('breaks a formula only before an operator', () => {
    for (const c of cards) for (const it of c.items) if (!it.words) expect(it.expr).not.toMatch(/ (?![=+−⟹≈])/);
  });

  it('sets rules written as sentences as text', () => {
    const rules = cards.find((c) => c.name === 'The two arithmetic rules')!;
    expect(rules.items.filter((i) => i.words)).toHaveLength(3);
  });

  it('writes the vernier and screw gauge the way lab manuals do', () => {
    const v = cards.find((c) => c.name === 'The vernier callipers')!;
    expect(v.items.map((i) => i.expr.replace(/ /g, ' '))).toContain('reading = MSR + VSR × LC');
    expect(v.meaning.map((m) => m.sym)).toContain('VSR');
  });

  it('keeps every meaning to one clause', () => {
    for (const c of cards) for (const m of c.meaning) expect(m.text.replace(/<[^>]+>/g, '')).not.toMatch(/\. [A-Z]/);
  });

  it('leaves no shouted capitals', () => {
    for (const c of cards) for (const m of c.meaning) expect(m.text).not.toMatch(/\b(SIZES|ADDED|WRONG|RELATIVE|POSITION|ONE|BEFORE|IN)\b/);
  });
});
