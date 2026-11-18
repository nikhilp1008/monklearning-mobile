import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { HistoryHeader, SHADES } from '@/components/practice-history/parts';
import { StateBanner, StateCard } from '@/components/states';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { useOnline } from '@/lib/connection';
import { footPadding } from '@/lib/foot-padding';
import {
  MONTH_LONG,
  addDays,
  clockTime,
  getHistoryCalendar,
  isoDay,
  parseDay,
  shadeLevel,
  shadeThresholds,
  shortDate,
  type HistoryCalendar,
} from '@/lib/practice-history';

/**
 * PRACTICE HISTORY: the calendar.
 *
 * Opened from the clock button on Practice's header. One block per month,
 * newest first, each date a square that deepens (Soft orange) with how many
 * questions were answered that day. Tap a day with practice — or today,
 * always — for that day's questions (app/practice-history-day.tsx).
 *
 * Read only, 90 days, free for everyone. Design: "Practice history · final",
 * 17 Nov 2026. Squares only ever show HOW MUCH was practised, never mistakes,
 * and white is never "missed": no streaks anywhere.
 */
export default function PracticeHistoryScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const online = useOnline();

  const [data, setData] = useState<HistoryCalendar | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const loadId = useRef(0);

  const load = useCallback(() => {
    const id = ++loadId.current;
    setFailed(false);
    getHistoryCalendar()
      .then(({ data: next, savedAt: at }) => {
        if (id !== loadId.current) return;
        setData(next);
        setSavedAt(at);
      })
      .catch(() => {
        if (id === loadId.current) setFailed(true);
      });
  }, []);

  // On every focus, not just mount: a student who goes back to Practice and
  // answers a few more should find today's square deeper when they return.
  useFocusEffect(load);

  // Seven squares across the page, the gutter on both sides.
  const gutter = scale(22);
  const gap = scale(5);
  const square = Math.floor((width - gutter * 2 - gap * 6) / 7);

  const totals = useMemo(() => new Map((data?.days ?? []).map((d) => [d.date, d.total])), [data]);
  const thresholds = useMemo(() => shadeThresholds(data?.days ?? []), [data]);

  /** Months to draw, newest first: from today's month back to the first kept day's. */
  const months = useMemo(() => {
    const to = parseDay(data?.to ?? isoDay(new Date()));
    const from = parseDay(data?.from ?? addDays(isoDay(new Date()), -89));
    const list: { year: number; month: number }[] = [];
    let y = to.getFullYear();
    let m = to.getMonth();
    while (y > from.getFullYear() || (y === from.getFullYear() && m >= from.getMonth())) {
      list.push({ year: y, month: m });
      m -= 1;
      if (m < 0) {
        m = 11;
        y -= 1;
      }
    }
    return list;
  }, [data]);

  const openDay = (date: string) => router.push({ pathname: '/practice-history-day', params: { date } });

  const empty = data !== null && data.days.length === 0;

  let body: React.ReactNode;
  if (failed && !data) {
    body = (
      <StateCard
        style={styles.stateCard}
        glyph={online ? 'retry' : 'offline'}
        title={online ? "Couldn't load your history" : "Can't load your history offline"}
        action={{ label: 'Try again', onPress: load }}
      />
    );
  } else if (empty && data) {
    // First time: this month, blank, today outlined, one line and one key.
    body = (
      <>
        <Month
          year={months[0].year}
          month={months[0].month}
          data={data}
          totals={totals}
          thresholds={thresholds}
          square={square}
          gap={gap}
          onOpen={openDay}
          styles={styles}
        />
        <Text style={styles.firstLine}>Practise today to start seeing your progress here.</Text>
      </>
    );
  } else {
    body = (
      <>
        {savedAt !== null && (
          <StateBanner
            style={styles.banner}
            bold="You're offline."
            text={`Showing what was saved at ${clockTime(new Date(savedAt).toISOString())}.`}
          />
        )}
        {months.map((m, i) => (
          <View key={`${m.year}-${m.month}`} style={i > 0 && styles.monthGap}>
            <Month
              year={m.year}
              month={m.month}
              data={data}
              totals={totals}
              thresholds={thresholds}
              square={square}
              gap={gap}
              onOpen={openDay}
              styles={styles}
            />
            {i === 0 && <Legend styles={styles} scale={scale} />}
          </View>
        ))}
        {data && (
          <View style={styles.endNote}>
            <Text style={styles.endTitle}>That&apos;s everything since {shortDate(data.from)}.</Text>
            <Text style={styles.endLine}>
              We keep your practice for 90 days. Older practice isn&apos;t saved here, but it still counts in
              your totals and in Progress.
            </Text>
          </View>
        )}
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <HistoryHeader title="History" />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingHorizontal: gutter, paddingBottom: footPadding(insets.bottom, 24, 16) },
          ]}
          showsVerticalScrollIndicator={false}>
          {body}
        </ScrollView>
        {empty && (
          <View style={[styles.foot, { paddingBottom: footPadding(insets.bottom, 16, 12) }]}>
            <ObButton label="Start practising" onPress={() => router.back()} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Month({
  year,
  month,
  data,
  totals,
  thresholds,
  square,
  gap,
  onOpen,
  styles,
}: {
  year: number;
  month: number;
  /** Null while loading: the squares draw as outlines. */
  data: HistoryCalendar | null;
  totals: Map<string, number>;
  thresholds: [number, number, number];
  square: number;
  gap: number;
  onOpen: (date: string) => void;
  styles: ReturnType<typeof createStyles>;
}) {
  const today = data?.to ?? isoDay(new Date());
  const from = data?.from ?? addDays(today, -89);
  const len = new Date(year, month + 1, 0).getDate();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;

  let sum = 0;
  let on = 0;
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < offset; i++) cells.push(<View key={`b${i}`} style={{ width: square, height: square }} />);
  for (let d = 1; d <= len; d++) {
    const date = isoDay(new Date(year, month, d, 12));
    const future = date > today;
    const old = date < from;
    const total = totals.get(date) ?? 0;
    if (total) {
      sum += total;
      on += 1;
    }
    const isToday = date === today;
    const level = shadeLevel(total, thresholds);
    const tappable = !!data && !future && !old && (total > 0 || isToday);
    cells.push(
      <Pressable
        key={date}
        disabled={!tappable}
        onPress={() => onOpen(date)}
        accessibilityRole={tappable ? 'button' : undefined}
        accessibilityLabel={`${d} ${MONTH_LONG[month]}${total ? `, ${total} questions` : ''}`}
        style={({ pressed }) => [
          styles.cell,
          { width: square, height: square, borderRadius: square * 0.26 },
          !data
            ? styles.cellLoading
            : future
              ? styles.cellFuture
              : old
                ? styles.cellOld
                : { backgroundColor: SHADES[level], borderWidth: level ? 0 : 1, borderColor: 'rgba(28,26,22,.10)' },
          isToday && styles.cellToday,
          pressed && { opacity: 0.6 },
        ]}>
        {!!data && <Text style={[styles.cellText, (future || old) && styles.cellTextQuiet]}>{d}</Text>}
      </Pressable>
    );
  }

  const thisYear = parseDay(today).getFullYear();
  return (
    <View>
      <View style={styles.monthHead}>
        <Text style={styles.monthName}>
          {MONTH_LONG[month]}
          {year !== thisYear ? ` ${year}` : ''}
        </Text>
        {!!data && (
          <Text style={styles.monthMeta}>
            {sum ? (
              <>
                <Text style={styles.monthMetaBold}>{sum}</Text> questions · {on} {on === 1 ? 'day' : 'days'}
              </>
            ) : (
              'No practice'
            )}
          </Text>
        )}
      </View>
      <View style={[styles.grid, { gap }]}>
        {WEEKDAYS.map((w, i) => (
          <Text key={i} style={[styles.weekday, { width: square }]}>
            {w}
          </Text>
        ))}
        {cells}
      </View>
    </View>
  );
}

function Legend({ styles, scale }: { styles: ReturnType<typeof createStyles>; scale: (n: number) => number }) {
  return (
    <View style={styles.legend}>
      <Text style={styles.legendText}>Darker = more questions</Text>
      <View style={styles.legendRamp}>
        <Text style={styles.legendText}>Less</Text>
        {SHADES.map((c, i) => (
          <View
            key={c}
            style={{
              width: scale(11),
              height: scale(11),
              borderRadius: scale(3),
              backgroundColor: c,
              borderWidth: i ? 0 : 1,
              borderColor: 'rgba(28,26,22,.12)',
            }}
          />
        ))}
        <Text style={styles.legendText}>More</Text>
      </View>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    scroll: { flex: 1 },
    scrollContent: { paddingTop: verticalScale(6) },
    stateCard: { marginTop: verticalScale(24) },
    banner: { marginBottom: verticalScale(10) },
    monthGap: { marginTop: verticalScale(26) },
    monthHead: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: verticalScale(8),
      marginBottom: verticalScale(10),
    },
    monthName: { fontFamily: 'Onest_700Bold', fontSize: scale(17), color: colors.ink, letterSpacing: scale(-0.3) },
    monthMeta: { fontFamily: 'Onest_400Regular', fontSize: scale(12.5), color: colors.slate },
    monthMetaBold: { fontFamily: 'Onest_700Bold', color: colors.ink },
    grid: { flexDirection: 'row', flexWrap: 'wrap' },
    weekday: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10.5),
      color: colors.faint,
      textAlign: 'center',
      marginBottom: verticalScale(2),
    },
    cell: { alignItems: 'center', justifyContent: 'center' },
    cellLoading: { borderWidth: 1, borderColor: 'rgba(28,26,22,.08)' },
    cellFuture: { borderWidth: 1, borderColor: 'rgba(28,26,22,.06)' },
    cellOld: {},
    cellToday: { borderWidth: scale(2), borderColor: colors.ink },
    cellText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(12.5), color: colors.ink },
    cellTextQuiet: { color: colors.quiet },
    legend: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(12),
    },
    legendRamp: { flexDirection: 'row', alignItems: 'center', gap: scale(3) },
    legendText: { fontFamily: 'Onest_500Medium', fontSize: scale(11), color: colors.faint, marginHorizontal: scale(2) },
    firstLine: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      textAlign: 'center',
      marginTop: verticalScale(22),
    },
    endNote: { marginTop: verticalScale(28), gap: verticalScale(4) },
    endTitle: { fontFamily: 'Onest_700Bold', fontSize: scale(14), color: colors.ink },
    endLine: { fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(19), color: colors.slate },
    foot: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(22),
      backgroundColor: '#fff',
    },
  });
}
