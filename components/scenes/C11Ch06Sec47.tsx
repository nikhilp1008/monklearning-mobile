/**
 * C11 Ch06 · Section 47 — "What makes one acid stronger than another"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 12.9, 19.5, 29.4, 45.7, 54.8, 62.7]):
 *  0 title + underline
 *  1 acid strength = how easily the H–A bond gives up its proton
 *  2 down a group: bond grows longer & weaker
 *  3 HF < HCl < HBr < HI, ringed — bond strength wins over electronegativity
 *  4 across a period: polarity dominates
 *  5 CH4 < NH3 < H2O < HF, ringed
 *  6 oxoacids: more O → stabilizes conjugate base → acidity ↑ with oxidation state
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | note (15, ink)              | T mid  | y100..117 (bl 112)
 *  b2 | down-group (14, amber-dark) | T mid  | y138..155 (bl 150)
 *  b3 | "HF<HCl<HBr<HI" ringed(18)  | T mid  | x436..644 y171..191 (bl 185)
 *  b3 | sub-note (12, muted)        | T mid  | y223..236 (bl 232)
 *  b4 | across-period (14, amber)   | T mid  | y254..270 (bl 265)
 *  b5 | "CH4<NH3<H2O<HF" ringed(18) | T mid  | x436..644 y286..306 (bl 300)
 *  b6 | oxoacids note (14, ink)     | T mid  | y349..364 (bl 360)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("what makes one acid stronger", "ek acid dusre se strong kyun hai")}
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

      {/* beat 1 — the definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={15} fill={INK} anchor="middle">
          {t(
            "acid strength = how easily the H–A bond gives up its proton",
            "acid strength = H–A bond kitni aasani se proton chhodta"
          )}
        </T>
      </Fade>

      {/* beat 2 — down a group */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={14} fill={AMBER_DARK} anchor="middle">
          {t("↓ down a group: bond grows longer & weaker", "↓ group mein neeche: bond lamba aur weak")}
        </T>
      </Fade>

      {/* beat 3 — the halide series */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={185} size={18} fill={GREEN} weight={700} anchor="middle">
          HF &lt; HCl &lt; HBr &lt; HI
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={ringD(540, 181, 104, 22)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={540} y={232} size={12} fill={MUTED} anchor="middle">
          {t("bond strength wins over electronegativity", "bond strength electronegativity se jeetta")}
        </T>
      </Fade>

      {/* beat 4 — across a period */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={265} size={14} fill={AMBER_DARK} anchor="middle">
          {t("→ across a period: polarity dominates", "→ period mein: polarity dominate karti")}
        </T>
      </Fade>

      {/* beat 5 — the second-row series */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={300} size={18} fill={GREEN} weight={700} anchor="middle">
          CH₄ &lt; NH₃ &lt; H₂O &lt; HF
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={ringD(540, 296, 104, 22)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 6 — oxoacids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={360} size={14} fill={INK} anchor="middle">
          {t(
            "oxoacids: more O → stabilizes conjugate base → acidity ↑ with oxidation state",
            "oxoacids: zyada O → conjugate base stabilize → acidity ↑ oxidation state ke saath"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
