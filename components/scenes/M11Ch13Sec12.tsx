/**
 * M11 Ch13 · Section 12 — "Worked example: why the median minimises absolute deviation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced).
 *
 * Observations 7,11,13,16,20,24 (n=6). Outside-in pairing: (7,24) gap=17,
 * (11,20) gap=9, (13,16) gap=3. For any a in [13,16], S(a)=17+9+3=29 — the
 * whole median interval minimises S(a), not a single point.
 *
 * Beats (board_reveal_at_english [0, 24.83, 34.99, 49.92, 69.12, 85.42, 101.8]):
 *  0 anchor: heading
 *  1 represent: observations on a real linear-scaled number line
 *  2 represent: THE DIAGRAM — outside-in pairing arcs + shaded median interval
 *  3 represent: |a-7|+|24-a| = 17 for a∈[7,24] (constant)
 *  4 land (boxed, high emphasis): S(a) = 17+9+3 = 29 for every a∈[13,16]
 *  5 explain: leave [13,16] and S(a) strictly increases
 *  6 note (red-margin): minimiser is the whole interval; infinitely many a
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y82
 *  b1 | given (13, ink)                  | T mid | x540 y106
 *  b1 | axis (y280) + 6 dots + labels    | Draw+T| x150..950 y255/280
 *  b2 | outer arc (purple) + label       | Draw+T| (150,270)..(950,270) peak y180
 *  b2 | inner arc (blue) + label         | Draw+T| (338,270)..(762,270) peak y215
 *  b2 | median interval shade + label    | Draw+T| x432..574 y272..288 · label y308
 *  b3 | formula (14, ink)                | T mid | x540 y335
 *  b4 | boxed S(a)=29 (green, high)      | Draw+T| box x290..790 y358..404
 *  b5 | explain line (13, ink)           | T mid | x540 y428
 *  b6 | red bar + note (13)              | Draw+T| x60 y452..478 · text y460/478
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { axisD, roundRectD } from "./math-kit";

const PURPLE = "#8E44AD";
const BLUE = "#2980B9";

const xForV = (v: number) => 150 + ((v - 7) / 17) * 800;
const POINTS = [7, 11, 13, 16, 20, 24];

export default function M11Ch13Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const x7 = xForV(7);
  const x11 = xForV(11);
  const x13 = xForV(13);
  const x16 = xForV(16);
  const x20 = xForV(20);
  const x24 = xForV(24);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Why the Median Minimises Absolute Deviation", "Median Absolute Deviation Kyun Minimise Karta Hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={82} size={14} fill={AMBER_DARK} anchor="middle" script>
          {"JEE Advanced: minimise S(a) = Σ|x_i - a|"}
        </T>
      </Fade>

      {/* beat 1 — the observations on a real number line */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={106} size={13} fill={INK} anchor="middle">
          {t("Observations 7, 11, 13, 16, 20, 24 (sorted, n = 6, even).", "Observations 7, 11, 13, 16, 20, 24 (sorted, n = 6, even).")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={axisD(150, 950, 280)} stroke={INK} sw={2} dur={0.8} />
      {POINTS.map((v, i) => (
        <Fade key={v} on={beat >= 1} delay={dl(1, 1.1 + i * 0.2)}>
          <Circle cx={xForV(v)} cy={280} r={5} fill={INK} />
          <T x={xForV(v)} y={255} size={13} fill={INK} anchor="middle">{v}</T>
        </Fade>
      ))}

      {/* beat 2 — THE DIAGRAM: outside-in pairing + median interval */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0)}
        d={`M ${x7} 270 Q 550 180 ${x24} 270`}
        stroke={PURPLE}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={550} y={158} size={12} fill={PURPLE} anchor="middle">
          {t("pair (7,24): gap 17", "pair (7,24): gap 17")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.3)}
        d={`M ${x11} 270 Q 550 215 ${x20} 270`}
        stroke={BLUE}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={550} y={203} size={12} fill={BLUE} anchor="middle">
          {t("pair (11,20): gap 9", "pair (11,20): gap 9")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Rect x={x13} y={272} width={x16 - x13} height={16} fill={AMBER_DARK} opacity={0.35} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={(x13 + x16) / 2} y={308} size={12} fill={RED} anchor="middle" weight={700}>
          {t("median interval [13,16]", "median interval [13,16]")}
        </T>
      </Fade>

      {/* beat 3 — outer pair is constant on [7,24] */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={335} size={14} fill={INK} anchor="middle">
          {"|a-7| + |24-a| = 17  for any a∈[7,24]  (constant)"}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): S(a) = 29 */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(290, 358, 500, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={387} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"S(a) = 17 + 9 + 3 = 29   for every a ∈ [13,16]"}
        </T>
      </Fade>

      {/* beat 5 — explain: outside the interval, S(a) increases */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={428} size={13} fill={INK} anchor="middle">
          {t(
            "Leave [13,16] and the innermost pair stops cancelling — S(a) strictly increases.",
            "Chhodo [13,16] toh innermost pair cancel hona band — S(a) strictly badhta hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — note: the minimiser is the whole interval */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 452 L 60 488" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={462} size={13} fill={RED} anchor="start" weight={700}>
          {t("Minimiser = the whole interval [13,16]; median 14.5 sits inside.", "Minimiser = poora interval [13,16]; median 14.5 andar baitha hai.")}
        </T>
        <T x={76} y={481} size={13} fill={RED} anchor="start" weight={700}>
          {t("\"How many a?\" → infinitely many.", "\"Kitne a?\" → infinitely many.")}
        </T>
      </Fade>
    </Scene>
  );
}
