import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, BackHandler, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ChevronDown,
  FILTER_LABEL,
  FigureIcon,
  HAIRLINE,
  HistoryHeader,
  ResultMark,
  SUBJECT_SHORT,
} from '@/components/practice-history/parts';
import { ListSkeleton, StateBanner, StateCard, StateLine } from '@/components/states';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { useOnline } from '@/lib/connection';
import { footPadding } from '@/lib/foot-padding';
import { hapticSwitched } from '@/lib/haptics';
import { latexToText } from '@/lib/latex-text';
import {
  clockTime,
  dayTitle,
  getHistoryDay,
  isoDay,
  type HistoryCounts,
  type HistoryDay,
  type HistoryFilter,
  type HistoryItem,
} from '@/lib/practice-history';
import { shadow } from '@/lib/shadow';

/**
 * PRACTICE HISTORY: one day, full screen.
 *
 * Subject tabs along the top (only when the day had more than one subject:
 * a row with one tab says nothing), and under them "Showing All ▾", the
 * dropdown that picks All / Correct / Wrong / Skipped inside that subject.
 * Its counts follow the tab. The right / wrong / skipped numbers live only
 * there, never repeated under the date (Nikhil, 17 Nov).
 *
 * Rows: the mark (no word beside it), the question's opening, then subject
 * (on the All tab), chapter and time. Tap one to read it
 * (app/practice-history-question.tsx), which walks the same filtered list.
 */
const FILTERS: HistoryFilter[] = ['all', 'correct', 'wrong', 'skipped'];

const countFor = (c: HistoryCounts, f: HistoryFilter) => (f === 'all' ? c.total : c[f]);

export default function PracticeHistoryDayScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const insets = useSafeAreaInsets();
  const online = useOnline();
  const { date } = useLocalSearchParams<{ date: string }>();
  const today = isoDay(new Date());

  const [subject, setSubject] = useState<string | null>(null);
  const [filter, setFilter] = useState<HistoryFilter>('all');
  const [menuOpen, setMenuOpen] = useState(false);
  /** Where the dropdown hangs: under its button, measured, since the tabs
   *  above it come and go with the number of subjects. */
  const [menuAt, setMenuAt] = useState({ top: 0, left: 0 });
  const selRowY = useRef(0);

  const [day, setDay] = useState<HistoryDay | null>(null);
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [failed, setFailed] = useState(false);
  const loadId = useRef(0);

  const load = useCallback(() => {
    if (!date) return;
    const id = ++loadId.current;
    setLoading(true);
    setFailed(false);
    getHistoryDay(date, { subject, result: filter })
      .then(({ data, savedAt: at }) => {
        if (id !== loadId.current) return;
        setDay(data);
        setItems(data.items);
        setCursor(data.next_cursor);
        setSavedAt(at);
      })
      .catch(() => {
        if (id === loadId.current) setFailed(true);
      })
      .finally(() => {
        if (id === loadId.current) setLoading(false);
      });
  }, [date, subject, filter]);

  useEffect(load, [load]);

  // Android's back closes the dropdown first, as it would a menu, rather
  // than leaving the day with the menu still open.
  useEffect(() => {
    if (!menuOpen) return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setMenuOpen(false);
      return true;
    });
    return () => sub.remove();
  }, [menuOpen]);

  const loadMore = () => {
    if (!date || !cursor || loadingMore) return;
    const id = loadId.current;
    setLoadingMore(true);
    getHistoryDay(date, { subject, result: filter, cursor })
      .then(({ data }) => {
        if (id !== loadId.current) return;
        setItems((prev) => [...prev, ...data.items]);
        setCursor(data.next_cursor);
      })
      .catch(() => {
        // The rows already shown stay; reaching the end again retries.
      })
      .finally(() => setLoadingMore(false));
  };

  const counts: HistoryCounts | null = day
    ? subject
      ? (day.subjects.find((s) => s.subject === subject)?.counts ?? day.all)
      : day.all
    : null;
  const shown = counts ? countFor(counts, filter) : 0;
  const multiSubject = (day?.subjects.length ?? 0) > 1;
  const title = date ? dayTitle(date, today) : '';

  const open = (item: HistoryItem) =>
    router.push({
      pathname: '/practice-history-question',
      params: { attemptId: item.attempt_id, subject: subject ?? '', result: filter },
    });

  // Fixed above the list, not scrolled with it: the filter stays in reach on
  // a 132-question day, and the dropdown always opens under its button.
  const header = (
    <View style={styles.fixed}>
      {savedAt !== null && (
        <StateBanner
          style={styles.banner}
          bold="You're offline."
          text={`Showing what was saved at ${clockTime(new Date(savedAt).toISOString())}.`}
        />
      )}
      {multiSubject && day && (
        <View style={styles.tabs} accessibilityRole="tablist">
          {[{ key: null as string | null, label: 'All', n: day.all.total }, ...day.subjects.map((s) => ({
            key: s.subject as string | null,
            label: SUBJECT_SHORT[s.subject] ?? s.subject,
            n: s.counts.total,
          }))].map((t) => {
            const on = t.key === subject;
            return (
              <Pressable
                key={t.label}
                accessibilityRole="tab"
                accessibilityState={{ selected: on }}
                onPress={() => {
                  if (on) return;
                  hapticSwitched();
                  setSubject(t.key);
                }}
                style={styles.tab}>
                <Text style={[styles.tabText, on && styles.tabTextOn]}>
                  {t.label} <Text style={[styles.tabCount, on && styles.tabTextOn]}>{t.n}</Text>
                </Text>
                {on && <View style={styles.tabLine} />}
              </Pressable>
            );
          })}
        </View>
      )}
      {day && (
        <View style={styles.selRow} onLayout={(e) => (selRowY.current = e.nativeEvent.layout.y)}>
          <Text style={styles.selHint}>Showing</Text>
          <Pressable
            onLayout={(e) => {
              const { x, y, height } = e.nativeEvent.layout;
              setMenuAt({ top: selRowY.current + y + height, left: scale(22) + x });
            }}
            onPress={() => setMenuOpen((v) => !v)}
            accessibilityRole="button"
            accessibilityLabel={`Showing ${FILTER_LABEL[filter]}. Change`}
            style={[styles.selButton, menuOpen && styles.selButtonOpen]}>
            <Text style={styles.selButtonText}>{FILTER_LABEL[filter]}</Text>
            <ChevronDown size={scale(11)} />
          </Pressable>
          <Text style={styles.selCount}>
            {shown} {shown === 1 ? 'question' : 'questions'}
          </Text>
        </View>
      )}
    </View>
  );

  const emptyFilter = (
    <StateLine
      style={styles.emptyLine}
      glyph="check"
      text={
        filter === 'all'
          ? 'No questions here.'
          : `No ${filter === 'skipped' ? 'skipped questions' : `${filter} answers`}${
              subject ? ` in ${SUBJECT_SHORT[subject] ?? subject}` : ''
            } on this day.`
      }
    />
  );

  let content: React.ReactNode;
  if (failed && !day) {
    content = (
      <StateCard
        style={styles.stateCard}
        glyph={online ? 'retry' : 'offline'}
        title={online ? "Couldn't load this day" : "Can't open this day offline"}
        action={{ label: 'Try again', onPress: load }}
      />
    );
  } else if (day && day.all.total === 0) {
    // Only today can be opened with nothing in it (past white squares can't).
    content = (
      <StateCard
        style={styles.stateCard}
        glyph="clock"
        title="Nothing yet today"
        action={{ label: 'Start practising', onPress: () => router.dismissTo('/practice') }}
      />
    );
  } else {
    content = (
      <FlatList
        style={styles.listView}
        data={loading && !items.length ? [] : items}
        keyExtractor={(i) => i.attempt_id}
        ListEmptyComponent={loading ? <View style={styles.skeleton}><ListSkeleton rows={6} thumb={false} /></View> : emptyFilter}
        ListFooterComponent={
          loadingMore ? (
            <View style={styles.more}>
              <ActivityIndicator size="small" color={colors.ink} />
              <Text style={styles.moreText}>Loading more</Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => <Row item={item} showSubject={!subject && multiSubject} onPress={() => open(item)} styles={styles} scale={scale} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={[styles.list, { paddingBottom: footPadding(insets.bottom, 24, 16) }]}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <HistoryHeader title={title} />
        <View style={styles.body}>
          {day && day.all.total > 0 && header}
          {content}
          {menuOpen && counts && (
            <>
              <Pressable style={styles.scrim} onPress={() => setMenuOpen(false)} accessibilityLabel="Close" />
              <View style={[styles.menu, { top: menuAt.top + verticalScale(6), left: menuAt.left }]}>
                {FILTERS.map((f) => {
                  const on = f === filter;
                  return (
                    <Pressable
                      key={f}
                      onPress={() => {
                        setMenuOpen(false);
                        if (!on) {
                          hapticSwitched();
                          setFilter(f);
                        }
                      }}
                      style={[styles.menuRow, on && styles.menuRowOn]}>
                      <ResultMark result={f === 'all' ? 'all' : f} size={scale(17)} />
                      <Text style={[styles.menuText, on && styles.menuTextOn]}>{FILTER_LABEL[f]}</Text>
                      <Text style={[styles.menuCount, on && styles.menuTextOn]}>{countFor(counts, f)}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

function Row({
  item,
  showSubject,
  onPress,
  styles,
  scale,
}: {
  item: HistoryItem;
  showSubject: boolean;
  onPress: () => void;
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
}) {
  const meta = [showSubject ? (SUBJECT_SHORT[item.subject] ?? item.subject) : null, item.chapter_name, clockTime(item.answered_at)]
    .filter(Boolean)
    .join(' · ');
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
      <View style={styles.rowMark}>
        <ResultMark result={item.result} size={scale(19)} />
      </View>
      <View style={styles.rowBody}>
        <Text style={[styles.rowText, item.removed && styles.rowTextGone]} numberOfLines={2}>
          {item.removed ? 'This question has been taken down' : latexToText(item.preview ?? '')}
        </Text>
        <Text style={styles.rowMeta} numberOfLines={1}>
          {meta}
        </Text>
      </View>
      {item.has_figure && !item.removed && (
        <View style={styles.figure}>
          <FigureIcon size={scale(18)} />
        </View>
      )}
    </Pressable>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  const gutter = scale(22);
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    body: { flex: 1 },
    fixed: { paddingHorizontal: gutter, backgroundColor: '#fff' },
    listView: { flex: 1 },
    list: { paddingHorizontal: gutter },
    stateCard: { marginTop: verticalScale(24), marginHorizontal: gutter },
    banner: { marginTop: verticalScale(4), marginBottom: verticalScale(8) },
    tabs: {
      flexDirection: 'row',
      gap: scale(20),
      borderBottomWidth: 1,
      borderBottomColor: HAIRLINE,
      marginTop: verticalScale(2),
    },
    tab: { paddingTop: verticalScale(8), paddingBottom: verticalScale(10) },
    tabText: { fontFamily: 'Onest_500Medium', fontSize: scale(14), color: colors.slate },
    tabCount: { fontFamily: 'Onest_600SemiBold', fontSize: scale(12.5), color: colors.faint },
    tabTextOn: { fontFamily: 'Onest_700Bold', color: colors.ink },
    tabLine: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 2,
      borderRadius: 2,
      backgroundColor: colors.ink,
    },
    selRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(4),
    },
    selHint: { fontFamily: 'Onest_400Regular', fontSize: scale(13), color: colors.faint },
    selButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      height: scale(32),
      paddingHorizontal: scale(12),
      borderRadius: scale(10),
      borderWidth: 1.2,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    selButtonOpen: { borderColor: colors.ink },
    selButtonText: { fontFamily: 'Onest_700Bold', fontSize: scale(13.5), color: colors.ink },
    selCount: { marginLeft: 'auto', fontFamily: 'Onest_400Regular', fontSize: scale(13), color: colors.slate },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(12),
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(15),
      borderBottomWidth: 1,
      borderBottomColor: HAIRLINE,
    },
    rowMark: { paddingTop: scale(1) },
    rowBody: { flex: 1, minWidth: 0 },
    rowText: { fontFamily: 'Onest_400Regular', fontSize: scale(14.5), lineHeight: scale(21), color: colors.ink },
    rowTextGone: { fontStyle: 'italic', color: colors.faint },
    rowMeta: { fontFamily: 'Onest_400Regular', fontSize: scale(12), color: colors.faint, marginTop: verticalScale(4) },
    figure: {
      width: scale(38),
      height: scale(38),
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: HAIRLINE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    skeleton: { paddingTop: verticalScale(18) },
    emptyLine: { marginTop: verticalScale(22) },
    more: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      paddingVertical: verticalScale(18),
    },
    moreText: { fontFamily: 'Onest_500Medium', fontSize: scale(12.5), color: colors.slate },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,25,20,.10)' },
    menu: {
      position: 'absolute',
      width: scale(200),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,25,20,.12)',
      borderRadius: scale(16),
      padding: scale(6),
      ...shadow({ color: '#1C1A16', opacity: 0.22, radius: scale(20), y: verticalScale(12), elevation: 8 }),
    },
    menuRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(12),
      borderRadius: scale(11),
    },
    menuRowOn: { borderWidth: 1.2, borderColor: 'rgba(28,26,22,.14)' },
    menuText: { flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: scale(15), color: colors.ink },
    menuTextOn: { fontFamily: 'Onest_700Bold', color: colors.ink },
    menuCount: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.faint },
  });
}
