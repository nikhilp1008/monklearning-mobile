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
      alignItems: 'center',
      gap: scale(14),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(24),
    },
    rowCurrent: { backgroundColor: colors.tint },
    rowPressed: { backgroundColor: 'rgba(28,26,22,.03)' },
    number: {
      width: scale(20),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      color: colors.quiet,
    },
    numberCurrent: { color: colors.amberText, fontFamily: 'Onest_700Bold' },
    title: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15.5),
      color: colors.ink,
    },
    titleCurrent: { fontFamily: 'Onest_700Bold' },
    reading: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
  });
}
