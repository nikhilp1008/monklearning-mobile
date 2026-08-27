/**
 * C11 Chemistry Ch05 · Section 16 — "Bond enthalpies and the Born-Haber
 * cycle" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.64,25.86,43.86,62.63,71.77,88.49,107.26]):
 *  0 Example 3 heading (JEE Main: combustion of methane) + underline
 *  1 bonds broken
 *  2 bonds formed
 *  3 answer chip: ΔrH = -798 kJ/mol (green)
 *  4 divider + Example 4 heading (JEE Advanced: lattice enthalpy of KCl) + underline
 *  5 given Born-Haber terms
 *  6 equation chip
 *  7 red note: solve for lattice enthalpy = -718 kJ/mol
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (17, w800)           | T mid | y87..106 (bl100)
 *  b0 | underline1                    | Draw  | y110 x320..760
 *  b1 | given1 (14)                   | T mid | y129..144 (bl140)
 *  b2 | given2 (14)                   | T mid | y157..172 (bl168)
 *  b3 | answer chip (18, green)       | Chip  | x340..740 y188..228
 *  b4 | divider                       | Draw  | y255 x150..930
 *  b4 | heading2 (17, w800)           | T mid | y272..291 (bl285)
 *  b4 | underline2                    | Draw  | y295 x300..780
 *  b5 | given3 (14)                   | T mid | y317..332 (bl328)
 *  b6 | equation chip (16)            | Chip  | x260..780 y345..385
 *  b7 | red note chip (14)            | Chip  | x240..800 y398..438
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

export default function C11Ch05Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: bond enthalpy & Born-Haber", "worked examples: bond enthalpy & Born-Haber")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} weight={800} fill={INK}>
          {t("Example 3 (JEE Main): combustion of methane", "Example 3 (JEE Main): methane ka combustion")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 320 110 C 390 107, 690 107, 760 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — bonds broken */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t("bonds broken: 4(C−H) + 2(O=O) = 4(414) + 2(498) = 2652", "bonds broken: 4(C−H) + 2(O=O) = 4(414) + 2(498) = 2652")}
        </T>
      </Fade>

      {/* beat 2 — bonds formed */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={168} size={14} fill={INK}>
          {t("bonds formed: 2(C=O) + 4(O−H) = 2(799) + 4(463) = 3450", "bonds formed: 2(C=O) + 4(O−H) = 2(799) + 4(463) = 3450")}
        </T>
      </Fade>

      {/* beat 3 — answer */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={340} y={188} w={400} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18} script={false}>
          ΔrH = 2652 − 3450 = −798 kJ/mol
        </Chip>
      </Fade>

      {/* beat 4 — Example 4 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 255 L 930 255" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={285} size={17} weight={800} fill={INK}>
          {t("Example 4 (JEE Advanced): lattice enthalpy of KCl", "Example 4 (JEE Advanced): KCl ki lattice enthalpy")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 300 295 C 370 292, 710 292, 780 295" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given terms */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={328} size={14} fill={INK}>
          {t(
            "ΔfH = −437; sublimation = +89; ionisation = +419; ½dissociation = +122; e⁻ gain = −349",
            "ΔfH = −437; sublimation = +89; ionisation = +419; ½dissociation = +122; e⁻ gain = −349"
          )}
        </T>
      </Fade>

      {/* beat 6 — equation */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={260} y={345} w={520} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          −437 = 89 + 419 + 122 + (−349) + ΔlatticeH
        </Chip>
      </Fade>

      {/* beat 7 — solve */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={240} y={398} w={560} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "solve: −437 = 281 + lattice, so ΔlatticeH = −718 kJ/mol",
            "solve karo: −437 = 281 + lattice, isliye ΔlatticeH = −718 kJ/mol"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
