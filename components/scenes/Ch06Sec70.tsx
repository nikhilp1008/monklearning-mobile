/**
 * Ch06 · Section 70 — "Chapter cheat sheet" (final section of the chapter)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,16.31,27.41,42.34,51.04,63.59,74.94] — b0..b5 fast in EN;
 * hi [0,6.4,7.4,8.4,9.4,10.4,11.4,20.87,32.14,41.18] — b1..b5 fast in HI →
 * b0..b5 kept ≤0.9 s; b6..b9 have room in both languages):
 *  0 title + subline
 *  1 CoM moves as if all mass+force act there — internal forces never move it
 *  2 cross: RHR direction, determinant compute, mind the j-term minus
 *  3 torque turns; τ_net=dL/dt — conserve L: skaters, collisions, orbits
 *  4 equilibrium needs BOTH — torque about an unknown to erase it
 *  5 must-know I: ring, disc, sphere, rod-centre
 *  6 rotation mirrors linear — translate the table, don't memorise twice
 *  7 rolling: v=ωR, bracket (1+K²/R²), sphere always wins
 *  8 top-traps chips: j-term minus, deg vs rad, translational-only KE
 *  9 golden habit — green box + closing tagline + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | script12 st x60 bl108
 *  b2 | script12 st x60 bl136
 *  b3 | script12 st x60 bl164
 *  b4 | script12 st x60 bl192
 *  b5 | sans12 st x60 bl220
 *  b6 | script13 cx540 bl springs 258
 *  b7 | script13 cx540 bl springs 288
 *  b8 | chips y springs 320 h32: x100 w230 / x350 w230 / x600 w280
 *  b9 | green box x springs 90..990 y springs 368..435 · L1 script13 cx540 bl springs 395 ·
 *       L2 script12 cx540 bl springs 420 · tagline script13 cx540 bl springs 465 ·
 *       underline y springs 485 x springs 260..820
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, MUTED, AMBER, GREEN, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the one-page exam-hall sheet */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("chapter cheat sheet", "chapter ka cheat sheet")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={78} size={11} fill={MUTED} script>
          {t(
            "the ideas to carry into the exam hall",
            "exam hall mein le jaane waali baatein"
          )}
        </T>
      </Fade>

      {/* beat 1 — CoM */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={108} size={12} fill={INK} script anchor="start">
          {t(
            "CoM moves as if ALL mass + ALL external force act there — internal forces never move it",
            "CoM aise chalta jaise SAARI mass + SAARA external force wahin ho — internal forces kabhi nahi hilate"
          )}
        </T>
      </Fade>

      {/* beat 2 — cross product */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={136} size={12} fill={INK} script anchor="start">
          {t(
            "Cross: RHR for direction, determinant to compute — mind the MINUS on the j term",
            "Cross: direction RHR se, compute determinant se — j term par MINUS na bhoolo"
          )}
        </T>
      </Fade>

      {/* beat 3 — torque and L conservation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={164} size={12} fill={INK} script anchor="start">
          {t(
            "Torque turns; τ_net = dL/dt — τ_ext=0 ⇒ L conserved: skaters, collisions, orbits",
            "Torque ghumata; τ_net = dL/dt — τ_ext=0 ⇒ L conserved: skaters, collisions, orbits"
          )}
        </T>
      </Fade>

      {/* beat 4 — equilibrium */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={192} size={12} fill={INK} script anchor="start">
          {t(
            "Equilibrium needs BOTH: ΣF=0 and Στ=0 — take torques about an unknown to erase it",
            "Equilibrium ko DONO chahiye: ΣF=0 aur Στ=0 — unknown ke baare mein torque lo, wo mit jaaye"
          )}
        </T>
      </Fade>

      {/* beat 5 — the must-know moments of inertia */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={220} size={12} fill={INK} anchor="start" weight={700}>
          {t("Must-know I: ", "Must-know I: ")}ring MR² · disc ½MR² · sphere (2/5)MR² · rod-centre ML²/12
        </T>
      </Fade>

      {/* beat 6 — rotation mirrors linear */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={258} size={13} fill={GREEN_DARK} script>
          {t(
            "rotation mirrors linear motion — translate the analogy table, don't memorise twice",
            "rotation linear motion ka aina — analogy table translate karo, do baar mat ratto"
          )}
        </T>
      </Fade>

      {/* beat 7 — rolling recap */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={288} size={13} fill={GREEN_DARK} script>
          {t(
            "rolling: v = ωR · energy carries (1+K²/R²) · the sphere always wins the race",
            "rolling: v = ωR · energy mein (1+K²/R²) · sphere hamesha race jeetta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — top exam traps */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <Chip x={100} y={320} w={230} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("j-term MINUS", "j-term MINUS")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <Chip x={350} y={320} w={230} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("degrees vs radians", "degrees vs radians")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.4)}>
        <Chip x={600} y={320} w={280} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("translational-only KE", "translational-only KE")}
        </Chip>
      </Fade>

      {/* beat 9 — the golden habit, and the close of the chapter */}
      <Draw
        on={beat >= 9}
        delay={dl(9, 1)}
        d="M 90 368 h 900 q 12 0 12 12 v 55 q 0 12 -12 12 h -900 q -12 0 -12 -12 v -55 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 9} delay={dl(9, 2.5)}>
        <T x={540} y={395} size={13} fill={GREEN_DARK} script>
          {t(
            "GOLDEN HABIT: check units · name the axis or reference point",
            "GOLDEN HABIT: units check karo · axis ya reference point naam do"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.5)}>
        <T x={540} y={420} size={12} fill={GREEN_DARK} script>
          {t(
            "sanity-check every answer against intuition",
            "har answer ko intuition ke saamne sanity-check karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 5.5)}>
        <T x={540} y={465} size={13} fill={INK} script>
          {t(
            "do this, and this chapter is your most reliable marks on the paper",
            "yeh karo, aur yeh chapter paper ke sabse bharosemand marks bante"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 7.5)} d="M 260 485 h 560" stroke={GREEN} sw={2.4} dur={0.7} />
    </Scene>
  );
}
