/**
 * C11 Ch06 · Section 20 — "Temperature dependence: van't Hoff and the ΔH°, ΔS° split"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.5, 21.8, 30.4, 40.8, 53.3, 64.7, 73.8]):
 *  0 title + underline
 *  1 combine ΔG°=−RTlnK with ΔG°=ΔH°−TΔS°
 *  2 result, boxed: ln K = −ΔH°/(RT) + ΔS°/R
 *  3 transition: compare K at two T → entropy term cancels
 *  4 land, ringed: van't Hoff — ln(K2/K1) = −(ΔH°/R)(1/T2 − 1/T1)
 *  5 units note: R = 8.314 J/mol/K, T in kelvin, energies in J/mol
 *  6 physical reading, boxed: K rises with T ⇒ forward reaction ENDOTHERMIC
 *  7 guardrail: K, Q, ln K are all dimensionless
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 20, red)      | T mid  | x220..860  y30..84  (bl 64)
 *  b1 | combine note (14, muted)    | T mid  | y99..114 (bl 110)
 *  b2 | "lnK=-ΔH°/(RT)+ΔS°/R" chip  | Chip   | x370..710 y130..174
 *  b3 | transition (14, amber, scr) | T mid  | y195..212 (bl 210)
 *  b4 | van't Hoff eq ringed (21)   | T mid  | x337..743 y233..257 (bl 250)
 *  b5 | units note (13, muted)      | T mid  | y300..314 (bl 310)
 *  b6 | physical-reading chip       | Chip   | x335..745 y345..389
 *  b7 | guardrail (14, red)         | T mid  | y409..426 (bl 420)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("van't Hoff: splitting ln K into ΔH° and ΔS°", "van't Hoff: ln K ko ΔH° aur ΔS° mein split")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — combine the two relations */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={14} fill={MUTED} anchor="middle">
          {t(
            "combine ΔG° = −RT ln K  with  ΔG° = ΔH° − TΔS°",
            "combine karo ΔG° = −RT ln K  aur  ΔG° = ΔH° − TΔS°"
          )}
        </T>
      </Fade>

      {/* beat 2 — the split result */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={370} y={130} w={340} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={19} script={false}>
          ln K = −ΔH°/(RT) + ΔS°/R
        </Chip>
      </Fade>

      {/* beat 3 — transition */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={14} fill={AMBER_DARK} script anchor="middle">
          {t(
            "compare K at two temperatures → entropy term cancels",
            "do temperatures par K compare karo → entropy term cancel"
          )}
        </T>
      </Fade>

      {/* beat 4 — the van't Hoff equation, landed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={21} fill={GREEN} weight={800} anchor="middle">
          ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁)
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 245, 203, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — units */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={310} size={13} fill={MUTED} anchor="middle">
          {t(
            "R = 8.314 J/mol/K, T in kelvin, energies in J/mol",
            "R = 8.314 J/mol/K, T kelvin mein, energies J/mol mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — the physical reading */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={335} y={345} w={410} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          {t("K rises with T ⇒ forward reaction ENDOTHERMIC", "K, T ke saath badhta ⇒ forward reaction ENDOTHERMIC")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={420} size={14} fill={RED} anchor="middle">
          {t("K, Q, ln K are all dimensionless", "K, Q, ln K sab dimensionless hain")}
        </T>
      </Fade>
    </Scene>
  );
}
