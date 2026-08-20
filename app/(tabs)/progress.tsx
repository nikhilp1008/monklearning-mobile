import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type ChapterStatus = 'strong' | 'improving' | 'needs-revision' | 'not-started';

const STATUS_COLOR: Record<ChapterStatus, string> = {
  strong: '#1C9B57',
  improving: colors.marigold,
  'needs-revision': colors.red,
  'not-started': '#C2BCAF',
};

type Topic = { title: string; status: ChapterStatus };
type Chapter = {
  number: string;
  title: string;
  marks: string;
  status: ChapterStatus;
  topics: Topic[];
};

const PHYSICS_CHAPTERS: Chapter[] = [
  {
    number: '01',
    title: 'Kinematics',
    marks: '~8 marks',
    status: 'strong',
    topics: [
      { title: 'Projectile motion', status: 'strong' },
      { title: 'Relative velocity', status: 'strong' },
      { title: 'Motion graphs', status: 'strong' },
      { title: 'Uniform acceleration', status: 'strong' },
    ],
  },
  {
    number: '02',
    title: 'Newton’s Laws',
    marks: '~8 marks',
    status: 'strong',
    topics: [
      { title: 'Free-body diagrams', status: 'strong' },
      { title: 'Friction', status: 'strong' },
      { title: 'Constraint relations', status: 'strong' },
      { title: 'Pseudo forces', status: 'improving' },
    ],
  },
  {
    number: '03',
    title: 'Work, Power & Energy',
    marks: '~4 marks',
    status: 'improving',
    topics: [
      { title: 'Work–energy theorem', status: 'strong' },
      { title: 'Conservative forces', status: 'improving' },
      { title: 'Collisions', status: 'improving' },
      { title: 'Power', status: 'improving' },
    ],
  },
  {
    number: '04',
    title: 'Rotational Motion',
    marks: '~12 marks',
    status: 'improving',
    topics: [
      { title: 'Moment of inertia', status: 'improving' },
      { title: 'Torque & angular acceleration', status: 'improving' },
      { title: 'Angular momentum conservation', status: 'needs-revision' },
      { title: 'Rolling without slipping', status: 'not-started' },
      { title: 'Rotational kinetic energy', status: 'strong' },
    ],
  },
  {
    number: '05',
    title: 'Thermodynamics',
    marks: '~8 marks',
    status: 'needs-revision',
    topics: [
      { title: 'Processes & PV diagrams', status: 'needs-revision' },
      { title: 'First law', status: 'improving' },
      { title: 'Heat engines & efficiency', status: 'needs-revision' },
      { title: 'Kinetic theory', status: 'strong' },
    ],
  },
  {
    number: '06',
    title: 'Current Electricity',
    marks: '~8 marks',
    status: 'improving',
    topics: [
      { title: 'Kirchhoff’s laws', status: 'strong' },
      { title: 'Wheatstone bridge', status: 'improving' },
      { title: 'RC circuits', status: 'improving' },
      { title: 'Measuring instruments', status: 'not-started' },
    ],
  },
  {
    number: '07',
    title: 'Modern Physics',
    marks: '~8 marks',
    status: 'strong',
    topics: [
      { title: 'Photoelectric effect', status: 'strong' },
      { title: 'Bohr model', status: 'strong' },
      { title: 'Dual nature', status: 'strong' },
      { title: 'Nuclei & decay', status: 'improving' },
    ],
  },
  {
    number: '08',
    title: 'Waves & SHM',
    marks: '~4 marks',
    status: 'not-started',
    topics: [
      { title: 'Simple harmonic motion', status: 'not-started' },
      { title: 'Wave equation', status: 'not-started' },
      { title: 'Superposition & beats', status: 'not-started' },
      { title: 'Doppler effect', status: 'not-started' },
    ],
  },
];

const SUBJECT_SCORES = [
  { label: 'Physics', score: 764, delta: '+18 this week', featured: true },
  { label: 'Chemistry', score: 618, delta: '+6 this week', featured: false },
  { label: 'Maths', score: 727, delta: '+12 this week', featured: false },
  { label: 'Biology', score: 682, delta: '+9 this week', featured: false },
];

const PACE_ROWS = [
  {
    subject: 'Physics',
    actual: '3m 06s',
    target: '2m 54s',
    fillPct: 85,
    tickPct: 79,
    gradient: ['#F5CB60', '#EEA31F'] as const,
    trend: '▼ 22s in 4 weeks',
  },
  {
    subject: 'Chemistry',
    actual: '1m 48s',
    target: '2m 00s',
    fillPct: 76,
    tickPct: 85,
    gradient: ['#3FB877', '#1C9B57'] as const,
    trend: '▼ 6s in 4 weeks',
  },
  {
    subject: 'Maths',
    actual: '3m 42s',
    target: '3m 30s',
    fillPct: 85,
    tickPct: 80,
    gradient: ['#F5CB60', '#EEA31F'] as const,
    trend: '▼ 15s in 4 weeks',
  },
];

const JOURNEY_STATS = [
  { value: '214', label: 'doubts solved' },
  { value: '1,862', label: 'questions attempted' },
  { value: '143', label: 'concepts mastered' },
  { value: '9', label: 'chapters strong' },
];

function goToPractice(chapterTitle?: string) {
  router.push('/practice');
  void chapterTitle;
}

function goToDrona(chapterTitle: string) {
  router.push({ pathname: '/entering-classroom', params: { chapterTitle } });
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const BAR_FILL_DURATION = 900;

export default function ProgressScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [expandedChapter, setExpandedChapter] = useState<string | null>('04');
  const { height: windowHeight } = useWindowDimensions();

  // The climb bar is visible the moment the tab opens, so it just plays on
  // focus. The pace bars sit lower on the page, so they play the same fill
  // animation but only once they actually scroll into view — tracked via
  // onScroll against the pace card's measured position, not a fixed delay.
  const climbAnim = useRef(new Animated.Value(0)).current;
  const paceAnim = useRef(new Animated.Value(0)).current;
  // Starts at +Infinity, not 0 — onLayout hasn't measured the real position
  // yet when this ref is created, and defaulting to 0 would read as "already
  // at the top of the page," firing the reveal before any real layout exists.
  const paceCardY = useRef(Number.POSITIVE_INFINITY);
  const scrollY = useRef(0);
  const paceAnimated = useRef(false);

  const checkPaceInView = useCallback(() => {
    if (paceAnimated.current) return;
    if (paceCardY.current - scrollY.current < windowHeight * 0.85) {
      paceAnimated.current = true;
      Animated.timing(paceAnim, {
        toValue: 1,
        duration: BAR_FILL_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }
  }, [paceAnim, windowHeight]);

  useFocusEffect(
    useCallback(() => {
      climbAnim.setValue(0);
      Animated.timing(climbAnim, {
        toValue: 1,
        duration: BAR_FILL_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();

      paceAnimated.current = false;
      paceAnim.setValue(0);
      checkPaceInView();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.current = event.nativeEvent.contentOffset.y;
    checkPaceInView();
  };

  const handlePaceCardLayout = (event: LayoutChangeEvent) => {
    paceCardY.current = event.nativeEvent.layout.y;
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}>
          <Text style={styles.heading}>Progress</Text>
          <Text style={styles.subheading}>
            How good have you become? One number answers it — and everything below exists to
            explain it.
          </Text>

          <View style={[styles.card, styles.firstCardSpacing]}>
            <View style={styles.monkScoreTopRow}>
              <View style={styles.monkScoreTitleRow}>
                <Text style={styles.monkScoreTitle}>Monk Score</Text>
                <View style={styles.infoBadge}>
                  <Text style={styles.infoBadgeText}>i</Text>
                </View>
              </View>
              <View style={styles.deltaBadge}>
                <Text style={styles.deltaBadgeText}>▲ +14 this week</Text>
              </View>
            </View>

            <View style={styles.monkScoreValueRow}>
              <Text style={styles.monkScoreValue}>703</Text>
              <Text style={styles.monkScoreMax}>/ 1000</Text>
            </View>

            <Text style={styles.monkScoreBody}>
              It moves only when you prove concepts — on questions you have never seen before.
              1000 = command of the full syllabus.
            </Text>

            <Text style={styles.climbOverline}>The climb · 0 → 1000</Text>
            <View style={styles.climbChart}>
              <PointLabel scale={scale} verticalScale={verticalScale} pct={70.3} top={-14}>
                <Text style={styles.climbTodayLabel}>today · 703</Text>
              </PointLabel>
              <View style={styles.climbTrack}>
                <AnimatedLinearGradient
                  colors={['#F5CB60', '#EEA31F']}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.climbFill,
                    { width: climbAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '70.3%'] }) },
                  ]}
                />
                <View style={[styles.climbWeekTick, { left: '56.1%' }]} />
                <Animated.View
                  style={[
                    styles.climbHandle,
                    { left: climbAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '70.3%'] }) },
                  ]}
                />
              </View>
              <Text style={[styles.climbEdgeLabel, styles.climbEdgeLabelLeft]}>0</Text>
              <PointLabel scale={scale} verticalScale={verticalScale} pct={56.1} bottom={0}>
                <Text style={styles.climbWeekLabel}>8 wks ago · 561</Text>
              </PointLabel>
              <Text style={[styles.climbEdgeLabel, styles.climbEdgeLabelRight]}>1000</Text>
            </View>

            <View style={styles.warningBox}>
              <View style={styles.warningIconWrap}>
                <WarningIcon size={scale(13)} />
              </View>
              <Text style={styles.warningText}>
                Your score never falls — but{' '}
                <Text style={styles.warningTextBold}>
                  3 concepts are flagged &#8220;needs revision&#8221;
                </Text>{' '}
                and cap how high it can climb until you refresh them.
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.subjectRow}
            contentContainerStyle={styles.subjectRowContent}>
            {SUBJECT_SCORES.map((s) => (
              <View
                key={s.label}
                style={[styles.subjectCard, s.featured && styles.subjectCardFeatured]}>
                <Text style={styles.subjectCardLabel}>{s.label}</Text>
                <View style={styles.subjectCardValueRow}>
                  <Text style={styles.subjectCardValue}>{s.score}</Text>
                  <Text style={styles.subjectCardMax}>/ 1000</Text>
                </View>
                <View style={styles.subjectCardDeltaBadge}>
                  <Text style={styles.subjectCardDeltaText}>{s.delta}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={[styles.card, styles.chapterCard]}>
            <Text style={styles.chapterCardOverline}>
              Why Physics is 764 · chapter by chapter
            </Text>
            <View style={styles.legendRow}>
              <LegendItem color={STATUS_COLOR.strong} label="Strong" scale={scale} />
              <LegendItem color={STATUS_COLOR.improving} label="Improving" scale={scale} />
              <LegendItem
                color={STATUS_COLOR['needs-revision']}
                label="Needs revision"
                scale={scale}
              />
              <LegendItem
                color={STATUS_COLOR['not-started']}
                label="Not started"
                scale={scale}
              />
            </View>

            <View style={styles.accordionList}>
              {PHYSICS_CHAPTERS.map((chapter) => {
                const isExpanded = expandedChapter === chapter.number;
                return (
                  <View
                    key={chapter.number}
                    style={[
                      !isExpanded && styles.accordionRowDivider,
                      isExpanded && styles.accordionRowExpanded,
                    ]}>
                    <PressableScale
                      style={styles.accordionHeader}
                      onPress={() =>
                        setExpandedChapter(isExpanded ? null : chapter.number)
                      }>
                      <Text style={styles.accordionNumber}>{chapter.number}</Text>
                      <Text style={styles.accordionTitle} numberOfLines={1}>
                        {chapter.title}
                      </Text>
                      <Text style={styles.accordionMarks}>{chapter.marks}</Text>
                      <View
                        style={[
                          styles.accordionDot,
                          { backgroundColor: STATUS_COLOR[chapter.status] },
                        ]}
                      />
                      <ChevronIcon size={scale(11)} rotated={isExpanded} />
                    </PressableScale>
                    {isExpanded && (
                      <View style={styles.accordionPanel}>
                        <View style={styles.accordionTopicsList}>
                          {chapter.topics.map((topic, topicIndex) => (
                            <View
                              key={topic.title}
                              style={[
                                styles.accordionTopicRow,
                                topicIndex < chapter.topics.length - 1 &&
                                  styles.accordionTopicRowDivider,
                              ]}>
                              <View
                                style={[
                                  styles.accordionTopicDot,
                                  { backgroundColor: STATUS_COLOR[topic.status] },
                                ]}
                              />
                              <Text style={styles.accordionTopicText} numberOfLines={1}>
                                {topic.title}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
            <Text style={styles.chapterCardFooter}>
              Opens on what Drona is flagging right now. Every state describes you — the
              syllabus itself is complete everywhere.
            </Text>
          </View>

          <View style={styles.card} onLayout={handlePaceCardLayout}>
            <View style={styles.paceHeaderRow}>
              <Text style={styles.paceOverline}>Pace · average time per question</Text>
              <View style={styles.paceDisplayOnlyBadge}>
                <Text style={styles.paceDisplayOnlyText}>
                  Display only — doesn&#8217;t move your score yet
                </Text>
              </View>
            </View>

            <View style={styles.paceList}>
              {PACE_ROWS.map((row, index) => (
                <View
                  key={row.subject}
                  style={[
                    styles.paceRow,
                    index < PACE_ROWS.length - 1 && styles.paceRowDivider,
                  ]}>
                  <View style={styles.paceTopRow}>
                    <Text style={styles.paceSubject}>{row.subject}</Text>
                    <Text style={styles.paceTimeText}>
                      <Text style={styles.paceTimeBold}>{row.actual}</Text>
                      <Text style={styles.paceTimeTarget}> · target {row.target}</Text>
                    </Text>
                  </View>
                  <View style={styles.paceTrack}>
                    <AnimatedLinearGradient
                      colors={row.gradient}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={[
                        styles.paceFill,
                        {
                          width: paceAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', `${row.fillPct}%`],
                          }),
                        },
                      ]}
                    />
                    <View style={[styles.paceTick, { left: `${row.tickPct}%` }]} />
                  </View>
                  <Text style={styles.paceTrend}>{row.trend}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.paceFooter}>
              Measured silently from Practice — you never run a timer. Targets follow the
              exam&#8217;s own per-question budget, adjusted for difficulty; the black tick is
              yours. Less time is the win here.
            </Text>

            <View style={styles.speedAccuracyHeader}>
              <Text style={styles.speedAccuracyOverline}>
                Speed × accuracy — what it catches
              </Text>
            </View>

            <View style={styles.insightCard}>
              <Text style={styles.insightTitleAmber}>Correct but slow</Text>
              <Text style={styles.insightBody}>
                Rotational Motion — right answers, ~40s over budget. Mastery looks fine; mock
                scores won&#8217;t.
              </Text>
              <Text style={styles.insightTaglineAmber}>→ timed drills</Text>
            </View>
            <View style={[styles.insightCard, styles.insightCardRed]}>
              <Text style={styles.insightTitleRed}>Fast but careless</Text>
              <Text style={styles.insightBody}>
                Organic GOC — well under target, but accuracy slipped to 71% this week. That&#8217;s
                rushing.
              </Text>
              <Text style={styles.insightTaglineRed}>→ slow down; deliberate sets</Text>
            </View>
          </View>

          <Text style={styles.movesNextOverline}>What moves it next</Text>
          <Text style={styles.movesNextSubtitle}>
            Syllabus weightage × your gaps — the highest-leverage hours available right now.
          </Text>

          <View style={styles.actionCard}>
            <View style={styles.actionItem}>
              <View style={styles.actionCardTopRow}>
                <Text style={styles.actionCardOverline}>Highest lever</Text>
                <Text style={styles.actionCardTag}>worth ≈ +9</Text>
              </View>
              <Text style={styles.actionCardTitle}>Practice Rotational Motion</Text>
              <Text style={styles.actionCardBody}>
                ~12 marks in the paper and your widest Physics gap — no other hour moves the score
                more.
              </Text>
              <PressableScale style={styles.actionCardCtaDark} onPress={() => goToPractice()}>
                <Text style={styles.actionCardCtaDarkText}>Practice this</Text>
              </PressableScale>
            </View>

            <View style={[styles.actionItem, styles.actionItemDivider]}>
              <View style={styles.actionCardTopRow}>
                <Text style={styles.actionCardOverline}>Clear a flag</Text>
                <Text style={styles.actionCardTag}>lifts the cap</Text>
              </View>
              <Text style={styles.actionCardTitle}>Refresh Thermochemistry with Drona</Text>
              <Text style={styles.actionCardBody}>
                A needs-revision flag is holding your ceiling down. One revision session and the
                climb reopens.
              </Text>
              <PressableScale
                style={styles.actionCardCtaOutline}
                onPress={() => goToDrona('Thermochemistry')}>
                <Text style={styles.actionCardCtaOutlineText}>Revise with Drona</Text>
              </PressableScale>
            </View>

            <View style={[styles.actionItem, styles.actionItemDivider]}>
              <View style={styles.actionCardTopRow}>
                <Text style={styles.actionCardOverline}>Pace fix</Text>
                <Text style={styles.actionCardTag}>mock-day marks</Text>
              </View>
              <Text style={styles.actionCardTitle}>Timed drill · Physics mechanics</Text>
              <Text style={styles.actionCardBody}>
                Your answers are right but ~40s over budget. Speed is the last mile — drill it on
                the clock.
              </Text>
              <PressableScale style={styles.actionCardCtaOutline} onPress={() => goToPractice()}>
                <Text style={styles.actionCardCtaOutlineText}>Start timed drill</Text>
              </PressableScale>
            </View>
          </View>

          <View style={styles.journeySection}>
            <Text style={styles.journeyOverline}>The journey so far</Text>
            <View style={styles.journeyStatsRow}>
              {JOURNEY_STATS.map((stat) => (
                <View key={stat.label} style={styles.journeyStat}>
                  <Text style={styles.journeyStatValue}>{stat.value}</Text>
                  <Text style={styles.journeyStatLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function PointLabel({
  scale,
  verticalScale,
  pct,
  top,
  bottom,
  children,
}: {
  scale: (n: number) => number;
  verticalScale: (n: number) => number;
  pct: number;
  top?: number;
  bottom?: number;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        position: 'absolute',
        left: `${pct}%`,
        top: top !== undefined ? verticalScale(top) : undefined,
        bottom: bottom !== undefined ? verticalScale(bottom) : undefined,
        width: scale(300),
        marginLeft: -scale(150),
        alignItems: 'center',
      }}
      pointerEvents="none">
      {children}
    </View>
  );
}

function LegendItem({
  color,
  label,
  scale,
}: {
  color: string;
  label: string;
  scale: (n: number) => number;
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(6) }}>
      <View
        style={{
          width: scale(7),
          height: scale(7),
          borderRadius: scale(3.5),
          backgroundColor: color,
        }}
      />
      <Text
        style={{
          fontFamily: 'AnekLatin_700Bold',
          fontSize: scale(9),
          color: colors.slate,
        }}>
        {label}
      </Text>
    </View>
  );
}

function ChevronIcon({ size, rotated }: { size: number; rotated: boolean }) {
  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      style={{ transform: [{ rotate: rotated ? '90deg' : '0deg' }] }}>
      <Path
        d="M5.5 3 10.5 8 5.5 13"
        stroke={colors.faint}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function WarningIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={12} r={9.2} stroke="#9A6A12" strokeWidth={2.2} />
      <Path d="M12 8v5" stroke="#9A6A12" strokeWidth={2.2} strokeLinecap="round" />
      <Circle cx={12} cy={16.6} r={0.5} fill="#9A6A12" stroke="none" />
    </Svg>
  );
}

// Same ink triple + border treatment as the Home redesign, so white cards
// on both screens read as one system — see app/(tabs)/index.tsx.
const hairline = (alpha: number) => `rgba(28,26,22,${alpha})`;

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(130),
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    subheading: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(18.9),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.2),
      borderRadius: scale(16),
      padding: scale(18),
      marginTop: verticalScale(28),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.08,
      shadowRadius: scale(3),
      elevation: 2,
    },
    firstCardSpacing: {
      marginTop: verticalScale(24),
    },
    monkScoreTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
    },
    monkScoreTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    monkScoreTitle: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    infoBadge: {
      width: scale(16),
      height: scale(16),
      borderRadius: scale(8),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.28)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      color: colors.slate,
    },
    deltaBadge: {
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    deltaBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#157A45',
    },
    monkScoreValueRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(8),
      marginTop: verticalScale(10),
    },
    monkScoreValue: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(44),
      lineHeight: scale(39.6),
      letterSpacing: scale(-1.76),
      color: colors.ink,
    },
    monkScoreMax: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
    },
    monkScoreBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(9),
    },
    climbOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    climbChart: {
      position: 'relative',
      marginTop: verticalScale(18),
      paddingBottom: verticalScale(16),
    },
    climbTodayLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      color: colors.ink,
      textAlign: 'center',
    },
    climbTrack: {
      position: 'relative',
      height: verticalScale(12),
      borderRadius: scale(99),
      backgroundColor: colors.segmentTrack,
    },
    climbFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: scale(99),
    },
    climbWeekTick: {
      position: 'absolute',
      top: verticalScale(-3),
      bottom: verticalScale(-3),
      width: scale(2),
      marginLeft: -scale(1),
      borderRadius: scale(2),
      backgroundColor: 'rgba(28,26,22,.35)',
    },
    climbHandle: {
      position: 'absolute',
      top: '50%',
      width: scale(15),
      height: scale(15),
      marginLeft: -scale(7.5),
      marginTop: -scale(7.5),
      borderRadius: scale(7.5),
      backgroundColor: colors.marigold,
      borderWidth: scale(3),
      borderColor: '#fff',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(3) },
      shadowOpacity: 0.35,
      shadowRadius: scale(8),
      elevation: 4,
    },
    climbEdgeLabel: {
      position: 'absolute',
      bottom: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9),
      color: '#C2BCAF',
    },
    climbEdgeLabelLeft: {
      left: 0,
    },
    climbEdgeLabelRight: {
      right: 0,
    },
    climbWeekLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9),
      color: colors.faint,
      textAlign: 'center',
    },
    warningIconWrap: {
      marginTop: verticalScale(2),
    },
    warningBox: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(8),
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(12),
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(11),
      backgroundColor: '#FCF4E0',
    },
    warningText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18.75),
      color: colors.slate,
    },
    warningTextBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: '#9A6A12',
    },
    subjectRow: {
      marginTop: verticalScale(24),
    },
    // Fixed-width, horizontally-scrolling cards rather than N-way flex — so
    // adding a 4th (or 5th) subject never squeezes existing cards narrower.
    // Same visible row height as before; extra subjects just scroll in.
    subjectRowContent: {
      flexDirection: 'row',
      gap: scale(12),
      paddingRight: scale(20),
    },
    subjectCard: {
      width: scale(132),
      backgroundColor: '#fff',
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(14),
      borderWidth: 1,
      borderColor: hairline(0.2),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.13,
      shadowRadius: scale(2),
      elevation: 2,
    },
    subjectCardFeatured: {
      borderColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.2,
      shadowRadius: scale(3),
    },
    subjectCardLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    subjectCardValueRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(4),
      marginTop: verticalScale(7),
    },
    subjectCardValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.42),
      color: colors.ink,
    },
    subjectCardMax: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(9),
      color: colors.faint,
    },
    subjectCardDeltaBadge: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(28,155,87,.1)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(7),
      marginTop: verticalScale(8),
    },
    subjectCardDeltaText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9.5),
      color: '#157A45',
    },
    chapterCard: {
      paddingHorizontal: scale(12),
    },
    chapterCardOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    legendRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: scale(20),
      rowGap: verticalScale(10),
      marginTop: verticalScale(12),
    },
    accordionList: {
      marginTop: verticalScale(6),
    },
    accordionRowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
      borderStyle: 'dashed',
    },
    accordionRowExpanded: {
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.25)',
      backgroundColor: 'rgba(238,163,31,.06)',
      borderRadius: scale(14),
      marginVertical: verticalScale(5),
    },
    accordionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(10),
      borderRadius: scale(12),
    },
    accordionNumber: {
      flexShrink: 0,
      width: scale(18),
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(11),
      color: '#C2BCAF',
    },
    accordionTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    accordionMarks: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(9.5),
      color: colors.faint,
    },
    accordionDot: {
      flexShrink: 0,
      width: scale(9),
      height: scale(9),
      borderRadius: scale(4.5),
    },
    accordionPanel: {
      paddingLeft: scale(36),
      paddingRight: scale(12),
      paddingBottom: verticalScale(16),
    },
    accordionTopicsList: {
      flexDirection: 'column',
    },
    accordionTopicRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingVertical: verticalScale(7),
    },
    accordionTopicRowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.07)',
      borderStyle: 'dashed',
    },
    accordionTopicDot: {
      flexShrink: 0,
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
    },
    accordionTopicText: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
    },
    chapterCardFooter: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(10),
      lineHeight: scale(15),
      color: colors.faint,
      marginTop: verticalScale(10),
      paddingHorizontal: scale(4),
    },
    paceHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
      flexWrap: 'wrap',
    },
    paceOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    paceDisplayOnlyBadge: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(8),
      backgroundColor: colors.paper,
    },
    paceDisplayOnlyText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9),
      color: colors.faint,
    },
    paceList: {
      marginTop: verticalScale(2),
    },
    paceRow: {
      paddingVertical: verticalScale(12),
    },
    paceRowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
      borderStyle: 'dashed',
    },
    paceTopRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: scale(8),
    },
    paceSubject: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    paceTimeText: {
      fontSize: scale(12.5),
    },
    paceTimeBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    paceTimeTarget: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9.5),
      color: colors.faint,
    },
    paceTrack: {
      position: 'relative',
      height: verticalScale(9),
      borderRadius: scale(99),
      backgroundColor: colors.segmentTrack,
      marginTop: verticalScale(8),
    },
    paceFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: scale(99),
    },
    paceTick: {
      position: 'absolute',
      top: verticalScale(-3),
      bottom: verticalScale(-3),
      width: scale(2.5),
      marginLeft: -scale(1.25),
      borderRadius: scale(2),
      backgroundColor: colors.ink,
    },
    paceTrend: {
      textAlign: 'right',
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10.5),
      color: '#157A45',
      marginTop: verticalScale(5),
    },
    paceFooter: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(10),
      lineHeight: scale(15),
      color: colors.faint,
      marginTop: verticalScale(8),
    },
    speedAccuracyHeader: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
      marginTop: verticalScale(12),
      paddingTop: verticalScale(12),
    },
    speedAccuracyOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    insightCard: {
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      backgroundColor: '#FCF4E0',
      borderRadius: scale(11),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(9),
    },
    insightCardRed: {
      borderColor: 'rgba(221,68,51,.3)',
      backgroundColor: 'rgba(221,68,51,.06)',
    },
    insightTitleAmber: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#9A6A12',
    },
    insightTitleRed: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#C53A2B',
    },
    insightBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18.75),
      color: colors.slate,
      marginTop: verticalScale(3),
    },
    insightTaglineAmber: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(13),
      color: '#9A6A12',
      marginTop: verticalScale(4),
      transform: [{ rotate: '-0.5deg' }],
    },
    insightTaglineRed: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(13),
      color: '#C53A2B',
      marginTop: verticalScale(4),
      transform: [{ rotate: '-0.5deg' }],
    },
    movesNextOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(40),
      marginHorizontal: scale(2),
    },
    movesNextSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11.5),
      color: colors.faint,
      marginTop: verticalScale(3),
      marginHorizontal: scale(2),
    },
    actionCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.2),
      borderRadius: scale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(12),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1) },
      shadowOpacity: 0.08,
      shadowRadius: scale(3),
      elevation: 2,
    },
    actionItem: {
      paddingVertical: verticalScale(17),
    },
    actionItemDivider: {
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
    },
    actionCardTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
    },
    actionCardOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    actionCardTag: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12.5),
      color: colors.red,
      transform: [{ rotate: '-1deg' }],
    },
    actionCardTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      letterSpacing: scale(-0.16),
      color: colors.ink,
      marginTop: verticalScale(7),
    },
    actionCardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    actionCardCtaDark: {
      alignSelf: 'flex-start',
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      marginTop: verticalScale(10),
    },
    actionCardCtaDarkText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13.5),
      color: colors.paper,
    },
    actionCardCtaOutline: {
      alignSelf: 'flex-start',
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
      marginTop: verticalScale(10),
    },
    actionCardCtaOutlineText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    journeySection: {
      marginTop: verticalScale(28),
      paddingTop: verticalScale(14),
      paddingHorizontal: scale(4),
      paddingBottom: verticalScale(2),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.16)',
      borderStyle: 'dashed',
    },
    journeyOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    journeyStatsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: verticalScale(6),
      columnGap: scale(18),
      marginTop: verticalScale(8),
    },
    journeyStat: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(5),
    },
    journeyStatValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(18),
      letterSpacing: scale(-0.36),
      color: colors.ink,
    },
    journeyStatLabel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.faint,
    },
  });
}
