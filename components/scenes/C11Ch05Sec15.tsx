/**
 * C11 Chemistry Ch05 · Section 15 — "Formation enthalpies and Hess
 * combinations" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.73,22.36,38.91,46.25,51.88,70.49,89.17]):
 *  0 Example 1 heading (CBSE: hydrogenation of ethene) + underline
 *  1 given ΔfH values
 *  2 formula/answer: ΔrH° = -137.0 kJ/mol
 *  3 red note: H2 contributes zero (reference state)
 *  4 divider + Example 2 heading (NEET: Hess combination) + underline
 *  5 given two equations
 *  6 formula/answer: ΔH = -110.5 kJ
 *  7 red note: sign-flip trap
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (18, w800)           | T mid | y86..106 (bl100)
 *  b0 | underline1                    | Draw  | y110 x330..750
 *  b1 | given1 (14)                   | T mid | y131..146 (bl142)
 *  b2 | formula1 chip (17)            | Chip  | x260..820 y158..200
 *  b3 | red note1 chip (14)           | Chip  | x280..800 y213..248
 *  b4 | divider                       | Draw  | y270 x150..930
 *  b4 | heading2 (18, w800)           | T mid | y286..306 (bl300)
 *  b4 | underline2                    | Draw  | y310 x330..750
 *  b5 | given2 (14)                   | T mid | y334..349 (bl345)
 *  b6 | formula2 chip (17)            | Chip  | x260..780 y362..404
 *  b7 | red note2 chip (14)           | Chip  | x190..890 y417..462
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

export default function C11Ch05Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: formation & Hess combos", "worked examples: formation & Hess combos")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={18} weight={800} fill={INK}>
          {t("Example 1 (CBSE): hydrogenation of ethene", "Example 1 (CBSE): ethene ka hydrogenation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 330 110 C 400 107, 680 107, 750 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={142} size={14} fill={INK}>
          {t(
            "given ΔfH: ethene = +52.3, ethane = −84.7, H2 = 0 kJ/mol",
            "diya gaya ΔfH: ethene = +52.3, ethane = −84.7, H2 = 0 kJ/mol"
          )}
        </T>
      </Fade>

      {/* beat 2 — answer */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={260} y={158} w={560} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔrH° = (−84.7) − [(+52.3) + 0] = −137.0 kJ/mol
        </Chip>
      </Fade>

      {/* beat 3 — red note */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={280} y={213} w={520} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "H2, an element in its reference state, contributes zero",
            "H2, apne reference state mein element hai, isliye zero deta hai"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 270 L 930 270" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={18} weight={800} fill={INK}>
          {t("Example 2 (NEET): Hess combination", "Example 2 (NEET): Hess combination")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 330 310 C 400 307, 680 307, 750 310" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given two equations */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={345} size={14} fill={INK}>
          {t(
            "(i) C+O2→CO2, ΔH1=−393.5 · (ii) CO+½O2→CO2, ΔH2=−283.0 kJ",
            "(i) C+O2→CO2, ΔH1=−393.5 · (ii) CO+½O2→CO2, ΔH2=−283.0 kJ"
          )}
        </T>
      </Fade>

      {/* beat 6 — answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={260} y={362} w={520} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔH = ΔH1 − ΔH2 = −393.5 − (−283.0) = −110.5 kJ
        </Chip>
      </Fade>

      {/* beat 7 — red trap */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={190} y={417} w={700} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "trap: subtracting (ii) flips its sign FIRST — writing −393.5 − 283.0 is the classic error",
            "trap: (ii) ko subtract karte waqt sign PEHLE flip hota hai — −393.5 − 283.0 likhna classic error hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
