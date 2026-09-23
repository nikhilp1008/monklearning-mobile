/**
 * P4 — the same board twice is one board.
 *
 * The directive's fixture is the first test here: three segments on one plate
 * must be ONE draw and TWO group reveals.
 */
import {
  applyContinuity, boardRowKey, boardSignature, collapseBoards, drawCount,
  revealOf, type ContinuityEvent,
} from '../board-continuity';

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

  test('every reveal key is excluded from the signature, by name', () => {
    // One assertion per widget that has a reveal, because a key missing from
    // REVEAL_KEYS silently reintroduces the flicker for that widget only —
    // the kind of gap that survives a spot check.
    const cases: [string, string, unknown, unknown][] = [
      ['data_table_trend', 'highlight_row', -1, 2],
      ['comparison_table', 'highlight', null, [0, 1]],
      ['process_flow', 'active_node', -1, 3],
      ['reaction_scheme', 'highlight_step', -1, 1],
      ['lcr_resonance', 'probe_rel', 1.0, 1.2],
      ['circuit_network', 't_frac', 0, 0.5],
    ];
    for (const [widget, key, before, after] of cases) {
      const mk = (v: unknown): ContinuityEvent => ({
        seq: 1, type: 'diagram',
        payload: { widget, version: 1, params: { shared: 'x', [key]: v } } });
      expect(boardSignature(mk(before))).toBe(boardSignature(mk(after)));
    }
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
