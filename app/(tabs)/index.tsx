import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { ProtractorMark } from '@/components/protractor-mark';
import { RuledPaper } from '@/components/ruled-paper';
import { SnapIcon } from '@/components/snap-icon';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';

// The redesign's hairline borders are all shades of this ink, not the app's
// usual `colors.hairline` rgba triple — keep the two distinct so any future
// non-Home screen borders don't quietly drift with a shared token.
const INK_RGB = '28,25,20';
const hairline = (alpha: number) => `rgba(${INK_RGB},${alpha})`;

function getGreeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

const NOTES = [
  {
    id: 'ohms-law',
    subject: 'Physics',
    dotColor: '#DD4433',
    title: "Ohm's law & drift velocity",
    body: 'I = nAve. Charge marching together.',
    time: '2 days ago',
  },
  {
    id: 'redox',
    subject: 'Chemistry',
    dotColor: '#1C9B57',
    title: 'Balancing redox in acid',
    body: 'Half-reactions, O with H₂O.',
    time: '4 days ago',
  },
  {
    id: 'integration',
    subject: 'Maths',
    dotColor: '#EEA31F',
    title: 'Integration by parts',
    body: 'Pick u before dv, every time.',
    time: 'last week',
  },
] as const;

const SESSIONS = [
  {
    id: 'rotational-motion',
    title: 'Rotational Motion · torque',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    meta: 'yesterday · 24 min',
    badge: { kind: 'expiry', text: '6 days left' },
  },
  {
    id: 'current-electricity',
    title: 'Current Electricity · loop rule',
    subject: 'Physics',
    chapter: 'Current Electricity',
    meta: 'Tue · 31 min',
    badge: { kind: 'saved', text: 'Saved' },
  },
] as const;

export default function HomeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const greeting = `${getGreeting(new Date())}, Aarav`;

  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const doneCount = planItems.filter((item) => item.done).length;

  // Refetch on focus, not just mount — the plan is edited on a separate
  // screen (plan-sheet.tsx) that this screen stays mounted underneath, so a
  // plain mount-only fetch would never see what was just added there.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getTodayPlan().then((items) => {
        if (!cancelled) setPlanItems(items);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const togglePlanItem = (id: string) => {
    const next = planItems.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setPlanItems(next);
    saveTodayPlan(next);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerRow}>
          <Text style={styles.greeting} numberOfLines={1} ellipsizeMode="tail">
            {greeting}
          </Text>
          <PressableScale style={styles.avatar} onPress={() => router.push('/profile')}>
            <Text style={styles.avatarText}>A</Text>
          </PressableScale>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.heroCard}>
            <LinearGradient
              colors={['#FDF6E4', '#FBE9C6', '#F7DCA8']}
              locations={[0, 0.55, 1]}
              start={{ x: 0.3, y: 0 }}
              end={{ x: 0.7, y: 1 }}
              style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.heroTitleRow}>
              <View style={styles.heroIconChip}>
                <ProtractorMark size={scale(27)} />
              </View>
              <Text style={styles.heroTitle} numberOfLines={1}>
                Learn with Drona
              </Text>
            </View>
            <Text style={styles.heroBody}>
              Pick a chapter and Drona teaches it out loud, writing on the board as it goes.
            </Text>
            <PressableScale style={styles.heroCta} onPress={() => router.push('/drona')}>
              <Text style={styles.heroCtaText}>Choose a topic</Text>
              <ArrowRightIcon color="#FFF7E6" size={scale(14)} />
            </PressableScale>
          </View>

          <View style={styles.actionList}>
            <PressableScale
              style={[styles.actionRow, styles.actionRowDivider]}
              onPress={() => router.push('/snap-capture')}>
              <View style={styles.actionIconChip}>
                <SnapIcon size={scale(20)} />
              </View>
              <View style={styles.actionTextBlock}>
                <Text style={styles.actionTitle}>Snap a doubt</Text>
                <Text style={styles.actionSubtitle}>Up to 3 questions, solved step by step</Text>
              </View>
              <Text style={styles.actionArrow}>→</Text>
            </PressableScale>
            <PressableScale
              style={[styles.actionRow, styles.actionRowDivider]}
              onPress={() => router.push('/practice')}>
              <View style={styles.actionIconChip}>
                <InfinityIcon size={scale(20)} />
              </View>
              <View style={styles.actionTextBlock}>
                <Text style={styles.actionTitle}>Practice unlimited</Text>
                <Text style={styles.actionSubtitle}>6 solved today · never ends</Text>
              </View>
              <Text style={styles.actionArrow}>→</Text>
            </PressableScale>
          </View>

          <View style={styles.statsStrip}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>703</Text>
              <Text style={styles.statLabel}>monk score</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.statValueGreen]}>47</Text>
              <Text style={styles.statLabel}>doubts solved</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>320</Text>
              <Text style={styles.statLabel}>practised</Text>
            </View>
          </View>

          <View style={styles.planCard}>
            <View style={styles.planHeaderRow}>
              <Text style={styles.planOverline}>Today&apos;s plan</Text>
              <View style={styles.planHeaderRight}>
                {planItems.length > 0 && (
                  <View style={styles.planBadge}>
                    <Text style={styles.planBadgeText}>
                      {doneCount} of {planItems.length}
                    </Text>
                  </View>
                )}
                <PressableScale style={styles.planAddPill} onPress={() => router.push('/plan-sheet')}>
                  <Text style={styles.planAddText}>+ Add</Text>
                </PressableScale>
              </View>
            </View>
            {planItems.length === 0 ? (
              <Text style={styles.planEmptyText}>
                Nothing planned yet — tap <Text style={styles.planEmptyAccent}>+ Add</Text> to set
                today&apos;s goals.
              </Text>
            ) : (
              planItems.map((item, index) => (
                <PressableScale
                  key={item.id}
                  style={[styles.planRow, index === planItems.length - 1 && styles.planRowLast]}
                  onPress={() => togglePlanItem(item.id)}>
                  {item.done ? (
                    <View style={styles.planCheckDone}>
                      <CheckIcon size={scale(12)} color="#fff" />
                    </View>
                  ) : (
                    <View style={styles.planCheckOpen} />
                  )}
                  <Text style={item.done ? styles.planRowTextDone : styles.planRowText}>
                    {item.text}
                  </Text>
                </PressableScale>
              ))
            )}
          </View>

          <PressableScale
            style={styles.doubtCard}
            onPress={() =>
              router.push({ pathname: '/entering-classroom', params: { chapterTitle: 'Modern Physics' } })
            }>
            <View style={styles.doubtRuledClip}>
              <RuledPaper step={verticalScale(24)} color={hairline(0.06)} count={12} />
            </View>
            <View style={styles.doubtRule} />
            <View style={styles.doubtHeaderRow}>
              <Text style={styles.doubtLabel}>doubt of the day</Text>
              <Text style={styles.doubtTag}>Physics · Modern</Text>
            </View>
            <Text style={styles.doubtQuestion}>
              Why do photoelectrons stop the moment intensity drops — but not when frequency
              drops below threshold?
            </Text>
            <View style={styles.doubtCtaRow}>
              <Text style={styles.doubtCtaText}>Learn this with Drona</Text>
              <ArrowRightIcon color={colors.red} size={scale(13)} />
            </View>
          </PressableScale>

          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionTitleDash} />
              <Text style={styles.sectionTitle}>Recent notes</Text>
            </View>
            <PressableScale onPress={() => router.push('/library')}>
              <Text style={styles.viewAll}>View all →</Text>
            </PressableScale>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.notesRow}>
            {NOTES.map((note) => (
              <View key={note.id} style={styles.noteCard}>
                <View style={styles.noteSubjectRow}>
                  <View style={[styles.noteDot, { backgroundColor: note.dotColor }]} />
                  <Text style={styles.noteSubject}>{note.subject}</Text>
                </View>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteBody}>{note.body}</Text>
                <Text style={styles.noteTime}>{note.time}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionTitleDash} />
              <Text style={styles.sectionTitle}>Recent sessions</Text>
            </View>
            <PressableScale onPress={() => router.push('/library')}>
              <Text style={styles.viewAll}>View all →</Text>
            </PressableScale>
          </View>
          <View style={styles.sessionList}>
            {SESSIONS.map((session) => (
              <PressableScale
                key={session.id}
                style={[styles.sessionRow, styles.actionRowDivider]}
                onPress={() =>
                  router.push({
                    pathname: '/session-board',
                    params: {
                      title: session.title,
                      subject: session.subject,
                      chapter: session.chapter,
                      time: session.meta,
                    },
                  })
                }>
                <View style={styles.sessionTextBlock}>
                  <Text style={styles.sessionTitle} numberOfLines={1}>
                    {session.title}
                  </Text>
                  <Text style={styles.sessionMeta}>{session.meta}</Text>
                </View>
                {session.badge.kind === 'expiry' ? (
                  <Text style={styles.sessionExpiryText}>{session.badge.text}</Text>
                ) : (
                  <View style={styles.sessionSavedBadge}>
                    <SavedCheckIcon size={scale(10)} />
                    <Text style={styles.sessionSavedText}>{session.badge.text}</Text>
                  </View>
                )}
              </PressableScale>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function InfinityIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M18.2 8.4c4.8 0 4.8 7.2 0 7.2-4.6 0-5.8-7.2-10.4-7.2-4.8 0-4.8 7.2 0 7.2 4.6 0 5.8-7.2 10.4-7.2"
        stroke={colors.ink}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={1.7} fill={colors.marigold} />
    </Svg>
  );
}

function CheckIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SavedCheckIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M20 6 9 17l-5-5"
        stroke="#157A45"
        strokeWidth={3}
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
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      paddingTop: verticalScale(10),
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(14),
    },
    greeting: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(21),
      letterSpacing: scale(-0.315),
      lineHeight: scale(25.2),
      color: colors.ink,
    },
    avatar: {
      width: scale(38),
      height: scale(38),
      borderRadius: scale(19),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(15),
      color: '#3A2A06',
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(130),
    },
    heroCard: {
      position: 'relative',
      overflow: 'hidden',
      marginHorizontal: -scale(24),
      paddingHorizontal: scale(24),
      paddingVertical: verticalScale(24),
      borderTopWidth: 1,
      borderTopColor: 'rgba(238,163,31,.5)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(238,163,31,.5)',
    },
    heroTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    heroIconChip: {
      width: scale(42),
      height: scale(42),
      flexShrink: 0,
      borderRadius: scale(13),
      backgroundColor: 'rgba(255,255,255,.7)',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(22),
      lineHeight: scale(24.2),
      color: colors.ink,
    },
    heroBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: '#4A453D',
      marginTop: verticalScale(12),
    },
    heroCta: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: '#241A08',
      marginTop: verticalScale(20),
    },
    heroCtaText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: '#FFF7E6',
    },
    actionList: {
      marginHorizontal: -scale(24),
      paddingHorizontal: scale(24),
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      paddingVertical: verticalScale(18),
    },
    actionRowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.1),
    },
    actionIconChip: {
      width: scale(38),
      height: scale(38),
      flexShrink: 0,
      borderRadius: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    actionTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
    },
    actionSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    actionArrow: {
      flexShrink: 0,
      fontSize: scale(18),
      color: '#B4AC9B',
    },
    statsStrip: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: hairline(0.11),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.11),
      paddingVertical: verticalScale(16),
    },
    statItem: {
      flex: 1,
      alignItems: 'flex-start',
    },
    statValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(20),
      letterSpacing: scale(-0.4),
      color: colors.ink,
    },
    statValueGreen: {
      color: '#157A45',
    },
    statLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    planCard: {
      marginTop: verticalScale(23),
    },
    planHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: verticalScale(4),
    },
    planOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    planHeaderRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    planBadge: {
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    planBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#157A45',
    },
    planAddPill: {
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(11),
    },
    planAddText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.ink,
    },
    planRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      paddingVertical: verticalScale(11),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.09),
      borderStyle: 'dashed',
    },
    planRowLast: {
      borderBottomWidth: 0,
      paddingBottom: verticalScale(2),
    },
    planCheckDone: {
      width: scale(22),
      height: scale(22),
      borderRadius: scale(7),
      backgroundColor: '#1C9B57',
      alignItems: 'center',
      justifyContent: 'center',
    },
    planCheckOpen: {
      width: scale(22),
      height: scale(22),
      borderRadius: scale(7),
      borderWidth: scale(1.8),
      borderColor: 'rgba(28,26,22,.25)',
    },
    planRowTextDone: {
      flex: 1,
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(14),
      color: colors.faint,
      textDecorationLine: 'line-through',
    },
    planRowText: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    planRowAccent: {
      fontFamily: 'Kalam_700Bold',
      color: colors.red,
    },
    planEmptyText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19.5),
      color: colors.slate,
      paddingVertical: verticalScale(11),
    },
    planEmptyAccent: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    doubtCard: {
      position: 'relative',
      backgroundColor: colors.welcomePaper,
      borderWidth: 1,
      borderColor: hairline(0.1),
      borderRadius: scale(16),
      paddingTop: verticalScale(16),
      paddingRight: scale(16),
      paddingBottom: verticalScale(14),
      paddingLeft: scale(40),
      marginTop: verticalScale(28),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    doubtRuledClip: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(15),
      overflow: 'hidden',
    },
    doubtRule: {
      position: 'absolute',
      top: verticalScale(12),
      bottom: verticalScale(12),
      left: scale(26),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    doubtHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    doubtLabel: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.red,
      transform: [{ rotate: '-0.6deg' }],
    },
    doubtTag: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.9),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    doubtQuestion: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
      marginTop: verticalScale(7),
    },
    doubtCtaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    doubtCtaText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    sectionHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(40),
      marginBottom: verticalScale(12),
    },
    sectionTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
    },
    sectionTitleDash: {
      width: scale(18),
      height: verticalScale(2),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    sectionTitle: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(11),
      letterSpacing: scale(1.54),
      textTransform: 'uppercase',
      color: colors.ink,
    },
    viewAll: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    notesRow: {
      gap: scale(10),
      paddingRight: scale(20),
      paddingBottom: verticalScale(4),
    },
    noteCard: {
      width: scale(210),
      backgroundColor: colors.welcomePaper,
      borderWidth: 1,
      borderColor: hairline(0.1),
      borderRadius: scale(18),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
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
    },
    noteSubject: {
      fontFamily: 'monospace',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    noteTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(17),
      letterSpacing: scale(-0.255),
      lineHeight: scale(20.4),
      color: colors.ink,
      marginTop: verticalScale(8),
    },
    noteBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18.2),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    noteTime: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(12),
      paddingTop: verticalScale(10),
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
    },
    sessionList: {
      flexDirection: 'column',
    },
    sessionRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: scale(12),
      paddingVertical: verticalScale(15),
    },
    sessionTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    sessionTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      letterSpacing: scale(-0.24),
      color: colors.ink,
    },
    sessionMeta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    sessionExpiryText: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.faint,
    },
    sessionSavedBadge: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
    },
    sessionSavedText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#157A45',
    },
  });
}
