import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, G, Line, RadialGradient, Stop } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import {
  checkDronaTopic,
  scopeDronaSession,
  startDronaSession,
} from '@/lib/drona-live';
import { getLanguagePreference, getTeacherPreference, teacherToVoice } from '@/lib/preferences';
import { captureProof } from '@/lib/proof';

type Stage = 'connecting' | 'scoping' | 'error';

// /drona/session/{id}/scope proxies to an upstream LLM provider and, when
// that provider errors, the raw provider error string ends up verbatim in
// the API's `detail` field (confirmed live: a 402 "Insufficient Balance"
// came through as `Error code: 402 - {'error': {'message': ...}}`, a raw
// Python dict repr). That's infra/billing detail no student should see.
function friendlyScopeError(err: unknown): string {
  const raw = err instanceof Error ? err.message : '';
  const looksLikeUpstreamDump = /error code:\s*\d/i.test(raw) || /^\{.*\}$/.test(raw.trim());
  if (!raw || looksLikeUpstreamDump) {
    return "Drona's having trouble reaching the lesson right now — try again in a bit.";
  }
  return raw;
}

export default function EnteringClassroomScreen() {
  const isLandscape = useLandscapeLock();
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterTitle?: string;
    initialUtterance?: string;
  }>();
  const chapterTitle = params.chapterTitle || 'this chapter';
  const chapterId = params.chapterId ?? '';
  const initialUtterance = params.initialUtterance ?? '';
  /**
   * Expo Router can render this screen once before its route params are
   * attached. The session used to start on that first frame, from a `[]`-deps
   * effect that captured the empty params — so it went out with no
   * chapter_id, the API fell back to naming the chapter "this topic", and
   * `!params.initialUtterance` was true, which dropped the student into the
   * scoping conversation they had already answered by picking a subtopic.
   * That is the intermittent landscape Q&A screen: it only appeared when the
   * first frame lost the race.
   *
   * So the session waits for the params to exist. Every route into this
   * screen passes at least a chapterTitle, and the timeout below is only a
   * backstop so a bare deep link can never hang on the loader.
   */
  const hasParams = Boolean(params.chapterTitle || chapterId || initialUtterance);
  const [paramsSettled, setParamsSettled] = useState(false);
  useEffect(() => {
    if (hasParams) {
      setParamsSettled(true);
      return;
    }
    const id = setTimeout(() => setParamsSettled(true), 400);
    return () => clearTimeout(id);
  }, [hasParams]);
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [stage, setStage] = useState<Stage>('connecting');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [speech, setSpeech] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [statusNote, setStatusNote] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const autoSubmittedRef = useRef(false);
  /** The session is started exactly once, on the first render that has params. */
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current || !paramsSettled) return;
    startedRef.current = true;
    let cancelled = false;
    // Baseline for the end-of-class moment: whatever is proven from here on
    // is measured against this. Fire-and-forget on purpose — the class must
    // not wait on it, and a missed baseline only costs one silent summary.
    captureProof();
    Promise.all([getTeacherPreference(), getLanguagePreference()])
      .then(([teacher, language]) => {
        if (cancelled) return Promise.reject(new Error('cancelled'));
        return startDronaSession({
          chapter_id: chapterId || undefined,
          voice: teacherToVoice(teacher),
          language,
        });
      })
      .then((res) => {
        if (cancelled) return;
        setSessionId(res.session_id);
        setSpeech(res.speech);
        // A pre-selected subtopic auto-submits below — stay on the loading
        // screen until that resolves, rather than flashing the scoping UI.
        if (!initialUtterance) {
          setStage('scoping');
        }
      })
      .catch((err) => {
        if (cancelled || (err instanceof Error && err.message === 'cancelled')) return;
        setErrorMessage(friendlyScopeError(err) || 'Could not reach Drona right now.');
        setStage('error');
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsSettled]);

  async function submit(
    utterance: string,
    opts: { skipCheck?: boolean; fromPreselected?: boolean } = {}
  ) {
    const trimmed = utterance.trim();
    if (!trimmed || !sessionId || submitting) return;
    setSubmitting(true);
    setStatusNote(null);
    try {
      // /drona/topic/check is confirmed live (2026-08-16, reproduced for two
      // different chapters) to always return "other_chapter" pointing at the
      // session's OWN chapter, for every utterance — a 100% backend bug, not
      // a client issue (see PROGRESS.md / the co-founder punch-list memory).
      // It's skipped for utterances we already know are on-topic by
      // construction — a subtopic tapped straight from this chapter's real
      // catalogue list, or an option chip the backend itself suggested this
      // same session. Genuine free-text input still goes through the check,
      // since that's the one case it's actually meant to catch, and this
      // stays easy to delete once the backend bug is fixed.
      if (!opts.skipCheck) {
        const check = await checkDronaTopic({ utterance: trimmed, session_id: sessionId });
        if (check.status === 'other_chapter') {
          setStatusNote(check.message);
          setInput('');
          setSubmitting(false);
          setStage('scoping');
          return;
        }
      }

      const result = await scopeDronaSession(sessionId, { utterance: trimmed });
      setSpeech(result.speech);
      setInput('');

      if (result.plan_ready) {
        router.replace({
          pathname: '/live-classroom',
          params: {
            sessionId,
            chapterTitle,
            subtopic: result.subtopic ?? '',
          },
        });
        return;
      }

      setOptions(result.options ?? []);
      setStage('scoping');
    } catch (err) {
      // A student who already chose a chapter AND a subtopic has answered every
      // question this screen exists to ask. Dropping them into the scoping
      // conversation on a backend failure showed them a landscape Q&A screen
      // that, from their side, had no reason to exist and no useful answer to
      // give — the failing call is the lesson-planning one, which no wording of
      // the topic can fix. Show the plain error instead, so the only route in
      // stays chapter -> subtopic -> class.
      if (opts.fromPreselected) {
        setErrorMessage(friendlyScopeError(err));
        setStage('error');
      } else {
        setStatusNote(friendlyScopeError(err));
        setStage('scoping');
      }
    } finally {
      setSubmitting(false);
    }
  }

  // If the student already picked/typed a topic on the previous screen,
  // fire the same submit real users trigger by hand, but as soon as the
  // session exists rather than waiting on the scoping UI to mount.
  useEffect(() => {
    if (sessionId && initialUtterance && !autoSubmittedRef.current) {
      autoSubmittedRef.current = true;
      submit(initialUtterance, { skipCheck: true, fromPreselected: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, initialUtterance]);

  // Hold on a plain paper-coloured field until the device has actually turned.
  // Painting the landscape layout into a still-portrait window is what made
  // this transition look broken — a squeezed frame, then a snap.
  if (!isLandscape) {
    return <View style={styles.rotateHold} />;
  }

  if (stage === 'error') {
    return (
      <View style={styles.screen}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.errorBlock}>
            <Text style={styles.errorTitle}>Couldn&apos;t enter the classroom</Text>
            <Text style={styles.errorBody}>{errorMessage}</Text>
            <Pressable style={styles.errorButton} onPress={() => router.back()}>
              <Text style={styles.errorButtonText}>Go back</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <Pressable style={styles.screen} onPress={() => {}}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['rgba(238,163,31,.12)', 'rgba(238,163,31,0)']}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none"
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {stage === 'connecting' ? (
          <View style={styles.content}>
            <ProtractorLoader size={scale(118)} />
            <View style={styles.textBlock}>
              <View style={styles.chapterChip}>
                <View style={styles.chapterDot} />
                <Text style={styles.chapterChipText}>{chapterTitle}</Text>
              </View>
              <Text style={styles.heading} numberOfLines={1}>
                Entering your classroom
              </Text>
              <View style={styles.statusRow}>
                <BouncingDots />
                <Text style={styles.statusText}>Drona is picking up the chalk…</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.scopingContent}>
            <View style={styles.chapterChip}>
              <View style={styles.chapterDot} />
              <Text style={styles.chapterChipText}>{chapterTitle}</Text>
            </View>
            <Text style={styles.speechText}>{speech}</Text>

            {statusNote && <Text style={styles.statusNote}>{statusNote}</Text>}

            {options.length > 0 && (
              <View style={styles.optionsRow}>
                {options.slice(0, 6).map((option) => (
                  <Pressable
                    key={option}
                    style={styles.optionChip}
                    disabled={submitting}
                    onPress={() => submit(option, { skipCheck: true })}>
                    <Text style={styles.optionChipText}>{option}</Text>
                  </Pressable>
                ))}
              </View>
            )}

            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type what you'd like to learn…"
                placeholderTextColor={colors.faint}
                editable={!submitting}
                onSubmitEditing={() => submit(input)}
                returnKeyType="send"
              />
              <Pressable
                style={[styles.sendButton, (!input.trim() || submitting) && styles.sendButtonDisabled]}
                disabled={!input.trim() || submitting}
                onPress={() => submit(input)}>
                {submitting ? (
                  <ActivityIndicator color={colors.ink} size="small" />
                ) : (
                  <Text style={styles.sendButtonText}>Go</Text>
                )}
              </Pressable>
            </View>
          </View>
        )}
        <View style={styles.footer}>
          <Text style={styles.footerHint}>
            Tip: you can interrupt Drona any time — just tap raise hand.
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

function BouncingDots() {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1200, easing: Easing.ease }), -1);
  }, [progress]);

  return (
    <View style={dotStyles.row}>
      <Dot progress={progress} delay={0} />
      <Dot progress={progress} delay={0.21} />
      <Dot progress={progress} delay={0.42} />
    </View>
  );
}

function Dot({ progress, delay }: { progress: SharedValue<number>; delay: number }) {
  const style = useAnimatedStyle(() => {
    'worklet';
    const t = (progress.value + delay) % 1;
    const opacity =
      t < 0.5 ? interpolate(t, [0, 0.5], [1, 0.2]) : interpolate(t, [0.5, 1], [0.2, 1]);
    return { opacity };
  });
  return <Animated.View style={[dotStyles.dot, style]} />;
}

/**
 * The loading mark. Two things were wrong with the version this replaces.
 *
 * The logo was incomplete for most of its cycle: the amber centre dot only
 * existed between 50% and 90% of a 6.5s loop, so more than half the time the
 * brand mark was two rings and a hole. It is now painted every frame, exactly
 * as components/protractor-mark.tsx draws it — outer ring, inner ring, dot.
 *
 * And it felt heavy because it was a construction: ticks faded in, each ring
 * swept into place, two red arcs drew themselves, two angle labels appeared
 * and left, the dot popped at 1.45x — then the whole thing faded to nothing
 * and started again from an empty frame. That restart is the stutter.
 *
 * Now nothing is built or erased. The mark is whole and simply turns: the
 * outer ring one way, the inner ring slower and the other way, the dot still
 * at the centre. Both rotations are continuous, so there is no seam to loop
 * across, and a protractor turning is what the instrument does anyway.
 */
function ProtractorLoader({ size }: { size: number }) {
  const outer = useSharedValue(0);
  const inner = useSharedValue(0);
  const breath = useSharedValue(0);

  useEffect(() => {
    // Linear and continuous: an eased spin would visibly hesitate once per
    // turn, which is the heaviness this is meant to remove.
    outer.value = withRepeat(withTiming(1, { duration: 9000, easing: Easing.linear }), -1);
    inner.value = withRepeat(withTiming(1, { duration: 14000, easing: Easing.linear }), -1);
    breath.value = withRepeat(
      withTiming(1, { duration: 2600, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, [outer, inner, breath]);

  const outerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-90 + outer.value * 360}deg` }],
  }));
  const innerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-30 - inner.value * 360}deg` }],
  }));
  const glowStyle = useAnimatedStyle(() => ({
    opacity: 0.35 + breath.value * 0.3,
  }));

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <View style={{ width: size, height: size }}>
      {/* A slow amber breath behind the mark — the only thing on this screen
          that changes brightness, and it never restarts. */}
      <Animated.View style={[StyleSheet.absoluteFill, glowStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Defs>
            <RadialGradient id="loaderGlow" cx="50%" cy="50%" r="50%">
              <Stop offset="0" stopColor={colors.marigold} stopOpacity={0.34} />
              <Stop offset="1" stopColor={colors.marigold} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Circle cx={60} cy={60} r={58} fill="url(#loaderGlow)" />
        </Svg>
      </Animated.View>

      {/* The protractor's bezel, static. It reads as the instrument's scale;
          animating it was noise. */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <G stroke="#55524A" strokeWidth={1.2} opacity={0.5}>
            {ticks.map((angle) => (
              <Line
                key={angle}
                x1={60}
                y1={12}
                x2={60}
                y2={16}
                transform={angle ? `rotate(${angle} 60 60)` : undefined}
              />
            ))}
          </G>
        </Svg>
      </View>

      <Animated.View style={[StyleSheet.absoluteFill, outerStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle
            cx={60}
            cy={60}
            r={36}
            fill="none"
            stroke="#FCFAF4"
            strokeWidth={11}
            strokeLinecap="round"
            strokeDasharray="52 23.4"
          />
        </Svg>
      </Animated.View>

      <Animated.View style={[StyleSheet.absoluteFill, innerStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle
            cx={60}
            cy={60}
            r={19}
            fill="none"
            stroke="#FCFAF4"
            strokeWidth={9}
            strokeLinecap="round"
            strokeDasharray="21.8 18"
          />
        </Svg>
      </Animated.View>

      {/* The dot the mark was missing. Always here, never animated. */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle cx={60} cy={60} r={6} fill={colors.marigold} />
        </Svg>
      </View>
    </View>
  );
}

const dotStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EEA31F',
  },
});

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#16130E',
    },
    // Same ground as the screen itself, so the rotation reads as one continuous
    // surface turning rather than a flash of something else.
    rotateHold: {
      flex: 1,
      backgroundColor: '#16130E',
    },
    safeArea: {
      flex: 1,
    },
    // The mark and the text are one centred pair. The text block is capped
    // so a longer chapter name can't drag the pair off centre or push the
    // mark towards the edge — the composition holds still whatever the
    // chapter is called.
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(40),
      paddingHorizontal: scale(56),
    },
    scopingContent: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scale(64),
      gap: verticalScale(16),
    },
    textBlock: {
      flexShrink: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: verticalScale(12),
      minWidth: 0,
      maxWidth: scale(420),
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.16)',
      backgroundColor: 'rgba(255,255,255,.05)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
    },
    chapterDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
      backgroundColor: colors.marigold,
    },
    chapterChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.54),
      color: '#EFEBDD',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    statusText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: '#C7C1B3',
    },
    speechText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(21),
      lineHeight: scale(30),
      letterSpacing: scale(-0.3),
      color: '#EFEBDD',
      maxWidth: scale(560),
    },
    statusNote: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.amberText,
      maxWidth: scale(520),
    },
    optionsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
    },
    optionChip: {
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.18)',
      backgroundColor: 'rgba(255,255,255,.06)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(14),
    },
    optionChipText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12.5),
      color: '#EFEBDD',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(4),
      maxWidth: scale(560),
    },
    input: {
      flex: 1,
      height: verticalScale(46),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.16)',
      backgroundColor: 'rgba(255,255,255,.05)',
      paddingHorizontal: scale(18),
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    sendButton: {
      width: scale(64),
      height: verticalScale(46),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendButtonDisabled: {
      opacity: 0.4,
    },
    sendButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    footer: {
      flexShrink: 0,
      alignItems: 'center',
      paddingBottom: verticalScale(12),
    },
    footerHint: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: '#938D80',
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
      color: '#EFEBDD',
    },
    errorBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: '#C7C1B3',
      textAlign: 'center',
    },
    errorButton: {
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(24),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    errorButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
  });
}
