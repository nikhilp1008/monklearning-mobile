/**
 * M11 Ch12 · Section 16 — "When does a derivative fail to exist?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the guardrail chapter, immediately follows Sec15 (first-principle
 * definition of f'(x)). Four ways a derivative can fail, plus the one-way
 * differentiable⇒continuous relationship.
 *
 * board_reveal_at_english  = [0.0, 8.79, 28.76, 46.68, 57.6, 67.84, 82.26] (7 beats 0-6).
 * board_reveal_at_hinglish = [0.0, 10.75, 28.67, 48.47, 60.25, 71.68, 84.57].
 * beat0 = seq1 heading, always-on title. beats1-6 = seq2-7, gated `beat >= k`:
 *  0(title, always-on) | "When does a derivative fail to exist?"
 *  1 | LEFT red-margin HIGH — seq2 the existence rule: f'(a) exists ⇔ LHD = RHD.
 *  2 | RIGHT THE DIAGRAM — seq3 a sharp corner (|x|-style V): LHD=−1, RHD=+1, no derivative
 *  3 | LEFT — seq4 other failure modes: jump + vertical-tangent, each a tiny drawn icon
 *  4 | CENTER HIGH boxed — seq5 differentiable at a ⇒ continuous at a
 *  5 | CENTER red-margin HIGH — seq6 converse fails: continuous does NOT ⇒ differentiable,
 *    |x| at 0 is the counterexample (verbal callback to the seq3 diagram)
 *  6 | LEFT — seq7 closing notation guardrail: f'(a) is a number, f'(x) is a function
 *
 * CORNER DIAGRAM GEOMETRY (computed, not eyeballed):
 * VERTEX = (790, 400). LEFT_PT = (690, 300). RIGHT_PT = (890, 300). All three chosen so
 * |dx|=|dy|=100 on both branches (equal-and-opposite screen slope by construction).
 * Screen space has y increasing downward, so true (math) slope = −(dy_screen)/dx_screen.
 * Left branch LEFT_PT→VERTEX: dx=790−690=100, dy=400−300=100 → math slope = −(100)/100 = −1. ✓
 * Right branch VERTEX→RIGHT_PT: dx=890−790=100, dy=300−400=−100 → math slope = −(−100)/100 = +1. ✓
 * This is exactly the y=|x| shape (vertex at the bottom, both branches rising outward, opening
 * upward) with LHD=−1, RHD=+1 confirmed numerically from the chosen pixel coordinates, matching
 * the board_content line verbatim.
 *
 * Layout plan (x-range × y-range per element):
 *  title (26,red,script,mid)                         | T mid    | x268..812(en)/297..783(hi) y30..71 (bl58)
 *  b1 | red bar                                        | Draw     | x60 y104..136
 *  b1 | "f'(a) exists ⇔ LHD = RHD." (18,red,w800,start) | T st     | x76..301 y108..128 (bl122)
 *  b2 | caption (15,amber_dark,w700,mid)                | T mid    | x617..963(en)/591..989(hi) y258..275 (bl270)
 *  b2 | ground line (muted)                             | Draw     | x650..950 y400
 *  b2 | left branch (ink)                               | Draw     | (690,300)-(790,400)
 *  b2 | right branch (ink)                               | Draw     | (790,400)-(890,300)
 *  b2 | vertex dot r5 (red)                              | Fade     | (790,400)
 *  b2 | "LHD = −1" (14,amber_dark,end)                   | T end    | x644..700 y332..340 (bl336)
 *  b2 | "RHD = +1" (14,amber_dark,start)                 | T st     | x884..940 y332..340 (bl336)
 *  b2 | "no derivative here" (14,red,w700,mid)            | T mid    | x724..857(en)/~700..880(hi) y419..434 (bl430)
 *  b3 | L1 "A jump or a vertical tangent" (15,ink)        | T st     | x60..278(en)/~270(hi) y176..193 (bl188)
 *  b3 | L2 "also kills the derivative." (15,ink)          | T st     | x60..263(en)/~323(hi) y200..217 (bl212)
 *  b3 | jump icon seg1+seg2 (ink)                         | Draw     | x70..170 y305..335
 *  b3 | jump icon dots (open/closed)                      | IntervalDot | (118,335) / (122,305)
 *  b3 | "jump" label (11,muted,mid)                       | T mid    | x109..131 y363..375 (bl372)
 *  b3 | vertical-tangent icon curve (ink)                 | Draw     | x205..296 y262..350
 *  b3 | "vertical tangent" label (11,muted,mid)            | T mid    | x208..296 y363..375 (bl372)
 *  b4 | box roundRectD(300,482,480,52,12) green            | Draw     | x300..780 y482..534
 *  b4 | "differentiable at a ⇒ continuous at a" (22,green_dark,mid) | T mid | x331..749 y496..520 (bl513)
 *  b5 | red bar                                            | Draw     | x60 y546..594
 *  b5 | L1 "But continuous does NOT imply differentiable —" (16,red,w700) | T st | x76..460(en)/~484(hi) y550..567 (bl562)
 *  b5 | L2 "|x| at 0 is the counterexample." (16,red,w700)  | T st     | x76..340(en)/~344(hi) y576..593 (bl588)
 *  b6 | L1 "f'(a) is a number, f'(x) is a function —" (15,ink) | T st  | x60..375(en)/~405(hi) y408..425 (bl420)
 *  b6 | L2 "don't leave an x where a number belongs." (15,ink) | T st  | x60..368(en)/~420(hi) y432..449 (bl444)
 *  b6 | amber underline under L2                            | Draw     | x58..~370(en)/~422(hi) y454
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD, IntervalDot, roundRectD } from "./math-kit";

/* ---- corner diagram geometry (computed, see header comment) ---- */
const VERTEX = { x: 790, y: 400 };
const LEFT_PT = { x: 690, y: 300 };
const RIGHT_PT = { x: 890, y: 300 };
// math slope = -(dy_screen)/dx_screen
const LEFT_SLOPE = -((VERTEX.y - LEFT_PT.y) / (VERTEX.x - LEFT_PT.x)); // -1
const RIGHT_SLOPE = -((RIGHT_PT.y - VERTEX.y) / (RIGHT_PT.x - VERTEX.x)); // +1
void LEFT_SLOPE;
void RIGHT_SLOPE;

export default function M11Ch12Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("When does a derivative fail to exist?", "Derivative kab exist nahin karta?")}
        </T>
      </Fade>

      {/* beat 1 — LEFT red-margin HIGH: the existence rule */}
      <Draw on={beat >= 1} d="M60 104 L60 136" stroke={RED} sw={3} delay={dl(1, 0)} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={76} y={122} size={18} fill={RED} anchor="start" weight={800}>
          {"f'(a) exists ⇔ LHD = RHD."}
        </T>
      </Fade>

      {/* beat 2 — RIGHT THE DIAGRAM: sharp corner, |x|-style V */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={790} y={270} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "A corner: LHD = −1, RHD = +1, so no derivative",
            "Ek corner: LHD = −1, RHD = +1 — koi derivative nahin"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        d={lineD(650, 400, 950, 400)}
        stroke={MUTED}
        sw={1.4}
        delay={dl(2, 0.6)}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        d={lineD(LEFT_PT.x, LEFT_PT.y, VERTEX.x, VERTEX.y)}
        stroke={INK}
        sw={2.6}
        delay={dl(2, 1.5)}
        dur={1.1}
      />
      <Draw
        on={beat >= 2}
        d={lineD(VERTEX.x, VERTEX.y, RIGHT_PT.x, RIGHT_PT.y)}
        stroke={INK}
        sw={2.6}
        delay={dl(2, 2.9)}
        dur={1.1}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Circle cx={VERTEX.x} cy={VERTEX.y} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={700} y={336} size={14} fill={AMBER_DARK} anchor="end" weight={700}>
          {"LHD = −1"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={884} y={336} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {"RHD = +1"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={790} y={430} size={14} fill={RED} anchor="middle" weight={700}>
          {t("no derivative here", "yahan derivative nahin")}
        </T>
      </Fade>

      {/* beat 3 — LEFT: other failure modes, brief text + two tiny icons */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={188} size={15} fill={INK} anchor="start">
          {t("A jump or a vertical tangent", "Jump ho ya vertical tangent,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={212} size={15} fill={INK} anchor="start">
          {t("also kills the derivative.", "dono derivative khatam karte hain.")}
        </T>
      </Fade>

      {/* tiny jump-discontinuity glyph */}
      <Draw on={beat >= 3} d={lineD(70, 335, 118, 335)} stroke={INK} sw={2.2} delay={dl(3, 1.0)} dur={0.6} />
      <Draw on={beat >= 3} d={lineD(122, 305, 170, 305)} stroke={INK} sw={2.2} delay={dl(3, 1.8)} dur={0.6} />
      <IntervalDot on={beat >= 3} delay={dl(3, 2.2)} x={118} y={335} open r={4} stroke={INK} />
      <IntervalDot on={beat >= 3} delay={dl(3, 2.4)} x={122} y={305} open={false} r={4} stroke={INK} />
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={120} y={372} size={11} fill={MUTED} anchor="middle">
          {t("jump", "jump")}
        </T>
      </Fade>

      {/* tiny vertical-tangent glyph — a curve that steepens toward vertical */}
      <Draw
        on={beat >= 3}
        d={curveD([
          { x: 205, y: 350 },
          { x: 230, y: 322 },
          { x: 248, y: 305 },
          { x: 266, y: 288 },
          { x: 296, y: 262 },
        ])}
        stroke={INK}
        sw={2.2}
        delay={dl(3, 3.2)}
        dur={1.0}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={252} y={372} size={11} fill={MUTED} anchor="middle">
          {t("vertical tangent", "vertical tangent")}
        </T>
      </Fade>

      {/* beat 4 — CENTER HIGH boxed: the one-way implication */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={513} size={22} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"differentiable at a ⇒ continuous at a"}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        d={roundRectD(300, 482, 480, 52, 12)}
        stroke={GREEN}
        sw={2.4}
        delay={dl(4, 1.1)}
        dur={1.0}
      />

      {/* beat 5 — CENTER red-margin HIGH: the converse-fails guardrail */}
      <Draw on={beat >= 5} d="M60 546 L60 594" stroke={RED} sw={3} delay={dl(5, 0)} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={76} y={562} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "But continuous does NOT imply differentiable —",
            "Par continuous hone se differentiable nahin hota —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={76} y={588} size={16} fill={RED} anchor="start" weight={700}>
          {t("|x| at 0 is the counterexample.", "|x| ka 0 par counterexample hai.")}
        </T>
      </Fade>

      {/* beat 6 — LEFT: closing bookkeeping/notation guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={420} size={15} fill={INK} anchor="start">
          {t("f'(a) is a number, f'(x) is a function —", "f'(a) ek number hai, f'(x) ek function hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={444} size={15} fill={INK} anchor="start">
          {t(
            "don't leave an x where a number belongs.",
            "kabhi bhi x mat chhodiye jahan number chahiye."
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        d={en ? "M58 454 L370 454" : "M58 454 L422 454"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(6, 0.9)}
        dur={0.6}
      />
    </Scene>
  );
}
