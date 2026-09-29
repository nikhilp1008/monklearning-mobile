/**
 * A text of several runs is anchored by BoardText, not by the renderer.
 *
 * On iOS, react-native-svg 15.12.1 misplaces the TSpans of a text anchored
 * `middle` or `end`: "d sinθ = mλ" drew its θ over the "=" (X1, 2026-09-29,
 * simulator). Anchored at `start` the same runs chain correctly, so BoardText
 * moves the start by the measured width and hands the renderer `start`. A tree
 * cannot show the defect — the element props are what these tests can pin.
 */
import React from 'react';

import { BoardText, anchorAtStart } from '../board-text';
import { COMPANION_FAMILY, SAFETY_MARGIN, splitRuns, textWidth } from '../chrome';

const ONEST = 'Onest_400Regular';
const MIXED = 'd sinθ = mλ';

type El = React.ReactElement<{ x?: unknown; textAnchor?: string; fontFamily?: string; children?: React.ReactNode }>;
const draw = (props: Record<string, unknown>, text: string) =>
  BoardText({ ...props, children: text } as never) as El;
const drawnWidth = (text: string, size: number) => textWidth(text, size, ONEST) / SAFETY_MARGIN;

describe('BoardText anchors a text of several runs itself', () => {
  it('middle: the start moves left by half the drawn width, and the renderer gets start', () => {
    const el = draw({ x: 200, y: 20, fontSize: 18, fontFamily: ONEST, textAnchor: 'middle' }, MIXED);
    expect(el.props.textAnchor).toBe('start');
    expect(el.props.x).toBeCloseTo(200 - drawnWidth(MIXED, 18) / 2, 6);
  });

  it('end: the start moves left by the whole drawn width', () => {
    const el = draw({ x: 200, y: 20, fontSize: 18, fontFamily: ONEST, textAnchor: 'end' }, MIXED);
    expect(el.props.textAnchor).toBe('start');
    expect(el.props.x).toBeCloseTo(200 - drawnWidth(MIXED, 18), 6);
  });

  it('start, or no anchor: nothing moves', () => {
    for (const anchor of ['start', undefined]) {
      const el = draw({ x: 200, y: 20, fontSize: 18, fontFamily: ONEST, textAnchor: anchor }, MIXED);
      expect(el.props.x).toBe(200);
      expect(el.props.textAnchor).toBe(anchor);
    }
  });

  it('the runs are still drawn in the face that has each glyph', () => {
    const el = draw({ x: 200, y: 20, fontSize: 18, fontFamily: ONEST, textAnchor: 'middle' }, MIXED);
    const spans = React.Children.toArray(el.props.children) as El[];
    expect(spans.map((s) => s.props.fontFamily)).toEqual(splitRuns(MIXED, ONEST).map((r) => r.family));
    expect(spans.map((s) => s.props.fontFamily)).toContain(COMPANION_FAMILY);
  });

  it('one run renders exactly as before: the renderer anchors it', () => {
    const el = draw({ x: 200, y: 20, fontSize: 18, fontFamily: ONEST, textAnchor: 'middle' }, 'Plane wavefronts');
    expect(el.props.textAnchor).toBe('middle');
    expect(el.props.x).toBe(200);
    expect(el.props.children).toBe('Plane wavefronts');
  });

  it('a text it cannot measure is drawn as one string, anchored by the renderer', () => {
    for (const props of [{ x: '50%', fontSize: 18 }, { x: 200, fontSize: '18' }, { x: 200 }]) {
      const el = draw({ ...props, y: 20, fontFamily: ONEST, textAnchor: 'middle' }, MIXED);
      expect(el.props.children).toBe(MIXED);
      expect(el.props.textAnchor).toBe('middle');
      expect(anchorAtStart({ ...props, textAnchor: 'middle' } as never, MIXED, ONEST)).toBeNull();
    }
  });
});
