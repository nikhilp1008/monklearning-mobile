import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { BoardBlock, BoardContent } from '@/lib/board-sections';

/**
 * Notes and Sessions — the class board as a page, ported from notes-sessions/.
 *
 * One component, two modes, exactly as the design frames it: same page, same
 * content, same components, with four differences.
 *   1. The kicker — none on a note; "SESSION · DELETES IN N DAYS" in red on a
 *      session, turning green once saved.
 *   2. The clock strip — sessions only.
 *   3. The action bar — sessions only, "Save to notes" then "Talk to Drona
 *      about this".
 *   4. The header — topic and subject only. No dates, no durations, no edit;
 *      dates belong to the list the student came from.
 *
 * Fonts are the app's Anek Latin in place of the design's Bricolage Grotesque.
 * Kalam is unchanged — the design asks for it on the handwritten touches and
 * the app already bundles it.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_50 = '#8A8478';
const INK_30 = '#B5B0A4';
const PAPER = '#FFFFFF';
const RULE = 'rgba(28,26,22,0.055)';
const HAIR = 'rgba(28,26,22,0.12)';
const AMBER = '#B08420';
const AMBER_WASH = 'rgba(238,163,31,0.11)';
const AMBER_MARK = 'rgba(238,163,31,0.28)';
const RED = '#DD4433';
const GREEN = '#1C9B57';
const GREEN_INK = '#14663A';

/** The ruled rhythm — matches the prose line-height so text sits on the lines
 *  rather than fighting them. */
const LINE_HEIGHT = 34;
const GUTTER = 24;
const RAIL = 40;

type BoardPageProps = {
  board: BoardContent;
  mode: 'note' | 'session';
  daysLeft?: number;
  onBack: () => void;
  /** Sessions only. Resolve true to flip the page into its saved state. */
  onSave?: () => Promise<boolean>;
  onTalkToDrona?: () => void;
  /** Rendered in place of the sections when there is nothing to show. */
  emptyNote?: string;
};

/** The ruled paper the whole page sits on. */
function RuledGround() {
  const { height } = useWindowDimensions();
  const rows = Math.ceil(height / LINE_HEIGHT) + 1;
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: (i + 1) * LINE_HEIGHT - 1,
            height: 1,
            backgroundColor: RULE,
          }}
        />
      ))}
    </View>
  );
}

/** Tap-to-highlight. The design keeps these marks when a session becomes a
 *  note, which falls out of this living on the block itself. */
function MarkableText({ text, styles }: { text: string; styles: Styles }) {
  const [marked, setMarked] = useState(false);
  return (
    <Pressable onPress={() => setMarked((m) => !m)}>
      <Text style={[styles.text, marked && styles.textMarked]}>{text}</Text>
    </Pressable>
  );
}

function Block({ block, styles }: { block: BoardBlock; styles: Styles }) {
  switch (block.kind) {
    case 'text':
      return block.markable ? (
        <MarkableText text={block.text} styles={styles} />
      ) : (
        <Text style={styles.text}>{block.text}</Text>
      );
    case 'hand':
      return <Text style={styles.hand}>{block.text}</Text>;
    case 'caption':
      return <Text style={styles.caption}>{block.text}</Text>;
    case 'foot':
      return <Text style={styles.foot}>{block.text}</Text>;
    case 'note':
      return <Text style={styles.note}>{block.text}</Text>;
    case 'math':
      // One formula per line, hugging its own text rather than stretching into
      // a full-width bar.
      return (
        <View style={[styles.mathWrap, block.result && styles.mathWrapResult]}>
          <Text style={[styles.math, block.result && styles.mathResult]}>{block.text}</Text>
        </View>
      );
    case 'steps':
      return (
        <View style={styles.rail}>
          <View style={styles.railLine} />
          {block.steps.map((step, i) => (
            <View key={i} style={styles.step}>
              <View style={styles.num}>
                <Text style={styles.numText}>{String(i + 1).padStart(2, '0')}</Text>
              </View>
              <Text style={styles.stepTitle}>{step.title}</Text>
              {step.lines.map((line, j) => {
                if (line.kind === 'math' || line.kind === 'result') {
                  return (
                    <View
                      key={j}
                      style={[styles.mathWrap, line.kind === 'result' && styles.mathWrapResult]}>
                      <Text
                        style={[styles.math, line.kind === 'result' && styles.mathResult]}>
                        {line.text}
                      </Text>
                    </View>
                  );
                }
                if (line.kind === 'note') {
                  return (
                    <Text key={j} style={styles.note}>
                      {line.text}
                    </Text>
                  );
                }
                return <MarkableText key={j} text={line.text} styles={styles} />;
              })}
            </View>
          ))}
        </View>
      );
    default:
      return null;
  }
}

export function BoardPage({
  board,
  mode,
  daysLeft = 7,
  onBack,
  onSave,
  onTalkToDrona,
  emptyNote,
}: BoardPageProps) {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);
  const scrollRef = useRef<ScrollView>(null);
  const [activeChip, setActiveChip] = useState(0);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const offsets = useRef<number[]>([]);

  const isSession = mode === 'session';

  const jumpTo = (i: number) => {
    setActiveChip(i);
    const y = offsets.current[i];
    if (y != null) scrollRef.current?.scrollTo({ y: Math.max(y - 8, 0), animated: true });
  };

  const handleSave = async () => {
    if (saved || saving || !onSave) return;
    setSaving(true);
    const ok = await onSave().catch(() => false);
    setSaving(false);
    if (ok) setSaved(true);
  };

  return (
    <View style={styles.screen}>
      <RuledGround />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.bar}>
          <Pressable style={styles.back} onPress={onBack} hitSlop={10}>
            <BackChevron />
          </Pressable>
          {isSession && (
            <Text style={[styles.kicker, saved && styles.kickerSaved]}>
              {saved ? 'SAVED TO YOUR NOTES' : `SESSION · DELETES IN ${daysLeft} DAYS`}
            </Text>
          )}
        </View>

        <View style={styles.head}>
          <Text style={styles.topic}>{board.topic}</Text>
          {!!board.subject && <Text style={styles.subject}>{board.subject}</Text>}

          {isSession && (
            <View style={[styles.clock, saved && styles.clockSaved]}>
              <Text style={[styles.clockNum, saved && styles.clockNumSaved]}>
                {saved ? '∞' : String(daysLeft)}
              </Text>
              <Text style={styles.clockCopy}>
                {saved
                  ? 'Kept for good. It now lives with your notes.'
                  : 'days left. Save it and this board stays with your notes.'}
              </Text>
            </View>
          )}
        </View>

        {board.sections.length > 1 && (
          <View style={styles.chipsWrap}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chips}>
              {board.sections.map((section, i) => {
                const selected = i === activeChip;
                return (
                  <Pressable
                    key={section.id}
                    onPress={() => jumpTo(i)}
                    accessibilityRole="tab"
                    accessibilityState={{ selected }}
                    style={[styles.chip, selected && styles.chipSelected]}>
                    <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                      {section.chip}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        )}

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            isSession && styles.scrollContentSession,
          ]}
          showsVerticalScrollIndicator={false}>
          {board.sections.length === 0 ? (
            <Text style={styles.foot}>{emptyNote ?? 'Nothing was written to the board yet.'}</Text>
          ) : (
            board.sections.map((section, i) => (
              <View
                key={section.id}
                onLayout={(e) => {
                  offsets.current[i] = e.nativeEvent.layout.y;
                }}
                style={styles.section}>
                <Text style={styles.label}>{section.label}</Text>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} styles={styles} />
                ))}
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>

      {/* Sessions only — a note has no bar and scrolls to its own end. */}
      {isSession && (
        <View style={styles.actions} pointerEvents="box-none">
          <LinearGradient
            colors={['rgba(255,255,255,0)', PAPER, PAPER]}
            locations={[0, 0.32, 1]}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
          />
          <View style={[styles.actionsInner, { paddingBottom: Math.max(insets.bottom - 16, 12) }]}>
            <Pressable
              style={styles.primary}
              onPress={saved ? onTalkToDrona : handleSave}
              disabled={saving}>
              <Text style={styles.primaryText}>
                {saved ? 'Talk to Drona about this' : saving ? 'Saving…' : 'Save to notes'}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

function BackChevron() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke="#3A362E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

type Styles = ReturnType<typeof createStyles>;

function createStyles() {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: PAPER },
    safeArea: { flex: 1 },

    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: GUTTER,
      paddingTop: 10,
    },
    back: { width: 32, height: 32, marginLeft: -6, alignItems: 'center', justifyContent: 'center' },
    kicker: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 11,
      letterSpacing: 0.14 * 11,
      color: RED,
    },
    kickerSaved: { color: GREEN },

    head: { paddingHorizontal: GUTTER, paddingTop: 12, paddingBottom: 14 },
    topic: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 29,
      letterSpacing: -0.04 * 29,
      lineHeight: 29 * 1.06,
      color: INK,
    },
    subject: {
      marginTop: 8,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: '#9C988C',
    },

    clock: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginTop: 14,
      paddingVertical: 12,
      paddingLeft: 16,
      paddingRight: 12,
      borderLeftWidth: 2.5,
      borderLeftColor: 'rgba(221,68,51,0.3)',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: 'rgba(221,68,51,0.05)',
    },
    clockSaved: {
      borderLeftColor: 'rgba(28,155,87,0.4)',
      backgroundColor: 'rgba(28,155,87,0.07)',
    },
    clockNum: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 26,
      letterSpacing: -0.04 * 26,
      color: RED,
    },
    clockNumSaved: { color: GREEN },
    clockCopy: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 14,
      lineHeight: 14 * 1.4,
      color: INK_70,
    },

    chipsWrap: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,0.16)' },
    chips: { gap: 7, paddingHorizontal: GUTTER, paddingBottom: 12 },
    chip: {
      height: 34,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,0.16)',
      borderRadius: 99,
      backgroundColor: 'rgba(255,255,255,0.7)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipSelected: { backgroundColor: INK, borderColor: INK },
    chipText: { fontFamily: 'AnekLatin_700Bold', fontSize: 13, color: INK_50 },
    chipTextSelected: { color: PAPER },

    scroll: { flex: 1, minHeight: 0 },
    scrollContent: { paddingHorizontal: GUTTER, paddingTop: 22, paddingBottom: 40, gap: 30 },
    scrollContentSession: { paddingBottom: 120 },
    section: { gap: 12 },

    label: {
      marginBottom: -2,
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 11,
      letterSpacing: 0.14 * 11,
      color: AMBER,
    },

    text: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 16,
      lineHeight: 16 * 1.62,
      color: INK_70,
      borderRadius: 3,
    },
    textMarked: { backgroundColor: AMBER_MARK },

    hand: {
      marginTop: 2,
      fontFamily: 'Kalam_700Bold',
      fontSize: 17,
      lineHeight: 17 * 1.5,
      color: RED,
    },
    caption: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      lineHeight: 15 * 1.55,
      color: INK_50,
    },
    foot: {
      marginTop: 8,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: INK_30,
    },
    note: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      lineHeight: 15 * 1.55,
      color: INK_50,
    },

    mathWrap: {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      paddingVertical: 7,
      paddingHorizontal: 12,
      borderRadius: 6,
      backgroundColor: AMBER_WASH,
    },
    mathWrapResult: { paddingVertical: 8, paddingHorizontal: 13 },
    math: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 17,
      lineHeight: 17 * 1.6,
      color: INK,
    },
    mathResult: { fontFamily: 'AnekLatin_700Bold', fontSize: 19 },

    rail: { position: 'relative', paddingLeft: RAIL, gap: 22 },
    railLine: {
      position: 'absolute',
      left: 12,
      top: 8,
      bottom: 8,
      width: 1,
      backgroundColor: HAIR,
    },
    step: { position: 'relative', gap: 10, alignItems: 'flex-start', alignSelf: 'stretch' },
    num: {
      position: 'absolute',
      left: -RAIL,
      top: 0,
      width: 26,
      height: 26,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,0.22)',
      borderRadius: 13,
      backgroundColor: PAPER,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numText: { fontFamily: 'AnekLatin_700Bold', fontSize: 11, color: '#57534B' },
    stepTitle: {
      alignSelf: 'stretch',
      paddingTop: 2,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 18,
      letterSpacing: -0.02 * 18,
      color: INK,
    },

    actions: { position: 'absolute', left: 0, right: 0, bottom: 0 },
    actionsInner: { paddingHorizontal: GUTTER, paddingTop: 16 },
    primary: {
      height: 54,
      borderRadius: 99,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryText: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 16, color: PAPER },
  });
}

export { GREEN_INK };
