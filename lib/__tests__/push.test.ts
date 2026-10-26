/**
 * Push: where a tap goes, and when the phone registers.
 *
 * expo-notifications, expo-device and the API are mocked; nothing here can
 * reach a push service or the server.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockGetPerms = jest.fn();
const mockRequestPerms = jest.fn();
const mockGetToken = jest.fn();
const mockApiFetch = jest.fn();
let mockIsDevice = true;

jest.mock('expo-notifications', () => ({
  getPermissionsAsync: (...a: unknown[]) => mockGetPerms(...a),
  requestPermissionsAsync: (...a: unknown[]) => mockRequestPerms(...a),
  getExpoPushTokenAsync: (...a: unknown[]) => mockGetToken(...a),
  setNotificationChannelAsync: jest.fn(async () => undefined),
  setNotificationHandler: jest.fn(),
  AndroidImportance: { DEFAULT: 3 },
}));
jest.mock('expo-device', () => ({
  get isDevice() {
    return mockIsDevice;
  },
}));
jest.mock('expo-constants', () => ({
  __esModule: true,
  default: { expoConfig: { version: '1.2.0', extra: { eas: { projectId: 'proj-1' } } } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: (...a: unknown[]) => mockApiFetch(...a) }));

import { registerForPush, routeForNotification, unregisterPush } from '@/lib/push';

beforeEach(async () => {
  jest.clearAllMocks();
  mockIsDevice = true;
  await AsyncStorage.clear();
  mockGetToken.mockResolvedValue({ data: 'ExponentPushToken[abc123def456]' });
  mockApiFetch.mockResolvedValue({ ok: true });
});

describe('routeForNotification', () => {
  it('opens the note and the doubt', () => {
    expect(routeForNotification({ type: 'note', note_id: 'n1' })).toEqual({
      pathname: '/note-detail',
      params: { id: 'n1' },
    });
    expect(routeForNotification({ type: 'doubt', doubt_id: 'd1' })).toEqual({
      pathname: '/doubt-detail',
      params: { id: 'd1' },
    });
  });

  it('goes nowhere for the admin test, a kind it does not know, or no id', () => {
    expect(routeForNotification({ type: 'test' })).toBeNull();
    expect(routeForNotification({ type: 'future-thing' } as never)).toBeNull();
    expect(routeForNotification({ type: 'note', note_id: null })).toBeNull();
    expect(routeForNotification(undefined)).toBeNull();
  });
});

describe('registerForPush', () => {
  it('does nothing on a simulator', async () => {
    mockIsDevice = false;
    expect(await registerForPush({ ask: true })).toBe(false);
    expect(mockGetPerms).not.toHaveBeenCalled();
  });

  it('does not ask at launch, and registers nothing without permission', async () => {
    mockGetPerms.mockResolvedValue({ status: 'undetermined' });
    expect(await registerForPush({ ask: false })).toBe(false);
    expect(mockRequestPerms).not.toHaveBeenCalled();
    expect(mockApiFetch).not.toHaveBeenCalled();
  });

  it('asks once, ever', async () => {
    mockGetPerms.mockResolvedValue({ status: 'undetermined' });
    mockRequestPerms.mockResolvedValue({ status: 'denied' });
    expect(await registerForPush({ ask: true })).toBe(false);
    expect(await registerForPush({ ask: true })).toBe(false);
    expect(mockRequestPerms).toHaveBeenCalledTimes(1);
  });

  it('registers the token with the server once allowed', async () => {
    mockGetPerms.mockResolvedValue({ status: 'undetermined' });
    mockRequestPerms.mockResolvedValue({ status: 'granted' });
    expect(await registerForPush({ ask: true })).toBe(true);
    expect(mockGetToken).toHaveBeenCalledWith({ projectId: 'proj-1' });
    const [path, init] = mockApiFetch.mock.calls[0];
    expect(path).toBe('/push/register');
    expect(init.method).toBe('POST');
    expect(JSON.parse(init.body)).toMatchObject({
      token: 'ExponentPushToken[abc123def456]',
      app_version: '1.2.0',
    });
  });

  it('never throws: no Firebase key, no network', async () => {
    mockGetPerms.mockResolvedValue({ status: 'granted' });
    mockGetToken.mockRejectedValue(new Error('Default FirebaseApp is not initialized'));
    expect(await registerForPush({ ask: false })).toBe(false);
    mockGetToken.mockResolvedValue({ data: 'ExponentPushToken[abc123def456]' });
    mockApiFetch.mockRejectedValue(new Error('offline'));
    expect(await registerForPush({ ask: false })).toBe(false);
  });
});

describe('unregisterPush', () => {
  it('removes this phone from the student, then forgets the token', async () => {
    mockGetPerms.mockResolvedValue({ status: 'granted' });
    await registerForPush({ ask: false });
    mockApiFetch.mockClear();
    await unregisterPush();
    const [path, init] = mockApiFetch.mock.calls[0];
    expect(path).toBe('/push/register');
    expect(init.method).toBe('DELETE');
    mockApiFetch.mockClear();
    await unregisterPush();
    expect(mockApiFetch).not.toHaveBeenCalled();
  });

  it('does nothing for a phone that never registered', async () => {
    await unregisterPush();
    expect(mockApiFetch).not.toHaveBeenCalled();
  });
});
