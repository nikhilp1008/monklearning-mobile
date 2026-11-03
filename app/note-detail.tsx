import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';

import { NotePage, NotePageSkeleton } from '@/components/note-page';
import { StateScreen } from '@/components/states';
import { friendlyError } from '@/lib/api';
import { DEMO_NOTE_CONTENT, DEMO_NOTE_ID } from '@/lib/demo-board';
import { parseNotePage, placeFigures } from '@/lib/note-page-model';
import { NoteDetail, getNote } from '@/lib/notes';

export default function NoteDetailScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();


  const [note, setNote] = useState<NoteDetail | null>(null);
  const [loading, setLoading] = useState(!!params.id);
  const [loadError, setLoadError] = useState<string | null>(null);
  /** Bumped by Try again, which re-runs the load below. */
  const [attempt, setAttempt] = useState(0);

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
        if (!cancelled) setLoadError(friendlyError(err, 'load this note'));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [params.id, isDemo, attempt]);

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
  // The class's figures, taped in beside the lines they draw (placeFigures).
  const sections = useMemo(() => {
    const page = parseNotePage(isDemo ? DEMO_NOTE_CONTENT : (note?.content ?? ''));
    const figures = (isDemo ? [] : (note?.board_items ?? []))
      .filter((g) => g.figure?.svg)
      .map((g) => ({
        svg: g.figure!.svg,
        numbers: g.figure!.numbers ?? [],
        caption: g.segment_title,
        after: g.figure!.after,
        context: [g.segment_title, ...(g.items ?? []).map((it) => `${it.text ?? ''}`)].join(' '),
      }));
    return placeFigures(page, figures);
  }, [note?.content, note?.board_items, isDemo]);

  if (!isDemo && loading) {
    return (
      <>
        <StatusBar style="dark" />
        <NotePageSkeleton onBack={() => router.back()} />
      </>
    );
  }

  if (!isDemo && loadError) {
    return (
      <StateScreen
        onBack={() => router.back()}
        glyph="retry"
        title="This note didn't open"
        line="Check your connection and try again. It's still saved."
        action={{ label: 'Try again', onPress: () => setAttempt((n) => n + 1) }}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NotePage
        title={note?.concept ?? note?.chapter ?? params.title ?? 'This note'}
        subject={note?.subject ?? params.subject ?? null}
        sections={sections}
        onBack={() => router.back()}
        emptyNote="Nothing was written to the board in this class."
      />
    </>
  );
}
