/**
 * M11 Ch01 · Section 9 — "Pitfalls & pro-tips: representations"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: tips.
 *
 * Beats (board_reveal_at_english [0, 7.51, 23.38, 41.22, 55.89, 68.95]):
 *  0 title (always-on)
 *  1 TRAP 1: {0}/{∅} are NOT empty — wrong✗ vs right✓ pair
 *  2 TRAP 2: counting repeats — MATHEMATICS 11 written, only 8 distinct
 *  3 TRAP 3: ignoring the universe — {x:x²=2} empty over N, doubleton over R
 *  4 TRAP 4: equal vs equivalent — same COUNT ≠ same ELEMENTS
 *  5 PRO-TIP: circle the universe symbol first
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "TRAP 1 — {0}/{∅} NOT empty" (18,red) | T st | x100 y120
 *  b1 | "{0},{∅} ✗ empty" / "∅ or { } ✓ = ZERO" | T st | x100/500 y155
 *  b2 | "TRAP 2 — counting repeats" (18,red)   | T st | x100 y210
 *  b2 | "MATHEMATICS → 11 written, only 8 DISTINCT" | T st | x100 y245
 *  b3 | "TRAP 3 — ignoring the universe" (18,red)   | T st | x100 y300
 *  b3 | "{x:x²=2} → empty/N, doubleton/R"            | T st | x100 y335
 *  b4 | "TRAP 4 — equal vs equivalent" (18,red)      | T st | x100 y390
 *  b4 | "same COUNT ≠ same ELEMENTS"                 | T st | x100 y425
 *  b5 | pro-tip box, 2 lines                          | rect+T | x180..900 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS = [
  { beat: 1, label: "TRAP 1 — {0} and {∅} are NOT empty", y: 120 },
  { beat: 2, label: "TRAP 2 — counting repeats", y: 210 },
  { beat: 3, label: "TRAP 3 — ignoring the universe", y: 300 },
  { beat: 4, label: "TRAP 4 — equal vs equivalent", y: 390 },
];

export default function M11Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("traps that quietly cost marks", "traps jo chupke se marks kaatte hain")}
        </T>
      </Fade>

      {TRAPS.map((trap) => (
        <Fade key={trap.label} on={beat >= trap.beat} delay={dl(trap.beat, 0.3)}>
          <T x={100} y={trap.y} size={18} fill={RED} anchor="start" weight={700}>
            {trap.label}
          </T>
        </Fade>
      ))}

      {/* trap 1 detail — wrong vs right */}
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={100} y={155} size={15} fill={INK} anchor="start">
          {"{0}, {∅}  ✗ NOT empty"}
        </T>
        <T x={500} y={155} size={15} fill={GREEN} anchor="start" weight={700}>
          {"∅ or { }  ✓ = ZERO elements"}
        </T>
      </Fade>

      {/* trap 2 detail */}
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={100} y={245} size={15} fill={INK} anchor="start">
          {t(
            "MATHEMATICS → 11 letters written, only 8 DISTINCT",
            "MATHEMATICS → 11 letters likhe, sirf 8 DISTINCT"
          )}
        </T>
      </Fade>

      {/* trap 3 detail */}
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={100} y={335} size={15} fill={INK} anchor="start">
          {"{x : x² = 2}  →  empty over N,  doubleton over R"}
        </T>
      </Fade>

      {/* trap 4 detail */}
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={100} y={425} size={16} fill={INK} anchor="start" weight={700}>
          {"same COUNT  ≠  same ELEMENTS"}
        </T>
      </Fade>

      {/* beat 5 — PRO-TIP */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Rect x={180} y={495} width={720} height={78} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={528} size={19} fill={INK} weight={800}>
          {t("PRO-TIP: circle the universe symbol FIRST", "PRO-TIP: pehle universe symbol ko circle karo")}
        </T>
        <T x={540} y={558} size={16} fill={AMBER_DARK} script>
          {t("ask: “is this even possible here?”", "poocho: “kya yeh yahan possible bhi hai?”")}
        </T>
      </Fade>
    </Scene>
  );
}
