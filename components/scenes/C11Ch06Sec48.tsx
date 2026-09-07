/**
 * C11 Ch06 · Section 48 — "The water constant, pH and pOH"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.1, 21.3, 32.9, 41.3, 51, 58.5]):
 *  0 title + underline
 *  1 Kw = [H+][OH-] = 1.0×10⁻¹⁴ M² (298 K), boxed
 *  2 pH = −log[H+], pOH = −log[OH-]
 *  3 land, ringed: pH + pOH = 14 (298 K)
 *  4 pure water: [H+]=[OH-]=10⁻⁷ ⇒ pH = 7 (neutral)
 *  5 add acid → pH falls; add base → pH climbs
 *  6 units guardrail: Kw = M²; pH/pOH dimensionless
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | Kw chip (amber)             | Chip   | x330..750 y105..147
 *  b2 | "pH=-log[H+] pOH=-log[OH-]" | T mid  | y158..179 (bl 175)
 *  b3 | "pH+pOH=14" ringed (24, gr) | T mid  | x400..680 y196..222 (bl 215)
 *  b4 | pure-water note (15, amber) | T mid  | y258..275 (bl 270)
 *  b5 | row1: add acid (red)        | T      | x470..710 y293..310 (bl 305)
 *  b5 | row2: add base (green)      | T      | x470..730 y324..341 (bl 336)
 *  b6 | units (13, muted)           | T mid  | y356..369 (bl 365)
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the water constant, pH and pOH", "water constant, pH aur pOH")}
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

      {/* beat 1 — the ionic product of water */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Rect x={330} y={105} width={420} height={42} rx={12} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <SvgText x={540} y={132} textAnchor="middle" fontSize={17} fontWeight={700} fill={INK} fontFamily={ANEK}>
          Kw = [H⁺][OH⁻] = 1.0×10<TSpan dy={-8} fontSize={10.2}>−14</TSpan>
          <TSpan dy={8}> M</TSpan>
          <TSpan dy={-8} fontSize={10.2}>2</TSpan>
          <TSpan dy={8}> (298 K)</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — pH and pOH defined */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={17} fill={INK} anchor="middle">
          pH = −log[H⁺]     pOH = −log[OH⁻]
        </T>
      </Fade>

      {/* beat 3 — the link, landed */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={215} size={24} fill={GREEN} weight={800} anchor="middle">
          pH + pOH = 14 (298 K)
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d={ringD(540, 209, 140, 25)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 4 — pure water is neutral */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={270} textAnchor="middle" fontSize={15} fill={AMBER_DARK} fontFamily={ANEK}>
          {t("pure water: [H⁺]=[OH⁻]=10", "pure water: [H⁺]=[OH⁻]=10")}
          <TSpan dy={-7} fontSize={9.3}>−7</TSpan>
          <TSpan dy={7}> {t("⇒ pH = 7 (neutral)", "⇒ pH = 7 (neutral)")}</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — acid and base shift pH */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={470} y={305} size={15} fill={RED} anchor="end">
          {t("add acid", "acid add karo")}
        </T>
        <T x={500} y={305} size={15} fill={RED} anchor="start">
          {t("→ pH falls below 7", "→ pH 7 se neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={470} y={336} size={15} fill={GREEN} anchor="end">
          {t("add base", "base add karo")}
        </T>
        <T x={500} y={336} size={15} fill={GREEN} anchor="start">
          {t("→ pH climbs above 7", "→ pH 7 se upar")}
        </T>
      </Fade>

      {/* beat 6 — the units guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <SvgText x={540} y={365} textAnchor="middle" fontSize={13} fill={MUTED} fontFamily={ANEK}>
          {t("Kw: units M", "Kw: units M")}
          <TSpan dy={-6} fontSize={8.1}>2</TSpan>
          <TSpan dy={6}>; {t("pH and pOH: dimensionless", "pH aur pOH: dimensionless")}</TSpan>
        </SvgText>
      </Fade>
    </Scene>
  );
}
