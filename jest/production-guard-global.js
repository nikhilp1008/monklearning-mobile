/**
 * Jest globalSetup: refuse to start a run whose environment points at
 * production (W1). One message and a non-zero exit, before any test file
 * loads — jest/production-guard.js repeats the check per file and guards the
 * network. `env` exists for the proof test; jest passes (globalConfig,
 * projectConfig).
 */
'use strict';

const { assertNoProductionEnv } = require('./production-hosts');

/**
 * @param {unknown} [_globalConfig]
 * @param {unknown} [_projectConfig]
 * @param {Record<string, string | undefined>} [env]
 */
module.exports = async function productionIsolation(_globalConfig, _projectConfig, env = process.env) {
  assertNoProductionEnv(env);
};
