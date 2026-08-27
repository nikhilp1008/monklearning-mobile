/**
 * C11 Chemistry Ch04 · Section 4 — "Dipole moment and percentage ionic character"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas (card recap).
 *
 * Beats (en [0, 13.48, 29.53, 39.94, 53.76, 70.66, 90.54, 111.62]):
 *  0 intro line: putting a number on the lopsidedness
 *  1 DIPOLE MOMENT card: μ = q × d, vector + → −
 *  2 same card + SI unit note (C·m too large → debye)
 *  3 same card + conversion 1 D = 3.336e-30 C·m
 *  4 NET DIPOLE card: vector sum of bond dipoles, ties to symmetry
 *  5 red line: no bond is 100% ionic or covalent
 *  6 % IONIC CHARACTER card: formula + μ_ionic = e·d
 *  7 same card + speed trick: e×100pm ≈ 4.8 D
 *
 * Layout plan:
 *  b1-3 | dipole-moment card | Draw/T | x140..940 y110..280
 *  b4   | net-dipole card    | Draw/T | x300..780 y294..358
 *  b5   | red intro line     | T mid  | x?..?     y372..384
 *  b6-7 | % ionic card       | Draw/T | x140..940 y394..534
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Dipole moment and % ionic character", "Dipole moment aur % ionic character")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 380 80 C 460 76, 620 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t("putting a number on the lopsidedness", "lopsidedness par ek number")}
        </T>
      </Fade>

      {/* beats 1-3 — dipole moment card */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 140 110 h 800 v 170 h -800 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={134} size={14} weight={800} fill={AMBER_DARK}>
          DIPOLE MOMENT
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={166} size={22} weight={700} fill={INK}>
          μ = q × d
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={540} y={190} size={12} fill={INK}>
          {t("vector: points + end → − end", "vector: + end se − end ki taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={218} size={13} fill={INK}>
          {t(
            "SI unit: C·m (too large) → practical unit: debye (D)",
            "SI unit: C·m (bada) → practical unit: debye (D)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={248} size={13} weight={700} fill={RED}>
          1 D = 3.336 × 10⁻³⁰ C·m
        </T>
      </Fade>

      {/* beat 4 — net dipole card */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 300 294 h 480 v 64 h -480 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={318} size={13} weight={800} fill={AMBER_DARK}>
          {t("NET DIPOLE (molecule)", "NET DIPOLE (molecule)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={342} size={12} fill={INK}>
          {t("= Σ bond dipoles → symmetry can cancel to 0", "= Σ bond dipoles → symmetry se 0 ho sakta")}
        </T>
      </Fade>

      {/* beat 5 — no bond is purely ionic or covalent */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={380} size={13} fill={RED}>
          {t("no bond is 100% ionic or 100% covalent", "koi bond 100% ionic ya 100% covalent nahi")}
        </T>
      </Fade>

      {/* beats 6-7 — % ionic character card */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 140 394 h 800 v 140 h -800 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={420} size={14} weight={800} fill={AMBER_DARK}>
          PERCENTAGE IONIC CHARACTER
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={452} size={18} weight={700} fill={INK}>
          % ionic = (μ_obs / μ_ionic) × 100
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={476} size={12} fill={MUTED}>
          {t("μ_ionic = e × d (fully-transferred charge)", "μ_ionic = e × d (fully-transferred charge)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={506} size={13} weight={700} fill={GREEN}>
          {t(
            "speed trick: e × 100 pm ≈ 4.8 D — scale linearly with d",
            "speed trick: e × 100 pm ≈ 4.8 D — d ke saath linearly scale"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
