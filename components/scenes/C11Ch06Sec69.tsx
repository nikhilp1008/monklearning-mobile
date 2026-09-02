/**
 * C11 Ch06 · Section 69 — "Worked example — common-ion suppression of solubility (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8, 22, 36.3, 48.6, 66.9, 81.6]):
 *  0 title + underline
 *  1 GIVEN: Ksp(AgCl)=1.8×10⁻¹⁰; find s in pure water AND in 0.10 M NaCl
 *  2 pure water: Ksp=s² ⇒ s=√(1.8×10⁻¹⁰)=1.34×10⁻⁵ M
 *  3 in NaCl: [Cl⁻]≈0.10 M (swamped by salt)
 *  4 s'=Ksp/[Cl⁻]=1.8×10⁻¹⁰/0.10=1.8×10⁻⁹ M
 *  5 land, ringed: s/s' ≈ 7400
 *  6 conclusion, boxed: AgCl ~7400× LESS soluble — basis of washing precipitates
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..680  y110..129 (bl 124)
 *  b2 | pure-water calc (15, ink)   | T mid  | y148..165 (bl 158)
 *  b3 | NaCl note (14, muted)       | T mid  | y180..196 (bl 191)
 *  b4 | s' calc (15, ink)           | T mid  | y213..230 (bl 224)
 *  b5 | "s/s'≈7400" ringed (22,grn) | T mid  | x430..650 y255..279 (bl 268)
 *  b6 | conclusion box (green)      | rect   | x150..930 y310..352
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={17} fill={RED} script>
          {t("worked example: common-ion suppression, AgCl (JEE Advanced)", "worked example: common-ion suppression, AgCl (JEE Advanced)")}
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
          Ksp(AgCl) = 1.8×10<TSpan dy={-7} fontSize={9.3}>−10</TSpan>
          <TSpan dy={7}>; s in pure water AND 0.10 M NaCl?</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — pure water */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <SvgText x={540} y={158} textAnchor="middle" fontSize={15} fill={INK} fontFamily={ANEK}>
          pure water: Ksp = s<TSpan dy={-7} fontSize={9.3}>2</TSpan>
          <TSpan dy={7}> ⇒ s = √(1.8×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−10</TSpan>
          <TSpan dy={7}>) = 1.34×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−5</TSpan>
          <TSpan dy={7}> M</TSpan>
        </SvgText>
      </Fade>

      {/* beat 3 — the NaCl setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={191} size={14} fill={MUTED} anchor="middle">
          {t(
            "in NaCl: [Cl⁻] ≈ 0.10 M (swamped by the salt)",
            "NaCl mein: [Cl⁻] ≈ 0.10 M (salt se swamp)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the new solubility */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={224} textAnchor="middle" fontSize={15} fill={INK} fontFamily={ANEK}>
          s′ = Ksp/[Cl⁻] = 1.8×10<TSpan dy={-7} fontSize={9.3}>−10</TSpan>
          <TSpan dy={7}>/0.10 = 1.8×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−9</TSpan>
          <TSpan dy={7}> M</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the suppression factor */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={268} size={22} fill={GREEN} weight={800} anchor="middle">
          s/s′ ≈ 7400
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 262, 110, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={150} y={310} width={780} height={42} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={336} size={14} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "AgCl ~7400× LESS soluble — basis of washing precipitates",
            "AgCl ~7400× KAM soluble — precipitates dhone ka basis"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
