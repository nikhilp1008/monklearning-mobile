/**
 * Ch07 · Section 49 — "Pitfalls and pro-tips for potential and energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.4, 20.14, 39.42, 40.42, 41.42, 42.42, 43.42]):
 *  0 title
 *  1 trap 1: never drop the negative sign
 *  2 trap 2: mgh only for h≪R
 *  3 trap 3: V vs U — units
 *  4 trap 4: zero field ≠ zero potential
 *  5 amber: potential adds as scalar, force as vector
 *  6 amber: compute V first habit
 *  7 green box: √2 bridge, Earth's numbers
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  t1 bar y92..120 line bl112 · t2 bar y140..192 lines bl160/186 ·
 *  t3 bar y212..264 lines bl232/258 · t4 bar y284..336 lines bl304/330
 *  b5 line st x84 bl380 · b6 line st x84 bl412
 *  b7 green box x260..820 y440..492(bl472)
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — closing potential and energy */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Energy — the traps and the shortcuts",
            "Energy — traps aur shortcuts"
          )}
        </T>
      </Fade>

      {/* beat 1 — never drop the negative sign */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 66 92 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={84} y={110} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — NEVER drop the negative sign: positive would mean repulsion",
            "trap 1 — negative sign KABHI mat giraao: positive matlab repulsion"
          )}
        </T>
      </Fade>

      {/* beat 2 — mgh only for small h */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 66 140 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={84} y={160} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — mgh only for h ≪ R",
            "trap 2 — mgh sirf h ≪ R ke liye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={84} y={186} size={13} fill={RED} script anchor="start">
          {t(
            "else: ΔU = −GMm·(1⁄r(f) − 1⁄r(i))",
            "warna: ΔU = −GMm·(1⁄r(f) − 1⁄r(i))"
          )}
        </T>
      </Fade>

      {/* beat 3 — V vs U */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 212 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={232} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 — V (J⁄kg) vs U = mV (J): don't mix them",
            "trap 3 — V (J⁄kg) vs U = mV (J): mix mat karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={84} y={258} size={13} fill={RED} script anchor="start">
          {t(
            "forgetting the factor of m loses marks instantly",
            "m ka factor bhoolna turant marks le dooba"
          )}
        </T>
      </Fade>

      {/* beat 4 — zero field ≠ zero potential */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 66 284 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={84} y={304} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — zero field ≠ zero potential: shell inside has V = −GM⁄R",
            "trap 4 — zero field ≠ zero potential: shell ke andar V = −GM⁄R"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={84} y={330} size={13} fill={RED} script anchor="start">
          {t(
            "field is the SLOPE of potential, not potential itself",
            "field potential ka SLOPE hai, potential khud nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — scalar vs vector */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={84} y={380} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "shortcut: potential adds as a SCALAR, force adds as a VECTOR",
            "shortcut: potential SCALAR ki tarah, force VECTOR ki tarah judta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — compute V first */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={84} y={412} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "compute V first → U = mV, or use energy conservation",
            "pehle V nikaalo → U = mV, ya energy conservation use karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the root-two bridge */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.6)}
          d="M 272 440 h 536 q 12 0 12 12 v 28 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={472} size={14} fill={INK} weight={800}>
          {t(
            "√2 bridge: v(e)=√2·v(o) — Earth: v(o)≈7.9, v(e)≈11.2 km/s",
            "√2 bridge: v(e)=√2·v(o) — Earth: v(o)≈7.9, v(e)≈11.2 km/s"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
