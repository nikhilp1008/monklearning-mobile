/**
 * C11 Ch06 · Section 66 — "Worked example — pH of a basic buffer (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.6, 20.9, 35.2, 49.9, 57.8, 64.2]):
 *  0 title + underline
 *  1 GIVEN: 0.10 M NH3 + 0.10 M NH4Cl, Kb=1.8×10⁻⁵
 *  2 pOH = pKb + log(salt/base) = pKb + log(1) = pKb
 *  3 pKb = −log(1.8×10⁻⁵) = 4.74 ⇒ pOH = 4.74
 *  4 land, ringed: pH = 14 − 4.74 = 9.26
 *  5 check chip: basic buffer > 7 ✓ as expected
 *  6 insight: equal amounts → log term = 0 → pH set by pKb alone
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..480  y110..129 (bl 124)
 *  b2 | H-H setup (16, ink)         | T mid  | y150..167 (bl 158)
 *  b3 | pKb calc (16, ink)          | T mid  | y188..205 (bl 195)
 *  b4 | "pH=14-4.74=9.26" ringed    | T mid  | x394..686 y224..248 (bl 235)
 *  b5 | check chip (green)          | Chip   | x330..750 y290..330
 *  b6 | insight (14, muted)         | T mid  | y352..367 (bl 355)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("worked example: pH of a basic buffer (CBSE)", "worked example: basic buffer ka pH (CBSE)")}
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
          0.10 M NH₃ + 0.10 M NH₄Cl, Kb = 1.8×10<TSpan dy={-7} fontSize={9.3}>−5</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — the buffer setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={16} fill={INK} anchor="middle">
          pOH = pKb + log([salt]/[base]) = pKb + log(1) = pKb
        </T>
      </Fade>

      {/* beat 3 — pKb */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={195} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          pKb = −log(1.8×10<TSpan dy={-7} fontSize={9.9}>−5</TSpan>
          <TSpan dy={7}>) = 4.74 ⇒ pOH = 4.74</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — the pH */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={235} size={22} fill={GREEN} weight={800} anchor="middle">
          pH = 14 − 4.74 = 9.26
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 230, 146, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — the sanity check */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={330} y={290} w={420} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          {t("basic buffer > 7 ✓ as expected", "basic buffer > 7 ✓ jaisa expect kiya")}
        </Chip>
      </Fade>

      {/* beat 6 — the insight */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={355} size={14} fill={MUTED} anchor="middle">
          {t(
            "equal amounts → log term = 0 → pH set by pKb alone",
            "equal amounts → log term = 0 → pH sirf pKb se set"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
