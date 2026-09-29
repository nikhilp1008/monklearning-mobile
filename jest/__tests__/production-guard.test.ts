/**
 * Proof that no test can reach production (W1).
 *
 * Every attempt here goes for production on purpose and must be REFUSED by
 * jest/production-guard.js before any I/O. "Before any I/O" is shown, not
 * assumed: each real function the guard stands in front of — Node's fetch,
 * its WebSocket, the socket connect underneath everything — is swapped for a
 * tripwire first, and every test asserts that no tripwire fired.
 */
import https from 'https';
import net from 'net';

import { createClient } from '@supabase/supabase-js';

import productionIsolation from '../production-guard-global';
import {
  PRODUCTION_API_HOST,
  PRODUCTION_SUPABASE_HOST,
  PRODUCTION_SUPABASE_REF,
  assertNoProductionEnv,
  productionEnvOffenders,
  refusalReason,
} from '../production-hosts';

type Real = Record<string, unknown>;
const guard = (globalThis as unknown as { __PRODUCTION_GUARD__: { real: Real; refused: unknown[] } })
  .__PRODUCTION_GUARD__;
const REAL_CONNECT = Symbol.for('monk.productionGuard.realConnect');
const socketProto = net.Socket.prototype as unknown as Record<symbol, unknown>;

const PROD_SUPABASE = `https://${PRODUCTION_SUPABASE_HOST}`;
const PROD_API = `https://${PRODUCTION_API_HOST}`;

let reached: string[] = [];
let saved: { real: Real; connect: unknown };

function tripwire(name: string) {
  return jest.fn(() => {
    reached.push(name);
    throw new Error(`network I/O happened: the real ${name} was called`);
  });
}

beforeEach(() => {
  reached = [];
  saved = { real: { ...guard.real }, connect: socketProto[REAL_CONNECT] };
  for (const name of Object.keys(guard.real)) guard.real[name] = tripwire(name);
  socketProto[REAL_CONNECT] = tripwire('net.Socket.connect');
});

afterEach(() => {
  Object.assign(guard.real, saved.real);
  socketProto[REAL_CONNECT] = saved.connect;
});

test('the guard is installed and the environment does not name production', () => {
  expect(guard).toBeDefined();
  expect(Object.keys(guard.real)).toEqual(expect.arrayContaining(['fetch', 'WebSocket']));
  expect(socketProto[REAL_CONNECT]).toBeDefined();
  expect(productionEnvOffenders(process.env)).toEqual([]);
});

test('a fetch to the production Supabase project is refused before any network I/O', async () => {
  await expect(fetch(`${PROD_SUPABASE}/rest/v1/chapters?select=id`)).rejects.toThrow(
    /TEST ISOLATION: refused GET https:\/\/tgbknrmnjwiokraddurx\.supabase\.co.*production Supabase project/,
  );
  await expect(
    fetch(new URL(`${PROD_SUPABASE}/rest/v1/app_events`), { method: 'POST', body: '{}' }),
  ).rejects.toThrow(/refused POST/);
  await expect(fetch(new Request(`${PROD_SUPABASE}/auth/v1/token`))).rejects.toThrow(
    /TEST ISOLATION/,
  );
  expect(reached).toEqual([]);
});

test('a fetch to the production API is refused before any network I/O', async () => {
  await expect(fetch(`${PROD_API}/version`)).rejects.toThrow(/the production API/);
  await expect(fetch('https://another-project.supabase.co/rest/v1/x')).rejects.toThrow(
    /hosted Supabase project/,
  );
  expect(reached).toEqual([]);
});

test('the supabase-js client pointed at production gets the refusal, not a response', async () => {
  const client = createClient(PROD_SUPABASE, 'not-a-real-key', {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  // retry(false): postgrest-js retries a failed GET three times with 1-2-4s
  // backoff. Each retry would be refused the same way; this keeps it quick.
  const read = await client.from('chapters').select('id').limit(1).retry(false);
  const write = await client.from('app_events').insert({ event: 'w1-proof' });
  expect(read.data).toBeNull();
  expect(read.error?.message).toMatch(/TEST ISOLATION/);
  expect(write.error?.message).toMatch(/TEST ISOLATION/);
  expect(reached).toEqual([]);
});

test('a WebSocket to production is refused before it is constructed', () => {
  expect(
    () => new WebSocket(`wss://${PRODUCTION_SUPABASE_HOST}/realtime/v1/websocket?apikey=x`),
  ).toThrow(/TEST ISOLATION: refused wss:/);
  expect(() => new WebSocket(`wss://${PRODUCTION_API_HOST}/drona/session/x/live`)).toThrow(
    /the production API/,
  );
  expect(reached).toEqual([]);
});

test('an XMLHttpRequest installed by a test is guarded as it is assigned', () => {
  const realOpen = jest.fn();
  class FakeXhr {
    open(...args: unknown[]) {
      realOpen(...args);
    }
  }
  const g = globalThis as unknown as { XMLHttpRequest: unknown };
  const before = g.XMLHttpRequest;
  g.XMLHttpRequest = FakeXhr;
  try {
    const xhr = new (g.XMLHttpRequest as typeof FakeXhr)();
    expect(() => xhr.open('POST', `${PROD_API}/doubts/snap`)).toThrow(/TEST ISOLATION/);
    expect(() => xhr.open('GET', `${PROD_SUPABASE}/rest/v1/doubts`)).toThrow(/TEST ISOLATION/);
    expect(realOpen).not.toHaveBeenCalled();
    xhr.open('GET', 'https://api.example.test/ok'); // anything else passes through
    expect(realOpen).toHaveBeenCalledTimes(1);
  } finally {
    g.XMLHttpRequest = before;
  }
});

test('raw node https to production is refused at the socket, before any I/O', () => {
  expect(() => https.get(`${PROD_SUPABASE}/rest/v1/`)).toThrow(/TEST ISOLATION/);
  expect(() => net.connect({ host: PRODUCTION_API_HOST, port: 443 })).toThrow(/TEST ISOLATION/);
  expect(reached).toEqual([]);
});

test('the abort check fires when the environment names production', async () => {
  expect(
    productionEnvOffenders({
      EXPO_PUBLIC_SUPABASE_URL: PROD_SUPABASE,
      EXPO_PUBLIC_API_URL: PROD_API,
      UNRELATED: 'https://api.example.test',
    }),
  ).toEqual(['EXPO_PUBLIC_API_URL', 'EXPO_PUBLIC_SUPABASE_URL']);
  expect(() => assertNoProductionEnv({ SOME_URL: `postgres://postgres.${PRODUCTION_SUPABASE_REF}@x` })).toThrow(
    /aborting the whole run — SOME_URL points at production/,
  );
  // The globalSetup jest runs before any test file, with the same check.
  await expect(
    productionIsolation(undefined, undefined, { EXPO_PUBLIC_SUPABASE_URL: PROD_SUPABASE }),
  ).rejects.toThrow(/EXPO_PUBLIC_SUPABASE_URL points at production/);
  await expect(productionIsolation(undefined, undefined, {})).resolves.toBeUndefined();
});

test('only production and hosted Supabase are refused', () => {
  for (const host of [
    PRODUCTION_SUPABASE_HOST,
    PRODUCTION_API_HOST,
    `db.${PRODUCTION_SUPABASE_REF}.supabase.co`,
    'aws-0-ap-south-1.pooler.supabase.com',
    `${PRODUCTION_SUPABASE_HOST.toUpperCase()}.`,
  ]) {
    expect(refusalReason(host)).toBeTruthy();
  }
  for (const host of ['localhost', '127.0.0.1', 'api.example.test', 'classroom.test', '']) {
    expect(refusalReason(host)).toBeNull();
  }
});
