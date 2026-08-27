/**
 * M11 Ch01 · Section 32 — "Speed trap: 'at least one' hands you the union"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (SPEED TRAP).
 *
 * 6 beats (board_reveal_at_english has 6 entries, indices 0..5):
 *  0 title (always-on)
 *  1 givens: 80 students, tea=60, coffee=35, every student ≥1 service
 *  2 GUARDRAIL/KEY: "at least one" ⇒ union = total = 80
 *  3 n(both) = 60+35−80 = 15
 *  4 decoy tension: 60+35=95 ... exceeds 80?!
 *  5 reframe: 95−80=15 = the SAME overlap — don't panic, embrace it
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "80 students total" (18)      | T mid | x540 y110
 *  b1 | "tea=60, coffee=35, every student ≥1" (15) | T mid | x540 y140
 *  b2 | boxed KEY "“at least one” ⇒ union=total=80" | rect+T | x220..860 y170..225
 *  b3 | "n(both) = n(tea)+n(coffee)−n(union)" (15) | T mid | x540 y280
 *  b3 | "= 60+35−80 = 15" (20,green)   | T mid | x540 y312
 *  b4 | "60+35 = 95 … exceeds 80?!" (17)| T mid | x540 y375
 *  b5 | "95−80 = 15 → same overlap! ✓" (18,green) | T mid | x540 y420
 *  b5 | caption (script)                | T mid | x540 y450
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("everyone takes at least one service", "har koi kam se kam ek service leta hai")}
        </T>
      </Fade>

      {/* beat 1 — givens */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={110} size={18} fill={INK} weight={700}>
          {t("80 students total", "80 students total")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={140} size={15} fill={INK} weight={600}>
          {t("tea = 60,   coffee = 35,   every student ≥ 1 service", "tea = 60,   coffee = 35,   har student ≥ 1 service")}
        </T>
      </Fade>

      {/* beat 2 — the key */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={220} y={172} width={640} height={55} rx={10} fill={AMBER_DARK} opacity={0.12} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={206} size={17} fill={RED} weight={800}>
          {"“at least one” ⇒ union = total = 80"}
        </T>
      </Fade>

      {/* beat 3 — solve for both */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={280} size={15} fill={INK} weight={700}>
          {"n(both) = n(tea) + n(coffee) − n(union)"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={312} size={20} fill={GREEN} weight={800}>
          {"= 60 + 35 − 80 = 15"}
        </T>
      </Fade>

      {/* beat 4 — the decoy tension (not an error!) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={375} size={17} fill={AMBER_DARK} weight={700}>
          {t("60 + 35 = 95 … exceeds 80?!", "60 + 35 = 95 … 80 se zyada?!")}
        </T>
      </Fade>

      {/* beat 5 — reframe: the excess IS the overlap */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={420} size={18} fill={GREEN} weight={800}>
          {"95 − 80 = 15   →   same overlap! ✓"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={450} size={14} fill={MUTED} script>
          {t("the excess IS the answer — don't panic, embrace it", "excess hi answer hai — panic mat karo, apnao")}
        </T>
      </Fade>
    </Scene>
  );
}
