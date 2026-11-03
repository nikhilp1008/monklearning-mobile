/**
 * JEE or NEET, and nothing else.
 *
 * "Both" was removed as an exam: a student prepares for one. Phones that
 * stored 'both' before then still have it in local storage, and the server
 * has always held those students as JEE (its check constraint never allowed
 * 'both'). So a stored 'both' must read as JEE, and a pull must agree with the
 * server rather than resurrect it.
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

describe('the exam on this device', () => {
  test('a "both" left from before reads as JEE', async () => {
    await AsyncStorage.setItem('profile.exam', 'both');
    expect((await getProfile()).exam).toBe('jee');
  });

  test('a pull agrees with the server when it says JEE', async () => {
    await AsyncStorage.setItem('profile.exam', 'both');
    await pullProfile();
    expect((await getProfile()).exam).toBe('jee');
  });

  test('NEET from the server wins', async () => {
    row.target_exam = 'NEET';
    await saveProfile({ exam: 'jee' });
    await pullProfile();
    expect((await getProfile()).exam).toBe('neet');
  });

  test('the rest of the row still lands', async () => {
    await pullProfile();
    const p = await getProfile();
    expect(p.name).toBe('Aarav Sharma');
    expect(p.phoneVerified).toBe(true);
  });
});
