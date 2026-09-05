/**
 * C11 Ch06 · Section 51 — "Worked example — pH of a strong diprotic acid (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.7, 15.6, 24, 38.1, 46.3, 57.9]):
 *  0 title + underline
 *  1 GIVEN: pH of 0.005 M H2SO4, complete dissociation
 *  2 setup: H2SO4 = strong DIPROTIC → 2 protons per unit
 *  3 [H+] = 2×0.005 = 0.010 = 1.0×10⁻² M
 *  4 pH = −log(1.0×10⁻²) = 2.0
 *  5 guardrail: easy mistake — forgetting the factor of 2!
 *  6 land, ringed: pH = 2.0
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..430  y110..129 (bl 124)
 *  b2 | setup (15, ink)             | T st   | x60..460  y142..161 (bl 156)
 *  b3 | [H+] calc (17, ink)         | T mid  | y182..200 (bl 195)
 *  b4 | pH calc (17, ink)           | T mid  | y219..237 (bl 232)
 *  b5 | guardrail (14, red)         | T mid  | y259..277 (bl 272)
 *  b6 | "pH = 2.0" ringed (26,grn)  | T mid  | x474..606 y292..328 (bl 320)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("worked example: pH of a diprotic acid (CBSE)", "worked example: diprotic acid ka pH (CBSE)")}
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
        <T x={60} y={124} size={15} fill={INK} anchor="start">
          {t("find pH of 0.005 M H₂SO₄ (complete dissociation)", "0.005 M H₂SO₄ ka pH (complete dissociation)")}
        </T>
      </Fade>

      {/* beat 2 — the diprotic setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={156} size={15} fill={INK} anchor="start">
          {t("H₂SO₄ = strong DIPROTIC → 2 protons per unit", "H₂SO₄ = strong DIPROTIC → 2 protons har unit se")}
        </T>
      </Fade>

      {/* beat 3 — [H+] */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={195} textAnchor="middle" fontSize={17} fontWeight={700} fill={INK} fontFamily={ANEK}>
          [H⁺] = 2×0.005 = 0.010 = 1.0×10<TSpan dy={-8} fontSize={10.2}>−2</TSpan>
          <TSpan dy={8}> M</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — pH */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={232} textAnchor="middle" fontSize={17} fontWeight={700} fill={INK} fontFamily={ANEK}>
          pH = −log(1.0×10<TSpan dy={-8} fontSize={10.2}>−2</TSpan>
          <TSpan dy={8}>) = 2.0</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the guardrail */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={272} size={14} fill={RED} anchor="middle">
          {t("✗ easy mistake: forgetting the factor of 2!", "✗ aasan mistake: factor of 2 bhool jaana!")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={320} size={26} fill={GREEN} weight={800} anchor="middle">
          pH = 2.0
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 314, 66, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
