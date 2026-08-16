import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';

const CLASSES = ['Class 11', 'Class 12'] as const;
const SUBJECTS = ['Physics', 'Chemistry', 'Maths'] as const;

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
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeClass, setActiveClass] = useState<(typeof CLASSES)[number]>('Class 12');
  const [activeSubject, setActiveSubject] = useState<(typeof SUBJECTS)[number]>('Physics');

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
            <Text style={styles.headerOverline}>Learn with Drona</Text>
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
          <View style={styles.subjectTabs}>
            {SUBJECTS.map((subject) => (
              <Pressable key={subject} onPress={() => setActiveSubject(subject)}>
                <Text
                  style={[
                    styles.subjectTab,
                    activeSubject === subject && styles.subjectTabActive,
                  ]}>
                  {subject}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.searchBar}>
          <SearchIcon size={scale(15)} />
          <Text style={styles.searchPlaceholder}>Search a chapter…</Text>
          <Text style={styles.searchCount}>{chapters.length} chapters</Text>
        </View>

        <View style={styles.listWrap}>
          {loading ? (
            <View style={styles.loadingBlock}>
              <ActivityIndicator color={colors.ink} />
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
              <View style={styles.list}>
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
              </View>
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                style={styles.fadeMask}
                pointerEvents="none"
              />
            </>
          )}
        </View>

        <View style={styles.footer}>
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
    headerOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    classPillTextActive: {
      color: colors.ink,
    },
    subjectTabs: {
      flexDirection: 'row',
      gap: scale(14),
    },
    subjectTab: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.faint,
      paddingBottom: verticalScale(3),
    },
    subjectTabActive: {
      color: colors.ink,
      borderBottomWidth: 2,
      borderBottomColor: colors.marigold,
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
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.faint,
    },
    searchCount: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_600SemiBold',
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
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    list: {
      flex: 1,
      flexDirection: 'column',
      gap: verticalScale(7),
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    chapterMeta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
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
      paddingBottom: verticalScale(10),
      paddingHorizontal: scale(20),
      alignItems: 'center',
    },
    footerHint: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: colors.faint,
    },
  });
}
