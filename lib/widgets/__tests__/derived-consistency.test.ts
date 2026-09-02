/**
 * Two declarations that can drift: `WidgetModule.derived` (a string list) and
 * `computeDerived` (whatever actually computes the values). Nothing in
 * TypeScript's type system catches the two disagreeing — `derived` could name
 * a key `computeDerived` never returns, or the reverse — so this asserts it
 * directly rather than trusting the two were kept in step by hand.
 *
 * A mismatch matters beyond bookkeeping: `use-cue-track`'s {{token}}
 * interpolation reads `computeDerived(params)` by the keys in `derived`
 * (docs/narration-diagram-alignment.md Rule 2). A `derived` key absent from
 * `computeDerived`'s output would silently drop that token from every caption
 * that uses it — the exact "unknown token" failure the runtime guard exists
 * for, except caused by the widget itself rather than a bad payload.
 *
 * Imports the registry directly (not each widget module individually) so a
 * new registry entry is covered automatically — the same reasoning as the
 * coverage guard in render-trees.test.tsx.
 */
import type { WidgetModule } from '../types';
import { REGISTRY } from '../registry';

for (const [id, entry] of Object.entries(REGISTRY)) {
  if (!entry) continue;
  // Each entry is internally consistent (its own `defaults` matches its own
  // `computeDerived`), but a union of two different `WidgetModule<P>`
  // instantiations is not something TS can call generically — widen to `any`
  // here rather than pretending the union has one shared P.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mod = entry as WidgetModule<any>;
  test(`${id}: derived matches what computeDerived actually returns`, () => {
    const values = mod.computeDerived(mod.defaults);
    expect(Object.keys(values).sort()).toEqual([...mod.derived].sort());
  });

  test(`${id}: every derivedAliases key names a real derived quantity`, () => {
    for (const key of Object.keys(mod.derivedAliases)) {
      expect(mod.derived).toContain(key);
    }
  });
}

test('the registry is not empty — a suite with nothing to check is not a passing suite', () => {
  expect(Object.keys(REGISTRY).length).toBeGreaterThan(0);
});
