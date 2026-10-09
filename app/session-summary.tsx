import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Line, Path } from 'react-native-svg';

import { NightSky } from '@/components/night-sky';
import { MathLine } from '@/components/math-line';
import { ObButton } from '@/components/onboarding-kit';
import { ProofMoment } from '@/components/proof-moment';
import { usePortraitLock } from '@/hooks/use-landscape-lock';
import { MOMENTS_VISIBLE } from '@/constants/features';
import { saveNote } from '@/lib/notes';
import { endDronaSession, type DronaSessionEnd } from '@/lib/drona-live';
import { collectProof, markSeen, noteClassTaken, rankEvents, type ProofEvent } from '@/lib/proof';
import { peekSessionEnd } from '@/lib/session-end';
import { hapticSuccess, hapticWarning } from '@/lib/haptics';

/**
 * CLASS DISMISSED — what the student sees the moment a live class ends.
 * Built from `dismissed_handoff/Class Dismissed 4A`.
 *
 * IT STATES FACTS AND THEN GETS OUT OF THE WAY. The headline on white, the
 * class's facts printed on a small ticket of Home's night sky — chapter and
 * topic on the ticket, the question tally on its stub — the teacher's own
 * summary of what was covered, and two buttons: keep it, or go.
 *
 * THE TICKET IS THE SKY, SOFTENED. The same still Home's header is drawn
 * from, so a class ends in the look it was started from — but lifted toward
 * bronze and with a third of the grain, because at its full depth a card this
 * small read as a dark slab on a white page.
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
 * ONLY THE SUMMARY SCROLLS. Heading, ticket and buttons are fixed, so "Save
 * notes" sits in the same place whether the class produced one line or six —
 * a key that moves depending on the lesson is a key a student has to look for.
 *
 * TWO BUTTONS, NOT A BUTTON AND A LINK. "Go to dashboard" was a short line of
 * grey text under the key: a small target, narrower than the button above it
 * and easy to miss. Both are onboarding's buttons now, the same height and
 * width, edges aligned — ink for the one that keeps the class, outlined for
 * the one that leaves.
 */

const INK = '#1C1A16';
/** Paper on the ticket's sky. */
const ON_SKY = '#FFFDF8';
const ON_SKY_SOFT = 'rgba(255,253,248,0.65)';
/** The step numbers and the "What we covered" label: the board's amber. */
const AMBER_NUM = '#B08420';
/** How far the ticket's sky is pulled toward bronze, and its grain. */
const TICKET_LIFT = 0.5;
const TICKET_GRAIN = 0.35;
/** Secondary ink, for the subline and the quiet link. */
const INK_MUTED = '#57534B';
/** Labels and the tally's denominator: present, clearly subordinate. */
const INK_SOFT = '#8A8577';
/** The amber that means "tap this", not the amber of a heading. */
const AMBER_LINK = '#9A6A12';
const PAPER = '#FFFFFF';
/** The rules between takeaways. */
const RULE = 'rgba(28,26,22,0.08)';
const RED = '#DD4433';

const GUTTER = 24;
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
  const [summaryFailed, setSummaryFailed] = useState(false);
  useEffect(() => {
    const sessionId = params.sessionId;
    if (!sessionId) return;
    let cancelled = false;
    // The classroom's in-flight call when there is one. FETCHED HERE WHEN THERE
    // IS NOT — arriving without it is not exotic: a reload while the screen is
    // open, a deep link, or the classroom having been unmounted before it could
    // start one. Ending twice is harmless; the endpoint sets phase to complete
    // and recomputes the same summary. Without this the screen has nothing to
    // show and nothing to say, which is exactly what it did.
    const pending = peekSessionEnd(sessionId) ?? endDronaSession(sessionId).catch(() => null);
    pending.then((result) => {
      if (cancelled) return;
      if (result) setSummary(result);
      // Recorded rather than left as "still loading" forever: the section below
      // renders nothing while pending, and a failure that never resolves into a
      // state is how this screen came to show an empty space at all.
      else setSummaryFailed(true);
    });
    return () => {
      cancelled = true;
    };
  }, [params.sessionId]);

  /**
   * Whether this class got far enough to have takeaways.
   *
   * The server decides, and says so in the payload — "no points" and "too early
   * for points" are different things and only one is worth a line on screen.
   * False until the payload lands, so the brief moment before it arrives looks
   * like an ordinary class rather than flashing an "ended early" message at a
   * student who had a full one.
   */
  const tooShort = summary?.too_short_for_summary === true;

  // The end payload names the chapter more authoritatively than the classroom
  // route did, but only once it arrives.
  const chapterTitle = summary?.chapter_name || params.chapterTitle || 'this class';
  const topicTitle = params.topicTitle?.trim() || null;
  // `|| 0` and not `?? 0`: `??` does not catch NaN, and the classroom passes
  // questionsAsked WITHOUT questionsAnswered — so `Number(undefined)` made this
  // NaN whenever the end payload had not arrived. NaN then poisoned
  // questionsAsked through Math.max, and since `NaN === 0` is false the
  // rowLast style quietly stopped applying. Same idiom as the line below.
  const questionsAnswered = summary?.questions_answered ?? (Number(params.questionsAnswered) || 0);
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
      hapticSuccess();
      setSaveState('saved');
    } catch (err) {
      hapticWarning();
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

  /** The ticket's own size, for its sky. */
  const [ticket, setTicket] = useState({ width: 0, height: 0 });
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

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.page}>
          <Animated.View entering={FadeInDown.duration(420)}>
            <Text style={styles.heading}>Class dismissed.</Text>
            <Text style={styles.sub}>
              {tooShort
                ? 'That one ended early, so there’s nothing to sum up yet.'
                : 'Good work today. Here’s what you covered.'}
            </Text>
          </Animated.View>

          {/* The ticket: the two things the student chose on the way in,
              printed on the sky, and the one thing that happened while they
              were inside on the stub. */}
          <Animated.View
            entering={FadeInDown.duration(420).delay(140)}
            style={styles.ticket}
            onLayout={(e: LayoutChangeEvent) => {
              const { width, height } = e.nativeEvent.layout;
              setTicket((p) => (p.width === width && p.height === height ? p : { width, height }));
            }}>
            <NightSky
              width={ticket.width}
              height={ticket.height}
              grain={TICKET_GRAIN}
              lift={TICKET_LIFT}
              style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.ticketFacts}>
              <Text style={styles.factLabel}>Chapter</Text>
              <Text style={styles.factValue} numberOfLines={2}>
                {chapterTitle}
              </Text>
              {!!topicTitle && (
                <>
                  <Text style={[styles.factLabel, styles.factLabelNext]}>Topic</Text>
                  <Text style={styles.factValue} numberOfLines={2}>
                    {topicTitle}
                  </Text>
                </>
              )}
            </View>

            {/* Left off rather than shown as "0 / 0" when she never checked: a
                zero here would read as a failed test instead of a quiet class. */}
            {questionsAsked > 0 && (
              <View
                style={styles.stub}
                accessible
                accessibilityLabel={`${questionsAnswered} of ${questionsAsked} questions answered`}>
                {/* The tear line. Drawn, because iOS will not dash a single
                    side of a view's border — it drew nothing at all. */}
                <Svg style={styles.seam} width={2} height="100%">
                  <Line
                    x1={1}
                    y1={0}
                    x2={1}
                    y2="100%"
                    stroke="rgba(255,253,248,0.32)"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                  />
                </Svg>
                <Text style={styles.tally}>
                  {questionsAnswered}
                  <Text style={styles.tallyOf}> / {questionsAsked}</Text>
                </Text>
                <Text style={styles.stubLabel}>{'Questions\nanswered'}</Text>
              </View>
            )}
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(420).delay(260)} style={styles.summary}>
            <ScrollView
              contentContainerStyle={styles.summaryInner}
              showsVerticalScrollIndicator={false}>
              {/* Above the summary, because what was proven outranks what was
                  covered. Renders nothing unless something actually was. */}
              {/* On hold — see MOMENTS_VISIBLE in constants/features.ts. */}
              {MOMENTS_VISIBLE && <ProofMoment events={proof} />}

              {/* A class shorter than two segments has no takeaways, and is
                  told so rather than shown an empty space where they would be.
                  Deliberately not an apology and not a metric: the student did
                  nothing wrong by stopping, and "1 of 2 segments" would read as
                  a score. What is on offer is the way back in. */}
              {tooShort && (
                <>
                  <Text style={[styles.summaryLead, MOMENTS_VISIBLE && proof.length > 0 && styles.summaryLeadBelow]}>
                    Too short to sum up
                  </Text>
                  <View style={styles.point}>
                    <Text style={styles.lineText}>
                      Takeaways start once you’ve finished a couple of segments.
                      Pick the chapter back up whenever you’re ready.
                    </Text>
                  </View>
                </>
              )}

              {/* The summary never arrived — offline, or the call failed. Said
                  plainly, because the alternative is what this screen actually
                  did: an empty space under a heading promising a summary. */}
              {summaryFailed && !tooShort && covered.length === 0 && (
                <>
                  <Text style={[styles.summaryLead, MOMENTS_VISIBLE && proof.length > 0 && styles.summaryLeadBelow]}>
                    Summary unavailable
                  </Text>
                  <View style={styles.point}>
                    <Text style={styles.lineText}>
                      The class is saved — this part just couldn’t be loaded.
                      Your notes still have everything that was on the board.
                    </Text>
                  </View>
                </>
              )}

              {!tooShort && covered.length > 0 && (
                <>
                  <Text style={[styles.summaryLead, MOMENTS_VISIBLE && proof.length > 0 && styles.summaryLeadBelow]}>
                    What we covered
                  </Text>
                  {visible.map((line, i) => (
                    <View key={i} style={[styles.point, i > 0 && styles.pointRule]}>
                      <Text style={styles.pointNum}>{i + 1}</Text>
                      {/* A takeaway can carry a formula (R_T, ρ₀, 10⁻³), so it goes
                          through the board's own renderer: scripts drawn where
                          Unicode has no character, a plain line still one Text. */}
                      <View style={styles.pointBody}>
                        <MathLine text={line} style={styles.lineText} fontSize={15} color={INK} />
                      </View>
                    </View>
                  ))}
                  {rest > 0 && (
                    <Pressable
                      style={styles.more}
                      onPress={() => setExpanded((v) => !v)}
                      hitSlop={12}
                      accessibilityRole="button"
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

            <View style={styles.buttons}>
              {!!params.sessionId && (
                <ObButton
                  label={saveLabel}
                  onPress={handleSave}
                  busy={saveState === 'saving'}
                  // Saved: still a key, no longer the brightest thing here.
                  style={saveState === 'saved' ? styles.keySaved : undefined}
                />
              )}
              <ObButton
                label="Go to dashboard"
                variant="outline"
                onPress={() => router.dismissTo('/')}
              />
            </View>
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
    /** A column, not a scroller. Only `summary` below is allowed to move. */
    page: { flex: 1, paddingHorizontal: GUTTER, paddingTop: 14 },

    heading: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 30,
      letterSpacing: -0.035 * 30,
      lineHeight: 30 * 1.08,
      color: INK,
    },
    sub: {
      marginTop: 8,
      fontFamily: 'Onest_400Regular',
      fontSize: 15,
      lineHeight: 22,
      color: INK_MUTED,
    },

    /** Facts on the left, the tally's stub on the right, on one sky. */
    ticket: {
      marginTop: 22,
      flexDirection: 'row',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#5A4426',
      boxShadow: [{ offsetX: 0, offsetY: 18, blurRadius: 30, spreadDistance: -20, color: 'rgba(28,26,22,0.55)' }],
    },
    ticketFacts: { flex: 1, minWidth: 0, paddingVertical: 16, paddingHorizontal: 18 },
    factLabel: { fontFamily: 'Onest_500Medium', fontSize: 12.5, color: ON_SKY_SOFT },
    factLabelNext: { marginTop: 10 },
    factValue: {
      marginTop: 2,
      fontFamily: 'Onest_600SemiBold',
      fontSize: 15.5,
      lineHeight: 15.5 * 1.3,
      letterSpacing: -0.01 * 15.5,
      color: ON_SKY,
      // Barely there: holds the white off the ticket's brighter amber foot.
      textShadowColor: 'rgba(60,38,8,0.35)',
      textShadowRadius: 6,
    },
    /** The tear-off: a dashed seam, and the tally alone on its side of it. */
    stub: {
      width: 104,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
    },
    seam: { position: 'absolute', left: 0, top: 10, bottom: 10 },
    tally: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 34,
      letterSpacing: -0.03 * 34,
      color: ON_SKY,
      textShadowColor: 'rgba(60,38,8,0.35)',
      textShadowRadius: 6,
      /** So 4 / 5 and 11 / 12 put their slash in the same place. */
      fontVariant: ['tabular-nums'],
    },
    /** The denominator is context, not a second score. */
    tallyOf: {
      fontFamily: 'Onest_500Medium',
      fontSize: 15,
      letterSpacing: 0,
      color: ON_SKY_SOFT,
    },
    stubLabel: {
      marginTop: 4,
      textAlign: 'center',
      fontFamily: 'Onest_700Bold',
      fontSize: 10.5,
      lineHeight: 13.5,
      letterSpacing: 0.06 * 10.5,
      textTransform: 'uppercase',
      color: ON_SKY_SOFT,
    },

    /** Takes whatever height is left, and scrolls inside it. */
    summary: { flex: 1, minHeight: 0, marginTop: 2 },
    summaryInner: { paddingBottom: FADE },
    summaryLead: {
      marginTop: 24,
      marginBottom: 2,
      fontFamily: 'Onest_700Bold',
      fontSize: 11,
      letterSpacing: 0.12 * 11,
      textTransform: 'uppercase',
      color: AMBER_LINK,
    },
    /** Only when the teacher's note is above it. */
    summaryLeadBelow: { marginTop: 24 },
    /** A takeaway, numbered the way the follow-up board numbers its steps. */
    point: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
    pointRule: { borderTopWidth: 1, borderTopColor: RULE },
    pointNum: {
      width: 14,
      fontFamily: 'Onest_600SemiBold',
      fontSize: 13,
      lineHeight: 22,
      color: AMBER_NUM,
      fontVariant: ['tabular-nums'],
    },
    pointBody: { flex: 1, minWidth: 0 },
    lineText: {
      flexShrink: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: 15,
      lineHeight: 22,
      color: INK,
    },
    more: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: 5,
      paddingLeft: 26,
      paddingVertical: 6,
    },
    moreText: { fontFamily: 'Onest_600SemiBold', fontSize: 13.5, color: AMBER_LINK },
    fade: { position: 'absolute', left: 0, right: 0, bottom: 0, height: FADE },

    actions: { paddingTop: 12 },
    foot: {
      marginBottom: 12,
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
    /** Same width, same height, edges aligned, 10 apart. */
    buttons: { gap: 10 },
    /** Saved: the key stays a key and stops being the brightest thing on it. */
    keySaved: { opacity: 0.55 },
  });
}
