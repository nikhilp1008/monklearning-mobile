import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MathText } from '@/components/math-text';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const CLASS_END_MARKER =
  '——— class ended here — everything below is the rest of the lesson, for self-study ———';

// A line with only uppercase letters/digits/punctuation and at least one
// actual letter — matches ALL-CAPS section headings without matching a
// blank separator or a lone formula/number line.
const ALL_CAPS_LINE = /^[A-Z0-9 &,'’\-—():.]+$/;
const HAS_LETTER = /[A-Z]/;
// A line that IS a formula, not prose that happens to contain one.
const STANDALONE_FORMULA = /^\$\$?.+\$\$?$/;

type Line =
  | { kind: 'heading'; text: string }
  | { kind: 'bullet'; text: string }
  | { kind: 'formula'; text: string }
  | { kind: 'divider' }
  | { kind: 'body'; text: string };

/**
 * Parses `notes.content` per the backend's own documented contract (see
 * app/drona/note_assembly.py's structure_note_content docstring — this is
 * the same contract the web app's NoteContent.tsx renders): ALL-CAPS lines
 * are section headings, "• "-prefixed lines are bullets, a line that's
 * entirely `$…$`/`$$…$$` is a standalone formula, the literal class-end
 * marker is a divider, anything else is body text. Falls back gracefully on
 * the raw (unstructured) board dump too — a segment title line that isn't
 * ALL-CAPS just reads as a body line instead of a heading, never crashes.
 */
function parseLines(raw: string): Line[] {
  return (raw ?? '')
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((rawLine): Line => {
      const line = rawLine.trim();
      if (line === CLASS_END_MARKER) return { kind: 'divider' };
      if (STANDALONE_FORMULA.test(line)) return { kind: 'formula', text: line };
      if (line.startsWith('• ')) return { kind: 'bullet', text: line.slice(2).trim() };
      if (ALL_CAPS_LINE.test(line) && HAS_LETTER.test(line) && line.length > 2) {
        return { kind: 'heading', text: line };
      }
      return { kind: 'body', text: line };
    });
}

export function NoteContent({ content }: { content: string }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const lines = useMemo(() => parseLines(content), [content]);

  if (lines.length === 0) {
    return <Text style={styles.emptyText}>Nothing was written to the board in this session.</Text>;
  }

  return (
    <View>
      {lines.map((line, i) => {
        switch (line.kind) {
          case 'heading':
            return (
              <Text key={i} style={[styles.heading, i > 0 && styles.headingSpaced]}>
                {line.text}
              </Text>
            );
          case 'bullet':
            return (
              <View key={i} style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <MathText
                  text={line.text}
                  fontSize={scale(14)}
                  lineHeight={scale(21)}
                  color={colors.slate}
                  style={styles.bulletTextBox}
                />
              </View>
            );
          case 'formula':
            return (
              <View key={i} style={styles.formulaBlock}>
                <MathText
                  text={line.text}
                  fontSize={scale(15)}
                  lineHeight={scale(22)}
                  color={colors.ink}
                  fontWeight="700"
                  textAlign="center"
                />
              </View>
            );
          case 'divider':
            return (
              <View key={i} style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>rest of the lesson · self-study</Text>
                <View style={styles.dividerLine} />
              </View>
            );
          case 'body':
            return (
              <MathText
                key={i}
                text={line.text}
                fontSize={scale(14)}
                lineHeight={scale(21.5)}
                color={colors.slate}
                style={styles.bodyBox}
              />
            );
        }
      })}
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    emptyText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: colors.faint,
    },
    heading: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12),
      letterSpacing: scale(0.6),
      color: colors.amberText,
      marginTop: verticalScale(4),
      marginBottom: verticalScale(8),
    },
    headingSpaced: {
      marginTop: verticalScale(20),
    },
    bulletRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(9),
      marginBottom: verticalScale(8),
    },
    bulletDot: {
      width: scale(5),
      height: scale(5),
      borderRadius: scale(2.5),
      backgroundColor: colors.marigold,
      marginTop: verticalScale(8),
      flexShrink: 0,
    },
    bulletTextBox: {
      flex: 1,
    },
    formulaBlock: {
      backgroundColor: 'rgba(28,26,22,.03)',
      borderRadius: scale(10),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(14),
      marginBottom: verticalScale(10),
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(16),
      marginBottom: verticalScale(14),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(28,26,22,.12)',
    },
    dividerText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10.5),
      color: colors.faint,
      textTransform: 'uppercase',
      letterSpacing: scale(0.4),
    },
    bodyBox: {
      marginBottom: verticalScale(9),
    },
  });
}
