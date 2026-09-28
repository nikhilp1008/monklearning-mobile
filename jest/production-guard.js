/**
 * No test may reach production (W1) — the jest half of the API's
 * tests/production_guard.py. Runs before every test file (setupFiles, last).
 *
 * 1. CONFIGURATION. If EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_API_URL or any
 *    other variable in the environment names the production project or API,
 *    the file fails before a test runs. (jest/production-guard-global.js makes
 *    the same check once for the whole run, so a normal `npx jest` stops
 *    with one message instead of one per suite.) Jest does not load .env, so
 *    this only fires when a shell exported the production values.
 *
 * 2. NETWORK. global fetch, XMLHttpRequest and WebSocket refuse the production
 *    Supabase host, any other hosted Supabase project and the production API
 *    before any I/O, with an error that says what to mock. Behind them, one
 *    guard on net.Socket#connect catches everything else in this process
 *    (node:http/https, a real undici, a polyfilled XHR).
 *
 * A test that mocks fetch (global.fetch = jest.fn()) replaces the guarded one,
 * which is fine: a mock does no I/O. Refusals are recorded on
 * globalThis.__PRODUCTION_GUARD__.refused. The real functions are looked up
 * there (and on a symbol for the socket) at call time, so the proof test in
 * jest/__tests__/production-guard.test.ts can swap them for tripwires and show
 * that nothing got past.
 */
'use strict';

const net = require('net');
const {
  ProductionAccessRefused,
  hostOf,
  refusalReason,
  refusalMessage,
  assertNoProductionEnv,
} = require('./production-hosts');

assertNoProductionEnv(process.env);

const state = (globalThis.__PRODUCTION_GUARD__ = globalThis.__PRODUCTION_GUARD__ || {
  refused: [],
  real: {},
});

function currentTest() {
  try {
    return globalThis.expect ? globalThis.expect.getState().currentTestName : undefined;
  } catch {
    return undefined;
  }
}

function refuse(layer, what, reason) {
  state.refused.push({ layer, what, reason, test: currentTest() });
  return new ProductionAccessRefused(refusalMessage(layer, what, reason));
}

function urlOf(input) {
  if (input == null) return '';
  if (typeof input === 'string') return input;
  return input.url || input.href || String(input);
}

// ── fetch ────────────────────────────────────────────────────────────────────
if (typeof globalThis.fetch === 'function' && !state.real.fetch) {
  state.real.fetch = globalThis.fetch;
  globalThis.fetch = function fetch(input, init) {
    const url = urlOf(input);
    const why = refusalReason(hostOf(url));
    if (why) {
      const method = (init && init.method) || (input && input.method) || 'GET';
      return Promise.reject(refuse('fetch', `${method} ${url}`, why));
    }
    return state.real.fetch.call(this, input, init);
  };
}

// ── XMLHttpRequest ───────────────────────────────────────────────────────────
// The node environment has none (lib/snap-stream.ts and lib/doubt-followup.ts
// use React Native's), so whatever a test or polyfill installs later is guarded
// as it is assigned. Reading it is unchanged: still undefined until then.
const XHR_GUARDED = Symbol.for('monk.productionGuard.xhr');
function guardXhr(Xhr) {
  const proto = typeof Xhr === 'function' ? Xhr.prototype : null;
  if (!proto || typeof proto.open !== 'function' || proto[XHR_GUARDED]) return;
  const realOpen = proto.open;
  proto.open = function open(method, url, ...rest) {
    const why = refusalReason(hostOf(urlOf(url)));
    if (why) throw refuse('XMLHttpRequest', `${method} ${urlOf(url)}`, why);
    return realOpen.call(this, method, url, ...rest);
  };
  proto[XHR_GUARDED] = true;
}
let currentXhr = globalThis.XMLHttpRequest;
guardXhr(currentXhr);
Object.defineProperty(globalThis, 'XMLHttpRequest', {
  configurable: true,
  get: () => currentXhr,
  set: (Xhr) => {
    guardXhr(Xhr);
    currentXhr = Xhr;
  },
});

// ── WebSocket ────────────────────────────────────────────────────────────────
if (typeof globalThis.WebSocket === 'function' && !state.real.WebSocket) {
  const Real = globalThis.WebSocket;
  state.real.WebSocket = Real;
  // A plain function rather than `class extends Real`, so the refusal happens
  // before anything of the real socket is constructed and the real class is
  // read from `state` at call time.
  const WebSocket = function WebSocket(url, protocols) {
    if (!new.target) {
      throw new TypeError("Failed to construct 'WebSocket': Please use the 'new' operator.");
    }
    const why = refusalReason(hostOf(urlOf(url)));
    if (why) throw refuse('WebSocket', urlOf(url), why);
    const Target = state.real.WebSocket;
    return Reflect.construct(Target, Array.from(arguments), new.target === WebSocket ? Target : new.target);
  };
  WebSocket.prototype = Real.prototype;
  Object.setPrototypeOf(WebSocket, Real); // CONNECTING, OPEN, CLOSING, CLOSED
  globalThis.WebSocket = WebSocket;
}

// ── everything else: the socket itself ──────────────────────────────────────
// net is shared by every test file in this worker, so it is wrapped once per
// process; the real connect lives on a symbol, not in this file's closure.
const REAL_CONNECT = Symbol.for('monk.productionGuard.realConnect');
const SocketProto = net.Socket.prototype;
if (!SocketProto[REAL_CONNECT]) {
  SocketProto[REAL_CONNECT] = SocketProto.connect;
  SocketProto.connect = function connect(...args) {
    let first = args[0];
    if (Array.isArray(first)) first = first[0]; // node's normalized [options, cb]
    let host = '';
    if (first && typeof first === 'object') host = first.host || first.servername || '';
    else if (typeof args[1] === 'string') host = args[1];
    const why = refusalReason(host);
    if (why) {
      const err = new Error(refusalMessage('net.Socket.connect', `${host}`, why));
      err.name = 'ProductionAccessRefused';
      throw err;
    }
    return SocketProto[REAL_CONNECT].apply(this, args);
  };
}
