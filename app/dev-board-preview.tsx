import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BoardBlockView } from '@/components/board-text';
import {
  INK,
  INK_FAINT,
  RHYTHM,
  RuledGround,
} from '@/components/classroom-chrome';
import { usePortraitLock } from '@/hooks/use-landscape-lock';
import type { BoardEvent } from '@/lib/drona-voice-client';

/**
 * THE BOARD'S TYPOGRAPHY, WITHOUT NEEDING A CLASS.
 *
 * Judging the board used to mean getting a live class running — a session, a
 * socket, a teacher, and an API that is currently returning 500 on
 * `/drona/session/start`. Tuning type through that is how the -0.4deg tilt
 * survived the removal of the handwriting font it was imitating, and how
 * `emphasis` stayed truthy for two fonts' worth of releases.
 *
 * This draws real board events through `BoardBlockView` — the exact component
 * the classroom uses, on the same ruled ground, at the same line measure. There
 * is no second copy of the styles, so anything changed here is changed in the
 * class by construction.
 *
 * WHAT IS FAITHFUL AND WHAT IS NOT.
 *   Faithful: every word below is real, lifted from
 *   `content/textbooks/phy-12-03-current-electricity.ts`, topic 04 "Real
 *   Cells". The ruled ground, the 26pt rhythm, the left and right gutters and
 *   all five text styles are the classroom's own.
 *   Not: the split into events is mine. A real class is segmented by the
 *   planner, one idea per event per `prompts/planner_segment.md`, and I have
 *   followed that rule by hand. Line lengths in a real class will be close but
 *   not identical.
 *
 * Reached by deep link, not by any tab: `monklearningapp://dev-board-preview`.
 */

/**
 * Real content, segmented the way the planner segments: a heading, then one
 * idea per event. `emphasis` is `key` only where the source itself is making
 * the load-bearing point — which is the whole distinction the boolean bug had
 * flattened.
 */
const BOARD: BoardEvent[] = [
  { seq: 1, type: 'heading', text: 'Real Cells: EMF and Internal Resistance', emphasis: 'normal' },
  {
    seq: 2,
    type: 'text',
    text: 'A cell is a charge pump. Chemical reactions inside it do work to lift positive charge from the low-potential terminal to the high-potential terminal, against the electric field, exactly as a water pump lifts water uphill.',
    emphasis: 'normal',
  },
  {
    seq: 3,
    type: 'text',
    text: 'The electromotive force, written E, is the energy this pump gives to each coulomb of charge.',
    emphasis: 'key',
  },
  { seq: 4, type: 'formula', latex: 'E = W/q', emphasis: 'key' },
  {
    seq: 5,
    type: 'text',
    text: 'Despite the name it is not a force: its unit is the volt, energy per charge, and no amount of algebra can turn joules per coulomb into newtons.',
    emphasis: 'normal',
  },
  {
    seq: 6,
    type: 'text',
    text: 'But no real pump is perfect. The chemicals and electrodes inside the cell themselves resist the flow of charge, and that is the internal resistance r.',
    emphasis: 'normal',
  },
  {
    seq: 7,
    type: 'text',
    text: 'Sitting idle on open circuit, with no current, the cell shows its full EMF across its terminals.',
    emphasis: 'normal',
  },
  {
    seq: 8,
    type: 'text',
    text: "The instant you connect a load and a current I flows, some of the cell's push is spent overcoming its own internal resistance, dropping Ir volts inside the cell.",
    emphasis: 'normal',
  },
  {
    seq: 9,
    type: 'text',
    text: 'What is left for the outside world, the terminal voltage V, is therefore less than the EMF.',
    emphasis: 'key',
  },
  {
    seq: 10,
    type: 'formula',
    latex: 'V = E - Ir \\ \\text{(discharging)}',
    emphasis: 'key',
  },
  {
    seq: 11,
    type: 'note',
    text: 'Calling EMF a force is a standing definition-mark loss in board exams.',
    emphasis: 'high',
  },
  { seq: 12, type: 'heading', text: 'Combining Cells', emphasis: 'normal' },
  {
    seq: 13,
    type: 'text',
    text: 'Cells in series are stacked head to tail, like several people lifting a load to successive shelves: each adds its lift, so the EMFs add. But each cell also brings its own internal resistance into the line, so those add too.',
    emphasis: 'normal',
  },
  {
    seq: 14,
    type: 'text',
    text: 'Series grouping is what you want when the external resistance is large, because then you need a big push and the modest extra internal resistance hardly matters.',
    emphasis: 'key',
  },
  {
    seq: 15,
    type: 'text',
    text: 'Cells in parallel are placed side by side, all positives joined and all negatives joined. The voltage stays at one cell’s worth, and it is a hard rule that EMFs do not add in parallel.',
    emphasis: 'normal',
  },
  { seq: 16, type: 'formula', latex: 'I = E/(R + r)', emphasis: 'key' },
  {
    seq: 17,
    type: 'note',
    text: 'Two car batteries in parallel crank a heavy engine; two in series would just be 24 V.',
    emphasis: 'high',
  },
];

/** The portrait classroom's own gutters, so the line measure matches exactly.
 *  28 both sides, from `Board 1c`'s own content box — not the 40 the earlier
 *  handoff used to clear a red margin rule that no longer exists. */
const LEFT = 28;
const RIGHT = 28;

export default function DevBoardPreviewScreen() {
  const oriented = usePortraitLock();
  if (!oriented) return <View style={styles.hold} />;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.boardArea}>
        <RuledGround height={2400} />
        <ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          {BOARD.map((event) => (
            <BoardBlockView
              key={event.seq}
              event={event}
              // No figures here: they size themselves and snap to no grid,
              // which is a separate job from the writing.
              diagramBox={{ availableWidth: 0, maxHeight: 0 }}
            />
          ))}
        </ScrollView>
      </View>

      <SafeAreaView edges={['top']} style={styles.barWrap}>
        <View style={styles.bar}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Text style={styles.back}>Back</Text>
          </Pressable>
          <Text style={styles.label}>Board type · phy-12-03 · topic 04</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  hold: { flex: 1, backgroundColor: '#fff' },
  screen: { flex: 1, backgroundColor: '#fff' },
  boardArea: { flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#fff' },
  content: {
    // Two rules of clearance for the bar, and the classroom's own gutters so
    // every line wraps where a class would wrap it.
    paddingTop: RHYTHM * 3,
    paddingBottom: RHYTHM * 3,
    paddingLeft: LEFT,
    paddingRight: RIGHT,
  },
  barWrap: { position: 'absolute', left: 0, right: 0, top: 0 },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,.94)',
  },
  back: { fontFamily: 'Onest_700Bold', fontSize: 13, color: INK },
  label: { fontFamily: 'Onest_400Regular', fontSize: 11, color: INK_FAINT },
});
