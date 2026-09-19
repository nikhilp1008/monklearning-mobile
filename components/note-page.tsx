import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { Skeleton, SkeletonParagraph, stagger } from '@/components/skeleton';
import { type NoteLine, type NoteSection } from '@/lib/note-page-model';

/**
 * A SAVED CLASS, AS A PAGE SOMEBODY WROTE.
 *
 * The first version of this page was a handwriting font on ruled paper, and it
 * read as print in a different typeface: every line sat exactly on its rule,
 * every margin was identical, and one pen wrote the whole page. What makes a
 * real page look written is not the letterforms — it is everything around
 * them. So:
 *
 *   A PEN PER SECTION. Red, violet, green, ink, in turn, with a drawn star
 *   beside the heading and a wavy line under it. A student reaching for
 *   whichever pen is open is why a page has four colours in it.
 *
 *   FORMULAS IN A BOX THEY DREW. Not a slab of tint: a rounded rectangle with
 *   a pen, corners not quite meeting the ruler.
 *
 *   LINES THAT DO NOT SIT PERFECTLY. Each is nudged a point or two sideways,
 *   seeded by its place on the page so it never reshuffles.
 *
 *   NOTHING IS BOLD. The headings are the same weight as the body and are
 *   told apart by colour, the star and the underline — a bold face was the
 *   last thing making the page look set rather than written.
 *
 * What the class produced maps onto it unchanged: headings become the
 * coloured sections, bullets and formulas their own lines, QUICK REVISION the
 * boxed key points, the rework section its red flag, and the divider the
 * server writes where a class stopped stays a line drawn across the page.
 */

const HAND = 'Kalam_400Regular';
/** Red pen: the title, the flags. */
const RED = '#C0392B';
/** The everyday ink — blue-black, as a ballpoint is. Never pure black. */
const INK = '#2A3550';
const VIOLET = '#5B4BAE';
const GREEN = '#1E7A46';
const AMBER = '#B8860B';
const PAPER = '#FFFEFB';
const RULE = 'rgba(42,53,80,0.05)';
const QUIET = '#8A8577';
const LH = 26;

/** The pens on the desk, in the order a page picks them up. */
const PENS = [RED, VIOLET, GREEN, INK];

/** Deterministic wobble, so a line is written the same way every render. */
function n(seed: number, salt: number, amount: number): number {
  const x = Math.sin(seed * 12.9898 + salt * 78.233) * 43758.5453;
  return ((x - Math.floor(x)) * 2 - 1) * amount;
}

/** A line drawn under a heading: never quite straight, never quite level. */
function Underline({
  width,
  color,
  seed = 1,
  double = false,
}: {
  width: number;
  color: string;
  seed?: number;
  double?: boolean;
}) {
  if (width <= 0) return null;
  const path = (o: number) =>
    `M ${n(seed, o, 2)} ${4 + o * 4 + n(seed, o + 1, 1)} Q ${width * 0.35} ${
      4 + o * 4 + n(seed, o + 2, 2)
    } ${width * 0.7} ${4 + o * 4 + n(seed, o + 3, 1.4)} T ${width + n(seed, o + 4, 3)} ${
      4 + o * 4 + n(seed, o + 5, 1.2)
    }`;
  return (
    <Svg width={width + 8} height={double ? 16 : 10} pointerEvents="none">
      <Path d={path(0)} stroke={color} strokeWidth={1.5} fill="none" strokeLinecap="round" />
      {double && (
        <Path d={path(1)} stroke={color} strokeWidth={1} fill="none" strokeLinecap="round" />
      )}
    </Svg>
  );
}

/**
 * The box a student draws round something, with a pen rather than a ruler.
 *
 * Measured rather than set in percentages: at "88%" the line ran through the
 * tail of the formula it was meant to be round.
 */
function RoughBox({
  color,
  seed = 1,
  box,
}: {
  color: string;
  seed?: number;
  box: { w: number; h: number };
}) {
  if (box.w <= 0 || box.h <= 0) return null;
  return (
    <Svg style={StyleSheet.absoluteFill} width={box.w} height={box.h} pointerEvents="none">
      <Rect
        x={1.5 + n(seed, 1, 1)}
        y={1.5 + n(seed, 2, 1)}
        width={box.w - 3 + n(seed, 3, 1.5)}
        height={box.h - 3 + n(seed, 4, 1.5)}
        rx={8}
        stroke={color}
        strokeWidth={1.3}
        fill="none"
      />
    </Svg>
  );
}

/** Anything with a drawn box round it: it measures itself so the box fits. */
function Boxed({
  color,
  seed,
  style,
  children,
}: {
  color: string;
  seed: number;
  style: object;
  children: React.ReactNode;
}) {
  const [box, setBox] = useState({ w: 0, h: 0 });
  return (
    <View
      style={style}
      onLayout={(e) =>
        setBox({
          w: Math.round(e.nativeEvent.layout.width),
          h: Math.round(e.nativeEvent.layout.height),
        })
      }>
      <RoughBox color={color} seed={seed} box={box} />
      {children}
    </View>
  );
}

/** The star beside a heading, drawn: the ✳ glyph comes out of the system
 *  emoji font as a coloured tile. */
function Asterisk({ color }: { color: string }) {
  return (
    <Svg width={13} height={13} viewBox="0 0 14 14">
      <Path
        d="M7 2.2v9.6M3 4.2l8 5.6M11 4.2l-8 5.6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Bulb({ color }: { color: string }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 16 16">
      <Path
        d="M8 1.5a4.2 4.2 0 0 0-2.4 7.6c.5.4.8 1 .8 1.6h3.2c0-.6.3-1.2.8-1.6A4.2 4.2 0 0 0 8 1.5Z"
        stroke={color}
        strokeWidth={1.3}
        fill="none"
      />
      <Path d="M6.4 12.4h3.2M7 14h2" stroke={color} strokeWidth={1.3} strokeLinecap="round" />
    </Svg>
  );
}

/** A line drawn across the page where the class stopped. */
function Rule() {
  const w = 300;
  let d = 'M0 5';
  for (let x = 0; x < w; x += 16) {
    d += ` Q ${x + 4} 2, ${x + 8} 5 Q ${x + 12} 8, ${x + 16} 5`;
  }
  return (
    <Svg width={w} height={10} style={styles.classRule}>
      <Path d={d} stroke={INK} strokeWidth={1.1} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function NotePage({
  title,
  subject,
  sections,
  onBack,
  emptyNote,
}: {
  title: string;
  subject?: string | null;
  sections: NoteSection[];
  onBack: () => void;
  emptyNote: string;
}) {
  /**
   * The paper runs under the status bar — paper behind a notch is right, and a
   * white band above it would put the card back. Only the WRITING is inset.
   */
  const insets = useSafeAreaInsets();
  const s = useMemo(() => createStyles(), []);
  /** The line under the title runs the width of the title it sits under, so it
   *  has to wait for the title to be laid out. */
  const [titleWidth, setTitleWidth] = useState(0);
  const firstSelfStudy = sections.findIndex((x) => x.kind === 'selfstudy');

  return (
    <View style={s.screen}>
      <ScrollView style={s.scroll} contentContainerStyle={s.scrollInner} showsVerticalScrollIndicator={false}>
        <View style={s.page}>
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            {Array.from({ length: 120 }, (_, i) => (
              <View key={i} style={[s.rule, { top: (i + 1) * LH }]} />
            ))}
          </View>

          <View style={[s.body, { paddingTop: insets.top + 38 }]}>
            <Text style={s.title} onLayout={(e) => setTitleWidth(e.nativeEvent.layout.width)}>
              {title}
            </Text>
            <Underline width={Math.min(titleWidth, 300)} color={RED} seed={2} double />
            {!!subject && <Text style={s.subject}>{subject}</Text>}

            {sections.length === 0 ? (
              <Text style={s.bodyLine}>{emptyNote}</Text>
            ) : (
              sections.map((section, i) => (
                <Section
                  key={i}
                  section={section}
                  index={i}
                  styles={s}
                  boundary={section.kind === 'selfstudy' && i === firstSelfStudy}
                />
              ))
            )}
          </View>

          <View style={s.sheen} pointerEvents="none" />
        </View>
      </ScrollView>

      <LinearGradient
        colors={[PAPER, PAPER, 'rgba(255,254,251,0)']}
        locations={[0, 0.62, 1]}
        style={[s.topCover, { height: insets.top + 42 }]}
        pointerEvents="none"
      />
      <Pressable
        style={[s.back, { top: insets.top + 4 }]}
        onPress={onBack}
        hitSlop={16}
        accessibilityLabel="Back">
        <Svg viewBox="0 0 24 24" width={21} height={21} fill="none">
          <Path d="M15 5l-7 7 7 7" stroke={INK} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

function Section({
  section,
  index,
  styles: s,
  boundary,
}: {
  section: NoteSection;
  index: number;
  styles: ReturnType<typeof createStyles>;
  boundary: boolean;
}) {
  /** Measured, so the wavy line ends where the heading does rather than
   *  underlining half of a long one and overshooting a short one. */
  const [headWidth, setHeadWidth] = useState(0);
  const colour = section.kind === 'rework' ? RED : PENS[index % PENS.length];

  /** QUICK REVISION is a box, not a run of lines — it is the one section a
   *  student draws a border round. */
  if (section.kind === 'revision') {
    return (
      <Boxed color={AMBER} seed={index + 9} style={s.keyBox}>
        <View style={s.keyHead}>
          <Bulb color={AMBER} />
          <Text style={s.keyTitle}>{section.title}</Text>
        </View>
        {section.lines.map((l, i) => (
          <View key={i} style={s.bulletRow}>
            <Text style={s.tick}>✓</Text>
            <Text style={s.bulletText}>{l.t}</Text>
          </View>
        ))}
      </Boxed>
    );
  }

  return (
    <View style={s.section}>
      {/* Where the class stopped, drawn across the page — what a student does
          when the lesson ends mid-topic. Otherwise the dashes that separate
          one section from the next. */}
      {boundary ? <Rule /> : index > 0 ? <View style={s.dashed} /> : null}

      <View style={s.headRow}>
        {/* One mark beside the heading, not one per line: the server writes a
            mistake as four lines, and flagging each filed four marks against
            a single mistake. */}
        {section.kind === 'rework' ? <Text style={s.flag}>!</Text> : <Asterisk color={colour} />}
        <Text
          style={[s.heading, { color: colour }]}
          onLayout={(e) => setHeadWidth(e.nativeEvent.layout.width)}>
          {section.n !== null ? `${section.n}. ` : ''}
          {section.title}
        </Text>
      </View>
      <View style={s.headUnderline}>
        <Underline width={Math.min(headWidth, 260)} color={colour} seed={index + 5} />
      </View>

      {boundary && <Text style={s.aside}>the class ended before this — to finish on your own</Text>}

      {section.lines.map((line, i) => (
        <Line key={i} line={line} index={i} colour={colour} styles={s} />
      ))}
    </View>
  );
}

function Line({
  line,
  index,
  colour,
  styles: s,
}: {
  line: NoteLine;
  index: number;
  colour: string;
  styles: ReturnType<typeof createStyles>;
}) {
  /** A hand does not start every line on the same pixel. */
  const nudge = { transform: [{ translateX: n(index, 3, 1.2) }] };

  if (line.k === 'formula') {
    return (
      <Boxed color={VIOLET} seed={index + 3} style={[s.formulaBox, nudge]}>
        <Text style={s.formulaText}>{line.t}</Text>
      </Boxed>
    );
  }
  if (line.k === 'sub') {
    return <Text style={[s.sub, nudge]}>{line.t}</Text>;
  }
  if (line.k === 'bullet') {
    return (
      <View style={[s.bulletRow, nudge]}>
        <Svg width={9} height={LH}>
          <Circle cx={4} cy={LH / 2} r={2} fill={colour} />
        </Svg>
        <Text style={s.bulletText}>{line.t}</Text>
      </View>
    );
  }
  return <Text style={[s.bodyLine, nudge]}>{line.t}</Text>;
}

const styles = StyleSheet.create({
  classRule: { marginTop: 14, marginBottom: 6, opacity: 0.5 },
});

function createStyles() {
  return StyleSheet.create({
    /**
     * THE PAPER IS THE SCREEN. Not a card inset on a ground: a note is the
     * surface you came to read, and a border would write every line of it in
     * a column narrower than the phone.
     */
    screen: { flex: 1, backgroundColor: PAPER },
    scroll: { flex: 1 },
    scrollInner: { paddingBottom: 56 },
    page: { flex: 1, backgroundColor: PAPER },
    rule: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: RULE },
    /** A page under a light is never evenly lit. */
    sheen: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '60%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.35)',
      opacity: 0.5,
    },
    body: { paddingHorizontal: 24, paddingBottom: 30 },

    topCover: { position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: 'transparent' },
    back: { position: 'absolute', left: 18, padding: 6 },

    /** The page's own name, in the red pen, at the same weight as everything
     *  else — the colour and the double line under it are the emphasis. */
    title: { fontFamily: HAND, fontSize: 22, lineHeight: 29, color: RED, letterSpacing: 0.2 },
    subject: { fontFamily: HAND, fontSize: 13.5, lineHeight: LH, color: QUIET, marginTop: 2 },

    section: { marginTop: 18 },
    dashed: {
      borderTopWidth: 1,
      borderStyle: 'dashed',
      borderColor: 'rgba(42,53,80,0.22)',
      marginBottom: 16,
    },
    headRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },
    heading: { flex: 1, fontFamily: HAND, fontSize: 16.5, lineHeight: 24 },
    headUnderline: { marginLeft: 20, marginTop: -2, marginBottom: 2 },
    flag: { fontFamily: HAND, fontSize: 17, lineHeight: 24, color: RED },
    aside: { fontFamily: HAND, fontSize: 12.5, lineHeight: 20, color: QUIET, marginBottom: 6 },

    bodyLine: { fontFamily: HAND, fontSize: 15, lineHeight: LH, color: INK },
    sub: {
      fontFamily: HAND,
      fontSize: 15,
      lineHeight: LH,
      color: INK,
      textDecorationLine: 'underline',
    },
    bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 7 },
    bulletText: { flex: 1, fontFamily: HAND, fontSize: 15, lineHeight: LH, color: INK },
    tick: { fontFamily: HAND, fontSize: 13, lineHeight: LH, color: GREEN },

    formulaBox: {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      marginVertical: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    formulaText: { fontFamily: HAND, fontSize: 16, lineHeight: 24, color: INK },

    keyBox: { marginTop: 22, paddingVertical: 12, paddingHorizontal: 16, gap: 2 },
    keyHead: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
    keyTitle: { fontFamily: HAND, fontSize: 15.5, lineHeight: 24, color: AMBER },
  });
}

export function NotePageSkeleton({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const s = useMemo(() => createStyles(), []);
  const bones = useMemo(() => createSkeletonStyles(), []);

  return (
    <View style={s.screen}>
      <View style={[s.body, { paddingTop: insets.top + 38 }]}>
        <Skeleton style={bones.title} />
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={bones.section}>
            <Skeleton delay={stagger(i, 120)} style={bones.heading} />
            <SkeletonParagraph
              lines={i === 3 ? 2 : 3}
              lineHeight={13}
              gap={9}
              delay={stagger(i, 120) + 50}
              widths={['96%', '99%', '61%']}
            />
          </View>
        ))}
      </View>

      <Pressable
        style={[s.back, { top: insets.top + 4 }]}
        onPress={onBack}
        hitSlop={16}
        accessibilityLabel="Back">
        <Svg viewBox="0 0 24 24" width={21} height={21} fill="none">
          <Path d="M15 5l-7 7 7 7" stroke={INK} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

function createSkeletonStyles() {
  return StyleSheet.create({
    /** Each block sits where its real counterpart will, so nothing jumps when
     *  the words arrive. */
    title: { width: '82%', height: 20, borderRadius: 4, marginBottom: 12 },
    section: { marginTop: 20 },
    heading: { width: '58%', height: 14, borderRadius: 4, marginBottom: 10 },
  });
}
