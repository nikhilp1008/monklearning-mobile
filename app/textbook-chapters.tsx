import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { friendlyLoadError } from '@/lib/api';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';
import { isChapterReady } from '@/lib/textbooks';
import { SlidingToggle } from '@/components/sliding-toggle';
import { SUBJECT_TILES } from '@/components/textbook/subjects';
import { kicker } from '@/components/textbook/theme';

/**
 * Pick a chapter inside one subject.
 *
 * Chapters come from `/drona/catalogue`, the same list Learn with Drona uses
 * and already narrowed to the student's exam server-side. The handoff ships
 * its own hardcoded NCERT lists; using those would have meant two syllabuses
 * in one product, drifting apart the first time either changed, and a student
 * being offered a textbook for a chapter Learn does not have.
 *
 * Only chapters with written content open. The rest are listed rather than
 * hidden, marked SOON, because a syllabus with holes in it is more useful than
 * a short list that looks complete.
 */
const CLASSES = ['Class 11', 'Class 12'] as const;
type ClassOption = (typeof CLASSES)[number];
const CLASS_LEVEL: Record<ClassOption, number> = { 'Class 11': 11, 'Class 12': 12 };

export default function TextbookChaptersScreen() {
  const params = useLocalSearchParams<{ subject?: string }>();
  const subject = (params.subject ?? 'mathematics').toLowerCase();
  const tile = SUBJECT_TILES[subject];

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [activeClass, setActiveClass] = useState<ClassOption>('Class 11');
  const classLevel = CLASS_LEVEL[activeClass];
  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getCatalogue()
      .then((data) => {
        if (!cancelled) setCatalogue(data);
      })
      .catch((err) => {
        if (!cancelled) setError(friendlyLoadError(err, 'chapters'));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const chapters = useMemo(() => {
    const group = (catalogue ?? []).find((s) => s.subject.trim().toLowerCase() === subject);
    return (group?.chapters ?? []).filter((c) => (c.class_level ?? 11) === classLevel);
  }, [catalogue, subject, classLevel]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.bar}>
          <Pressable onPress={() => router.back()} hitSlop={10} style={styles.back}>
            <Svg viewBox="0 0 16 16" width={scale(16)} height={scale(16)} fill="none">
              <Path
                d="M10 3.5 5.5 8 10 12.5"
                stroke={colors.ink}
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>

          {/* The same control Learn with Drona's chapter picker uses, not a
              lookalike: measured pills, a spring-driven thumb, and the app's
              own track and shadow. A hand-rolled copy sat here first and read
              as a different app the moment it moved. */}
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
        </View>

        <Text style={styles.title}>{tile?.label ?? 'Textbooks'}</Text>

        {error ? (
          <View style={styles.state}>
            <Text style={styles.stateText}>{error}</Text>
          </View>
        ) : !catalogue ? (
          <View style={styles.state}>
            <ActivityIndicator color={colors.faint} />
          </View>
        ) : chapters.length === 0 ? (
          <View style={styles.state}>
            <Text style={styles.stateText}>No chapters here yet.</Text>
          </View>
        ) : (
          <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
            {chapters.map((chapter, index) => {
              const ready = isChapterReady(subject, classLevel, chapter.name);
              return (
                <Animated.View key={chapter.id} entering={FadeInDown.delay(index * 26).duration(320)}>
                  <Pressable
                    disabled={!ready}
                    onPress={() =>
                      router.push({
                        pathname: '/textbook-reader',
                        params: {
                          subject,
                          classLevel: String(classLevel),
                          title: chapter.name,
                          // The reader prints whatever number this list showed.
                          // The content file carries its own NCERT number, and
                          // the two disagree: our corpus opens Class 11 Maths
                          // with Basic Mathematics, so Sets is chapter 2 here
                          // and "01" in the file. Two numbers for one chapter,
                          // one screen apart, is the sort of thing a student
                          // notices and cannot explain.
                          number: String(index + 1).padStart(2, '0'),
                        },
                      })
                    }
                    style={({ pressed }) => [
                      styles.row,
                      !ready && styles.rowSoon,
                      pressed && ready && styles.rowPressed,
                    ]}>
                    <Text style={styles.rowNumber}>{index + 1}</Text>
                    <Text style={styles.rowTitle}>{chapter.name}</Text>
                    {/* No READY badge, and no bold either. A written chapter
                        is already the only one at full opacity, with a chevron
                        and a live press state, next to rows that are dimmed and
                        inert. Bold was a fourth signal saying what three had
                        said, and with most of the list now written it made the
                        page shout. SOON stays: that one is doing real work,
                        explaining why a row cannot be opened. */}
                    {ready ? (
                      <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
                        <Path
                          d="M6 3.5 10.5 8 6 12.5"
                          stroke={colors.amberText}
                          strokeWidth={1.9}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    ) : (
                      <Text style={styles.soonText}>Soon</Text>
                    )}
                  </Pressable>
                </Animated.View>
              );
            })}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    // '#fff', like every other screen in this app (Home, Progress, Library,
    // Learn, Practice all set it literally). `colors.paper` is a warm
    // off-white and reads as a different page beside them.
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(10),
    },
    back: {
      width: scale(44),
      height: scale(44),
      alignItems: 'flex-start',
      justifyContent: 'center',
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
    classPillTextActive: { color: colors.ink },
    title: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(33),
      letterSpacing: scale(-0.99),
      color: colors.ink,
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(16),
    },
    list: { flex: 1, borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.12)' },
    listContent: { paddingBottom: verticalScale(28) },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(16),
      paddingVertical: verticalScale(15.5),
      paddingHorizontal: scale(24),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.07)',
    },
    rowSoon: { opacity: 0.5 },
    rowPressed: { backgroundColor: colors.tint },
    rowNumber: {
      width: scale(26),
      textAlign: 'right',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      color: colors.quiet,
    },
    rowTitle: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(17),
      color: colors.ink,
    },
    soonText: {
      ...kicker(scale, 9.5),
      color: colors.quiet,
    },
    state: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: scale(24) },
    stateText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.slate,
      textAlign: 'center',
    },
  });
}
