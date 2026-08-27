/**
 * C11 Chemistry Ch05 · Section 23 — "Computing change in G and the
 * crossover temperature" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.22,30.55,51.29,58.79,66.9,80.04,92.67]):
 *  0 Example 1 heading (CBSE: ΔG at 298 K) + underline
 *  1 given ΔH, ΔS (unit conversion note)
 *  2 formula/answer: ΔG = -33.3 kJ/mol
 *  3 red note: ΔG negative ⇒ spontaneous at 298 K
 *  4 divider + Example 2 heading (NEET: above what T?) + underline
 *  5 given ΔH, ΔS (conflict, high-T case)
 *  6 formula/answer: T = 300 K
 *  7 red note: spontaneous above 300 K, units + table reflex
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (17, w800)           | T mid | y87..106 (bl100)
 *  b0 | underline1                    | Draw  | y110 x320..760
 *  b1 | given1 (14)                   | T mid | y129..144 (bl140)
 *  b2 | formula1 chip (16)            | Chip  | x260..880 y155..197
 *  b3 | red note1 chip (14)           | Chip  | x360..720 y210..243
 *  b4 | divider                       | Draw  | y265 x150..930
 *  b4 | heading2 (17, w800)           | T mid | y282..301 (bl295)
 *  b4 | underline2                    | Draw  | y305 x290..790
 *  b5 | given2 (14)                   | T mid | y327..342 (bl338)
 *  b6 | formula2 chip (18)            | Chip  | x370..690 y352..392
 *  b7 | red note2 chip (14)           | Chip  | x200..880 y405..448
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
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: ΔG & crossover T", "worked examples: ΔG & crossover T")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} weight={800} fill={INK}>
          {t("Example 1 (CBSE): ΔG at 298 K", "Example 1 (CBSE): 298 K par ΔG")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 320 110 C 390 107, 690 107, 760 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t(
            "ΔH = −92.4 kJ; ΔS = −198.3 J/K = −0.1983 kJ/K — convert units first!",
            "ΔH = −92.4 kJ; ΔS = −198.3 J/K = −0.1983 kJ/K — pehle units convert karo!"
          )}
        </T>
      </Fade>

      {/* beat 2 — answer */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={260} y={155} w={620} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔG = −92.4 − (298)(−0.1983) = −92.4 + 59.1 = −33.3 kJ/mol
        </Chip>
      </Fade>

      {/* beat 3 — red note */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={360} y={210} w={360} h={33} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("ΔG negative ⇒ spontaneous at 298 K", "ΔG negative hai ⇒ 298 K par spontaneous")}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 265 L 930 265" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={295} size={17} weight={800} fill={INK}>
          {t("Example 2 (NEET): above what T spontaneous?", "Example 2 (NEET): kis T ke upar spontaneous?")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 290 305 C 360 302, 720 302, 790 305" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={338} size={14} fill={INK}>
          {t(
            "ΔH = +30.0 kJ, ΔS = +100 J/K: signs conflict ⇒ high-T case",
            "ΔH = +30.0 kJ, ΔS = +100 J/K: signs conflict ⇒ high-T case"
          )}
        </T>
      </Fade>

      {/* beat 6 — answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={370} y={352} w={320} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          T = ΔH/ΔS = 30000/100 = 300 K
        </Chip>
      </Fade>

      {/* beat 7 — red note */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={200} y={405} w={680} h={43} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "spontaneous ABOVE 300 K — match units (both J), just read the table",
            "300 K ke UPAR spontaneous — units match karo (dono J), bas table padho"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
