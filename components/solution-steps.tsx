import { ReactNode, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MathLine } from '@/components/math-line';
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
/**
 * The formula slab.
 *
 * Was a marigold wash. Marigold is documented in `constants/brand.js` as the
 * "focus dot, primary accent, the daily goal" -- spending it on every formula
 * in every solution drained the one colour that means a streak, and it sat
 * directly above the green final-answer block, two saturated washes competing
 * in a phone-width column.
 *
 * This separates by WEIGHT and SHAPE instead of hue: a near-neutral ground and
 * a solid ink rule down the left. Nothing here depends on colour, so it holds
 * in both themes and for a colour-blind reader, and the rule gives a hard left
 * edge -- a student revising can run down the formulas and skip every word.
 */
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';
const GREEN_WASH = 'rgba(28,155,87,0.11)';

export type SolutionStepsSize = 'full' | 'compact' | 'board';

const METRICS = {
  /**
   * ONE SIZE ON THE PAGE. Titles, prose, maths and the final answer are all
   * 16: the page used to set a 19pt bold title over 16pt prose with 17pt
   * semibold maths and a 19pt answer, four sizes in one column, and scrolling
   * it read as a series of headlines rather than one argument. Weight and ink
   * now do the separating — a title is semibold, maths is medium and darker,
   * prose is regular — at a single size.
   *
   * The markers are smaller and the rail narrower (22 in 34, from 28 in 44):
   * the numbers are for finding your place, and at 28 they were the loudest
   * thing on every step.
   */
  full: {
    rail: 34,
    railLeft: 10.5,
    marker: 22,
    markerRadius: 6,
    markerText: 10.5,
    stepGap: 26,
    lineGap: 8,
    title: 16,
    prose: 16,
    math: 16,
    answer: 16,
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
  /**
   * The follow-up board: between the two. At `full` the markers and text were
   * the solution's own size inside a panel two-thirds as tall, and read as
   * oversized; at `compact` the board was the smallest text on the screen.
   */
  board: {
    // A wider rail than `compact`: the gap between a number and its equation
    // is most of what made a follow-up's steps read as crowded.
    rail: 42,
    railLeft: 11.5,
    marker: 24,
    markerRadius: 7,
    markerText: 11,
    stepGap: 30,
    lineGap: 12,
    title: 16.5,
    // Prose and maths a half-point under `compact`'s neighbours at full, so a
    // long line keeps clear of the board's edge — and stays on one line —
    // once the wider rail has taken its share. A follow-up line is usually a
    // sentence carrying its maths inline, so the prose size is the one that
    // decides where it wraps.
    prose: 14.5,
    math: 14.5,
    answer: 17,
  },
} as const;

/**
 * How maths breathes, per size. A follow-up answer is mostly equations with
 * one on each line, so the board sets them a little more loosely — taller
 * lines and a touch of tracking — where the solution's formulas sit inside
 * prose and stay as they were. `numTop` is where a step's number sits when
 * the step opens on an equation of its own; a step opening on a sentence
 * keeps the default 1.
 */
const MATH_AIR: Record<SolutionStepsSize, { leading: number; tracking: number; pad: number; numTop: number }> = {
  full: { leading: 1.55, tracking: 0, pad: 2, numTop: 2 },
  compact: { leading: 1.6, tracking: 0, pad: 3, numTop: 1 },
  board: { leading: 1.75, tracking: 0.1, pad: 3, numTop: 3.5 },
};

type SolutionStepsProps = {
  steps: ParsedStep[];
  /** Closes the rail with a ✓ marker. Omit when the answer is already obvious
   *  from the screen around it — a picked MCQ option, say. */
  answer?: string | null;
  /** The answer before conversion, so its fraction can be stacked. */
  answerRaw?: string | null;
  /** For a choice question, the label(s) the answer landed on — ["C"]. */
  answerLabels?: string[] | null;
  answerLabel?: string;
  size?: SolutionStepsSize;
  /**
   * The numbered rail. On by default, because a solution's steps are an
   * ordered argument and the numbers are how a student refers to one.
   *
   * Off for a follow-up answer, which is a few sentences of explanation rather
   * than a numbered method — there, markers read as structure the content does
   * not have and the rail indents prose away from its own edge for nothing.
   */
  rail?: boolean;
  /** Trailing line under the final answer, e.g. a step count. */
  footer?: ReactNode;
};

export function SolutionSteps({
  steps,
  answer,
  answerRaw,
  answerLabels,
  answerLabel = 'Final answer',
  size = 'full',
  rail = true,
  footer,
}: SolutionStepsProps) {
  const styles = useMemo(() => createStyles(size, rail), [size, rail]);
  // The same metrics createStyles uses, needed here because a stacked fraction
  // has to be sized against the type it sits in.
  const m = METRICS[size];

  return (
    <View style={styles.steps}>
      {rail && <View style={styles.rail} />}

      {steps.map((step, i) => (
        <View key={i} style={styles.step}>
          {rail && (
            <View
              style={[
                styles.num,
                // Level with an equation standing on its own first line,
                // which sits lower than a sentence's first line does.
                !step.title && step.lines[0]?.kind === 'math' && styles.numMath,
              ]}>
              <Text style={styles.numText}>{String(i + 1).padStart(2, '0')}</Text>
            </View>
          )}
          {!!step.title &&
            (step.titleRaw ? (
              // A title with maths in it sets that maths the way the step
              // does — spaced, fractions stacked — at the title's weight.
              <MathLine
                text={step.titleRaw}
                style={styles.stepTitle}
                mathStyle={styles.stepTitle}
                fontSize={m.title}
                color={INK}
              />
            ) : (
              <Text style={styles.stepTitle}>{step.title}</Text>
            ))}
          {step.lines.map((line, j) =>
            line.kind === 'math' ? (
              // Hugs its own text rather than stretching to a full-width bar —
              // the design calls this out as the earlier mistake.
              <View key={j} style={styles.mathWrap}>
                <MathLine
                  text={line.raw ?? line.text}
                  style={styles.mathText}
                  mathStyle={styles.mathText}
                  fontSize={m.math}
                  color={INK}
                />
              </View>
            ) : (
              <MathLine
                key={j}
                text={line.raw ?? line.text}
                style={styles.proseText}
                mathStyle={styles.inlineMath}
                fontSize={m.prose}
                color={INK_70}
              />
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
            {/* The option it landed on, beside the answer itself. The API
                stores a choice question's answer as the option's TEXT, which
                reads well on its own but leaves the student matching it back
                to the paper by eye — the letter is what they actually check
                against. */}
            {!!answerLabels?.length && (
              <Text style={styles.answerPick}>({answerLabels.join(', ')})</Text>
            )}
            <MathLine
              text={answerRaw ?? answer}
              style={styles.answerText}
              fontSize={m.answer}
              color={GREEN_INK}
            />
          </View>
          {footer}
        </View>
      )}
    </View>
  );
}

function createStyles(size: SolutionStepsSize, rail: boolean) {
  const m = METRICS[size];
  /**
   * Maths is set a step heavier than the prose so a student can scan a step
   * for its numbers. On the follow-up board that step is a medium, not a
   * semibold: a spoken follow-up is mostly equations, and at semibold nearly
   * every line of it came out bold, which is emphasis on everything and so on
   * nothing. Darker ink still sets the maths apart from the words.
   */
  const mathFace = size === 'compact' ? 'Onest_600SemiBold' : 'Onest_500Medium';
  /** Prose leading: a little tighter on the doubt page, where every line is
   *  now the same size and 1.6 read as gaps between lines rather than lines. */
  const leading = size === 'full' ? 1.55 : 1.6;
  const one = size === 'full';
  const air = MATH_AIR[size];
  return StyleSheet.create({
    steps: {
      position: 'relative',
      // The left inset exists to clear the markers. Without them it is an
      // indent with nothing in it.
      paddingLeft: rail ? m.rail : 0,
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
    numMath: { top: air.numTop },
    numText: {
      fontFamily: 'Onest_700Bold',
      fontSize: m.markerText,
      color: '#57534B',
    },
    numFinal: {
      borderWidth: 0,
      backgroundColor: GREEN_WASH,
    },
    numFinalText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: m.markerText + 1,
      color: GREEN,
    },
    stepTitle: one
      ? {
          // Body size, set apart by weight alone: semibold ink over regular
          // grey. Its leading is the prose's, so title and body share a rhythm.
          alignSelf: 'stretch',
          fontFamily: 'Onest_600SemiBold',
          fontSize: m.title,
          lineHeight: m.title * leading,
          color: INK,
        }
      : {
          alignSelf: 'stretch',
          paddingTop: 4,
          fontFamily: 'Onest_700Bold',
          fontSize: m.title,
          letterSpacing: -0.02 * m.title,
          lineHeight: m.title * 1.3,
          color: INK,
        },
    proseText: {
      alignSelf: 'stretch',
      fontFamily: 'Onest_400Regular',
      fontSize: m.prose,
      lineHeight: m.prose * leading,
      color: INK_70,
    },
    /**
     * A formula, a quantity or a unit sitting inside a sentence.
     *
     * The same weight the whole-line maths uses, and darker than the prose
     * around it — these are what a student scans a step for, and until now
     * they took the prose weight inline and the maths weight on their own
     * line, which made one formula look like two different things.
     */
    inlineMath: {
      fontFamily: mathFace,
      color: INK,
    },
    /**
     * A FORMULA IS A LINE OF THE ANSWER, NOT A PANEL.
     *
     * This has carried a background for its whole life — an 11% marigold wash
     * first, then a grey ground with a 2.5pt ink rule down its left edge. Both
     * had the same problem, which is that a worked solution is ALREADY a
     * numbered rail: every step has a marker and a hairline running down the
     * column. Boxing the maths inside that put a second vertical line a few
     * points from the first and a filled block between them, so three steps in
     * a row read as three separate cards rather than one continuous working.
     *
     * The type carries it on its own. The formula is semibold and set larger
     * than the prose around it, which is the whole of the distinction a reader
     * needs, and it now starts on the same left edge as the sentence above it
     * rather than indented behind a rule.
     */
    mathWrap: {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: air.pad,
    },
    mathText: {
      fontFamily: mathFace,
      fontSize: m.math,
      lineHeight: m.math * air.leading,
      letterSpacing: air.tracking,
      color: INK,
    },
    finalLabel: one
      ? {
          alignSelf: 'stretch',
          fontFamily: 'Onest_600SemiBold',
          fontSize: m.title,
          lineHeight: m.title * leading,
          color: GREEN,
        }
      : {
          alignSelf: 'stretch',
          paddingTop: 4,
          fontFamily: 'Onest_700Bold',
          fontSize: m.title,
          letterSpacing: -0.02 * m.title,
          color: GREEN,
        },
    answerPick: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: m.answer,
      color: GREEN_INK,
    },
    answerWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: 6,
      paddingHorizontal: size === 'full' ? 12 : 11,
      borderRadius: 6,
      backgroundColor: GREEN_WASH,
    },
    answerText: {
      fontFamily: one ? 'Onest_600SemiBold' : 'Onest_700Bold',
      fontSize: m.answer,
      color: GREEN_INK,
    },
    meta: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 13,
      color: INK_30,
    },
  });
}
