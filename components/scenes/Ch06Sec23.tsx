/**
 * Ch06 · Section 23 — "Angular momentum and its conservation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.61, 23.81, 32, 49.07, 66.99, 67.99, 68.99] — b5..b7 are 1 s
 * in EN, so their staggers are ≤1 s; HI has normal spacing and settles fine):
 *  0 title + subline
 *  1 dancer demo: arms-out figure (slow arc) → arrow → arms-in figure (fast arcs)
 *  2 L ↔ p analogy line
 *  3 resists-change examples line
 *  4 amber card L = Iω = constant + "I ↓ ⇒ ω ↑"
 *  5 Kepler ellipse right: sun at focus, fast/slow planet arrows
 *  6 neutron-star collapse mini
 *  7 red caution: external torque must be zero
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | A: head(150,180)r9 body→255 arms(108..192,215) legs · slow arc + "ω — slow"
 *       cx150 bl 135 · B at cx280: folded arms, double arcs, "ω — FAST!" cx280 bl 116 ·
 *       arrow (200,225)→(240,225) · captions script11 cx150/cx280 bl 315
 *  b2 | script13 st x420 bl 140
 *  b3 | script12 st x420 bl 175
 *  b4 | card x420..760 y200..260 · formula cx590 bl 238 · line sans16 st x420 bl 295
 *  b5 | ellipse c(890,190) rx110 ry60 · sun (845,190) r10 · planet dots (780,190)/
 *       (1000,190) · arrows fast/slow · caption script12 cx890 bl 285
 *  b6 | dashed circle (790,420) r55 → arrow → dot (950,420) r12 + arcs ·
 *       caption script12 cx870 bl 500
 *  b7 | red bar x66 y480..550 · L1 st x84 bl 505 · L2 st x84 bl 535
 */

import React from "react";
import { Circle, Ellipse, Path } from 'react-native-svg';
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the rotational cousin */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "angular momentum — the quantity of spin",
            "angular momentum — spin ki maatra"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t("the p of the rotation world", "rotation ki duniya ka p")}
        </T>
      </Fade>

      {/* beat 1 — the dancer */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 141 180 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0 M 150 189 V 255 M 108 215 H 192 M 150 255 L 138 290 M 150 255 L 162 290"
        stroke={INK}
        sw={2.4}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M 130 155 A 24 24 0 0 1 170 155 M 160 146 L 170 155 L 158 158"
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={150} y={135} size={11} fill={AMBER_DARK} script>
          {t("ω — slow", "ω — dheema")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={arrowD(200, 225, 240, 225)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.4)}
        d="M 271 180 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0 M 280 189 V 255 M 272 212 L 266 245 M 288 212 L 294 245 M 280 255 L 268 290 M 280 255 L 292 290"
        stroke={INK}
        sw={2.4}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d="M 255 152 A 28 28 0 0 1 305 152 M 294 143 L 305 152 L 292 155 M 262 142 A 22 22 0 0 1 298 142 M 288 134 L 298 142 L 286 145"
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={280} y={116} size={11} fill={AMBER_DARK} script>
          {t("ω — FAST!", "ω — TEZ!")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <T x={150} y={315} size={11} fill={MUTED} script>
          {t("arms out — big I", "baahein bahar — I bada")}
        </T>
        <T x={280} y={315} size={11} fill={MUTED} script>
          {t("arms in — small I", "baahein andar — I chhota")}
        </T>
      </Fade>

      {/* beat 2 — L is to spin what p is to a line */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={420} y={140} size={13} fill={INK} script anchor="start">
          {t(
            "L is to rotation what p is to a straight line",
            "L rotation ke liye wahi hai jo p straight line ke liye"
          )}
        </T>
      </Fade>

      {/* beat 3 — it resists change */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={420} y={175} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "top ✓ · bicycle ✓ · spun ball ✓ — locked in",
            "lattu ✓ · cycle ✓ · spun ball ✓ — locked in"
          )}
        </T>
      </Fade>

      {/* beat 4 — L = Iω, arms in → ω up */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 432 200 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={590} y={238} size={20} fill={INK} weight={700}>
          L = I ω = constant
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={420} y={295} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("I ↓  ⇒  ω ↑   (arms in → spin faster)", "I ↓  ⇒  ω ↑   (baahein andar → spin tez)")}
        </T>
      </Fade>

      {/* beat 5 — Kepler's second law (1 s in EN: instant) */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Ellipse
          cx={890}
          cy={190}
          rx={110}
          ry={60}
          fill="none"
          stroke={INK}
          strokeWidth={2}
        />
        <Circle cx={845} cy={190} r={10} fill={AMBER} />
        <Circle cx={780} cy={190} r={5} fill={INK} />
        <Circle cx={1000} cy={190} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Path d={arrowD(780, 178, 780, 128)} fill="none" stroke={GREEN} strokeWidth={2.8} />
        <Path d={arrowD(1000, 202, 1000, 230)} fill="none" stroke={RED} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={890} y={285} size={12} fill={GREEN_DARK} script>
          {t(
            "Kepler II = L conservation: near = fast, far = slow",
            "Kepler II = L conservation: paas = tez, door = dheema"
          )}
        </T>
      </Fade>

      {/* beat 6 — the neutron star (1 s in EN: instant) */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <Circle
          cx={790}
          cy={420}
          r={55}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
        <Path d={arrowD(858, 420, 920, 420)} fill="none" stroke={AMBER} strokeWidth={2.6} />
        <Circle cx={950} cy={420} r={12} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Path
          d="M 930 398 A 28 28 0 0 1 972 400 M 962 391 L 972 400 L 960 403"
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
        />
        <T x={870} y={500} size={12} fill={AMBER_DARK} script>
          {t(
            "star collapses: I plummets → spins 100s of times a second",
            "star simat-ta hai: I girta → second mein 100s baar spin"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam-deciding caution (1 s in EN: instant) */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 66 480 v 70" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={84} y={505} size={13} fill={RED} script anchor="start">
          {t(
            "conserved ONLY when net external torque = 0",
            "conservation SIRF jab net external torque = 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={84} y={535} size={13} fill={RED} script anchor="start">
          {t(
            "internal forces rearrange I and ω — never total L",
            "internal forces I aur ω badalti hain — total L kabhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
