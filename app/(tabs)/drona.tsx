import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Skeleton, stagger } from '@/components/skeleton';
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

  const [subjectMenu, setSubjectMenu] = useState(false);
  const [classMenu, setClassMenu] = useState(false);

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
        {/* export-5a's header: the subject IS the heading, and both it and the
            class open a picker. The search bar goes -- with fourteen chapters
            at most, scanning beats typing, and it was taking a whole row. */}
        <View style={styles.headerWrap}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.push('/')}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Pressable
            style={styles.subjectPicker}
            hitSlop={8}
            onPress={() => setSubjectMenu((open) => !open)}>
            <Text style={styles.headerTitle}>{activeSubject}</Text>
            <View style={subjectMenu ? styles.chevronFlipped : undefined}>
              <ChevronDownIcon size={scale(15)} />
            </View>
          </Pressable>
          <Pressable
            style={styles.classPicker}
            hitSlop={8}
            onPress={() => setClassMenu((open) => !open)}>
            <Text style={styles.classPickerText}>{activeClass}</Text>
            <View style={classMenu ? styles.chevronFlipped : undefined}>
              <ChevronDownIcon size={scale(13)} />
            </View>
          </Pressable>
        </View>
        {subjectMenu && (
          <View style={[styles.menu, styles.subjectMenu]}>
            {subjects.map((name) => (
              <Pressable
                key={name}
                style={styles.menuRow}
                onPress={() => {
                  setActiveSubject(name);
                  setSubjectMenu(false);
                }}>
                <Text style={[styles.menuText, name === activeSubject && styles.menuTextOn]}>
                  {name}
                </Text>
                {name === activeSubject && <CheckIcon size={scale(14)} />}
              </Pressable>
            ))}
          </View>
        )}
        {classMenu && (
          <View style={[styles.menu, styles.classMenu]}>
            {CLASSES.map((name) => (
              <Pressable
                key={name}
                style={styles.menuRow}
                onPress={() => {
                  setActiveClass(name);
                  setClassMenu(false);
                }}>
                <Text style={[styles.menuText, name === activeClass && styles.menuTextOn]}>
                  {name}
                </Text>
                {name === activeClass && <CheckIcon size={scale(14)} />}
              </Pressable>
            ))}
          </View>
        )}

        </View>

        {(subjectMenu || classMenu) && (
          <Pressable
            style={styles.menuScrim}
            accessibilityLabel="Close menu"
            onPress={() => {
              setSubjectMenu(false);
              setClassMenu(false);
            }}
          />
        )}

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
                    <View style={styles.chapterTextBlock}>
                      <Text style={styles.chapterTitle}>{chapter.title}</Text>
                      {/* Under the name, not beside it. Inline it took 71pt off
                          the title and pushed most names onto a second line;
                          below, the title gets the full 282pt and 96% of all
                          104 chapter names fit on one. */}
                      <Text style={styles.chapterMeta}>{chapter.topicCount} topics</Text>
                    </View>
                    <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
                      <Path
                        d="M6 3.5 10.5 8 6 12.5"
                        stroke={colors.quiet}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
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

function ChevronDownIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="m4 6 4 4 4-4" stroke={colors.ink} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function CheckIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 13l4 4L19 7" stroke={colors.ink} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
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

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    headerWrap: {
      position: 'relative',
      // Above the scrim, so the subject stays readable and a second tap on it
      // closes the menu.
      zIndex: 10,
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
    // export-5a: the subject IS the heading, at the 28/700 Doubts and Notes use.
    headerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(28),
      letterSpacing: scale(-0.78),
      lineHeight: scale(29.4),
      color: colors.ink,
    },
    subjectPicker: { flex: 1, minWidth: 0, flexDirection: 'row', alignItems: 'center', gap: scale(8) },
    classPicker: { flexShrink: 0, flexDirection: 'row', alignItems: 'center', gap: scale(5) },
    classPickerText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14), color: colors.ink },
    chevronFlipped: { transform: [{ rotate: '180deg' }] },
    menuScrim: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(28,25,20,.12)',
      zIndex: 5,
    },
    menu: {
      position: 'absolute',
      top: '100%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,25,20,.12)',
      borderRadius: scale(16),
      padding: scale(6),
      zIndex: 9,
      shadowColor: colors.ink,
      shadowOpacity: 0.22,
      shadowRadius: scale(20),
      shadowOffset: { width: 0, height: verticalScale(12) },
      elevation: 8,
    },
    subjectMenu: { left: scale(68), width: scale(190) },
    classMenu: { right: scale(24), width: scale(150) },
    menuRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(12),
      borderRadius: scale(11),
    },
    menuText: { flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: scale(15), color: colors.ink },
    menuTextOn: { fontFamily: 'Onest_700Bold' },
    listWrap: {
      flex: 1,
      minHeight: 0,
      marginTop: verticalScale(28),
      marginHorizontal: scale(24),
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
      // Clears the fade mask, so the last chapter can be read and tapped.
      paddingBottom: scale(56),
    },
    /**
     * The textbook chapter row, verbatim -- app/textbook-chapters.tsx's `row`,
     * `rowNumber` and `rowTitle`. These are the same chapters two taps apart
     * and they were drawn as different objects: a bordered card with a Kalam
     * numeral here, a flat hairline row with a right-aligned Medium numeral
     * there.
     */
    /**
     * The textbook chapter row, carrying one thing textbooks does not: a topic
     * count. That second line is real weight, so the type comes down to pay
     * for it -- 15 rather than 17 on the name, 13 rather than 16 on the
     * numeral. Measured: at 15, 100 of 104 chapter names fit one line; at 17
     * it was 94, and the wrapped ones are what made the list feel heavy.
     */
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.07)',
    },
    chapterNumber: {
      width: scale(24),
      textAlign: 'right',
      // Sits on the title's line rather than between the two, so the numeral
      // reads as belonging to the name and not to the block.
      alignSelf: 'flex-start',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      lineHeight: scale(20),
      color: colors.quiet,
    },
    chapterTextBlock: {
      flex: 1,
      minWidth: 0,
      gap: verticalScale(1),
    },
    chapterTitle: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      lineHeight: scale(20),
      color: colors.ink,
    },
    chapterMeta: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(16),
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
