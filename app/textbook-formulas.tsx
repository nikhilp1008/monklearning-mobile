import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PageSkeleton, StateCard } from '@/components/states';
import { IndexSheet, ReviseDock } from '@/components/revise/dock';
import { FormulaCard } from '@/components/revise/formula-card';
import { PageTurn, PageTurnHandle } from '@/components/revise/page-turn';
import { ReviseHeader } from '@/components/revise/revise-header';
import { colors } from '@/constants/brand';
import { buildFormulaCards } from '@/lib/revise/formula-cards';
import { useRouteChapter } from '@/lib/revise/use-chapter';
import { topicMark } from '@/lib/textbooks';

/**
 * THE FORMULA SHEET: one card at a time, turning like pages.
 * "All formulas" opens the index, grouped by topic, to jump straight to one.
 */
export default function TextbookFormulasScreen() {
  const { chapter, missing } = useRouteChapter();
  const cards = useMemo(() => (chapter ? buildFormulaCards(chapter) : []), [chapter]);
  const [index, setIndex] = useState(0);
  const [sheet, setSheet] = useState(false);
  const pager = useRef<PageTurnHandle>(null);

  const groups = useMemo(
    () =>
      chapter
        ? chapter.topics
            .map((t, ti) => ({ heading: `${topicMark(chapter, ti).label} · ${t.title.split(',')[0]}`, rows: cards.map((c, k) => ({ c, k })).filter(({ c }) => c.topic === ti).map(({ c, k }) => ({ key: k, html: c.name })) }))
            .filter((g) => g.rows.length)
        : [],
    [chapter, cards]
  );

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} style={s.safe}>
        <ReviseHeader title="Formula sheet" count={cards.length ? `${index + 1} of ${cards.length}` : undefined} />
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
          <>
            <PageTurn ref={pager} count={cards.length} onIndex={setIndex} renderPage={(i) => <FormulaCard card={cards[i]} />} />
            <ReviseDock index={index} count={cards.length} onPrev={() => pager.current?.goTo(index - 1)} onNext={() => pager.current?.goTo(index + 1)} indexLabel="All formulas" onIndex={() => setSheet(true)} />
          </>
        )}
      </SafeAreaView>
      <IndexSheet
        open={sheet}
        title="All formulas"
        groups={groups}
        current={index}
        onClose={() => setSheet(false)}
        onPick={(k) => {
          setSheet(false);
          pager.current?.goTo(k);
        }}
      />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  safe: { flex: 1 },
  loading: { marginTop: 40 },
  state: { padding: 24, fontFamily: 'Onest_400Regular', fontSize: 15, lineHeight: 24, color: colors.slate },
});
