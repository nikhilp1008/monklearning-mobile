import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { Skeleton, stagger } from '@/components/skeleton';
import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, examSubjects, getCatalogue } from '@/lib/drona';
import { getProfile } from '@/lib/profile';

const CLASSES = ['Class 11', 'Class 12'] as const;
/**
 * Tabs follow the student's exam, they are not a fixed three.
 *
 * `getCatalogue()` filters mathematics out for a NEET student and returns
 * biology instead. This list used to be hardcoded PCM, so a NEET student got a
 * "Maths" tab whose lookup could only ever return an empty array — no error,
 * no explanation — while biology sat in the payload with no tab to show it.
 */
const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

const CLASS_LEVEL: Record<(typeof CLASSES)[number], number> = {
  'Class 11': 11,
  'Class 12': 12,
};

// The catalogue's own subject names (e.g. "Mathematics") don't always match
// the compact tab labels — normalize both sides before comparing.
function normalizeSubject(name: string) {
  const n = name.trim().toLowerCase();
  if (n === 'maths' || n === 'math') return 'mathematics';
  return n;
}

export default function ChapterSelectorScreen() {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeClass, setActiveClass] = useState<(typeof CLASSES)[number]>('Class 12');
  const [subjects, setSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Maths']);
  const [activeSubject, setActiveSubject] = useState<string>('Physics');

  // The exam decides the tabs. Physics and Chemistry are in every exam, so the
  // initial guess above is never wrong for the first two — only the third tab
  // changes, and it settles before the catalogue finishes loading.
  useEffect(() => {
    let cancelled = false;
    getProfile().then(({ exam }) => {
      if (cancelled) return;
      const next = examSubjects(exam).map((k) => SUBJECT_LABEL[k] ?? k);
      setSubjects(next);
      // Guard against a stranded tab: a student who switches exam would
      // otherwise keep a selection that no longer exists.
      setActiveSubject((current) => (next.includes(current) ? current : next[0]));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const listRef = useRef<ScrollView>(null);

  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getCatalogue()
      .then((data) => {
        if (!cancelled) setCatalogue(data);
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err instanceof Error ? err.message : 'Could not load the syllabus.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // A shorter list can leave you stranded past its end, so every switch
  // starts at chapter one.
  useEffect(() => {
    listRef.current?.scrollTo({ y: 0, animated: false });
  }, [activeClass, activeSubject]);

  const chapters = useMemo(() => {
    if (!catalogue) return [];
    const wanted = normalizeSubject(activeSubject);
    const subjectGroup = catalogue.find((s) => normalizeSubject(s.subject) === wanted);
    if (!subjectGroup) return [];
    return subjectGroup.chapters
      .filter((c) => c.class_level === CLASS_LEVEL[activeClass])
      .map((c, index) => ({
        number: String(index + 1).padStart(2, '0'),
        title: c.name,
        topicCount: c.subtopics.length,
        chapterId: c.id,
      }));
  }, [catalogue, activeClass, activeSubject]);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.push('/')}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <View style={styles.headerTextBlock}>
            <Text style={styles.headerTitle}>What are we learning?</Text>
          </View>
        </View>

        <View style={styles.tabsRow}>
          <SlidingToggle
            options={CLASSES}
            value={activeClass}
            onChange={setActiveClass}
            trackStyle={styles.classToggle}
            thumbStyle={styles.classThumb}
            pillStyle={styles.classPill}
            textStyle={styles.classPillText}
            textActiveStyle={styles.classPillTextActive}
          />
          {/* Same slider as the class capsule, anchored to the baseline so the
              marigold rule travels between subjects instead of jumping. */}
          <SlidingToggle
            options={subjects}
            value={activeSubject}
            onChange={setActiveSubject}
            thumbAnchor="bottom"
            trackStyle={styles.subjectTabs}
            rowStyle={styles.subjectRow}
            thumbStyle={styles.subjectUnderline}
            pillStyle={styles.subjectPill}
            textStyle={styles.subjectTab}
            textActiveStyle={styles.subjectTabActive}
          />
        </View>

        <View style={styles.searchBar}>
          <SearchIcon size={scale(15)} />
          <Text style={styles.searchPlaceholder}>Search a chapter…</Text>
          <Text style={styles.searchCount}>{chapters.length} chapters</Text>
        </View>

        <View style={styles.listWrap}>
          {loading ? (
            // Eight rows is what fits above the fold, so the list arrives into
            // the shape it was already occupying.
            <View style={styles.listContent}>
              {Array.from({ length: 8 }, (_, i) => (
                <View key={i} style={styles.chapterRow}>
                  <Skeleton delay={stagger(i)} style={styles.skeletonNumber} />
                  <Skeleton delay={stagger(i)} style={styles.skeletonTitle} />
                  <Skeleton delay={stagger(i)} style={styles.skeletonMeta} />
                </View>
              ))}
            </View>
          ) : loadError ? (
            <View style={styles.loadingBlock}>
              <Text style={styles.errorText}>{loadError}</Text>
            </View>
          ) : chapters.length === 0 ? (
            <View style={styles.loadingBlock}>
              <Text style={styles.errorText}>No {activeSubject} chapters for {activeClass} yet.</Text>
            </View>
          ) : (
            <>
              <ScrollView
                ref={listRef}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}>
                {chapters.map((chapter) => (
                  <Pressable
                    key={chapter.chapterId}
                    onPress={() =>
                      router.push({
                        pathname: '/topic-sheet',
                        params: {
                          chapterId: chapter.chapterId,
                          chapterNumber: chapter.number,
                          chapterTitle: chapter.title,
                          subject: activeSubject,
                          classLabel: activeClass,
                        },
                      })
                    }
                    style={styles.chapterRow}>
                    <Text style={styles.chapterNumber}>{chapter.number}</Text>
                    <Text style={styles.chapterTitle}>{chapter.title}</Text>
                    <Text style={styles.chapterMeta}>{chapter.topicCount} topics →</Text>
                  </Pressable>
                ))}
              </ScrollView>
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                style={styles.fadeMask}
                pointerEvents="none"
              />
            </>
          )}
        </View>

        {/* The tab bar floats over this screen, so the hint has to be lifted
            clear of it by hand — it was sitting underneath and never seen. */}
        <View style={[styles.footer, { paddingBottom: verticalScale(66) + insets.bottom }]}>
          <Text style={styles.footerHint}>Tap a chapter to pick a topic</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 5l-7 7 7 7"
        stroke={colors.ink}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SearchIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={11} cy={11} r={7} stroke={colors.faint} strokeWidth={2} />
      <Path d="m20 20-3.2-3.2" stroke={colors.faint} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      flexShrink: 0,
      borderRadius: scale(18),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: colors.hairline,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    headerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.38),
      color: colors.ink,
    },
    tabsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(10),
      paddingTop: verticalScale(16),
      paddingHorizontal: scale(20),
    },
    classToggle: {
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    classThumb: {
      backgroundColor: '#fff',
      borderRadius: scale(99),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(6),
      elevation: 2,
    },
    classPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
    },
    classPillText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    classPillTextActive: {
      color: colors.ink,
    },
    subjectTabs: {
      flexShrink: 1,
    },
    subjectRow: {
      gap: scale(14),
    },
    subjectPill: {
      paddingBottom: verticalScale(5),
    },
    subjectUnderline: {
      height: 2,
      borderRadius: 1,
      backgroundColor: colors.marigold,
    },
    subjectTab: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.faint,
    },
    subjectTabActive: {
      color: colors.ink,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(15),
      marginTop: verticalScale(14),
      marginHorizontal: scale(20),
    },
    searchPlaceholder: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.faint,
    },
    searchCount: {
      flexShrink: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    listWrap: {
      flex: 1,
      minHeight: 0,
      marginTop: verticalScale(14),
      marginHorizontal: scale(20),
      position: 'relative',
    },
    loadingBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: verticalScale(40),
    },
    errorText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    list: {
      flex: 1,
    },
    listContent: {
      flexDirection: 'column',
      gap: verticalScale(7),
      // Clears the fade mask, so the last chapter can be read and tapped.
      paddingBottom: scale(56),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.2)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    chapterNumber: {
      width: scale(20),
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: '#C2BCAF',
    },
    chapterTitle: {
      flex: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    chapterMeta: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    // Sized to the row's real parts: the number, the title, the topic count.
    skeletonNumber: {
      width: scale(16),
      height: verticalScale(10),
    },
    skeletonTitle: {
      flex: 1,
      height: verticalScale(12),
    },
    skeletonMeta: {
      width: scale(52),
      height: verticalScale(10),
    },
    fadeMask: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: scale(56),
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      alignItems: 'center',
    },
    footerHint: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      color: colors.faint,
    },
  });
}
