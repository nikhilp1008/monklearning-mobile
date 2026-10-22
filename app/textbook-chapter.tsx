import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PageSkeleton, StateCard } from '@/components/states';
import { DiagramsIcon, FormulaSheetIcon, KeyPointsIcon } from '@/components/revise/revise-icons';
import { ReviseHeader } from '@/components/revise/revise-header';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { buildParts, readProgress } from '@/lib/chapter-essentials';
import { DIAGRAMS } from '@/lib/diagrams';
import { buildFormulaCards } from '@/lib/revise/formula-cards';
import { KEY_POINTS } from '@/lib/revise/keypoints';
import { chapterKey, useRouteChapter } from '@/lib/revise/use-chapter';
import { topicMark, topicName } from '@/lib/textbooks';

/**
 * A CHAPTER'S HOME: what to revise from, then the topics to read.
 *
 * Students do not want to read the textbook first; they want the formula
 * sheet, the diagrams and the key points they would otherwise make for
 * themselves. So the chapter opens on those three rows, each with its own
 * mark in ink and one marigold dot (components/revise/revise-icons.tsx: a
 * sigma, a graph, a question card), and the topics follow,
 * numbered like the chapter list. Nothing else: no Continue, no progress bars,
 * no part counts. The header is Learn's topic sheet's: a round back button and
 * the chapter's name.
 *
 * Only the chapters lib/chapter-essentials.ts names open here for now.
 */

function Chevron({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M6 3l5 5-5 5" stroke={colors.faint} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default function TextbookChapterScreen() {
  const { chapter, missing, route, title } = useRouteChapter();
  const { scale } = useScale();
  const parts = useMemo(() => (chapter ? buildParts(chapter) : []), [chapter]);
  const key = chapter ? chapterKey(chapter) : '';
  const formulas = useMemo(() => (chapter ? buildFormulaCards(chapter).length : 0), [chapter]);
  const diagrams = DIAGRAMS[key]?.length ?? 0;
  const points = KEY_POINTS[key]?.length ?? 0;

  /** A topic opens on the first part of it not yet read, or its first part. */
  const openTopic = async (ti: number) => {
    if (!chapter) return;
    const progress = await readProgress(chapter);
    const own = parts.filter((p) => p.topic === ti);
    const first = own.find((p) => !progress.done.includes(p.index)) ?? own[0];
    if (first) router.push({ pathname: '/textbook-part', params: { ...route, part: String(first.index) } });
  };

  const row = (label: string, sub: string, pathname: '/textbook-formulas' | '/textbook-diagrams' | '/textbook-keypoints', Icon: typeof FormulaSheetIcon) => (
    <Pressable
      key={pathname}
      onPress={() => router.push({ pathname, params: route })}
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${sub}`}
      style={({ pressed }) => [s.row, { paddingVertical: scale(13), gap: scale(14) }, pressed && s.pressed]}>
      <View style={[s.mark, { width: scale(28) }]}>
        <Icon size={scale(24)} />
      </View>
      <View style={s.grow}>
        <Text style={[s.rowTitle, s.reviseTitle, { fontSize: scale(15), lineHeight: scale(21) }]}>{label}</Text>
        <Text style={[s.rowSub, { fontSize: scale(13), lineHeight: scale(18) }]}>{sub}</Text>
      </View>
      <Chevron size={scale(13)} />
    </Pressable>
  );

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} style={s.safe}>
        <ReviseHeader title={title || chapter?.title || ''} />
        {missing ? (
          <View style={[{ paddingHorizontal: 24, paddingTop: 32 }]}>
            <StateCard
              glyph="book"
              title="This chapter didn't open"
              line="Go back and open it again."
              action={{ label: 'Go back', onPress: () => router.back() }}
            />
          </View>
        ) : !chapter ? (
          <View style={s.loading}>
            <PageSkeleton />
          </View>
        ) : (
          <ScrollView contentContainerStyle={{ paddingHorizontal: scale(20), paddingBottom: scale(40) }}>
            <Text style={[s.label, { fontSize: scale(12), marginTop: scale(6) }]}>Revise</Text>
            {formulas > 0 && row('Formula sheet', `${formulas} formulas`, '/textbook-formulas', FormulaSheetIcon)}
            {diagrams > 0 && row('Diagrams', `${diagrams} diagrams`, '/textbook-diagrams', DiagramsIcon)}
            {points > 0 && row('Key points', `${points} points to test yourself on`, '/textbook-keypoints', KeyPointsIcon)}
            <Text style={[s.label, { fontSize: scale(12), marginTop: scale(26) }]}>Read the chapter</Text>
            {chapter.topics.map((t, ti) => {
              // The book's Additional Topics follow under their own heading,
              // lettered as the book letters them.
              const extra = !!t.extra;
              const firstExtra = extra && !chapter.topics[ti - 1]?.extra;
              const m = topicMark(chapter, ti);
              const mark = m.kind === 'topic' ? m.n.padStart(2, '0') : m.kind === 'extra' ? m.n : '';
              return (
                <View key={`${extra ? 'x' : 't'}${t.n}`}>
                  {firstExtra && (
                    <Text style={[s.label, { fontSize: scale(12), marginTop: scale(26) }]}>Additional topics</Text>
                  )}
                  <Pressable
                    onPress={() => void openTopic(ti)}
                    accessibilityRole="button"
                    accessibilityLabel={m.kind === 'guide' ? topicName(t) : `${m.kind === 'extra' ? 'Additional topic' : 'Topic'} ${m.n}, ${topicName(t)}`}
                    style={({ pressed }) => [s.row, { paddingVertical: scale(14), gap: scale(10) }, pressed && s.pressed]}>
                    <Text style={[s.num, { fontSize: scale(13), width: scale(24) }]}>{mark}</Text>
                    <Text style={[s.rowTitle, s.grow, { fontSize: scale(15), lineHeight: scale(22) }]}>{topicName(t)}</Text>
                    <Chevron size={scale(13)} />
                  </Pressable>
                </View>
              );
            })}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  safe: { flex: 1 },
  loading: { marginTop: 40 },
  state: { padding: 24, fontFamily: 'Onest_400Regular', fontSize: 15, lineHeight: 24, color: colors.slate },
  label: { fontFamily: 'Onest_600SemiBold', color: colors.faint, marginBottom: 2 },
  row: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
  pressed: { opacity: 0.5 },
  grow: { flex: 1, minWidth: 0 },
  rowTitle: { fontFamily: 'Onest_500Medium', color: colors.ink },
  reviseTitle: { fontFamily: 'Onest_600SemiBold' },
  rowSub: { fontFamily: 'Onest_400Regular', color: colors.slate, marginTop: 1 },
  mark: { alignItems: 'center' },
  num: { fontFamily: 'Onest_500Medium', color: colors.quiet, fontVariant: ['tabular-nums'] },
});
