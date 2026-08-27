/**
 * M11 Ch01 · Section 20 — "The four Venn regions: shading, not memorising"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 9.47, 23.38, 40.96, 48.9, 57.51, 70.4]):
 *  0 title (always-on)
 *  1 draw U rectangle + two overlapping circles A, B
 *  2 REPRESENT: the 4 regions carved out, each lightly shaded + labeled
 *  3 caption: every operation = a choice of which regions to shade
 *  4 recipe icon 1,2: union (3 regions) / intersection (lens only)
 *  5 recipe icon 3,4: A−B (crescent) / A′ (outside A)
 *  6 GUARDRAIL: you never memorise — you just shade
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | U rect x150..750 y150..420  | Draw |
 *  b1 | A circle (300,280,85) / B circle (440,280,85) | Draw |
 *  b2 | region shades (onlyA/lens/onlyB) box(150,150,600,270) | VennShade |
 *  b2 | labels U/A/B/only A/A∩B/only B/neither | T |
 *  b3 | caption                       | T mid | x540 y440
 *  b5 | icon1 Union c(220,505) / icon2 Intersection c(400,505) |
 *  b6 | icon3 Difference c(600,505) / icon4 Complement c(800,505) |
 *  b6 | GUARDRAIL line                | T mid script red | x540 y580
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";
const GREEN_FILL = "#1C9B57";
const RED_FILL = "#DD4433";

export default function M11Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const A = { cx: 300, cy: 280, r: 85 };
  const B = { cx: 440, cy: 280, r: 85 };
  const bigBox = { x: 150, y: 150, w: 600, h: 270 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("turn bookkeeping into a picture", "bookkeeping ko ek picture bana do")}
        </T>
      </Fade>

      {/* beat 1 — draw U, A, B */}
      <Draw on={beat >= 1} d={roundRectD(bigBox.x, bigBox.y, bigBox.w, bigBox.h, 6)} stroke={MUTED} sw={2} delay={dl(1, 0.2)} dur={1} />
      <Draw on={beat >= 1} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2.2} delay={dl(1, 1.2)} dur={0.7} />
      <Draw on={beat >= 1} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2.2} delay={dl(1, 1.9)} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={170} y={175} size={16} fill={MUTED} anchor="start" weight={700}>U</T>
        <T x={260} y={210} size={17} fill={INK} weight={700}>A</T>
        <T x={480} y={210} size={17} fill={INK} weight={700}>B</T>
      </Fade>

      {/* beat 2 — REPRESENT: the 4 regions, shaded + labeled */}
      <VennShade on={beat >= 2} delay={dl(2, 0.3)} include={[A]} exclude={[B]} fill={GREEN_FILL} opacity={0.18} {...bigBox} />
      <VennShade on={beat >= 2} delay={dl(2, 0.6)} include={[A, B]} fill={AMBER_FILL} opacity={0.3} {...bigBox} />
      <VennShade on={beat >= 2} delay={dl(2, 0.9)} include={[B]} exclude={[A]} fill={RED_FILL} opacity={0.15} {...bigBox} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={255} y={285} size={13} fill={INK}>{t("only A", "sirf A")}</T>
        <T x={370} y={285} size={13} fill={INK} weight={700}>{"A ∩ B"}</T>
        <T x={475} y={285} size={13} fill={INK}>{t("only B", "sirf B")}</T>
        <T x={210} y={395} size={12} fill={MUTED} anchor="start">{"neither = (A ∪ B)′"}</T>
      </Fade>

      {/* beat 3 — the liberating idea */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={16} fill={AMBER_DARK} weight={700}>
          {t(
            "every operation = a choice of which regions to shade",
            "har operation = kaunse regions shade karne hain, bas"
          )}
        </T>
      </Fade>

      {/* recipe icons — beats 4 (union, intersection) and 5 (difference, complement) */}
      {(() => {
        const c = { cx: 220, cy: 505, r: 26 };
        const a2 = { cx: c.cx - 13, cy: c.cy, r: c.r };
        const b2 = { cx: c.cx + 13, cy: c.cy, r: c.r };
        const box = { x: 170, y: 468, w: 100, h: 74 };
        return (
          <>
            <VennShade on={beat >= 4} delay={dl(4, 0.3)} include={[a2]} fill={AMBER_FILL} {...box} />
            <VennShade on={beat >= 4} delay={dl(4, 0.3)} include={[b2]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 4} d={circleD(a2.cx, a2.cy, a2.r)} stroke={INK} sw={1.8} delay={dl(4, 0.1)} dur={0.4} />
            <Draw on={beat >= 4} d={circleD(b2.cx, b2.cy, b2.r)} stroke={INK} sw={1.8} delay={dl(4, 0.3)} dur={0.4} />
            <Fade on={beat >= 4} delay={dl(4, 1)}>
              <T x={c.cx} y={555} size={13} fill={INK} weight={700}>{"A ∪ B"}</T>
            </Fade>
          </>
        );
      })()}
      {(() => {
        const c = { cx: 400, cy: 505, r: 26 };
        const a2 = { cx: c.cx - 13, cy: c.cy, r: c.r };
        const b2 = { cx: c.cx + 13, cy: c.cy, r: c.r };
        const box = { x: 350, y: 468, w: 100, h: 74 };
        return (
          <>
            <VennShade on={beat >= 4} delay={dl(4, 1.3)} include={[a2, b2]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 4} d={circleD(a2.cx, a2.cy, a2.r)} stroke={INK} sw={1.8} delay={dl(4, 1.1)} dur={0.4} />
            <Draw on={beat >= 4} d={circleD(b2.cx, b2.cy, b2.r)} stroke={INK} sw={1.8} delay={dl(4, 1.3)} dur={0.4} />
            <Fade on={beat >= 4} delay={dl(4, 2)}>
              <T x={c.cx} y={555} size={13} fill={INK} weight={700}>{"A ∩ B"}</T>
            </Fade>
          </>
        );
      })()}
      {(() => {
        const c = { cx: 600, cy: 505, r: 26 };
        const a2 = { cx: c.cx - 13, cy: c.cy, r: c.r };
        const b2 = { cx: c.cx + 13, cy: c.cy, r: c.r };
        const box = { x: 550, y: 468, w: 100, h: 74 };
        return (
          <>
            <VennShade on={beat >= 5} delay={dl(5, 0.3)} include={[a2]} exclude={[b2]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 5} d={circleD(a2.cx, a2.cy, a2.r)} stroke={INK} sw={1.8} delay={dl(5, 0.1)} dur={0.4} />
            <Draw on={beat >= 5} d={circleD(b2.cx, b2.cy, b2.r)} stroke={INK} sw={1.8} delay={dl(5, 0.3)} dur={0.4} />
            <Fade on={beat >= 5} delay={dl(5, 1)}>
              <T x={c.cx} y={555} size={13} fill={INK} weight={700}>{"A − B"}</T>
            </Fade>
          </>
        );
      })()}
      {(() => {
        const cx = 800;
        const cy = 505;
        const r = 22;
        const box = { x: 760, y: 470, w: 80, h: 70 };
        return (
          <>
            <VennShade on={beat >= 5} delay={dl(5, 1.3)} include={[]} exclude={[{ cx, cy, r }]} fill={AMBER_FILL} {...box} />
            <Draw on={beat >= 5} d={roundRectD(box.x, box.y, box.w, box.h, 4)} stroke={MUTED} sw={1.4} delay={dl(5, 1.1)} dur={0.4} />
            <Draw on={beat >= 5} d={circleD(cx, cy, r)} stroke={INK} sw={1.8} delay={dl(5, 1.3)} dur={0.4} />
            <Fade on={beat >= 5} delay={dl(5, 2)}>
              <T x={cx} y={555} size={13} fill={INK} weight={700}>{"A′"}</T>
            </Fade>
          </>
        );
      })()}

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={585} size={16} fill={RED} script weight={700}>
          {t(
            "you never memorise the operations — you just shade!",
            "operations kabhi yaad nahi karte — bas shade karte ho!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
