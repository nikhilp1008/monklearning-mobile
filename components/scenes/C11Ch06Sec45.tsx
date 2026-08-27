/**
 * C11 Ch06 · Section 45 — "The common-ion effect and how a buffer resists change"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.3, 14.4, 27.7, 39.3, 50.3, 59.1]):
 *  0 title + underline
 *  1 rule: common ion added → Le Chatelier pushes ionization BACKWARD
 *  2 example: NaOAc + HOAc — acetate suppresses ionization, [H⁺] falls
 *  3 bar chart: [H+] for HOAc alone (tall) vs HOAc+NaOAc (short)
 *  4 buffer definition, boxed
 *  5 mechanism: +acid → base mops up; +base → acid neutralizes
 *  6 real world, ringed: blood buffer, pH ≈ 7.4
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 19, red)      | T mid  | x200..880  y30..80  (bl 64)
 *  b1 | rule (15, ink)              | T mid  | y100..117 (bl 112)
 *  b2 | example (14, muted)         | T mid  | y135..150 (bl 145)
 *  b3 | axes + 2 bars               | Draw   | x250..850 y180..310
 *  b3 | bar labels (12)             | T mid  | y325..338 (bl 330)
 *  b4 | buffer chip (amber)         | rect   | x170..910 y345..387
 *  b5 | mechanism line1 (14, green) | T mid  | y403..418 (bl 410)
 *  b5 | mechanism line2 (14, amber) | T mid  | y431..446 (bl 438)
 *  b6 | landing statement, ringed   | T mid  | x306..774 y460..485 (bl 480)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("the common-ion effect: birth of the buffer", "common-ion effect: buffer ka janam")}
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

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={15} fill={INK} anchor="middle">
          {t(
            "common ion added → Le Chatelier pushes ionization BACKWARD",
            "common ion add → Le Chatelier ionization BACKWARD push karta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the example */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={14} fill={MUTED} anchor="middle">
          {t(
            "NaOAc + HOAc: acetate flood suppresses ionization, [H⁺] falls",
            "NaOAc + HOAc: acetate flood ionization suppress karta, [H⁺] girta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the bar chart */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 300 310 H 850" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 300 310 V 180" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={280} y={195} size={12} fill={MUTED} anchor="end">
          [H⁺]
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d="M 380 205 H 480 V 310 H 380 Z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Rect x={382} y={207} width={96} height={101} fill={RED} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 620 270 H 720 V 310 H 620 Z" stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Rect x={622} y={272} width={96} height={36} fill={GREEN} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={430} y={330} size={12} fill={MUTED} anchor="middle">
          {t("HOAc alone", "HOAc akela")}
        </T>
        <T x={670} y={330} size={12} fill={MUTED} anchor="middle">
          {t("+ NaOAc", "+ NaOAc")}
        </T>
      </Fade>

      {/* beat 4 — the buffer definition */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={170} y={345} width={740} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={371} size={15} fill={INK} weight={600} anchor="middle">
          {t(
            "weak acid + conjugate salt (bulk) → resists pH change = BUFFER",
            "weak acid + conjugate salt (bulk) → pH change resist = BUFFER"
          )}
        </T>
      </Fade>

      {/* beat 5 — the mechanism */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={410} size={14} fill={GREEN_DARK} anchor="middle">
          {t("+ acid → conjugate base mops it up", "+ acid → conjugate base mop up karta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={438} size={14} fill={AMBER_DARK} anchor="middle">
          {t("+ base → weak acid neutralizes it", "+ base → weak acid neutralize karta")}
        </T>
      </Fade>

      {/* beat 6 — the real-world payoff */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={480} size={16} fill={GREEN} weight={700} anchor="middle">
          {t(
            "your blood: carbonic acid/bicarbonate buffer, pH ≈ 7.4",
            "tumhara blood: carbonic acid/bicarbonate buffer, pH ≈ 7.4"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 476, 234, 21)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
