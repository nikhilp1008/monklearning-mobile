/**
 * Tapping a Practice figure must open a figure, not an empty dark screen.
 *
 * A student on Android tapped a figure (a band chart, overlapping clones) and
 * got the scrim and a Close button with nothing in it. The enlarged Image was
 * width 100% / height 85% inside a Pressable with no style: a percentage of an
 * auto-sized parent resolves to zero, so the picture drew at 0 x 0. The Modal
 * also had no gesture root of its own, so pinch could never have fired.
 *
 * Layout does not run under Jest, so this pins the cause directly: every host
 * view between the Modal and the enlarged image must own a real size (flex, a
 * number, or absolute fill), and a GestureHandlerRootView must sit inside the
 * Modal. Both fail on the old component.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TestRenderer, { act, type ReactTestInstance } from 'react-test-renderer';

// The gesture handler's own Jest mocks, registered BEFORE the component (and
// with it the handler) is first required: a hoisted import would load the
// native module first.
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('react-native-gesture-handler/jestSetup');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { QuestionDiagram } = require('../question-diagram') as typeof import('../question-diagram');

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 24, bottom: 0, left: 0, right: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 402, height: 874 }),
}));

const FIGURE = {
  url: 'https://figures.invalid/questions/v2/biology/generated/x/00-a.png',
  r2_key: 'questions/v2/biology/generated/x/00-a.png',
  form: 'cdn_crop',
};

function typeName(node: ReactTestInstance): string {
  const t = node.type as unknown;
  if (typeof t === 'string') return t;
  const c = t as { displayName?: string; name?: string };
  return c.displayName ?? c.name ?? '';
}

/** A host view whose own style gives it a size without asking its children. */
function ownsSize(style: unknown): boolean {
  const s = (StyleSheet.flatten(style as never) ?? {}) as Record<string, unknown>;
  if (typeof s.flex === 'number' && s.flex > 0) return true;
  if (typeof s.width === 'number' && typeof s.height === 'number') return true;
  if (s.position === 'absolute' && s.top === 0 && s.bottom === 0 && s.left === 0 && s.right === 0) {
    return true;
  }
  return false;
}

function render() {
  let tree!: TestRenderer.ReactTestRenderer;
  act(() => {
    tree = TestRenderer.create(<QuestionDiagram figure={FIGURE} />);
  });
  const opener = tree.root.find(
    (n) => typeof n.type !== 'string' && n.props.accessibilityRole === 'imagebutton',
  );
  act(() => {
    opener.props.onPress();
  });
  const modal = tree.root.find((n) => typeName(n) === 'Modal' && n.props.visible === true);
  // The enlarged figure: the image inside the Modal showing this figure.
  const zoomed = modal.find(
    (n) =>
      typeof n.type === 'string' &&
      n.props.accessibilityLabel === 'Question diagram' &&
      JSON.stringify(n.props.source ?? '').includes(FIGURE.url),
  );
  const ancestors: ReactTestInstance[] = [];
  // Up to the Modal's own native view (the full screen), not past it.
  for (let n = zoomed.parent; n && typeName(n) !== 'Modal'; n = n.parent) ancestors.push(n);
  return { tree, modal, zoomed, ancestors };
}

describe('QuestionDiagram zoom viewer', () => {
  it('draws the enlarged figure inside views that all have a real size', () => {
    const { ancestors } = render();
    const hosts = ancestors.filter((n) => typeof n.type === 'string');
    expect(hosts.length).toBeGreaterThan(0);
    const sizeless = hosts.filter((n) => !ownsSize(n.props.style));
    expect(sizeless.map((n) => `${n.type} ${JSON.stringify(StyleSheet.flatten(n.props.style))}`)).toEqual([]);
  });

  it('gives the Modal its own gesture root, so pinch and drag can fire', () => {
    const { ancestors } = render();
    expect(ancestors.some((n) => typeName(n) === 'GestureHandlerRootView')).toBe(true);
  });

  it('closes from the Close button', () => {
    const { tree } = render();
    const close = tree.root
      .findAll((n) => typeof n.type !== 'string' && n.props.accessibilityLabel === 'Close enlarged figure')
      .find((n) => n.findAll((c) => c.props.children === 'Close ✕').length > 0)!;
    act(() => {
      close.props.onPress();
    });
    expect(tree.root.findAll((n) => typeName(n) === 'Modal' && n.props.visible === true)).toHaveLength(0);
  });
});
