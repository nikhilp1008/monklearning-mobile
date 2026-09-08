/**
 * The wire format, and the arithmetic the anchor editor depends on.
 *
 * The editor's whole claim is that a TAP becomes the anchor the renderer reads.
 * That holds only if the editor letterboxes the art exactly as `fitRect` does —
 * if the two disagree, every anchor an author places lands somewhere else on a
 * device, and the picture still renders, so nothing says so.
 */
import {
  LABEL_SET_SCHEMA_VERSION, SOLE_GROUP, isReviewed, resolveSide,
  toFigureRecord, validateLabelSet, type LabelSet,
} from '../label-set';
import { fitRect, anchorAt } from '../figure-layout';

const ART_W = 1600;
const ART_H = 1200;

const SET: LabelSet = {
  asset_slug: 'placeholder--generalised-plant-cell',
  image_w: ART_W,
  image_h: ART_H,
  schema_version: LABEL_SET_SCHEMA_VERSION,
  reviewed_by: 'raasikh',
  labels: [
    { id: 'l1', text: { en: 'Nucleus', hi: 'Kendrak' }, anchor: [0.3, 0.4], side: 'auto' },
    { id: 'l2', text: { en: 'Vacuole', hi: 'Riktika' }, anchor: [0.8, 0.6], side: 'auto' },
  ],
};

/** What `app/dev-label-editor.tsx` computes when the author taps. Duplicated
 *  HERE ON PURPOSE: the editor is a screen and cannot be imported into a node
 *  test, so the arithmetic it relies on is pinned against `fitRect` instead of
 *  trusted. If the editor's copy drifts from this, that is the bug this file
 *  exists to make visible. */
function editorFit(boxW: number, boxH: number) {
  const s = Math.min(boxW / ART_W, boxH / ART_H);
  const sW = s * ART_W;
  const sH = s * ART_H;
  return { s, sW, sH, ox: (boxW - sW) / 2, oy: (boxH - sH) / 2 };
}

describe('a tap in the editor is the anchor the board reads', () => {
  test.each([
    ['spec-small', 343, 236],
    ['real-small', 495, 270],
    ['wide', 900, 430],
  ])('editor and fitRect letterbox identically at %s', (_n, W, H) => {
    const mine = editorFit(W, H);
    const theirs = fitRect(W, H, ART_W, ART_H);
    expect(mine.s).toBeCloseTo(theirs.s, 9);
    expect(mine.sW).toBeCloseTo(theirs.sW, 9);
    expect(mine.sH).toBeCloseTo(theirs.sH, 9);
    expect(mine.ox).toBeCloseTo(theirs.ox, 9);
    expect(mine.oy).toBeCloseTo(theirs.oy, 9);
  });

  test('tap -> normalised -> board point is a round trip', () => {
    const W = 343;
    const H = 236;
    const f = editorFit(W, H);
    // An author taps a pixel inside the plate.
    const tapX = f.ox + f.sW * 0.42;
    const tapY = f.oy + f.sH * 0.63;
    // The editor's own conversion.
    const u = (tapX - f.ox) / f.sW;
    const v = (tapY - f.oy) / f.sH;
    // And what the renderer puts on the board for that anchor.
    const pt = anchorAt(fitRect(W, H, ART_W, ART_H), u, v);
    expect(pt.x).toBeCloseTo(tapX, 6);
    expect(pt.y).toBeCloseTo(tapY, 6);
  });
});

describe('reviewed_by is a record that someone looked', () => {
  test.each([undefined, '', '   ', 'TBD', 'unknown', 'none'])('%s is not a review', (v) => {
    expect(isReviewed({ reviewed_by: v as string | undefined })).toBe(false);
  });
  test('a name is', () => {
    expect(isReviewed({ reviewed_by: 'raasikh' })).toBe(true);
  });
});

describe('side resolution is documented, not silent', () => {
  test('l and r are honoured', () => {
    expect(resolveSide('l', 0.9)).toBe('left');
    expect(resolveSide('r', 0.1)).toBe('right');
  });
  test('t, b and auto fall to the nearer side', () => {
    // The board is 2.09:1 and the art is letterboxed into it, so a landscape
    // plate leaves no vertical margin to put a label in. `t`/`b` are accepted
    // as authored intent and resolved by position — which is what the editor
    // shows as "t → l" so nobody discovers it on a device.
    for (const side of ['t', 'b', 'auto'] as const) {
      expect(resolveSide(side, 0.2)).toBe('left');
      expect(resolveSide(side, 0.8)).toBe('right');
    }
  });
});

describe('wire -> renderer', () => {
  test('a set with no groups gets ONE named group, not a per-label default', () => {
    const rec = toFigureRecord(SET, 'file:///art.png');
    expect(rec.groups).toHaveLength(1);
    expect(rec.groups[0].id).toBe(SOLE_GROUP);
    expect(rec.labels.every((l) => l.group === SOLE_GROUP)).toBe(true);
  });

  test('text and anchor are converted, not passed through', () => {
    const rec = toFigureRecord(SET, 'file:///art.png');
    expect(rec.labels[0].term).toEqual({ english: 'Nucleus', hinglish: 'Kendrak' });
    expect(rec.labels[0].anchor).toEqual({ u: 0.3, v: 0.4 });
  });

  test('reveal orders within a group; absent sorts last', () => {
    const rec = toFigureRecord(
      {
        ...SET,
        labels: [
          { ...SET.labels[0], id: 'late' },
          { ...SET.labels[1], id: 'first', reveal: 1 },
        ],
      },
      'file:///art.png'
    );
    expect(rec.labels.map((l) => l.id)).toEqual(['first', 'late']);
  });

  test('a bundled asset and a downloaded file are the same to the renderer', () => {
    expect(toFigureRecord(SET, 7).art.source).toBe(7);
    expect(toFigureRecord(SET, 'file:///a.png').art.source).toEqual({ uri: 'file:///a.png' });
  });
});

test('validateLabelSet accepts the editor’s own output shape', () => {
  const r = validateLabelSet(SET);
  expect(r.ok ? [] : r.errors).toEqual([]);
});
