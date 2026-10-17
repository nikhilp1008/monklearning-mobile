import ch1 from '@/content/textbooks/phy-11-01-units-measurements';
import ch2 from '@/content/textbooks/phy-11-02-motion-straight-line';
import ch3 from '@/content/textbooks/phy-11-03-motion-plane';
import ch4 from '@/content/textbooks/phy-11-04-laws-of-motion';
import { buildFormulaCards } from '@/lib/revise/formula-cards';

/**
 * The formula sheet's cards: one shape, every card, in every chapter that
 * opens on its formula sheet.
 */
for (const chapter of [ch1, ch2, ch3, ch4]) {
  describe(`formula cards, Physics 11 Chapter ${Number(chapter.chapter)}`, () => {
    const cards = buildFormulaCards(chapter);
    const formulaBlocks = chapter.topics.flatMap((t) => t.blocks).filter((b) => b.t === 'formula').length;

    it('makes one card per formula block', () => {
      expect(cards).toHaveLength(formulaBlocks);
    });

    it('names every card', () => {
      for (const c of cards) expect(c.name.trim()).not.toBe('');
    });

    it('breaks a formula only before an operator', () => {
      for (const c of cards) for (const it of c.items) if (!it.words) expect(it.expr).not.toMatch(/ (?![=+−⟹≈])/);
    });

    it('keeps every meaning to one clause', () => {
      for (const c of cards) for (const m of c.meaning) expect(m.text.replace(/<[^>]+>/g, '')).not.toMatch(/\. [A-Z]/);
    });

    it('leaves no shouted capitals', () => {
      for (const c of cards) for (const m of c.meaning) expect(m.text).not.toMatch(/\b(SIZES|ADDED|WRONG|RELATIVE|POSITION|ONE|BEFORE|IN)\b/);
    });
  });
}
