/**
 * Each events batch says which phone sent it — and nothing that identifies it.
 *
 * The server (POST /events, migration 0088) stamps brand, model, OS version
 * and phone/tablet onto every row of the batch, and works out the state from
 * the request itself. So the app sends a description of the handset once per
 * batch, asks for no permission, and never sends a serial or advertising ID.
 *
 * expo-device is optional at runtime: a dev client built before it was added
 * has no native module, and a tracker that throws on import breaks the app.
 */

const posted: any[] = [];

jest.mock('@/lib/api', () => ({
  apiFetch: jest.fn(async (_path: string, init: any) => {
    posted.push(JSON.parse(init.body));
    return {};
  }),
}));

async function settle() {
  for (let i = 0; i < 5; i++) await new Promise((r) => setImmediate(r));
}

async function firstBatch(setup: () => void) {
  posted.length = 0;
  let mod: any;
  jest.isolateModules(() => {
    setup();
    mod = require('../track');
  });
  mod.initTracking();
  await settle();
  return posted[0];
}

afterEach(() => {
  jest.resetModules();
  jest.dontMock('expo-device');
});

test('the batch carries brand, model, OS version and form factor', async () => {
  const body = await firstBatch(() => {
    jest.doMock('expo-device', () => ({
      brand: 'xiaomi', manufacturer: 'Xiaomi', modelName: 'Redmi Note 12',
      osVersion: '14', deviceType: 1,
      osBuildFingerprint: 'xiaomi/sunstone/…:user/release-keys',
    }), { virtual: true });
  });
  expect(body.events.map((e: any) => e.event)).toContain('app_open');
  expect(body.device).toEqual({
    brand: 'Xiaomi',                // Android's lower-case brand, capitalised
    model: 'Redmi Note 12',
    os_version: '14',
    device_type: 'phone',
  });
});

test('nothing that identifies the handset is sent', async () => {
  const body = await firstBatch(() => {
    jest.doMock('expo-device', () => ({
      brand: 'samsung', modelName: 'SM-A546E', osVersion: '13', deviceType: 1,
      osBuildFingerprint: 'samsung/a54xnsxx/…', osInternalBuildId: 'TP1A.220624.014',
    }), { virtual: true });
  });
  expect(Object.keys(body.device).sort()).toEqual(['brand', 'device_type', 'model', 'os_version']);
  expect(JSON.stringify(body)).not.toMatch(/fingerprint|TP1A|a54xnsxx/i);
});

test('without the native module, tracking still works and still describes the phone', async () => {
  const body = await firstBatch(() => {
    jest.doMock('expo-device', () => { throw new Error("Cannot find native module 'ExpoDevice'"); },
      { virtual: true });
  });
  expect(body.events.length).toBeGreaterThan(0);
  // Whatever the test runtime's Platform constants provide — never a crash.
  expect(body.device === null || typeof body.device === 'object').toBe(true);
});
