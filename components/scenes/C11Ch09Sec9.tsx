/**
 * C11 Ch09 · Section 9 — "Key definitions and formulae" (formulas fact-sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.99, 14.16, 25.08, 36.46, 45.72, 54.94, 69.24]):
 *  0 heading · 1 CnH2n+2 chip · 2 combustion equation (boxed, high emphasis)
 *  · 3 geometry: 109.5°, C-C 154pm, C-H 112pm · 4 alkyl group CnH2n+1 ·
 *  5 carbon degrees 1°-4° · 6 RED: halogen & hydrogen reactivity orders ·
 *  7 torsional strain, ethane gap ≈12.5 kJ/mol
 *
 * Layout plan — dense reference list, one fact per row, generous single-line
 * rows at y 95/140/195(boxed)/255/288/320/(360..396 banner)/430:
 *  b0 | subtitle              | T mid | y95
 *  b1 | chip CnH2n+2           | Chip  | y120..156 x462..618
 *  b2 | boxed combustion eq   | Draw+T| box x160..920 y178..216 · text bl202
 *  b3 | geometry line         | T mid | y255
 *  b4 | alkyl line            | T mid | y288
 *  b5 | degree line           | T mid | y320
 *  b6 | margin bar + red note | Draw+T| bar x60 y360..396 · text bl380
 *  b7 | torsional line        | T mid | y430
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
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("key definitions and formulae", "key definitions aur formulae")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={98} size={17} fill={INK} weight={700}>
          {t("your alkane fact-sheet", "aapki alkane fact-sheet")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={462} y={122} w={156} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          CnH2n+2 ({t("acyclic", "acyclic")})
        </Chip>
      </Fade>

      {/* beat 2 — the combustion equation, boxed (high emphasis) */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 150 180 H 930 V 216 H 150 Z" stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={203} size={17} fill={INK} weight={700}>
          CnH2n+2 + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={255} size={15} fill={INK}>
          {t("sp³, H–C–H = 109.5° · C–C = 154 pm · C–H = 112 pm", "sp³, H–C–H = 109.5° · C–C = 154 pm · C–H = 112 pm")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={288} size={15} fill={INK}>
          {t("alkyl group = alkane − 1H → CnH2n+1 (methane → methyl)", "alkyl group = alkane − 1H → CnH2n+1 (methane → methyl)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={320} size={15} fill={INK}>
          {t("carbon degree: 1–4 other carbons = primary → quaternary", "carbon degree: 1–4 other carbons = primary → quaternary")}
        </T>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 360 L 60 396" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={382} size={15} fill={RED} script anchor="start">
          {t(
            "halogen: F2 > Cl2 > Br2 > I2  ·  hydrogen: 3° > 2° > 1°",
            "halogen: F2 > Cl2 > Br2 > I2  ·  hydrogen: 3° > 2° > 1°"
          )}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={430} size={15} fill={INK} script>
          {t(
            "torsional strain — ethane staggered↔eclipsed gap ≈ 12.5 kJ/mol",
            "torsional strain — ethane staggered↔eclipsed gap ≈ 12.5 kJ/mol"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
