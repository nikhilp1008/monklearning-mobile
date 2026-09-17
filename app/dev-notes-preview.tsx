import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

/**
 * A SAVED CLASS AS A PAGE SOMEBODY WROTE. Preview only, not wired to data.
 *
 * Built against the reference screenshots — 8.2 Stress and Strain — and on the
 * same topic on purpose, so the two can be held side by side rather than
 * described at each other.
 *
 * THE FIRST ATTEMPT WAS A STYLED LIST, and the note on it was right: it looked
 * arranged to resemble handwriting rather than written. What separates the two
 * is not the typeface, it is everything around it —
 *
 *   NUMBERED SECTIONS in red, the way a student numbers as they go, instead of
 *   one heading and a run of dashes.
 *
 *   TERMS UNDERLINED WHERE THEY ARE DEFINED. A pen cannot embolden anything, so
 *   a real note marks its definitions with a line under them. That one habit
 *   does more work than the font does.
 *
 *   FORMULAS INDENTED ON THEIR OWN LINE, not boxed. Nobody draws a box round
 *   every formula; they step it in from the margin and leave air round it. The
 *   annotation goes to the right, in red, in brackets.
 *
 *   A KEY POINTS BOX ruled in blue, BESIDE the first section rather than after
 *   it — real notes put the summary where there is room, which is the top
 *   right. (There is no float in React Native, so the section and the box are a
 *   two-column row. Same result, different mechanism.)
 *
 *   TABLES WITH RULED COLUMNS. A table is the most obviously WRITTEN thing on a
 *   page of notes, and the first attempt had none.
 *
 *   THREE INKS doing three jobs: red for structure — numbers, headings, labels,
 *   annotations — dark for content, blue for the summary box. That is how a
 *   school note actually looks, and it is most of why a page reads as written
 *   rather than as typeset in one colour.
 *
 * THE HAND IS PATRICK HAND, picked by rendering eight candidates against the
 * reference's own sentence — upright, tight and neat, where Kalam slanted. It
 * has one weight, so nothing on this page is bold; headings are bigger, red, or
 * underlined instead, which is all a pen can do.
 *
 * ONE THING THE REFERENCE QUIETLY GETS RIGHT: it spells Greek out — "Y = sigma
 * / epsilon", "p = h x rho x g", "(sigma y)". No handwriting face on Google
 * Fonts carries a Greek block (Kalam has none, and neither does Onest), so a
 * note that writes σ gets a printed σ dropped into a handwritten line. Writing
 * the word is not a workaround; it is what a student does anyway.
 */

/**
 * ONE HAND, ONE WEIGHT. Patrick Hand ships 400 and nothing else, and that turns
 * out to be right rather than limiting: a pen cannot embolden anything either.
 * A heading here is bigger, or red, or underlined — never heavier. `PEN_BOLD`
 * is kept as a separate name only so the places that WANT emphasis stay marked,
 * and so a face with real weights could be dropped in later.
 */
const PEN = 'PatrickHand_400Regular';
const PEN_BOLD = 'PatrickHand_400Regular';

/** Red pen: section numbers, headings, labels, the notes in brackets. */
const RED = '#C0392B';
/** The everyday ink. Not black — a ballpoint on white paper is blue-black, and
 *  pure black is the fastest way to make a page look typeset. */
const INK = '#2A3550';
/** The second pen, for the summary box only. */
const BLUE = '#3A5A8C';
const PAPER = '#FFFFFF';
/** Faint enough to read as paper rather than as a table. */
const RULE = 'rgba(42,53,80,0.055)';
/** The desk the page lies on. Warm rather than the reference's neutral grey, to
 *  stay inside the app's own ground. */
const GROUND = '#F4EFE3';

/** The ruled rhythm, and every body line's line-height. */
const LH = 22;

export default function DevNotesPreviewScreen() {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <SafeAreaView edges={['top']} style={styles.chromeSafe}>
        <View style={styles.chrome}>
          <Pressable onPress={() => router.back()} hitSlop={12}>
            <Text style={styles.back}>Close</Text>
          </Pressable>
          <Text style={styles.chromeTitle}>8.2 · written</Text>
          <View style={{ width: 44 }} />
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollInner}
        showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.rules} pointerEvents="none">
            {Array.from({ length: 120 }).map((_, i) => (
              <View key={i} style={[styles.rule, { top: (i + 1) * LH }]} />
            ))}
          </View>

          <View style={styles.body}>
            {/* The page's title: number, then the topic in caps, with the
                squiggle a hand draws rather than the line a ruler draws. */}
            <View style={styles.titleRow}>
              <Text style={styles.titleNum}>8.2</Text>
              <View>
                <Text style={styles.title}>STRESS AND STRAIN</Text>
                <Squiggle width={196} />
              </View>
            </View>

            {/* Section 1 shares its line with the summary box, which is where a
                real note puts it, because that is where the room is. */}
            <Text style={styles.section}>1. Stress</Text>
            <View style={styles.split}>
              <View style={styles.splitMain}>
                <Text style={styles.p}>
                  When a body is subjected to a deforming force, a restoring force develops
                  (equal in magnitude, opposite in direction to the applied force).
                </Text>
                <Text style={styles.p}>
                  <Text style={styles.term}>Stress</Text> — restoring force per unit area :
                </Text>
                <Text style={styles.formula}>Stress = F / A</Text>
                <Bullet>SI unit : N m⁻² or pascal (Pa)</Bullet>
                <Bullet>Dimensional formula : [ML⁻¹T⁻²]</Bullet>
              </View>

              <View style={styles.keyBox}>
                <Text style={styles.keyTitle}>Key Points</Text>
                <View style={styles.keyRule} />
                {[
                  'Stress = F/A (unit: Pa)',
                  'Longitudinal strain = delta L/L',
                  'Shearing strain = tan theta',
                  'Volume strain = delta V/V',
                  'Strain is dimensionless',
                ].map((t) => (
                  <View key={t} style={styles.keyRow}>
                    <Text style={styles.keyDot}>•</Text>
                    <Text style={styles.keyText}>{t}</Text>
                  </View>
                ))}
              </View>
            </View>

            <Text style={styles.section}>2. Types of Stress</Text>
            <Table
              styles={styles}
              head={['Type', 'Description']}
              widths={[0.36, 0.64]}
              rows={[
                [
                  'Tensile stress',
                  'Restoring force/area when body is stretched by forces normal to cross-section',
                ],
                ['Compressive stress', 'Restoring force/area when body is compressed'],
                [
                  'Shearing stress',
                  'Restoring force/area due to tangential force — relative displacement between opposite faces',
                ],
                [
                  'Hydraulic stress',
                  'Internal restoring force/area under fluid pressure — magnitude equals the hydraulic pressure',
                ],
              ]}
            />
            <Text style={styles.pTight}>
              Tensile or compressive stress is also called longitudinal stress.
            </Text>

            <Text style={styles.section}>3. Types of Strain</Text>
            <Text style={styles.p}>
              <Text style={styles.term}>Strain</Text> = ratio of change in dimension to
              original dimension — no units, no dimensional formula.
            </Text>
            {/* The note written beside a formula, in red, in brackets. This is
                the habit that makes a formula line read as something a person
                annotated rather than a row in a layout. */}
            <Annotated
              styles={styles}
              left="Longitudinal strain = delta L / L"
              right="(change in length / original length)"
            />
            <Annotated
              styles={styles}
              left="Shearing strain = delta x / L = tan theta"
              right="(for small theta)"
            />
            <Text style={styles.pTight}>
              theta = angular displacement from the vertical; at 10° the difference between
              theta and tan theta is only 1%.
            </Text>
            <Annotated
              styles={styles}
              left="Volume strain = delta V / V"
              right="(change in volume / original volume)"
            />

            <Text style={styles.section}>4. Hydraulic Compression</Text>
            <Bullet>Solid sphere in fluid under high pressure → compressed uniformly on all sides</Bullet>
            <Bullet>Volume decreases, but no change in geometrical shape</Bullet>
            <Bullet>
              Body develops internal restoring forces equal and opposite to the fluid’s →
              regains its original shape and size when taken out
            </Bullet>

            <Text style={styles.section}>5. Worked Example</Text>
            <Work
              styles={styles}
              label="Steel rod"
              t="radius = 10 mm, L = 1.0 m, F = 100 kN, Y = 2.0 x 10¹¹ N m⁻²"
            />
            <Work
              styles={styles}
              label="Stress"
              t="F/A = F/(pi r²) = (100 x 10³)/(3.14 x (10⁻²)²) = 3.18 x 10⁸ N m⁻²"
            />
            <Work
              styles={styles}
              label="Elongation"
              t="delta L = (F/A) x L / Y = (3.18 x 10⁸ x 1)/(2 x 10¹¹) = 1.59 x 10⁻³ m = 1.59 mm"
            />
            <Work styles={styles} label="Strain" t="delta L/L = 1.59 x 10⁻³ = 0.16%" />
          </View>

          {/* The sheen. A page photographed under a light is never evenly lit,
              and this one gradient-shaped panel is much of why the page reads
              as a photograph of paper rather than as a white rectangle. */}
          <View style={styles.sheen} pointerEvents="none" />
        </View>

        <Text style={styles.disclaimer}>
          Patrick Hand. One weight, so nothing here is bold — a heading is bigger, red or
          underlined instead, which is all a pen can do. Content condensed by hand; the
          server still refuses to shorten a note by more than half.
        </Text>
      </ScrollView>
    </View>
  );
}

/** The wobble under a title. Drawn rather than ruled, because a perfectly
 *  straight line under a handwritten heading is the exact tell this is avoiding. */
function Squiggle({ width }: { width: number }) {
  const step = 7;
  let d = 'M0 4';
  for (let x = 0; x < width; x += step * 2) {
    d += ` Q ${x + step / 2} 0, ${x + step} 4 Q ${x + step * 1.5} 8, ${x + step * 2} 4`;
  }
  return (
    <Svg width={width} height={9} style={{ marginTop: 1 }}>
      <Path d={d} stroke={RED} strokeWidth={1.4} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={bulletStyles.row}>
      <Text style={bulletStyles.dot}>•</Text>
      <Text style={bulletStyles.text}>{children}</Text>
    </View>
  );
}

const bulletStyles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, paddingLeft: 10 },
  dot: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },
  text: { flex: 1, fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },
});

/** A formula with a note written beside it. */
function Annotated({
  styles,
  left,
  right,
}: {
  styles: ReturnType<typeof createStyles>;
  left: string;
  right: string;
}) {
  return (
    <View style={styles.annotRow}>
      <Text style={styles.annotLeft}>{left}</Text>
      <Text style={styles.annotRight}>{right}</Text>
    </View>
  );
}

/** A worked-example line: the step named in red and underlined, then the sum. */
function Work({
  styles,
  label,
  t,
}: {
  styles: ReturnType<typeof createStyles>;
  label: string;
  t: string;
}) {
  return (
    <View style={styles.workRow}>
      <Text style={styles.workLabel}>{label}</Text>
      <Text style={styles.workColon}> : </Text>
      <Text style={styles.workText}>{t}</Text>
    </View>
  );
}

/** Ruled columns, drawn. There is no table to lean on, so the rules are views. */
function Table({
  styles,
  head,
  rows,
  widths,
}: {
  styles: ReturnType<typeof createStyles>;
  head: string[];
  rows: string[][];
  widths: number[];
}) {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {head.map((h, i) => (
          <View key={h} style={[styles.cell, { flex: widths[i] }, i > 0 && styles.cellDivided]}>
            <Text style={styles.tableHead}>{h}</Text>
            <View style={styles.tableHeadRule} />
          </View>
        ))}
      </View>
      {rows.map((r, ri) => (
        <View key={ri} style={[styles.tableRow, styles.tableRowRuled]}>
          {r.map((c, i) => (
            <View key={i} style={[styles.cell, { flex: widths[i] }, i > 0 && styles.cellDivided]}>
              <Text style={styles.tableCell}>{c}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: GROUND },
    chromeSafe: { backgroundColor: GROUND },
    chrome: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 10,
    },
    back: { fontFamily: 'Onest_600SemiBold', fontSize: 15, color: '#57534B', width: 44 },
    chromeTitle: { fontFamily: 'Onest_700Bold', fontSize: 15, color: '#1C1A16' },

    scroll: { flex: 1 },
    scrollInner: { paddingHorizontal: 12, paddingBottom: 36 },
    /** A page with its own corners and edge — the reference's own shape, and
     *  the reason it reads as a photograph of something kept. */
    page: {
      backgroundColor: PAPER,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: [
        { offsetX: 0, offsetY: 6, blurRadius: 18, spreadDistance: -8, color: 'rgba(42,53,80,0.18)' },
      ],
    },
    rules: { ...StyleSheet.absoluteFillObject },
    rule: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: RULE },
    sheen: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '55%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.07)',
      transform: [{ rotate: '8deg' }, { translateX: 46 }],
    },
    body: { paddingHorizontal: 18, paddingTop: 18, paddingBottom: 26 },

    titleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 4 },
    titleNum: { fontFamily: PEN_BOLD, fontSize: 17, lineHeight: 22, color: RED },
    title: { fontFamily: PEN_BOLD, fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: RED },

    /** Numbered, in red, and NOT in caps — the page title is the only thing on
     *  here allowed to shout. */
    section: {
      marginTop: 15,
      marginBottom: 1,
      fontFamily: PEN_BOLD,
      fontSize: 14.5,
      lineHeight: LH,
      color: RED,
    },

    split: { flexDirection: 'row', gap: 12 },
    splitMain: { flex: 1 },

    p: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },
    pTight: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK, marginTop: 2 },
    /** Underlined where it is defined. A pen has no bold. */
    term: { textDecorationLine: 'underline' },
    formula: {
      fontFamily: PEN,
      fontSize: 13.5,
      lineHeight: LH,
      color: INK,
      paddingLeft: 26,
    },

    /** The summary, ruled in the second pen, beside the first section. */
    keyBox: {
      width: '46%',
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: BLUE,
      paddingHorizontal: 9,
      paddingTop: 4,
      paddingBottom: 7,
      backgroundColor: PAPER,
    },
    keyTitle: {
      fontFamily: PEN_BOLD,
      fontSize: 12.5,
      lineHeight: 19,
      color: BLUE,
      textAlign: 'center',
    },
    keyRule: {
      height: 1,
      width: 62,
      alignSelf: 'center',
      marginBottom: 3,
      backgroundColor: BLUE,
      opacity: 0.6,
    },
    keyRow: { flexDirection: 'row', gap: 5 },
    keyDot: { fontFamily: PEN, fontSize: 11, lineHeight: 18, color: INK },
    keyText: { flex: 1, fontFamily: PEN, fontSize: 11.5, lineHeight: 18, color: INK },

    annotRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, paddingLeft: 26 },
    annotLeft: { fontFamily: PEN, fontSize: 13.5, lineHeight: LH, color: INK },
    annotRight: {
      flex: 1,
      fontFamily: PEN,
      fontSize: 11.5,
      lineHeight: LH,
      color: RED,
      textAlign: 'right',
    },

    table: { marginTop: 3 },
    tableRow: { flexDirection: 'row' },
    tableRowRuled: { borderTopWidth: 1, borderTopColor: 'rgba(42,53,80,0.16)' },
    cell: { paddingVertical: 3, paddingHorizontal: 7 },
    cellDivided: { borderLeftWidth: 1, borderLeftColor: 'rgba(42,53,80,0.16)' },
    tableHead: { fontFamily: PEN_BOLD, fontSize: 12.5, lineHeight: 20, color: RED },
    tableHeadRule: {
      height: 1,
      width: 44,
      alignSelf: 'flex-start',
      backgroundColor: RED,
      opacity: 0.55,
    },
    tableCell: { fontFamily: PEN, fontSize: 12, lineHeight: 19, color: INK },

    workRow: { flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10 },
    workLabel: {
      fontFamily: PEN,
      fontSize: 13,
      lineHeight: LH,
      color: RED,
      textDecorationLine: 'underline',
    },
    workColon: { fontFamily: PEN, fontSize: 13, lineHeight: LH, color: RED },
    workText: { flex: 1, fontFamily: PEN, fontSize: 13, lineHeight: LH, color: INK },

    disclaimer: {
      marginTop: 12,
      paddingHorizontal: 6,
      fontFamily: 'Onest_400Regular',
      fontSize: 11.5,
      lineHeight: 11.5 * 1.45,
      color: '#9C988C',
    },
  });
}
