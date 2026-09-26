/**
 * BACK-COMPAT: an OLD client meeting a widget it has never heard of.
 *
 * WHAT THIS TESTS AND WHAT IT DOES NOT. It tests the DISPATCH DECISION —
 * `lookup(id, version)`, which is the single point at which the client
 * decides whether it can draw a payload. It does not render `BoardWidget`:
 * that pulls the whole native tree in and an ad-hoc renderer for it errors
 * inside `Svg` for reasons that have nothing to do with back-compat. A
 * fixture that crashed for an unrelated reason and then reported a blank
 * board would be evidence of nothing.
 *
 * The rest of the path is short enough to state exactly, with references:
 *
 *   tutor.py:1934  a slot-1 turn appends
 *                  {"seq", "type": "diagram", "payload": _precomputed_widget}
 *                  — a payload and NO `svg`. A diagram event carries one or
 *                  the other and never both; tutor.py says so where it
 *                  materialises templates: "A field_lines event carries
 *                  `payload`, never `template` or `svg`".
 *   BoardWidget    on a lookup miss: onGap('unknown_widget'), resolved = null
 *   BoardWidget:221  if (!resolved) { if (event.svg) <SvgXml/>; return null; }
 *
 * With no `svg` on the event, that last line returns null — a blank board.
 */
import { lookup, REGISTRY } from '../registry';

/** The 19 Sep registry: comparison_table landed 20 Sep in f5ff1c3. */
const ON_19_SEP = Object.keys(REGISTRY).filter(
  (id) => !['comparison_table', 'lcr_resonance', 'vector_sum',
            'flux_surface', 'region_plot'].includes(id));

function lookupIn(ids: string[], id: string, version: number) {
  // `lookup` reads the module REGISTRY, so an old client is modelled by asking
  // whether the id is in that client's id list first — which is exactly what
  // `lookup`'s own first line does: `REGISTRY[id]; if (!mod) return null`.
  return ids.includes(id) ? lookup(id, version) : null;
}

describe('the client decides on id AND version, and has no other input', () => {
  test('the 19 Sep client does not have comparison_table', () => {
    // Vacuity guard: if this list stopped being a real subset the rest of the
    // file would be asserting about the current client.
    expect(ON_19_SEP).not.toContain('comparison_table');
    expect(ON_19_SEP.length).toBeGreaterThan(8);
    expect(Object.keys(REGISTRY)).toContain('comparison_table');
  });

  test('a comparison_table payload MISSES on that client', () => {
    expect(lookupIn(ON_19_SEP, 'comparison_table', 1)).toBeNull();
  });

  test('a newer VERSION of a widget it has also misses', () => {
    // The premise names versions too. `lookup` returns null when the payload
    // targets a version ABOVE the module's, so xy_plot@99 misses on a client
    // carrying xy_plot@3 — the same outcome by the same line.
    expect(lookup('xy_plot', 99)).toBeNull();
    expect(lookup('xy_plot', 1)).not.toBeNull();   // older is fine, by design
  });

  test('and the CURRENT client resolves the same payload', () => {
    // The other half: nothing about the payload is wrong. It is the client's
    // registry, and only that, which decides.
    expect(lookup('comparison_table', 1)).not.toBeNull();
  });
});

describe('what the decision is NOT made from', () => {
  test('lookup takes an id and a version, and nothing else', () => {
    // There is no capability negotiation anywhere on this path: the client
    // never sends its registry to the server, and the server's
    // `resolve_board_slot(precomputed_widget, archetype_widget,
    // illustration_asset, precomputed_svg, widget_allowed)` has no parameter
    // for it. `widget_allowed` is the per-CHAPTER sane hold-back, not a
    // per-client check.
    //
    // This assertion is small and its point is the comment above it: the
    // signature is the whole interface, and it is two strings' worth of
    // information.
    expect(lookup.length).toBe(2);
  });
});
