import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PageSkeleton, StateCard } from '@/components/states';
import { ReviseHeader } from '@/components/revise/revise-header';
import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { hapticSoft, hapticTicked } from '@/lib/haptics';
import { KEY_POINTS as P11_01, KeyPoint, KeyPointKind, MEMORY_LINES as M11_01 } from '@/lib/revise/keypoints-physics-11-01';
import { chapterKey, useRouteChapter } from '@/lib/revise/use-chapter';

/**
 * KEY POINTS, always in test mode.
 *
 * There is no switch: every answer starts behind "Tap to check". Points sit in
 * sections by kind, each heading pinned while you are in it, with how many it
 * holds; memory lines close the list, read rather than tested. Checked, a
 * point shows its answer beside a thin marigold line, then "I knew it" and
 * "I didn't": the first earns a word of praise, the second a plain "Okay."
 * Nothing is saved and nothing is scored. Leave and come back, and every
 * answer is hidden again.
 */
const CONTENT: Record<string, { points: KeyPoint[]; memory: string[] }> = { 'physics|11|1': { points: P11_01, memory: M11_01 } };
const SECTIONS: { kind: KeyPointKind; title: string }[] = [
  { kind: 'remember', title: 'Remember' },
  { kind: 'mixup', title: 'Don’t mix up' },
  { kind: 'mistake', title: 'Common mistakes' },
  { kind: 'shortcut', title: 'Exam shortcuts' },
];
/** How a teacher says well done, varied so it never reads as a stamp. */
const PRAISE = ['Very good.', 'That’s right.', 'Well done!', 'Excellent.', 'Good, you know this.'];

type Row = { type: 'point'; i: number; p: KeyPoint } | { type: 'memory'; line: string };

function TickIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 12.5l4.5 4.5L19 7.5" stroke={colors.marigold} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function Btn({ label, tone, onPress }: { label: string; tone: 'action' | 'answer'; onPress: () => void }) {
  const { scale } = useScale();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [s.btn, { minHeight: scale(34), paddingVertical: scale(7), paddingHorizontal: scale(12), borderRadius: scale(10) }, pressed && s.btnPressed]}>
      <Text style={[s.btnText, { fontSize: scale(13) }, tone === 'action' && s.btnAction]}>{label}</Text>
    </Pressable>
  );
}

export default function TextbookKeyPointsScreen() {
  const { chapter, missing } = useRouteChapter();
  const { scale } = useScale();
  const content = chapter ? CONTENT[chapterKey(chapter)] : undefined;
  const [open, setOpen] = useState<Set<number>>(new Set());
  const [verdict, setVerdict] = useState<Record<number, 'knew' | 'didnt'>>({});

  const sections = useMemo(() => {
    if (!content) return [];
    const out: { title: string; red: boolean; data: Row[] }[] = SECTIONS.map(({ kind, title }) => ({
      title,
      red: kind === 'mistake',
      data: content.points.map((p, i) => ({ type: 'point' as const, i, p })).filter((r) => r.p.kind === kind),
    })).filter((sct) => sct.data.length);
    if (content.memory.length) out.push({ title: 'Memory lines', red: false, data: content.memory.map((line) => ({ type: 'memory' as const, line })) });
    return out;
  }, [content]);

  const text = (size: number, line: number, color: string, family: string = STIX.regular) => ({ fontFamily: family, fontSize: scale(size), lineHeight: scale(line), color });

  const renderItem = ({ item }: { item: Row }) => {
    if (item.type === 'memory')
      return (
        <View style={[s.item, { paddingVertical: scale(13) }]}>
          <Markup html={`“${item.line}”`} size={scale(16)} look="stix" style={text(16, 23, '#4A463D')} />
        </View>
      );
    const { i, p } = item, isOpen = open.has(i), v = verdict[i];
    return (
      <View style={[s.item, { paddingVertical: scale(16) }]}>
        <Markup html={p.q} size={scale(16)} look="stix" style={text(16, 23, colors.ink)} />
        {!isOpen ? (
          <View style={{ marginTop: scale(10), alignSelf: 'flex-start' }}>
            <Btn label="Tap to check" tone="action" onPress={() => { hapticSoft(); setOpen((o) => new Set(o).add(i)); }} />
          </View>
        ) : (
          <Animated.View entering={FadeIn.duration(260)}>
            <View style={[s.answer, { marginTop: scale(10), paddingLeft: scale(12) }]}>
              <Markup html={p.a} size={scale(16)} look="stix" style={text(16, 23, colors.ink, STIX.semibold)} />
              {!!p.why && <Markup html={p.why} size={scale(16)} look="stix" style={[text(16, 23, colors.slate), { marginTop: scale(4) }]} />}
            </View>
            {!v ? (
              <View style={[s.rate, { marginTop: scale(12), gap: scale(8) }]}>
                <Btn label="I knew it" tone="answer" onPress={() => { hapticTicked(); setVerdict((x) => ({ ...x, [i]: 'knew' })); }} />
                <Btn label="I didn't" tone="answer" onPress={() => { hapticSoft(); setVerdict((x) => ({ ...x, [i]: 'didnt' })); }} />
              </View>
            ) : (
              <Animated.View entering={FadeIn.duration(220)} style={[s.said, { marginTop: scale(12), minHeight: scale(34), gap: scale(6) }]}>
                {v === 'knew' && <TickIcon size={scale(14)} />}
                <Text style={[s.saidText, { fontSize: scale(13) }]}>{v === 'knew' ? PRAISE[i % PRAISE.length] : 'Okay.'}</Text>
              </Animated.View>
            )}
          </Animated.View>
        )}
      </View>
    );
  };

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} style={s.safe}>
        <ReviseHeader title="Key points" rule />
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
          <SectionList
            sections={sections}
            keyExtractor={(r, k) => (r.type === 'point' ? `p${r.i}` : `m${k}`)}
            stickySectionHeadersEnabled
            contentContainerStyle={{ paddingHorizontal: scale(20), paddingBottom: scale(40) }}
            ListHeaderComponent={<Markup html="Answer in your head, then check." size={scale(16)} look="stix" style={[text(16, 23, colors.slate), { marginTop: scale(16), marginBottom: scale(4) }]} />}
            renderSectionHeader={({ section }) => (
              <View style={[s.head, { marginHorizontal: scale(-20), paddingHorizontal: scale(20), paddingTop: scale(14), paddingBottom: scale(8) }]}>
                <Text style={[s.headText, { fontSize: scale(12) }, section.red && s.red]}>{section.title}</Text>
                <Text style={[s.headCount, { fontSize: scale(12) }]}>{section.data.length}</Text>
              </View>
            )}
            renderItem={renderItem}
          />
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
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', backgroundColor: 'rgba(255,255,255,0.97)', borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
  headText: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
  headCount: { fontFamily: 'Onest_600SemiBold', color: colors.quiet, fontVariant: ['tabular-nums'] },
  red: { color: colors.red },
  item: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
  /* The first build's "Tap to check" shape, on white with a fine border. */
  btn: { alignSelf: 'flex-start', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(28,26,22,.16)' },
  btnPressed: { transform: [{ scale: 0.96 }], backgroundColor: '#F7F5F0' },
  btnText: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
  btnAction: { color: colors.amberText },
  answer: { borderLeftWidth: 2, borderLeftColor: colors.marigold },
  rate: { flexDirection: 'row' },
  said: { flexDirection: 'row', alignItems: 'center' },
  saidText: { fontFamily: 'Onest_600SemiBold', color: colors.slate },
});
