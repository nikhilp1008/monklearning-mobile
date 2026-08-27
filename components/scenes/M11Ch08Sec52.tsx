/**
 * M11 Ch08 · Section 52 — "AM–GM finds a minimum in one line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: for x>0, AM≥GM on x and 9/x: (x+9/x)/2 ≥ √(x·9/x) = √9 = 3
 * ⇒ x+9/x ≥ 6. Equality iff x=9/x ⇒ x²=9 ⇒ x=3 (x>0), giving the minimum
 * value 6 at x=3. Curve points sampled from y=x+9/x: (1,10) (1.5,7.5)
 * (2,6.5) (3,6) (4,6.25) (5,6.8) (6,7.5) (8,9.125) — dips to the single
 * minimum at x=3 then rises, matching the diagram.
 *
 * Beats (en [0, 14.76, 26.28, 37.63, 52.31, 60.93, 77.91]):
 *  0 title (always-on)
 *  1 THE DEMO: y=x+9/x curve, dips to min at x=3
 *  2 text: apply AM-GM to x and 9/x
 *  3 formula: the AM-GM step
 *  4 formula: x+9/x ≥ 6
 *  5 red-margin: equality point is the minimiser
 *  6 boxed: minimum value is 6
 *
 * Layout plan:
 *  b1 | axes origin(250,280) x250..850 y110..280 · curve · drop line x460
 *       y255..280 · dot(460,255) · labels
 *  b2 | text bl330 cx540
 *  b3 | text bl362 cx540
 *  b4 | text bl394 cx540 (bold)
 *  b5 | red bar x76 y418..488 · text bl438/478 x96
 *  b6 | chip x400 y508 w280 h44 (text bl~535)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, curveD, IntervalDot } from "./math-kit";

const CURVE_PTS = [
  { x: 320, y: 155 },
  { x: 355, y: 218 },
  { x: 390, y: 243 },
  { x: 460, y: 255 },
  { x: 530, y: 249 },
  { x: 600, y: 235 },
  { x: 670, y: 218 },
  { x: 810, y: 177 },
];

export default function M11Ch08Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("For x > 0, find the minimum value of x + 9/x", "x > 0 ke liye, x + 9/x ka minimum value nikalo")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: the curve, dips to a single minimum */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.1)} originX={250} originY={280} xLeft={250} xRight={850} yTop={110} yBottom={280} showTicks={false} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={curveD(CURVE_PTS)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={230} y={118} size={12} fill={MUTED} anchor="middle">y</T>
        <T x={830} y={296} size={12} fill={MUTED} anchor="middle">x</T>
        <T x={360} y={140} size={13} fill={AMBER_DARK} anchor="middle">{"y = x + 9/x"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 460 255 L 460 280" stroke={RED} sw={1.4} dur={0.4} />
      <IntervalDot on={beat >= 1} delay={dl(1, 2.1)} x={460} y={255} open={false} r={4.5} stroke={RED} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={460} y={300} size={12} fill={RED} anchor="middle">x = 3</T>
        <T x={415} y={244} size={12} fill={RED} anchor="end">min = 6</T>
      </Fade>

      {/* beat 2 — apply AM-GM */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={330} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("apply AM ≥ GM to the two positive numbers x and 9/x", "x aur 9/x, do positive numbers pe AM ≥ GM lagao")}
        </T>
      </Fade>

      {/* beat 3 — the AM-GM step */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={362} size={16} fill={INK} anchor="middle">
          {"(x + 9/x)/2 ≥ √(x · 9/x) = 3"}
        </T>
      </Fade>

      {/* beat 4 — the bound */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={394} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"x + 9/x ≥ 6"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: equality is the minimiser */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 418 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={438} size={15} fill={RED} anchor="start" script>
          {t("equality at x = 9/x, i.e. x = 3 —", "equality x = 9/x par, yaani x = 3 —")}
        </T>
        <T x={96} y={478} size={15} fill={RED} anchor="start" script>
          {t("the minimiser is the equality point", "minimiser hi equality point hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={400} y={508} w={280} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("minimum value is 6", "minimum value 6 hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
