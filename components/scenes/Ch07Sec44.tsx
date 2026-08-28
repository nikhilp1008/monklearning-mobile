/**
 * Ch07 · Section 44 — "Potential inside spheres, and gravitational self-energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.05, 19.71, 20.71, 21.71, 34.09, 49.19, 60.2, 70.44]):
 *  0 title
 *  1 V–r graph outline: outside decay curve, "point mass outside" caption
 *  2 shell: flat line inside at −GM/R
 *  3 both: outside −GM/r label
 *  4 solid sphere inside: parabolic dip curve (deeper than shell's flat line)
 *  5 green box: V(inside) formula
 *  6 green box: V(centre) = −3GM/2R = (3/2)V(surface)
 *  7 red margin: deepest at centre, yet field zero — flat not zero
 *  8 green box: self-energy U = −3GM²/5R
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  axes: zero line y130 x140..420 · R tick x280 ·
 *  outside decay M280 200 Q330 260 420 280 (shell, from R to far, y=surface level 200)
 *  shell-inside flat M140 200 H278 (y=200, = −GM/R level)
 *  solid-inside dip M140 260 Q210 200 278 200 (deeper, min at centre y260... wait centre is x=140 left edge)
 *  → actually put r=0 at x=140 (left), r=R at x=280, r→∞ at x=420
 *  caption cx280 bl400 (outside) · shell caption cx200 bl420 · solid caption cx200 bl445
 *  right col x480: b5 formula bl150 · b6 green box x480..900 y175..227(bl207) ·
 *  b7 bar x460 y255..307 lines bl275/301 · b8 green box x480..860 y330..382(bl362)
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
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — inside a shell and a solid sphere */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Potential inside a shell and a solid sphere",
            "Shell aur solid sphere ke andar potential"
          )}
        </T>
      </Fade>

      {/* beat 1 — outside behaves like a point mass */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 140 130 H 420" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={280} y={122} size={11} fill={INK} weight={700}>
          R
        </T>
        <T x={120} y={122} size={11} fill={INK} weight={700}>
          0
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 280 200 Q 330 260 420 280"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={280} y={400} size={12} fill={GREEN} script>
          {t(
            "outside: like a point mass",
            "bahar: point mass jaisa"
          )}
        </T>
      </Fade>

      {/* beat 2 — shell: flat inside */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 140 200 H 278" stroke={MUTED} sw={2.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={200} y={420} size={12} fill={MUTED} script>
          {t(
            "shell inside: FLAT constant, −GM ⁄ R",
            "shell ke andar: FLAT constant, −GM ⁄ R"
          )}
        </T>
      </Fade>

      {/* beat 3 — the shared outside formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={370} y={310} size={12} fill={INK} weight={700}>
          V = −GM ⁄ r
        </T>
      </Fade>

      {/* beat 4 — solid sphere: dips lower */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 140 260 Q 210 202 278 200"
        stroke={RED}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={200} y={445} size={12} fill={RED} script>
          {t(
            "solid sphere: dips DEEPEST at the centre",
            "solid sphere: centre par SABSE gehra"
          )}
        </T>
      </Fade>

      {/* beat 5 — inside formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          V(inside) = −GM ⁄ 2R³ · (3R² − r²)
        </T>
      </Fade>

      {/* beat 6 — the centre value */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 175 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={690} y={207} size={15} fill={INK} weight={800}>
          V(centre) = −3GM ⁄ 2R = 1.5·V(surface)
        </T>
      </Fade>

      {/* beat 7 — the flat-vs-zero reminder */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 460 255 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={478} y={275} size={13} fill={RED} script anchor="start">
          {t(
            "deepest potential at the centre — yet field there is ZERO",
            "centre par sabse gehra potential — par wahan field ZERO"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={478} y={301} size={13} fill={RED} script anchor="start">
          {t(
            "flat potential, NOT zero potential",
            "flat potential, ZERO potential NAHI"
          )}
        </T>
      </Fade>

      {/* beat 8 — self-energy */}
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <Draw
          on={beat >= 8}
          delay={dl(8, 0.5)}
          d="M 492 330 h 356 q 12 0 12 12 v 28 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={670} y={362} size={16} fill={INK} weight={800}>
          U(self) = −3GM² ⁄ 5R
        </T>
      </Fade>
    </Scene>
  );
}
