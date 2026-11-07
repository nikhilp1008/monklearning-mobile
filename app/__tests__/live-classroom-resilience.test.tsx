/**
 * The live class screen survives the phone it runs on.
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
jest.mock('@/components/teacher-orb-poster', () => ({ TeacherOrbPoster: () => null }));
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

describe('2. back in front of the student', () => {
  it('reconnects when the app returns to the foreground', async () => {
    let appStateHandler: ((s: string) => void) | null = null;
    const remove = jest.fn();
    jest.spyOn(AppState, 'addEventListener').mockImplementation(((_t: string, fn: (s: string) => void) => {
      appStateHandler = fn;
      return { remove };
    }) as never);
    renderer = await enterClassroom();
    expect(appStateHandler).not.toBeNull();
    appStateHandler!('background');
    expect(mockOnForeground).not.toHaveBeenCalled();
    appStateHandler!('active');
    expect(mockOnForeground).toHaveBeenCalledTimes(1);
    act(() => renderer!.unmount());
    renderer = null;
    expect(remove).toHaveBeenCalled();
  });
});

describe('2/4. the board says when the connection is gone', () => {
  /**
   * The board waits RECONNECT_CAPTION_DELAY_MS (1.5s) before it speaks. The
   * clock is the test's: every timer the screen sets is recorded, and "1.5s
   * passes" is firing the ones recorded at that delay. (Jest's own fake clock
   * does not advance this screen's timers reliably once several mounts have
   * come and gone in one file, and real waiting made the file slow and flaky.)
   * The dock's own sleep timer is also 1.5s; firing it too is harmless.
   */
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

  it('writes "Reconnecting…" once the connection has been down for a moment, and takes it back', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onBoardReveal(line);
    });
    const from = mark();
    await act(async () => {
      mockHandlers.onConnectionChange('closed');
      mockHandlers.onConnectionChange('reconnecting');
    });
    // While the client retries, the banner over the board says so at once; the
    // board itself keeps its lines and gains no second "Reconnecting…" row.
    expect(allText(renderer.toJSON()).filter((t) => t === 'Reconnecting…')).toHaveLength(1);
    await fireSince(from, 1500);
    expect(allText(renderer.toJSON()).filter((t) => t === 'Reconnecting…')).toHaveLength(1);
    expect(allText(renderer.toJSON())).toContain('Force is a push or a pull.');
    await act(async () => {
      mockHandlers.onConnectionChange('open');
    });
    expect(allText(renderer.toJSON())).not.toContain('Reconnecting…');
  });

  it('says it for an answer that is waiting on the connection, even if the socket claims to be open', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onBoardReveal(line);
      mockHandlers.onConnectionChange('open');
    });
    const from = mark();
    await act(async () => {
      mockHandlers.onPendingAnswer('queued');
    });
    await fireSince(from, 1500);
    expect(allText(renderer.toJSON())).toContain('Reconnecting…');
    await act(async () => {
      mockHandlers.onPendingAnswer('sent');
    });
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

  it('paints it on the chosen chip', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onCaptionReveal('Drona has started'); // takes the loading card down
      mockHandlers.onState(question);
    });
    await act(async () => {
      chip(renderer!, 'Zero').props.onPress();
    });
    expect(mockSendAnswer).toHaveBeenCalledWith('Zero');
    await act(async () => {
      mockHandlers.onAnswerResult({ verdict: 'correct' });
    });
    expect(allText(renderer.toJSON())).toContain('Correct');
  });

  it('paints a wrong answer as not quite', async () => {
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onCaptionReveal('Drona has started'); // takes the loading card down
      mockHandlers.onState(question);
    });
    await act(async () => {
      chip(renderer!, '5 N·m').props.onPress();
    });
    await act(async () => {
      mockHandlers.onAnswerResult({ verdict: 'incorrect' });
    });
    expect(allText(renderer.toJSON())).toContain('Not quite');
  });
});

describe('10. the pass gate can find the class', () => {
  it('registers the open session while the screen is mounted, and lets go on unmount', async () => {
    expect(getActiveClassSession()).toBeNull();
    renderer = await enterClassroom();
    expect(getActiveClassSession()).toBe('session-1');
    act(() => renderer!.unmount());
    renderer = null;
    expect(getActiveClassSession()).toBeNull();
  });
});

describe('9. a board row that throws does not take the class with it', () => {
  it('keeps the screen and the lines around the broken widget', async () => {
    mockWidgetThrows = true;
    jest.spyOn(console, 'error').mockImplementation(() => {});
    renderer = await enterClassroom();
    await act(async () => {
      mockHandlers.onBoardReveal({ seq: 1, type: 'text', text: 'Before the figure.', key: 't:1' });
      mockHandlers.onBoardReveal({
        seq: 2, type: 'diagram', key: 't:2', tier: 'precomputed',
        payload: { widget: 'xy_plot', version: 1, params: {} },
      });
      mockHandlers.onBoardReveal({ seq: 3, type: 'text', text: 'After the figure.', key: 't:3' });
    });
    const text = allText(renderer.toJSON());
    expect(text).toContain('Before the figure.');
    expect(text).toContain('After the figure.');
    expect(text).not.toContain('widget drawn');
    expect((console.warn as jest.Mock).mock.calls.some((c) => c[0] === '[board-boundary]')).toBe(true);
  });
});
