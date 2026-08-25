
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { Skeleton, stagger } from '@/components/skeleton';
import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { EXAMS, type ExamKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';
import { getProfile } from '@/lib/profile';

/**
 * Lessons — the real course catalogue, from the same cached GET
 * /drona/catalogue every other picker in the app reads. The subject pills
 * and the class toggle actually filter now (they were decoration over a
 * hardcoded Class-11 Physics list), the chapter count is counted, the exam
 * pill reads the stored profile, and each row shows its true topic count
 * instead of an invented Done/New status.
 */

const CLASSES = ['Class 11', 'Class 12'] as const;

/**
 * No lesson has been recorded yet, so no chapter here opens.
 *
 * The catalogue is still worth showing: a student can see the syllabus their
 * exam covers and what is coming, which is the same bargain the Textbooks
 * chapter list makes with its own unwritten chapters, and it carries the same
 * SOON tag so the two read alike.
 *
 * Rows are deliberately NOT dimmed the way an unwritten textbook chapter is.
 * There, dimming means something because it sits beside a chapter that is
 * ready. Here every row is unavailable, so dimming all of them would say
 * nothing and would only make a browsable list look broken.
 *
 * When the first lesson ships, this becomes a per-chapter check the way
 * `isChapterReady` works for textbooks, and `lesson-player` gets its caller
 * back.
 */

/** Catalogue subject strings → the compact pill labels used app-wide. */
const SUBJECT_SHORT: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  maths: 'Maths',
  biology: 'Biology',
};

function shortSubject(name: string): string {
  return SUBJECT_SHORT[name.trim().toLowerCase()] ?? name;
}

type LoadState =
  | { kind: 'loading' }
  | { kind: 'ready'; catalogue: CatalogueSubject[] }
  | { kind: 'error' };

export default function LessonsScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [state, setState] = useState<LoadState>({ kind: 'loading' });
  const [activeClass, setActiveClass] = useState<(typeof CLASSES)[number]>('Class 11');
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [exam, setExam] = useState<ExamKey | null>(null);

  useEffect(() => {
    let cancelled = false;
    load();
    getProfile().then((p) => {
      if (!cancelled) setExam(p.exam);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function load() {
    setState({ kind: 'loading' });
    getCatalogue()
      .then((catalogue) => setState({ kind: 'ready', catalogue }))
      .catch(() => setState({ kind: 'error' }));
  }

  /** Canonical subject order app-wide: Physics, Chemistry, Maths, Biology. */
  const catalogue = useMemo(() => {
    if (state.kind !== 'ready') return [];
    const rank = (name: string) => {
      const i = ['physics', 'chemistry', 'mathematics', 'maths', 'biology'].indexOf(
        name.trim().toLowerCase()
      );
      return i === -1 ? 99 : i;
    };
    return state.catalogue.slice().sort((a, b) => rank(a.subject) - rank(b.subject));
  }, [state]);
  const subject = catalogue[subjectIndex] ?? catalogue[0];
  const classLevel = activeClass === 'Class 11' ? 11 : 12;

  /** Chapters for the toggled class — null class_level rows belong to both. */
  const visibleChapters = useMemo(() => {
    if (!subject) return [];
    return subject.chapters.filter(
      (ch) => ch.class_level == null || ch.class_level === classLevel
    );
  }, [subject, classLevel]);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.heading}>Lessons</Text>
            {exam && (
              <View style={styles.examPill}>
                <LockIcon size={scale(11)} color={colors.slate} />
                <Text style={styles.examPillText}>{EXAMS[exam].name}</Text>
              </View>
            )}
          </View>

          <View style={styles.subjectRow}>
            {(state.kind === 'ready' ? catalogue : []).map((entry, i) => (
              <PressableScale key={entry.subject} onPress={() => setSubjectIndex(i)}>
                <View
                  style={[styles.subjectPill, subjectIndex === i && styles.subjectPillActive]}>
                  <Text
                    style={[
                      styles.subjectPillText,
                      subjectIndex === i && styles.subjectPillTextActive,
                    ]}>
                    {shortSubject(entry.subject)}
                  </Text>
                </View>
              </PressableScale>
            ))}
          </View>

          <View style={styles.classRow}>
            <SlidingToggle
              options={CLASSES}
              value={activeClass}
              onChange={setActiveClass}
              trackStyle={styles.classTrack}
              thumbStyle={styles.classThumb}
              pillStyle={styles.classPill}
              textStyle={styles.classPillText}
              textActiveStyle={styles.classPillTextActive}
            />
            {state.kind === 'ready' && (
              <Text style={styles.chaptersCount}>
                {visibleChapters.length} chapter{visibleChapters.length === 1 ? '' : 's'}
              </Text>
            )}
          </View>

          {state.kind === 'loading' && (
            <View style={styles.listWrap}>
              {Array.from({ length: 8 }, (_, i) => (
                <View key={i} style={[styles.row, i < 7 && styles.rowDivider]}>
                  <Skeleton delay={stagger(i, 70)} style={skeletonStyles.number} />
                  <Skeleton delay={stagger(i, 70) + 40} style={skeletonStyles.title} />
                </View>
              ))}
            </View>
          )}

          {state.kind === 'error' && (
            <View style={styles.stateBlock}>
              <Text style={styles.stateText}>
                Couldn&apos;t load the course catalogue. Check your connection and try again.
              </Text>
              <PressableScale style={styles.retryButton} onPress={load}>
                <Text style={styles.retryButtonText}>Retry</Text>
              </PressableScale>
            </View>
          )}

          {state.kind === 'ready' && (
            <ScrollView
              style={styles.listWrap}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}>
              {visibleChapters.length === 0 ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>
                    No {activeClass} {subject ? shortSubject(subject.subject) : ''} chapters in
                    the catalogue yet.
                  </Text>
                </View>
              ) : (
                visibleChapters.map((chapter, index) => (
                  <View
                    key={chapter.id}
                    style={[
                      styles.row,
                      index < visibleChapters.length - 1 && styles.rowDivider,
                    ]}>
                    <Text style={styles.rowNumber}>{String(index + 1).padStart(2, '0')}</Text>
                    <View style={styles.rowTitleWrap}>
                      <Text style={styles.rowTitle}>{chapter.name}</Text>
                    </View>
                    {chapter.subtopics.length > 0 && (
                      <Text style={styles.topicsCount}>
                        {chapter.subtopics.length} topic{chapter.subtopics.length === 1 ? '' : 's'}
                      </Text>
                    )}
                    <Text style={styles.soon}>Soon</Text>
                  </View>
                ))
              )}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

function LockIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect
        x={5}
        y={11}
        width={14}
        height={9}
        rx={2}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

// Same ink triple + border treatment as the Home redesign — see
// app/(tabs)/index.tsx.
const hairline = (alpha: number) => `rgba(28,26,22,${alpha})`;

const skeletonStyles = StyleSheet.create({
  number: { width: 22, height: 14, borderRadius: 4 },
  title: { flex: 1, height: 16, borderRadius: 5 },
});

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    examPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      borderWidth: 1,
      borderColor: hairline(0.12),
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
      backgroundColor: '#fff',
    },
    examPillText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    classRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(12),
    },
    classTrack: {
      gap: scale(3),
      padding: scale(3),
      backgroundColor: hairline(0.055),
      borderRadius: scale(99),
    },
    classThumb: {
      backgroundColor: '#fff',
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: hairline(0.13),
    },
    classPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
    },
    classPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    classPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    chaptersCount: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    subjectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      marginTop: verticalScale(16),
      minHeight: verticalScale(30),
    },
    subjectPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: hairline(0.14),
      backgroundColor: '#fff',
    },
    subjectPillActive: {
      borderWidth: 0,
      backgroundColor: colors.ink,
    },
    subjectPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    subjectPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.paper,
    },
    listWrap: {
      flex: 1,
      minHeight: 0,
      marginTop: verticalScale(24),
    },
    listContent: {
      paddingBottom: verticalScale(130),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(4),
    },
    rowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.1),
      borderStyle: 'dashed',
    },
    rowNumber: {
      width: scale(22),
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: '#C2BCAF',
    },
    rowTitleWrap: {
      flex: 1,
      minWidth: 0,
    },
    rowTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    topicsCount: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    // The same tag the Textbooks chapter list uses for a chapter that is not
    // written yet, so "not ready" looks the same wherever a student meets it.
    soon: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.quiet,
    },
    stateBlock: {
      marginTop: verticalScale(40),
      alignItems: 'center',
      paddingHorizontal: scale(12),
    },
    stateText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      textAlign: 'center',
    },
    retryButton: {
      height: verticalScale(40),
      paddingHorizontal: scale(18),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(14),
    },
    retryButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.paper,
    },
  });
}
