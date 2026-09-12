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
/** The floor: opened on press-in, and owed back on press-out. */
const mockPttStart = jest.fn();
const mockPttStop = jest.fn();

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

const mockImpact = jest.fn();
const mockNotification = jest.fn();
jest.mock('expo-haptics', () => ({
  impactAsync: (style: string) => {
    mockImpact(style);
    return Promise.resolve();
  },
  notificationAsync: (type: string) => {
    mockNotification(type);
    return Promise.resolve();
  },
  performAndroidHapticsAsync: () => Promise.resolve(),
  ImpactFeedbackStyle: { Light: 'light', Medium: 'medium' },
  NotificationFeedbackType: { Warning: 'warning' },
  AndroidHaptics: { Gesture_Start: 'gesture-start', Gesture_End: 'gesture-end', Reject: 'reject' },
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
    sendPttStart() {
      mockPttStart();
    }
    sendPttStop() {
      mockPttStop();
    }
    pausePlayback() {}
    resumePlayback() {}
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
async function enterClassroom(): Promise<ReactTestRenderer> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const LiveClassroomScreen = require('../live-classroom').default;
  let renderer!: ReactTestRenderer;
  await act(async () => {
    renderer = create(React.createElement(LiveClassroomScreen));
  });
  // Second pass: the probe's promise chain resolves and commits its state.
  await act(async () => {});
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

  /**
   * A REFUSED PRESS HAS TO FEEL DIFFERENT FROM A DEAD ONE.
   *
   * Without its own tap, pressing a mic that cannot open feels exactly like
   * pressing a button that does nothing — and "my phone ignored me" is a worse
   * story than "my phone told me no", especially when the reason is a
   * permission the student can go and fix. The card says why; this is what
   * makes them look at it.
   */
  it('answers a press it cannot honour with a refusal, not the take', async () => {
    renderer = await enterClassroom();
    const mic = renderer.root.findByProps({ accessibilityLabel: 'Hold to speak' });
    await act(async () => {
      mic.props.onPressIn();
    });
    expect(mockNotification).toHaveBeenCalledWith('warning');
    expect(mockImpact).not.toHaveBeenCalled();
    // And letting go of a press that never took the floor stays silent.
    await act(async () => {
      mic.props.onPressOut();
    });
    expect(mockImpact).not.toHaveBeenCalled();
  });

  it('says on the dock that the mic is off, rather than leaving a dead button', async () => {
    renderer = await enterClassroom();
    const text = allText(renderer.toJSON());
    expect(text).toContain('Mic off');
    expect(text).not.toContain('Hold mic to speak');
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

  /**
   * The resting copy is "Hold mic to speak", not "Interrupt" — the word went
   * with the command dock redesign, along with the label it used to sit in.
   * What this test is actually for is unchanged: a student whose mic works must
   * not be shown the mic-off state.
   */
  it('leaves the dock in its normal resting state', async () => {
    renderer = await enterClassroom();
    const text = allText(renderer.toJSON());
    expect(text).toContain('Hold mic to speak');
    expect(text).not.toContain('Mic off');
  });

  /**
   * THE FLOOR HAS TO COME BACK EVEN IF THE BUTTON DOES NOT.
   *
   * `sendPttStop` has one caller, the mic's `onPressOut`, and the mic lives
   * inside the screen's `isLandscape ?` branch — so rotating mid-hold unmounts
   * the very Pressable that owes us the release. When that happened no
   * `onPressOut` ever arrived: the PTT window stayed open until a 30s ceiling
   * retired it, the teacher stayed stopped, and the next hold was eaten
   * because the server's `is_ptt_active` was never cleared.
   *
   * Unmounting is the same shape of event as rotating, and it is the one a
   * test can stage, so that is what this asserts: the floor is given back on
   * the way out, without a press-out.
   */
  it('gives the floor back when the mic button goes away mid-hold', async () => {
    renderer = await enterClassroom();
    const mic = renderer.root.findByProps({ accessibilityLabel: 'Hold to speak' });
    await act(async () => {
      mic.props.onPressIn();
    });
    expect(mockPttStart).toHaveBeenCalledTimes(1);
    expect(mockPttStop).not.toHaveBeenCalled();

    // No press-out: the button is simply gone, as it is on a rotation.
    await act(async () => {
      renderer?.unmount();
    });
    renderer = null;
    expect(mockPttStop).toHaveBeenCalledTimes(1);
  });

  /** Taking the floor and giving it back are one gesture, so they are one
   *  pair: firmer opening it, lighter closing it. */
  it('taps on taking the floor and again, lighter, on giving it back', async () => {
    renderer = await enterClassroom();
    const mic = renderer.root.findByProps({ accessibilityLabel: 'Hold to speak' });
    await act(async () => {
      mic.props.onPressIn();
    });
    expect(mockImpact).toHaveBeenCalledWith('medium');
    expect(mockNotification).not.toHaveBeenCalled();
    await act(async () => {
      mic.props.onPressOut();
    });
    expect(mockImpact).toHaveBeenLastCalledWith('light');
  });

  /**
   * The 30s ceiling and the socket teardown both call `doneListening`, and
   * neither is a gesture: a buzz as the class unmounts under the student would
   * be a lie about what they did. Only a real press-out is felt.
   */
  it('does not buzz when the floor is released without a press-out', async () => {
    renderer = await enterClassroom();
    const mic = renderer.root.findByProps({ accessibilityLabel: 'Hold to speak' });
    await act(async () => {
      mic.props.onPressIn();
    });
    mockImpact.mockClear();
    await act(async () => {
      renderer?.unmount();
    });
    renderer = null;
    expect(mockPttStop).toHaveBeenCalled();
    expect(mockImpact).not.toHaveBeenCalled();
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
