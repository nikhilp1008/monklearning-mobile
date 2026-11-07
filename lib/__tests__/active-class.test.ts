/**
 * A pass that runs out while a class is open ends the class before the student
 * is sent to the plans screen.
 *
 * The gate's own wiring lives in `app/_layout.tsx` (it calls
 * `endActiveClassForGate` immediately before `router.replace('/plans')`); this
 * file holds what that call does. Before it existed the classroom was unmounted
 * by the redirect with its session still open on the server.
 */
import { endActiveClassForGate, getActiveClassSession, setActiveClassSession } from '@/lib/active-class';
import { clearSessionEnd, peekSessionEnd } from '@/lib/session-end';

jest.mock('@/lib/drona-live', () => ({ endDronaSession: jest.fn() }));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { endDronaSession } = require('@/lib/drona-live') as { endDronaSession: jest.Mock };

const SESSION = '11111111-1111-1111-1111-111111111111';

beforeEach(() => {
  endDronaSession.mockReset();
  endDronaSession.mockResolvedValue({ summary_points: [] });
  setActiveClassSession(null);
  clearSessionEnd();
});

test('ends the open class with the existing end call, once', () => {
  setActiveClassSession(SESSION);
  expect(endActiveClassForGate()).toBe(true);
  expect(endDronaSession).toHaveBeenCalledTimes(1);
  expect(endDronaSession).toHaveBeenCalledWith(SESSION);
});

test('the summary screen can still pick the same call up', async () => {
  setActiveClassSession(SESSION);
  endActiveClassForGate();
  await expect(peekSessionEnd(SESSION)).resolves.toMatchObject({ summary_points: [] });
});

test('does nothing when no class is open', () => {
  expect(endActiveClassForGate()).toBe(false);
  expect(endDronaSession).not.toHaveBeenCalled();
});

test('a second foreground does not end it twice', () => {
  setActiveClassSession(SESSION);
  endActiveClassForGate();
  expect(endActiveClassForGate()).toBe(false);
  expect(endDronaSession).toHaveBeenCalledTimes(1);
});

test('a class the screen has let go of is not ended', () => {
  setActiveClassSession(SESSION);
  setActiveClassSession(null);
  expect(getActiveClassSession()).toBeNull();
  expect(endActiveClassForGate()).toBe(false);
  expect(endDronaSession).not.toHaveBeenCalled();
});

test('a failing end call does not reach the gate', async () => {
  endDronaSession.mockRejectedValue(new Error('offline'));
  setActiveClassSession(SESSION);
  expect(() => endActiveClassForGate()).not.toThrow();
  await expect(peekSessionEnd(SESSION)).resolves.toBeNull();
});
