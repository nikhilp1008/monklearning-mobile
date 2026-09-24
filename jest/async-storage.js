/**
 * AsyncStorage's real module throws at IMPORT time outside a native runtime
 * ("NativeModule: AsyncStorage is null"), so any suite that transitively
 * reaches it dies before its first assertion. That stopped being a niche
 * problem when `app/live-classroom.tsx` started importing `lib/track.ts` to
 * report board gaps: `live-classroom-mic.test.tsx` lost all 13 of its tests,
 * none of them about analytics.
 *
 * The package ships a mock but does not register itself, so registration is a
 * `jest.mock` call and belongs in `setupFilesAfterEnv`, where the `jest` object
 * exists. NOT `moduleNameMapper`: mapping the module makes the `jest.mock`
 * factories that three suites already write — `jest.mock('…/async-storage', ()
 * => require('…/async-storage/jest/async-storage-mock'))` — resolve back into
 * themselves, and they blow the stack. A suite that registers its own mock
 * simply overrides this one, which is the behaviour wanted.
 */
/* global jest */
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
