import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { MathLine } from '@/components/math-line';
import { ObButton } from '@/components/onboarding-kit';
import {
  FILTER_LABEL,
  GREEN,
  GREEN_TEXT,
  HAIRLINE,
  HistoryHeader,
  RED_TEXT,
  SUBJECT_SHORT,
} from '@/components/practice-history/parts';
import { QuestionDiagram } from '@/components/question-diagram';
import { QuestionStem } from '@/components/question-stem';
import { SkeletonParagraph } from '@/components/skeleton';
import { SolutionCards } from '@/components/solution-cards';
import { StateCard } from '@/components/states';
import { colors } from '@/constants/brand';
import { QUESTION_READ_LINE, QUESTION_READ_SIZE, READ_LINE, READ_SIZE } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { useOnline } from '@/lib/connection';
import { footPadding } from '@/lib/foot-padding';
import { parseAnswerSolution, solutionFinalAnswer } from '@/lib/practice';
import {
  clockTime,
  dayTitle,
  getHistoryAttempt,
  isoDay,
  shortDate,
  tookFor,
  type HistoryAttempt,
  type HistoryFilter,
} from '@/lib/practice-history';

/**
 * PRACTICE HISTORY: one past question, READ ONLY.
 *
 * The options look exactly as Practice shows them after answering — YOUR
 * PICK in red, CORRECT in green, YOUR PICK · CORRECT when they were the same
 * — then the working. No Try again anywhere (Nikhil, 17 Nov): History is for
 * looking back. Previous and Next sit at the bottom and walk the list the
 * student came from, inside the subject tab and the Showing choice they had
 * on ("Wrong 2 of 9").
 */
export default function PracticeHistoryQuestionScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const insets = useSafeAreaInsets();
  const online = useOnline();
  const params = useLocalSearchParams<{ attemptId: string; subject?: string; result?: string }>();
  const subject = params.subject ? params.subject : null;
  const filter = (params.result as HistoryFilter) || 'all';

  const [attempt, setAttempt] = useState<HistoryAttempt | null>(null);
  const [failed, setFailed] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const loadId = useRef(0);

  const load = useCallback(() => {
    if (!params.attemptId) return;
    const id = ++loadId.current;
    setFailed(false);
    getHistoryAttempt(params.attemptId, { subject, result: filter })
      .then(({ data }) => {
        if (id !== loadId.current) return;
        setAttempt(data);
        scrollRef.current?.scrollTo({ y: 0, animated: false });
      })
      .catch(() => {
        if (id === loadId.current) setFailed(true);
      });
  }, [params.attemptId, subject, filter]);

  useEffect(load, [load]);

  // Previous / Next swap the question in place, so Back still returns to the day.
  const go = (attemptId: string | null) => {
    if (attemptId) router.setParams({ attemptId });
  };

  const a = attempt && attempt.attempt_id === params.attemptId ? attempt : null;
  const title = a
    ? `${filter === 'all' ? 'Question' : FILTER_LABEL[filter]} ${a.position?.index ?? 1} of ${a.position?.total ?? 1}`
    : '';

  const steps = useMemo(() => (a ? parseAnswerSolution(a.solution) : []), [a]);
  const numeric = a?.question_type === 'numerical';
  const numericAnswer = numeric && a?.correct_value != null ? String(a.correct_value) : null;
  const finalAnswer = a ? solutionFinalAnswer(a.solution) : null;

  let body: React.ReactNode;
  if (failed && !a) {
    body = (
      <StateCard
        style={styles.stateCard}
        glyph={online ? 'retry' : 'offline'}
        title={online ? "Couldn't load this question" : "Can't open this question offline"}
        action={{ label: 'Try again', onPress: load }}
      />
    );
  } else if (!a) {
    body = (
      <View style={styles.skeleton}>
        <SkeletonParagraph lines={4} lineHeight={verticalScale(16)} gap={verticalScale(12)} />
      </View>
    );
  } else {
    const when = [dayTitle(isoDay(new Date(a.answered_at)), isoDay(new Date())), clockTime(a.answered_at)];
    const took = tookFor(a.time_taken_ms);
    if (took) when.push(`took ${took}`);
    body = (
      <>
        <Text style={styles.meta}>
          {[SUBJECT_SHORT[a.subject] ?? a.subject, a.chapter_name].filter(Boolean).join(' · ')}
        </Text>
        <Text style={styles.when}>{when.join(' · ')}</Text>

        {a.removed ? (
          <StateCard style={styles.stateCard} glyph="paper" title="This question has been taken down" />
        ) : (
          <>
            {a.edited_at && (
              <View style={styles.note}>
                <InfoIcon size={scale(14)} />
                <Text style={styles.noteText}>
                  Corrected on {shortDate(isoDay(new Date(a.edited_at)))}. Your mark from that day stands.
                </Text>
              </View>
            )}

            <QuestionStem
              text={a.question_text ?? ''}
              fontSize={QUESTION_READ_SIZE}
              lineHeight={QUESTION_READ_LINE}
              style={styles.stem}
            />
            {a.diagram?.map((figure, i) => (
              <QuestionDiagram key={figure.r2_key ?? figure.url} figure={figure} index={i} total={a.diagram?.length ?? 1} />
            ))}

            {a.gave_up && <Text style={styles.chose}>You chose “I don&apos;t know”</Text>}

            {numeric ? (
              a.gave_up ? null : (
                <View style={[styles.numBox, a.result === 'correct' ? styles.numBoxCorrect : styles.numBoxWrong]}>
                  <Text style={styles.numValue}>{a.chosen_value ?? ''}</Text>
                  <Text style={a.result === 'correct' ? styles.tagCorrect : styles.tagWrong}>YOUR ANSWER</Text>
                </View>
              )
            ) : (
              <View style={styles.options}>
                {Object.entries(a.options ?? {}).map(([key, text]) => {
                  const isCorrect = a.correct_option?.toLowerCase() === key.toLowerCase();
                  const isPick = a.chosen_option?.toLowerCase() === key.toLowerCase();
                  const wrongPick = isPick && !isCorrect;
                  return (
                    <View
                      key={key}
                      style={[styles.option, wrongPick && styles.optionWrong, isCorrect && styles.optionCorrect]}>
                      <View style={[styles.badge, wrongPick && styles.badgeWrong, isCorrect && styles.badgeCorrect]}>
                        <Text style={[styles.badgeText, (wrongPick || isCorrect) && styles.badgeTextOn]}>
                          {key.toUpperCase()}
                        </Text>
                      </View>
                      <View style={styles.optionText}>
                        <MathLine
                          text={text}
                          fontSize={READ_SIZE}
                          color={colors.ink}
                          style={{ fontFamily: 'Onest_400Regular', fontSize: READ_SIZE, lineHeight: READ_LINE, color: colors.ink }}
                        />
                      </View>
                      {wrongPick && <Text style={styles.tagWrong}>YOUR PICK</Text>}
                      {isCorrect && (
                        <Text style={styles.tagCorrect}>{isPick ? 'YOUR PICK · CORRECT' : 'CORRECT'}</Text>
                      )}
                    </View>
                  );
                })}
              </View>
            )}

            <View style={styles.solution}>
              <View style={styles.divider} />
              <Text style={styles.eyebrow}>{a.result === 'correct' ? 'WHY THAT’S RIGHT' : 'HOW IT’S SOLVED'}</Text>
              {steps.length > 0 ? (
                <SolutionCards steps={steps} answer={numericAnswer ?? finalAnswer} />
              ) : (
                <Text style={styles.noSolution}>No worked solution is available for this question yet.</Text>
              )}
            </View>
          </>
        )}
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <HistoryHeader
          title={title}
          // Smaller and regular, not the bold page title (Nikhil, 17 Nov):
          // this is a page to read, and a 24pt bold "Wrong 1 of 9" outweighed
          // the question under it. Bold stays for the screens you move
          // between (History, a day); regular for the page you read.
          titleNode={
            <Text style={styles.title} numberOfLines={1} accessibilityRole="header">
              {title}
            </Text>
          }
        />
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {body}
        </ScrollView>
        <View style={[styles.foot, { paddingBottom: footPadding(insets.bottom, 16, 12) }]}>
          <ObButton
            variant="outline"
            label="Previous"
            disabled={!a?.prev_attempt_id}
            onPress={() => go(a?.prev_attempt_id ?? null)}
            style={styles.footButton}
          />
          <ObButton
            label="Next"
            disabled={!a?.next_attempt_id}
            onPress={() => go(a?.next_attempt_id ?? null)}
            style={styles.footButton}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function InfoIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={12} r={9} stroke={colors.slate} strokeWidth={1.8} />
      <Path d="M12 11v6M12 7.5v.5" stroke={colors.slate} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  const gutter = scale(22);
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: gutter, paddingBottom: verticalScale(28) },
    stateCard: { marginTop: verticalScale(24) },
    skeleton: { paddingTop: verticalScale(16) },
    meta: { fontFamily: 'Onest_500Medium', fontSize: scale(13), color: colors.slate },
    when: { fontFamily: 'Onest_400Regular', fontSize: scale(12), color: colors.faint, marginTop: verticalScale(2) },
    note: {
      flexDirection: 'row',
      gap: scale(8),
      marginTop: verticalScale(14),
      paddingLeft: scale(10),
      borderLeftWidth: 2,
      borderLeftColor: colors.quiet,
    },
    noteText: { flex: 1, fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(18), color: colors.slate },
    stem: { marginTop: verticalScale(14) },
    chose: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.slate, marginTop: verticalScale(14) },
    options: { gap: verticalScale(9), marginTop: verticalScale(14) },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,25,20,.12)',
      backgroundColor: '#fff',
    },
    optionWrong: { borderWidth: scale(1.6), borderColor: 'rgba(221,68,51,.5)', backgroundColor: 'rgba(221,68,51,.05)' },
    optionCorrect: { borderWidth: scale(1.6), borderColor: GREEN, backgroundColor: 'rgba(28,155,87,.07)' },
    badge: {
      width: scale(28),
      height: scale(28),
      flexShrink: 0,
      borderRadius: scale(9),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeWrong: { borderWidth: 0, backgroundColor: colors.red },
    badgeCorrect: { borderWidth: 0, backgroundColor: GREEN },
    badgeText: { fontFamily: 'Onest_700Bold', fontSize: scale(12), color: colors.ink },
    badgeTextOn: { color: '#fff' },
    optionText: { flex: 1 },
    tagWrong: { fontFamily: 'Onest_800ExtraBold', fontSize: scale(8.1), letterSpacing: scale(0.54), color: RED_TEXT },
    tagCorrect: { fontFamily: 'Onest_800ExtraBold', fontSize: scale(8.1), letterSpacing: scale(0.54), color: GREEN_TEXT },
    numBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: verticalScale(46),
      paddingHorizontal: scale(16),
      borderRadius: scale(12),
      marginTop: verticalScale(14),
    },
    numBoxWrong: { borderWidth: scale(1.6), borderColor: 'rgba(221,68,51,.5)', backgroundColor: 'rgba(221,68,51,.05)' },
    numBoxCorrect: { borderWidth: scale(1.6), borderColor: GREEN, backgroundColor: 'rgba(28,155,87,.07)' },
    numValue: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14), color: colors.ink },
    solution: { marginTop: verticalScale(22) },
    divider: { height: 1, backgroundColor: HAIRLINE, marginBottom: verticalScale(16) },
    eyebrow: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.83),
      color: colors.faint,
      marginBottom: verticalScale(16),
    },
    noSolution: { fontFamily: 'Onest_400Regular', fontSize: scale(13.5), color: colors.faint },
    foot: {
      flexDirection: 'row',
      gap: scale(12),
      paddingTop: verticalScale(12),
      paddingHorizontal: gutter,
      borderTopWidth: 1,
      borderTopColor: HAIRLINE,
      backgroundColor: '#fff',
    },
    footButton: { flex: 1 },
    title: { fontFamily: 'Onest_400Regular', fontSize: scale(19), lineHeight: scale(24), letterSpacing: scale(-0.3), color: colors.ink },
  });
}
