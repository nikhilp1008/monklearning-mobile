/**
 * Ch07 · Section 5 — "Why the exponent is exactly two: reading it off Kepler"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.95, 19.97, 31.4, 44.2, 56.75, 69.97, 85.25, 97.79]):
 *  0 title
 *  1 strategy: reason backward from Kepler (line + left arrow)
 *  2 orbit diagram: Sun, dashed orbit, planet, inward arrow, caption
 *  3 F = mv²/r + "this inward force IS gravity"
 *  4 tangent v arrow on diagram · v = 2πr/T ⇒ F = 4π²mr/T²
 *  5 Kepler III substitution line
 *  6 ring on m/r² + green "inverse square appears on its own"
 *  7 symmetric law box F = G·Mₛ·m/r² + 3rd-law note
 *  8 green margin: the Moon test
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · b1 text cx540 bl88 (408..672) · arrow (700,106)→(380,106)
 *  diagram: orbit c(220,250) r105 dashed · Sun c(220,250) r22 · planet (306,190) r8 ·
 *   inward arrow (295,197)→(258,223) · v arrow (313,201)→(336,234), "v" (346,242) ·
 *   caption cx220 bl400 (88..352)
 *  right stack st x430: line1 bl140 · note bl172 · line2 bl225 · line3 bl285 ·
 *   ring c(734,280) rx26 ry15 · green bl340 · box x430..780 y370..425 (formula bl402) ·
 *   note bl448
 *  b8 | bar x66 y500..556 · lines st x84 bl522 / 548
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the board's favourite argument */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Why exactly r²? Read it off Kepler",
            "r² hi kyun? Kepler se padh lo"
          )}
        </T>
      </Fade>

      {/* beat 1 — reason backward */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={88} size={12} fill={AMBER_DARK} script>
          {t(
            "what Kepler OBSERVED → reason backward from there",
            "Kepler ne jo DEKHA → wahan se peechhe chalo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d={arrowD(700, 106, 380, 106)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />

      {/* beat 2 — a planet on a circle needs an inward pull */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle
          cx={220}
          cy={250}
          r={105}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 8"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 2)}
          d="M 220 228 A 22 22 0 1 1 219.9 228"
          stroke={INK}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={220} y={255} size={13} fill={INK} weight={700}>
          Sun
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Circle cx={306} cy={190} r={8} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(295, 197, 258, 223)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={220} y={400} size={12} fill={INK} script>
          {t(
            "moving on a circle = forever pulled to centre",
            "circle par ghoomna = centre ki taraf girna"
          )}
        </T>
      </Fade>

      {/* beat 3 — the required force, claimed by gravity */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={430} y={140} size={16} fill={INK} anchor="start" weight={700}>
          F(centripetal) = m·v² ⁄ r
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={430} y={172} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "Newton's leap: this inward force IS gravity",
            "Newton ka kadam: yahi inward force GRAVITY hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — substitute the orbital speed */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={arrowD(313, 201, 336, 234)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={348} y={242} size={13} fill={GREEN} weight={700}>
          v
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={430} y={225} size={16} fill={INK} anchor="start" weight={700}>
          v = 2πr ⁄ T  ⇒  F = 4π²·m·r ⁄ T²
        </T>
      </Fade>

      {/* beat 5 — Kepler's third law enters */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={430} y={285} size={16} fill={INK} anchor="start" weight={700}>
          Kepler III: T² = k·r³  ⇒  F = (4π²⁄k)·m ⁄ r²
        </T>
      </Fade>

      {/* beat 6 — the inverse square appears on its own */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d={ringD(664, 281, 20, 15)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={430} y={340} size={13} fill={GREEN} script anchor="start">
          {t(
            "F ∝ m ⁄ r² — the inverse square appears on its own",
            "F ∝ m ⁄ r² — inverse square apne aap nikal aaya"
          )}
        </T>
      </Fade>

      {/* beat 7 — symmetric in both masses */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 1)}
          d="M 442 370 h 326 q 12 0 12 12 v 31 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={605} y={402} size={18} fill={INK} weight={800}>
          F = G·Mₛ·m ⁄ r²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={430} y={448} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "3rd law ⇒ symmetric in BOTH masses",
            "3rd law ⇒ dono masses mein symmetric"
          )}
        </T>
      </Fade>

      {/* beat 8 — the Moon test */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 500 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={522} size={13} fill={GREEN} script anchor="start">
          {t(
            "the Moon test — the same law rules the heavens",
            "Moon test — wahi law aasmaan par bhi chalta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 5)}>
        <T x={84} y={548} size={13} fill={GREEN} script anchor="start">
          {t("agreement: spectacular", "agreement: shandaar")}
        </T>
      </Fade>
    </Scene>
  );
}
