import { DIAGRAMS } from '@/lib/diagrams';
import { audit } from '@/lib/diagrams/kit';

/**
 * Every diagram of every chapter, every case: the physics behind it
 * recomputed, and the drawing laid out so that nothing covers anything it
 * should not. A drawing that fails either one teaches the wrong thing, so
 * neither is optional.
 */
for (const [chapter, list] of Object.entries(DIAGRAMS)) {
  describe(`${chapter} diagrams`, () => {
    it('have ids no other diagram uses', () => {
      const ids = Object.values(DIAGRAMS).flat().map((d) => d.id);
      expect(list.filter((d) => ids.indexOf(d.id) !== ids.lastIndexOf(d.id)).map((d) => d.id)).toEqual([]);
    });
    for (const d of list) {
      for (const c of d.cases) {
        describe(`${d.name} · ${c.chip}`, () => {
          it('says the right thing', () => {
            const failed = d.check(c).filter(([, ok]) => !ok).map(([t]) => t);
            expect(failed).toEqual([]);
          });
          it('is laid out clear', () => {
            expect(audit(d.draw(c))).toEqual([]);
          });
          it('names every part on the drawing itself', () => {
            expect(d.draw(c).unplaced.map((u) => u.t)).toEqual([]);
          });
        });
      }
    }
  });
}
