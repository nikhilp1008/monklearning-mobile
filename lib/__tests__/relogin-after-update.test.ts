/**
 * The onboarding update signs everyone out once: existing students meet the
 * sign-in screen, new ones the welcome. Only the session ends; the pass, which
 * lives on the phone, must survive it, or a paying student loses what they paid for.
 */
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const mockAuth = {
  session: null as null | { access_token: string; user: { id: string; is_anonymous?: boolean } },
  signOut: jest.fn(async (_opts?: { scope?: string }) => {
    mockAuth.session = null;
    return { error: null };
  }),
};
jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: async () => ({ data: { session: mockAuth.session } }),
      signOut: (opts?: { scope?: string }) => mockAuth.signOut(opts),
    },
  },
}));

const mockClears = {
  profile: jest.fn(async () => {}),
  pass: jest.fn(async () => {}),
  prefs: jest.fn(async () => {}),
  proof: jest.fn(async () => {}),
  plan: jest.fn(async () => {}),
  progress: jest.fn(() => {}),
};
jest.mock('@/lib/profile', () => ({
  clearProfile: () => mockClears.profile(),
  hasCompletedOnboarding: async () => true,
  onboardedOnThisDevice: async () => true,
}));
jest.mock('@/lib/pass', () => ({ clearPass: () => mockClears.pass() }));
jest.mock('@/lib/preferences', () => ({ clearPreferences: () => mockClears.prefs() }));
jest.mock('@/lib/proof', () => ({ clearProofState: () => mockClears.proof() }));
jest.mock('@/lib/plan', () => ({ clearTodayPlan: () => mockClears.plan() }));
jest.mock('@/lib/progress', () => ({ clearProgressCache: () => mockClears.progress() }));

import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthModule = typeof import('@/lib/auth');
/** A fresh module per launch: the once-per-launch memo starts empty. */
function launch(): AuthModule {
  let mod!: AuthModule;
  jest.isolateModules(() => {
    mod = require('@/lib/auth');
  });
  return mod;
}

beforeEach(async () => {
  await AsyncStorage.clear();
  mockAuth.session = null;
  jest.clearAllMocks();
});

test('an existing student is signed out once, on this phone only', async () => {
  mockAuth.session = { access_token: 'old', user: { id: 'u1' } };
  const auth = launch();
  expect(await auth.endSessionFromBeforeUpdate()).toBe('old');
  expect(mockAuth.signOut).toHaveBeenCalledWith({ scope: 'local' });
  expect(await auth.signedOutByUpdate()).toBe(true);
});

test('the pass and the rest of the student’s data are not touched', async () => {
  mockAuth.session = { access_token: 'old', user: { id: 'u1' } };
  await launch().endSessionFromBeforeUpdate();
  Object.values(mockClears).forEach((fn) => expect(fn).not.toHaveBeenCalled());
});

test('it happens once: the next launch keeps the new session', async () => {
  mockAuth.session = { access_token: 'old', user: { id: 'u1' } };
  await launch().endSessionFromBeforeUpdate();
  mockAuth.session = { access_token: 'new', user: { id: 'u1' } };
  expect(await launch().endSessionFromBeforeUpdate()).toBeNull();
  expect(mockAuth.signOut).toHaveBeenCalledTimes(1);
  expect(mockAuth.session).not.toBeNull();
});

test('a fresh install has nothing to end and opens on the welcome', async () => {
  const auth = launch();
  expect(await auth.endSessionFromBeforeUpdate()).toBeNull();
  expect(mockAuth.signOut).not.toHaveBeenCalled();
  expect(await auth.signedOutByUpdate()).toBe(false);
});

test('an anonymous session is not taken for a student', async () => {
  mockAuth.session = { access_token: 'anon', user: { id: 'a1', is_anonymous: true } };
  const auth = launch();
  await auth.endSessionFromBeforeUpdate();
  expect(mockAuth.signOut).not.toHaveBeenCalled();
  expect(await auth.signedOutByUpdate()).toBe(false);
});

test('the same student signing back in keeps their teacher, plan and progress', async () => {
  mockAuth.session = { access_token: 'old', user: { id: 'u1' } };
  const auth = launch();
  await auth.endSessionFromBeforeUpdate();
  mockAuth.session = { access_token: 'new', user: { id: 'u1' } };
  await auth.afterSignIn();
  Object.values(mockClears).forEach((fn) => expect(fn).not.toHaveBeenCalled());
  expect(await auth.signedOutByUpdate()).toBe(false);
});

test('a different student signing in does not inherit the last one’s data', async () => {
  mockAuth.session = { access_token: 'old', user: { id: 'u1' } };
  const auth = launch();
  await auth.endSessionFromBeforeUpdate();
  mockAuth.session = { access_token: 'new', user: { id: 'u2' } };
  await auth.afterSignIn();
  expect(mockClears.profile).toHaveBeenCalled();
  expect(mockClears.prefs).toHaveBeenCalled();
  expect(mockClears.plan).toHaveBeenCalled();
  expect(mockClears.pass).not.toHaveBeenCalled();
});
