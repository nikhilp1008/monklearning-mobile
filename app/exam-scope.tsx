import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { LayoutAnimation, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { EXAM_SCOPE, SCOPE_SOURCE_NOTE, SCOPE_TIMELINE, type ScopeExam } from '@/lib/exam-scope';
import { subjectScope, subjectsFor } from '@/lib/exam-scope-chapters';
import { getProfile } from '@/lib/profile';

/**
 * Exam scope — the page that answers "what is actually examined?".
 *
 * Standalone by design: nothing here navigates anywhere else. It opens from
 * one quiet row at the bottom of Home, is read, and is left.
 *
 * The two lists are deliberately framed differently, because the difference
 * is the whole point. Archived chapters are gone from the NCERT books and
 * from both exams — those a student can genuinely drop. Topic exceptions sit
 * inside live chapters and are still in the CBSE boards — those get weighted
 * lighter, never skipped. Saying "skip" about the second group would cost a
 * student board marks.
 */

const EXAM_OPTIONS = ['JEE Main', 'NEET UG'] as const;

export default function ExamScopeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [exam, setExam] = useState<ScopeExam>('jee');

  // Opens on the student's own exam; 'both' entitlements start on JEE.
  useEffect(() => {
    let cancelled = false;
    getProfile().then((p) => {
      if (!cancelled && p.exam === 'neet') setExam('neet');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const scope = EXAM_SCOPE[exam];

  // Counted from the chapter map rather than kept as a second list, so the
  // headline can never drift from the per-subject pages it summarises.
  const subjectDetails = subjectsFor(exam)
    .map((key) => subjectScope(exam, key))
    .filter(Boolean) as NonNullable<ReturnType<typeof subjectScope>>[];
  const archivedCount = subjectDetails.reduce((n, s) => n + s.archived.length, 0);
  const trimCount = subjectDetails.reduce(
    (n, s) => n + s.chapters.filter((c) => c.trims?.length).length,
    0
  );

  return (
    <SettingsPage title="Exam scope">
      <Text style={styles.lede}>
        Neither NTA nor NMC publishes a chapter list — they publish units, and every
        &ldquo;chapter-wise syllabus&rdquo; you&apos;ve seen online is someone&apos;s
        reconstruction. Here is ours, mapped onto the NCERT chapters you actually own.
      </Text>

      <View style={styles.toggleWrap}>
        <SlidingToggle
          options={EXAM_OPTIONS}
          value={exam === 'jee' ? 'JEE Main' : 'NEET UG'}
          onChange={(value) => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExam(value === 'NEET UG' ? 'neet' : 'jee');
          }}
          trackStyle={styles.toggleTrack}
          thumbStyle={styles.toggleThumb}
          pillStyle={styles.togglePill}
          textStyle={styles.togglePillText}
          textActiveStyle={styles.togglePillTextActive}
        />
      </View>

      {/* What's in */}
      <View style={styles.card}>
        <Text style={styles.overline}>In {scope.label}</Text>
        <View style={styles.countRow}>
          <Text style={styles.countValue}>{scope.totalChapters}</Text>
          <Text style={styles.countUnit}>NCERT chapters</Text>
        </View>
        <View style={styles.subjectRow}>
          {scope.subjects.map((subject) => (
            <View key={subject.name} style={styles.subjectItem}>
              <Text style={styles.subjectCount}>{subject.chapters}</Text>
              <Text style={styles.subjectName}>{subject.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.cardNote}>
          Set by {scope.authority}. A chapter being in scope means it contains examinable
          material — not that every line of it is examined.
        </Text>
      </View>

      {/* The way in to the chapter-level map, one subject at a time. */}
      <View style={styles.sectionHeadRow}>
        <View style={styles.sectionDash} />
        <Text style={styles.sectionTitle}>Chapter by chapter</Text>
      </View>
      <Text style={styles.answerLine}>
        Open a subject to see every chapter you own — what&apos;s examined, what has a topic
        quietly trimmed out, and what left the books in 2023.
      </Text>
      <View style={styles.subjectCards}>
        {subjectDetails.map((detail) => {
          const trims = detail.chapters.filter((c) => c.trims?.length).length;
          return (
            <PressableScale
              key={detail.key}
              style={styles.subjectCard}
              onPress={() =>
                router.push({
                  pathname: '/exam-scope-subject',
                  params: { subject: detail.key, exam },
                })
              }>
              <View style={styles.subjectCardText}>
                <Text style={styles.subjectCardName}>{detail.label}</Text>
                <Text style={styles.subjectCardMeta}>
                  {detail.chapters.length} chapters
                  {trims > 0 ? ` · ${trims} with trims` : ''}
                  {detail.archived.length > 0 ? ` · ${detail.archived.length} archived` : ''}
                </Text>
              </View>
              <View style={styles.subjectCardMap}>
                {detail.chapters.slice(0, 12).map((chapter, i) => (
                  <View
                    key={i}
                    style={[styles.miniTile, !!chapter.trims?.length && styles.miniTileTrim]}
                  />
                ))}
              </View>
              <ChevronIcon color={colors.faint} />
            </PressableScale>
          );
        })}
      </View>

      <View style={styles.card}>
        <Text style={styles.overline}>What you can drop</Text>
        <View style={styles.dropRow}>
          <View style={styles.dropItem}>
            <Text style={styles.dropValue}>{archivedCount}</Text>
            <Text style={styles.dropLabel}>chapters gone{'\n'}from the books</Text>
          </View>
          <View style={styles.dropDivider} />
          <View style={styles.dropItem}>
            <Text style={styles.dropValue}>{trimCount}</Text>
            <Text style={styles.dropLabel}>topics trimmed{'\n'}inside live chapters</Text>
          </View>
        </View>
        <Text style={styles.cardNote}>
          The first group left NCERT in 2023 — not in either exam, not in your boards. The second
          sits inside chapters you keep and is still board material, so weigh it lighter rather
          than skipping it. Both are named per subject below.
        </Text>
      </View>

      {scope.boardOnlyChapters.length > 0 && (
        <View style={styles.noteCard}>
          <Text style={styles.noteCardText}>
            <Text style={styles.noteCardStrong}>{scope.boardOnlyChapters.join(', ')}</Text> is a
            live NCERT chapter and a board topic, but it isn&apos;t in the {scope.label} syllabus.
            Study it for school, not for the exam.
          </Text>
        </View>
      )}

      {/* The anxiety question */}
      <View style={styles.sectionHeadRow}>
        <View style={styles.sectionDash} />
        <Text style={styles.sectionTitle}>Does it change every year?</Text>
      </View>
      <Text style={styles.answerLine}>
        <Text style={styles.answerStrong}>No.</Text> Both syllabi only move when the NCERT books
        move — and the books moved once, in 2023.
      </Text>

      <View style={styles.timeline}>
        {SCOPE_TIMELINE.map((year, index) => (
          <View key={year.period} style={styles.timelineRow}>
            <View style={styles.timelineRail}>
              <View
                style={[
                  styles.timelineDot,
                  year.state === 'change' && styles.timelineDotChange,
                  year.state === 'unknown' && styles.timelineDotUnknown,
                ]}
              />
              {index < SCOPE_TIMELINE.length - 1 && <View style={styles.timelineLine} />}
            </View>
            <View style={styles.timelineText}>
              <Text style={styles.timelinePeriod}>{year.period}</Text>
              <Text style={styles.timelineHeadline}>{year.headline}</Text>
              <Text style={styles.timelineDetail}>{year.detail}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.source}>{SCOPE_SOURCE_NOTE}</Text>
    </SettingsPage>
  );
}

function ChevronIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path
        d="m6 9 6 6 6-6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const hairline = (alpha: number) => `rgba(28,26,22,${alpha})`;

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    lede: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    toggleWrap: {
      alignSelf: 'flex-start',
      marginTop: verticalScale(20),
    },
    toggleTrack: {
      gap: scale(3),
      padding: scale(3),
      backgroundColor: hairline(0.055),
      borderRadius: scale(99),
    },
    toggleThumb: {
      backgroundColor: '#fff',
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: hairline(0.13),
    },
    togglePill: {
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
    },
    togglePillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    togglePillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      padding: scale(20),
      marginTop: verticalScale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowOpacity: 0.06,
      shadowRadius: scale(12),
      elevation: 2,
    },
    overline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    countRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(8),
      marginTop: verticalScale(6),
    },
    countValue: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(40),
      letterSpacing: scale(-1),
      lineHeight: scale(44),
      color: colors.ink,
    },
    countUnit: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.faint,
    },
    subjectRow: {
      flexDirection: 'row',
      marginTop: verticalScale(14),
      paddingTop: verticalScale(14),
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
    },
    subjectItem: {
      flex: 1,
    },
    subjectCount: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(18),
      color: colors.ink,
    },
    subjectName: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      letterSpacing: scale(0.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    cardNote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    cardHeadRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(10),
    },
    cardHeadText: {
      flex: 1,
      minWidth: 0,
    },
    cardTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    cardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(8),
    },
    chevronUp: {
      transform: [{ rotate: '180deg' }],
    },
    list: {
      marginTop: verticalScale(14),
      paddingTop: verticalScale(12),
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
      gap: verticalScale(10),
    },
    listRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    strikeName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.faint,
      textDecorationLine: 'line-through',
    },
    listTag: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    listSubhead: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      lineHeight: scale(16),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    exceptionRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(10),
    },
    outDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
      marginTop: verticalScale(6),
    },
    inDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(99),
      backgroundColor: colors.masteryStrong,
      marginTop: verticalScale(6),
    },
    exceptionText: {
      flex: 1,
      minWidth: 0,
    },
    exceptionTopic: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    exceptionChapter: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(1),
    },
    dropRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: verticalScale(12),
    },
    dropItem: {
      flex: 1,
    },
    dropDivider: {
      width: 1,
      alignSelf: 'stretch',
      backgroundColor: hairline(0.1),
      marginHorizontal: scale(16),
    },
    dropValue: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(30),
      letterSpacing: scale(-0.6),
      lineHeight: scale(34),
      color: colors.ink,
    },
    dropLabel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11.5),
      lineHeight: scale(16),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    subjectCards: {
      marginTop: verticalScale(14),
      gap: verticalScale(10),
    },
    subjectCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowOpacity: 0.06,
      shadowRadius: scale(12),
      elevation: 2,
    },
    subjectCardText: {
      flex: 1,
      minWidth: 0,
    },
    subjectCardName: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.ink,
    },
    subjectCardMeta: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    subjectCardMap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: scale(46),
      gap: scale(3),
    },
    miniTile: {
      width: scale(8),
      height: scale(8),
      borderRadius: scale(2),
      backgroundColor: hairline(0.75),
    },
    miniTileTrim: {
      backgroundColor: colors.marigold,
    },
    noteCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(16),
    },
    noteCardText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.amberText,
    },
    noteCardStrong: {
      fontFamily: 'AnekLatin_700Bold',
    },
    sectionHeadRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(32),
    },
    sectionDash: {
      width: scale(18),
      height: verticalScale(2),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    sectionTitle: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(11),
      letterSpacing: scale(1.54),
      textTransform: 'uppercase',
      color: colors.ink,
    },
    answerLine: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.slate,
      marginTop: verticalScale(12),
    },
    answerStrong: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    timeline: {
      marginTop: verticalScale(18),
    },
    timelineRow: {
      flexDirection: 'row',
      gap: scale(12),
    },
    timelineRail: {
      alignItems: 'center',
      width: scale(10),
    },
    timelineDot: {
      width: scale(9),
      height: scale(9),
      borderRadius: scale(99),
      backgroundColor: hairline(0.2),
      marginTop: verticalScale(4),
    },
    timelineDotChange: {
      backgroundColor: colors.marigold,
    },
    timelineDotUnknown: {
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: hairline(0.25),
    },
    timelineLine: {
      flex: 1,
      width: 1,
      backgroundColor: hairline(0.12),
      marginTop: verticalScale(3),
      marginBottom: verticalScale(-2),
    },
    timelineText: {
      flex: 1,
      minWidth: 0,
      paddingBottom: verticalScale(18),
    },
    timelinePeriod: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    timelineHeadline: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      marginTop: verticalScale(1),
    },
    timelineDetail: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    source: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(16.5),
      color: colors.faint,
      marginTop: verticalScale(12),
    },
  });
}
