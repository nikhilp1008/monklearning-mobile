/**
 * Ch03 · Section 70 — "NEET trap: what is constant in uniform circular motion?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.1, 33.4, 44.5, 57.7, 69.9, 81.2, 94.4]):
 *  0 heading + problem + four option chips
 *  1 ring on (A) velocity — the trap
 *  2 cross (A): velocity is a VECTOR, direction turns → not constant
 *  3 cross (B): acceleration is centripetal, direction turns too
 *  4 cross (D): momentum = mv, also a vector
 *  5 KE = ½mv² — depends only on speed (scalar)
 *  6 speed constant by definition → KE constant
 *  7 ring on (C) + ANSWER box + the rule
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | chips y100 h34: (A)x210 w140 · (B)x400 w160 · (C)x610 w190 · (D)x850 w150
 *  b1 | ring cx280 cy117 rx84 ry29 · note st x84 bl 180 s12
 *  b2 | crossD(210,100,140,34) · line st x84 bl 212 s12
 *  b3 | crossD(400,100,160,34) · line st x84 bl 236 s12
 *  b4 | crossD(850,100,150,34) · line st x84 bl 260 s12
 *  b5 | st x84 bl 300 s14
 *  b6 | st x84 bl 328 s13
 *  b7 | ring cx705 cy117 rx109 ry29 · box x560..820 y360..406 text cx690 bl 392 s15 ·
 *       green st x560 bl 440 / 464 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  ringD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "NEET CONCEPT TRAP — what stays constant?",
            "NEET CONCEPT TRAP — kya constant rehta hai?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "in UNIFORM circular motion, which of these is constant?",
            "UNIFORM circular motion mein, inmein se kya constant hai?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={210} y={100} w={140} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          (A) velocity
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={400} y={100} w={160} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          (B) acceleration
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <Chip x={610} y={100} w={190} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          (C) kinetic energy
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Chip x={850} y={100} w={150} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          (D) momentum
        </Chip>
      </Fade>

      {/* beat 1 — the bait */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(280, 117, 84, 29)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={84} y={180} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the trap: reading “uniform” as “nothing changes” → picking velocity",
            "trap: “uniform” ka matlab “kuchh nahi badalta” samajh kar → velocity chun lena"
          )}
        </T>
      </Fade>

      {/* beat 2 — velocity is out */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={crossD(210, 100, 140, 34)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={84} y={212} size={12} fill={RED} script anchor="start">
          {t(
            "velocity is a VECTOR — direction turns constantly → NOT constant",
            "velocity ek VECTOR hai — direction hamesha ghoomti hai → NOT constant"
          )}
        </T>
      </Fade>

      {/* beat 3 — acceleration is out */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={crossD(400, 100, 160, 34)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={84} y={236} size={12} fill={RED} script anchor="start">
          {t(
            "acceleration points to the centre — that direction turns too",
            "acceleration kendra ki taraf hai — woh direction bhi ghoomti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — momentum is out */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={crossD(850, 100, 150, 34)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={84} y={260} size={12} fill={RED} script anchor="start">
          {t(
            "momentum = m v — also a vector → also NOT constant",
            "momentum = m v — yeh bhi vector hai → yeh bhi NOT constant"
          )}
        </T>
      </Fade>

      {/* beat 5 — kinetic energy */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={84} y={300} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "KE = ½ m v² — depends only on SPEED, a scalar",
            "KE = ½ m v² — sirf SPEED par, jo ek scalar hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — speed is constant */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={328} size={13} fill={GREEN} script anchor="start">
          {t(
            "speed is constant by definition → KE is constant too",
            "speed definition se hi constant hai → KE bhi constant"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer and the rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={ringD(705, 117, 109, 29)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 572 360 h 236 q 12 0 12 12 v 22 q 0 12 -12 12 h -236 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={690} y={392} size={15} fill={INK} weight={800}>
          {t("(C) kinetic energy", "(C) kinetic energy")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={560} y={440} size={12} fill={GREEN} script anchor="start">
          {t(
            "scalars built from speed stay constant",
            "speed se bane scalars constant rehte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={560} y={464} size={12} fill={GREEN} script anchor="start">
          {t(
            "every vector keeps changing as its direction turns",
            "har vector badalta rehta hai jab uski direction ghoomti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
