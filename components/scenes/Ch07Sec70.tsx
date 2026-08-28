/**
 * Ch07 · Section 70 — "Worked example: weighing the Earth (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.51, 8.51, 9.51, 10.51, 22.54, 28.34, 38.5]):
 *  0 title + tool: M = gR²/G
 *  1 (continues)
 *  2 given values
 *  3 substitute
 *  4 numerator evaluated
 *  5 green box: M ≈ 6.0×10²⁴ kg
 *  6 red: whole planet from a falling apple
 *  7 red margin: the celebrated weighing of the Earth
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · tool cx540 bl95
 *  b2 | line cx540 bl140
 *  b3 | line cx540 bl180
 *  b4 | line cx540 bl220
 *  b5 | green box x380..700 y250..302(bl282)
 *  b6 | bar x66 y340..392 lines bl360/386
 *  b7 | bar x480 y340..392 lines bl360/386
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the tool */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — weighing the Earth",
            "Example [CBSE] — Earth ko tolna"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={90} size={16} fill={INK} weight={800}>
          M = gR² ⁄ G
        </T>
      </Fade>

      {/* beat 2 — given values */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={140} size={14} fill={INK} weight={700}>
          g=9.8, R=6.4×10⁶ m, G=6.67×10⁻¹¹
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={180} size={14} fill={INK} weight={700}>
          M = (9.8)(6.4×10⁶)² ⁄ 6.67×10⁻¹¹
        </T>
      </Fade>

      {/* beat 4 — the numerator */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={220} size={14} fill={INK} weight={700}>
          = 4.01×10¹⁴ ⁄ 6.67×10⁻¹¹
        </T>
      </Fade>

      {/* beat 5 — the mass */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 392 250 h 296 q 12 0 12 12 v 28 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={282} size={18} fill={INK} weight={800}>
          M ≈ 6.0×10²⁴ kg
        </T>
      </Fade>

      {/* beat 6 — a falling apple */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 340 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={360} size={13} fill={RED} script anchor="start">
          {t(
            "a whole planet's mass,",
            "ek poore planet ka mass,"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={84} y={386} size={13} fill={RED} script anchor="start">
          {t(
            "from a falling apple and a lab value of G",
            "girte seb aur G ki lab value se"
          )}
        </T>
      </Fade>

      {/* beat 7 — the celebrated weighing */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 340 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={360} size={13} fill={RED} script anchor="start">
          {t(
            "the celebrated \"weighing of the Earth\"",
            "mashhoor \"weighing of the Earth\""
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={386} size={13} fill={RED} script anchor="start">
          {t(
            "without ever leaving the surface",
            "surface chhode bina"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
