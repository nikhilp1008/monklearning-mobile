/**
 * M11 Ch01 · Section 18 — "Pitfalls & pro-tips: subsets and power sets"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: tips.
 *
 * Beats (board_reveal_at_english [0, 7.77, 28.67, 41.73, 55.64, 70.14]):
 *  0 title (always-on)
 *  1 TRAP 1: ∈ vs ⊆ — 1∈A, {1}⊆A, {1}∈P(A) — three true, three symbols
 *  2 TRAP 2: forgetting ∅ and A itself — organise by size
 *  3 TRAP 3: proper = 2ⁿ−1, NOT 2ⁿ−2
 *  4 TRAP 4: n[P(A)] ≠ n(A) — 1024=2¹⁰ ⇒ n(A)=10, never 1024
 *  5 PRO-TIP: memorise the small powers of two
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1-4 | "TRAP N — ..." (18,red)     | T st | x100 y120/200/280/360
 *  b1-4 | detail line                 | T st | x100 y150/230/310/390
 *  b5 | "memorise the small powers of two:" | T mid | x540 y500
 *  b5 | "2 → 4 → 8 → ... → 1024" (amber) | T mid | x540 y530
 *  b5 | "half of all power-set MCQs…"  | T mid script red | x540 y560
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS = [
  {
    beat: 1,
    label: "TRAP 1 — ∈ vs ⊆",
    detail: "1 ∈ A,   {1} ⊆ A,   {1} ∈ P(A)  — three true, three symbols!",
    y: 120,
  },
  {
    beat: 2,
    label: "TRAP 2 — forgetting ∅ and A itself",
    detail: "organise by size, smallest first — you can't miss them",
    y: 200,
  },
  {
    beat: 3,
    label: "TRAP 3 — proper subsets",
    detail: "= 2ⁿ − 1  (NOT 2ⁿ − 2)",
    y: 280,
  },
  {
    beat: 4,
    label: "TRAP 4 — n[P(A)] ≠ n(A)",
    detail: "n[P(A)] = 1024 = 2¹⁰  ⇒  n(A) = 10, never 1024",
    y: 360,
  },
];

export default function M11Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("where subset/power-set marks vanish", "subset/power-set marks kahan doobte hain")}
        </T>
      </Fade>

      {TRAPS.map((trap) => (
        <Fade key={trap.label} on={beat >= trap.beat} delay={dl(trap.beat, 0.3)}>
          <T x={100} y={trap.y} size={18} fill={RED} anchor="start" weight={700}>
            {trap.label}
          </T>
        </Fade>
      ))}
      {TRAPS.map((trap) => (
        <Fade key={`d${trap.label}`} on={beat >= trap.beat} delay={dl(trap.beat, 1.2)}>
          <T x={100} y={trap.y + 30} size={14} fill={INK} anchor="start">
            {trap.detail}
          </T>
        </Fade>
      ))}

      {/* beat 5 — PRO-TIP */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={500} size={16} fill={INK} weight={700}>
          {t("memorise the small powers of two:", "chote powers of two yaad karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={530} size={15} fill={AMBER_DARK} weight={800}>
          {"2 → 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512 → 1024"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={560} size={14} fill={RED} script>
          {t(
            "half of all power-set MCQs = spot the power of two!",
            "aadhe power-set MCQs = power of two pehchano!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
