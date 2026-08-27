/**
 * C11 Ch06 · Section 21 — "Worked example — from ΔG° to K (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.5, 15.2, 24.8, 40.2, 45.4, 52.1]):
 *  0 title + underline
 *  1 GIVEN: at 298 K, ΔG° = −11.4 kJ/mol
 *  2 convert to J: ΔG° = −11400 J/mol (the step students forget)
 *  3 ln K = −ΔG°/RT = 11400/(8.314×298) = 4.60
 *  4 exponentiate to recover K
 *  5 land, ringed: K = e^4.60 ≈ 100
 *  6 check, boxed: K > 1 ⇒ products favoured ✓
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x260..820  y30..88  (bl 64)
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..330  y110..129 (bl 124)
 *  b2 | convert (15, ink)           | T st   | x60..350  y142..161 (bl 156)
 *  b2 | red note (12, red, script)  | T st   | x60..300  y156..178 (bl 172)
 *  b3 | ln K calc (18, ink)         | T mid  | x333..747 y208..227 (bl 222)
 *  b4 | transition (14, muted, scr) | T mid  | y244..262 (bl 262)
 *  b5 | "K=e^4.60≈100" ringed (26)  | T mid  | x428..652 y285..313 (bl 305)
 *  b6 | check chip (green)          | Chip   | x330..750 y350..394
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("worked example: ΔG° → K (CBSE)", "worked example: ΔG° → K (CBSE)")}
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
          at 298 K, ΔG° = −11.4 kJ/mol
        </T>
      </Fade>

      {/* beat 2 — convert to joules */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={156} size={15} fill={INK} anchor="start">
          convert to J: ΔG° = −11400 J/mol
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={60} y={172} size={12} fill={RED} script anchor="start">
          {t("(the step students forget!)", "(yeh step students bhool jaate!)")}
        </T>
      </Fade>

      {/* beat 3 — ln K computation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={222} size={18} fill={INK} weight={700} anchor="middle">
          ln K = −ΔG°/RT = 11400/(8.314×298) = 4.60
        </T>
      </Fade>

      {/* beat 4 — transition */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={262} size={14} fill={MUTED} script anchor="middle">
          {t("exponentiate to recover K", "K wapas paane ke liye exponentiate karo")}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={305} textAnchor="middle" fontSize={26} fontWeight={800} fill={GREEN} fontFamily={ANEK}>
          K = e<TSpan dy={-11} fontSize="0.6em">4.60</TSpan>
          <TSpan dy={11}> ≈ 100</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 299, 112, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the sign check */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={330} y={350} w={420} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          {t("K > 1 ⇒ products favoured ✓", "K > 1 ⇒ products favoured ✓")}
        </Chip>
      </Fade>
    </Scene>
  );
}
