/**
 * "Has this student finished onboarding?", asked of the phone when the server
 * cannot be.
 *
 * The name used to be the answer. It is now the first question, so a new
 * student who lost signal at the code screen would have been waved through
 * to Home, never reaching the pass, the teacher or the push to the server.
 */
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const row = { display_name: 'Aarav Sharma', target_exam: 'JEE', enrolled_class: 12 };

jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: () =>
        Promise.resolve({ data: { session: { user: { id: 'u1', is_anonymous: false } } } }),
    },
    from: () => ({
      select: () => ({ eq: () => ({ limit: () => Promise.resolve({ data: [row] }) }) }),
    }),
  },
}));

import { saveAnswers } from '@/lib/onboarding-answers';
import { clearProfile, getProfile, onboardedOnThisDevice, pullProfile, saveProfile } from '@/lib/profile';

beforeEach(async () => {
  await clearProfile();
});

test('a phone from before the new questions: a stored name still means finished', async () => {
  await saveProfile({ name: 'Aarav' });
  expect(await onboardedOnThisDevice()).toBe(true);
});

test('a new student part-way through is not finished, name or not', async () => {
  await saveProfile({ name: 'Aarav' });
  await saveAnswers({ started: true, questionsDone: true });
  expect(await onboardedOnThisDevice()).toBe(false);
});

test('finished once the profile reached the server', async () => {
  await saveProfile({ name: 'Aarav' });
  await saveAnswers({ started: true, finished: true });
  expect(await onboardedOnThisDevice()).toBe(true);
});

test('nothing on the phone: not finished', async () => {
  expect(await onboardedOnThisDevice()).toBe(false);
});

test('signing in to an older Class 12 account replaces a Class 11 just answered', async () => {
  await saveProfile({ year: 'class11' });
  await pullProfile();
  expect((await getProfile()).year).toBe('class12');
});

test('a dropper is kept under the server’s 12', async () => {
  await saveProfile({ year: 'dropper' });
  await pullProfile();
  expect((await getProfile()).year).toBe('dropper');
});
