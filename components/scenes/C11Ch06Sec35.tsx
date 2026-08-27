/**
 * C11 Ch06 · Section 35 — "Worked example — three disturbances on ammonia synthesis (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.8, 14.9, 26.4, 34.5, 46.7, 55]):
 *  0 title + underline
 *  1 reaction: N2+3H2⇌2NH3, exothermic
 *  2 Part 1: ↑pressure → FORWARD (2 vs 4 moles)
 *  3 Part 2: + N2 → FORWARD (consumes N2)
 *  4 Part 3: ↑temperature → BACKWARD (heat = product)
 *  5 guardrail chip: only Part 3 changes K — and K decreases
 *  6 land, ringed: answers — forward, forward, backward
 *
 * Layout plan (centered stack, two-column rows; longer language counts):
 *  b0 | title (script 21, red)      | T mid  | x220..860  y30..86  (bl 64)
 *  b1 | equation (17, ink)          | T mid  | y107..122 (bl 115)
 *  b2 | Part1 left(ink)/right(grn)  | T      | x245..598 y138..155 (bl 150)
 *  b3 | Part2 left(ink)/right(grn)  | T      | x207..590 y168..185 (bl 180)
 *  b4 | Part3 left(ink)/right(red)  | T      | x222..620 y198..215 (bl 210)
 *  b5 | guardrail chip (amber)      | Chip   | x270..810 y235..277
 *  b6 | landing statement, ringed   | T mid  | x346..734 y304..326 (bl 320)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("worked example: three disturbances on ammonia (CBSE)", "worked example: ammonia par teen disturbances (CBSE)")}
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

      {/* beat 1 — the reaction */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={115} size={17} fill={INK} weight={700} anchor="middle">
          N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   (exothermic, ΔH &lt; 0)
        </T>
      </Fade>

      {/* beat 2 — part 1: pressure */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={380} y={150} size={15} fill={INK} anchor="end">
          {t("Part 1: ↑ pressure", "Part 1: ↑ pressure")}
        </T>
        <T x={410} y={150} size={15} fill={GREEN} anchor="start">
          {t("→ FORWARD (2 vs 4 moles)", "→ FORWARD (2 vs 4 moles)")}
        </T>
      </Fade>

      {/* beat 3 — part 2: add nitrogen */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={380} y={180} size={15} fill={INK} anchor="end">
          {t("Part 2: + N₂ (reactant)", "Part 2: + N₂ (reactant)")}
        </T>
        <T x={410} y={180} size={15} fill={GREEN} anchor="start">
          {t("→ FORWARD (consumes N₂)", "→ FORWARD (N₂ consume hota)")}
        </T>
      </Fade>

      {/* beat 4 — part 3: raise temperature */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={380} y={210} size={15} fill={INK} anchor="end">
          {t("Part 3: ↑ temperature", "Part 3: ↑ temperature")}
        </T>
        <T x={410} y={210} size={15} fill={RED} anchor="start">
          {t("→ BACKWARD (heat = product)", "→ BACKWARD (heat = product)")}
        </T>
      </Fade>

      {/* beat 5 — the guardrail */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={270} y={235} w={540} h={42} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("only Part 3 changes K — and K DECREASES", "sirf Part 3 K badalta — aur K DECREASE hota")}
        </Chip>
      </Fade>

      {/* beat 6 — land the three answers */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={320} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("answers: forward, forward, backward", "answers: forward, forward, backward")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 315, 194, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
