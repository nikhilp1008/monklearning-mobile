import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { usePromo, type PromoState } from '@/lib/promo';

/**
 * The hook, rendered for real. 2026-10-19: offers were asked once, when the screen
 * opened, so the code a payment had just used up kept being sent and every attempt
 * was refused as "fully used".
 */

const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => {
  class ApiError extends Error {
    status: number;
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
  }
  return { apiFetch: (...args: unknown[]) => mockApiFetch(...args), ApiError };
});

jest.mock('expo-router', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const R = require('react');
  return {
    useFocusEffect: (cb: () => void) => {
      R.useEffect(() => {
        return cb();
      }, [cb]);
    },
  };
});

const mockAppState: { handler: ((s: string) => void) | null } = { handler: null };
jest.mock('react-native', () => ({
  AppState: {
    addEventListener: (_: string, h: (s: string) => void) => {
      mockAppState.handler = h;
      return { remove: () => { mockAppState.handler = null; } };
    },
  },
}));

/** What the server says right now. */
let server: { offers: string[]; valid: Set<string> };

beforeEach(() => {
  mockApiFetch.mockReset();
  server = { offers: ['LIVE1-OLD'], valid: new Set(['LIVE1-OLD']) };
  mockApiFetch.mockImplementation(async (path: string, init?: { body?: string }) => {
    if (path === '/pass') return { state: 'none', offers: server.offers.map((code) => ({ code, plans: ['1m'] })) };
    const { code } = JSON.parse(init!.body!);
    if (!server.valid.has(code)) return { valid: false, reason: 'exhausted', message: 'That code has been fully used.' };
    return { valid: true, code, kind: '1m', list_paise: 159900, discount_paise: 159800, final_paise: 100, free: false };
  });
});

let latest: PromoState;
function Probe() {
  latest = usePromo('', '1m');
  return null;
}
const flush = async () => {
  await act(async () => {
    await new Promise((r) => setTimeout(r, 0));
  });
};

async function mount() {
  let r!: TestRenderer.ReactTestRenderer;
  await act(async () => {
    r = TestRenderer.create(<Probe />);
  });
  await flush();
  return r;
}

test('a code made for the student is applied on its own', async () => {
  await mount();
  expect(latest.code).toBe('LIVE1-OLD');
  expect(latest.auto).toBe(true);
  expect(latest.quote?.finalPaise).toBe(100);
});

test('after the code is used up, refresh() drops it and offers the new one', async () => {
  await mount();
  expect(latest.code).toBe('LIVE1-OLD');
  // The payment just made used it up; a fresh code was made.
  server = { offers: ['LIVE1-NEW'], valid: new Set(['LIVE1-NEW']) };
  await act(async () => latest.refresh());
  await flush();
  expect(latest.code).toBe('LIVE1-NEW');
  expect(latest.quote?.code).toBe('LIVE1-NEW');
});

test('a used-up code with no replacement leaves the page with no code at all', async () => {
  await mount();
  server = { offers: [], valid: new Set() };
  await act(async () => latest.refresh());
  await flush();
  expect(latest.code).toBe('');
  expect(latest.quote).toBeNull();
});

test('a quote for the SAME code is re-checked, so a spent code stops showing its price', async () => {
  await mount();
  expect(latest.quote).not.toBeNull();
  server = { offers: ['LIVE1-OLD'], valid: new Set() };       // still listed, now refused
  await act(async () => latest.refresh());
  await flush();
  expect(latest.quote).toBeNull();
});

test('returning to the app asks again', async () => {
  await mount();
  server = { offers: ['LIVE1-NEW'], valid: new Set(['LIVE1-NEW']) };
  await act(async () => mockAppState.handler?.('active'));
  await flush();
  expect(latest.code).toBe('LIVE1-NEW');
});

test('a background state change does not ask', async () => {
  await mount();
  const calls = mockApiFetch.mock.calls.length;
  await act(async () => mockAppState.handler?.('background'));
  await flush();
  expect(mockApiFetch.mock.calls.length).toBe(calls);
});
