import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { PressableScale } from '@/components/pressable-scale';
import { SnapIcon } from '@/components/snap-icon';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtSummary, formatRelativeTime, listDoubts, subjectMatches } from '@/lib/doubts';

type Segment = 'notes' | 'doubts' | 'sessions';
type SubjectFilter = 'All' | 'Physics' | 'Chemistry' | 'Maths';

const SEGMENTS: Segment[] = ['notes', 'doubts', 'sessions'];
const SEGMENT_LABELS: Record<Segment, string> = {
  notes: 'Notes',
  doubts: 'Doubts',
  sessions: 'Sessions',
};
const SUBJECT_FILTERS: SubjectFilter[] = ['All', 'Physics', 'Chemistry', 'Maths'];

type Note = {
  subject: 'Physics' | 'Chemistry' | 'Maths';
  dotColor: string;
  labelColor: string;
  time: string;
  title: string;
  body: string;
};

const NOTES: Note[] = [
  {
    subject: 'Physics',
    dotColor: '#DD4433',
    labelColor: '#C53A2B',
    time: '2 days ago',
    title: "Ohm's law & drift velocity",
    body: 'I = nAve. Current is just charge marching together.',
  },
  {
    subject: 'Chemistry',
    dotColor: '#1C9B57',
    labelColor: '#157A45',
    time: 'last week',
    title: 'Balancing redox in acid',
    body: 'Half-reactions, balance O with H₂O, H with H⁺.',
  },
  {
    subject: 'Maths',
    dotColor: '#EEA31F',
    labelColor: '#9A6A12',
    time: 'last week',
    title: 'Integration by parts',
    body: 'ILATE order. Pick u so its derivative simplifies.',
  },
  {
    subject: 'Physics',
    dotColor: '#DD4433',
    labelColor: '#C53A2B',
    time: '2 weeks ago',
    title: 'Projectile motion essentials',
    body: 'Split into x and y. Time is the bridge.',
  },
];

type Session = {
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Maths';
  subline: string;
  badge: { kind: 'urgent' | 'neutral' | 'saved'; text: string };
};

const SESSIONS: Session[] = [
  {
    title: 'Photoelectric effect · threshold',
    subject: 'Physics',
    subline: 'last Sunday · 19 min',
    badge: { kind: 'urgent', text: 'expires tonight' },
  },
  {
    title: 'Rotational Motion · torque',
    subject: 'Physics',
    subline: 'yesterday · 24 min',
    badge: { kind: 'neutral', text: '6 days left' },
  },
  {
    title: 'Current Electricity · loop rule',
    subject: 'Physics',
    subline: 'Tuesday · 31 min',
    badge: { kind: 'saved', text: 'Saved' },
  },
  {
    title: 'Hybridisation in 10 minutes',
    subject: 'Chemistry',
    subline: '3 days ago · 12 min',
    badge: { kind: 'neutral', text: '4 days left' },
  },
];

export default function LibraryScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { width: windowWidth } = useWindowDimensions();
  const [activeSegment, setActiveSegment] = useState<Segment>('notes');
  const [notesFilter, setNotesFilter] = useState<SubjectFilter>('All');
  const [doubtsFilter, setDoubtsFilter] = useState<SubjectFilter>('All');
  const pagerRef = useRef<ScrollView>(null);

  const [doubts, setDoubts] = useState<DoubtSummary[]>([]);
  const [doubtsLoading, setDoubtsLoading] = useState(true);
  const [doubtsError, setDoubtsError] = useState<string | null>(null);

  // Fetched unfiltered — the API's subject vocabulary ("Mathematics") doesn't
  // match the app's compact filter labels ("Maths"), so filtering happens
  // client-side via subjectMatches() below instead of trusting a server-side
  // ?subject= match. Filter is applied at render time, not fetch time, so
  // switching pills doesn't need a network round-trip.
  const fetchDoubts = useCallback(() => {
    let cancelled = false;
    setDoubtsLoading(true);
    setDoubtsError(null);
    listDoubts()
      .then((res) => {
        if (!cancelled) setDoubts(res.doubts.filter((d) => d.status === 'solved'));
      })
      .catch((err) => {
        if (!cancelled) setDoubtsError(err instanceof Error ? err.message : 'Could not load your doubts.');
      })
      .finally(() => {
        if (!cancelled) setDoubtsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => fetchDoubts(), [fetchDoubts]);

  // Library is a tab screen that stays mounted — without this, snapping a
  // doubt and returning here wouldn't show it until something else forced a
  // refetch, contradicting snap-solved's "find it in Library any time" promise.
  useFocusEffect(
    useCallback(() => {
      return fetchDoubts();
    }, [fetchDoubts])
  );

  const visibleDoubts = useMemo(
    () => doubts.filter((d) => subjectMatches(d.subject, doubtsFilter)),
    [doubts, doubtsFilter]
  );

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
    pagerRef.current?.scrollTo({ x: SEGMENTS.indexOf(segment) * windowWidth, animated: true });
  };

  const handlePagerScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveSegment(SEGMENTS[index] ?? 'notes');
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
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerFixed}>
          <Text style={styles.heading}>Library</Text>
          <View style={styles.segmentRow}>
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
                <Text style={styles.searchPlaceholder}>Search by concept or chapter…</Text>
              </View>

              <View style={styles.filterRow}>
                {SUBJECT_FILTERS.map((filter) => (
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
                <Text style={styles.filterCount}>9 notes</Text>
              </View>

              <View style={styles.notesList}>
                {NOTES.map((note, index) => (
                  <PressableScale
                    key={index}
                    style={styles.noteCard}
                    onPress={() =>
                      router.push({
                        pathname: '/note-detail',
                        params: {
                          title: note.title,
                          subject: note.subject,
                          time: `saved ${note.time}`,
                        },
                      })
                    }>
                    <View style={styles.noteTopRow}>
                      <View style={styles.noteSubjectRow}>
                        <View style={[styles.noteDot, { backgroundColor: note.dotColor }]} />
                        <Text style={[styles.noteSubjectText, { color: note.labelColor }]}>
                          {note.subject}
                        </Text>
                      </View>
                      <Text style={styles.noteTime}>{note.time}</Text>
                    </View>
                    <Text style={styles.noteTitle}>{note.title}</Text>
                    <Text style={styles.noteBody}>{note.body}</Text>
                  </PressableScale>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={{ width: windowWidth }}>
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.doubtsSearchRow}>
                <View style={styles.doubtsSearchBar}>
                  <SearchIcon size={scale(15)} />
                  <Text style={styles.searchPlaceholder}>Search your doubts…</Text>
                </View>
                <PressableScale
                  style={styles.cameraButton}
                  onPress={() => router.push('/snap-capture')}>
                  <SnapIcon size={scale(19)} color={colors.paper} />
                </PressableScale>
              </View>

              <View style={styles.filterRow}>
                {SUBJECT_FILTERS.map((filter) => (
                  <PressableScale key={filter} onPress={() => setDoubtsFilter(filter)}>
                    <View
                      style={[
                        styles.filterPill,
                        doubtsFilter === filter && styles.filterPillActive,
                      ]}>
                      <Text
                        style={[
                          styles.filterPillText,
                          doubtsFilter === filter && styles.filterPillTextActive,
                        ]}>
                        {filter}
                      </Text>
                    </View>
                  </PressableScale>
                ))}
                <Text style={styles.filterCount}>{visibleDoubts.length} doubts</Text>
              </View>

              {doubtsLoading ? (
                <View style={styles.stateBlock}>
                  <ActivityIndicator color={colors.ink} />
                </View>
              ) : doubtsError ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>{doubtsError}</Text>
                </View>
              ) : visibleDoubts.length === 0 ? (
                <View style={styles.stateBlock}>
                  <Text style={styles.stateText}>
                    {doubts.length === 0
                      ? 'No solved doubts yet — snap one to get started.'
                      : `No ${doubtsFilter} doubts yet.`}
                  </Text>
                </View>
              ) : (
                <View style={styles.doubtsList}>
                  {visibleDoubts.map((doubt) => (
                    <PressableScale
                      key={doubt.id}
                      style={styles.doubtCard}
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
                      <Text style={styles.doubtMeta}>
                        <Text style={styles.doubtMetaSubject}>{doubt.subject ?? 'General'}</Text>
                        {` · ${doubt.chapter ?? doubt.concept ?? 'Doubt'} · ${formatRelativeTime(doubt.created_at)}`}
                      </Text>
                      <Text style={styles.doubtTitle} numberOfLines={2}>
                        {doubt.stem ?? doubt.question_text ?? '(photo doubt)'}
                      </Text>
                    </PressableScale>
                  ))}
                </View>
              )}
            </ScrollView>
          </View>

          <View style={{ width: windowWidth }}>
            <ScrollView
              contentContainerStyle={styles.pageContent}
              showsVerticalScrollIndicator={false}>
              <Text style={styles.sessionsIntro}>
                Every class is backed up here for{' '}
                <Text style={styles.sessionsIntroBold}>7 days</Text>. Keep the ones you want as
                notes; the rest quietly expire.
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
                          time: `class held ${session.subline}`,
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
const hairline = (alpha: number) => `rgba(28,25,20,${alpha})`;

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
    searchPlaceholder: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
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
      width: scale(44),
      height: scale(44),
      flexShrink: 0,
      borderRadius: scale(22),
      backgroundColor: colors.ink,
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
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
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
    noteCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.2),
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.08,
      shadowRadius: scale(3),
      elevation: 2,
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
    doubtsList: {
      flexDirection: 'column',
      gap: verticalScale(12),
      marginTop: verticalScale(24),
    },
    doubtCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.2),
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.08,
      shadowRadius: scale(3),
      elevation: 2,
    },
    doubtMeta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.faint,
    },
    doubtMetaSubject: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.slate,
    },
    doubtTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      lineHeight: scale(19.6),
      color: colors.ink,
      marginTop: verticalScale(3),
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
      borderColor: hairline(0.2),
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(15),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.08,
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
