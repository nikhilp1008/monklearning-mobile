/**
 * M12Ch08 · Section 21 — "Area under a modulus V"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The worked example that opens the advanced-regions block: the area bounded
 * by y = |x|, the x-axis and the lines x = −2 and x = 3. The whole board is
 * ONE real graph — axes, the actual V, the two actual vertical limits, the two
 * actual triangles shaded — with the algebra tracking it in the right column.
 *
 * SHARED VISUAL VOCABULARY (Sections 19 · 20 · 21 of this subtopic):
 *   · axes  — INK, x-axis arrow right, y-axis arrow up, origin marked O
 *   · primary curve / upper boundary — AMBER_DARK
 *   · secondary curve / lower boundary — BLUE
 *   · the piece BEFORE a split point — GREEN fill, opacity ≈ 0.20
 *   · the piece AFTER  a split point — AMBER fill, opacity ≈ 0.26
 *     (an undivided region is plain GREEN)
 *   · limits, corners, switch points, final answers — RED
 *   · prose and captions — MUTED, script face
 *
 * Graph frame: origin O at (320, 452), 74 px per x-unit, 64 px per y-unit.
 *   x = −2 → 172 · x = 0 → 320 · x = 3 → 542 · y = 2 → 324 · y = 3 → 260
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "area bounded by y = |x|, the x-axis,   title + axes + the V plotted +
 *      x = −2 and x = 3"                      both vertical limit lines + ticks
 *  1  "the V has its corner at the origin —   RED ring on the corner, arrow to
 *      the inside changes sign, split there"  it, the split caption
 *  2  "left of 0, |x| = −x; right of 0,       both triangles shaded (GREEN then
 *      |x| = x"                               AMBER), on-graph piece labels,
 *                                             the two sub-interval brackets
 *  3  "A = ∫(−2→0)(−x)dx + ∫(0→3) x dx"       the two integrals, with limits,
 *                                             in the right column
 *  4  "left → 0 − (−2) = 2 · right → 9/2"     antiderivatives evaluated, and the
 *                                             value written inside each triangle
 *  5  "2 + 9/2 = 13/2 square units"           the sum + the boxed answer
 *  6  "a modulus always gives a corner —      rule, takeaway line, and a mini
 *      the same reflex as a sign change"      sign-change sketch (curve dipping
 *                                             below the axis, lobe reflected up)
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* graph frame */
const X0 = 320, Y0 = 452, SX = 74, SY = 64;
const px = (x: number) => X0 + SX * x;
const py = (y: number) => Y0 - SY * y;

export default function M12Ch08Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* x-axis ticks. −2 and 3 are the limits the narration names; −1, 1 and 2 are
     scale marks only. There is deliberately no 0 tick: the split point x = 0 is
     already carried by the O label, the red corner dot and the beat-1 ring, and a
     label there would sit under the ring's lower arc. */
  const ticks: [number, string][] = [
    [-2, "−2"], [-1, "−1"], [1, "1"], [2, "2"], [3, "3"],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the problem, drawn ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Area under a modulus — y = |x| from −2 to 3",
             "Modulus ke neeche ka area — y = |x|, −2 se 3 tak")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 322 62 C 450 58, 640 66, 760 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("bounded by y = |x|, the x-axis, and the lines x = −2 and x = 3",
             "y = |x|, x-axis, aur lines x = −2 aur x = 3 se bounded")}
        </T>
      </Fade>

      {/* axes */}
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d={arrowD(120, Y0, 606, Y0)} stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d={arrowD(X0, 502, X0, 236)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.8)}>
        <T x={614} y={458} size={15} fill={INK} weight={900} anchor="start">x</T>
        <T x={X0 - 14} y={244} size={15} fill={INK} weight={900} anchor="end">y</T>
        <T x={X0 - 10} y={472} size={13} fill={INK_LIGHT} anchor="end">O</T>
      </Fade>

      {/* ticks */}
      {ticks.map(([v, lab], i) => (
        <Fade key={`tk${v}`} on={beat >= 0} delay={dl(0, 4.2 + i * 0.12)}>
          <Path d={`M ${px(v)} ${Y0 - 6} L ${px(v)} ${Y0 + 6}`} stroke={INK_LIGHT} strokeWidth={1.8} />
          <T x={px(v)} y={Y0 + 24} size={12.5} fill={INK_LIGHT}>{lab}</T>
        </Fade>
      ))}

      {/* the V itself */}
      <Draw on={beat >= 0} delay={dl(0, 5)}
        d={`M ${px(-2)} ${py(2)} L ${X0} ${Y0} L ${px(3)} ${py(3)}`}
        stroke={AMBER_DARK} sw={3.2} dur={1.2} />
      <Fade on={beat >= 0} delay={dl(0, 6.2)}>
        <T x={px(3) + 14} y={py(3) + 4} size={16} fill={AMBER_DARK} weight={900} anchor="start">y = |x|</T>
      </Fade>

      {/* the two vertical limit lines */}
      <Draw on={beat >= 0} delay={dl(0, 6.8)} d={`M ${px(-2)} ${Y0 + 30} L ${px(-2)} ${py(2) - 26}`}
        stroke={RED} sw={2.4} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 7.2)} d={`M ${px(3)} ${Y0 + 30} L ${px(3)} ${py(3) - 22}`}
        stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 7.8)}>
        <T x={px(-2) - 8} y={py(2) - 34} size={13} fill={RED} weight={800} anchor="end">x = −2</T>
        <T x={px(3) + 8} y={py(3) - 30} size={13} fill={RED} weight={800} anchor="start">x = 3</T>
      </Fade>

      {/* ═══════════ beat 1 — the corner ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(X0, Y0, 30, 21)} stroke={RED} sw={2.4} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={X0} cy={Y0} r={5.5} fill={RED} />
      </Fade>
      {/* The caption block lives in the empty upper-left board (x 40..290,
          y 185..247) — the bottom strip below the graph belongs to the beat-6
          takeaway band. The leader runs from just under the block down to the
          ring: it stays above the V's left arm, left of the y-axis, and never
          reaches the beat-2 sub-interval brackets at y 486..494. */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)}
        d={arrowD(X0 - 50, Y0 - 190, X0 - 7, Y0 - 26)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={40} y={196} size={13} fill={RED} weight={800} anchor="start">
          {t("the corner sits at the origin", "corner origin par baithta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={40} y={222} size={12.5} fill={INK} weight={700} anchor="start">
          {t("inside of |x| changes sign here",
             "|x| ka inside yahin sign badalta hai")}
        </T>
        <T x={40} y={244} size={12.5} fill={INK} weight={700} anchor="start">
          {t("⇒  split at x = 0", "⇒  x = 0 par split")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the two pieces ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Path d={`M ${px(-2)} ${Y0} L ${px(-2)} ${py(2)} L ${X0} ${Y0} Z`} fill={GREEN} opacity={0.2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Path d={`M ${X0} ${Y0} L ${px(3)} ${py(3)} L ${px(3)} ${Y0} Z`} fill={AMBER} opacity={0.26} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        {/* pulled left/down so the whole glyph box clears the V's left arm,
            which passes y≈394 at the label's right edge */}
        <T x={220} y={413} size={15} fill={GREEN_DARK} weight={900}>|x| = −x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={452} y={392} size={15} fill={AMBER_DARK} weight={900}>|x| = x</T>
      </Fade>
      {/* sub-interval brackets under the axis */}
      <Draw on={beat >= 2} delay={dl(2, 5)}
        d={`M ${px(-2)} 486 L ${px(-2)} 494 L ${X0} 494 L ${X0} 486`} stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 5.4)}
        d={`M ${X0} 486 L ${X0} 494 L ${px(3)} 494 L ${px(3)} 486`} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={246} y={510} size={12.5} fill={GREEN_DARK} weight={800}>[−2, 0]</T>
        <T x={431} y={510} size={12.5} fill={AMBER_DARK} weight={800}>[0, 3]</T>
      </Fade>

      {/* right column — beat 2 headline */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={640} y={126} size={15} fill={RED} weight={800} anchor="start">
          {t("SPLIT THE INTERVAL AT x = 0", "INTERVAL KO x = 0 PAR SPLIT KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={640} y={160} size={17} fill={GREEN_DARK} weight={800} anchor="start">
          {t("on [−2, 0] :", "[−2, 0] par :")}
        </T>
        <T x={800} y={160} size={19} fill={GREEN_DARK} weight={900} anchor="start">|x| = −x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={640} y={190} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          {t("on [0, 3] :", "[0, 3] par :")}
        </T>
        <T x={800} y={190} size={19} fill={AMBER_DARK} weight={900} anchor="start">|x| = x</T>
      </Fade>

      {/* ═══════════ beat 3 — the split integral ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 640 208 H 1030" stroke={MUTED} sw={1.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={640} y={252} size={20} fill={INK} weight={900} anchor="start">A =</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={694} y={262} size={40} fill={GREEN_DARK} weight={500}>∫</T>
        <T x={710} y={232} size={12} fill={GREEN_DARK} anchor="start">0</T>
        <T x={710} y={274} size={12} fill={GREEN_DARK} anchor="start">−2</T>
        <T x={736} y={256} size={19} fill={GREEN_DARK} weight={800} anchor="start">(−x) dx</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={846} y={252} size={20} fill={INK} weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={884} y={262} size={40} fill={AMBER_DARK} weight={500}>∫</T>
        <T x={900} y={232} size={12} fill={AMBER_DARK} anchor="start">3</T>
        <T x={900} y={274} size={12} fill={AMBER_DARK} anchor="start">0</T>
        <T x={926} y={256} size={19} fill={AMBER_DARK} weight={800} anchor="start">x dx</T>
      </Fade>

      {/* ═══════════ beat 4 — evaluate each piece ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={640} y={306} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("left piece :", "left piece :")}
        </T>
        <T x={740} y={306} size={16} fill={INK} weight={800} anchor="start">−x² / 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={840} y={306} size={16} fill={INK} weight={800} anchor="start">⇒  0 − (−2)  =  2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={640} y={340} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("right piece :", "right piece :")}
        </T>
        <T x={740} y={340} size={16} fill={INK} weight={800} anchor="start">x² / 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={840} y={340} size={16} fill={INK} weight={800} anchor="start">⇒  9/2 − 0  =  9/2</T>
      </Fade>
      {/* the values, written into the triangles they belong to */}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={232} y={440} size={18} fill={GREEN_DARK} weight={900}>= 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={452} y={418} size={18} fill={AMBER_DARK} weight={900}>= 9/2</T>
      </Fade>

      {/* ═══════════ beat 5 — add them ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={640} y={392} size={24} fill={INK} weight={900} anchor="start">2 + 9/2 = 13/2</T>
      </Fade>
      {/* stops in the gap above the chip (chip top y = 418) so the head points
          at the box instead of being swallowed by its cream fill */}
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(760, 404, 800, 411)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Chip x={640} y={418} w={356} h={50} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={22} script={false}>
          Area = 13/2 square units
        </Chip>
      </Fade>

      {/* ═══════════ beat 6 — the takeaway + the same reflex ═══════════ */}
      {/* the band sits below the bracket labels (glyph bottom y≈513) and stops
          left of the mini sketch, whose reflected lobe peaks at y≈526 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 36 522 H 660" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={36} y={546} size={14.5} fill={RED} weight={800} anchor="start">
          {t("TAKEAWAY — a modulus always contributes a corner, and you split there",
             "TAKEAWAY — modulus hamesha ek corner deta hai, aur wahin split karte ho")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={36} y={570} size={13} fill={MUTED} script anchor="start">
          {t("it is exactly the same splitting reflex you use when a curve changes sign",
             "yeh bilkul wahi splitting reflex hai jo curve ke sign badalne par lagate ho")}
        </T>
      </Fade>
      {/* mini sign-change sketch: f dips below, the lobe folds up */}
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d={arrowD(700, 556, 1006, 556)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 4.2)} d="M 716 536 Q 796 636 876 536" stroke={BLUE} sw={2.2} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 5)} d="M 734 556 Q 796 496 858 556" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <Circle cx={734} cy={556} r={4.6} fill={RED} />
        <Circle cx={858} cy={556} r={4.6} fill={RED} />
        <T x={888} y={548} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("split at every", "har sign change")}
        </T>
        <T x={888} y={564} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("sign change", "par split")}
        </T>
      </Fade>
    </Scene>
  );
}
