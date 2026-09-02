// Jest reads Babel config from disk (babel-jest), unlike Metro, which infers
// babel-preset-expo from app.json with no config file needed. This file exists
// for Jest only — do not assume Metro reads it too, and keep it in step with
// app.json's own experiments so the two pipelines do not diverge.
//
// `reactCompiler: true` matches app.json's `experiments.reactCompiler` (:70).
// Omitting it here would run widget tests through a different Babel pipeline
// than the one Metro actually ships, which defeats the point of testing them.
//
// If the eager Reanimated mock (jest/reanimated-eager.js) ever behaves
// strangely, toggle this flag OFF first, before touching the mock — it
// isolates a compiler interaction from a mock interaction one variable at a
// time instead of debugging both together.
//
// babel-preset-expo is NOT hoisted to the repo's own node_modules/ — it lives
// at node_modules/expo/node_modules/babel-preset-expo. Metro can still find it
// because Metro's own resolution walks from inside node_modules/expo/. Babel's
// config loader does not do that walk from a plain `presets: ['babel-preset-expo']`
// string when invoked from the repo root (confirmed: `require.resolve` fails
// from root, succeeds only when resolved relative to the `expo` package).
// Resolve it explicitly rather than relying on a lookup that happens not to
// fail today but is one node_modules layout change away from doing so.
const presetPath = require.resolve('babel-preset-expo', {
  paths: [require.resolve('expo/package.json')],
});

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [[presetPath, { reactCompiler: true }]],
  };
};
