/**
 * P12Ch04 · Section 27 — "The Two Conversions Are Mirror Images"
 * (Subtopic 4 · Galvanometers and Their Conversion)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template on gates 0/1/3/6/7/8 — nine narration
 * segments, six of them landing on a board of bold sentences with three drawn
 * horizontal rules and nothing else. A section whose entire point is "look at
 * the board, the placement is where half the confusion lives" had no circuit.
 *
 * NARRATION TEACHES: the toll-booth image rendered in electrical language —
 * a small shunt in PARALLEL divides the current (ammeter); a large multiplier
 * in SERIES shares the voltage (voltmeter); then where each instrument sits in
 * the circuit; then the two conditions — linearity requires the radial field,
 * and real meters are not ideal, so both load the circuit slightly.
 *
 * BEAT MAP (n_reveals = 9 — gates 0..8, every beat used):
 *   0 title, subtitle, the mirror axis down the middle
 *   1 ammeter job + the parallel topology drawn (junctions, coil G, wide shunt S)
 *   2 the current divides — I, I_g, I − I_g arrows and the low-R consequence
 *   3 voltmeter job + the series topology drawn (terminals, multiplier R, coil G)
 *   4 one current through the chain — the whisper, and the high-R consequence
 *   5 PLACEMENT — A inserted in the line, V bridged across the element
 *   6 "now the conditions" heading
 *   7 condition 1 — linearity needs the radial field (linear vs sine graph)
 *   8 condition 2 — real meters are not ideal; the ideal limits 0 and ∞
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const line = (k: number, x: number, y: number, d: number, tone: string, s: string) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={12.6} fill={tone} weight={600} anchor="start">
        {s}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The Two Conversions Are Mirror Images", "The Two Conversions Are Mirror Images")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d="M 288 60 C 480 55, 650 66, 792 58"
        stroke={RED}
        sw={2.2}
        dur={0.65}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={12.8} fill={MUTED} script>
          {t(
            "seeing them as mirror images is what stops you ever confusing them",
            "seeing them as mirror images is what stops you ever confusing them"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 540 96 L 540 300" stroke={MUTED} sw={1.2} dur={0.8} />

      {/* ================= beat 1 — the ammeter topology ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={114} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("AMMETER — carry a lot, disturb little", "AMMETER — carry a lot, disturb little")}
        </T>
      </Fade>
      {/* leads */}
      <Draw on={beat >= 1} delay={dl(1, 0.55)} d={arrowD(64, 182, 140, 182)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(420, 182, 496, 182)} stroke={INK} sw={2} dur={0.35} />
      {/* upper branch — the coil */}
      <Draw on={beat >= 1} delay={dl(1, 0.95)} d="M 140 182 L 140 150 L 263 150" stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M 297 150 L 420 150 L 420 182" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.35)}>
        <Circle cx={280} cy={150} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={280} y={155} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      {/* lower branch — the shunt, drawn wide and short */}
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 140 182 L 140 214 L 245 214" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.75)} d="M 315 214 L 420 214 L 420 182" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Rect x={245} y={205} width={70} height={18} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={280} y={219} size={12.5} fill={GREEN_DARK} weight={800}>
          S
        </T>
        <Circle cx={140} cy={182} r={3.6} fill={INK} />
        <Circle cx={420} cy={182} r={3.6} fill={INK} />
      </Fade>
      {line(1, 44, 254, 2.3, INK, t("a tiny shunt S wired in PARALLEL with the coil", "a tiny shunt S wired in PARALLEL with the coil"))}

      {/* ================= beat 2 — the current divides ================= */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(186, 150, 232, 150)} stroke={RED} sw={1.5} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.45)} d={arrowD(176, 214, 236, 214)} stroke={GREEN_DARK} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={100} y={172} size={12.5} fill={INK} weight={800}>
          I
        </T>
        <T x={340} y={140} size={12.5} fill={RED} weight={800} anchor="start">
          I_g  (the trickle)
        </T>
        <T x={340} y={240} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          I − I_g
        </T>
      </Fade>
      {line(2, 44, 274, 1.0, INK_LIGHT, t("the scale is simply relabelled to read the TOTAL current", "the scale is simply relabelled to read the TOTAL current"))}
      {line(2, 44, 294, 1.4, GREEN_DARK, t("and the parallel pair has low resistance — the line hardly notices it", "and the parallel pair has low resistance — the line hardly notices it"))}

      {/* ================= beat 3 — the voltmeter topology ================= */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={568} y={114} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("VOLTMETER — sample a voltage, drain nothing", "VOLTMETER — sample a voltage, drain nothing")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 610 182 L 680 182" stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 0.85)}>
        <Rect x={680} y={166} width={80} height={32} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.4} />
        <T x={720} y={187} size={13} fill={AMBER_DARK} weight={800}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d="M 760 182 L 863 182" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Circle cx={880} cy={182} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={880} y={187} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d="M 897 182 L 990 182" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Circle cx={606} cy={182} r={5} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={994} cy={182} r={5} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d="M 606 152 L 606 140 L 994 140 L 994 152" stroke={INK_LIGHT} sw={1.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.15)}>
        <T x={800} y={132} size={12.6} fill={INK_LIGHT} weight={800}>
          {t("V, applied across the whole thing", "V, applied across the whole thing")}
        </T>
      </Fade>
      {line(3, 568, 254, 2.4, INK, t("a large multiplier R wired in SERIES with the coil", "a large multiplier R wired in SERIES with the coil"))}

      {/* ================= beat 4 — one current only ================= */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(700, 216, 780, 216)} stroke={GREEN_DARK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={792} y={220} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("ONE current, a whisper of it", "ONE current, a whisper of it")}
        </T>
      </Fade>
      {line(4, 568, 274, 1.0, INK_LIGHT, t("series shares the voltage · parallel splits the current", "series shares the voltage · parallel splits the current"))}
      {line(4, 568, 294, 1.4, AMBER_DARK, t("drawing almost nothing is what makes the parallel tap harmless", "drawing almost nothing is what makes the parallel tap harmless"))}

      {/* ================= beat 5 — placement ================= */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={322} size={14} fill={INK} weight={800} anchor="start">
          {t("WHERE EACH ONE GOES — placement is where half the confusion lives", "WHERE EACH ONE GOES — placement is where half the confusion lives")}
        </T>
      </Fade>
      {/* left: ammeter in the line */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 100 340 L 240 340 M 302 340 L 440 340 L 440 404 L 288 404 M 252 404 L 100 404 L 100 340" stroke={INK} sw={1.8} dur={1.0} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Rect x={240} y={328} width={62} height={24} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <T x={271} y={345} size={12.5} fill={INK} weight={700}>
          {t("element", "element")}
        </T>
        <Circle cx={270} cy={404} r={18} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.4} />
        <T x={270} y={409} size={13.5} fill={GREEN_DARK} weight={800}>
          A
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.35)} d="M 92 358 L 108 358 M 96 374 L 104 374" stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={330} y={382} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("IN the line", "IN the line")}
        </T>
        <T x={330} y={400} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("→ must be LOW R", "→ must be LOW R")}
        </T>
      </Fade>
      {/* right: voltmeter across the element */}
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d="M 620 340 L 748 340 M 812 340 L 960 340 L 960 404 L 620 404 L 620 340" stroke={INK} sw={1.8} dur={1.0} />
      <Fade on={beat >= 5} delay={dl(5, 2.35)}>
        <Rect x={748} y={328} width={64} height={24} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <T x={780} y={345} size={12.5} fill={INK} weight={700}>
          {t("element", "element")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d="M 748 340 L 748 372 L 762 372 M 798 372 L 812 372 L 812 340" stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Circle cx={780} cy={372} r={18} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.4} />
        <T x={780} y={377} size={13.5} fill={AMBER_DARK} weight={800}>
          V
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d="M 612 358 L 628 358 M 616 374 L 624 374" stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={848} y={382} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("ACROSS the element", "ACROSS the element")}
        </T>
        <T x={848} y={400} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("→ must be HIGH R", "→ must be HIGH R")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={540} y={434} size={14} fill={RED} weight={800}>
          {t(
            "low R in PARALLEL → ammeter    ·    high R in SERIES → voltmeter",
            "low R in PARALLEL → ammeter    ·    high R in SERIES → voltmeter"
          )}
        </T>
      </Fade>

      {/* ================= beat 6 — the conditions ================= */}
      <Draw on={beat >= 6} delay={dl(6, 0.15)} d="M 44 452 L 1036 452" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={44} y={476} size={14} fill={INK} weight={800} anchor="start">
          {t(
            "THE CONDITIONS — this subtopic is about real instruments, not idealised physics",
            "THE CONDITIONS — this subtopic is about real instruments, not idealised physics"
          )}
        </T>
      </Fade>

      {/* ================= beat 7 — linearity needs the radial field ================= */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={44} y={500} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("1 · the deflection must be LINEAR in I", "1 · the deflection must be LINEAR in I")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.55)} d={arrowD(70, 578, 210, 578)} stroke={INK} sw={1.5} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={arrowD(70, 578, 70, 514)} stroke={INK} sw={1.5} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 0.95)} d="M 70 578 L 198 520" stroke={GREEN} sw={2.6} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 70 578 C 112 560, 152 528, 198 522" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={214} y={582} size={12.5} fill={INK} weight={700} anchor="start">
          I
        </T>
        <T x={58} y={518} size={12.5} fill={INK} weight={700} anchor="end">
          φ
        </T>
      </Fade>
      {line(7, 240, 524, 1.7, GREEN_DARK, t("radial field → sin θ ≡ 1 → the straight green line", "radial field → sin θ ≡ 1 → the straight green line"))}
      {line(7, 240, 546, 2.0, RED, t("an ordinary uniform field → sin θ returns → the red curve", "an ordinary uniform field → sin θ returns → the red curve"))}
      {line(7, 240, 568, 2.3, INK_LIGHT, t("and a bent scale cannot simply be relabelled in A or V", "and a bent scale cannot simply be relabelled in A or V"))}

      {/* ================= beat 8 — real meters are not ideal ================= */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={568} y={500} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("2 · real meters are NOT ideal", "2 · real meters are NOT ideal")}
        </T>
      </Fade>
      {line(8, 568, 522, 0.6, INK, t("a real A has small but non-zero R → it does lower the current", "a real A has small but non-zero R → it does lower the current"))}
      {line(8, 568, 542, 0.9, INK, t("a real V has large but finite R → it does draw a little current", "a real V has large but finite R → it does draw a little current"))}
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <Chip x={568} y={552} w={224} h={28} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={12.5} script={false}>
          {t("ideal ammeter: R = 0", "ideal ammeter: R = 0")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.45)}>
        <Chip x={808} y={552} w={228} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5} script={false}>
          {t("ideal voltmeter: R = ∞", "ideal voltmeter: R = ∞")}
        </Chip>
      </Fade>
      {line(8, 568, 592, 1.7, RED,t("both leave a small systematic loading error — Worked Example 4 breaks it", "both leave a small systematic loading error — Worked Example 4 breaks it"))}
    </Scene>
  );
}
