/**
 * M12Ch08 · Section 27 — "Chapter 8 master cheat sheet"
 * Subtopic: Chapter Close
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 25–27 (see Sec25 header):
 *   axes via arrowD in INK · PRIMARY curve AMBER_DARK · SECOND curve BLUE
 *   measured region AMBER @0.22 · contrasting slab GREEN @0.18 ·
 *   below-axis slab RED @0.18 · limits/roots/swaps RED · strips AMBER_DARK @0.5
 *
 * Section 26 was the toolkit laid out as reasoning; this one is the same
 * mathematics rendered as an actual sheet — a dashed page frame ruled into
 * six cards, each carrying its picture and its one line, with the universal
 * routine banner underneath. The emphasis differs from 26 deliberately:
 * card ① is about CHOOSING dx vs dy from the walls/caps, card ③ is about the
 * limits coming from f = g, card ⑥ is the decode→sketch→split→integrate chain.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the whole chapter on one page"          title, squiggle and subtitle,
 *                                              the dashed page frame and its rules
 *                                              (each card's heading arrives on its
 *                                              own beat, 1..6)
 *  1  "∫ y dx or ∫ x dy — pick to match the geometry"
 *        card ①: two plots — walled left & right (vertical strip) beside
 *        capped top & bottom (horizontal strip)
 *  2  "below or crossing: ∫|f|, split at every root"
 *        card ②: one curve, two roots, + / − slabs
 *  3  "between two curves: top − bottom, limits from f = g"
 *        card ③: two curves meeting at both ends, region shaded, the two
 *        intersection points marked with dots and dropped to the axis
 *  4  "when the curves cross: split at the swap, ∫|f − g|"
 *        card ④: two crossing lines, two slabs, dashed swap line
 *  5  "standard results: πa², πab, 16a²/3, 2a²"
 *        card ⑤: circle, ellipse, the two equal parabolas, the diamond
 *  6  "modulus / inequality / braces: decode, sketch, split, integrate"
 *        card ⑥: a modulus wedge under its cap + the four-step chain
 *  7  "the universal routine: Sketch, Limits, Pick, Integrate"
 *        the S–L–P–I banner and the closing line
 */

import React from "react";
import { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

export default function M12Ch08Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the page ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Master cheat sheet", "Master cheat sheet")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 424 62 C 490 58, 600 68, 656 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("the whole chapter on one page — the kind of thing to skim minutes before an exam",
             "poora chapter ek page par — exam se minute pehle skim karne waali cheez")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <Rect x={36} y={96} width={1008} height={404} rx={14}
          fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="8 7" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <Path d="M 378 104 L 378 492" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 6" fill="none" />
        <Path d="M 722 104 L 722 492" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 6" fill="none" />
        <Path d="M 48 300 L 1032 300" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 6" fill="none" />
      </Fade>

      {/* ═══════════ beat 1 — card ①: curve against an axis, pick the variable ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={56} y={122} size={12.5} fill={RED} weight={800} anchor="start">
          {t("① curve against an axis — pick the variable",
             "① axis ke against curve — variable chuno")}
        </T>
      </Fade>
      {/* dx case: walled left and right */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(60, 238, 202, 238)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(72, 246, 72, 154)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d="M 86 224 Q 130 164, 186 188" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Path d="M 86 238 L 86 224 Q 130 164, 186 188 L 186 238 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M 86 224 L 86 238" stroke={INK} sw={2.4} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d="M 186 188 L 186 238" stroke={INK} sw={2.4} dur={0.25} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <Rect x={128} y={185} width={9} height={53} fill={AMBER_DARK} opacity={0.5} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={134} y={255} size={12} fill={INK} weight={800}>∫ y dx</T>
        <T x={134} y={278} size={9.5} fill={MUTED} script>
          {t("walled left & right", "left-right walled")}
        </T>
      </Fade>
      {/* dy case: capped top and bottom */}
      <Draw on={beat >= 1} delay={dl(1, 7.6)} d={arrowD(212, 238, 356, 238)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 8)} d={arrowD(226, 246, 226, 154)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 8.5)} d="M 240 232 Q 300 188, 322 164" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 9.4)}>
        <Path d="M 226 232 L 240 232 Q 300 188, 322 164 L 226 164 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 10)} d="M 226 232 L 240 232" stroke={INK} sw={2.4} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 10.3)} d="M 226 164 L 322 164" stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 10.9)}>
        <Rect x={226} y={189} width={64} height={9} fill={AMBER_DARK} opacity={0.5} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11.6)}>
        <T x={290} y={255} size={12} fill={INK} weight={800}>∫ x dy</T>
        <T x={290} y={278} size={9.5} fill={MUTED} script>
          {t("capped top & bottom", "top-bottom capped")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — card ②: below or crossing the axis ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={400} y={122} size={12.5} fill={RED} weight={800} anchor="start">
          {t("② below or crossing the axis", "② axis ke neeche ya use cross karte")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(404, 210, 706, 210)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(420, 256, 420, 158)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)}
        d="M 436 180 C 476 176, 500 200, 520 210 C 556 232, 606 236, 640 210 C 664 190, 676 178, 694 170"
        stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Path d="M 436 210 L 436 180 C 476 176, 500 200, 520 210 Z" fill={AMBER} opacity={0.22} />
        <Path d="M 640 210 C 664 190, 676 178, 694 170 L 694 210 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Path d="M 520 210 C 556 232, 606 236, 640 210 Z" fill={RED} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <Circle cx={520} cy={210} r={4.5} fill={RED} />
        <Circle cx={640} cy={210} r={4.5} fill={RED} />
        <T x={520} y={246} size={10} fill={RED} weight={800}>{t("root", "root")}</T>
        <T x={640} y={246} size={10} fill={RED} weight={800}>{t("root", "root")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={478} y={198} size={13} fill={AMBER_DARK} weight={900}>+</T>
        <T x={580} y={222} size={14} fill={RED} weight={900}>−</T>
        <T x={668} y={200} size={13} fill={AMBER_DARK} weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={550} y={266} size={12.5} fill={INK} weight={800}>∫ | f(x) | dx</T>
        <T x={550} y={289} size={9.5} fill={MUTED} script>
          {t("split at every root — no cancelling", "har root par split — cancel nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — card ③: between two curves, limits from f = g ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={744} y={122} size={12.5} fill={RED} weight={800} anchor="start">
          {t("③ between two curves", "③ do curves ke beech")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(740, 250, 1030, 250)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={arrowD(756, 258, 756, 166)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 790 210 C 840 174, 900 178, 960 214"
        stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d="M 790 210 C 830 246, 920 250, 960 214"
        stroke={BLUE} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <Path d="M 790 210 C 840 174, 900 178, 960 214 C 920 250, 830 246, 790 210 Z"
          fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <Rect x={869} y={185} width={9} height={54} fill={AMBER_DARK} opacity={0.5} />
        <T x={875} y={174} size={10} fill={AMBER_DARK} weight={800}>{t("top", "top")}</T>
        <T x={1002} y={234} size={10} fill={BLUE} weight={800} anchor="end">{t("bottom", "bottom")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <Circle cx={790} cy={210} r={5} fill={RED} />
        <Circle cx={960} cy={214} r={5} fill={RED} />
        <Path d="M 790 210 L 790 256" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
        <Path d="M 960 214 L 960 256" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={886} y={148} size={10.5} fill={RED} weight={800}>
          {t("limits = the intersections, from f = g", "limits = intersections, f = g se")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={886} y={286} size={12.5} fill={INK} weight={800}>∫ (top − bottom) dx</T>
      </Fade>

      {/* ═══════════ beat 4 — card ④: the curves cross ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={56} y={330} size={12.5} fill={RED} weight={800} anchor="start">
          {t("④ when the curves cross", "④ jab curves cross karein")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={arrowD(56, 440, 362, 440)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(72, 448, 72, 352)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 100 412 L 340 372" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d="M 100 370 L 340 414" stroke={BLUE} sw={2.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Path d="M 100 370 L 220 392 L 100 412 Z" fill={GREEN} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <Path d="M 220 392 L 340 372 L 340 414 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.1)}>
        <Path d="M 220 356 L 220 448" stroke={RED} strokeWidth={1.9} strokeDasharray="6 5" fill="none" />
        <Circle cx={220} cy={392} r={4.5} fill={RED} />
        <T x={220} y={350} size={10.5} fill={RED} weight={800}>{t("swap", "swap")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.9)}>
        <T x={346} y={372} size={10.5} fill={AMBER_DARK} weight={800} anchor="start">f</T>
        <T x={346} y={418} size={10.5} fill={BLUE} weight={800} anchor="start">g</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={210} y={465} size={12.5} fill={INK} weight={800}>∫ | f − g | dx</T>
        <T x={210} y={489} size={9.5} fill={MUTED} script>
          {t("split at the swap", "swap par split karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — card ⑤: the standard results ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={400} y={330} size={12.5} fill={RED} weight={800} anchor="start">
          {t("⑤ the standard results", "⑤ standard results")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Circle cx={436} cy={384} r={20} fill={AMBER} fillOpacity={0.22} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Ellipse cx={522} cy={384} rx={26} ry={14} fill={AMBER} fillOpacity={0.22} stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d="M 578 404 Q 624 404, 624 362" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d="M 578 404 Q 578 362, 624 362" stroke={BLUE} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <Path d="M 578 404 Q 624 404, 624 362 Q 578 362, 578 404 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.8)} d="M 682 364 L 702 384 L 682 404 L 662 384 Z"
        stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <Path d="M 682 364 L 702 384 L 682 404 L 662 384 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={436} y={426} size={12} fill={INK} weight={800}>π a²</T>
        <T x={522} y={426} size={12} fill={INK} weight={800}>π a b</T>
        <T x={601} y={426} size={12} fill={INK} weight={800}>16a²/3</T>
        <T x={682} y={426} size={12} fill={INK} weight={800}>2a²</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.8)}>
        <T x={436} y={446} size={9.5} fill={MUTED} weight={700}>{t("circle", "circle")}</T>
        <T x={522} y={446} size={9.5} fill={MUTED} weight={700}>{t("ellipse", "ellipse")}</T>
        <T x={601} y={446} size={9.5} fill={MUTED} weight={700}>{t("2 parabolas", "2 parabolas")}</T>
        <T x={682} y={446} size={9.5} fill={MUTED} weight={700}>{t("diamond", "diamond")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.8)}>
        <T x={550} y={472} size={10.5} fill={MUTED} script>
          {t("the four you should already know cold", "yeh chaar tumhein pehle se aane chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — card ⑥: modulus, inequality, region in braces ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={744} y={330} size={12.5} fill={RED} weight={800} anchor="start">
          {t("⑥ modulus · inequality · region in braces",
             "⑥ modulus · inequality · braces waala region")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(748, 430, 1024, 430)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={arrowD(886, 438, 886, 352)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2.3)} d="M 826 370 L 886 430 L 946 370" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 3.1)} d="M 818 370 L 954 370" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <Path d="M 826 370 L 886 430 L 946 370 Z" fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={812} y={396} size={10} fill={AMBER_DARK} weight={800} anchor="end">
          {t("modulus", "modulus")}
        </T>
        <T x={904} y={358} size={10} fill={INK} weight={700} anchor="start">{t("the cap", "cap")}</T>
        <T x={1018} y={404} size={10} fill={GREEN_DARK} weight={800} anchor="end">{t("triangle ✓", "triangle ✓")}</T>
      </Fade>
      {/* the four-step chain */}
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={744} y={458} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("decode", "decode")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.6)} d={arrowD(796, 454, 816, 454)} stroke={MUTED} sw={1.6} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={822} y={458} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("sketch", "sketch")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 7.6)} d={arrowD(872, 454, 892, 454)} stroke={MUTED} sw={1.6} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={898} y={458} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("split", "split")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 8.6)} d={arrowD(936, 454, 956, 454)} stroke={MUTED} sw={1.6} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={962} y={458} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("integrate", "integrate")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10.4)}>
        <T x={886} y={486} size={10} fill={MUTED} script>
          {t("always cross-check with elementary geometry",
             "hamesha elementary geometry se cross-check karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the universal routine ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 508 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={44} y={528} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE UNIVERSAL ROUTINE — carry it through every single problem, in this order",
             "UNIVERSAL ROUTINE — ise har ek problem mein, isi order mein le jao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Chip x={44} y={538} w={224} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          {t("S — Sketch the region", "S — region ka Sketch")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5)} d={arrowD(274, 555, 292, 555)} stroke={MUTED} sw={1.7} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <Chip x={298} y={538} w={252} h={34} fill={CREAM} stroke={BLUE} textFill={INK} size={12} script={false}>
          {t("L — Limits from intersections", "L — intersections se Limits")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 8)} d={arrowD(556, 555, 574, 555)} stroke={MUTED} sw={1.7} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 8.4)}>
        <Chip x={580} y={538} w={204} h={34} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={12} script={false}>
          {t("P — Pick d x or d y", "P — d x ya d y Pick karo")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 11)} d={arrowD(790, 555, 808, 555)} stroke={MUTED} sw={1.7} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 11.4)}>
        <Chip x={814} y={538} w={222} h={34} fill={CREAM} stroke={RED} textFill={INK} size={12} script={false}>
          {t("I — Integrate, split, symmetry", "I — Integrate, split, symmetry")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={590} size={13} fill={RED} weight={800}>
          {t("top minus bottom, every strip, every time — decode the boundary, the calculus is the easy part",
             "top minus bottom, har strip, har baar — boundary decode karo, calculus aasaan hissa hai")}
        </T>
      </Fade>
    </Scene>
  );
}
