import { ReactNode, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ParsedStep } from '@/lib/solution-steps';

/**
 * The numbered rail a worked solution is read on: one marker per step, a bold
 * title where the step had a short opening sentence, prose beneath it, maths
 * in its own hugging wash, and the final answer closing the rail in green.
 *
 * Lifted out of solution-screen.tsx so Practice reads a solution in exactly
 * the same language as Doubts and Snap. Practice shows its solution beneath
 * the question it belongs to rather than on a screen of its own, so it asks
 * for `size="compact"`: same structure, same rhythm, one notch down in type so
 * the working never out-shouts the question above it.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_30 = '#B5B0A4';
const PAPER = '#FFFFFF';
const HAIR = 'rgba(28,26,22,0.12)';
const AMBER_WASH = 'rgba(238,163,31,0.11)';
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';
const GREEN_WASH = 'rgba(28,155,87,0.11)';

export type SolutionStepsSize = 'full' | 'compact';

const METRICS = {
  full: {
    rail: 44,
    railLeft: 13,
    marker: 28,
    markerRadius: 8,
    markerText: 12,
    stepGap: 30,
    lineGap: 12,
    title: 19,
    prose: 16,
    math: 17,
    answer: 19,
  },
  compact: {
    rail: 34,
    railLeft: 10,
    marker: 22,
    markerRadius: 7,
    markerText: 10.5,
    stepGap: 20,
    lineGap: 8,
    title: 15.5,
    prose: 14,
    math: 15,
    answer: 16,
  },
} as const;

type SolutionStepsProps = {
  steps: ParsedStep[];
  /** Closes the rail with a ✓ marker. Omit when the answer is already obvious
   *  from the screen around it — a picked MCQ option, say. */
  answer?: string | null;
  answerLabel?: string;
  size?: SolutionStepsSize;
  /** Trailing line under the final answer, e.g. a step count. */
  footer?: ReactNode;
};

export function SolutionSteps({
  steps,
  answer,
  answerLabel = 'Final answer',
  size = 'full',
  footer,
}: SolutionStepsProps) {
  const styles = useMemo(() => createStyles(size), [size]);

  return (
    <View style={styles.steps}>
      <View style={styles.rail} />

      {steps.map((step, i) => (
        <View key={i} style={styles.step}>
          <View style={styles.num}>
            <Text style={styles.numText}>{String(i + 1).padStart(2, '0')}</Text>
          </View>
          {!!step.title && <Text style={styles.stepTitle}>{step.title}</Text>}
          {step.lines.map((line, j) =>
            line.kind === 'math' ? (
              // Hugs its own text rather than stretching to a full-width bar —
              // the design calls this out as the earlier mistake.
              <View key={j} style={styles.mathWrap}>
                <Text style={styles.mathText}>{line.text}</Text>
              </View>
            ) : (
              <Text key={j} style={styles.proseText}>
                {line.text}
              </Text>
            )
          )}
        </View>
      ))}

      {!!answer && (
        <View style={styles.step}>
          <View style={[styles.num, styles.numFinal]}>
            <Text style={styles.numFinalText}>✓</Text>
          </View>
          <Text style={styles.finalLabel}>{answerLabel}</Text>
          <View style={styles.answerWrap}>
            <Text style={styles.answerText}>{answer}</Text>
          </View>
          {footer}
        </View>
      )}
    </View>
  );
}

function createStyles(size: SolutionStepsSize) {
  const m = METRICS[size];
  return StyleSheet.create({
    steps: {
      position: 'relative',
      paddingLeft: m.rail,
      gap: m.stepGap,
    },
    rail: {
      position: 'absolute',
      left: m.railLeft,
      top: 10,
      bottom: 10,
      width: 1,
      backgroundColor: HAIR,
    },
    step: {
      position: 'relative',
      gap: m.lineGap,
      alignItems: 'flex-start',
      alignSelf: 'stretch',
    },
    num: {
      position: 'absolute',
      left: -m.rail,
      top: 1,
      width: m.marker,
      height: m.marker,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,0.22)',
      borderRadius: m.markerRadius,
      backgroundColor: PAPER,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: m.markerText,
      color: '#57534B',
    },
    numFinal: {
      borderWidth: 0,
      backgroundColor: GREEN_WASH,
    },
    numFinalText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: m.markerText + 1,
      color: GREEN,
    },
    stepTitle: {
      alignSelf: 'stretch',
      paddingTop: 4,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: m.title,
      letterSpacing: -0.02 * m.title,
      lineHeight: m.title * 1.3,
      color: INK,
    },
    proseText: {
      alignSelf: 'stretch',
      fontFamily: 'AnekLatin_400Regular',
      fontSize: m.prose,
      lineHeight: m.prose * 1.6,
      color: INK_70,
    },
    mathWrap: {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: size === 'full' ? 7 : 5,
      paddingHorizontal: size === 'full' ? 12 : 10,
      borderRadius: 6,
      backgroundColor: AMBER_WASH,
    },
    mathText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: m.math,
      lineHeight: m.math * 1.6,
      color: INK,
    },
    finalLabel: {
      alignSelf: 'stretch',
      paddingTop: 4,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: m.title,
      letterSpacing: -0.02 * m.title,
      color: GREEN,
    },
    answerWrap: {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: size === 'full' ? 8 : 6,
      paddingHorizontal: size === 'full' ? 13 : 11,
      borderRadius: 6,
      backgroundColor: GREEN_WASH,
    },
    answerText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: m.answer,
      color: GREEN_INK,
    },
    meta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: INK_30,
    },
  });
}
