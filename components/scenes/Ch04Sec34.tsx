/**
 * Ch04 · Section 34 — "Worked Example 4 [JEE Advanced]: the bob in the truck"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.3, 39.2, 59.1, 79.9, 97.8, 120.5, 145.3, 170.2]):
 *  0 title
 *  1 problem + given values
 *  2 two panels: GROUND frame vs TRUCK frame, tilted bob in both
 *  3 method-1 header (left col)
 *  4 vertical eq → T = 25 N box
 *  5 horizontal eq → a = 7.5 box
 *  6 method-2 header (right col, pseudo backward)
 *  7 truck-frame eq + identical note
 *  8 red margin: g_eff third route
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 114
 *  panels | GROUND lbl cx210 bl 158 · truck x100..320 y190..280 wheels cy288 ·
 *    string (210,190)→(156,262) bob r8 · "37°"(222,220) · a arr (330,235)→(400,235)
 *    sub cx210 bl 315 — TRUCK lbl cx710 bl 158 · truck x600..820 ·
 *    string (710,190)→(656,262) · "37°"(722,220) · pseudo arr (646,262)→(588,262) ·
 *    "ma"(580,246 end) · sub cx710 bl 315
 *  L col | b3 st x84 bl 336 · b4 line bl 366 box x330..470 y344..380 bl 368 ·
 *    b5 line bl 410 box x330..500 y388..424 bl 412
 *  R col | b6 st x560 bl 336 · b7 line st x560 bl 372 · note st x560 bl 400
 *  b8 | bar x66 y470..560 · lines st x84 bl 490 / 516 / 542
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const truck = (x: number) =>
    `M ${x} 190 h 220 v 90 h -220 z ${circleD(x + 45, 288, 9)} ${circleD(x + 175, 288, 9)}`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — the bob in the truck, solved TWICE",
            "Example 4 [JEE Advanced] — truck ka bob, DO baar hal"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "bob 2 kg · string settles at 37° from the vertical while the truck accelerates",
            "bob 2 kg · truck accelerate karta hai to string vertical se 37° par tik jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find a and T in BOTH frames · g = 10 · sin37° = 0.6 · cos37° = 0.8",
            "a aur T DONO frames mein nikaalo · g = 10 · sin37° = 0.6 · cos37° = 0.8"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two panels */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={210} y={158} size={12} fill={MUTED} script>
          {t("GROUND FRAME", "GROUND FRAME")}
        </T>
        <T x={710} y={158} size={12} fill={MUTED} script>
          {t("TRUCK FRAME", "TRUCK FRAME")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={truck(100)} stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d={`M 210 190 L 156 262 ${circleD(156, 268, 7)}`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d={arrowD(330, 235, 400, 235)}
        stroke={AMBER}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={365} y={218} size={13} fill={AMBER_DARK} weight={700}>
          a
        </T>
        <T x={226} y={222} size={11} fill={INK} weight={700} anchor="start">
          37°
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={truck(600)} stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.7)}
        d={`M 710 190 L 656 262 ${circleD(656, 268, 7)}`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={726} y={222} size={11} fill={INK} weight={700} anchor="start">
          37°
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={210} y={315} size={11} fill={INK} script>
          {t("physicist on the road", "sadak par khada physicist")}
        </T>
        <T x={710} y={315} size={11} fill={INK} script>
          {t("passenger inside", "andar baithi passenger")}
        </T>
      </Fade>

      {/* beat 3 — method 1 header */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={336} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "method 1 · inertial: NO equilibrium — resultant of T, mg = m·a (horizontal)",
            "method 1 · inertial: equilibrium NAHI — T, mg ka resultant = m·a (horizontal)"
          )}
        </T>
      </Fade>

      {/* beat 4 — vertical */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={366} size={14} fill={INK} weight={700} anchor="start">
          T·cos37° = mg ⇒ T(0.8) = 20
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6)}
        d="M 342 344 h 116 q 12 0 12 12 v 12 q 0 12 -12 12 h -116 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={400} y={368} size={15} fill={INK} weight={800}>
          T = 25 N
        </T>
      </Fade>

      {/* beat 5 — horizontal */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={84} y={410} size={14} fill={INK} weight={700} anchor="start">
          T·sin37° = m·a ⇒ 15 = 2a
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 6)}
        d="M 342 388 h 156 q 12 0 12 12 v 12 q 0 12 -12 12 h -156 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={420} y={412} size={15} fill={INK} weight={800}>
          a = 7.5 m⁄s²
        </T>
      </Fade>

      {/* beat 6 — method 2 header + pseudo arrow on right panel */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d={arrowD(646, 268, 588, 268)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={580} y={250} size={11} fill={RED} weight={700} anchor="end">
          ma
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={560} y={336} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "method 2 · non-inertial: add pseudo-force ma BACKWARD → 3 forces balance",
            "method 2 · non-inertial: pseudo-force ma PEECHHE jodo → 3 forces balance"
          )}
        </T>
      </Fade>

      {/* beat 7 — truck-frame equations */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={372} size={14} fill={INK} weight={700} anchor="start">
          tan37° = a⁄g ⇒ a = 7.5&nbsp;&nbsp;·&nbsp;&nbsp;T = mg⁄cos37° = 25 N
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={560} y={400} size={12} fill={GREEN} script anchor="start">
          {t(
            "identical to the ground frame — as it had to be",
            "ground frame jaisa hi — jaisa hona hi tha"
          )}
        </T>
      </Fade>

      {/* beat 8 — the g_eff insight */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 470 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "insight: the string aligns with g_eff = g − a₀ (vectors), |g_eff| = √(g² + a²)",
            "insight: string g_eff = g − a₀ (vectors) ke saath align hoti hai, |g_eff| = √(g² + a²)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "T = m·g_eff = 2·√(100 + 56.25) = 2 × 12.5 = 25 N — a third route, same number",
            "T = m·g_eff = 2·√(100 + 56.25) = 2 × 12.5 = 25 N — teesra raasta, wahi number"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={84} y={542} size={13} fill={GREEN} script anchor="start">
          {t(
            "reach for g_eff in ANY accelerating-frame equilibrium problem",
            "KISI bhi accelerating-frame equilibrium mein seedha g_eff pakdo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
