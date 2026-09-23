// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    // `.claude/` is tool state — including, at times, a full second checkout
    // of this repo left by a worktree. Git already excludes it; linting it
    // counted every problem in the app twice over.
    ignores: ['dist/*', '.claude/**'],
  },
  {
    // The board scenes are ported from the webpage and carry their teaching
    // copy as literal text — apostrophes and quotation marks included.
    //
    // `no-unescaped-entities` is an HTML rule, and following it here would be
    // actively wrong: these strings render inside react-native-svg `<Text>`,
    // which prints `&apos;` verbatim instead of decoding it. Escaping them
    // would put "that&apos;s" on the board.
    //
    // The unused-import warnings are the same story — a scene imports the kit
    // symbols its authored layout mentions, and the codemod preserves that
    // import list rather than second-guessing which the file still uses.
    files: ['components/scenes/**/*.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
