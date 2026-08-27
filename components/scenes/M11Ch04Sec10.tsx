/**
 * M11 Ch04 · Section 10 — "Worked (JEE Advanced): big sums and powers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced) — two sub-problems, each its
 * own visual cluster separated by a drawn divider rule. The JSON's
 * `\underbrace{(1+\cdots+1)}_{97}` has no 2-D brace primitive (see
 * SCENE_AUTHORING_MATHS notation rules) — substituted with a ringed callout
 * + a short arrow up to a "97 copies of 1" label, per spec.
 *
 * Beats (board_reveal_at_english [0, 7.94, 15.53, 27.48, 41.81, 56.23, 66.9, 78.17]):
 *  0 heading: advanced — collapse with the period-4 trick
 *  1 Problem A given: S = Σ i^(n!), n = 1 to 100
 *  2 explain: for n≥4, n! is a multiple of 4, so i^(n!)=1
 *  3 first three terms: i^1!=i, i^2!=i²=-1, i^3!=i⁶=-1
 *  4 THE underbrace beat: S=(i-1-1)+⟨ring: 1+⋯+1⟩=95+i, ring labeled "97 copies of 1"
 *  ---- divider ----
 *  5 Problem B given: least positive m with ((1+i)/(1-i))^m = 1
 *  6 simplify: (1+i)/(1-i) = (1+i)²/2 = 2i/2 = i
 *  7 verdict (red-margin), green box: i^m=1; least positive m=4
 *
 * Layout plan:
 *  b0 | heading (17,amber_dark)          | T mid   | x540 y102
 *  b0 | underline                         | Draw    | x420..660 y118
 *  b1 | MathLine given                    | T       | x424 y150
 *  b2 | MathLine explain (14,ink)         | T       | x391 y190
 *  b3 | MathLine first terms (15,ink)     | T       | x436 y230
 *  b4 | pieces A/B/C + ring on B + label  | T+Draw  | y295, ring cx549.9 cy291.2 rx64 ry21, label y350
 *  —  | divider rule                      | Draw    | x150..930 y385
 *  b5 | MathLine given (15,ink)           | T       | x393 y422
 *  b6 | text (15,ink)                     | T mid   | x540 y462
 *  b7 | MathLine verdict + green box      | T+Draw  | x404 y530, box x360..720 y505..545
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Part = string | { sup: string };
function MathLine({
  x,
  y,
  size,
  fill,
  parts,
  weight = 700,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  parts: Part[];
  weight?: number;
}) {
  let cx = x;
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") {
          const w = p.length * size * 0.58;
          const el = (
            <T key={i} x={cx} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          );
          cx += w;
          return el;
        }
        const es = size * 0.62;
        const w = p.sup.length * es * 0.78 + 4;
        const el = (
          <T key={i} x={cx} y={y - size * 0.42} size={es} fill={fill} anchor="start" weight={weight}>
            {p.sup}
          </T>
        );
        cx += w;
        return el;
      })}
    </>
  );
}

export default function M11Ch04Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("JEE Advanced: Big Sums and Powers", "JEE Advanced: Bade Sums aur Powers")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Collapse it with the period-4 trick", "Period-4 trick se collapse karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — Problem A given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <MathLine x={424} y={150} size={17} fill={INK} parts={["S = Σ i", { sup: "n!" }, "   (n = 1 to 100)"]} />
      </Fade>

      {/* beat 2 — explain */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <MathLine
          x={391}
          y={190}
          size={14}
          fill={INK}
          parts={[
            t("For n≥4, n! is a multiple of 4, so i", "n≥4 ke liye n! four ka multiple hai, to i"),
            { sup: "n!" },
            " = 1",
          ]}
        />
      </Fade>

      {/* beat 3 — first three terms */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <MathLine
          x={436}
          y={230}
          size={15}
          fill={INK}
          parts={["i", { sup: "1!" }, "=i,  i", { sup: "2!" }, "=i²=-1,  i", { sup: "3!" }, "=i⁶=-1"]}
        />
      </Fade>

      {/* beat 4 — THE underbrace beat: ring + label instead of a brace */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={480} y={295} size={16} fill={INK} anchor="end" weight={700}>S = (i - 1 - 1) + </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={500} y={295} size={16} fill={INK} anchor="start" weight={700}>(1 + ⋯ + 1)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={610} y={295} size={16} fill={GREEN_DARK} anchor="start" weight={700}> = 95 + i</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={ringD(549.9, 291.16, 63.9, 20.72)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={arrowD(549.9, 345, 549.9, 322)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={549.9} y={350} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("97 copies of 1", "1 ki 97 copies")}
        </T>
      </Fade>

      {/* divider between the two problems */}
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d="M 150 385 L 930 385" stroke={MUTED} sw={1.4} dur={0.6} />

      {/* beat 5 — Problem B given */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <MathLine
          x={393}
          y={422}
          size={15}
          fill={INK}
          parts={[t("Least positive m:  ((1+i)/(1-i))", "Least positive m:  ((1+i)/(1-i))"), { sup: "m" }, " = 1"]}
        />
      </Fade>

      {/* beat 6 — simplify */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={462} size={15} fill={INK} anchor="middle" weight={700}>
          (1+i)/(1-i) = (1+i)²/2 = 2i/2 = i
        </T>
      </Fade>

      {/* beat 7 — verdict, boxed green */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <MathLine x={404} y={530} size={16} fill={GREEN_DARK} parts={["So i", { sup: "m" }, " = 1;  least positive m = 4"]} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={roundRectD(360, 505, 360, 40, 10)} stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
