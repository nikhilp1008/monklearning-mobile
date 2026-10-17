import { endsAtFor, recordFromServer, statusOf } from '@/lib/pass';
import { isPassRequired, onPassRequired, signalPassRequired } from '@/lib/pass-events';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));

const NOW = new Date('2026-10-17T10:00:00.000Z');

describe('the pass, as the server states it', () => {
  test('an active pass keeps the server\'s end, not startedAt plus a length', () => {
    // Two 1-month passes bought back to back: the second starts when the first ends.
    const record = recordFromServer(
      { state: 'active', kind: '1m', source: 'razorpay',
        started_at: '2026-10-10T10:00:00.000Z', ends_at: '2026-12-09T10:00:00.000Z' },
      NOW
    )!;
    expect(record.kind).toBe('1m');
    expect(endsAtFor(record).toISOString()).toBe('2026-12-09T10:00:00.000Z');
    const status = statusOf(record, NOW);
    expect(status.state).toBe('active');
    if (status.state === 'active') expect(status.daysLeft).toBe(53);
  });

  test('none and expired from the server are not a record the app can run on', () => {
    expect(recordFromServer({ state: 'none' }, NOW)).toBeNull();
    const expired = recordFromServer(
      { state: 'expired', kind: 'day', started_at: '2026-10-01T00:00:00.000Z', ends_at: '2026-10-02T00:00:00.000Z' },
      NOW
    )!;
    expect(statusOf(expired, NOW).state).toBe('expired');
  });

  test('a founder the paywall never stops is always inside a pass', () => {
    const record = recordFromServer({ state: 'none', exempt: true }, NOW)!;
    expect(record.source).toBe('exempt');
    expect(statusOf(record, NOW).state).toBe('active');
    expect(statusOf(record, new Date('2030-01-01T00:00:00.000Z')).state).toBe('active');
  });

  test('a kind the app does not know is no pass at all', () => {
    expect(recordFromServer({ state: 'active', kind: 'forever', started_at: 'x', ends_at: 'y' }, NOW)).toBeNull();
    expect(recordFromServer({ state: 'active', kind: '1m' }, NOW)).toBeNull();
  });

  test('an unknown source is dropped, not trusted', () => {
    const record = recordFromServer(
      { state: 'active', kind: 'day', source: 'hacker', started_at: '2026-10-17T09:00:00.000Z', ends_at: '2026-10-18T09:00:00.000Z' },
      NOW
    )!;
    expect(record.source).toBeNull();
  });
});

describe('the server saying "you need a pass"', () => {
  test('is recognised only in the API\'s own shape', () => {
    expect(isPassRequired({ detail: { error: 'pass_required', message: 'x' } })).toBe(true);
    expect(isPassRequired({ detail: 'pass_required' })).toBe(false);
    expect(isPassRequired({ detail: { error: 'other' } })).toBe(false);
    expect(isPassRequired(null)).toBe(false);
    expect(isPassRequired('pass_required')).toBe(false);
  });

  test('reaches every listener once, survives one that throws, and can be unsubscribed', () => {
    const heard: string[] = [];
    const off1 = onPassRequired(() => heard.push('a'));
    onPassRequired(() => {
      throw new Error('bad listener');
    });
    const off3 = onPassRequired(() => heard.push('c'));
    signalPassRequired();
    expect(heard).toEqual(['a', 'c']);
    off1();
    off3();
    signalPassRequired();
    expect(heard).toEqual(['a', 'c']);
  });
});
