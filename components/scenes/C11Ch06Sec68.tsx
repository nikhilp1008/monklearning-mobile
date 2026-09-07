/**
 * C11 Ch06 · Section 68 — "Worked example — pH of a hydrolysing salt (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.6, 20.3, 29.5, 46.2, 61.1, 71]):
 *  0 title + underline
 *  1 GIVEN: 0.10 M NaOAc, Ka(HOAc)=1.8×10⁻⁵, find pH
 *  2 setup: NaOAc = WA+SB salt → hydrolyzes → BASIC
 *  3 Kh = Kw/Ka = 10⁻¹⁴/1.8×10⁻⁵ = 5.6×10⁻¹⁰
 *  4 [OH⁻] = √(Khc) = √(5.6×10⁻¹¹) = 7.5×10⁻⁶ M
 *  5 land, ringed: pOH = 5.13, pH = 8.87
 *  6 cross-check, boxed: direct formula also gives 8.87 ✓
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..530  y110..129 (bl 124)
 *  b2 | setup (15, ink)             | T st   | x60..520  y142..161 (bl 156)
 *  b3 | Kh calc (15, ink)           | T mid  | y179..196 (bl 190)
 *  b4 | [OH-] calc (15, ink)        | T mid  | y214..231 (bl 225)
 *  b5 | "pOH=5.13,pH=8.87" ringed   | T mid  | x394..686 y251..275 (bl 265)
 *  b6 | cross-check box (green)     | rect   | x150..930 y305..347
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, GREEN, GREEN_DARK, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("worked example: pH of a hydrolysing salt (JEE Main)", "worked example: hydrolysing salt ka pH (JEE Main)")}
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
          0.10 M NaOAc, Ka(HOAc) = 1.8×10<TSpan dy={-7} fontSize={9.3}>−5</TSpan>
          <TSpan dy={7}>, find pH</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — the setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={156} size={15} fill={INK} anchor="start">
          {t(
            "NaOAc = WA+SB salt → hydrolyzes → BASIC",
            "NaOAc = WA+SB salt → hydrolyze karta → BASIC"
          )}
        </T>
      </Fade>

      {/* beat 3 — Kh */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={190} textAnchor="middle" fontSize={15} fill={INK} fontFamily={ANEK}>
          Kh = Kw/Ka = 10<TSpan dy={-7} fontSize={9.3}>−14</TSpan>
          <TSpan dy={7}>/1.8×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−5</TSpan>
          <TSpan dy={7}> = 5.6×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−10</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — [OH-] */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={225} textAnchor="middle" fontSize={15} fill={INK} fontFamily={ANEK}>
          [OH⁻] = √(Khc) = √(5.6×10<TSpan dy={-7} fontSize={9.3}>−11</TSpan>
          <TSpan dy={7}>) = 7.5×10</TSpan>
          <TSpan dy={-7} fontSize={9.3}>−6</TSpan>
          <TSpan dy={7}> M</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={265} size={22} fill={GREEN} weight={800} anchor="middle">
          pOH = 5.13, pH = 8.87
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 260, 146, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — cross-check */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={150} y={305} width={780} height={42} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={331} size={14} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "cross-check: pH = 7 + ½(pKa + log c) → 8.87 ✓",
            "cross-check: pH = 7 + ½(pKa + log c) → 8.87 ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
