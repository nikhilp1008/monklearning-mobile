/**
 * C11 Chemistry Ch03 · Section 44 — "The four blocks and their character"
 * Canvas 1080×620 · safe x36–1044, y30–596. 2×2 card grid: s,p top row; d,f bottom row.
 *
 * Beats (en [0, 9.64, 34.47, 52.39, 68.69, 89.34, 103.77, 126.72]):
 *  0 title + underline
 *  1 red-margin: s-block card (groups 1-2, ns¹⁻²) — reactive, reducing, basic
 *  2 p-block card header + trait: only block spanning metal→noble gas
 *  3 p-block detail: oxides basic→amphoteric→acidic; OS steps of 2
 *  4 red-margin: d-block card — variable OS, coloured, paramagnetic, catalysts
 *  5 d-block reason: draws on both (n-1)d and ns electrons
 *  6 f-block card — inner-transition, 2 shells deep, series alike, +3
 *  7 closing green stamp: block decides character, character decides chemistry
 *
 * Layout plan:
 *  b1 | s-card                       | Draw | x60..520  y95..240
 *  b2-3 | p-card                     | Draw | x560..1020 y95..240
 *  b4-5 | d-card                     | Draw | x60..520  y250..395
 *  b6 | f-card                       | Draw | x560..1020 y250..395
 *  b7 | closing stamp (green)        | Chip | x200..880 y410..446
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the four blocks and their character", "chaar blocks aur unka character")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — red-margin: s-block */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 60 95 h 460 v 145 h -460 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={290} y={118} size={14} weight={800} fill={INK}>s-block · groups 1-2 · ns¹⁻²</T>
        <T x={290} y={145} size={12} fill={INK}>{t("reactive metals, LOWEST IE", "reactive metals, LOWEST IE")}</T>
        <T x={290} y={168} size={12} fill={INK}>{t("strong reducing agents", "strong reducing agents")}</T>
        <T x={290} y={191} size={12} fill={INK}>{t("ionic compounds, basic oxides", "ionic compounds, basic oxides")}</T>
      </Fade>

      {/* beats 2-3 — p-block */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 560 95 h 460 v 145 h -460 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={790} y={118} size={14} weight={800} fill={INK}>p-block · groups 13-18 · ns²np¹⁻⁶</T>
        <T x={790} y={145} size={12} fill={INK}>{t("ONLY block: metal→metalloid→nonmetal→noble gas", "ONLY block: metal→metalloid→nonmetal→noble gas")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={790} y={168} size={12} fill={INK}>{t("oxides: basic→amphoteric→acidic", "oxides: basic→amphoteric→acidic")}</T>
        <T x={790} y={191} size={12} fill={AMBER_DARK} weight={700}>{t("OS differs in steps of 2", "OS 2-2 ke steps mein differ karta")}</T>
      </Fade>

      {/* beats 4-5 — d-block */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 60 250 h 460 v 145 h -460 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={290} y={273} size={14} weight={800} fill={INK}>d-block · groups 3-12 · (n−1)d¹⁻¹⁰ns⁰⁻²</T>
        <T x={290} y={300} size={12} fill={INK}>{t("variable OS, coloured ions", "variable OS, coloured ions")}</T>
        <T x={290} y={323} size={12} fill={INK}>{t("paramagnetic, forms complexes", "paramagnetic, complexes banata")}</T>
        <T x={290} y={346} size={12} fill={INK}>{t("heavy use as CATALYSTS", "CATALYSTS ki tarah heavy use")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={290} y={369} size={12} fill={GREEN} weight={700}>{t("draws on both (n−1)d AND ns e⁻", "(n−1)d AUR ns dono e⁻ use karta")}</T>
      </Fade>

      {/* beat 6 — f-block */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 560 250 h 460 v 145 h -460 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={790} y={273} size={14} weight={800} fill={INK}>f-block · (n−2)f¹⁻¹⁴</T>
        <T x={790} y={300} size={12} fill={INK}>{t("inner-transition metals", "inner-transition metals")}</T>
        <T x={790} y={323} size={12} fill={INK}>{t("e⁻ sits 2 shells deep", "e⁻ 2 shells deep baithta")}</T>
        <T x={790} y={346} size={12} fill={AMBER_DARK} weight={700}>{t("⇒ series behaves ALIKE, mostly +3", "⇒ series ALIKE behave karti, mostly +3")}</T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={410} w={680} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("block decides character, character decides chemistry", "block character decide karta, character chemistry")}
        </Chip>
      </Fade>
    </Scene>
  );
}
