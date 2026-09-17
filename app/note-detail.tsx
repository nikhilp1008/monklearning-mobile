import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BoardPageSkeleton } from '@/components/board-page';
import { NotePage } from '@/components/note-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DEMO_NOTE_CONTENT, DEMO_NOTE_ID } from '@/lib/demo-board';
import { parseNotePage } from '@/lib/note-page-model';
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

  /**
   * THE NOTE THE SERVER ALREADY ORGANISED, not the raw board.
   *
   * This read `board_items` first and only fell back to `content` when there
   * were none — so every note that stored its board printed the transcript and
   * threw away the organised version sitting in the same payload.
   * `structure_note_content` on the API spends a whole model pass grouping the
   * board, ordering it for revision, lifting formulas onto their own lines and
   * writing a QUICK REVISION summary. That is the note; the board items are the
   * tape it was made from.
   *
   * It is also the only source the written page can be drawn from: its
   * headings, bullets, formulas and summary ARE the page's parts, and a
   * transcript has none of them.
   */
  const sections = useMemo(
    () => parseNotePage(isDemo ? DEMO_NOTE_CONTENT : (note?.content ?? '')),
    [note?.content, isDemo]
  );

  /** Written at the top right of the page, the way a page gets dated. */
  const savedAt = useMemo(() => {
    const iso = isDemo ? null : note?.created_at;
    if (!iso) return params.time ?? null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return params.time ?? null;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }, [note?.created_at, params.time, isDemo]);

  if (!isDemo && loading) {
    return (
      <>
        <StatusBar style="dark" />
        <BoardPageSkeleton onBack={() => router.back()} />
      </>
    );
  }

  if (!isDemo && loadError) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.stateBlock}>
            <Text style={styles.stateText}>{loadError}</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NotePage
        title={note?.concept ?? note?.chapter ?? params.title ?? 'This note'}
        subject={note?.subject ?? params.subject ?? null}
        savedAt={savedAt}
        sections={sections}
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
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
  });
}
