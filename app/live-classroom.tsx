import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  PixelRatio,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  runOnJS,
  SlideInRight,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { DockRing, type RingMood } from '@/components/dock-ring';
import { turnColor, turnWords, type VoiceTurn } from '@/components/voice-turn';
import { allowHapticsWhileRecording } from '@/lib/audio-haptics';
import { hapticCommitted, hapticFloorReleased, hapticFloorTaken, hapticRefused } from '@/lib/haptics';

import {
  AMBER,
  BOARD_LEFT,
  BOARD_TOP,
  Blink,
  DARK_CHROME,
  DEEP_AMBER,
  GREEN_INK,
  EdgeTab,
  HAIRLINE,
  INK,
  INK_FAINT,
  INK_MUTED,
  LevelBars,
  PAPER,
  RED,
  RHYTHM,
  RuledGround,
  useChromeAutoHide,
  AnimatedScrollIndicator,
} from '@/components/classroom-chrome';
import { colors } from '@/constants/brand';
import { useOrientedScale } from '@/constants/scale';
import { useOrientation } from '@/hooks/use-landscape-lock';
import { getRecordingPermissionsAsync, requestRecordingPermissionsAsync, setAudioModeAsync } from 'expo-audio';

import { base64ToBytes } from '@/lib/audio-pcm';
import { endDronaSession } from '@/lib/drona-live';
import { startSessionEnd } from '@/lib/session-end';
import { claimDronaClient } from '@/lib/drona-prewarm';
import {
  BoardEvent,
  ConnectionStatus,
  DronaState,
  DronaVoiceClient,
  DronaVoiceHandlers,
} from '@/lib/drona-voice-client';
import { BoardBlockView } from '@/components/board-text';
import { apiFetch } from '@/lib/api';
import { REPORT_REASONS, sendReport as postReport } from '@/lib/reports';
import { labelledFigure } from '@/lib/widgets/labelled-figure';
import type { AssetRow } from '@/lib/widgets/labelled-figure/figure-file-cache';
import type { FigureResolver } from '@/lib/widgets/labelled-figure/figure-resolver';
import { placeholderFigureResolver } from '@/lib/widgets/labelled-figure/placeholder-figure';
import {
  ASSETS_BASE_URL,
  r2FigureResolver,
  setBoardFrame,
  setChapterAssets,
} from '@/lib/widgets/labelled-figure/r2-figure-resolver';
import type { WidgetServices, WidgetTheme } from '@/lib/widgets/types';
import { EnteringCardScreen } from '@/components/entering-card';
import {
  LONG_WAIT_TEXT,
  statusLinesFor,
  toStatusSubject,
} from '@/constants/classroom-status';
import { useStagedStatus } from '@/hooks/use-staged-status';
import { MicStatus, probeMicAvailability } from '@/lib/mic-availability';
import { spokenMathToNotation } from '@/lib/spoken-math';
import { supabase } from '@/lib/supabase';


/** Clearance kept to the right of every board line so the thumb rail never
 *  sits on top of the writing. Shared by `boardContent`'s padding and the
 *  width a diagram is allowed to draw into. */
const BOARD_RIGHT_GUTTER = 116;

/**
 * How long the loading card may cover the board before giving up.
 *
 * A first turn is plausibly 5-20s, so this sits past the honest cases and
 * catches only the ones where nothing is coming. Deliberately not tied to the
 * socket state: the failure this exists for is a socket that opened and then
 * produced nothing.
 */
const CARD_CEILING_MS = 30000;

// Imported rather than redeclared: this file used to hold its own identical
// copy, which is how two surfaces drift into reasons that almost group.
/** Half the rail's own height, so it can be centred with a transform. */
/**
 * Half the rail's height, for centring it. 84, because 8b's pill is 168 tall:
 * 8 + 48 (mic) + 12 + 40 (pause) + 12 + 40 (rotate) + 8. It was 108 when the
 * rail also carried a teacher wave, two dividers and an Interrupt label.
 */
const RAIL_HALF = 84;
/** Far enough right to clear the rail's own width (64) plus its 12pt inset,
 *  plus the ring's halo, which reaches about 20pt past the pill. */
const RAIL_TUCK_X = 96;
/** `sleepC`'s timer: how long the ring lingers after the last touch. */
const DOCK_SLEEP_MS = 1500;
/**
 * The student's turn, after they let go. Thinking holds until the teacher
 * actually starts answering — no timer decides that — but a reply that never
 * comes must not leave the ring breathing forever, so after REPLY_WAIT_MS it
 * gives up and says so. Transcription, a model call and speech synthesis
 * together run a few seconds; twelve is well past a slow good day.
 */
const REPLY_WAIT_MS = 12000;
/** How long "Didn't catch that" stays before the dock returns to rest. */
const FAILED_SHOW_MS = 2600;

/**
 * How loud one mic frame is, 0–1, on the curve a voice actually uses.
 *
 * The frames are 16-bit little-endian PCM. Every fourth sample is enough for a
 * level and keeps this cheap at the frame rate. Speech sits roughly between
 * -60 dBFS (a breath) and -14 dBFS (speaking up), so the RMS is mapped on a
 * log scale across that range — linear would pin a normal voice near zero.
 */
function pcmLevel(bytes: Uint8Array): number {
  const n = bytes.length >> 1;
  if (n === 0) return 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i += 4) {
    let v = bytes[2 * i] | (bytes[2 * i + 1] << 8);
    if (v >= 32768) v -= 65536;
    sum += v * v;
    count++;
  }
  const rms = Math.sqrt(sum / count) / 32768;
  return Math.min(1, Math.max(0, (Math.log10(rms + 1e-5) + 3) / 2.3));
}
/** How long after the window agrees before another rotation is allowed. Long
 *  enough that UIKit has finished the transition, not merely started it. */
const ROTATE_SETTLE_MS = 650;

/**
 * The two waits after an answer.
 *
 * `ANSWER_HOLD_MS` is the longest the card waits for a verdict that may never
 * arrive — a dropped socket, a server that does not grade. Without it the card
 * would sit there forever holding a lit chip.
 *
 * `VERDICT_HOLD_MS` is how long the verdict itself stays once it does arrive.
 * Long enough to read a word, short enough not to hold up the lesson.
 */
const ANSWER_HOLD_MS = 2600;
const VERDICT_HOLD_MS = 1150;

/**
 * The portrait dock's height, from its parts, so anything that has to sit
 * above it is derived rather than guessed.
 *
 * 44 button + 9 padding either side + 1 border either side = 64 for the
 * plate, then the gap and the hint line under it. Guessing this is what put
 * the jump chip on top of the hint text.
 */
const DOCK_OFFSET = 20;
const DOCK_PLATE_H = 64;
const DOCK_GAP = 9;
const DOCK_HINT_H = 14;
const DOCK_TOP = DOCK_OFFSET + DOCK_PLATE_H + DOCK_GAP + DOCK_HINT_H;
/** A hold this long is a stuck button, not an answer. */
const MAX_HOLD_MS = 30000;

interface AudioRecorderLike {
  startRecording(options: {
    sampleRate: number;
    channels: number;
    encoding: string;
    interval: number;
    ios?: {
      audioSession?: {
        category?: string;
        categoryOptions?: string[];
      };
    };
    onAudioStream: (event: { data: unknown }) => void;
  }): Promise<unknown>;
  stopRecording(): Promise<unknown>;
}

/**
 * `@siteed/audio-studio`'s own module calls `requireNativeModule('AudioStudio')`
 * at ITS OWN top level (not inside a function) — so a plain `import` here
 * throws the instant this file is required, which Expo Router does for
 * EVERY file in app/ to build its route table, regardless of whether anyone
 * ever opens this screen. That took down the entire app at launch on every
 * screen, for every user, the moment the native module wasn't linked
 * correctly in a build — confirmed live via TestFlight. Catching the require
 * here contains a missing/broken native module to just this screen's mic
 * feature instead of crashing on app open.
 */
let useAudioRecorder: () => AudioRecorderLike;
/** Whether the native module is there at all — the first input to the mic probe. */
let audioStudioLoaded = false;
/**
 * The RAW native device enumeration.
 *
 * Deliberately NOT `audioDeviceManager.getAvailableDevices()`, which is the
 * obvious-looking call. That wrapper catches its own native failure and returns
 * a fabricated `DEFAULT_DEVICE` — `isAvailable: true`, a full `sampleRates`
 * list — so a probe that failed comes back indistinguishable from a healthy
 * built-in mic. Going straight to the module keeps a failure a failure; see
 * `lib/mic-availability.ts`.
 */
let listInputDevices: () => Promise<unknown> = () =>
  Promise.reject(new Error('audio-studio not loaded'));
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const audioStudio = require('@siteed/audio-studio');
  useAudioRecorder = audioStudio.useAudioRecorder;
  listInputDevices = () => audioStudio.AudioStudioModule.getAvailableInputDevices({ refresh: true });
  audioStudioLoaded = true;
} catch (err) {
  console.error('[live-classroom] @siteed/audio-studio failed to load:', err);
  useAudioRecorder = function useUnavailableAudioRecorder(): AudioRecorderLike {
    return {
      startRecording: () => Promise.reject(new Error('Voice recording is unavailable on this build.')),
      stopRecording: () => Promise.resolve(),
    };
  };
}

export default function LiveClassroomScreen() {
  /**
   * ORIENTATION IS THE STUDENT'S, NOT THE SCREEN'S.
   *
   * This screen used to declare landscape and turn the phone, which forced
   * every class sideways. Most students hold a phone upright and would rather
   * not change how they are holding it to attend a class, so the class opens
   * the way the phone is already held and offers a rotate button for the times
   * a wide board genuinely helps — a long derivation, a big diagram.
   *
   * `wantLandscape` is the request; `isLandscape` is the truth. Everything
   * below lays out from the truth, so the sideways-board failure is impossible
   * rather than raced: `useLandscapeLock` returned true on a 700ms timeout, so
   * a slow or refused lock painted the wide layout into an upright window.
   */
  const [wantLandscape, setWantLandscape] = useState(false);

  const oriented = useOrientation(wantLandscape ? 'landscape' : 'portrait');

  const params = useLocalSearchParams<{
    sessionId?: string;
    chapterTitle?: string;
    subtopic?: string;
    subject?: string;
    chapterId?: string;
  }>();
  const sessionId = params.sessionId ?? '';
  const chapterTitle = params.chapterTitle || 'this chapter';
  // Follows the window, so both orientations measure against the mock that
  // was drawn for them.
  const { scale, verticalScale } = useOrientedScale();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  /**
   * What the window IS, which is what every measurement below lays out from —
   * never `wantLandscape`, which is only what was asked for. Keeping these two
   * apart is what makes a refused or slow rotation lay out correctly instead
   * of painting a wide board into an upright window.
   */
  const isLandscape = windowWidth > windowHeight;
  /**
   * ONE ROTATION AT A TIME.
   *
   * Tapping rotate again while the last one is still turning is what pulls
   * iOS and React Native apart: the device ends up where it was told, RN's
   * `Dimensions` keeps reporting the orientation before last, and the board
   * lays itself out landscape inside a portrait window — half the phone
   * unpainted, and stuck there. The hook can recover from that now, but not
   * provoking it is better than healing it.
   *
   * `settled` is simply "the window is the shape we asked for". Until it is,
   * the rotate control ignores presses. A student cannot tap faster than the
   * phone can turn, which is the only guarantee that matters here.
   */

  const settled = isLandscape === wantLandscape;
  /**
   * MATCHING IS NOT THE SAME AS FINISHED.
   *
   * `isLandscape` comes from `Dimensions`, and `Dimensions` updates partway
   * through the rotation — before UIKit has finished resizing the scene. A
   * guard that only waited for the two to agree therefore opened again while
   * the phone was still turning, which is exactly the window that leaves
   * React Native's root view sized for one orientation inside a window that
   * is the other. So the control stays shut for a beat after they agree.
   *
   * ROTATE_SETTLE_MS is not tuned to a human; it is tuned to UIKit. A student
   * cannot tap faster than this, which is the point — the control is only ever
   * closed during a transition they can see happening.
   */
  const [rotateReady, setRotateReady] = useState(true);
  useEffect(() => {
    if (!settled) {
      setRotateReady(false);
      return;
    }
    const id = setTimeout(() => setRotateReady(true), ROTATE_SETTLE_MS);
    return () => clearTimeout(id);
  }, [settled, wantLandscape]);
  const requestOrientation = useCallback(
    (next: boolean) => {
      if (next === wantLandscape) return;
      if (!settled || !rotateReady) return;
      setWantLandscape(next);
    },
    [wantLandscape, settled, rotateReady]
  );
  /**
   * Whether a rotate tap would actually do anything.
   *
   * The guard above is right, but it was invisible: the two rotate controls had
   * no `disabled` and no pressed state, so for the 650ms after every rotation a
   * student who changed their mind got an absolute no-op that looked identical
   * to a working button. Refusing a tap is fine; refusing it silently is not.
   */
  const canRotate = settled && rotateReady;



  const styles = useMemo(
    () => createStyles(scale, verticalScale, isLandscape),
    [scale, verticalScale, isLandscape]
  );

  // --- Real session state, replacing the old hardcoded BOARD_BLOCKS/caption loop ---
  const [board, setBoard] = useState<BoardEvent[]>([]);
  /**
   * How many checkpoint questions the teacher actually put to the student.
   *
   * The end-of-class summary reports "answered 4 / 5", and the server sends
   * only the 4 — it counts answers, not asks. This is the denominator, counted
   * where the asking happens: one per checkpoint that reached the screen. A
   * question the student skipped still counts as asked, which is the whole
   * point of showing a ratio rather than a total.
   */
  const askedRef = useRef(0);
  /**
   * Which question that count is currently standing on. A state frame carrying
   * the same checkpoint can arrive more than once, and counting frames rather
   * than questions would inflate the denominator every time one did.
   */
  const askedKeyRef = useRef<string | null>(null);

  const [caption, setCaption] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('connecting');
  const [paused, setPaused] = useState(false);
  const [ending, setEnding] = useState(false);
  const [connectError, setConnectError] = useState<string | null>(null);

  /**
   * The loading card, carried over from `entering-classroom`.
   *
   * The board used to mount blank behind `Writing…` for the whole LLM + TTS
   * latency of turn one — 5-20s of ruled paper with nothing on it, longer on a
   * cold socket. The card stays up over it instead, and only leaves when Drona
   * genuinely starts: the first revealed board line or caption, which fires
   * when the first clip actually begins playing.
   */
  const [cardVisible, setCardVisible] = useState(true);
  /** `joining` until the turn's first frame lands, then `writing`. */
  const [cardPhase, setCardPhase] = useState<'joining' | 'writing'>('joining');
  const dismissCard = useCallback(() => setCardVisible(false), []);
  const cardSubject = useMemo(() => toStatusSubject(params.subject), [params.subject]);
  const { text: cardLine, longWait } = useStagedStatus({
    lines: statusLinesFor(cardPhase, cardSubject),
    longWaitMs: 20000,
    active: cardVisible,
    resetKey: cardPhase,
  });

  const [micDenied, setMicDenied] = useState(false);
  /**
   * Whether speaking is on, and if not, why. Drives the rail's own appearance
   * so the student can see that the button is off without pressing it, and
   * picks the wording of the card when they do.
   */
  const [micStatus, setMicStatus] = useState<MicStatus>('checking');
  const [checkOptions, setCheckOptions] = useState<string[]>([]);
  /**
   * The question the chips answer, held separately from `caption`.
   *
   * Chips without it are answers to a question nobody asked: only the
   * fallback UNDERSTANDING_CHIPS read on their own, while a real quiz turn
   * sends bare content ("5 N·m" / "10 N·m" / "Zero"). The server enforces the
   * same rule from its side, retrying any turn that offers options without
   * voicing a question.
   */
  const [questionText, setQuestionText] = useState<string | null>(null);
  /**
   * The option the student just pressed, held so the card can acknowledge it.
   *
   * Tapping used to clear the question in the same tick, so the card began
   * leaving on the same frame as the press — the student got no confirmation
   * that the tap had landed on the answer they meant. The chip now fills for
   * ANSWER_HOLD_MS and the card leaves after that. The answer itself goes to
   * the server immediately; only the dismissal waits.
   */
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  /**
   * What the server said about it: 'correct', 'partial', or anything else for
   * wrong. Null until the answer comes back.
   */
  const [answerVerdict, setAnswerVerdict] = useState<string | null>(null);
  const answerHoldRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Takes the card down and resets it, from either path. */
  const clearCheckpoint = useCallback(() => {
    setCheckOptions([]);
    setQuestionText(null);
    setChosenOption(null);
    setAnswerVerdict(null);
  }, []);
  useEffect(
    () => () => {
      if (answerHoldRef.current) clearTimeout(answerHoldRef.current);
    },
    []
  );

  const clientRef = useRef<DronaVoiceClient | null>(null);
  /** Lets the socket's session-ended callback reach the latest endClass
   *  without making the connect effect depend on it (which would tear the
   *  socket down and rebuild it on every render). */
  const endClassRef = useRef<(() => Promise<void>) | null>(null);
  const recorder = useAudioRecorder();

  useEffect(() => {
    if (!sessionId) {
      setConnectError('No session to join. Go back and start a class from a chapter.');
      return;
    }
    let cancelled = false;

    const apiBaseUrl = process.env.EXPO_PUBLIC_API_URL;
    if (!apiBaseUrl) {
      setConnectError('Not signed in to reach the classroom.');
      return;
    }

    // A provider rather than a captured token: a class can run longer than a
    // token's lifetime, and every reconnect needs a currently-valid one.
    const getAccessToken = async () => {
      const { data } = await supabase.auth.getSession();
      return data.session?.access_token ?? null;
    };

    // The audio session is never configured anywhere else in the app, so
    // without this iOS leaves it on its default `soloAmbient` category: the
    // ringer switch silences Drona completely and playback stops the moment
    // the phone locks. `.playback` is what a lesson needs.
    //
    // Deliberately NOT `allowsRecording: true`. expo-audio's setAudioMode has
    // no `defaultToSpeaker` option, so that would put the session into
    // `.playAndRecord` and route Drona to the earpiece. `@siteed/audio-studio`
    // already asks for the right category with DefaultToSpeaker when the mic
    // is actually needed, so it owns push-to-talk and this owns playback.
    setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: false,
      interruptionMode: 'mixWithOthers',
    }).catch((err) => {
      console.error('[live-classroom] could not configure the audio session:', err);
    });

    // Built and connected back on the scoping screen if the student came the
    // usual way, so the socket is often already open by now. Anything that
    // arrived before this point was buffered and replays on `setHandlers`.
    const warmed = claimDronaClient(sessionId);
    const handlers: DronaVoiceHandlers = {
      onConnectionChange: setConnectionStatus,
      onState: (state: DronaState) => {
        // A connect that lands on 'teaching' means the server is already
        // running turn one; see the kick-off note below.
        if (state.phase === 'teaching') serverStartedTurnRef.current = true;
        // Checkpoint questions: the client holds these until the turn's audio
        // finishes, so by the time this arrives Drona has actually asked it.
        // Only when the frame actually carries them — the post-turn_complete
        // state frame does not, and assigning `[]` there wiped the chips the
        // student was meant to answer.
        if (state.check_options) {
          if (state.check_options.length > 0) {
            const key = state.question_text ?? state.check_options.join('\u0001');
            if (askedKeyRef.current !== key) {
              askedKeyRef.current = key;
              askedRef.current += 1;
            }
          }
          setCheckOptions(state.check_options);
        }
        if (state.question_text) {
          setQuestionText(state.question_text);
          // Safe to be the last caption of the turn now: the client holds this
          // frame until the turn's audio has drained, so no queued sentence is
          // left to overwrite it.
          setCaption(state.question_text);
        }
      },
      // The turn's first frame — board events or audio, whichever landed
      // first. Real content exists on the client now, seconds before it is
      // spoken, so the card can stop guessing and say so.
      onTurnStarted: () => {
        setCardPhase('writing');
        voiceTurnRef.current?.handOver();
      },
      // The whole turn's board lands here ahead of its audio. Nothing is shown
      // — reveal still belongs to each event's own chunk — but a figure's art
      // is a network object, and asking for it now gives it the length of the
      // preceding sentences to arrive. Fire-and-forget: `get()` stays
      // synchronous and cache-only, and a slug that misses still costs a
      // figure rather than a stalled board.
      onBoardBuffered: (events) => {
        const slugs = events
          .filter((e) => e.payload?.widget === labelledFigure.id)
          .map((e) => (e.payload?.params as Record<string, unknown> | undefined)?.asset_slug)
          .filter((v): v is string => typeof v === 'string');
        if (slugs.length > 0) void figures.prefetch(slugs);
      },
      onBoardReveal: (event) => {
        // Drona is actually speaking: this fires when the first clip starts
        // playing. That is the handoff — the card goes, the board takes over.
        dismissCard();
        setBoard((prev) => [...prev, event]);
      },
      onBoardReplay: (events) => setBoard(events),
      // Drona is no longer thinking once she is visibly talking. This used to
      // hang on `onTurnComplete`, which is now deliberately deferred until the
      // turn's audio has drained — leaving it there would have pinned "Drona is
      // thinking" across her entire spoken reply.
      onCaptionReveal: (text: string) => {
        dismissCard();
        setCaption(text);
        // A cue caption describes the figure at the moment it changes, so it
        // outranks the narration line for that sentence — but only for that
        // sentence. It is cleared here rather than by the widget because a
        // board item never unmounts (the board is a ScrollView of every event
        // in the turn), so the widget's own cleanup never runs and the strip
        // would stay pinned to a diagram's caption for the rest of the class
        // while the audio moved on. Ordering is safe: this runs in
        // `onItemStart` immediately before `onBoardReveal`, so a cue firing on
        // the same sentence still writes after this and wins.
      },
      onTranscriptFinal: (text) => {
        // Speaking an answer counts the same as tapping a chip.
        if (text.trim()) {
          setCheckOptions([]);
          setQuestionText(null);
        }
      },
      // Under the mic now, not in the captions: the caption line is the
      // teacher's voice. The dock says it, and the ring settles to grey.
      onSttTooShort: () => voiceTurnRef.current?.fail(),
      /**
       * The verdict, shown ON the chip the student pressed.
       *
       * It used to be a word in the top row, which is empty by design now.
       * Putting it on the chip is better than putting it back: it is attached
       * to the thing it is about, so there is nothing to look up.
       */
      onAnswerResult: (result) => {
        setAnswerVerdict(result.verdict);
        if (answerHoldRef.current) clearTimeout(answerHoldRef.current);
        answerHoldRef.current = setTimeout(clearCheckpoint, VERDICT_HOLD_MS);
      },
      /**
       * The verdict has nowhere to go now, and that is worth saying out loud.
       *
       * It used to hold "Correct" / "Almost" / "Not quite" on the top row for
       * five seconds, and the top row is empty by design. The student is not
       * left guessing — Drona says the verdict in the next turn and the board
       * writes it — but there is no longer a visual mark for it. Flagged for
       * Nikhil: if it wants one, the chips themselves are the place, not the
       * corner of the screen.
       */
      // A card over a board that is never going to fill is worse than the
      // board's own error affordances, so every failure drops it.
      onTurnError: () => {
        dismissCard();
        setCaption('Drona hit a snag. One moment…');
        if (turnAfterRef.current === 'thinking') voiceTurnRef.current?.fail();
      },
      // The lesson itself finished — go to the summary rather than leaving the
      // student on a silent board wondering whether it broke.
      onSessionEnded: () => {
        if (!cancelled) void endClassRef.current?.();
      },
      onError: (message) => {
        dismissCard();
        setCaption(message);
      },
    };

    let client: DronaVoiceClient;
    if (warmed) {
      client = warmed;
      client.setHandlers(handlers);
    } else {
      client = new DronaVoiceClient(sessionId, getAccessToken, apiBaseUrl, handlers);
      client.connect();
    }
    clientRef.current = client;
    // Kicks off the first teaching turn — but only if the server has not
    // already started one.
    //
    // Mobile connects *after* scoping, so the session's phase is already
    // 'teaching' by the time the socket opens, and the server auto-fires turn
    // one itself on connect. Sending an utterance on top of that is read as a
    // barge-in: it aborts the turn already in flight and runs a second LLM
    // turn in its place. The old comment here claimed both were
    // "single-flighted server-side, so this is not a double-trigger risk" —
    // that was wrong, and it cost one wasted LLM turn and TTS lease per class.
    // Web never hit it because its socket opens while the phase is still
    // 'scoping'.
    //
    // The first `state` frame carries the phase, so `sawTeachingOnConnect`
    // below decides.
    //
    // This used to be `setTimeout(..., 300)`, which is both an unconditional
    // 300ms of silence and a race: `sendUtterance` drops the message if the
    // socket is not OPEN yet, and a token fetch plus a TLS handshake on
    // cellular routinely takes longer than 300ms. With the socket now warmed
    // on the scoping screen, `whenReady` usually resolves immediately.
    void client
      .whenReady(10000)
      .then(() => {
        if (serverStartedTurnRef.current) return;
        client.sendUtterance('Begin lesson segment');
      })
      .catch(() => {
        // Never opened — `onConnectionChange` has already told the student.
      });

    return () => {
      cancelled = true;
      /**
       * Give the floor back BEFORE the socket goes, not after.
       *
       * `sendPttStop` needs a live client, and the two lines below take it
       * away — so a release attempted from any later cleanup finds
       * `clientRef.current` already null and sends nothing. React runs
       * cleanups in the order their effects were defined and this effect is
       * near the top of the screen, which makes "before disconnect" the only
       * place a leave-mid-hold can be told to the server at all.
       *
       * The rotation case is handled separately, further down, because
       * rotating does not re-run this effect: the mic button unmounts under
       * the thumb while the socket stays up.
       */
      doneListeningRef.current?.();
      clientRef.current?.disconnect();
      clientRef.current = null;
      // Covers navigating away mid-push-to-talk (swipe-back, hardware back)
      // — endClass() already stops the recorder on its own path, but this is
      // the only guard for leaving via any other route while the mic is live.
      recorder.stopRecording().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  /**
   * The card must never outlive the truth.
   *
   * `whenReady` rejects into an empty catch if the socket never opens, so the
   * kickoff utterance is never sent and the board can sit at `board.length ===
   * 0` indefinitely. Uncovered that is a blinking cursor; under a card it would
   * be an animation claiming a lesson is coming that is not. Give the first
   * turn a generous ceiling and then get out of the way — the board's own
   * `Writing…` and error states are honest about knowing nothing.
   */
  useEffect(() => {
    if (!cardVisible) return;
    const id = setTimeout(dismissCard, CARD_CEILING_MS);
    return () => clearTimeout(id);
  }, [cardVisible, dismissCard]);

  useEffect(() => {
    if (connectError) dismissCard();
  }, [connectError, dismissCard]);

  // --- Board follow-scroll / chrome auto-hide (unchanged from the original UI) ---
  const [chromeVisible, setChromeVisible] = useState(true);
  /**
   * NO CAPTIONS. Drona's narration is not subtitled any more — the board is
   * what the student reads, and a running transcript under it competed with
   * the writing it was describing.
   *
   * The strip itself stays for exactly one job: a checkpoint QUESTION, which
   * the student has to read in order to answer the chips under it. That is not
   * a caption, and dropping it would leave answers on screen with nothing to
   * answer. `caption` is still tracked because the Report drawer quotes the
   * last line as what is being reported.
   *
   * Listening feedback moved to the control itself, where the handoff puts it:
   * the Interrupt button fills, its label reads "Speaking" and the mic becomes
   * a level meter. It does not need a strip of its own.
   */
  const [boardHeight, setBoardHeight] = useState(390);
  // `windowWidth` / `isLandscape` are read near the top of the component, above
  // the styles that depend on them.
  /**
   * How much of the visible board one figure may occupy.
   *
   * Not a style choice so much as a reading one: a diagram is an aside to the
   * line of argument on the board, so the lines above and below it have to stay
   * on screen with it. Height is what binds on a landscape board — see the
   * sizing note in `board-diagram.tsx`.
   */
  const diagramBox = useMemo(
    () => ({
      // Mirrors `boardContent`'s own padding, which differs by orientation:
      // landscape keeps the notch gutter on the left and the thumb-rail
      // channel on the right, portrait has no rail so the writing runs wide.
      // 28 and 28 in portrait, matching `boardPad` — not the 40 and 22 it
      // used to subtract, which were an older padding and left a full-width
      // figure 6pt narrower than the lines above it.
      availableWidth: isLandscape
        ? Math.max(0, windowWidth - BOARD_LEFT - BOARD_RIGHT_GUTTER)
        : Math.max(0, windowWidth - 28 - 28),
      /**
       * A figure is an aside to the argument, so the lines either side of it
       * have to stay on screen with it.
       *
       * Height is what binds on a landscape board, and 0.72 of it is the right
       * share there. Portrait is the other way round: the board is twice as
       * tall, so the same fraction would hand a single diagram six hundred
       * points and push every line around it off screen. Width binds instead,
       * and the cap is the square that width allows — tall enough for any
       * figure that fits across the column, never taller than it is wide.
       */
      maxHeight: isLandscape
        ? boardHeight * 0.72
        : Math.min(boardHeight * 0.52, Math.max(0, windowWidth - 28 - 28)),
    }),
    [windowWidth, boardHeight, isLandscape]
  );
  /**
   * B1: the box as COMPUTED, not as re-derived here.
   *
   * Logging a second copy of the formula is how a probe drifts from the thing
   * it measures — the first version of this did exactly that and reported the
   * landscape arithmetic while portrait was live. It reads `diagramBox`.
   */
  /**
   * B3: tell the resolver what box it is drawing into.
   *
   * The rendition is chosen from frame x dpr against the master's pixel width,
   * so a figure resolved in portrait (340pt) and then rotated into landscape
   * (702pt) would otherwise keep a master it now upscales past 1.0. Any cached
   * figure whose choice changes is invalidated, and B0 does the rest.
   */
  useEffect(() => {
    setBoardFrame(diagramBox.availableWidth, PixelRatio.get());
  }, [diagramBox.availableWidth]);
  useEffect(() => {
    if (__DEV__) {
      console.info(
        `[diagram-box] ${isLandscape ? 'landscape' : 'portrait'} ` +
        `window=${windowWidth}pt board=${boardHeight.toFixed(1)}pt -> ` +
        `${diagramBox.availableWidth.toFixed(0)}x${diagramBox.maxHeight.toFixed(0)}`
      );
    }
  }, [windowWidth, boardHeight, isLandscape, diagramBox]);
  /**
   * The board's own ink, so a widget diagram is not in a different hand than
   * the writing around it. `fontFamily` must be one of the app's loaded
   * families — mirrors the theme built for the (reverted) lesson-player M1
   * wiring, since the requirement is the same wherever a widget renders.
   */
  const widgetTheme = useMemo<WidgetTheme>(
    () => ({
      ink: INK,
      inkMuted: INK_MUTED,
      rule: HAIRLINE,
      accent: DEEP_AMBER,
      surface: colors.paper,
      fontFamily: 'Onest_400Regular',
      monoFontFamily: 'Menlo',
    }),
    []
  );

  /**
   * Only `molecule_3d` needs `resolveStructure`, and it is not built against
   * live doubts yet, so this rejects rather than pretending. It must never
   * reach the network when implemented — cache-first and offline by
   * contract, because a live class has to render with the radio off.
   */
  const widgetServices = useMemo<WidgetServices>(
    () => ({
      resolveStructure: async (ref: string) => {
        throw new Error(`No structure cache yet for ${ref}`);
      },
    }),
    []
  );

  /** A tier-3 render is a measurement, not a failure — it feeds the queue
   *  that decides which widget gets built next. Logged locally until
   *  0021_board_widgets.sql is run and board_gaps exists. */
  const onWidgetGap = useCallback((reason: string, detail: unknown) => {
    console.warn('[board-gap]', reason, detail);
  }, []);

  /**
   * The clock a live session actually has: not seconds, but how far the
   * board has gotten in the server's own reveal order. `board` is appended
   * to strictly in reveal sequence (`onBoardReveal`), so the last entry's
   * `seq` is "how far we've gotten" — see `Cue.seq` in lib/widgets/types.ts.
   */
  const activeSeq = board.length > 0 ? board[board.length - 1].seq : null;

  /** The active cue's caption, already {{token}}-interpolated. Takes
   *  precedence over the narration caption in the strip below while a cue is
   *  live — it is the more specific thing at that moment, same call as the
   *  (reverted) lesson-player wiring made. */


  /** Everything a `BoardWidget` needs beyond its own payload and its share of
   *  the board box (`diagramBox`) — kept separate from `diagramBox` because
   *  `BoardDiagram` (the tier-3 fallback) has no use for any of it. */
  /**
   * The illustration tier's asset store.
   *
   * `prefetch` runs ONCE, on mount, before any board event can arrive — it is
   * the only asynchronous step on this path, and it is deliberately not
   * awaited by anything that renders. During the class `BoardWidget` calls
   * `figures.get(slug)`, which is synchronous and cache-only: a live class
   * renders with the radio off (CLAUDE.md §3), and a slug that was not
   * prefetched costs the student a figure, not a stalled board.
   *
   * The R2 loader landed on 2026-09-07 and this is now the real resolver when
   * a bucket is configured. The comment here used to say `concept_assets` did
   * not exist; it does, and the sentence had simply not been revisited — the
   * failure mode where a stale reason reads exactly like a current one.
   *
   * The PLACEHOLDER is still the fallback, and deliberately so rather than as
   * a leftover: with no `EXPO_PUBLIC_ASSETS_BASE_URL` every slug would miss,
   * and a developer running the app would see an empty board with no way to
   * tell "the bucket is not wired" from "this widget is broken". One bundled
   * figure that always resolves is the difference.
   */
  const figures = useMemo<FigureResolver>(
    () => (ASSETS_BASE_URL ? r2FigureResolver : placeholderFigureResolver),
    []
  );
  useEffect(() => {
    // THE CHAPTER'S FIGURES, AT MOUNT.
    //
    // This used to call `prefetch(figures.cached())` — the slugs already IN
    // the cache, which on a fresh mount is none — so it resolved nothing and
    // the client could only ever draw a figure it had somehow already drawn.
    //
    // Now it asks the server which assets this chapter has and downloads them
    // before the first sentence. `setChapterAssets` also populates the index
    // the loader verifies against: a slug with no row is refused rather than
    // fetched on trust, because the cache key IS the row's sha256.
    //
    // Fire-and-forget: nothing renders off this promise, and a class whose
    // figures fail to download is a class with a plain board, not a stalled
    // one.
    let cancelled = false;
    if (!params.chapterId) {
      console.warn('[figures] no chapterId on this session — figures cannot be prefetched');
      return;
    }
    void apiFetch<{ assets: AssetRow[] }>(`/drona/chapter/${params.chapterId}/figures`)
      .then((res) => {
        if (cancelled) return;
        setChapterAssets(res.assets ?? []);
        console.log(`[figures] chapter prefetch: ${res.assets?.length ?? 0} asset(s) for chapter ${params.chapterId}`);
        return figures.prefetch((res.assets ?? []).map((a) => a.asset_slug));
      })
      .then((report) => {
        if (!report) return;
        // Success is LOGGED, not silent. A silent success here is
        // indistinguishable from the prefetch never running, which is exactly
        // how prefetch(figures.cached()) — a no-op by construction — went
        // unnoticed for the life of the tier.
        console.log(`[figures] chapter prefetch resolved ${report.resolved.length}, missing ${report.missing.length}`);
        if (report.missing.length > 0) {
          // Named before the class, which is the only moment it is actionable.
          console.warn('[figures] not resolvable offline:', report.missing.join(', '));
        }
      })
      .catch((err) => console.warn('[figures] chapter prefetch failed:', String(err)));
    return () => { cancelled = true; };
  }, [figures, params.chapterId]);

  const widgetHost = useMemo(
    () => ({
      activeSeq,
      theme: widgetTheme,
      services: widgetServices,
      figures,
      onGap: onWidgetGap,
    }),
    [activeSeq, widgetTheme, widgetServices, figures, onWidgetGap]
  );

  const [following, setFollowing] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  /**
   * What happens after the student lets go. 'listening' is not stored here —
   * it is simply `handRaised` — so this only ever says idle, thinking or failed.
   */
  const [turnAfter, setTurnAfter] = useState<'idle' | 'thinking' | 'failed'>('idle');
  const turnAfterRef = useRef<'idle' | 'thinking' | 'failed'>('idle');
  const turnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** The student's voice, 0–1, for the ring's halo while they speak. */
  const voiceLevel = useSharedValue(0);
  /**
   * The student's turn after they let go. Kept in a ref so the socket
   * handlers, built once per session, always reach the current versions.
   */
  const voiceTurnRef = useRef(
    (() => {
      const set = (next: 'idle' | 'thinking' | 'failed') => {
        turnAfterRef.current = next;
        setTurnAfter(next);
      };
      const clearTimers = () => {
        if (turnTimerRef.current) clearTimeout(turnTimerRef.current);
        turnTimerRef.current = null;
      };
      const fail = () => {
        clearTimers();
        set('failed');
        turnTimerRef.current = setTimeout(() => set('idle'), FAILED_SHOW_MS);
      };
      return {
        /** Let go: the teacher's move. Waits for the answer, not for a timer —
         *  the timer only catches a reply that never comes. */
        wait() {
          clearTimers();
          set('thinking');
          turnTimerRef.current = setTimeout(fail, REPLY_WAIT_MS);
        },
        fail,
        /** The teacher has started answering: the ring hands over to the
         *  voice and the board. Only meaningful from thinking — every teacher
         *  turn starts, and most of them are not replies. */
        handOver() {
          if (turnAfterRef.current !== 'thinking') return;
          clearTimers();
          set('idle');
        },
        /** A new hold starts clean, whatever the last one left behind. */
        reset() {
          clearTimers();
          set('idle');
        },
      };
    })()
  );
  /**
   * Whether the student is holding the button, readable from the audio
   * callback. `onAudioStream` fires on the native module's clock, outside
   * React's render cycle, so it cannot see `handRaised` state — this ref is
   * what it gates on, and both press handlers write it synchronously.
   */
  const handRaisedRef = useRef(false);
  const holdCeilingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Set when the socket opens onto a session already in 'teaching'. */
  const serverStartedTurnRef = useRef(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>('Wrong answer');
  const [toastVisible, setToastVisible] = useState(false);
  const [reportSending, setReportSending] = useState(false);
  const [reportError, setReportError] = useState<string | null>(null);
  const [reportNotes, setReportNotes] = useState('');
  /**
   * Shared values, not state. These are written on every scroll event, and as
   * state that meant three setState calls per frame at scrollEventThrottle={16}
   * — re-rendering this screen (and the whole `board.map`) about sixty times a
   * second while a student scrolled, to move a 3px pill. They now live on the
   * UI thread and re-render nothing.
   */
  const indicatorTop = useSharedValue(0);
  const indicatorHeight = useSharedValue(28);
  const indicatorOpacity = useSharedValue(0);

  const scrollRef = useRef<React.ComponentRef<typeof Animated.ScrollView>>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Chrome gets out of the way on its own after a few seconds, and comes back
  // on a board tap or the edge tab. It never hides mid-hold or behind the
  // report drawer.
  const hideChrome = useCallback(() => setChromeVisible(false), []);
  /**
   * `cardVisible` blocks the countdown, which is the fix for "it hides
   * immediately". The timer used to run while the entering card still covered
   * the board, so a wait of six seconds spent the whole window and the chrome
   * was already gone when the card faded — the student's first sight of the
   * class was a bare page with no chapter name and no controls. Now the clock
   * starts when the class does.
   */
  useChromeAutoHide(chromeVisible, cardVisible || handRaised || reportOpen, hideChrome);

  /**
   * Turning the phone brings the chrome back and restarts the clock.
   *
   * Without this, rotating inherited whatever was left of the previous
   * countdown: rotate at 5.2s of a 6s window and the new layout's header and
   * rail vanished under a second later, which is exactly what it did. A
   * student who has just changed orientation is looking at the controls.
   */
  useEffect(() => {
    setChromeVisible(true);
  }, [isLandscape]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  /**
   * STAYING AT THE LIVE EDGE IS AN EVENT, NOT A POLL.
   *
   * This used to be `setInterval(() => scrollToEnd(), 350)`, running for the
   * whole class. `scrollToEnd` is not free when there is nothing to do: it
   * forces the ScrollView to measure its content and commit a layout, so the
   * entire board — every text block and every figure — was re-laid-out three
   * times a second whether or not a single character had been written, and
   * whether or not the board was already at the bottom.
   *
   * Measured in the Simulator on a debug build: the classroom sat at 36% CPU
   * with this running and 6% with it removed, against 0.4% on the home screen.
   * Six times the work, all of it to discover that nothing had changed. That
   * is the drag that made the dock feel heavy — the dock was innocent; with
   * the ring removed entirely the 36% did not move.
   *
   * `onContentSizeChange` fires exactly when the board actually grows, which
   * is the real signal, and costs nothing while Drona is between lines.
   */
  const followingRef = useRef(following);
  followingRef.current = following;
  const onBoardGrow = useCallback(() => {
    if (followingRef.current) scrollRef.current?.scrollToEnd({ animated: true });
  }, []);
  /**
   * WHO SCROLLED DECIDES WHETHER WE ARE STILL FOLLOWING — not where we are.
   *
   * `following` used to be recomputed from the offset on every scroll event,
   * which was safe only because the old auto-scroll was instant and never
   * produced an intermediate position. Now that the board glides to each new
   * line, that glide passes through "not at the bottom" on its way there, and
   * deriving `following` from position would drop it to false mid-glide and
   * flash the Jump-to-live pill on every line Drona writes.
   *
   * A drag is the one unambiguous signal that the student, not the board,
   * moved it. So `following` changes while a finger is down and when a fling
   * settles, and a glide leaves it alone.
   *
   * Mirrored as shared values because the scroll handler that reads them is a
   * worklet now and cannot see a React ref. `followingShared` is what makes the
   * per-frame `runOnJS` unnecessary: the worklet compares against its own copy
   * and only crosses to JS when the answer actually changes.
   */
  const draggingRef = useRef(false);
  const draggingShared = useSharedValue(false);
  const followingShared = useSharedValue(true);

  // Chrome tuck: the header slides up out of frame and the rail slides right,
  // both on the spec's 0.35s. The edge tab is what brings them back.
  const tuck = useSharedValue(0);
  useEffect(() => {
    tuck.value = withTiming(chromeVisible ? 0 : 1, { duration: 350, easing: Easing.ease });
  }, [tuck, chromeVisible]);
  /**
   * The scrim fades; it does not slide.
   *
   * The header slides up by 74, but the band behind it is 124 deep — sliding
   * that would leave 50pt of white sitting on the paper with nothing on it.
   */
  const scrimStyle = useAnimatedStyle(() => ({
    opacity: 1 - tuck.value,
  }));
  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -74 * tuck.value }],
    opacity: withTiming(chromeVisible ? 1 : 0, { duration: 300 }),
  }));
  /**
   * The rail tucks with the rest of the chrome — header up, rail right, both
   * on the spec's 0.35s.
   *
   * It briefly did not, because the press-and-hold button lives in it and a
   * tucked rail made the only way to interrupt Drona invisible four seconds
   * into every class. That was the wrong fix for the wrong problem: holding
   * the button did nothing at the time for an unrelated reason (the recorder
   * was started inside the press handler and took 2.75s to come up, so the
   * server threw every hold away as too short — see `raiseHand`). With that
   * fixed, the button works, and the chrome can behave as one piece again
   * rather than one lone element that never leaves.
   *
   * Two ways back, both already here: a tap anywhere on the board, and the
   * `EdgeTab` on the right edge. And `useChromeAutoHide`'s `blocked` guard
   * means the timer never runs mid-hold, so the rail cannot vanish out from
   * under a thumb that is using it.
   */
  const railStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -RAIL_HALF }, { translateX: RAIL_TUCK_X * tuck.value }],
    opacity: withTiming(chromeVisible ? 1 : 0, { duration: 300 }),
  }));


  /**
   * THE RING IS AWAKE WHILE A STUDENT IS TOUCHING THE DOCK, and for 1.5s after.
   *
   * The prototype drives this from `onpointerenter` / `onpointerleave` on the
   * dock, which a phone does not have — there is no hover, so there is no
   * "enter" without a press. A touch anywhere on the dock is the whole of the
   * gesture here, and `sleepC`'s own 1500ms carries the ring past the release
   * so it fades rather than snapping off.
   *
   * THE LINGER IS A FLOOR, NOT THE WHOLE ANSWER, and getting that wrong is
   * what made the ring quit mid-sentence. Written as "every touch arms a
   * 1.5s timer", a hold longer than 1.5s armed the timer on press and then let
   * it fire while the student was still speaking: the gradient faded out under
   * their thumb, and because nothing re-armed on release it never came back.
   * Holding the mic has to PIN the ring awake for as long as it is held —
   * which is what the prototype does, waking on talk and only scheduling the
   * fade once the student lets go.
   *
   * So: `ringAwake` is the linger OR the hold, and releasing re-arms the
   * linger so the fade still happens after, not during.
   */
  const [dockLinger, setDockLinger] = useState(false);
  const dockSleepRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wakeDock = useCallback(() => {
    if (dockSleepRef.current) clearTimeout(dockSleepRef.current);
    setDockLinger(true);
    dockSleepRef.current = setTimeout(() => setDockLinger(false), DOCK_SLEEP_MS);
  }, []);
  // Both edges: pressing pins it (via `ringAwake`), releasing starts the fade.
  useEffect(() => {
    wakeDock();
  }, [handRaised, wakeDock]);
  useEffect(() => () => {
    if (dockSleepRef.current) clearTimeout(dockSleepRef.current);
  }, []);
  const ringAwake = dockLinger || handRaised || turnAfter !== 'idle';
  /** Talking beats paused, which beats the resting teacher palette — the
   *  prototype's `on ? S2 : (paused ? G2 : T2)`. */
  const ringMood: RingMood = handRaised
    ? 'student'
    : turnAfter === 'thinking'
      ? 'thinking'
      : turnAfter === 'failed' || paused
        ? 'paused'
        : 'teacher';
  /** The one name for where the student's turn is, for the words. */
  const turn: VoiceTurn = handRaised ? 'listening' : turnAfter;

  const showChrome = () => setChromeVisible(true);

  const toggleChrome = () => {
    if (reportOpen) return;
    setChromeVisible((visible) => !visible);
  };

  /**
   * Runs on the UI thread, so nothing here can drop a frame on the JS one.
   *
   * NO RULE-SNAPPING ANY MORE. This used to settle the board onto the nearest
   * 26pt multiple when scrolling stopped, "so a written line is never left
   * half-cut by the top edge" — which was true while every line sat on the
   * rule grid. The writing is spaced for reading now, not snapped to the
   * rules, so a line's position is set by mixed sizes and margins and lands on
   * no multiple of anything. Snapping to 26 aligned nothing: it just slid the
   * board by up to 13pt, 900ms after the student stopped scrolling. A nudge
   * with no purpose is worse than none.
   *
   * `following` still has to reach React — the Jump-to-live pill renders from
   * it — but it is pushed across only when the boolean actually flips, rather
   * than once per frame. The rule it encodes is unchanged and is explained on
   * `draggingRef` above: a drag decides, a glide does not.
   */
  const onBoardScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      const { contentOffset, contentSize, layoutMeasurement } = e;
      if (contentSize.height > 0) {
        indicatorHeight.value = Math.max(
          28,
          (layoutMeasurement.height * layoutMeasurement.height) / contentSize.height
        );
        indicatorTop.value = (contentOffset.y / contentSize.height) * layoutMeasurement.height;
        indicatorOpacity.value = 1;
      }
      if (draggingShared.value) {
        const atBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 40;
        if (atBottom !== followingShared.value) {
          followingShared.value = atBottom;
          runOnJS(setFollowing)(atBottom);
        }
      }
    },
    // Both endings are covered: a drag that stops dead fires onEndDrag, a fling
    // fires onMomentumEnd. Either way the pill fades 900ms later, which is the
    // timer this replaces. A fade, not the old timeout's outright flip: a
    // marker that blinks out reads as a glitch, one that fades as going away.
    onEndDrag: () => {
      indicatorOpacity.value = withDelay(900, withTiming(0, { duration: 180 }));
    },
    onMomentumEnd: () => {
      indicatorOpacity.value = withDelay(900, withTiming(0, { duration: 180 }));
    },
  });

  /** Both copies at once. The worklet above compares against `followingShared`
   *  to decide whether to cross to JS, so a change made here that skipped it
   *  would leave the two disagreeing and suppress the next real update. */
  const applyFollowing = (next: boolean) => {
    followingShared.value = next;
    setFollowing(next);
  };

  /** A fling that has come to rest: the student's scroll is finished, so this
   *  is the moment to say whether they left the live edge or came back to it. */
  const onBoardSettled = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    applyFollowing(contentOffset.y + layoutMeasurement.height >= contentSize.height - 40);
  };

  const jumpToLive = () => {
    applyFollowing(true);
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  // --- Real push-to-talk ---
  /**
   * The capture chain runs for the whole class; the button only opens a gate.
   *
   * It used to call `startRecording` inside the press handler, and that is
   * measured at **2.75 seconds** to resolve on device — first PCM frame at
   * +2.9s from the touch. The server discards any hold that delivers under
   * 0.5s of audio (`duration_s = len(pcm)/32000` in `live_session_ws.py`), so
   * a student pressing and speaking normally sent almost nothing and got
   * "Hold the button a little longer" every single time — while holding it.
   * No hold length fixes that; the cost is paid after the finger lands.
   *
   * Web has never had the problem because it never starts anything on press:
   * `getUserMedia` and the ScriptProcessor come up once at session init and
   * `startPushToTalk()` is two synchronous lines — set a flag, send
   * `ptt_start` — while `onaudioprocess` gates on that flag. This now matches
   * it: the recorder is warmed once below, `raiseHand` is synchronous, and
   * `onAudioStream` drops frames unless the button is actually down.
   *
   * The trade is an open mic for the length of the class (iOS shows its
   * indicator throughout), which is the same trade the web client makes.
   * Nothing is transmitted while the gate is shut — frames are dropped in
   * `onAudioStream`, before they reach the socket.
   */
  const micReadyRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      /**
       * Everything about whether the mic can be opened is settled HERE, before
       * `startRecording` is called, because the failure this guards against is
       * not catchable once the call is made.
       *
       * `startRecording` reaches `AVAudioEngine.inputNode`, and on a device
       * with no reachable audio input that getter aborts the process:
       * `AURemoteIO::Cleanup()` → `_CheckRPCError` → `abort()`, SIGABRT, on
       * audio-studio's own `net.siteed.audiostudio.lifecycle` queue. An
       * `abort()` does not unwind, so the `try` below cannot see it, and it is
       * not even on this thread. There is no recovery — only avoidance.
       *
       * So the probe answers two questions with APIs that never construct an
       * engine input node: does the student allow it, and is there anything to
       * record from. Anything it could not find out counts as "no".
       */
      const mic = await probeMicAvailability({
        moduleLoaded: audioStudioLoaded,
        getPermission: getRecordingPermissionsAsync,
        requestPermission: requestRecordingPermissionsAsync,
        listInputDevices,
      });
      if (cancelled) return;
      if (mic.status !== 'available') {
        // Not fatal, and not silent: the rail dims and says "Mic off", and the
        // card explains it on press. Drona keeps teaching either way.
        console.warn(`[live-classroom] voice questions disabled (${mic.status}): ${mic.reason}`);
        setMicStatus(mic.status);
        return;
      }
      try {
        await recorder.startRecording({
          sampleRate: 16000,
          channels: 1,
          encoding: 'pcm_16bit',
          // 100ms, matching web's ~128ms cadence. The gate is in JS, so this
          // is only about how finely a hold can be sliced at its edges.
          interval: 100,
          // Without `DefaultToSpeaker`, iOS's shared AVAudioSession defaults a
          // `.playAndRecord` category to the earpiece receiver — and this
          // category is now held for the whole class, so without it every
          // Drona chunk would play near-inaudibly through the earpiece.
          ios: {
            audioSession: {
              category: 'PlayAndRecord',
              categoryOptions: ['AllowBluetooth', 'MixWithOthers', 'DefaultToSpeaker'],
            },
          },
          onAudioStream: async (event: { data: unknown }) => {
            // The gate. Closed unless a finger is on the button.
            if (!handRaisedRef.current) return;
            if (typeof event.data === 'string') {
              const bytes = base64ToBytes(event.data);
              clientRef.current?.sendPcmChunk(bytes);
              // Smoothed at the source, so the halo follows the voice rather
              // than flickering with every frame.
              voiceLevel.value = withTiming(pcmLevel(bytes), { duration: 90 });
            }
          },
        });
        if (cancelled) return;
        micReadyRef.current = true;
        setMicStatus('available');
      } catch (err) {
        // A REJECTED start — a format the engine refused, a session another
        // app is holding. Survivable, unlike the abort the probe above exists
        // to dodge. Leave `micReadyRef` false and say so on the rail.
        if (cancelled) return;
        console.warn('[live-classroom] recorder refused to start:', err);
        setMicStatus('unavailable');
      }
    })();
    return () => {
      cancelled = true;
      micReadyRef.current = false;
      handRaisedRef.current = false;
      recorder.stopRecording().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const raiseHand = useCallback(() => {
    if (handRaisedRef.current) return;
    if (!micReadyRef.current) {
      setMicDenied(true);
      return;
    }
    // Synchronous, in this order, so the server's PTT window opens before the
    // first frame can arrive rather than after it.
    handRaisedRef.current = true;
    setHandRaised(true);
    voiceTurnRef.current?.reset();
    setChromeVisible(true);
    clientRef.current?.sendPttStart();

    // A release that never arrives would hold the floor forever and leave the
    // server's `is_ptt_active` set, which then eats the *next* hold. Cheap
    // insurance; a real answer is never this long.
    if (holdCeilingRef.current) clearTimeout(holdCeilingRef.current);
    holdCeilingRef.current = setTimeout(() => doneListeningRef.current?.(), MAX_HOLD_MS);
  }, []);

  const doneListening = useCallback(() => {
    if (!handRaisedRef.current) return;
    handRaisedRef.current = false;
    setHandRaised(false);
    if (holdCeilingRef.current) {
      clearTimeout(holdCeilingRef.current);
      holdCeilingRef.current = null;
    }
    clientRef.current?.sendPttStop();
    voiceLevel.value = withTiming(0, { duration: 220 });
    voiceTurnRef.current?.wait();
  }, [voiceLevel]);

  /**
   * THE MIC'S OWN GESTURE, with the taps that go with it.
   *
   * Wrappers rather than haptics inside `raiseHand`/`doneListening`, because
   * those two are called from places that are not a gesture at all — the 30s
   * hold ceiling, and the socket teardown when a student leaves mid-hold. A
   * buzz as the class unmounts under them would be a lie about what they did.
   * Only a real press and a real release are felt.
   *
   * The tap fires AFTER `raiseHand` has run, never before. `raiseHand` is
   * deliberately synchronous so the server's PTT window opens ahead of the
   * first audio frame, and nothing decorative is allowed in front of it.
   *
   * Which tap is decided by what actually happened rather than by what we
   * expected: `handRaisedRef` is set synchronously inside `raiseHand`, so
   * reading it either side says whether the floor really opened or whether the
   * press was turned away for want of a microphone.
   *
   * ON iOS TODAY, TWO OF THE THREE CANNOT BE FELT, and it is worth knowing
   * before anyone goes looking for the fault here. The capture chain above
   * holds `.playAndRecord` for the whole class, and an active recording session
   * silences the Taptic Engine by iOS default — so the take and the release are
   * dropped by the system, while the refusal (no session, because no mic) is
   * felt normally. `lib/haptics.ts` carries the detail and the one-line native
   * fix it would need.
   */
  const onMicPressIn = useCallback(() => {
    const held = handRaisedRef.current;
    raiseHand();
    if (held) return;
    // The class records for its whole length, so without this every tap below
    // lands in iOS's silent-while-recording window and cannot be felt. Set on
    // each press, not once: the session is reconfigured on interruptions.
    allowHapticsWhileRecording();
    if (handRaisedRef.current) hapticFloorTaken();
    else hapticRefused();
  }, [raiseHand]);

  const onMicPressOut = useCallback(() => {
    const held = handRaisedRef.current;
    doneListening();
    if (held) {
      allowHapticsWhileRecording();
      hapticFloorReleased();
    }
  }, [doneListening]);

  // `raiseHand`'s ceiling timer needs to call the *current* `doneListening`
  // without taking it as a dependency and re-arming on every render.

  const doneListeningRef = useRef<() => void>(doneListening);
  doneListeningRef.current = doneListening;

  /**
   * RELEASE THE FLOOR IF THE BUTTON GOES AWAY UNDER THE THUMB.
   *
   * `sendPttStop` had exactly one caller — `onPressOut` — and the mic lives
   * inside the `isLandscape ?` branch, so rotating mid-hold unmounts the very
   * Pressable that owes us the release. No `onPressOut` ever arrives,
   * `handRaisedRef` stays true, and the server's PTT window stays open until
   * MAX_HOLD_MS retires it thirty seconds later: the teacher stays stopped,
   * the ring stays green, and the next hold is eaten because `is_ptt_active`
   * was never cleared. Rotating while speaking is not an edge case — it is
   * the button right next to the mic.
   *
   * The cleanup runs on both an orientation change and on leaving the class,
   * and `doneListening` is a no-op when nothing is held, so this costs
   * nothing when it is not needed.
   */
  useEffect(
    () => () => {
      doneListeningRef.current?.();
    },
    [isLandscape]
  );

  /**
   * Speaking is known to be off — as distinct from `checking`, where the probe
   * has not answered yet and dimming the button would be guessing. `checking`
   * is normally sub-second and always resolves (the probe has its own
   * timeout), so the button is only ever briefly non-committal.
   */
  const voiceOff = micStatus !== 'available' && micStatus !== 'checking';
  const micNotice = micNoticeFor(micStatus);

  const togglePause = () => {
    setPaused((p) => {
      const next = !p;
      if (next) clientRef.current?.pausePlayback();
      else clientRef.current?.resumePlayback();
      return next;
    });
  };

  const openReport = () => {
    setReportOpen(true);
    setChromeVisible(true);
  };

  const closeReport = () => setReportOpen(false);

  /**
   * Actually send it.
   *
   * This used to close the drawer and show "Report sent. Drona's team will
   * check this class." without making a single request. Students were told
   * their report had been received; none ever was, and the dashboard showed
   * live classes as the one surface with no problems.
   *
   * The toast now waits for the server. A failure says so — a thank-you for
   * something that did not send is the bug being fixed, and repeating it in a
   * nicer shape would be worse than an error message.
   */
  const sendReport = async () => {
    if (reportSending) return;
    setReportSending(true);
    setReportError(null);
    try {
      await postReport({
        surface: 'live',
        reason: selectedReason,
        comment: reportNotes.trim() || null,
        sessionId: sessionId || null,
        subject: params.subject || null,
        chapter: params.chapterTitle || null,
        // What was on screen when they hit report. For a live class this is
        // most of the diagnosis: it says what Drona actually said, which no
        // id recovers once the session transcript ages out.
        quote: caption || null,
        context: {
          card_phase: cardPhase,
          chapter_id: params.chapterId ?? null,
          subtopic: params.subtopic ?? null,
        },
      });
      setReportSending(false);
      setReportOpen(false);
      setToastVisible(true);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(() => setToastVisible(false), 2200);
    } catch (err) {
      setReportSending(false);
      setReportError(
        err instanceof Error ? err.message : 'Could not send that. Try again.'
      );
    }
  };

  /**
   * Leaving during the wait, before Drona has said anything.
   *
   * Not `endClass`: that replaces the route with the session summary, and a
   * class that never began has nothing to summarise — the student would land
   * on an empty report of a lesson they never had. This closes the socket, tells
   * the server the session is over so it is not left open, and goes back where
   * they came from.
   */
  const leaveBeforeStart = async () => {
    if (ending) return;
    setEnding(true);
    clientRef.current?.disconnect();
    // Not awaited: the comment below already said this is best effort, and the
    // student was still made to watch it finish. Nothing here reads the result,
    // and `router.back()` does not need the session to be closed first — the
    // request outlives this screen either way.
    if (sessionId) endDronaSession(sessionId).catch(() => {});
    router.back();
  };

  const endClass = async () => {
    if (ending) return;
    setEnding(true);
    // Close an open turn cleanly before the socket goes; the recorder itself
    // is torn down by the mount effect's cleanup on unmount.
    doneListening();

    // STARTED HERE, AWAITED ON THE NEXT SCREEN.
    //
    // This used to await the end call before navigating, so the board, the
    // dock and the whole classroom stayed in front of a student who had
    // already decided to leave — 1-2.5s of it, every single class. Dropping
    // the call was never an option: it sets the session's phase, and a session
    // that is never closed stays open forever. So the promise travels instead
    // (lib/session-end.ts), and `session-summary` picks it up.
    //
    // Before the recorder teardown, deliberately: stopRecording is 100-400ms
    // of AVAudioEngine work that the network call has no reason to queue
    // behind.
    if (sessionId) startSessionEnd(sessionId);

    try {
      await recorder.stopRecording();
    } catch {
      // Never started, or already stopped.
    }
    clientRef.current?.disconnect();

    router.replace({
      pathname: '/session-summary',
      params: {
        sessionId,
        // What this screen already knows. The end payload's own chapter_name
        // replaces this on the summary screen if it says something different.
        chapterTitle,
        // The topic the student chose on the way in. The server's end payload
        // has no notion of it — it knows the chapter, not which corner of it
        // was asked for.
        topicTitle: params.subtopic ?? '',
        questionsAsked: String(askedRef.current),
      },
    });
  };

  // Keeps the socket's onSessionEnded callback pointed at the current
  // endClass. Assigning on every render (rather than closing over it in the
  // connect effect) is what avoids rebuilding the WebSocket each render.
  endClassRef.current = endClass;

  // Suppressed while the student holds Interrupt, so bottom centre has one
  // owner — the Listening strip.
  /**
   * TWO STATES, because a chip only has two.
   *
   * The socket's `verdict` can be 'correct', 'partial' or 'incorrect', and the
   * middle one used to show as "Almost" in amber. On a multiple-choice chip
   * that is meaningless: you pressed one option, and either it was the right
   * one or it was not. "Almost" invited the student to work out how a single
   * tap could be partly right.
   *
   * It is also unreachable in practice. The only answer that can carry a
   * partial grade is a spoken one, and `onTranscriptFinal` clears the card the
   * moment a spoken answer lands — so the verdict chip is only ever shown for
   * a tap. Anything that is not 'correct' reads as not correct here, and
   * Drona explains the difference in the next turn either way.
   *
   * Fills are chosen for the contrast of the text ON them, not for hue:
   * GREEN_INK carries paper at 5.29:1 where the brighter GREEN manages 3.52.
   * RED is the app's own error colour, at 4.17.
   */
  const wasCorrect = answerVerdict === 'correct';
  const verdictFill = wasCorrect
    ? { backgroundColor: GREEN_INK, borderColor: GREEN_INK }
    : { backgroundColor: RED, borderColor: RED };
  const verdictInk = colors.paper;
  const verdictWord = wasCorrect ? 'Correct' : 'Not quite';

  // Stands down for a checkpoint: the question and its answers own the space
  // above the controls, and two stacked overlays in one place is how the chip
  // ended up sitting on the dock's hint text.
  const showJumpChip = !following && !handRaised && checkOptions.length === 0;

  // Hold the first paint until the window has actually turned, so the board
  // is never seen reflowing mid-rotation. Unlike the old landscape lock this
  // is only a paint gate: the layout below reads the real window, so if a lock
  // is refused the board still matches the phone instead of lying sideways.
  if (!oriented) {
    return <View style={styles.rotateHold} />;
  }

  if (connectError) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <View style={styles.errorBlock}>
          <Text style={styles.errorTitle}>Couldn&apos;t join the class</Text>
          <Text style={styles.errorBody}>{connectError}</Text>
          <Pressable style={styles.errorButton} onPress={() => router.back()}>
            <Text style={styles.errorButtonText}>Go back</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      {/* The board is the screen. No card, no inset, no drawn frame — the
          ruled page runs to all four edges and every control floats over it,
          so the only border on a phone is the phone's own. */}
      <View style={styles.boardArea}>
        <Pressable style={StyleSheet.absoluteFill} onPress={toggleChrome}>
          <RuledGround height={boardHeight} />
        </Pressable>

        <Animated.ScrollView
          ref={scrollRef}
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.boardContent}
          scrollEventThrottle={16}
          onScroll={onBoardScroll}
          onLayout={(e) => setBoardHeight(e.nativeEvent.layout.height)}
          onContentSizeChange={onBoardGrow}
          onScrollBeginDrag={() => {
            draggingRef.current = true;
            draggingShared.value = true;
          }}
          onScrollEndDrag={(e) => {
            draggingRef.current = false;
            draggingShared.value = false;
            onBoardSettled(e);
          }}
          onMomentumScrollEnd={onBoardSettled}
          showsVerticalScrollIndicator={false}>
          <Pressable style={styles.boardTapTarget} onPress={toggleChrome}>
            {board.length === 0 ? (
              <View style={styles.writingRow}>
                <Blink style={styles.writingCursor} />
                <Text style={styles.writingText}>
                  {connectionStatus === 'open' ? 'Writing…' : 'Connecting to Drona…'}
                </Text>
              </View>
            ) : (
              board.map((event, i) => (
                <BoardLine key={`${event.seq}-${i}`}>
                  <BoardBlockView
                    event={event}
                    diagramBox={diagramBox}
                    widgetHost={widgetHost}
                  />
                </BoardLine>
              ))
            )}
          </Pressable>
        </Animated.ScrollView>

        <AnimatedScrollIndicator
          top={indicatorTop}
          height={indicatorHeight}
          opacity={indicatorOpacity}
        />

        {/* Header — tucks up and out on a board tap. */}
        {/* THE HEADER NEEDS A GROUND, and the reference gives it one.
            Measured off the mock: solid white to y=104, then a fade to
            transparent by y=124. Without it the header floats on the paper and
            the board's writing runs under it as the student scrolls — the two
            collided rather than one passing beneath the other. The fade is
            what stops the band reading as a drawn bar: text dissolves into it
            instead of being cut off by an edge.

            Portrait only. Landscape has a 52pt top padding and a single
            header row over it, and a band that deep across a 390pt-tall board
            would eat an eighth of the writing. */}
        <Animated.View style={[styles.headerScrim, scrimStyle]} pointerEvents="none">
          <LinearGradient
            colors={['#FFFFFF', '#FFFFFF', 'rgba(255,255,255,0)']}
            locations={[0, isLandscape ? 0.77 : 0.84, 1]}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        <Animated.View style={[styles.topBar, headerStyle]} pointerEvents={chromeVisible ? 'auto' : 'none'}>
          {/* No dot. It bought nothing the title does not already say, and
              the 13pt it cost is 13pt the title now spends on being readable
              before it has to truncate. */}
          <View style={styles.topChapterChip}>
            <Text style={styles.topChapterText} numberOfLines={1} ellipsizeMode="tail">
              {params.subtopic || chapterTitle}
            </Text>
          </View>
          {/* NOTHING ELSE IN THIS ROW.
              "Your turn" was the last rung left and it has gone with the
              others: the chips that appear for a checkpoint already say it is
              the student's turn, and they say it where the answer is given
              rather than in the corner of the screen. The row is the chapter,
              a flag and End.

              The state itself is not lost — every rung that mattered has a
              home in the body of the screen: Listening and Transcribing are
              on the Interrupt button, Thinking and Paused are visible in the
              board and the pause control, and a checkpoint is its own chips. */}
          <View style={styles.topSpacer} />
          {/* Icon only in portrait, which is how the reference draws it. The
              label is 40pt of a 362pt row and portrait has none to spare —
              with it, the header needed 436pt and the chapter title paid for
              the difference in ellipsis. Landscape has the room and keeps the
              word. */}
          <Pressable style={styles.topReportButton} onPress={openReport} hitSlop={8}>
            <ReportIcon size={12} color={INK_MUTED} />
            {isLandscape && <Text style={styles.topReportText}>Report</Text>}
          </Pressable>
          <Pressable
            style={styles.topEndButton}
            onPress={() => {
              if (ending) return;
              // The classroom holds the mic open for the whole class, and iOS
              // mutes haptics while it does unless this opts back in first.
              // Only here, not inside endClass: the server can end a class
              // too, and that should not tap the student's hand.
              allowHapticsWhileRecording();
              hapticCommitted();
              void endClass();
            }}
            disabled={ending}>
            <View style={styles.topEndSquare} />
            <Text style={styles.topEndText}>{ending ? 'Ending…' : 'End'}</Text>
          </Pressable>
        </Animated.View>

        {showJumpChip && (
          <Pressable style={styles.liveChip} onPress={jumpToLive}>
            <Text style={styles.liveChipArrow}>↓</Text>
            <Text style={styles.liveChipText}>Jump to live</Text>
          </Pressable>
        )}

      </View>

      {/* THE CHECKPOINT, AS ITS OWN CARD.
          Not the caption strip. The first attempt reused it to carry the
          question, which meant the thing Nikhil had removed came straight
          back — "cc" badge, blinking caret and all — for the one case it was
          still wired to. A question Drona asks is not a subtitle of what
          Drona said; it is a thing to answer, so it gets a card with the
          answers inside it.

          The question comes from `questionText`, the state frame's own field,
          rather than from the caption stream. `caption` is now only what the
          Report drawer quotes.

          Rises and leaves as one piece: the chips cannot outlive the question
          they belong to, and the card unmounting is what plays the exit.

          Portrait puts it directly above the dock, landscape above the bottom
          edge and clear of the rail's channel — the positioning lives on
          `askColumn`. */}
      {checkOptions.length > 0 && questionText && !handRaised && (
        <Animated.View
          style={styles.askColumn}
          entering={FadeInDown.duration(320).easing(Easing.bezier(0.2, 0.7, 0.2, 1).factory())}
          exiting={FadeOutDown.duration(220)}>
          <View style={styles.askCard}>
            <Text style={styles.askQuestion} numberOfLines={3}>
              {spokenMathToNotation(questionText)}
            </Text>
            {/* THE VERDICT REPLACES THE ROW, it does not squeeze into it.
                The four chips leave only 5.9pt of slack across a 336pt row, so
                adding a mark to the chosen one would have wrapped the set at
                the exact moment of feedback. Swapping the whole row for a
                single chip means nothing can reflow, and once the alternatives
                are gone the chip has room for a mark AND a word — 168pt at
                worst.

                It needs the word. The three fills are within 1.11-1.27:1 of
                each other in lightness, so a student who cannot separate green
                from red gets nothing from the colour alone. The mark and the
                word carry it; the colour agrees with them. */}
            {answerVerdict && chosenOption ? (
              <Animated.View
                entering={FadeIn.duration(200)}
                style={[styles.askRow, styles.askRowVerdict]}>
                <View style={[styles.askChip, styles.askChipVerdict, verdictFill]}>
                  <VerdictMark correct={wasCorrect} color={verdictInk} />
                  <Text style={[styles.askChipText, { color: verdictInk }]}>{chosenOption}</Text>
                  <Text style={[styles.askVerdictWord, { color: verdictInk }]}>{verdictWord}</Text>
                </View>
              </Animated.View>
            ) : (
              <View style={styles.askRow}>
                {checkOptions.map((option) => {
                  const chosen = chosenOption === option;
                  const passedOver = chosenOption !== null && !chosen;
                  return (
                    <Pressable
                      key={option}
                      // Once one is pressed the rest stop taking taps, so a
                      // second answer cannot be sent during the hold.
                      disabled={chosenOption !== null}
                      style={[
                        styles.askChip,
                        chosen && styles.askChipChosen,
                        passedOver && styles.askChipPassedOver,
                      ]}
                      onPress={() => {
                        if (chosenOption !== null) return;
                        setChosenOption(option);
                        clientRef.current?.sendAnswer(option);
                        // A backstop only. `onAnswerResult` normally arrives
                        // first and replaces this with the shorter verdict hold.
                        answerHoldRef.current = setTimeout(clearCheckpoint, ANSWER_HOLD_MS);
                      }}>
                      <Text style={[styles.askChipText, chosen && styles.askChipTextChosen]}>
                        {option}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        </Animated.View>
      )}

      {/* Landscape keeps the thumb rail on the right, where a hand holding the
          phone sideways already is. Portrait puts the same controls in a dock
          along the bottom, within reach of a thumb on an upright phone — the
          whole reason this screen stopped forcing landscape. */}
      {/* THE COMMAND DOCK, from `dock_handoff/Classroom Dock 8a 8b`.
          8a across the bottom in portrait, 8b upright at the side in
          landscape. Three round targets and nothing else: no Interrupt label,
          no dividers, and no teacher wave — the dock is colourless and still
          for the whole class and only lights up when a student touches it. */}
      {isLandscape ? (
      <Animated.View style={[styles.rail, railStyle]} pointerEvents={chromeVisible ? 'auto' : 'none'}>
        {/* `onTouchStart` on the wrapper, not a Pressable around it: it fires
            for touches on the buttons inside as well, which is how one gesture
            both wakes the ring and works the control — the prototype's
            `onpointerdown` on `#dockQL` over its own children. */}
        <View style={styles.dockAnchor} onTouchStart={wakeDock}>
          <DockRing mood={ringMood} awake={ringAwake} vertical id="rail" level={voiceLevel} />
          <View style={styles.railPill}>
            {/* Press and hold to speak; release to hand the board back. No
                confirm step, no "done" button, no modal.

                When there is no mic to open, the button stays here and stays
                pressable — it is the only place the student would look — but
                it wears the off state, so the answer is visible before the
                press, and pressing it opens the card that says why rather
                than doing nothing. */}
            <Pressable
              style={[styles.railMic, handRaised && styles.micOn, voiceOff && styles.micOff]}
              onPressIn={onMicPressIn}
              onPressOut={onMicPressOut}
              accessibilityLabel="Hold to speak">
              {handRaised ? (
                <LevelBars color={PAPER} heights={[9, 17, 12]} />
              ) : voiceOff ? (
                <MicOffIcon size={20} color={PAPER} />
              ) : (
                <MicIcon size={20} color={PAPER} />
              )}
            </Pressable>
            <Pressable
              style={styles.railCtrl}
              onPress={togglePause}
              hitSlop={6}
              accessibilityLabel={paused ? 'Resume teacher' : 'Pause teacher'}>
              {paused ? <PlayIcon size={16} color={INK} /> : <PauseIcon size={16} color={INK} />}
            </Pressable>
            {/* Back to upright. The same slot CC used to hold — captions are
                gone and this is the control that earns it. */}
            <Pressable
              style={[styles.railCtrl, !canRotate && styles.ctrlUnavailable]}
              onPress={() => requestOrientation(false)}
              disabled={!canRotate}
              hitSlop={8}
              accessibilityLabel="Rotate to portrait">
              <RotateIcon size={19} color={INK_MUTED} portrait />
            </Pressable>
          </View>
        </View>
      </Animated.View>
      ) : (
        /* THE DOCK DOES NOT TUCK.

           In portrait a tap hides the header only; the controls stay put.
           Tucking them made sense for a landscape rail sitting over the
           writing, but across the bottom of an upright phone the dock covers
           no text, and taking the mic away from a student who is reading
           removes the button at the moment they want it. It is also why
           portrait needs no edge tab: nothing has gone anywhere to fetch back.

           A plain View, deliberately — it has no animated state, and an
           animated wrapper that always resolves to translateY(0)/opacity(1)
           only looks like it does. */
        <View style={styles.dockWrap}>
          <View style={styles.dockAnchor} onTouchStart={wakeDock}>
            <DockRing mood={ringMood} awake={ringAwake} vertical={false} id="dock" level={voiceLevel} />
            <View style={styles.dockPill}>
              <Pressable
                style={styles.dockCtrl}
                onPress={togglePause}
                hitSlop={6}
                accessibilityLabel={paused ? 'Resume teacher' : 'Pause teacher'}>
                {paused ? <PlayIcon size={17} color={INK} /> : <PauseIcon size={17} color={INK} />}
              </Pressable>

              {/* The mic is a circle now, not a wide labelled pill. The label
                  is what the handoff dropped, and once it is gone the pill has
                  nothing to be wide for. */}
              <Pressable
                style={[styles.dockMic, handRaised && styles.micOn, voiceOff && styles.micOff]}
                onPressIn={onMicPressIn}
                onPressOut={onMicPressOut}
                accessibilityLabel="Hold to speak">
                {handRaised ? (
                  <LevelBars color={PAPER} heights={[9, 17, 12]} />
                ) : voiceOff ? (
                  <MicOffIcon size={20} color={PAPER} />
                ) : (
                  <MicIcon size={20} color={PAPER} />
                )}
              </Pressable>

              <Pressable
                style={[styles.dockCtrl, !canRotate && styles.ctrlUnavailable]}
                onPress={() => requestOrientation(true)}
                disabled={!canRotate}
                hitSlop={8}
                accessibilityLabel="Rotate to landscape">
                <RotateIcon size={21} color={INK_MUTED} />
              </Pressable>
            </View>
          </View>
          {/* The handoff's hint is fixed text — it does not answer back while
              you speak, because the mic going green and growing bars already
              does. "Mic off" is the one state it has no word for, and that one
              has to be said. */}
          <Text style={[styles.dockHint, { color: turnColor(voiceOff ? 'idle' : turn) }]}>
            {turnWords(turn, voiceOff)}
          </Text>
        </View>
      )}

      {/* Landscape only: the rail tucks sideways and needs a way back. In
          portrait the dock never leaves, so there is nothing to restore and a
          tab would point at nothing. A tap on the paper brings the header
          back. */}
      <EdgeTab visible={isLandscape && !chromeVisible} onPress={showChrome} />

      {/* Mic off: say plainly WHICH way it is off, and offer Settings only when
          Settings is actually the fix. A student who has no input at all, or
          whose device cannot reach its audio hardware, is not helped by being
          sent to a permission toggle that is already on — that is the kind of
          dead-end instruction that reads as the app blaming them.
          Drona keeps teaching behind this — only speaking is unavailable. */}
      {micDenied && (
        <Animated.View entering={FadeIn.duration(200)} style={styles.micDeniedCard}>
          <Text style={styles.micDeniedTitle}>{micNotice.title}</Text>
          <Text style={styles.micDeniedBody}>{micNotice.body}</Text>
          <View style={styles.micDeniedRow}>
            {micNotice.settingsFixesIt ? (
              <>
                <Pressable style={styles.micDeniedGhost} onPress={() => setMicDenied(false)}>
                  <Text style={styles.micDeniedGhostText}>Not now</Text>
                </Pressable>
                <Pressable
                  style={styles.micDeniedPrimary}
                  onPress={() => {
                    setMicDenied(false);
                    Linking.openSettings();
                  }}>
                  <Text style={styles.micDeniedPrimaryText}>Open Settings</Text>
                </Pressable>
              </>
            ) : (
              <Pressable style={styles.micDeniedPrimary} onPress={() => setMicDenied(false)}>
                <Text style={styles.micDeniedPrimaryText}>Got it</Text>
              </Pressable>
            )}
          </View>
        </Animated.View>
      )}

      {toastVisible && (
        <Animated.View entering={FadeIn.duration(150)} style={styles.toast}>
          <Text style={styles.toastCheck}>✓</Text>
          <Text style={styles.toastText}> Report sent. Drona&apos;s team will check this class.</Text>
        </Animated.View>
      )}

      {reportOpen && (
        <>
          <Pressable style={styles.rscrim} onPress={closeReport} />
          <Animated.View entering={SlideInRight.duration(280)} style={styles.rdrawer}>
            <View style={styles.rdrawerHeader}>
              <View style={styles.rdrawerIconChip}>
                <ReportIcon size={scale(13)} color="#C53A2B" />
              </View>
              <Text style={styles.rdrawerTitle}>Report a mistake</Text>
              <Pressable style={styles.rdrawerClose} onPress={closeReport}>
                <Text style={styles.rdrawerCloseText}>✕</Text>
              </Pressable>
            </View>

            <View style={styles.rquoteCard}>
              <View style={styles.rquoteRule} />
              <Text style={styles.rquoteLabel}>From this class · {chapterTitle}</Text>
              <Text style={styles.rquoteText} numberOfLines={2}>
                {caption || 'This class'}
              </Text>
            </View>

            <Text style={styles.rwhatsWrong}>What&apos;s wrong?</Text>
            <View style={styles.rchipsRow}>
              {REPORT_REASONS.map((reason) => {
                const selected = selectedReason === reason;
                return (
                  <Pressable
                    key={reason}
                    style={[styles.rchip, selected && styles.rchipSelected]}
                    onPress={() => setSelectedReason(reason)}>
                    <Text style={[styles.rchipText, selected && styles.rchipTextSelected]}>
                      {reason}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.rextraRow}>
              <View style={styles.rscreenshotBox}>
                <ScreenshotIcon size={scale(13)} />
                <Text style={styles.rscreenshotText}>
                  Screenshot <Text style={styles.rscreenshotOptional}>optional</Text>
                </Text>
              </View>
              <TextInput
                style={styles.rnotesInput}
                placeholder="Anything else? (optional)"
                placeholderTextColor={colors.faint}
                value={reportNotes}
                onChangeText={setReportNotes}
                editable={!reportSending}
                multiline
              />
            </View>

            <View style={styles.rfooter}>
              <Text style={styles.rfooterHint}>
                {reportError || 'Reporting won\u2019t interrupt your class.'}
              </Text>
              <Pressable
                style={[styles.rsendButton, reportSending && { opacity: 0.6 }]}
                disabled={reportSending}
                onPress={sendReport}>
                <Text style={styles.rsendButtonText}>
                  {reportSending ? 'Sending\u2026' : reportError ? 'Try again' : 'Send report'}
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </>
      )}

      {/* Last child, so it covers everything: the board, the chrome, the rail.
          Same card `entering-classroom` was showing a moment ago, over the same
          dark ground — with `animation: 'fade'` on this route the student sees
          one surface that never went away, rather than two loaders either side
          of a route change. */}
      {cardVisible && (
        <Animated.View
          // Last in the tree is not enough on its own: `EdgeTab` sets
          // zIndex 5, which floated it over the card at the right edge.
          // Nothing else on this screen sets one, so this only has to clear
          // that.
          style={[StyleSheet.absoluteFill, styles.enteringCardOverlay]}
          exiting={FadeOut.duration(320)}
          pointerEvents="auto">
          <EnteringCardScreen
            chapterTitle={params.subtopic || chapterTitle}
            statusText={longWait ? LONG_WAIT_TEXT : cardLine}
            onBack={leaveBeforeStart}
          />
        </Animated.View>
      )}
    </View>
  );
}

/**
 * What the card says, per reason speaking is off.
 *
 * `settingsFixesIt` is the load-bearing field: only a refused permission is
 * fixable from Settings. Offering that button for "there is no microphone" or
 * "this device cannot reach its audio hardware" sends the student to a toggle
 * that is already on, and they come back to the same dead button none the
 * wiser.
 */
function micNoticeFor(status: MicStatus): {
  title: string;
  body: string;
  settingsFixesIt: boolean;
} {
  switch (status) {
    case 'denied':
      return {
        title: 'Microphone is off',
        body: 'Drona needs your mic to hear you. Turn it on in Settings. The class keeps going either way.',
        settingsFixesIt: true,
      };
    case 'no-input':
      return {
        title: 'No microphone found',
        body: "There's no microphone for Drona to listen through, so speaking is off. The class keeps going: answer with the chips instead.",
        settingsFixesIt: false,
      };
    // 'unavailable', and 'checking'/'available' defensively: the card only opens
    // from a press that already failed, so a stale status still needs wording
    // that is true.
    default:
      return {
        title: 'Speaking is unavailable',
        body: "Drona can't reach the microphone on this device right now, so speaking is off. Everything else in the class works as normal.",
        settingsFixesIt: false,
      };
  }
}

function MicIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6 11a6 6 0 0 0 12 0" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path d="M12 17v4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

/**
 * The same mic, struck through — the off state of the Interrupt button. Drawn
 * rather than swapped for a different glyph so the button reads as the same
 * control in two states, not two controls.
 */
function MicOffIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6 11a6 6 0 0 0 12 0" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path d="M12 17v4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path d="M4 3l16 18" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

function ReportIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 21V4" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function PauseIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M9 5v14M15 5v14" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

/**
 * Rotate. Draws the shape the board is going TO, not the one it is in: in
 * landscape the button shows an upright phone, in portrait a wide one, so the
 * icon is a preview rather than a label for the current state.
 */
function RotateIcon({
  size,
  color,
  portrait,
}: {
  size: number;
  color: string;
  portrait?: boolean;
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      {/* The screen in the shape it is going to, and a turn arrow clear of it.
          An arc drawn ACROSS the phone was the first attempt and it collided
          with the outline — at 15pt the two merged into a blob. Keeping the
          arrow in the corner is what makes it read at this size. */}
      {portrait ? (
        <>
          <Rect x={3} y={6.5} width={9.5} height={15} rx={2.2} stroke={color} strokeWidth={1.8} />
          <Path d="M16.4 4.4h1.6a3.4 3.4 0 0 1 3.4 3.4v4.6" stroke={color} strokeWidth={1.8} />
          <Path d="M18.4 2.4 16.1 4.4 18.4 6.4" stroke={color} strokeWidth={1.8} />
        </>
      ) : (
        <>
          <Rect x={2.5} y={11} width={15} height={9.5} rx={2.2} stroke={color} strokeWidth={1.8} />
          <Path d="M13.6 4.4h4.4a3.4 3.4 0 0 1 3.4 3.4v4.6" stroke={color} strokeWidth={1.8} />
          <Path d="M15.6 2.4 13.3 4.4 15.6 6.4" stroke={color} strokeWidth={1.8} />
        </>
      )}
    </Svg>
  );
}

/**
 * The verdict as a shape, so it does not depend on the fill — the two fills
 * sit within 1.27:1 of each other in lightness, which is no difference at all
 * to a student who cannot separate green from red.
 */
function VerdictMark({ correct, color }: { correct: boolean; color: string }) {
  const d = correct ? 'M4.5 12.4l4.6 4.6L19.5 6.6' : 'M6.4 6.4l11.2 11.2M17.6 6.4L6.4 17.6';
  return (
    <Svg viewBox="0 0 24 24" width={13} height={13} fill="none">
      <Path d={d} stroke={color} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/**
 * ONE LINE OF THE BOARD, and how it arrives.
 *
 * A flat 220ms fade was the whole of it before, which is why the writing read
 * as printing — a line simply existed, at full strength, one frame after it did
 * not. It now rises six points as it fades in, easing out over 320ms: short
 * enough to keep up with speech, long enough to read as something being written
 * rather than pasted.
 *
 * NO SPOTLIGHT HERE, AND THE REASON IS WORTH KEEPING. This briefly dimmed every
 * line except the one being spoken. The sync was real — the server pairs each
 * sentence with its board line and reports that clip's measured length — and
 * the feature was still useless, because a line is WRITTEN at the moment its
 * sentence begins. So the line being spoken is always the newest line: nothing
 * ever lit up that was already on the board, and all that happened was older
 * lines went slightly paler. Two classes were watched and nobody saw a thing.
 *
 * It could not have been made louder either. Against white, body type at
 * 7.65:1 drops under AA by alpha 0.794 and the amber heading at 4.73:1 has no
 * room at all, so the dim was stuck at 0.82 — about 12% on ordinary prose.
 *
 * What would make it worth doing is the server naming which EARLIER lines a
 * sentence refers to, so a value written minutes ago can light while it is
 * discussed. `board_event` only ever names the line a sentence introduces.
 * That ask is with Raasikh; when it lands, the highlight belongs here.
 */
function BoardLine({ children }: { children: React.ReactNode }) {
  return <Animated.View entering={enterLine}>{children}</Animated.View>;
}

/** Fade up and settle, rather than appear. See BoardLine. */
function enterLine() {
  'worklet';
  return {
    initialValues: { opacity: 0, transform: [{ translateY: 6 }] },
    animations: {
      opacity: withTiming(1, { duration: 320, easing: Easing.out(Easing.quad) }),
      transform: [{ translateY: withTiming(0, { duration: 320, easing: Easing.out(Easing.cubic) }) }],
    },
  };
}

function PlayIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M7 4.5v15l13-7.5-13-7.5Z" fill={color} />
    </Svg>
  );
}

function ScreenshotIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M3 4h18v16H3z"
        stroke={colors.slate}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={9} cy={10} r={1.6} stroke={colors.slate} strokeWidth={1.8} />
      <Path
        d="m21 16-4.5-4.5L7 21"
        stroke={colors.slate}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(
  scale: (size: number) => number,
  verticalScale: (size: number) => number,
  isLandscape: boolean
) {
  /**
   * The board's gutters, which differ by orientation because the chrome does.
   *
   * Landscape keeps a 116 channel on the right for the thumb rail. Portrait has
   * no rail — the controls sit in a dock along the bottom — so the writing runs
   * almost to the right edge and the vertical padding grows instead, to clear
   * the header above and the dock below.
   *
   * The left gutter is 28, not 40. 40 was the classroom-flow handoff's value
   * and it was 12pt of clearance for a red margin rule at x=28 — with the rule
   * gone it was just a wide, unexplained indent. `Board 1c Faded Rules` sets
   * its own content box to `padding: 26px 28px 40px 28px`, so 28 on both
   * sides, and the rules fade over the first 60 anyway.
   */
  const boardPad = isLandscape
    ? { top: BOARD_TOP, right: BOARD_RIGHT_GUTTER, bottom: BOARD_TOP, left: BOARD_LEFT }
    : { top: 130, right: 28, bottom: 146, left: 28 };
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    // Held until the device has actually turned — painting a landscape
    // layout into a still-portrait window is what made this look broken.
    rotateHold: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    errorBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(12),
      paddingHorizontal: scale(60),
    },
    errorTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(20),
      color: colors.ink,
    },
    errorBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
    errorButton: {
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(24),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    errorButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.paper,
    },
    // Full bleed: the ruled page fills the screen with no card, no radius and
    // no border. This is the whole point of the redesign — an inset board
    // inside the phone's own frame read as a box in a box, and its proportions
    // changed with every device.
    boardArea: {
      flex: 1,
      minHeight: 0,
      position: 'relative',
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    // Landscape: 52 top and bottom, 56 left (the notch gutter), 116 right to
    // clear the thumb rail. Portrait: 130 and 146 to clear the header and the
    // dock, 28 either side — `Board 1c`'s own content box. The old pair of
    // 2x26s was a rule-grid number and means nothing now that the writing is
    // not set to the grid; see `boardPad` above.
    boardContent: {
      // flexGrow lets the tap target below stretch to the full board height,
      // so tapping empty paper tucks the chrome just like tapping a line.
      flexGrow: 1,
      paddingTop: boardPad.top,
      paddingRight: boardPad.right,
      paddingBottom: boardPad.bottom,
      paddingLeft: boardPad.left,
    },
    boardTapTarget: {
      flex: 1,
    },
    enteringCardOverlay: {
      zIndex: 20,
    },
    /**
     * THE WRITING'S OWN STYLES ARE NOT HERE — see `components/board-text.tsx`.
     *
     * Heading, body, formula and note moved there so the preview screen and
     * this classroom cannot drift apart, and their comments went with them.
     * What was left behind was a page of reasoning about sizes and rule
     * alignment with no styles under it, still asserting things the board
     * stopped doing: that a line is one rule tall, that the writing sits ON
     * the rules, that the note is 14.5. Spacing is set for reading now and the
     * rules are decoration. Only `writingRow` below is still this screen's.
     */
    writingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      height: RHYTHM,
    },
    writingCursor: {
      width: 8,
      height: 14,
      borderRadius: 2,
      backgroundColor: AMBER,
    },
    writingText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: INK_FAINT,
    },

    // Header — left 56 so it starts on the same gutter as the writing.
    topBar: {
      position: 'absolute',
      top: isLandscape ? 14 : 58,
      left: isLandscape ? BOARD_LEFT : 22,
      right: isLandscape ? 26 : 18,
      flexDirection: 'row',
      alignItems: 'center',
      // The row is three things with two joints: title | flag | End. 14 is
      // what keeps the flag off the title's last letter and off the pill,
      // and there is room for it now that the dot and the badge are gone.
      gap: 14,
    },
    // Just the title now. It keeps `flexShrink` so a long chapter gives way
    // to the controls rather than pushing them off the row, and `minWidth: 0`
    // is what lets a flex child actually shrink below its content width --
    // without it the Text refuses to ellipsize and overflows instead.
    topChapterChip: {
      flexShrink: 1,
      minWidth: 0,
    },
    topChapterText: {
      // Not bold. It is a label for where you are, not a headline — and at 700
      // it competed with the End pill for the eye in a row that has only one
      // thing worth pressing.
      fontFamily: 'Onest_500Medium',
      fontSize: 13,
      color: INK,
    },
    topSpacer: {
      flex: 1,
    },
    topReportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
      // A 12pt glyph is a small target; the padding makes it a real one
      // without moving anything, because the row has the width to spare.
      paddingHorizontal: 4,
      paddingVertical: 6,
    },
    topReportText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: INK_MUTED,
    },
    topEndButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
      borderRadius: 99,
      backgroundColor: RED,
      paddingVertical: 6,
      paddingHorizontal: 13,
    },
    topEndSquare: {
      width: 9,
      height: 9,
      borderRadius: 2.5,
      backgroundColor: '#fff',
    },
    topEndText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: '#fff',
    },

    // Jump to live — bottom centre, and suppressed while the student holds
    // Interrupt so the Listening strip owns that edge alone.
    liveChip: {
      position: 'absolute',
      alignSelf: 'center',
      // Above the dock in portrait, not on it. At 14 this sat squarely over
      // the dock's "Hold to interrupt" line.
      bottom: isLandscape ? 14 : verticalScale(DOCK_TOP + 14),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: DARK_CHROME,
      borderRadius: 99,
      paddingVertical: 8,
      paddingHorizontal: 16,
      shadowColor: INK,
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.35,
      shadowRadius: 8,
      elevation: 6,
    },
    liveChipArrow: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: AMBER,
    },
    liveChipText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: '#EFEBDD',
    },

    // Thumb rail — a floating paper plate, centred on the screen.

    /**
     * 8b. The rail is only a position now — right 12, vertically centred,
     * which is the prototype's `right:12px; top:50%; translateY(-50%)`. Its
     * plate, border and shadow moved to `railPill`, because the ring has to
     * draw BEHIND them: it is a sibling of the plate, not a child, or it would
     * paint over the very white it is meant to be hugging.
     */
    rail: {
      position: 'absolute',
      right: 12,
      top: '50%',
    },
    /** Wraps ring and plate together and sizes itself to the plate, so the
     *  ring's -1.5 and -6 insets are measured off the pill's own edge. */
    dockAnchor: {
      position: 'relative',
      alignSelf: 'center',
    },
    railPill: {
      alignItems: 'center',
      gap: 12,
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 99,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      /**
       * The prototype's two shadows, literally — negative spreads included,
       * which `shadowOffset`/`shadowRadius`/`shadowOpacity` cannot express and
       * which is why this used to be an approximation. `boxShadow` carries
       * `spreadDistance` and RN 0.81 implements it natively on iOS
       * (`RCTBoxShadow.mm`). The tight second shadow seats the plate on the
       * paper; the wide first one lifts it off.
       */
      boxShadow: [
        { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
        { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
      ],
    },
    /** 48 here against portrait's 52: the prototype sizes them differently
     *  because an upright rail has less room to give. */
    railMic: {
      width: 48,
      height: 48,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: INK,
      boxShadow: [
        { offsetX: 0, offsetY: 12, blurRadius: 26, spreadDistance: -14, color: 'rgba(28,26,22,0.7)' },
      ],
    },
    railCtrl: {
      width: 40,
      height: 40,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
    },

    /** A control that would refuse the tap, saying so. Same 0.4 the passed-over
     *  ask chips step back to, rather than a new idea for "unavailable". */
    ctrlUnavailable: {
      opacity: 0.4,
    },

    /**
     * The header's ground, in both orientations.
     *
     * The solid part ends just past the header row and the fade carries it to
     * the line where the writing starts, so a line at rest sits clear of it
     * and only a scrolled line passes under the fade.
     *
     *   portrait   124 deep, solid to 104 (row ends at 84), padding 130
     *   landscape   52 deep, solid to  40 (row ends at 40), padding 52
     *
     * Landscape is shallower because it has to be: its board is 390pt tall, so
     * a 124 band there would have covered an eighth of the writing.
     */
    headerScrim: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: isLandscape ? 52 : 124,
    },

    /* --- portrait dock: the rail's controls, laid along the bottom --- */
    dockWrap: {
      position: 'absolute',
      left: 0,
      right: 0,
      // Lower than it was (30), and the gap under the plate is tighter, so the
      // group sits down near the edge the way the reference draws it. It stops
      // short of the home indicator, which lives in the bottom ~13pt.
      bottom: verticalScale(20),
      alignItems: 'center',
      gap: verticalScale(6),
    },
    // The wide pill the handoff draws: mic and label on one line, because
    // across the bottom there is room for it and no room to stack a label
    // under a circle.
    /** 8a. Same split as the rail: plate here, ring behind it. */
    dockPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 99,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      /**
       * The prototype's two shadows, literally — negative spreads included,
       * which `shadowOffset`/`shadowRadius`/`shadowOpacity` cannot express and
       * which is why this used to be an approximation. `boxShadow` carries
       * `spreadDistance` and RN 0.81 implements it natively on iOS
       * (`RCTBoxShadow.mm`). The tight second shadow seats the plate on the
       * paper; the wide first one lifts it off.
       */
      boxShadow: [
        { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
        { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
      ],
    },
    dockCtrl: {
      width: 48,
      height: 48,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
    },
    /** 52 — the largest target on the dock and the only filled one, which is
     *  the whole of how the handoff says "this is the one". */
    dockMic: {
      width: 52,
      height: 52,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: INK,
      boxShadow: [
        { offsetX: 0, offsetY: 12, blurRadius: 26, spreadDistance: -14, color: 'rgba(28,26,22,0.7)' },
      ],
    },
    /** Held. GREEN_INK is already #157A45, the prototype's own green; the mic
     *  glyph gives way to level bars at the same moment. */
    micOn: {
      backgroundColor: GREEN_INK,
    },
    /** Off, not missing: same plate in the same place, drained of the shadow
     *  that makes it read as a live control. The prototype has no state for
     *  this — it never considers a phone whose mic cannot be opened — so this
     *  one is the app's own, kept from the dock it replaces. */
    micOff: {
      backgroundColor: INK_MUTED,
      opacity: 0.55,
      boxShadow: [],
    },
    dockHint: {
      fontFamily: 'Onest_700Bold',
      fontSize: 10.5,
      letterSpacing: 0.08 * 10.5,
      textTransform: 'uppercase',
      color: INK_FAINT,
    },
    /** Off, not missing: same plate, drained of the shadow that makes it read
     *  as a live control. */
    // Pinned to 54 so the plate cannot resize when the label changes.
    /**
     * 60, not 54.
     *
     * "INTERRUPT" measures 56.2pt in Onest ExtraBold at 8.5 with 0.1em
     * tracking, so it spilled out of a 54pt box and over the rail's rounded
     * plate. The other two states fit -- "SPEAKING" 50.8, "MIC OFF" 41.7 --
     * which is why only the resting state looked wrong. The box is the widest
     * child of the rail, so it also sets the rail's width; a fixed one keeps
     * the dock from resizing as the label changes.
     *
     * lineHeight is explicit so the -3 lands the same on any face. The old -4
     * was measured against Anek Latin's line box.
     */
    micDeniedCard: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(20),
      transform: [{ translateX: -scale(150) }],
      width: scale(300),
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.25,
      shadowRadius: scale(10),
      elevation: 6,
    },
    micDeniedTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    micDeniedBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(17),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    micDeniedRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(12),
    },
    micDeniedGhost: {
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(12),
    },
    micDeniedGhostText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12.5),
      color: colors.slate,
    },
    micDeniedPrimary: {
      backgroundColor: colors.ink,
      borderRadius: scale(99),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(16),
    },
    micDeniedPrimaryText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12.5),
      color: colors.paper,
    },
    /**
     * The checkpoint block: the question, then the answers, clear of the
     * controls.
     *
     * Landscape sits it just above the bottom edge and keeps a 96 channel on
     * the right for the thumb rail. Portrait has no rail, so it spans the
     * width — but the dock owns the bottom DOCK_TOP points, so it is anchored
     * above that with a 14 gap rather than at a guessed offset.
     *
     * `box-none` on the container so the paper underneath still takes taps
     * everywhere the question and chips are not.
     */
    askColumn: {
      position: 'absolute',
      left: isLandscape ? scale(24) : scale(18),
      right: isLandscape ? scale(96) : scale(18),
      bottom: isLandscape ? verticalScale(14) : verticalScale(DOCK_TOP + 12),
    },
    /**
     * The card itself: white plate, hairline, the same shadow as the dock, so
     * the two read as one family of things that float over the paper.
     */
    askCard: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(18),
      paddingTop: verticalScale(13),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(15),
      gap: verticalScale(11),
      shadowColor: INK,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.16,
      shadowRadius: 14,
      elevation: 6,
    },
    // 500, not bold: it is a question to read, and the answers under it are
    // what the eye should land on.
    askQuestion: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14.5),
      lineHeight: scale(20),
      color: INK,
    },
    askRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
    },
    /**
     * A full-strength ink ring at 1.5pt with a shadow under each chip, inside
     * a card that already has one — that is where the heaviness came from.
     * One point at 20% is the same affordance the practice option rows use
     * (1.4 at 12%, a little softer because they are much bigger), and the
     * card's own shadow does the lifting for all of them.
     */
    askChip: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.20)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(16),
    },
    // The press, acknowledged: the chip fills with ink for the hold.
    askChipChosen: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    // The ones not taken step back rather than disappear, so the student can
    // still see what they chose between.
    askChipPassedOver: {
      opacity: 0.4,
    },
    // The verdict row holds one chip, so it starts at the left rather than
    // spreading like a set of choices.
    askRowVerdict: {
      alignItems: 'center',
    },
    askChipVerdict: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    // Lighter than the option it sits beside: the option is what was pressed,
    // the word is what came back about it.
    askVerdictWord: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
    },
    askChipTextChosen: {
      color: colors.paper,
    },
    askChipText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    toast: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(70),
      transform: [{ translateX: -scale(150) }],
      flexDirection: 'row',
      backgroundColor: '#221D16',
      borderRadius: scale(99),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(18),
    },
    toastCheck: {
      fontFamily: 'Onest_800ExtraBold',
      color: colors.marigold,
      fontSize: scale(12.5),
    },
    toastText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12.5),
      color: '#EFEBDD',
    },
    rscrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(22,19,14,.35)',
    },
    rdrawer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: scale(400),
      backgroundColor: colors.paper,
      borderLeftWidth: 1,
      borderLeftColor: colors.hairline,
      flexDirection: 'column',
      gap: verticalScale(9),
      padding: scale(16),
      paddingTop: verticalScale(14),
    },
    rdrawerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    rdrawerIconChip: {
      width: scale(30),
      height: scale(30),
      flexShrink: 0,
      borderRadius: scale(10),
      backgroundColor: 'rgba(221,68,51,.07)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rdrawerTitle: {
      flex: 1,
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15.5),
      color: colors.ink,
    },
    rdrawerClose: {
      width: scale(28),
      height: scale(28),
      borderRadius: scale(14),
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rdrawerCloseText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    rquoteCard: {
      position: 'relative',
      backgroundColor: colors.welcomePaper,
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(12),
      paddingVertical: verticalScale(9),
      paddingRight: scale(12),
      paddingLeft: scale(28),
    },
    rquoteRule: {
      position: 'absolute',
      top: verticalScale(8),
      bottom: verticalScale(8),
      left: scale(18),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    rquoteLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.68),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    rquoteText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      lineHeight: scale(16.7),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    rwhatsWrong: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(1.0),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    rchipsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(6),
    },
    rchip: {
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: '#fff',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(13),
    },
    rchipSelected: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    rchipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11.5),
      color: colors.slate,
    },
    rchipTextSelected: {
      fontFamily: 'Onest_700Bold',
      color: colors.paper,
    },
    rextraRow: {
      flexDirection: 'row',
      gap: scale(8),
    },
    rscreenshotBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      flexDirection: 'row',
      borderWidth: scale(1.6),
      borderColor: 'rgba(28,26,22,.22)',
      borderStyle: 'dashed',
      borderRadius: scale(12),
      backgroundColor: '#fff',
      paddingVertical: verticalScale(10),
    },
    rscreenshotText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    rscreenshotOptional: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(10.5),
      color: colors.faint,
    },
    rnotesInput: {
      flex: 1.4,
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      borderRadius: scale(12),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(12),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: colors.ink,
    },
    rfooter: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: 'auto',
    },
    rfooterHint: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(10.5),
      lineHeight: scale(14.7),
      color: colors.faint,
    },
    rsendButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(42),
      paddingHorizontal: scale(22),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    rsendButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.paper,
    },
  });
}

