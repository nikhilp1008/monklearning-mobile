/**
 * C11 Chemistry Ch04 · Section 8 — "Worked examples: polarity by symmetry and percent ionic character"
 * Canvas 1080×620 · safe x36–1044, y30–596. Two worked examples; Part A erases before Part B builds.
 *
 * Beats (en [0, 16.47, 38.57, 61.53, 85.93, 108.63, 130.39, 142.68]):
 *  0 intro: two exam favourites
 *  1 Part A (NEET): 4 molecule chips — CCl4, BF3, CHCl3, CO2
 *  2 reasons under 3 of them: tetrahedral/trigonal/linear → cancel
 *  3 ring CHCl3 red — symmetry broken → POLAR; trap line
 *  4 Part A erases; Part B (JEE) setup: XY, d=130pm, μ_obs=1.10D, e=1.6e-19C
 *  5 step 1: μ_ionic = e·d ≈ 2.08e-29 C·m
 *  6 step 2: → D ≈ 6.24 D
 *  7 step 3: %ionic ≈ 17.6% + green sanity-check chip
 *
 * Layout plan:
 *  b1-3 | 4 molecule chips + reasons | Draw/T | x135..945 y130..230 (erases at b4)
 *  b4-7 | JEE calc, reusing space   | T/Chip | x?..?     y140..330
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const molActive = beat >= 1 && beat < 4;
  const chips = [
    { x: 135, cx: 210, label: "CCl₄" },
    { x: 355, cx: 430, label: "BF₃" },
    { x: 575, cx: 650, label: "CHCl₃" },
    { x: 795, cx: 870, label: "CO₂" },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Polarity by symmetry, and % ionic character", "Symmetry se polarity, aur % ionic character")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 350 80 C 440 76, 640 76, 730 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("two exam favourites: NEET speed trap + JEE calc", "do exam favourites: NEET speed trap + JEE calc")}
        </T>
      </Fade>

      {/* beat 1-3 — Part A: NEET symmetry trap (erases at beat 4) */}
      {chips.map((c, i) => (
        <Draw key={c.label} on={molActive} delay={dl(1, 0.2 + i * 0.25)} d={`M ${c.x} 130 h 150 v 30 h -150 z`} stroke={INK} sw={1.8} dur={0.35} />
      ))}
      <Fade on={molActive} delay={dl(1, 1.3)}>
        {chips.map((c) => (
          <T key={c.label} x={c.cx} y={150} size={15} weight={700} fill={INK}>
            {c.label}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <T x={210} y={180} size={10.5} fill={GREEN}>
          {t("✓ tetrahedral → cancels", "✓ tetrahedral → cancel")}
        </T>
        <T x={430} y={180} size={10.5} fill={GREEN}>
          {t("✓ trigonal planar → cancels", "✓ trigonal planar → cancel")}
        </T>
        <T x={870} y={180} size={10.5} fill={GREEN}>
          {t("✓ linear → cancels", "✓ linear → cancel")}
        </T>
      </Fade>
      <Draw on={beat >= 3 && beat < 4} delay={dl(3, 0.3)} d={ringD(650, 145, 89, 27)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.9)}>
        <T x={650} y={182} size={10.5} weight={700} fill={RED}>
          {t("✗ symmetry broken → POLAR", "✗ symmetry toot gayi → POLAR")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.4)}>
        <T x={540} y={216} size={12} fill={RED}>
          {t(
            "trap: polar BONDS ≠ polar MOLECULE — arrangement decides",
            "trap: polar BONDS ≠ polar MOLECULE — arrangement tay karta"
          )}
        </T>
      </Fade>

      {/* beat 4-7 — Part B: JEE percentage ionic character (reuses the space) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={140} size={13} fill={INK}>
          XY: d = 130 pm, μ_obs = 1.10 D, e = 1.6×10⁻¹⁹ C
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={164} size={12} fill={MUTED}>
          {t("find: % ionic character", "pata karo: % ionic character")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={210} size={12} fill={INK}>
          Step 1: μ_ionic = e·d = (1.6×10⁻¹⁹)(130×10⁻¹²) ≈ 2.08×10⁻²⁹ C·m
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={240} size={12} fill={INK}>
          Step 2: → D = 2.08×10⁻²⁹ ÷ 3.336×10⁻³⁰ ≈ 6.24 D
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={270} size={12} weight={700} fill={INK}>
          Step 3: % ionic = (1.10 / 6.24) × 100 ≈ 17.6% (~18%)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={200} y={296} w={680} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "observed < fully-ionic, always — ratio > 100% ⇒ check a power of ten",
            "observed hamesha fully-ionic se chhota — ratio>100% ⇒ power of ten check karo"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
