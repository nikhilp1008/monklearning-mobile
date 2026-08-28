/**
 * Ch07 · Section 58 — "Worked example: a low-Earth-orbit satellite (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 16.89, 29.86, 34.12]):
 *  0 title + problem
 *  1 diagram: Earth, h=600km, r=R+h dimension
 *  2 amber: measured from centre, not surface
 *  3 vo setup line
 *  4 green box: vo ≈ 7.6×10³ m/s
 *  5 T setup line
 *  6 green box: T ≈ 5.8×10³ s ≈ 97 min
 *  7 red margin: like the ISS, ~16 orbits/day
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(200,300) r80 · h dim (280..320,300) · sat dot (320,300) ·
 *   "R" label + "h" label · caption cx200 bl410
 *  right col x480: b3 line bl150 · b4 green box x480..900 y175..227(bl207) ·
 *  b5 line bl260 · b6 green box x480..900 y285..337(bl317)
 *  b7 bar x66 y440..492 lines bl460/486
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — a satellite at 600 km",
            "Example [CBSE] — 600 km par satellite"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "height h = 600 km above the surface — find v(o) and T",
            "surface se h = 600 km upar — v(o) aur T nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the orbit radius */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 120 300 A 80 80 0 1 1 119.9 300"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={320} cy={300} r={6} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Path d="M 200 300 H 314 M 200 294 v 12 M 314 294 v 12" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={257} y={288} size={11} fill={INK} weight={700}>
          h
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={160} y={295} size={11} fill={INK} weight={700}>
          R
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={200} y={410} size={12} fill={INK} script>
          {t("r = R + h = 7.0×10⁶ m", "r = R + h = 7.0×10⁶ m")}
        </T>
      </Fade>

      {/* beat 2 — from the centre, not surface */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={200} y={436} size={12} fill={AMBER_DARK} script>
          {t(
            "measured from the CENTRE — not the surface",
            "CENTRE se napa jaata hai — surface se nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — set up vo */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={150} size={14} fill={INK} anchor="start" weight={700}>
          v(o) = √((6.67×10⁻¹¹)(6.0×10²⁴) ⁄ 7.0×10⁶)
        </T>
      </Fade>

      {/* beat 4 — vo result */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 175 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={690} y={207} size={16} fill={INK} weight={800}>
          v(o) ≈ 7.6×10³ m ⁄ s
        </T>
      </Fade>

      {/* beat 5 — set up T */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={260} size={14} fill={INK} anchor="start" weight={700}>
          T = 2πr ⁄ v(o) = 2π(7.0×10⁶) ⁄ 7.6×10³
        </T>
      </Fade>

      {/* beat 6 — T result */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 285 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={690} y={317} size={16} fill={INK} weight={800}>
          T ≈ 5.8×10³ s ≈ 97 min
        </T>
      </Fade>

      {/* beat 7 — like the ISS */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "about an hour and a half per orbit —",
            "lagbhag dedh ghante mein ek orbit —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "like the ISS — ~16 orbits a day",
            "ISS jaisa — ~16 orbits din bhar mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
