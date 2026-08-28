/**
 * M12Ch01 · Section 19 — "Composition: chaining functions in series"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice builds composition from a two-stage water system (RO purifier
 * then chiller), names (g ∘ f)(x) = g(f(x)), drills the "innermost acts
 * first" habit, then gives the two algebraic facts: NOT commutative,
 * but associative. It closes on the relay diagram.
 *
 * Every beat therefore gets a real picture: the plumbing actually flows,
 * the three stages actually carry a dot each, the notation is exploded
 * with a ring on the inner f, non-commutativity is two relay lanes that
 * end in different expressions, associativity is one chain with two
 * different groupings bracketed, and the close is the full relay strip.
 *
 * Grid:
 *   header      y 30..100  (title, underline, subtitle, full-width rule)
 *   BAND A      y 108..345  left x 40..500  water system   (beats 0,1)
 *                           right x 528..1044 sets + formula (beats 2,3)
 *   BAND B      y 360..470  left x 40..500  notation blow-up (beat 4)
 *                           right x 528..1044 two relay lanes (beat 5)
 *   BAND C      y 482..596  left x 40..560  associativity   (beat 6)
 *                           right x 584..1044 the relay      (beat 7)
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "a two-stage water system"        title + rule + the named purifier and
 *                                       chiller boxes (no captions yet)
 *  1  "pour tap water through it"       faucet, three flow arrows, the glass
 *                                       filling, the "cleans it"/"cools it" captions
 *  2  "that is composition, g ∘ f"      three stages carrying x, f(x), g(f(x)),
 *                                       the f and g arrows, the definition
 *  3  "run f first, feed it into g"     the order-of-operations captions
 *  4  "innermost function acts first"   g ∘ f (x) exploded, ring on f,
 *                                       1st / 2nd order badges
 *  5  "g ∘ f ≠ f ∘ g, not commutative"  two relay lanes ending in different
 *                                       expressions, separated by ≠
 *  6  "but it IS associative"           x → f → g → h with the two
 *                                       groupings bracketed above and below
 *  7  "the relay: f always acts first"  the full x → [f] → [g] → g(f(x))
 *                                       strip with 1st / 2nd order badges
 *
 * Visual vocabulary (shared with Sections 20 and 21 of this subtopic):
 *   f — AMBER_DARK · g — BLUE · h — PURPLE · results and identities —
 *   GREEN_DARK · headings and warnings — RED · frames, dots and axes — INK.
 */

import React from "react";
import { Circle, Polygon } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";
const PURPLE = "#7C3AED";

/** axis-aligned box as a drawable closed path */
const boxD = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;

export default function M12Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing + the two machines ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Composition — chaining functions in series",
             "Composition — functions ko series mein chain karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 258 62 C 440 58, 640 66, 822 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("two machines in a row — the output of the first is the input of the second",
             "do machines ek ke baad ek — pehli ka output doosri ka input")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={40} y={126} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  a two-stage system: RO purifier, then chiller",
             "①  two-stage system: pehle RO purifier, phir chiller")}
        </T>
      </Fade>

      {/* the RO purifier */}
      <Draw on={beat >= 0} delay={dl(0, 4)} d={boxD(118, 176, 126, 60)}
        stroke={AMBER_DARK} sw={2.6} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 0} delay={dl(0, 4.7)}>
        <T x={181} y={200} size={13} fill={AMBER_DARK} weight={800}>RO purifier</T>
      </Fade>

      {/* the chiller */}
      <Draw on={beat >= 0} delay={dl(0, 5.4)} d={boxD(294, 176, 126, 60)}
        stroke={BLUE} sw={2.6} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 0} delay={dl(0, 6.1)}>
        <T x={357} y={200} size={13} fill={BLUE} weight={800}>chiller</T>
      </Fade>

      {/* ═══════════ beat 1 — pour the water through ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 58 166 V 206 H 88" stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={58} cy={161} r={5.5} fill="none" stroke={INK} strokeWidth={2.2} />
        <T x={40} y={232} size={11.5} fill={MUTED} weight={700} anchor="start">tap water</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(92, 206, 114, 206)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={181} y={224} size={11.5} fill={MUTED} weight={700}>
          {t("cleans it", "saaf karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(248, 206, 290, 206)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={269} y={194} size={10.5} fill={MUTED} weight={700}>output</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={357} y={224} size={11.5} fill={MUTED} weight={700}>
          {t("cools it", "thanda karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(424, 206, 448, 206)} stroke={BLUE} sw={2.2} dur={0.3} />

      {/* the glass of cold, clean water */}
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 454 180 L 460 236 L 486 236 L 492 180"
        stroke={INK} sw={2.2} dur={0.6} />
      <Polygon
        points="455.9,198 490.1,198 486,236 460,236"
        fill={BLUE}
        stroke="none"
        opacity={beat >= 1 ? 0.32 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={473} y={254} size={11} fill={BLUE} weight={700}>
          {t("cold + clean", "thanda + saaf")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={40} y={278} size={12.5} fill={INK} weight={700} anchor="start">
          {t("tap water in → purifier cleans → chiller cools",
             "tap water andar → purifier saaf karta hai → chiller thanda")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={40} y={302} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("cold, clean water out — one machine feeds the next",
             "cold clean water bahar — ek machine agli ko feed karti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — that is composition ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={528} y={126} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  that is exactly composition", "②  yahi bilkul composition hai")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 0.8)}
        d="M 544 210 A 46 46 0 1 1 636 210 A 46 46 0 1 1 544 210" stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)}
        d="M 714 210 A 46 46 0 1 1 806 210 A 46 46 0 1 1 714 210" stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)}
        d="M 884 210 A 46 46 0 1 1 976 210 A 46 46 0 1 1 884 210" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={590} cy={210} r={5} fill={INK} />
        <T x={590} y={238} size={14} fill={INK} weight={900}>x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(640, 210, 710, 210)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={675} y={196} size={15} fill={AMBER_DARK} weight={900}>f</T>
        <Circle cx={760} cy={210} r={5} fill={INK} />
        <T x={760} y={238} size={13} fill={AMBER_DARK} weight={900}>f(x)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={arrowD(810, 210, 880, 210)} stroke={BLUE} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={845} y={196} size={15} fill={BLUE} weight={900}>g</T>
        <Circle cx={930} cy={210} r={5} fill={INK} />
        <T x={930} y={238} size={13} fill={BLUE} weight={900}>g(f(x))</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={760} y={288} size={20} fill={GREEN_DARK} weight={900}>
          ( g ∘ f )( x )  =  g( f(x) )
        </T>
      </Fade>

      {/* ═══════════ beat 3 — order of operations ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={528} y={316} size={12.5} fill={INK} weight={700} anchor="start">
          {t("run f first, then feed its output straight into g",
             "pehle f chalao, phir uska output seedha g mein feed karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={528} y={340} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the ORDER of operations is the whole story",
             "order of operations hi poori kahani hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — innermost acts first ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={376} size={13} fill={RED} weight={800} anchor="start">
          {t("③  the habit: the innermost function acts FIRST",
             "③  habit: innermost function hi pehle act karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={60} y={424} size={30} fill={BLUE} weight={900} anchor="start">g</T>
        <T x={90} y={424} size={28} fill={INK} weight={900} anchor="start">∘</T>
        <T x={126} y={424} size={30} fill={AMBER_DARK} weight={900} anchor="start">f</T>
        <T x={166} y={424} size={30} fill={INK} weight={900} anchor="start">( x )</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={ringD(134, 415, 20, 22)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={240} y={412} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("1st — f touches x first", "1st — f pehle x ko chhoota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={240} y={436} size={12.5} fill={BLUE} weight={800} anchor="start">
          {t("2nd — then g runs", "2nd — phir g chalta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.2)}>
        <T x={40} y={462} size={12} fill={MUTED} weight={700} anchor="start">
          {t("even though g is written on the LEFT, f touches x first",
             "chaahe g baayin taraf likha ho, x ko f hi pehle chhoota hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — not commutative ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={528} y={376} size={13} fill={RED} weight={800} anchor="start">
          {t("④  swap who runs first and the race changes",
             "④  kaun pehle daude, wo swap karo to race badal jaati hai")}
        </T>
      </Fade>

      {/* lane 1 : x → f → g */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={534} y={411} size={13} fill={INK} weight={900} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={arrowD(544, 406, 554, 406)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={boxD(556, 393, 44, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={578} y={411} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(604, 406, 624, 406)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={boxD(626, 393, 44, 26)} stroke={BLUE} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={648} y={411} size={14} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={arrowD(674, 406, 694, 406)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <T x={700} y={411} size={13} fill={GREEN_DARK} weight={800} anchor="start">g( f(x) )</T>
        <T x={780} y={411} size={13.5} fill={INK} weight={900} anchor="start">= g ∘ f</T>
      </Fade>

      {/* lane 2 : x → g → f */}
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={534} y={453} size={13} fill={INK} weight={900} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d={arrowD(544, 448, 554, 448)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={boxD(556, 435, 44, 26)} stroke={BLUE} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 4.7)}>
        <T x={578} y={453} size={14} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.9)} d={arrowD(604, 448, 624, 448)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d={boxD(626, 435, 44, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={648} y={453} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.6)} d={arrowD(674, 448, 694, 448)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 5.9)}>
        <T x={700} y={453} size={13} fill={GREEN_DARK} weight={800} anchor="start">f( g(x) )</T>
        <T x={780} y={453} size={13.5} fill={INK} weight={900} anchor="start">= f ∘ g</T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={886} y={432} size={30} fill={RED} weight={900} anchor="start">≠</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.6)}>
        <T x={918} y={424} size={12.5} fill={RED} weight={800} anchor="start">
          {t("in general", "generally")}
        </T>
        <T x={918} y={448} size={12.5} fill={RED} weight={800} anchor="start">
          {t("NOT commutative", "commutative nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — but it IS associative ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={40} y={496} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤  but it IS associative", "⑤  par yeh associative hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={40} y={541} size={13} fill={INK} weight={900} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={arrowD(52, 536, 70, 536)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={boxD(72, 523, 44, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={94} y={541} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={arrowD(120, 536, 140, 536)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 2)} d={boxD(142, 523, 44, 26)} stroke={BLUE} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={164} y={541} size={14} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d={arrowD(190, 536, 210, 536)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 2.7)} d={boxD(212, 523, 44, 26)} stroke={PURPLE} sw={2.2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={234} y={541} size={14} fill={PURPLE} weight={900}>h</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d={arrowD(260, 536, 280, 536)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={286} y={541} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">h(g(f(x)))</T>
      </Fade>

      {/* the two groupings */}
      <Draw on={beat >= 6} delay={dl(6, 4.4)} d="M 72 558 V 566 H 186 V 558" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 5)} d="M 142 516 V 508 H 256 V 516" stroke={PURPLE} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={40} y={590} size={13} fill={GREEN_DARK} weight={900} anchor="start">
          h ∘ (g ∘ f)  =  (h ∘ g) ∘ f
        </T>
        <T x={240} y={590} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("grouping does not matter", "grouping se farak nahin padta")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the relay ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={584} y={494} size={13} fill={RED} weight={800} anchor="start">
          {t("⑥  the relay: f always runs first",
             "⑥  relay: f hamesha pehle daudta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={588} y={560} size={20} fill={INK} weight={900} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={arrowD(606, 552, 640, 552)} stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 1)} d={boxD(644, 528, 68, 48)} stroke={AMBER_DARK} sw={2.8} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={678} y={560} size={22} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={arrowD(718, 552, 762, 552)} stroke={BLUE} sw={2.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={740} y={516} size={12} fill={AMBER_DARK} weight={800}>f(x)</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={boxD(766, 528, 68, 48)} stroke={BLUE} sw={2.8} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={800} y={560} size={22} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.7)} d={arrowD(840, 552, 884, 552)} stroke={GREEN_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={892} y={560} size={15} fill={GREEN_DARK} weight={900} anchor="start">g( f(x) )</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <T x={678} y={592} size={12} fill={AMBER_DARK} weight={900}>
          {t("1st · first", "1st · pehle")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={800} y={592} size={12} fill={BLUE} weight={900}>
          {t("2nd · second", "2nd · baad mein")}
        </T>
      </Fade>
    </Scene>
  );
}
