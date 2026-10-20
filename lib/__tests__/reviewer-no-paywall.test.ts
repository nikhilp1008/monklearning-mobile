/**
 * A store reviewer is never put in front of a payment page.
 *
 * Simulator, 2026-10-20: signed in as the review account, the plans screen kept
 * appearing. One cause was a launch check that read "exempt, no pass" as
 * "no pass"; the other is that the check depends on a `/pass` answer that was
 * seen taking 17 seconds against the app's 10. For this one account the app no
 * longer asks: it is team access, always. The server still decides real access
 * (the account is paywall-exempt there), so this only governs what is shown.
 */
import fs from 'fs';
import path from 'path';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const mockGetSession = jest.fn();
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: (...a: unknown[]) => mockGetSession(...a) } },
}));
const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => ({ apiFetch: (...a: unknown[]) => mockApiFetch(...a) }));

import { cachedPassStatus, isTeamAccess, passStatus } from '@/lib/pass';
import { REVIEWER_EMAIL, isReviewerSession } from '@/lib/reviewer';

const session = (email: string | null, extra: Record<string, unknown> = {}) => ({
  data: { session: email === null ? null : { user: { id: 'u-1', email, ...extra } } },
});

beforeEach(() => {
  mockGetSession.mockReset();
  mockApiFetch.mockReset();
});

describe('isReviewerSession', () => {
  test('is true only for the review account', async () => {
    mockGetSession.mockResolvedValue(session(REVIEWER_EMAIL));
    expect(await isReviewerSession()).toBe(true);
    mockGetSession.mockResolvedValue(session('student@gmail.com'));
    expect(await isReviewerSession()).toBe(false);
  });

  test('is false signed out, anonymous, or when the session cannot be read', async () => {
    mockGetSession.mockResolvedValue(session(null));
    expect(await isReviewerSession()).toBe(false);
    mockGetSession.mockResolvedValue(session(REVIEWER_EMAIL, { is_anonymous: true }));
    expect(await isReviewerSession()).toBe(false);
    mockGetSession.mockRejectedValue(new Error('storage unreadable'));
    expect(await isReviewerSession()).toBe(false);
  });
});

describe('the pass, for the review account', () => {
  test('is team access, without asking the server', async () => {
    mockGetSession.mockResolvedValue(session(REVIEWER_EMAIL));
    const status = await passStatus();
    expect(status.state).toBe('active');
    if (status.state === 'active') expect(isTeamAccess(status.record)).toBe(true);
    expect(mockApiFetch).not.toHaveBeenCalled();
  });

  test('is team access at once, from the first frame, with nothing stored', async () => {
    mockGetSession.mockResolvedValue(session(REVIEWER_EMAIL));
    expect((await cachedPassStatus()).state).toBe('active');
  });

  test('stays team access when the server would have been slow or down', async () => {
    mockGetSession.mockResolvedValue(session(REVIEWER_EMAIL));
    mockApiFetch.mockRejectedValue(new Error('timed out'));
    expect((await passStatus()).state).toBe('active');
  });
});

describe('everyone else is unchanged', () => {
  test('a student with no pass is still sent to choose one', async () => {
    mockGetSession.mockResolvedValue(session('student@gmail.com'));
    mockApiFetch.mockResolvedValue({ state: 'none' });
    expect((await passStatus()).state).toBe('none');
    expect(mockApiFetch).toHaveBeenCalledTimes(1);
  });

  test('a founder with team access still comes from the server', async () => {
    mockGetSession.mockResolvedValue(session('founder@monklearning.com'));
    mockApiFetch.mockResolvedValue({ state: 'none', exempt: true });
    const status = await passStatus();
    expect(status.state).toBe('active');
    expect(mockApiFetch).toHaveBeenCalledTimes(1);
  });
});

test('the plans screen sends the review account straight back to Home', () => {
  const source = fs.readFileSync(path.join(__dirname, '../../app/plans.tsx'), 'utf8');
  expect(source).toMatch(/isReviewerSession\(\)\.then\(\(yes\) => \{\s*if \(live && yes\) router\.dismissTo\('\/'\)/);
});
