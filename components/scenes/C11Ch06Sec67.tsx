/**
 * C11 Ch06 · Section 67 — "Worked example — solubility of silver chromate (NEET speed trap)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.1, 17.1, 30, 39.3, 53.7, 59.4]):
 *  0 title + underline
 *  1 GIVEN: Ksp(Ag2CrO4)=1.1×10⁻¹², find molar solubility s
 *  2 TRAP box: √Ksp — WRONG! (1:2 salt, not 1:1)
 *  3 correct: Ksp=4s³ ⇒ s=(Ksp/4)^(1/3)
 *  4 compute: s=(1.1×10⁻¹²/4)^(1/3)=(2.75×10⁻¹³)^(1/3)
 *  5 land, ringed: s ≈ 6.5×10⁻⁵ M
 *  6 speed cue, boxed: √Ksp only for AB; A2B needs ∛(Ksp/4)
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..520  y110..129 (bl 124)
 *  b2 | trap box (red dashed)       | rect   | x300..780 y140..180
 *  b3 | correct formula (16, ink)   | T mid  | y206..223 (bl 218)
 *  b4 | compute (15, ink)           | T mid  | y243..259 (bl 253)
 *  b5 | answer ringed (22, green)   | T mid  | x430..650 y282..306 (bl 295)
 *  b6 | speed cue box (amber)       | rect   | x190..890 y335..377
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, ringD, INK, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("NEET trap: solubility of silver chromate", "NEET trap: silver chromate ki solubility")}
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
          Ksp(Ag₂CrO₄) = 1.1×10<TSpan dy={-7} fontSize="0.62em">−12</TSpan>
          <TSpan dy={7}>, find s</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={300} y={140} width={480} height={40} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={165} size={15} fill={RED} anchor="middle">
          {t("√Ksp — WRONG! (1:2 salt, not 1:1)", "√Ksp — GALAT! (1:2 salt, 1:1 nahi)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.3)}
        d={crossD(300, 140, 480, 40)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 3 — the correct formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={218} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          Ksp = 4s<TSpan dy={-7} fontSize="0.62em">3</TSpan>
          <TSpan dy={7}> ⇒ s = (Ksp/4)</TSpan>
          <TSpan dy={-7} fontSize="0.62em">1/3</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — the computation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={253} textAnchor="middle" fontSize={15} fill={INK} fontFamily={ANEK}>
          s = (1.1×10<TSpan dy={-7} fontSize="0.62em">−12</TSpan>
          <TSpan dy={7}>/4)</TSpan>
          <TSpan dy={-7} fontSize="0.62em">1/3</TSpan>
          <TSpan dy={7}> = (2.75×10</TSpan>
          <TSpan dy={-7} fontSize="0.62em">−13</TSpan>
          <TSpan dy={7}>)</TSpan>
          <TSpan dy={-7} fontSize="0.62em">1/3</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={295} textAnchor="middle" fontSize={22} fontWeight={800} fill={GREEN} fontFamily={ANEK}>
          s ≈ 6.5×10<TSpan dy={-9} fontSize="0.6em">−5</TSpan>
          <TSpan dy={9}> M</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 289, 110, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the speed cue */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={190} y={335} width={700} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={361} size={14} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "√Ksp only for AB; A₂B needs ∛(Ksp/4)",
            "√Ksp sirf AB ke liye; A₂B ko ∛(Ksp/4) chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
