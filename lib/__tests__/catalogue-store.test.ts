/**
 * The chapter list is served from the device first and refreshed from the
 * server in the background (lib/drona.ts, `fetchCatalogue`). These pin the
 * three cases that matter: nothing stored waits for the server, something
 * stored answers at once without waiting, and the server's answer is what the
 * next caller gets and what is stored for next launch.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => ({ apiFetch: (...args: unknown[]) => mockApiFetch(...args) }));
jest.mock('@/lib/profile', () => ({ getProfile: async () => ({ exam: 'jee' }) }));

type Drona = typeof import('@/lib/drona');

const list = (name: string) => [{ subject: 'physics', chapters: [{ id: name, name, class_level: 11, subtopics: [] }] }];

/** A fresh module each time, so the in-memory slot starts empty like a launch. */
function launch(): Drona {
  let mod!: Drona;
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- a fresh copy per test is the point
    mod = require('@/lib/drona');
  });
  return mod;
}

beforeEach(async () => {
  mockApiFetch.mockReset();
  await AsyncStorage.clear();
});

it('waits for the server when nothing is stored, then stores its answer', async () => {
  mockApiFetch.mockResolvedValue(list('Units'));
  const { getCatalogue } = launch();
  const got = await getCatalogue();
  expect(got[0].chapters[0].name).toBe('Units');
  await new Promise((r) => setTimeout(r, 0));
  expect(JSON.parse((await AsyncStorage.getItem('catalogue.v1.jee'))!)[0].chapters[0].name).toBe('Units');
});

it('answers from the stored copy without waiting for the server', async () => {
  await AsyncStorage.setItem('catalogue.v1.jee', JSON.stringify(list('Stored')));
  let finish!: (v: unknown) => void;
  mockApiFetch.mockReturnValue(new Promise((r) => (finish = r)));
  const { getCatalogue } = launch();
  const got = await getCatalogue();
  expect(got[0].chapters[0].name).toBe('Stored');

  // The server answers later: the next caller gets that, and it is stored.
  finish(list('Fresh'));
  await new Promise((r) => setTimeout(r, 0));
  expect((await getCatalogue())[0].chapters[0].name).toBe('Fresh');
  expect(JSON.parse((await AsyncStorage.getItem('catalogue.v1.jee'))!)[0].chapters[0].name).toBe('Fresh');
});

it('keeps the stored copy when the background refresh fails', async () => {
  await AsyncStorage.setItem('catalogue.v1.jee', JSON.stringify(list('Stored')));
  mockApiFetch.mockRejectedValue(new Error('offline'));
  const { getCatalogue } = launch();
  expect((await getCatalogue())[0].chapters[0].name).toBe('Stored');
  await new Promise((r) => setTimeout(r, 0));
  expect((await getCatalogue())[0].chapters[0].name).toBe('Stored');
});

it('ignores a stored value that is not a catalogue', async () => {
  await AsyncStorage.setItem('catalogue.v1.jee', '{"not":"a list"}');
  mockApiFetch.mockResolvedValue(list('Server'));
  const { getCatalogue } = launch();
  expect((await getCatalogue())[0].chapters[0].name).toBe('Server');
});
