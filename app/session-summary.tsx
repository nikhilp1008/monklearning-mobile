import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ProofMoment } from '@/components/proof-moment';
import { usePortraitLock } from '@/hooks/use-landscape-lock';
import { saveNote } from '@/lib/notes';
import { type DronaSessionEnd } from '@/lib/drona-live';
import { collectProof, markSeen, noteClassTaken, rankEvents, type ProofEvent } from '@/lib/proof';
import { takeSessionEnd } from '@/lib/session-end';

/**
 * CLASS DISMISSED — what the student sees the moment a live class ends.
 * Built from `dismissed_handoff/Class Dismissed 4A`.
 *
 * IT STATES FACTS AND THEN GETS OUT OF THE WAY. Cream fading to white, the
 * headline, one card naming the chapter and the topic with the question tally,
 * the teacher's own summary of what was covered, and the key that keeps it.
 *
 * WHAT IS DELIBERATELY NOT HERE:
 *
 *   The count of topics covered. It was the one number on this screen that
 *   measured the software rather than the student — a class that moves through
 *   six topics badly is not better than one that moves through two well — and
 *   it sat next to the tally as though the two were comparable.
 *
 *   The class duration, for the same reason: how long a class ran is not an
 *   achievement and not something a student acts on.
 *
 *   The ruled note-preview card. It was a drawing of a note rather than the
 *   note, and it pushed the real summary below the fold to make room.
 *
 * THE SUMMARY IS THE SERVER'S, NOT A RESTATEMENT. `summary_points` comes back
 * on the session's end frame, written against what the class actually got
 * through. Two lines show, because a wall of six reads as a receipt; the rest
 * are one tap away on the line that would otherwise be cut off.
 *
 * ONLY THE SUMMARY SCROLLS. Heading, card and keys are fixed, so "Save notes"
 * sits in the same place whether the class produced one line or six — a key
 * that moves depending on the lesson is a key a student has to look for.
 */

const INK = '#1C1A16';
/** Secondary ink, for the subline and the quiet link. */
const INK_MUTED = '#57534B';
/** Labels and the tally's denominator: present, clearly subordinate. */
const INK_SOFT = '#8A8577';
/** The amber that means "tap this", not the amber of a heading. */
const AMBER_LINK = '#9A6A12';
const PAPER = '#FFFFFF';
/** The card's edge, and the rules inside it — the inner ones a shade lighter. */
const HAIR = 'rgba(28,26,22,0.10)';
const RULE = 'rgba(28,26,22,0.08)';
const RED = '#DD4433';

const GUTTER = 28;
/** How much of the summary the bottom fade covers, when it has to scroll. */
const FADE = 22;
/** Shown unexpanded. Two lines read as a summary; six read as a receipt. */
const SHOWN = 2;

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

export default function SessionSummaryScreen() {
  // Reached straight from the landscape classroom, so it asks for portrait
  // itself rather than relying on a timed restore on the way out.
  const isPortrait = usePortraitLock();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);

  const params = useLocalSearchParams<{
    sessionId?: string;
    chapterTitle?: string;
    topicTitle?: string;
    summaryPoints?: string;
    questionsAsked?: string;
    mistakesCount?: string;
    questionsAnswered?: string;
  }>();

  /**
   * The end-of-class payload, awaited HERE rather than in the classroom.
   *
   * The classroom used to hold the student in front of the board for the whole
   * call — 1-2.5s after they had decided to leave — so that this screen could
   * be handed a finished summary through route params. It starts the call and
   * leaves now, and the promise travels in lib/session-end.ts.
   *
   * So this screen opens with what the classroom already knew (the chapter, the
   * topic, how many questions were put) and the server's half arrives a moment
   * later. Everything below reads `summary?.x ?? <what we knew>`, so the first
   * paint is complete and correct — nothing is blank waiting to be filled, and
   * nothing moves when it lands.
   */
  const [summary, setSummary] = useState<DronaSessionEnd | null>(null);
  useEffect(() => {
    const sessionId = params.sessionId;
    if (!sessionId) return;
    const pending = takeSessionEnd(sessionId);
    if (!pending) return;
    let cancelled = false;
    pending.then((result) => {
      if (!cancelled && result) setSummary(result);
    });
    return () => {
      cancelled = true;
    };
  }, [params.sessionId]);

  // The end payload names the chapter more authoritatively than the classroom
  // route did, but only once it arrives.
  const chapterTitle = summary?.chapter_name || params.chapterTitle || 'this class';
  const topicTitle = params.topicTitle?.trim() || null;
  const questionsAnswered = summary?.questions_answered ?? Number(params.questionsAnswered) ?? 0;
  /**
   * THE DENOMINATOR IS COUNTED IN THE CLASSROOM, because the session's end
   * frame reports how many questions were answered and never how many were
   * put — so the screen that wants a ratio has to have kept the tally itself.
   * `live-classroom` increments one every time she offers a set of options.
   *
   * Floored at the answered count: a ratio reading "5 / 3" would be the
   * screen's own bookkeeping calling the student a liar.
   */
  const questionsAsked = Math.max(Number(params.questionsAsked) || 0, questionsAnswered);
  /** Only the first two, until the student asks for the rest. */
  const [expanded, setExpanded] = useState(false);
  const covered = useMemo(() => {
    // The server's, once it lands. `summaryPoints` in the params is the legacy
    // route — still read so a deep link or an older navigation keeps working.
    if (summary?.summary_points) {
      return summary.summary_points.filter((p): p is string => typeof p === 'string');
    }
    if (!params.summaryPoints) return [];
    try {
      const parsed = JSON.parse(params.summaryPoints);
      return Array.isArray(parsed) ? parsed.filter((p): p is string => typeof p === 'string') : [];
    } catch {
      return [];
    }
  }, [params.summaryPoints, summary]);

  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const savedNoteId = useRef<string | null>(null);

  /**
   * What this class actually proved, if anything.
   *
   * Runs once on arrival, against the baseline `entering-classroom.tsx` took
   * when the session started. The events are marked seen straight away rather
   * than on unmount, because this screen is the moment — a student who taps
   * through to their note and never comes back has still been told.
   */
  const [proof, setProof] = useState<ProofEvent[]>([]);
  const proofRan = useRef(false);

  useEffect(() => {
    if (proofRan.current) return;
    proofRan.current = true;
    let alive = true;

    (async () => {
      // Only a class the backend actually recorded counts as a class taken.
      const firstClass = params.sessionId ? await noteClassTaken() : null;
      let events: ProofEvent[] = [];
      try {
        events = await collectProof();
      } catch {
        // Offline, or the score hasn't been recomputed yet. Either way there
        // is nothing honest to say, and saying nothing is the designed
        // outcome — the summary below stands on its own.
      }
      if (firstClass) events = rankEvents([firstClass, ...events]);
      if (!alive || !events.length) return;
      setProof(events);
      markSeen(events);
    })();

    return () => {
      alive = false;
    };
  }, [params.sessionId]);

  const handleSave = async () => {
    if (!params.sessionId || saveState === 'saving') return;
    if (saveState === 'saved') {
      if (savedNoteId.current) {
        router.push({ pathname: '/note-detail', params: { id: savedNoteId.current } });
      }
      return;
    }
    setSaveState('saving');
    setSaveError(null);
    try {
      const note = await saveNote(params.sessionId);
      savedNoteId.current = note.id;
      setSaveState('saved');
    } catch (err) {
      setSaveState('error');
      setSaveError(err instanceof Error ? err.message : 'Could not save this class.');
    }
  };

  /** 4A's own label. "Save to notes" read as a destination; this is an act. */
  const saveLabel =
    saveState === 'saving'
      ? 'Saving\u2026'
      : saveState === 'saved'
        ? 'Saved \u00b7 open your note'
        : saveState === 'error'
          ? 'Couldn\u2019t save \u00b7 tap to retry'
          : 'Save notes';

  /**
   * The key is drawn as a physical one: a 3pt hard edge under it, and pressing
   * it moves the face down onto that edge. Nothing else on the screen can be
   * pressed, so the only control gets to look like one.
   */
  const [keyDown, setKeyDown] = useState(false);
  /** The chevron turns over rather than swapping, so the line keeps its place. */
  const chev = useSharedValue(0);
  useEffect(() => {
    chev.value = withTiming(expanded ? 1 : 0, { duration: 250 });
  }, [expanded, chev]);
  const chevStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${chev.value * 180}deg` }],
  }));

  if (!isPortrait) {
    return <View style={styles.rotateHold} />;
  }

  const visible = expanded ? covered : covered.slice(0, SHOWN);
  const rest = covered.length - SHOWN;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      {/* Cream to white over the top 440, which is the card's own depth: the
          warmth belongs to the heading and the facts, and has faded out by the
          time the summary starts. */}
      <LinearGradient
        colors={['#FAECCF', '#FCF3E2', '#FFFFFF']}
        locations={[0, 0.35, 1]}
        style={styles.wash}
        pointerEvents="none"
      />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.page}>
          <Animated.View entering={FadeInDown.duration(420)}>
            <Text style={styles.heading}>Class dismissed.</Text>
            <Text style={styles.sub}>Good work today. Here&apos;s what you covered.</Text>
          </Animated.View>

          {/* One card, three rows: the two things the student chose on the way
              in, and the one thing that happened while they were inside. */}
          <Animated.View entering={FadeInDown.duration(420).delay(140)} style={styles.card}>
            <View style={[styles.row, !topicTitle && questionsAsked === 0 && styles.rowLast]}>
              <Text style={styles.rowLabel}>Chapter</Text>
              <Text style={styles.rowValue} numberOfLines={2}>
                {chapterTitle}
              </Text>
            </View>

            {!!topicTitle && (
              <View style={[styles.row, questionsAsked === 0 && styles.rowLast]}>
                <Text style={styles.rowLabel}>Topic</Text>
                <Text style={styles.rowValue} numberOfLines={2}>
                  {topicTitle}
                </Text>
              </View>
            )}

            {/* Hidden rather than shown as "0 / 0" when she never checked: a
                zero here would read as a failed test instead of a quiet class. */}
            {questionsAsked > 0 && (
              <View style={[styles.row, styles.rowLast, styles.rowInline]}>
                <Text style={styles.rowLabel}>Questions answered</Text>
                <Text style={styles.tally}>
                  {questionsAnswered}
                  <Text style={styles.tallyOf}> / {questionsAsked}</Text>
                </Text>
              </View>
            )}
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(420).delay(260)} style={styles.summary}>
            <ScrollView
              contentContainerStyle={styles.summaryInner}
              showsVerticalScrollIndicator={false}>
              {/* Above the summary, because what was proven outranks what was
                  covered. Renders nothing unless something actually was. */}
              <ProofMoment events={proof} />

              {covered.length > 0 && (
                <>
                  <Text style={[styles.summaryLead, proof.length > 0 && styles.summaryLeadBelow]}>
                    What we covered
                  </Text>
                  {visible.map((line, i) => {
                    const last = i === visible.length - 1;
                    /* The toggle rides the last visible line instead of sitting
                       under the list, so expanding does not add a row that is
                       only ever chrome. */
                    const toggle = last && rest > 0;
                    return (
                      <View key={i} style={[styles.line, last && styles.lineLast]}>
                        <Text style={styles.lineText}>{line}</Text>
                        {toggle && (
                          <Pressable
                            style={styles.more}
                            onPress={() => setExpanded((v) => !v)}
                            hitSlop={10}
                            accessibilityLabel={expanded ? 'Show less' : `Show ${rest} more`}>
                            <Text style={styles.moreText}>{expanded ? 'Less' : `${rest} more`}</Text>
                            <Animated.View style={chevStyle}>
                              <Svg viewBox="0 0 12 12" width={11} height={11} fill="none">
                                <Path
                                  d="M2 4.5l4 3.5 4-3.5"
                                  stroke={AMBER_LINK}
                                  strokeWidth={1.6}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            </Animated.View>
                          </Pressable>
                        )}
                      </View>
                    );
                  })}
                </>
              )}
            </ScrollView>

            {/* Tells the student there is more below without a scrollbar, which
                at this size would be a bigger mark than the text it sits on. */}
            <LinearGradient
              colors={['rgba(255,255,255,0)', '#FFFFFF']}
              style={styles.fade}
              pointerEvents="none"
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(420).delay(380)}
            style={[styles.actions, { paddingBottom: Math.max(insets.bottom - 6, 16) }]}>
            {!!saveError && <Text style={styles.error}>{saveError}</Text>}

            {/* Why the key is worth pressing, in the one place it cannot be
                scrolled away from. */}
            <Text style={styles.foot}>
              {params.sessionId
                ? 'Unsaved classes are kept for seven days, then they go.'
                : 'This class wasn\u2019t recorded, so there\u2019s nothing to save.'}
            </Text>

            {!!params.sessionId && (
              <Pressable
                style={[
                  styles.key,
                  keyDown && styles.keyDown,
                  saveState === 'saved' && styles.keySaved,
                ]}
                onPressIn={() => setKeyDown(true)}
                onPressOut={() => setKeyDown(false)}
                onPress={handleSave}
                disabled={saveState === 'saving'}>
                <LinearGradient
                  colors={['#35302A', '#1C1A16']}
                  locations={[0, 0.6]}
                  style={StyleSheet.absoluteFill}
                  pointerEvents="none"
                />
                {/* The bevel, on its own layer: an inset shadow is drawn onto
                    the view's own background, so on the key itself the gradient
                    child would cover it. */}
                <View style={styles.keyBevel} pointerEvents="none" />
                <Text style={styles.keyText}>{saveLabel}</Text>
              </Pressable>
            )}

            <Pressable onPress={() => router.dismissTo('/')} hitSlop={10}>
              <Text style={styles.dashboardLink}>Go to dashboard</Text>
            </Pressable>
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: PAPER },
    rotateHold: { flex: 1, backgroundColor: PAPER },
    safeArea: { flex: 1 },
    wash: { position: 'absolute', left: 0, right: 0, top: 0, height: 440 },
    /** A column, not a scroller. Only `summary` below is allowed to move. */
    page: { flex: 1, paddingHorizontal: GUTTER, paddingTop: 6 },

    heading: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 32,
      letterSpacing: -0.03 * 32,
      lineHeight: 32 * 1.05,
      color: INK,
    },
    sub: {
      marginTop: 8,
      fontFamily: 'Onest_400Regular',
      fontSize: 14.5,
      lineHeight: 14.5 * 1.45,
      color: INK_MUTED,
    },

    card: {
      marginTop: 24,
      paddingHorizontal: 18,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: HAIR,
      borderRadius: 20,
      backgroundColor: PAPER,
    },
    row: {
      gap: 3,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    /** Whichever row ends up last — the card's own edge is the rule there. */
    rowLast: { borderBottomWidth: 0 },
    rowInline: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
    },
    rowLabel: { fontFamily: 'Onest_500Medium', fontSize: 13, color: INK_SOFT },
    rowValue: {
      fontFamily: 'Onest_500Medium',
      fontSize: 15,
      lineHeight: 15 * 1.35,
      color: INK,
    },
    tally: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 24,
      letterSpacing: -0.03 * 24,
      color: INK,
      /** So 4 / 5 and 11 / 12 put their slash in the same place. */
      fontVariant: ['tabular-nums'],
    },
    /** The denominator is context, not a second score. */
    tallyOf: {
      fontFamily: 'Onest_500Medium',
      fontSize: 15,
      letterSpacing: 0,
      color: INK_SOFT,
    },

    /** Takes whatever height is left, and scrolls inside it. */
    summary: { flex: 1, minHeight: 0, marginTop: 24 },
    summaryInner: { paddingBottom: FADE },
    summaryLead: {
      fontFamily: 'Onest_500Medium',
      fontSize: 13,
      color: AMBER_LINK,
      marginBottom: 4,
    },
    /** Only when the proof card is above it — otherwise the summary column's
     *  own margin is already the gap. */
    summaryLeadBelow: { marginTop: 20 },
    line: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    lineLast: { borderBottomWidth: 0 },
    lineText: {
      flexShrink: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: 14.5,
      lineHeight: 14.5 * 1.45,
      color: INK,
    },
    more: { flexDirection: 'row', alignItems: 'center', gap: 5, paddingBottom: 1 },
    moreText: { fontFamily: 'Onest_600SemiBold', fontSize: 13.5, color: AMBER_LINK },
    fade: { position: 'absolute', left: 0, right: 0, bottom: 0, height: FADE },

    actions: { paddingTop: 16 },
    foot: {
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Onest_400Regular',
      fontSize: 12.5,
      lineHeight: 12.5 * 1.4,
      color: INK_SOFT,
    },
    error: {
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Onest_600SemiBold',
      fontSize: 13,
      color: RED,
    },

    /**
     * THE INK KEY, built from three layers rather than one declaration.
     *
     * The hard edge below it is a zero-blur `boxShadow`, which iOS's box-shadow
     * layer draws natively — the older `shadowRadius`/`shadowOpacity` props
     * cannot express a shadow with no blur at all. The face is a real gradient
     * view rather than `experimental_backgroundImage`, because that prop's
     * CSS-string form is registered on Android's view config and not iOS's, so
     * on a phone it would have quietly fallen back to flat ink.
     */
    key: {
      height: 54,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: INK,
      boxShadow: [{ offsetX: 0, offsetY: 3, blurRadius: 0, color: 'rgba(28,26,22,0.35)' }],
    },
    /** Lit along the top, dark along the bottom: a face catching light from
     *  above, which is the whole of why it reads as raised. */
    keyBevel: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: 99,
      boxShadow: [
        { offsetX: 0, offsetY: 1, blurRadius: 0, color: 'rgba(255,255,255,0.22)', inset: true },
        { offsetX: 0, offsetY: -1.5, blurRadius: 0, color: 'rgba(0,0,0,0.4)', inset: true },
      ],
    },
    /** Pressed: the face travels onto its own edge, which is what makes it feel
     *  like a key rather than a rectangle that changed colour. */
    keyDown: {
      transform: [{ translateY: 2 }],
      boxShadow: [{ offsetX: 0, offsetY: 1, blurRadius: 0, color: 'rgba(28,26,22,0.35)' }],
    },
    /** Saved: the key stays a key and stops being the brightest thing on it. */
    keySaved: { opacity: 0.55 },
    keyText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 16,
      letterSpacing: -0.012 * 16,
      color: '#FFFDF8',
    },
    dashboardLink: {
      alignSelf: 'center',
      paddingTop: 10,
      paddingHorizontal: 12,
      paddingBottom: 4,
      fontFamily: 'Onest_500Medium',
      fontSize: 15,
      color: INK_MUTED,
    },
  });
}
