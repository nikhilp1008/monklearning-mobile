/**
 * Ch06 · Section 55 — "Worked example: wheel spinning up from rest [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,10.11,21.11,37.41,46.2,55.42] — b0,b1 fast in EN;
 * hi [0,16.3,24.49,25.49,26.49,27.49,28.49,29.49] — b2..b7 fast in HI →
 * ALL beats kept ≤0.9 s):
 *  0 title + subline
 *  1 figure: wheel from rest, α curved arrow
 *  2 given: ω₀=0, α=2 rad/s², t=5 s
 *  3 ω = ω₀+αt = 10 rad/s
 *  4 θ = ω₀t+½αt² = 25 rad
 *  5 revolutions? divide by 2π
 *  6 green box: n = 25/2π ≈ 3.98 rev
 *  7 red habit tip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(230,175) r65 · crosshair centre · α arc r80 sw2.4 amber ·
 *       "α = 2 rad/s²" st(320,150) · caption script12 cx230 bl262
 *  b2 | sans15 st x80 bl300
 *  b3 | sans16 st x80 bl335
 *  b4 | sans16 st x80 bl368
 *  b5 | script13 st x80 bl400
 *  b6 | green box x560..960 y415..465 cx760 bl448
 *  b7 | red bar x66 y488..538 · L1 st x84 bl510 · L2 st x84 bl534
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the clean board problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "wheel spinning up from rest [CBSE board]",
            "rest se spin karta wheel [CBSE board]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "α = 2 rad/s² for t = 5 s — find ω and θ",
            "α = 2 rad/s² for t = 5 s — ω aur θ nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the wheel, from rest */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 165 175 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 230 175 a 4 4 0 1 0 0.1 0 M 224 175 h -6 M 236 175 h 6 M 230 169 v -6 M 230 181 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 230 110 A 80 65 0 0 1 305 165 M 293 155 L 305 165 L 292 172"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={320} y={150} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          α = 2 rad/s²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={230} y={262} size={12} fill={MUTED} script>
          {t("from rest — ω₀ = 0", "rest se — ω₀ = 0")}
        </T>
      </Fade>

      {/* beat 2 — the givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={15} fill={INK} anchor="start" weight={700}>
          {t("given: ω₀ = 0, α = 2 rad/s², t = 5 s", "diya: ω₀ = 0, α = 2 rad/s², t = 5 s")}
        </T>
      </Fade>

      {/* beat 3 — the angular velocity */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={335} size={16} fill={INK} anchor="start" weight={700}>
          ω = ω₀ + αt = 0 + (2)(5) = 10 rad/s
        </T>
      </Fade>

      {/* beat 4 — the angle turned */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={368} size={16} fill={INK} anchor="start" weight={700}>
          θ = ω₀t + ½αt² = 0 + ½(2)(25) = 25 rad
        </T>
      </Fade>

      {/* beat 5 — revolutions, if asked */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={400} size={13} fill={INK} script anchor="start">
          {t(
            "revolutions? divide by 2π — one turn = 2π rad",
            "revolutions? 2π se bhaago — ek chakkar = 2π rad"
          )}
        </T>
      </Fade>

      {/* beat 6 — the count */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 572 415 h 376 q 12 0 12 12 v 26 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={760} y={448} size={17} fill={INK} weight={700}>
          n = 25/2π ≈ 3.98 rev
        </T>
      </Fade>

      {/* beat 7 — the habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 66 488 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={84} y={510} size={13} fill={RED} script anchor="start">
          {t(
            "write ω₀ = 0 explicitly — then pick the equation with only KNOWN symbols",
            "ω₀ = 0 saaf likho — phir wahi equation chuno jismein sirf KNOWN symbols"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
