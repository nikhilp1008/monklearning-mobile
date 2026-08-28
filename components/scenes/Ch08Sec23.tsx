/**
 * Ch08 · Section 23 — "NEET: a gas's process-dependent bulk modulus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..6 are ~1s each — short delays throughout for Hindi.
 *
 * Beats (en [0, 6.14, 21.59, 37.63, 49.58, 64.68, 76.46]):
 *  0 title only
 *  1 text: no tabulated "B of the gas" — process sets B
 *  2 given: diatomic gas, γ=1.4, P=1.0×10⁵ Pa
 *  3 slow=isothermal: B=P=1.0×10⁵ Pa (+ mini cylinder icon)
 *  4 sudden=adiabatic: B=γP=1.4×10⁵ Pa (+ mini cylinder icon)
 *  5 red margin: eliminate any "fixed B for a gas" option
 *  6 closing: one decision — slow or fast?
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | underline           | Draw | x400..680 y158..163
 *  b1 | text (16)           | T mid| x360..720 bl150 (y130..158)
 *  b2 | underline           | Draw | x420..660 y198..204
 *  b2 | given (15)          | T mid| x413..668 bl190 (y174..195)
 *  b3 | icon (rect+cap)     | Draw | x380..410 y225..275
 *  b3 | "slow=isothermal"   | T st | x430..~640 bl245 (y234..251)
 *  b3 | formula (18)        | T st | x430..~700 bl270 (y256..276)
 *  b4 | icon (rect+cap)     | Draw | x380..410 y290..340
 *  b4 | "sudden=adiabatic"  | T st | x430..~660 bl310 (y299..316)
 *  b4 | formula (18)        | T st | x430..~720 bl335 (y321..341)
 *  b5 | margin bar          | Draw | x60 y370..398
 *  b5 | note (15)           | T st | x76..472 bl390 (y370..397)
 *  b6 | underline           | Draw | x370..710 y446..452
 *  b6 | closing (14)        | T mid| x352..729 bl440 (y422..447)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("NEET speed trap: bulk modulus of a gas", "NEET speed trap: gas ka bulk modulus")}
        </T>
      </Fade>

      {/* beat 1 — the trap */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M400 160 Q540 164 680 160" stroke={RED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={150} size={16} fill={RED} script>
          {t("no single 'B of the gas' — process sets B", "gas ka koi ek fixed 'B' nahi — process B tay karta")}
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M420 200 Q540 204 660 200" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={190} size={15} fill={INK} weight={600}>
          diatomic gas, γ=1.4, P=1.0×10⁵ Pa
        </T>
      </Fade>

      {/* beat 3 — slow: isothermal */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M380 225 h30 v50 h-30 z M380 229 h30" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={430} y={245} size={14} fill={GREEN} weight={700} anchor="start">
          {t("slow = isothermal", "slow = isothermal")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={430} y={270} size={18} fill={INK} weight={700} anchor="start">
          B = P = 1.0×10⁵ Pa
        </T>
      </Fade>

      {/* beat 4 — sudden: adiabatic */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M380 290 h30 v50 h-30 z M380 294 h30" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={430} y={310} size={14} fill={RED} weight={700} anchor="start">
          {t("sudden = adiabatic", "sudden = adiabatic")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={430} y={335} size={18} fill={INK} weight={700} anchor="start">
          B = γP = 1.4×10⁵ Pa
        </T>
      </Fade>

      {/* beat 5 — the exam radar */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 370 L60 398" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={390} size={15} fill={RED} script anchor="start">
          {t("if 'B' is fixed for a gas, eliminate that option", "gas ke liye 'B' fixed ho toh option hata dijiye")}
        </T>
      </Fade>

      {/* beat 6 — the whole question, one decision */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M370 448 Q540 452 710 448" stroke={GREEN} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={440} size={14} fill={GREEN} script>
          {t("one decision: slow or fast — the formulas do the rest", "ek decision: slow ya fast — formulas baaki kar dete")}
        </T>
      </Fade>
    </Scene>
  );
}
