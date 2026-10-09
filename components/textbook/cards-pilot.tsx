import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { QUESTION_READ_LINE, QUESTION_READ_SIZE, READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import type { BlockCtx } from '@/components/textbook/blocks';
import { Carousel, CarouselCard } from '@/components/textbook/carousel';
import { Markup } from '@/components/textbook/markup';
import { BORDER, CARD_BORDER, kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import type { RenderBlock } from '@/lib/textbooks';
import { hapticSoft, hapticSuccess, hapticSwitched } from '@/lib/haptics';

/**
 * THE QUESTION CARDS, for the reader pilot (see pilot.ts): solved examples,
 * MCQs and practice. Some 2,800 cards across the chapters, 4 or 5 of each in
 * every topic.
 *
 * Inside, every card follows the formula card's rules: one left edge, the
 * question at Practice's question size (16/26), steps and answers in the
 * page's reading text, answers in an outline rather than a fill, and the
 * exam a question comes from as a small tag. Practice questions carry theirs
 * in the text ("[CBSE] Express…", 1,389 of 1,535), so it is lifted out of the
 * question and drawn as the tag. Nothing in the content changes.
 *
 * ONE CARD AT A TIME, AT THE COLUMN'S FULL WIDTH, the same width as the
 * formula and figure cards, so every card on the page lines up. "‹ 1/4 ›" is
 * in the card's header. A swipe moves the cards under the finger, the next
 * one sliding in from the edge, and the arrows slide them the same way. The
 * row takes the height of the card you are on.
 *
 * Chosen over a peeking rail of narrower cards and a list with one question
 * open; the first version of this card turned on a flick and did not follow
 * the finger, which is what made the rail feel better to swipe.
 */
type ExItem = Extract<RenderBlock, { t: 'exGroup' }>['items'][number];
type McqItem = Extract<RenderBlock, { t: 'mcqGroup' }>['items'][number];
type PracticeItem = Extract<RenderBlock, { t: 'practice' }>['items'][number];
type CardBlock = Extract<RenderBlock, { t: 'exGroup' | 'mcqGroup' | 'practice' }>;

/** "[JEE Main 2020] A ball is…" → ["JEE Main 2020", "A ball is…"]. */
function liftExamTag(html: string): [string | null, string] {
  const m = html.match(/^\s*\[([^\]]{1,40})\]\s*/);
  return m ? [m[1], html.slice(m[0].length)] : [null, html];
}

const NAMES = { exGroup: 'solved example', mcqGroup: 'crack the MCQ', practice: 'practice' } as const;

export function PilotCards({ block, ctx }: { block: CardBlock; ctx: BlockCtx }) {
  const { scale, type } = ctx;
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>, key?: number) => (
    <Markup key={key} html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const items: (ExItem | McqItem | PracticeItem)[] = block.items;
  const count = items.length;
  const page = Math.min(ctx.state.page[ctx.uid] ?? 0, count - 1);
  const setPage = (i: number) => ctx.set('page', ctx.uid, i);
  /** An arrow, or a swipe landing on another card: one tick per card turned. */
  const turnTo = (i: number) => {
    if (i !== page) hapticSwitched();
    setPage(i);
  };
  const name = NAMES[block.t];

  const tagOf = (i: number): string | null => {
    if (block.t === 'exGroup') return block.items[i].tag || null;
    if (block.t === 'practice') return liftExamTag(block.items[i].q)[0];
    return null;
  };
  const questionOf = (i: number): string => {
    if (block.t === 'practice') return liftExamTag(block.items[i].q)[1];
    return (block.items[i] as ExItem | McqItem).q;
  };

  /** Everything under a card's header: the question and what follows it. */
  const body = (i: number) => {
    const question = (
      <Markup html={questionOf(i)} size={type(QUESTION_READ_SIZE)} style={s.question} look="pilot" />
    );
    if (block.t === 'exGroup') {
      const ex = block.items[i];
      return (
        <>
          {question}
          <View style={s.steps}>
            {ex.steps.map((step, j) => (
              <View key={j} style={s.stepRow}>
                <Text style={s.num}>{j + 1}</Text>
                {read(step, s.grow)}
              </View>
            ))}
          </View>
          <View style={s.answer}>
            <Text style={[kicker(type), s.answerLabel]}>answer</Text>
            {read(ex.ans, s.answerText)}
          </View>
        </>
      );
    }
    if (block.t === 'mcqGroup') {
      const q = block.items[i];
      const key = `${ctx.uid}_${i}`;
      const state = ctx.state.mcq[key] ?? { pick: null, solved: false };
      const nudge = !state.solved && state.pick !== null ? q.opts[state.pick]?.nudge : null;
      return (
        <>
          {question}
          <View style={s.opts}>
            {q.opts.map((opt, oi) => {
              const right = oi === q.correct && state.solved;
              const wrong = state.pick === oi && oi !== q.correct;
              return (
                <Pressable
                  key={oi}
                  disabled={state.solved}
                  onPress={() => {
                    // The verdict, felt, as on Practice: right is the success
                    // tap, wrong the soft one.
                    if (oi === q.correct) hapticSuccess();
                    else hapticSoft();
                    ctx.set('mcq', key, { pick: oi, solved: oi === q.correct });
                  }}
                  style={({ pressed }) => [
                    s.opt,
                    right && s.optRight,
                    wrong && s.optWrong,
                    pressed && !state.solved && s.pressed,
                  ]}>
                  <Text style={s.optLetter}>{'ABCD'[oi]}</Text>
                  <Markup html={opt.label} size={type(READ_SIZE)} style={[s.optLabel, s.grow]} look="pilot" />
                  {(right || wrong) && (
                    <Text style={[s.optMark, { color: right ? colors.ink : colors.red }]}>{right ? '✓' : '✗'}</Text>
                  )}
                </Pressable>
              );
            })}
          </View>
          {!!nudge && (
            <View style={s.answer}>
              <Text style={[kicker(type), s.answerLabel]}>not quite. here&apos;s the trap</Text>
              {read(nudge)}
            </View>
          )}
          {state.solved && (
            <View style={s.answer}>
              <Text style={[kicker(type), s.answerLabel]}>solved</Text>
              {read(q.solution)}
            </View>
          )}
        </>
      );
    }
    const item = block.items[i];
    const key = `${ctx.uid}_${i}`;
    const shown = !!ctx.state.practice[key];
    return (
      <>
        {question}
        {shown ? (
          <View style={s.answer}>
            <Text style={[kicker(type), s.answerLabel]}>answer</Text>
            {read(item.a)}
          </View>
        ) : (
          <Pressable
            onPress={() => {
              hapticSwitched();
              ctx.set('practice', key, true);
            }}
            style={({ pressed }) => [s.button, pressed && s.pressed]}>
            <Text style={s.buttonText}>Check answer</Text>
          </Pressable>
        )}
      </>
    );
  };

  return (
    <Carousel count={count} page={page} onPage={turnTo} scale={scale} fit full dots={false}>
      {(offset, step, report, cardWidth) =>
        items.map((_, i) => {
          const tag = tagOf(i);
          return (
            <CarouselCard
              key={i}
              index={i}
              offset={offset}
              step={step}
              scale={scale}
              report={report}
              width={cardWidth}>
              <View style={s.card}>
                <View style={s.head}>
                  <Text style={[kicker(type), s.grow]}>{name}</Text>
                  <View style={s.stepper}>
                    <Pressable
                      disabled={i === 0}
                      onPress={() => turnTo(i - 1)}
                      hitSlop={6}
                      accessibilityLabel="Previous"
                      style={({ pressed }) => [s.arrow, pressed && s.pressed]}>
                      <Text style={[s.arrowText, i === 0 && s.arrowOff]}>‹</Text>
                    </Pressable>
                    <Text style={s.count}>
                      {i + 1}
                      <Text style={s.countTotal}>/{count}</Text>
                    </Text>
                    <Pressable
                      disabled={i === count - 1}
                      onPress={() => turnTo(i + 1)}
                      hitSlop={6}
                      accessibilityLabel="Next"
                      style={({ pressed }) => [s.arrow, pressed && s.pressed]}>
                      <Text style={[s.arrowText, i === count - 1 && s.arrowOff]}>›</Text>
                    </Pressable>
                  </View>
                </View>
                {!!tag && <Text style={s.tag}>{labelCase(tag)}</Text>}
                {body(i)}
              </View>
            </CarouselCard>
          );
        })
      }
    </Carousel>
  );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  const read: TextStyle = {
    fontFamily: 'Onest_400Regular',
    fontSize: type(READ_SIZE),
    lineHeight: type(READ_LINE),
    color: READ_INK,
  };
  return StyleSheet.create({
    read,
    grow: { flex: 1 },
    shrink: { flexShrink: 1 },
    pressed: { opacity: 0.5 },
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(16),
    },
    /** The exam a question is from: a small outlined tag, the only thing on the card in a box. */
    tag: {
      alignSelf: 'flex-start',
      marginTop: scale(8),
      fontFamily: 'Onest_600SemiBold',
      fontSize: type(11.5),
      color: colors.slate,
      borderWidth: 1,
      borderColor: CARD_BORDER,
      borderRadius: scale(6),
      paddingHorizontal: scale(6),
      paddingVertical: scale(1),
      overflow: 'hidden',
    },
    question: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(QUESTION_READ_SIZE),
      lineHeight: type(QUESTION_READ_LINE),
      color: READ_INK,
      marginTop: scale(10),
    },
    steps: { gap: scale(12), marginTop: scale(14) },
    stepRow: { flexDirection: 'row', gap: scale(10) },
    num: {
      width: scale(16),
      fontFamily: 'Onest_600SemiBold',
      fontSize: type(13),
      lineHeight: type(READ_LINE),
      color: colors.faint,
    },
    answer: {
      marginTop: scale(16),
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(10),
      paddingVertical: scale(10),
      paddingHorizontal: scale(14),
    },
    answerLabel: { marginBottom: scale(2) },
    answerText: { fontFamily: 'Onest_600SemiBold' },
    opts: { gap: scale(8), marginTop: scale(14) },
    opt: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      minHeight: scale(48),
      paddingVertical: scale(10),
      paddingHorizontal: scale(14),
      borderRadius: scale(12),
      borderWidth: 1,
      borderColor: CARD_BORDER,
      backgroundColor: colors.readingCard,
    },
    optRight: { borderColor: colors.ink, borderWidth: 1.5 },
    optWrong: { borderColor: 'rgba(221,68,51,.5)' },
    optLetter: { fontFamily: 'Onest_600SemiBold', fontSize: type(13), color: colors.faint },
    optLabel: { ...read, fontFamily: 'Onest_500Medium' },
    optMark: { fontFamily: 'Onest_700Bold', fontSize: type(14) },
    button: {
      marginTop: scale(16),
      height: scale(48),
      borderRadius: scale(15),
      borderWidth: 1.5,
      borderColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: { fontFamily: 'Onest_600SemiBold', fontSize: type(15), color: colors.ink },
    head: { flexDirection: 'row', alignItems: 'center', gap: scale(10) },
    stepper: { flexDirection: 'row', alignItems: 'center', gap: scale(2) },
    arrow: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(10),
      borderWidth: 1,
      borderColor: CARD_BORDER,
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrowText: { fontFamily: 'Onest_500Medium', fontSize: type(20), lineHeight: type(22), color: colors.ink, marginTop: -scale(2) },
    arrowOff: { color: colors.quiet },
    count: { minWidth: scale(36), textAlign: 'center', fontFamily: 'Onest_600SemiBold', fontSize: type(13), color: colors.ink },
    countTotal: { color: colors.faint },
  });
}
