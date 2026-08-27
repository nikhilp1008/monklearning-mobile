/**
 * Ch06 · Section 41 — "Moment of inertia: how hard it is to spin"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.06, 27.14, 28.14, 29.14, 30.14, 31.14, 32.14] — b2..b7 are 1 s
 * in EN → ALL staggers ≤0.9 s):
 *  0 title
 *  1 ring vs disc figure (same mass, same R) + "which is harder to spin?"
 *  2 mass ↔ I analogy line
 *  3 red-margin: WHERE the mass sits matters
 *  4 far = expensive / near = cheap + bat-choke aside
 *  5 formula Σmr² + squared emphasis
 *  6 verdict on figure: I_ring = MR², I_disc = ½MR²
 *  7 flywheel / diver applications + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ring c(230,220) r80 (annulus r72) · disc c(470,220) r80 hatched ·
 *       labels cx230/cx470 bl 330 · question script13 cx350 bl 372
 *  b2 | script13 st x620 bl 150 / bl 178
 *  b3 | red bar x606 y210..270 · L1 st x624 bl 233 · L2 st x624 bl 261
 *  b4 | script12 st x620 bl 305 · aside script11 st x640 bl 331
 *  b5 | sans17 st x620 bl 375 · sub script11 st x640 bl 400
 *  b6 | on-figure: "I = MR²" cx230 bl 425 red · "I = ½MR²" cx470 bl 425 green
 *  b7 | chips y470 h36: x80 w420 · x540 w420 · line script12 cx540 bl 552
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const HATCH = [-60, -40, -20, 0, 20, 40, 60]
  .map((d) => {
    const h = Math.sqrt(Math.max(0, 80 * 80 - d * d));
    return `M ${470 + d} ${220 - h} V ${220 + h}`;
  })
  .join(" ");

export default function Ch06Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the rotational cousin of mass */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t(
            "moment of inertia — how hard it is to spin",
            "moment of inertia — ghumana kitna mushkil hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — ring vs disc */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 150 220 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0 M 158 220 a 72 72 0 1 0 144 0 a 72 72 0 1 0 -144 0"
        stroke={INK}
        sw={2.4}
        dur={1.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={230} y={330} size={13} fill={INK} weight={700}>
          {t("RING — mass at the rim", "RING — mass rim par")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d="M 390 220 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d={HATCH} stroke={MUTED} sw={1.2} dur={1.2} />
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={470} y={330} size={13} fill={INK} weight={700}>
          {t("DISC — mass spread out", "DISC — mass faili hui")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={350} y={372} size={13} fill={AMBER_DARK} script>
          {t(
            "same mass, same R — which is harder to spin?",
            "same mass, same R — ghumana kis mein mushkil?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the analogy (1 s in EN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={620} y={150} size={13} fill={INK} script anchor="start">
          {t(
            "mass = resistance to LINEAR motion change",
            "mass = LINEAR motion badalne ka virodh"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={620} y={178} size={13} fill={INK} script anchor="start">
          {t(
            "I = the same resistance, for SPINNING",
            "I = wahi virodh, par SPINNING ke liye"
          )}
        </T>
      </Fade>

      {/* beat 3 — where, not just how much (1 s in EN) */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 606 210 v 60" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={624} y={233} size={13} fill={RED} script anchor="start">
          {t("not just HOW MUCH mass —", "sirf KITNI mass nahi —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={624} y={261} size={13} fill={RED} script anchor="start">
          {t("but WHERE it sits from the axis", "balki wo axis se KAHAN baithi hai")}
        </T>
      </Fade>

      {/* beat 4 — far vs near (1 s in EN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={620} y={305} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "far from the axis = expensive · near = cheap",
            "axis se door = mehnga · paas = sasta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={640} y={331} size={11} fill={MUTED} script anchor="start">
          {t(
            "choke up on a bat and it whips around easily",
            "bat par haath upar lao, wo aasani se ghoomti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the formula (1 s in EN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={620} y={375} size={17} fill={INK} anchor="start" weight={700}>
          I = Σ mᵢ rᵢ²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={640} y={400} size={11} fill={RED} script anchor="start">
          {t(
            "r is SQUARED — the outermost mass dominates",
            "r ka SQUARE — sabse bahri mass hi haavi hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the verdict on the figure (1 s in EN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={230} y={425} size={16} fill={RED} weight={700}>
          I = MR²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={470} y={425} size={16} fill={GREEN_DARK} weight={700}>
          I = ½MR²
        </T>
      </Fade>

      {/* beat 7 — engineers use it both ways (1 s in EN) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={80} y={470} w={420} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("flywheel: mass at the rim → big I", "flywheel: mass rim par → bada I")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={540} y={470} w={420} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13}>
          {t("diver tucks in: small I → fast spin", "diver simat-ta: chhota I → tez spin")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={552} size={12} fill={GREEN_DARK} script>
          {t(
            "same law, run both ways — resist change, or spin up fast",
            "ek hi law, dono taraf — badlav roko, ya tez ghoomo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
