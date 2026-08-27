/**
 * C11 Chemistry Ch05 · Section 20 — "Gibbs free energy and the third law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,11.01,20.22,36.01,54.1,66.65,74.84,84.99]):
 *  0 panel1 heading + underline: folding surroundings into one quantity
 *  1 text: G = H − TS defined
 *  2 formula chip: ΔG < 0 ⇒ spontaneous (green, high emphasis)
 *  3 red note: defining equation ΔG = ΔH − TΔS
 *  4 text: −ΔG = maximum useful work
 *  5 panel2 heading + underline: third law of thermodynamics
 *  6 chip: perfect crystal at 0K, S = 0
 *  7 red note: lets us tabulate ABSOLUTE entropies
 *
 * Layout plan (centered x540):
 *  b0 | heading1 (18, w800) + underline| y81..101 (bl95); y105
 *  b1 | text1 (14, muted)              | T mid | y119..134 (bl130)
 *  b2 | formula chip (20, green)       | Chip  | x315..765 y145..185
 *  b3 | red note chip (16)             | Chip  | x400..680 y198..233
 *  b4 | text2 (14, ink)                | T mid | y254..269 (bl265)
 *  b5 | divider + heading2 + underline | Draw+T| y285; y301..321 (bl315); y325
 *  b6 | crystal chip (15, ink)         | Chip  | x260..820 y355..395
 *  b7 | red note2 chip (14)            | Chip  | x200..880 y408..453
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("Gibbs free energy & the third law", "Gibbs free energy & the third law")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={18} weight={800} fill={INK}>
          {t("Folding the surroundings into one quantity", "surroundings ko ek quantity mein fold karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 360 105 C 430 102, 650 102, 720 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — G = H - TS */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={130} size={14} fill={MUTED}>
          {t(
            "tracking system+surroundings is clumsy → G = H − TS",
            "system+surroundings track karna clumsy hai → G = H − TS defined kiya"
          )}
        </T>
      </Fade>

      {/* beat 2 — ΔG < 0 spontaneous */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={315} y={145} w={450} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={20} script={false}>
          {t("at constant T,P: ΔG < 0 ⇒ spontaneous", "constant T,P par: ΔG < 0 ⇒ spontaneous")}
        </Chip>
      </Fade>

      {/* beat 3 — defining equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={400} y={198} w={280} h={35} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          ΔG = ΔH − TΔS
        </Chip>
      </Fade>

      {/* beat 4 — max work */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={540} y={265} size={14} fill={INK}>
          {t(
            "−ΔG = maximum useful (non-expansion) work obtainable",
            "−ΔG = maximum useful (non-expansion) work milta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — third law heading */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 150 285 L 930 285" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={315} size={18} weight={800} fill={RED}>
          {t("Third law of thermodynamics", "Third law of thermodynamics")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 380 325 C 440 322, 640 322, 700 325" stroke={RED} sw={2} dur={0.5} />

      {/* beat 6 — perfect crystal S = 0 */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={260} y={355} w={560} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t(
            "perfect pure crystal at 0 K → ONE arrangement → S = 0",
            "perfect pure crystal 0 K par → ONE arrangement → S = 0"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — absolute entropies note */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={200} y={408} w={680} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "this datum lets us tabulate ABSOLUTE entropies — unlike U, H (only ΔU, ΔH ever)",
            "yeh datum ABSOLUTE entropies tabulate karne deta hai — U, H ke unlike (sirf ΔU, ΔH)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
