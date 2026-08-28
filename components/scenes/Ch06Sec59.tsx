/**
 * Ch06 · Section 59 — "Common pitfalls and pro-tips" (Rotational Kinematics & Dynamics)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,7.42,18.94,19.94,20.94,21.94,22.94,23.94] — b2..b7 fast in EN;
 * hi [0,6.49,18.35,27.9,42.33,52.82,71.94,87.3] — b0,b1 have room in both):
 *  0 title + red underline
 *  1 trap 1: mixing degrees and radians
 *  2 sub: convert rev→rad — ×2π before substituting (fast)
 *  3 trap 2: kinematic equations need CONSTANT α (fast)
 *  4 trap 3: two-stage — τ gives α, then kinematics gives ω/θ (fast)
 *  5 trap 4: tangential ⊥ centripetal — chips (fast)
 *  6 green pro-tip: build the analogy table once (fast)
 *  7 closing: the non-slip signature a = αR (fast)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl52 · underline y72 x300..780
 *  b1 | script14 st x80 bl125
 *  b2 | script12 st x100 bl153
 *  b3 | script14 st x80 bl205
 *  b4 | script14 st x80 bl265
 *  b5 | script14 st x80 bl325 · chips y345 h34: x100 w400 / x540 w400
 *  b6 | green box x80..1000 y400..460 · L1 script13 cx540 bl428 · L2 script12 cx540 bl452
 *  b7 | script13 cx540 bl490 · underline y508 x300..780
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, MUTED, AMBER, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("rotational-motion traps", "rotational-motion ke traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 300 72 h 480" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — trap 1: degrees vs radians */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · mixing degrees and radians — equations demand radians THROUGHOUT",
            "1 · degrees aur radians milana — equations HAMESHA radians maangti"
          )}
        </T>
      </Fade>

      {/* beat 2 — the conversion habit (fast) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={153} size={12} fill={MUTED} script anchor="start">
          {t(
            "revolutions → radians: × 2π before you substitute",
            "revolutions → radians: substitute se pehle × 2π"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2: constant α only (fast) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={205} size={14} fill={RED} script anchor="start">
          {t(
            "2 · the three kinematic equations need CONSTANT α",
            "2 · teen kinematic equations ko CONSTANT α chahiye"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 3: the two-stage structure (fast) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={265} size={14} fill={RED} script anchor="start">
          {t(
            "3 · don't skip the two stages: τ gives α, THEN kinematics gives ω or θ",
            "3 · do stages mat chhodo: τ se α, PHIR kinematics se ω ya θ"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 4: two different accelerations (fast) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={325} size={14} fill={RED} script anchor="start">
          {t(
            "4 · tangential and centripetal are ⊥ — never add them as plain numbers",
            "4 · tangential aur centripetal ⊥ hain — plain numbers ki tarah kabhi mat jodo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={100} y={345} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("tangential: a = αr (along the path)", "tangential: a = αr (path ke saath)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <Chip x={540} y={345} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("centripetal: a = ω²r (toward centre)", "centripetal: a = ω²r (centre ki or)")}
        </Chip>
      </Fade>

      {/* beat 6 — the pro-tip (fast) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.4)}
        d="M 92 400 h 896 q 12 0 12 12 v 46 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={428} size={13} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: build the linear-rotational analogy table once, thoroughly",
            "PRO-TIP: linear-rotational analogy table ek baar, achhi tarah banao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.85)}>
        <T x={540} y={452} size={12} fill={MUTED} script>
          {t(
            "then translate every result — never memorise a second set of formulas",
            "phir har result translate karo — dooosra formula set kabhi mat rato"
          )}
        </T>
      </Fade>

      {/* beat 7 — the non-slip signature (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={490} size={13} fill={GREEN_DARK} script>
          {t(
            "non-slip signature: a = αR is always the extra bridge equation",
            "non-slip ki pehchaan: a = αR hamesha extra bridge equation hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 508 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
