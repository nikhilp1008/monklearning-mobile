/**
 * M11 Ch01 · Section 19 — "The five set operations as membership questions"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 11.86, 28.25, 38.57, 55.72, 71.42, 89.26]):
 *  0 title (always-on)
 *  1 Union A∪B — shade A-only + B-only + lens (two overlapping includes)
 *  2 Intersection A∩B — shade the lens only
 *  3 Difference A−B — shade A minus B; GUARDRAIL: A−B ≠ B−A
 *  4 Complement A′ — single circle in box U, shade outside A
 *  5 Symmetric difference A△B — shade (A−B) ∪ (B−A), the two crescents
 *  6 Disjoint — two separated circles, A∩B = ∅
 *
 * Layout plan (6-cell grid, circles r=42 unless noted; VennShade per cell):
 *  D1 Union        c(175,300)  A(151,300,42) B(199,300,42)
 *  D2 Intersection c(540,300)  A(516,300,42) B(564,300,42)
 *  D3 Difference   c(905,300)  A(881,300,42) B(929,300,42)
 *  D4 Complement   c(175,470)  A(175,470,42) + box U x105..245 y400..540
 *  D5 SymDiff      c(540,470)  A(516,470,42) B(564,470,42)
 *  D6 Disjoint     c(905,470)  A(865,470,32) B(945,470,32) — no shading
 *  captions at cy+65 (row1 y365) / cy+65 (row2 y535)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

export default function M11Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("five ways to ask “who's in?”", "“kaun andar hai?” poochne ke paanch tareeke")}
        </T>
      </Fade>

      {/* D1 — Union */}
      {(() => {
        const A = { cx: 151, cy: 300, r: 42 };
        const B = { cx: 199, cy: 300, r: 42 };
        const box = { x: 99, y: 248, w: 152, h: 104 };
        return (
          <>
            <VennShade on={beat >= 1} delay={dl(1, 1)} include={[A]} fill={AMBER_FILL} {...box} />
            <VennShade on={beat >= 1} delay={dl(1, 1)} include={[B]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 1} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(1, 0.2)} dur={0.6} />
            <Draw on={beat >= 1} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(1, 0.5)} dur={0.6} />
            <Fade on={beat >= 1} delay={dl(1, 1.8)}>
              <T x={A.cx - A.r - 10} y={A.cy} size={15} fill={INK} anchor="end" weight={700}>A</T>
              <T x={B.cx + B.r + 10} y={B.cy} size={15} fill={INK} anchor="start" weight={700}>B</T>
            </Fade>
            <Fade on={beat >= 1} delay={dl(1, 2.3)}>
              <T x={175} y={365} size={13} fill={INK} weight={700}>{"A ∪ B = in A OR B"}</T>
            </Fade>
          </>
        );
      })()}

      {/* D2 — Intersection */}
      {(() => {
        const A = { cx: 516, cy: 300, r: 42 };
        const B = { cx: 564, cy: 300, r: 42 };
        const box = { x: 464, y: 248, w: 152, h: 104 };
        return (
          <>
            <VennShade on={beat >= 2} delay={dl(2, 1)} include={[A, B]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 2} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(2, 0.2)} dur={0.6} />
            <Draw on={beat >= 2} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(2, 0.5)} dur={0.6} />
            <Fade on={beat >= 2} delay={dl(2, 1.8)}>
              <T x={A.cx - A.r - 10} y={A.cy} size={15} fill={INK} anchor="end" weight={700}>A</T>
              <T x={B.cx + B.r + 10} y={B.cy} size={15} fill={INK} anchor="start" weight={700}>B</T>
            </Fade>
            <Fade on={beat >= 2} delay={dl(2, 2.3)}>
              <T x={540} y={365} size={13} fill={INK} weight={700}>{"A ∩ B = in BOTH"}</T>
            </Fade>
          </>
        );
      })()}

      {/* D3 — Difference A − B */}
      {(() => {
        const A = { cx: 881, cy: 300, r: 42 };
        const B = { cx: 929, cy: 300, r: 42 };
        const box = { x: 829, y: 248, w: 152, h: 104 };
        return (
          <>
            <VennShade on={beat >= 3} delay={dl(3, 1)} include={[A]} exclude={[B]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 3} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(3, 0.2)} dur={0.6} />
            <Draw on={beat >= 3} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(3, 0.5)} dur={0.6} />
            <Fade on={beat >= 3} delay={dl(3, 1.8)}>
              <T x={A.cx - A.r - 10} y={A.cy} size={15} fill={INK} anchor="end" weight={700}>A</T>
              <T x={B.cx + B.r + 10} y={B.cy} size={15} fill={INK} anchor="start" weight={700}>B</T>
            </Fade>
            <Fade on={beat >= 3} delay={dl(3, 2.3)}>
              <T x={905} y={365} size={13} fill={INK} weight={700}>{"A − B = in A, NOT B"}</T>
            </Fade>
            <Fade on={beat >= 3} delay={dl(3, 3)}>
              <T x={905} y={385} size={12} fill={RED} script weight={700}>{"≠ B − A !"}</T>
            </Fade>
          </>
        );
      })()}

      {/* D4 — Complement A′ (needs a fixed universe U) */}
      {(() => {
        const A = { cx: 175, cy: 470, r: 42 };
        const box = { x: 105, y: 400, w: 140, h: 140 };
        return (
          <>
            <VennShade on={beat >= 4} delay={dl(4, 1)} include={[]} exclude={[A]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 4} d={`M ${box.x} ${box.y} h ${box.w} v ${box.h} h ${-box.w} z`} stroke={MUTED} sw={1.8} delay={dl(4, 0.2)} dur={0.7} />
            <Draw on={beat >= 4} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(4, 0.5)} dur={0.6} />
            <Fade on={beat >= 4} delay={dl(4, 1.8)}>
              <T x={A.cx} y={A.cy} size={15} fill={INK} weight={700}>A</T>
              <T x={box.x + 12} y={box.y + 18} size={13} fill={MUTED} anchor="start" weight={700}>U</T>
            </Fade>
            <Fade on={beat >= 4} delay={dl(4, 2.3)}>
              <T x={175} y={535} size={13} fill={INK} weight={700}>{"A′ = everyone NOT in A"}</T>
            </Fade>
          </>
        );
      })()}

      {/* D5 — Symmetric difference A △ B */}
      {(() => {
        const A = { cx: 516, cy: 470, r: 42 };
        const B = { cx: 564, cy: 470, r: 42 };
        const box = { x: 464, y: 418, w: 152, h: 104 };
        return (
          <>
            <VennShade on={beat >= 5} delay={dl(5, 1)} include={[A]} exclude={[B]} fill={AMBER_FILL} {...box} />
            <VennShade on={beat >= 5} delay={dl(5, 1)} include={[B]} exclude={[A]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 5} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(5, 0.2)} dur={0.6} />
            <Draw on={beat >= 5} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(5, 0.5)} dur={0.6} />
            <Fade on={beat >= 5} delay={dl(5, 1.8)}>
              <T x={A.cx - A.r - 10} y={A.cy} size={15} fill={INK} anchor="end" weight={700}>A</T>
              <T x={B.cx + B.r + 10} y={B.cy} size={15} fill={INK} anchor="start" weight={700}>B</T>
            </Fade>
            <Fade on={beat >= 5} delay={dl(5, 2.3)}>
              <T x={540} y={535} size={13} fill={INK} weight={700}>{"A △ B = in exactly ONE"}</T>
            </Fade>
          </>
        );
      })()}

      {/* D6 — Disjoint sets */}
      {(() => {
        const A = { cx: 865, cy: 470, r: 32 };
        const B = { cx: 945, cy: 470, r: 32 };
        return (
          <>
            <Draw on={beat >= 6} d={circleD(A.cx, A.cy, A.r)} stroke={GREEN} sw={2} delay={dl(6, 0.2)} dur={0.5} />
            <Draw on={beat >= 6} d={circleD(B.cx, B.cy, B.r)} stroke={GREEN} sw={2} delay={dl(6, 0.5)} dur={0.5} />
            <Fade on={beat >= 6} delay={dl(6, 1)}>
              <T x={A.cx} y={A.cy} size={14} fill={INK} weight={700}>A</T>
              <T x={B.cx} y={B.cy} size={14} fill={INK} weight={700}>B</T>
              <T x={905} y={470} size={16} fill={AMBER_DARK} weight={800}>{"∅"}</T>
            </Fade>
            <Fade on={beat >= 6} delay={dl(6, 1.8)}>
              <T x={905} y={535} size={13} fill={INK} weight={700}>{"A ∩ B = ∅  (disjoint)"}</T>
            </Fade>
          </>
        );
      })()}
    </Scene>
  );
}
