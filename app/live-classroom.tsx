import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import { ProtractorMark } from '@/components/protractor-mark';
import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import { base64ToBytes } from '@/lib/audio-pcm';
import { endDronaSession } from '@/lib/drona-live';
import { BoardEvent, ConnectionStatus, DronaState, DronaVoiceClient } from '@/lib/drona-voice-client';
import { supabase } from '@/lib/supabase';

const REPORT_REASONS = ['Wrong answer', 'Confusing step', 'Audio glitch', 'Wrong language', 'Something else'];
const CHROME_HIDE_MS = 4200;
const FOLLOW_SCROLL_MS = 350;

interface AudioRecorderLike {
  startRecording(options: {
    sampleRate: number;
    channels: number;
    encoding: string;
    interval: number;
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
  useLandscapeLock();
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

  const clientRef = useRef<DronaVoiceClient | null>(null);
  const recorder = useAudioRecorder();

  useEffect(() => {
    if (!sessionId) {
      setConnectError('No session to join — go back and start a class from a chapter.');
      return;
    }
    let cancelled = false;

    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return;
      const token = data.session?.access_token;
      const apiBaseUrl = process.env.EXPO_PUBLIC_API_URL;
      if (!token || !apiBaseUrl) {
        setConnectError('Not signed in to reach the classroom.');
        return;
      }

      const client = new DronaVoiceClient(sessionId, token, apiBaseUrl, {
        onConnectionChange: setConnectionStatus,
        onState: (state: DronaState) => {
          setSessionPhase(state.phase);
        },
        onBoardReveal: (event) => setBoard((prev) => [...prev, event]),
        onBoardReplay: (events) => setBoard(events),
        onCaptionReveal: setCaption,
        onTurnComplete: () => {},
        onTurnError: () => setCaption('Drona hit a snag — one moment…'),
        onError: () => setCaption('Connection hiccup — reconnecting…'),
      });
      clientRef.current = client;
      client.connect();
      // Kicks off the first teaching turn. The server also auto-fires one on
      // WS connect if the session is already in "teaching" phase, but both
      // are safely single-flighted server-side (see PROGRESS.md notes on the
      // live_session_ws.py turn queue) — sending this is not a double-trigger risk.
      setTimeout(() => client.sendUtterance('Begin lesson segment'), 300);
    });

    return () => {
      cancelled = true;
      clientRef.current?.disconnect();
      clientRef.current = null;
    };
  }, [sessionId]);

  // --- Board follow-scroll / chrome auto-hide (unchanged from the original UI) ---
  const [chromeVisible, setChromeVisible] = useState(true);
  const [following, setFollowing] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>('Wrong answer');
  const [toastVisible, setToastVisible] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(28);

  const scrollRef = useRef<ScrollView>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indicatorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const armHide = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setChromeVisible((visible) => {
        if (visible && !handRaised && !reportOpen) return false;
        return visible;
      });
    }, CHROME_HIDE_MS);
  };

  useEffect(() => {
    armHide();
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (following) scrollRef.current?.scrollToEnd({ animated: false });
    }, FOLLOW_SCROLL_MS);
    return () => clearInterval(id);
  }, [following]);

  const toggleChrome = () => {
    if (reportOpen) return;
    setChromeVisible((visible) => {
      const next = !visible;
      if (next) armHide();
      else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return next;
    });
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
      indicatorTimerRef.current = setTimeout(() => setIndicatorVisible(false), 900);
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
    setHandRaised(true);
    setChromeVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    clientRef.current?.sendPttStart();
    try {
      await recorder.startRecording({
        sampleRate: 16000,
        channels: 1,
        encoding: 'pcm_16bit',
        interval: 250,
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
    armHide();
    try {
      await recorder.stopRecording();
    } catch {
      // Already stopped or never started — nothing to clean up.
    }
    clientRef.current?.sendPttStop();
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
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const closeReport = () => {
    setReportOpen(false);
    armHide();
  };

  const sendReport = () => {
    // Report submission isn't wired to a real endpoint yet — no
    // session-report API was part of this build's scope. UI-only for now.
    setReportOpen(false);
    armHide();
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
          chapterTitle,
          summaryPoints: JSON.stringify(summary?.summary_points ?? []),
          mistakesCount: String(summary?.mistakes_count ?? 0),
          durationMinutes: String(summary?.duration_minutes ?? 0),
        },
      });
    } catch {
      router.replace('/session-summary');
    }
  };

  const showJumpChip = !following && !handRaised;

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
    <Pressable style={styles.screen} onPress={toggleChrome}>
      <StatusBar style="dark" />
      <View style={styles.boardWrap}>
        <ScrollView
          ref={scrollRef}
          style={styles.board}
          contentContainerStyle={styles.boardContent}
          scrollEventThrottle={16}
          onScroll={onBoardScroll}
          showsVerticalScrollIndicator={false}>
          {board.length === 0 ? (
            <View style={styles.writingRow}>
              <WritingCursor styles={styles} />
              <Text style={styles.writingText}>
                {connectionStatus === 'open' ? 'Drona is writing…' : 'Connecting to Drona…'}
              </Text>
            </View>
          ) : (
            board.map((event, i) => (
              <Animated.View key={`${event.seq}-${i}`} entering={FadeIn.duration(220)}>
                <BoardBlockView event={event} styles={styles} />
              </Animated.View>
            ))
          )}
        </ScrollView>
        <View style={styles.boardRule} pointerEvents="none" />
        <View
          style={[
            styles.scrollIndicator,
            { top: indicatorTop, height: indicatorHeight, opacity: indicatorVisible ? 1 : 0 },
          ]}
          pointerEvents="none"
        />

        {showJumpChip && (
          <Pressable style={styles.liveChip} onPress={jumpToLive}>
            <Text style={styles.liveChipArrow}>↓</Text>
            <Text style={styles.liveChipText}>Drona is writing — jump to live</Text>
          </Pressable>
        )}

        {handRaised && (
          <View style={styles.listenChip}>
            <MicIcon size={scale(15)} />
            <Text style={styles.listenText}>Listening — poochho, main sun raha hoon</Text>
            <Pressable style={styles.listenDone} onPress={doneListening}>
              <Text style={styles.listenDoneText}>Done — continue class</Text>
            </Pressable>
          </View>
        )}
      </View>

      <View style={styles.capWrap}>
        <View style={styles.capRow}>
          <View style={styles.capBadge}>
            <Text style={styles.capBadgeText}>CC</Text>
          </View>
          <Text style={styles.capText} numberOfLines={1}>
            {caption}
          </Text>
        </View>
      </View>

      {chromeVisible && (
        <Animated.View entering={FadeIn.duration(200)} style={styles.topBar}>
          <View style={styles.topChapterChip}>
            <View style={styles.topChapterDot} />
            <Text style={styles.topChapterText} numberOfLines={1}>
              {params.subtopic || chapterTitle}
            </Text>
          </View>
          <View style={styles.topLiveChip}>
            <View
              style={[
                styles.topLiveDot,
                connectionStatus !== 'open' && styles.topLiveDotWarn,
              ]}
            />
            <Text style={styles.topLiveText}>
              {connectionStatus !== 'open'
                ? connectionStatus === 'reconnecting'
                  ? 'Reconnecting'
                  : 'Connecting'
                : sessionPhase === 'wrapup'
                  ? 'Wrapping up'
                  : sessionPhase === 'awaiting_answer'
                    ? 'Your turn'
                    : 'Live'}
            </Text>
          </View>
          <View style={styles.topSpacer} />
          <Pressable style={styles.topReportButton} onPress={openReport}>
            <ReportIcon size={scale(11)} color={colors.slate} />
            <Text style={styles.topReportText}>Report</Text>
          </Pressable>
          <Pressable style={styles.topEndButton} onPress={endClass} disabled={ending}>
            <View style={styles.topEndSquare} />
            <Text style={styles.topEndText}>{ending ? 'Ending…' : 'End'}</Text>
          </Pressable>
        </Animated.View>
      )}

      {chromeVisible && (
        <Animated.View entering={FadeIn.duration(200)} style={styles.dock}>
          <View style={styles.dockLogo}>
            <ProtractorMark size={scale(18)} />
          </View>
          <View style={styles.dockWave}>
            {[0, 0.18, 0.36, 0.54].map((delay) => (
              <View key={delay} style={styles.dockWaveBar} />
            ))}
          </View>
          <View style={styles.dockDivider} />
          <Pressable style={styles.dockHandButton} onPress={raiseHand} disabled={handRaised}>
            <HandIcon size={scale(18)} />
          </Pressable>
          <Text style={styles.dockHandLabel}>Hand</Text>
          <Pressable
            style={[styles.dockPauseButton, paused && styles.dockPauseButtonActive]}
            onPress={togglePause}>
            {paused ? (
              <PlayIcon size={scale(14)} color={colors.paper} />
            ) : (
              <PauseIcon size={scale(14)} color={colors.ink} />
            )}
          </Pressable>
          <View style={styles.dockCc}>
            <Text style={styles.dockCcText}>CC</Text>
          </View>
          <Pressable style={styles.dockChevron}>
            <ChevronRightIcon size={scale(13)} />
          </Pressable>
        </Animated.View>
      )}

      {!chromeVisible && (
        <View style={styles.handle}>
          <ChevronLeftIcon size={scale(13)} />
        </View>
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
    </Pressable>
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

function WritingCursor({ styles }: { styles: Styles }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => !v), 500);
    return () => clearInterval(id);
  }, []);
  return <View style={[styles.writingCursor, { opacity: visible ? 1 : 0 }]} />;
}

function MicIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"
        stroke={colors.marigold}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6 11a6 6 0 0 0 12 0" stroke={colors.marigold} strokeWidth={2} strokeLinecap="round" />
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

function HandIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        stroke={colors.paper}
        strokeWidth={1.9}
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

function ChevronRightIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M9 6l6 6-6 6"
        stroke={colors.faint}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ChevronLeftIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.marigold}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    boardWrap: {
      flex: 1,
      minHeight: 0,
      margin: scale(10),
      position: 'relative',
    },
    board: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(18),
    },
    boardContent: {
      paddingTop: verticalScale(46),
      paddingRight: scale(26),
      paddingBottom: verticalScale(20),
      paddingLeft: scale(58),
    },
    boardRule: {
      position: 'absolute',
      top: verticalScale(14),
      bottom: verticalScale(14),
      left: scale(40),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.35)',
    },
    scrollIndicator: {
      position: 'absolute',
      right: scale(5),
      width: scale(3),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.3)',
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(17),
      color: colors.red,
      marginBottom: verticalScale(11),
      transform: [{ rotate: '-0.4deg' }],
    },
    boardEquation: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(17),
      color: colors.ink,
      marginBottom: verticalScale(9),
    },
    boardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(21.6),
      color: colors.slate,
      marginBottom: verticalScale(10),
      maxWidth: scale(560),
    },
    boardBodyBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    boardKalamNote: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14.5),
      marginBottom: verticalScale(9),
      transform: [{ rotate: '-0.35deg' }],
      maxWidth: scale(560),
    },
    writingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingBottom: verticalScale(4),
    },
    writingCursor: {
      width: scale(8),
      height: verticalScale(14),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    writingText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: colors.faint,
    },
    liveChip: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(12),
      transform: [{ translateX: -scale(105) }],
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      backgroundColor: '#221D16',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
    },
    liveChipArrow: {
      color: colors.marigold,
      fontWeight: '700',
    },
    liveChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#EFEBDD',
    },
    listenChip: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(12),
      transform: [{ translateX: -scale(160) }],
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      backgroundColor: '#221D16',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingRight: scale(9),
      paddingLeft: scale(18),
    },
    listenText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
    listenDone: {
      backgroundColor: colors.marigold,
      borderRadius: scale(99),
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(14),
    },
    listenDoneText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    capWrap: {
      flexShrink: 0,
      maxHeight: verticalScale(60),
    },
    capRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      backgroundColor: '#211C15',
      borderRadius: scale(12),
      marginHorizontal: scale(10),
      marginBottom: verticalScale(10),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
    },
    capBadge: {
      flexShrink: 0,
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(5),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(5),
    },
    capBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.marigold,
    },
    capText: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(13.5),
      color: '#EFEBDD',
    },
    topBar: {
      position: 'absolute',
      top: verticalScale(18),
      left: scale(26),
      right: scale(26),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    topChapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: 'rgba(252,250,244,.94)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
      maxWidth: scale(220),
    },
    topChapterDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: colors.marigold,
    },
    topChapterText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    topLiveChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    topLiveDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: '#1C9B57',
    },
    topLiveDotWarn: {
      backgroundColor: colors.marigold,
    },
    topLiveText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: '#157A45',
    },
    topSpacer: {
      flex: 1,
    },
    topReportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: 'rgba(252,250,244,.94)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(12),
    },
    topReportText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    topEndButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      borderWidth: scale(1.4),
      borderColor: 'rgba(221,68,51,.4)',
      backgroundColor: 'rgba(252,247,243,.94)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(13),
    },
    topEndSquare: {
      width: scale(10),
      height: scale(10),
      borderRadius: scale(2.5),
      backgroundColor: '#C53A2B',
    },
    topEndText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#C53A2B',
    },
    dock: {
      position: 'absolute',
      right: scale(16),
      top: '50%',
      transform: [{ translateY: -verticalScale(115) }],
      flexDirection: 'column',
      alignItems: 'center',
      gap: verticalScale(8),
      backgroundColor: 'rgba(252,250,244,.95)',
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(8),
    },
    dockLogo: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(16),
      backgroundColor: colors.segmentTrack,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dockWave: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: scale(2),
      height: verticalScale(12),
    },
    dockWaveBar: {
      width: scale(2.5),
      height: verticalScale(12),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    dockDivider: {
      width: scale(26),
      height: 1,
      backgroundColor: colors.hairline,
    },
    dockHandButton: {
      width: scale(46),
      height: scale(46),
      borderRadius: scale(23),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dockHandLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(8.5),
      letterSpacing: scale(0.85),
      textTransform: 'uppercase',
      color: colors.slate,
      marginTop: verticalScale(-3),
    },
    dockPauseButton: {
      width: scale(38),
      height: scale(38),
      borderRadius: scale(19),
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dockPauseButtonActive: {
      borderColor: colors.ink,
      backgroundColor: colors.ink,
    },
    dockCc: {
      width: scale(30),
      height: scale(30),
      borderRadius: scale(15),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FCF4E0',
      borderWidth: scale(1.4),
      borderColor: 'rgba(238,163,31,.65)',
    },
    dockCcText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(0.57),
      color: colors.amberText,
    },
    dockChevron: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(13),
      alignItems: 'center',
      justifyContent: 'center',
    },
    handle: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: [{ translateY: -verticalScale(43) }],
      width: scale(20),
      height: verticalScale(86),
      borderTopLeftRadius: scale(12),
      borderBottomLeftRadius: scale(12),
      backgroundColor: 'rgba(28,26,22,.88)',
      alignItems: 'center',
      justifyContent: 'center',
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
