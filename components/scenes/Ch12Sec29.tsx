/**
 * Ch12 · Section 29 — "The Maxwell distribution and the three speeds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 21.11, 37.67, 56.02, 73.51]):
 *  0 title + underline · 1 THE CURVE: base distribution (0→peak→long tail) ·
 *    2 lopsided ⇒ vp<v̄<vrms ticks · 3 heat it: shifted right, flattened
 *    (same area) overlay · 4 heavier gas: squeezed left, taller overlay · 5
 *    reading rule: area not height, shaded slice · 6 anchor numbers O2/H2
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x260..820 y33..70 (bl58)
 *  b0 | underline                        | Draw  | y78 x330..750
 *  b1 | axes + base curve                | Draw  | x90..950 y100..300
 *  b2 | 3 ticks + labels                  | Draw  | x300/335/365 y275..300
 *  b2 | ordering caption (12, amber_dark)| T mid | x540 y318
 *  b3 | heated curve overlay + label     | Draw  | peak ~(420,185) red
 *  b4 | heavier curve overlay + label    | Draw  | peak ~(200,115) green
 *  b5 | shaded slice + label              | mix   | x400..500 y300 dashed
 *  b5 | reading-rule line (13, ink)      | T mid | x540 y360
 *  b6 | anchor lines ×2                   | T mid | x540 y392 / y416
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("the Maxwell distribution and the three speeds", "Maxwell distribution aur teen speeds")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 78 C 420 74, 660 82, 750 76" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — THE CURVE: base distribution */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(90, 300, 950, 300)} stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(90, 300, 90, 100)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={960} y={310} size={13} fill={INK} anchor="start">
          {t("speed →", "speed →")}
        </T>
        <T x={90} y={90} size={12} fill={INK} anchor="middle">
          N
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 95 300 C 150 300, 200 150, 300 140 C 400 132, 500 200, 650 270 C 700 285, 750 295, 800 300"
        stroke={INK}
        sw={2.6}
        dur={1.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={305} y={125} size={12} fill={INK} anchor="middle">
          T
        </T>
      </Fade>

      {/* beat 2 — three speed ticks on the base curve */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 300 300 V 278" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 335 300 V 278" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 365 300 V 278" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={300} y={316} size={12} fill={AMBER_DARK}>
          vₚ
        </T>
        <T x={335} y={316} size={12} fill={AMBER_DARK}>
          v̄
        </T>
        <T x={367} y={316} size={12} fill={AMBER_DARK}>
          vrms
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={318} size={12} fill={AMBER_DARK} script>
          {t("lopsided ⇒ vₚ < v̄ < vrms, always", "lopsided ⇒ vₚ < v̄ < vrms, hamesha")}
        </T>
      </Fade>

      {/* beat 3 — heat it: shifted right, flattened */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M 95 300 C 200 300, 300 210, 420 185 C 520 168, 650 220, 850 290 C 880 295, 900 298, 920 300"
        stroke={RED}
        sw={2.2}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={430} y={172} size={12} fill={RED} anchor="start">
          {t("hotter", "garam")}
        </T>
      </Fade>

      {/* beat 4 — heavier gas: squeezed left, taller */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 95 300 C 130 300, 160 120, 200 115 C 240 110, 280 165, 350 250 C 380 275, 420 292, 460 300"
        stroke={GREEN}
        sw={2.2}
        dur={1.1}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={225} y={110} size={12} fill={GREEN} anchor="start">
          {t("heavier gas, same T", "heavier gas, same T")}
        </T>
      </Fade>

      {/* beat 5 — reading rule: area, not height */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 400 300 V 205" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 500 300 V 195" stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={360} size={13} fill={INK} script>
          {t(
            "read as AREA, not height — total area under the curve = 1",
            "AREA ki tarah padho, height nahi — total area = 1"
          )}
        </T>
      </Fade>

      {/* beat 6 — anchor numbers */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={392} size={14} fill={INK}>
          O₂ @300K: vₚ≈395 · v̄≈446 · vrms≈484 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={416} size={14} fill={GREEN} script>
          {t("H₂ runs about 4× faster, across the board", "H₂ har jagah karib 4× tez chalta")}
        </T>
      </Fade>
    </Scene>
  );
}
