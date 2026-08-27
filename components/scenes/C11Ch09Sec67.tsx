/**
 * C11 Ch09 · Section 67 — "The master reaction: electrophilic aromatic substitution"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.67, 20.39, 34.3, 44.29, 54.44, 68.1]):
 *  0 heading · 1 Step1 text: make E+ · 2 Step2 text: pi cloud attacks E+,
 *  forms arenium ion · 3 full 3-ring diagram appears (benzene+E+ -> arenium
 *  ion -> substituted benzene) · 4 RED: forming arenium ion is rate-
 *  determining · 5 Step3 text: base removes H+, aromaticity restored ·
 *  6 RED/GREEN punchline: ring pays in step2, recovers in step3 -> substitutes
 *
 * Layout plan — three rings c(160,330)/(540,330)/(920,330) r=50, revealed
 * together at beat 3:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD, curvedArrowD } from "./chem-kit";

export default function C11Ch09Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const r = 50, cy = 330;
  const c1x = 160, c2x = 540, c3x = 920;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("the master reaction: electrophilic aromatic substitution", "master reaction: electrophilic aromatic substitution")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("three steps every arene reaction follows", "teen steps jo har arene reaction follow karta")}
        </T>
      </Fade>

      {/* beat 1 — step 1 text */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          {t("Step 1 — a catalyst helps generate a strong electrophile, E⁺", "Step 1 — catalyst strong electrophile E⁺ generate karta")}
        </T>
      </Fade>

      {/* beat 2 — step 2 text */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={162} size={15} fill={INK}>
          {t("Step 2 — the π cloud attacks E⁺, forming the arenium ion", "Step 2 — π cloud E⁺ par attack karta, arenium ion banta")}
        </T>
      </Fade>

      {/* beat 3 — the full three-stage diagram */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={c1x} y={cy - r - 34} size={13} fill={RED} weight={700}>
          {t("1. make E⁺", "1. E⁺ banao")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={ringD(c1x, cy, r, 6)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={`M ${c1x} ${cy} m -25 0 a 25 25 0 1 0 50 0 a 25 25 0 1 0 -50 0`} stroke={AMBER_DARK} sw={2} fill="none" dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={c1x} y={cy + r + 26} size={12} fill={INK} script>{t("benzene + E⁺", "benzene + E⁺")}</T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={`M ${c1x + r + 22} ${cy} L ${c2x - r - 22} ${cy}`} stroke={INK} sw={2} dur={0.6} />

      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={c2x} y={cy - r - 34} size={13} fill={RED} weight={700}>
          {t("2. arenium ion", "2. arenium ion")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={ringD(c2x, cy, r, 6)} stroke={RED} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={curvedArrowD(c2x - 28, cy + 18, c2x, cy - r + 8, 22)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={c2x} y={cy - r - 12} size={15} fill={RED} weight={800}>E</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={c2x + 38} y={cy + 6} size={16} fill={RED} weight={800}>+</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={c2x} y={cy + r + 26} size={12} fill={RED} script>
          {t("aromaticity lost", "aromaticity lost")}
        </T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={`M ${c2x + r + 22} ${cy} L ${c3x - r - 22} ${cy}`} stroke={INK} sw={2} dur={0.6} />

      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={c3x} y={cy - r - 34} size={13} fill={GREEN} weight={700}>
          {t("3. aromaticity restored", "3. aromaticity wapas")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.7)} d={ringD(c3x, cy, r, 6)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 4)} d={`M ${c3x} ${cy} m -25 0 a 25 25 0 1 0 50 0 a 25 25 0 1 0 -50 0`} stroke={GREEN} sw={2} fill="none" dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={c3x} y={cy - r - 12} size={15} fill={GREEN} weight={800}>E</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={c3x} y={cy + r + 26} size={12} fill={GREEN} script>
          {t("substituted benzene", "substituted benzene")}
        </T>
      </Fade>

      {/* beat 4 — rate-determining note, pointing at the arenium ion */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={`M ${c2x} ${cy + r + 38} L ${c2x} ${cy + r + 60}`} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={c2x} y={cy + r + 76} size={13} fill={RED} weight={700}>
          {t("slow, rate-determining — costs energy", "slow, rate-determining — energy lagti")}
        </T>
      </Fade>

      {/* beat 5 — step 3 text */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={480} size={15} fill={INK} anchor="start">
          {t("Step 3 — a base plucks H⁺ off, electrons fall back, aromaticity returns", "Step 3 — base H⁺ nikaalta, electrons wapas girte, aromaticity return")}
        </T>
      </Fade>

      {/* beat 6 — the punchline */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 516 L 60 552" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={538} size={16} fill={RED} script anchor="start">
          {t("the ring pays in step 2, recovers in step 3 — it substitutes, never adds", "ring step 2 mein pay karta, step 3 mein recover — substitute karta, kabhi add nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
