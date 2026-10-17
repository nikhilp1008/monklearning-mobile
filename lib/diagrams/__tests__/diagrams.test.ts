import { audit } from '@/lib/diagrams/kit';
import { DIAGRAMS_PHYSICS_11_01 } from '@/lib/diagrams/physics-11-01';

/**
 * Every diagram, every case: the physics behind it recomputed, and the
 * drawing laid out so that nothing covers anything it should not. A drawing
 * that fails either one teaches the wrong thing, so neither is optional.
 */
describe('Physics 11, Chapter 1 diagrams', () => {
  for (const d of DIAGRAMS_PHYSICS_11_01) {
    for (const c of d.cases) {
      describe(`${d.name} · ${c.chip}`, () => {
        it('says the right thing', () => {
          const failed = d.check(c).filter(([, ok]) => !ok).map(([t]) => t);
          expect(failed).toEqual([]);
        });
        it('is laid out clear', () => {
          const s = d.draw(c);
          expect(audit(s)).toEqual([]);
        });
        it('names every part on the drawing itself', () => {
          expect(d.draw(c).unplaced.map((u) => u.t)).toEqual([]);
        });
      });
    }
  }
});
