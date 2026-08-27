/**
 * M11 Ch01 · Section 34 — "Advanced: solve for the triple overlap with partition identities"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (ADVANCED).
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 knowns: union=150, Σn=225, E₂=25
 *  2 eq1: E₁+E₂+E₃=150 ⇒ E₁+25+E₃=150
 *  3 eq2: E₁+2E₂+3E₃=225 ⇒ E₁+50+3E₃=225
 *  4 subtract (drawn line) → 25+2E₃=75 ⇒ E₃=25
 *  5 GUARDRAIL check: E₃=25,E₂=25⇒E₁=100; union=150✓
 *  6 closing: no diagram needed — pure algebra
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | knowns line (15)                | T mid | x540 y115
 *  b2 | eq1 (16)                        | T mid | x540 y175
 *  b3 | eq2 (16)                        | T mid | x540 y210
 *  b4 | subtract line (drawn)           | Draw  | x420..660 y230
 *  b4 | "25 + 2E₃ = 75" (18)            | T mid | x540 y268
 *  b4 | "⇒ E₃ = 25" (24,green)          | T mid | x540 y308
 *  b5 | check box (green)               | rect+T | x220..860 y495..565
 *  b6 | closing note (script)           | T mid | x540 y585
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("find how many speak all three languages", "teeno languages kitne bolte hain, nikalo")}
        </T>
      </Fade>

      {/* beat 1 — knowns */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={15} fill={INK} weight={700}>
          {"union = 150,   Σn = 100+70+55 = 225,   E₂ = 25"}
        </T>
      </Fade>

      {/* beat 2 — first partition identity */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          {"E₁ + E₂ + E₃ = 150   ⇒   E₁ + 25 + E₃ = 150"}
        </T>
      </Fade>

      {/* beat 3 — second partition identity */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={210} size={16} fill={INK} weight={700}>
          {"E₁ + 2E₂ + 3E₃ = 225   ⇒   E₁ + 50 + 3E₃ = 225"}
        </T>
      </Fade>

      {/* beat 4 — subtract to eliminate E1 */}
      <Draw on={beat >= 4} d="M 420 230 L 660 230" stroke={MUTED} sw={1.8} delay={dl(4, 0.3)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={268} size={18} fill={INK} weight={700}>
          {"25 + 2E₃ = 75"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={310} size={25} fill={GREEN} weight={800}>
          {"⇒  E₃ = 25"}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL check */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={190} y={495} width={700} height={70} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={527} size={15} fill={INK} weight={700}>
          {"check: E₃=25, E₂=25  ⇒  E₁=100"}
        </T>
        <T x={540} y={552} size={15} fill={GREEN} weight={800}>
          {"union = 100+25+25 = 150 ✓"}
        </T>
      </Fade>

      {/* beat 6 — closing lesson */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={585} size={14} fill={MUTED} script>
          {t(
            "no diagram needed — pure algebra when the triple is unknown",
            "diagram nahi chahiye — jab triple unknown ho, sirf algebra"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
