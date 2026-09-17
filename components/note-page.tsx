import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Skeleton, SkeletonParagraph, stagger } from '@/components/skeleton';
import { type NoteLine, type NoteSection } from '@/lib/note-page-model';

/**
 * A SAVED CLASS, AS A PAGE SOMEBODY WROTE. The real one, not the mock.
 *
 * Same treatment the preview arrived at, driven by the server's own structured
 * note instead of hand-authored content — so what a student sees is whatever
 * their class actually produced. The design survives that in most places and
 * not in all of them, which is worth stating rather than hiding:
 *
 *   THERE ARE NO TABLES, because the note's text contract has no way to say
 *   "table". The reference's ruled columns came from content authored as a
 *   table; a class transcript reorganised into headings and bullets cannot
 *   become one without inventing the columns.
 *
 *   THERE ARE NO DIAGRAMS, for the same reason and more sharply: a sketch is a
 *   component keyed by name, and nothing in a note names one. The drawing kit
 *   is built and waiting on a field that says which figure belongs here.
 *
 * What the real content DOES carry maps cleanly: headings become the red
 * numbered sections, bullets and formulas their own lines, and QUICK REVISION —
 * which the server already writes as the three to six most exam-relevant points
 * — becomes the blue box. That box is the part that most makes a page look
 * revised rather than transcribed, and it was already in the payload.
 */

const PEN = 'PatrickHand_400Regular';
/** Red pen: section numbers, headings, flags. */
const RED = '#C0392B';
/** The everyday ink — blue-black, as a ballpoint is. Never pure black. */
const INK = '#2A3550';
/** The second pen, for the summary box. */
const BLUE = '#3A5A8C';
const PAPER = '#FFFFFF';
const RULE = 'rgba(42,53,80,0.055)';
const QUIET = '#8A8577';

const LH = 22;

export function NotePage({
  title,
  subject,
  savedAt,
  sections,
  onBack,
  emptyNote,
}: {
  title: string;
  subject?: string | null;
  /** Written at the top right, the way a page gets dated. */
  savedAt?: string | null;
  sections: NoteSection[];
  onBack: () => void;
  emptyNote: string;
}) {
  /**
   * The paper runs under the status bar — paper behind a notch is right, and a
   * white band above it would put the card back. Only the WRITING is inset.
   */
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);
  /** The squiggle runs the width of the title it sits under, so it has to wait
   *  for the title to be laid out — a fixed width underlines half a long topic
   *  and overshoots a short one. */
  const [titleWidth, setTitleWidth] = useState(0);
  const firstSelfStudy = sections.findIndex((s) => s.kind === 'selfstudy');

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollInner}
        showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.rules} pointerEvents="none">
            {Array.from({ length: 260 }).map((_, i) => (
              <View key={i} style={[styles.rule, { top: (i + 1) * LH }]} />
            ))}
          </View>

          <View style={[styles.body, { paddingTop: insets.top + 34 }]}>
            {!!savedAt && <Text style={styles.date}>{savedAt}</Text>}
            {/* MEASURED FROM THE TEXT'S OWN LINES, not from its box.
                `onLayout` reports the container — a `Text` stretches to fill
                it, and wrapping it in a shrink-to-fit view did not help either
                — so the squiggle ran the whole column whatever the title said.
                `onTextLayout` hands back the laid-out lines, and the widest of
                them is the width of the writing. */}
            <Text
              style={styles.title}
              onTextLayout={(e) => {
                const w = Math.max(0, ...e.nativeEvent.lines.map((l) => l.width));
                setTitleWidth(Math.round(w));
              }}>
              {title}
            </Text>
            {titleWidth > 0 && <Squiggle width={titleWidth} />}
            {!!subject && <Text style={styles.subject}>{subject}</Text>}

            {sections.length === 0 ? (
              <Text style={styles.body0}>{emptyNote}</Text>
            ) : (
              sections.map((s, i) => (
                <Section
                  key={i}
                  section={s}
                  /* The rule goes at the BOUNDARY, so only the first self-study
                     section draws it. Per-section it would be drawn again
                     before every remaining topic — a page ruled off four
                     times over. */
                  boundary={s.kind === 'selfstudy' && i === firstSelfStudy}
                  styles={styles}
                />
              ))
            )}
          </View>

          {/* A photographed page is never evenly lit, and this is the whole of
              why it reads as paper rather than as a white rectangle. */}
          <View style={styles.sheen} pointerEvents="none" />
        </View>
      </ScrollView>

      {/*
        THE COST OF A FULL-BLEED PAGE, PAID PROPERLY.
        With the paper running under the status bar, scrolled writing ran under
        it too — the clock sitting on top of a formula, a line half behind the
        notch, and then the pinned arrow colliding with whatever slid past it.
        So the top of the page fades out into paper.
        A FADE RATHER THAN A BAND, for two reasons: a hard edge cuts a line of
        writing in half, and an opaque band has no ruled lines in it, which
        leaves a visible seam where the ruling stops. Solid where the arrow is,
        gone by the time the writing starts.
      */}
      <LinearGradient
        colors={[PAPER, PAPER, 'rgba(255,255,255,0)']}
        locations={[0, 0.62, 1]}
        style={[styles.topCover, { height: insets.top + 42 }]}
        pointerEvents="none"
      />

      {/* And the way out stays where it is. On the paper it scrolled away with
          the title, so leaving a long note meant scrolling back to the top of
          it first. */}
      <Pressable
        style={[styles.back, { top: insets.top + 4 }]}
        onPress={onBack}
        hitSlop={16}
        accessibilityLabel="Back">
        <Svg viewBox="0 0 24 24" width={21} height={21} fill="none">
          <Path
            d="M15 5l-7 7 7 7"
            stroke={INK}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>
    </View>
  );
}

function Section({
  section,
  boundary,
  styles,
}: {
  section: NoteSection;
  /** Whether this is where the class stopped, and so draws the rule. */
  boundary: boolean;
  styles: ReturnType<typeof createStyles>;
}) {
  /** QUICK REVISION is a box, not a run of lines — it is the one section a
   *  student draws a border round. */
  if (section.kind === 'revision') {
    return (
      <View style={styles.keyBox}>
        <Text style={styles.keyTitle}>{section.title}</Text>
        <View style={styles.keyRule} />
        {section.lines.map((l, i) => (
          <View key={i} style={styles.keyRow}>
            <Text style={styles.keyDot}>•</Text>
            <Text style={styles.keyText}>{l.t}</Text>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View>
      {/* Where the class stopped. Drawn across the page, because that is what
          a student does when the lesson ends mid-topic. */}
      {boundary && <Rule />}

      {/* One mark beside the heading, not one per line. The server writes a
          mistake as four lines — the checkpoint, what was asked, what the
          student said, what the teacher said back — and flagging each of them
          filed four marks against a single mistake. A student puts one big
          mark in the margin beside the whole block. */}
      <View style={styles.sectionRow}>
        {section.kind === 'rework' && <Text style={styles.flagBig}>!</Text>}
        <Text style={[styles.section, section.kind === 'rework' && styles.sectionRework]}>
          {section.n !== null ? `${section.n}. ` : ''}
          {section.title}
        </Text>
      </View>

      {boundary && (
        <Text style={styles.aside}>the class ended before this — to finish on your own</Text>
      )}

      {section.lines.map((l, i) => (
        <Line key={i} line={l} styles={styles} />
      ))}
    </View>
  );
}

function Line({
  line,
  styles,
}: {
  line: NoteLine;
  styles: ReturnType<typeof createStyles>;
}) {
  if (line.k === 'formula') {
    return <Text style={styles.formula}>{line.t}</Text>;
  }
  if (line.k === 'sub') {
    return (
      <Text style={styles.sub}>
        <Text style={styles.subInk}>{line.t}</Text>
      </Text>
    );
  }
  if (line.k === 'bullet') {
    return (
      <View style={styles.bulletRow}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.bulletText}>{line.t}</Text>
      </View>
    );
  }
  return <Text style={styles.body0}>{line.t}</Text>;
}

/** The wobble under the page's title. Drawn, because a ruled line under a
 *  handwritten heading is the exact tell this is avoiding. */
function Squiggle({ width }: { width: number }) {
  const step = 7;
  let d = 'M0 4';
  for (let x = 0; x < width; x += step * 2) {
    d += ` Q ${x + step / 2} 0, ${x + step} 4 Q ${x + step * 1.5} 8, ${x + step * 2} 4`;
  }
  return (
    <Svg width={width} height={9} style={{ marginTop: 1, marginBottom: 2 }}>
      <Path d={d} stroke={RED} strokeWidth={1.4} fill="none" strokeLinecap="round" />
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
    <Svg width={w} height={10} style={{ marginTop: 14, marginBottom: 6, opacity: 0.5 }}>
      <Path d={d} stroke={INK} strokeWidth={1.1} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function createStyles() {
  return StyleSheet.create({
    /**
     * THE PAPER IS THE SCREEN.
     *
     * It was a rounded card inset 12 either side on a warm ground, which read
     * as a page lying on a desk — pleasant, and wrong for the only thing on the
     * screen. A note is not an item in a list of notes; it is the surface you
     * came to read, and giving it a border means every line of it is written in
     * a column narrower than the phone. Full width, and the page's own padding
     * is the margin.
     */
    screen: { flex: 1, backgroundColor: PAPER },
    scroll: { flex: 1 },
    scrollInner: { paddingBottom: 56 },
    page: { flex: 1, backgroundColor: PAPER },
    rules: { ...StyleSheet.absoluteFillObject },
    rule: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: RULE },
    /** A page under a light is never evenly lit. Fainter now that it covers the
     *  whole screen rather than a card. */
    sheen: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '60%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.05)',
      transform: [{ rotate: '8deg' }, { translateX: 60 }],
    },
    /** 22 rather than 18: at full width the text needs a real margin or it
     *  runs to the bezel, and a wider measure wants more air beside it. */
    body: { paddingHorizontal: 22, paddingBottom: 30 },

    topCover: { position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: PAPER },
    /** A chevron on the paper, with no bar under it. */
    back: { position: 'absolute', left: 18, padding: 6 },

    date: { fontFamily: PEN, fontSize: 12, lineHeight: LH, color: RED, textAlign: 'right' },
    title: {
      fontFamily: PEN,
      fontSize: 19,
      lineHeight: 25,
      letterSpacing: 0.4,
      color: RED,
    },
    /** The chapter this topic came from, under the title where a page names
     *  itself — not in a bar above the page. */
    subject: {
      marginTop: 1,
      fontFamily: PEN,
      fontSize: 12,
      lineHeight: LH,
      color: QUIET,
    },

    section: {
      marginTop: 18,
      marginBottom: 1,
      fontFamily: PEN,
      fontSize: 14.5,
      lineHeight: LH,
      color: RED,
    },
    sectionRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 7 },
    /** What to rework is the one heading that is not a step in the lesson, so
     *  it is marked rather than numbered. */
    sectionRework: { marginTop: 18 },
    /** The mark in the margin, beside the whole block. */
    flagBig: { marginTop: 18, fontFamily: PEN, fontSize: 18, lineHeight: LH, color: RED },
    aside: { fontFamily: PEN, fontSize: 11.5, lineHeight: 18, color: QUIET, marginBottom: 3 },

    body0: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },
    /** Underlined, because a pen has no bold. */
    sub: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK, marginTop: 3 },
    subInk: { textDecorationLine: 'underline' },
    formula: {
      fontFamily: PEN,
      fontSize: 13.5,
      lineHeight: LH,
      color: INK,
      paddingLeft: 26,
    },

    bulletRow: { flexDirection: 'row', gap: 8, paddingLeft: 8 },
    dot: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },
    bulletText: { flex: 1, fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },

    keyBox: {
      marginTop: 16,
      borderWidth: 1,
      borderColor: BLUE,
      paddingHorizontal: 11,
      paddingTop: 5,
      paddingBottom: 8,
      backgroundColor: PAPER,
    },
    keyTitle: {
      fontFamily: PEN,
      fontSize: 13,
      lineHeight: 20,
      color: BLUE,
      textAlign: 'center',
    },
    keyRule: {
      height: 1,
      width: 86,
      alignSelf: 'center',
      marginBottom: 4,
      backgroundColor: BLUE,
      opacity: 0.6,
    },
    keyRow: { flexDirection: 'row', gap: 6 },
    keyDot: { fontFamily: PEN, fontSize: 11, lineHeight: 19, color: INK },
    keyText: { flex: 1, fontFamily: PEN, fontSize: 12.5, lineHeight: 19, color: INK },
  });
}

/**
 * THE PAGE WHILE IT IS STILL COMING.
 *
 * It used the old design's skeleton — a bar, a centred topic, a row of jump
 * chips — none of which the written page has, so the wait looked like a
 * different screen that then became this one. A placeholder's whole job is to
 * be the page with the words missing.
 *
 * So it is the same paper, the same ruling, the same red title with its
 * squiggle already drawn under it, and the same margins. What is missing is
 * only the writing. The squiggle and the rules are NOT dimmed with the rest,
 * because they are things the page has before anything is written on it — a
 * ruled sheet with a line drawn under a heading is exactly what a student's
 * page looks like a second before they start.
 *
 * FOUR SECTIONS, SHORTENING. A real note runs long, and a placeholder that
 * shows two even blocks reads as a short document; staggering the lines and
 * tapering the last one says "there is more of this" without claiming a length.
 */
export function NotePageSkeleton({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);
  const bones = useMemo(() => createSkeletonStyles(), []);

  return (
    <View style={styles.screen}>
      <View style={styles.rules} pointerEvents="none">
        {Array.from({ length: 60 }).map((_, i) => (
          <View key={i} style={[styles.rule, { top: (i + 1) * LH }]} />
        ))}
      </View>

      <View style={[styles.body, { paddingTop: insets.top + 34 }]}>
        <Skeleton style={bones.date} />
        <Skeleton delay={50} style={bones.title} />
        {/* Already drawn, because the paper has it before the writing does. */}
        <Squiggle width={214} />

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

      <LinearGradient
        colors={[PAPER, PAPER, 'rgba(255,255,255,0)']}
        locations={[0, 0.62, 1]}
        style={[styles.topCover, { height: insets.top + 42 }]}
        pointerEvents="none"
      />
      <Pressable
        style={[styles.back, { top: insets.top + 4 }]}
        onPress={onBack}
        hitSlop={16}
        accessibilityLabel="Back">
        <Svg viewBox="0 0 24 24" width={21} height={21} fill="none">
          <Path
            d="M15 5l-7 7 7 7"
            stroke={INK}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>
    </View>
  );
}

function createSkeletonStyles() {
  return StyleSheet.create({
    /** Each block sits where its real counterpart will, so nothing jumps when
     *  the words arrive. */
    /**
     * Sat where the date's BOX starts rather than where its glyphs do, which
     * put it inside the tail of the top fade and left it looking half-erased.
     * The real date is 12pt type on a 22pt line, so its ink sits about six down
     * from the top of the box; the bone matches that and the two now occupy the
     * same space.
     */
    date: {
      width: 46,
      height: 11,
      borderRadius: 3,
      alignSelf: 'flex-end',
      marginTop: 6,
      marginBottom: 5,
    },
    title: { width: '82%', height: 19, borderRadius: 4, marginBottom: 3 },
    section: { marginTop: 20 },
    heading: { width: '58%', height: 14, borderRadius: 4, marginBottom: 10 },
  });
}
