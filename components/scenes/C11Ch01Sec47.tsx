/**
 * C11 Ch01 · Section 47 — "The mole ratio bridge and yield relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,6.23,18.09,31.83,43.01,54.19,67.85,90.03]):
 *  0 anchor: collecting the relations, most already met in another form
 *  1 the mole ratio bridge, boxed: mol(A)/coeff(A) = mol(B)/coeff(B)
 *  2 limiting reagent rule: smallest (moles ÷ coefficient)
 *  3 excess reactant remaining
 *  4 percentage yield formula
 *  5 the two on-ramp conversions: STP gas volume, solution molarity
 *  6 POAC relation + KClO₃ example
 *  7 the spine recap + naming your step
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | box (dashed amber, w480h40)  | Draw  | x300..780 y100..140
 *  b1 | formula inside (14 bold ink)| T mid | x540  y124
 *  b2 | l (script12 ink)             | T mid | x540  y168
 *  b3 | l (script12 ink)             | T mid | x540  y193
 *  b4 | l (13 bold green)            | T mid | x540  y218
 *  b5 | l (script12 muted)           | T mid | x540  y246
 *  b6 | l1 (script12 ink)            | T mid | x540  y274
 *  b6 | l2 (12 bold green)           | T mid | x540  y296
 *  b7 | l1 (script12 muted)          | T mid | x540  y324
 *  b7 | l2 (script12 green)          | T mid | x540  y349
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("the mole ratio bridge and yield relations", "mole ratio bridge aur yield relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "collecting the relations — most you've already met in another form",
            "relations ikattha kar rahe — zyadatar se tum kisi aur roop mein mil chuke ho"
          )}
        </T>
      </Fade>

      {/* beat 1 — the mole ratio bridge, boxed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 316 100 h 448 q 16 0 16 16 v 8 q 0 16 -16 16 h -448 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={124} size={14} fill={INK} weight={700} script={false}>
          mol(A) / coeff(A) = mol(B) / coeff(B) — {t("the mole ratio bridge", "mole ratio bridge")}
        </T>
      </Fade>

      {/* beat 2 — limiting reagent rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={12} fill={INK} script>
          {t(
            "limiting reagent = smallest (moles ÷ coefficient) — runs out first, caps the product",
            "limiting reagent = sabse chhota (moles ÷ coefficient) — pehle khatam, product ko cap karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — excess reactant remaining */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={193} size={12} fill={INK} script>
          {t(
            "excess left = initial moles − consumed (consumed from the LIMITING reagent)",
            "excess bacha = initial moles − consumed (consumed LIMITING reagent se)"
          )}
        </T>
      </Fade>

      {/* beat 4 — percentage yield */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={218} size={13} fill={GREEN} weight={700} script={false}>
          % yield = (actual / theoretical) × 100
        </T>
      </Fade>

      {/* beat 5 — the two on-ramp conversions */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={246} size={12} fill={MUTED} script>
          moles(gas, STP) = V / 22.4 L · moles(solute) = MOLARITY × VOLUME (L)
        </T>
      </Fade>

      {/* beat 6 — POAC relation + example */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={274} size={12} fill={INK} script>
          {t(
            "POAC: total moles of an element — reactant side = product side",
            "POAC: kisi element ke total moles — reactant side = product side"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={296} size={12} fill={GREEN} weight={700} script={false}>
          KClO₃→KCl+O₂: 3×mol(KClO₃) = 2×mol(O₂)
        </T>
      </Fade>

      {/* beat 7 — the spine recap */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={324} size={12} fill={MUTED} script>
          {t(
            "the spine for every problem: balance → moles → ratio → convert back",
            "har problem ki spine: balance → moles → ratio → wapas convert"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={349} size={12} fill={GREEN} script>
          {t(
            "name your step — you won't lose your place in a multi-part question",
            "apna step naam lo — multi-part sawaal mein jagah nahi khoyegi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
