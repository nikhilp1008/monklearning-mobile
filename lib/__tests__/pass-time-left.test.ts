import { statusOf, timeLeftWords, timeLeftWordsMs, type PassRecord } from '@/lib/pass';

// jest hoists these above the import; the module reaches for storage and the
// session at call time, and the words under test touch neither.
jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));

const HOUR = 3600000;
const DAY = 24 * HOUR;

/** The week pass bought on 20 Nov 2026 at 22:35 IST (17:05 UTC). */
const week: PassRecord = {
  kind: 'week',
  startedAt: '2026-11-20T17:05:48.484Z',
  endsAt: '2026-11-27T17:05:48.484Z',
};
const words = (iso: string) => {
  const s = statusOf(week, new Date(iso));
  if (s.state !== 'active') throw new Error(`expected active, got ${s.state}`);
  return timeLeftWords(s.daysLeft, s.hoursLeft);
};

describe('how long a pass has left, in words', () => {
  test('a week pass reads 7 days left for its whole first day', () => {
    expect(words('2026-11-20T17:10:00.000Z')).toBe('7 days left');
    expect(words('2026-11-21T17:00:00.000Z')).toBe('7 days left');
    expect(words('2026-11-21T17:06:00.000Z')).toBe('6 days left');
  });

  test('the last day is counted in hours', () => {
    expect(words('2026-11-25T17:06:00.000Z')).toBe('2 days left');
    expect(words('2026-11-26T17:06:00.000Z')).toBe('24 hours left');
    expect(words('2026-11-27T02:05:48.484Z')).toBe('15 hours left');
  });

  test('the final hour is "1 hour left", not "1 hours left"', () => {
    expect(words('2026-11-27T16:30:00.000Z')).toBe('1 hour left');
    expect(timeLeftWords(1, 1)).toBe('1 hour left');
    expect(timeLeftWords(1, 2)).toBe('2 hours left');
  });

  test('milliseconds read the same way, never below one hour', () => {
    expect(timeLeftWordsMs(30 * 60000)).toBe('1 hour left');
    expect(timeLeftWordsMs(0)).toBe('1 hour left');
    expect(timeLeftWordsMs(DAY)).toBe('24 hours left');
    expect(timeLeftWordsMs(DAY + 1)).toBe('2 days left');
    expect(timeLeftWordsMs(6.5 * DAY)).toBe('7 days left');
  });
});
