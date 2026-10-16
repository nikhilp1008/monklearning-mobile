/**
 * A student never sees a server's own words. Every failure is said as what
 * happened and what to do, and "pull to retry" is gone: no screen has pull
 * to refresh, so it promised a gesture that did nothing.
 */
jest.mock('@/lib/supabase', () => ({ supabase: { auth: {} } }));

import { friendlyError, friendlyLoadError } from '@/lib/api';

beforeEach(() => jest.spyOn(console, 'warn').mockImplementation(() => {}));

test('a server error never reaches the screen', () => {
  const said = friendlyError(new Error('API request failed with status 502: upstream gateway'), 'load a question');
  expect(said).toBe("Couldn't load a question just now. Try again in a moment.");
  expect(said).not.toMatch(/502|API|upstream/);
});

test('no connection is said as a connection problem', () => {
  expect(friendlyError(new Error('Network request failed'), 'send that')).toBe(
    "Couldn't send that. Check your connection and try again."
  );
});

test('an expired sign-in asks the student to sign in again', () => {
  expect(friendlyError(new Error('No authentication session found'), 'load this note')).toBe(
    'Please sign in again to continue.'
  );
});

test('the list screens no longer promise a pull that does nothing', () => {
  expect(friendlyLoadError(new Error('Network request failed'), 'doubts')).not.toMatch(/pull/i);
  expect(friendlyLoadError(new Error('boom'), 'notes')).not.toMatch(/pull/i);
});
