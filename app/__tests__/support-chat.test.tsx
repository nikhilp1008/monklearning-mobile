/**
 * The Support chat: who a message goes to. It goes to the assistant until the
 * student asks for a person, then to the team, until they go back.
 */
import React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';

const mockApi = jest.fn();
jest.mock('@/lib/api', () => ({
  ApiError: class extends Error {},
  apiFetch: (...a: unknown[]) => mockApi(...a),
  friendlyError: () => 'Something went wrong.',
}));
jest.mock('expo-router', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const R = require('react');
  return {
    router: { push: jest.fn(), replace: jest.fn(), back: jest.fn(), canGoBack: () => true },
    useFocusEffect: (fn: () => void) => R.useEffect(fn, [fn]),
  };
});
jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/profile', () => ({ getStoredName: () => Promise.resolve('Nikhil Kumar') }));
jest.mock('@/components/keyboard-spacer', () => ({ KeyboardSpacer: () => null }));
jest.mock('@/components/arrow-right-icon', () => ({ ArrowRightIcon: () => null }));
jest.mock('react-native-svg', () => ({ __esModule: true, default: () => null, Path: () => null }));
jest.mock('react-native-safe-area-context', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const R = require('react');
  return {
    SafeAreaView: ({ children }: { children: unknown }) => R.createElement(R.Fragment, null, children),
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});
jest.mock('@/components/pressable-scale', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const R = require('react');
  return {
    PressableScale: ({ onPress, children, accessibilityLabel }: { onPress: () => void; children: unknown; accessibilityLabel?: string }) =>
      R.createElement('Key', { onPress, accessibilityLabel }, children),
  };
});

import SupportScreen from '@/app/help';

const REQUEST = {
  id: 'e1',
  question: 'My plan did not start',
  status: 'open',
  created_at: new Date().toISOString(),
  replies: [],
  messages: [],
  awaiting_team: true,
  note: null,
};

function respond(endpoint: string) {
  if (endpoint === '/help/escalations') return Promise.resolve({ escalations: [] });
  if (endpoint === '/help/ask') {
    return Promise.resolve({ ask_id: 7, answer: 'Do not pay again.', route: 'subscription', covered: true, escalation_offered: false });
  }
  if (endpoint === '/help/escalate') return Promise.resolve({ escalated: true, id: 'e1', already: false, message: 'Sent to the team.' });
  if (endpoint === '/help/escalations/e1/messages') return Promise.resolve({ ...REQUEST, messages: [{ id: 1, from: 'student', text: 'Any news?', at: new Date().toISOString() }] });
  return Promise.resolve(REQUEST);
}

async function open(): Promise<ReactTestRenderer> {
  let tree!: ReactTestRenderer;
  await act(async () => {
    tree = create(<SupportScreen />);
  });
  await settle();
  return tree;
}

async function settle() {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

const words = (tree: ReactTestRenderer) => JSON.stringify(tree.toJSON());

async function tap(tree: ReactTestRenderer, label: string) {
  const node = tree.root.findAll(
    (n) => n.props.accessibilityRole === 'button' && typeof n.props.onPress === 'function' && labelOf(n).includes(label)
  )[0];
  expect(node).toBeTruthy();
  await act(async () => {
    node.props.onPress();
  });
  await settle();
}

function labelOf(n: ReactTestRenderer['root']): string {
  return n.findAll((c) => typeof c.props.children === 'string').map((c) => c.props.children).join(' ');
}

async function say(tree: ReactTestRenderer, text: string) {
  const field = tree.root.findAll((n) => typeof n.props.onChangeText === 'function')[0];
  await act(async () => {
    field.props.onChangeText(text);
  });
  const send = tree.root.findAll((n) => n.props.accessibilityLabel === 'Send' && typeof n.props.onPress === 'function')[0];
  await act(async () => {
    send.props.onPress();
  });
  await settle();
}

const calledWith = (endpoint: string) => mockApi.mock.calls.filter((c) => c[0] === endpoint);

beforeEach(() => {
  jest.useFakeTimers({ doNotFake: ['nextTick', 'setImmediate', 'queueMicrotask'] });
  mockApi.mockReset();
  mockApi.mockImplementation(respond);
});

afterEach(() => {
  jest.useRealTimers();
});

test('opens by name, with a way to a person before anything is asked', async () => {
  const tree = await open();
  expect(words(tree)).toContain('Hi Nikhil.');
  expect(words(tree)).toContain('Talk to a person');
});

test('a typed question goes to the assistant, and its answer offers a person', async () => {
  const tree = await open();
  await say(tree, 'My plan did not start');
  expect(JSON.parse(calledWith('/help/ask')[0][1].body)).toEqual({ question: 'My plan did not start' });
  expect(words(tree)).toContain('Do not pay again.');
  expect(words(tree)).toContain('Open Your plan');
  expect(words(tree)).toContain('Talk to a person');
});

test('asking for a person after an answer hands over that question', async () => {
  const tree = await open();
  await say(tree, 'My plan did not start');
  await tap(tree, 'Talk to a person');
  expect(JSON.parse(calledWith('/help/escalate')[0][1].body)).toEqual({ ask_id: 7 });
  expect(words(tree)).toContain('Sent to the team.');
});

test('asking for a person with nothing asked sends the next message, not to the assistant', async () => {
  const tree = await open();
  await tap(tree, 'Talk to a person');
  await say(tree, 'I need a refund');
  expect(calledWith('/help/ask')).toHaveLength(0);
  expect(JSON.parse(calledWith('/help/escalate')[0][1].body)).toEqual({ question: 'I need a refund' });
});

test('once with the team, messages go to the team; going back returns them to the assistant', async () => {
  const tree = await open();
  await say(tree, 'My plan did not start');
  await tap(tree, 'Talk to a person');

  await say(tree, 'Any news?');
  expect(JSON.parse(calledWith('/help/escalations/e1/messages')[0][1].body)).toEqual({ text: 'Any news?' });
  expect(calledWith('/help/ask')).toHaveLength(1);

  await tap(tree, 'Ask the assistant instead');
  await say(tree, 'How do I change my teacher?');
  expect(calledWith('/help/ask')).toHaveLength(2);
  expect(calledWith('/help/escalations/e1/messages')).toHaveLength(1);
});
