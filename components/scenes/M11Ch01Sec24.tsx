/**
 * M11 Ch01 · Section 24 — "Speed trap: simplify (A−B) ∪ (A∩B)"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (SPEED TRAP).
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 speed move: shade, don't grind
 *  2 REPRESENT: shade crescent+lens together = all of circle A
 *  3 LAND: (A−B) ∪ (A∩B) = A
 *  4 algebraic confirmation setup: A−B = A∩B′
 *  5 algebra: (A∩B′)∪(A∩B) = A∩(B′∪B) = A∩U = A
 *  6 TRAP: stage over-shaded A∪B ✗ and under-shaded A∩B ✗, both crossed out
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "speed move: shade, don't grind" | T mid script | x540 y105
 *  b2 | diagram box(180,180,340,200) A(280,280,85) B(400,280,85), shade include:[A]
 *  b2 | "A"/"B" labels                  | T | x225,205 / x455,205
 *  b3 | "(A − B) ∪ (A ∩ B) = A" (20,green) | T mid | x340 y415
 *  b4 | "A − B = A ∩ B′" (16)           | T mid | x800 y270
 *  b5 | "(A∩B′)∪(A∩B) = A∩(B′∪B)" (14)  | T mid | x800 y305
 *  b5 | "= A ∩ U = A" (17,green)        | T mid | x800 y335
 *  b6 | icon1 A∪B✗ c(320,520) / icon2 A∩B✗ c(650,520), both crossed
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

export default function M11Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const A = { cx: 280, cy: 280, r: 85 };
  const B = { cx: 400, cy: 280, r: 85 };
  const box = { x: 180, y: 180, w: 340, h: 200 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("simplify (A−B) ∪ (A∩B)", "(A−B) ∪ (A∩B) simplify karo")}
        </T>
      </Fade>

      {/* beat 1 — speed move */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={105} size={16} fill={MUTED} script weight={700}>
          {t("speed move: shade, don't grind", "speed move: shade karo, grind mat karo")}
        </T>
      </Fade>

      {/* beat 2 — REPRESENT: crescent + lens together = all of A */}
      <VennShade on={beat >= 2} delay={dl(2, 1)} include={[A]} fill={AMBER_FILL} {...box} />
      <Draw on={beat >= 2} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2.2} delay={dl(2, 0.2)} dur={0.7} />
      <Draw on={beat >= 2} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2.2} delay={dl(2, 0.5)} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={225} y={210} size={16} fill={INK} weight={700}>A</T>
        <T x={455} y={210} size={16} fill={INK} weight={700}>B</T>
      </Fade>

      {/* beat 3 — LAND */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={340} y={415} size={19} fill={GREEN} weight={800}>
          {"(A − B) ∪ (A ∩ B) = A"}
        </T>
      </Fade>

      {/* beat 4 — algebraic confirmation setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={800} y={270} size={16} fill={INK} weight={700}>
          {"A − B = A ∩ B′"}
        </T>
      </Fade>

      {/* beat 5 — algebra */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={800} y={305} size={14} fill={INK} weight={600}>
          {"(A∩B′) ∪ (A∩B) = A∩(B′∪B)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={800} y={335} size={17} fill={GREEN} weight={800}>
          {"= A ∩ U = A"}
        </T>
      </Fade>

      {/* beat 6 — TRAP: stage the wrong shadings, cross them out */}
      {(() => {
        const a2 = { cx: 304, cy: 520, r: 30 };
        const b2 = { cx: 336, cy: 520, r: 30 };
        const ibox = { x: 264, y: 485, w: 112, h: 70 };
        return (
          <>
            <VennShade on={beat >= 6} delay={dl(6, 0.3)} include={[a2]} fill={RED} opacity={0.25} {...ibox} />
            <VennShade on={beat >= 6} delay={dl(6, 0.3)} include={[b2]} fill={RED} opacity={0.25} {...ibox} />
            <Draw on={beat >= 6} d={circleD(a2.cx, a2.cy, a2.r)} stroke={INK} sw={1.6} delay={dl(6, 0.1)} dur={0.4} />
            <Draw on={beat >= 6} d={circleD(b2.cx, b2.cy, b2.r)} stroke={INK} sw={1.6} delay={dl(6, 0.3)} dur={0.4} />
            <Draw on={beat >= 6} d={crossD(ibox.x, ibox.y, ibox.w, ibox.h)} stroke={RED} sw={2.4} delay={dl(6, 1.1)} dur={0.5} />
            <Fade on={beat >= 6} delay={dl(6, 1.8)}>
              <T x={320} y={578} size={13} fill={RED} weight={700}>
                {t("A ∪ B ✗ over-shaded", "A ∪ B ✗ zyada shade")}
              </T>
            </Fade>
          </>
        );
      })()}
      {(() => {
        const a2 = { cx: 634, cy: 520, r: 30 };
        const b2 = { cx: 666, cy: 520, r: 30 };
        const ibox = { x: 594, y: 485, w: 112, h: 70 };
        return (
          <>
            <VennShade on={beat >= 6} delay={dl(6, 2.2)} include={[a2, b2]} fill={RED} opacity={0.25} {...ibox} />
            <Draw on={beat >= 6} d={circleD(a2.cx, a2.cy, a2.r)} stroke={INK} sw={1.6} delay={dl(6, 2)} dur={0.4} />
            <Draw on={beat >= 6} d={circleD(b2.cx, b2.cy, b2.r)} stroke={INK} sw={1.6} delay={dl(6, 2.2)} dur={0.4} />
            <Draw on={beat >= 6} d={crossD(ibox.x, ibox.y, ibox.w, ibox.h)} stroke={RED} sw={2.4} delay={dl(6, 3)} dur={0.5} />
            <Fade on={beat >= 6} delay={dl(6, 3.7)}>
              <T x={650} y={578} size={13} fill={RED} weight={700}>
                {t("A ∩ B ✗ under-shaded", "A ∩ B ✗ kam shade")}
              </T>
            </Fade>
          </>
        );
      })()}
    </Scene>
  );
}
