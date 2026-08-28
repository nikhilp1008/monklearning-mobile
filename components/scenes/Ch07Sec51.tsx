/**
 * Ch07 · Section 51 — "Kepler's three laws, and how Newton reproduced them"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.38, 23.81, 33.88, 41.3, 53.5, 54.5, 55.5]):
 *  0 title
 *  1 diagram: ellipse with Sun at one focus, planet dot
 *  2 amber: law 1 — orbits are ellipses, Sun at a focus
 *  3 two swept-area wedges (near = wide, far = thin) — law 2
 *  4 red margin: races near, dawdles far — angular momentum in disguise
 *  5 law 3 formula: T² ∝ a³
 *  6 chip row: Mercury 88 days / Pluto 248 years
 *  7 green margin: Newton's gravity reproduces all three
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  ellipse cx280 cy270 rx180 ry105 · focus dot (380,270) "Sun" ·
 *   planet dot (100,270) "planet" · caption cx280 bl410
 *  b3 | wedge near: (380,270)→(340,220)→(360,320) fill amber ·
 *      wedge far: (380,270)→(105,255)→(100,290) fill amber (thin)
 *  b4 | bar x66 y440..492 lines bl460/486
 *  b5 | line cx780 bl180 (right col)
 *  b6 | chips x700..1000 y220..300
 *  b7 | bar x660 y440..492 lines bl460/486
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — three crisp rules */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Kepler's three rules — and Newton's proof",
            "Kepler ke teen rules — aur Newton ka proof"
          )}
        </T>
      </Fade>

      {/* beat 1 — the ellipse, Sun at a focus */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 100 270 A 180 105 0 1 1 99.9 270"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={380} cy={270} r={12} fill={AMBER_DARK} />
        <T x={380} y={302} size={12} fill={AMBER_DARK} weight={700}>
          Sun
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={100} cy={270} r={6} fill={INK} />
      </Fade>

      {/* beat 2 — law 1: ellipse, focus not centre */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={280} y={410} size={12} fill={AMBER_DARK} script>
          {t(
            "law 1: ellipse — Sun at a FOCUS, not the centre",
            "law 1: ellipse — Sun ek FOCUS par, centre par nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — law 2: equal areas in equal times */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Path
          d="M 380 270 L 340 220 A 60 60 0 0 0 360 320 Z"
          fill={AMBER_DARK}
          opacity={0.35}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Path
          d="M 380 270 L 105 255 A 180 105 0 0 0 100 290 Z"
          fill={AMBER_DARK}
          opacity={0.35}
        />
      </Fade>

      {/* beat 4 — races near, dawdles far */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "races near the Sun, dawdles when far",
            "Sun ke paas tez, door sust"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "angular momentum, in a geometric costume",
            "angular momentum, ek geometric poshaak mein"
          )}
        </T>
      </Fade>

      {/* beat 5 — law 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={780} y={180} size={17} fill={INK} weight={800}>
          T² ∝ a³
        </T>
      </Fade>

      {/* beat 6 — Mercury vs Pluto */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={700} y={220} w={260} h={32} fill={CREAM} stroke={INK} textFill={INK} size={13}>
          {t("Mercury: 88 days", "Mercury: 88 din")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={700} y={260} w={260} h={32} fill={CREAM} stroke={INK} textFill={INK} size={13}>
          {t("Pluto: 248 years", "Pluto: 248 saal")}
        </Chip>
      </Fade>

      {/* beat 7 — gravity reproduces all three */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 660 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={678} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "Newton's inverse-square gravity reproduces",
            "Newton ki inverse-square gravity reproduce karti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={678} y={486} size={13} fill={GREEN} script anchor="start">
          {t("ALL THREE, automatically", "TEENON, apne aap")}
        </T>
      </Fade>
    </Scene>
  );
}
