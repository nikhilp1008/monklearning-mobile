/**
 * Fills the hooks `react-native-reanimated/mock` does not provide.
 *
 * The package's own mock is the right base — jest.config.js records the
 * empirical check that its `useAnimatedProps` runs the worklet immediately and
 * its `createAnimatedComponent` spreads the result, which is why a probe render
 * produces a real `d` on RNSVGPath. That comment also says not to write a mock
 * on top of it, and this is not one: it adds the handful of exports the mock
 * predates, and touches nothing it already defines.
 *
 * `useAnimatedScrollHandler` arrived in app/live-classroom.tsx with the
 * classroom CPU work (f0297fc). It is a real export of the installed
 * reanimated 4.1.7 — the app builds and runs — but the mock never grew it, so
 * the live-classroom mic test died with "useAnimatedScrollHandler is not
 * defined" while the screen itself was fine.
 *
 * The handler is returned as a plain function so a test can invoke it with a
 * synthetic event and assert on what it does, rather than receiving an opaque
 * object that silently does nothing.
 */
const reanimated = require('react-native-reanimated');

function scrollHandlerMock(handlers) {
  const table = typeof handlers === 'function' ? { onScroll: handlers } : (handlers || {});
  const call = (event) => {
    if (typeof table.onScroll === 'function') table.onScroll(event, {});
  };
  call.onScroll = table.onScroll;
  call.onBeginDrag = table.onBeginDrag;
  call.onEndDrag = table.onEndDrag;
  call.onMomentumBegin = table.onMomentumBegin;
  call.onMomentumEnd = table.onMomentumEnd;
  return call;
}

for (const target of [reanimated, reanimated.default]) {
  if (!target) continue;
  if (typeof target.useAnimatedScrollHandler !== 'function') {
    target.useAnimatedScrollHandler = scrollHandlerMock;
  }
  if (typeof target.useScrollOffset !== 'function') {
    target.useScrollOffset = () => ({ value: 0 });
  }
}

// The screen imports the hook as a named binding from the module, so the
// global must exist too for the transpiled reference to resolve.
if (typeof global.useAnimatedScrollHandler !== 'function') {
  global.useAnimatedScrollHandler = scrollHandlerMock;
}
