/**
 * C11 Ch07 · Section 28 — Worked example (NEET speed trap): strongest reductant & largest EMF
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 7.68, 19.63, 30.21, 41.05, 46.93, 60.33, 78.25]):
 *  0 heading: read strengths straight off the E° values
 *  1 number-line diagram: Zn(−0.76V), Cu(+0.34V), Ag⁺(+0.80V), proportionally spaced
 *  2 ring Ag⁺ + "strongest oxidising agent"
 *  3 ring Zn + "strongest reducing agent"
 *  4 bridge line: want the widest E° gap
 *  5 bracket arc Zn→Ag + "1.56 V" + formula: 0.80−(−0.76)=1.56V > 1.10V (Zn-Cu)
 *  6 red-margin trap: most positive E° ≠ best reducing agent — opposite!
 *  7 answer box: (i) Zn strongest reductant (ii) Zn-Ag largest EMF
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Number-line map:
 * x(V) = 150 + (V+0.76)×480.77 → Zn@150, Cu@679, Ag@900, axis y280.
 *  b1 | metal labels bl245; axis y280 x100..920; value labels bl305
 *  b2 | ring Ag(900,280,35,20); label bl330 x900
 *  b3 | ring Zn(150,280,35,20); label bl330 x150
 *  b4 | bridge (sans15) x540 bl170
 *  b5 | arc y210 x150..900; "1.56V" bl195 x525; formula (sans16) x540 bl370
 *  b6 | margin bar x64 y400..435, text (sans15 red) x80 bl418
 *  b7 | box x220..860 y455..515, 2 lines (sans17 grn) bl480/504
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("high E° loves electrons — that's a poor reducer", "high E° electrons ka premi — matlab weak reducer")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("read strengths straight off the E° values", "E° values se seedha strength padho")}
        </T>
      </Fade>

      {/* ===== beat 1 — number line ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={245} size={16} fill={INK} weight={700}>
          Zn
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={679} y={245} size={16} fill={INK} weight={700}>
          Cu
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={900} y={245} size={16} fill={INK} weight={700}>
          Ag⁺
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 100 280 L 920 280 M 908 274 L 920 280 L 908 286" stroke={INK} sw={2.2} dur={0.7} />
      {[150, 679, 900].map((x) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 1.4)} d={`M ${x} 272 L ${x} 288`} stroke={INK} sw={2} dur={0.3} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={150} y={305} size={13} fill={MUTED}>
          −0.76V
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={679} y={305} size={13} fill={MUTED}>
          +0.34V
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={900} y={305} size={13} fill={MUTED}>
          +0.80V
        </T>
      </Fade>

      {/* ===== beat 2 — strongest oxidant ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={ringD(900, 262, 38, 22)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={900} y={330} size={13} fill={RED} weight={700}>
          {t("strongest oxidant", "strongest oxidant")}
        </T>
      </Fade>

      {/* ===== beat 3 — strongest reductant ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(150, 262, 38, 22)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={150} y={330} size={13} fill={GREEN} weight={700}>
          {t("strongest reductant", "strongest reductant")}
        </T>
      </Fade>

      {/* ===== beat 4 — bridge to largest EMF ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={170} size={15} fill={INK}>
          {t("largest EMF → the pair with the widest E° gap", "largest EMF → sabse zyada E° gap wala pair")}
        </T>
      </Fade>

      {/* ===== beat 5 — the gap ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 150 265 Q 525 205 900 265" stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={525} y={198} size={15} fill={INK} weight={700}>
          1.56 V
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={370} size={16} fill={INK}>
          E°cell(Zn-Ag) = 0.80 − (−0.76) = 1.56V &gt; 1.10V (Zn-Cu)
        </T>
      </Fade>

      {/* ===== beat 6 — the trap ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 400 L 64 435" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={418} size={15} fill={RED} weight={700} anchor="start">
          {t("trap: most positive E° ≠ best reducing agent — it's the opposite!", "trap: most positive E° ≠ best reducing agent — bilkul ulta!")}
        </T>
      </Fade>

      {/* ===== beat 7 — answer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={220} y={455} width={640} height={60} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={480} size={17} fill={GREEN} weight={700}>
          {t("(i) Zn is the strongest reducing agent", "(i) Zn strongest reducing agent hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={504} size={17} fill={GREEN} weight={700}>
          {t("(ii) Zn-Ag cell gives the largest EMF", "(ii) Zn-Ag cell sabse bada EMF deta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
