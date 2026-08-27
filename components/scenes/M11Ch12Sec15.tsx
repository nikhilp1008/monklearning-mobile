/**
 * M11 Ch12 · Section 15 — "How fast are you going right now?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS subtopic 3 (Derivatives & First Principle, secs 15-21).
 * The payoff section for <Frac>/<Limit>: seq5 IS the derivative-definition example the
 * primitives were verified against (f'(x)=lim(h→0)[f(x+h)-f(x)]/h, compound numerator).
 *
 * board_reveal_at_english  = [0.0, 16.04, 31.91, 44.97, 62.98, 80.73, 96.26, 109.57] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 16.81, 31.32, 42.84, 62.29, 77.57, 89.26, 99.58].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "How fast are you going right now?"
 *  1 | LEFT: seq2 — speedometer measures over a tiny sliver, then shrinks it
 *  2 | LEFT: seq3 — as interval shrinks to zero, average settles on instantaneous rate
 *  3 | RIGHT: seq4 THE DIAGRAM — secant P→Q slides into the tangent at P (staged: curve,
 *    P, far Q + secant, closer Q' + secant, then the tangent — the pattern of this whole
 *    subtopic; beat duration 18.01s (EN)/19.45s (HI), the longest beat, built for this)
 *  4 | LEFT: seq5 HIGH — first principle f'(x)=lim(h→0)[f(x+h)-f(x)]/h, <Limit>+<Frac>, boxed
 *  5 | LEFT: seq6 — read it piece by piece (numerator = Δoutput, h = shrinking Δinput)
 *  6 | LEFT: seq7 HIGH red-margin — it's a 0/0 limit, all limit machinery powers derivatives
 *  7 | LEFT: seq8 — evaluate everywhere and f'(x) becomes a brand-new function
 *
 * DIAGRAM GEOMETRY (computed, not eyeballed — verified before drawing a pixel):
 * Curve (pixel space): y(x) = 400 − 0.0022·(x−660)², x ∈ [660,980] (a smooth rising,
 * accelerating curve — bottom-left to top-right). y'(x) = −0.0044·(x−660).
 * Sampled at x = 660,700,740,760,780,820,860,900,940,980 → y = 400, 396.48, 385.92,
 * 378, 368.32, 343.68, 312, 273.28, 227.52, 174.72 (fed to curveD for a Catmull-Rom
 * spline through real points — dense enough that the drawn curve tracks the analytic
 * parabola closely).
 * P = (760, 378).  Q = (940, 227.52) — "clearly further along."  Q' = (820, 343.68) —
 * the closer step. All three lie exactly on the sampled curve (computed from the same
 * y(x)).
 * Tangent slope at P = y'(760) = −0.0044×100 = −0.44.
 * Secant P→Q slope = (227.52−378)/(940−760) = −150.48/180 = −0.836.
 * Secant P→Q' slope = (343.68−378)/(820−760) = −34.32/60 = −0.572.
 * Convergence check: −0.836 → −0.572 → −0.44 as the second point slides from Q to Q'
 * to (in the limit) P itself — monotonically approaching the tangent slope, confirming
 * the geometry actually demonstrates "secant pivots into tangent." Tangent line is drawn
 * through P with slope −0.44 from (690, 408.8) to (870, 329.6) (both = P.y + slope·Δx);
 * since the underlying curve is a true parabola, this line is tangent at exactly one
 * point (double-root construction), touching the sampled spline only at P.
 * Colors: P dot/label INK. Q dot/secant/label AMBER_DARK (first, farther chord).
 * Q' dot/secant/label MUTED, secant dashed (closer chord, "a step toward the limit").
 * Tangent line + label GREEN/GREEN_DARK (the payoff, drawn last).
 *
 * Layout plan (x-range × y-range per element):
 *  title (26,red,script,mid)                    | T mid  | x~297..783(en)/~325..755(hi) y30..71 (bl58)
 *  b1 | L1 "The speedometer measures..." (15,ink)| T st   | x60..~518(en)/~495(hi) y96..112 (bl108)
 *  b1 | L2 "then shrinks the sliver."  (15,ink)  | T st   | x60..~248(en)/~330(hi) y120..136 (bl132)
 *  b2 | L1 "As the interval..." (15,ink)         | T st   | x60..~308(en)/~375(hi) y164..180 (bl176)
 *  b2 | L2 "the average settles..." (15,ink)     | T st   | x60..~420(en)/~458(hi) y188..204 (bl200)
 *  b3 | caption (15,amber_dark,w700,mid)         | T mid  | x648..993(en)/636..1004(hi) y120..137 (bl132)
 *  b3 | curve (ink, curveD 10 pts)               | Draw   | x660..980 y174.7..400
 *  b3 | P dot r4 (ink) + "P" label               | Fade+T | (760,378); label x744 y364
 *  b3 | Q dot r4 (amber_dark) + "Q" label         | Fade+T | (940,227.52); label x958 y250
 *  b3 | secant P-Q (amber_dark, solid)            | Draw   | (760,378)-(940,227.52)
 *  b3 | Q' dot r4 (muted) + "Q'" label             | Fade+T | (820,343.68); label x840 y375
 *  b3 | secant P-Q' (muted, dashed, static)        | Fade   | (760,378)-(820,343.68)
 *  b3 | tangent at P (green, solid)                | Draw   | (690,408.8)-(870,329.6)
 *  b3 | tangent label (green_dark)                 | T st   | x880 y345
 *  b4 | box roundRectD(48,252,394,80,12) green     | Draw   | x48..442 y252..332
 *  b4 | "f'(x) =" (26,ink,w700,start)              | T st   | x60..151  y280..308 (bl300)
 *  b4 | Limit h→0 (26,ink,start)                   | Limit  | x180..~219 y280..320 (bl300+cond)
 *  b4 | Frac f(x+h)-f(x) / h (26,ink)              | Frac   | x260..430 y~265..317 (cx345)
 *  b5 | L1 "The numerator is..." (15,ink)          | T st   | x60..~430(en)/~315(hi) y360..376 (bl372)
 *  b5 | L2 "h is the shrinking..." (15,ink)        | T st   | x60..~380(en)/~323(hi) y384..400 (bl396)
 *  b6 | red bar                                     | Draw   | x60 y430..493
 *  b6 | L1 "The whole thing is..." (16,red,w700)    | T st   | x76..~380(en)/~348(hi) y440..456 (bl452)
 *  b6 | L2 "all your limit machinery..." (16,red,w700)| T st | x76..~444(en)/~476(hi) y468..484 (bl480)
 *  b7 | L1 "Evaluate at every point..." (15,ink)    | T st   | x60..~315(en)/~292(hi) y520..536 (bl532)
 *  b7 | L2 "becomes a brand-new function." (15,ink) | T st   | x60..~285(en)/~345(hi) y544..560 (bl556)
 *  b7 | amber underline under L2                    | Draw   | x58..~289(en)/~349(hi) y566
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
import { curveD, lineD, Frac, Limit, roundRectD } from "./math-kit";

/* ---- diagram geometry (computed, see header comment) ---- */
const CURVE_X0 = 660;
const CURVE_Y0 = 400;
const CURVE_A = 0.0022;
const curveY = (x: number) => CURVE_Y0 - CURVE_A * (x - CURVE_X0) ** 2;
const curveSlope = (x: number) => -2 * CURVE_A * (x - CURVE_X0);

const CURVE_XS = [660, 700, 740, 760, 780, 820, 860, 900, 940, 980];
const CURVE_PTS = CURVE_XS.map((x) => ({ x, y: curveY(x) }));

const P = { x: 760, y: curveY(760) };
const Q = { x: 940, y: curveY(940) };
const QPRIME = { x: 820, y: curveY(820) };
const SLOPE_TANGENT = curveSlope(P.x);
const TAN_LEFT = { x: 690, y: P.y + SLOPE_TANGENT * (690 - P.x) };
const TAN_RIGHT = { x: 870, y: P.y + SLOPE_TANGENT * (870 - P.x) };

export default function M11Ch12Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("How fast are you going right now?", "Abhi aap kitni tez ja rahe ho?")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: speedometer motivation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={108} size={15} fill={INK} anchor="start">
          {t(
            "The speedometer measures distance over a tiny sliver of time,",
            "Speedometer chhote time-sliver mein distance naapta hai,"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={132} size={15} fill={INK} anchor="start">
          {t("then shrinks the sliver.", "phir sliver chhota karte jaate hain.")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: the limiting idea stated */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={176} size={15} fill={INK} anchor="start">
          {t("As the interval shrinks to zero,", "Jaise interval zero ki taraf simatta hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={200} size={15} fill={INK} anchor="start">
          {t(
            "the average settles on the instantaneous rate.",
            "average instantaneous rate par settle ho jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: THE DIAGRAM — secant slides into tangent */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={820} y={132} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "Secant slides into tangent as Q approaches P",
            "Q, P ke paas aaye to secant tangent ban jaata hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={curveD(CURVE_PTS)} stroke={INK} sw={2.6} delay={dl(3, 0.6)} dur={1.4} />

      {/* P */}
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={P.x - 16} y={P.y - 14} size={15} fill={INK} anchor="end">
          P
        </T>
      </Fade>

      {/* Q — far point, first secant */}
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <T x={Q.x + 18} y={Q.y + 22} size={15} fill={AMBER_DARK} anchor="start">
          Q
        </T>
      </Fade>
      <Draw on={beat >= 3} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={AMBER_DARK} sw={2.2} delay={dl(3, 4.3)} dur={1} />

      {/* Q' — closer point, second secant (a step toward the limit) */}
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <Circle cx={QPRIME.x} cy={QPRIME.y} r={4} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.9)}>
        <T x={QPRIME.x + 20} y={QPRIME.y + 31} size={14} fill={MUTED} anchor="start">
          {"Q'"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <Path
          d={lineD(P.x, P.y, QPRIME.x, QPRIME.y)}
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="5 4"
          fill="none"
        />
      </Fade>

      {/* tangent at P — the payoff */}
      <Draw
        on={beat >= 3}
        d={lineD(TAN_LEFT.x, TAN_LEFT.y, TAN_RIGHT.x, TAN_RIGHT.y)}
        stroke={GREEN}
        sw={2.6}
        delay={dl(3, 9.3)}
        dur={1.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 10.9)}>
        <T x={TAN_RIGHT.x + 10} y={TAN_RIGHT.y + 15.4} size={13} fill={GREEN_DARK} anchor="start">
          {t("tangent at P", "tangent P par")}
        </T>
      </Fade>

      {/* beat 4 — LEFT: the first-principle definition, HIGH, boxed */}
      <Draw on={beat >= 4} d={roundRectD(48, 252, 394, 80, 12)} stroke={GREEN} sw={2.4} delay={dl(4, 1.6)} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={300} size={26} fill={INK} anchor="start" weight={700}>
          {"f'(x) ="}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.5)} x={180} y={300} size={26} condition="h → 0" anchor="start" fill={INK} />
      <Frac
        on={beat >= 4}
        delay={dl(4, 1)}
        x={345}
        y={300}
        size={26}
        numerator="f(x+h) − f(x)"
        denominator="h"
        width={170}
        fill={INK}
      />

      {/* beat 5 — LEFT: read it piece by piece */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={372} size={15} fill={INK} anchor="start">
          {t(
            "The numerator is the change in output;",
            "Numerator hai output mein change;"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={396} size={15} fill={INK} anchor="start">
          {t("h is the shrinking sliver of input.", "h hai input ka simatta hua sliver.")}
        </T>
      </Fade>

      {/* beat 6 — LEFT: red-margin guardrail, HIGH — the 0/0 connection */}
      <Draw on={beat >= 6} d="M60 430 L60 493" stroke={RED} sw={3} delay={dl(6, 0)} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={76} y={452} size={16} fill={RED} anchor="start" weight={700}>
          {t("The whole thing is a 0/0 limit —", "Ye poora expression 0/0 limit hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={76} y={480} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "all your limit machinery powers derivatives.",
            "saari limit machinery derivatives ko chalati hai."
          )}
        </T>
      </Fade>

      {/* beat 7 — LEFT: closing note, derivative as a function */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={532} size={15} fill={INK} anchor="start">
          {t("Evaluate at every point and f'(x)", "Har point par evaluate kijiye,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={60} y={556} size={15} fill={INK} anchor="start">
          {t("becomes a brand-new function.", "f'(x) ban jaata hai ek naya function.")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        d={en ? "M58 566 L289 566" : "M58 566 L349 566"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(7, 0.9)}
        dur={0.6}
      />
    </Scene>
  );
}
