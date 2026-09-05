import { router, useLocalSearchParams } from 'expo-router';
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
  FadeOut,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Path, RadialGradient, Stop } from 'react-native-svg';

import {
  AMBER,
  AMBER_WASH,
  BOARD_LEFT,
  BOARD_TOP,
  Blink,
  CaptionStrip,
  DARK_CHROME,
  DEEP_AMBER,
  EdgeTab,
  GREEN,
  GREEN_INK,
  HAIRLINE,
  INK,
  INK_FAINT,
  INK_MUTED,
  LevelBars,
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
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
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
import { EnteringCardScreen } from '@/components/entering-card';
import {
  LONG_WAIT_TEXT,
  statusLinesFor,
  toStatusSubject,
} from '@/constants/classroom-status';
import { useStagedStatus } from '@/hooks/use-staged-status';
import { latexToText } from '@/lib/latex-text';
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
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  useAudioRecorder = require('@siteed/audio-studio').useAudioRecorder;
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
  const isLandscape = useLandscapeLock();
  const params = useLocalSearchParams<{
    sessionId?: string;
    chapterTitle?: string;
    subtopic?: string;
    subject?: string;
  }>();
  const sessionId = params.sessionId ?? '';
  const chapterTitle = params.chapterTitle || 'this chapter';
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  // --- Real session state, replacing the old hardcoded BOARD_BLOCKS/caption loop ---
  const [board, setBoard] = useState<BoardEvent[]>([]);
  const [caption, setCaption] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('connecting');
  const [sessionPhase, setSessionPhase] = useState('teaching');
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
  const [liveTranscript, setLiveTranscript] = useState('');
  const [answerVerdict, setAnswerVerdict] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const clientRef = useRef<DronaVoiceClient | null>(null);
  const answerVerdictTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Lets the socket's session-ended callback reach the latest endClass
   *  without making the connect effect depend on it (which would tear the
   *  socket down and rebuild it on every render). */
  const endClassRef = useRef<(() => Promise<void>) | null>(null);
  const recorder = useAudioRecorder();

  useEffect(() => {
    if (!sessionId) {
      setConnectError('No session to join — go back and start a class from a chapter.');
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
        // Bare state frames carry only the field that changed (e.g.
        // `no_response_timer_paused`), so an unguarded assignment blanked the
        // phase on every one of them.
        if (state.phase) setSessionPhase(state.phase);
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
      onBoardReveal: (event) => {
        // Drona is actually speaking: this fires when the first clip starts
        // playing. That is the handoff — the card goes, the board takes over.
        dismissCard();
        setIsThinking(false);
        setBoard((prev) => [...prev, event]);
      },
      onBoardReplay: (events) => setBoard(events),
      // Drona is no longer thinking once she is visibly talking. This used to
      // hang on `onTurnComplete`, which is now deliberately deferred until the
      // turn's audio has drained — leaving it there would have pinned "Drona is
      // thinking" across her entire spoken reply.
      onCaptionReveal: (text: string) => {
        dismissCard();
        setIsThinking(false);
        setCaption(text);
      },
      onTranscriptPartial: (text) => setLiveTranscript(text),
      onTranscriptFinal: (text) => {
        setLiveTranscript('');
        // Speaking an answer counts the same as tapping a chip.
        if (text.trim()) {
          setCheckOptions([]);
          setQuestionText(null);
        }
      },
      onSttTooShort: () => setCaption("Didn't catch that — hold the button a little longer."),
      onAnswerResult: (result) => {
        setAnswerVerdict(result.verdict);
        if (answerVerdictTimerRef.current) clearTimeout(answerVerdictTimerRef.current);
        answerVerdictTimerRef.current = setTimeout(() => setAnswerVerdict(null), 5000);
      },
      // Backstop only — a turn that produced neither a caption nor a board line
      // still has to release the status row.
      onTurnComplete: () => setIsThinking(false),
      // A card over a board that is never going to fill is worse than the
      // board's own error affordances, so every failure drops it.
      onTurnError: () => {
        dismissCard();
        setCaption('Drona hit a snag — one moment…');
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
  // The caption strip is a real toggle now (CC on the rail), per the handoff.
  const [captions, setCaptions] = useState(true);
  const [boardHeight, setBoardHeight] = useState(390);
  const { width: windowWidth } = useWindowDimensions();
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
      // Mirrors `boardContent`'s own padding: the notch gutter on the left, the
      // thumb-rail clearance on the right.
      availableWidth: Math.max(0, windowWidth - BOARD_LEFT - BOARD_RIGHT_GUTTER),
      maxHeight: boardHeight * 0.72,
    }),
    [windowWidth, boardHeight]
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
  useChromeAutoHide(chromeVisible, handRaised || reportOpen, hideChrome);

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
      const existing = await getRecordingPermissionsAsync();
      let granted = existing.granted;
      if (!granted && existing.canAskAgain) {
        granted = (await requestRecordingPermissionsAsync()).granted;
      }
      if (cancelled) return;
      if (!granted) {
        // Not an error state yet — the button explains itself when pressed.
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
        if (!cancelled) micReadyRef.current = true;
      } catch {
        // Leave `micReadyRef` false; the button reports it on press.
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
  const showJumpChip = !following && !handRaised;

  if (!isLandscape) {
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
                  <BoardBlockView event={event} styles={styles} diagramBox={diagramBox} />
                </Animated.View>
              ))
            )}
          </Pressable>
        </ScrollView>

        <MarginRule />
        <ScrollIndicator top={indicatorTop} height={indicatorHeight} visible={indicatorVisible} />

        {/* Header — tucks up and out on a board tap. */}
        <Animated.View style={[styles.topBar, headerStyle]} pointerEvents={chromeVisible ? 'auto' : 'none'}>
          <View style={styles.topChapterChip}>
            <View style={styles.topChapterDot} />
            <Text style={styles.topChapterText} numberOfLines={1}>
              {params.subtopic || chapterTitle}
            </Text>
          </View>
          <View style={styles.topLiveChip}>
            <Blink
              style={[styles.topLiveDot, connectionStatus !== 'open' && styles.topLiveDotWarn]}
              duration={1800}
            />
            {/* Priority ladder mirroring web's SessionView status badge, so
                the student always knows who the room is waiting on. */}
            <Text style={styles.topLiveText}>
              {connectionStatus !== 'open'
                ? connectionStatus === 'reconnecting'
                  ? 'Reconnecting'
                  : 'Connecting'
                : handRaised
                  ? liveTranscript
                    ? 'Transcribing'
                    : 'Listening'
                  : answerVerdict
                    ? answerVerdict === 'correct'
                      ? 'Correct'
                      : answerVerdict === 'partial'
                        ? 'Almost'
                        : 'Not quite'
                    : isThinking
                      ? 'Drona is thinking'
                      : paused
                        ? 'Paused'
                        : sessionPhase === 'wrapup'
                          ? 'Wrapping up'
                          : checkOptions.length > 0 || sessionPhase === 'awaiting_answer'
                            ? 'Your turn'
                            : 'Live'}
            </Text>
          </View>
          <View style={styles.topSpacer} />
          <Pressable style={styles.topReportButton} onPress={openReport}>
            <ReportIcon size={12} color={INK_MUTED} />
            <Text style={styles.topReportText}>Report</Text>
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

        {/* Answer chips for Drona's checkpoint questions. Previously the state
            frame's check_options were parsed and then discarded, so a student
            was told "Your turn" with nothing on screen to answer with — the
            class simply stalled. Mirrors web's AskSheet. */}
        {checkOptions.length > 0 && questionText && !handRaised && (
          <Animated.View entering={FadeIn.duration(200)} style={styles.askSheet}>
            {checkOptions.map((option) => (
              <Pressable
                key={option}
                style={styles.askChip}
                onPress={() => {
                  clientRef.current?.sendAnswer(option);
                  setCheckOptions([]);
                  setQuestionText(null);
                  setIsThinking(true);
                }}>
                <Text style={styles.askChipText}>{option}</Text>
              </Pressable>
            ))}
          </Animated.View>
        )}
      </View>

      {/* One strip, two states — the caption line and Listening are mutually
          exclusive, so the bottom edge always has exactly one owner. */}
      {/* The strip also opens for a checkpoint regardless of the CC toggle:
          chips are answers, and answers with the question hidden are the exact
          thing this screen is not allowed to show. It closes again on its own
          the moment the question is answered. */}
      <CaptionStrip
        open={captions || handRaised || checkOptions.length > 0}
        listening={handRaised}
        text={caption}
      />

      {/* The thumb rail is centred on the screen, not on the board, so it sits
          under the thumb wherever the caption strip happens to be. */}
      <Animated.View style={[styles.rail, railStyle]} pointerEvents={chromeVisible ? 'auto' : 'none'}>
        <TeacherWave quiet={handRaised} />
        <View style={styles.railDivider} />

        {/* Press and hold to speak; release to hand the board back. No
            confirm step, no "done" button, no modal. */}
        <Pressable
          style={[styles.talkButton, handRaised && styles.talkButtonOn]}
          onPressIn={raiseHand}
          onPressOut={doneListening}>
          {handRaised && <TalkGlow />}
          {handRaised && <TalkPulse />}
          {handRaised ? (
            <LevelBars color={INK} heights={[9, 17, 12]} />
          ) : (
            <MicIcon size={18} color={colors.paper} />
          )}
        </Pressable>
        <Text style={[styles.talkLabel, handRaised && styles.talkLabelOn]}>
          {handRaised ? 'Speaking' : 'Interrupt'}
        </Text>

        <View style={styles.railDivider} />
        <Pressable style={styles.railButton} onPress={togglePause}>
          {paused ? <PlayIcon size={15} color={INK} /> : <PauseIcon size={15} color={INK} />}
        </Pressable>
        <Pressable
          style={[styles.railCc, !captions && styles.railCcOff]}
          onPress={() => setCaptions((c) => !c)}>
          <Text style={[styles.railCcText, !captions && styles.railCcTextOff]}>CC</Text>
        </Pressable>
      </Animated.View>

      <EdgeTab visible={!chromeVisible} onPress={showChrome} />

      {/* Mic denied: say so plainly and offer the one action that fixes it.
          Drona keeps teaching behind this — only speaking is unavailable. */}
      {micDenied && (
        <Animated.View entering={FadeIn.duration(200)} style={styles.micDeniedCard}>
          <Text style={styles.micDeniedTitle}>Microphone is off</Text>
          <Text style={styles.micDeniedBody}>
            Drona needs your mic to hear you. Turn it on in Settings — the class keeps going
            either way.
          </Text>
          <View style={styles.micDeniedRow}>
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
          </View>
        </Animated.View>
      )}

      {toastVisible && (
        <Animated.View entering={FadeIn.duration(150)} style={styles.toast}>
          <Text style={styles.toastCheck}>✓</Text>
          <Text style={styles.toastText}> Report sent — Drona&apos;s team will check this class.</Text>
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
}: {
  event: BoardEvent;
  styles: Styles;
  diagramBox: { availableWidth: number; maxHeight: number };
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

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
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
      paddingTop: BOARD_TOP,
      paddingRight: BOARD_RIGHT_GUTTER,
      paddingBottom: BOARD_TOP,
      paddingLeft: BOARD_LEFT,
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
      fontFamily: 'Kalam_700Bold',
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
    boardBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: 13.5,
      lineHeight: RHYTHM,
      color: INK_MUTED,
      maxWidth: 560,
    },
    boardBodyBold: {
      fontFamily: 'Onest_700Bold',
      color: INK,
    },
    boardKalamNote: {
      fontFamily: 'Kalam_700Bold',
      fontSize: 14.5,
      lineHeight: RHYTHM,
      maxWidth: 560,
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
      fontFamily: 'Kalam_700Bold',
      fontSize: 12,
      color: INK_FAINT,
    },

    // Header — left 56 so it starts on the same gutter as the writing.
    topBar: {
      position: 'absolute',
      top: 14,
      left: BOARD_LEFT,
      right: 26,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    topChapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
      flexShrink: 1,
    },
    topChapterDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: AMBER,
    },
    topChapterText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 13,
      color: INK,
    },
    topLiveChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
    },
    topLiveDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: GREEN,
    },
    topLiveDotWarn: {
      backgroundColor: AMBER,
    },
    topLiveText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 10,
      letterSpacing: 0.12 * 10,
      textTransform: 'uppercase',
      color: GREEN_INK,
    },
    topSpacer: {
      flex: 1,
    },
    topReportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
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
      bottom: 14,
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
    // Pinned to 54 so the plate cannot resize when the label changes.
    talkLabel: {
      width: 54,
      marginTop: -4,
      textAlign: 'center',
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 8.5,
      letterSpacing: 0.1 * 8.5,
      textTransform: 'uppercase',
      color: INK_MUTED,
    },
    talkLabelOn: {
      color: DEEP_AMBER,
    },
    railButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    railCc: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AMBER_WASH,
    },
    railCcOff: {
      backgroundColor: 'transparent',
    },
    railCcText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 9.5,
      letterSpacing: 0.06 * 9.5,
      color: DEEP_AMBER,
    },
    railCcTextOff: {
      color: INK_FAINT,
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
    askSheet: {
      position: 'absolute',
      left: scale(24),
      right: scale(96),
      bottom: verticalScale(18),
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: scale(9),
    },
    askChip: {
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(99),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(18),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(3) },
      shadowOpacity: 0.18,
      shadowRadius: scale(6),
      elevation: 4,
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
