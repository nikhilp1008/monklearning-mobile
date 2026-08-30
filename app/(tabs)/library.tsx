import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { ERASE, EraseModeLine, EraseTool, Erasable, UndoRow } from '@/components/erase';
import { CheckIcon } from '@/components/check-icon';
import { PressableScale } from '@/components/pressable-scale';
import { Skeleton, stagger } from '@/components/skeleton';
import { ICON_CHIP, SnapADoubtIcon } from '@/components/monk-icons';
import { TextbooksPage } from '@/components/textbook/textbooks-page';
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
  DEMO_SESSION_ID,
  DemoDoubtCard,
  DemoNoteCard,
} from '@/lib/demo-board';
import { NoteSummary, deleteNote, listNotes } from '@/lib/notes';

type Segment = 'notes' | 'doubts' | 'textbooks' | 'sessions';
type SubjectFilter = 'All' | 'Physics' | 'Chemistry' | 'Maths' | 'Biology';

// Textbooks sits beside Doubts rather than at the end: a student is here to
// read or to look something up, and the two reading surfaces belong together.
const SEGMENTS: Segment[] = ['notes', 'doubts', 'textbooks', 'sessions'];
const SEGMENT_LABELS: Record<Segment, string> = {
  notes: 'Notes',
  doubts: 'Doubts',
  textbooks: 'Textbooks',
  sessions: 'Sessions',
};
const FILTERABLE_SUBJECTS: SubjectFilter[] = ['Physics', 'Chemistry', 'Maths', 'Biology'];
const DEFAULT_FILTERS: SubjectFilter[] = ['Physics', 'Chemistry', 'Maths'];
const SUBJECT_FILTER_LABEL: Record<string, SubjectFilter> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  maths: 'Maths',
  biology: 'Biology',
};

// Subject -> accent color, since /notes doesn't return one — same three
// brand accents used for the subject dot/label across the app.
const SUBJECT_ACCENT: Record<string, { dot: string; label: string }> = {
  physics: { dot: '#DD4433', label: '#C53A2B' },
  chemistry: { dot: '#1C9B57', label: '#157A45' },
  mathematics: { dot: '#EEA31F', label: '#9A6A12' },
  biology: { dot: '#1C9B57', label: '#157A45' },
};

type Session = {
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Maths';
  subline: string;
  badge: { kind: 'urgent' | 'neutral' | 'saved'; text: string };
};

// DEMO_ — there is no endpoint that lists past sessions yet, so one sample
// stands in to make the session page reviewable. Delete with lib/demo-board.ts
// once /drona/sessions exists.
const SESSIONS: Session[] = [
  {
    title: 'Rotational Motion · torque',
    subject: 'Physics',
    subline: 'Sample · tap to see a backed-up board',
    badge: { kind: 'neutral', text: '6 days left' },
  },
];

export default function LibraryScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { width: windowWidth } = useWindowDimensions();
  const [activeSegment, setActiveSegment] = useState<Segment>('notes');
  const [notesFilter, setNotesFilter] = useState<SubjectFilter>('All');
  /**
   * The doubts filter holds the stored subject KEY ("mathematics"), not the
   * label — the chip prints `label` ("Math"). Notes keep the label-based
   * `SubjectFilter` because /notes has no chip endpoint to read from.
   */
  const [doubtsFilter, setDoubtsFilter] = useState<string>('All');
  const [doubtChips, setDoubtChips] = useState<DoubtSubjectChip[]>([]);
  const [notesQuery, setNotesQuery] = useState('');
  const [doubtsQuery, setDoubtsQuery] = useState('');
  const pagerRef = useRef<ScrollView>(null);

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
    | { kind: 'doubtGroup'; index: number; items: DoubtSummary[] }
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
  // doubt (or saving a session as a note) and returning here wouldn't show it
  // until something else forced a refetch, contradicting the "find it in
  // Library any time" promise made on both snap-solved and session-board.
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

  /** Only Notes and Doubts can be erased; Sessions is a preview with nothing
   *  of the student's own in it. */
  const canErase =
    activeSegment === 'notes'
      ? hasErasableNotes
      : activeSegment === 'doubts'
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

  /**
   * Erasing a grouped card erases every question on that photo.
   *
   * The card is the photo, so a rubbed-out card cannot leave two of its three
   * questions behind — and a student who wants one gone can switch to its
   * subject, where the cards are questions again.
   */
  const removeDoubtGroup = useCallback(
    (questions: DoubtSummary[]) => {
      if (questions.length === 0) return;
      const ids = new Set(questions.map((q) => q.id));
      const index = doubts.findIndex((d) => ids.has(d.id));
      if (index < 0) return;
      armUndo({ kind: 'doubtGroup', index, items: questions }, () => {
        for (const q of questions) deleteDoubt(q.id).catch(() => {});
      });
      setDoubts((prev) => prev.filter((d) => !ids.has(d.id)));
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
      } else if (state.kind === 'doubtGroup') {
        setDoubts((prev) => {
          const next = prev.slice();
          next.splice(state.index, 0, ...state.items);
          return next;
        });
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
   * Under All, one card per PHOTO; under a subject, one per question.
   *
   * A photo can carry a Physics question and a Chemistry one, which is why
   * these are stored and filtered one question at a time. But "All" is not
   * asking a question about subject — it is the whole shelf — and there the
   * unit the student remembers is the photo they took. Asking three questions
   * at once and getting three separate cards back makes one act look like
   * three. The subject chips are where the split earns its keep, and they
   * still get it.
   */
  const doubtGroups = useMemo(() => {
    if (doubtsFilter !== 'All') {
      return visibleDoubts.map((d) => ({ key: d.id, questions: [d] }));
    }
    const order: string[] = [];
    const bySubmission = new Map<string, DoubtSummary[]>();
    for (const doubt of visibleDoubts) {
      // A row with no submission_id stands alone rather than joining a group
      // of everything that also lacks one.
      const key = doubt.submission_id || doubt.id;
      if (!bySubmission.has(key)) {
        bySubmission.set(key, []);
        order.push(key);
      }
      bySubmission.get(key)!.push(doubt);
    }
    return order.map((key) => ({
      key,
      questions: (bySubmission.get(key) ?? []).slice().sort(
        (a, b) => a.question_index - b.question_index
      ),
    }));
  }, [visibleDoubts, doubtsFilter]);

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

  const notesFilters = useMemo(() => filtersFor(notes.map((n) => n.subject)), [filtersFor, notes]);
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
  // "Notes"/"Doubts"/"Sessions" aren't the same width.
  const [segmentLayouts, setSegmentLayouts] = useState<{ x: number; width: number }[]>(
    SEGMENTS.map(() => ({ x: 0, width: 0 }))
  );
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleSegmentLayout = (index: number) => (event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;
    setSegmentLayouts((prev) => {
      const next = [...prev];
      next[index] = { x, width };
      return next;
    });
  };

  const goToSegment = (segment: Segment) => {
    setActiveSegment(segment);
    setEraseMode(false);
    pagerRef.current?.scrollTo({ x: SEGMENTS.indexOf(segment) * windowWidth, animated: true });
  };

  const handlePagerScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    const segment = SEGMENTS[index] ?? 'notes';
    setActiveSegment(segment);
    setEraseMode(false);
  };

  const indicatorLeft = scrollX.interpolate({
    inputRange: SEGMENTS.map((_, index) => index * windowWidth),
    outputRange: segmentLayouts.map((layout) => layout.x),
  });
  const indicatorWidth = scrollX.interpolate({
    inputRange: SEGMENTS.map((_, index) => index * windowWidth),
    outputRange: segmentLayouts.map((layout) => layout.width),
  });

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
          <Text style={styles.heading}>Library</Text>
          <View style={[styles.segmentRow, eraseMode && styles.segmentRowErasing]}>
            {SEGMENTS.map((segment, index) => (
              <PressableScale
                key={segment}
                style={styles.segment}
                onLayout={handleSegmentLayout(index)}
                onPress={() => goToSegment(segment)}>
                <Text
                  style={[
                    styles.segmentText,
                    activeSegment === segment && styles.segmentTextActive,
                  ]}>
                  {SEGMENT_LABELS[segment]}
                </Text>
              </PressableScale>
            ))}
            <Animated.View
              style={[
                styles.segmentIndicator,
                { left: indicatorLeft, width: indicatorWidth },
              ]}
            />
            {/* The eraser lives at the right end of the tab row, and only on
                Notes — session backups expire on their own, so nothing there
                is the student's to delete. */}
            <View style={styles.segmentSpacer} />
            {canErase && (
              <EraseTool active={eraseMode} onPress={toggleErase} />
            )}
          </View>
        </View>

        <ScrollView
          ref={pagerRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handlePagerScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          scrollEventThrottle={16}
          style={styles.pager}>
          <View style={{ width: windowWidth }}>
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.searchBar}>
                <SearchIcon size={scale(15)} />
                <TextInput
                  style={styles.searchInput}
                  value={notesQuery}
                  onChangeText={setNotesQuery}
                  placeholder="Search by concept or chapter…"
                  placeholderTextColor={colors.faint}
                  autoCorrect={false}
                  returnKeyType="search"
                />
              </View>

              <View style={styles.filterRow}>
                {notesFilters.map((filter) => (
                  <PressableScale key={filter} onPress={() => setNotesFilter(filter)}>
                    <View
                      style={[
                        styles.filterPill,
                        notesFilter === filter && styles.filterPillActive,
                      ]}>
                      <Text
                        style={[
                          styles.filterPillText,
                          notesFilter === filter && styles.filterPillTextActive,
                        ]}>
                        {filter}
                      </Text>
                    </View>
                  </PressableScale>
                ))}
                <Text style={styles.filterCount}>
                  {showingSamples
                    ? `${sampleNotes.length} sample${sampleNotes.length === 1 ? '' : 's'}`
                    : `${visibleNotes.length} note${visibleNotes.length === 1 ? '' : 's'}`}
                </Text>
              </View>

              {eraseMode && <EraseModeLine onDone={() => setEraseMode(false)} />}

              {notesLoading ? (
                <CardSkeletonList styles={styles} count={4} />
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
                  <View style={styles.notesList}>
                    <Text style={styles.sampleNote}>
                      Nothing saved yet — these sample cards are here so you can try the eraser.
                    </Text>
                    {sampleNotes.map((card) => (
                      <Erasable
                        key={card.id}
                        enabled={eraseMode}
                        onRemove={() => removeSample(card.id)}>
                        <View style={[styles.noteCard, eraseMode && styles.noteCardErasing]}>
                          <View style={styles.noteTopRow}>
                            <View style={styles.noteSubjectRow}>
                              <View style={[styles.noteDot, { backgroundColor: card.dot }]} />
                              <Text style={[styles.noteSubjectText, { color: card.tint }]}>
                                {card.subject}
                              </Text>
                            </View>
                            <Text style={styles.noteTime}>{card.time}</Text>
                          </View>
                          <Text style={styles.noteTitle} numberOfLines={2}>
                            {card.title}
                          </Text>
                          <Text style={styles.noteBody}>{card.body}</Text>
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
                <View style={styles.notesList}>
                  {visibleNotes.map((note) => {
                    const accent = SUBJECT_ACCENT[(note.subject ?? '').toLowerCase()] ?? {
                      dot: colors.faint,
                      label: colors.slate,
                    };
                    return (
                      <Erasable
                        key={note.id}
                        enabled={eraseMode}
                        onRemove={() => removeNote(note.id)}>
                      <PressableScale
                        style={[styles.noteCard, eraseMode && styles.noteCardErasing]}
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
                        <View style={styles.noteTopRow}>
                          <View style={styles.noteSubjectRow}>
                            <View style={[styles.noteDot, { backgroundColor: accent.dot }]} />
                            <Text style={[styles.noteSubjectText, { color: accent.label }]}>
                              {note.subject ?? 'General'}
                            </Text>
                          </View>
                          <Text style={styles.noteTime}>{formatRelativeTime(note.created_at)}</Text>
                        </View>
                        <Text style={styles.noteTitle} numberOfLines={2}>
                          {note.concept ?? note.chapter ?? 'Untitled note'}
                        </Text>
                        <Text style={styles.noteBody}>{note.preview}</Text>
                      </PressableScale>
                      </Erasable>
                    );
                  })}
                </View>
              )}

              {undoState && <UndoRow onUndo={undoRemoval} />}
            </ScrollView>
          </View>

          <View style={{ width: windowWidth }}>
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.doubtsSearchRow}>
                <View style={styles.doubtsSearchBar}>
                  <SearchIcon size={scale(15)} />
                  <TextInput
                    style={styles.searchInput}
                    value={doubtsQuery}
                    onChangeText={setDoubtsQuery}
                    placeholder="Search your doubts…"
                    placeholderTextColor={colors.faint}
                    autoCorrect={false}
                    returnKeyType="search"
                  />
                </View>
                <PressableScale
                  style={styles.cameraButton}
                  onPress={() => router.push('/snap-capture')}>
                  {/* Home's chip exactly — same white ground, same hairline,
                      same radius, same ink strokes. It was an ink-filled
                      circle with the strokes inverted, which made the same
                      action read as two unrelated controls between the two
                      screens. The square against the search field's pill is
                      what keeps it reading as a button. */}
                  <SnapADoubtIcon size={scale(ICON_CHIP.icon)} />
                </PressableScale>
              </View>

              <View style={styles.filterRow}>
                <PressableScale onPress={() => setDoubtsFilter('All')}>
                  <View style={[styles.filterPill, doubtsFilter === 'All' && styles.filterPillActive]}>
                    <Text
                      style={[
                        styles.filterPillText,
                        doubtsFilter === 'All' && styles.filterPillTextActive,
                      ]}>
                      All
                    </Text>
                  </View>
                </PressableScale>
                {doubtsFilters.map((chip) => (
                  <PressableScale key={chip.key} onPress={() => setDoubtsFilter(chip.key)}>
                    <View
                      style={[
                        styles.filterPill,
                        doubtsFilter === chip.key && styles.filterPillActive,
                      ]}>
                      <Text
                        style={[
                          styles.filterPillText,
                          doubtsFilter === chip.key && styles.filterPillTextActive,
                        ]}>
                        {chip.label}
                      </Text>
                      {/* Off their exam, but they snapped it, so it is theirs
                          to find. A dot rather than a word: the chip row is
                          already the widest thing on the page, and the label
                          is what has to stay readable. */}
                      {!chip.on_syllabus && <View style={styles.filterPillOffSyllabus} />}
                    </View>
                  </PressableScale>
                ))}
                <Text style={styles.filterCount}>
                  {showingDoubtSamples
                    ? `${DEMO_DOUBT_CARDS.length} sample${DEMO_DOUBT_CARDS.length === 1 ? '' : 's'}`
                    : `${visibleDoubts.length} doubt${visibleDoubts.length === 1 ? '' : 's'}`}
                </Text>
              </View>

              {eraseMode && <EraseModeLine onDone={() => setEraseMode(false)} />}
              {doubtsLoading ? (
                <CardSkeletonList styles={styles} count={4} />
              ) : doubtsError ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>{doubtsError}</Text>
                </View>
              ) : showingDoubtSamples ? (
                // DEMO_ — sample cards so the tab can be read before anything
                // is snapped. Both came off one photo and carry different
                // subjects, which is the case that makes one card per question
                // the right unit.
                <View style={styles.doubtsList}>
                  <Text style={styles.doubtsSampleNote}>
                    Nothing snapped yet — these two came off one photo, and each stands alone so
                    you can find and erase them separately.
                  </Text>
                  {sampleDoubts.map((card) => (
                    <Erasable
                      key={card.id}
                      enabled={eraseMode}
                      onRemove={() => removeDoubtSample(card.id)}>
                      <View style={[styles.doubtCard, eraseMode && styles.noteCardErasing]}>
                        <View style={styles.doubtRule} />
                        <Text style={styles.doubtQuestion} numberOfLines={3}>
                          {card.question}
                        </Text>
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
                <View style={styles.doubtsList}>
                  {doubtGroups.map((group) => {
                    const lead = group.questions[0];
                    const count = group.questions.length;
                    return (
                    <Erasable
                      key={group.key}
                      enabled={eraseMode}
                      onRemove={() => removeDoubtGroup(group.questions)}>
                    <PressableScale
                      style={[styles.doubtCard, eraseMode && styles.noteCardErasing]}
                      disabled={eraseMode}
                      onPress={() =>
                        router.push({
                          pathname: '/doubt-detail',
                          params: {
                            // Every question on the photo, so the detail screen
                            // shows them as Q1/Q2/Q3 the way snap-solved did
                            // the moment they were taken.
                            id: group.questions.map((q) => q.id).join(','),
                            title: lead.stem ?? lead.question_text ?? '',
                            subject: lead.subject ?? '',
                            chapter: lead.chapter ?? lead.concept ?? '',
                            time: `snapped ${formatRelativeTime(lead.created_at)}`,
                          },
                        })
                      }>
                      {/* A doubt is not a note, and briefly it looked like one
                          — subject dot, timestamp, bold topic, body line. But
                          a note is something taught and titled, while a doubt
                          is a question the student asked. So the question is
                          the whole card, and the red margin rule is the same
                          one the doubt of the day carries on Home: the app
                          already had a mark for "this is a doubt".

                          No subject tag, no time, and no topic name invented
                          above the question — the filter and search do the
                          finding, and a manufactured heading only competes
                          with the words the student actually wrote down. */}
                      <View style={styles.doubtRule} />
                      <Text style={styles.doubtQuestion} numberOfLines={3}>
                        {latexToText(lead.stem ?? lead.question_text ?? '(photo doubt)')}
                      </Text>
                      {/* Only when the photo held more than one. A count of
                          "1 question" is a label for something the card is
                          already showing. */}
                      {count > 1 && (
                        <Text style={styles.doubtCount}>{count} questions on this photo</Text>
                      )}
                    </PressableScale>
                    </Erasable>
                    );
                  })}
                </View>
              )}
              {undoState && <UndoRow onUndo={undoRemoval} />}
            </ScrollView>
          </View>

          <View style={{ width: windowWidth }}>
            <TextbooksPage scale={scale} verticalScale={verticalScale} />
          </View>

          <View style={{ width: windowWidth }}>
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.sessionsHeaderRow}>
                <Text style={styles.sessionsOverline}>Recent classes</Text>
                <View style={styles.previewBadge}>
                  <Text style={styles.previewBadgeText}>Preview</Text>
                </View>
              </View>
              <Text style={styles.sessionsIntro}>
                Every class you take will be backed up here for{' '}
                <Text style={styles.sessionsIntroBold}>7 days</Text> — keep the ones you want as
                notes, the rest quietly expire. The sample below shows how a backed-up class
                opens.
              </Text>

              <View style={styles.sessionsList}>
                {SESSIONS.map((session, index) => (
                  <PressableScale
                    key={index}
                    style={[
                      styles.sessionCard,
                      session.badge.kind === 'urgent' && styles.sessionCardUrgent,
                    ]}
                    onPress={() =>
                      router.push({
                        pathname: '/session-board',
                        params: {
                          title: session.title,
                          subject: session.subject,
                          chapter: session.title.includes(' · ')
                            ? session.title.split(' · ')[0]
                            : session.title,
                          sessionId: DEMO_SESSION_ID,
                          daysLeft: '6',
                        },
                      })
                    }>
                    <View style={styles.sessionTextBlock}>
                      <Text style={styles.sessionTitle} numberOfLines={1} ellipsizeMode="tail">
                        {session.title}
                      </Text>
                      <Text style={styles.sessionSubline}>{session.subline}</Text>
                    </View>
                    {session.badge.kind === 'urgent' && (
                      <Text style={styles.urgentBadgeText}>{session.badge.text}</Text>
                    )}
                    {session.badge.kind === 'neutral' && (
                      <Text style={styles.neutralBadgeText}>{session.badge.text}</Text>
                    )}
                    {session.badge.kind === 'saved' && (
                      <View style={styles.savedBadge}>
                        <CheckIcon size={scale(9)} color="#157A45" />
                        <Text style={styles.savedBadgeText}>{session.badge.text}</Text>
                      </View>
                    )}
                  </PressableScale>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
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
 * Notes and Doubts are the same card at the same size, so one placeholder
 * serves both: the subject line and timestamp on top, then the title and a
 * line of body.
 */
function CardSkeletonList({
  styles,
  count,
}: {
  styles: ReturnType<typeof createStyles>;
  count: number;
}) {
  return (
    <View style={styles.notesList}>
      {Array.from({ length: count }, (_, i) => (
        <View key={i} style={styles.noteCard}>
          <View style={styles.noteTopRow}>
            <Skeleton delay={stagger(i)} style={styles.skeletonSubject} />
            <Skeleton delay={stagger(i)} style={styles.skeletonTime} />
          </View>
          <Skeleton delay={stagger(i) + 30} style={styles.skeletonCardTitle} />
          <Skeleton delay={stagger(i) + 60} style={styles.skeletonCardBody} />
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
    headerFixed: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
    },
    pager: {
      flex: 1,
    },
    pageContent: {
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(130),
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    segmentRow: {
      position: 'relative',
      flexDirection: 'row',
      gap: scale(18),
      borderBottomWidth: 1,
      borderBottomColor: colors.hairline,
      paddingHorizontal: scale(2),
      marginTop: verticalScale(16),
    },
    segment: {
      paddingVertical: verticalScale(8),
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
    segmentRowErasing: {
      borderBottomColor: 'transparent',
    },
    segmentIndicator: {
      position: 'absolute',
      bottom: 0,
      height: scale(2),
      borderRadius: scale(1),
      backgroundColor: colors.ink,
    },
    segmentText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.slate,
    },
    segmentTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(15),
      marginTop: verticalScale(12),
    },
    searchInput: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.ink,
      paddingVertical: 0,
    },
    sessionsHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(16),
    },
    sessionsOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    previewBadge: {
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(10),
    },
    previewBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.5),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    doubtsSearchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(12),
    },
    doubtsSearchBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(15),
    },
    cameraButton: {
      width: scale(ICON_CHIP.size),
      height: scale(ICON_CHIP.size),
      flexShrink: 0,
      borderRadius: scale(ICON_CHIP.radius),
      backgroundColor: ICON_CHIP.background,
      borderWidth: 1,
      borderColor: ICON_CHIP.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    filterPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    /** Marks a chip that is not on this student's exam. Amber, because it is
     *  a note and not a warning — nothing here is wrong or refused. */
    filterPillOffSyllabus: {
      width: scale(5),
      height: scale(5),
      borderRadius: scale(99),
      backgroundColor: '#EEA31F',
    },
    filterPillActive: {
      borderWidth: 0,
      backgroundColor: colors.ink,
    },
    filterPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    filterPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.paper,
    },
    filterCount: {
      marginLeft: 'auto',
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    notesList: {
      flexDirection: 'column',
      gap: verticalScale(12),
      marginTop: verticalScale(24),
    },
    skeletonSubject: {
      width: scale(66),
      height: verticalScale(9),
    },
    skeletonTime: {
      width: scale(40),
      height: verticalScale(9),
    },
    skeletonCardTitle: {
      width: '82%',
      height: verticalScale(14),
      marginTop: verticalScale(9),
    },
    skeletonCardBody: {
      width: '58%',
      height: verticalScale(11),
      marginTop: verticalScale(8),
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
    noteTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    noteSubjectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    noteDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      flexShrink: 0,
    },
    noteSubjectText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      textTransform: 'uppercase',
    },
    noteTime: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(11),
      color: colors.faint,
    },
    noteTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      marginTop: verticalScale(7),
    },
    noteBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(17.4),
      color: colors.slate,
      marginTop: verticalScale(3),
    },
    stateBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: verticalScale(40),
      paddingHorizontal: scale(20),
    },
    stateText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
    // DEMO_ — the line above the stand-in note card.
    sampleNote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.slate,
      marginBottom: verticalScale(4),
    },
    doubtsList: {
      flexDirection: 'column',
      gap: verticalScale(12),
      marginTop: verticalScale(24),
    },
    doubtCard: {
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingLeft: scale(30),
      paddingRight: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.06,
      shadowRadius: scale(3),
      elevation: 2,
    },
    // The same red margin rule the doubt of the day carries on Home. It is
    // what tells a glance this list is questions, not notes, and it does the
    // job the subject tag and topic heading were doing badly.
    doubtRule: {
      position: 'absolute',
      top: verticalScale(14),
      bottom: verticalScale(14),
      left: scale(16),
      width: scale(1.4),
      borderRadius: scale(1),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    doubtQuestion: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.ink,
    },
    // Quiet: it is a fact about the card, not part of the question.
    doubtCount: {
      marginTop: verticalScale(8),
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    doubtsSampleNote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.faint,
      marginBottom: verticalScale(4),
    },
    sessionsIntro: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.slate,
      marginTop: verticalScale(12),
    },
    sessionsIntroBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    sessionsList: {
      flexDirection: 'column',
      gap: verticalScale(12),
      marginTop: verticalScale(24),
    },
    sessionCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(15),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.06,
      shadowRadius: scale(3),
      elevation: 2,
    },
    sessionCardUrgent: {
      borderColor: 'rgba(221,68,51,.35)',
    },
    sessionTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    sessionTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    sessionSubline: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    urgentBadgeText: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#C53A2B',
    },
    neutralBadgeText: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_600SemiBold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#157A45',
    },
  });
}
