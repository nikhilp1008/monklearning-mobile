// react-native-webview backs its View with a native TurboModule
// (RNCWebViewModule) that does not exist under Jest's Node environment —
// importing it for real throws at module-load time ("could not be found").
//
// molecule_3d is the only consumer (lib/widgets/molecule-3d/index.tsx) and is
// explicitly SKIPped by the render harness (it renders a WebView, not SVG —
// verify-render.mjs has nothing to assert over). Nothing the test suite
// exercises actually mounts a WebView; this mock exists purely so that
// IMPORTING lib/widgets/registry.ts — needed for the coverage guard, `derived`
// self-consistency, and the manifest generator — does not crash on a widget
// none of those things render.
const React = require('react');
const { forwardRef } = React;

const WebView = forwardRef((_props, _ref) => null);
WebView.displayName = 'WebView';

module.exports = { WebView };
