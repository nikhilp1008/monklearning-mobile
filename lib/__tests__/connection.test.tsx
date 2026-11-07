/**
 * `useOnline`: whether the phone is online, and which signals it goes by.
 *
 * The system's "internet reachable" ping is false on a simulator, a VPN or a
 * filtered network while the app's server answers, and it put "You're offline"
 * over a running class (2026-11-07). The class asks to go by `isConnected`
 * alone; the library screen's banner keeps both.
 */
import React from 'react';
import { NativeModules } from 'react-native';
import { act, create } from 'react-test-renderer';

import { useOnline } from '@/lib/connection';

type State = { isConnected: boolean | null; isInternetReachable: boolean | null };
let mockState: State = { isConnected: true, isInternetReachable: true };
let mockListener: ((s: State) => void) | null = null;

jest.mock('@react-native-community/netinfo', () => ({
  __esModule: true,
  default: {
    fetch: () => Promise.resolve(mockState),
    addEventListener: (fn: (s: State) => void) => {
      mockListener = fn;
      return () => {
        mockListener = null;
      };
    },
  },
}));

function Probe({ reachability }: { reachability?: boolean }) {
  const online = useOnline(reachability === undefined ? undefined : { reachability });
  return React.createElement('Text', null, online ? 'online' : 'offline');
}

const text = (r: ReturnType<typeof create>) => (r.toJSON() as { children: string[] }).children[0];

async function mount(reachability?: boolean) {
  let r!: ReturnType<typeof create>;
  await act(async () => {
    r = create(React.createElement(Probe, { reachability }));
  });
  return r;
}

beforeAll(() => {
  (NativeModules as Record<string, unknown>).RNCNetInfo = {};
});
afterAll(() => {
  delete (NativeModules as Record<string, unknown>).RNCNetInfo;
});
beforeEach(() => {
  mockState = { isConnected: true, isInternetReachable: true };
  mockListener = null;
});

describe('useOnline', () => {
  it('is online when connected and reachable', async () => {
    expect(text(await mount())).toBe('online');
    expect(text(await mount(false))).toBe('online');
  });

  it('is offline when not connected, whichever signals it goes by', async () => {
    mockState = { isConnected: false, isInternetReachable: false };
    expect(text(await mount())).toBe('offline');
    expect(text(await mount(false))).toBe('offline');
  });

  it('by default also counts "connected but the internet is not reachable" as offline', async () => {
    mockState = { isConnected: true, isInternetReachable: false };
    expect(text(await mount())).toBe('offline');
  });

  it('can go by isConnected alone: a failed reachability ping is not offline', async () => {
    mockState = { isConnected: true, isInternetReachable: false };
    expect(text(await mount(false))).toBe('online');
  });

  it('follows the system when it changes', async () => {
    const r = await mount(false);
    await act(async () => {
      mockListener?.({ isConnected: false, isInternetReachable: false });
    });
    expect(text(r)).toBe('offline');
    await act(async () => {
      mockListener?.({ isConnected: true, isInternetReachable: false });
    });
    expect(text(r)).toBe('online');
  });
});
