/**
 * The two screens a free student meets instead of paid ones: Progress as a
 * labelled sample, and the live class as a locked card. They must draw, say
 * what they are, and lead to the plans screen.
 */
import React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';

const mockPush = jest.fn();
const mockReplace = jest.fn();
jest.mock('expo-router', () => ({
  router: { push: (...a: unknown[]) => mockPush(...a), replace: (...a: unknown[]) => mockReplace(...a), canGoBack: () => false, back: jest.fn() },
}));
jest.mock('@/components/settings-page', () => ({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  SettingsPage: ({ children }: { children: unknown }) => require('react').createElement(require('react').Fragment, null, children),
}));

// The real card draws on a Skia canvas, which jest cannot load. This stand-in keeps
// what these tests are about: its words and its buttons.
jest.mock('@/components/states', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const R = require('react');
  return {
    StateCard: ({ title, line, action, quiet }: { title: string; line: string; action?: { label: string; onPress: () => void }; quiet?: { label: string; onPress: () => void } }) =>
      R.createElement(
        'StateCard',
        null,
        R.createElement('Title', null, title),
        R.createElement('Line', null, line),
        action ? R.createElement('Action', { onPress: action.onPress }, action.label) : null,
        quiet ? R.createElement('Quiet', { onPress: quiet.onPress }, quiet.label) : null
      ),
  };
});
jest.mock('@/components/monk-icons', () => ({ ProgressGlyph: () => null }));
jest.mock('@/constants/scale', () => ({ useScale: () => ({ scale: (n: number) => n, verticalScale: (n: number) => n }) }));

import ClassLockedScreen from '@/app/class-locked';
import { ProgressLocked } from '@/components/progress-locked';

function textOf(tree: ReactTestRenderer): string {
  return JSON.stringify(tree.toJSON());
}

function press(tree: ReactTestRenderer, label: string) {
  const nodes = tree.root.findAll(
    (n) => typeof n.props.onPress === 'function' && JSON.stringify(n.props.children ?? '').includes(label)
  );
  expect(nodes.length).toBeGreaterThan(0);
  act(() => nodes[0].props.onPress());
}

beforeEach(() => {
  mockPush.mockClear();
  mockReplace.mockClear();
});

describe('Progress, for a student without a plan', () => {
  test('shows a sample that says it is one, with the server\'s reason to buy', () => {
    let tree!: ReactTestRenderer;
    act(() => {
      tree = create(<ProgressLocked message="Your progress unlocks with a plan. It is being recorded." />);
    });
    const out = textOf(tree);
    expect(out).toContain('SAMPLE');
    expect(out).toContain('Your progress unlocks with a plan');
    expect(out).toContain('It is being recorded.');
  });

  test('its button goes to the plans screen', () => {
    let tree!: ReactTestRenderer;
    act(() => {
      tree = create(<ProgressLocked message="x" />);
    });
    press(tree, 'See plans');
    expect(mockPush).toHaveBeenCalledWith('/plans');
  });
});

describe('the live class, for a student without a plan', () => {
  test('is a locked card that names the class and offers plans', () => {
    let tree!: ReactTestRenderer;
    act(() => {
      tree = create(<ClassLockedScreen />);
    });
    expect(textOf(tree)).toContain('Live classes come with a plan');
    press(tree, 'See plans');
    expect(mockReplace).toHaveBeenCalledWith('/plans');
  });
});
