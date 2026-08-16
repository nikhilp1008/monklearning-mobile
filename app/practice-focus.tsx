import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WashSelectRow } from '@/components/wash-select-row';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueChapter, getCatalogue } from '@/lib/drona';
import { normalizePracticeSubject, usePracticeFocus } from '@/lib/practice-focus-context';

// A flick counts as a dismiss even if the sheet barely moved — matches the
// "stuck" complaint, where a quick swipe should feel responsive rather than
// requiring a full quarter-height drag every time.
const DISMISS_VELOCITY = 900;
const DISMISS_DISTANCE_RATIO = 0.25;
const DISMISS_ANIMATION_DURATION = 220;

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

  const appliedChapterId = focus.mode === 'chapter' && focus.subject === subjectQuery ? focus.chapterId : null;
  const [pendingChapterId, setPendingChapterId] = useState<string | null>(appliedChapterId);
  const [playToken, setPlayToken] = useState(0);

  const translateY = useSharedValue(0);
  // Populated from the sheet's own onLayout — content (chapter count, error
  // vs. loaded state) changes its rendered height, so a fixed constant would
  // make the dismiss threshold wrong for most states. Falls back to a
  // reasonable guess for the brief window before the first layout pass.
  const sheetHeight = useSharedValue(verticalScale(420));

  const closeSheet = () => router.back();

  const dragGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd((event) => {
      const pastDistance = translateY.value > sheetHeight.value * DISMISS_DISTANCE_RATIO;
      const flicked = event.velocityY > DISMISS_VELOCITY;
      if (pastDistance || flicked) {
        translateY.value = withTiming(
          sheetHeight.value,
          { duration: DISMISS_ANIMATION_DURATION, easing: Easing.in(Easing.cubic) },
          (finished) => {
            if (finished) runOnJS(closeSheet)();
          }
        );
      } else {
        translateY.value = withSpring(0, { damping: 22, stiffness: 280 });
      }
    });

  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

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
        if (!cancelled) setLoadError(err instanceof Error ? err.message : 'Could not load chapters.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [subjectQuery]);

  const pickMode = (mode: 'mixed' | 'weak') => {
    setFocus({ mode, subject: null, chapterId: null, chapterName: null });
    router.back();
  };

  const applyChapter = () => {
    if (!pendingChapterId) return;
    const chapter = chapters?.find((c) => c.id === pendingChapterId);
    if (!chapter) return;
    setFocus({ mode: 'chapter', subject: subjectQuery, chapterId: chapter.id, chapterName: chapter.name });
    router.back();
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <Animated.View
        style={[styles.sheet, sheetAnimatedStyle]}
        onLayout={(event) => {
          sheetHeight.value = event.nativeEvent.layout.height;
        }}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          {/* Scoped to the handle + header only, not the whole sheet: the
              chapter list below is its own ScrollView, and a pan gesture
              covering that area too would fight its native vertical scroll
              instead of cleanly handing off between drag-to-dismiss and
              scroll-the-list. */}
          <GestureDetector gesture={dragGesture}>
            <View style={styles.dragArea}>
              <View style={styles.handle} />
              <Text style={styles.title}>Practice focus</Text>
              {/* Says "coming soon", not "questions follow whatever you pick":
                  /practice/next accepts no chapter parameter yet (confirmed
                  against the live OpenAPI schema), so a picked chapter cannot
                  change which question is served. Claiming otherwise is what
                  made this read as broken on a real device — the student picks
                  Rotational Motion, gets an unrelated question, and concludes
                  the feature is bust. Honest copy until the backend lands it. */}
              <Text style={styles.subtitle}>{subjectLabel} · chapter focus is coming soon</Text>
            </View>
          </GestureDetector>

          <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <View style={styles.modeList}>
              <Pressable
                style={[styles.modeRow, focus.mode === 'mixed' && styles.modeRowSelected]}
                onPress={() => pickMode('mixed')}>
                <View style={styles.modeTextBlock}>
                  <Text style={styles.modeTitle}>All chapters, mixed</Text>
                  <Text style={styles.modeSubtitle}>The full syllabus, shuffled</Text>
                </View>
                <View style={[styles.radio, focus.mode === 'mixed' && styles.radioSelected]} />
              </Pressable>
              <Pressable
                style={[styles.modeRow, focus.mode === 'weak' && styles.modeRowSelected]}
                onPress={() => pickMode('weak')}>
                <View style={styles.modeTextBlock}>
                  <Text style={styles.modeTitle}>Weak areas first</Text>
                  <Text style={styles.modeSubtitle}>Drona weights your fix-first chapters</Text>
                </View>
                <View style={[styles.radio, focus.mode === 'weak' && styles.radioSelected]} />
              </Pressable>
            </View>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or focus on one chapter</Text>
              <View style={styles.dividerLine} />
            </View>

            {loading ? (
              <View style={styles.chapterLoadingBlock}>
                <ActivityIndicator color={colors.ink} />
              </View>
            ) : loadError ? (
              <Text style={styles.chapterErrorText}>{loadError}</Text>
            ) : (
              <View style={styles.chapterList}>
                {chapters?.map((chapter) => {
                  const isSelected = pendingChapterId === chapter.id;
                  return (
                    <WashSelectRow
                      key={chapter.id}
                      selected={isSelected}
                      playToken={playToken}
                      onPress={() => {
                        setPendingChapterId(chapter.id);
                        setPlayToken((n) => n + 1);
                      }}
                      style={styles.chapterRow}
                      selectedStyle={styles.chapterRowSelected}>
                      <Text style={[styles.chapterTitle, isSelected && styles.chapterTitleSelected]}>
                        {chapter.name}
                      </Text>
                    </WashSelectRow>
                  );
                })}
              </View>
            )}
          </ScrollView>

          <Pressable
            style={[styles.applyButton, !pendingChapterId && styles.applyButtonDisabled]}
            disabled={!pendingChapterId}
            onPress={applyChapter}>
            <Text style={styles.applyButtonText}>Apply focus</Text>
          </Pressable>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    flex: {
      flex: 1,
    },
    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(28,26,22,.42)',
    },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: '82%',
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.25,
      shadowRadius: scale(20),
      elevation: 12,
    },
    dragArea: {
      flexDirection: 'column',
    },
    handle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(14),
    },
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    subtitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    scroll: {
      marginTop: verticalScale(14),
    },
    modeList: {
      flexDirection: 'column',
      gap: verticalScale(8),
    },
    modeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
    },
    modeRowSelected: {
      backgroundColor: '#FCF4E0',
      borderColor: colors.marigold,
    },
    modeTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    modeTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    modeSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.faint,
    },
    radio: {
      width: scale(22),
      height: scale(22),
      flexShrink: 0,
      borderRadius: scale(11),
      backgroundColor: '#fff',
      borderWidth: scale(1.6),
      borderColor: 'rgba(28,26,22,.18)',
    },
    radioSelected: {
      borderWidth: scale(6.5),
      borderColor: colors.marigold,
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(14),
      marginBottom: verticalScale(10),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(28,26,22,.1)',
    },
    dividerText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: colors.red,
      transform: [{ rotate: '-1deg' }],
    },
    chapterLoadingBlock: {
      paddingVertical: verticalScale(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
    chapterErrorText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      paddingVertical: verticalScale(16),
      textAlign: 'center',
    },
    chapterList: {
      flexDirection: 'column',
      gap: verticalScale(7),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
    },
    chapterRowSelected: {
      borderWidth: scale(1.6),
      borderColor: colors.marigold,
    },
    chapterTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    chapterTitleSelected: {
      fontFamily: 'AnekLatin_700Bold',
    },
    applyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: verticalScale(50),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      marginTop: verticalScale(16),
      marginBottom: verticalScale(10),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    applyButtonDisabled: {
      opacity: 0.5,
    },
    applyButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}
