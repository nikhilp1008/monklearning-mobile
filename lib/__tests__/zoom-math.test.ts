import fs from 'fs';
import path from 'path';

import {
  DOUBLE_TAP_ZOOM,
  MAX_ZOOM,
  clamp,
  clampPan,
  containedSize,
  maxPan,
  translationAbout,
} from '@/lib/zoom-math';

/**
 * The photo viewer in Doubts could be pinched but never moved: no pan, zoom
 * only around the centre, and (inside a Modal, outside the app's gesture root)
 * quite possibly not even that. These pin the arithmetic that moves it.
 */

describe('containedSize', () => {
  it('fits a tall photo to the frame height', () => {
    expect(containedSize({ w: 1000, h: 2000 }, { w: 400, h: 600 })).toEqual({ w: 300, h: 600 });
  });
  it('fits a wide photo to the frame width', () => {
    expect(containedSize({ w: 2000, h: 1000 }, { w: 400, h: 600 })).toEqual({ w: 400, h: 200 });
  });
  it('is the frame itself until the photo has loaded', () => {
    expect(containedSize({ w: 0, h: 0 }, { w: 400, h: 600 })).toEqual({ w: 400, h: 600 });
  });
});

describe('maxPan', () => {
  const frame = { w: 400, h: 600 };
  const content = { w: 300, h: 600 };

  it('cannot move a photo that still fits the frame', () => {
    expect(maxPan(content, frame, 1)).toEqual({ x: 0, y: 0 });
  });
  it('lets a zoomed photo move until its edge meets the frame edge', () => {
    // 2x: 600 wide in a 400 frame -> 100 either way; 1200 tall in 600 -> 300.
    expect(maxPan(content, frame, 2)).toEqual({ x: 100, y: 300 });
  });
  it('lets the photo move along only the axis that overflows', () => {
    expect(maxPan(content, frame, 1.2)).toEqual({ x: 0, y: 60 });
  });
});

describe('translationAbout', () => {
  const apply = (t: { x: number; y: number }, s: number, p: { x: number; y: number }) => ({
    x: t.x + p.x * s,
    y: t.y + p.y * s,
  });

  it('keeps the part of the photo under the fingers under the fingers', () => {
    const focal = { x: 80, y: -120 };
    const startT = { x: 0, y: 0 };
    // The photo point under the fingers before: p such that startT + p*1 = focal.
    const p = { x: focal.x - startT.x, y: focal.y - startT.y };
    const t = translationAbout(focal, focal, startT, 3);
    expect(apply(t, 3, p)).toEqual(focal);
  });

  it('keeps it there when the picture was already moved and zoomed', () => {
    const startFocal = { x: -40, y: 60 };
    const startT = { x: 25, y: -30 };
    const startScale = 2;
    const p = { x: (startFocal.x - startT.x) / startScale, y: (startFocal.y - startT.y) / startScale };
    const t = translationAbout(startFocal, startFocal, startT, 2);
    const a = apply(t, startScale * 2, p);
    expect(a.x).toBeCloseTo(startFocal.x);
    expect(a.y).toBeCloseTo(startFocal.y);
  });

  it('follows the fingers when they move while pinching', () => {
    const t = translationAbout({ x: 0, y: 0 }, { x: 30, y: -10 }, { x: 0, y: 0 }, 1);
    expect(t).toEqual({ x: 30, y: -10 });
  });

  it('zooming about the centre does not move the picture', () => {
    expect(translationAbout({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 4)).toEqual({ x: 0, y: 0 });
  });
});

describe('clamp and clampPan', () => {
  it('holds a value inside its range', () => {
    expect([clamp(-3, 0, 5), clamp(9, 0, 5), clamp(2, 0, 5)]).toEqual([0, 5, 2]);
  });
  it('holds a translation inside the pan limit, each axis on its own', () => {
    expect(clampPan({ x: 250, y: -250 }, { x: 100, y: 300 })).toEqual({ x: 100, y: -250 });
  });
  it('keeps a photo that fits the frame from being dragged at all', () => {
    expect(clampPan({ x: 90, y: 90 }, { x: 0, y: 0 })).toEqual({ x: 0, y: 0 });
  });
});

test('a double-tap zooms in far enough to read and short of the limit', () => {
  expect(DOUBLE_TAP_ZOOM).toBeGreaterThan(1.5);
  expect(DOUBLE_TAP_ZOOM).toBeLessThan(MAX_ZOOM);
});

describe('the viewer is wired', () => {
  const read = (f: string) => fs.readFileSync(path.join(__dirname, '../..', f), 'utf8');

  it('drags with one finger and pinches, together', () => {
    const src = read('components/zoomable-image.tsx');
    expect(src).toContain('Gesture.Pan()');
    expect(src).toContain('.maxPointers(1)');
    expect(src).toContain('Gesture.Pinch()');
    expect(src).toContain('Gesture.Simultaneous(pinch, pan)');
    expect(src).toContain('withDecay');
  });

  it("brings its own gesture root, because a Modal is outside the app's", () => {
    const src = read('components/question-peek.tsx');
    expect(src).toContain('<GestureHandlerRootView');
    expect(src.indexOf('<Modal')).toBeLessThan(src.indexOf('<GestureHandlerRootView'));
    expect(src).toContain('<ZoomableImage');
  });
});
