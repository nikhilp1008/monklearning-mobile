/**
 * M11 Ch03 · Section 26 — "Pitfalls with periods, ranges and asymptotes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 4 (Graphs and Periodicity of Trigonometric Functions).
 *
 * Beats (board_reveal_at_english [0, 4.27, 18.18, 25.51, 38.49, 51.54, 68.86]):
 *  0 subtitle: graph and period traps
 *  1 #1 (emphasised): multiplying instead of dividing for the period
 *  2 #2 using 2π for tangent (base period is π)
 *  3 #3 period of a sum = LCM of parts, watch for hidden shrink
 *  4 #4 forgetting the vertical shift in the range
 *  5 #5 swapping asymptote locations, #6 open vs closed endpoints (two mini-rows, one beat)
 *  6 red-margin closer: divide (don't multiply) for period; tan's period is π
 *
 * Layout plan — single numbered column, red circle + text per row (same pattern as Sec7/14/19):
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y84..99  (bl 92)
 *  b1 | circle #1 + text (16,w700)       | row   | cy128  text x90..820 y120..136 (bl 133)
 *  b2 | circle #2 + text (15)            | row   | cy172  text x90..600 y164..180 (bl 177)
 *  b3 | circle #3 + text (15)            | row   | cy216  text x90..800 y208..224 (bl 221)
 *  b4 | circle #4 + text (15)            | row   | cy260  text x90..700 y252..268 (bl 265)
 *  b5 | circle #5 + text (15)            | row   | cy304  text x90..650 y296..312 (bl 309)
 *  b5 | circle #6 + text (15)            | row   | cy340  text x90..620 y332..348 (bl 345)
 *  b6 | margin bar (red)                 | Draw  | x60  y415..470
 *  b6 | closer line1 (16,red,w700)       | T st  | x76..500   y427..443 (bl 439)
 *  b6 | closer line2 (14,red)            | T st  | x76..450   y451..465 (bl 461)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 16, weight: 700, en: "Multiplying instead of dividing: sin(bx) has period 2π/|b|, not 2π·b.", hi: "Divide ki jagah multiply: sin(bx) ka period 2π/|b| hai, 2π·b nahi." },
  { cy: 172, size: 15, weight: 600, en: "Using 2π for tangent - tan, cot have base period π.", hi: "Tangent ke liye 2π use karna - tan, cot ka base period π hai." },
  { cy: 216, size: 15, weight: 600, en: "Period of a sum = LCM of parts - watch for a hidden shrink.", hi: "Sum ka period = parts ka LCM - hidden shrink dekho." },
  { cy: 260, size: 15, weight: 600, en: "Forgetting the vertical shift: range of a sinx+d is [d-|a|,d+|a|].", hi: "Vertical shift bhoolna: a sinx+d ka range [d-|a|,d+|a|] hai." },
  { cy: 304, size: 15, weight: 600, en: "Swapping asymptotes: tan,sec at odd π/2; cot,csc at nπ.", hi: "Asymptotes swap karna: tan,sec odd π/2 par; cot,csc nπ par." },
  { cy: 340, size: 15, weight: 600, en: "Open vs closed endpoints: check if the inequality is strict.", hi: "Open vs closed endpoints: dekho inequality strict hai ya nahi." },
];

export default function M11Ch03Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const rowBeat = [1, 2, 3, 4, 5, 5];
  const rowDelay = [0, 0, 0, 0, 0, 0.6];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls With Periods, Ranges and Asymptotes", "Periods, Ranges aur Asymptotes ke Pitfalls")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Graph and period traps", "Graph aur period ke traps")}
        </T>
      </Fade>

      {/* beats 1-5 — numbered pitfall rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= rowBeat[i]} delay={dl(rowBeat[i], rowDelay[i])}>
          <Circle cx={58} cy={row.cy} r={13} fill={RED} />
          <T x={58} y={row.cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
            {i + 1}
          </T>
          <T x={90} y={row.cy + 5} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en, row.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 6 — red-margin closer: the golden rule */}
      <Draw on={beat >= 6} d="M 60 415 L 60 470" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={439} size={16} fill={RED} anchor="start" weight={700}>
          {t("Divide (don't multiply) for period;", "Period ke liye divide karo (multiply nahi);")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={461} size={14} fill={RED} anchor="start">
          {t("tangent's period is π.", "tangent ka period π hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
