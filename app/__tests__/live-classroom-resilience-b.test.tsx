/**
 * The live class screen survives the phone it runs on (second file).
 *
 * Two cases of `live-classroom-resilience.test.tsx` that hang until the timeout
 * when they run after its mic-off case (fake timers and a screen unmounted on
 * the real clock); alone they pass in milliseconds. Same mocks and helpers.
 *
 * The wiring half of the 2026-10-04 resilience fixes; the transport half is
 * `lib/__tests__/drona-voice-client-resilience.test.ts`. Each case here is
 * something the screen itself has to do, with the real screen mounted and the
 * socket client and the recorder library replaced by stand-ins the test drives:
 *
 *   - the mic comes back after a call, Siri or an alarm (audio-studio mocked);
 *   - the class reconnects when the app returns to the foreground;
 *   - the board says "Reconnecting…" instead of going quiet;
 *   - the verdict reaches the chip that was tapped, and only that chip;
 *   - the pass gate can find the class to end; and
 *   - a board row that throws while it draws does not unmount the class.
 */
import React from 'react';
import { AppState } from 'react-native';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';

process.env.EXPO_PUBLIC_API_URL = 'https://classroom.test';
// The screen's own timers (the loading card's 20s staged status, the dock's
// sleep) are in the way of `act` settling on a cold, loaded machine; the budget
// is for that, not for anything this file waits on deliberately.
jest.setTimeout(60_000);

const mockStartRecording = jest.fn((_options: Record<string, unknown>) => Promise.resolve());
const mockStopRecording = jest.fn(() => Promise.resolve());
const mockResumeRecording = jest.fn(() => Promise.resolve());
/** What the hook returns. Mutable: a test says what state the recorder is in. */
const mockRecorder: {
  startRecording: typeof mockStartRecording;
  stopRecording: typeof mockStopRecording;
  resumeRecording: typeof mockResumeRecording;
  isRecording: boolean;
  isPaused: boolean;
} = {
  startRecording: mockStartRecording,
  stopRecording: mockStopRecording,
  resumeRecording: mockResumeRecording,
  isRecording: true,
  isPaused: false,
};
const HEALTHY_MIC = {
  id: 'builtin-mic',
  name: 'iPhone Microphone',
  type: 'builtin_mic',
  isDefault: true,
  isAvailable: true,
  capabilities: { sampleRates: [16000, 44100, 48000] },
};

/** The handlers the screen gave the client, and what the client was told to do. */
let mockHandlers: Record<string, (...args: unknown[]) => void> = {};
const mockOnForeground = jest.fn();
const mockSendAnswer = jest.fn();
/** Whether the board's widget draws or throws. */
let mockWidgetThrows = false;

jest.mock('expo-router', () => ({
  router: { replace: jest.fn(), back: jest.fn() },
  useLocalSearchParams: () => ({ sessionId: 'session-1', chapterTitle: 'Laws of Motion', subject: 'physics' }),
  // The screen is always focused here: run the effect once, like a mount.
  useFocusEffect: (effect: () => void | (() => void)) => require('react').useEffect(effect, [effect]),
}));
jest.mock('expo-haptics', () => ({
  impactAsync: () => Promise.resolve(),
  notificationAsync: () => Promise.resolve(),
  performAndroidHapticsAsync: () => Promise.resolve(),
  ImpactFeedbackStyle: { Light: 'light', Medium: 'medium' },
  NotificationFeedbackType: { Warning: 'warning' },
  AndroidHaptics: { Gesture_Start: 'gesture-start', Gesture_End: 'gesture-end', Reject: 'reject' },
}));
jest.mock('expo-audio', () => ({
  getRecordingPermissionsAsync: () => Promise.resolve({ granted: true, canAskAgain: false }),
  requestRecordingPermissionsAsync: () => Promise.resolve({ granted: true, canAskAgain: false }),
  setAudioModeAsync: () => Promise.resolve(),
}));
jest.mock('@siteed/audio-studio', () => ({
  useAudioRecorder: () => mockRecorder,
  AudioStudioModule: { getAvailableInputDevices: () => Promise.resolve([mockHealthyMic()]) },
}));
function mockHealthyMic() {
  return HEALTHY_MIC;
}
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/drona-prewarm', () => ({ claimDronaClient: () => null }));
jest.mock('@/lib/drona-live', () => ({ endDronaSession: () => Promise.resolve(null) }));
jest.mock('@/lib/drona-voice-client', () => ({
  appendBoardEvent: (board: unknown[], event: unknown) => [...board, event],
  applyBoardReplay: (board: unknown[], events: unknown[]) => [...board, ...events],
  DronaVoiceClient: class {
    constructor(_id: string, _token: unknown, _url: string, handlers: Record<string, (...a: unknown[]) => void>) {
      mockHandlers = handlers;
    }
    connect() {}
    disconnect() {}
    whenReady() {
      return Promise.resolve();
    }
    onForeground() {
      mockOnForeground();
    }
    sendUtterance() {}
    sendAnswer(text: string) {
      mockSendAnswer(text);
      return 'sent';
    }
    sendPttStart() {}
    sendPttStop() {}
    pausePlayback() {}
    resumePlayback() {}
  },
}));
jest.mock('@/hooks/use-landscape-lock', () => ({
  useLandscapeLock: () => true,
  useOrientation: () => true,
}));
// The dock, the loading card and the teacher's orb draw with Skia, which does
// not load under Jest; these tests are about the connection, not the drawing.
jest.mock('@shopify/react-native-skia', () => ({ useClock: () => ({ value: 0 }), useTypeface: () => null, vec: (x: number, y: number) => ({ x, y }) }));
jest.mock('@/components/entering-card', () => ({ EnteringCardScreen: () => null }));
jest.mock('@/components/classroom-dock-face', () => ({
  MicDisc: () => null,
  ThinkingRing: () => null,
  DockEdge: () => null,
}));
jest.mock('@/components/dock-face', () => ({ DockBars: () => null, MarigoldDisc: () => null }));
jest.mock('@/components/teacher-orb-poster', () => ({ TeacherOrbPoster: () => null, AskOrb: () => null }));
jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 402, height: 874 }),
}));
jest.mock('@/lib/widgets/BoardWidget', () => {
  const { Text } = require('react-native');
  return {
    BoardWidget: () => {
      if (mockWidgetThrows) throw new Error('widget exploded');
      return <Text>widget drawn</Text>;
    },
  };
});

import { getActiveClassSession } from '@/lib/active-class';

function allText(node: unknown, out: string[] = []): string[] {
  if (typeof node === 'string') out.push(node);
  else if (Array.isArray(node)) node.forEach((child) => allText(child, out));
  else if (node && typeof node === 'object') allText((node as { children?: unknown }).children, out);
  return out;
}

/** Flush until the mic probe has called out and stopped, as the sibling test does. */
async function settle(maxTurns = 25) {
  let previous = -1;
  for (let turn = 0; turn < maxTurns; turn += 1) {
    const calls = mockStartRecording.mock.calls.length;
    if (calls === previous) return;
    previous = calls;
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {});
  }
  throw new Error('the microphone probe never settled');
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

const micOptions = () => mockStartRecording.mock.calls[0][0] as {
  keepAwake?: boolean;
  autoResumeAfterInterruption?: boolean;
  onRecordingInterrupted?: (e: { reason: string; isPaused: boolean }) => void;
};

let renderer: ReactTestRenderer | null = null;
beforeEach(() => {
  jest.clearAllMocks();
  mockHandlers = {};
  mockWidgetThrows = false;
  mockRecorder.isRecording = true;
  mockRecorder.isPaused = false;
  mockResumeRecording.mockImplementation(() => Promise.resolve());
  mockStartRecording.mockImplementation(() => Promise.resolve());
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
afterEach(() => {
  jest.useRealTimers();
  act(() => {
    renderer?.unmount();
  });
  renderer = null;
  jest.restoreAllMocks();
});

describe('2/4. the board says when the connection is gone', () => {
  let timers: jest.SpyInstance;
  beforeEach(() => {
    timers = jest.spyOn(global, 'setTimeout');
  });
  const mark = () => timers.mock.calls.length;
  const fireSince = async (from: number, delay: number) => {
    const callbacks = timers.mock.calls
      .slice(from)
      .filter((c) => c[1] === delay)
      .map((c) => c[0] as () => void);
    await act(async () => {
      callbacks.forEach((cb) => cb());
    });
    return callbacks.length;
  };
  const line = { seq: 1, type: 'text', text: 'Force is a push or a pull.', key: 't:1' };

  it('does not claim to be reconnecting after the server refused for good', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onBoardReveal(line);
    });
    const from = mark();
    await act(async () => {
      mockHandlers.onConnectionChange('closed');
      mockHandlers.onConnectionChange('ended');
    });
    await fireSince(from, 1500);
    expect(allText(renderer.toJSON())).not.toContain('Reconnecting…');
  });
});

describe('7. the verdict on the chip that was tapped', () => {
  const question = {
    phase: 'awaiting_answer',
    check_options: ['5 N·m', '10 N·m', 'Zero'],
    question_text: 'What is the torque?',
  };
  /** The pressable a label sits in: from the rendered text, up to the first
   *  ancestor that takes a press. */
  const chip = (r: ReactTestRenderer, label: string) => {
    const textNode = r.root.findAll((n) => typeof n.type === 'string' && allText(n.props.children).includes(label))[0];
    let node: typeof textNode | null = textNode;
    while (node && typeof node.props.onPress !== 'function') node = node.parent;
    return node as typeof textNode;
  };

  it('does not paint a verdict when no chip is chosen — it would land on the wrong card', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onCaptionReveal('Drona has started'); // takes the loading card down
      mockHandlers.onState(question);
    });
    const timers = jest.spyOn(global, 'setTimeout');
    const from = timers.mock.calls.length;
    await act(async () => {
      mockHandlers.onAnswerResult({ verdict: 'correct' });
    });
    // An unguarded verdict arms VERDICT_HOLD_MS (1150ms) to tear the card
    // down; a guarded one arms nothing.
    expect(timers.mock.calls.slice(from).filter((c) => c[1] === 1150)).toHaveLength(0);
    // The question card is still there, untouched.
    expect(allText(renderer.toJSON())).toContain('What is the torque?');
    expect(allText(renderer.toJSON())).not.toContain('Correct');
  });
});
