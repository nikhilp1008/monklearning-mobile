/**
 * P12Ch04 · Section 31 — "Multirange Design and the Sensitivity Trade-Off"
 * Subtopic: Galvanometers and Their Conversion
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   Three text blocks of numbered bullet points ("1. Step-1 Multiplier…",
 *   "2. Tapped Parallel Shunt…", "Current Sensitivity S_I = (N A B)/k…")
 *   with FOUR drawn strokes on the whole board: the title underline and two
 *   horizontal rules. Everything was gated on beats 0, 1, 5 and 10 — so the
 *   board stood still for the 37 s of beat 2, the 47 s of beat 6 and the
 *   whole of beats 3, 4, 7, 8, 9 and 11. No resistor chain, no shunt chain,
 *   no meter of any kind was ever drawn, although the narration says in so
 *   many words "the diagram shows the physical arrangement".
 *
 * WHAT THE NARRATION TEACHES
 *   One galvanometer becomes a multirange voltmeter by tapping a chain of
 *   series resistors (R₁ = V₁/I_g − G, then R₂ = (V₂−V₁)/I_g, … — only the
 *   first carries the −G), and a multirange ammeter by tapping a chain of
 *   shunts (S_j = I_g G/(I_j − I_g), decreasing with range, wired as an
 *   Ayrton chain so switching never bares the coil). Then the conceptual
 *   close: S_I = NAB/k looks like four free levers, but raising N also
 *   raises G, and S_V = NAB/(kG) is therefore unchanged.
 *
 * BEAT MAP (n_reveals = 12, gates 0..11)
 *   0  framing                     title + drawn underline
 *   1  stack series resistors      voltmeter chain drawn (G, R₁R₂R₃, taps) + I_g·R_tot = V_n
 *   2  the pattern of resistors    R₁, R₂, R₃ written out
 *   3  "the diagram shows…"        range-switch arrow onto the V₂ tap
 *   4  two things to notice        ring round the −G + the two cautions
 *   5  mirror-image problem        ammeter panel heading
 *   6  shunt per range             ammeter/Ayrton chain drawn + S_j formula
 *   7  decreasing shunts           S₁ > S₂ > S₃ + why the chain is connected
 *   8  the conceptual close        rule across the board + the question
 *   9  four apparent levers        S_I = NAB/k + N↑ A↑ B↑ k↓ chips
 *  10  every lever has a cost      G rises with N · S_V = NAB/(kG) · the ×2/×2 cancel
 *  11  spring, magnet, verdict     closing chip
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------- beat 0 — title ---------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Multirange design & the sensitivity trade-off",
             "Multirange design & the sensitivity trade-off")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 190 60 C 460 56, 700 64, 890 59" stroke={RED} sw={2.2} dur={0.7} />

      {/* ================= LEFT — MULTIRANGE VOLTMETER ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={56} y={96} size={14} fill={RED} weight={800} anchor="start">
          {t("MULTIRANGE VOLTMETER — ONE TAPPED SERIES CHAIN",
             "MULTIRANGE VOLTMETER — ONE TAPPED SERIES CHAIN")}
        </T>
      </Fade>

      {/* beat 1 — the chain itself */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 106 150 H 446" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={86} cy={150} r={20} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={86} y={156} size={14} fill={INK} weight={800}>G</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Rect x={126} y={136} width={56} height={28} rx={4} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.2} />
        <T x={154} y={128} size={12.5} fill={AMBER_DARK} weight={800}>R₁</T>
        <Rect x={222} y={136} width={56} height={28} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={250} y={128} size={12.5} fill={INK} weight={800}>R₂</T>
        <Rect x={318} y={136} width={56} height={28} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={346} y={128} size={12.5} fill={INK} weight={800}>R₃</T>
      </Fade>

      {/* beat 1 — the tap points hanging off the chain */}
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 196 150 V 182" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 292 150 V 182" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 392 150 V 182" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Circle cx={196} cy={182} r={4.5} fill={AMBER_DARK} />
        <Circle cx={292} cy={182} r={4.5} fill={AMBER_DARK} />
        <Circle cx={392} cy={182} r={4.5} fill={AMBER_DARK} />
        <T x={206} y={187} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">V₁</T>
        <T x={302} y={187} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">V₂</T>
        <T x={402} y={187} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">V₃</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={56} y={254} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("every range obeys the same relation:  I_g (G + R₁ + … + R_n) = V_n",
             "every range obeys the same relation:  I_g (G + R₁ + … + R_n) = V_n")}
        </T>
      </Fade>

      {/* beat 2 — the pattern */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={56} y={286} size={14} fill={AMBER_DARK} weight={800} anchor="start">R₁ = V₁ / I_g − G</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={56} y={312} size={14} fill={INK} weight={800} anchor="start">R₂ = (V₂ − V₁) / I_g</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={56} y={338} size={14} fill={INK} weight={800} anchor="start">R₃ = (V₃ − V₂) / I_g</T>
      </Fade>

      {/* beat 3 — the selector arriving at a tap */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(292, 232, 292, 194)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={304} y={238} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the range switch picks a tap — further along = more R = higher range",
             "the range switch picks a tap — further along = more R = higher range")}
        </T>
      </Fade>

      {/* beat 4 — the two cautions */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(150, 282, 26, 14)} stroke={RED} sw={2.1} dur={0.55} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={56} y={368} size={12.5} fill={RED} weight={800} anchor="start">
          {t("only R₁ carries the − G: the coil sits in the chain once, so subtract it once",
             "only R₁ carries the − G: the coil sits in the chain once, so subtract it once")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={56} y={390} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("every later resistor covers only the increment the new range adds",
             "every later resistor covers only the increment the new range adds")}
        </T>
      </Fade>

      {/* ================= RIGHT — MULTIRANGE AMMETER ================= */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={96} size={14} fill={RED} weight={800} anchor="start">
          {t("MULTIRANGE AMMETER — THE MIRROR IMAGE, SERIES ⇄ PARALLEL",
             "MULTIRANGE AMMETER — THE MIRROR IMAGE, SERIES ⇄ PARALLEL")}
        </T>
      </Fade>

      {/* beat 6 — the Ayrton chain */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(566, 140, 612, 140)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 620 140 H 680 M 720 140 H 840" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={arrowD(846, 140, 892, 140)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={700} cy={140} r={20} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={700} y={146} size={14} fill={INK} weight={800}>G</T>
        <Circle cx={620} cy={140} r={4.5} fill={INK} />
        <Circle cx={840} cy={140} r={4.5} fill={INK} />
        <T x={586} y={128} size={12.5} fill={GREEN_DARK} weight={800}>I</T>
        <T x={660} y={128} size={12} fill={INK_LIGHT} weight={800}>I_g</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 620 140 V 200 H 840 V 140" stroke={INK} sw={2.2} dur={1.0} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Rect x={640} y={187} width={50} height={26} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={665} y={180} size={12} fill={GREEN_DARK} weight={800}>S₁</T>
        <Rect x={706} y={187} width={50} height={26} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={731} y={180} size={12} fill={GREEN_DARK} weight={800}>S₂</T>
        <Rect x={772} y={187} width={50} height={26} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={797} y={180} size={12} fill={GREEN_DARK} weight={800}>S₃</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.3)} d="M 632 200 V 250 M 698 200 V 250 M 764 200 V 250" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <Circle cx={632} cy={200} r={4.5} fill={AMBER_DARK} />
        <Circle cx={698} cy={200} r={4.5} fill={AMBER_DARK} />
        <Circle cx={764} cy={200} r={4.5} fill={AMBER_DARK} />
        <T x={632} y={268} size={12.5} fill={AMBER_DARK} weight={800}>I₁</T>
        <T x={698} y={268} size={12.5} fill={AMBER_DARK} weight={800}>I₂</T>
        <T x={764} y={268} size={12.5} fill={AMBER_DARK} weight={800}>I₃</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.1)}>
        <T x={560} y={300} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          S_j = I_g G / (I_j − I_g)
        </T>
        <T x={760} y={300} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("— the boxed formula, one range at a time", "— the boxed formula, one range at a time")}
        </T>
      </Fade>

      {/* beat 7 — ordering + why it is a chain */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={560} y={332} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("bigger range ⇒ smaller shunt:  S₁ > S₂ > S₃",
             "bigger range ⇒ smaller shunt:  S₁ > S₂ > S₃")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={560} y={362} size={12.5} fill={INK} weight={700} anchor="start">
          {t("wired as one connected chain (an Ayrton shunt), so moving the tap",
             "wired as one connected chain (an Ayrton shunt), so moving the tap")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={560} y={384} size={12.5} fill={RED} weight={800} anchor="start">
          {t("never breaks the shunt and never bares the coil to the full current",
             "never breaks the shunt and never bares the coil to the full current")}
        </T>
      </Fade>

      {/* ================= BOTTOM — THE SENSITIVITY TRADE-OFF ================= */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 56 408 H 1024" stroke={MUTED} sw={1.6} dur={0.9} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={56} y={432} size={15} fill={RED} weight={800} anchor="start">
          {t("WHY IS NOBODY BUILDING AN INFINITELY SENSITIVE GALVANOMETER?",
             "WHY IS NOBODY BUILDING AN INFINITELY SENSITIVE GALVANOMETER?")}
        </T>
      </Fade>

      {/* beat 9 — four apparent levers */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={56} y={470} size={15} fill={INK} weight={900} anchor="start">S_I = N A B / k</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.7)}>
        <Chip x={216} y={452} w={78} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          more N
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.0)}>
        <Chip x={304} y={452} w={78} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          bigger A
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.3)}>
        <Chip x={392} y={452} w={78} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          stronger B
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <Chip x={480} y={452} w={78} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          weaker k
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.1)}>
        <T x={572} y={470} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("four levers that look free — every one of them has a cost",
             "four levers that look free — every one of them has a cost")}
        </T>
      </Fade>

      {/* beat 10 — the cancellation */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={56} y={502} size={13.5} fill={RED} weight={800} anchor="start">
          {t("more turns ⇒ a longer, heavier coil ⇒ G climbs roughly in step with N",
             "more turns ⇒ a longer, heavier coil ⇒ G climbs roughly in step with N")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.0)}>
        <T x={56} y={528} size={14} fill={INK} weight={900} anchor="start">S_V = S_I / G = N A B / (k G)</T>
      </Fade>
      {/* the ×2 / ×2 cancel, drawn */}
      <Draw on={beat >= 10} delay={dl(10, 1.6)} d="M 664 518 H 748" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 1.8)}>
        <T x={706} y={510} size={14} fill={INK} weight={800}>N A B</T>
        <T x={706} y={540} size={14} fill={INK} weight={800}>k G</T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 2.2)} d={arrowD(648, 514, 648, 494)} stroke={RED} sw={2} dur={0.35} />
      <Draw on={beat >= 10} delay={dl(10, 2.5)} d={arrowD(648, 522, 648, 546)} stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 10} delay={dl(10, 2.8)}>
        <T x={630} y={500} size={11.5} fill={RED} weight={800} anchor="end">×2</T>
        <T x={630} y={544} size={11.5} fill={RED} weight={800} anchor="end">×2</T>
        <T x={768} y={528} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("both double ⇒ S_V unchanged", "both double ⇒ S_V unchanged")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 3.2)}>
        <T x={56} y={550} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("raising N buys current sensitivity — but NOT voltage sensitivity",
             "raising N buys current sensitivity — but NOT voltage sensitivity")}
        </T>
      </Fade>

      {/* beat 11 — the closing verdict */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <Chip x={56} y={562} w={968} h={34} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ weaker spring ⇒ flimsy and slow · stronger field ⇒ limited by the magnet you can fit · so S_I and S_V stay two separate figures of merit",
             "★ weaker spring ⇒ flimsy and slow · stronger field ⇒ limited by the magnet you can fit · so S_I and S_V stay two separate figures of merit")}
        </Chip>
      </Fade>
    </Scene>
  );
}
