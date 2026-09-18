import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';
import Svg, { Defs, Ellipse, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import {
  Draw,
  Layer,
  Pop,
  Up,
  WaveBars,
  Writes,
  easeSnapIn,
  easeSnapOut,
  local,
  seg,
} from './story-clock';
import { obFont } from '@/constants/onboarding';

/**
 * THE LIVE BOARD — one 16-second loop, four beats, from
 * `design_handoff_onboarding_live_board`.
 *
 * Everything here is in the handoff's own 330 × 340 board space with the
 * origin at its top-left, exactly as the spec tables are written, and scaled
 * to the device on the way out. Keeping the design's numbers literal is the
 * point: every coordinate below can be read straight off the table it came
 * from, and the only arithmetic is the scale function.
 *
 * THE BOARD DOES NOT CLIP, and that is deliberate rather than an oversight.
 * The teaching pill sits at x −16 and the student's question at y 358, both
 * outside a 330 × 340 box — they are meant to overhang the board and sit on
 * the page. Only the two SURFACES clip, because they are what has the 22pt
 * radius. Putting `overflow: hidden` on the group would delete the pill's
 * left edge and the whole bubble.
 *
 * LABELS AND HEADINGS DO NOT WRITE THEMSELVES. Every text element on this
 * board originally arrived with the same left-to-right reveal, and six of them
 * doing it in sequence read as a screen full of moving parts rather than as a
 * lesson being written. The chapter label and the lesson's title are the page
 * the working is written on — a hand does not draw those — so they hold, and
 * only the working writes. Same in beats 3 and 4: the source line and the
 * method hold, the solution writes.
 *
 * ONE SURFACE FADES, THE OTHER STAYS. The dark board is a second surface over
 * the first whose opacity runs on the master clock rather than on a layer, so
 * it comes up once at 8s and holds through beats 3 AND 4. That is the whole
 * reason the story doesn't blink between snapping a question and practising.
 */

/** The handoff's palette. Scoped here for the same reason `ob` is scoped to
 *  onboarding: this is a signed-off design with its own ramp, and the chalk
 *  tones in particular exist nowhere else in the app. */
const c = {
  ink: '#1C1A16',
  inkSoft: '#57534B',
  grey: '#9C988C',
  grey2: '#8C867A',
  amber: '#EEA31F',
  amberDark: '#9A6A12',
  green: '#157A45',
  paper2: '#FFFDF8',
  cream1: '#F4F0E6',
  cream2: '#FAF7EF',
  chalk: '#F5EFE2',
  chalkDim: '#D9D2C3',
  chalkAmber: '#F3C969',
  card: '#2A2621',
  chip: '#5F5A50',
} as const;

export const BOARD_W = 330;
export const BOARD_H = 340;
/**
 * HOW FAR THE BOARD'S CONTENT ACTUALLY REACHES, which is not its height.
 *
 * The student's question is pinned at y 358 on a board that is 340 tall and
 * stands about 60 high, so the group's real extent is 418 — a quarter again
 * as much as the box it is laid out in. The teaching pill (310 + 44) and the
 * ground shadow (330 + 40) hang below the edge too, just less far.
 *
 * This number is why the board cannot simply be centred in whatever is left
 * over. Centre the 340 box and the 78 units underneath it land on the caption
 * — which is exactly what happened: "Interrupt. Ask anything." printed
 * straight through the student's question on a 874pt screen. The design frame
 * is 932 and has the room; shorter phones do not, and there are a lot more of
 * those.
 */
const BOARD_CONTENT_H = 418;
/**
 * THE POSE IS 1, NOT THE DESIGN'S 1.12, AND THAT IS NOT A SHRINK.
 *
 * The design scales the board by 1.12 inside a 430pt frame, which puts it at
 * 330 × 1.12 = 370 across, or 86% of the screen's width. But `ds` — the scale
 * function the whole onboarding flow runs on — divides by 390, not 430,
 * because the flow's EARLIER handoff was transcribed that way. So `ds` is
 * already carrying a factor of 430/390 = 1.10 before anything else happens,
 * and the design's 1.12 was landing on top of it.
 *
 * Compounded, the board came out at 330 × (W/390) × 1.12 = 94.8% of the
 * screen. It crowded the logo above it, pushed its own overhang into the
 * caption below, and read as a board that did not fit the phone — which is
 * exactly what it was.
 *
 * At 1, the width works out to 330/390 = 84.6% of the screen against the
 * design's 86%. So 1 is the design's size, and 1.12 was the double count.
 *
 * AND THEN 0.87 ON TOP, which is a judgement rather than arithmetic. At the
 * design's own size the board still filled the page edge to edge and read as
 * something wedged into the screen; taking another 13% off lets it sit on the
 * page with air around it, which is what a floating board is supposed to look
 * like. The design was drawn on a 932pt frame and this is a phone.
 */
const BOARD_SCALE = 0.87;
/** Clear air kept between the board's content and whatever is under it. */
const BOARD_GUTTER = 14;

/**
 * Measured with `getTotalLength()` off the same path data, because
 * react-native-svg does not implement `pathLength`. See `Draw`.
 */
const LEN = { floor: 122.0, cart: 138.273, arrow: 60.844, circle: 99.486, rule: 164.178 };

type S = (n: number) => number;
type F = (n: number) => number;
type T = (em: number, size: number) => number;

export function StoryBoard({
  t,
  float,
  wave,
  ds,
  fs,
  tracking,
  stageHeight,
  tilt = true,
}: {
  t: SharedValue<number>;
  float: SharedValue<number>;
  wave: SharedValue<number>;
  ds: S;
  fs: F;
  tracking: T;
  /** The stage's measured height in device points. 0 until it lays out. */
  stageHeight: number;
  tilt?: boolean;
}) {
  /**
   * FIT THE WHOLE GROUP, NOT THE BOX. The pose is the design's 1.12 wherever
   * there is room for the full 418 units of content, and comes down only where
   * there is not — so a Pro Max gets the design untouched and a smaller phone
   * gets the same composition, slightly smaller, rather than a caption with a
   * speech bubble through it.
   */
  const unit = ds(1);
  const fit =
    stageHeight > 0
      ? Math.min(
          BOARD_SCALE,
          // Fit the content to the stage LESS a gutter top and bottom. Fitting
          // it exactly leaves the student's question touching the caption,
          // which reads as an overlap even when it is not one.
          (stageHeight - 2 * BOARD_GUTTER * unit) / (BOARD_CONTENT_H * unit)
        )
      : BOARD_SCALE;
  /**
   * And then lift it. Scaling happens about the box's centre at y 170, so the
   * content's own centre sits 39·fit below it — centring the box leaves the
   * group hanging low by that much. This is the correction.
   */
  const lift = -39 * fit * unit;
  /**
   * The 7s idle float, `translateY 0 → −8 → 0`, ease-in-out.
   *
   * The travel is resolved to a NUMBER out here. `ds` is an ordinary JS
   * closure and `useAnimatedStyle` runs its body on the UI thread, where a
   * non-worklet function is not callable — calling it there does not degrade,
   * it takes the app down with "Tried to synchronously call a non-worklet
   * function". Every scaled value a worklet below needs is hoisted for the
   * same reason.
   */
  const floatTravel = ds(8);
  const floatStyle = useAnimatedStyle(() => {
    const p = float.value;
    const tri = p < 0.5 ? p / 0.5 : (1 - p) / 0.5;
    // Cosine gives the same shape as CSS ease-in-out across a symmetric
    // keyframe and costs one call instead of two bezier evaluations.
    const eased = (1 - Math.cos(Math.PI * tri)) / 2;
    return { transform: [{ translateY: -floatTravel * eased }] };
  });

  /** The dark surface's own clock — `dark`, not a layer. */
  const darkStyle = useAnimatedStyle(() => {
    const p = t.value;
    return { opacity: seg(p, 0.5, 0.535) * (1 - seg(p, 0.982, 1)) };
  });

  const pose = tilt
    ? [
        { perspective: ds(1100) },
        { translateY: lift },
        { scale: fit },
        { rotateX: '4deg' },
        { rotateY: '-4deg' },
      ]
    : [{ translateY: lift }, { scale: fit }];

  return (
    <View style={{ transform: pose }}>
      <Animated.View style={[{ width: ds(BOARD_W), height: ds(BOARD_H) }, floatStyle]}>
        {/* Ground shadow. The design blurs a flat ellipse by 24px; RN has no
            blur filter, so this is the same ellipse drawn as a radial falloff,
            which is what a 24px blur of a solid shape looks like. */}
        <Svg
          style={{
            position: 'absolute',
            left: ds(30),
            top: ds(330),
            width: ds(BOARD_W - 60),
            height: ds(40),
          }}
          pointerEvents="none">
          <Defs>
            <RadialGradient id="boardGround" cx="0.5" cy="0.5" r="0.5">
              <Stop offset="0" stopColor="#1C1A16" stopOpacity={0.16} />
              <Stop offset="0.55" stopColor="#1C1A16" stopOpacity={0.1} />
              <Stop offset="1" stopColor="#1C1A16" stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#boardGround)" />
        </Svg>

        {/* The light surface. */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            borderRadius: ds(22),
            backgroundColor: '#FFFFFF',
            boxShadow: [
              { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.1)', inset: true },
              { offsetX: 0, offsetY: ds(44), blurRadius: ds(80), spreadDistance: ds(-24), color: 'rgba(28,26,22,.3)' },
              { offsetX: 0, offsetY: ds(14), blurRadius: ds(28), spreadDistance: ds(-14), color: 'rgba(28,26,22,.16)' },
            ],
          }}
        />

        {/* The dark surface, over it, on the master clock. */}
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              borderRadius: ds(22),
              overflow: 'hidden',
              boxShadow: [
                { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(238,163,31,.8)', inset: true },
              ],
            },
            darkStyle,
          ]}
          pointerEvents="none">
          <LinearGradient
            colors={['#2A2621', '#33241A', '#4A2C14', '#5E3012']}
            locations={[0, 0.4, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        <BeatsOneTwo t={t} wave={wave} ds={ds} fs={fs} tracking={tracking} />
        <BeatThree t={t} wave={wave} ds={ds} fs={fs} tracking={tracking} />
        <BeatFour t={t} ds={ds} fs={fs} tracking={tracking} />
      </Animated.View>
    </View>
  );
}

/** A text style straight off the spec's `font: <weight> <size>/<line>` shorthand. */
function type(
  fs: F,
  tracking: T,
  family: string,
  size: number,
  line: number,
  color: string,
  em?: number
) {
  return {
    fontFamily: family,
    fontSize: fs(size),
    lineHeight: fs(line),
    color,
    ...(em ? { letterSpacing: tracking(em, size) } : null),
  };
}

/**
 * The pill that says who is talking. Three of them appear across the loop and
 * only the words and the shadow change, so it is one component.
 *
 * `transformOrigin: 'left center'` matters here: the design pops it out from
 * its left edge, and popping from the centre instead makes a pill that
 * overhangs the board look like it is sliding in from off-screen.
 */
function Pill({
  label,
  wave,
  ds,
  fs,
  tracking,
  shadow,
}: {
  label: string;
  wave: SharedValue<number>;
  ds: S;
  fs: F;
  tracking: T;
  shadow: number;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: ds(10),
        height: ds(44),
        paddingLeft: ds(12),
        paddingRight: ds(16),
        borderRadius: 99,
        backgroundColor: '#FFFFFF',
        boxShadow: [
          { offsetX: 0, offsetY: ds(10), blurRadius: ds(26), color: `rgba(28,26,22,${shadow})` },
          { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.08)', inset: true },
        ],
      }}>
      <WaveBars wave={wave} scale={ds} />
      <Text style={type(fs, tracking, obFont.sb600, 14, 18, c.ink)}>{label}</Text>
    </View>
  );
}

const PILL_POS = { position: 'absolute' as const, transformOrigin: 'left center' as const };

/**
 * BEATS 1 AND 2 — one board, 0 to 8 seconds.
 *
 * Drona writes a lesson, the student interrupts, and the lesson STAYS. The
 * only things that change at the 4s mark are the pill and the arriving
 * bubble; the caption underneath does the rest of the work. That is why this
 * is a single 8-second layer rather than two 4-second ones.
 */
function BeatsOneTwo({
  t,
  wave,
  ds,
  fs,
  tracking,
}: {
  t: SharedValue<number>;
  wave: SharedValue<number>;
  ds: S;
  fs: F;
  tracking: T;
}) {
  return (
    <Layer t={t} delay={0} long style={StyleSheet.absoluteFill}>
      <Writes t={t} delay={0.2} kind="hold2" left={ds(24)} top={ds(18)}
        text="Ch 5 · Laws of Motion · live"
        style={type(fs, tracking, obFont.sb600, 12, 16, c.grey)} />
      <Writes t={t} delay={0.5} kind="hold2" left={ds(24)} top={ds(40)}
        text="Newton's second law"
        style={type(fs, tracking, obFont.sb600, 20, 26, c.ink, -0.01)} />
      <Writes t={t} delay={1} kind="wrf2" left={ds(24)} top={ds(74)}
        text="F = ma"
        style={type(fs, tracking, obFont.xb800, 30, 36, c.ink, -0.02)} />
      <Writes t={t} delay={1.4} kind="wr2" left={ds(24)} top={ds(120)} width={ds(282)}
        text="Push harder and it speeds up faster. Push something heavier and it speeds up less."
        style={type(fs, tracking, obFont.r400, 14, 20, c.inkSoft)} />
      <Writes t={t} delay={2.2} kind="wrf2" left={ds(24)} top={ds(172)}
        text="a = F / m"
        style={type(fs, tracking, obFont.sb600, 17, 22, c.amberDark)} />

      {/* The cart sketch: floor, body with two wheels, then the force arrow. */}
      <Svg
        viewBox="0 0 130 60"
        style={{ position: 'absolute', left: ds(176), top: ds(166), width: ds(130), height: ds(60) }}
        pointerEvents="none">
        <Draw t={t} delay={2} long d="M4 52 H126" length={LEN.floor} stroke={c.ink} strokeWidth={2} />
        <Draw t={t} delay={2.3} long
          d="M36 46 V22 H76 V46 M42 46 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M62 46 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0"
          length={LEN.cart} stroke={c.ink} strokeWidth={2} />
        <Draw t={t} delay={2.4} long d="M82 34 H114 M104 26 L116 34 L104 42"
          length={LEN.arrow} stroke={c.green} strokeWidth={2.4} />
      </Svg>
      <Writes t={t} delay={2.7} kind="wrf2" left={ds(292)} top={ds(160)}
        text="F" style={type(fs, tracking, obFont.sb600, 13, 16, c.green)} />

      {/* Teaching pill — `pop`, so it leaves at ~4.7s as the question lands. */}
      <Pop t={t} delay={0.6} style={{ ...PILL_POS, left: ds(-16), top: ds(310) }}>
        <Pill label="Drona is teaching" wave={wave} ds={ds} fs={fs} tracking={tracking} shadow={0.18} />
      </Pop>

      {/* The student's question, below the board. */}
      <Up t={t} delay={4.05} long travel={ds(46)} style={{ position: 'absolute', left: ds(96), top: ds(358) }}>
        <View
          style={{
            width: ds(234),
            paddingTop: ds(11),
            paddingBottom: ds(11),
            paddingLeft: ds(11),
            paddingRight: ds(14),
            borderTopLeftRadius: ds(18),
            borderTopRightRadius: ds(18),
            borderBottomRightRadius: ds(6),
            borderBottomLeftRadius: ds(18),
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: ds(10),
            boxShadow: [
              { offsetX: 0, offsetY: ds(12), blurRadius: ds(30), color: 'rgba(28,26,22,.2)' },
              { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.08)', inset: true },
            ],
          }}>
          <View
            style={{
              width: ds(26),
              height: ds(26),
              borderRadius: ds(13),
              backgroundColor: c.amber,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Svg viewBox="0 0 16 16" width={ds(13)} height={ds(13)}>
              <Rect x={5.5} y={1.5} width={5} height={8} rx={2.5} fill="none" stroke={c.ink} strokeWidth={1.8} />
              <Path d="M3 7.5a5 5 0 0 0 10 0M8 12.5v2" fill="none" stroke={c.ink} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
          </View>
          <Text style={{ flex: 1, ...type(fs, tracking, obFont.m500, 14, 19, c.ink) }}>
            Sir, if it&apos;s heavier, does it always move slower?
          </Text>
        </View>
      </Up>

      {/* Answering pill — `pop2`, so it holds to the end of the layer. */}
      <Pop t={t} delay={4.7} long style={{ ...PILL_POS, left: ds(-16), top: ds(310) }}>
        <Pill label="Good question." wave={wave} ds={ds} fs={fs} tracking={tracking} shadow={0.18} />
      </Pop>

      {/* The circle round the m in a = F / m. */}
      <Svg
        viewBox="0 0 40 34"
        style={{ position: 'absolute', left: ds(78), top: ds(166), width: ds(40), height: ds(34) }}
        pointerEvents="none">
        <Draw t={t} delay={5.1} long
          d="M20 4 C32 3 38 10 37 17 C36 27 26 31 16 30 C6 29 2 22 4 15 C6 8 12 4 24 4"
          length={LEN.circle} stroke={c.amber} strokeWidth={2.4} />
      </Svg>

      <Writes t={t} delay={5.5} kind="wr2" left={ds(24)} top={ds(224)}
        text="2× the mass → ½ the acceleration"
        style={type(fs, tracking, obFont.m500, 15, 22, c.amberDark)} />
      <Writes t={t} delay={6.2} kind="wrf2" left={ds(24)} top={ds(252)}
        text="heavier isn't slower, it just speeds up slower"
        style={type(fs, tracking, obFont.r400, 14, 20, c.inkSoft)} />
      <Writes t={t} delay={6.6} kind="wrf2" left={ds(24)} top={ds(280)}
        text="a = 10 / 4 = 2.5 m/s²"
        style={type(fs, tracking, obFont.m500, 15, 22, c.inkSoft)} />
    </Layer>
  );
}

/**
 * BEAT 3 — the snap, 8 to 12 seconds, on the dark board.
 *
 * The card flies up from off the bottom, lands, is bracketed and flashed like
 * a photograph, then shrinks into a thumbnail in the top-left corner while the
 * solution is written beside it. The whole of that is one keyframe on the card
 * — `snap` — with a rest in the middle, which is why it reads as a camera
 * rather than as two separate moves.
 */
function SnapCard({
  t,
  ds,
  fs,
  tracking,
}: {
  t: SharedValue<number>;
  ds: S;
  fs: F;
  tracking: T;
}) {
  /** Scaled out here, not in the worklet — see the note on `floatTravel`. */
  const depth = ds(1100);
  const inFrom = ds(300);
  const toX = ds(-98);
  const toY = ds(70);
  const anim = useAnimatedStyle(() => {
    const p = local(t.value, 8);
    const arrive = easeSnapIn(seg(p, 0, 0.04));
    const shrink = easeSnapOut(seg(p, 0.07, 0.1));
    return {
      opacity: arrive * (1 - seg(p, 0.255, 0.26)),
      transform: [
        { perspective: depth },
        { translateX: toX * shrink },
        { translateY: inFrom * (1 - arrive) - toY * shrink },
        { rotateX: `${40 * (1 - arrive)}deg` },
        { scale: 0.9 + 0.1 * arrive - 0.58 * shrink },
      ],
    };
  });

  /** The brackets are inside the card's group, so they travel with it — they
   *  are gone long before the shrink, but that is what keeps them registered
   *  to its corners while it is being "photographed". */
  const brackets = useAnimatedStyle(() => {
    const p = local(t.value, 8);
    return { opacity: seg(p, 0.04, 0.046) * (1 - seg(p, 0.07, 0.074)) };
  });

  const corner = (h: 'left' | 'right', v: 'top' | 'bottom') => ({
    position: 'absolute' as const,
    [h]: 0,
    [v]: 0,
    width: ds(26),
    height: ds(26),
    [h === 'left' ? 'borderLeftWidth' : 'borderRightWidth']: ds(3),
    [v === 'top' ? 'borderTopWidth' : 'borderBottomWidth']: ds(3),
    borderColor: c.amber,
    [`border${v === 'top' ? 'Top' : 'Bottom'}${h === 'left' ? 'Left' : 'Right'}Radius`]: ds(6),
  });

  return (
    <Animated.View
      style={[{ position: 'absolute', left: ds(40), top: ds(80), width: ds(250), height: ds(150) }, anim]}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: ds(10),
          backgroundColor: c.paper2,
          paddingVertical: ds(16),
          paddingHorizontal: ds(18),
          gap: ds(8),
          boxShadow: [
            { offsetX: 0, offsetY: ds(18), blurRadius: ds(40), color: 'rgba(28,26,22,.28)' },
            { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.14)', inset: true },
          ],
        }}>
        <Text style={{ ...type(fs, tracking, obFont.xb800, 12, 16, c.amberDark), letterSpacing: tracking(0.06, 12) }}>
          Q12.
        </Text>
        <Text style={type(fs, tracking, obFont.m500, 14.5, 20.3, c.card)}>
          A 2 kg block slides down a 30° frictionless incline. Find its acceleration.
        </Text>
        <View style={{ marginTop: 'auto', flexDirection: 'row', gap: ds(14) }}>
          {['(a) 9.8', '(b) 4.9', '(c) 8.5', '(d) 2.45'].map((o) => (
            <Text key={o} style={type(fs, tracking, obFont.r400, 12, 16, c.grey2)}>
              {o}
            </Text>
          ))}
        </View>
      </View>
      <Animated.View style={[{ position: 'absolute', left: ds(-10), right: ds(-10), top: ds(-10), bottom: ds(-10) }, brackets]}>
        <View style={corner('left', 'top')} />
        <View style={corner('right', 'top')} />
        <View style={corner('left', 'bottom')} />
        <View style={corner('right', 'bottom')} />
      </Animated.View>
    </Animated.View>
  );
}

function BeatThree({
  t,
  wave,
  ds,
  fs,
  tracking,
}: {
  t: SharedValue<number>;
  wave: SharedValue<number>;
  ds: S;
  fs: F;
  tracking: T;
}) {
  /** The shutter. It sits at the BOTTOM of this layer, as the design has it —
   *  the solution text is written over the flash, not washed out by it. */
  const flash = useAnimatedStyle(() => {
    const p = local(t.value, 8);
    return { opacity: seg(p, 0.066, 0.07) * 0.9 * (1 - seg(p, 0.07, 0.09)) };
  });

  return (
    <Layer t={t} delay={8} style={StyleSheet.absoluteFill}>
      <Animated.View
        pointerEvents="none"
        style={[
          { ...StyleSheet.absoluteFillObject, borderRadius: ds(22), backgroundColor: '#FFFFFF' },
          flash,
        ]}
      />
      <Writes t={t} delay={8.9} kind="hold" left={ds(134)} top={ds(18)}
        text="from your book, Q12"
        style={type(fs, tracking, obFont.sb600, 12, 16, c.chalkDim)} />
      <Writes t={t} delay={9.2} kind="hold" left={ds(134)} top={ds(40)}
        text="a = g sinθ"
        style={type(fs, tracking, obFont.b700, 22, 28, c.chalk, -0.02)} />
      <Writes t={t} delay={9.5} kind="wr" left={ds(134)} top={ds(74)} width={ds(176)}
        text="no friction, so only gravity pulls it along the slope"
        style={type(fs, tracking, obFont.r400, 13, 18, c.chalkDim)} />
      <Writes t={t} delay={9.9} kind="wr" left={ds(24)} top={ds(134)}
        text="= 9.8 × sin 30° = 9.8 × ½"
        style={type(fs, tracking, obFont.m500, 17, 24, c.chalk)} />
      <Writes t={t} delay={10.3} kind="wrf" left={ds(24)} top={ds(176)}
        text="= 4.9 m/s²"
        style={type(fs, tracking, obFont.b700, 26, 32, c.chalkAmber, -0.02)} />
      <Svg
        viewBox="0 0 170 14"
        style={{ position: 'absolute', left: ds(22), top: ds(210), width: ds(170), height: ds(14) }}
        pointerEvents="none">
        <Draw t={t} delay={10.5} d="M2 8 C40 2 90 12 166 6" length={LEN.rule}
          stroke={c.chalkAmber} strokeWidth={2.4} />
      </Svg>
      <Writes t={t} delay={10.8} kind="wrf" left={ds(24)} top={ds(236)}
        text="answer: (b) ✓"
        style={type(fs, tracking, obFont.m500, 15, 22, c.chalkDim)} />
      <Pop t={t} delay={9.4} style={{ ...PILL_POS, left: ds(-16), top: ds(310) }}>
        <Pill label="Drona is solving" wave={wave} ds={ds} fs={fs} tracking={tracking} shadow={0.28} />
      </Pop>
      <SnapCard t={t} ds={ds} fs={fs} tracking={tracking} />
    </Layer>
  );
}

/** One practice card. The three differ only by tint, rotation and copy. */
function PracticeCard({
  ds,
  fs,
  tracking,
  bg,
  question,
  chips,
  front = false,
  tick,
}: {
  ds: S;
  fs: F;
  tracking: T;
  bg: string;
  question: string;
  chips: string[];
  front?: boolean;
  /** The amber correct-answer overlay, for the front card only. */
  tick?: React.ReactNode;
}) {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        borderRadius: ds(14),
        backgroundColor: bg,
        paddingVertical: ds(14),
        paddingHorizontal: ds(16),
        gap: ds(10),
        boxShadow: front
          ? [
              { offsetX: 0, offsetY: ds(18), blurRadius: ds(40), color: 'rgba(28,26,22,.26)' },
              { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.14)', inset: true },
            ]
          : [
              { offsetX: 0, offsetY: ds(14), blurRadius: ds(30), color: 'rgba(28,26,22,.2)' },
              { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,.1)', inset: true },
            ],
      }}>
      <Text style={type(fs, tracking, obFont.m500, 13, 17.6, c.card)}>{question}</Text>
      <View style={{ marginTop: 'auto', flexDirection: 'row', gap: ds(6) }}>
        {chips.map((chip, i) => (
          <View
            key={chip}
            style={{
              flex: 1,
              height: ds(30),
              borderRadius: ds(8),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: front ? c.cream1 : 'rgba(28,26,22,.06)',
            }}>
            <Text style={type(fs, tracking, obFont.sb600, 12, 16, c.chip)}>{chip}</Text>
            {front && i === 1 && tick}
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * BEAT 4 — practice, 12 to 16 seconds, still on the dark board.
 *
 * Three cards fan in, the right answer ticks amber, and a score chip pops.
 * The dark surface does not re-fade under this: it came up at 8s and holds
 * to the end of the loop, so beats 3 and 4 read as one continuous sitting.
 */
function BeatFour({ t, ds, fs, tracking }: { t: SharedValue<number>; ds: S; fs: F; tracking: T }) {
  const box = { position: 'absolute' as const, left: ds(65), top: ds(62), width: ds(200), height: ds(124) };

  return (
    <Layer t={t} delay={12} style={StyleSheet.absoluteFill}>
      <Writes t={t} delay={12.1} kind="hold" left={ds(24)} top={ds(16)}
        text="Practice · Laws of Motion · medium"
        style={type(fs, tracking, obFont.sb600, 12, 16, c.chalkDim)} />

      <View style={[box, { transform: [{ rotate: '-9deg' }, { translateX: ds(-22) }, { translateY: ds(10) }] }]}>
        <Pop t={t} delay={12.3} style={StyleSheet.absoluteFill}>
          <PracticeCard ds={ds} fs={fs} tracking={tracking} bg={c.cream1}
            question="A 60 kg person stands in a lift accelerating up at 2 m/s². Apparent weight?"
            chips={['480 N', '600 N', '708 N', '720 N']} />
        </Pop>
      </View>

      <View style={[box, { transform: [{ rotate: '6deg' }, { translateX: ds(18) }, { translateY: ds(4) }] }]}>
        <Pop t={t} delay={12.45} style={StyleSheet.absoluteFill}>
          <PracticeCard ds={ds} fs={fs} tracking={tracking} bg={c.cream2}
            question="A 3 kg block on a smooth table is pulled by 12 N. Its acceleration is"
            chips={['2', '3', '4', '6']} />
        </Pop>
      </View>

      <View style={box}>
        <Pop t={t} delay={12.6} style={StyleSheet.absoluteFill}>
          <PracticeCard
            ds={ds} fs={fs} tracking={tracking} bg="#FFFFFF" front
            question="A 5 kg body at rest is pushed with 20 N. Its acceleration is"
            chips={['2', '4', '5', '100']}
            tick={
              <Pop
                t={t}
                delay={13.7}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: ds(8),
                  backgroundColor: c.amber,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Svg viewBox="0 0 16 16" width={ds(14)} height={ds(14)}>
                  <Path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke={c.ink} strokeWidth={2.2}
                    strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
              </Pop>
            }
          />
        </Pop>
      </View>

      <Writes t={t} delay={12.5} kind="wr" left={ds(24)} top={ds(226)} width={ds(282)}
        text="next one adapts to how you answered"
        style={type(fs, tracking, obFont.r400, 14, 20, c.chalkDim)} />
      <Writes t={t} delay={13.9} kind="wrf" left={ds(24)} top={ds(256)}
        text="20 ÷ 5 = 4 m/s² ✓"
        style={type(fs, tracking, obFont.m500, 15, 22, c.chalkAmber)} />

      <Pop t={t} delay={14.2}
        style={{ position: 'absolute', right: ds(8), top: ds(296), transformOrigin: 'right center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: ds(8),
            height: ds(44),
            paddingHorizontal: ds(16),
            borderRadius: 99,
            backgroundColor: '#FFFFFF',
            boxShadow: [{ offsetX: 0, offsetY: ds(10), blurRadius: ds(26), color: 'rgba(28,26,22,.3)' }],
          }}>
          <Text style={type(fs, tracking, obFont.m500, 13, 17, c.inkSoft)}>Score</Text>
          <Text style={type(fs, tracking, obFont.b700, 15, 19, c.ink)}>618</Text>
          <Text style={type(fs, tracking, obFont.b700, 13, 17, c.amberDark)}>+6</Text>
        </View>
      </Pop>
    </Layer>
  );
}
