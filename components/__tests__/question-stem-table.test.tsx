/**
 * A stem table wider than the phone slides sideways; one that fits does not.
 * Fixture: the mock-test noble-gas stem (2981d7cb-1299-5ab5-9c46-c23ad406607d),
 * whose List - 2 column was cut at the right edge with nothing to scroll.
 */
import React from 'react';
import { ScrollView } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { QuestionStem, tableScrolls } from '@/components/question-stem';

// useScale reads the safe-area frame; there is no provider under Jest.
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 24, bottom: 0, left: 0, right: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 402, height: 874 }),
}));
// A 390-pt phone, the design's reference width, so scale(n) === n here.
jest.mock('react-native/Libraries/Utilities/useWindowDimensions', () => ({
  __esModule: true,
  default: () => ({ width: 390, height: 844, scale: 3, fontScale: 1 }),
}));

const NOBLE_GASES =
  'Match the uses of the noble gases given in List-1 with the entries in List-2.\n\n| List - 1 | List - 2 |\n| :--- | :--- |\n| A) He | 1) Used in discharge tubes |\n| B) Ne | 2) Used in light bulbs designed for special purposes |\n| C) Ar | 3) Used to produce and sustain powerful superconducting magnets in NMR and MRI |\n| D) Kr | 4) Used to provide an inert atmosphere in high temperature metallurgical processes |\n\nThe correct match, in the order A, B, C, D, is:';

// Four columns that do not fold (content in the marker columns).
const FOUR_COLUMNS =
  'Match the following.\n| Ion | Colour | Spin only moment | Geometry |\n| --- | --- | --- | --- |\n| Ti3+ | violet | 1.73 BM | octahedral |\n| Cu2+ | blue | 1.73 BM | square planar |';

function render(text: string, width: number) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<QuestionStem text={text} fontSize={16} lineHeight={24} />);
  });
  const box = r.root.findByProps({ testID: 'stem-table' });
  act(() => {
    box.props.onLayout({ nativeEvent: { layout: { x: 0, y: 0, width, height: 300 } } });
  });
  return r;
}

describe('stem tables', () => {
  it('draws a two-column table that fits the phone without a ScrollView', () => {
    const r = render(NOBLE_GASES, 358);
    expect(r.root.findAllByType(ScrollView)).toHaveLength(0);
    // Every word of the second column is in the tree, nothing truncated.
    expect(JSON.stringify(r.toJSON())).toContain(
      '4) Used to provide an inert atmosphere in high temperature metallurgical processes'
    );
  });

  it('slides a table wider than the phone, with its scroll bar shown', () => {
    const r = render(FOUR_COLUMNS, 358);
    const scrollers = r.root.findAllByType(ScrollView);
    expect(scrollers).toHaveLength(1);
    expect(scrollers[0].props.horizontal).toBe(true);
    expect(scrollers[0].props.showsHorizontalScrollIndicator).toBe(true);
  });

  it('scrolls the same noble-gas table on a screen too narrow for two columns', () => {
    const r = render(NOBLE_GASES, 200);
    expect(r.root.findAllByType(ScrollView)).toHaveLength(1);
  });

  it('decides by columns times the minimum column width', () => {
    expect(tableScrolls(0, 4, 120)).toBe(false);
    expect(tableScrolls(340, 2, 120)).toBe(false);
    expect(tableScrolls(340, 3, 120)).toBe(true);
  });
});
