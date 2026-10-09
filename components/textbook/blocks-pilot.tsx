import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import type { BlockCtx } from '@/components/textbook/blocks';
import { PilotCards } from '@/components/textbook/cards-pilot';
import { TextbookDiagram } from '@/components/textbook/diagrams';
import { PilotCheckpoint, PilotProTip, PilotWatchOut } from '@/components/textbook/closing-pilot';
import { PilotDeriv } from '@/components/textbook/deriv-pilot';
import { PilotFormula } from '@/components/textbook/formula-pilot';
import { PilotDefinition, PilotExamBriefing, PilotThink } from '@/components/textbook/opener-pilot';
import { PilotHowTo, PilotTable } from '@/components/textbook/lists-pilot';
import { Markup } from '@/components/textbook/markup';
import { BORDER, kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import { splitProse } from '@/lib/prose-paragraphs';
import type { RenderBlock } from '@/lib/textbooks';

/**
 * EVERY BLOCK, ON THE APP'S ONE READING SYSTEM. The pilot; see pilot.ts.
 *
 * The same blocks, data and interaction state as blocks.tsx. What changes is
 * only how they are set, and it comes down to a handful of rules:
 *
 *   Everything you read is 15/24 in ink, Practice's reading size. Questions
 *     on cards are 16/26, Practice's question size. A derivation's reasons
 *     and a checkpoint's notes are the only text set in READ_GREY.
 *   Labels keep the reader's own style: 12, SemiBold, faint, lowercase.
 *   Bold is SemiBold, so a bolded phrase marks rather than shouts.
 *   Maths keeps its serif italic, but only the maths: words written inside a
 *     formula or a checkpoint stay in Onest and upright.
 *   Space comes from one scale: 16 between paragraphs, 32 between blocks
 *     (set by the reader), 16 inside a card, 12 corners.
 *   Three kinds of container: none for reading text, one card for things you
 *     study (formula, figure, derivation, checkpoint, swipe cards), and a thin
 *     rule on the left for asides. Answers sit in an outline, not a fill.
 *
 * Each section's design lives in its own file, chosen one at a time against
 * real content: formula-pilot, cards-pilot (examples, MCQs, practice),
 * lists-pilot (tables, how-to), deriv-pilot, opener-pilot (exam briefing,
 * think, definition), closing-pilot (watch out, pro-tip, checkpoint), and the
 * figure's own pilot look in diagrams.tsx.
 */

function Label({
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

export function TextbookBlockPilot({ block, ctx }: { block: RenderBlock; ctx: BlockCtx }) {
  const { scale, type } = ctx;
  const st = makeStyles(scale, type);
  /** Reading text: Practice's size, ink, through the reader's aA. */
  // A plain function, not a component: a component declared in here would be
  // a new type every render and remount every paragraph on each state change.
  const read = (html: string, style?: StyleProp<TextStyle>, key?: number) => (
    <Markup key={key} html={html} size={type(READ_SIZE)} style={[st.read, style]} look="pilot" />
  );

  switch (block.t) {
    case 'hook':
      return (
        <PilotExamBriefing
          hook={block}
          topicCount={ctx.topicCount ?? 0}
          open={!!ctx.state.hook[ctx.uid]}
          onToggle={() => ctx.set('hook', ctx.uid, !ctx.state.hook[ctx.uid])}
          scale={scale}
          type={type}
        />
      );

    case 'p': {
      // The author's own breaks first: a blank line ("<br><br>") is a
      // paragraph, and drawn as an empty line it was a 24pt gap beside the
      // 16 between split paragraphs. Then long ones are split as before.
      const paras = block.html
        .split(/(?:<br\s*\/?>\s*){2,}/i)
        .map((part) => part.trim())
        .filter(Boolean)
        .flatMap(splitProse);
      return (
        <View style={st.paras}>
          {paras.map((para, i) => read(para, undefined, i))}
        </View>
      );
    }

    case 'think':
      return <PilotThink block={block} scale={scale} type={type} />;

    case 'def':
      return <PilotDefinition block={block} scale={scale} type={type} />;

    case 'defgrid':
      return <PilotTable block={block} scale={scale} type={type} />;

    case 'formula':
      return <PilotFormula block={block} scale={scale} type={type} />;

    case 'proc':
      return <PilotHowTo block={block} scale={scale} type={type} />;

    case 'deriv':
      return (
        <PilotDeriv
          block={block}
          shown={ctx.state.deriv[ctx.uid] ?? 1}
          onShow={(n) => ctx.set('deriv', ctx.uid, n)}
          scale={scale}
          type={type}
        />
      );

    case 'diagram': {
      const selected = ctx.state.diagram[ctx.uid] ?? 0;
      return (
        <View style={st.card}>
          <Label type={type} style={st.labelGap}>{block.kicker}</Label>
          <TextbookDiagram
            kind={block.kind}
            selected={selected}
            onSelect={(i) => ctx.set('diagram', ctx.uid, i)}
            chips={block.chips}
            captions={block.captions}
            mathChips={block.mathChips}
            frames={block.frames}
            look="pilot"
            type={type}
          />
        </View>
      );
    }

    case 'exGroup':
    case 'mcqGroup':
    case 'practice':
      return <PilotCards block={block} ctx={ctx} />;

    case 'mistakes':
      return <PilotWatchOut block={block} scale={scale} type={type} />;

    case 'protip':
      return <PilotProTip block={block} scale={scale} type={type} />;

    case 'snapshot':
      return <PilotCheckpoint block={block} topicNumber={ctx.topicNumber} scale={scale} type={type} />;

    default:
      return null;
  }
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  return StyleSheet.create({
    read: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(READ_SIZE),
      lineHeight: type(READ_LINE),
      color: READ_INK,
    },
    paras: { gap: scale(16) },
    labelGap: { marginBottom: scale(6) },
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(16),
    },
  });
}
