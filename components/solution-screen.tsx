import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { MathLine } from '@/components/math-line';
import { Skeleton, SkeletonParagraph, stagger } from '@/components/skeleton';
import { SolutionSteps } from '@/components/solution-steps';
import { DoubtOption } from '@/lib/doubts';
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
// The same greens SolutionSteps closes the rail with, so the option the answer
// landed on and the answer itself read as one statement.
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';
const GREEN_WASH = 'rgba(28,155,87,0.11)';
const AMBER_WASH = 'rgba(238,163,31,0.11)';
const AMBER_INK = '#7A5310';
// The key idea used to be written in the app's red pen (constants/brand.js's
// `red`). On a page that already carries a green answer and an amber maths
// wash, a third accent colour at the foot of it was one voice too many — and
// red reads as a correction, which is the opposite of what a takeaway is. It
// keeps the handwriting, which is what marks it as an aside, and drops the
// colour.
const KEY_IDEA_INK = INK_70;
const QUESTION_SIZE = 16;
const QUESTION_LINE = QUESTION_SIZE * 1.6;
/**
 * How much of the question may stay pinned.
 *
 * The question is a sticky header — it holds its place while the working
 * scrolls under it, so you can read step five and still see what was asked.
 * That only works while the question is short, and since the API started
 * carrying a comprehension passage into the stem of every question in its set
 * (`fix(snap): cover the question shapes JEE and NEET actually print`), a stem
 * can be a full paragraph. Five lines fits every ordinary question — most are
 * two or three — while a passage is clipped to a readable opening.
 */
const QUESTION_MAX_LINES = 5;
const QUESTION_MAX_HEIGHT = Math.round(QUESTION_LINE * QUESTION_MAX_LINES);

export type SolutionQuestion = {
  id: string;
  text: string;
  steps: ParsedStep[];
  answer: string | null;
  /** The answer before conversion, so a fraction in it can be stacked. */
  answerRaw?: string | null;
  /**
   * The question has been read but not yet solved. Its text is real; its
   * working is still coming, so the steps area shows the placeholder instead
   * of an empty rail that reads as "no steps".
   */
  pending?: boolean;
  /** Shown in place of the working when this question could not be solved. */
  failureNote?: string | null;
  /** Every printed choice, for an MCQ. Shown under the question. */
  options?: DoubtOption[] | null;
  /** The question before conversion, so its fractions stack like the steps'. */
  textRaw?: string | null;
  /** The label(s) the answer landed on, so the right choice can be marked. */
  answerLabels?: string[] | null;
  /** The one-line takeaway, in the app's handwriting. */
  keyIdea?: string | null;
  /**
   * Shown above the working when the API kept the steps but withheld the
   * answer — a disagreement with the printed key, an answer that is not among
   * the options, or an unstable solve.
   */
  caution?: string | null;
};

type SolutionScreenProps = {
  questions: SolutionQuestion[];
  index: number;
  onSelect: (index: number) => void;
  onBack: () => void;
  onFollowUp?: () => void;
  onReport?: () => void;
  /** A page-level word from the server — e.g. that not every question on the
   *  photo could be read. Belongs to the photo, not to any one question. */
  notice?: string | null;
  /** A quiet closing line, e.g. how many of the day's questions are used. */
  footerNote?: string | null;
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
  notice,
  footerNote,
}: SolutionScreenProps) {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);
  const scrollRef = useRef<ScrollView>(null);
  const question = questions[index];

  /** Whether the student asked for the whole question, and whether there is
   *  more of it to ask for. */
  const [expanded, setExpanded] = useState(false);
  const [clipped, setClipped] = useState(false);
  const hasStackableFraction = !!question.textRaw && /\\[dt]?frac/.test(question.textRaw);
  // A different question is a different length: never carry one's answer over.
  useEffect(() => {
    setExpanded(false);
    setClipped(false);
  }, [index]);

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
          // Pinned only while it is small enough to be worth pinning. The
          // question holds its place so you can read step five and still see
          // what was asked — but with four options above the rule the block
          // runs to about a third of the screen, and holding that over the
          // working costs more than it gives. An MCQ's answer is stored as the
          // option's own text, so the final line still reads on its own.
          stickyHeaderIndices={question.options?.length ? undefined : [0]}
          showsVerticalScrollIndicator={false}>
          {/* Pinned and opaque, so the grid never runs under it and the
              question stays readable while the working scrolls beneath. */}
          <View style={styles.questionPin}>
            {/* React Native's own truncation rather than a clipping wrapper: a
                `maxHeight` + `overflow: hidden` View around this text stops it
                wrapping at all, and `numberOfLines` gives the ellipsis free. */}
            {/* MathLine, like the steps and the answer. A fraction in the
                QUESTION was the last one still coming out as `a/b` while the
                working below it stacked, so one page disagreed with itself.
                `numberOfLines` only applies on the plain path — a stacked
                fraction is a view and cannot be line-clamped — so a question
                carrying one shows in full. */}
            {hasStackableFraction ? (
              <MathLine
                text={question.textRaw ?? question.text}
                style={styles.questionText}
                mathStyle={styles.inlineMath}
                fontSize={QUESTION_SIZE}
                color={INK}
              />
            ) : (
              <Text
                style={styles.questionText}
                numberOfLines={expanded ? undefined : QUESTION_MAX_LINES}>
                {question.text}
              </Text>
            )}
            {/* Knowing whether anything was cut takes a second copy:
                `onTextLayout` reports the text's full layout rather than the
                lines it drew. This one is laid out untruncated and off the
                page — no space, invisible to eye and screen reader — purely to
                be measured. */}
            <Text
              style={[styles.questionText, styles.questionProbe]}
              accessible={false}
              importantForAccessibility="no-hide-descendants"
              pointerEvents="none"
              onLayout={(e) => {
                const cut = e.nativeEvent.layout.height > QUESTION_MAX_HEIGHT + 1;
                if (cut !== clipped) setClipped(cut);
              }}>
              {question.text}
            </Text>
            {clipped && (
              <Pressable
                onPress={() => setExpanded((on) => !on)}
                hitSlop={8}
                accessibilityRole="button">
                <Text style={styles.questionToggle}>
                  {expanded ? 'Show less' : 'Show full question'}
                </Text>
              </Pressable>
            )}

            {/* Inside the pin, above the rule. The choices are part of what was
                asked, not part of the answer — the rule is what separates the
                question from the working, so options sit on the question's
                side of it. An MCQ's answer is stored as the option's own text,
                so without them printed here "(C)" and the answer line are two
                halves of a sentence the student can only read one of. */}
            {!!question.options?.length && (
              <View style={styles.options}>
                {question.options.map((option) => {
                  const chosen = !!question.answerLabels?.includes(option.label);
                  return (
                    <View key={option.label} style={[styles.option, chosen && styles.optionChosen]}>
                      <Text style={[styles.optionLabel, chosen && styles.optionLabelChosen]}>
                        {option.label}
                      </Text>
                      {/* The `flex: 1` that makes an option fill the row goes
                          on this wrapper, never on the text itself. MathLine
                          lays a line out as a row of words, and a word given
                          `flex: 1` has a flex-basis of zero — so the row
                          measured zero wide and options 2, 3 and 4 rendered as
                          empty boxes with only their labels. Option 1 survived
                          only because a stacked fraction is a View with a real
                          intrinsic width. */}
                      <View style={styles.optionBody}>
                        {/* When the choice IS a picture — four circuits, four
                            graphs — the picture is the option. The written
                            description stays underneath: it is what the solver
                            reasoned from and what a screen reader reads, and
                            it is the only thing left if the URL has expired. */}
                        {!!option.image_url && (
                          <Image
                            source={{ uri: option.image_url }}
                            style={styles.optionFigure}
                            contentFit="contain"
                            transition={120}
                            accessibilityLabel={option.text}
                          />
                        )}
                        <MathLine
                          text={option.text}
                          style={[
                            styles.optionText,
                            chosen && styles.optionTextChosen,
                            !!option.image_url && styles.optionCaption,
                          ]}
                          mathStyle={styles.inlineMath}
                          fontSize={option.image_url ? 13 : 15}
                          color={chosen ? GREEN_INK : INK_70}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>

          {/* Not inside the pin: it must not be sticky, and it is about the
              photo rather than the question showing. */}
          {!!notice && (
            <View style={styles.notice}>
              <Text style={styles.noticeText}>{notice}</Text>
            </View>
          )}


          {!!question.caution && (
            <View style={styles.caution}>
              <Text style={styles.cautionText}>{question.caution}</Text>
            </View>
          )}

          {question.pending ? (
            // The question is on screen ~20s before its answer exists, so this
            // is the only part still waiting. Same placeholder the whole screen
            // used to show, now scoped to the half that is genuinely unknown.
            <View style={styles.stepsBlock}>
              <StepsPlaceholder />
              <Text style={styles.meta}>working it out…</Text>
            </View>
          ) : question.failureNote ? (
            <View style={styles.failureBlock}>
              <Text style={styles.failureText}>{question.failureNote}</Text>
            </View>
          ) : (
            <View style={styles.stepsBlock}>
              <SolutionSteps
                steps={question.steps}
                answer={question.answer}
                answerRaw={question.answerRaw}
                footer={
                  <Text style={styles.meta}>
                    {question.steps.length} step{question.steps.length === 1 ? '' : 's'}
                    {questions.length > 1 ? ' · tap a chip for the next question' : ''}
                  </Text>
                }
              />
            </View>
          )}

          {/* The app's existing handwriting for a takeaway. */}
          {!question.pending && !!question.keyIdea && (
            <Text style={styles.keyIdea}>{question.keyIdea}</Text>
          )}

          {!!footerNote && <Text style={[styles.meta, styles.footerNote]}>{footerNote}</Text>}
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
      fontSize: QUESTION_SIZE,
      lineHeight: QUESTION_LINE,
      color: INK,
    },
    // The same maths voice the rail uses, so a formula reads the same whether
    // it is in the question, an option, or the working.
    inlineMath: {
      fontFamily: 'AnekLatin_600SemiBold',
      color: INK,
    },
    questionProbe: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      opacity: 0,
    },
    questionToggle: {
      paddingTop: 8,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 13,
      color: INK_50,
    },
    footerNote: {
      marginTop: 26,
      textAlign: 'center',
    },
    notice: {
      marginTop: 14,
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 8,
      backgroundColor: AMBER_WASH,
    },
    noticeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      lineHeight: 13 * 1.5,
      color: AMBER_INK,
    },
    options: {
      marginTop: 16,
      gap: 8,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: HAIR,
      borderRadius: 10,
    },
    optionChosen: {
      borderColor: GREEN,
      backgroundColor: GREEN_WASH,
    },
    optionLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 14,
      lineHeight: 15 * 1.6,
      color: INK_50,
    },
    optionLabelChosen: {
      color: GREEN_INK,
    },
    optionBody: {
      flex: 1,
      gap: 8,
    },
    optionFigure: {
      width: '100%',
      // Tall enough to read a circuit, short enough that four of them still
      // fit on one screen with the question above.
      height: 132,
      borderRadius: 6,
      backgroundColor: PAPER,
    },
    // Under a picture the words are a caption, not the choice itself.
    optionCaption: {
      fontSize: 13,
      lineHeight: 13 * 1.5,
      color: INK_50,
    },
    optionText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      lineHeight: 15 * 1.6,
      color: INK_70,
    },
    optionTextChosen: {
      color: GREEN_INK,
    },
    caution: {
      marginTop: 18,
      paddingLeft: 14,
      borderLeftWidth: 3,
      borderLeftColor: AMBER_INK,
    },
    cautionText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      lineHeight: 15 * 1.6,
      color: INK_70,
    },
    keyIdea: {
      marginTop: 26,
      paddingLeft: 44,
      fontFamily: 'Kalam_700Bold',
      fontSize: 15,
      lineHeight: 15 * 1.5,
      color: KEY_IDEA_INK,
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

/**
 * The numbered-rail placeholder, shared by the whole-page skeleton and by a
 * single question whose working has not arrived yet.
 *
 * Four rows, not two. A solve typically comes back with five or six steps, and
 * a placeholder that stops halfway leaves the lower half blank, which reads as
 * "this is all there is" and then jumps when it isn't.
 */
function StepsPlaceholder() {
  const skeleton = useMemo(() => createSkeletonStyles(), []);
  return (
    <View style={skeleton.steps}>
      <View style={skeleton.rail} />
      {[0, 1, 2, 3].map((i) => (
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
  );
}

export function SolutionScreenSkeleton({ onBack }: { onBack: () => void }) {
  const styles = useMemo(() => createStyles(), []);

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

          <StepsPlaceholder />
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
