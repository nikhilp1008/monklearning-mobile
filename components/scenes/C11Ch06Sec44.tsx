/**
 * C11 Ch06 · Section 44 — "Water's self-ionization: the origin of the pH scale"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.7, 18.1, 27, 38.4, 46.3, 53.5]):
 *  0 title + underline
 *  1 equation: 2H2O(l) ⇌ H3O⁺(aq) + OH⁻(aq)
 *  2 note: faintly conducting — tiny fraction swap a proton
 *  3 stamp: [H⁺] = [OH⁻] = 10⁻⁷ M (at 298 K)
 *  4 the pH scale bar: ACIDIC(0-7) | 7 neutral | BASIC(7-14)
 *  5 label: 10⁻⁷ is the origin of the entire pH scale
 *  6 guardrail, boxed: Kw = 10⁻¹⁴ only at 298 K — neutral pH shifts with T
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 20, red)      | T mid  | x210..870  y30..84  (bl 64)
 *  b1 | equation (18, ink)          | T mid  | y95..118 (bl 112)
 *  b2 | note (13, muted)            | T mid  | y130..144 (bl 140)
 *  b3 | "[H+]=[OH-]=1e-7 M" (19,gr) | T mid  | y163..184 (bl 178)
 *  b4 | pH bar (2 zones)            | Draw   | x140..940 y210..250
 *  b4 | zone labels (13)            | T mid  | y230..243 (bl 234)
 *  b4 | neutral marker (amber)      | Draw   | x540 y210..255
 *  b4 | tick labels 0/7/14          | T mid  | y268..276 (bl 272)
 *  b5 | origin label (13, amber)    | T mid  | y290..305 (bl 300)
 *  b6 | guardrail box (red)         | rect   | x190..890 y325..365
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("water's self-ionization: the pH scale's origin", "water ka self-ionization: pH scale ka origin")}
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

      {/* beat 1 — the equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={18} fill={INK} weight={700} anchor="middle">
          2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)
        </T>
      </Fade>

      {/* beat 2 — faintly conducting */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={140} size={13} fill={MUTED} anchor="middle">
          {t(
            "faintly conducting — a tiny fraction swap a proton",
            "faintly conducting — thoda sa fraction proton swap karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the concentrations */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={178} textAnchor="middle" fontSize={19} fontWeight={800} fill={GREEN} fontFamily={ANEK}>
          [H⁺] = [OH⁻] = 10<TSpan dy={-9} fontSize={11.4}>−7</TSpan>
          <TSpan dy={9}> M (at 298 K)</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — the pH scale */}
      <Draw
        on={beat >= 4}
        d="M 140 210 H 940 V 250 H 140 Z"
        stroke={INK}
        sw={2.2}
        dur={beat > 4 ? 0.3 : 1}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Rect x={140} y={210} width={400} height={40} fill={RED} opacity={0.15} />
        <Rect x={540} y={210} width={400} height={40} fill={GREEN} opacity={0.15} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={340} y={234} size={13} fill={RED} anchor="middle">
          {t("ACIDIC", "ACIDIC")}
        </T>
        <T x={740} y={234} size={13} fill={GREEN_DARK} anchor="middle">
          {t("BASIC", "BASIC")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 540 210 L 540 255" stroke={AMBER} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={140} y={272} size={12} fill={MUTED} anchor="middle">0</T>
        <T x={540} y={272} size={13} fill={AMBER_DARK} weight={700} anchor="middle">7</T>
        <T x={940} y={272} size={12} fill={MUTED} anchor="middle">14</T>
      </Fade>

      {/* beat 5 — the origin point */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={300} textAnchor="middle" fontSize={13} fill={AMBER_DARK} fontFamily={ANEK}>
          10<TSpan dy={-6} fontSize={8.1}>−7</TSpan>
          <TSpan dy={6}> {t("is the origin of the ENTIRE pH scale", "poore pH scale ka origin hai")}</TSpan>
        </SvgText>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={190} y={325} width={700} height={40} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <SvgText x={540} y={350} textAnchor="middle" fontSize={14} fill={RED} fontFamily={ANEK}>
          Kw = 10<TSpan dy={-7} fontSize={8.7}>−14</TSpan>
          <TSpan dy={7}> {t("only at 298 K — neutral pH shifts with T", "sirf 298 K par — neutral pH T ke saath shift")}</TSpan>
        </SvgText>
      </Fade>
    </Scene>
  );
}
