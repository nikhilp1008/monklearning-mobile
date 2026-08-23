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
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
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
import { BoardEvent, ConnectionStatus, DronaState, DronaVoiceClient } from '@/lib/drona-voice-client';
import { supabase } from '@/lib/supabase';

const REPORT_REASONS = ['Wrong answer', 'Confusing step', 'Audio glitch', 'Wrong language', 'Something else'];
/** Half the rail's own height, so it can be centred with a transform. */
const RAIL_HALF = 108;
const FOLLOW_SCROLL_MS = 350;

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
  const params = useLocalSearchParams<{ sessionId?: string; chapterTitle?: string; subtopic?: string }>();
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

  const [micDenied, setMicDenied] = useState(false);
  const [checkOptions, setCheckOptions] = useState<string[]>([]);
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

    const client = new DronaVoiceClient(sessionId, getAccessToken, apiBaseUrl, {
      onConnectionChange: setConnectionStatus,
      onState: (state: DronaState) => {
        setSessionPhase(state.phase);
        // Checkpoint questions: the client holds these until the turn's audio
        // finishes, so by the time this arrives Drona has actually asked it.
        setCheckOptions(state.check_options ?? []);
        if (state.question_text) setCaption(state.question_text);
      },
      onBoardReveal: (event) => setBoard((prev) => [...prev, event]),
      onBoardReplay: (events) => setBoard(events),
      onCaptionReveal: setCaption,
      onTranscriptPartial: (text) => setLiveTranscript(text),
      onTranscriptFinal: (text) => {
        setLiveTranscript('');
        // Speaking an answer counts the same as tapping a chip.
        if (text.trim()) setCheckOptions([]);
      },
      onSttTooShort: () => setCaption("Didn't catch that — hold the button a little longer."),
      onAnswerResult: (result) => {
        setAnswerVerdict(result.verdict);
        if (answerVerdictTimerRef.current) clearTimeout(answerVerdictTimerRef.current);
        answerVerdictTimerRef.current = setTimeout(() => setAnswerVerdict(null), 5000);
      },
      onTurnComplete: () => setIsThinking(false),
      onTurnError: () => setCaption('Drona hit a snag — one moment…'),
      // The lesson itself finished — go to the summary rather than leaving the
      // student on a silent board wondering whether it broke.
      onSessionEnded: () => {
        if (!cancelled) void endClassRef.current?.();
      },
      onError: (message) => setCaption(message),
    });
    clientRef.current = client;
    client.connect();
    // Kicks off the first teaching turn, once the socket is genuinely open.
    //
    // This used to be `setTimeout(..., 300)`, which is both an unconditional
    // 300ms of silence and a race: `sendUtterance` drops the message if the
    // socket is not OPEN yet, and a token fetch plus a TLS handshake on
    // cellular routinely takes longer than 300ms. The server also auto-fires
    // a turn on connect and both are single-flighted server-side, so this is
    // not a double-trigger risk.
    void client
      .whenReady(10000)
      .then(() => client.sendUtterance('Begin lesson segment'))
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

  // --- Board follow-scroll / chrome auto-hide (unchanged from the original UI) ---
  const [chromeVisible, setChromeVisible] = useState(true);
  // The caption strip is a real toggle now (CC on the rail), per the handoff.
  const [captions, setCaptions] = useState(true);
  const [boardHeight, setBoardHeight] = useState(390);
  const [following, setFollowing] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
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
  const railStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -RAIL_HALF }, { translateX: 96 * tuck.value }],
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

  // --- Real push-to-talk, replacing the old fake hand-raise timers ---
  const raiseHand = useCallback(async () => {
    // Ask before recording, the same way snap-capture asks before opening the
    // camera. Previously this went straight to startRecording: iOS auto-prompts
    // on the first attempt so it usually worked, but a student who ever tapped
    // "Don't Allow" got a silent dead button with nothing explaining why and no
    // route back. Checking first also means the denial state is a real,
    // recoverable screen rather than a failed recording.
    const existing = await getRecordingPermissionsAsync();
    let granted = existing.granted;
    if (!granted && existing.canAskAgain) {
      granted = (await requestRecordingPermissionsAsync()).granted;
    }
    if (!granted) {
      setMicDenied(true);
      return;
    }

    setHandRaised(true);
    setChromeVisible(true);
    clientRef.current?.sendPttStart();
    try {
      await recorder.startRecording({
        sampleRate: 16000,
        channels: 1,
        encoding: 'pcm_16bit',
        interval: 250,
        // Without `DefaultToSpeaker`, iOS's shared AVAudioSession defaults a
        // `.playAndRecord` category to the earpiece receiver — confirmed via
        // the native module's own session setup, which only requests
        // AllowBluetooth/MixWithOthers. Once the mic is used once, every
        // later Drona TTS chunk would otherwise play near-inaudibly through
        // the earpiece instead of the loudspeaker.
        ios: {
          audioSession: {
            category: 'PlayAndRecord',
            categoryOptions: ['AllowBluetooth', 'MixWithOthers', 'DefaultToSpeaker'],
          },
        },
        onAudioStream: async (event: { data: unknown }) => {
          if (typeof event.data === 'string') {
            clientRef.current?.sendPcmChunk(base64ToBytes(event.data));
          }
        },
      });
    } catch {
      setCaption('Couldn’t reach the microphone — check permissions and try again.');
      setHandRaised(false);
      clientRef.current?.sendPttStop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doneListening = useCallback(async () => {
    setHandRaised(false);
    try {
      await recorder.stopRecording();
    } catch {
      // Already stopped or never started — nothing to clean up.
    }
    clientRef.current?.sendPttStop();
    // audio-studio deactivates the shared session when it stops recording, and
    // nothing else puts it back — so without this the first TTS chunk after
    // every push-to-talk pays a full re-activation, and can be inaudible.
    setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: false,
      interruptionMode: 'mixWithOthers',
    }).catch(() => {
      // Playback may be quieter until the next turn; not worth interrupting
      // the lesson for.
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (handRaised) {
      try {
        await recorder.stopRecording();
      } catch {
        // ignore
      }
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
                  <BoardBlockView event={event} styles={styles} />
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
        {checkOptions.length > 0 && !handRaised && (
          <Animated.View entering={FadeIn.duration(200)} style={styles.askSheet}>
            {checkOptions.map((option) => (
              <Pressable
                key={option}
                style={styles.askChip}
                onPress={() => {
                  clientRef.current?.sendAnswer(option);
                  setCheckOptions([]);
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
      <CaptionStrip open={captions || handRaised} listening={handRaised} text={caption} />

      {/* The thumb rail is centred on the screen, not on the board, so it sits
          under the thumb wherever the caption strip happens to be. */}
      <Animated.View
        style={[styles.rail, railStyle]}
        pointerEvents={chromeVisible ? 'auto' : 'none'}>
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
    </View>
  );
}

function BoardBlockView({ event, styles }: { event: BoardEvent; styles: Styles }) {
  const text = event.type === 'formula' ? event.latex ?? '' : event.text ?? '';
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(20),
      color: colors.ink,
    },
    errorBody: {
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_700Bold',
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
      paddingRight: 116,
      paddingBottom: BOARD_TOP,
      paddingLeft: BOARD_LEFT,
    },
    // Every board line is exactly one rule tall with no margins — that is what
    // keeps the writing sitting ON the rules instead of drifting between them.
    boardTapTarget: {
      flex: 1,
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: RED,
      transform: [{ rotate: '-0.4deg' }],
    },
    boardEquation: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: INK,
    },
    boardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 13.5,
      lineHeight: RHYTHM,
      color: INK_MUTED,
      maxWidth: 560,
    },
    boardBodyBold: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 12,
      color: AMBER,
    },
    liveChipText: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    micDeniedBody: {
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_600SemiBold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
      color: colors.marigold,
      fontSize: scale(12.5),
    },
    toastText: {
      fontFamily: 'AnekLatin_600SemiBold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.9),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    rquoteText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11.5),
      lineHeight: scale(16.7),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    rwhatsWrong: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(1.33),
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11.5),
      color: colors.slate,
    },
    rchipTextSelected: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    rscreenshotOptional: {
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_500Medium',
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
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.paper,
    },
  });
}

type Styles = ReturnType<typeof createStyles>;
