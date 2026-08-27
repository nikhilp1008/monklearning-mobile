/**
 * C11 Ch06 · Section 26 — "Le Chatelier: the system fights the change"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Opens subtopic 3 (Le Chatelier's Principle & Factors).
 *
 * Beats (board_reveal_at_english: [0, 8.8, 20, 29.1, 40.9, 50.8, 59.1, 68.7]):
 *  0 title + underline
 *  1 the principle, boxed: disturb ⇒ shifts to COUNTERACT the change
 *  2 picture: a mandi (vegetable market) at price equilibrium
 *  3 row1: flood tomatoes (+reactant) → prices drop, shift forward
 *  4 row2: remove tomatoes (−product) → replaced, shift forward again
 *  5 row3: squeeze stall (↑ pressure) → crowd rearranges, less room
 *  6 guardrail: never PREVENTS the disturbance — just leans against it
 *  7 land, ringed: counteract the change — the whole rule
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x180..900  y30..88  (bl 64)
 *  b1 | principle chip (amber)      | Chip   | x270..810 y108..150
 *  b2 | mandi note (16, ink)        | T mid  | y185..201 (bl 200)
 *  b3 | row1: left(red)/right(grn)  | T      | x148..605 y233..250 (bl 245)
 *  b4 | row2: left(red)/right(grn)  | T      | x148..610 y263..280 (bl 275)
 *  b5 | row3: left(red)/right(grn)  | T      | x148..600 y293..310 (bl 305)
 *  b6 | guardrail (14, muted, scr)  | T mid  | y327..345 (bl 345)
 *  b7 | landing statement, ringed   | T mid  | x273..807 y393..417 (bl 410)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("Le Chatelier: the system fights the change", "Le Chatelier: system change ka virodh karta")}
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

      {/* beat 1 — the principle */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={270} y={108} w={540} h={42} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t(
            "disturb equilibrium → it shifts to COUNTERACT the change",
            "equilibrium disturb karo → COUNTERACT karne shift hota"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the mandi picture */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={200} size={16} fill={INK} weight={600} anchor="middle">
          {t(
            "picture a mandi (vegetable market) at price equilibrium",
            "socho ek mandi price equilibrium par khadi hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — flood with tomatoes */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={350} y={245} size={15} fill={RED} anchor="end">
          {t("flood tomatoes (+reactant)", "tomatoes flood (+reactant)")}
        </T>
        <T x={380} y={245} size={15} fill={GREEN} anchor="start">
          {t("→ prices drop, shift forward", "→ prices girte, forward shift")}
        </T>
      </Fade>

      {/* beat 4 — remove tomatoes */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={350} y={275} size={15} fill={RED} anchor="end">
          {t("remove tomatoes (−product)", "tomatoes hatao (−product)")}
        </T>
        <T x={380} y={275} size={15} fill={GREEN} anchor="start">
          {t("→ replaced, shift forward again", "→ replace hota, phir forward shift")}
        </T>
      </Fade>

      {/* beat 5 — squeeze the stall */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={350} y={305} size={15} fill={RED} anchor="end">
          {t("squeeze stall (↑ pressure)", "stall squeeze (↑ pressure)")}
        </T>
        <T x={380} y={305} size={15} fill={GREEN} anchor="start">
          {t("→ crowd rearranges, less room", "→ crowd rearrange, kam jagah")}
        </T>
      </Fade>

      {/* beat 6 — guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={345} size={14} fill={MUTED} script anchor="middle">
          {t(
            "never PREVENTS the disturbance — just leans against it",
            "disturbance ko kabhi PREVENT nahi karta — bas usse leans karta"
          )}
        </T>
      </Fade>

      {/* beat 7 — the whole rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={410} size={22} fill={GREEN} weight={800} anchor="middle">
          {t("counteract the change — the whole rule", "counteract the change — bas yehi rule")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 405, 267, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
