import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { StateLine } from '@/components/states';
import { friendlyError } from '@/lib/api';
import { ObButton } from '@/components/onboarding-kit';
import { SettingsHeader } from '@/components/settings-page';
import { Skeleton, stagger } from '@/components/skeleton';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueChapter, getCatalogue } from '@/lib/drona';
import { normalizePracticeSubject, usePracticeFocus } from '@/lib/practice-focus-context';

/**
 * Focus mode, built to the practice-redesign bundle.
 *
 * A full screen that slides in from the right, not the bottom sheet this
 * used to be: flat rows on hairlines rather than bordered cards, a radio at
 * the end of each row, and one Apply that commits whatever is selected.
 *
 * Selecting no longer closes the screen. In the bundle a mode and a chapter
 * both only stage a choice — `Apply focus` is the single commit — so a
 * student can look down the list, change their mind, and leave without
 * having already changed anything.
 *
 * Modes render as label-only here because that is all the bundle's markup
 * renders; it computes a `sub` line for each and never prints it, the same
 * way it computes an answer explanation it never prints.
 */
type PendingMode = 'mixed' | 'weak';
type Pending = { kind: 'mode'; mode: PendingMode } | { kind: 'chapter'; id: string };

const MODES: { key: PendingMode; label: string }[] = [
  { key: 'mixed', label: 'All chapters' },
  { key: 'weak', label: 'Weak areas first' },
];

export default function PracticeFocusScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { focus, setFocus } = usePracticeFocus();
  const params = useLocalSearchParams<{ subject?: string }>();
  const subjectQuery = params.subject ?? 'physics';

  const [chapters, setChapters] = useState<CatalogueChapter[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  /** Bumped by Try again, which re-runs the load below. */
  const [attempt, setAttempt] = useState(0);

  const appliedChapterId =
    focus.mode === 'chapter' && focus.subject === subjectQuery ? focus.chapterId : null;

  /** One selection, staged. Modes and chapters are mutually exclusive, so
   *  picking either clears the other rather than leaving two things lit. */
  const [pending, setPending] = useState<Pending>(() =>
    appliedChapterId
      ? { kind: 'chapter', id: appliedChapterId }
      : { kind: 'mode', mode: focus.mode === 'weak' ? 'weak' : 'mixed' }
  );

  /**
   * Chapters grouped by class, the way the redesign lists them -- a flat run
   * of twenty-odd names has no landmark to scroll against.
   *
   * A null `class_level` means the chapter belongs to both classes (the same
   * reading every other screen takes), so those sit in a leading untitled
   * group rather than being claimed by one class or printed twice.
   */
  const chapterGroups = useMemo(() => {
    if (!chapters) return null;
    const of = (level: number | null) =>
      chapters.filter((c) => (level === null ? c.class_level == null : c.class_level === level));
    return [
      { key: 'both', label: null, items: of(null) },
      { key: 'c11', label: 'Class 11', items: of(11) },
      { key: 'c12', label: 'Class 12', items: of(12) },
    ].filter((g) => g.items.length > 0);
  }, [chapters]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getCatalogue()
      .then((data) => {
        if (cancelled) return;
        const wanted = normalizePracticeSubject(subjectQuery);
        const subjectGroup = data.find((s) => normalizePracticeSubject(s.subject) === wanted);
        setChapters(subjectGroup?.chapters ?? []);
      })
      .catch((err) => {
        if (!cancelled)
          setLoadError(friendlyError(err, 'load the chapters'));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [subjectQuery, attempt]);

  /** A mode is always applicable; a chapter needs the list it is looked up in. */
  const canApply = pending.kind === 'mode' || !!chapters;

  const applyFocus = () => {
    if (pending.kind === 'mode') {
      setFocus({ mode: pending.mode, subject: null, chapterId: null, chapterName: null });
      router.back();
      return;
    }
    const chapter = chapters?.find((c) => c.id === pending.id);
    if (!chapter) return;
    setFocus({
      mode: 'chapter',
      subject: subjectQuery,
      chapterId: chapter.id,
      chapterName: chapter.name,
    });
    router.back();
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* The app's back-and-title header, as on Exam scope and Settings. */}
        <SettingsHeader title="Focus mode" />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* This said "coming soon" while /practice/next accepted no chapter
              parameter — a picked chapter could not change which question was
              served, and claiming otherwise is what made the feature read as
              broken: pick Rotational Motion, get an unrelated question,
              conclude it is bust. The endpoint takes `chapter_id` now and
              `app/practice.tsx` sends it, so the promise is real and the copy
              can make it. Still ONE chapter: the parameter is singular, so
              multi-select remains on hold rather than silently honouring the
              first pick. */}
          {/* No subject name: the student came here from that subject's
              Practice, and the chapters below already belong to it. */}
          <Text style={styles.subtitle}>
            Practise every chapter, your weak areas first, or just one chapter.
          </Text>

          <View style={styles.modeList}>
            {MODES.map((mode) => {
              const on = pending.kind === 'mode' && pending.mode === mode.key;
              return (
                <Pressable
                  key={mode.key}
                  style={styles.modeRow}
                  onPress={() => setPending({ kind: 'mode', mode: mode.key })}>
                  <Text style={styles.rowLabel}>{mode.label}</Text>
                  <Radio on={on} scale={scale} />
                </Pressable>
              );
            })}
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or one chapter</Text>
            <View style={styles.dividerLine} />
          </View>

          {loading ? (
            <View>
              {Array.from({ length: 6 }, (_, i) => (
                <View key={i} style={styles.chapterRow}>
                  <Skeleton delay={stagger(i)} style={styles.skeletonChapter} />
                </View>
              ))}
            </View>
          ) : loadError ? (
            <StateLine
              glyph="offline"
              text={loadError}
              link={{ label: 'Try again', onPress: () => setAttempt((n) => n + 1) }}
            />
          ) : !chapterGroups?.length ? (
            // Nothing to focus on: said, rather than an empty space under
            // "or focus on one chapter".
            <StateLine glyph="book" text="No chapters to focus on in this subject yet." />
          ) : (
            chapterGroups?.map((group) => (
              <View key={group.key}>
                {group.label && <Text style={styles.classLabel}>{group.label}</Text>}
                {group.items.map((chapter) => {
                  const on = pending.kind === 'chapter' && pending.id === chapter.id;
                  return (
                    <Pressable
                      key={chapter.id}
                      style={styles.chapterRow}
                      onPress={() => setPending({ kind: 'chapter', id: chapter.id })}>
                      <Text style={styles.rowLabel}>{chapter.name}</Text>
                      <Radio on={on} scale={scale} />
                    </Pressable>
                  );
                })}
              </View>
            ))
          )}
        </ScrollView>

        <View style={styles.footer}>
          {/* `pending` is seeded to the applied chapter on mount, while
              `chapters` is still null — and applyFocus bails out when it
              cannot find the chapter. Tapping Apply in that window was a
              total no-op: no feedback, no navigation, no error. It now looks
              refused, and takes a press when it isn't. */}
          {/* The app's own key (ObButton), not a one-off dark pill. */}
          <ObButton label="Apply focus" disabled={!canApply} onPress={applyFocus} />
        </View>
      </SafeAreaView>
    </View>
  );
}

/**
 * One radio for every row. It used to be a circle for the modes and a square
 * for the chapters, but it is one choice from the whole list (picking either
 * clears the other), and a square reads as "tick as many as you like".
 */
function Radio({ on, scale }: { on: boolean; scale: (n: number) => number }) {
  const size = scale(22);
  return (
    <View
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: on ? colors.marigold : '#fff',
        borderWidth: scale(1.5),
        borderColor: on ? colors.marigold : 'rgba(28,25,20,.2)',
      }}>
      {on && (
        <Svg viewBox="0 0 24 24" width={scale(11)} height={scale(11)} fill="none">
          <Path
            d="M5 13l4 4L19 7"
            stroke="#fff"
            strokeWidth={3.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}
    </View>
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
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(8),
    },
    subtitle: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    modeList: {
      marginTop: verticalScale(14),
    },
    modeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,25,20,.08)',
    },
    rowLabel: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(20),
      marginBottom: verticalScale(4),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(28,25,20,.1)',
    },
    /* Home's overline, not the red pen: red is the wrong-answer mark. */
    dividerText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    classLabel: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.amberText,
      marginTop: verticalScale(28),
      marginBottom: verticalScale(6),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,25,20,.08)',
    },
    skeletonChapter: {
      flex: 1,
      height: verticalScale(18),
      borderRadius: scale(6),
    },
    chapterErrorText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      paddingVertical: verticalScale(16),
      textAlign: 'center',
    },
    footer: {
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(22),
      paddingHorizontal: scale(24),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,25,20,.08)',
      backgroundColor: '#fff',
    },
  });
}
