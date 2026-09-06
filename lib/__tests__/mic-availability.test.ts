/**
 * The decision that stands between the classroom and a SIGABRT.
 *
 * `startRecording` reaching `AVAudioEngine.inputNode` on a device with no
 * reachable audio input aborts the process (see the header of
 * `lib/mic-availability.ts` for the stack). Nothing downstream can catch that,
 * so the only thing worth testing is that this function refuses to say "yes" on
 * anything short of a real, positive answer — and that it still says "yes" when
 * the answer IS real, because a student who granted the mic must keep it.
 */
import {
  decideMicAvailability,
  probeMicAvailability,
  type MicPermissionLike,
  type RawInputDevice,
} from '@/lib/mic-availability';

/** A healthy built-in mic, shaped as iOS/Android actually return it. */
const HEALTHY_MIC: RawInputDevice = {
  id: 'builtin-mic',
  name: 'iPhone Microphone',
  isAvailable: true,
  capabilities: { sampleRates: [8000, 16000, 22050, 44100, 48000, 96000] },
};

/**
 * The same port with NO usable rates. This is what audio-studio's iOS
 * `getDeviceCapabilities` produces when `AVAudioSession.isInputAvailable` is
 * false — every candidate rate is filtered out by that flag, so an empty list
 * is the one signal that reaches JS saying "this route cannot supply samples".
 */
const MIC_WITH_NO_INPUT: RawInputDevice = {
  id: 'builtin-mic',
  name: 'iPhone Microphone',
  isAvailable: true,
  capabilities: { sampleRates: [] },
};

const GRANTED: MicPermissionLike = { granted: true, canAskAgain: false };
const REFUSED: MicPermissionLike = { granted: false, canAskAgain: false };

describe('decideMicAvailability', () => {
  it('allows the mic when permission is granted and a usable input exists', () => {
    expect(
      decideMicAvailability({ moduleLoaded: true, permission: GRANTED, devices: [HEALTHY_MIC] })
        .status
    ).toBe('available');
  });

  it('allows the mic when one of several inputs is usable', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: [MIC_WITH_NO_INPUT, HEALTHY_MIC],
      }).status
    ).toBe('available');
  });

  it('reports denial when the student refused, so the card can offer Settings', () => {
    expect(
      decideMicAvailability({ moduleLoaded: true, permission: REFUSED, devices: [HEALTHY_MIC] })
        .status
    ).toBe('denied');
  });

  it('reports no-input when the device list is empty', () => {
    expect(
      decideMicAvailability({ moduleLoaded: true, permission: GRANTED, devices: [] }).status
    ).toBe('no-input');
  });

  it('reports no-input when every reported input can supply no sample rate', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: [MIC_WITH_NO_INPUT],
      }).status
    ).toBe('no-input');
  });

  it('reports no-input when the only input flags itself unavailable', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: [{ ...HEALTHY_MIC, isAvailable: false }],
      }).status
    ).toBe('no-input');
  });

  // --- The absent-information cases. Every one of these must refuse. ---

  it('refuses when the native module never loaded', () => {
    expect(
      decideMicAvailability({ moduleLoaded: false, permission: GRANTED, devices: [HEALTHY_MIC] })
        .status
    ).toBe('unavailable');
  });

  it('refuses when the permission query returned nothing', () => {
    expect(
      decideMicAvailability({ moduleLoaded: true, permission: null, devices: [HEALTHY_MIC] }).status
    ).toBe('unavailable');
  });

  it('refuses when the permission response has no `granted` boolean', () => {
    // Not `denied` — we did not learn that they said no, we learned nothing.
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: { canAskAgain: true },
        devices: [HEALTHY_MIC],
      }).status
    ).toBe('unavailable');
  });

  it('refuses when `granted` is a truthy non-boolean', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: { granted: 'granted' },
        devices: [HEALTHY_MIC],
      }).status
    ).toBe('unavailable');
  });

  it('refuses when device enumeration failed', () => {
    expect(
      decideMicAvailability({ moduleLoaded: true, permission: GRANTED, devices: null }).status
    ).toBe('unavailable');
  });

  it('refuses when the device list is not a list', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: { id: 'builtin-mic' } as unknown as RawInputDevice[],
      }).status
    ).toBe('unavailable');
  });

  it('refuses a device that omits its capabilities rather than assuming them', () => {
    // This is the exact shape audio-studio's own `getAvailableDevices()` wrapper
    // invents on failure, minus the invented capabilities. Absent is not "fine".
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: [{ id: 'default', name: 'Default Microphone', isAvailable: true }],
      }).status
    ).toBe('no-input');
  });

  it('refuses a device whose sampleRates is not an array', () => {
    expect(
      decideMicAvailability({
        moduleLoaded: true,
        permission: GRANTED,
        devices: [{ ...HEALTHY_MIC, capabilities: { sampleRates: 48000 } }],
      }).status
    ).toBe('no-input');
  });
});

describe('probeMicAvailability', () => {
  const healthyDeps = {
    moduleLoaded: true,
    getPermission: () => Promise.resolve(GRANTED),
    requestPermission: () => Promise.resolve(GRANTED),
    listInputDevices: () => Promise.resolve([HEALTHY_MIC]),
    timeoutMs: 50,
  };

  it('says available on a healthy device', async () => {
    await expect(probeMicAvailability(healthyDeps)).resolves.toMatchObject({
      status: 'available',
    });
  });

  it('asks for permission when it has not been asked yet, and proceeds if granted', async () => {
    const requestPermission = jest.fn(() => Promise.resolve(GRANTED));
    const decision = await probeMicAvailability({
      ...healthyDeps,
      getPermission: () => Promise.resolve({ granted: false, canAskAgain: true }),
      requestPermission,
    });
    expect(requestPermission).toHaveBeenCalledTimes(1);
    expect(decision.status).toBe('available');
  });

  it('does not re-ask when the OS will not show a prompt', async () => {
    const requestPermission = jest.fn(() => Promise.resolve(GRANTED));
    const decision = await probeMicAvailability({
      ...healthyDeps,
      getPermission: () => Promise.resolve(REFUSED),
      requestPermission,
    });
    expect(requestPermission).not.toHaveBeenCalled();
    expect(decision.status).toBe('denied');
  });

  it('never enumerates devices when permission was refused', async () => {
    const listInputDevices = jest.fn(() => Promise.resolve([HEALTHY_MIC]));
    const decision = await probeMicAvailability({
      ...healthyDeps,
      getPermission: () => Promise.resolve(REFUSED),
      listInputDevices,
    });
    expect(listInputDevices).not.toHaveBeenCalled();
    expect(decision.status).toBe('denied');
  });

  // --- Forced failure injection: each of these is a way the real device fails. ---

  it('refuses when the permission query throws', async () => {
    await expect(
      probeMicAvailability({
        ...healthyDeps,
        getPermission: () => Promise.reject(new Error('module unavailable')),
      })
    ).resolves.toMatchObject({ status: 'unavailable' });
  });

  it('refuses when the permission query hangs', async () => {
    await expect(
      probeMicAvailability({ ...healthyDeps, getPermission: () => new Promise<never>(() => {}) })
    ).resolves.toMatchObject({ status: 'unavailable' });
  });

  it('refuses when device enumeration rejects — the wedged-audio-server shape', async () => {
    // audio-studio's `getAvailableInputDevices` rejects with
    // DEVICE_DETECTION_ERROR when `AVAudioSession.setActive(true)` throws. It
    // stays inside AVAudioSession, so it rejects where `startRecording` aborts.
    await expect(
      probeMicAvailability({
        ...healthyDeps,
        listInputDevices: () => Promise.reject(new Error('DEVICE_DETECTION_ERROR')),
      })
    ).resolves.toMatchObject({ status: 'unavailable' });
  });

  it('refuses when device enumeration hangs', async () => {
    await expect(
      probeMicAvailability({ ...healthyDeps, listInputDevices: () => new Promise<never>(() => {}) })
    ).resolves.toMatchObject({ status: 'unavailable' });
  });

  it('refuses when the native module never loaded, without calling anything', async () => {
    const getPermission = jest.fn(() => Promise.resolve(GRANTED));
    const listInputDevices = jest.fn(() => Promise.resolve([HEALTHY_MIC]));
    const decision = await probeMicAvailability({
      ...healthyDeps,
      moduleLoaded: false,
      getPermission,
      listInputDevices,
    });
    expect(getPermission).not.toHaveBeenCalled();
    expect(listInputDevices).not.toHaveBeenCalled();
    expect(decision.status).toBe('unavailable');
  });

  it('reports no-input when enumeration succeeds but nothing can record', async () => {
    await expect(
      probeMicAvailability({
        ...healthyDeps,
        listInputDevices: () => Promise.resolve([MIC_WITH_NO_INPUT]),
      })
    ).resolves.toMatchObject({ status: 'no-input' });
  });
});
