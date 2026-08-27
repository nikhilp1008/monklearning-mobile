/**
 * M11 Ch02 · Section 18 — "Notation y=f(x), the three companions, and the vertical line test"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — real graph-reading geometry (parabola passes, circle fails), extra eye-check.
 *
 * Beats (board_reveal_at_english [0, 8.87, 27.56, 46.08, 57.6, 78.76, 97.45]):
 *  0 title (always-on) · 1 notation y=f(x): image, independent/dependent variable
 *  2 for a FUNCTION: Domain=A(all), Codomain=B, Range=images produced
 *  3 formula: Range(f) = {f(x):x∈A} ⊆ B
 *  4 THE DEMO: vertical line test — y=x² (meets once, passes) vs x²+y²=25 (meets twice, fails)
 *  5 circle fails: one x, two y's — relation but NOT a function
 *  6 guardrail: vertical line meets graph AT MOST ONCE ⇒ function
 *
 * Layout plan — two side-by-side graphs, boxes estimated:
 *  b0 | title (script 25, red)          | T mid  | x300..780  y33..68  (bl 60)
 *  b1 | notation line (14)               | T mid  | x337..743  y84..99  (bl 95)
 *  b2 | companions line (14)             | T mid  | x305..774  y114..129 (bl 125)
 *  b3 | Range formula (15,w700)          | T mid  | x435..645  y145..162 (bl 157)
 *  b4 | "y=x²" label (14,amber)          | T mid  | x205..255  y177..192 (bl 188)
 *  b4 | "x²+y²=25" label (14,amber)      | T mid  | x604..696  y177..192 (bl 188)
 *  b4 | LEFT axes (origin230,385)        | Draw   | x140..320  y205..385
 *  b4 | parabola y=x² (curveD)           | Draw   | within LEFT axes
 *  b4 | LEFT test line + 1 dot (green)   | Draw   | x260  y205..385, dot(260,340)
 *  b4 | RIGHT axes (origin650,295)       | Draw   | x550..750  y205..385
 *  b4 | circle r80                       | Draw   | x570..730  y215..375
 *  b4 | RIGHT test line + 2 dots (red)   | Draw   | x698  y205..385, dots(698,231)&(698,359)
 *  b4 | verdict-left (14,green)          | T mid  | x146..314  y399..414 (bl 410)
 *  b4 | verdict-right (14,red)           | T mid  | x548..753  y399..414 (bl 410)
 *  b5 | circle-fails line (14)           | T mid  | x330..750  y430..444 (bl 440)
 *  b6 | margin bar (red)                 | Draw   | x60  y460..490
 *  b6 | guardrail (15, red)              | T st   | x76..451   y466..482 (bl 477)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, curveD, lineD, CartesianAxes, IntervalDot } from "./math-kit";

const PARABOLA_POINTS = [
  { x: 170, y: 205 },
  { x: 190, y: 305 },
  { x: 210, y: 365 },
  { x: 230, y: 385 },
  { x: 250, y: 365 },
  { x: 270, y: 305 },
  { x: 290, y: 205 },
];

export default function M11Ch02Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} anchor="middle" script>
          {t("y = f(x) and the Vertical Line Test", "y = f(x) aur Vertical Line Test")}
        </T>
      </Fade>

      {/* beat 1 — notation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={95} size={14} fill={INK} anchor="middle">
          {t(
            "y=f(x): y is the image of x under f (x indep., y dep.)",
            "y=f(x): y, x ka image hai f ke neeche (x independent, y dependent)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the three companions, sharpened */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={125} size={14} fill={INK} anchor="middle">
          {t(
            "For a FUNCTION: Domain=A (all); Codomain=B; Range=images produced",
            "FUNCTION ke liye: Domain=A (poora); Codomain=B; Range=asli images"
          )}
        </T>
      </Fade>

      {/* beat 3 — Range formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={157} size={15} fill={INK} anchor="middle" weight={700}>
          {"Range(f) = {f(x) : x∈A} ⊆ B"}
        </T>
      </Fade>

      {/* beat 4 — THE DEMO: vertical line test, parabola vs circle */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={230} y={188} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          y = x²
        </T>
        <T x={650} y={188} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"x² + y² = 25"}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 4} delay={dl(4, 0.3)} originX={230} originY={385} xLeft={140} xRight={320} yTop={205} yBottom={385} step={20} />
      <Draw on={beat >= 4} d={curveD(PARABOLA_POINTS)} stroke={AMBER_DARK} sw={2.4} delay={dl(4, 0.7)} />
      <Draw on={beat >= 4} d={lineD(260, 205, 260, 385)} stroke={GREEN_DARK} sw={1.8} delay={dl(4, 1.2)} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.6)} x={260} y={340} open={false} r={5} stroke={GREEN_DARK} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={230} y={410} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("✓ meets ONCE → function", "✓ meets ONCE → function")}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 4} delay={dl(4, 0.3)} originX={650} originY={295} xLeft={550} xRight={750} yTop={205} yBottom={385} step={16} />
      <Draw on={beat >= 4} d={circleD(650, 295, 80)} stroke={AMBER_DARK} sw={2.4} delay={dl(4, 0.7)} />
      <Draw on={beat >= 4} d={lineD(698, 205, 698, 385)} stroke={RED} sw={1.8} delay={dl(4, 1.2)} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.6)} x={698} y={231} open={false} r={5} stroke={RED} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.8)} x={698} y={359} open={false} r={5} stroke={RED} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={650} y={410} size={14} fill={RED} anchor="middle" weight={700}>
          {t("✗ meets TWICE → not function", "✗ meets TWICE → not function")}
        </T>
      </Fade>

      {/* beat 5 — why the circle fails */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={440} size={14} fill={INK} anchor="middle">
          {t(
            "Circle fails: one x, two y's — relation but NOT a function",
            "Circle fail: ek x, do y's — relation hai par function NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail: the test itself */}
      <Draw on={beat >= 6} d="M 60 460 L 60 490" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={477} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Vertical line meets graph AT MOST ONCE ⇒ function",
            "Vertical line graph se AT MOST ONCE mile ⇒ function"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
