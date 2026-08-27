/**
 * C11 Ch06 · Section 37 — "Worked example — maximising SO3 yield (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 11.4, 21.4, 28.5, 39, 44.8, 52.8]):
 *  0 title + underline
 *  1 reaction: 2SO2+O2⇌2SO3, exothermic
 *  2 row1: high pressure → ✓ INCREASES yield
 *  3 row2: high temperature → ✗ DECREASES yield
 *  4 row3: catalyst → ✗ NO CHANGE
 *  5 row4: excess O2 → ✓ INCREASES yield
 *  6 land, ringed: real boosters = high P + excess O2; T/catalyst = kinetics only
 *
 * Layout plan (centered stack, two-column rows; longer language counts):
 *  b0 | title (script 21, red)      | T mid  | x230..850  y30..86  (bl 64)
 *  b1 | equation (17, ink)          | T mid  | y107..122 (bl 115)
 *  b2 | row1 left(ink)/right(grn)   | T      | x282..635 y136..153 (bl 148)
 *  b3 | row2 left(ink)/right(red)   | T      | x260..672 y166..183 (bl 178)
 *  b4 | row3 left(ink)/right(red)   | T      | x320..597 y196..213 (bl 208)
 *  b5 | row4 left(ink)/right(grn)   | T      | x312..665 y226..243 (bl 238)
 *  b6 | landing statement, ringed   | T mid  | x262..818 y278..295 (bl 290)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, GREEN, RED, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("worked example: maximising SO3 yield (JEE Main)", "worked example: SO3 yield maximise (JEE Main)")}
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
          2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   (exothermic)
        </T>
      </Fade>

      {/* beat 2 — high pressure */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={380} y={148} size={15} fill={INK} anchor="end">
          {t("high pressure", "high pressure")}
        </T>
        <T x={410} y={148} size={15} fill={GREEN} anchor="start">
          {t("✓ INCREASES yield (3→2 moles)", "✓ INCREASES yield (3→2 moles)")}
        </T>
      </Fade>

      {/* beat 3 — high temperature */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={380} y={178} size={15} fill={INK} anchor="end">
          {t("high temperature", "high temperature")}
        </T>
        <T x={410} y={178} size={15} fill={RED} anchor="start">
          {t("✗ DECREASES yield (shifts back, K↓)", "✗ DECREASES yield (backward, K↓)")}
        </T>
      </Fade>

      {/* beat 4 — catalyst */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={380} y={208} size={15} fill={INK} anchor="end">
          {t("catalyst", "catalyst")}
        </T>
        <T x={410} y={208} size={15} fill={MUTED} anchor="start">
          {t("✗ NO CHANGE (faster only)", "✗ NO CHANGE (sirf faster)")}
        </T>
      </Fade>

      {/* beat 5 — excess oxygen */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={380} y={238} size={15} fill={INK} anchor="end">
          {t("excess O₂", "excess O₂")}
        </T>
        <T x={410} y={238} size={15} fill={GREEN} anchor="start">
          {t("✓ INCREASES yield (shifts forward)", "✓ INCREASES yield (forward shift)")}
        </T>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={290} size={16} fill={GREEN} weight={700} anchor="middle">
          {t(
            "real boosters: high P + excess O2 — T & catalyst = kinetics only",
            "real boosters: high P + excess O2 — T aur catalyst = sirf kinetics"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 286, 278, 21)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
