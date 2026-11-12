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
let mockUser: string | null = null;
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: mockUser ? { user: { id: mockUser } } : null } }) } },
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

// The mock above needs `mockUser` declared first, so these two imports follow it.
/* eslint-disable import/first */
import AsyncStorage from '@react-native-async-storage/async-storage';

import SupportScreen from '@/app/help';
/* eslint-enable import/first */

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

beforeEach(async () => {
  mockUser = null;
  await AsyncStorage.clear();
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

describe('leaving Support and coming back', () => {
  const T = (min: number) => new Date(Date.parse('2026-11-03T10:00:00.000Z') + min * 60000).toISOString();
  const oldChat = [
    { kind: 'me', key: 'a', text: 'My plan did not start', at: T(0) },
    { kind: 'bot', key: 'b', text: 'Do not pay again.', at: T(0), askId: 7, route: 'subscription', covered: true },
    { kind: 'bot', key: 'c', text: 'Sent to the team.', at: T(1), threadId: 'e1' },
  ];
  const withTeam = (at: string) => [{ id: 1, from: 'team', text: 'It is fixed now.', at }];

  async function reopen(escalations: unknown[], seenAtMin: number | null) {
    mockUser = 'u1';
    await AsyncStorage.setItem('help.chat.v1:u1', JSON.stringify(oldChat));
    if (seenAtMin !== null) await AsyncStorage.setItem('help.chat.seen:u1', String(Date.parse(T(seenAtMin))));
    mockApi.mockImplementation((endpoint: string) => (endpoint === '/help/escalations' ? Promise.resolve({ escalations }) : respond(endpoint)));
    return open();
  }

  test('a request that is over starts a blank chat', async () => {
    const done = { ...REQUEST, status: 'answered', awaiting_team: false, created_at: T(1), messages: withTeam(T(5)) };
    const tree = await reopen([done], 10);
    expect(words(tree)).toContain('Hi Nikhil.');
    expect(words(tree)).not.toContain('Do not pay again.');
    expect(words(tree)).not.toContain('It is fixed now.');
    expect(words(tree)).not.toContain('My plan did not start');
  });

  test('a request still waiting for the team is carried over', async () => {
    const waiting = { ...REQUEST, created_at: T(1), awaiting_team: true };
    const tree = await reopen([waiting], 10);
    expect(words(tree)).toContain('Sent to the team.');
    expect(words(tree)).toContain('My plan did not start');
    expect(words(tree)).not.toContain('Hi Nikhil.');
    expect(words(tree)).toContain('Message the team');
  });

  test('a reply that came while the student was away is shown once', async () => {
    const replied = { ...REQUEST, status: 'answered', awaiting_team: false, created_at: T(1), messages: withTeam(T(20)) };
    const tree = await reopen([replied], 10);
    expect(words(tree)).toContain('It is fixed now.');
    expect(words(tree)).toContain('Do not pay again.');
  });

  test('a first visit with finished requests on the server is blank', async () => {
    const done = { ...REQUEST, status: 'answered', awaiting_team: false, created_at: T(1), messages: withTeam(T(5)) };
    const tree = await reopen([done], null);
    expect(words(tree)).toContain('Hi Nikhil.');
    expect(words(tree)).not.toContain('It is fixed now.');
  });

  test('offline, the chat stays as the phone has it', async () => {
    mockUser = 'u1';
    await AsyncStorage.setItem('help.chat.v1:u1', JSON.stringify(oldChat));
    mockApi.mockImplementation((endpoint: string) => (endpoint === '/help/escalations' ? Promise.reject(new Error('offline')) : respond(endpoint)));
    const tree = await open();
    expect(words(tree)).toContain('Do not pay again.');
  });

  test('a new chat is saved, so the old one does not come back', async () => {
    const done = { ...REQUEST, status: 'answered', awaiting_team: false, created_at: T(1), messages: withTeam(T(5)) };
    const tree = await reopen([done], 10);
    await say(tree, 'How do I change my teacher?');
    const saved = JSON.parse((await AsyncStorage.getItem('help.chat.v1:u1')) as string);
    expect(saved.map((i: { text: string }) => i.text)).toEqual(['How do I change my teacher?', 'Do not pay again.']);
  });
});
