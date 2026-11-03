/**
 * Android haptics must be felt on the phones students have.
 *
 * Confirm, Reject and the gesture effects exist only from Android 11; older
 * phones get an effect every Android phone plays. Small taps use the on-screen
 * key tick, not the clock tick many phones render as nothing.
 */
const mockPlatform = { OS: 'android', Version: 34 as number };
// A getter: the import below is hoisted above this file's consts, so the
// module must read the platform when a haptic runs, not when it loads.
jest.mock('react-native', () => ({
  get Platform() {
    return mockPlatform;
  },
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const mockPlayed: string[] = [];
jest.mock('expo-haptics', () => ({
  AndroidHaptics: {
    Confirm: 'confirm',
    Reject: 'reject',
    Gesture_Start: 'gesture-start',
    Gesture_End: 'gesture-end',
    Clock_Tick: 'clock-tick',
    Keyboard_Tap: 'keyboard-tap',
    Long_Press: 'long-press',
    Virtual_Key: 'virtual-key',
  },
  performAndroidHapticsAsync: (effect: string) => {
    mockPlayed.push(effect);
    return Promise.resolve();
  },
  impactAsync: () => {
    mockPlayed.push('ios-impact');
    return Promise.resolve();
  },
  notificationAsync: () => {
    mockPlayed.push('ios-notification');
    return Promise.resolve();
  },
  selectionAsync: () => {
    mockPlayed.push('ios-selection');
    return Promise.resolve();
  },
  ImpactFeedbackStyle: {},
  NotificationFeedbackType: {},
}));

import {
  setHapticsEnabled,
  hapticDigit,
  hapticFloorTaken,
  hapticSoft,
  hapticSuccess,
  hapticSwitched,
  hapticWarning,
} from '@/lib/haptics';

beforeEach(async () => {
  await setHapticsEnabled(true);
  mockPlayed.length = 0;
  mockPlatform.Version = 34;
});

test('small taps use the key tick every Android phone plays', () => {
  hapticSwitched();
  hapticDigit();
  hapticSoft();
  expect(mockPlayed).toEqual(['virtual-key', 'virtual-key', 'virtual-key']);
});

test('Android 11 and newer get the named confirm, reject and gesture', () => {
  hapticSuccess();
  hapticWarning();
  hapticFloorTaken();
  expect(mockPlayed).toEqual(['confirm', 'reject', 'gesture-start']);
});

test('Android 10 and older still feel a result and the mic', () => {
  mockPlatform.Version = 29;
  hapticSuccess();
  hapticWarning();
  hapticFloorTaken();
  expect(mockPlayed).toEqual(['long-press', 'long-press', 'virtual-key']);
});

test('Android never goes through the vibration motor path', () => {
  hapticSuccess();
  hapticSwitched();
  expect(mockPlayed.some((e) => e.startsWith('ios-'))).toBe(false);
});

test('Haptics off in Profile silences every haptic in the app', async () => {
  await setHapticsEnabled(false);
  hapticSuccess();
  hapticWarning();
  hapticSwitched();
  hapticFloorTaken();
  expect(mockPlayed).toEqual([]);
});

test('turned back on, they play again', async () => {
  await setHapticsEnabled(false);
  await setHapticsEnabled(true);
  hapticSwitched();
  expect(mockPlayed).toEqual(['virtual-key']);
});
