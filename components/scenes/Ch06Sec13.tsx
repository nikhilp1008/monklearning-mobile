/**
 * Ch06 · Section 13 — "A second way to multiply two vectors"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.85, 23.55, 31.06, 40.7, 54.1, 69.29, 82.18]):
 *  0 title + engine subline
 *  1 central figure: A (420,330)→(650,330), B →(500,240), dashed parallelogram
 *    completion, A×B up (420,330)→(420,150)
 *  2 dot-product line (bottom left)
 *  3 cross-product question line
 *  4 amber chip: answer is a VECTOR
 *  5 door top view (right): hinge, door, push arrow, swing arc, axis ⊙
 *  6 right-hand rule: sweep arc A→B + label
 *  7 parallelogram fill + "area = |A×B|" + perpendicular-meter line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52 · sub script12 cx540 bl 92
 *  b1 | O(420,330) · A→(650,330) "A"(658,336)st · B→(500,240) "B"(510,232)st ·
 *       dashed (650,330)→(730,240) & (500,240)→(730,240) · A×B→(420,150) green ·
 *       label green cx420 bl 138
 *  b2 | script13 st x80 bl 432
 *  b3 | script13 st x80 bl 464
 *  b4 | chip x80 y482 w240 h36
 *  b5 | door (800,300)→(990,300) sw4 · hinge dot · "hinge" end(778,306) ·
 *       push arrow (990,285)→(990,240) · "push F" st(1000,262) · swing arc dashed M940,300 A140→(907,210) ·
 *       "door — top view" script11 cx895 bl 330 · axis ⊙ r9 · label cx880 bl 365
 *  b6 | sweep arc M540,318 Q530,270 480,258 amber · label script12 cx540 bl 402
 *  b7 | parallelogram fill amber .18 · "area = |A × B|" cx575 bl 290 ·
 *       line script13 st x80 bl 548
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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

export default function Ch06Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a second multiplication */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "a second way to multiply two vectors",
            "vectors ko multiply karne ka doosra tareeqa"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "the engine behind torque & angular momentum",
            "torque & angular momentum ka asli engine"
          )}
        </T>
      </Fade>

      {/* beat 1 — A, B, and the thing that points out of their plane */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(420, 330, 650, 330)} stroke={INK} sw={2.8} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={658} y={336} size={16} fill={INK} anchor="start" weight={700}>
          A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(420, 330, 500, 240)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={510} y={232} size={16} fill={INK} anchor="start" weight={700}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <Path
          d="M 650 330 L 730 240 M 500 240 L 730 240"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6)} d={arrowD(420, 330, 420, 150)} stroke={GREEN} sw={3.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={420} y={138} size={16} fill={GREEN_DARK} weight={700}>
          A × B
        </T>
      </Fade>

      {/* beat 2 — what the dot product asks */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={432} size={13} fill={INK} script anchor="start">
          {t(
            "A · B — how much the SAME way? → a NUMBER",
            "A · B — kitna SAME direction? → sirf NUMBER"
          )}
        </T>
      </Fade>

      {/* beat 3 — what the cross product asks */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={464} size={13} fill={INK} script anchor="start">
          {t(
            "A × B — how DIFFERENT + where the plane faces?",
            "A × B — kitna ALAG + plane kis or muh kiye hai?"
          )}
        </T>
      </Fade>

      {/* beat 4 — the surprise */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={80} y={482} w={240} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("answer: a VECTOR ⊥ both", "answer: ek VECTOR ⊥ dono")}
        </Chip>
      </Fade>

      {/* beat 5 — the door, top view */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 800 300 H 990" stroke={INK} sw={4} dur={0.8} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 795 300 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={778} y={306} size={11} fill={MUTED} script anchor="end">
          hinge
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 4)}
        d={arrowD(990, 285, 990, 240)}
        stroke={AMBER}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={1000} y={262} size={12} fill={AMBER_DARK} script anchor="start">
          push F
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <Path
          d="M 940 300 A 140 140 0 0 0 907 210"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={895} y={330} size={11} fill={MUTED} script>
          {t("door — top view", "darwaza — upar se")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 10)}
        d="M 791 300 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0"
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={880} y={365} size={12} fill={GREEN_DARK} script>
          {t(
            "turn axis ⊥ both — the cross product",
            "ghoomne ka axis ⊥ dono — yahi cross product"
          )}
        </T>
      </Fade>

      {/* beat 6 — the right-hand rule */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.5)}
        d="M 540 318 Q 530 270 486 260 M 497 252 L 486 260 L 497 268"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={402} size={12} fill={AMBER_DARK} script>
          {t(
            "right hand: sweep A → B — thumb gives A × B",
            "seedha haath: A → B sweep — thumb dega A × B"
          )}
        </T>
      </Fade>

      {/* beat 7 — magnitude = parallelogram area */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Path
          d="M 420 330 L 650 330 L 730 240 L 500 240 z"
          fill={AMBER}
          opacity={0.18}
          stroke="none"
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={575} y={290} size={14} fill={INK} weight={700}>
          {t("area = |A × B|", "area = |A × B|")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <T x={80} y={548} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "largest when ⊥ · zero when ∥ — a perpendicular-meter",
            "⊥ par sabse bada · ∥ par zero — perpendicular-meter hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
