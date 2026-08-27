/**
 * C11 Ch06 · Section 13 — "Worked example — stacking equilibria with the toolkit (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.6, 19.6, 28.9, 39.5, 53.4, 63.5, 77.7]):
 *  0 title + underline
 *  1 GIVEN Rxn 1: C(s) + CO2(g) ⇌ 2CO(g), K1 = 0.50
 *  2 GIVEN Rxn 2: COCl2(g) ⇌ CO(g) + Cl2(g), K2 = 0.10
 *  3 TARGET (boxed): C(s) + CO2(g) + 2Cl2(g) ⇌ 2COCl2(g)
 *  4 strategy: reverse Rxn2 (inverts K2), use it TWICE (squares), add to Rxn1
 *  5 K = K1 × (1/K2)² = K1/K2² — stacked fraction
 *  6 compute: 0.50/(0.10)² = 0.50/0.01 = 50, ringed
 *  7 guardrail: 2CO intermediate cancels; solid C never enters any expression
 *
 * Layout plan (longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x230..850  y30..88  (bl 64)
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | Rxn 1 (15, ink)             | T st   | x60..375  y109..127 (bl 122)
 *  b2 | Rxn 2 (15, ink)             | T st   | x60..405  y135..153 (bl 148)
 *  b3 | TARGET box (amber)          | rect   | x60..1020 y178..212
 *  b3 | TARGET text (15, amber-dk)  | T mid  | y191..206 (bl 200)
 *  b4 | strategy (14, muted)        | T mid  | x278..802 y229..245 (bl 240)
 *  b5 | K intro line (15, muted)    | T mid  | y261..278 (bl 272)
 *  b5 | K1/K2² fraction             | text   | x460..600 y302..360
 *  b6 | numeric compute (17, ink)   | T mid  | y377..396 (bl 390)
 *  b6 | "K = 50" ringed (26, green) | T mid  | x430..650 y410..438 (bl 430)
 *  b7 | guardrail (14, amber-dark)  | T mid  | x309..771 y467..483 (bl 478)
 */

import React from "react";
import { Line, Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("stacking equilibria with the toolkit (JEE Advanced)", "toolkit se equilibria stack karna (JEE Advanced)")}
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

      {/* beat 1 — given reaction 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={100} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={60} y={122} size={15} fill={INK} anchor="start">
          Rxn 1: C(s) + CO₂(g) ⇌ 2CO(g),  K₁ = 0.50
        </T>
      </Fade>

      {/* beat 2 — given reaction 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={148} size={15} fill={INK} anchor="start">
          Rxn 2: COCl₂(g) ⇌ CO(g) + Cl₂(g),  K₂ = 0.10
        </T>
      </Fade>

      {/* beat 3 — the target */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={60} y={178} width={960} height={34} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={200} size={15} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("TARGET: C(s) + CO₂(g) + 2Cl₂(g) ⇌ 2COCl₂(g)", "TARGET: C(s) + CO₂(g) + 2Cl₂(g) ⇌ 2COCl₂(g)")}
        </T>
      </Fade>

      {/* beat 4 — the strategy */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={14} fill={MUTED} anchor="middle">
          {t(
            "reverse Rxn 2 (inverts K2), use it TWICE (squares), then add to Rxn 1",
            "Rxn 2 reverse karo (K2 invert), 2 baar use karo (square), phir Rxn 1 mein add"
          )}
        </T>
      </Fade>

      {/* beat 5 — the K formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={272} textAnchor="middle" fontSize={15} fill={MUTED} fontFamily={ANEK}>
          K = K₁ × (1/K₂)<TSpan dy={-7} fontSize="0.62em">2</TSpan>
        </SvgText>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={460} y={336} size={22} fill={INK} weight={700} anchor="end">
          K =
        </T>
        <T x={530} y={318} size={20} fill={INK} anchor="middle">K₁</T>
        <Line x1={500} y1={328} x2={570} y2={328} stroke={INK} strokeWidth={1.8} />
        <SvgText x={530} y={354} textAnchor="middle" fontSize={20} fill={INK} fontFamily={ANEK}>
          K₂<TSpan dy={-8} fontSize="0.6em">2</TSpan>
        </SvgText>
      </Fade>

      {/* beat 6 — compute and land */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <SvgText x={540} y={390} textAnchor="middle" fontSize={17} fontWeight={700} fill={INK} fontFamily={ANEK}>
          = 0.50/(0.10)<TSpan dy={-8} fontSize="0.6em">2</TSpan>
          <TSpan dy={8}> = 0.50/0.01 = 50</TSpan>
        </SvgText>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={430} size={26} fill={GREEN} weight={800} anchor="middle">
          K = 50
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.7)}
        d={ringD(540, 424, 110, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 7 — guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={478} size={14} fill={AMBER_DARK} anchor="middle">
          {t(
            "2CO intermediate cancels — pure solid C never enters any expression",
            "2CO intermediate cancel hota — pure solid C kabhi expression mein nahi aata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
