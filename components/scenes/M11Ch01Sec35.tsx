/**
 * M11 Ch01 · Section 35 — "Pitfalls & pro-tips: cardinality word problems"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: tips.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 TRAP 1: forgetting to subtract the overlap
 *  2 TRAP 2: confusing "only A" with "A"
 *  3 TRAP 3: mis-signing the three-way term
 *  4 TRAP 4: exactly two ≠ at least two
 *  5 TRAP 5: skipping the sanity check
 *  6 PRO-TIP: draw the Venn, fill the centre first, work outward
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1-5 | "TRAP N — ..." (17,red) | T st | x100 y110/180/250/320/390
 *  b1-5 | detail line             | T st | x100 y140/210/280/350/420
 *  b6 | pro-tip 2 lines           | rect+T | x160..920 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS = [
  {
    beat: 1,
    label: "TRAP 1 — forgetting to subtract the overlap",
    detail: "n(A∪B) = n(A)+n(B) only for DISJOINT sets",
    y: 110,
  },
  {
    beat: 2,
    label: "TRAP 2 — confusing “only A” with “A”",
    detail: "“only” strips out every overlap",
    y: 180,
  },
  {
    beat: 3,
    label: "TRAP 3 — mis-signing the three-way term",
    detail: "+singles − pairs + triple (get the last sign right)",
    y: 250,
  },
  {
    beat: 4,
    label: "TRAP 4 — exactly two ≠ at least two",
    detail: "exactly two: −3×centre.   at least two: −2×centre",
    y: 320,
  },
  {
    beat: 5,
    label: "TRAP 5 — skipping the sanity check",
    detail: "negative region or union > n(U)  ⇒  data is inconsistent",
    y: 390,
  },
];

export default function M11Ch01Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("word-problem traps", "word-problem traps")}
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
        <Rect x={160} y={495} width={760} height={78} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={528} size={17} fill={INK} weight={800}>
          {t("PRO-TIP: draw the Venn, fill the centre first, work outward", "PRO-TIP: Venn banao, pehle centre bharo, phir bahar")}
        </T>
        <T x={540} y={558} size={14} fill={AMBER_DARK} script>
          {t("every only/exactly/at-least answer reads straight off", "har only/exactly/at-least answer seedha padh lo")}
        </T>
      </Fade>
    </Scene>
  );
}
