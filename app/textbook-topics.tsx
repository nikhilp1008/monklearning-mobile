import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { kicker } from '@/components/textbook/theme';
import { jumpToTopic, readerTopics } from '@/lib/textbook-reader-state';

/**
 * The chapter's topics, as a half-screen sheet over the reader.
 *
 * Read once on mount rather than subscribed: the reader cannot change its
 * topic list while this is covering it, and re-reading on every render would
 * make the sheet flicker as the reader animates its own topic change
 * underneath.
 */
export default function TextbookTopicsScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [{ title, topics, active }] = useState(readerTopics);

  const choose = (index: number) => {
    jumpToTopic(index);
    router.back();
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Pressable style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView edges={['bottom']}>
          <View style={styles.grabberRow}>
            <View style={styles.grabber} />
          </View>
          <Text style={[kicker(scale), styles.header]}>In this chapter · {title}</Text>
          <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
            {topics.map((topic, index) => {
              const current = index === active;
              return (
                <Pressable
                  key={topic.n}
                  onPress={() => choose(index)}
                  style={({ pressed }) => [
                    styles.row,
                    current && styles.rowCurrent,
                    pressed && !current && styles.rowPressed,
                  ]}>
                  <Text style={[styles.number, current && styles.numberCurrent]}>{topic.n}</Text>
                  <Text style={[styles.title, current && styles.titleCurrent]}>{topic.title}</Text>
                  {current && <Text style={styles.reading}>Reading</Text>}
                </Pressable>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    root: { flex: 1, justifyContent: 'flex-end' },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,26,22,.3)' },
    sheet: {
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(22),
      borderTopRightRadius: scale(22),
      maxHeight: '62%',
    },
    grabberRow: { alignItems: 'center', paddingTop: verticalScale(8), paddingBottom: verticalScale(4) },
    grabber: { width: scale(40), height: 4, borderRadius: 99, backgroundColor: 'rgba(28,26,22,.18)' },
    header: { paddingHorizontal: scale(24), paddingTop: verticalScale(8), paddingBottom: verticalScale(6) },
    list: { flexGrow: 0 },
    listContent: { paddingBottom: verticalScale(12) },
    row: {
      flexDirection: 'row',
      // Top, not centre. Two of these five titles wrap, and centring floated
      // the number and the "Reading" tag into the gap between the two lines
      // instead of setting them on the first one. A numbered list aligns on
      // its first line; that is the misalignment, not the digits themselves,
      // which are zero-padded and were always the same width.
      alignItems: 'flex-start',
      gap: scale(14),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(24),
    },
    rowCurrent: { backgroundColor: colors.tint },
    rowPressed: { backgroundColor: 'rgba(28,26,22,.03)' },
    /**
     * Right-aligned in a 24pt box, on tabular figures.
     *
     * It was left-aligned in 20: "9" is 9.9pt wide and "10" is 16.6pt, so
     * single and double digits ended at different x and the column read as
     * ragged. 20 was also within 0.4pt of overflowing on "20" once the face
     * changed, which a larger text setting would have pushed over.
     *
     * lineHeight is explicit here and on the title so the two sit on one
     * baseline: the row centres its children, and 16pt and 15.5pt text have
     * different default line boxes, which tilted the pair by a fraction.
     */
    number: {
      width: scale(24),
      textAlign: 'right',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      lineHeight: scale(22),
      fontVariant: ['tabular-nums'],
      color: colors.quiet,
    },
    numberCurrent: { color: colors.amberText, fontFamily: 'Onest_700Bold' },
    title: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15.5),
      lineHeight: scale(22),
      color: colors.ink,
    },
    titleCurrent: { fontFamily: 'Onest_700Bold' },
    reading: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(0.6),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
  });
}
