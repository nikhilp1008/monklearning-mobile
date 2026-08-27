/**
 * M11 Ch02 · Section 21 — "The standard functions I: identity, constant, modulus, polynomial"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGED — four real graphs in one row, extra eye-check on every shape.
 *
 * Beats (board_reveal_at_english [0, 14.93, 27.65, 44.2, 56.75, 76.63, 101.46]):
 *  0 title (always-on) · 1 identity f(x)=x: 45° line, Domain=Range=R
 *  2 constant f(x)=c: horizontal line, Range={c}
 *  3 THE DEMO: modulus + polynomial graphs appear (bare) + projection-trick caption
 *  4 modulus detail: Range=[0,∞) (never below x-axis)
 *  5 polynomial detail: Range=[0,∞); rational p(x)/q(x) domain caveat
 *  6 guardrail: a graph is a fingerprint — domain/range by inspection
 *
 * Layout plan — four mini graphs in one row, boxes estimated:
 *  b0 | title (script 25, red)          | T mid | x300..780  y33..68  (bl 60)
 *  b1 | G1 axes (origin160,230)          | Draw  | x100..220  y150..310
 *  b1 | G1 line f(x)=x                    | Draw  | (120,270)→(200,190)
 *  b1 | G1 labels (14)                    | T mid | x132..212  y322..366 (bl 332/362)
 *  b2 | G2 axes (origin400,230)          | Draw  | x340..460  y150..310
 *  b2 | G2 line f(x)=c                    | Draw  | (340,200)→(460,200)
 *  b2 | G2 labels (14)                    | T mid | x340..460  y322..366 (bl 332/362)
 *  b3 | G3 axes (origin640,230)          | Draw  | x580..700  y150..310
 *  b3 | G3 "V" f(x)=|x|                   | Draw  | (580,170)→(640,230)→(700,170)
 *  b3 | G4 axes (origin880,230)          | Draw  | x820..940  y150..310
 *  b3 | G4 parabola f(x)=x²               | Draw  | curveD 5pts
 *  b3 | G3/G4 name labels (14)            | T mid | y322..336 (bl 332)
 *  b3 | projection caption (14)           | T mid | x?..?      y383..398 (bl 394)
 *  b4 | G3 range detail (14)              | T mid | x598..682  y352..366 (bl 362)
 *  b5 | G4 range detail (14)              | T mid | x838..922  y352..366 (bl 362)
 *  b5 | rational caveat (14)              | T mid | x?..?      y415..430 (bl 426)
 *  b6 | margin bar (red)                  | Draw  | x60  y450..480
 *  b6 | guardrail (15, red)               | T st  | x76..?     y456..472 (bl 467)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, curveD } from "./math-kit";

const YTOP = 150;
const YBOTTOM = 310;
const ORIGIN_Y = 230;

export default function M11Ch02Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} anchor="middle" script>
          {t("The Class 11 Zoo — Part One", "Class 11 ka Zoo — Part One")}
        </T>
      </Fade>

      {/* beat 1 — identity f(x)=x */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={160} originY={ORIGIN_Y} xLeft={100} xRight={220} yTop={YTOP} yBottom={YBOTTOM} showTicks={false} />
      <Draw on={beat >= 1} d={lineD(120, 270, 200, 190)} stroke={AMBER_DARK} sw={2.4} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={160} y={332} size={14} fill={INK} anchor="middle">
          f(x) = x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={160} y={362} size={14} fill={INK} anchor="middle">
          Domain=Range=R
        </T>
      </Fade>

      {/* beat 2 — constant f(x)=c */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={400} originY={ORIGIN_Y} xLeft={340} xRight={460} yTop={YTOP} yBottom={YBOTTOM} showTicks={false} />
      <Draw on={beat >= 2} d={lineD(340, 200, 460, 200)} stroke={AMBER_DARK} sw={2.4} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={400} y={332} size={14} fill={INK} anchor="middle">
          f(x) = c
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={400} y={362} size={14} fill={INK} anchor="middle">
          {"Range={c}"}
        </T>
      </Fade>

      {/* beat 3 — modulus + polynomial appear, plus the projection-trick caption */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={640} originY={ORIGIN_Y} xLeft={580} xRight={700} yTop={YTOP} yBottom={YBOTTOM} showTicks={false} />
      <Draw on={beat >= 3} d={"M 580 170 L 640 230 L 700 170"} stroke={AMBER_DARK} sw={2.4} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={640} y={332} size={14} fill={INK} anchor="middle">
          {"f(x) = |x|"}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 3} delay={dl(3, 0.2)} originX={880} originY={ORIGIN_Y} xLeft={820} xRight={940} yTop={YTOP} yBottom={YBOTTOM} showTicks={false} />
      <Draw
        on={beat >= 3}
        d={curveD([
          { x: 820, y: 150 },
          { x: 850, y: 200 },
          { x: 880, y: 230 },
          { x: 910, y: 200 },
          { x: 940, y: 150 },
        ])}
        stroke={AMBER_DARK}
        sw={2.4}
        delay={dl(3, 0.6)}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={880} y={332} size={14} fill={INK} anchor="middle">
          {"f(x) = x²"}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={394} size={14} fill={INK} anchor="middle">
          {t(
            "Project onto x-axis → domain; onto y-axis → range",
            "x-axis pe project karo → domain; y-axis pe → range"
          )}
        </T>
      </Fade>

      {/* beat 4 — modulus range detail */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={640} y={362} size={14} fill={INK} anchor="middle">
          {"Range=[0,∞)"}
        </T>
      </Fade>

      {/* beat 5 — polynomial range detail + rational caveat */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={880} y={362} size={14} fill={INK} anchor="middle">
          {"Range=[0,∞)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={426} size={14} fill={INK} anchor="middle">
          {"Rational p(x)/q(x): domain = R − {q(x)=0}"}
        </T>
      </Fade>

      {/* beat 6 — guardrail: graph is a fingerprint */}
      <Draw on={beat >= 6} d="M 60 450 L 60 480" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={467} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "A graph is a fingerprint — domain/range by inspection",
            "Graph ek fingerprint hai — domain/range dekh kar pata chalta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
