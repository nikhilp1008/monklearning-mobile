/**
 * M11 Ch13 · Section 9 — "Worked example: range and M.D. about the mean (marks)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Marks: 32,28,36,24,30. Range=36-24=12. x̄=(32+28+36+24+30)/5=150/5=30.
 * |x_i-x̄|: 2,2,6,6,0 → Σ=16 → M.D.(x̄)=16/5=3.2 marks. Check: 3.2 ≤ 12. ✓
 *
 * Beats (board_reveal_at_english [0, 18.18, 27.65, 39.08, 53.93, 70.83, 81.58]):
 *  0 anchor: heading + given
 *  1 represent: table skeleton (x_i column, 5 marks)
 *  2 represent: Range = 36 - 24 = 12 marks (ring max/min rows)
 *  3 represent: x̄ = Frac(32+28+36+24+30, 5) = 150/5 = 30 (compound numerator)
 *  4 represent: |x_i - x̄| column fills in (2,2,6,6,0), Σ=16
 *  5 land (boxed, high emphasis): MD(x̄) = Frac(2+2+6+6+0,5) = 16/5 = 3.2 marks
 *  6 sanity check (red-margin): unit + M.D. ≤ Range, checkD stamp
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 21, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 16, amber_dark)  | T mid | x540 y92
 *  b1 | table header + x_i col (5 rows)  | T mid | col x250 y140..270
 *  b2 | ring row3(36)/row4(24) + text    | Draw+T| x520 y174
 *  b3 | x̄ = Frac(...)/5 = 150/5 = 30     | Row/Frac | x520 y240
 *  b4 | |x_i-x̄| col (5 rows) + Σ=16      | T mid | col x400 y174..294
 *  b5 | boxed MD formula (Frac, green)   | Draw+Row/Frac | box x140..900 y325..395
 *  b6 | red bar + note + checkD          | Draw+T| x60 y412..430 · text y426
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, ringD,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, Overline, Frac } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

const COL_XI = 250;
const COL_DEV = 400;
const ROWS = [
  { y: 174, xi: 32, dev: 2 },
  { y: 198, xi: 28, dev: 2 },
  { y: 222, xi: 36, dev: 6 },
  { y: 246, xi: 24, dev: 6 },
  { y: 270, xi: 30, dev: 0 },
];

export default function M11Ch13Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} anchor="middle" script>
          {t("Worked Example: Range & M.D. About the Mean", "Worked Example: Range & Mean ke Baare Mein M.D.")}
        </T>
      </Fade>

      {/* beat 0 — anchor: the given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" script>
          {t("CBSE level: five test marks out of 40", "CBSE level: paanch test marks, 40 mein se")}
        </T>
      </Fade>

      {/* beat 1 — table: x_i column */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_XI} y={140} size={13} fill={MUTED} anchor="middle" weight={700}>x_i</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={`M 180 150 L 460 150`} stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 1} delay={dl(1, 0.8 + i * 0.25)}>
          <T x={COL_XI} y={r.y} size={14} fill={INK} anchor="middle">{r.xi}</T>
        </Fade>
      ))}

      {/* beat 2 — Range = 36 - 24 = 12 marks */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={ringD(COL_XI, 222, 20, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={ringD(COL_XI, 246, 20, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={520} y={174} size={16} fill={INK} anchor="start" weight={700}>
          {"Range = 36 - 24 = 12 marks"}
        </T>
      </Fade>

      {/* beat 3 — x̄ = (32+28+36+24+30)/5 = 150/5 = 30 */}
      <XBar on={beat >= 3} delay={dl(3, 0)} x={520} y={240} size={16} />
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={534} y={240} size={16} fill={INK} anchor="start" weight={700}>{"="}</T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 0.6)} x={615} y={240} size={16} numerator="32+28+36+24+30" denominator="5" width={135} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={695} y={240} size={16} fill={INK} anchor="start" weight={700}>{"= 150/5 = 30"}</T>
      </Fade>

      {/* beat 4 — |x_i - x̄| column + Σ=16 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={COL_DEV} y={140} size={13} fill={MUTED} anchor="middle" weight={700}>{"|x_i - x_bar|"}</T>
      </Fade>
      {ROWS.map((r, i) => (
        <Fade key={`d${r.y}`} on={beat >= 4} delay={dl(4, 0.4 + i * 0.3)}>
          <T x={COL_DEV} y={r.y} size={14} fill={INK} anchor="middle">{r.dev}</T>
        </Fade>
      ))}
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={`M 180 282 L 460 282`} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={COL_DEV} y={294} size={14} fill={GREEN} anchor="middle" weight={700}>{"Σ=16"}</T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): MD(x̄) = 16/5 = 3.2 marks */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(140, 325, 760, 70)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={170} y={360} size={17} fill={INK} anchor="start" weight={700}>MD(</T>
      </Fade>
      <XBar on={beat >= 5} delay={dl(5, 1)} x={210} y={360} size={17} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={228} y={360} size={17} fill={INK} anchor="start" weight={700}>{") ="}</T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 1.6)} x={300} y={360} size={17} numerator="2+2+6+6+0" denominator="5" width={95} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={370} y={360} size={17} fill={GREEN} anchor="start" weight={800}>
          {"= 16/5 = 3.2 marks"}
        </T>
      </Fade>

      {/* beat 6 — sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 412 L 60 430" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={426} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Carries the unit \"marks\", and 3.2 ≤ 12 (the range). Consistent.",
            "Unit \"marks\" hai, aur 3.2 ≤ 12 (range). Consistent."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={checkD(900, 420, 20)} stroke={GREEN} sw={3} dur={0.4} />
    </Scene>
  );
}
