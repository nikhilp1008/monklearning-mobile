/**
 * C11 Ch06 · Section 24 — "Worked example — van't Hoff, finding ΔH° (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.3, 21.9, 31.3, 50, 65.8, 70.1]):
 *  0 title + underline
 *  1 GIVEN: K1=1.0e-4 at 300K, K2=1.0e-3 at 320K
 *  2 boxed preview: K rises with T → already ENDOTHERMIC
 *  3 intermediate: ln(K2/K1)=ln10=2.303; (1/300-1/320)=2.08e-4
 *  4 rearranged: ΔH° = R·ln(K2/K1)/(1/T1-1/T2) = 8.314×2.303/2.08e-4
 *  5 land, ringed: ΔH° ≈ +92 kJ/mol
 *  6 confirm chip: positive ⇒ ENDOTHERMIC ✓
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x216..864  y30..86  (bl 64)
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..420  y110..129 (bl 124)
 *  b2 | preview chip (amber)        | Chip   | x160..920 y145..185
 *  b3 | intermediate (15, ink)      | T mid  | x320..760 y208..225 (bl 220)
 *  b4 | rearranged (16, ink)        | T mid  | x320..760 y243..260 (bl 255)
 *  b5 | answer ringed (26, green)   | T mid  | x415..665 y285..313 (bl 305)
 *  b6 | confirm chip (green)        | Chip   | x300..780 y355..399
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("worked example: van't Hoff finds ΔH° (JEE Advanced)", "worked example: van't Hoff se ΔH° (JEE Advanced)")}
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

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={100} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={124} size={15} fill={INK} anchor="start">
          K₁ = 1.0×10⁻⁴ at 300 K;  K₂ = 1.0×10⁻³ at 320 K
        </T>
      </Fade>

      {/* beat 2 — the preview */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={160} y={145} w={760} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          {t(
            "K rises with T → already signals ENDOTHERMIC (preview!)",
            "K, T ke saath badhta → ENDOTHERMIC ka signal (preview!)"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — the intermediate numbers */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={220} size={15} fill={INK} anchor="middle">
          ln(K₂/K₁) = ln10 = 2.303;  (1/300 − 1/320) = 2.08×10⁻⁴
        </T>
      </Fade>

      {/* beat 4 — rearranged van't Hoff */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={16} fill={INK} weight={700} anchor="middle">
          ΔH° = R·ln(K₂/K₁)/(1/T₁−1/T₂) = 8.314×2.303/2.08×10⁻⁴
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={305} size={26} fill={GREEN} weight={800} anchor="middle">
          ΔH° ≈ +92 kJ/mol
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 299, 125, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — confirm */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={300} y={355} w={480} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          {t("positive ⇒ ENDOTHERMIC ✓ (K rises on heating)", "positive ⇒ ENDOTHERMIC ✓ (heating par K badhta)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
