/**
 * Ch08 · Section 18 — "Bulk modulus of a gas depends on the process"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beat 0 and hi beats 3..4 are ~1s each — short delays there.
 *
 * Two piston-cylinder icons (SLOW left, SUDDEN right) up top, formula
 * cascade in a right column.
 *
 * Beats (en [0, 1.0, 12.18, 25.58, 46.82, 65.51, 79.25]):
 *  0 title + drawn underline
 *  1 diagram: SLOW cylinder (B=P) vs SUDDEN cylinder (B=γP)
 *  2 text: no fixed B — start from B = -V dP/dV
 *  3 formula: isothermal PV=const ⇒ B_iso = P
 *  4 formula: adiabatic PV^γ=const ⇒ B_adia = γP
 *  5 boxed insight: γ>1 ⇒ resists sudden compression more
 *  6 red margin note: sound (adiabatic) faster than Newton's estimate
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline           | Draw | x480..600 y86..93
 *  b1 | cyl1 (SLOW)         | Draw | x80..170 y160..270
 *  b1 | label1/desc1/B=P    | T mid| x125 bl300/318/336
 *  b1 | "vs" (22)           | T mid| x250 bl228
 *  b1 | cyl2 (SUDDEN)       | Draw | x330..420 y160..270
 *  b1 | label2/desc2/B=γP   | T mid| x375 bl300/318/336
 *  b2 | tick                | Draw | x525..533 y166
 *  b2 | text (15)           | T st | x540..886 bl170 (y152..178)
 *  b2 | "B=-VdP/dV" (18)    | T st | x540..657 bl205 (y191..211)
 *  b3 | tick                | Draw | x525..533 y241
 *  b3 | formula1 (15)       | T st | x540..787 bl245 (y233..250)
 *  b4 | tick                | Draw | x525..533 y276
 *  b4 | formula2 (15)       | T st | x540..810 bl280 (y268..285)
 *  b5 | box                 | Draw | x540..1010 y305..360
 *  b5 | insight (16)        | T mid| x623..927 bl337 (y321..342)
 *  b6 | margin bar          | Draw | x60 y400..428
 *  b6 | note (15)           | T st | x76..554 bl420 (y400..427)
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("a gas's bulk modulus depends on the process", "gas ka bulk modulus process par depend karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — slow vs sudden compression */}
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M80 160 h90 v110 h-90 z" stroke={INK} sw={2.2} dur={0.4} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Rect x={80} y={160} width={90} height={16} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(125, 140, 125, 158)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={125} y={300} size={13} fill={GREEN} weight={800}>
          {t("SLOW", "SLOW")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={125} y={318} size={10} fill={MUTED}>
          {t("isothermal, heat escapes", "isothermal, heat nikalti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={125} y={336} size={13} fill={INK} weight={700}>
          B = P
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={250} y={228} size={22} fill={AMBER_DARK} weight={700}>
          vs
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 2.7)} d="M330 160 h90 v110 h-90 z" stroke={INK} sw={2.2} dur={0.4} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Rect x={330} y={160} width={90} height={16} fill={RED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={arrowD(375, 135, 375, 158)} stroke={RED} sw={3.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d="M365 140 l-5 15 M385 140 l-5 15" stroke={RED} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={375} y={300} size={13} fill={RED} weight={800}>
          {t("SUDDEN", "SUDDEN")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={375} y={318} size={10} fill={MUTED}>
          {t("adiabatic, no heat, temp rises", "adiabatic, no heat, temp badhta")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={375} y={336} size={13} fill={INK} weight={700}>
          B = γP
        </T>
      </Fade>

      {/* beat 2 — no fixed B, start from the definition */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M525 166 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={170} size={15} fill={GREEN} script anchor="start">
          {t("no fixed B — compression style matters", "fixed B nahi — compression style matter karti")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={205} size={18} fill={INK} weight={700} anchor="start">
          B = −V dP/dV
        </T>
      </Fade>

      {/* beat 3 — isothermal */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M525 241 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={245} size={15} fill={INK} weight={600} anchor="start">
          isothermal: PV=const ⇒ B_iso = P
        </T>
      </Fade>

      {/* beat 4 — adiabatic */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M525 276 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={15} fill={INK} weight={600} anchor="start">
          adiabatic: PVᵞ=const ⇒ B_adia = γP
        </T>
      </Fade>

      {/* beat 5 — the boxed insight */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M552 305 h446 q12 0 12 12 v31 q0 12 -12 12 h-446 q-12 0 -12 -12 v-31 q0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={775} y={337} size={16} fill={GREEN} weight={700}>
          {t("γ > 1 ⇒ resists sudden compression more", "γ > 1 ⇒ sudden compression zyada resist")}
        </T>
      </Fade>

      {/* beat 6 — the payoff: sound speed */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 400 L60 428" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={420} size={15} fill={RED} script anchor="start">
          {t("sound (adiabatic) beats Newton's isothermal guess", "sound (adiabatic) Newton ke isothermal guess se tez")}
        </T>
      </Fade>
    </Scene>
  );
}
