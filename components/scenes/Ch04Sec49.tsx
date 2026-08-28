/**
 * Ch04 · Section 49 — "Why you lurch outward, and why nothing pushed you"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.3, 43.0, 44.0, 68.8, 93.7, 118.5]):
 *  0 title
 *  1 left panel: ground frame — curved path, straight inertia line, inward push
 *  2 ground-frame note: only inward force + inertia
 *  3 right panel: rotating frame — car interior, outward pseudo arrow
 *  4 F_centrifugal box + pseudo-force note
 *  5 red margin: not an action-reaction pair
 *  6 green chip: never mix the two frames in one equation
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · panel lbls cx240/cx780 bl 92
 *  L | curved path M120 250 Q 260 130 400 250 · straight dash M180 220 H420 ·
 *    body c(220,225) r8 · inward arr (220,225)→(260,200) · caption cx260 bl 300
 *  R | car x680..900 y170..250 · body c(870,210) r8 · outward arr (870,210)→(920,235) ·
 *    "F_cf"(930,240) · caption cx790 bl 300
 *  b2 note cx260 bl 330
 *  b4 box x660..960 y330..372 bl 356 · note st x84 bl 400
 *  b5 | bar x66 y430..505 · lines st x84 bl 450 / 476
 *  b6 | chip x140..940 y540..584
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "the centrifugal force is a fiction that pays its way",
            "centrifugal force ek kalpana hai jo apni keemat chukati hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — ground frame */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={260} y={92} size={12} fill={MUTED} script>
          {t("GROUND FRAME", "GROUND FRAME")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 120 250 Q 260 130 400 250"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Path
          d="M 178 218 H 420"
          stroke={MUTED}
          strokeWidth={2}
          strokeDasharray="7 6"
          fill="none"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={circleD(220, 218, 8)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d={arrowD(220, 218, 258, 192)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={260} y={300} size={12} fill={GREEN} script>
          {t("inertia wants straight; inward push turns you", "inertia seedha chahti; inward push modta hai")}
        </T>
      </Fade>

      {/* beat 2 — ground frame note */}
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={260} y={330} size={13} fill={GREEN} script>
          {t(
            "only ONE force here: inward — outward is zero",
            "yahan sirf EK force: inward — bahar waali zero hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — rotating frame */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={790} y={92} size={12} fill={MUTED} script>
          {t("ROTATING FRAME (inside the car)", "ROTATING FRAME (car ke andar)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d="M 680 250 h 220 v -80 h -220 z"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d={circleD(760, 210, 8)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(760, 210, 840, 210)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={852} y={214} size={12} fill={RED} weight={700} anchor="start">
          F_cf
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={790} y={300} size={12} fill={AMBER_DARK} script>
          {t("feels glued to the door — swears it's outward", "darwaze se chipka mehsoos hota — kasam khayega bahar hai")}
        </T>
      </Fade>

      {/* beat 4 — the formula and its honesty clause */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 672 330 h 296 q 12 0 12 12 v 30 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -30 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={820} y={362} size={16} fill={INK} weight={800}>
          F_cf = mv²⁄r (outward)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={400} size={13} fill={RED} script anchor="start">
          {t(
            "a PSEUDO-force — valid only in the rotating, non-inertial frame",
            "ek PSEUDO-force — sirf rotating, non-inertial frame mein valid"
          )}
        </T>
      </Fade>

      {/* beat 5 — not an action-reaction pair */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 430 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "trap: NOT a Newton's-Third-Law pair — pairs act on DIFFERENT bodies",
            "trap: Newton's Third Law jodi NAHI — jodi ALAG bodies par lagti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={476} size={14} fill={RED} script anchor="start">
          {t(
            "centripetal and centrifugal act on the SAME body — you, in two frames",
            "centripetal aur centrifugal EK hi body par — aap, do frames mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — never mix them */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={140} y={540} w={800} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "keep the frames separate — never mix real inward + fictional outward in ONE equation",
            "frames alag rakho — EK equation mein asli inward + kalpanik outward kabhi mat milao"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
