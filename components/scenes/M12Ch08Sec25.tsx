/**
 * M12Ch08 · Section 25 — "Advanced regions: decode before you integrate"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 25–27 of this chapter:
 *   · axes are always drawn with arrowD, x-axis horizontal, y-axis vertical,
 *     origin/baseline stated per figure, INK, sw 2.2
 *   · PRIMARY curve  = AMBER_DARK   · SECOND curve = BLUE (#0284c7)
 *   · the region being measured    = AMBER  fill at opacity 0.22
 *   · a contrasting / "other" slab = GREEN  fill at opacity 0.18
 *   · a negative (below-axis) slab = RED    fill at opacity 0.16
 *   · limits, corners, roots, swap points = RED dots / RED dashed verticals
 *   · thin measuring strips = AMBER_DARK rect at opacity 0.5
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close the advanced subtopic — traps + one discipline"
 *        title, underline, subtitle
 *  1  "trap ①: missing a corner of a modulus curve; ||x|−1| has three corners"
 *        axes + the plotted W of y = ||x| − 1|, ticks at −1 and 1, the outer
 *        corners ringed in red, the third corner at x = 0 dotted in red,
 *        the split algebra for both inside-expressions (|x| − 1 and x)
 *  2  "trap ②: shading the wrong side; test with the origin"
 *        axes + a boundary line, the correct half-plane shaded, the origin
 *        marked with a tick, the wrong side crossed out
 *  3  "trap ③: forgetting to split a composite region at the switch point"
 *        axes + two boundaries crossing, the region under the switching top
 *        boundary shaded, a red dashed vertical at the switch point
 *  4  "trap ④: assuming symmetry, or forgetting to multiply back"
 *        a genuinely symmetric arch with its dashed mirror line, beside a
 *        lopsided arch crossed out
 *  5  "pro-tip 1: first thirty seconds → a labelled sketch"
 *        a 30 s chip + a worked labelled sketch: corners dotted, sides
 *        shaded, a dashed switch point
 *  6  "pro-tip 2: elementary geometry is a free check"
 *        the four shapes the voice names — diamond, wedge, sector, triangle
 *  7  "almost every lost mark is a decoding error, not an integration error"
 *        divider + the lesson, with "integration error" struck through
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

export default function M12Ch08Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Advanced regions — decode before you integrate",
             "Advanced regions — pehle decode, phir integrate")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 322 62 C 460 58, 630 68, 758 60" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("four traps that cost marks, two pro-tips that prevent them, one lesson to carry out",
             "chaar traps jo marks le jaate hain, do pro-tips jo unhe rokte hain, ek lesson saath le jao")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — trap ①: a modulus corner ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={108} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① missing a corner of a modulus curve",
             "① modulus curve ka ek corner miss karna")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={44} y={126} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("every modulus contributes a kink — set each inside-expression to zero and split there",
             "har modulus ek kink deta hai — har inside-expression ko zero rakho aur wahin split karo")}
        </T>
      </Fade>
      {/* axes: origin (200, 214) */}
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(66, 214, 344, 214)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={arrowD(200, 230, 200, 142)} stroke={INK} sw={2.2} dur={0.5} />
      {/* y = ||x| - 1| : W with corners at x = -1, 1 and the inner kink at 0 */}
      <Draw on={beat >= 1} delay={dl(1, 4.4)}
        d="M 88 178 L 144 214 L 200 178 L 256 214 L 312 178"
        stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={110} y={150} size={12.5} fill={AMBER_DARK} weight={800}>y = ||x| − 1|</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.4)} d="M 144 209 L 144 219" stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 6.6)} d="M 256 209 L 256 219" stroke={INK} sw={2} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 6.9)}>
        <T x={144} y={232} size={11} fill={INK} weight={700}>−1</T>
        <T x={256} y={232} size={11} fill={INK} weight={700}>1</T>
        <T x={190} y={232} size={11} fill={MUTED} weight={700}>0</T>
      </Fade>
      {/* the corners: ±1 from |x| − 1 = 0, and x = 0 from the inner modulus */}
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <Circle cx={144} cy={214} r={4.5} fill={RED} />
        <Circle cx={256} cy={214} r={4.5} fill={RED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8.2)} d={ringD(144, 214, 19, 13)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 8.8)} d={ringD(256, 214, 19, 13)} stroke={RED} sw={2.1} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 9.6)}>
        <Circle cx={200} cy={178} r={4.5} fill={RED} />
        <T x={200} y={164} size={10.5} fill={RED} weight={700}>
          {t("third corner", "teesra corner")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.6)}>
        <T x={356} y={168} size={12} fill={INK} weight={700} anchor="start">|x| − 1 = 0  ⇒  x = ±1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11.4)}>
        <T x={356} y={190} size={12} fill={INK} weight={700} anchor="start">x = 0  ⇒  a third corner</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12.4)}>
        <T x={356} y={212} size={12} fill={RED} weight={800} anchor="start">
          {t("three corners — split at each", "teen corners — teeno par split")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 14.4)}>
        <T x={356} y={234} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("miss one → limits are wrong", "ek miss kiya → limits galat")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the wrong side of an inequality ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={560} y={108} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② shading the wrong side of an inequality",
             "② inequality ki galat side shade karna")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={560} y={126} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("translate ≤ and ≥ carefully, then confirm with a test point",
             "≤ aur ≥ dhyan se translate karo, phir ek test point se confirm karo")}
        </T>
      </Fade>
      {/* axes: origin (700, 214) — same baseline as the figure on the left */}
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(600, 214, 846, 214)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={arrowD(700, 230, 700, 142)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <Path d="M 606 150 L 838 238 L 838 248 L 606 248 Z" fill={GREEN} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d="M 606 150 L 838 238" stroke={GREEN_DARK} sw={2.6} dur={0.8} />
      {/* the origin as the test point */}
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <Circle cx={700} cy={214} r={5} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.2)} d="M 708 218 L 715 225 L 728 208" stroke={GREEN_DARK} sw={2.6} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={734} y={230} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("origin satisfies it → shade this side",
             "origin satisfy karta hai → yehi side shade karo")}
        </T>
      </Fade>
      {/* the half-plane you must NOT shade */}
      <Draw on={beat >= 2} delay={dl(2, 9.6)} d={crossD(768, 158, 26, 18)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 10.2)}>
        <T x={760} y={174} size={11.5} fill={RED} weight={800} anchor="end">
          {t("wrong side", "galat side")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={560} y={252} size={11.5} fill={INK} weight={700} anchor="start">
          {t("the origin is easiest — whenever it is not on a boundary",
             "origin sabse aasaan hai — jab tak woh boundary par na ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: a composite region ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={272} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ forgetting to split a composite region",
             "③ composite region ko split karna bhool jaana")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={44} y={290} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("when the top boundary switches partway across, one integral cannot cover both slabs",
             "jab top boundary beech mein switch kare, ek integral dono slabs cover nahi kar sakta")}
        </T>
      </Fade>
      {/* axes: baseline y = 376 */}
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={arrowD(70, 376, 432, 376)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d={arrowD(100, 390, 100, 294)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4.2)} d="M 120 366 L 400 300" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 3} delay={dl(3, 4.8)} d="M 120 302 L 400 368" stroke={BLUE} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Path d="M 150 376 L 150 309 L 256 334 L 380 305 L 380 376 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 6.4)} d="M 150 372 L 150 380" stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 3} delay={dl(3, 6.6)} d="M 380 372 L 380 380" stroke={INK} sw={2} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 7.2)}>
        <Path d="M 256 294 L 256 388" stroke={RED} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
        <Circle cx={256} cy={334} r={4.5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={256} y={402} size={11} fill={RED} weight={800}>
          {t("split at the switch point", "switch point par split karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={406} y={312} size={11} fill={AMBER_DARK} weight={800} anchor="start">
          {t("top after", "baad mein top")}
        </T>
        <T x={406} y={372} size={11} fill={BLUE} weight={800} anchor="start">
          {t("top before", "pehle top")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10.6)}>
        <T x={44} y={422} size={12} fill={INK} weight={700} anchor="start">
          {t("one integral cannot cover both — ∫ slab 1  +  ∫ slab 2",
             "ek integral dono ko cover nahi karta — ∫ slab 1  +  ∫ slab 2")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: symmetry ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={272} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ assuming symmetry that isn't there",
             "④ aisi symmetry maan lena jo hai hi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={560} y={290} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("— or forgetting to multiply back after you use it",
             "— ya use karne ke baad wapas multiply karna bhool jaana")}
        </T>
      </Fade>
      {/* left panel: genuinely symmetric */}
      <Draw on={beat >= 4} delay={dl(4, 3)} d={arrowD(600, 376, 780, 376)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d="M 620 376 Q 692 296, 764 376" stroke={GREEN_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <Path d="M 620 376 Q 692 296, 764 376 Z" fill={GREEN} opacity={0.18} />
        <Path d="M 692 330 L 692 388" stroke={GREEN_DARK} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={692} y={318} size={11} fill={GREEN_DARK} weight={800}>
          {t("use half, then multiply back", "aadha lo, phir wapas multiply karo")}
        </T>
        <T x={692} y={400} size={11} fill={GREEN_DARK} weight={800}>
          {t("verified symmetric ✓", "verify kiya, symmetric ✓")}
        </T>
      </Fade>
      {/* right panel: lopsided, crossed out */}
      <Draw on={beat >= 4} delay={dl(4, 6.4)} d={arrowD(846, 376, 1026, 376)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 6.9)} d="M 862 376 Q 892 300, 1006 376" stroke={RED} sw={2.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 7.8)}>
        <Path d="M 862 376 Q 892 300, 1006 376 Z" fill={RED} opacity={0.13} />
        <Path d="M 934 288 L 934 388" stroke={MUTED} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 8.6)} d={crossD(858, 296, 152, 80)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 9.4)}>
        <T x={930} y={400} size={11} fill={RED} weight={800}>
          {t("not symmetric ✗ — no free halving", "symmetric nahi ✗ — aadha mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10.4)}>
        <T x={560} y={422} size={12} fill={INK} weight={700} anchor="start">
          {t("symmetry is a gift only after you have verified it",
             "symmetry ek gift hai — sirf verify karne ke baad")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — pro-tip 1: the labelled sketch ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 44 434 H 1036" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={44} y={456} size={13} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP 1 — spend the first thirty seconds turning it into a labelled sketch",
             "PRO-TIP 1 — pehle tees second problem ko ek labelled sketch mein badlo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Chip x={44} y={474} w={56} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14}>
          30 s
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.4)}
        d="M 140 540 L 178 492 L 258 492 L 296 540 Z" stroke={INK} sw={2.2} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <Path d="M 140 540 L 178 492 L 258 492 L 296 540 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <Circle cx={140} cy={540} r={4} fill={RED} />
        <Circle cx={178} cy={492} r={4} fill={RED} />
        <Circle cx={258} cy={492} r={4} fill={RED} />
        <Circle cx={296} cy={540} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <Path d="M 258 484 L 258 550" stroke={RED} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.2)}>
        <T x={316} y={500} size={11.5} fill={RED} weight={800} anchor="start">
          {t("corners marked", "corners mark kiye")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={316} y={520} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("sides shaded", "sides shade kiye")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.8)}>
        <T x={316} y={540} size={11.5} fill={INK} weight={800} anchor="start">
          {t("switch points found", "switch points mil gaye")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10.4)}>
        <T x={44} y={566} size={12} fill={MUTED} script anchor="start">
          {t("once the picture is right, the integral is the easy part",
             "ek baar picture sahi ho gayi, integral aasaan hissa hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — pro-tip 2: geometry as a free check ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={456} size={13} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP 2 — elementary geometry is a free check",
             "PRO-TIP 2 — elementary geometry ek free check hai")}
        </T>
      </Fade>
      {/* diamond */}
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 610 477 L 642 505 L 610 533 L 578 505 Z"
        stroke={BLUE} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <Path d="M 610 477 L 642 505 L 610 533 L 578 505 Z" fill={BLUE} opacity={0.14} />
      </Fade>
      {/* wedge — a slanted slab, so it reads as its own shape-formula, not a triangle */}
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d="M 676 533 L 676 505 L 724 477 L 724 533 Z"
        stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <Path d="M 676 533 L 676 505 L 724 477 L 724 533 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      {/* sector */}
      <Draw on={beat >= 6} delay={dl(6, 4.4)} d="M 790 531 L 754.8 501.4 A 46 46 0 0 1 825.2 501.4 Z"
        stroke={GREEN_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 5.1)}>
        <Path d="M 790 531 L 754.8 501.4 A 46 46 0 0 1 825.2 501.4 Z" fill={GREEN} opacity={0.18} />
      </Fade>
      {/* triangle */}
      <Draw on={beat >= 6} delay={dl(6, 5.6)} d="M 856 533 L 890 477 L 924 533 Z"
        stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <Path d="M 856 533 L 890 477 L 924 533 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.8)}>
        <T x={610} y={548} size={10.5} fill={MUTED} weight={700}>{t("diamond", "diamond")}</T>
        <T x={700} y={548} size={10.5} fill={MUTED} weight={700}>{t("wedge", "wedge")}</T>
        <T x={790} y={548} size={10.5} fill={MUTED} weight={700}>{t("sector", "sector")}</T>
        <T x={890} y={548} size={10.5} fill={MUTED} weight={700}>{t("triangle", "triangle")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={560} y={566} size={12} fill={MUTED} script anchor="start">
          {t("compute it both ways — if they disagree, you mis-decoded the boundary",
             "dono tareeke se nikalo — agar disagree karein, tumne boundary galat decode ki")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the one lesson ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 574 H 1036" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={44} y={591} size={12.5} fill={INK} weight={800} anchor="start">
          {t("THE ONE LESSON — almost every lost mark is a decoding error, not an",
             "THE ONE LESSON — yahan har lost mark ek decoding error hai, na ki")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={526} y={591} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("integration error", "integration error")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d={crossD(522, 579, 124, 12)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={664} y={591} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("decode the boundary — the calculus is the easy part",
             "boundary decode karo — calculus aasaan hissa hai")}
        </T>
      </Fade>
    </Scene>
  );
}
