/**
 * Ch06 · Section 40 — "Common pitfalls and pro-tips" (Equilibrium)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.25, 16.55, 27.9, 42.92, 54.02, 66.22, 85.08]; hi b1..b4 are
 * 1 s → short staggers early):
 *  0 title + red underline
 *  1 trap 1: both conditions + twin chips
 *  2 number-one-error sub-line
 *  3 trap 2: object's own weight at CG
 *  4 trap 3: poor pivot choice
 *  5 trap 4: CoM vs point of support
 *  6 pro-tip green box
 *  7 one-step tail + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | script14 st x80 bl 125 · chips y145 h34: x100 w200 · x320 w200
 *  b2 | script12 st x100 bl 215
 *  b3 | script14 st x80 bl 265 · sub script12 st x100 bl 293
 *  b4 | script14 st x80 bl 340 · sub script12 st x100 bl 368
 *  b5 | script14 st x80 bl 415 · sub script12 st x100 bl 443
 *  b6 | green box x80..1000 y470..545 · L1 script13 cx540 bl 498 · L2 script12 cx540 bl 526
 *  b7 | script13 st x80 bl 578 · underline y592 x80..600
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

export default function Ch06Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "equilibrium traps that cost marks",
            "equilibrium ke marks khaane waale traps"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 300 72 h 480" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — both conditions */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · one condition is NOT enough — a rigid body needs BOTH",
            "1 · ek condition kaafi NAHI — rigid body ko DONO chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={100} y={145} w={200} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          ΣF = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={320} y={145} w={200} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          Στ = 0
        </Chip>
      </Fade>

      {/* beat 2 — the number-one error */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={215} size={12} fill={RED} script anchor="start">
          {t(
            "forces balanced but torques forgotten (or the reverse) — the #1 sinker: write BOTH, every time",
            "forces balance par torques bhool gaye (ya ulta) — #1 dubane wali galti: DONO likho, har baar"
          )}
        </T>
      </Fade>

      {/* beat 3 — the object's own weight */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={265} size={14} fill={RED} script anchor="start">
          {t(
            "2 · the rod/plank's OWN weight counts too",
            "2 · rod/plank ka APNA weight bhi ginta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={100} y={293} size={12} fill={MUTED} script anchor="start">
          {t(
            "it acts at the CG — must enter the torque equation when the pivot is off-centre",
            "wo CG par act karta hai — pivot off-centre ho to torque equation mein aana hi chahiye"
          )}
        </T>
      </Fade>

      {/* beat 4 — pivot choice */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={340} size={14} fill={RED} script anchor="start">
          {t(
            "3 · a poor pivot makes extra algebra",
            "3 · kharab pivot = faltu algebra"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={100} y={368} size={12} fill={MUTED} script anchor="start">
          {t(
            "any point is allowed — pick where an unknown acts, and it vanishes",
            "koi bhi point chalega — wahan chuno jahan unknown act karta hai, wo gayab"
          )}
        </T>
      </Fade>

      {/* beat 5 — CoM vs support */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={415} size={14} fill={RED} script anchor="start">
          {t(
            "4 · CoM ≠ point of support",
            "4 · CoM ≠ point of support"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={100} y={443} size={12} fill={MUTED} script anchor="start">
          {t(
            "balance needs support UNDER the CG — anywhere else gravity topples it",
            "balance ke liye support CG ke NEECHE ho — kahin aur ho to gravity gira degi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 92 470 h 896 q 12 0 12 12 v 51 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={498} size={13} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: torque about the unknown you care least about · anticlockwise = +",
            "PRO-TIP: torque us unknown ke baare mein jiski sabse kam parwah · anticlockwise = +"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={540} y={526} size={12} fill={MUTED} script>
          {t(
            "and the side nearer the CG always carries the larger load",
            "aur CG ke zyada paas wala side hamesha bada load uthata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — one line instead of two unknowns */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={80} y={578} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "two-unknown mess → single-step solution — and load-sharing catches errors fast ✓",
            "two-unknown jhanjhat → single-step solution — load-sharing galtiyan turant pakadta ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d="M 80 592 h 600" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
