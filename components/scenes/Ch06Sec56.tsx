/**
 * Ch06 · Section 56 — "Worked example: flywheel under a torque [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,16.98,22.7,34.65,44.89,45.89,46.89,47.89] — b4..b7 fast in EN;
 * hi [0,1,6.97,16.87,26.69,40.08,50.49,60.48] — b0 fast in HI →
 * b0 and b4..b7 kept ≤0.9 s; b1,b2,b3 have room in both):
 *  0 title + subline
 *  1 figure: flywheel (mass at rim) under applied torque
 *  2 trap: can't jump to kinematics — need α first
 *  3 given: I=0.5 kg·m², τ=10 N·m, from rest, t=4 s
 *  4 stage 1 — dynamics: α = τ/I = 20 rad/s²
 *  5 stage 2 — kinematics: ω = ω₀+αt = 80 rad/s (green box)
 *  6 two-stage summary
 *  7 sanity check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(230,175) r65 · ring band r58 sw10 amber (mass at rim) ·
 *       crosshair centre · torque arc r80 + arrowhead · "τ = 10 N·m" st(320,150) ·
 *       caption script12 cx230 bl262
 *  b2 | script13 st x80 bl295 / bl320
 *  b3 | sans15 st x80 bl355
 *  b4 | sans16 st x80 bl390
 *  b5 | sans16 st x80 bl420 · green box x560..960 y445..490 cx760 bl475
 *  b6 | script13 st x80 bl515
 *  b7 | script12 st x80 bl545
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — dynamics tied to kinematics */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "flywheel under a torque [NEET speed trap]",
            "torque ke tehat flywheel [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "I = 0.5 kg·m², τ = 10 N·m, from rest, t = 4 s — find ω",
            "I = 0.5 kg·m², τ = 10 N·m, rest se, t = 4 s — ω nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the flywheel, mass at the rim */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 165 175 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 172 175 a 58 58 0 1 0 116 0 a 58 58 0 1 0 -116 0"
        stroke={AMBER}
        sw={10}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 230 175 a 4 4 0 1 0 0.1 0 M 224 175 h -6 M 236 175 h 6 M 230 169 v -6 M 230 181 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d="M 230 110 A 80 65 0 0 1 305 165 M 293 155 L 305 165 L 292 172"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={320} y={150} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          τ = 10 N·m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={230} y={262} size={12} fill={MUTED} script>
          {t("mass at the rim", "mass rim par")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={295} size={13} fill={INK} script anchor="start">
          {t(
            "TRAP: no α given — can't jump straight to kinematics",
            "TRAP: α nahi diya — seedhe kinematics par mat jao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={80} y={320} size={13} fill={INK} script anchor="start">
          {t(
            "find α from the dynamics FIRST",
            "α PEHLE dynamics se nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the givens */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={355} size={15} fill={INK} anchor="start" weight={700}>
          {t(
            "given: I = 0.5 kg·m², τ = 10 N·m, ω₀ = 0, t = 4 s",
            "diya: I = 0.5 kg·m², τ = 10 N·m, ω₀ = 0, t = 4 s"
          )}
        </T>
      </Fade>

      {/* beat 4 — stage 1: dynamics */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={390} size={16} fill={INK} anchor="start" weight={700}>
          {t("stage 1: ", "stage 1: ")}α = τ/I = 10/0.5 = 20 rad/s²
        </T>
      </Fade>

      {/* beat 5 — stage 2: kinematics */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={420} size={16} fill={INK} anchor="start" weight={700}>
          {t("stage 2: ", "stage 2: ")}ω = ω₀ + αt = 0 + (20)(4)
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 572 445 h 376 q 12 0 12 12 v 21 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={760} y={475} size={18} fill={INK} weight={700}>
          ω = 80 rad/s
        </T>
      </Fade>

      {/* beat 6 — the two stages, named */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={515} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "two stages: dynamics hands you α, kinematics hands you ω",
            "do stages: dynamics α deti, kinematics ω deti"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={545} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "bigger τ or smaller I → bigger α → bigger ω, exactly as expected ✓",
            "bada τ ya chhota I → bada α → bada ω, bilkul jaisa expect kiya ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
