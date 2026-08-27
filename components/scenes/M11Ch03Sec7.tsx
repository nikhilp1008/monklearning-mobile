/**
 * M11 Ch03 · Section 7 — "The pitfalls that quietly cost marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 1 (Angle Measurement and Radians).
 *
 * Beats (board_reveal_at_english [0, 5.8, 26.71, 39.42, 54.61, 70.31, 83.97]):
 *  0 subtitle: "Traps in angle measurement"
 *  1 #1 (emphasised): degrees inside s=rθ/A=½r²θ - convert first!
 *  2 #2 flipping the conversion factor
 *  3 #3 radian is dimensionless (data bug: literal — → "-")
 *  4 #4 DMS is base-60
 *  5 #5 clockwise = negative, #6 check calculator mode (two mini-rows, one beat)
 *  6 red-margin closer: sanity check, 1 rad ≈ 57°
 *
 * Layout plan — single numbered column, red circle + text per row:
 *  b0 | subtitle (15,amber)              | T mid | x330..750  y84..99  (bl 92)
 *  b1 | circle #1 + text (16,w700)       | row   | cy128  text x90..640 y120..136 (bl 133)
 *  b2 | circle #2 + text (15)            | row   | cy172  text x90..637 y164..180 (bl 177)
 *  b3 | circle #3 + text (15)            | row   | cy216  text x90..645 y208..224 (bl 221)
 *  b4 | circle #4 + text (15)            | row   | cy260  text x90..470 y252..268 (bl 265)
 *  b5 | circle #5 + text (15)            | row   | cy304  text x90..300 y296..312 (bl 309)
 *  b5 | circle #6 + text (15)            | row   | cy340  text x90..560 y332..348 (bl 345)
 *  b6 | margin bar (red)                 | Draw  | x60  y415..470
 *  b6 | closer line1 (16,red,w700)       | T st  | x76..330   y427..443 (bl 439)
 *  b6 | closer line2 (14,red)            | T st  | x76..680   y451..465 (bl 461)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 16, weight: 700, en: "Degrees inside s=rθ or A=½r²θ - convert to radians first!", hi: "s=rθ ya A=½r²θ mein degrees mat daalo - pehle radians!" },
  { cy: 172, size: 15, weight: 600, en: "Flipping the factor: °→rad uses π/180, rad→° uses 180/π.", hi: "Factor ulta mat karo: °→rad = π/180, rad→° = 180/π." },
  { cy: 216, size: 15, weight: 600, en: "Radian is dimensionless - don't cancel it like a unit; ω=θ/t gives s⁻¹.", hi: "Radian dimensionless hai - unit ki tarah cancel mat karo; ω=θ/t se s⁻¹ milta hai." },
  { cy: 260, size: 15, weight: 600, en: "DMS is base-60: 0.5° = 30′ (not 50′); 20′ = 1/3°.", hi: "DMS base-60 hai: 0.5° = 30′ (50′ nahi); 20′ = 1/3°." },
  { cy: 304, size: 15, weight: 600, en: "Clockwise = negative angle.", hi: "Clockwise = negative angle." },
  { cy: 340, size: 15, weight: 600, en: "Check calculator's DEG vs RAD mode first.", hi: "Calculator ka DEG vs RAD mode pehle check karo." },
];

export default function M11Ch03Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  // rows 0-3 map to beats 1-4 one-to-one; rows 4,5 (#5,#6) both belong to beat 5
  const rowBeat = [1, 2, 3, 4, 5, 5];
  const rowDelay = [0, 0, 0, 0, 0, 0.6];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={25} fill={RED} anchor="middle" script>
          {t("The Pitfalls That Quietly Cost Marks", "Pitfalls Jo Chupke Se Marks Le Jaate Hain")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Traps in angle measurement", "Angle measurement ke traps")}
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

      {/* beat 6 — red-margin closer: the sanity check */}
      <Draw on={beat >= 6} d="M 60 415 L 60 470" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={439} size={16} fill={RED} anchor="start" weight={700}>
          {t("Sanity check: 1 rad ≈ 57°.", "Sanity check: 1 rad ≈ 57°.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={461} size={14} fill={RED} anchor="start">
          {t(
            "A huge radian answer for a small angle means you flipped the factor.",
            "Chhote angle ke liye bada radian answer matlab factor flip ho gaya."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
