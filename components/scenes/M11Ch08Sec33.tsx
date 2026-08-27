/**
 * M11 Ch08 · Section 33 — "Nested squares: infinite figure, finite area"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: joining midpoints of a square halves its area each time
 * (the inner rotated square's diagonal = outer square's side, so its
 * area = side²/2 = half). First area 16²=256, a=256, r=1/2, |r|<1.
 * Total=256/(1-1/2)=256/(1/2)=512 ✓.
 *
 * Beats (en [0, 13.74, 24.83, 32.94, 41.3, 54.19, 63.49]):
 *  0 title (always-on)
 *  1 THE DEMO: nested squares (outer + 3 rotated inner squares), caption
 *  2 text: joining midpoints halves the area
 *  3 formula: first area = 16² = 256
 *  4 formula: sequence, a, r
 *  5 formula: total = 512
 *  6 red-margin: infinite nesting, finite total
 *
 * Layout plan:
 *  b1 | 4 nested squares cx240 cy200 (outer 150..330/110..290, diamonds
 *       half/quarter/eighth) · caption bl320 cx240
 *  b2 | text bl130 cx750
 *  b3 | text bl165 cx750
 *  b4 | text bl200 cx750
 *  b5 | text bl235 cx750 (bold)
 *  b6 | red bar x76 y370..440 · text bl390/430 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

function diamondD(cx: number, cy: number, half: number): string {
  return `M ${cx} ${cy - half} L ${cx + half} ${cy} L ${cx} ${cy + half} L ${cx - half} ${cy} Z`;
}
function squareD(cx: number, cy: number, half: number): string {
  return `M ${cx - half} ${cy - half} L ${cx + half} ${cy - half} L ${cx + half} ${cy + half} L ${cx - half} ${cy + half} Z`;
}

export default function M11Ch08Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cx = 240;
  const cy = 200;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Square of side 16 cm; join midpoints forever. Sum of all areas?", "16 cm side ka square; midpoints forever jodo. Sab areas ka sum?")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: nested squares */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={squareD(cx, cy, 90)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={diamondD(cx, cy, 90)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={squareD(cx, cy, 45)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={diamondD(cx, cy, 22.5)} stroke={RED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={cx} y={320} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("each inner square has half the area of the outer", "har inner square, outer ka half area rakhta hai")}
        </T>
      </Fade>

      {/* beat 2 — halving insight */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={750} y={130} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("joining midpoints halves the area each time", "midpoints jodne se area har baar half ho jaata hai")}
        </T>
      </Fade>

      {/* beat 3 — first area */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={750} y={165} size={16} fill={INK} anchor="middle">
          {"first area = 16² = 256"}
        </T>
      </Fade>

      {/* beat 4 — sequence, a, r */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={750} y={200} size={15} fill={INK} anchor="middle">
          {"256, 128, 64, ...  ⇒  a=256, r=1/2"}
        </T>
      </Fade>

      {/* beat 5 — total */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={750} y={235} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"total = 256/(1 - 1/2) = 512"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: finite payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 370 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={390} size={15} fill={RED} anchor="start" script>
          {t("infinite nesting, yet a finite total —", "infinite nesting, phir bhi finite total —")}
        </T>
        <T x={96} y={430} size={15} fill={RED} anchor="start" script>
          {t("the signature payoff of |r| < 1", "|r| < 1 ka signature payoff")}
        </T>
      </Fade>
    </Scene>
  );
}
