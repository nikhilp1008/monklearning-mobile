/**
 * Jest for the board widget runtime (M2).
 *
 * Widgets compute geometry inside Reanimated worklets (useAnimatedProps feeding
 * AnimatedPath/AnimatedCircle — see lib/widgets/projectile-motion/index.tsx). Under
 * plain react-test-renderer that never flattens onto the element, so verify-render.mjs
 * would see a Path with no `d` and report "renders nothing" on a healthy widget.
 *
 * react-native-reanimated ships its own jest mock (react-native-reanimated/mock) whose
 * useAnimatedProps calls the worklet immediately and whose createAnimatedComponent
 * spreads the result onto the wrapped element's real props — confirmed empirically
 * against this repo's exact versions (reanimated 4.1.7, react-native-svg 15.12.1,
 * react-test-renderer 19.1.0): a probe render produced a real "d" on RNSVGPath. No
 * custom mock needed; do not write one on top of this.
 *
 * Every render must be wrapped in `act()` (from 'react-test-renderer'). Without it,
 * React 19's scheduler defers the actual commit to a later microtask via
 * scheduler.native's Immediate, `.toJSON()` synchronously returns null, and Jest tears
 * the environment down before that microtask runs — "import after environment torn
 * down". This is not a Reanimated issue; it reproduces with zero Reanimated involved.
 */
module.exports = {
  preset: 'jest-expo',
  setupFiles: ['react-native-reanimated/mock'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.html$': '<rootDir>/jest/html-asset-mock.js',
    '^react-native-webview$': '<rootDir>/jest/react-native-webview-mock.js',
  },
  // test-utils.ts is a shared helper (renderWidgetTree, scaffoldingDiffs, the
  // fixed theme/services), not a test — but Jest's default testMatch picks up
  // ANY .ts directly under a __tests__ directory regardless of filename, and
  // a helper with no test() calls fails as "must contain at least one test".
  testPathIgnorePatterns: ['/node_modules/', '/ios/', 'lib/widgets/__tests__/test-utils\\.ts$'],
};
