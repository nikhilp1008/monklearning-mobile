/**
 * P4 — the same board twice is one board.
 *
 * The directive's fixture is the first test here: three segments on one plate
 * must be ONE draw and TWO group reveals.
 */
import {
  applyContinuity, boardRowKey, boardSignature, collapseBoards, drawCount,
  REVEAL_KEYS, revealOf, type ContinuityEvent,
} from '../board-continuity';
import { REGISTRY, REGISTRY_MANIFEST } from '../registry';

const plate = (seq: number, group: string): ContinuityEvent => ({
  seq, type: 'diagram', tier: 'precomputed',
  payload: {
    widget: 'labelled_figure', version: 1,
    params: { asset_slug: 'frog--b', active_group: group, lang: 'en' },
  },
});

describe('THE FIXTURE: three segments on one plate', () => {
  const run = [plate(1, 'skeleton'), plate(2, 'digestive'), plate(3, 'circulatory')];

  test('one draw', () => {
    expect(drawCount(run)).toBe(1);
  });

  test('...and two group reveals after it', () => {
    const [board] = collapseBoards(run);
    expect(board.reveals).toHaveLength(3);          // the draw's own, then two
    expect(board.reveals.map((r) => r.active_group))
      .toEqual(['skeleton', 'digestive', 'circulatory']);
    expect(board.seqs).toEqual([1, 2, 3]);
  });

  test('the board that DRAWS is the first of the run', () => {
    // Not the last. The plate appears when the first sentence about it does.
    expect(collapseBoards(run)[0].event.seq).toBe(1);
  });
});

describe('what counts as the same picture', () => {
  test('a changed GROUP does not redraw', () => {
    expect(boardSignature(plate(1, 'a'))).toBe(boardSignature(plate(2, 'b')));
  });

  test('a changed PLATE does', () => {
    const other = plate(2, 'a');
    other.payload!.params!.asset_slug = 'cockroach--a';
    expect(boardSignature(plate(1, 'a'))).not.toBe(boardSignature(other));
  });

  test('a changed VERSION does', () => {
    const v2 = plate(2, 'a');
    v2.payload!.version = 2;
    expect(boardSignature(plate(1, 'a'))).not.toBe(boardSignature(v2));
  });

  test('key ORDER in params does not', () => {
    // Two payloads that differ only in JSON key order are one picture, and a
    // naive JSON.stringify would call them two.
    const a: ContinuityEvent = { seq: 1, type: 'diagram', payload: {
      widget: 'xy_plot', version: 4, params: { a: 1, b: 2, curve: 'line' } } };
    const b: ContinuityEvent = { seq: 2, type: 'diagram', payload: {
      widget: 'xy_plot', version: 4, params: { curve: 'line', b: 2, a: 1 } } };
    expect(boardSignature(a)).toBe(boardSignature(b));
    expect(drawCount([a, b])).toBe(1);
  });

});

/**
 * This block used to be six HAND-WRITTEN cases, one per widget that had a
 * reveal. A hand-written list cannot fail for the key nobody thought of, and
 * that is how it failed: an audit found SEVEN animatable params with no entry
 * in REVEAL_KEYS — `molecule_struct.highlight_site`, `circuit_network.
 * bridge_delta`, xy_plot's three, `lcr_resonance.r_ohm` and
 * `projectile_motion.launch_angle_deg` — while all six hand-written cases
 * stayed green, because every one of them was a key somebody had already
 * remembered. Derived from REGISTRY_MANIFEST, an unclassified animatable param
 * fails HERE, on the commit that registers the widget.
 *
 * `animatable` is the right list to derive from because it is exactly the set
 * of params a cue may move CONTINUOUSLY — move one and the widget is expected
 * to still be the same widget, mid-tween, or the tween is meaningless.
 */
describe('reveal completeness, derived from the registry', () => {
  const animatable = REGISTRY_MANIFEST.flatMap(({ id, animatable: keys }) =>
    keys.map((key) => ({ id, key: key as string })));

  /**
   * Animatable params that are the picture's IDENTITY, so they must NOT be
   * reveal keys. Every entry states why, because an unexplained entry here is
   * indistinguishable from a REVEAL_KEY somebody forgot — which is the failure
   * this whole block exists to catch.
   */
  const IDENTITY_NOT_REVEAL: Record<string, string> = {
    // conic_plot, all four. An ellipse with different semi-axes is a different
    // conic, not the same conic with something lit up; collapsing them would
    // keep the first event's curve on the board while the readout it carries
    // (area, eccentricity) described the second one's.
    a: 'conic_plot: semi-axis',
    b: 'conic_plot: semi-axis',
    cx: 'conic_plot: centre',
    line_c: "conic_plot: the chord's offset",
  };

  /**
   * Reveals that SNAP, and therefore cannot be derived from any `animatable`
   * list. `comparison_table.highlight` is a box that has nothing to
   * interpolate through and `reaction_scheme.highlight_step` is an index;
   * labelled_figure is absent from REGISTRY altogether, deliberately — see
   * registry.ts's own comment: a plate names an asset an author prepared, it
   * is not a drawing the model fills parameters for. So these four are named
   * rather than derived, and `active_group` / `lang` being absent from the
   * manifest is NOT evidence that they are dead keys.
   */
  const SNAP_REVEALS: [string, string, unknown, unknown][] = [
    ['comparison_table', 'highlight', null, [0, 1]],
    ['reaction_scheme', 'highlight_step', -1, 1],
    ['labelled_figure', 'active_group', 'skeleton', 'digestive'],
    ['labelled_figure', 'lang', 'english', 'hinglish'],
  ];

  /** Two events alike but for `key`. Equal signatures = `key` is a reveal. */
  const collapsesOn = (widget: string, key: string, before: unknown, after: unknown) => {
    const mk = (v: unknown): ContinuityEvent => ({
      seq: 1, type: 'diagram',
      payload: { widget, version: 1, params: { shared: 'x', [key]: v } } });
    return boardSignature(mk(before)) === boardSignature(mk(after));
  };

  test('the manifest is actually being read', () => {
    // A derived suite that iterates an empty list passes every assertion below
    // for the wrong reason, which is the way a derived check rots.
    expect(REGISTRY_MANIFEST.length).toBeGreaterThan(10);
    expect(animatable.map((c) => `${c.id}.${c.key}`))
      .toContain('molecule_struct.highlight_site');
  });

  test('every animatable param is a reveal, or excluded on purpose', () => {
    const unclassified = animatable
      .filter(({ id, key }) =>
        !(key in IDENTITY_NOT_REVEAL) && !collapsesOn(id, key, 0, 1))
      .map(({ id, key }) => `${id}.${key}`);
    // Each of these redraws the board mid-cue. Add it to REVEAL_KEYS with a
    // comment, or to IDENTITY_NOT_REVEAL with the reason it is the picture.
    expect(unclassified).toEqual([]);
  });

  test('the excluded params really do redraw', () => {
    // Without this the exclusion list is a way to silence the check above.
    const wronglyCollapsing = animatable
      .filter(({ id, key }) => key in IDENTITY_NOT_REVEAL && collapsesOn(id, key, 0, 1))
      .map(({ id, key }) => `${id}.${key}`);
    expect(wronglyCollapsing).toEqual([]);
    expect(Object.keys(IDENTITY_NOT_REVEAL).sort()).toEqual(['a', 'b', 'cx', 'line_c']);
  });

  test('the snap reveals collapse too', () => {
    for (const [widget, key, before, after] of SNAP_REVEALS) {
      expect(collapsesOn(widget, key, before, after)).toBe(true);
    }
  });

  test('no reveal key is dead', () => {
    // A key left in REVEAL_KEYS after its widget renamed the param collapses
    // nothing and reads as covered. The forward check cannot see it: the new
    // name fails there, the old name just sits here looking deliberate.
    const registeredParams = new Set(
      Object.values(REGISTRY).flatMap((m) =>
        Object.keys((m as { defaults: object }).defaults)));
    const unregisteredWidgets = SNAP_REVEALS
      .filter(([widget]) => !(widget in REGISTRY))
      .map(([, key]) => key);
    const dead = [...REVEAL_KEYS].filter(
      (key) => !registeredParams.has(key) && !unregisteredWidgets.includes(key));
    expect(dead).toEqual([]);
  });
});

describe('what it will NOT collapse', () => {
  test('non-consecutive repeats redraw the plate', () => {
    // A plate, a graph, the same plate again. The student looked away, so
    // the redraw is honest — and the count is THREE, not two: the graph is a
    // draw of its own. (This expectation said two on the first pass, which
    // was me counting the plate's draws and calling it the total.)
    const graph: ContinuityEvent = { seq: 2, type: 'diagram', payload: {
      widget: 'xy_plot', version: 4, params: { curve: 'line', a: 1 } } };
    const runs = collapseBoards([plate(1, 'a'), graph, plate(3, 'a')]);
    expect(runs).toHaveLength(3);
    expect(runs.map((r) => r.event.seq)).toEqual([1, 2, 3]);
    // and the two plate runs are the SAME signature, separated
    expect(runs[0].signature).toBe(runs[2].signature);
    expect(runs[1].signature).not.toBe(runs[0].signature);
  });

  test('text events are never collapsed, however identical', () => {
    const line: ContinuityEvent = { seq: 1, type: 'text' };
    expect(boardSignature(line)).toBeNull();
    expect(collapseBoards([line, { ...line, seq: 2 }])).toEqual([]);
  });

  test('an event with no picture in it at all signs as null', () => {
    expect(boardSignature({ seq: 1, type: 'diagram' })).toBeNull();
  });

  test('two DIFFERENT svg strings are two boards', () => {
    const a: ContinuityEvent = { seq: 1, type: 'diagram', svg: '<svg>A</svg>' };
    const b: ContinuityEvent = { seq: 2, type: 'diagram', svg: '<svg>BB</svg>' };
    expect(drawCount([a, b])).toBe(2);
  });

  test('the SAME svg twice is one board', () => {
    const a: ContinuityEvent = { seq: 1, type: 'diagram', svg: '<svg>A</svg>' };
    expect(drawCount([a, { ...a, seq: 2 }])).toBe(1);
  });
});

describe('sequences carry their own reveal', () => {
  test('one sequence across three segments is one draw', () => {
    const steps = [{ caption: 'inside' }, { caption: 'outside' }];
    const e = (seq: number): ContinuityEvent => ({
      seq, type: 'diagram', payload: { kind: 'board_sequence', steps } });
    expect(drawCount([e(1), e(2), e(3)])).toBe(1);
  });

  test('a different set of steps is a different board', () => {
    const a: ContinuityEvent = { seq: 1, type: 'diagram', payload: {
      kind: 'board_sequence', steps: [{ caption: 'inside' }] } };
    const b: ContinuityEvent = { seq: 2, type: 'diagram', payload: {
      kind: 'board_sequence', steps: [{ caption: 'outside' }] } };
    expect(drawCount([a, b])).toBe(2);
  });
});

describe('revealOf carries only the reveal', () => {
  test('it drops everything that identifies the picture', () => {
    expect(revealOf(plate(1, 'skeleton'))).toEqual({
      active_group: 'skeleton', lang: 'en',
    });
  });
});


describe('applyContinuity — what actually goes on screen', () => {
  const line = (seq: number): ContinuityEvent => ({ seq, type: 'text' });

  test('THE FIXTURE, with board lines between the segments', () => {
    // The real shape: each segment writes lines AND a diagram, so the three
    // plate events are never literally adjacent. A rule that only collapsed
    // adjacent events would never fire in a class.
    const list = [plate(1, 'skeleton'), line(2), plate(3, 'digestive'),
                  line(4), plate(5, 'circulatory')];
    const out = applyContinuity(list);
    const diagrams = out.filter((e) => e.type === 'diagram');
    expect(diagrams).toHaveLength(1);
    expect(out).toHaveLength(3);                       // one plate + two lines
    // ...and the surviving plate shows the LATEST group
    expect(diagrams[0].payload!.params!.active_group).toBe('circulatory');
  });

  test('the plate keeps its ORIGINAL position in the list', () => {
    const out = applyContinuity([plate(1, 'a'), line(2), plate(3, 'b')]);
    expect(out[0].type).toBe('diagram');
    expect(out[0].seq).toBe(1);
  });

  test('a different picture is a new row', () => {
    const graph: ContinuityEvent = { seq: 3, type: 'diagram', payload: {
      widget: 'xy_plot', version: 4, params: { curve: 'line', a: 1 } } };
    expect(applyContinuity([plate(1, 'a'), line(2), graph])
      .filter((e) => e.type === 'diagram')).toHaveLength(2);
  });

  test('the row KEY survives a reveal change, so it animates', () => {
    // A key that moved would remount the plate, which is the flicker this
    // exists to remove.
    expect(boardRowKey(plate(1, 'a'), 0)).toBe(boardRowKey(plate(9, 'b'), 7));
    expect(boardRowKey(line(1), 0)).not.toBe(boardRowKey(line(1), 1));
  });

  test('it is a pure function of the list — no mutation', () => {
    const list = [plate(1, 'a'), plate(2, 'b')];
    const before = JSON.stringify(list);
    applyContinuity(list);
    expect(JSON.stringify(list)).toBe(before);
  });
});
