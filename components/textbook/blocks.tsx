import { Pressable, StyleSheet, Text, View } from 'react-native';
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
  scale: (n: number) => number;
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

export function TextbookBlock({ block, ctx }: { block: RenderBlock; ctx: Ctx }) {
  const { scale } = ctx;
  const s = makeBlockStyles(scale);
  const st = makeStyles(scale);

  switch (block.t) {
    case 'hook': {
      const open = !!ctx.state.hook[ctx.uid];
      return (
        <View style={s.cardFlush}>
          <Pressable
            onPress={() => ctx.set('hook', ctx.uid, !open)}
            style={({ pressed }) => [st.hookHead, pressed && st.pressed]}>
            <Text style={[kicker(scale), st.grow]}>Why this matters in the exam</Text>
            <Chevron open={open} scale={scale} />
          </Pressable>
          {open && (
            <Markup html={block.html} size={scale(14.5)} style={[s.blockBody, st.hookBody]} />
          )}
        </View>
      );
    }

    case 'p':
      return <Markup html={block.html} size={scale(16.5)} style={s.body} />;

    case 'think':
      return (
        <View style={st.think}>
          <Markup
            html={`think about it this way… ${block.html}`}
            size={scale(16)}
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
          <Text style={kicker(scale)}>Definition</Text>
          <Markup html={block.term} size={scale(15)} style={st.defTerm} />
          <Markup html={block.html} size={scale(15)} style={[s.blockBody, st.defBody]} />
        </View>
      );

    case 'defgrid':
      return (
        <View>
          <Text style={[kicker(scale), st.gridTitle]}>{block.title}</Text>
          {block.rows.map((row, i) => (
            <View key={i} style={st.gridRow}>
              <Markup html={row.k} size={scale(13)} style={st.gridKey} />
              <Markup html={row.v} size={scale(13.5)} style={st.gridVal} />
            </View>
          ))}
        </View>
      );

    case 'formula':
      return (
        <View style={s.card}>
          <View style={st.formulaHead}>
            <Text style={[kicker(scale), st.headLabel]}>{block.kicker}</Text>
            {!!block.tag && <Text style={[kicker(scale), st.tag]}>{block.tag}</Text>}
          </View>
          <Markup html={block.main} size={scale(20)} style={[mathText(scale, 20), st.formulaMain]} />
          <View style={st.formulaLegend}>
            {block.legend.map((line, i) => (
              <Markup key={i} html={line} size={scale(13)} style={st.legendLine} />
            ))}
            {!!block.note && <Markup html={block.note} size={scale(13)} style={st.formulaNote} />}
          </View>
        </View>
      );

    case 'proc':
      return (
        <View style={st.plainBlock}>
          <Text style={kicker(scale)}>How to · {block.title}</Text>
          <View style={st.procList}>
            {block.steps.map((step, i) => (
              <View key={i} style={st.procRow}>
                <Text style={st.stepNum}>{String(i + 1).padStart(2, '0')}</Text>
                <Markup html={step} size={scale(14.5)} style={[s.blockBody, st.grow]} />
              </View>
            ))}
          </View>
        </View>
      );

    case 'deriv': {
      const openStep = ctx.state.deriv[ctx.uid] ?? null;
      return (
        <View style={s.cardFlush}>
          <Text style={[kicker(scale), st.derivKicker]}>{block.kicker}</Text>
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
                  <Text style={st.derivNum}>{String(i + 1).padStart(2, '0')}</Text>
                  <Markup
                    html={step.eq}
                    size={scale(15.5)}
                    style={[mathText(scale, 15.5), st.grow]}
                  />
                  <Chevron open={open} scale={scale} />
                </Pressable>
                {open && <Markup html={step.why} size={scale(13.5)} style={st.derivWhy} />}
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
          <Text style={[kicker(scale), st.diaKicker]}>{block.kicker}</Text>
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
                  <Text style={[kicker(scale), st.headLabel]}>
                    Solved example · {i + 1} of {block.items.length}
                  </Text>
                  <Text style={[kicker(scale, 9.5), st.tag]}>{ex.tag}</Text>
                </View>
                <Markup html={ex.q} size={scale(15)} style={st.cardQ} />
                <View style={st.exSteps}>
                  {ex.steps.map((step, j) => (
                    <View key={j} style={st.procRow}>
                      <Text style={st.stepNum}>{String(j + 1).padStart(2, '0')}</Text>
                      <Markup html={step} size={scale(13.5)} style={[st.exStep, st.grow]} />
                    </View>
                  ))}
                </View>
                <Markup html={ex.ans} size={scale(14)} style={[s.tintPanel, st.exAns]} />
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
                  <Text style={kicker(scale)}>
                    Crack the MCQ · Q{i + 1} of {block.items.length}
                  </Text>
                  <Markup html={q.q} size={scale(15)} style={st.cardQ} />
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
                          <Markup html={opt.label} size={scale(14)} style={[st.optLabel, st.grow]} />
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
                      <Text style={kicker(scale, 9.5)}>Not quite. Here&apos;s the trap</Text>
                      <Markup html={nudge} size={scale(13.5)} style={st.revealBody} />
                    </View>
                  )}
                  {answer.solved && (
                    <View style={[s.tintPanel, st.reveal]}>
                      <Text style={[kicker(scale, 9.5), { color: colors.amberText }]}>Solved ✓</Text>
                      <Markup html={q.solution} size={scale(13.5)} style={st.revealBody} />
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
                    <Text style={[kicker(scale), st.headLabel]}>
                      Practice · {i + 1} of {block.items.length}
                    </Text>
                    <Text style={[kicker(scale, 9.5), st.tag]}>Try first</Text>
                  </View>
                  <Markup html={item.q} size={scale(15)} style={[st.cardQ, st.practiceQ]} />
                  {shown ? (
                    <Markup html={item.a} size={scale(13.5)} style={[s.tintPanel, st.exAns]} />
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
          <Text style={kicker(scale)}>Watch out</Text>
          <View style={st.procList}>
            {block.items.map((item, i) => (
              <View key={i} style={st.procRow}>
                <Text style={st.cross}>✗</Text>
                <Markup html={item} size={scale(14)} style={[st.mistakeText, st.grow]} />
              </View>
            ))}
          </View>
        </View>
      );

    case 'protip':
      return (
        <View style={st.protip}>
          <Text style={kicker(scale)}>Pro-tip</Text>
          <Markup html={block.html} size={scale(15.5)} style={[s.hand, st.protipText]} />
        </View>
      );

    case 'snapshot':
      return (
        <View style={st.snapshot}>
          <View style={st.snapHead}>
            <Text style={[kicker(scale), st.snapKicker]}>
              Checkpoint · Topic {ctx.topicNumber} snapshot
            </Text>
            <Text style={st.snapTick}>✓</Text>
          </View>
          <View style={st.snapBody}>
            {block.rows.map((row, i) => (
              <View key={i} style={st.snapRow}>
                <Markup html={row.f} size={scale(14.5)} style={mathText(scale, 14.5)} />
                <Markup html={row.note} size={scale(13)} style={st.snapNote} />
              </View>
            ))}
            <View style={st.snapAids}>
              {block.aids.map((aid, i) => (
                <Markup key={i} html={aid} size={scale(14)} style={[s.hand, st.snapAid]} />
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

function makeStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    grow: { flex: 1 },
    /** Un-boxed blocks. A hairline on the left is enough to say "this is a
     *  unit" without drawing a container around it. */
    plainBlock: {
      paddingLeft: scale(14),
      borderLeftWidth: 2,
      borderLeftColor: 'rgba(28,26,22,.10)',
    },
    pressed: { backgroundColor: colors.tint },
    hookHead: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: scale(12),
      paddingHorizontal: scale(15),
    },
    hookBody: { paddingHorizontal: scale(15), paddingBottom: scale(13) },
    think: {
      paddingVertical: scale(2),
      paddingLeft: scale(14),
      borderLeftWidth: 2,
      borderLeftColor: 'rgba(28,26,22,.16)',
    },
    thinkText: { fontSize: scale(16), lineHeight: scale(16 * 1.55) },
    defTerm: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      lineHeight: scale(13 * 1.45),
      color: colors.ink,
    },
    gridVal: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.5),
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
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(13 * 1.55),
      color: colors.faint,
    },
    formulaNote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(13 * 1.5),
      color: colors.slate,
    },
    procList: { gap: scale(9), marginTop: scale(10) },
    procRow: { flexDirection: 'row', gap: scale(11) },
    stepNum: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10.5),
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10.5),
      color: colors.quiet,
      width: scale(16),
    },
    derivWhy: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.55),
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
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(15 * 1.6),
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
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.55),
      color: colors.slate,
    },
    exAns: {
      marginTop: scale(10),
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.55),
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10.5),
      color: colors.quiet,
    },
    optLabel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      lineHeight: scale(14 * 1.45),
      color: colors.ink,
    },
    optMark: { fontFamily: 'AnekLatin_700Bold', fontSize: scale(13.5) },
    reveal: { marginTop: scale(9) },
    revealBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.55),
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    cross: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.red,
      paddingTop: scale(1),
    },
    mistakeText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(14 * 1.55),
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
    protipText: { fontSize: scale(15.5), lineHeight: scale(15.5 * 1.5), marginTop: scale(6) },
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
    snapTick: { fontFamily: 'AnekLatin_800ExtraBold', fontSize: scale(10), color: colors.amberText },
    snapBody: { paddingVertical: scale(14), paddingHorizontal: scale(16) },
    snapRow: { flexDirection: 'row', alignItems: 'baseline', gap: scale(10), flexWrap: 'wrap', marginBottom: scale(8) },
    snapNote: { fontFamily: 'AnekLatin_400Regular', fontSize: scale(12), color: colors.faint },
    snapAids: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.16)',
      borderStyle: 'dashed',
      marginTop: scale(4),
      paddingTop: scale(9),
      gap: scale(3),
    },
    snapAid: { fontSize: scale(14) },
  });
}
