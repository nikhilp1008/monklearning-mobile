/**
 * P12Ch04 · Section 28 — "Key Formulas and Definitions"
 * (Subtopic 4 · Galvanometers and Their Conversion)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template gated on 0/2/3/5/7/9/11/12 — thirteen
 * narration segments collapsed onto a board of bold sentences with three drawn
 * rules. Two of those segments say the words "the diagram shows…" and there was
 * no diagram to show: no junction, no shunt, no multiplier, no chain.
 *
 * NARRATION TEACHES: the notation (I_g, G, and the R_g alias); current and
 * voltage sensitivity and why raising N need not help V_s; the figure of merit
 * and its reciprocal logic; then the two conversions — S = I_g G ⁄ (I − I_g)
 * with its parallel diagram and R_A = GS ⁄ (G+S); R = V ⁄ I_g − G with its
 * series diagram and R_V = V ⁄ I_g; then the ideal limits and the size sanity
 * check (shunt in mΩ–Ω, multiplier in kΩ).
 *
 * BEAT MAP (n_reveals = 13 — gates 0..12, every beat used):
 *    0 title + subtitle
 *    1 notation chips: I_g, G, and the R_g alias
 *    2 sensitivity: φ = (N A B ⁄ k) I, I_s, V_s = I_s ⁄ G, and the N trap
 *    3 figure of merit = k ⁄ N A B, and why smaller means more sensitive
 *    4 "now the first conversion" — ammeter heading + rule
 *    5 S = I_g G ⁄ (I − I_g), read as Ohm's law, plus the n-form
 *    6 THE PARALLEL DIAGRAM — junctions, red I_g branch, green I − I_g branch
 *    7 R_ammeter = G S ⁄ (G + S), dominated by S, and why that is the goal
 *    8 "now the second conversion" — voltmeter heading + rule
 *    9 R = V ⁄ I_g − G
 *   10 THE SERIES DIAGRAM — one current, V shared as I_g G + I_g R
 *   11 R_voltmeter = G + R = V ⁄ I_g, and why that is the goal
 *   12 the idealisations and the size sanity check
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

export default function P12Ch04Sec28({ currentTime, reveals, language }: SceneProps) {
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
          {t("Galvanometer Conversions — the Formula Bank", "Galvanometer Conversions — the Formula Bank")}
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
            "two expressions, one for each conversion — plus the sensitivity definitions",
            "two expressions, one for each conversion — plus the sensitivity definitions"
          )}
        </T>
      </Fade>

      {/* ================= beat 1 — notation ================= */}
      {head(1, 44, 110, 0.2, INK, t("NOTATION", "NOTATION"))}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={44} y={120} w={296} h={32} fill={CREAM} stroke={RED} textFill={INK} size={12.8} script={false}>
          {t("I_g — the full-scale-deflection current", "I_g — the full-scale-deflection current")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.85)}>
        <Chip x={44} y={158} w={296} h={32} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={12.8} script={false}>
          {t("G — the resistance of the coil", "G — the resistance of the coil")}
        </Chip>
      </Fade>
      {line(1, 44, 206, 1.2, MUTED, t("the last subtopic wrote the coil's R as R_g — same quantity", "the last subtopic wrote the coil's R as R_g — same quantity"))}

      {/* ================= beat 2 — sensitivity ================= */}
      {head(2, 360, 110, 0.2, GREEN_DARK, t("SENSITIVITY", "SENSITIVITY"))}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={360} y={134} size={14.5} fill={INK} weight={800} anchor="start">
          φ = (N A B ⁄ k) · I
        </T>
      </Fade>
      {line(2, 360, 158, 0.85, INK, t("current sensitivity   I_s = N A B ⁄ k      (divisions per ampere)", "current sensitivity   I_s = N A B ⁄ k      (divisions per ampere)"))}
      {line(2, 360, 180, 1.2, INK, t("voltage sensitivity   V_s = N A B ⁄ k G = I_s ⁄ G", "voltage sensitivity   V_s = N A B ⁄ k G = I_s ⁄ G"))}
      {line(2, 360, 206, 1.6, RED, t("raise N and I_s rises — but so does G, so V_s need not improve", "raise N and I_s rises — but so does G, so V_s need not improve"))}

      {/* ================= beat 3 — figure of merit ================= */}
      {head(3, 736, 110, 0.2, AMBER_DARK, t("FIGURE OF MERIT", "FIGURE OF MERIT"))}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={736} y={120} w={300} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          k ⁄ N A B  =  1 ⁄ I_s
        </Chip>
      </Fade>
      {line(3, 736, 180, 0.9, INK, t("the current needed for ONE division of deflection", "the current needed for ONE division of deflection"))}
      {line(3, 736, 206, 1.3, RED, t("it is a reciprocal — SMALLER figure = MORE sensitive", "it is a reciprocal — SMALLER figure = MORE sensitive"))}

      {/* ================= beats 4–7 — the ammeter ================= */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 44 218 L 1036 218" stroke={MUTED} sw={1.3} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 0.35)} d="M 540 232 L 540 506" stroke={MUTED} sw={1.2} dur={0.7} />
      {head(4, 44, 240, 0.6, GREEN_DARK, t("CONVERSION 1 · AMMETER — SHUNT IN PARALLEL", "CONVERSION 1 · AMMETER — SHUNT IN PARALLEL"))}

      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={44} y={252} w={476} h={42} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={19}>
          S = I_g G ⁄ (I − I_g)
        </Chip>
      </Fade>
      {line(5, 44, 314, 0.6, INK, t("numerator = the volts across the coil at full scale", "numerator = the volts across the coil at full scale"))}
      {line(5, 44, 334, 0.9, INK, t("denominator = the current the shunt must carry — it is Ohm's law", "denominator = the current the shunt must carry — it is Ohm's law"))}
      {line(5, 44, 356, 1.3, AMBER_DARK, t("range factor  n = I ⁄ I_g   ⇒   S = G ⁄ (n − 1)", "range factor  n = I ⁄ I_g   ⇒   S = G ⁄ (n − 1)"))}

      {/* the parallel diagram */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(70, 402, 150, 402)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 0.35)} d={arrowD(420, 402, 500, 402)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 150 402 L 150 368 L 263 368" stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.75)} d="M 297 368 L 420 368 L 420 402" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Circle cx={280} cy={368} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={280} y={373} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 150 402 L 150 436 L 245 436" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.35)} d="M 315 436 L 420 436 L 420 402" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.55)}>
        <Rect x={245} y={427} width={70} height={18} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={280} y={441} size={12.5} fill={GREEN_DARK} weight={800}>
          S
        </T>
        <Circle cx={150} cy={402} r={3.6} fill={INK} />
        <Circle cx={420} cy={402} r={3.6} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={ringD(150, 402, 15, 13)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.95)} d={ringD(420, 402, 15, 13)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={104} y={394} size={12.5} fill={INK} weight={800}>
          I
        </T>
        <T x={466} y={394} size={12.5} fill={INK} weight={800}>
          I
        </T>
        <T x={196} y={358} size={12.5} fill={RED} weight={800}>
          I_g
        </T>
        <T x={196} y={462} size={12.5} fill={GREEN_DARK} weight={800}>
          I − I_g
        </T>
        <T x={500} y={462} size={12.2} fill={MUTED} weight={700} anchor="end">
          {t("same two junctions ⇒ parallel", "same two junctions ⇒ parallel")}
        </T>
      </Fade>

      {line(7, 44, 484, 0.3, INK, t("R_ammeter = G S ⁄ (G + S)  — smaller than either, and S is tiny", "R_ammeter = G S ⁄ (G + S)  — smaller than either, and S is tiny"), 13)}
      {line(7, 44, 504, 0.7, GREEN_DARK, t("so the finished meter is nearly a wire — exactly what a series insert needs", "so the finished meter is nearly a wire — exactly what a series insert needs"))}

      {/* ================= beats 8–11 — the voltmeter ================= */}
      {head(8, 568, 240, 0.2, AMBER_DARK, t("CONVERSION 2 · VOLTMETER — MULTIPLIER IN SERIES", "CONVERSION 2 · VOLTMETER — MULTIPLIER IN SERIES"))}

      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <Chip x={568} y={252} w={468} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19}>
          R = V ⁄ I_g − G
        </Chip>
      </Fade>

      {/* the series diagram */}
      <Draw on={beat >= 10} delay={dl(10, 0.2)} d="M 606 368 L 660 368" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 10} delay={dl(10, 0.45)}>
        <Rect x={660} y={352} width={90} height={32} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.4} />
        <T x={705} y={373} size={13} fill={AMBER_DARK} weight={800}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 0.65)} d="M 750 368 L 863 368" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 0.85)}>
        <Circle cx={880} cy={368} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={880} y={373} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 1.05)} d="M 897 368 L 980 368" stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 10} delay={dl(10, 1.25)}>
        <Circle cx={602} cy={368} r={5} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={984} cy={368} r={5} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 1.45)} d="M 602 340 L 602 328 L 984 328 L 984 340" stroke={INK_LIGHT} sw={1.6} dur={0.6} />
      <Draw on={beat >= 10} delay={dl(10, 1.7)} d={arrowD(778, 396, 838, 396)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 10} delay={dl(10, 1.9)} d="M 660 410 L 660 420 L 750 420 L 750 410" stroke={AMBER_DARK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 10} delay={dl(10, 2.05)} d="M 863 410 L 863 420 L 897 420 L 897 410" stroke={RED} sw={1.5} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 2.3)}>
        <T x={793} y={320} size={12.6} fill={INK_LIGHT} weight={800}>
          V
        </T>
        <T x={808} y={392} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          I_g
        </T>
        <T x={705} y={438} size={12.5} fill={AMBER_DARK} weight={800}>
          I_g R
        </T>
        <T x={880} y={438} size={12.5} fill={RED} weight={800}>
          I_g G
        </T>
      </Fade>
      {line(10, 568, 466, 2.6, INK, t("V = I_g (G + R)   ⇒   R = V ⁄ I_g − G", "V = I_g (G + R)   ⇒   R = V ⁄ I_g − G"), 13.5)}

      {line(11, 568, 486, 0.3, INK, t("R_voltmeter = G + R = V ⁄ I_g", "R_voltmeter = G + R = V ⁄ I_g"), 13)}
      {line(11, 568, 506, 0.7, AMBER_DARK, t("I_g is tiny, so this is large — exactly what a parallel tap needs", "I_g is tiny, so this is large — exactly what a parallel tap needs"))}

      {/* ================= beat 12 — the idealisations ================= */}
      <Draw on={beat >= 12} delay={dl(12, 0.15)} d="M 44 518 L 1036 518" stroke={INK} sw={1.5} dur={0.7} />
      <Fade on={beat >= 12} delay={dl(12, 0.5)}>
        <Chip x={44} y={528} w={476} h={30} fill={GREEN} textFill="#ffffff" size={12.6} script={false}>
          {t("ideal ammeter: R = 0 — inserting it changes nothing", "ideal ammeter: R = 0 — inserting it changes nothing")}
        </Chip>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 0.8)}>
        <Chip x={560} y={528} w={476} h={30} fill={AMBER_DARK} textFill="#ffffff" size={12.6} script={false}>
          {t("ideal voltmeter: R = ∞ — connecting it draws nothing", "ideal voltmeter: R = ∞ — connecting it draws nothing")}
        </Chip>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 1.2)}>
        <T x={540} y={584} size={13.2} fill={RED} weight={800}>
          {t(
            "sanity habit: a shunt comes out in mΩ–Ω, a multiplier in kΩ. Otherwise you have swapped the formulas.",
            "sanity habit: a shunt comes out in mΩ–Ω, a multiplier in kΩ. Otherwise you have swapped the formulas."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
