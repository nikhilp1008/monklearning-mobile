/**
 * M11 Ch01 · Section 31 — "Two subjects: at least one, only Physics, neither"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * 6 beats (board_reveal_at_english has 6 entries, indices 0..5):
 *  0 title (always-on)
 *  1 REPRESENT: box U, circles P/C, givens n(U)=120,n(P)=70,n(C)=50, lens=30
 *  2 shade P∪C; n(P∪C) = 70+50−30 = 90 (at least one)
 *  3 Physics only = 70−30 = 40 (fills left crescent; also fills C-only=20 for completeness)
 *  4 Neither = 120−90 = 30 (fills the neither corner)
 *  5 GUARDRAIL: "only P" = P−overlap; "neither" = U−union
 *
 * Layout plan (estimated render boxes; box(140,110,480,320) P(300,270,95) C(460,270,95)):
 *  b1 | box + circles                     | Draw |
 *  b1 | "P (n=70)"/"C (n=50)"/"n(U)=120"   | T | x250,165 / x490,165 / x155,135
 *  b1 | lens "30"                         | T mid | x380 y275
 *  b2 | shade P∪B (union) light amber      | VennShade |
 *  b2 | "n(P∪C) = 70+50−30 = 90" (green)   | T mid | x540 y460
 *  b3 | "40" only-P / "20" only-C          | T mid | x260/500 y275
 *  b3 | "Physics only = 70−30 = 40"        | T mid | x540 y490
 *  b4 | "30" neither corner                | T mid | x180 y395
 *  b4 | "Neither = 120−90 = 30"            | T mid | x540 y518
 *  b5 | guardrail (red)                    | T mid | x540 y550
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

export default function M11Ch01Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const P = { cx: 300, cy: 270, r: 95 };
  const C = { cx: 460, cy: 270, r: 95 };
  const box = { x: 140, y: 110, w: 480, h: 320 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("120 students, Physics & Chemistry", "120 students, Physics aur Chemistry")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: box, circles, givens */}
      <Draw on={beat >= 1} d={roundRectD(box.x, box.y, box.w, box.h, 8)} stroke={MUTED} sw={1.8} delay={dl(1, 0.2)} dur={0.9} />
      <Draw on={beat >= 1} d={circleD(P.cx, P.cy, P.r)} stroke={INK} sw={2.2} delay={dl(1, 1)} dur={0.7} />
      <Draw on={beat >= 1} d={circleD(C.cx, C.cy, C.r)} stroke={INK} sw={2.2} delay={dl(1, 1.5)} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={155} y={135} size={12} fill={MUTED} anchor="start" weight={700}>{"n(U) = 120"}</T>
        <T x={250} y={165} size={15} fill={INK} weight={700}>{"P (n=70)"}</T>
        <T x={490} y={165} size={15} fill={INK} weight={700}>{"C (n=50)"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={380} y={275} size={18} fill={INK} weight={800}>30</T>
      </Fade>

      {/* beat 2 — shade the union; land n(P∪C) */}
      <VennShade on={beat >= 2} delay={dl(2, 0.3)} include={[P]} fill={AMBER_FILL} opacity={0.16} {...box} />
      <VennShade on={beat >= 2} delay={dl(2, 0.3)} include={[C]} fill={AMBER_FILL} opacity={0.16} {...box} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={460} size={18} fill={GREEN} weight={800}>
          {"n(P ∪ C) = 70 + 50 − 30 = 90"}
        </T>
      </Fade>

      {/* beat 3 — Physics only (and Chemistry only, for a complete picture) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={260} y={275} size={18} fill={GREEN} weight={800}>40</T>
        <T x={500} y={275} size={15} fill={MUTED} weight={700}>20</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={490} size={15} fill={INK} weight={700}>
          {"Physics only = 70 − 30 = 40"}
        </T>
      </Fade>

      {/* beat 4 — neither */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={180} y={395} size={16} fill={GREEN} weight={800}>30</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={518} size={15} fill={INK} weight={700}>
          {"Neither = 120 − 90 = 30"}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={550} size={14} fill={RED} script weight={700}>
          {t(
            "“only P” = P − overlap;   “neither” = U − union",
            "“only P” = P − overlap;   “neither” = U − union"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
