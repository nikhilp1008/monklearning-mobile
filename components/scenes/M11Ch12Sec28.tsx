/**
 * M11 Ch12 · Section 28 — "Two situations the earlier limits set aside"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS subtopic 5 (Limits at Infinity & Special Cases, secs 28-33).
 * Introduces (1) end behaviour as x→∞ for rational functions (dominant-term intuition)
 * and (2) the greatest-integer/floor function as the classic one-sided-limit-fails example.
 *
 * board_reveal_at_english  = [0.0, 15.1, 28.07, 47.36, 64.85, 82.6, 102.14, 118.19] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 15.1, 27.99, 45.48, 62.38, 77.48, 95.49, 108.54].
 * beat0 = seq1 heading, always-on title. beats 1-7 = seq2-8, gated `beat >= k`.
 *
 * Single centered column top (beats1-4: end-behaviour narrative -> landed limit),
 * THE two-panel diagram beat5 (LEFT: rational curve flattening to y=1/2, RIGHT: the
 * greatest-integer staircase), then closing text + red-margin guardrail (beats6-7).
 * Row bands are widened vs the default map (diagram needs y350-494) — documented here
 * per Step3's deviation allowance.
 *
 * Beats:
 *  0(title, always-on) | "Two situations the earlier limits set aside"
 *  1 | seq2: end behaviour framed as a question. Arrow gesture "x → ∞".
 *  2 | seq3: dominant-term intuition. Amber underline emphasis.
 *  3 | seq4: THE landed limit — (3x²+5)/(6x²−x) → 3/6 = 1/2, boxed green.
 *  4 | seq5: heading — "Second escape: the limit can fail at a jump".
 *  5 | seq6: THE DIAGRAM — LEFT rational curve → y=1/2 dashed asymptote;
 *      RIGHT greatest-integer staircase y=[x], closed-left/open-right dots.
 *  6 | seq7: two red arrows annotate the x=1 jump on the staircase — approach
 *      from each side lands on a different slab.
 *  7 | seq8 HIGH: red-margin guardrail — [x] is the classic exam vehicle.
 *
 * Curve/staircase geometry (computed, not eyeballed):
 *  LEFT panel — f(x)=(3x²+5)/(6x²−x), sampled x=1,2,3,4,5,6,8,10:
 *    f = 1.6, .7727, .6275, .5761, .5517, .5381, .5239, .5169 → asymptote 0.5.
 *    Pixel map: originX150 (mathX=0), scale_x=34px/unit; originY484 (mathY=0),
 *    scale_y=73px/unit (pixelY = 484 − 73·f). Points: (184,367.2) (218,427.6)
 *    (252,438.2) (286,442.0) (320,443.7) (354,444.7) (422,445.8) (490,446.3).
 *    Asymptote y=0.5 → pixelY 447.5, dashed line x150–505, label "y = 1/2" at (500,430).
 *  RIGHT panel — floor(x) on x∈[-2,3), 5 unit steps. originX780 (mathX=0),
 *    scale_x=60; originY420 (mathY=0), scale_y=26 (pixelY = 420 − 26·y):
 *    [-2,-1) y=-2→pixelY472 | [-1,0) y=-1→446 | [0,1) y=0→420 |
 *    [1,2) y=1→394 | [2,3) y=2→368. Every step: leftOpen=false (filled — floor(n)=n
 *    IS attained at x=n), rightOpen=true (hollow — value jumps away at x=n+1).
 *    Beat6 anchors two RED arrows at the x=1 jump (pixelX840): tip 828 (7px clear
 *    of the open dot at 835) approaching from the left along y=420, tip 853 (8px
 *    clear of the filled dot at 845) approaching from the right along y=394.
 *
 * Layout plan (x-range × y-range per element):
 *  b0 | title (25,red,script,mid)         | T mid  | x244..836(en)/251..829(hi) y25..71 (bl58)
 *  b1 | arrow "x → ∞"                     | Draw   | x760..955 y~100..110
 *  b1 | line (16,ink,start)               | T st   | x60..460(en)/348(hi) y97.5..115 (bl112)
 *  b2 | line (16,ink,start)               | T st   | x60..580(en)/588(hi) y139.5..157 (bl152)
 *  b2 | amber underline                   | Draw   | x60..590 y168
 *  b3 | Limit x→∞ (20,ink,start)          | Limit  | x60..90 y198..227 (bl214+cond)
 *  b3 | expr "(3x²+5)/(6x²−x)" (20,ink,w700)| T st  | x110..260 y198..220 (bl214)
 *  b3 | "=" (22,ink,mid)                  | T mid  | x275..295 y196..221 (bl214)
 *  b3 | "3/6" (20,amber,w700,start)       | T st   | x312..342 y198..220 (bl214)
 *  b3 | "=" (22,ink,mid)                  | T mid  | x358..378 y196..221 (bl214)
 *  b3 | boxed "1/2" (24,green)            | Chip   | x395..459 y192..234
 *  b4 | dash (amber)                      | Draw   | x40..58 y270
 *  b4 | heading (19,amber,w700,start)     | T st   | x66..475(en)/540(hi) y261..282 (bl276)
 *  b5 | caption (15,amber,w700,mid)       | T mid  | x330..750(en)/349..731(hi) y308..325 (bl320)
 *  b5 | LEFT axes  originX150 originY484  | Cartesian | box x130..490 y350..494
 *  b5 | LEFT curve (green)                | Draw   | curveD 8pts, see geometry above
 *  b5 | LEFT dashed asymptote (amber)     | path   | x150..505 y447.5
 *  b5 | LEFT "y = 1/2" label (12,amber)   | T st   | x500..542 y420.6..433.7 (bl430)
 *  b5 | RIGHT axes originX780 originY420 | Cartesian | box x650..990 y350..494
 *  b5 | RIGHT staircase (red, 5 steps)    | StepFn | box x660..960 y368..472
 *  b6 | line (15,ink,start)               | T st   | x60..675(en)/660(hi) y518.3..535 (bl530)
 *  b6 | two red arrows at the x=1 jump    | Draw   | x795..828 y420 / x853..885 y394
 *  b7 | red margin bar                    | Draw   | x50 y558..586
 *  b7 | guardrail line (15,red,w700,start)| T st   | x64..687(en)/627(hi) y562..579 (bl574)
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, curveD, StepFunction, Limit } from "./math-kit";

const LEFT_CURVE_PTS = [
  { x: 184, y: 367.2 },
  { x: 218, y: 427.6 },
  { x: 252, y: 438.2 },
  { x: 286, y: 442.0 },
  { x: 320, y: 443.7 },
  { x: 354, y: 444.7 },
  { x: 422, y: 445.8 },
  { x: 490, y: 446.3 },
];

const RIGHT_STEPS = [
  { x1: 660, x2: 720, y: 472, leftOpen: false, rightOpen: true }, // [-2,-1) -> -2
  { x1: 720, x2: 780, y: 446, leftOpen: false, rightOpen: true }, // [-1,0)  -> -1
  { x1: 780, x2: 840, y: 420, leftOpen: false, rightOpen: true }, // [0,1)   -> 0
  { x1: 840, x2: 900, y: 394, leftOpen: false, rightOpen: true }, // [1,2)   -> 1
  { x1: 900, x2: 960, y: 368, leftOpen: false, rightOpen: true }, // [2,3)   -> 2
];

export default function M11Ch12Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Two situations the earlier limits set aside", "Purani limits ne jo do cheezein chhod dein")}
        </T>
      </Fade>

      {/* beat 1 — end behaviour framed as a question */}
      <Draw on={beat >= 1} d={arrowD(760, 105, 955, 105)} stroke={INK} sw={2.2} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={60} y={112} size={16} fill={INK} anchor="start">
          {t("First: end behaviour — where does f head as x → ∞?", "Pehla: x → ∞ par f kahaan jaata hai?")}
        </T>
      </Fade>

      {/* beat 2 — dominant-term intuition */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={152} size={16} fill={INK} anchor="start">
          {t(
            "Far out, only the highest powers matter — the dominant term wins.",
            "Sirf highest powers maayne rakhti hain — dominant term jeetta hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M60 168 L590 168" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.6)} dur={0.6} />

      {/* beat 3 — the landed limit, boxed green */}
      <Limit on={beat >= 3} delay={dl(3, 0)} x={60} y={214} size={20} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={110} y={214} size={20} fill={INK} anchor="start" weight={700}>
          (3x²+5)/(6x²−x)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={285} y={214} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={312} y={214} size={20} fill={AMBER_DARK} anchor="start" weight={700}>
          3/6
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={368} y={214} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Chip x={395} y={192} w={64} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={24} script={false}>
          1/2
        </Chip>
      </Fade>

      {/* beat 4 — second escape, heading */}
      <Draw on={beat >= 4} d="M40 270 L58 270" stroke={AMBER_DARK} sw={3} delay={dl(4, 0)} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={66} y={276} size={19} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Second escape: the limit can fail at a jump", "Doosra escape: limit ek jump par fail ho sakti hai")}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: left curve -> y=1/2, right staircase y=[x] */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={320} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "Left: approach to y = 1/2. Right: the staircase y = [x].",
            "Baayi: curve y = 1/2 tak; Daayi: staircase y = [x]."
          )}
        </T>
      </Fade>

      <CartesianAxes
        on={beat >= 5}
        delay={dl(5, 0.5)}
        originX={150}
        originY={484}
        xLeft={130}
        xRight={490}
        yTop={350}
        yBottom={494}
        showTicks={false}
      />
      <Draw on={beat >= 5} d={curveD(LEFT_CURVE_PTS)} stroke={GREEN} sw={2.4} delay={dl(5, 1.6)} dur={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Path d="M150 447.5 L505 447.5" stroke={AMBER_DARK} strokeWidth={1.6} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={500} y={430} size={12} fill={AMBER_DARK} anchor="start">
          y = 1/2
        </T>
      </Fade>

      <CartesianAxes
        on={beat >= 5}
        delay={dl(5, 4.0)}
        originX={780}
        originY={420}
        xLeft={650}
        xRight={990}
        yTop={350}
        yBottom={494}
        showTicks={false}
      />
      <StepFunction on={beat >= 5} delay={dl(5, 5.1)} steps={RIGHT_STEPS} stroke={RED} dotR={5} />

      {/* beat 6 — approach from each side, different slabs */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={530} size={15} fill={INK} anchor="start">
          {t(
            "Approach a boundary from each side and you read different slabs — no single value.",
            "Boundary ko dono taraf se approach karo — alag slabs milte hain, ek value nahin."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} d={arrowD(795, 420, 828, 420)} stroke={RED} sw={2.2} delay={dl(6, 0.7)} />
      <Draw on={beat >= 6} d={arrowD(885, 394, 853, 394)} stroke={RED} sw={2.2} delay={dl(6, 1.1)} />

      {/* beat 7 — closing guardrail, red margin */}
      <Draw on={beat >= 7} d="M50 558 L50 586" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={64} y={574} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "The greatest integer function [x] is the classic exam vehicle for one-sided limits.",
            "Greatest integer function [x] one-sided limits ka classic exam vehicle hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
