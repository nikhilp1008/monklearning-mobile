/**
 * C11 Ch06 · Section 54 — "Worked example — common-ion suppression in a buffer (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Continues the acetic-acid example from Sec 53.
 *
 * Beats (board_reveal_at_english: [0, 6.1, 19.7, 33.6, 45.8, 53, 63.5]):
 *  0 title + underline
 *  1 GIVEN: add NaOAc → [acetate]=0.10 M too → BUFFER
 *  2 H-H: pH = pKa + log([salt]/[acid]) = pKa + log(1) = pKa
 *  3 land, ringed: pKa = −log(1.8×10⁻⁵) = 4.74 ⇒ pH = 4.74
 *  4 compare [H+]: pure acid vs buffer
 *  5 ratio: 1.34×10⁻³ / 1.8×10⁻⁵ ≈ 74
 *  6 conclusion, boxed: 74-fold suppression! pH: 2.87 → 4.74
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..430  y110..129 (bl 124)
 *  b2 | H-H setup (16, ink)         | T mid  | y146..163 (bl 158)
 *  b3 | pKa/pH ringed (20, green)   | T mid  | x326..754 y182..206 (bl 200)
 *  b4 | compare note (14, muted)    | T mid  | y241..256 (bl 255)
 *  b5 | ratio (16, ink)             | T mid  | y277..294 (bl 292)
 *  b6 | conclusion box (green)      | rect   | x250..830 y320..364
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("worked example: common-ion suppression, quantified (JEE Advanced)", "worked example: common-ion suppression (JEE Advanced)")}
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
          {t("add NaOAc → [acetate]=0.10 M too → BUFFER", "NaOAc add karo → [acetate]=0.10 M bhi → BUFFER")}
        </T>
      </Fade>

      {/* beat 2 — Henderson-Hasselbalch setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={16} fill={INK} anchor="middle">
          pH = pKa + log([salt]/[acid]) = pKa + log(1) = pKa
        </T>
      </Fade>

      {/* beat 3 — the pH */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={200} textAnchor="middle" fontSize={20} fontWeight={800} fill={GREEN} fontFamily={ANEK}>
          pKa = −log(1.8×10<TSpan dy={-9} fontSize={12.0}>−5</TSpan>
          <TSpan dy={9}>) = 4.74 ⇒ pH = 4.74</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d={ringD(540, 195, 214, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 4 — set up the comparison */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={14} fill={MUTED} anchor="middle">
          {t("compare [H⁺]: pure acid vs buffer", "compare [H⁺]: pure acid vs buffer")}
        </T>
      </Fade>

      {/* beat 5 — the ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={292} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          1.34×10<TSpan dy={-7} fontSize={9.9}>−3</TSpan>
          <TSpan dy={7}> / 1.8×10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−5</TSpan>
          <TSpan dy={7}> ≈ 74</TSpan>
        </SvgText>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={250} y={320} width={580} height={44} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={347} size={16} fill={GREEN_DARK} weight={700} anchor="middle">
          {t("74-fold suppression! pH: 2.87 → 4.74", "74-fold suppression! pH: 2.87 → 4.74")}
        </T>
      </Fade>
    </Scene>
  );
}
