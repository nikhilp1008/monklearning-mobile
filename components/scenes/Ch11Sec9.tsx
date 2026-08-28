/**
 * Ch11 · Section 9 — "The two doors: heat, work, and the first law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (9): 0 U is real · 1 piston-cylinder setup · 2 exactly two doors ·
 *  3 door1: heat Q · 4 door2: work W · 5 ΔQ=ΔU+ΔW ringed · 6 bank analogy ·
 *  7 conservation verdict · 8 blind spot (no direction).
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)    | T mid | x232..848 y33..77 (bl 64)
 *  b0 | "U real" chip(h32)   | Chip  | x150..430 y150..182
 *  b1 | piston(h18)+cylinder | Draw  | x430..650 y150..288
 *  b1 | stove(h18)           | Draw  | x430..650 y288..306
 *  b2 | callout (14,script)  | T st  | x700..923 y210
 *  b3 | 3 heat arrows        | Draw  | x470/540/610 y306..326
 *  b3 | "Q"(20,w800)         | T mid | x540 y346
 *  b4 | work arrow           | Draw  | x540 y110..148
 *  b4 | "W"(18,w800)         | T mid | x540 y98
 *  b5 | "ΔQ=ΔU+ΔW"(26,w800)  | T mid | x540 y398 · ring c(540,392) rx111 ry26
 *  b6 | 3 legend chips(h30)  | Chip  | x130/410/690 y448..478 w260
 *  b7 | verdict (15,script)  | T mid | x540 y508
 *  b8 | blind-spot chip(dash)| Chip  | x220..860 y533..567
 */

import React from "react";
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the two doors: heat, work, and the first law", "do darwaze: heat, work, aur first law")}
        </T>
      </Fade>

      {/* beat 0 — internal energy is a real, owned quantity */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={150} y={150} w={280} h={32} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("U — a real, owned quantity", "U — ek asli, apni quantity")}
        </Chip>
      </Fade>

      {/* beat 1 — the piston-cylinder */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 430 150 h 220 v 18 h -220 z" stroke={INK} sw={2.2} dur={0.5} fill={AMBER} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 430 168 V 288 H 650 V 168" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 430 288 h 220 v 18 h -220 z" stroke={INK} sw={2} dur={0.5} fill={AMBER_DARK} />

      {/* beat 2 — exactly two doors */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={700} y={210} size={14} fill={AMBER_DARK} script anchor="start">
          {t("exactly two doors — no third", "sirf do darwaze — teesra nahi")}
        </T>
      </Fade>

      {/* beat 3 — door one: heat */}
      {[470, 540, 610].map((x, i) => (
        <Draw key={x} on={beat >= 3} delay={dl(3, 0.3 + i * 0.3)} d={arrowD(x, 326, x, 306)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={346} size={20} fill={AMBER_DARK} weight={800} script={false}>
          Q
        </T>
      </Fade>

      {/* beat 4 — door two: work */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(540, 110, 540, 148)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={98} size={18} fill={AMBER_DARK} weight={800} script={false}>
          W
        </T>
      </Fade>

      {/* beat 5 — the first law */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={398} size={26} fill={INK} weight={800} script={false}>
          ΔQ = ΔU + ΔW
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={ringD(540, 392, 111, 26)} stroke={AMBER} sw={2.6} dur={0.9} />

      {/* beat 6 — the bank-account analogy */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={130} y={448} w={260} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("Q = salary credited", "Q = salary credited")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={410} y={448} w={260} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("ΔU = change in balance", "ΔU = balance ka change")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Chip x={690} y={448} w={260} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("W = rent paid out", "W = rent, jo diya")}
        </Chip>
      </Fade>

      {/* beat 7 — conservation, wearing a gas costume */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={508} size={15} fill={GREEN} script>
          {t("conservation of energy, wearing a gas costume", "conservation of energy, gas ka costume pehne")}
        </T>
      </Fade>

      {/* beat 8 — the blind spot */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <Chip x={220} y={533} w={640} h={34} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false} dashed>
          {t("no direction — that gap is the 2nd law's job", "koi direction nahi — woh gap 2nd law bharta hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
