import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

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
  const params = useLocalSearchParams<{ subject?: string; subjectLabel?: string }>();
  const subjectQuery = params.subject ?? 'physics';
  const subjectLabel = params.subjectLabel ?? 'Physics';

  const [chapters, setChapters] = useState<CatalogueChapter[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

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
          setLoadError(err instanceof Error ? err.message : 'Could not load chapters.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [subjectQuery]);

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
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
            <ChevronLeftIcon size={scale(14)} />
          </Pressable>
          <Text style={styles.title}>Focus mode</Text>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Says "coming soon", not the bundle's "questions follow whatever
              you pick": /practice/next accepts no chapter parameter yet
              (confirmed against the live OpenAPI schema), so a picked chapter
              cannot change which question is served. Claiming otherwise is
              what made this read as broken on a real device — the student
              picks Rotational Motion, gets an unrelated question, and
              concludes the feature is bust. Honest copy until the backend
              lands it, and the same reason multi-select is on hold. */}
          <Text style={styles.subtitle}>{subjectLabel} · chapter focus is coming soon</Text>

          <View style={styles.modeList}>
            {MODES.map((mode) => {
              const on = pending.kind === 'mode' && pending.mode === mode.key;
              return (
                <Pressable
                  key={mode.key}
                  style={styles.modeRow}
                  onPress={() => setPending({ kind: 'mode', mode: mode.key })}>
                  <Text style={styles.rowLabel}>{mode.label}</Text>
                  <Radio on={on} shape="circle" scale={scale} />
                </Pressable>
              );
            })}
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or focus on one chapter</Text>
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
            <Text style={styles.chapterErrorText}>{loadError}</Text>
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
                      <Radio on={on} shape="square" scale={scale} />
                    </Pressable>
                  );
                })}
              </View>
            ))
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable style={styles.applyButton} onPress={applyFocus}>
            <Text style={styles.applyButtonText}>Apply focus</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

/**
 * The bundle draws two radios from one function: a circle for the modes and
 * a rounded square for the chapters, both filling marigold with a white tick
 * when they are on. The shape is the only thing that differs.
 */
function Radio({
  on,
  shape,
  scale,
}: {
  on: boolean;
  shape: 'circle' | 'square';
  scale: (n: number) => number;
}) {
  const size = scale(22);
  return (
    <View
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: shape === 'circle' ? size / 2 : scale(7),
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

function ChevronLeftIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M10 3 5 8l5 5"
        stroke={colors.ink}
        strokeWidth={1.9}
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
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
    },
    backButton: {
      width: scale(28),
      height: scale(28),
      marginLeft: scale(-6),
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(26),
      letterSpacing: scale(-0.65),
      lineHeight: scale(29),
      color: colors.ink,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(8),
    },
    subtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
    },
    modeList: {
      marginTop: verticalScale(14),
    },
    modeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(13),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,25,20,.1)',
    },
    rowLabel: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      color: colors.ink,
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(10),
      marginBottom: verticalScale(4),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(28,25,20,.1)',
    },
    dividerText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(13),
      color: colors.red,
      transform: [{ rotate: '-1deg' }],
    },
    classLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(11),
      letterSpacing: scale(1.54),
      textTransform: 'uppercase',
      color: colors.faint,
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
      fontFamily: 'AnekLatin_400Regular',
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
    applyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: '#241A08',
    },
    applyButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: '#FFF7E6',
    },
  });
}
