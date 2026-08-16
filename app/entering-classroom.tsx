import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import {
  checkDronaTopic,
  scopeDronaSession,
  startDronaSession,
} from '@/lib/drona-live';
import { getLanguagePreference, getTeacherPreference, teacherToVoice } from '@/lib/preferences';

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvgText = Animated.createAnimatedComponent(SvgText);

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
  useLandscapeLock();
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterTitle?: string;
    initialUtterance?: string;
  }>();
  const chapterTitle = params.chapterTitle || 'this chapter';
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

  useEffect(() => {
    let cancelled = false;
    Promise.all([getTeacherPreference(), getLanguagePreference()])
      .then(([teacher, language]) => {
        if (cancelled) return Promise.reject(new Error('cancelled'));
        return startDronaSession({
          chapter_id: params.chapterId || undefined,
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
        if (!params.initialUtterance) {
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
  }, []);

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
    if (sessionId && params.initialUtterance && !autoSubmittedRef.current) {
      autoSubmittedRef.current = true;
      submit(params.initialUtterance, { skipCheck: true, fromPreselected: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (stage === 'error') {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
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
      <StatusBar style="dark" />
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
              <Text style={styles.heading}>Entering your classroom</Text>
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

function ProtractorLoader({ size }: { size: number }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 6500, easing: Easing.linear }), -1);
  }, [progress]);

  const ticksProps = useAnimatedProps(() => {
    'worklet';
    return { opacity: interpolate(progress.value, [0, 0.08, 0.7, 0.8, 1], [0, 0.9, 0.9, 0, 0]) };
  });

  const outerProps = useAnimatedProps(() => {
    'worklet';
    const rotation = interpolate(progress.value, [0, 0.08, 0.32, 0.9, 1], [0, 0, -90, -90, -90]);
    const opacity = interpolate(progress.value, [0, 0.08, 0.9, 1], [0, 1, 1, 0]);
    return { opacity, transform: `rotate(${rotation} 60 60)` };
  });

  const innerProps = useAnimatedProps(() => {
    'worklet';
    const rotation = interpolate(progress.value, [0, 0.28, 0.48, 0.9, 1], [0, 0, -30, -30, -30]);
    const opacity = interpolate(progress.value, [0, 0.28, 0.33, 0.9, 1], [0, 0, 1, 1, 0]);
    return { opacity, transform: `rotate(${rotation} 60 60)` };
  });

  const arc1Props = useAnimatedProps(() => {
    'worklet';
    const dashoffset = interpolate(progress.value, [0, 0.08, 0.32], [81.7, 81.7, 0], 'clamp');
    const opacity = interpolate(progress.value, [0, 0.56, 0.66, 1], [1, 1, 0, 0]);
    return { strokeDashoffset: dashoffset, opacity };
  });

  const arc2Props = useAnimatedProps(() => {
    'worklet';
    const dashoffset = interpolate(progress.value, [0, 0.28, 0.48], [14.7, 14.7, 0], 'clamp');
    const opacity = interpolate(progress.value, [0, 0.6, 0.7, 1], [1, 1, 0, 0]);
    return { strokeDashoffset: dashoffset, opacity };
  });

  const lbl1Props = useAnimatedProps(() => {
    'worklet';
    return {
      opacity: interpolate(progress.value, [0, 0.3, 0.38, 0.56, 0.66, 1], [0, 0, 1, 1, 0, 0]),
    };
  });

  const lbl2Props = useAnimatedProps(() => {
    'worklet';
    return {
      opacity: interpolate(progress.value, [0, 0.46, 0.54, 0.62, 0.72, 1], [0, 0, 1, 1, 0, 0]),
    };
  });

  const dotProps = useAnimatedProps(() => {
    'worklet';
    const s = interpolate(progress.value, [0, 0.5, 0.6, 0.68, 1], [0, 0, 1.45, 1, 1]);
    const opacity = interpolate(progress.value, [0, 0.5, 0.6, 0.9, 1], [0, 0, 1, 1, 0]);
    return { opacity, transform: `scale(${s})` };
  });

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" style={{ overflow: 'visible' }}>
      <AnimatedG stroke="#55524A" strokeWidth={1.2} animatedProps={ticksProps}>
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
      </AnimatedG>
      <AnimatedCircle
        cx={60}
        cy={60}
        r={36}
        fill="none"
        stroke={colors.ink}
        strokeWidth={11}
        strokeLinecap="round"
        strokeDasharray="52 23.4"
        animatedProps={outerProps}
      />
      <AnimatedCircle
        cx={60}
        cy={60}
        r={19}
        fill="none"
        stroke={colors.ink}
        strokeWidth={9}
        strokeLinecap="round"
        strokeDasharray="21.8 18"
        animatedProps={innerProps}
      />
      <AnimatedPath
        d="M112,60 A52,52 0 0 0 60,8"
        fill="none"
        stroke={colors.red}
        strokeWidth={1.4}
        strokeDasharray="81.7"
        animatedProps={arc1Props}
      />
      <AnimatedPath
        d="M88,60 A28,28 0 0 0 84.25,46"
        fill="none"
        stroke={colors.red}
        strokeWidth={1.4}
        strokeDasharray="14.7"
        animatedProps={arc2Props}
      />
      <AnimatedSvgText
        x={102}
        y={22}
        fontFamily="Kalam_400Regular"
        fontSize={9}
        fill={colors.marigold}
        animatedProps={lbl1Props}>
        −90°
      </AnimatedSvgText>
      <AnimatedSvgText
        x={94}
        y={48}
        fontFamily="Kalam_400Regular"
        fontSize={9}
        fill={colors.marigold}
        animatedProps={lbl2Props}>
        −30°
      </AnimatedSvgText>
      <AnimatedCircle cx={60} cy={60} r={6} fill={colors.marigold} animatedProps={dotProps} />
    </Svg>
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
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(48),
      paddingHorizontal: scale(56),
    },
    scopingContent: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scale(64),
      gap: verticalScale(16),
    },
    textBlock: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: verticalScale(13),
      minWidth: 0,
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: 'rgba(28,26,22,.05)',
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
      color: colors.ink,
    },
    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.54),
      color: colors.ink,
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    statusText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.slate,
    },
    speechText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(21),
      lineHeight: scale(30),
      letterSpacing: scale(-0.3),
      color: colors.ink,
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
      borderColor: 'rgba(28,26,22,.18)',
      backgroundColor: 'rgba(28,26,22,.06)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(14),
    },
    optionChipText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12.5),
      color: colors.ink,
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
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: 'rgba(28,26,22,.05)',
      paddingHorizontal: scale(18),
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.ink,
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
      color: colors.ink,
    },
    footer: {
      flexShrink: 0,
      alignItems: 'center',
      paddingBottom: verticalScale(12),
    },
    footerHint: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
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
      backgroundColor: colors.marigold,
    },
    errorButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
  });
}
