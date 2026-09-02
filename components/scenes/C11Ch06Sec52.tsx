/**
 * C11 Ch06 · Section 52 — "Worked example — the very dilute acid trap (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.4, 15.6, 29.3, 45.5, 67.3, 78.7]):
 *  0 title + underline
 *  1 GIVEN: pH of 1.0×10⁻⁸ M HCl
 *  2 TRAP box: pH = −log(10⁻⁸) = 8 … but pH 8 is BASIC!
 *  3 cross it; flag: water's own [H+]≈10⁻⁷ dominates here
 *  4 quadratic: [H+]²−10⁻⁸[H+]−10⁻¹⁴=0 ⇒ [H+]=1.05×10⁻⁷
 *  5 land, ringed: pH = −log(1.05×10⁻⁷) ≈ 6.98
 *  6 rule, boxed: dilute acid <10⁻⁶ M → include water's H+
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..300  y110..129 (bl 124)
 *  b2 | trap box (red dashed)       | rect   | x180..900 y140..185
 *  b3 | cross-out over trap         | Draw   | x180..900 y140..185
 *  b3 | flag note (14, amber-dark)  | T mid  | y198..214 (bl 210)
 *  b4 | quadratic (16, ink)         | T mid  | y233..250 (bl 245)
 *  b5 | pH answer ringed (20,grn)   | T mid  | x386..694 y274..296 (bl 290)
 *  b6 | rule box (green)            | rect   | x170..910 y355..397
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, ringD, INK, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("NEET trap: the very dilute acid", "NEET trap: bahut dilute acid")}
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
        <T x={60} y={100} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <SvgText x={60} y={124} textAnchor="start" fontSize={15} fill={INK} fontFamily={ANEK}>
          pH of 1.0×10<TSpan dy={-7} fontSize={9.3}>−8</TSpan>
          <TSpan dy={7}> M HCl</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={180} y={140} width={720} height={45} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <SvgText x={540} y={167} textAnchor="middle" fontSize={15} fill={RED} fontFamily={ANEK}>
          pH = −log(10<TSpan dy={-7} fontSize={9.3}>−8</TSpan>
          <TSpan dy={7}>) = 8 … {t("but pH 8 is BASIC!", "par pH 8 BASIC hai!")}</TSpan>
        </SvgText>
      </Fade>

      {/* beat 3 — cross it, flag water's role */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.4)}
        d={crossD(180, 140, 720, 45)}
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <SvgText x={540} y={210} textAnchor="middle" fontSize={14} fill={AMBER_DARK} fontFamily={ANEK}>
          {t("water's own [H⁺] ≈ 10", "water ka apna [H⁺] ≈ 10")}
          <TSpan dy={-6} fontSize={8.7}>−7</TSpan>
          <TSpan dy={6}> {t("dominates here!", "yahaan dominate karta!")}</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — the quadratic */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={245} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          [H⁺]<TSpan dy={-7} fontSize={9.9}>2</TSpan>
          <TSpan dy={7}> − 10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−8</TSpan>
          <TSpan dy={7}>[H⁺] − 10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−14</TSpan>
          <TSpan dy={7}> = 0  ⇒  [H⁺] = 1.05×10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−7</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={290} textAnchor="middle" fontSize={20} fontWeight={800} fill={GREEN} fontFamily={ANEK}>
          pH = −log(1.05×10<TSpan dy={-9} fontSize={12.0}>−7</TSpan>
          <TSpan dy={9}>) ≈ 6.98</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 285, 154, 22)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={170} y={355} width={740} height={42} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <SvgText x={540} y={381} textAnchor="middle" fontSize={15} fill={GREEN_DARK} fontFamily={ANEK}>
          {t("dilute acid < 10", "dilute acid < 10")}
          <TSpan dy={-7} fontSize={9.3}>−6</TSpan>
          <TSpan dy={7}> M ⇒ {t("include water's H⁺", "water ka H⁺ include karo")}</TSpan>
        </SvgText>
      </Fade>
    </Scene>
  );
}
