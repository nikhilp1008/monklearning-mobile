/**
 * M11 Ch12 · Section 2 — "Two friends walking to the same shop"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept. board_content seq1 heading ("Two friends walking to the same
 * shop") -> always-on title, distinct from the DB `title` field ("One-sided limits and
 * when a limit exists") — the app chrome shows the latter, the board shows the former.
 *
 * board_reveal_at_english = [0, 12.97, 23.64, 34.99, 45.06, 59.56, 75.78, 93.53].
 * board_reveal_at_hinglish = [0, 13.48, 21.25, 31.4, 41.47, 52.91, 67.58, 86.19].
 *
 * Beats:
 *  0(title, always-on) | "Two friends walking to the same shop"
 *  1 | number-line metaphor builds: line, ring at a, two friend-dots + arrows converging
 *  2 | label the friends: LHL (left dot) / RHL (right dot)
 *  3 | formal notation: lim(x→a⁻) f(x)  and  lim(x→a⁺) f(x)  [two <Limit>]
 *  4 | THE RULE, boxed red, high emphasis: LHL = RHL (both finite) → limit exists
 *  5 | THE DIAGRAM: two mini graphs — agree (limit exists) vs jump (limit fails)
 *  6 | two warnings: f(a) irrelevant; oscillation (sin 1/x near 0) also kills it
 *  7 | guardrail: plain "lim" is two-sided by default — one friend isn't enough
 *
 * Layout plan:
 *  b1 | lane line                          | Draw   | x140..940 y140
 *  b1 | ring at a + label                  | Draw+T | ringD(540,140,14,12) / (540,166)
 *  b1 | friend dots L/R                    | circle | (280,140) / (800,140)
 *  b1 | converge arrows                    | Draw   | (300,140)->(500,140) / (780,140)->(580,140)
 *  b1 | caption                            | T mid  | x540 y190
 *  b2 | "LHL"/"RHL" labels                 | T mid  | (280,170) / (800,170)
 *  b3 | Limit x→a⁻ / "and" / Limit x→a⁺    | Limit+T| x420/540/660 y245
 *  b4 | boxed rule (red, high emph)        | Draw+T | box x270..810 y278..326
 *  b5 | LEFT mini graph (agree)            | Cartesian+curve | x220..400 y350..450
 *  b5 | RIGHT mini graph (jump)            | Cartesian+curve | x720..900 y350..450
 *  b6 | 2-line warnings + squiggle icon    | T+Draw | x60 y505/528, icon x870..942 y505..535
 *  b7 | red margin bar + guardrail line    | Draw+T | x60 y558..586, text (76,572)
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
  RED,
  ringD,
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, curveD, IntervalDot, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Two friends walking to the same shop", "Do dost, ek hi shop ki taraf")}
        </T>
      </Fade>

      {/* beat 1 — the lane, the point a, two friends converging */}
      <Draw on={beat >= 1} d="M140 140 L940 140" stroke={INK} sw={2} delay={dl(1, 0)} />
      <Draw on={beat >= 1} d={ringD(540, 140, 14, 12)} stroke={AMBER_DARK} sw={2} delay={dl(1, 0.6)} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={168} size={13} fill={MUTED} anchor="middle">
          a
        </T>
        <Circle cx={280} cy={140} r={6} fill={INK} />
        <Circle cx={800} cy={140} r={6} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} d={arrowD(300, 140, 500, 140)} stroke={INK} sw={2} delay={dl(1, 1.3)} />
      <Draw on={beat >= 1} d={arrowD(780, 140, 580, 140)} stroke={INK} sw={2} delay={dl(1, 1.9)} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={540} y={196} size={14} fill={INK} anchor="middle">
          {t("Same shop → the destination is unambiguous.", "Same shop → destination clear hai.")}
        </T>
      </Fade>

      {/* beat 2 — name the friends */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={280} y={122} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          LHL
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={800} y={122} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          RHL
        </T>
      </Fade>

      {/* beat 3 — formal notation */}
      <Limit on={beat >= 3} delay={dl(3, 0)} x={420} y={248} size={22} condition="x → a⁻" anchor="middle" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={245} size={17} fill={INK} anchor="middle">
          {t("and", "aur")}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.9)} x={660} y={248} size={22} condition="x → a⁺" anchor="middle" fill={INK} />

      {/* beat 4 — the central rule, boxed red */}
      <Draw
        on={beat >= 4}
        d="M290 278 L790 278 L790 322 L290 322 Z"
        stroke={RED}
        sw={2.2}
        delay={dl(4, 0)}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={306} size={17} fill={RED} anchor="middle" weight={800}>
          {t("LHL = RHL (both finite) → the limit exists", "LHL = RHL (dono finite) → limit exist karti hai")}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: agree vs jump */}
      <CartesianAxes on={beat >= 5} delay={dl(5, 0)} originX={290} originY={440} xLeft={220} xRight={400} yTop={350} yBottom={450} showTicks={false} />
      <Draw on={beat >= 5} d={curveD([{ x: 225, y: 420 }, { x: 255, y: 400 }, { x: 283, y: 383 }])} stroke={GREEN} sw={2.2} delay={dl(5, 0.7)} />
      <Draw on={beat >= 5} d={curveD([{ x: 297, y: 383 }, { x: 325, y: 400 }, { x: 360, y: 418 }])} stroke={GREEN} sw={2.2} delay={dl(5, 1.3)} />
      <IntervalDot on={beat >= 5} delay={dl(5, 1.9)} x={290} y={382} open r={5} stroke={GREEN} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={306} y={376} size={12} fill={MUTED} anchor="start">
          L
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(190, 460, 14)} stroke={GREEN} sw={2.4} delay={dl(5, 2.4)} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={210} y={465} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("limit exists", "limit exist karti hai")}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 5} delay={dl(5, 0)} originX={790} originY={440} xLeft={720} xRight={900} yTop={350} yBottom={450} showTicks={false} />
      <Draw on={beat >= 5} d={curveD([{ x: 720, y: 415 }, { x: 755, y: 405 }, { x: 783, y: 400 }])} stroke={RED} sw={2.2} delay={dl(5, 3.1)} />
      <Draw on={beat >= 5} d={curveD([{ x: 797, y: 370 }, { x: 825, y: 378 }, { x: 860, y: 392 }])} stroke={RED} sw={2.2} delay={dl(5, 3.7)} />
      <IntervalDot on={beat >= 5} delay={dl(5, 4.2)} x={790} y={398} open r={5} stroke={RED} />
      <IntervalDot on={beat >= 5} delay={dl(5, 4.4)} x={790} y={368} open r={5} stroke={RED} />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <Path d="M790 398 L790 368" stroke={RED} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
        <T x={805} y={402} size={11} fill={MUTED} anchor="start">
          L₁
        </T>
        <T x={805} y={364} size={11} fill={MUTED} anchor="start">
          L₂
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M700 452 L714 466 M714 452 L700 466" stroke={RED} sw={2.4} delay={dl(5, 5)} />
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={722} y={465} size={13} fill={RED} anchor="start" weight={700}>
          {t("limit fails", "limit fail ho jaati hai")}
        </T>
      </Fade>

      {/* beat 6 — two warnings */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={505} size={15} fill={INK} anchor="start" weight={600}>
          {t("f(a) is irrelevant to the limit.", "f(a) yahan irrelevant hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={60} y={528} size={15} fill={INK} anchor="start" weight={600}>
          {t("Oscillation (sin 1/x near 0) also kills it.", "Oscillation (sin 1/x, 0 ke paas) bhi limit khatam karta hai.")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        d="M866 520 Q878 505 890 520 Q902 535 914 520 Q926 505 938 520"
        stroke={AMBER_DARK}
        sw={2}
        delay={dl(6, 1.2)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={902} y={545} size={11} fill={AMBER_DARK} anchor="middle">
          {t("oscillates", "oscillate")}
        </T>
      </Fade>

      {/* beat 7 — closing guardrail */}
      <Draw on={beat >= 7} d="M60 558 L60 586" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={576} size={15} fill={RED} anchor="start" weight={700}>
          {t("Plain “lim” is two-sided — one friend isn’t enough.", "Plain “lim” two-sided hoti hai — ek dost kaafi nahin.")}
        </T>
      </Fade>
    </Scene>
  );
}
