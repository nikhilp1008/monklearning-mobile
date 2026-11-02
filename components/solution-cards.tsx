import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { MathLine } from '@/components/math-line';
import { READ_GREY, READ_INK, READ_LINE, READ_SIZE, ROW_GAP } from '@/constants/reading';
import { solutionRows, splitFoot, type SolutionRow } from '@/lib/solution-rows';
import { ParsedStep } from '@/lib/solution-steps';

/**
 * A WORKED SOLUTION AS A STACK OF CARDS, the one design for Snap and Solve,
 * Practice and mock review (Nikhil and Raasikh picked C1 with the soft green
 * answer, 2 Nov 2026). It replaces two components that drew the same steps in
 * two separate codes and had drifted.
 *
 * Each step is a white card, so it holds together on Doubts' grid paper and on
 * Practice's white page alike. The equations that end a step sit in the card's
 * foot under a hairline: that is what a student scans a solution for. Nothing
 * behind the maths: a background per formula was tried again here, and a
 * solution with no headings came out as a stack of blocks.
 *
 * Sizes are the shared reading text (constants/reading.ts): a heading is set
 * apart by weight, never size.
 */

const INK = READ_INK;
const GREY = READ_GREY;
const FAINT = '#9C988C';
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';

function Row({ row }: { row: SolutionRow }) {
  if (row.kind === 'title' || row.kind === 'display') {
    return <MathLine text={row.raw} style={styles.strong} mathStyle={styles.strong} fontSize={READ_SIZE} color={INK} />;
  }
  const style = row.lead ? styles.lead : styles.prose;
  return <MathLine text={row.raw} style={style} mathStyle={style} fontSize={READ_SIZE} color={row.lead ? INK : GREY} />;
}

function Tick() {
  return (
    <View style={styles.tick}>
      <Svg width={12} height={12} viewBox="0 0 16 16" fill="none">
        <Path d="M3.5 8.4l3 3L12.5 5" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

export function SolutionCards({
  steps,
  answer,
  answerRaw,
  answerLabels,
  footer,
}: {
  steps: ParsedStep[];
  /** Closes the stack in green. Omit when the screen already shows the answer,
   *  as a picked option's CORRECT tag does. */
  answer?: string | null;
  /** The answer before conversion, so its fraction can be stacked. */
  answerRaw?: string | null;
  /** For a choice question, the label(s) the answer landed on: ["C"]. The API
   *  stores the option's TEXT, and the letter is what a student checks against
   *  their paper. */
  answerLabels?: string[] | null;
  footer?: ReactNode;
}) {
  return (
    <View style={styles.stack}>
      {steps.map((step, i) => {
        const { body, foot } = splitFoot(solutionRows(step));
        return (
          <View key={i} style={styles.card}>
            <View style={styles.body}>
              <Text style={styles.stepLabel}>Step {i + 1}</Text>
              {body.map((row, k) => (
                <Row key={k} row={row} />
              ))}
            </View>
            {foot.length > 0 ? (
              <View style={styles.foot}>
                {foot.map((row, k) => (
                  <Row key={k} row={row} />
                ))}
              </View>
            ) : null}
          </View>
        );
      })}

      {!!answer && (
        // The gradient is clipped by a plain view: on Android a gradient with
        // its own border draws square corners outside the radius.
        <View style={styles.answer}>
          <LinearGradient
            colors={['#EAF7EF', '#D3EFDF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.answerRow}>
            <View style={styles.answerWords}>
              <Text style={styles.answerLabel}>Final answer</Text>
              <View style={styles.answerValue}>
                {!!answerLabels?.length && <Text style={styles.answerPick}>({answerLabels.join(', ')})</Text>}
                {/* In its own flexing box: MathLine lays a line out as a row of
                    words, and beside the label it took its full natural width,
                    so a long multi-option answer ran off the card. */}
                <View style={styles.answerBody}>
                  <MathLine text={answerRaw ?? answer} style={styles.answerText} fontSize={READ_SIZE} color={GREEN_INK} />
                </View>
              </View>
            </View>
            <Tick />
          </LinearGradient>
        </View>
      )}
      {footer}
    </View>
  );
}

const text = { fontSize: READ_SIZE, lineHeight: READ_LINE };

const styles = StyleSheet.create({
  stack: { gap: 12 },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.10)',
    backgroundColor: '#FFFFFF',
    boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 14, spreadDistance: -8, color: 'rgba(28,26,22,.18)' }],
  },
  body: { padding: 16, gap: ROW_GAP },
  foot: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(28,26,22,.08)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 6,
  },
  stepLabel: { fontFamily: 'Onest_600SemiBold', fontSize: 13, color: FAINT },
  strong: { ...text, fontFamily: 'Onest_600SemiBold', color: INK },
  lead: { ...text, fontFamily: 'Onest_400Regular', color: INK },
  prose: { ...text, fontFamily: 'Onest_400Regular', color: GREY },
  answer: {
    marginTop: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(28,155,87,.28)',
    overflow: 'hidden',
  },
  answerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 16, paddingHorizontal: 16 },
  answerWords: { flex: 1, gap: 2 },
  answerLabel: { fontFamily: 'Onest_600SemiBold', fontSize: 13, color: GREEN_INK },
  answerValue: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1 },
  answerPick: { fontFamily: 'Onest_700Bold', fontSize: READ_SIZE, color: GREEN_INK },
  answerBody: { flexShrink: 1 },
  answerText: { fontFamily: 'Onest_600SemiBold', fontSize: READ_SIZE, color: GREEN_INK },
  tick: { width: 22, height: 22, borderRadius: 11, backgroundColor: GREEN, alignItems: 'center', justifyContent: 'center' },
});
