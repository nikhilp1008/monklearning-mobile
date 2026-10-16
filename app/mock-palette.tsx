import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';
import { useEffect, useMemo, useState } from 'react';
import { Alert, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { MockKey, MockSection } from '@/components/mock/mock-kit';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { getMockSession, mockSecondsLeft, saveProgress, submitCurrentSession } from '@/lib/mock';
import { hapticCommitted, hapticWarning } from '@/lib/haptics';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

export default function MockPaletteScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const insets = useSafeAreaInsets();
  const session = getMockSession();
  const [submitting, setSubmitting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!session) router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session) return <View style={styles.root} />;

  const jump = (i: number) => {
    session.index = i;
    saveProgress();
    router.back();
  };

  const answered = session.paper.questions.filter((q) => session.answers.has(q.id)).length;

  /**
   * THE PAPER ENDS HERE, and only here.
   *
   * Submit used to sit in the paper's top bar, next to the clock, on every
   * one of 75 questions — the one irreversible control in the flow, always
   * under the thumb. This page is the only place a student can see what they
   * are about to hand in, so it is the only place that hands it in.
   */
  const doSubmit = async () => {
    if (submitting) return;
    // Handing the paper in: the committing thud, the moment it leaves the hand.
    hapticCommitted();
    setSubmitting(true);
    try {
      const result = await submitCurrentSession();
      router.replace(`/mock-report?run=${result?.mock_run_id ?? ''}`);
    } catch {
      setSubmitting(false);
      hapticWarning();
      Alert.alert(
        'Could not submit',
        'Your answers are safe on this device. Check your connection and submit again.',
        [{ text: 'OK' }]
      );
    }
  };

  const total = session.paper.questions.length;
  const marked = session.paper.questions.filter((q) => session.marked.has(q.id)).length;
  const left = total - answered;
  const minutesLeft = Math.max(0, Math.ceil(mockSecondsLeft(session) / 60));

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        {/* A PAGE, NOT A SHEET, with no clock on it: one is already running
            on the paper behind, and a second here would be a third thing
            ticking at a student. */}
        <View style={styles.headRow}>
          <Pressable
            style={styles.backButton}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Back to the paper"
            onPress={() => router.back()}
          >
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Text style={styles.title}>All questions</Text>
        </View>

        <ScrollView style={styles.gridScroll} contentContainerStyle={styles.gridInner}>
          {/* WHERE THE PAPER STANDS, in one strip, before the grid. */}
          <View style={styles.counts}>
            <Count styles={styles} n={answered} label="Answered" />
            <Count styles={styles} n={marked} label="Marked" amber divided />
            <Count styles={styles} n={left} label="Left" divided />
          </View>
          <View style={styles.legendRow}>
            <Legend styles={styles} kind="answered" label="Answered" />
            <Legend styles={styles} kind="empty" label="Not yet" />
            <Legend styles={styles} kind="marked" label="Marked" />
            <Legend styles={styles} kind="current" label="Current" />
          </View>

          {session.paper.sections.map((section) => {
            const rows = session.paper.questions
              .map((q, i) => ({ q, i }))
              .filter(({ q }) => q.subject === section.subject);
            const done = rows.filter(({ q }) => session.answers.has(q.id)).length;
            return (
              <View key={section.subject}>
                <MockSection
                  title={SUBJECT_LABEL[section.subject] ?? section.subject}
                  count={`${done} of ${rows.length}`}
                />
                {/* Rows of seven built by hand: RN's flexWrap has no `1fr`, and a
                    width worked out from one reference screen lost the seventh
                    cell on wider phones. Each cell flexes to share its row. */}
                {chunk(rows, GRID_COLUMNS).map((line, r) => (
                  <View key={r} style={styles.gridRow}>
                    {line.map(({ q, i }) => {
                      const isAnswered = session.answers.has(q.id);
                      const isMarked = session.marked.has(q.id);
                      const isCurrent = i === session.index;
                      return (
                        <Pressable
                          key={q.id}
                          style={[styles.cellRing, isCurrent && styles.cellRingOn]}
                          accessibilityRole="button"
                          accessibilityLabel={`Question ${q.question_num}${isAnswered ? ', answered' : ''}${isMarked ? ', marked' : ''}`}
                          onPress={() => jump(i)}
                        >
                          <View
                            style={[
                              styles.cell,
                              isAnswered && styles.cellAnswered,
                              isMarked && styles.cellMarked,
                            ]}
                          >
                            <Text style={[styles.cellText, isAnswered && styles.cellTextAnswered]}>
                              {q.question_num}
                            </Text>
                          </View>
                        </Pressable>
                      );
                    })}
                    {Array.from({ length: GRID_COLUMNS - line.length }, (_, k) => (
                      <View key={`pad${k}`} style={styles.cellRing} />
                    ))}
                  </View>
                ))}
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.footer}>
          <MockKey label="Submit paper" busy={submitting} onPress={() => setConfirming(true)} />
        </View>
      </SafeAreaView>

      {/* SUBMITTING, as a sheet of our own. It was the iPhone alert: grey,
          with a red "Submit", the one system dialog in the flow. */}
      <Modal
        visible={confirming}
        transparent
        animationType="fade"
        onRequestClose={() => setConfirming(false)}
      >
        <Pressable
          style={styles.scrim}
          onPress={() => setConfirming(false)}
          accessibilityLabel="Close"
        />
        {/* A Modal draws edge to edge on Android, under the navigation bar:
            the sheet's 40 clears iPhone's home indicator but not three
            buttons, so on Android the bar's height goes on top. */}
        <View
          style={[
            styles.sheet,
            Platform.OS === 'android' && { paddingBottom: verticalScale(40) + insets.bottom },
          ]}>
          <View style={styles.grab} />
          <Text style={styles.sheetTitle}>Submit your paper?</Text>
          <Text style={styles.sheetBody}>
            {left === 0
              ? `Every question is answered${marked ? `, and ${marked} ${marked === 1 ? 'is' : 'are'} marked to look at again` : ''}. You have ${minutesLeft} ${minutesLeft === 1 ? 'minute' : 'minutes'} left.`
              : `${left} ${left === 1 ? 'question is' : 'questions are'} not answered yet${marked ? `, and ${marked} ${marked === 1 ? 'is' : 'are'} marked to look at again` : ''}. Unanswered questions score 0; you have ${minutesLeft} ${minutesLeft === 1 ? 'minute' : 'minutes'} left.`}
          </Text>
          <View style={styles.sheetKeys}>
            <MockKey
              label="Submit paper"
              busy={submitting}
              onPress={() => {
                setConfirming(false);
                void doSubmit();
              }}
            />
            <MockKey label="Keep going" tone="white" onPress={() => setConfirming(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

function Count({
  styles,
  n,
  label,
  amber,
  divided,
}: {
  styles: ReturnType<typeof createStyles>;
  n: number;
  label: string;
  amber?: boolean;
  divided?: boolean;
}) {
  return (
    <View style={[styles.count, divided && styles.countDivided]}>
      <Text style={[styles.countN, amber && n > 0 && styles.countAmber]}>{n}</Text>
      <Text style={styles.countLabel}>{label}</Text>
    </View>
  );
}

function Legend({
  styles,
  kind,
  label,
}: {
  styles: ReturnType<typeof createStyles>;
  kind: 'answered' | 'empty' | 'marked' | 'current';
  label: string;
}) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendSwatch,
          kind === 'answered' && styles.cellAnswered,
          kind === 'marked' && styles.cellMarked,
          kind === 'current' && styles.legendCurrent,
        ]}
      />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const GRID_COLUMNS = 7;

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 5l-7 7 7 7"
        stroke={colors.ink}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  const gridGap = scale(8);

  return StyleSheet.create({
    root: { flex: 1, backgroundColor: '#fff' },
    flex: { flex: 1 },
    headRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      paddingTop: verticalScale(10),
      paddingHorizontal: scale(20),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { flex: 1, minWidth: 0, ...pageTitle(scale) },
    gridScroll: { flex: 1, minHeight: 0 },
    gridInner: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(18),
      paddingBottom: verticalScale(24),
    },
    counts: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(16),
    },
    count: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(12),
    },
    countDivided: { borderLeftWidth: 1, borderLeftColor: 'rgba(28,26,22,.08)' },
    countN: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(20),
      color: colors.ink,
      fontVariant: ['tabular-nums'],
    },
    countAmber: { color: colors.amberText },
    countLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    legendRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: verticalScale(8),
      columnGap: scale(16),
      marginTop: verticalScale(14),
    },
    legendItem: { flexDirection: 'row', alignItems: 'center', gap: scale(6) },
    legendSwatch: {
      width: scale(12),
      height: scale(12),
      borderRadius: scale(4),
      borderWidth: 1.2,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    legendCurrent: { borderWidth: 1.8, borderColor: colors.ink },
    legendText: { fontFamily: 'Onest_500Medium', fontSize: scale(12), color: colors.slate },
    gridRow: { flexDirection: 'row', gap: gridGap, marginBottom: gridGap },
    /** The question you were on: a ring outside the cell, so its own state
     *  (answered, marked) still shows inside it. */
    cellRing: {
      flex: 1,
      flexBasis: 0,
      aspectRatio: 1,
      borderRadius: scale(13),
      padding: 2.5,
      borderWidth: 1.6,
      borderColor: 'transparent',
    },
    cellRingOn: { borderColor: colors.ink },
    cell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(9),
      borderWidth: 1.2,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    /** Answered is filled in ink, so what is left stands out at a glance. */
    cellAnswered: { backgroundColor: colors.ink, borderColor: colors.ink },
    /** Marked is a marigold edge, a line and never a fill. */
    cellMarked: { borderColor: colors.marigold, borderWidth: 2 },
    cellText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
      fontVariant: ['tabular-nums'],
    },
    cellTextAnswered: { color: colors.paper },
    footer: {
      flexShrink: 0,
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(8),
    },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,26,22,.28)' },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(40),
    },
    grab: {
      alignSelf: 'center',
      width: 36,
      height: 5,
      borderRadius: 3,
      backgroundColor: 'rgba(28,26,22,.14)',
      marginBottom: verticalScale(16),
    },
    sheetTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(19),
      color: colors.ink,
      letterSpacing: scale(-0.3),
    },
    sheetBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.slate,
      marginTop: verticalScale(8),
    },
    sheetKeys: { gap: verticalScale(10), marginTop: verticalScale(20) },
  });
}
