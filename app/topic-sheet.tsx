import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { Skeleton, stagger } from '@/components/skeleton';
import { BloomFace } from '@/components/gradient-select';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';

// Matched to practice-focus.tsx, the app's other bottom sheet — a flick
// dismisses even if the sheet barely moved, so a quick swipe down doesn't need
// a full quarter-height drag to register.


/** export-6c's split: at or under this, a name is a pill; over it, a row. */
const PILL_MAX_CHARS = 26;

export default function TopicSheetScreen() {
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterNumber?: string;
    chapterTitle?: string;
    subject?: string;
    classLabel?: string;
  }>();
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selected, setSelected] = useState<string | null>(null);

  const select = useCallback((topic: string) => {
    setSelected(topic);
  }, []);

  const chapterId = params.chapterId;
  const chapterTitle = params.chapterTitle ?? 'Current Electricity';

  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getCatalogue()
      .then((data) => {
        if (!cancelled) setCatalogue(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : 'Could not load topics.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  // chapterId is matched across every subject's chapters, not just the one
  // named by the subject param — the two aren't guaranteed to agree.
  const chapter = useMemo(() => {
    if (!catalogue) return null;
    for (const subj of catalogue) {
      const found = subj.chapters.find((c) => c.id === chapterId);
      if (found) return found;
    }
    return null;
  }, [catalogue, chapterId]);

  const topics = useMemo(() => chapter?.subtopics.map((s) => s.name) ?? [], [chapter]);

  // Whatever the student taps/free-talks reaches the real backend: it's
  // forwarded as the scoping conversation's opening line in entering-classroom.
  // `replace`, not `push`: this screen is a transparentModal, so pushing left
  // it sitting in the stack underneath the whole class. Nothing showed while
  // the opaque classroom covered it, but the moment the class ended and the
  // summary animated in, this sheet was what showed through behind it for
  // about a second. Replacing takes the sheet out of the stack on the way in.
  const goToClassroom = (initialUtterance?: string) =>
    router.replace({
      pathname: '/entering-classroom',
      params: { chapterId: chapterId ?? '', chapterTitle, initialUtterance: initialUtterance ?? '' },
    });

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        {/* A page now, not a sheet over the chapter list: no scrim, no handle,
            no drag-to-dismiss. The chapter name is the heading, and the back
            button is the way out. */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {chapterTitle}
          </Text>
        </View>

          <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
            {loading ? (
              // Six cards in the same two-up grid the topics land in.
              <View style={styles.grid}>
                {Array.from({ length: 6 }, (_, i) => (
                  <View key={i} style={styles.topicCard}>
                    <Skeleton delay={stagger(i)} style={styles.skeletonTopic} />
                  </View>
                ))}
              </View>
            ) : loadError ? (
              <View style={styles.stateBlock}>
                <Text style={styles.stateText}>{loadError}</Text>
                <Pressable onPress={() => setReloadToken((n) => n + 1)}>
                  <Text style={styles.retryText}>Try again</Text>
                </Pressable>
              </View>
            ) : topics.length > 0 ? (
              /* Adaptive, per export-6c: a short name is a pill and several
                 share a line; a long one takes the row to itself. Measured
                 across all 648 topic names in the catalogue, the split at 26
                 characters is what keeps the pills to one line each. */
              <View style={styles.grid}>
                {topics.map((topic) => {
                  const isSelected = selected === topic;
                  const wide = topic.length > PILL_MAX_CHARS;
                  if (isSelected) {
                    return (
                      <Pressable
                        key={topic}
                        onPress={() => select(topic)}
                        style={wide ? styles.rowOuterSelected : styles.pillOuterSelected}>
                        {/* No rotating sweep here. On a grid of eleven pills a
                            turning line drew the eye away from the name it was
                            marking; the bloom carries the selection on its own,
                            turned up to compensate, inside a marigold edge. */}
                        <BloomFace
                          style={wide ? styles.rowFace : styles.pillFace}
                          direction="bottom"
                          strength={2.1}>
                          <Text style={styles.topicText}>{topic}</Text>
                        </BloomFace>
                      </Pressable>
                    );
                  }
                  return (
                    <Pressable
                      key={topic}
                      onPress={() => select(topic)}
                      style={wide ? styles.rowIdle : styles.pillIdle}>
                      <Text style={styles.topicText}>{topic}</Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : (
              <View style={styles.stateBlock}>
                <Text style={styles.stateText}>No specific topics listed for this chapter yet.</Text>
              </View>
            )}

            <Pressable style={styles.freetalkRow} onPress={() => goToClassroom()}>
              <MicIcon size={scale(15)} />
              <Text style={styles.freetalkText}>
                Can&apos;t find your topic? <Text style={styles.freetalkBold}>Just start talking</Text>
              </Text>
              <ArrowRightIcon color={colors.faint} size={scale(13)} />
            </Pressable>

          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              style={[styles.cta, !selected && styles.ctaDisabled]}
              disabled={!selected}
              onPress={() => goToClassroom(selected ?? undefined)}>
              {/* Static, per export-6c. It used to read "Start with <topic>",
                  and real subtopic names run long enough ("Electric Current,
                  Ohm's Law & Drift Velocity") that the label had to be
                  ellipsised to keep the arrow on screen. */}
              <Text style={[styles.ctaText, !selected && styles.ctaTextDisabled]}>
                Start learning
              </Text>
              {selected && <ArrowRightIcon color={colors.paper} size={scale(15)} />}
            </Pressable>
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
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MicIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z"
        stroke={colors.slate}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke={colors.slate}
        strokeWidth={2}
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
      paddingHorizontal: scale(20),
    },
    flex: {
      flex: 1,
    },
    // A generous grab target — the handle alone is 5pt tall, which is not
// something a thumb can reliably catch.
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(16),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      flexShrink: 0,
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: colors.hairline,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(20),
      letterSpacing: scale(-0.4),
      color: colors.ink,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
      paddingTop: verticalScale(4),
    },
    // --- short name: a pill, several to a line ---
    pillIdle: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    pillOuterSelected: {
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: colors.marigold,
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    /** Identical padding to `pillIdle`, so selecting never resizes a pill and
     *  the row cannot re-flow under the tap. */
    pillFace: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      overflow: 'hidden',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // --- long name: the row to itself ---
    rowIdle: {
      width: '100%',
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(14),
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    rowOuterSelected: {
      width: '100%',
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: colors.marigold,
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    rowFace: {
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(14),
      borderRadius: scale(14),
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    topicText: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      lineHeight: scale(19),
      color: colors.ink,
    },
    stateBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(8),
      minHeight: verticalScale(120),
      marginTop: verticalScale(16),
    },
    stateText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    retryText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.marigold,
    },
    // One line of text, centred in the card the topic will fill.
    skeletonTopic: {
      width: '76%',
      height: verticalScale(12),
    },
    topicCard: {
      flexBasis: '48%',
      flexGrow: 1,
      minHeight: verticalScale(58),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.2)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    freetalkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(2),
      marginTop: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    freetalkText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
    },
    freetalkBold: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(238,163,31,.6)',
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(10),
      backgroundColor: '#fff',
    },
    cta: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(52),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    ctaDisabled: {
      backgroundColor: 'rgba(28,26,22,.07)',
      shadowOpacity: 0,
      elevation: 0,
    },
    ctaText: {
      // Shrinks rather than overflowing when the topic name is long; the
      // arrow beside it keeps its space instead of being pushed out.
      flexShrink: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
    ctaTextDisabled: {
      color: colors.faint,
    },
  });
}
