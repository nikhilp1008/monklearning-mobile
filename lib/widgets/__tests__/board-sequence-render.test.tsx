/** The sequence renders the right step, and says which of how many. */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { BoardWidget } from '../BoardWidget';
import { TEST_SERVICES, TEST_THEME } from './test-utils';

const scheme = (reagent: string) => ({
  widget: 'reaction_scheme', version: 1,
  params: {
    caption: reagent, species: ['R2C=O', 'R2CH2'], step_from: [0], step_to: [1],
    step_kind: ['plain'], step_reagent: [reagent], step_progress: 1,
    highlight_step: 0,
  },
});

const event = {
  seq: 0, tier: 'precomputed' as const,
  payload: {
    kind: 'board_sequence',
    steps: [
      { payload: scheme('Zn-Hg / HCl'), caption: 'Clemmensen — acid-stable' },
      { payload: scheme('H2N-NH2, KOH'), caption: 'Wolff-Kishner — base-stable', seq: 4 },
    ],
  } as never,
};

function textAt(activeSeq: number | null): string {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(
      <BoardWidget
        event={event as never}
        activeSeq={activeSeq}
        width={343}
        height={236}
        theme={TEST_THEME}
        services={TEST_SERVICES}
      />
    );
  });
  return JSON.stringify(r.toJSON());
}

test('before its sentence, step 1 of 2 and only the Clemmensen reagent', () => {
  const t = textAt(0);
  expect(t).toContain('1');
  expect(t).toContain('Clemmensen');
  expect(t).toContain('Zn-Hg / HCl');
  expect(t).not.toContain('H2N-NH2');
});

test('after its sentence, step 2 of 2 and the Wolff-Kishner reagent', () => {
  const t = textAt(4);
  expect(t).toContain('Wolff-Kishner');
  expect(t).toContain('H2N-NH2, KOH');
  expect(t).not.toContain('Zn-Hg / HCl');
});

test('the strip carries both the counter and the step caption', () => {
  const t = textAt(4);
  expect(t).toContain('2/2');
  expect(t).toContain('Wolff-Kishner — base-stable');
});

test('a host with no reveal clock shows step 1, never the last', () => {
  // A sequence read backwards teaches the comparison in reverse.
  expect(textAt(null)).toContain('Clemmensen');
});
