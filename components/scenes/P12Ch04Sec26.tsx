/**
 * P12Ch04 · Section 26 — "Concept Intuition: Why a Raw Galvanometer Is Almost Useless"
 * (Subtopic 4 · Galvanometers and Their Conversion)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template — three columns of numbered sentences on
 * gates 0/1/3/5 only, so the whole board landed in two jumps and then sat still
 * for the last ~120 s. Not one drawn thing: no coil, no poles, no circuit, and
 * no sign of the toll-booth picture the narration explicitly says "look at".
 *
 * NARRATION TEACHES: exam weighting; the recalled moving-coil galvanometer in a
 * radial field (sin θ gone, φ ∝ I); why the raw instrument fails on two counts —
 * it is hypersensitive (full scale at µA–mA) and it carries its own resistance G
 * of tens of ohms, so it loads the circuit it measures; then the marquee image —
 * ammeter = a wide bypass beside the toll booth, voltmeter = a long narrow road
 * in front of it.
 *
 * BEAT MAP (n_reveals = 8 — gates 0..7, every beat used):
 *   0 title + the four-board exam line
 *   1 RECALL figure — pole pieces, soft-iron core, coil frame, radial B, spring,
 *     pointer on an evenly spaced scale
 *   2 φ = (N A B ⁄ k) I chip + the straight-line φ-vs-I graph
 *   3 problem 1 — full-scale-current axis: µA–mA safe, amperes burn it out
 *   4 problem 2 — mini circuit: dropping G into the line changes the current
 *   5 the engineering problem stated, and the one-resistor answer
 *   6 THE TOLL-BOOTH PICTURE — bypass on the left, long approach road on the right
 *   7 hold the picture (closing line)
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
  crossD,
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

export default function P12Ch04Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t(
            "Why a Raw Galvanometer Is Almost Useless",
            "Why a Raw Galvanometer Is Almost Useless"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d="M 262 60 C 470 55, 660 66, 818 58"
        stroke={RED}
        sw={2.2}
        dur={0.65}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={540} y={82} size={12.6} fill={MUTED} script>
          {t(
            "CBSE: the derivation, 2–3 marks  ·  JEE Main: a shunt / multiplier numerical  ·  JEE Adv: + loading error  ·  NEET: conceptual",
            "CBSE: the derivation, 2–3 marks  ·  JEE Main: a shunt / multiplier numerical  ·  JEE Adv: + loading error  ·  NEET: conceptual"
          )}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the recalled instrument ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={110} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("RECALL — THE MOVING-COIL GALVANOMETER", "RECALL — THE MOVING-COIL GALVANOMETER")}
        </T>
      </Fade>

      {/* pole pieces */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 115.9 224.4 A 42 42 0 0 0 115.9 155.6" stroke={INK} sw={4.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 164.1 155.6 A 42 42 0 0 1 164.1 224.4" stroke={INK} sw={4.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={92} y={152} size={12.5} fill={INK} weight={800}>
          N
        </T>
        <T x={188} y={152} size={12.5} fill={INK} weight={800}>
          S
        </T>
      </Fade>
      {/* soft-iron core + coil frame */}
      <Fade on={beat >= 1} delay={dl(1, 1.15)}>
        <Circle cx={140} cy={190} r={15} fill={CREAM} stroke={MUTED} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.35)} d="M 119 169 L 161 169 L 161 211 L 119 211 Z" stroke={AMBER_DARK} sw={1.9} dur={0.55} />
      {/* radial field */}
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(107.1, 202.0, 125.0, 195.5)} stroke={GREEN} sw={1.6} dur={0.28} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arrowD(105, 190, 124, 190)} stroke={GREEN} sw={1.6} dur={0.28} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(107.1, 178.0, 125.0, 184.5)} stroke={GREEN} sw={1.6} dur={0.28} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(155.0, 195.5, 172.9, 202.0)} stroke={GREEN} sw={1.6} dur={0.28} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={arrowD(156, 190, 175, 190)} stroke={GREEN} sw={1.6} dur={0.28} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(155.0, 184.5, 172.9, 178.0)} stroke={GREEN} sw={1.6} dur={0.28} />
      {/* restoring spring */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.3)}
        d="M 118 234 q 11 -13 22 0 q 11 13 22 0"
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={140} y={256} size={12.5} fill={RED} weight={700}>
          {t("spring: k φ", "spring: k φ")}
        </T>
      </Fade>
      {/* pointer + evenly spaced scale */}
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d="M 272 212.9 A 64 64 0 0 1 388 212.9" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.95)} d="M 298 184.6 L 303 193.2" stroke={MUTED} sw={1.6} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 3.05)} d="M 330 176 L 330 186" stroke={MUTED} sw={1.6} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 3.15)} d="M 362 184.6 L 357 193.2" stroke={MUTED} sw={1.6} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={arrowD(330, 240, 360, 186)} stroke={AMBER_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <Circle cx={330} cy={240} r={4} fill={INK} />
        <T x={402} y={216} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("pointer on an", "pointer on an")}
        </T>
        <T x={402} y={236} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("evenly spaced scale", "evenly spaced scale")}
        </T>
        <T x={252} y={256} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("radial field → θ stays 90°, the sine drops out", "radial field → θ stays 90°, the sine drops out")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the linear relation ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={556} y={110} size={14} fill={INK} weight={800} anchor="start">
          {t("DEFLECTION IS IN STRICT PROPORTION TO CURRENT", "DEFLECTION IS IN STRICT PROPORTION TO CURRENT")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.55)}>
        <Chip x={556} y={126} w={296} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={17}>
          φ = (N A B ⁄ k) · I
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <T x={556} y={194} size={12.6} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the bracket is fixed by the instrument's construction —", "the bracket is fixed by the instrument's construction —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.25)}>
        <T x={556} y={214} size={12.6} fill={INK_LIGHT} weight={600} anchor="start">
          {t("so it is a genuine constant, and the scale reads true", "so it is a genuine constant, and the scale reads true")}
        </T>
      </Fade>
      {/* φ–I graph */}
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={arrowD(898, 238, 1032, 238)} stroke={INK} sw={1.6} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 1.65)} d={arrowD(898, 238, 898, 142)} stroke={INK} sw={1.6} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d="M 898 238 L 1020 150" stroke={GREEN} sw={2.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.15)}>
        <T x={1036} y={242} size={12.5} fill={INK} weight={700} anchor="end">
          I
        </T>
        <T x={886} y={146} size={12.5} fill={INK} weight={700} anchor="end">
          φ
        </T>
        <T x={968} y={214} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("straight", "straight")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — problem 1, hypersensitive ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={288} size={14} fill={RED} weight={800} anchor="start">
          {t("PROBLEM 1 — IT IS HYPERSENSITIVE", "PROBLEM 1 — IT IS HYPERSENSITIVE")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(60, 326, 490, 326)} stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 0.85)} d="M 110 318 L 110 334" stroke={GREEN} sw={2.2} dur={0.2} />
      <Draw on={beat >= 3} delay={dl(3, 0.95)} d="M 200 318 L 200 334" stroke={GREEN} sw={2.2} dur={0.2} />
      <Draw on={beat >= 3} delay={dl(3, 1.05)} d="M 400 318 L 400 334" stroke={RED} sw={2.2} dur={0.2} />
      <Draw on={beat >= 3} delay={dl(3, 1.25)} d="M 110 306 L 200 306" stroke={GREEN} sw={3.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={crossD(386, 294, 28, 20)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={110} y={350} size={12.5} fill={GREEN_DARK} weight={700}>
          µA
        </T>
        <T x={200} y={350} size={12.5} fill={GREEN_DARK} weight={700}>
          mA
        </T>
        <T x={400} y={350} size={12.5} fill={RED} weight={700}>
          A
        </T>
        <T x={155} y={296} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("full-scale I_g lives here", "full-scale I_g lives here")}
        </T>
        <T x={430} y={350} size={12.5} fill={RED} weight={700} anchor="start">
          {t("burnt coil", "burnt coil")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — problem 2, its own resistance ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={556} y={288} size={14} fill={RED} weight={800} anchor="start">
          {t("PROBLEM 2 — IT CARRIES ITS OWN RESISTANCE G", "PROBLEM 2 — IT CARRIES ITS OWN RESISTANCE G")}
        </T>
      </Fade>
      {/* mini circuit loop */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 640 306 L 940 306 L 940 358 L 640 358 Z" stroke={INK} sw={1.8} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Rect x={766} y={296} width={48} height={20} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <T x={790} y={311} size={12.5} fill={INK} weight={700}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 632 320 L 648 320 M 636 336 L 644 336" stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.45)}>
        <Circle cx={790} cy={358} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={790} y={363} size={12.5} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={arrowD(870, 296, 900, 296)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={886} y={288} size={12.5} fill={AMBER_DARK} weight={700}>
          I
        </T>
        <T x={556} y={382} size={12.6} fill={INK_LIGHT} weight={600} anchor="start">
          {t("G is often tens of ohms — dropping it in lowers the current,", "G is often tens of ohms — dropping it in lowers the current,")}
        </T>
        <T x={556} y={402} size={12.6} fill={RED} weight={700} anchor="start">
          {t("so you measure a current that exists only because you measured it", "so you measure a current that exists only because you measured it")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — the engineering problem ---------------- */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M 44 420 L 1036 420" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={44} y={444} size={14} fill={INK} weight={800} anchor="start">
          {t(
            "Too delicate to carry real currents · too intrusive to leave circuits undisturbed — and the fix, both times, is ONE resistor.",
            "Too delicate to carry real currents · too intrusive to leave circuits undisturbed — and the fix, both times, is ONE resistor."
          )}
        </T>
      </Fade>

      {/* ---------------- beat 6 — the toll-booth picture ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 540 458 L 540 578" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* LEFT — ammeter: the wide bypass */}
      <Fade on={beat >= 6} delay={dl(6, 0.35)}>
        <T x={60} y={472} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("AMMETER — a wide bypass beside the booth", "AMMETER — a wide bypass beside the booth")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d="M 62 496 L 500 496" stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 62 514 L 500 514" stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.05)}>
        <Rect x={248} y={488} width={44} height={34} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={270} y={510} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 168 514 C 190 566, 350 566, 372 514" stroke={GREEN} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.45)} d="M 198 512 C 214 548, 328 548, 344 512" stroke={GREEN} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.75)} d={arrowD(226, 505, 316, 505)} stroke={RED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.95)} d={arrowD(232, 542, 322, 542)} stroke={GREEN_DARK} sw={3.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={270} y={486} size={12.5} fill={RED} weight={700}>
          {t("a safe trickle", "a safe trickle")}
        </T>
        <T x={270} y={570} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("almost all the traffic roars past", "almost all the traffic roars past")}
        </T>
        <T x={388} y={500} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("shunt in", "shunt in")}
        </T>
        <T x={388} y={518} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("PARALLEL", "PARALLEL")}
        </T>
      </Fade>

      {/* RIGHT — voltmeter: the long, narrow road in front */}
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={570} y={472} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("VOLTMETER — a long, narrow road in front of it", "VOLTMETER — a long, narrow road in front of it")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.7)} d="M 592 500 L 952 500" stroke={INK_LIGHT} sw={1.5} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d="M 592 512 L 952 512" stroke={INK_LIGHT} sw={1.5} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 3.1)}>
        <Rect x={952} y={488} width={44} height={34} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={974} y={510} size={13} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={arrowD(608, 506, 936, 506)} stroke={RED} sw={1.5} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={770} y={486} size={12.5} fill={RED} weight={700}>
          {t("only a whisper ever arrives", "only a whisper ever arrives")}
        </T>
        <T x={770} y={542} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("multiplier in SERIES", "multiplier in SERIES")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — hold the picture ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={40} y={578} w={1000} h={18} fill={GREEN} textFill="#ffffff" size={12.5} script={false}>
          {t(
            "★ Memorise the picture, not the formulas — the picture rebuilds both, the formulas swap under pressure",
            "★ Memorise the picture, not the formulas — the picture rebuilds both, the formulas swap under pressure"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
