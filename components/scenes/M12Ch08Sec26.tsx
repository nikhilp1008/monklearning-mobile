/**
 * M12Ch08 · Section 26 — "Chapter 8 — the complete area toolkit"
 * Subtopic: Chapter Close
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 25–27 (see Sec25 header):
 *   axes via arrowD in INK · PRIMARY curve AMBER_DARK · SECOND curve BLUE
 *   measured region AMBER @0.22 · contrasting slab GREEN @0.18 ·
 *   below-axis slab RED @0.16 · limits/roots/swaps RED · strips AMBER_DARK @0.5
 *
 * This is a recap board: every formula the voice restates is drawn on the
 * picture it came from, so the formula triggers the reasoning instead of
 * standing alone as a line of text.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the complete toolkit on one board — a recap"
 *        title, underline, subtitle
 *  1  "curve against an axis: ∫ y dx, or ∫ x dy"
 *        two plots side by side — a vertical strip measured to the x-axis,
 *        and a horizontal strip measured to the y-axis
 *  2  "dips below or crosses: ∫ |f|, split at every root"
 *        one curve with two roots, the above-axis slabs amber, the
 *        below-axis slab red, roots ringed
 *  3  "between two curves: top − bottom in x, right − left in y"
 *        two curves, the region between them shaded, a top-to-bottom strip
 *  4  "curves cross inside the interval: ∫ |f − g|, split at each swap"
 *        two crossing lines, the two slabs shaded differently, dashed swap
 *  5  "catalogue: circle πa², ellipse πab, two parabolas 16a²/3, diamond 2a²"
 *        the four shapes actually drawn, each with its result
 *  6  "the workhorse antiderivative: ∫ √(a² − x²)"
 *        the quarter-circle it measures + the antiderivative written out
 *  7  "the method-selection guide — one curve, two curves, or a decoding job"
 *        a three-way fan into the three subtopics
 */

import React from "react";
import { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

export default function M12Ch08Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The complete area toolkit", "The complete area toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 384 62 C 480 58, 620 68, 700 60" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("the whole chapter gathered on one board — a recap, so let each formula trigger the reasoning you already own",
             "poora chapter ek board par — yeh recap hai, har formula ko wahi reasoning trigger karne do jo tumhare paas already hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — a curve against an axis ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={100} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① a curve against an axis", "① ek axis ke against curve")}
        </T>
      </Fade>
      {/* figure A — measured to the x-axis, vertical strip */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(60, 204, 284, 204)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(74, 216, 74, 118)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d="M 90 192 Q 176 116, 262 156" stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Path d="M 90 204 L 90 192 Q 176 116, 262 156 L 262 204 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Rect x={171} y={145} width={10} height={59} fill={AMBER_DARK} opacity={0.5} />
        <T x={176} y={139} size={10.5} fill={AMBER_DARK} weight={800}>y</T>
        <T x={176} y={218} size={10.5} fill={MUTED} weight={700}>dx</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={176} y={248} size={15} fill={INK} weight={800}>A = ∫ y dx</T>
      </Fade>
      {/* figure B — measured to the y-axis, horizontal strip */}
      <Draw on={beat >= 1} delay={dl(1, 6)} d={arrowD(310, 204, 510, 204)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 6.4)} d={arrowD(324, 216, 324, 118)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 6.9)} d="M 330 196 Q 400 130, 470 124" stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <Path d="M 324 196 L 330 196 Q 400 130, 470 124 L 324 124 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.6)}>
        <Rect x={324} y={157} width={48} height={10} fill={AMBER_DARK} opacity={0.5} />
        <T x={350} y={151} size={10.5} fill={AMBER_DARK} weight={800}>x</T>
        <T x={318} y={168} size={10.5} fill={MUTED} weight={700} anchor="end">dy</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.6)}>
        <T x={400} y={248} size={15} fill={INK} weight={800}>A = ∫ x dy</T>
      </Fade>

      {/* ═══════════ beat 2 — below or crossing the axis ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={560} y={100} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② the curve dips below or crosses the axis",
             "② curve axis ke neeche jaaye ya use cross kare")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(580, 180, 1016, 180)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(600, 222, 600, 114)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)}
        d="M 614 150 C 654 148, 684 168, 712 180 C 762 214, 830 216, 880 180 C 918 152, 950 136, 990 124"
        stroke={AMBER_DARK} sw={2.8} dur={1.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Path d="M 614 180 L 614 150 C 654 148, 684 168, 712 180 Z" fill={AMBER} opacity={0.22} />
        <Path d="M 880 180 C 918 152, 950 136, 990 124 L 990 180 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <Path d="M 712 180 C 762 214, 830 216, 880 180 Z" fill={RED} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <Circle cx={712} cy={180} r={5} fill={RED} />
        <Circle cx={880} cy={180} r={5} fill={RED} />
        <Path d="M 712 180 L 712 200" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
        <Path d="M 880 180 L 880 200" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={660} y={166} size={14} fill={AMBER_DARK} weight={900}>+</T>
        <T x={796} y={204} size={15} fill={RED} weight={900}>−</T>
        <T x={946} y={162} size={14} fill={AMBER_DARK} weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={560} y={248} size={12} fill={MUTED} script anchor="start">
          {t("split at every root so nothing cancels",
             "har root par split karo taaki kuch cancel na ho")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9.4)}>
        <T x={880} y={248} size={15} fill={INK} weight={800}>A = ∫ | f(x) | dx</T>
      </Fade>

      {/* ═══════════ beat 3 — between two curves ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={272} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ the area between two curves", "③ do curves ke beech ki area")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(60, 380, 500, 380)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={arrowD(80, 392, 80, 292)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 110 340 C 180 296, 300 296, 400 322"
        stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d="M 110 366 C 190 352, 300 356, 400 368"
        stroke={BLUE} sw={2.6} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <Path d="M 110 340 C 180 296, 300 296, 400 322 L 400 368 C 300 356, 190 352, 110 366 Z"
          fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <Rect x={241} y={305} width={10} height={52} fill={AMBER_DARK} opacity={0.5} />
        <T x={246} y={299} size={10.5} fill={AMBER_DARK} weight={800}>{t("top", "top")}</T>
        <T x={246} y={373} size={10.5} fill={BLUE} weight={800}>{t("bottom", "bottom")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={408} y={322} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">f</T>
        <T x={408} y={372} size={11.5} fill={BLUE} weight={800} anchor="start">g</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={44} y={416} size={14} fill={INK} weight={800} anchor="start">A = ∫ (top − bottom) dx</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.2)}>
        <T x={286} y={416} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("or  ∫ (right − left) dy", "ya  ∫ (right − left) dy")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the curves cross ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={272} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ the two curves cross inside the interval",
             "④ dono curves interval ke andar cross karein")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(576, 380, 1020, 380)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(596, 392, 596, 292)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d="M 620 350 L 980 306" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d="M 620 304 L 980 352" stroke={BLUE} sw={2.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <Path d="M 620 304 L 800 328 L 620 350 Z" fill={GREEN} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <Path d="M 800 328 L 980 306 L 980 352 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Path d="M 800 294 L 800 390" stroke={RED} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
        <Circle cx={800} cy={328} r={5} fill={RED} />
        <T x={800} y={288} size={11} fill={RED} weight={800}>{t("swap", "swap")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={702} y={336} size={10.5} fill={GREEN_DARK} weight={800}>{t("g on top", "g upar")}</T>
        <T x={892} y={342} size={10.5} fill={AMBER_DARK} weight={800}>{t("f on top", "f upar")}</T>
        <T x={988} y={306} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">f</T>
        <T x={988} y={356} size={11.5} fill={BLUE} weight={800} anchor="start">g</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={560} y={416} size={14} fill={INK} weight={800} anchor="start">A = ∫ | f − g | dx</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.6)}>
        <T x={760} y={416} size={12} fill={MUTED} script anchor="start">
          {t("splitting at each swap", "har swap par split karte hue")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the catalogue ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={438} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤ catalogue results worth memorising",
             "⑤ memorise karne laayak catalogue results")}
        </T>
      </Fade>
      {/* circle */}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Circle cx={100} cy={468} r={26} fill={AMBER} fillOpacity={0.22} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={100} y={512} size={12.5} fill={INK} weight={800}>{t("circle → π a²", "circle → π a²")}</T>
      </Fade>
      {/* ellipse */}
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Ellipse cx={252} cy={468} rx={38} ry={22} fill={AMBER} fillOpacity={0.22} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={252} y={512} size={12.5} fill={INK} weight={800}>{t("ellipse → π a b", "ellipse → π a b")}</T>
      </Fade>
      {/* two equal parabolas */}
      <Draw on={beat >= 5} delay={dl(5, 5.2)} d="M 400 494 Q 478 494, 478 438" stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 5.8)} d="M 400 494 Q 400 438, 478 438" stroke={BLUE} sw={2.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <Path d="M 400 494 Q 478 494, 478 438 Q 400 438, 400 494 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.1)}>
        <T x={440} y={512} size={12.5} fill={INK} weight={800}>
          {t("parabolas → 16a²/3", "parabolas → 16a²/3")}
        </T>
      </Fade>
      {/* diamond */}
      <Draw on={beat >= 5} delay={dl(5, 8.4)} d="M 600 440 L 628 468 L 600 496 L 572 468 Z"
        stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 9.1)}>
        <Path d="M 600 440 L 628 468 L 600 496 L 572 468 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9.7)}>
        <T x={600} y={512} size={12.5} fill={INK} weight={800}>{t("diamond → 2a²", "diamond → 2a²")}</T>
      </Fade>

      {/* ═══════════ beat 6 — the workhorse antiderivative ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={720} y={438} size={13} fill={RED} weight={800} anchor="start">
          {t("⑥ the workhorse antiderivative", "⑥ woh workhorse antiderivative")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(738, 498, 828, 498)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={arrowD(748, 506, 748, 442)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 748 450 A 48 48 0 0 1 796 498" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <Path d="M 748 498 L 748 450 A 48 48 0 0 1 796 498 Z" fill={AMBER} opacity={0.22} />
        <T x={800} y={512} size={10.5} fill={MUTED} weight={700}>a</T>
        <T x={740} y={452} size={10.5} fill={MUTED} weight={700} anchor="end">a</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={845} y={458} size={13.5} fill={INK} weight={800} anchor="start">∫ √(a² − x²) dx</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={845} y={482} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">= (x/2) √(a² − x²)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={845} y={504} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">+ (a²/2) sin⁻¹(x/a) + C</T>
      </Fade>

      {/* ═══════════ beat 7 — the method-selection compass ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 520 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={44} y={540} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑦ THE METHOD-SELECTION COMPASS — read the region first, then pick the subtopic",
             "⑦ METHOD-SELECTION COMPASS — pehle region padho, phir subtopic chuno")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3)} d={arrowD(540, 544, 199, 554)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <Chip x={44} y={556} w={310} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5} script={false}>
          {t("one curve + an axis → Subtopic 1", "ek curve + ek axis → Subtopic 1")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 7)} d={arrowD(540, 546, 530, 554)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 7.6)}>
        <Chip x={380} y={556} w={300} h={34} fill={CREAM} stroke={BLUE} textFill={INK} size={12.5} script={false}>
          {t("two named curves → Subtopic 2", "do named curves → Subtopic 2")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 11)} d={arrowD(540, 544, 871, 554)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 11.6)}>
        <Chip x={706} y={556} w={330} h={34} fill={CREAM} stroke={RED} textFill={INK} size={12.5} script={false}>
          {t("modulus · inequality · braces → Subtopic 3", "modulus · inequality · braces → Subtopic 3")}
        </Chip>
      </Fade>
    </Scene>
  );
}
