import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PageSkeleton, StateCard } from '@/components/states';
import { DiagramCard, DiagramImage } from '@/components/revise/diagram-card';
import { ReviseDock } from '@/components/revise/dock';
import { PageTurn, PageTurnHandle } from '@/components/revise/page-turn';
import { ReviseHeader } from '@/components/revise/revise-header';
import { STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DIAGRAMS } from '@/lib/diagrams';
import { chapterKey, useRouteChapter } from '@/lib/revise/use-chapter';

/**
 * DIAGRAMS: a gallery, then one at a time.
 *
 * Opens on every diagram as a small picture, two to a row in chapter order,
 * each with its name and its topic in grey; students find a drawing by its
 * shape. Tap one and it opens full size, with its cases and caption, on the
 * formula sheet's turning pages; back returns to the gallery.
 */
export default function TextbookDiagramsScreen() {
  const { chapter, missing } = useRouteChapter();
  const { scale } = useScale();
  const list = useMemo(() => (chapter ? DIAGRAMS[chapterKey(chapter)] ?? [] : []), [chapter]);
  const [open, setOpen] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const pager = useRef<PageTurnHandle>(null);

  if (open !== null)
    return (
      <View style={s.screen}>
        <StatusBar style="dark" />
        <SafeAreaView edges={['top']} style={s.safe}>
          <ReviseHeader title="Diagrams" count={`${index + 1} of ${list.length}`} onBack={() => setOpen(null)} />
          <Animated.View entering={FadeIn.duration(220)} style={s.safe}>
            <PageTurn ref={pager} count={list.length} initial={open} onIndex={setIndex} renderPage={(i) => <DiagramCard d={list[i]} />} />
          </Animated.View>
          <ReviseDock index={index} count={list.length} onPrev={() => pager.current?.goTo(index - 1)} onNext={() => pager.current?.goTo(index + 1)} />
        </SafeAreaView>
      </View>
    );

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} style={s.safe}>
        <ReviseHeader title="Diagrams" rule />
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
          <FlatList
            data={list}
            keyExtractor={(d) => d.id}
            numColumns={2}
            // A few at a time: drawing a whole chapter's gallery in one go froze Android.
            initialNumToRender={4}
            maxToRenderPerBatch={2}
            windowSize={5}
            removeClippedSubviews
            columnWrapperStyle={{ gap: scale(12) }}
            contentContainerStyle={{ padding: scale(20), paddingTop: scale(14), gap: scale(18) }}
            renderItem={({ item, index: i }) => (
              <Pressable
                onPress={() => { setIndex(i); setOpen(i); }}
                accessibilityRole="button"
                accessibilityLabel={item.name}
                style={({ pressed }) => [s.tile, { gap: scale(8) }, pressed && s.pressed]}>
                <View style={[s.frame, { borderRadius: scale(14), padding: scale(10) }]}>
                  <DiagramImage d={item} square thumb />
                </View>
                <Text style={{ fontFamily: STIX.semibold, fontSize: scale(16), lineHeight: scale(22), color: colors.ink }} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(12), color: colors.faint, marginTop: scale(-4) }} numberOfLines={1}>
                  {chapter.topics[item.topic].extra ? `Additional ${chapter.topics[item.topic].n}` : `Topic ${item.topic + 1}`} · {chapter.topics[item.topic].title.split(',')[0]}
                </Text>
              </Pressable>
            )}
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
  tile: { flex: 1 },
  pressed: { opacity: 0.6 },
  frame: { aspectRatio: 1, borderWidth: 1, borderColor: 'rgba(28,26,22,.14)', backgroundColor: '#FFFFFF', justifyContent: 'center', overflow: 'hidden' },
});
