/**
 * M11 Ch02 · Section 22 — "The standard functions II: signum, greatest integer, and graph reading"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — step-function geometry (open/closed dots), extra eye-check.
 *
 * Beats (board_reveal_at_english [0, 9.64, 26.62, 51.46, 62.89, 84.74, 107.78]):
 *  0 title (always-on) · 1 signum: 3 flat pieces, jump at origin, Range{-1,0,1}
 *  2 greatest integer [x]: left-closed staircase, Range=Z
 *  3 shared caption: open dot=NOT taken; filled dot=taken
 *  4 guardrail: [-2.3]=-3 NOT -2 — round DOWN toward −∞
 *  5 general graph-reading: x-shadow=domain, y-shadow=range, vertical line test first
 *  6 JEE extra: fractional part {x}=x−[x], sawtooth, range=[0,1)
 *
 * Layout plan — two step-function graphs side by side, boxes estimated:
 *  b0 | title (script 24, red)          | T mid | x300..780  y36..67  (bl 60)
 *  b1 | G1 axes (origin280,280)          | Draw  | x160..400  y180..380
 *  b1 | G1 signum StepFunction           | Draw  | steps at y=240/280(dot)/320
 *  b1 | G1 label (14)                    | T mid | x206..354  y391..410 (bl 406)
 *  b2 | G2 axes (origin760,280)          | Draw  | x660..900  y180..380
 *  b2 | G2 [x] StepFunction (5 steps)    | Draw  | steps y=200..360
 *  b2 | G2 label (14)                    | T mid | x718..802  y391..410 (bl 406)
 *  b3 | shared caption (14)              | T mid | x411..670  y427..442 (bl 438)
 *  b4 | margin bar (red)                 | Draw  | x60  y462..492
 *  b4 | guardrail (14, red)              | T st  | x76..377   y468..483 (bl 479)
 *  b5 | graph-reading line (14)          | T mid | x292..789  y505..520 (bl 516)
 *  b6 | JEE extra (14, muted)            | T mid | x320..761  y536..550 (bl 546)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, StepFunction, IntervalDot } from "./math-kit";

export default function M11Ch02Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={RED} anchor="middle" script>
          {t("Signum, Greatest Integer, and Reading Graphs", "Signum, Greatest Integer, aur Graphs Padhna")}
        </T>
      </Fade>

      {/* beat 1 — signum: three flat pieces, jump at the origin */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={280} originY={280} xLeft={160} xRight={400} yTop={180} yBottom={380} step={40} />
      <StepFunction
        on={beat >= 1}
        delay={dl(1, 0.5)}
        steps={[
          { x1: 160, x2: 280, y: 320, leftOpen: false, rightOpen: true },
          { x1: 280, x2: 400, y: 240, leftOpen: true, rightOpen: false },
        ]}
      />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.8)} x={280} y={280} open={false} r={4.5} stroke={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={280} y={406} size={14} fill={INK} anchor="middle">
          {"sgn(x): Range={-1,0,1}"}
        </T>
      </Fade>

      {/* beat 2 — greatest integer: left-closed staircase */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={760} originY={280} xLeft={660} xRight={900} yTop={180} yBottom={380} step={40} />
      <StepFunction
        on={beat >= 2}
        delay={dl(2, 0.5)}
        steps={[
          { x1: 680, x2: 720, y: 360, leftOpen: false, rightOpen: true },
          { x1: 720, x2: 760, y: 320, leftOpen: false, rightOpen: true },
          { x1: 760, x2: 800, y: 280, leftOpen: false, rightOpen: true },
          { x1: 800, x2: 840, y: 240, leftOpen: false, rightOpen: true },
          { x1: 840, x2: 880, y: 200, leftOpen: false, rightOpen: true },
        ]}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={760} y={406} size={14} fill={INK} anchor="middle">
          {"[x]: Range=Z"}
        </T>
      </Fade>

      {/* beat 3 — the shared caption about open/filled dots */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={438} size={14} fill={INK} anchor="middle">
          {t("Open dot=NOT taken; filled dot=taken", "Open dot=NAHI liya; filled dot=liya gaya")}
        </T>
      </Fade>

      {/* beat 4 — guardrail: the negative-number rounding trap */}
      <Draw on={beat >= 4} d="M 60 462 L 60 492" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={76} y={479} size={14} fill={RED} anchor="start" weight={700}>
          {t("[-2.3] = -3, NOT -2 — round DOWN toward −∞", "[-2.3] = -3, -2 NAHI — hamesha −∞ taraf round down")}
        </T>
      </Fade>

      {/* beat 5 — the general graph-reading skill */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={516} size={14} fill={INK} anchor="middle">
          {t(
            "Any graph: x-shadow=DOMAIN; y-shadow=RANGE. Vertical line test first!",
            "Koi bhi graph: x-shadow=DOMAIN; y-shadow=RANGE. Pehle vertical line test!"
          )}
        </T>
      </Fade>

      {/* beat 6 — JEE extra: fractional part */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={546} size={14} fill={MUTED} anchor="middle">
          {"(JEE extra: fractional part {x}=x−[x], sawtooth, range=[0,1))"}
        </T>
      </Fade>
    </Scene>
  );
}
