/**
 * Ch07 · Section 35 — "Worked example: spinning the Earth to weightlessness (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 15.95, 26.19, 34.63]):
 *  0 title + problem
 *  1 Earth + equator body, g_eq = g − ω²R = 0 setup
 *  2 solve line: ω = √(g/R)
 *  3 (folded into beat 2 visually — separate text emphasis)
 *  4 substitute numbers → ω value
 *  5 green box: T ≈ 5078 s
 *  6 green box: ≈ 84.6 minutes
 *  7 red margin: real Earth spins 17x slower
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  Earth c(220,270) r90 · eq dot (310,270) · dash M130 270 H400 ·
 *   caption cx220 bl400
 *  right col x480: b1 line bl150 · b2 line bl195 · b4 line bl240 ·
 *  b5 green box x480..820 y270..322 (bl302) · b6 green box x480..820 y345..397 (bl377)
 *  b7 bar x66 y450..502 lines bl470/496
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the famous question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — spin the Earth to weightlessness",
            "Example [JEE Main] — weightlessness ke liye Earth ka spin"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "how fast must Earth spin so equator objects float? what day-length?",
            "kitni tez ghoome ki equator par objects float karein? kitna din?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the equator condition */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 220 180 A 90 90 0 1 1 219.9 180"
        stroke={INK}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Path d="M 130 270 H 400" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={310} cy={270} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(295, 270, 260, 270)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={220} y={400} size={12} fill={INK} script>
          {t(
            "weightless: g(eq) = g − ω²R → 0",
            "weightless: g(eq) = g − ω²R → 0"
          )}
        </T>
      </Fade>

      {/* beat 2 — solve for ω */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={16} fill={INK} anchor="start" weight={700}>
          g − ω²R = 0  →  ω = √(g⁄R)
        </T>
      </Fade>

      {/* beat 4 — plug in numbers */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={240} size={15} fill={INK} anchor="start" weight={700}>
          ω = √(9.8 ⁄ 6.4×10⁶) = 1.24×10⁻³ rad⁄s
        </T>
      </Fade>

      {/* beat 5 — day length in seconds */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 492 270 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={650} y={302} size={15} fill={INK} weight={800}>
          T = 2π√(R⁄g) ≈ 5078 s
        </T>
      </Fade>

      {/* beat 6 — in minutes */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 345 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={650} y={377} size={16} fill={INK} weight={800}>
          ≈ 84.6 minutes — not 24 hours
        </T>
      </Fade>

      {/* beat 7 — the real Earth's number */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 450 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "the real Earth spins ~17× slower — the actual cut in g is tiny",
            "asli Earth ~17× dheeme ghoomti hai — g mein asli kami bahut chhoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={496} size={13} fill={RED} script anchor="start">
          {t(
            "remember 84 minutes — it returns next example",
            "84 minutes yaad rakho — agle example mein wapas aata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
