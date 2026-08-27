/**
 * P12Ch04 · Section 29 — "Derivation A: Converting a Galvanometer Into an Ammeter"
 * (Subtopic 4 · Galvanometers and Their Conversion)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template gated on 0/1/3/4/6/7/8 — a board of bold
 * sentences and three drawn rules. The narration says "look at the diagram
 * while we set it up" and "notice that the shunt block is drawn wide and short";
 * there was no diagram and no shunt block.
 *
 * NARRATION TEACHES: the CBSE derivation, built from the physical reason rather
 * than the formula — the goal, the parallel arrangement, the one fact (parallel
 * elements share a p.d.), the equation I_g G = (I − I_g) S read from both sides,
 * the solve, the effective resistance argument, and the trend that a bigger
 * range demands a smaller shunt.
 *
 * BEAT MAP (n_reveals = 9 — gates 0..8, every beat used):
 *   0 title + "the marks are in the reason, not the formula"
 *   1 THE GOAL — small full-scale current, large total, so divert the excess
 *   2 THE DIAGRAM — junctions, red coil branch, green shunt drawn wide and short
 *   3 the one fact — rings on both junctions: same junctions ⇒ parallel ⇒ same p.d.
 *   4 write the shared voltage out: I_g · G = (I − I_g) · S
 *   5 read both sides — braces under each side, inverse-proportion remark
 *   6 solve: S = I_g G ⁄ (I − I_g), and everything in it is known
 *   7 why it works — R_A = G S ⁄ (G + S) is tiny; the meter sits in series
 *   8 the trend — range in the denominator, so big ranges take milliohm strips
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
  ringD,
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

export default function P12Ch04Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const line = (
    k: number,
    x: number,
    y: number,
    d: number,
    tone: string,
    s: string,
    size = 12.6
  ) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={size} fill={tone} weight={600} anchor="start">
        {s}
      </T>
    </Fade>
  );

  const head = (k: number, x: number, y: number, d: number, tone: string, s: string) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={14} fill={tone} weight={800} anchor="start">
        {s}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Derivation A — Galvanometer into an Ammeter", "Derivation A — Galvanometer into an Ammeter")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d="M 250 60 C 460 55, 660 66, 830 58"
        stroke={RED}
        sw={2.2}
        dur={0.65}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={12.8} fill={MUTED} script>
          {t(
            "CBSE, 2–3 marks — the marks are in the physical reason, not in the formula",
            "CBSE, 2–3 marks — the marks are in the physical reason, not in the formula"
          )}
        </T>
      </Fade>

      {/* ================= beat 1 — the goal ================= */}
      {head(1, 44, 112, 0.2, INK, t("THE GOAL — write this in your answer", "THE GOAL — write this in your answer"))}
      {line(1, 44, 136, 0.6, INK_LIGHT, t("the coil can only carry a small full-scale current I_g", "the coil can only carry a small full-scale current I_g"))}
      {line(1, 44, 156, 1.0, GREEN_DARK, t("so give the excess somewhere else to go — a small shunt S in PARALLEL", "so give the excess somewhere else to go — a small shunt S in PARALLEL"))}

      {/* ================= beat 2 — the diagram ================= */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(70, 262, 170, 262)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 170 262 L 170 222 L 283 222" stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.55)} d="M 317 222 L 440 222 L 440 262" stroke={RED} sw={2.1} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={300} cy={222} r={18} fill={CREAM} stroke={RED} strokeWidth={2.4} />
        <T x={300} y={227} size={13.5} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.05)} d="M 170 262 L 170 302 L 262 302" stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 338 302 L 440 302 L 440 262" stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.45)}>
        <Rect x={262} y={292} width={76} height={20} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.4} />
        <T x={300} y={307} size={13} fill={GREEN_DARK} weight={800}>
          S
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.65)} d={arrowD(440, 262, 520, 262)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={170} cy={262} r={3.8} fill={INK} />
        <Circle cx={440} cy={262} r={3.8} fill={INK} />
        <T x={118} y={252} size={12.5} fill={INK} weight={800}>
          I
        </T>
        <T x={486} y={252} size={12.5} fill={INK} weight={800}>
          I
        </T>
        <T x={222} y={210} size={12.5} fill={RED} weight={800}>
          I_g
        </T>
        <T x={214} y={332} size={12.5} fill={GREEN_DARK} weight={800}>
          I − I_g
        </T>
      </Fade>
      {line(2, 44, 356, 2.2, INK_LIGHT, t("the shunt block is drawn wide and short — a reminder that S is very low", "the shunt block is drawn wide and short — a reminder that S is very low"))}

      {/* ================= beat 3 — the one physical fact ================= */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={ringD(170, 262, 17, 15)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={ringD(440, 262, 17, 15)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      {line(3, 44, 386, 0.7, AMBER_DARK, t("both elements sit between the SAME two junctions ⇒ they are in parallel", "both elements sit between the SAME two junctions ⇒ they are in parallel"), 13)}
      {line(3, 44, 408, 1.1, INK, t("and parallel elements always share the same potential difference —", "and parallel elements always share the same potential difference —"))}
      {line(3, 44, 428, 1.4, INK_LIGHT, t("a general property of parallel connection, not an assumption about this circuit", "a general property of parallel connection, not an assumption about this circuit"))}

      {/* ================= beat 4 — write it out ================= */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 550 100 L 550 456" stroke={MUTED} sw={1.2} dur={0.8} />
      {head(4, 576, 112, 0.3, GREEN_DARK, t("WRITE THE SHARED VOLTAGE OUT", "WRITE THE SHARED VOLTAGE OUT"))}
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Chip x={576} y={126} w={460} h={34} fill={CREAM} stroke={MUTED} textFill={INK_LIGHT} size={14} script={false}>
          {t("voltage across the coil  =  voltage across the shunt", "voltage across the coil  =  voltage across the shunt")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={576} y={172} w={460} h={46} fill={CREAM} stroke={RED} textFill={INK} size={21}>
          I_g · G  =  (I − I_g) · S
        </Chip>
      </Fade>

      {/* ================= beat 5 — read both sides ================= */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 648 226 L 648 234 L 756 234 L 756 226" stroke={RED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.35)} d="M 848 226 L 848 234 L 1000 234 L 1000 226" stroke={GREEN_DARK} sw={1.5} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={702} y={254} size={12.5} fill={RED} weight={700}>
          {t("what went through the coil", "what went through the coil")}
        </T>
        <T x={924} y={254} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("everything that did not", "everything that did not")}
        </T>
      </Fade>
      {line(5, 576, 282, 1.0, INK, t("two paths, one shared voltage —", "two paths, one shared voltage —"))}
      {line(5, 576, 302, 1.3, INK_LIGHT, t("so the currents divide in inverse proportion to the resistances", "so the currents divide in inverse proportion to the resistances"))}

      {/* ================= beat 6 — solve ================= */}
      <Draw on={beat >= 6} delay={dl(6, 0.15)} d="M 576 322 L 1036 322" stroke={MUTED} sw={1.2} dur={0.5} />
      {line(6, 576, 344, 0.4, AMBER_DARK, t("divide both sides by (I − I_g):", "divide both sides by (I − I_g):"))}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={576} y={356} w={460} h={50} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={22}>
          S = I_g G ⁄ (I − I_g)
        </Chip>
      </Fade>
      {line(6, 576, 428, 1.3, INK, t("G and I_g belong to the galvanometer you have; I is the range you want —", "G and I_g belong to the galvanometer you have; I is the range you want —"))}
      {line(6, 576, 448, 1.6, INK_LIGHT, t("so every symbol on the right is already known", "so every symbol on the right is already known"))}

      {/* ================= beat 7 — why it works ================= */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 44 468 L 1036 468" stroke={INK} sw={1.5} dur={0.7} />
      {head(7, 44, 492, 0.4, GREEN_DARK, t("WHY THE DESIGN WORKS", "WHY THE DESIGN WORKS"))}
      {line(7, 44, 514, 0.8, INK, t("R_ammeter = G S ⁄ (G + S) — a parallel pair beats both, and S is tiny", "R_ammeter = G S ⁄ (G + S) — a parallel pair beats both, and S is tiny"), 13)}
      {/* the meter goes in series with the line */}
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d="M 90 534 L 420 534 L 420 584 L 273 584 M 237 584 L 90 584 L 90 534" stroke={INK_LIGHT} sw={1.7} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d="M 82 550 L 98 550 M 86 566 L 94 566" stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.75)}>
        <Circle cx={255} cy={584} r={17} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.4} />
        <T x={255} y={589} size={13.5} fill={GREEN_DARK} weight={800}>
          A
        </T>
        <T x={440} y={560} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("inserted IN SERIES with the circuit —", "inserted IN SERIES with the circuit —")}
        </T>
        <T x={440} y={580} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("so a near-zero R keeps the disturbance negligible", "so a near-zero R keeps the disturbance negligible")}
        </T>
      </Fade>

      {/* ================= beat 8 — the trend ================= */}
      {head(8, 576, 492, 0.3, AMBER_DARK, t("THE TREND CONCEPTUAL QUESTIONS TEST", "THE TREND CONCEPTUAL QUESTIONS TEST"))}
      {line(8, 576, 514, 0.7, INK, t("the range I sits in the DENOMINATOR of S = I_g G ⁄ (I − I_g)", "the range I sits in the DENOMINATOR of S = I_g G ⁄ (I − I_g)"), 13)}
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <Chip x={576} y={528} w={460} h={32} fill={GREEN} textFill="#ffffff" size={13} script={false}>
          {t("bigger range  ⇒  bigger denominator  ⇒  smaller shunt", "bigger range  ⇒  bigger denominator  ⇒  smaller shunt")}
        </Chip>
      </Fade>
      {line(8, 576, 580, 1.5, INK_LIGHT, t("very large ranges → shunts of a few milliohms: a thick strip of metal", "very large ranges → shunts of a few milliohms: a thick strip of metal"))}
    </Scene>
  );
}
