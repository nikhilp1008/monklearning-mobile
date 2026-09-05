import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MathText } from '@/components/math-text';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

export interface SolutionStepLike {
  n: number;
  text: string;
}

type SolutionExplainProps = {
  steps?: SolutionStepLike[] | null;
  explanation?: string | null;
  answer?: string | null;
  keyIdea?: string | null;
  isMcq: boolean;
  optionLabels?: string[] | null;
  options?: string[] | null;
};

/**
 * Renders a solved question's MCQ options (if any), its worked solution —
 * broken into numbered step cards when the API provides `steps`, one clean
 * block when it only provides `explanation` — and a distinctly-highlighted
 * Final Answer callout. Shared by snap-solved.tsx and doubt-detail.tsx so
 * "how Drona explains a solution" only has one visual language in the app.
 *
 * The backend's `steps` shape is just `{n, text}` — no separate title/
 * equation fields — so each card can't split "what we're doing" from "the
 * equation" the way a hand-authored reference design might. MathText still
 * gives real math (when a step's text contains `$…$`/`$$…$$`) its own
 * visually distinct rendering within the flowing text, which is as far as
 * this can go without the backend itself returning more structured content.
 */
export function SolutionExplain({
  steps,
  explanation,
  answer,
  keyIdea,
  isMcq,
  optionLabels,
  options,
}: SolutionExplainProps) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const hasSteps = !!steps && steps.length > 0;

  return (
    <View>
      {isMcq && optionLabels && (
        <View style={styles.optionsList}>
          {optionLabels.map((label, i) => (
            <View key={label} style={styles.optionRow}>
              <Text style={styles.optionLabel}>{label}.</Text>
              <MathText
                text={options?.[i] ?? ''}
                fontSize={scale(13.5)}
                lineHeight={scale(20.5)}
                color={colors.slate}
                style={styles.optionTextBox}
              />
            </View>
          ))}
        </View>
      )}

      {hasSteps ? (
        <View style={styles.stepsList}>
          {steps!.map((step, i) => (
            <View key={step.n}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>STEP {i + 1}</Text>
              </View>
              <MathText
                text={step.text}
                fontSize={scale(13.5)}
                lineHeight={scale(21)}
                color={colors.ink}
                style={styles.stepBody}
              />
            </View>
          ))}
        </View>
      ) : explanation ? (
        <MathText
          text={explanation}
          fontSize={scale(14)}
          lineHeight={scale(22.4)}
          color={colors.slate}
          style={styles.fallbackBody}
        />
      ) : (
        <Text style={styles.noSolutionText}>No worked solution is available for this question yet.</Text>
      )}

      {answer && (
        <View style={styles.answerCard}>
          <Text style={styles.answerLabel}>FINAL ANSWER</Text>
          <MathText
            text={answer}
            fontSize={scale(15)}
            lineHeight={scale(21)}
            color="#157A45"
            fontWeight="700"
            style={styles.answerBody}
          />
        </View>
      )}

      {keyIdea && <Text style={styles.keyIdeaText}>{keyIdea}</Text>}
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    optionsList: {
      gap: verticalScale(6),
      marginBottom: verticalScale(12),
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(6),
    },
    optionLabel: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    optionTextBox: {
      flex: 1,
    },
    stepsList: {
      gap: verticalScale(14),
    },
    stepBadge: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(238,163,31,.14)',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.35)',
      borderRadius: scale(6),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(7),
      marginBottom: verticalScale(5),
    },
    stepBadgeText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.68),
      color: colors.amberText,
    },
    stepBody: {},
    fallbackBody: {},
    noSolutionText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      color: colors.faint,
    },
    answerCard: {
      marginTop: verticalScale(16),
      backgroundColor: 'rgba(28,155,87,.08)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(13),
    },
    answerLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.83),
      color: '#157A45',
      marginBottom: verticalScale(4),
    },
    answerBody: {},
    keyIdeaText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.red,
      marginTop: verticalScale(12),
    },
  });
}
