import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Skeleton, SkeletonParagraph, stagger } from '@/components/skeleton';
import { SolutionSteps } from '@/components/solution-steps';
import { ParsedStep } from '@/lib/solution-steps';

/**
 * Snap It Out — solution screen, ported from snap-solution-6b/.
 *
 * Structure, per that README: a bare header (back chevron and the word
 * "Solution", no save action and no subject label), question chips for each
 * parsed question, the parsed question pinned under a rule, a numbered rail of
 * steps, the final answer in a green wash, and sticky actions.
 *
 * Font is the app's Anek Latin rather than the design's Bricolage Grotesque —
 * everything else follows the source. Swapping it is a one-line change if the
 * reference font is wanted instead.
 *
 * Sizing follows the design's 390pt-equivalent values through the app's own
 * scale(), so this sits in the same coordinate system as every other screen.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_50 = '#8A8478';
const INK_30 = '#B5B0A4';
const PAPER = '#FFFFFF';
const GRID = 'rgba(28,26,22,0.04)';
const HAIR = 'rgba(28,26,22,0.12)';
const GRID_SIZE = 26;

export type SolutionQuestion = {
  id: string;
  text: string;
  steps: ParsedStep[];
  answer: string | null;
  /** Shown in place of the working when this question could not be solved. */
  failureNote?: string | null;
};

type SolutionScreenProps = {
  questions: SolutionQuestion[];
  index: number;
  onSelect: (index: number) => void;
  onBack: () => void;
  onFollowUp?: () => void;
  onReport?: () => void;
};

/** The graph paper the design lays everything on: 26px squares at 4% ink. */
function GridPaper() {
  const { width, height } = useWindowDimensions();
  const rows = Math.ceil(height / GRID_SIZE);
  const cols = Math.ceil(width / GRID_SIZE);
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={`r${i}`}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: (i + 1) * GRID_SIZE,
            height: 1,
            backgroundColor: GRID,
          }}
        />
      ))}
      {Array.from({ length: cols }, (_, i) => (
        <View
          key={`c${i}`}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: (i + 1) * GRID_SIZE,
            width: 1,
            backgroundColor: GRID,
          }}
        />
      ))}
    </View>
  );
}

export function SolutionScreen({
  questions,
  index,
  onSelect,
  onBack,
  onFollowUp,
  onReport,
}: SolutionScreenProps) {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);
  const scrollRef = useRef<ScrollView>(null);
  const question = questions[index];

  const select = (i: number) => {
    onSelect(i);
    // "Students expect the question they tapped, not the middle of it."
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  };

  return (
    <View style={styles.screen}>
      <GridPaper />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.bar}>
          <Pressable style={styles.back} onPress={onBack} hitSlop={10}>
            <BackChevron />
          </Pressable>
          <Text style={styles.title}>Solution</Text>
        </View>

        {/* One chip per parsed question — never padded out to three. */}
        {questions.length > 1 && (
          <View style={styles.chips} accessibilityRole="tablist">
            {questions.map((q, i) => {
              const selected = i === index;
              return (
                <Pressable
                  key={q.id}
                  onPress={() => select(i)}
                  accessibilityRole="tab"
                  accessibilityState={{ selected }}
                  style={[styles.chip, selected && styles.chipSelected]}>
                  <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{q.id}</Text>
                </Pressable>
              );
            })}
          </View>
        )}

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          {/* Pinned and opaque, so the grid never runs under it and the
              question stays readable while the working scrolls beneath. */}
          <View style={styles.questionPin}>
            <Text style={styles.questionText}>{question.text}</Text>
          </View>

          {question.failureNote ? (
            <View style={styles.failureBlock}>
              <Text style={styles.failureText}>{question.failureNote}</Text>
            </View>
          ) : (
            <View style={styles.stepsBlock}>
              <SolutionSteps
                steps={question.steps}
                answer={question.answer}
                footer={
                  <Text style={styles.meta}>
                    {question.steps.length} step{question.steps.length === 1 ? '' : 's'}
                    {questions.length > 1 ? ' · tap a chip for the next question' : ''}
                  </Text>
                }
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>

      <View style={styles.actions} pointerEvents="box-none">
        <LinearGradient
          colors={['rgba(255,255,255,0)', PAPER, PAPER]}
          locations={[0, 0.38, 1]}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
        {/* Deliberately not a SafeAreaView: its full bottom inset stacked on
            top of the design's own 14px and pushed the actions well clear of
            the home indicator, leaving them floating high. The design reserves
            just a 14px strip for the indicator, so this clears it by a similar
            margin and sits where the tab bar does elsewhere in the app. */}
        <View style={[styles.actionsInner, { paddingBottom: Math.max(insets.bottom - 16, 12) }]}>
          <Pressable style={styles.primary} onPress={onFollowUp}>
            <Text style={styles.primaryText}>Ask a follow-up</Text>
          </Pressable>
          <Pressable style={styles.iconBtn} onPress={onReport} accessibilityLabel="Report a problem">
            <FlagIcon />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function BackChevron() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke="#3A362E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function FlagIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path
        d="M5 21V4h11l-1.5 3.5L16 11H5"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles() {
  const GUTTER = 24;
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: PAPER,
    },
    safeArea: {
      flex: 1,
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingHorizontal: GUTTER,
      paddingTop: 10,
    },
    back: {
      width: 32,
      height: 32,
      marginLeft: -6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 21,
      letterSpacing: -0.03 * 21,
      color: INK,
    },
    chips: {
      flexDirection: 'row',
      gap: 8,
      paddingHorizontal: GUTTER,
      paddingVertical: 14,
    },
    chip: {
      height: 38,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,0.16)',
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.7)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipSelected: {
      backgroundColor: INK,
      borderColor: INK,
    },
    chipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 14,
      color: INK_50,
    },
    chipTextSelected: {
      color: PAPER,
    },
    scroll: {
      flex: 1,
      minHeight: 0,
    },
    scrollContent: {
      paddingHorizontal: GUTTER,
      paddingBottom: 130,
    },
    questionPin: {
      paddingTop: 6,
      paddingBottom: 16,
      backgroundColor: PAPER,
      borderBottomWidth: 1.5,
      borderBottomColor: INK,
    },
    questionText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 16,
      lineHeight: 16 * 1.6,
      color: INK,
    },
    stepsBlock: {
      marginTop: 24,
    },
    meta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: INK_30,
    },
    failureBlock: {
      marginTop: 24,
    },
    failureText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 16,
      lineHeight: 16 * 1.6,
      color: INK_70,
    },
    actions: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    actionsInner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingHorizontal: GUTTER,
      paddingTop: 14,
    },
    primary: {
      flex: 1,
      height: 54,
      borderRadius: 14,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 16,
      color: PAPER,
    },
    iconBtn: {
      width: 54,
      height: 54,
      borderWidth: 1.4,
      borderColor: 'rgba(28,26,22,0.16)',
      borderRadius: 14,
      backgroundColor: PAPER,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}

/**
 * What a doubt looks like while it's being fetched: the same paper, the same
 * bar, the question pinned under its rule, then two numbered steps on the rail.
 * The layout doesn't move when the real solution lands — only the bars become
 * words.
 */
export function SolutionScreenSkeleton({ onBack }: { onBack: () => void }) {
  const styles = useMemo(() => createStyles(), []);
  const skeleton = useMemo(() => createSkeletonStyles(), []);

  return (
    <View style={styles.screen}>
      <GridPaper />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.bar}>
          <Pressable style={styles.back} onPress={onBack} hitSlop={10}>
            <BackChevron />
          </Pressable>
          <Text style={styles.title}>Solution</Text>
        </View>

        <View style={styles.scrollContent}>
          <View style={styles.questionPin}>
            <SkeletonParagraph lines={3} lineHeight={14} gap={10} widths={['100%', '96%', '54%']} />
          </View>

          <View style={skeleton.steps}>
            <View style={skeleton.rail} />
            {[0, 1].map((i) => (
              <View key={i} style={skeleton.step}>
                <Skeleton delay={stagger(i, 120)} style={skeleton.num} />
                <Skeleton delay={stagger(i, 120)} style={skeleton.stepTitle} />
                <SkeletonParagraph
                  lines={2}
                  lineHeight={13}
                  gap={9}
                  delay={stagger(i, 120) + 60}
                  widths={['100%', '72%']}
                />
                <Skeleton delay={stagger(i, 120) + 180} style={skeleton.math} />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

function createSkeletonStyles() {
  const RAIL = 44;
  return StyleSheet.create({
    // Mirrors SolutionSteps' own rail geometry so the placeholder lands where
    // the real steps will.
    steps: {
      position: 'relative',
      marginTop: 24,
      paddingLeft: RAIL,
      gap: 30,
    },
    rail: {
      position: 'absolute',
      left: 13,
      top: 10,
      bottom: 10,
      width: 1,
      backgroundColor: HAIR,
    },
    step: {
      position: 'relative',
      gap: 12,
      alignItems: 'flex-start',
      alignSelf: 'stretch',
    },
    // Sits exactly where the numbered badge will.
    num: {
      position: 'absolute',
      left: -RAIL,
      top: 1,
      width: 28,
      height: 28,
      borderRadius: 8,
    },
    stepTitle: {
      width: '62%',
      height: 18,
    },
    math: {
      width: '46%',
      height: 34,
      borderRadius: 8,
    },
  });
}
