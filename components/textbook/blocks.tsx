import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { Carousel, CarouselCard } from '@/components/textbook/carousel';
import { TextbookDiagram } from '@/components/textbook/diagrams';
import { Markup } from '@/components/textbook/markup';
import {

  BORDER_SOFT,
  BORDER_STRONG,
  CARD_BORDER,
  DASH,
  kicker,
  makeBlockStyles,
  mathText,
} from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import { splitProse } from '@/lib/prose-paragraphs';
import type { Block, RenderBlock } from '@/lib/textbooks';

/**
 * Every content block, rendered.
 *
 * Nothing here knows which chapter it is drawing. A block is data and this is
 * the only place that turns a `t` into pixels, which is what lets a new
 * chapter ship as one data module and no screen changes at all.
 *
 * Interaction state lives in the reader, not in these components, so it
 * survives a topic switch. See `BlockState`.
 */

export interface BlockState {
  hook: Record<string, boolean>;
  deriv: Record<string, number | null>;
  diagram: Record<string, number>;
  page: Record<string, number>;
  mcq: Record<string, { pick: number | null; solved: boolean }>;
  practice: Record<string, boolean>;
}

export const EMPTY_BLOCK_STATE: BlockState = {
  hook: {},
  deriv: {},
  diagram: {},
  page: {},
  mcq: {},
  practice: {},
};

interface Ctx {
  uid: string;
  /** Device scale. Boxes, radii, pads, icons, figure viewports. */
  scale: (n: number) => number;
  /** Device scale × the reader's chosen text size. Font sizes only. */
  type: (n: number) => number;
  state: BlockState;
  set: <K extends keyof BlockState>(key: K, id: string, value: BlockState[K][string]) => void;
  topicNumber: string;
}

function Chevron({ open, scale }: { open: boolean; scale: (n: number) => number }) {
  const style = useAnimatedStyle(() => ({
    transform: [{ rotate: withTiming(open ? '180deg' : '0deg', { duration: 200 }) }],
  }));
  return (
    <Animated.View style={style}>
      <Svg viewBox="0 0 16 16" width={scale(12)} height={scale(12)} fill="none">
        <Path
          d="M3.5 6 8 10.5 12.5 6"
          stroke={colors.faint}
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}

/**
 * A SECTION LABEL, in one place so its case rule is in one place.
 *
 * It takes a string rather than children because the rule has to run ON the
 * text — 1,515 of the authored labels are in full capitals, so a style alone
 * cannot bring them down. See `labelCase`.
 */
function Kicker({
  type,
  style,
  children,
}: {
  type: (n: number) => number;
  style?: StyleProp<TextStyle>;
  children: string;
}) {
  return <Text style={[kicker(type), style]}>{labelCase(children)}</Text>;
}

export function TextbookBlock({ block, ctx }: { block: RenderBlock; ctx: Ctx }) {
  const { scale, type } = ctx;
  const s = makeBlockStyles(scale, type);
  const st = makeStyles(scale, type);

  switch (block.t) {
    case 'hook': {
      const open = !!ctx.state.hook[ctx.uid];
      return (
        <View style={s.cardFlush}>
          <Pressable
            onPress={() => ctx.set('hook', ctx.uid, !open)}
            style={({ pressed }) => [st.hookHead, pressed && st.pressed]}>
            <Kicker type={type} style={st.grow}>Why this matters in the exam</Kicker>
            <Chevron open={open} scale={scale} />
          </Pressable>
          {open && (
            <Markup html={block.html} size={type(14.5)} style={[s.blockBody, st.hookBody]} />
          )}
        </View>
      );
    }

    case 'p': {
      /**
       * BROKEN INTO PARAGRAPHS THE AUTHOR DID NOT WRITE, at boundaries the
       * author did. The corpus's median prose block is 518 characters, which in
       * this column is thirteen lines in one run — see `splitProse` for the
       * measurements and for why this happens at render rather than in the
       * content. A block short enough to read comes back as one piece, so this
       * is a no-op on most of them.
       *
       * The gap between these is smaller than the gap between BLOCKS. They are
       * one thought the author wrote long; a block is a different thought, and
       * the page should say which is which.
       */
      const paras = splitProse(block.html);
      if (paras.length === 1) {
        return <Markup html={block.html} size={type(16.5)} style={s.body} />;
      }
      return (
        <View style={st.proseGroup}>
          {paras.map((para, i) => (
            <Markup key={i} html={para} size={type(16.5)} style={s.body} />
          ))}
        </View>
      );
    }

    case 'think':
      return (
        <View style={st.think}>
          <Markup
            html={`think about it this way… ${block.html}`}
            size={type(16)}
            style={[s.hand, st.thinkText]}
          />
        </View>
      );

    // Four blocks below carry no card any more: def, defgrid, proc and
    // mistakes are prose and lists, and boxing them turned a page of reading
    // into a stack of panels. On a warm ground every white panel is also a
    // seam, so the page looked patched the further you scrolled. A kicker and
    // a rule carry the same "this is a definition" signal at a fraction of the
    // weight. Boxes are kept only where the content is genuinely a discrete
    // object: a formula, a figure, an accordion, a swipeable card, and the
    // end-of-topic checkpoint.
    case 'def':
      return (
        <View style={st.plainBlock}>
          <Kicker type={type}>Definition</Kicker>
          <Markup html={block.term} size={type(15)} style={st.defTerm} />
          <Markup html={block.html} size={type(15)} style={[s.blockBody, st.defBody]} />
        </View>
      );

    case 'defgrid':
      return (
        <View>
          <Kicker type={type} style={st.gridTitle}>{block.title}</Kicker>
          {block.rows.map((row, i) => (
            <View key={i} style={st.gridRow}>
              <Markup html={row.k} size={type(13)} style={st.gridKey} />
              <Markup html={row.v} size={type(13.5)} style={st.gridVal} />
            </View>
          ))}
        </View>
      );

    case 'formula':
      return (
        <View style={s.card}>
          <View style={st.formulaHead}>
            <Kicker type={type} style={st.headLabel}>{block.kicker}</Kicker>
            {!!block.tag && <Kicker type={type} style={st.tag}>{block.tag}</Kicker>}
          </View>
          <Markup html={block.main} size={type(20)} style={[mathText(type, 20), st.formulaMain]} />
          <View style={st.formulaLegend}>
            {block.legend.map((line, i) => (
              <Markup key={i} html={line} size={type(13)} style={st.legendLine} />
            ))}
            {!!block.note && <Markup html={block.note} size={type(13)} style={st.formulaNote} />}
          </View>
        </View>
      );

    case 'proc':
      return (
        <View style={st.plainBlock}>
          <Kicker type={type}>{`How to · ${block.title}`}</Kicker>
          <View style={st.procList}>
            {block.steps.map((step, i) => (
              <View key={i} style={st.procRow}>
                <Text style={st.stepNum}>{i + 1}</Text>
                <Markup html={step} size={type(14.5)} style={[s.blockBody, st.grow]} />
              </View>
            ))}
          </View>
        </View>
      );

    case 'deriv': {
      const openStep = ctx.state.deriv[ctx.uid] ?? null;
      return (
        <View style={s.cardFlush}>
          <Kicker type={type} style={st.derivKicker}>{block.kicker}</Kicker>
          {block.steps.map((step, i) => {
            const open = openStep === i;
            return (
              <View key={i} style={st.derivStep}>
                <Pressable
                  onPress={() => ctx.set('deriv', ctx.uid, open ? null : i)}
                  style={({ pressed }) => [
                    st.derivHead,
                    open && st.derivHeadOpen,
                    pressed && st.pressed,
                  ]}>
                  <Text style={st.derivNum}>{i + 1}</Text>
                  <Markup
                    html={step.eq}
                    size={type(15.5)}
                    style={[mathText(type, 15.5), st.grow]}
                  />
                  <Chevron open={open} scale={scale} />
                </Pressable>
                {open && <Markup html={step.why} size={type(13.5)} style={st.derivWhy} />}
              </View>
            );
          })}
        </View>
      );
    }

    case 'diagram': {
      const selected = ctx.state.diagram[ctx.uid] ?? 0;
      return (
        <View style={s.card}>
          <Kicker type={type} style={st.diaKicker}>{block.kicker}</Kicker>
          <TextbookDiagram
            kind={block.kind}
            selected={selected}
            onSelect={(i) => ctx.set('diagram', ctx.uid, i)}
            chips={block.chips}
            captions={block.captions}
            mathChips={block.mathChips}
            frames={block.frames}
          />
        </View>
      );
    }

    case 'exGroup': {
      const page = ctx.state.page[ctx.uid] ?? 0;
      return (
        <Carousel
          count={block.items.length}
          page={page}
          onPage={(i) => ctx.set('page', ctx.uid, i)}
          scale={scale}>
          {(offset, step) =>
            block.items.map((ex, i) => (
            <CarouselCard key={i} index={i} offset={offset} step={step} scale={scale}>
              <View style={st.swipeCard}>
                <View style={st.formulaHead}>
                  <Kicker type={type} style={st.headLabel}>
                    {`Solved example · ${i + 1} of ${block.items.length}`}
                  </Kicker>
                  <Text style={[kicker(type, 9.5), st.tag]}>{ex.tag}</Text>
                </View>
                <Markup html={ex.q} size={type(15)} style={st.cardQ} />
                <View style={st.exSteps}>
                  {ex.steps.map((step, j) => (
                    <View key={j} style={st.procRow}>
                      <Text style={st.stepNum}>{j + 1}</Text>
                      <Markup html={step} size={type(13.5)} style={[st.exStep, st.grow]} />
                    </View>
                  ))}
                </View>
                <Markup html={ex.ans} size={type(14)} style={[s.tintPanel, st.exAns]} />
              </View>
            </CarouselCard>
            ))
          }
        </Carousel>
      );
    }

    case 'mcqGroup': {
      const page = ctx.state.page[ctx.uid] ?? 0;
      return (
        <Carousel
          count={block.items.length}
          page={page}
          onPage={(i) => ctx.set('page', ctx.uid, i)}
          scale={scale}>
          {(offset, step) =>
            block.items.map((q, i) => {
            const key = `${ctx.uid}_${i}`;
            const answer = ctx.state.mcq[key] ?? { pick: null, solved: false };
            const nudge =
              !answer.solved && answer.pick !== null ? q.opts[answer.pick]?.nudge : null;
            return (
              <CarouselCard key={i} index={i} offset={offset} step={step} scale={scale}>
                <View style={st.swipeCard}>
                  <Kicker type={type}>{`Crack the MCQ · Q${i + 1} of ${block.items.length}`}</Kicker>
                  <Markup html={q.q} size={type(15)} style={st.cardQ} />
                  <View style={st.opts}>
                    {q.opts.map((opt, oi) => {
                      const right = oi === q.correct && answer.solved;
                      const wrong = answer.pick === oi && oi !== q.correct;
                      return (
                        <Pressable
                          key={oi}
                          disabled={answer.solved}
                          onPress={() =>
                            ctx.set('mcq', key, { pick: oi, solved: oi === q.correct })
                          }
                          style={({ pressed }) => [
                            st.opt,
                            right && st.optRight,
                            wrong && st.optWrong,
                            pressed && !answer.solved && st.optPressed,
                          ]}>
                          <Text style={st.optTag}>{'ABCD'[oi]}</Text>
                          <Markup html={opt.label} size={type(14)} style={[st.optLabel, st.grow]} />
                          {(right || wrong) && (
                            <Text style={[st.optMark, { color: right ? colors.amberText : colors.red }]}>
                              {right ? '✓' : '✗'}
                            </Text>
                          )}
                        </Pressable>
                      );
                    })}
                  </View>
                  {!!nudge && (
                    <View style={[s.tintPanel, st.reveal]}>
                      <Text style={kicker(type, 9.5)}>Not quite. Here&apos;s the trap</Text>
                      <Markup html={nudge} size={type(13.5)} style={st.revealBody} />
                    </View>
                  )}
                  {answer.solved && (
                    <View style={[s.tintPanel, st.reveal]}>
                      <Text style={[kicker(type, 9.5), { color: colors.amberText }]}>Solved ✓</Text>
                      <Markup html={q.solution} size={type(13.5)} style={st.revealBody} />
                    </View>
                  )}
                </View>
              </CarouselCard>
            );
            })
          }
        </Carousel>
      );
    }

    case 'practice': {
      const page = ctx.state.page[ctx.uid] ?? 0;
      return (
        <Carousel
          count={block.items.length}
          page={page}
          onPage={(i) => ctx.set('page', ctx.uid, i)}
          scale={scale}>
          {(offset, step) =>
            block.items.map((item, i) => {
            const key = `${ctx.uid}_${i}`;
            const shown = !!ctx.state.practice[key];
            return (
              <CarouselCard key={i} index={i} offset={offset} step={step} scale={scale}>
                <View style={st.swipeCard}>
                  <View style={st.formulaHead}>
                    <Kicker type={type} style={st.headLabel}>
                      {`Practice · ${i + 1} of ${block.items.length}`}
                    </Kicker>
                    <Text style={[kicker(type, 9.5), st.tag]}>Try first</Text>
                  </View>
                  <Markup html={item.q} size={type(15)} style={[st.cardQ, st.practiceQ]} />
                  {shown ? (
                    <Markup html={item.a} size={type(13.5)} style={[s.tintPanel, st.exAns]} />
                  ) : (
                    <Pressable
                      onPress={() => ctx.set('practice', key, true)}
                      style={({ pressed }) => [st.checkBtn, pressed && st.checkBtnPressed]}>
                      <Text style={st.checkBtnText}>Check answer</Text>
                    </Pressable>
                  )}
                </View>
              </CarouselCard>
            );
            })
          }
        </Carousel>
      );
    }

    case 'mistakes':
      return (
        <View style={st.plainBlock}>
          <Kicker type={type}>Watch out</Kicker>
          <View style={st.procList}>
            {block.items.map((item, i) => (
              <View key={i} style={st.procRow}>
                <Text style={st.cross}>✗</Text>
                <Markup html={item} size={type(14)} style={[st.mistakeText, st.grow]} />
              </View>
            ))}
          </View>
        </View>
      );

    case 'protip':
      return (
        <View style={st.protip}>
          <Kicker type={type}>Pro-tip</Kicker>
          <Markup html={block.html} size={type(15.5)} style={[s.hand, st.protipText]} />
        </View>
      );

    case 'snapshot':
      return (
        <View style={st.snapshot}>
          <View style={st.snapHead}>
            <Kicker type={type} style={st.snapKicker}>
              {`Checkpoint · Topic ${ctx.topicNumber} snapshot`}
            </Kicker>
            <Text style={st.snapTick}>✓</Text>
          </View>
          <View style={st.snapBody}>
            {block.rows.map((row, i) => (
              <View key={i} style={st.snapRow}>
                <Markup html={row.f} size={type(14.5)} style={mathText(type, 14.5)} />
                <Markup html={row.note} size={type(13)} style={st.snapNote} />
              </View>
            ))}
            <View style={st.snapAids}>
              {block.aids.map((aid, i) => (
                <Markup key={i} html={aid} size={type(14)} style={[s.hand, st.snapAid]} />
              ))}
            </View>
          </View>
        </View>
      );

    default:
      return null;
  }
}

/** Everything a block might need that the reader must supply. */
export type { Block };

function makeStyles(scale: (n: number) => number, type = scale) {
  return StyleSheet.create({
    /** Between paragraphs of ONE block. Smaller than the 20 between blocks,
     *  because these are one thought written long and a block is a new one. */
    proseGroup: { gap: type(11) },
    grow: { flex: 1 },
    /**
     * NO RULE, AND NO INDENT EITHER.
     *
     * These blocks carried a 2pt line down the left and 14 of padding to clear
     * it. On a numbered how-to that put a rule, then a gap, then the step
     * number, then another gap, then the text — four things before a word, in a
     * column already only 41 characters wide. The label above each block
     * already says where it begins and the gap between blocks already says
     * where it ends; the line was a third way of saying the same thing, paid
     * for in measure.
     */
    plainBlock: {},
    pressed: { backgroundColor: colors.tint },
    hookHead: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: scale(12),
      paddingHorizontal: scale(15),
    },
    hookBody: { paddingHorizontal: scale(15), paddingBottom: scale(13) },
    /** The aside loses its rule too. It is already marked by its own voice —
     *  lowercase, and set in slate rather than ink — so the line was decorating
     *  a distinction the words had already made. */
    think: { paddingVertical: scale(6) },
    thinkText: { fontSize: type(16), lineHeight: type(16 * 1.55) },
    defTerm: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(17),
      letterSpacing: scale(-0.26),
      color: colors.ink,
      marginTop: scale(6),
    },
    defBody: { marginTop: scale(4) },
    gridTitle: { paddingBottom: scale(6) },
    gridRow: {
      flexDirection: 'row',
      gap: scale(12),
      paddingVertical: scale(9),
      borderTopWidth: 1,
      borderTopColor: BORDER_SOFT,
    },
    gridKey: {
      width: scale(116),
      fontFamily: 'Onest_700Bold',
      fontSize: type(13),
      lineHeight: type(13 * 1.45),
      color: colors.ink,
    },
    gridVal: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: type(13.5),
      lineHeight: type(13.5 * 1.5),
      color: colors.slate,
    },
    // Wraps rather than squeezing. Both children carry real text -- a label
    // and a gloss -- and across the corpus they run to 105 characters
    // combined. `flex: 1` on the label gave it a flex basis of 0, so the tag
    // claimed its full content width first and the label was left breaking
    // mid-word down a column two characters wide. Now neither has a zero
    // basis, so they share the line when they fit and the tag drops to its
    // own line when they do not.
    formulaHead: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      columnGap: scale(10),
      rowGap: scale(3),
    },
    // Shrinks to share the line, but never to a zero basis the way `grow` did.
    headLabel: { flexShrink: 1 },
    // `marginLeft: auto` keeps a short tag against the right edge on a shared
    // line; a long one fills its own line and the auto margin does nothing.
    tag: { color: colors.quiet, letterSpacing: scale(0.6), flexShrink: 1, marginLeft: 'auto' },
    formulaMain: { textAlign: 'center', paddingTop: scale(16), paddingBottom: scale(14) },
    formulaLegend: { gap: scale(4), borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)', paddingTop: scale(10) },
    legendLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(13),
      lineHeight: type(13 * 1.55),
      color: colors.faint,
    },
    formulaNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(13),
      lineHeight: type(13 * 1.5),
      color: colors.slate,
    },
    procList: { gap: scale(9), marginTop: scale(10) },
    procRow: { flexDirection: 'row', gap: scale(11) },
    stepNum: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: type(10.5),
      color: colors.quiet,
      paddingTop: scale(2),
    },
    derivKicker: { paddingTop: scale(13), paddingHorizontal: scale(16), paddingBottom: scale(9) },
    derivStep: { borderTopWidth: 1, borderTopColor: BORDER_SOFT },
    derivHead: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: scale(11),
      paddingHorizontal: scale(16),
    },
    // The open row lifts off the card just enough to show which "why" belongs
    // to which step. Fainter than a pressed state on purpose.
    derivHeadOpen: { backgroundColor: 'rgba(28,26,22,.03)' },
    derivNum: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: type(10.5),
      color: colors.quiet,
      width: scale(16),
    },
    derivWhy: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(13.5),
      lineHeight: type(13.5 * 1.55),
      color: colors.slate,
      paddingLeft: scale(44),
      paddingRight: scale(16),
      paddingBottom: scale(12),
    },
    diaKicker: { marginBottom: scale(10) },
    swipeCard: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: CARD_BORDER,
      borderRadius: scale(14),
      paddingVertical: scale(14),
      paddingHorizontal: scale(16),
    },
    cardQ: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(15),
      lineHeight: type(15 * 1.6),
      color: colors.ink,
      marginTop: scale(8),
    },
    practiceQ: { minHeight: scale(48) },
    exSteps: {
      gap: scale(7),
      marginTop: scale(11),
      borderTopWidth: 1,
      borderTopColor: CARD_BORDER,
      borderStyle: 'dashed',
      paddingTop: scale(11),
    },
    exStep: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(13.5),
      lineHeight: type(13.5 * 1.55),
      color: colors.slate,
    },
    exAns: {
      marginTop: scale(10),
      fontFamily: 'Onest_400Regular',
      fontSize: type(13.5),
      lineHeight: type(13.5 * 1.55),
      color: colors.slate,
      overflow: 'hidden',
    },
    opts: { gap: scale(7), marginTop: scale(11) },
    opt: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      paddingVertical: scale(9),
      paddingHorizontal: scale(12),
      borderRadius: scale(10),
      borderWidth: 1,
      borderColor: CARD_BORDER,
      backgroundColor: colors.reading,
    },
    optRight: { backgroundColor: colors.tint, borderColor: colors.ink },
    optWrong: { borderColor: 'rgba(221,68,51,.5)' },
    optPressed: { transform: [{ scale: 0.985 }] },
    optTag: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: type(10.5),
      color: colors.quiet,
    },
    optLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: type(14),
      lineHeight: type(14 * 1.45),
      color: colors.ink,
    },
    optMark: { fontFamily: 'Onest_700Bold', fontSize: type(13.5) },
    reveal: { marginTop: scale(9) },
    revealBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(13.5),
      lineHeight: type(13.5 * 1.55),
      color: colors.slate,
      marginTop: scale(4),
    },
    checkBtn: {
      alignSelf: 'flex-start',
      height: scale(36),
      justifyContent: 'center',
      paddingHorizontal: scale(16),
      marginTop: scale(10),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.22)',
    },
    checkBtnPressed: { transform: [{ scale: 0.97 }] },
    checkBtnText: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(13.5),
      color: colors.ink,
    },
    cross: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(12),
      color: colors.red,
      paddingTop: scale(1),
    },
    mistakeText: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(14),
      lineHeight: type(14 * 1.55),
      color: colors.slate,
    },
    protip: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: DASH,
      borderRadius: scale(12),
      paddingVertical: scale(13),
      paddingHorizontal: scale(16),
    },
    protipText: { fontSize: type(15.5), lineHeight: type(15.5 * 1.5), marginTop: scale(6) },
    snapshot: {
      borderWidth: 1,
      borderColor: BORDER_STRONG,
      borderRadius: scale(14),
      overflow: 'hidden',
      marginTop: scale(2),
    },
    snapHead: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: scale(11),
      paddingHorizontal: scale(16),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      backgroundColor: colors.tint,
    },
    snapKicker: { color: colors.slate },
    snapTick: { fontFamily: 'Onest_800ExtraBold', fontSize: type(10), color: colors.amberText },
    snapBody: { paddingVertical: scale(14), paddingHorizontal: scale(16) },
    snapRow: { flexDirection: 'row', alignItems: 'baseline', gap: scale(10), flexWrap: 'wrap', marginBottom: scale(8) },
    snapNote: { fontFamily: 'Onest_400Regular', fontSize: type(12), color: colors.faint },
    snapAids: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.16)',
      borderStyle: 'dashed',
      marginTop: scale(4),
      paddingTop: scale(9),
      gap: scale(3),
    },
    snapAid: { fontSize: type(14) },
  });
}
