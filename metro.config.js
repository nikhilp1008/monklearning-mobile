// Learn more https://docs.expo.dev/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

/**
 * WHAT METRO NEVER NEEDS TO LOOK AT.
 *
 * With no config, Metro crawls and watches the whole project folder, and in
 * this one most of that folder is not JavaScript the app can import:
 *
 *   ios/                  ~9,300 files of Pods, headers and build output
 *   .claude/worktrees/    a full second checkout of the repo, left by a tool
 *   build/                the verification harness's output
 *
 * Every one of those files is stat'ed, hashed and watched at startup. On
 * 2026-09-19, after an OS upgrade, Metro began dying with "JavaScript heap out
 * of memory" before it had served a single request — at a different line each
 * time, which is what memory exhaustion looks like rather than a bad file.
 * Taking these out of the crawl is the part of that fix that belongs in code.
 *
 * ANCHORED TO THIS FOLDER, and that is not a nicety. Every Expo package ships
 * its JavaScript inside a `build/` directory — expo-router/build,
 * expo-modules-core/build — so an unanchored `/build/` pattern would block half
 * of node_modules and the app would not resolve at all. These match only the
 * project's own top-level folders.
 *
 * `blockList` is also the file map's ignore pattern, so these are skipped by
 * the crawler and the watcher, not just by the resolver. Added to Expo's own
 * defaults, never in place of them.
 */
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const ownFolder = (name) => new RegExp(`^${escape(path.join(__dirname, name))}\\/.*`);

config.resolver.blockList = [
  ...[].concat(config.resolver.blockList ?? []),
  ownFolder('ios'),
  ownFolder('android'),
  ownFolder('.claude'),
  ownFolder('build'),
];

module.exports = config;
