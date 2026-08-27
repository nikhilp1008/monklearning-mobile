/**
 * C11 Ch06 · Section 10 — "Worked example — Kc from an equilibrium mixture (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 32.2, 96.7, 124.3, 170.3, 223.3, 301.5, 363.7]):
 *  0 title + underline
 *  1 GIVEN: 2 L vessel, 1.0 mol N2, 2.0 mol H2, 0.80 mol NH3
 *  2 the reaction: N2(g) + 3H2(g) ⇌ 2NH3(g)
 *  3 step label: convert mol → M (÷ 2 L)
 *  4 concentrations: [N2]=0.50, [H2]=1.0, [NH3]=0.40 M — 3 chips
 *  5 substitute: symbolic Kc line + numeric evaluation = 0.32
 *  6 units: Δn = 2 − 4 = −2 ⇒ units mol⁻² L²
 *  7 final answer, ringed: Kc = 0.32 mol⁻² L²
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x223..857  y30..90  (bl 64)
 *  b1 | "GIVEN" (14, amber-dark)    | T st   | x60..110  y99..117 (bl 112)
 *  b1 | given data (15, ink)        | T st   | x60..420  y123..142 (bl 136)
 *  b2 | equation (19, ink)          | T mid  | x350..730 y160..181 (bl 175)
 *  b3 | step label (15, muted)      | T mid  | x310..770 y196..219 (bl 215)
 *  b4 | 3 concentration chips       | Chip   | x240..840 y237..275
 *  b5 | symbolic Kc line (15, mu)   | T mid  | y288..305 (bl 300)
 *  b5 | numeric substitution (19)   | T mid  | x383..697 y320..341 (bl 335)
 *  b6 | units line (16, ink)        | T mid  | y363..380 (bl 375)
 *  b7 | "Kc = 0.32 mol⁻² L²" ringed | T mid  | x417..664 y420..448 (bl 440)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("worked example: Kc for the ammonia equilibrium", "worked example: ammonia equilibrium ka Kc")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={112} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={136} size={15} fill={INK} anchor="start">
          2 L vessel: 1.0 mol N₂, 2.0 mol H₂, 0.80 mol NH₃
        </T>
      </Fade>

      {/* beat 2 — the reaction */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={19} fill={INK} weight={700} anchor="middle">
          N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
        </T>
      </Fade>

      {/* beat 3 — step label */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={215} size={15} fill={MUTED} script anchor="middle">
          {t("convert mol → M (divide by 2 L)", "mol → M convert karo (2 L se bhaago)")}
        </T>
      </Fade>

      {/* beat 4 — concentrations */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={240} y={237} w={190} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          [N₂] = 0.50 M
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Chip x={445} y={237} w={190} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          [H₂] = 1.0 M
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Chip x={650} y={237} w={190} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          [NH₃] = 0.40 M
        </Chip>
      </Fade>

      {/* beat 5 — substitute and evaluate */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={300} textAnchor="middle" fontSize={15} fill={MUTED} fontFamily="var(--font-anek-latin), sans-serif">
          Kc = [NH₃]<TSpan dy={-7} fontSize="0.62em">2</TSpan>
          <TSpan dy={7}> / ([N₂][H₂]</TSpan>
          <TSpan dy={-7} fontSize="0.62em">3</TSpan>
          <TSpan dy={7}>)</TSpan>
        </SvgText>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <SvgText x={540} y={335} textAnchor="middle" fontSize={19} fontWeight={700} fill={INK} fontFamily="var(--font-anek-latin), sans-serif">
          = (0.40)<TSpan dy={-8} fontSize="0.6em">2</TSpan>
          <TSpan dy={8}> / (0.50 × 1.0</TSpan>
          <TSpan dy={-8} fontSize="0.6em">3</TSpan>
          <TSpan dy={8}>) = 0.32</TSpan>
        </SvgText>
      </Fade>

      {/* beat 6 — units */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <SvgText x={540} y={375} textAnchor="middle" fontSize={16} fill={INK} fontFamily="var(--font-anek-latin), sans-serif">
          Δn = 2 − 4 = −2  ⇒  units = mol<TSpan dy={-8} fontSize="0.6em">−2</TSpan>
          <TSpan dy={8}> L</TSpan>
          <TSpan dy={-8} fontSize="0.6em">2</TSpan>
        </SvgText>
      </Fade>

      {/* beat 7 — final answer, ringed */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <SvgText x={540} y={440} textAnchor="middle" fontSize={26} fontWeight={800} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif">
          Kc = 0.32 mol<TSpan dy={-11} fontSize="0.6em">−2</TSpan>
          <TSpan dy={11}> L</TSpan>
          <TSpan dy={-11} fontSize="0.6em">2</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 434, 140, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
