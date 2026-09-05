import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EnteringCardScreen } from '@/components/entering-card';
import { colors } from '@/constants/brand';
import {
  LONG_WAIT_TEXT,
  statusLinesFor,
  toStatusSubject,
  type StatusSubject,
} from '@/constants/classroom-status';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import { useStagedStatus } from '@/hooks/use-staged-status';
import { subjectForChapter } from '@/lib/drona';
import {
  checkDronaTopic,
  scopeDronaSession,
  startDronaSession,
} from '@/lib/drona-live';
import { discardPrewarmedClient, prewarmDronaClient } from '@/lib/drona-prewarm';
import { getLanguagePreference, getTeacherPreference, teacherToVoice } from '@/lib/preferences';
import { supabase } from '@/lib/supabase';
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

  /**
   * Which subject's loading copy this class gets. Null is an ordinary answer —
   * a class opened from a snapped doubt or the doubt of the day carries no
   * `chapterId` at all — and falls back to the generic set.
   */
  const [subject, setSubject] = useState<StatusSubject | null>(null);
  useEffect(() => {
    let cancelled = false;
    void subjectForChapter(chapterId).then((name) => {
      if (!cancelled) setSubject(toStatusSubject(name));
    });
    return () => {
      cancelled = true;
    };
  }, [chapterId]);

  /**
   * Two real phases live on this screen, and the boundary between them is an
   * observed event rather than a clock: `opening` is `session/start` in flight,
   * `planning` is the `scope` call, which begins the moment a session id
   * exists. Only `planning` is opaque enough to need lines that move.
   */
  const phase = sessionId ? 'planning' : 'opening';
  const { text: statusLine, longWait } = useStagedStatus({
    lines: statusLinesFor(phase, subject),
    longWaitMs: 20000,
    resetKey: phase,
  });
  const statusText = longWait ? LONG_WAIT_TEXT : statusLine;

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
        // Open the class socket now, against the id we just got, so connect
        // and auth overlap the scoping step instead of queueing behind it.
        // See lib/drona-prewarm.ts.
        const apiBaseUrl = process.env.EXPO_PUBLIC_API_URL;
        if (apiBaseUrl) {
          prewarmDronaClient(
            res.session_id,
            async () => (await supabase.auth.getSession()).data.session?.access_token ?? null,
            apiBaseUrl
          );
        }
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

  /**
   * A student who backs out of scoping leaves a live socket behind, and the
   * classroom that would have claimed it never mounts. Handing it back is
   * only correct on the way *out* — navigating forward unmounts this screen
   * too, and by then the classroom has already claimed it, so `claimDronaClient`
   * has emptied the slot and this is a no-op.
   */
  useEffect(() => discardPrewarmedClient, []);

  async function submit(
    utterance: string,
    opts: { skipCheck?: boolean; fromPreselected?: boolean } = {}
  ) {
    const trimmed = utterance.trim();
    if (!trimmed || !sessionId || submitting) return;
    setSubmitting(true);
    setStatusNote(null);
    try {
      // Was believed to be "a 100% backend bug — always returns
      // other_chapter". It was ours: we sent `session_id`, the server only
      // reads `chapter_id`, so it was null on every call and the router could
      // never match the chapter the student was already in. See
      // `checkDronaTopic`. Sending the chapter id fixes it, and the check now
      // does the job it exists for instead of rejecting everything.
      //
      // Still skipped for utterances known on-topic by construction — a
      // subtopic tapped from this chapter's own catalogue, or an option chip
      // the backend itself just offered.
      if (!opts.skipCheck) {
        const check = await checkDronaTopic({ utterance: trimmed, chapter_id: chapterId });
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
            // Resolved here so the classroom half of the loading card keeps
            // the same subject copy without re-deriving it.
            subject: subject ?? '',
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

  /**
   * The card owns the whole wait now, and `live-classroom` keeps rendering it
   * over its own blank board until Drona actually speaks — so a student sees
   * one continuous surface rather than two static loaders either side of a
   * route change. StatusBar stays out of the card itself: the classroom
   * renders its own, and two would fight.
   */
  if (stage === 'connecting') {
    return (
      <>
        <StatusBar style="light" />
        <EnteringCardScreen chapterTitle={chapterTitle} statusText={statusText} />
      </>
    );
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
        <View style={styles.footer}>
          <Text style={styles.footerHint}>
            Tip: you can interrupt Drona any time — just tap raise hand.
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

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
    scopingContent: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scale(64),
      gap: verticalScale(16),
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
    speechText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(21),
      lineHeight: scale(30),
      letterSpacing: scale(-0.3),
      color: '#EFEBDD',
      maxWidth: scale(560),
    },
    statusNote: {
      fontFamily: 'Onest_600SemiBold',
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
      fontFamily: 'Onest_600SemiBold',
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
      fontFamily: 'Onest_400Regular',
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    footer: {
      flexShrink: 0,
      alignItems: 'center',
      paddingBottom: verticalScale(12),
    },
    footerHint: {
      fontFamily: 'Onest_600SemiBold',
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(20),
      color: '#EFEBDD',
    },
    errorBody: {
      fontFamily: 'Onest_400Regular',
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
  });
}
