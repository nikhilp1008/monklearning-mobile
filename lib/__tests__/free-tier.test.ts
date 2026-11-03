import { followUpRefusal, upgradeMessageOf } from '@/lib/doubt-followup';
import { getTier, passStatus, statusFromServer, recordFromServer } from '@/lib/pass';
import { ProgressLockedError, getProgress } from '@/lib/progress';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: { user: { id: 'u1' } } } }) } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));
jest.mock('@/lib/reviewer', () => ({ isReviewerSession: () => Promise.resolve(false) }));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { apiFetch } = require('@/lib/api') as { apiFetch: jest.Mock };

const NOW = new Date('2026-10-30T10:00:00.000Z');

describe('the free tier, as the server states it', () => {
  test('a free student with no pass is "none" and marked free, so the launch gate lets them in', () => {
    const answer = { state: 'none' as const, tier: 'free' as const };
    const status = statusFromServer(answer, recordFromServer(answer, NOW), NOW);
    expect(status).toEqual({ state: 'none', free: true });
  });

  test('a student whose pass ran out is "expired" and free, and still shows when it ended', () => {
    const answer = {
      state: 'expired' as const, tier: 'free' as const, kind: 'week',
      started_at: '2026-10-01T00:00:00.000Z', ends_at: '2026-10-08T00:00:00.000Z',
    };
    const status = statusFromServer(answer, recordFromServer(answer, NOW), NOW);
    expect(status.state).toBe('expired');
    expect(status.state === 'expired' && status.free).toBe(true);
  });

  test('with the free tier off a student with no pass is not free: they still meet the plans screen', () => {
    const answer = { state: 'none' as const, tier: 'paid' as const };
    expect(statusFromServer(answer, recordFromServer(answer, NOW), NOW)).toEqual({ state: 'none', free: false });
  });

  test('asking the server remembers the tier and its limits for the screens that draw locked cards', async () => {
    apiFetch.mockResolvedValueOnce({
      state: 'none', tier: 'free',
      free_tier: { enabled: true, limits: { snap_questions: 7, practice_questions: 25, followups: 3, mocks: 1 } },
    });
    await passStatus();
    expect(getTier().free).toBe(true);
    expect(getTier().limits.snap_questions).toBe(7);

    // Buying a plan: the next answer says paid, and the locked cards go.
    apiFetch.mockResolvedValueOnce({
      state: 'active', tier: 'paid', kind: '1m', source: 'razorpay',
      started_at: '2026-10-30T00:00:00.000Z', ends_at: '2026-11-29T00:00:00.000Z',
    });
    await passStatus();
    expect(getTier().free).toBe(false);
  });
});

describe('a free student at a limit', () => {
  test('a follow-up refusal carries the server\'s sentence and says it is an upgrade moment', () => {
    const body = JSON.stringify({
      detail: { stage: 'quota', upgrade: true, message: 'You\'ve used your 3 free follow-ups for today. A plan lets you ask more.' },
    });
    const err = followUpRefusal(429, body);
    expect(err.kind).toBe('quota');
    expect(err.upgrade).toBe(true);
    expect(err.message).toMatch(/plan/);
  });

  test('a paying student\'s limit is still just a limit', () => {
    const err = followUpRefusal(429, JSON.stringify({ detail: { stage: 'quota', message: 'limit' } }));
    expect(err.kind).toBe('quota');
    expect(err.upgrade).toBe(false);
  });

  test('upgradeMessageOf reads a REST body and a socket frame alike, and nothing else', () => {
    expect(upgradeMessageOf({ detail: { upgrade: true, message: 'x' } })).toBe('x');
    expect(upgradeMessageOf({ upgrade: true, message: 'y', status: 429 })).toBe('y');
    expect(upgradeMessageOf({ message: 'z' })).toBeNull();
    expect(upgradeMessageOf(null)).toBeNull();
  });
});

describe('progress for a free student', () => {
  test('is an error carrying the server\'s message, never a summary to read a score off', async () => {
    apiFetch.mockResolvedValueOnce({ locked: true, upgrade: true, message: 'Unlocks with a plan.' });
    await expect(getProgress({ force: true })).rejects.toBeInstanceOf(ProgressLockedError);
    apiFetch.mockResolvedValueOnce({ locked: true, message: 'Unlocks with a plan.' });
    await expect(getProgress({ force: true })).rejects.toThrow('Unlocks with a plan.');
  });
});
