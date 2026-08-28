/**
 * Ch06 · Section 57 — "Worked example: braking a spinning disc [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,12.56,27.58,41.91,55.65]; hi [0,19.11,20.11,21.11,22.11,
 * 23.11,24.11,25.11] — b1..b7 all 1 s in HI, b0..b2 all 1 s in EN →
 * ALL beats kept ≤0.9 s):
 *  0 title + subline
 *  1 figure: disc, ω arc, opposing braking-torque arc
 *  2 given: ω₀=20, ω=0, θ=100 rev
 *  3 θ = 100×2π = 200π rad
 *  4 timeless eq: 0 = 400 + 2α(200π)
 *  5 α ≈ −0.318 rad/s²
 *  6 green box: |τ| = I|α| ≈ 0.64 N·m
 *  7 lesson: timeless equation when time is absent
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(200,150) r55 · crosshair centre · ω arc M200,95 A55→(255,150)
 *       amber "ω" st(262,148) · brake arc M172,101 A55→(145,150) red "brake" end(138,105)
 *       · caption script11 cx200 bl240
 *  b2 | sans14 st x80 bl270
 *  b3 | sans14 st x80 bl300
 *  b4 | sans14 st x80 bl330
 *  b5 | sans15 st x80 bl362
 *  b6 | green box x560..960 y385..430 cx760 bl413
 *  b7 | script12 cx540 bl465
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the timeless-equation problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "braking a spinning disc [JEE Main]",
            "ghoomti disc ko brake karna [JEE Main]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "ω₀ = 20 rad/s, stops in 100 rev — find α and τ (I = 2)",
            "ω₀ = 20 rad/s, 100 rev mein rukti — α aur τ nikaalo (I = 2)"
          )}
        </T>
      </Fade>

      {/* beat 1 — the braking torque opposes ω */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 145 150 a 55 55 0 1 0 110 0 a 55 55 0 1 0 -110 0"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 200 150 a 4 4 0 1 0 0.1 0 M 194 150 h -6 M 206 150 h 6 M 200 144 v -6 M 200 156 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 200 95 A 55 55 0 0 1 255 150 M 243 140 L 255 150 L 242 153"
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={262} y={148} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          ω
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d="M 172 101 A 55 55 0 0 0 145 150 M 155 138 L 145 150 L 157 152"
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.85)}>
        <T x={138} y={105} size={11} fill={RED} anchor="end" weight={700}>
          {t("brake", "brake")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={200} y={240} size={11} fill={MUTED} script>
          {t(
            "brake opposes ω — slows it to zero",
            "brake ω ka virodh — zero tak dheema"
          )}
        </T>
      </Fade>

      {/* beat 2 — the givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={270} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "given: ω₀ = 20 rad/s, ω = 0, θ = 100 rev",
            "diya: ω₀ = 20 rad/s, ω = 0, θ = 100 rev"
          )}
        </T>
      </Fade>

      {/* beat 3 — convert to radians */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={300} size={14} fill={INK} anchor="start" weight={700}>
          θ = 100 × 2π = 200π rad
        </T>
      </Fade>

      {/* beat 4 — the timeless equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={330} size={14} fill={INK} anchor="start" weight={700}>
          ω² = ω₀² + 2αθ  ⇒  0 = 400 + 2α(200π)
        </T>
      </Fade>

      {/* beat 5 — solve for α */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={362} size={15} fill={INK} anchor="start" weight={700}>
          α = −400/400π = −1/π ≈ −0.318 rad/s²
        </T>
      </Fade>

      {/* beat 6 — the braking torque */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 572 385 h 376 q 12 0 12 12 v 21 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN_DARK}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={760} y={413} size={17} fill={INK} weight={700}>
          |τ| = I|α| = 2/π ≈ 0.64 N·m
        </T>
      </Fade>

      {/* beat 7 — the lesson */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={465} size={13} fill={GREEN_DARK} script>
          {t(
            "no time given but θ is? reach for the timeless equation",
            "time nahi mila par θ hai? timeless equation pakdo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
