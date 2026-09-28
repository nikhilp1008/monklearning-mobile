/**
 * What "production" means to the test run (W1). Pure: no side effects, so the
 * global setup, the per-file guard and the proof test all read one definition.
 *
 * The ref is not a secret — it is the host of EXPO_PUBLIC_SUPABASE_URL in
 * eas.json and the committed .env, inlined into every app bundle.
 */
'use strict';

const PRODUCTION_SUPABASE_REF = 'tgbknrmnjwiokraddurx';
const PRODUCTION_SUPABASE_HOST = `${PRODUCTION_SUPABASE_REF}.supabase.co`;
const PRODUCTION_API_HOST = 'monk-learning-api-production.up.railway.app';

class ProductionAccessRefused extends Error {
  constructor(message) {
    super(message);
    this.name = 'ProductionAccessRefused';
  }
}

function normHost(host) {
  return String(host || '')
    .trim()
    .toLowerCase()
    .replace(/\.$/, '')
    .replace(/^\[(.*)\]$/, '$1');
}

function hostOf(url) {
  if (url == null) return '';
  const text = typeof url === 'string' ? url : url.href || url.url || String(url);
  try {
    return normHost(new URL(text).hostname);
  } catch {
    return '';
  }
}

/** Why no test may reach `host`, or null when it may. */
function refusalReason(host) {
  const h = normHost(host);
  if (!h) return null;
  if (h.includes(PRODUCTION_SUPABASE_REF)) return 'the production Supabase project';
  if (h === PRODUCTION_API_HOST) return 'the production API';
  if (/(^|\.)supabase\.(co|com|in)$/.test(h)) {
    return 'a hosted Supabase project (tests use fakes, never a real project)';
  }
  return null;
}

/** True when a URL (or any string) names the production project or API. */
function isProduction(value) {
  if (value == null) return false;
  const text = String(value).toLowerCase();
  return text.includes(PRODUCTION_SUPABASE_REF) || text.includes(PRODUCTION_API_HOST);
}

/**
 * Environment variables that point at production, by name.
 * @param {Record<string, string | undefined>} [env]
 * @returns {string[]}
 */
function productionEnvOffenders(env = process.env) {
  return Object.keys(env)
    .filter((k) => env[k] && isProduction(env[k]))
    .sort();
}

/** @param {Record<string, string | undefined>} [env] */
function assertNoProductionEnv(env = process.env) {
  const offenders = productionEnvOffenders(env);
  if (offenders.length) {
    throw new ProductionAccessRefused(
      `TEST ISOLATION: aborting the whole run — ${offenders.join(', ')} ` +
        `point${offenders.length === 1 ? 's' : ''} at production ` +
        `(${PRODUCTION_SUPABASE_HOST} / ${PRODUCTION_API_HOST}). Tests use ` +
        'fakes and must never reach production: unset them (or point them at ' +
        'a local stack) and run jest again. See jest/production-guard.js.',
    );
  }
}

function refusalMessage(layer, what, reason) {
  return (
    `TEST ISOLATION: refused ${what} [${layer}]: that is ${reason}. Tests must ` +
    'never reach production — mock this call (jest.mock the module, or give ' +
    'global.fetch a jest.fn). See jest/production-guard.js.'
  );
}

module.exports = {
  PRODUCTION_SUPABASE_REF,
  PRODUCTION_SUPABASE_HOST,
  PRODUCTION_API_HOST,
  ProductionAccessRefused,
  hostOf,
  refusalReason,
  isProduction,
  productionEnvOffenders,
  assertNoProductionEnv,
  refusalMessage,
};
