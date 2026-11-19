// The phone's saved copy of practice history belongs to one student.
import AsyncStorage from '@react-native-async-storage/async-storage';
let mockUser: string | null = 'u1';
const mockApi = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: mockUser ? { user: { id: mockUser } } : null } }) } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: (...a: unknown[]) => mockApi(...a) }));


const load = () => {
  let mod: typeof import('@/lib/practice-history');
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    mod = require('@/lib/practice-history');
  });
  return mod!;
};
const cal = (total: number) => ({ from: '2026-08-22', to: '2026-11-19', days: [{ date: '2026-11-08', total }] });

beforeEach(async () => {
  mockUser = 'u1';
  mockApi.mockReset();
  await AsyncStorage.clear();
});

test('a copy is saved under the signed-in student, never a shared key', async () => {
  mockApi.mockResolvedValue(cal(73));
  await load().getHistoryCalendar();
  await new Promise((r) => setTimeout(r, 0));
  const keys = await AsyncStorage.getAllKeys();
  expect(keys.filter((k) => k.startsWith('practice-history:'))).toEqual(['practice-history:v2:u1:calendar']);
});

test('offline, the same student gets their own copy back, marked as saved', async () => {
  mockApi.mockResolvedValueOnce(cal(73));
  const h = load();
  await h.getHistoryCalendar();
  await new Promise((r) => setTimeout(r, 0));
  mockApi.mockRejectedValueOnce(new Error('offline'));
  const again = await h.getHistoryCalendar();
  expect(again.savedAt).not.toBeNull();
  expect(again.data.days[0].total).toBe(73);
});

test("offline, another student never sees the first student's copy", async () => {
  mockApi.mockResolvedValueOnce(cal(73));
  const h = load();
  await h.getHistoryCalendar();
  await new Promise((r) => setTimeout(r, 0));
  mockUser = 'u2';
  mockApi.mockRejectedValueOnce(new Error('offline'));
  await expect(h.getHistoryCalendar()).rejects.toThrow('offline');
});

test('with no student signed in nothing is read or written', async () => {
  mockUser = null;
  mockApi.mockResolvedValueOnce(cal(5));
  const h = load();
  await h.getHistoryCalendar();
  await new Promise((r) => setTimeout(r, 0));
  expect((await AsyncStorage.getAllKeys()).filter((k) => k.startsWith('practice-history:'))).toEqual([]);
  mockApi.mockRejectedValueOnce(new Error('offline'));
  await expect(h.getHistoryCalendar()).rejects.toThrow('offline');
});

test("the first version's shared copies are removed", async () => {
  await AsyncStorage.setItem('practice-history:v1:calendar', JSON.stringify({ at: 1, data: cal(1670) }));
  await AsyncStorage.setItem('practice-history:v1:day:2026-11-13:all:all', '{}');
  mockApi.mockResolvedValue(cal(73));
  await load().getHistoryCalendar();
  await new Promise((r) => setTimeout(r, 10));
  const keys = await AsyncStorage.getAllKeys();
  expect(keys.some((k) => k.startsWith('practice-history:v1:'))).toBe(false);
});
