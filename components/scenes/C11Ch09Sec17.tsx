/**
 * C11 Ch09 · Section 17 — "CO2 volume from combustion of propane" (worked, CBSE)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 13.14, 27.39, 36.35, 44.46, 56.49, 64.94]):
 *  0 heading/question · 1 given data · 2 step1 moles · 3 step2 balanced
 *  equation · 4 step3 mole ratio · 5 step4 volume · 6 GREEN answer
 *
 * Layout plan:
 *  b0 | question             | T mid | y95
 *  b1 | given line            | T mid | y135
 *  b2 | step1 line            | T mid | y172
 *  b3 | boxed equation        | Draw+T| box x230..850 y198..234 · text bl221
 *  b4 | step3 line            | T mid | y270
 *  b5 | step4 line            | T mid | y302
 *  b6 | green answer chip     | Chip  | x420..660 y330..376
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("CO2 volume from combustion of propane", "propane ke combustion se CO2 ka volume")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          [CBSE] {t("volume of CO2 from 2.2 g propane at STP", "2.2 g propane se CO2 ka volume, STP par")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("Given: 2.2 g propane · molar mass 44 · molar volume 22.4 L/mol at STP", "Given: 2.2 g propane · molar mass 44 · molar volume 22.4 L/mol STP par")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={172} size={16} fill={INK} weight={700}>
          {t("Step 1 — moles of propane = 2.2 / 44 = 0.05 mol", "Step 1 — propane ke moles = 2.2 / 44 = 0.05 mol")}
        </T>
      </Fade>

      {/* beat 3 — the balanced equation, boxed */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 230 198 H 850 V 234 H 230 Z" stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={221} size={18} fill={INK} weight={700}>
          C3H8 + 5O2 → 3CO2 + 4H2O
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={270} size={16} fill={INK} weight={700}>
          {t("Step 3 — 1 mol propane → 3 mol CO2, so 0.05 → 0.15 mol", "Step 3 — 1 mol propane → 3 mol CO2, toh 0.05 → 0.15 mol")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={302} size={16} fill={INK} weight={700}>
          {t("Step 4 — volume = 0.15 × 22.4 = 3.36 L", "Step 4 — volume = 0.15 × 22.4 = 3.36 L")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={400} y={335} w={280} h={46} fill={GREEN} textFill={CREAM} size={20} script={false}>
          {t("3.36 L of CO2 at STP", "3.36 L CO2, STP par")}
        </Chip>
      </Fade>
    </Scene>
  );
}
