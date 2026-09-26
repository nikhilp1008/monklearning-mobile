/**
 * The Keychain-backed session store (lib/secure-session-store.ts).
 *
 * What matters here is not the cipher — aes-js is not under test — but the
 * seams around it: a pre-upgrade plaintext session must survive the upgrade
 * exactly once and then stop existing in plaintext, and every way the store
 * can be half-present must answer null (signed out) rather than throw inside
 * supabase-js's auth bootstrap.
 */
const mockAsyncStore = new Map<string, string>();
const mockSecureStore = new Map<string, string>();

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(async (k: string) => mockAsyncStore.get(k) ?? null),
    setItem: jest.fn(async (k: string, v: string) => void mockAsyncStore.set(k, v)),
    removeItem: jest.fn(async (k: string) => void mockAsyncStore.delete(k)),
    multiRemove: jest.fn(async (ks: string[]) => ks.forEach((k) => mockAsyncStore.delete(k))),
  },
}));

jest.mock('expo-secure-store', () => ({
  AFTER_FIRST_UNLOCK: 'afterFirstUnlock',
  getItemAsync: jest.fn(async (k: string) => mockSecureStore.get(k) ?? null),
  setItemAsync: jest.fn(async (k: string, v: string) => void mockSecureStore.set(k, v)),
  deleteItemAsync: jest.fn(async (k: string) => void mockSecureStore.delete(k)),
}));

jest.mock('expo-crypto', () => ({
  // Deterministic "randomness" is fine: uniqueness per write is a platform
  // guarantee, not a behaviour of the adapter under test.
  getRandomBytes: jest.fn((n: number) => Uint8Array.from({ length: n }, (_, i) => (i * 7 + 3) % 256)),
}));

import { secureSessionStore } from '@/lib/secure-session-store';

const KEY = 'sb-testproject-auth-token';
const SESSION = JSON.stringify({ access_token: 'a'.repeat(900), refresh_token: 'r'.repeat(200) });

beforeEach(() => {
  mockAsyncStore.clear();
  mockSecureStore.clear();
});

test('a session written is the session read back, and never at rest in the clear', async () => {
  await secureSessionStore.setItem(KEY, SESSION);
  expect(await secureSessionStore.getItem(KEY)).toBe(SESSION);
  // Nothing stored anywhere contains the token material itself.
  for (const v of [...mockAsyncStore.values(), ...mockSecureStore.values()]) {
    expect(v).not.toContain('a'.repeat(900));
    expect(v).not.toContain('r'.repeat(200));
  }
  expect(mockAsyncStore.has(KEY)).toBe(false);
});

test('a pre-upgrade plaintext session is migrated, returned, and deleted', async () => {
  mockAsyncStore.set(KEY, SESSION); // what AsyncStorage held before this adapter
  expect(await secureSessionStore.getItem(KEY)).toBe(SESSION);
  // Migrated: the plaintext slot is gone and the encrypted read now serves it.
  expect(mockAsyncStore.get(KEY)).toBeUndefined();
  expect(await secureSessionStore.getItem(KEY)).toBe(SESSION);
});

test('nothing stored anywhere reads as signed out', async () => {
  expect(await secureSessionStore.getItem(KEY)).toBeNull();
});

test('a key whose ciphertext is missing reads as signed out, not a throw', async () => {
  await secureSessionStore.setItem(KEY, SESSION);
  mockAsyncStore.delete(`${KEY}.enc`);
  expect(await secureSessionStore.getItem(KEY)).toBeNull();
});

test('removeItem clears the ciphertext, the Keychain key, and any plaintext leftover', async () => {
  await secureSessionStore.setItem(KEY, SESSION);
  mockAsyncStore.set(KEY, SESSION); // a plaintext straggler, as if sign-out beat migration
  await secureSessionStore.removeItem(KEY);
  expect(mockAsyncStore.size).toBe(0);
  expect(mockSecureStore.size).toBe(0);
  expect(await secureSessionStore.getItem(KEY)).toBeNull();
});
