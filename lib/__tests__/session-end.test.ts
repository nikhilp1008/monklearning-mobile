/**
 * The end-of-class payload survives being read more than once.
 *
 * This cost a real class its summary. `takeSessionEnd` cleared the slot on
 * read, and React re-runs an effect in development — so the first call
 * consumed the promise while its own cleanup marked the result discarded, and
 * the second call found nothing. The screen had no payload and, since the
 * route params had stopped carrying one, nothing to fall back on. It rendered
 * an empty space under a heading promising a summary.
 *
 * Reading is idempotent now. Nothing clears the slot except the next class.
 */

import { peekSessionEnd, startSessionEnd, clearSessionEnd } from '@/lib/session-end';

const SESSION_A = '11111111-1111-1111-1111-111111111111';
const SESSION_B = '22222222-2222-2222-2222-222222222222';

jest.mock('@/lib/drona-live', () => ({
  endDronaSession: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { endDronaSession } = require('@/lib/drona-live') as {
  endDronaSession: jest.Mock;
};

const payload = (chapter: string) => ({
  summary_points: ['one', 'two'],
  mistakes_count: 0,
  duration_minutes: 4,
  questions_answered: 2,
  chapter_name: chapter,
});

beforeEach(() => {
  clearSessionEnd();
  endDronaSession.mockReset();
});

test('reading twice returns the same promise, not nothing', async () => {
  endDronaSession.mockResolvedValue(payload('Units & Measurements'));
  startSessionEnd(SESSION_A);

  const first = peekSessionEnd(SESSION_A);
  const second = peekSessionEnd(SESSION_A);

  expect(first).not.toBeNull();
  expect(second).not.toBeNull();
  expect(second).toBe(first);
  await expect(second!).resolves.toMatchObject({ chapter_name: 'Units & Measurements' });
});

test('the call is made once however many times it is read', async () => {
  endDronaSession.mockResolvedValue(payload('Waves'));
  startSessionEnd(SESSION_A);

  peekSessionEnd(SESSION_A);
  peekSessionEnd(SESSION_A);
  await peekSessionEnd(SESSION_A);

  expect(endDronaSession).toHaveBeenCalledTimes(1);
});

test('another class cannot read this one', async () => {
  endDronaSession.mockResolvedValue(payload('Waves'));
  startSessionEnd(SESSION_A);

  // One lesson's takeaways under another's heading is the thing the key stops.
  expect(peekSessionEnd(SESSION_B)).toBeNull();
});

test('a failed end call resolves to null rather than rejecting', async () => {
  // Swallowed where it starts: this promise is deliberately not awaited for a
  // while, and an unhandled rejection in between is a red box in development.
  endDronaSession.mockRejectedValue(new Error('offline'));
  startSessionEnd(SESSION_A);

  await expect(peekSessionEnd(SESSION_A)!).resolves.toBeNull();
});

test('starting the next class replaces the slot', async () => {
  endDronaSession.mockResolvedValue(payload('Waves'));
  startSessionEnd(SESSION_A);
  startSessionEnd(SESSION_B);

  expect(peekSessionEnd(SESSION_A)).toBeNull();
  expect(peekSessionEnd(SESSION_B)).not.toBeNull();
});

test('an empty session id starts nothing', () => {
  startSessionEnd('');
  expect(endDronaSession).not.toHaveBeenCalled();
});
