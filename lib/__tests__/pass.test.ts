import { PASS_NAME, endsAtFor, statusOf, type PassRecord } from '@/lib/pass';

// jest hoists these above the import; the module reaches for storage and the
// session at call time, and the clock maths under test touches neither.
jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));

const at = (iso: string): PassRecord => ({ kind: 'day', startedAt: iso });

describe('a pass ends when it ends', () => {
  test('no record at all', () => {
    expect(statusOf(null).state).toBe('none');
  });

  test('a day pass is active for 24 hours and not a minute more', () => {
    const start = '2026-09-19T10:00:00.000Z';
    const justBefore = statusOf(at(start), new Date('2026-09-20T09:59:00.000Z'));
    expect(justBefore.state).toBe('active');
    const justAfter = statusOf(at(start), new Date('2026-09-20T10:00:01.000Z'));
    expect(justAfter.state).toBe('expired');
  });

  test('a week pass runs seven days', () => {
    const record: PassRecord = { kind: 'week', startedAt: '2026-09-19T10:00:00.000Z' };
    expect(endsAtFor(record).toISOString()).toBe('2026-09-26T10:00:00.000Z');
    expect(statusOf(record, new Date('2026-09-25T10:00:00.000Z')).state).toBe('active');
    expect(statusOf(record, new Date('2026-09-26T10:00:01.000Z')).state).toBe('expired');
  });

  test('days left rounds up, so a pass in use never reads as zero', () => {
    const record: PassRecord = { kind: 'week', startedAt: '2026-09-19T10:00:00.000Z' };
    const s = statusOf(record, new Date('2026-09-26T08:00:00.000Z'));
    expect(s.state).toBe('active');
    if (s.state === 'active') {
      expect(s.daysLeft).toBe(1);
      expect(s.hoursLeft).toBe(2);
    }
  });

  test('every kind has a name and a length', () => {
    (['day', 'week', '1m', '3m', '6m', '11m'] as const).forEach((kind) => {
      expect(PASS_NAME[kind]).toBeTruthy();
      expect(endsAtFor({ kind, startedAt: '2026-01-01T00:00:00.000Z' }).getTime()).toBeGreaterThan(
        new Date('2026-01-01T00:00:00.000Z').getTime()
      );
    });
  });
});
