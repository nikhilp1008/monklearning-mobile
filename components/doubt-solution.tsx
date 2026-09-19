import { ReactNode, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MathLine } from '@/components/math-line';
import { splitDisplay } from '@/lib/display-math';
import { ParsedStep } from '@/lib/solution-steps';

/**
 * A WORKED SOLUTION, READ AS WORKING RATHER THAN AS TEXT.
 *
 * The solver writes each step as one sentence with its maths inside it, and
 * at a single type size a page of those is a page of prose: a student
 * scrolling it has nothing to scan for, and said so. The fix is not a bigger
 * heading or a bolder line — it is where the maths sits. Every equation that
 * carries working is lifted out of its sentence onto a line of its own,
 * indented under the words that introduce it, exactly as a textbook sets
 * display maths. Quantities stay in the sentence, because "at t = 1 s" is
 * part of the sentence.
 *
 * NOTHING BEHIND THE MATHS. Backgrounds have been tried on this screen three
 * times — an 11% marigold wash, a grey ground with an ink rule, and a
 * hand-drawn highlighter stroke — and all three were dropped: beside a
 * numbered rail a filled shape reads as a card, and the marker read as
 * novelty. The placement does the work; the page stays white.
 *
 * Doubts and Snap only. Practice keeps its own compact solution.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const HAIR = 'rgba(28,26,22,0.12)';
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';
const GREEN_WASH = 'rgba(28,155,87,0.11)';

const SIZE = 16;
const LEADING = 1.55;
const RAIL = 34;
const MARKER = 22;

type Row = { kind: 'title' | 'text' | 'display'; raw: string };

/** One step as rows: its title, its sentences, and its lifted equations. */
function rowsFor(step: ParsedStep): Row[] {
  const sources: { kind: 'title' | 'text' | 'math'; raw: string }[] = [];
  if (step.title) sources.push({ kind: 'title', raw: step.titleRaw ?? step.title });
  step.lines.forEach((l) => sources.push({ kind: l.kind, raw: l.raw ?? l.text }));

  const rows: Row[] = [];
  sources.forEach((source) => {
    if (source.kind === 'math') {
      rows.push({ kind: 'display', raw: source.raw });
      return;
    }
    splitDisplay(source.raw).forEach((piece, j) => {
      if (piece.kind === 'display') rows.push({ kind: 'display', raw: piece.raw });
      // The words that introduce the equation keep their colon: it is what
      // makes "Compute displacements:" read as opening onto them.
      else if (source.kind === 'title' && j === 0)
        rows.push({ kind: 'title', raw: piece.raw.replace(/:\s*$/, '') });
      else rows.push({ kind: 'text', raw: piece.raw });
    });
  });
  return rows;
}

export function DoubtSolution({
  steps,
  answer,
  answerRaw,
  answerLabels,
  footer,
}: {
  steps: ParsedStep[];
  answer?: string | null;
  answerRaw?: string | null;
  answerLabels?: string[] | null;
  footer?: ReactNode;
}) {
  const s = useMemo(() => createStyles(), []);

  const renderRow = (row: Row, key: number) => {
    if (row.kind === 'title') {
      return (
        <MathLine
          key={key}
          text={row.raw}
          style={s.title}
          mathStyle={s.title}
          fontSize={SIZE}
          color={INK}
        />
      );
    }
    if (row.kind === 'display') {
      return (
        <View key={key} style={s.display}>
          <MathLine
            text={row.raw}
            style={s.displayText}
            mathStyle={s.displayText}
            fontSize={SIZE}
            color={INK}
          />
        </View>
      );
    }
    return (
      <MathLine
        key={key}
        text={row.raw}
        style={s.prose}
        mathStyle={s.inlineMath}
        fontSize={SIZE}
        color={INK_70}
      />
    );
  };

  return (
    <View style={s.steps}>
      <View style={s.rail} />

      {steps.map((step, i) => {
        const rows = rowsFor(step);
        return (
          <View key={i} style={s.step}>
            <View style={[s.num, rows[0]?.kind === 'display' && s.numLow]}>
              <Text style={s.numText}>{String(i + 1).padStart(2, '0')}</Text>
            </View>
            {rows.map(renderRow)}
          </View>
        );
      })}

      {!!answer && (
        <View style={s.step}>
          <View style={[s.num, s.numFinal]}>
            <Text style={s.numFinalText}>✓</Text>
          </View>
          <Text style={s.finalLabel}>Final answer</Text>
          <View style={s.answerWrap}>
            {/* The option it landed on, beside the answer itself: the API
                stores a choice question's answer as the option's TEXT, and the
                letter is what a student checks against their paper. */}
            {!!answerLabels?.length && (
              <Text style={s.answerPick}>({answerLabels.join(', ')})</Text>
            )}
            <MathLine text={answerRaw ?? answer} style={s.answerText} fontSize={SIZE} color={GREEN_INK} />
          </View>
          {footer}
        </View>
      )}
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    steps: { position: 'relative', paddingLeft: RAIL, gap: 28 },
    rail: {
      position: 'absolute',
      left: 10.5,
      top: 10,
      bottom: 10,
      width: 1,
      backgroundColor: HAIR,
    },
    step: { position: 'relative', gap: 8, alignItems: 'flex-start', alignSelf: 'stretch' },
    num: {
      position: 'absolute',
      left: -RAIL,
      top: 2,
      width: MARKER,
      height: MARKER,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,0.22)',
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    /** Level with an equation opening the step, which sits lower than a
     *  sentence's first line does. */
    numLow: { top: 8 },
    numText: { fontFamily: 'Onest_700Bold', fontSize: 10.5, color: '#57534B' },
    numFinal: { borderWidth: 0, backgroundColor: GREEN_WASH },
    numFinalText: { fontFamily: 'Onest_800ExtraBold', fontSize: 11.5, color: GREEN },

    title: {
      alignSelf: 'stretch',
      fontFamily: 'Onest_600SemiBold',
      fontSize: SIZE,
      lineHeight: SIZE * LEADING,
      color: INK,
    },
    prose: {
      alignSelf: 'stretch',
      fontFamily: 'Onest_400Regular',
      fontSize: SIZE,
      lineHeight: SIZE * LEADING,
      color: INK_70,
    },
    inlineMath: { fontFamily: 'Onest_500Medium', color: INK },

    /** The indent is the whole device: a line set in from the sentence above
     *  it reads as the working that sentence is talking about. */
    display: { alignSelf: 'stretch', paddingLeft: 16, paddingVertical: 5 },
    displayText: {
      fontFamily: 'Onest_500Medium',
      fontSize: SIZE,
      lineHeight: SIZE * LEADING,
      color: INK,
    },

    finalLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: SIZE,
      lineHeight: SIZE * LEADING,
      color: GREEN,
    },
    answerWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
      backgroundColor: GREEN_WASH,
    },
    answerPick: { fontFamily: 'Onest_800ExtraBold', fontSize: SIZE, color: GREEN_INK },
    answerText: { fontFamily: 'Onest_600SemiBold', fontSize: SIZE, color: GREEN_INK },
  });
}
