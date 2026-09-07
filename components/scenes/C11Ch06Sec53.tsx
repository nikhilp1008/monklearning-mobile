/**
 * C11 Ch06 · Section 53 — "Worked example — degree of ionization and pH of acetic acid (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.2, 22.9, 38, 47.6, 63.4, 79]):
 *  0 title + underline
 *  1 GIVEN: 0.10 M HOAc, Ka=1.8×10⁻⁵ → find α, [H+], pH
 *  2 α = √(Ka/c) = √(1.8×10⁻⁴) = 1.34×10⁻²
 *  3 validity chip: α ≈ 1.34% < 5% ⇒ approximation VALID
 *  4 [H+] = cα = 1.34×10⁻³ M
 *  5 land, ringed: pH = 3 − log 1.34 = 2.87
 *  6 conclusion: weak acid mildly acidic, pH higher than strong acid at same c
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..520  y110..129 (bl 124)
 *  b2 | α calc (16, ink)            | T mid  | y146..163 (bl 158)
 *  b3 | validity chip (green)       | Chip   | x300..780 y195..235
 *  b4 | [H+] calc (16, ink)         | T mid  | y258..275 (bl 270)
 *  b5 | pH answer ringed (22,grn)   | T mid  | x394..686 y298..322 (bl 315)
 *  b6 | conclusion (14, muted)      | T mid  | y363..380 (bl 375)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("worked example: α and pH of acetic acid (JEE Main)", "worked example: acetic acid ka α aur pH (JEE Main)")}
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
          0.10 M HOAc, Ka = 1.8×10<TSpan dy={-7} fontSize={9.3}>−5</TSpan>
          <TSpan dy={7}> → find α, [H⁺], pH</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — solve for alpha */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <SvgText x={540} y={158} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          α = √(Ka/c) = √(1.8×10<TSpan dy={-7} fontSize={9.9}>−4</TSpan>
          <TSpan dy={7}>) = 1.34×10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−2</TSpan>
        </SvgText>
      </Fade>

      {/* beat 3 — validity check */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={300} y={195} w={480} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          {t("α ≈ 1.34% < 5% ⇒ approximation VALID", "α ≈ 1.34% < 5% ⇒ approximation VALID")}
        </Chip>
      </Fade>

      {/* beat 4 — [H+] */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={270} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          [H⁺] = cα = 0.10×1.34×10<TSpan dy={-7} fontSize={9.9}>−2</TSpan>
          <TSpan dy={7}> = 1.34×10</TSpan>
          <TSpan dy={-7} fontSize={9.9}>−3</TSpan>
          <TSpan dy={7}> M</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={315} size={22} fill={GREEN} weight={800} anchor="middle">
          pH = 3 − log 1.34 = 2.87
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 310, 146, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={375} size={14} fill={MUTED} anchor="middle">
          {t(
            "a weak acid gives a milder pH than a strong acid at the same c",
            "weak acid, strong acid se milder pH deta, same c par"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
