/**
 * A tap outranks a late answer.
 *
 * The Profile screen asks the server which teacher and language the student
 * chose, and that answer can take a second or two to arrive. A student who
 * taps a different teacher in that time must keep the teacher they tapped —
 * on screen and in the local cache the classroom reads at class start.
 */
import { pullPersona, pushPersona } from '@/lib/persona-sync';
import {
  getLanguagePreference,
  getTeacherPreference,
  setTeacherPreference,
} from '@/lib/preferences';

// jest hoists these above the imports; the factory has to `require`, since
// it runs before any import is bound.
jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: () => Promise.resolve({ data: { session: { access_token: 't' } } }),
    },
  },
}));

process.env.EXPO_PUBLIC_API_URL = 'https://api.example.test';

/** A fetch whose GET answers only when told to, so a tap can land in between. */
function slowServer(answer: { teacher: string; language: string }) {
  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  global.fetch = jest.fn((_url: string, init?: { method?: string }) => {
    if (init?.method === 'POST') return Promise.resolve({ ok: true, json: async () => ({}) });
    return gate.then(() => ({ ok: true, json: async () => answer }));
  }) as unknown as typeof fetch;
  return () => release();
}

test('a teacher tapped while the pull is out is kept, not overwritten', async () => {
  const answer = slowServer({ teacher: 'drona', language: 'hinglish' });
  const pull = pullPersona();

  // The tap, the way the Profile screen makes it: local first, then the push.
  await setTeacherPreference('vedha');
  void pushPersona({ teacher: 'vedha' });

  answer();
  const result = await pull;

  expect(result?.teacher).toBeNull();
  expect(await getTeacherPreference()).toBe('vedha');
  // The field nobody touched still comes down from the server.
  expect(result?.language).toBe('hinglish');
});

test('with no tap in between, the server answer is applied', async () => {
  const answer = slowServer({ teacher: 'vedha', language: 'english' });
  const pull = pullPersona();
  answer();
  const result = await pull;

  expect(result).toEqual({ teacher: 'vedha', language: 'english' });
  expect(await getTeacherPreference()).toBe('vedha');
  expect(await getLanguagePreference()).toBe('english');
});
