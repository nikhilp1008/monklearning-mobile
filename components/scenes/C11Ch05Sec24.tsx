/**
 * C11 Chemistry Ch05 · Section 24 — "Total entropy, the K link, and
 * temperature dependence" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,12.03,28.07,43.52,63.06,71.59,83.54,107.01]):
 *  0 Example 3 heading (JEE Main: decide by total entropy) + underline
 *  1 given ΔH, ΔS(sys) at 350 K
 *  2 formula: ΔSsurr = +428.6 J/K/mol
 *  3 green chip: total ΔS positive => spontaneous, ΔG cross-check
 *  4 divider + Example 4 heading (JEE Advanced: K and T where K=1) + underline
 *  5 given ΔH°, ΔS° at 298 K
 *  6 formula: ΔG° = +2850 J, K ≈ 0.32
 *  7 red note: T where K=1 => 314 K
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (16, w800)           | T mid | y87..105 (bl100)
 *  b0 | underline1                    | Draw  | y110 x300..780
 *  b1 | given1 (14)                   | T mid | y129..144 (bl140)
 *  b2 | formula1 chip (17)            | Chip  | x300..740 y155..195
 *  b3 | green chip (15)               | Chip  | x260..880 y208..248
 *  b4 | divider                       | Draw  | y270 x150..930
 *  b4 | heading2 (16, w800)           | T mid | y287..305 (bl300)
 *  b4 | underline2                    | Draw  | y310 x290..790
 *  b5 | given2 (14)                   | T mid | y329..344 (bl340)
 *  b6 | formula2 chip (16)            | Chip  | x260..780 y355..395
 *  b7 | red note chip (14)            | Chip  | x240..840 y408..448
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
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: total entropy & K", "worked examples: total entropy & K")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} weight={800} fill={INK}>
          {t("Example 3 (JEE Main): decide by total entropy", "Example 3 (JEE Main): total entropy se decide karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 300 110 C 380 107, 700 107, 780 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t(
            "350 K, ΔH=−150 kJ, ΔSsys=−90 J/K; surroundings gain entropy",
            "350 K, ΔH=−150 kJ, ΔSsys=−90 J/K; surroundings entropy gain karte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — surroundings entropy */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={300} y={155} w={440} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔSsurr = −(−150000/350) = +428.6 J/K/mol
        </Chip>
      </Fade>

      {/* beat 3 — total entropy verdict */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={260} y={208} w={620} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          total = −90+428.6 = +338.6 J/K &gt; 0 ⇒ spontaneous · check: ΔG = −118.5 kJ
        </Chip>
      </Fade>

      {/* beat 4 — Example 4 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 270 L 930 270" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={16} weight={800} fill={INK}>
          {t("Example 4 (JEE Advanced): K and the T where K=1", "Example 4 (JEE Advanced): K aur wo T jahan K=1")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 290 310 C 360 307, 720 307, 790 310" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={340} size={14} fill={INK}>
          {t("298 K, ΔH° = +55.0 kJ, ΔS° = +175 J/K", "298 K, ΔH° = +55.0 kJ, ΔS° = +175 J/K")}
        </T>
      </Fade>

      {/* beat 6 — answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={260} y={355} w={520} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔG° = 55000 − (298)(175) = +2850 J, K = e−1.150 ≈ 0.32
        </Chip>
      </Fade>

      {/* beat 7 — red note */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={240} y={408} w={600} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "K=1 when ΔG=0: T = 55000/175 = 314 K — above it, products favoured",
            "K=1 jab ΔG=0: T = 55000/175 = 314 K — iske upar, products favoured"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
