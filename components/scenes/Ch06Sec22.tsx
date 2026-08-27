/**
 * Ch06 · Section 22 — "Torque: how a push makes things turn"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.32, 29.18, 40.02, 50.09, 61.44, 73.39, 93.01] — b7 is 1 s):
 *  0 title + muscle-memory subline
 *  1 door top view: hinge, door, good ⊥ push far (green) vs push toward hinge (red)
 *  2 three-factor chips: F, r, θ
 *  3 red-margin: only the ⊥ component turns
 *  4 red line: aimed at the axis → zero
 *  5 spanner mini (right-top): bolt + long spanner + ⊥ push = max
 *  6 couple mini (right-bottom): wheel, two opposite tangential F, d marker
 *  7 axial-vector line + underline (instant — 1 s beat)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | door (150,240)→(400,240) sw4 · "hinge" end(138,246) · good arrow
 *       (390,225)→(390,165), label script12 cx390 bl 145 · bad arrow
 *       (355,258)→(180,258), label script12 cx270 bl 285
 *  b2 | chips y320 h36: x80 w170 · x270 w170 · x460 w190
 *  b3 | red bar x66 y380..430 · L1 st x84 bl 398 · L2 st x84 bl 424
 *  b4 | script13 st x84 bl 462
 *  b5 | bolt (700,180) r14 · spanner rect (712,171)..(960,189) · arrow
 *       (945,163)→(945,118) · label script12 cx840 bl 216
 *  b6 | wheel (830,390) r55 · arrows (775,335)→(885,335) / (885,445)→(775,445) ·
 *       "F" st(893,340) / end(767,450) · d dash x700 y335..445 · "d" end(688,395) ·
 *       caption script12 cx830 bl 480
 *  b7 | script13 st x80 bl 545 · underline y565 x80..560
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

export default function Ch06Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — muscle memory */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "torque: how a push makes things turn",
            "torque: dhakka cheezon ko kaise ghumata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "why the handle, never the hinge? that instinct IS torque",
            "handle par hi kyun, hinge par kyun nahi? wahi instinct torque hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two pushes */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 150 240 H 400" stroke={INK} sw={4} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 145 240 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={138} y={246} size={11} fill={MUTED} script anchor="end">
          hinge
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d={arrowD(390, 225, 390, 165)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={390} y={145} size={12} fill={GREEN_DARK} script>
          {t("⊥ push, far out — big turn ✓", "⊥ push, door se — bada turn ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d={arrowD(355, 258, 180, 258)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={270} y={285} size={12} fill={RED} script>
          {t("toward the hinge — nothing ✗", "hinge ki taraf — kuch nahi ✗")}
        </T>
      </Fade>

      {/* beat 2 — three factors */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={80} y={320} w={170} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("F — how hard", "F — kitna zor")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Chip x={270} y={320} w={170} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("r — how far", "r — kitni door")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Chip x={460} y={320} w={190} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("θ — which way", "θ — kis direction")}
        </Chip>
      </Fade>

      {/* beat 3 — only the perpendicular part turns */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 380 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={398} size={13} fill={RED} script anchor="start">
          {t(
            "only the ⊥ component of the force turns the body",
            "force ka sirf ⊥ component hi body ko ghumata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={84} y={424} size={13} fill={RED} script anchor="start">
          {t("the parallel part does nothing", "parallel hissa kuch nahi karta")}
        </T>
      </Fade>

      {/* beat 4 — straight at the axis */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={462} size={13} fill={RED} script anchor="start">
          {t(
            "aimed straight at the axis → ZERO turn, push all you like",
            "seedha axis ki taraf → ZERO turn, kitna bhi zor lagao"
          )}
        </T>
      </Fade>

      {/* beat 5 — the mechanic's spanner */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 686 180 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 712 171 h 248 v 18 h -248"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d={arrowD(945, 163, 945, 118)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={840} y={216} size={12} fill={GREEN_DARK} script>
          {t(
            "longest spanner · push at 90° = MAX torque",
            "sabse lamba spanner · 90° par push = MAX torque"
          )}
        </T>
      </Fade>

      {/* beat 6 — the couple */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 775 390 a 55 55 0 1 0 110 0 a 55 55 0 1 0 -110 0"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d={arrowD(775, 335, 885, 335)} stroke={AMBER} sw={2.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={893} y={340} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d={arrowD(885, 445, 775, 445)} stroke={AMBER} sw={2.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 4.7)}>
        <T x={767} y={450} size={13} fill={AMBER_DARK} anchor="end" weight={700}>
          F
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <Path
          d="M 700 335 V 445 M 694 335 h 12 M 694 445 h 12"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <T x={688} y={395} size={13} fill={MUTED} anchor="end" weight={700}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={830} y={480} size={12} fill={AMBER_DARK} script>
          {t(
            "a couple: torque = F × d — pure rotation, no net force",
            "couple: torque = F × d — pure rotation, koi net force nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — axial vector (1-second beat: instant) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "torque = AXIAL vector — curl fingers with the spin, thumb points along the axis",
            "torque = AXIAL vector — fingers spin ke saath modo, thumb axis ke saath"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 80 565 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
