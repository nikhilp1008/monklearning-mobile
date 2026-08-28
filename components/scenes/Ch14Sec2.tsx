/**
 * Ch14 · Section 2 — "Classifying waves and the five characteristics"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.02, 25.29, 36.48, 43.95, 67.58, 75.87, 87.06]):
 *  0 title + framing line + 3 dashed placeholder slots ("3 cuts")
 *  1 Cut 1 (medium) fills slot 1: mechanical vs EM
 *  2 space is silent — crossed sound-arcs note under Cut 1
 *  3 Cut 2 (direction) fills slot 2: points down at the main diagram
 *  4 MAIN DEMO: transverse wave (top) vs longitudinal wave (bottom)
 *  5 rule of thumb ticks: rope/light/water = transverse, sound = longitudinal
 *  6 Cut 3 (dimension) fills slot 3: string 1D · pond 2D · cracker 3D
 *  7 verdict row: the five describing numbers (A, λ, T, f, v)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)        | T mid | x540 bl68             y38..75
 *  b0 | framing caption (14)          | T mid | x540 bl115            y104..119
 *  b0 | 3 placeholder rects (h30)     | Draw  | x90..330/420..660/750..990 y136..166
 *  b1 | Cut1 header chip              | Chip  | x90..330  y136..166  (replaces slot1)
 *  b1 | underline flourish            | Draw  | x140..280 y174
 *  b1 | "mechanical → matter" (13)    | T mid | x210 bl188            y177..192
 *  b1 | "EM → vacuum OK" (13)         | T mid | x210 bl207            y196..211
 *  b2 | crossed sound-arcs            | Draw  | c(150,232) r6/11 + cross
 *  b2 | "space = silent" (12,red)     | T st  | x168 bl236            y226..240
 *  b3 | Cut2 header chip              | Chip  | x420..660 y136..166  (replaces slot2)
 *  b3 | underline flourish            | Draw  | x470..610 y174
 *  b3 | "see diagram below ↓" (12.5)  | T mid | x540 bl188            y178..192
 *  b4 | transverse tag (14,ink)       | T st  | x170 bl268            y257..272
 *  b4 | baseline dashed               | Draw  | x150..700 y325
 *  b4 | wave hump path                | Draw  | x150..690 y285..325
 *  b4 | crest dot                     | Draw  | c(270,285) r5
 *  b4 | ⊥ double-arrow (red)          | Draw  | x270 y255..315
 *  b4 | "⊥ particle motion" (12,red)  | T st  | x300 bl270            y259..272
 *  b4 | travel arrow                  | Draw  | x600..680 y325
 *  b4 | "wave travels →" (12)         | T mid | x640 bl350            y339..353
 *  b4 | divider                       | Draw  | x100..750 y380
 *  b4 | longitudinal tag (14,ink)     | T st  | x170 bl400            y389..404
 *  b4 | tick row (compress/rarefy)    | Draw  | x150..552 y415..445
 *  b4 | "compression" (11,amber-d)    | T mid | x160 bl462            y452..466
 *  b4 | "rarefaction" (11,green)      | T mid | x230 bl462            y452..466
 *  b4 | ∥ double-arrow (red)          | Draw  | x680..720 y430
 *  b4 | "∥ particle motion" (12,red)  | T st  | x730 bl434            y423..436
 *  b5 | tick✓ + rule 1 (12,green)     | T mid | x540 bl224            y214..228
 *  b5 | tick✓ + rule 2 (12,amber-d)   | T mid | x540 bl244            y234..248
 *  b6 | Cut3 header chip              | Chip  | x750..990 y136..166  (replaces slot3)
 *  b6 | underline flourish            | Draw  | x800..940 y174
 *  b6 | "string 1D·pond 2D·cracker 3D"| T mid | x870 bl188            y177..192
 *  b7 | 5 verdict chips (h40)         | Chip  | y505..545 x150/304/458/612/766
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function doubleArrowV(x: number, yTop: number, yBot: number): string {
  const mid = (yTop + yBot) / 2;
  return `${arrowD(x, mid, x, yTop)} ${arrowD(x, mid, x, yBot)}`;
}
function doubleArrowH(y: number, xL: number, xR: number): string {
  const mid = (xL + xR) / 2;
  return `${arrowD(mid, y, xL, y)} ${arrowD(mid, y, xR, y)}`;
}

const TICK_X = [150, 158, 166, 200, 225, 250, 280, 288, 296, 330, 355, 380, 410, 418, 426, 456, 481, 506, 536, 544, 552];

const CHARS: [number, string][] = [
  [150, "A · amplitude"],
  [304, "λ · wavelength"],
  [458, "T · period"],
  [612, "f · frequency"],
  [766, "v · speed"],
];

export default function Ch14Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("sorting waves: three clean cuts", "waves sort karna: teen saaf cuts")}
        </T>
      </Fade>

      {/* beat 0 — framing + 3 empty slots */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={115} size={14} fill={MUTED} script>
          {t("so many waves — 3 clean cuts sort them all", "itni saari waves — 3 cuts sabko sort karte")}
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.0)}>
        <Draw on={beat >= 0} delay={dl(0, 1.0)} d="M 90 136 h 240 v 30 h -240 z" stroke={MUTED} sw={1.4} dur={0.5} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 3} delay={dl(0, 1.4)}>
        <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 420 136 h 240 v 30 h -240 z" stroke={MUTED} sw={1.4} dur={0.5} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 6} delay={dl(0, 1.8)}>
        <Draw on={beat >= 0} delay={dl(0, 1.8)} d="M 750 136 h 240 v 30 h -240 z" stroke={MUTED} sw={1.4} dur={0.5} />
      </Fade>

      {/* beat 1 — Cut 1: medium */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={90} y={136} w={240} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("CUT 1 · MEDIUM", "CUT 1 · MEDIUM")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 140 174 L 280 174" stroke={AMBER} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={210} y={188} size={13} fill={INK}>
          {t("mechanical → needs matter", "mechanical → matter chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={210} y={207} size={13} fill={INK}>
          {t("EM (light, X-ray) → vacuum OK", "EM (light, X-ray) → vacuum me bhi")}
        </T>
      </Fade>

      {/* beat 2 — space is silent */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 139 232 A 11 11 0 1 1 161 232 A 11 11 0 1 1 139 232" stroke={MUTED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={crossD(139, 221, 22, 22)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={168} y={236} size={12} fill={RED} anchor="start">
          {t("space = silent", "space me silent")}
        </T>
      </Fade>

      {/* beat 3 — Cut 2: direction */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={420} y={136} w={240} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("CUT 2 · DIRECTION", "CUT 2 · DIRECTION")}
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d="M 470 174 L 610 174" stroke={AMBER} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={540} y={188} size={12.5} fill={MUTED} script>
          {t("see the diagram below ↓", "niche diagram dekho ↓")}
        </T>
      </Fade>

      {/* beat 4 — MAIN DEMO: transverse vs longitudinal */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={170} y={268} size={14} fill={INK} weight={800} anchor="start">
          TRANSVERSE
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 150 325 L 700 325" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d="M 150 325 C 190 285, 230 285, 270 285 C 310 285, 350 365, 390 365 C 430 365, 470 285, 510 285 C 550 285, 610 325, 690 325"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Circle cx={270} cy={285} r={5} fill={AMBER} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={doubleArrowV(270, 255, 315)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={300} y={270} size={12} fill={RED} anchor="start">
          {t("⊥ particle motion", "⊥ particle motion")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.8)} d={arrowD(600, 325, 680, 325)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 4.3)}>
        <T x={640} y={350} size={12} fill={AMBER_DARK}>
          {t("wave travels →", "wave travel karti →")}
        </T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 4.9)} d="M 100 380 L 750 380" stroke={MUTED} sw={1} dur={0.4} />

      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={170} y={400} size={14} fill={INK} weight={800} anchor="start">
          LONGITUDINAL
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.9)}
        d={TICK_X.map((x) => `M ${x} 415 L ${x} 445`).join(" ")}
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 7.1)}>
        <T x={160} y={462} size={11} fill={AMBER_DARK}>
          {t("compression", "compression")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <T x={230} y={462} size={11} fill={GREEN}>
          {t("rarefaction", "rarefaction")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 8.0)} d={doubleArrowH(430, 680, 720)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 8.6)}>
        <T x={730} y={434} size={12} fill={RED} anchor="start">
          {t("∥ particle motion", "∥ particle motion")}
        </T>
      </Fade>

      {/* beat 5 — rule of thumb */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 460 219 l 5 5 l 9 -10" stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={550} y={224} size={12} fill={GREEN} anchor="start">
          {t("rope, light, water → transverse", "rope, light, water → transverse")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 460 239 l 5 5 l 9 -10" stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={550} y={244} size={12} fill={AMBER_DARK} anchor="start">
          {t("sound → longitudinal", "sound → longitudinal")}
        </T>
      </Fade>

      {/* beat 6 — Cut 3: dimension */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={750} y={136} w={240} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("CUT 3 · DIMENSION", "CUT 3 · DIMENSION")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d="M 800 174 L 940 174" stroke={AMBER} sw={2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={870} y={188} size={12} fill={INK}>
          {t("string 1D · pond 2D · cracker 3D", "string 1D · pond 2D · cracker 3D")}
        </T>
      </Fade>

      {/* beat 7 — the five describing numbers */}
      {CHARS.map(([x, label], i) => (
        <Fade key={label} on={beat >= 7} delay={dl(7, 0.4 + i * 0.5)}>
          <Chip x={x} y={505} w={140} h={40} fill="#fff" stroke={GREEN} textFill={INK} size={13} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
