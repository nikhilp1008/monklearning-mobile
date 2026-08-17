import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BoardPage } from '@/components/board-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { buildBoardContent } from '@/lib/board-sections';
import { DEMO_BOARD, DEMO_NOTE_ID } from '@/lib/demo-board';
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

  const isDemo = params.id === DEMO_NOTE_ID;

  useEffect(() => {
    if (!params.id || isDemo) return;
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
  }, [params.id, isDemo]);

  // Board items when the server stored them — one section per lesson segment,
  // which is the shape the design's section list wants — falling back to the
  // flat content for notes saved before they were kept.
  const board = useMemo(
    () =>
      isDemo
        ? DEMO_BOARD
        : buildBoardContent({
        topic: note?.concept ?? note?.chapter ?? params.title ?? 'This note',
        subject: note?.subject ?? params.subject ?? '',
        boardItems: note?.board_items,
        content: note?.content,
      }),
    [note, params.title, params.subject, isDemo]
  );

  if (!isDemo && (loading || loadError)) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.stateBlock}>
            {loading ? (
              <ActivityIndicator color={colors.ink} />
            ) : (
              <Text style={styles.stateText}>{loadError}</Text>
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <BoardPage
        board={board}
        mode="note"
        onBack={() => router.back()}
        emptyNote="Nothing was written to the board in this class."
      />
    </>
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
    stateBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(28),
      gap: verticalScale(10),
    },
    stateText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
  });
}
