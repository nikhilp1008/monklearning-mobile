/**
 * M11 Ch05 · Section 40 — "Worked example: the full wavy curve (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. The hardest wavy-curve example in the chapter:
 * a denominator root (excluded), an even-multiplicity bounce (isolated
 * point), and two simple crossings, all in one rational expression.
 * Critical points are spaced EQUALLY on screen (not to true numeric scale)
 * per the standard wavy-curve teaching convention — only left-to-right
 * ORDER and SIGN matter, matching the JSON's own reference diagram, which
 * uses the same non-proportional spacing.
 *
 * Hand-verified sign walk: for large x all factors positive ⇒ + on the far
 * right. Cross 4 (odd,num) → −. Bounce 1 (even,num) → stays −. Cross -2
 * (denom) → +. Cross -3 (odd,num) → −. Regions L→R: −,+,−,−,+ — matches the
 * JSON's formula beat exactly. Answer needs ≥0 (the + regions plus every
 * zero of the NUMERATOR): [-3,-2) ∪ {1} ∪ [4,∞) — -2 excluded (denominator
 * zero, undefined), 1 kept as an isolated point (numerator zero, curve
 * touches 0 there without crossing).
 *
 * Beats (en [0,19.03,36.35,50.09,74.92,83.71,91.56,116.39,126.55], hi
 * [0,18.43,35.93,48.47,70.83,80.04,88.41,94.21,105.47]):
 *  0 heading: the problem — (x+3)(x-1)²(x-4)/(x+2) ≥ 0
 *  ACT 1 (erased at beat 4):
 *  1 text: critical points L→R, as 4 chips (root, num/denom, multiplicity)
 *  2 text: anchor — large x, all factors positive ⇒ start POSITIVE far right
 *  3 text: walk left, 4-line sign trace
 *  ACT 2 (persists):
 *  4 formula: the 5 interval-sign regions
 *  5 text: need '≥0' — curve on or above the axis
 *  6 note (red-margin, high): include -3,4; exclude -2; keep isolated {1}
 *  7 formula (high, boxed green): x ∈ [-3,-2) ∪ {1} ∪ [4,∞)
 *  8 diagram: wavy curve — crosses -3,4, bounce at 1, open circle at -2
 *
 * Layout plan:
 *  b0 | problem (17,ink,w700)         | T mid  | bl 100
 *  b1 | 4 critical-point chips (13)   | Chip×4 | y130 h42, x190/370/550/730
 *  b2 | caption (14,ink,scr)          | T mid  | bl 205
 *  b3 | 4-line walk-left list (14)    | T mid  | bl 245/272/299/326
 *  b4 | formula row (16,ink,w700)     | T mid  | bl 155
 *  b5 | caption (14,ink,scr)          | T mid  | bl 195
 *  b6 | boxed guardrail (14,red)      | Chip   | x160..920 y225..273
 *  b7 | boxed formula (18,green)      | Chip   | x340..740 y295..343
 *  b8 | wavy curve + dots + labels    | Draw   | axis y500, x150..960
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, curveD, IntervalDot } from "./math-kit";

export default function M11Ch05Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const act1 = (k: number) => beat >= k && beat < 4;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={19} fill={RED} script>
          {t(
            "a bounce (even power) touches the axis but never crosses it",
            "bounce (even power) axis ko touch karta hai par cross nahi karta"
          )}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("solve (x+3)(x-1)²(x-4)/(x+2) ≥ 0", "(x+3)(x-1)²(x-4)/(x+2) ≥ 0 solve karo")}
        </T>
      </Fade>

      {/* ACT 1 — beats 1-3, erased at beat 4 */}
      {/* beat 1 — critical points as 4 chips */}
      <Fade on={act1(1)} delay={dl(1, 0.3)}>
        <Chip x={190} y={130} w={160} h={42} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          -3 (num, ×1)
        </Chip>
      </Fade>
      <Fade on={act1(1)} delay={dl(1, 0.5)}>
        <Chip x={370} y={130} w={160} h={42} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          -2 (denom)
        </Chip>
      </Fade>
      <Fade on={act1(1)} delay={dl(1, 0.7)}>
        <Chip x={550} y={130} w={160} h={42} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          1 (num, ×2)
        </Chip>
      </Fade>
      <Fade on={act1(1)} delay={dl(1, 0.9)}>
        <Chip x={730} y={130} w={160} h={42} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          4 (num, ×1)
        </Chip>
      </Fade>

      {/* beat 2 — the anchor */}
      <Fade on={act1(2)} delay={dl(2, 0.3)}>
        <T x={540} y={205} size={14} fill={INK} script>
          {t(
            "for large x, all factors are positive ⇒ start POSITIVE on the far right",
            "bade x ke liye, sab factors positive hain ⇒ far right par POSITIVE se start karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — walk left */}
      <Fade on={act1(3)} delay={dl(3, 0.3)}>
        <T x={540} y={245} size={14} fill={INK} weight={700}>
          {t("cross at 4 (odd) → −", "4 par cross (odd) → −")}
        </T>
      </Fade>
      <Fade on={act1(3)} delay={dl(3, 0.5)}>
        <T x={540} y={272} size={14} fill={INK} weight={700}>
          {t("bounce at 1 (even) → stays −", "1 par bounce (even) → − hi rehta hai")}
        </T>
      </Fade>
      <Fade on={act1(3)} delay={dl(3, 0.7)}>
        <T x={540} y={299} size={14} fill={INK} weight={700}>
          {t("cross at -2 → +", "-2 par cross → +")}
        </T>
      </Fade>
      <Fade on={act1(3)} delay={dl(3, 0.9)}>
        <T x={540} y={326} size={14} fill={INK} weight={700}>
          {t("cross at -3 → −", "-3 par cross → −")}
        </T>
      </Fade>

      {/* ACT 2 — beats 4-8, persists */}
      {/* beat 4 — the sign regions */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={155} size={16} fill={INK} weight={700}>
          (-∞,-3): − &nbsp; (-3,-2): + &nbsp; (-2,1): − &nbsp; (1,4): − &nbsp; (4,∞): +
        </T>
      </Fade>

      {/* beat 5 — what we need */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={195} size={14} fill={INK} script>
          {t("we need '≥ 0' — the curve on or above the axis", "hume '≥ 0' chahiye — curve axis par ya upar")}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={225} w={760} h={48} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "include -3, 4 (numerator roots); exclude -2 (denom); keep isolated {1}",
            "include karo -3, 4 (numerator roots); exclude karo -2 (denom); isolated {1} rakho"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={340} y={295} w={400} h={48} fill={GREEN} textFill="#fff" size={17} script={false}>
          x ∈ [-3,-2) ∪ {"{1}"} ∪ [4,∞)
        </Chip>
      </Fade>

      {/* beat 8 — the wavy curve */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d={axisD(150, 960, 500)} stroke={INK} sw={2} dur={0.7} />
      <Draw
        on={beat >= 8}
        delay={dl(8, 1.0)}
        d={[260, 430, 600, 770].map((x) => tickD(x, 500, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[
        { x: 260, v: "-3" },
        { x: 430, v: "-2" },
        { x: 600, v: "1" },
        { x: 770, v: "4" },
      ].map((p) => (
        <Fade key={p.v} on={beat >= 8} delay={dl(8, 1.4)}>
          <T x={p.x} y={522} size={12} fill={MUTED}>
            {p.v}
          </T>
        </Fade>
      ))}
      <Draw
        on={beat >= 8}
        delay={dl(8, 1.9)}
        d={curveD([
          { x: 150, y: 555 },
          { x: 260, y: 500 },
          { x: 345, y: 445 },
          { x: 430, y: 500 },
          { x: 515, y: 555 },
          { x: 600, y: 500 },
          { x: 685, y: 555 },
          { x: 770, y: 500 },
          { x: 900, y: 445 },
        ])}
        stroke={GREEN}
        sw={2.4}
        dur={1.4}
      />
      <IntervalDot on={beat >= 8} delay={dl(8, 3.4)} x={260} y={500} open={false} r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 8} delay={dl(8, 3.6)} x={430} y={500} open={true} r={5} stroke={RED} />
      <IntervalDot on={beat >= 8} delay={dl(8, 3.8)} x={600} y={500} open={false} r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 8} delay={dl(8, 4.0)} x={770} y={500} open={false} r={5} stroke={GREEN} />
      <Fade on={beat >= 8} delay={dl(8, 4.4)}>
        <T x={205} y={580} size={15} fill={RED} weight={700}>
          −
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={345} y={415} size={15} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.6)}>
        <T x={515} y={580} size={15} fill={RED} weight={700}>
          −
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.7)}>
        <T x={685} y={580} size={15} fill={RED} weight={700}>
          −
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.8)}>
        <T x={900} y={415} size={15} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
    </Scene>
  );
}
