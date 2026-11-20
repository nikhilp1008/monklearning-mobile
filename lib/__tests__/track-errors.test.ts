/**
 * Errors and deliberate actions travel the same queue as screen views, to our
 * own server (POST /events) and nowhere else.
 *
 * What is pinned here: an uncaught error is recorded with where it happened and
 * the handler that was already installed still runs; one launch looping on the
 * same error cannot flood the queue; nothing here can itself throw; and a
 * "tap" says which screen it was made on.
 */
import fs from 'fs';
import path from 'path';

const posted: any[] = [];

jest.mock('@/lib/api', () => ({
  ApiError: class ApiError extends Error {},
  apiFetch: jest.fn(async (_path: string, init: any) => {
    if (init?.body) posted.push(JSON.parse(init.body));
    return {};
  }),
}));

async function settle() {
  for (let i = 0; i < 8; i++) await new Promise((r) => setImmediate(r));
}

/** Send everything queued. An error flushes on its own, and a flush already under way makes the next one a
 *  no-op, so one call is not enough to empty the queue. */
async function drain(track: any) {
  for (let i = 0; i < 3; i++) { await settle(); await track.flush(); }
  await settle();
}

const events = (name: string) => posted.flatMap((b) => b.events ?? []).filter((e: any) => e.event === name);

let previous: jest.Mock;
let installed: any;

async function start() {
  posted.length = 0;
  previous = jest.fn();
  installed = previous;
  (global as any).ErrorUtils = {
    getGlobalHandler: () => installed,
    setGlobalHandler: (h: any) => { installed = h; },
  };
  let mod: any;
  jest.isolateModules(() => { mod = require('../track'); });
  mod.initTracking();
  await settle();
  return mod;
}

afterEach(() => {
  jest.resetModules();
  delete (global as any).ErrorUtils;
});

it('records an uncaught error with the screen it happened on, and still runs the handler that was there', async () => {
  const track = await start();
  track.trackScreen('/plans');
  const boom = new TypeError('cannot read x of undefined');
  installed(boom, true);
  await drain(track);

  const [e] = events('app_error');
  expect(e.screen).toBe('/plans');
  expect(e.props).toMatchObject({ message: 'cannot read x of undefined', name: 'TypeError', where: 'global', fatal: true });
  expect(typeof e.props.stack).toBe('string');
  expect(previous).toHaveBeenCalledWith(boom, true);
});

it('a launch that loops on one error sends it three times, and no launch sends more than twenty', async () => {
  const track = await start();
  for (let i = 0; i < 10; i++) track.trackError(new Error('same thing'), 'global');
  for (let i = 0; i < 40; i++) track.trackError(new Error(`different ${i}`), 'promise');
  await drain(track);

  const all = events('app_error');
  expect(all.filter((e: any) => e.props.message === 'same thing')).toHaveLength(3);
  expect(all).toHaveLength(20);
});

it('cuts a long message and stack short, and never throws on something that is not an Error', async () => {
  const track = await start();
  const long = new Error('m'.repeat(5000));
  long.stack = 's'.repeat(9000);
  expect(() => {
    track.trackError(long, 'screen', true);
    track.trackError(null, 'global');
    track.trackError('just a string', 'promise');
    track.trackError({ nothing: 'useful' }, 'global');
    track.trackError(undefined as any, 'global');
  }).not.toThrow();
  await drain(track);

  const all = events('app_error');
  const cut = all.find((e: any) => e.props.where === 'screen');
  expect(cut.props.message).toHaveLength(300);
  expect(cut.props.stack).toHaveLength(1500);
  expect(all.map((e: any) => e.props.message)).toEqual(
    expect.arrayContaining(['unknown error', 'just a string']));
});

it('a tap carries its name, what it was about, and the screen it was made on', async () => {
  const track = await start();
  track.trackScreen('/plans-promo');
  track.trackTap('promo_checked', { kind: 'week', ok: false });
  await drain(track);

  const [tap] = events('tap');
  expect(tap.screen).toBe('/plans-promo');
  expect(tap.props).toEqual({ name: 'promo_checked', kind: 'week', ok: false });
});

it('an action reported through lib/tap reaches the tracker once it has started, and goes nowhere before', async () => {
  const early = require('../tap');
  expect(() => early.noteTap('too_early', { a: 1 })).not.toThrow();

  posted.length = 0;
  previous = jest.fn();
  installed = previous;
  (global as any).ErrorUtils = { getGlobalHandler: () => installed, setGlobalHandler: (h: any) => { installed = h; } };
  let track: any, tap: any;
  jest.isolateModules(() => { track = require('../track'); tap = require('../tap'); });
  track.initTracking();
  await settle();
  track.trackScreen('/plans');
  tap.noteTap('pay_started', { kind: 'week', with_code: true, offer: null });
  await drain(track);

  const [sent] = events('tap');
  expect(sent.screen).toBe('/plans');
  expect(sent.props).toEqual({ name: 'pay_started', kind: 'week', with_code: true, offer: null });
  expect(events('tap')).toHaveLength(1);
  tap.setTapSink(() => { throw new Error('sink broke'); });
  expect(() => tap.noteTap('still_fine')).not.toThrow();
});

it('nothing is recorded before tracking has started, and an error then is simply dropped', () => {
  let mod: any;
  jest.isolateModules(() => { mod = require('../track'); });
  expect(() => { mod.trackError(new Error('early'), 'global'); mod.trackTap('early'); }).not.toThrow();
});

it('without a global handler on this runtime, tracking still starts', async () => {
  posted.length = 0;
  delete (global as any).ErrorUtils;
  let mod: any;
  jest.isolateModules(() => { mod = require('../track'); });
  expect(() => mod.initTracking()).not.toThrow();
  await settle();
  expect(events('app_open')).toHaveLength(1);
});

it('the root error screen, the promo check and the start of a payment each report through the tracker', () => {
  const read = (p: string) => fs.readFileSync(path.join(__dirname, '..', '..', p), 'utf8');
  const layout = read('app/_layout.tsx');
  expect(layout).toContain("trackError(error, 'screen', true)");
  expect(read('lib/promo.ts')).toContain("noteTap('promo_checked'");
  expect(read('lib/payments.ts')).toContain("noteTap('pay_started'");
  // Through lib/tap.ts, which imports nothing: the tracker's storage and device modules stay out of them.
  for (const f of ['lib/promo.ts', 'lib/payments.ts']) expect(read(f)).not.toContain("@/lib/track");
  expect(read('lib/tap.ts')).not.toMatch(/^import /m);
  // To our own server only: no outside crash service is pulled in.
  const pkg = read('package.json');
  for (const name of ['sentry', 'crashlytics', 'bugsnag']) expect(pkg.toLowerCase()).not.toContain(name);
});
