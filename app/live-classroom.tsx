import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import {
  AMBER,
  BOARD_LEFT,
  BOARD_TOP,
  Blink,
  DARK_CHROME,
  DEEP_AMBER,
  EdgeTab,
  HAIRLINE,
  INK,
  INK_FAINT,
  INK_MUTED,
  LevelBars,
  MARGIN_X,
  MarginRule,
  RED,
  RHYTHM,
  RuledGround,
  useChromeAutoHide,
  ScrollIndicator,
  TeacherWave,
  settleToRhythm,
} from '@/components/classroom-chrome';
import { colors } from '@/constants/brand';
import { useOrientedScale } from '@/constants/scale';
import { useOrientation } from '@/hooks/use-landscape-lock';
import { getRecordingPermissionsAsync, requestRecordingPermissionsAsync, setAudioModeAsync } from 'expo-audio';

import { base64ToBytes } from '@/lib/audio-pcm';
import { endDronaSession } from '@/lib/drona-live';
import { claimDronaClient } from '@/lib/drona-prewarm';
import {
  BoardEvent,
  ConnectionStatus,
  DronaState,
  DronaVoiceClient,
  DronaVoiceHandlers,
} from '@/lib/drona-voice-client';
import { BoardDiagram } from '@/components/board-diagram';
import { BoardWidget } from '@/lib/widgets/BoardWidget';
import { apiFetch } from '@/lib/api';
import { labelledFigure } from '@/lib/widgets/labelled-figure';
import type { AssetRow } from '@/lib/widgets/labelled-figure/figure-file-cache';
import { setChapterAssets } from '@/lib/widgets/labelled-figure/r2-figure-resolver';
import type { FigureResolver } from '@/lib/widgets/labelled-figure/figure-resolver';
import { placeholderFigureResolver } from '@/lib/widgets/labelled-figure/placeholder-figure';
import { ASSETS_BASE_URL, r2FigureResolver } from '@/lib/widgets/labelled-figure/r2-figure-resolver';
import type { WidgetServices, WidgetTheme } from '@/lib/widgets/types';
import { EnteringCardScreen } from '@/components/entering-card';
import {
  LONG_WAIT_TEXT,
  statusLinesFor,
  toStatusSubject,
} from '@/constants/classroom-status';
import { useStagedStatus } from '@/hooks/use-staged-status';
import { latexToText } from '@/lib/latex-text';
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

const REPORT_REASONS = ['Wrong answer', 'Confusing step', 'Audio glitch', 'Wrong language', 'Something else'];
/** Half the rail's own height, so it can be centred with a transform. */
const RAIL_HALF = 108;
/** Far enough right to clear the rail's own width plus its 12pt inset. */
const RAIL_TUCK_X = 92;

/** How long a chosen answer stays lit before the card goes. Long enough to
 *  read as confirmation, short enough not to hold up the lesson. */
const ANSWER_HOLD_MS = 850;

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
const DOCK_GAP = 6;
const DOCK_HINT_H = 14;
const DOCK_TOP = DOCK_OFFSET + DOCK_PLATE_H + DOCK_GAP + DOCK_HINT_H;
const FOLLOW_SCROLL_MS = 350;
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
  const styles = useMemo(
    () => createStyles(scale, verticalScale, isLandscape),
    [scale, verticalScale, isLandscape]
  );

  // --- Real session state, replacing the old hardcoded BOARD_BLOCKS/caption loop ---
  const [board, setBoard] = useState<BoardEvent[]>([]);
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
  const answerHoldRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
        if (state.check_options) setCheckOptions(state.check_options);
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
      onTurnStarted: () => setCardPhase('writing'),
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
      onSttTooShort: () => setCaption("Didn't catch that. Hold the button a little longer."),
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
      availableWidth: isLandscape
        ? Math.max(0, windowWidth - BOARD_LEFT - BOARD_RIGHT_GUTTER)
        : Math.max(0, windowWidth - 40 - 22),
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
        : Math.min(boardHeight * 0.52, Math.max(0, windowWidth - 40 - 22)),
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
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(28);

  const scrollRef = useRef<ScrollView>(null);
  const indicatorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (following) scrollRef.current?.scrollToEnd({ animated: false });
    }, FOLLOW_SCROLL_MS);
    return () => clearInterval(id);
  }, [following]);

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


  const showChrome = () => setChromeVisible(true);

  const toggleChrome = () => {
    if (reportOpen) return;
    setChromeVisible((visible) => !visible);
  };

  const onBoardScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    if (contentSize.height > 0) {
      setIndicatorHeight(
        Math.max(28, (layoutMeasurement.height * layoutMeasurement.height) / contentSize.height)
      );
      setIndicatorTop((contentOffset.y / contentSize.height) * layoutMeasurement.height);
      setIndicatorVisible(true);
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
      // Settle onto the rule grid when the board comes to rest, so a written
      // line is never left half-cut by the top edge.
      indicatorTimerRef.current = setTimeout(() => {
        setIndicatorVisible(false);
        const settled = settleToRhythm(
          contentOffset.y,
          contentSize.height - layoutMeasurement.height
        );
        if (settled != null) scrollRef.current?.scrollTo({ y: settled, animated: true });
      }, 900);
    }
    const atBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 40;
    setFollowing(atBottom);
  };

  const jumpToLive = () => {
    setFollowing(true);
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
              clientRef.current?.sendPcmChunk(base64ToBytes(event.data));
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
  }, []);

  // `raiseHand`'s ceiling timer needs to call the *current* `doneListening`
  // without taking it as a dependency and re-arming on every render.
  const doneListeningRef = useRef<() => void>(doneListening);
  doneListeningRef.current = doneListening;

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

  const sendReport = () => {
    // Report submission isn't wired to a real endpoint yet — no
    // session-report API was part of this build's scope. UI-only for now.
    setReportOpen(false);
    setToastVisible(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 2200);
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
    try {
      if (sessionId) await endDronaSession(sessionId);
    } catch {
      // Best effort: the student is already on their way out.
    }
    router.back();
  };

  const endClass = async () => {
    if (ending) return;
    setEnding(true);
    // Close an open turn cleanly before the socket goes; the recorder itself
    // is torn down by the mount effect's cleanup on unmount.
    doneListening();
    try {
      await recorder.stopRecording();
    } catch {
      // Never started, or already stopped.
    }
    clientRef.current?.disconnect();
    try {
      const summary = sessionId ? await endDronaSession(sessionId) : null;
      router.replace({
        pathname: '/session-summary',
        params: {
          sessionId,
          chapterTitle: summary?.chapter_name || chapterTitle,
          summaryPoints: JSON.stringify(summary?.summary_points ?? []),
          mistakesCount: String(summary?.mistakes_count ?? 0),
          questionsAnswered: String(summary?.questions_answered ?? 0),
          durationMinutes: String(summary?.duration_minutes ?? 0),
        },
      });
    } catch {
      router.replace('/session-summary');
    }
  };

  // Keeps the socket's onSessionEnded callback pointed at the current
  // endClass. Assigning on every render (rather than closing over it in the
  // connect effect) is what avoids rebuilding the WebSocket each render.
  endClassRef.current = endClass;

  // Suppressed while the student holds Interrupt, so bottom centre has one
  // owner — the Listening strip.
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

        <ScrollView
          ref={scrollRef}
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.boardContent}
          scrollEventThrottle={16}
          onScroll={onBoardScroll}
          onLayout={(e) => setBoardHeight(e.nativeEvent.layout.height)}
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
                <Animated.View key={`${event.seq}-${i}`} entering={FadeIn.duration(220)}>
                  <BoardBlockView
                    event={event}
                    styles={styles}
                    diagramBox={diagramBox}
                    widgetHost={widgetHost}
                  />
                </Animated.View>
              ))
            )}
          </Pressable>
        </ScrollView>

        <MarginRule x={isLandscape ? MARGIN_X : 28} />
        <ScrollIndicator top={indicatorTop} height={indicatorHeight} visible={indicatorVisible} />

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
          <Pressable style={styles.topEndButton} onPress={endClass} disabled={ending}>
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
                      answerHoldRef.current = setTimeout(() => {
                        setCheckOptions([]);
                        setQuestionText(null);
                        setChosenOption(null);
                      }, ANSWER_HOLD_MS);
                    }}>
                    <Text style={[styles.askChipText, chosen && styles.askChipTextChosen]}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </Animated.View>
      )}

      {/* Landscape keeps the thumb rail on the right, where a hand holding the
          phone sideways already is. Portrait puts the same controls in a dock
          along the bottom, within reach of a thumb on an upright phone — the
          whole reason this screen stopped forcing landscape. */}
      {isLandscape ? (
      <Animated.View style={[styles.rail, railStyle]} pointerEvents={chromeVisible ? 'auto' : 'none'}>
        <TeacherWave quiet={handRaised} />
        <View style={styles.railDivider} />

        {/* Press and hold to speak; release to hand the board back. No
            confirm step, no "done" button, no modal.

            When there is no mic to open, the button stays here and stays
            pressable — it is the only place the student would look — but it
            wears the off state (dimmed plate, struck-through mic, "Mic off")
            so the answer is visible before the press, and pressing it opens
            the card that says why rather than doing nothing. */}
        <Pressable
          style={[
            styles.talkButton,
            handRaised && styles.talkButtonOn,
            voiceOff && styles.talkButtonOff,
          ]}
          onPressIn={raiseHand}
          onPressOut={doneListening}>
          {handRaised && <TalkGlow />}
          {handRaised && <TalkPulse />}
          {handRaised ? (
            <LevelBars color={INK} heights={[9, 17, 12]} />
          ) : voiceOff ? (
            <MicOffIcon size={18} color={colors.paper} />
          ) : (
            <MicIcon size={18} color={colors.paper} />
          )}
        </Pressable>
        <Text
          style={[
            styles.talkLabel,
            handRaised && styles.talkLabelOn,
            voiceOff && styles.talkLabelOff,
          ]}>
          {handRaised ? 'Speaking' : voiceOff ? 'Mic off' : 'Interrupt'}
        </Text>

        <View style={styles.railDivider} />
        <Pressable style={styles.railButton} onPress={togglePause}>
          {paused ? <PlayIcon size={15} color={INK} /> : <PauseIcon size={15} color={INK} />}
        </Pressable>
        {/* Back to upright. The same slot CC used to hold — captions are gone
            and this is the control that earns it. */}
        <Pressable
          style={styles.railButton}
          onPress={() => setWantLandscape(false)}
          hitSlop={8}
          accessibilityLabel="Rotate to portrait">
          <RotateIcon size={15} color={INK} portrait />
        </Pressable>
      </Animated.View>
      ) : (
        /* THE DOCK DOES NOT TUCK.

           In portrait a tap hides the header only; the controls stay put.
           Tucking them made sense for a landscape rail sitting over the
           writing, but across the bottom of an upright phone the dock covers
           no text, and taking Interrupt away from a student who is reading
           removes the button at the moment they want it. It is also why
           portrait needs no edge tab: nothing has gone anywhere to fetch back.

           A plain View, deliberately — it has no animated state, and an
           animated wrapper that always resolves to translateY(0)/opacity(1)
           only looks like it does. */
        <View style={styles.dockWrap}>
          <View style={styles.dock}>
            <TeacherWave quiet={handRaised} />
            <View style={styles.dockDivider} />
            <Pressable style={styles.railButton} onPress={togglePause} hitSlop={6}>
              {paused ? <PlayIcon size={15} color={INK} /> : <PauseIcon size={15} color={INK} />}
            </Pressable>

            {/* The same press-and-hold as the rail's, drawn as a wide pill
                with its label inside — there is room for it across the bottom
                and none stacked under a 46pt circle. */}
            <Pressable
              style={[
                styles.dockTalk,
                handRaised && styles.dockTalkOn,
                voiceOff && styles.dockTalkOff,
              ]}
              onPressIn={raiseHand}
              onPressOut={doneListening}>
              {handRaised ? (
                <LevelBars color={INK} heights={[9, 15, 11]} />
              ) : voiceOff ? (
                <MicOffIcon size={16} color={colors.paper} />
              ) : (
                <MicIcon size={16} color={colors.paper} />
              )}
              <Text
                style={[
                  styles.dockTalkText,
                  handRaised && styles.dockTalkTextOn,
                  voiceOff && styles.dockTalkTextOff,
                ]}>
                {handRaised ? 'Speaking' : voiceOff ? 'Mic off' : 'Interrupt'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.railButton}
              onPress={() => setWantLandscape(true)}
              hitSlop={8}
              accessibilityLabel="Rotate to landscape">
              <RotateIcon size={15} color={INK} />
            </Pressable>
          </View>
          <Text style={styles.dockHint}>Hold to interrupt</Text>
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
                multiline
              />
            </View>

            <View style={styles.rfooter}>
              <Text style={styles.rfooterHint}>Reporting won&apos;t interrupt your class.</Text>
              <Pressable style={styles.rsendButton} onPress={sendReport}>
                <Text style={styles.rsendButtonText}>Send report</Text>
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

function BoardBlockView({
  event,
  styles,
  diagramBox,
  widgetHost,
}: {
  event: BoardEvent;
  styles: Styles;
  diagramBox: { availableWidth: number; maxHeight: number };
  widgetHost: {
    activeSeq: number | null;
    theme: WidgetTheme;
    services: WidgetServices;
    figures: FigureResolver;
    onGap: (reason: string, detail: unknown) => void;
  };
}) {
  const raw =
    event.type === 'formula' ? event.latex ?? '' : event.type === 'diagram' ? '' : event.text ?? '';
  /**
   * The board was the one surface in the app painting its source.
   *
   * `formula` events carry bare LaTeX with no `$…$` around it, and this
   * component rendered that string straight into a <Text> — so a class on
   * drift velocity wrote `\vec{v}_d = \vec{a}\tau = -\dfrac{e\vec{E}}{m}\tau`
   * on the whiteboard, markup and all. Exactly the undelimited-field case
   * `convertBareText` was written for when the solver's Final answer box had
   * the same bug. Every other call site — practice, library, solutions,
   * textbooks — already goes through this converter.
   *
   * Applied to prose lines too, not only formulas: `latexToText` leaves text
   * carrying no commands alone, and it picks up bare scripts the board was
   * also missing (`10^5 m/s` reads as 10⁵ m/s now).
   */
  const text = useMemo(() => latexToText(raw), [raw]);
  // A figure, not a line of writing — it owns its own sizing and never goes
  // near the LaTeX converter.
  if (event.type === 'diagram') {
    // A payload beats markup wherever both exist: the registry draws the
    // real curve from live parameters, an `svg` string draws an
    // approximation the model produced by hand.
    if (event.payload) {
      return (
        <BoardWidget
          event={{ seq: event.seq, payload: event.payload, tier: event.tier ?? 'precomputed' }}
          activeSeq={widgetHost.activeSeq}
          width={diagramBox.availableWidth}
          height={diagramBox.maxHeight}
          theme={widgetHost.theme}
          services={widgetHost.services}
          figures={widgetHost.figures}
          onGap={widgetHost.onGap}
        />
      );
    }
    if (!event.svg) return null;
    return (
      <BoardDiagram
        svg={event.svg}
        caption={event.caption}
        availableWidth={diagramBox.availableWidth}
        maxHeight={diagramBox.maxHeight}
      />
    );
  }
  if (event.type === 'heading') {
    return <Text style={styles.boardHeading}>{text}</Text>;
  }
  if (event.type === 'formula') {
    return <Text style={styles.boardEquation}>{text}</Text>;
  }
  if (event.type === 'note') {
    return <Text style={[styles.boardKalamNote, { color: colors.red }]}>{text}</Text>;
  }
  return (
    <Text style={[styles.boardBody, event.emphasis && styles.boardBodyBold]}>{text}</Text>
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

/**
 * The amber glow under the Interrupt button while it is held. A real radial
 * gradient, centred at 50% 118% as the design has it — a linear one only
 * fades along one axis and reads as a hard-edged block.
 */
function TalkGlow() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={46} height={46}>
        <Defs>
          <RadialGradient id="talkGlow" cx="50%" cy="118%" rx="62%" ry="62%">
            <Stop offset="0" stopColor={AMBER} stopOpacity={0.95} />
            <Stop offset="1" stopColor={AMBER} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Circle cx={23} cy={23} r={23} fill="url(#talkGlow)" />
      </Svg>
    </View>
  );
}

/** The inset ring that pulses while speaking. Opacity only — nothing scales,
 *  nothing leaves the 46pt circle. */
function TalkPulse() {
  const opacity = useSharedValue(0.15);
  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 750, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.15, { duration: 750, easing: Easing.inOut(Easing.ease) })
      ),
      -1
    );
  }, [opacity]);
  const animated = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return <Animated.View style={[pulseStyle.ring, animated]} pointerEvents="none" />;
}

const pulseStyle = StyleSheet.create({
  ring: {
    position: 'absolute',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: 'rgba(28,26,22,.5)',
  },
});

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
   * the header above and the dock below. The numbers are the handoff's own
   * (130/22/146/40, margin rule at 28).
   */
  const boardPad = isLandscape
    ? { top: BOARD_TOP, right: BOARD_RIGHT_GUTTER, bottom: BOARD_TOP, left: BOARD_LEFT }
    : { top: 130, right: 22, bottom: 146, left: 40 };
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
    // 52 top and bottom (2×26), 56 left (the notch gutter), 116 right to clear
    // the thumb rail.
    boardContent: {
      // flexGrow lets the tap target below stretch to the full board height,
      // so tapping empty paper tucks the chrome just like tapping a line.
      flexGrow: 1,
      paddingTop: boardPad.top,
      paddingRight: boardPad.right,
      paddingBottom: boardPad.bottom,
      paddingLeft: boardPad.left,
    },
    // Every board line is exactly one rule tall with no margins — that is what
    // keeps the writing sitting ON the rules instead of drifting between them.
    boardTapTarget: {
      flex: 1,
    },
    enteringCardOverlay: {
      zIndex: 20,
    },
    boardHeading: {
      fontFamily: 'Onest_700Bold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: RED,
      transform: [{ rotate: '-0.4deg' }],
    },
    boardEquation: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: INK,
    },
    // No maxWidth. There used to be a 560 cap here and on boardKalamNote,
    // which is a sane reading measure for a portrait column and the wrong one
    // for this board: the content box is windowWidth - BOARD_LEFT(56) -
    // BOARD_RIGHT_GUTTER(116), which on an iPhone 17 landscape is 702pt, so
    // the cap left 142pt of every wrapped line empty and the board read as
    // three-quarters full. The box itself is now the measure — it is already
    // bounded by the notch gutter on one side and the thumb-rail clearance on
    // the other. If lines ever feel too long to track on a wider device, cap
    // it again against the measured board width rather than a fixed 560.
    boardBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: 13.5,
      lineHeight: RHYTHM,
      color: INK_MUTED,
    },
    boardBodyBold: {
      fontFamily: 'Onest_700Bold',
      color: INK,
    },
    boardKalamNote: {
      fontFamily: 'Onest_700Bold',
      fontSize: 14.5,
      lineHeight: RHYTHM,
      transform: [{ rotate: '-0.4deg' }],
    },
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
    rail: {
      position: 'absolute',
      right: 12,
      top: '50%',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 13,
      paddingHorizontal: 9,
      borderRadius: 99,
      backgroundColor: 'rgba(252,250,244,.94)',
      borderWidth: 1,
      borderColor: HAIRLINE,
      shadowColor: INK,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
      elevation: 6,
    },
    railDivider: {
      width: 22,
      height: 1,
      backgroundColor: 'rgba(28,26,22,.12)',
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
    dock: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: 9,
      paddingHorizontal: 12,
      borderRadius: 99,
      // White, measured off the reference plate's interior (255,255,255). It
      // was the warm paper tone, which on a white board read as a slightly
      // grubby plate rather than a clean one — the same figure-and-ground
      // inversion the plan sheet had.
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      shadowColor: INK,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.16,
      shadowRadius: 14,
      elevation: 6,
    },
    dockDivider: {
      width: 1,
      height: 22,
      backgroundColor: 'rgba(28,26,22,.12)',
    },
    // The wide pill the handoff draws: mic and label on one line, because
    // across the bottom there is room for it and no room to stack a label
    // under a circle.
    dockTalk: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      height: 44,
      paddingHorizontal: 18,
      borderRadius: 99,
      backgroundColor: INK,
    },
    dockTalkOn: {
      backgroundColor: AMBER,
    },
    dockTalkOff: {
      backgroundColor: 'rgba(28,26,22,.28)',
    },
    dockTalkText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12.5,
      letterSpacing: 0.06 * 12.5,
      textTransform: 'uppercase',
      color: colors.paper,
    },
    dockTalkTextOn: {
      color: INK,
    },
    dockTalkTextOff: {
      color: 'rgba(252,250,244,.72)',
    },
    dockHint: {
      fontFamily: 'Onest_700Bold',
      fontSize: 9.5,
      letterSpacing: 0.1 * 9.5,
      textTransform: 'uppercase',
      color: INK_FAINT,
    },
    talkButton: {
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      shadowColor: INK,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 7,
      elevation: 5,
    },
    talkButtonOn: {
      backgroundColor: AMBER,
    },
    /** Off, not missing: same plate, drained of the shadow that makes it read
     *  as a live control. */
    talkButtonOff: {
      backgroundColor: INK_MUTED,
      opacity: 0.55,
      shadowOpacity: 0,
      elevation: 0,
    },
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
    talkLabel: {
      width: 60,
      marginTop: -3,
      textAlign: 'center',
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 8.5,
      lineHeight: 11,
      letterSpacing: 0.1 * 8.5,
      textTransform: 'uppercase',
      color: INK_MUTED,
    },
    talkLabelOn: {
      color: DEEP_AMBER,
    },
    talkLabelOff: {
      color: INK_FAINT,
    },
    railButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
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

type Styles = ReturnType<typeof createStyles>;
