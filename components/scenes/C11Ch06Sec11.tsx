/**
 * C11 Ch06 · Section 11 — "Worked example — the Δn = 0 shortcut (NEET speed trap)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 40.4, 85.3, 123.4, 202, 255.8, 302.9, 336.6]):
 *  0 title + underline
 *  1 GIVEN: at 717 K, Kc = 49 for H2 + I2 ⇌ 2HI
 *  2 equation + Kc stamped
 *  3 THE TRAP box: panic — start multiplying 0.0821 × 717…
 *  4 cross out the trap; STOP — read Δn first: 2 mol gas each side
 *  5 Δn = 2 − 2 = 0 ⇒ (RT)⁰ = 1
 *  6 land: Kp = Kc = 49, ringed
 *  7 guardrail: always check Δn before the calculator
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x223..857  y30..90  (bl 64)
 *  b1 | "GIVEN" (14, amber-dark)    | T st   | x60..110  y99..117 (bl 112)
 *  b1 | given data (15, ink)        | T st   | x60..420  y123..142 (bl 136)
 *  b2 | equation + Kc (19, ink)     | T mid  | x300..780 y160..181 (bl 175)
 *  b3 | trap box (red dashed)       | rect   | x230..850 y210..260
 *  b3 | trap text (16, red)         | T mid  | x408..672 y229..250 (bl 240)
 *  b4 | cross-out over trap box     | Draw   | x230..850 y210..260
 *  b4 | "STOP — read Δn first" (16) | T mid  | x330..750 y274..291 (bl 290)
 *  b5 | Δn line (18, ink)           | T mid  | y313..331 (bl 330)
 *  b6 | "Kp = Kc = 49" ringed       | T mid  | x441..639 y360..388 (bl 380)
 *  b7 | guardrail box (amber dash)  | rect   | x140..940 y450..500
 *  b7 | guardrail text (15, amber)  | T mid  | y475..490 (bl 480)
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("NEET speed trap: the Δn = 0 shortcut", "NEET speed trap: Δn = 0 shortcut")}
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
        <T x={60} y={112} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={136} size={15} fill={INK} anchor="start">
          {t("at 717 K, Kc = 49 for H₂ + I₂ ⇌ 2HI", "at 717 K, Kc = 49, H₂ + I₂ ⇌ 2HI ke liye")}
        </T>
      </Fade>

      {/* beat 2 — equation + Kc */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={19} fill={INK} weight={700} anchor="middle">
          H₂(g) + I₂(g) ⇌ 2HI(g), Kc = 49
        </T>
      </Fade>

      {/* beat 3 — the trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={230} y={210} width={620} height={50} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={240} size={16} fill={RED} anchor="middle">
          {t(
            "trap: panic, start multiplying 0.0821 × 717 …",
            "trap: panic, 0.0821 × 717 multiply karna shuru …"
          )}
        </T>
      </Fade>

      {/* beat 4 — stop, cross the trap */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.4)}
        d={crossD(230, 210, 620, 50)}
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={290} size={16} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("STOP — read Δn first: 2 mol gas each side", "RUKO — pehle Δn padho: dono taraf 2 mol gas")}
        </T>
      </Fade>

      {/* beat 5 — the shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <SvgText x={540} y={330} textAnchor="middle" fontSize={18} fill={INK} fontFamily="var(--font-anek-latin), sans-serif">
          Δn = 2 − 2 = 0  ⇒  (RT)<TSpan dy={-9} fontSize="0.6em">0</TSpan>
          <TSpan dy={9}> = 1</TSpan>
        </SvgText>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={380} size={26} fill={GREEN} weight={800} anchor="middle">
          Kp = Kc = 49
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 374, 99, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 7 — the permanent lesson */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={140} y={450} width={800} height={50} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={480} size={15} fill={AMBER_DARK} anchor="middle">
          {t(
            "every Kp–Kc question: check Δn before the calculator",
            "har Kp–Kc question mein: calculator se pehle Δn check karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
