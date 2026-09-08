import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { ERASE, EraseModeLine, EraseTool, Erasable, UndoRow } from '@/components/erase';
import { PressableScale } from '@/components/pressable-scale';
import { Skeleton, stagger } from '@/components/skeleton';
import { friendlyLoadError } from '@/lib/api';
import { latexToText } from '@/lib/latex-text';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  DoubtSubjectChip,
  DoubtSummary,
  deleteDoubt,
  formatRelativeTime,
  listDoubts,
  subjectMatches,
} from '@/lib/doubts';
import {
  DEMO_DOUBT_CARDS,
  DEMO_NOTE_CARDS,
  DemoDoubtCard,
  DemoNoteCard,
} from '@/lib/demo-board';
import { NoteSummary, deleteNote, listNotes } from '@/lib/notes';

type SubjectFilter = 'All' | 'Physics' | 'Chemistry' | 'Maths' | 'Biology';

const FILTERABLE_SUBJECTS: SubjectFilter[] = ['Physics', 'Chemistry', 'Maths', 'Biology'];
const DEFAULT_FILTERS: SubjectFilter[] = ['Physics', 'Chemistry', 'Maths'];
const SUBJECT_FILTER_LABEL: Record<string, SubjectFilter> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  maths: 'Maths',
  biology: 'Biology',
};

/**
 * What the search line cycles through. The subjects are the point: with the
 * filter chips gone, this is what tells a student that typing "physics"
 * narrows the list.
 */
const NOTE_HINTS = [
  'Search your notes…',
  'Search Physics…',
  'Search Chemistry…',
  'Search Maths…',
  'Search Biology…',
];
const DOUBT_HINTS = NOTE_HINTS.map((h) => h.replace('your notes', 'your doubts'));

/**
 * Notes and Doubts — one list, mounted twice.
 *
 * These were two segments of a Library tab. They are tabs of their own now,
 * so the pager, the segment row and its sliding indicator are gone; what is
 * left is the same list with a `kind` deciding which half it shows. Two
 * copies of five hundred lines would have drifted apart the first time either
 * was touched.
 */
export function LibraryList({ kind }: { kind: 'notes' | 'doubts' }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const notesFilter: SubjectFilter = 'All';
  /**
   * The doubts filter holds the stored subject KEY ("mathematics"), not the
   * label — the chip prints `label` ("Math"). Notes keep the label-based
   * `SubjectFilter` because /notes has no chip endpoint to read from.
   */
  const doubtsFilter = 'All';
  const [doubtChips, setDoubtChips] = useState<DoubtSubjectChip[]>([]);
  const [notesQuery, setNotesQuery] = useState('');
  const [doubtsQuery, setDoubtsQuery] = useState('');

  // --- Erase to remove ---------------------------------------------------
  // The mode belongs to the list you are looking at: Notes and Doubts each
  // have one, and changing tab puts the eraser down rather than carrying the
  // mode across to a list you did not arm it for.
  const [eraseMode, setEraseMode] = useState(false);
  /** The last removal, held so UNDO can put it back where it was. */
  const [undoState, setUndoState] = useState<
    | { kind: 'sample'; index: number; item: DemoNoteCard }
    | { kind: 'note'; index: number; item: NoteSummary }
    | { kind: 'doubtSample'; index: number; item: DemoDoubtCard }
    | { kind: 'doubt'; index: number; item: DoubtSummary }
    | null
  >(null);
  const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * The server delete is deferred until the undo window closes.
   *
   * It used to fire the moment the card was rubbed out, so UNDO put the card
   * back on screen and nothing put it back on the server: switch tabs, the
   * focus refetch runs, and it is gone for good. The affordance worked and the
   * promise behind it did not.
   *
   * Held here rather than in the removers so the rule is in one place: the
   * newest removal owns the row, and arming a new one commits the previous
   * one's delete immediately — which is exactly when that one stopped being
   * undoable.
   */
  const pendingDeleteRef = useRef<(() => void) | null>(null);

  const commitPendingDelete = useCallback(() => {
    const run = pendingDeleteRef.current;
    pendingDeleteRef.current = null;
    run?.();
  }, []);

  const armUndo = useCallback(
    (next: NonNullable<typeof undoState>, commit?: () => void) => {
      // The newest removal owns the row; the previous one becomes final.
      if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
      commitPendingDelete();
      pendingDeleteRef.current = commit ?? null;
      setUndoState(next);
      undoTimerRef.current = setTimeout(() => {
        commitPendingDelete();
        setUndoState(null);
      }, ERASE.undoMs);
    },
    [commitPendingDelete]
  );

  useEffect(
    () => () => {
      if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
      // Leaving the screen ends the undo window: commit rather than drop it,
      // or a card the student erased would quietly come back.
      const run = pendingDeleteRef.current;
      pendingDeleteRef.current = null;
      run?.();
    },
    []
  );

  const [doubts, setDoubts] = useState<DoubtSummary[]>([]);
  // DEMO_ — the same trick Notes uses: sample cards so the erase gesture can
  // be tried while the real list is empty. Removing one is local only.
  const [sampleDoubts, setSampleDoubts] = useState<DemoDoubtCard[]>(DEMO_DOUBT_CARDS);
  const [doubtsLoading, setDoubtsLoading] = useState(true);
  const [doubtsError, setDoubtsError] = useState<string | null>(null);

  const [notes, setNotes] = useState<NoteSummary[]>([]);
  // DEMO_ — sample cards so the erase gesture can be tried while the real
  // Notes list is empty. Removing one is local only; there is nothing saved.
  const [sampleNotes, setSampleNotes] = useState<DemoNoteCard[]>(DEMO_NOTE_CARDS);
  const [notesLoading, setNotesLoading] = useState(true);
  const [notesError, setNotesError] = useState<string | null>(null);

  // Fetched unfiltered and filtered at render time, so switching a chip costs
  // no round trip. The chips themselves come from the response rather than
  // being derived from the rows — see `doubtsFilters`.
  const fetchDoubts = useCallback(() => {
    let cancelled = false;
    setDoubtsLoading(true);
    setDoubtsError(null);
    listDoubts()
      .then((res) => {
        if (cancelled) return;
        setDoubts(res.doubts.filter((d) => d.status === 'solved'));
        setDoubtChips(res.subjects ?? []);
      })
      .catch((err) => {
        if (!cancelled) setDoubtsError(friendlyLoadError(err, 'doubts'));
      })
      .finally(() => {
        if (!cancelled) setDoubtsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const fetchNotes = useCallback(() => {
    let cancelled = false;
    setNotesLoading(true);
    setNotesError(null);
    listNotes()
      .then((res) => {
        if (!cancelled) setNotes(res.notes);
      })
      .catch((err) => {
        if (!cancelled) setNotesError(friendlyLoadError(err, 'notes'));
      })
      .finally(() => {
        if (!cancelled) setNotesLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => fetchDoubts(), [fetchDoubts]);
  useEffect(() => fetchNotes(), [fetchNotes]);

  // Library is a tab screen that stays mounted — without this, snapping a
  // doubt and returning here wouldn't show it until something else forced a
  // refetch, contradicting the "find it in Library any time" promise
  // snap-solved makes.
  useFocusEffect(
    useCallback(() => {
      const cancelDoubts = fetchDoubts();
      const cancelNotes = fetchNotes();
      return () => {
        cancelDoubts();
        cancelNotes();
      };
    }, [fetchDoubts, fetchNotes])
  );

  // The sample cards stand in only while nothing real is saved.
  const showingSamples = notes.length === 0 && notesFilter === 'All';
  const hasErasableNotes = showingSamples ? sampleNotes.length > 0 : notes.length > 0;
  // Same rule as the notes samples: they stand in only while nothing real
  // exists, and never instead of a filtered-empty result — "no Chemistry
  // doubts yet" is a true answer and samples would contradict it.

  const showingDoubtSamples = doubts.length === 0 && doubtsFilter === 'All' && !doubtsQuery.trim();
  const hasErasableDoubts = showingDoubtSamples ? sampleDoubts.length > 0 : doubts.length > 0;

  const toggleErase = useCallback(() => {
    setEraseMode((on) => {
      if (!on) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      return !on;
    });
  }, []);

  /** Both segments can be erased — everything left in Library is the
   *  student's own. */
  const canErase =
    kind === 'notes'
      ? hasErasableNotes
      : kind === 'doubts'
        ? hasErasableDoubts
        : false;

  // Empty list — put the eraser down and hide the tool.
  useEffect(() => {
    if (eraseMode && !canErase) setEraseMode(false);
  }, [eraseMode, canErase]);

  // The index is read here rather than inside the state updater: an updater
  // has to be pure, and arming the undo row from inside one silently dropped
  // it on the first removal.
  const removeSample = useCallback(
    (id: string) => {
      const index = sampleNotes.findIndex((n) => n.id === id);
      if (index < 0) return;
      armUndo({ kind: 'sample', index, item: sampleNotes[index] });
      setSampleNotes((prev) => prev.filter((n) => n.id !== id));
    },
    [armUndo, sampleNotes]
  );

  const removeNote = useCallback(
    (id: string) => {
      const index = notes.findIndex((n) => n.id === id);
      if (index < 0) return;
      armUndo({ kind: 'note', index, item: notes[index] }, () => {
        // A failure here is not worth a dialog — the next refetch corrects it.
        deleteNote(id).catch(() => {});
      });
      setNotes((prev) => prev.filter((n) => n.id !== id));
    },
    [armUndo, notes]
  );

  const removeDoubtSample = useCallback(
    (id: string) => {
      const index = sampleDoubts.findIndex((d) => d.id === id);
      if (index < 0) return;
      armUndo({ kind: 'doubtSample', index, item: sampleDoubts[index] });
      setSampleDoubts((prev) => prev.filter((d) => d.id !== id));
    },
    [armUndo, sampleDoubts]
  );

  const removeDoubt = useCallback(
    (id: string) => {
      const index = doubts.findIndex((d) => d.id === id);
      if (index < 0) return;
      armUndo({ kind: 'doubt', index, item: doubts[index] }, () => {
        // DELETE /doubts/{id} drops one question, and the photo only when no
        // other question still uses it — which is why these are one card per
        // question. Runs only once undo is no longer on offer.
        deleteDoubt(id).catch(() => {});
      });
      setDoubts((prev) => prev.filter((d) => d.id !== id));
    },
    [armUndo, doubts]
  );

  const undoRemoval = useCallback(() => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    // Nothing was sent yet, so undo is a genuine cancel rather than a
    // best-effort restore of something already deleted.
    pendingDeleteRef.current = null;
    setUndoState((state) => {
      if (!state) return null;
      // Back at its original index, not appended to the end.
      if (state.kind === 'sample') {
        setSampleNotes((prev) => {
          const next = prev.slice();
          next.splice(state.index, 0, state.item);
          return next;
        });
      } else if (state.kind === 'doubtSample') {
        setSampleDoubts((prev) => {
          const next = prev.slice();
          next.splice(state.index, 0, state.item);
          return next;
        });
      } else if (state.kind === 'doubt') {
        setDoubts((prev) => {
          const next = prev.slice();
          next.splice(state.index, 0, state.item);
          return next;
        });
        // Same gap as notes: the row is already deleted server-side and
        // nothing re-creates it, so the next refetch drops it again. Flagged
        // for the backend — undo needs a soft delete to be honest.
      } else {
        setNotes((prev) => {
          const next = prev.slice();
          next.splice(state.index, 0, state.item);
          return next;
        });
        // Nothing re-creates a deleted note on the server yet — see the note
        // in lib/notes.ts. Undo restores the list; the refetch on focus is
        // what would drop it again, so this is flagged for the backend.
      }
      return null;
    });
  }, []);

  const visibleNotes = useMemo(() => {
    const q = notesQuery.trim().toLowerCase();
    return notes.filter(
      (n) =>
        subjectMatches(n.subject, notesFilter) &&
        (!q ||
          [n.concept, n.chapter, n.preview]
            .filter(Boolean)
            .some((field) => field!.toLowerCase().includes(q)))
    );
  }, [notes, notesFilter, notesQuery]);

  const visibleDoubts = useMemo(() => {
    const q = doubtsQuery.trim().toLowerCase();
    return doubts.filter(
      (d) =>
        subjectMatches(d.subject, doubtsFilter) &&
        (!q ||
          [d.stem, d.question_text, d.chapter, d.concept]
            .filter(Boolean)
            .some((field) => field!.toLowerCase().includes(q)))
    );
  }, [doubts, doubtsFilter, doubtsQuery]);

  /**
   * The filter row offers only subjects the student actually has content in
   * (plus the default trio while empty) — a NEET student's Biology no longer
   * hides inside All because the pills were hardcoded for JEE.
   */
  const filtersFor = useCallback((subjects: (string | null)[]): SubjectFilter[] => {
    const present = new Set(
      subjects
        .filter(Boolean)
        .map((sub) => (SUBJECT_FILTER_LABEL[sub!.trim().toLowerCase()] ?? null))
        .filter(Boolean) as SubjectFilter[]
    );
    const ordered = FILTERABLE_SUBJECTS.filter((f) => present.has(f));
    return ['All', ...(ordered.length ? ordered : DEFAULT_FILTERS)];
  }, []);

  /**
   * Doubts chips come from the server, notes chips are still derived.
   *
   * Which subjects belong here depends on the student's exam, which lives on
   * `profiles` — the client cannot derive it. Deriving from the rows, as this
   * used to, meant a NEET student saw no Biology chip until they had already
   * snapped a Biology doubt, and the chip row changed shape as they used the
   * app. The server sends their syllabus first and appends anything they have
   * snapped from outside it, so the row is stable and complete from the first
   * open.
   *
   * The fallback is the old derivation, for a response that predates the
   * field — a missing chip row would leave no way to filter at all.
   */
  const doubtsFilters = useMemo<DoubtSubjectChip[]>(() => {
    if (doubtChips.length > 0) return doubtChips;
    return filtersFor(doubts.map((d) => d.subject))
      .filter((label) => label !== 'All')
      .map((label) => ({ key: label, label, on_syllabus: true }));
  }, [doubtChips, filtersFor, doubts]);

  /** The chip's own wording, so the empty state says "No Math doubts yet"
   *  rather than the stored key. */
  const doubtsFilterLabel = useMemo(
    () => doubtsFilters.find((c) => c.key === doubtsFilter)?.label ?? doubtsFilter,
    [doubtsFilters, doubtsFilter]
  );

  // One card per question, deliberately — not one per photo.
  //
  // These used to be grouped by `submission_id`, so a page with three
  // questions appeared as one card with "3 questions on this photo" under it.
  // It matched what the student saw right after snapping, and it broke two
  // things that matter more. A photo can hold a Physics question and a
  // Chemistry one, and a grouped card can only carry one subject — so the
  // filter above is wrong for it by construction. And when deleting arrives, a
  // student wanting to drop one bad question would have to drop the page.
  //
  // The API already returns a row per question, each with its own id, subject
  // and chapter. This is simply not undoing that any more.

  // Tracks each segment button's x/width so the sliding indicator below can
  // interpolate to its exact position instead of guessing at equal thirds —
  // "Notes" and "Doubts" aren't the same width.






  return (
    <View style={styles.screen}>
      {/* Erase mode only: a light amber wash falling from the very top of the
          screen, the same gesture as the class-dismissal page. It sits behind
          the header as well as the list, so there is no seam where the page
          begins. Subtle on purpose — it should say "different mode", not
          shout. */}
      {eraseMode && (
        <LinearGradient
          colors={['rgba(238,163,31,0.16)', 'rgba(238,163,31,0.05)', 'rgba(255,255,255,0)']}
          locations={[0, 0.45, 1]}
          style={styles.eraseWash}
          pointerEvents="none"
        />
      )}
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerFixed}>
          <View style={styles.headerRow}>
            <Text style={styles.heading}>{kind === 'notes' ? 'Notes' : 'Doubts'}</Text>
            {canErase && <EraseTool active={eraseMode} onPress={toggleErase} />}
          </View>
          {eraseMode && <EraseModeLine onDone={toggleErase} />}
        </View>

          {kind === 'notes' && (
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.searchLine}>
                <SearchIcon size={scale(15)} />
                <View style={styles.searchField}>
                  <TextInput
                    style={styles.searchInput}
                    value={notesQuery}
                    onChangeText={setNotesQuery}
                    autoCorrect={false}
                    returnKeyType="search"
                  />
                  {!notesQuery && (
                    <View style={styles.searchHint} pointerEvents="none">
                      <RotatingHint
                        hints={NOTE_HINTS}
                        height={verticalScale(20)}
                        style={styles.searchHintText}
                      />
                    </View>
                  )}
                </View>
              </View>

              {eraseMode && <EraseModeLine onDone={() => setEraseMode(false)} />}

              {notesLoading ? (
                <ListSkeleton styles={styles} kind="notes" count={5} />
              ) : notesError ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>{notesError}</Text>
                </View>
              ) : visibleNotes.length === 0 ? (
                // DEMO_ — while nothing real is saved, these sample cards
                // stand in so the erase gesture can be tried on a phone.
                // Cards only: they don't open a note page, and erasing one
                // removes it from this list and nothing else.
                showingSamples ? (
                  <View style={styles.notesRows}>
                    {sampleNotes.map((card, i) => (
                      <Erasable
                        key={card.id}
                        enabled={eraseMode}
                        onRemove={() => removeSample(card.id)}>
                        <View
                          style={[
                            styles.noteRow,
                            eraseMode && styles.noteCardErasing,
                            i > 0 && styles.noteRowDivided,
                          ]}>
                          <Text style={styles.noteRowTitle}>{card.title}</Text>
                          <Text style={styles.noteRowMeta}>
                            {card.subject} · {card.time}
                          </Text>
                          <Text style={styles.noteRowMeta}>{card.body}</Text>
                        </View>
                      </Erasable>
                    ))}
                  </View>
                ) : (
                  <View style={styles.stateBlock}>
                    <Text style={styles.stateText}>
                      {notes.length === 0
                        ? 'No saved notes yet — finish a class with Drona and save its board.'
                        : notesQuery.trim()
                          ? 'No notes match that search.'
                          : `No ${notesFilter} notes yet.`}
                    </Text>
                  </View>
                )
              ) : (
                <View style={styles.notesRows}>
                  {visibleNotes.map((note, i) => (
                    <Erasable
                      key={note.id}
                      enabled={eraseMode}
                      onRemove={() => removeNote(note.id)}>
                      <PressableScale
                        style={[
                          styles.noteRow,
                          eraseMode && styles.noteCardErasing,
                          // Last, so it survives noteCardErasing's `borderColor`.
                          i > 0 && styles.noteRowDivided,
                        ]}
                        disabled={eraseMode}
                        onPress={() =>
                          router.push({
                            pathname: '/note-detail',
                            params: {
                              id: note.id,
                              title: note.concept ?? note.chapter ?? 'Untitled note',
                              subject: note.subject ?? '',
                              chapter: note.chapter ?? '',
                              time: `saved ${formatRelativeTime(note.created_at)}`,
                            },
                          })
                        }>
                        <Text style={styles.noteRowTitle}>
                          {note.concept ?? note.chapter ?? 'Untitled note'}
                        </Text>
                        <Text style={styles.noteRowMeta}>
                          {[note.subject, formatRelativeTime(note.created_at)]
                            .filter(Boolean)
                            .join(' · ')}
                        </Text>
                        {/* export-8a's third line reads "8 key points · 3
                            formulas · 1 diagram". The API does not break the
                            board down by type — /notes returns `preview`, its
                            own one-line summary ("12 board items · 3 of 5
                            parts"), and the breakdown only exists on a note's
                            detail, one fetch per row. So the server's own line
                            fills the slot rather than a count we would have to
                            invent. */}
                        {!!note.preview && (
                          <Text style={styles.noteRowMeta}>{note.preview}</Text>
                        )}
                      </PressableScale>
                    </Erasable>
                  ))}
                </View>
              )}

              {undoState && <UndoRow onUndo={undoRemoval} />}
            </ScrollView>
          )}

          {kind === 'doubts' && (
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.searchLine}>
                <SearchIcon size={scale(15)} />
                <View style={styles.searchField}>
                  <TextInput
                    style={styles.searchInput}
                    value={doubtsQuery}
                    onChangeText={setDoubtsQuery}
                    autoCorrect={false}
                    returnKeyType="search"
                  />
                  {!doubtsQuery && (
                    <View style={styles.searchHint} pointerEvents="none">
                      <RotatingHint
                        hints={DOUBT_HINTS}
                        height={verticalScale(20)}
                        style={styles.searchHintText}
                      />
                    </View>
                  )}
                </View>
                {/* The camera sits inside the line rather than in a box beside
                    it -- export-8a gives the row no chrome of its own. */}
                <PressableScale hitSlop={10} onPress={() => router.push('/snap-capture')}>
                  <CameraIcon size={scale(19)} />
                </PressableScale>
              </View>

              {eraseMode && <EraseModeLine onDone={() => setEraseMode(false)} />}
              {doubtsLoading ? (
                <ListSkeleton styles={styles} kind="doubts" count={5} />
              ) : doubtsError ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>{doubtsError}</Text>
                </View>
              ) : showingDoubtSamples ? (
                // DEMO_ — sample cards so the tab can be read before anything
                // is snapped. Both came off one photo and carry different
                // subjects, which is the case that makes one card per question
                // the right unit.
                <View style={styles.doubtsRows}>
                  <Text style={styles.doubtsSampleNote}>
                    Nothing snapped yet — these two came off one photo, and each stands alone so
                    you can find and erase them separately.
                  </Text>
                  {sampleDoubts.map((card) => (
                    <Erasable
                      key={card.id}
                      enabled={eraseMode}
                      onRemove={() => removeDoubtSample(card.id)}>
                      <View style={[styles.doubtRow, eraseMode && styles.noteCardErasing]}>
                        <View style={styles.doubtThumb}>
                          <PagePlaceholder subject={card.subject} />
                        </View>
                        <View style={styles.doubtRowBody}>
                          <View style={styles.doubtRowMeta}>
                            <Text style={styles.doubtRowSubject} numberOfLines={1}>
                              {card.chapter}
                            </Text>
                            <Text style={styles.doubtRowTime}>{card.time}</Text>
                          </View>
                          <Text style={styles.doubtRowQuestion} numberOfLines={2}>
                            {card.question}
                          </Text>
                        </View>
                      </View>
                    </Erasable>
                  ))}
                </View>
              ) : visibleDoubts.length === 0 ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>
                    {doubtsQuery.trim()
                      ? 'No doubts match that search.'
                      : `No ${doubtsFilterLabel} doubts yet.`}
                  </Text>
                </View>
              ) : (
                <View style={styles.doubtsRows}>
                  {visibleDoubts.map((doubt) => (
                    <Erasable
                      key={doubt.id}
                      enabled={eraseMode}
                      onRemove={() => removeDoubt(doubt.id)}>
                      <PressableScale
                        style={[styles.doubtRow, eraseMode && styles.noteCardErasing]}
                        disabled={eraseMode}
                        onPress={() =>
                          router.push({
                            pathname: '/doubt-detail',
                            params: {
                              id: doubt.id,
                              title: doubt.stem ?? doubt.question_text ?? '',
                              subject: doubt.subject ?? '',
                              chapter: doubt.chapter ?? doubt.concept ?? '',
                              time: `snapped ${formatRelativeTime(doubt.created_at)}`,
                            },
                          })
                        }>
                        {/* The 84pt thumbnail.
                            export-8a ships this as a CSS placeholder and says
                            so: "swap the 84x84 div for an <img>". It cannot be
                            swapped yet — the list endpoint returns
                            DoubtSummary, which has no photo. `image_url` exists
                            only on DoubtDetail, one fetch per row, so filling
                            this needs `image_url` added to GET /doubts.

                            Until then it is the mock's own placeholder: a warm
                            page with faint rules, which is what a snapped
                            question actually looks like. Add the <Image> here
                            the day the field lands. */}
                        <View style={styles.doubtThumb}>
                          <PagePlaceholder subject={doubt.subject} />
                        </View>
                        <View style={styles.doubtRowBody}>
                          <View style={styles.doubtRowMeta}>
                            <Text style={styles.doubtRowSubject} numberOfLines={1}>
                              {doubt.subject_label ?? doubt.subject ?? 'Doubt'}
                            </Text>
                            <Text style={styles.doubtRowTime}>
                              {formatRelativeTime(doubt.created_at)}
                            </Text>
                          </View>
                          <Text style={styles.doubtRowQuestion} numberOfLines={2}>
                            {latexToText(doubt.stem ?? doubt.question_text ?? '(photo doubt)')}
                          </Text>
                        </View>
                      </PressableScale>
                    </Erasable>
                  ))}
                </View>
              )}
              {undoState && <UndoRow onUndo={undoRemoval} />}
            </ScrollView>
          )}
      </SafeAreaView>
    </View>
  );
}

/**
 * The thumbnail stand-in: a page with faint rules, exactly what export-8a
 * draws. The rule spacing and tilt vary by subject so a column of them does
 * not read as one repeated tile — the mock varies them per row for the same
 * reason.
 */
function PagePlaceholder({ subject }: { subject: string | null }) {
  const seed = (subject ?? '').length % 4;
  const step = [14, 11, 9, 13][seed];
  const tone = ['rgba(28,26,22,.16)', 'rgba(28,26,22,.13)', 'rgba(28,26,22,.12)', 'rgba(28,26,22,.15)'][seed];
  const ground = ['#F1EDE3', '#EDE9E0', '#E9E6DF', '#F3EFE6'][seed];
  const rules = [];
  for (let y = step; y < 84; y += step) rules.push(y);
  return (
    <Svg width="100%" height="100%" viewBox="0 0 84 84">
      <Rect x={0} y={0} width={84} height={84} fill={ground} />
      {rules.map((y) => (
        <Path key={y} d={`M6 ${y}H78`} stroke={tone} strokeWidth={1.2} />
      ))}
    </Svg>
  );
}

/**
 * The search hint, cycling.
 *
 * export-8a does this with a CSS keyframe sliding a column of five lines --
 * "Search your notes…", then each subject in turn -- holding each for about
 * two seconds over a twelve-second loop. It is the one thing carrying the
 * message that typing a subject narrows the list, now that the filter chips
 * are gone.
 *
 * A native TextInput placeholder cannot slide, so this is an overlay that
 * animates instead, shown only while the field is empty. `pointerEvents` is
 * off, so a tap lands on the input underneath as though the overlay were not
 * there.
 */
const HINT_HOLD_MS = 1900;
const HINT_SLIDE_MS = 500;

function RotatingHint({
  hints,
  height,
  style,
}: {
  hints: string[];
  height: number;
  style: TextStyle;
}) {
  const step = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // One extra frame at the end repeating the first line, so the wrap from
    // last to first slides in the same direction as every other step rather
    // than snapping backwards.
    const frames = hints.length;
    const seq = Array.from({ length: frames }, (_, i) =>
      Animated.sequence([
        Animated.delay(HINT_HOLD_MS),
        Animated.timing(step, {
          toValue: i + 1,
          duration: HINT_SLIDE_MS,
          easing: Easing.bezier(0.7, 0, 0.2, 1),
          useNativeDriver: true,
        }),
      ])
    );
    const loop = Animated.loop(
      Animated.sequence([...seq, Animated.timing(step, { toValue: 0, duration: 0, useNativeDriver: true })])
    );
    loop.start();
    return () => loop.stop();
  }, [hints.length, step]);

  const translateY = step.interpolate({
    inputRange: hints.map((_, i) => i).concat(hints.length),
    outputRange: hints.map((_, i) => -i * height).concat(-hints.length * height),
  });

  return (
    // `flexGrow: 0` matters: this sits in a centred column, and without it
    // flex stretches the box to the row's full height and two lines show at
    // once instead of one.
    <View style={{ height, overflow: 'hidden', flexGrow: 0, alignSelf: 'stretch' }} pointerEvents="none">
      <Animated.View style={{ transform: [{ translateY }] }}>
        {[...hints, hints[0]].map((hint, i) => (
          <Text key={i} style={[style, { height, lineHeight: height }]} numberOfLines={1}>
            {hint}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
}

/** The snap camera, from export-8a's search line. */
function CameraIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3"
        stroke={colors.ink}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={2.8}
        y={6.4}
        width={18.4}
        height={13.5}
        rx={3.2}
        stroke={colors.ink}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={13.2} r={3.6} stroke={colors.ink} strokeWidth={1.7} />
      <Circle cx={17.6} cy={9.6} r={1.1} fill={colors.marigold} />
    </Svg>
  );
}

function SearchIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={11} cy={11} r={7} stroke={colors.faint} strokeWidth={2} />
      <Path d="m20 20-3.2-3.2" stroke={colors.faint} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

// Same ink triple + border treatment as the Home redesign — see
// app/(tabs)/index.tsx.
const hairline = (alpha: number) => `rgba(28,26,22,${alpha})`;

/**
 * The waiting state, in the shape of the thing being waited for.
 *
 * Notes and Doubts used to be the same card, so one placeholder served both.
 * Under export-8a they are different objects — a stack of text lines against
 * a photo beside a question — so a single shape is now a placeholder for
 * neither, and the list visibly changed layout as it loaded.
 */
function ListSkeleton({
  styles,
  kind,
  count,
}: {
  styles: ReturnType<typeof createStyles>;
  kind: 'notes' | 'doubts';
  count: number;
}) {
  if (kind === 'notes') {
    return (
      <View style={styles.notesRows}>
        {Array.from({ length: count }, (_, i) => (
          <View key={i} style={styles.noteRow}>
            <Skeleton delay={stagger(i)} style={styles.skelNoteTitle} />
            <Skeleton delay={stagger(i) + 30} style={styles.skelNoteMeta} />
            <Skeleton delay={stagger(i) + 60} style={styles.skelNoteMetaShort} />
          </View>
        ))}
      </View>
    );
  }
  return (
    <View style={styles.doubtsRows}>
      {Array.from({ length: count }, (_, i) => (
        <View key={i} style={styles.doubtRow}>
          <Skeleton delay={stagger(i)} style={styles.skelThumb} />
          <View style={styles.doubtRowBody}>
            <Skeleton delay={stagger(i) + 30} style={styles.skelDoubtMeta} />
            <Skeleton delay={stagger(i) + 60} style={styles.skelDoubtLine} />
            <Skeleton delay={stagger(i) + 90} style={styles.skelDoubtLineShort} />
          </View>
        </View>
      ))}
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      minHeight: verticalScale(40),
    },
    headerFixed: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(24),
    },
    pageContent: {
      paddingTop: verticalScale(16),
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(130),
    },
    /** export-8a's title: 28/700 at -0.028em. Larger and heavier than the
     *  24/Medium the other tabs use — see the note in the commit. */
    heading: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(28),
      letterSpacing: scale(-0.78),
      lineHeight: scale(29.4),
      color: colors.ink,
    },
    /** A bare line, not a pill: 44pt tall on a single hairline. */
    searchLine: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      height: verticalScale(44),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.12)',
    },
    // --- notes rows: no card, no rule, 30pt apart ---
    notesRows: {
      paddingTop: verticalScale(24),
    },
    /**
     * The 30pt that used to be the container's `gap` is now 15 below one row
     * and 15 above the next, so the rule lands optically halfway between two
     * notes instead of hard against one of them. The rhythm is unchanged.
     */
    noteRow: {
      gap: verticalScale(6),
      paddingBottom: verticalScale(15),
    },
    /**
     * Carried by every row except the first, so the list never closes on a
     * dangling line.
     *
     * 1pt, not hairlineWidth. hairlineWidth is a single device pixel -- a
     * third of a point here -- and at .12 alpha that fell below the threshold
     * where the eye reads it as a divider at all: present in a screenshot,
     * invisible on the phone. 1pt is three times the ink and still lighter
     * than any border on the page.
     */
    noteRowDivided: {
      paddingTop: verticalScale(15),
      borderTopWidth: 1,
      borderTopColor: colors.hairline,
    },
    noteRowTitle: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(17),
      lineHeight: scale(24),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    noteRowMeta: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: '#8A857A',
    },
    // --- doubts rows: 84pt photo beside the question, 24pt apart ---
    doubtsRows: {
      gap: verticalScale(24),
      paddingTop: verticalScale(20),
    },
    doubtRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
    },
    doubtThumb: {
      position: 'relative',
      width: scale(84),
      height: scale(84),
      flexShrink: 0,
      borderRadius: scale(14),
      overflow: 'hidden',
      backgroundColor: '#F1EDE3',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
    },
    doubtThumbImage: {
      width: '100%',
      height: '100%',
    },
    doubtRowBody: {
      flex: 1,
      minWidth: 0,
      gap: verticalScale(6),
    },
    doubtRowMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    doubtRowSubject: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: '#9C988C',
    },
    doubtRowTime: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: '#9C988C',
      flexShrink: 0,
    },
    // Placeholders sized to the row they stand in for, so nothing shifts
    // when the real content arrives.
    skelNoteTitle: { width: '86%', height: verticalScale(17), borderRadius: scale(5) },
    skelNoteMeta: { width: '40%', height: verticalScale(11), borderRadius: scale(4) },
    skelNoteMetaShort: { width: '56%', height: verticalScale(11), borderRadius: scale(4) },
    skelThumb: {
      width: scale(84),
      height: scale(84),
      flexShrink: 0,
      borderRadius: scale(14),
    },
    skelDoubtMeta: { width: '52%', height: verticalScale(11), borderRadius: scale(4) },
    skelDoubtLine: { width: '100%', height: verticalScale(14), borderRadius: scale(4) },
    skelDoubtLineShort: { width: '72%', height: verticalScale(14), borderRadius: scale(4) },
    doubtRowQuestion: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    // Pushes the eraser to the right end of the tab row.
    segmentSpacer: {
      flex: 1,
    },
    eraseWash: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: verticalScale(560),
    },
    // Erase mode only: the tabs give up their underline while the mode line
    // below the filters does the separating.
    searchField: {
      flex: 1,
      justifyContent: 'center',
    },
    searchHint: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
    },
    searchHintText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: '#9C988C',
    },
    searchInput: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.ink,
      paddingVertical: 0,
    },
    /** Marks a chip that is not on this student's exam. Amber, because it is
     *  a note and not a warning — nothing here is wrong or refused. */
    filterPillOffSyllabus: {
      width: scale(5),
      height: scale(5),
      borderRadius: scale(99),
      backgroundColor: '#EEA31F',
    },
    noteCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.06,
      shadowRadius: scale(3),
      elevation: 2,
    },
    // Erase mode only: the card steps up very slightly so it sits above the
    // grey. The card colour itself must stay white — the rub paints paper.
    noteCardErasing: {
      borderColor: 'rgba(28,26,22,.16)',
      shadowOpacity: 0.06,
      shadowRadius: 5,
    },
    stateBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: verticalScale(40),
      paddingHorizontal: scale(20),
    },
    stateText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
    // DEMO_ — the line above the stand-in note card.
    // The same red margin rule the doubt of the day carries on Home. It is
    // what tells a glance this list is questions, not notes, and it does the
    // job the subject tag and topic heading were doing badly.
    /** The chapter, in sentence case rather than caps — two shouted labels on
     *  one line would compete, and the subject is the one being scanned. */
    doubtsSampleNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.faint,
      marginBottom: verticalScale(4),
    },
    urgentBadgeText: {
      flexShrink: 0,
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      color: '#C53A2B',
    },
    neutralBadgeText: {
      flexShrink: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10),
      color: colors.faint,
    },
    savedBadge: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
    },
    savedBadgeText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      color: '#157A45',
    },
  });
}
