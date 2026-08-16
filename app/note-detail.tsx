import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { NoteContent } from '@/components/note-content';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { NoteDetail, getNote } from '@/lib/notes';

export default function NoteDetailScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [note, setNote] = useState<NoteDetail | null>(null);
  const [loading, setLoading] = useState(!!params.id);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.id) return;
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getNote(params.id)
      .then((n) => {
        if (!cancelled) setNote(n);
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err instanceof Error ? err.message : 'Could not load this note.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  // Instant paint from list params, replaced once the real fetch resolves.
  const title = note?.concept ?? note?.chapter ?? params.title ?? 'This note';
  const subject = note?.subject ?? params.subject ?? '';
  const chapter = note?.chapter ?? params.chapter ?? '';
  const time = params.time ?? '';

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentInner}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </Pressable>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>

          <View style={styles.tagsRow}>
            {!!subject && (
              <View style={styles.subjectPill}>
                <Text style={styles.subjectPillText}>{subject}</Text>
              </View>
            )}
            {!!chapter && chapter !== title && (
              <View style={styles.chapterPill}>
                <Text style={styles.chapterPillText}>{chapter}</Text>
              </View>
            )}
            {!!time && <Text style={styles.timeText}>{time}</Text>}
          </View>

          {loading ? (
            <View style={styles.loadingBlock}>
              <ActivityIndicator color={colors.ink} />
            </View>
          ) : loadError ? (
            <View style={styles.loadingBlock}>
              <Text style={styles.errorText}>{loadError}</Text>
            </View>
          ) : note ? (
            <View style={styles.noteCard}>
              <RuledPaper step={verticalScale(26)} color="rgba(28,26,22,.045)" count={40} />
              <NoteContent content={note.content} />
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      minHeight: 0,
    },
    contentInner: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(28),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      flex: 1,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    tagsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(10),
    },
    subjectPill: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    subjectPillText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.amberText,
    },
    chapterPill: {
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    chapterPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.slate,
    },
    timeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    loadingBlock: {
      paddingTop: verticalScale(50),
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    noteCard: {
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      padding: scale(18),
      marginTop: verticalScale(16),
      overflow: 'hidden',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
  });
}
