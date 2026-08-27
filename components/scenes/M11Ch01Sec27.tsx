/**
 * M11 Ch01 · Section 27 — "Pitfalls & pro-tips: operations and Venn diagrams"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: tips.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 TRAP 1: difference isn't commutative — A−B ≠ B−A
 *  2 TRAP 2: don't swap De Morgan forms
 *  3 TRAP 3: fix U before complementing
 *  4 TRAP 4: interval endpoint errors
 *  5 TRAP 5: disjoint ≠ complementary
 *  6 PRO-TIP: draw the four-region Venn once, shade
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1-5 | "TRAP N — ..." (17,red) | T st | x100 y110/180/250/320/390
 *  b1-5 | detail line             | T st | x100 y140/210/280/350/420
 *  b6 | pro-tip 2 lines           | rect+T | x180..900 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS = [
  {
    beat: 1,
    label: "TRAP 1 — difference isn't commutative",
    detail: "A − B ≠ B − A — read which set is the source",
    y: 110,
  },
  {
    beat: 2,
    label: "TRAP 2 — don't swap the De Morgan forms",
    detail: "(A∪B)′ = A′∩B′,     (A∩B)′ = A′∪B′",
    y: 180,
  },
  {
    beat: 3,
    label: "TRAP 3 — fix U before complementing",
    detail: "A′ is undefined until the universe U is stated",
    y: 250,
  },
  {
    beat: 4,
    label: "TRAP 4 — interval endpoint errors",
    detail: "∩: tighter bounds, stricter brackets.   ∪: looser bounds",
    y: 320,
  },
  {
    beat: 5,
    label: "TRAP 5 — disjoint ≠ complementary",
    detail: "disjoint: A∩B=∅.   complementary: disjoint AND A∪B=U",
    y: 390,
  },
];

export default function M11Ch01Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("operation traps", "operation traps")}
        </T>
      </Fade>

      {TRAPS.map((trap) => (
        <Fade key={trap.label} on={beat >= trap.beat} delay={dl(trap.beat, 0.3)}>
          <T x={100} y={trap.y} size={17} fill={RED} anchor="start" weight={700}>
            {trap.label}
          </T>
        </Fade>
      ))}
      {TRAPS.map((trap) => (
        <Fade key={`d${trap.label}`} on={beat >= trap.beat} delay={dl(trap.beat, 1.1)}>
          <T x={100} y={trap.y + 28} size={14} fill={INK} anchor="start">
            {trap.detail}
          </T>
        </Fade>
      ))}

      {/* beat 6 — PRO-TIP */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={180} y={495} width={720} height={78} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={528} size={18} fill={INK} weight={800}>
          {t("PRO-TIP: draw the four-region Venn once, then shade", "PRO-TIP: chaar-region Venn ek baar banao, phir shade")}
        </T>
        <T x={540} y={558} size={15} fill={AMBER_DARK} script>
          {t("faster than juggling the laws", "laws juggle karne se tez")}
        </T>
      </Fade>
    </Scene>
  );
}
