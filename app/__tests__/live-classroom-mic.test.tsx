/**
 * Entering the classroom must not open the microphone unless the microphone is
 * genuinely there — and must still teach when it is not.
 *
 * This is the wiring half of the fix; `lib/__tests__/mic-availability.test.ts`
 * is the decision half. The property asserted here is the one that actually
 * stops the crash: `startRecording` — the call whose native path reaches
 * `AVAudioEngine.inputNode` and `abort()`s the process when there is no
 * reachable input — is never reached from this screen unless permission is
 * granted AND an input reported that it can supply samples.
 *
 * The forced failure is injected at the two probe inputs (expo-audio's
 * permission query and audio-studio's device enumeration), which is the same
 * seam the real device fails at. What this canNOT do is reproduce the native
 * abort itself; nothing in JS can, which is the entire reason the guard is a
 * pre-check rather than a `catch`.
 */
import React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';

// The screen bails to a "Couldn't join the class" card without this, and never
// renders the rail these assertions are about.
process.env.EXPO_PUBLIC_API_URL = 'https://classroom.test';

const mockStartRecording = jest.fn((_options: Record<string, unknown>) => Promise.resolve());
const mockStopRecording = jest.fn(() => Promise.resolve());
const mockGetPermissions = jest.fn(() => Promise.resolve({ granted: true, canAskAgain: false }));
const mockRequestPermissions = jest.fn(() => Promise.resolve({ granted: true, canAskAgain: false }));
const mockListDevices = jest.fn<Promise<unknown>, []>(() => Promise.resolve([]));

/** A built-in mic that can actually record — the shape both natives return. */
const HEALTHY_MIC = {
  id: 'builtin-mic',
  name: 'iPhone Microphone',
  type: 'builtin_mic',
  isDefault: true,
  isAvailable: true,
  capabilities: { sampleRates: [8000, 16000, 22050, 44100, 48000, 96000] },
};

jest.mock('expo-router', () => ({
  router: { replace: jest.fn(), back: jest.fn() },
  useLocalSearchParams: () => ({ sessionId: 'session-1', chapterTitle: 'Laws of Motion', subject: 'physics' }),
}));

jest.mock('expo-audio', () => ({
  getRecordingPermissionsAsync: () => mockGetPermissions(),
  requestRecordingPermissionsAsync: () => mockRequestPermissions(),
  setAudioModeAsync: () => Promise.resolve(),
}));

jest.mock('@siteed/audio-studio', () => ({
  useAudioRecorder: () => ({
    startRecording: mockStartRecording,
    stopRecording: mockStopRecording,
  }),
  AudioStudioModule: { getAvailableInputDevices: () => mockListDevices() },
}));

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/drona-prewarm', () => ({ claimDronaClient: () => null }));
jest.mock('@/lib/drona-live', () => ({ endDronaSession: () => Promise.resolve(null) }));
jest.mock('@/lib/drona-voice-client', () => ({
  DronaVoiceClient: class {
    connect() {}
    disconnect() {}
    whenReady() {
      return Promise.resolve();
    }
    sendUtterance() {}
  },
}));
jest.mock('@/hooks/use-landscape-lock', () => ({
  useLandscapeLock: () => true,
  // The classroom asks for an orientation now rather than declaring landscape.
  // `true` means "the window already matches", which is what lets it paint.
  useOrientation: () => true,
}));
jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

/** Every string rendered anywhere in the tree. */
function allText(node: unknown, out: string[] = []): string[] {
  if (typeof node === 'string') out.push(node);
  else if (Array.isArray(node)) node.forEach((child) => allText(child, out));
  else if (node && typeof node === 'object') allText((node as { children?: unknown }).children, out);
  return out;
}

/** Mount the classroom and let the mic probe settle. */
/**
 * Flush until the microphone probe has actually finished, not for a fixed
 * number of turns.
 *
 * This used to be a single empty `act(async () => {})` with the comment "the
 * probe's promise chain resolves and commits its state" — which assumes the
 * chain is exactly one microtask tier deep. It is not: permissions resolve,
 * then devices enumerate, then the decision commits, and each hop is its own
 * tier. On an unloaded machine one flush happened to be enough; under full
 * suite load this case failed roughly one run in three, and it was the only
 * one that ever failed because it is the only one whose mocks all resolve
 * EMPTY — nothing else in the file depends this tightly on the chain being
 * complete before the assertion runs.
 *
 * So: flush until the probe stops doing anything, judged by the probe's own
 * observable — how many times it has called out. A fixpoint, not a guess.
 * The bound is there so a genuinely stuck probe fails loudly with a message
 * instead of spinning forever, which is the failure mode a bare `while` would
 * turn into a hung CI job.
 */
async function settle(maxTurns = 25): Promise<void> {
  let previous = -1;
  for (let turn = 0; turn < maxTurns; turn += 1) {
    const calls =
      mockGetPermissions.mock.calls.length +
      mockRequestPermissions.mock.calls.length +
      mockListDevices.mock.calls.length +
      mockStartRecording.mock.calls.length;
    // Quiescent for a whole turn: the chain has nothing left to run.
    if (calls === previous) return;
    previous = calls;
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {});
  }
  throw new Error(
    `the microphone probe never settled in ${maxTurns} turns — it is either ` +
      `looping or awaiting something these mocks never resolve`
  );
}

async function enterClassroom(): Promise<ReactTestRenderer> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const LiveClassroomScreen = require('../live-classroom').default;
  let renderer!: ReactTestRenderer;
  await act(async () => {
    renderer = create(React.createElement(LiveClassroomScreen));
  });
  await settle();
  return renderer;
}

describe('entering the live classroom without a usable microphone', () => {
  let renderer: ReactTestRenderer | null = null;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    mockGetPermissions.mockImplementation(() =>
      Promise.resolve({ granted: true, canAskAgain: false })
    );
    mockListDevices.mockImplementation(() => Promise.resolve([]));
  });

  afterEach(() => {
    act(() => {
      renderer?.unmount();
    });
    renderer = null;
    jest.restoreAllMocks();
  });

  it('never calls startRecording when no input device is reported', async () => {
    renderer = await enterClassroom();
    expect(mockStartRecording).not.toHaveBeenCalled();
  });

  it('never calls startRecording when the student refused the microphone', async () => {
    mockGetPermissions.mockImplementation(() =>
      Promise.resolve({ granted: false, canAskAgain: false })
    );
    mockListDevices.mockImplementation(() => Promise.resolve([HEALTHY_MIC]));
    renderer = await enterClassroom();
    expect(mockStartRecording).not.toHaveBeenCalled();
  });

  it('never calls startRecording when device enumeration fails', async () => {
    // The wedged-audio-server shape: `AVAudioSession.setActive` throws, which
    // audio-studio surfaces as a rejection instead of aborting because it never
    // builds an engine input node.
    mockListDevices.mockImplementation(() => Promise.reject(new Error('DEVICE_DETECTION_ERROR')));
    renderer = await enterClassroom();
    expect(mockStartRecording).not.toHaveBeenCalled();
  });

  it('never calls startRecording when the reported input can supply no sample rate', async () => {
    mockListDevices.mockImplementation(() =>
      Promise.resolve([{ ...HEALTHY_MIC, capabilities: { sampleRates: [] } }])
    );
    renderer = await enterClassroom();
    expect(mockStartRecording).not.toHaveBeenCalled();
  });

  it('still renders the classroom, so the lesson runs without voice', async () => {
    renderer = await enterClassroom();
    // The board, its chrome and the rail are all mounted — entry survived.
    expect(renderer.toJSON()).not.toBeNull();
    expect(allText(renderer.toJSON()).length).toBeGreaterThan(0);
  });

  it('says on the rail that the mic is off, rather than leaving a dead button', async () => {
    renderer = await enterClassroom();
    const text = allText(renderer.toJSON());
    expect(text).toContain('Mic off');
    expect(text).not.toContain('Interrupt');
  });
});

describe('entering the live classroom with a working microphone', () => {
  let renderer: ReactTestRenderer | null = null;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    mockGetPermissions.mockImplementation(() =>
      Promise.resolve({ granted: true, canAskAgain: false })
    );
    mockListDevices.mockImplementation(() => Promise.resolve([HEALTHY_MIC]));
  });

  afterEach(() => {
    act(() => {
      renderer?.unmount();
    });
    renderer = null;
    jest.restoreAllMocks();
  });

  it('opens the mic exactly as before — the guard must not cost a granted student anything', async () => {
    renderer = await enterClassroom();
    expect(mockStartRecording).toHaveBeenCalledTimes(1);
    const settings = mockStartRecording.mock.calls[0][0];
    expect(settings).toMatchObject({
      sampleRate: 16000,
      channels: 1,
      encoding: 'pcm_16bit',
      interval: 100,
      ios: {
        audioSession: {
          category: 'PlayAndRecord',
          categoryOptions: ['AllowBluetooth', 'MixWithOthers', 'DefaultToSpeaker'],
        },
      },
    });
  });

  it('leaves the rail in its normal Interrupt state', async () => {
    renderer = await enterClassroom();
    const text = allText(renderer.toJSON());
    expect(text).toContain('Interrupt');
    expect(text).not.toContain('Mic off');
  });

  it('asks for permission when it has never been asked, then opens the mic', async () => {
    mockGetPermissions.mockImplementation(() =>
      Promise.resolve({ granted: false, canAskAgain: true })
    );
    mockRequestPermissions.mockImplementation(() =>
      Promise.resolve({ granted: true, canAskAgain: false })
    );
    renderer = await enterClassroom();
    expect(mockRequestPermissions).toHaveBeenCalledTimes(1);
    expect(mockStartRecording).toHaveBeenCalledTimes(1);
  });
});
