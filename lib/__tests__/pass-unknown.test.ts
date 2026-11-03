/**
 * "COULD NOT TELL" IS NOT "NO PASS".
 *
 * The plans screen used to appear for students who had paid: the app came back
 * to the foreground with a lapsed sign-in on a weak network, the pass check
 * failed, the fallback read a SHARED cache key that was empty, and an empty
 * answer meant "no pass". These pin the rules that replaced that:
 *
 *   - no student signed in, or no server and no cached answer: `unknown`
 *   - the cache is per student, and a slow answer lands under the student it
 *     was asked for
 *   - a body that is not the pass server's (a Wi-Fi login page) is not an answer
 *   - online, the server's verdict wins over the phone's clock
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

let mockUserId: string | null = 'student-a';
jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: () => Promise.resolve({ data: { session: mockUserId ? { user: { id: mockUserId } } : null } }),
    },
  },
}));
const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => ({ apiFetch: (...a: unknown[]) => mockApiFetch(...a) }));

import { cachedPassStatus, passStatus, statusFromServer, type PassRecord } from '@/lib/pass';

const DAY = 86400000;
const active = (endsInDays: number) => ({
  state: 'active' as const,
  kind: '1m',
  source: 'razorpay',
  started_at: new Date(Date.now() - DAY).toISOString(),
  ends_at: new Date(Date.now() + endsInDays * DAY).toISOString(),
});

beforeEach(async () => {
  mockUserId = 'student-a';
  mockApiFetch.mockReset();
  await AsyncStorage.clear();
});

describe('a pass check that cannot reach the server', () => {
  test('with nothing cached for this student, says unknown — never none', async () => {
    mockApiFetch.mockRejectedValue(new Error('Network request failed'));
    expect((await passStatus()).state).toBe('unknown');
  });

  test('with no student signed in (a lapsed token), says unknown and asks nothing', async () => {
    mockUserId = null;
    expect((await passStatus()).state).toBe('unknown');
    expect(mockApiFetch).not.toHaveBeenCalled();
  });

  test('falls back to the last answer for THIS student', async () => {
    mockApiFetch.mockResolvedValueOnce(active(20));
    expect((await passStatus()).state).toBe('active');
    mockApiFetch.mockRejectedValue(new Error('offline'));
    expect((await passStatus()).state).toBe('active');
  });

  test('never falls back to another student on the same phone', async () => {
    mockApiFetch.mockResolvedValueOnce(active(20));
    await passStatus();
    mockUserId = 'student-b';
    mockApiFetch.mockRejectedValue(new Error('offline'));
    expect((await passStatus()).state).toBe('unknown');
    expect((await cachedPassStatus()).state).toBe('unknown');
  });

  test('a Wi-Fi login page is not an answer, and does not wipe the cache', async () => {
    mockApiFetch.mockResolvedValueOnce(active(20));
    await passStatus();
    mockApiFetch.mockResolvedValueOnce('<html>Please log in to the hostel Wi-Fi</html>');
    expect((await passStatus()).state).toBe('active');
  });

  test('an explicit "none" from the server is believed, and clears the cache', async () => {
    mockApiFetch.mockResolvedValueOnce(active(20));
    await passStatus();
    mockApiFetch.mockResolvedValueOnce({ state: 'none' });
    expect((await passStatus()).state).toBe('none');
    expect((await cachedPassStatus()).state).toBe('unknown');
  });
});

describe('the server decides, not the phone clock', () => {
  const record: PassRecord = {
    kind: '1m',
    startedAt: '2026-10-01T00:00:00.000Z',
    endsAt: '2026-10-31T00:00:00.000Z',
    source: 'razorpay',
  };

  test('server says active, phone clock says it ended: active', () => {
    const phoneAhead = new Date('2026-11-05T00:00:00.000Z');
    expect(statusFromServer({ state: 'active' }, record, phoneAhead).state).toBe('active');
  });

  test('server says expired, phone clock says time is left: expired', () => {
    const phoneBehind = new Date('2026-10-20T00:00:00.000Z');
    expect(statusFromServer({ state: 'expired' }, record, phoneBehind).state).toBe('expired');
  });

  test('server says none: none, whatever is cached', () => {
    expect(statusFromServer({ state: 'none' }, null).state).toBe('none');
  });
});
