/**
 * "Both" must survive a pull.
 *
 * `profiles.target_exam` has a check constraint that rejects 'both', so
 * `examForServer` stores a both-exam student as JEE. The pull then read that
 * back as plain 'jee' and saved it over the local answer -- and Profile pulls
 * on mount, so opening the screen to look at your exams was what destroyed
 * them. Afterwards Profile showed one exam and Textbooks three subjects, with
 * no way back short of re-onboarding.
 *
 * Nothing else covers this: every downstream consumer is already correct for
 * 'both', so the bug lives entirely in one assignment and is invisible unless
 * a test drives a pull with a local 'both' in place.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

// The package ships its own in-memory jest mock; without it the native module
// is missing and the import itself throws.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const row = {
  display_name: 'Aarav Sharma',
  phone: '9876543210',
  phone_verified: true,
  target_exam: 'JEE',
  enrolled_class: 12,
  created_at: '2026-01-05T00:00:00Z',
};

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

import { getProfile, pullProfile, saveProfile } from '@/lib/profile';

beforeEach(async () => {
  await AsyncStorage.clear();
  row.target_exam = 'JEE';
});

describe('pullProfile and the exam the server cannot hold', () => {
  test('a local "both" survives the server saying JEE', async () => {
    await saveProfile({ exam: 'both' });
    await pullProfile();
    expect((await getProfile()).exam).toBe('both');
  });

  test('a local "jee" is unaffected', async () => {
    await saveProfile({ exam: 'jee' });
    await pullProfile();
    expect((await getProfile()).exam).toBe('jee');
  });

  test('NEET is unambiguous, so it still wins over a stale local "both"', async () => {
    row.target_exam = 'NEET';
    await saveProfile({ exam: 'both' });
    await pullProfile();
    expect((await getProfile()).exam).toBe('neet');
  });

  test('the rest of the row still lands', async () => {
    await saveProfile({ exam: 'both' });
    await pullProfile();
    const p = await getProfile();
    expect(p.name).toBe('Aarav Sharma');
    expect(p.phoneVerified).toBe(true);
  });
});
