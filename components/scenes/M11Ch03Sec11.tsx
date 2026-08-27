/**
 * M11 Ch03 · Section 11 — "The signature board problem — find the other five"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 5.55, 22.95, 33.11, 48.9, 52.65, 67.41]):
 *  0 Ex1 heading: sin x = 3/5, x in QII
 *  1 magnitude: cos²x = 1-9/25 = 16/25 ⇒ cos x = ±4/5
 *  2 red-margin (high): the sign decision - QII ⇒ cosine negative
 *  3 formula: all five values (two boxed rows)
 *  4 Ex2 heading: quadrantal evaluation
 *  5 formula: sin(3π/2)+cosπ-tanπ = -1+(-1)-0 = -2 (boxed)
 *  6 red-margin: writing cos x = +4/5 is the most common mistake
 *
 * Layout plan — left column (Ex1) x60-460, right column (Ex2) x580-980:
 *  b0 | "Example 1..." (16,amber,w700)   | T st  | x60..430  y104..119 (bl 110)
 *  b1 | "cos²x=1-9/25=16/25" (15)        | T st  | x60..320  y139..151 (bl 145)
 *  b1 | "cos x = ±4/5" (15,w700)         | T st  | x60..220  y166..178 (bl 172)
 *  b2 | margin bar (red)                 | Draw  | x60  y195..225
 *  b2 | sign note (14,red,w700)          | T st  | x76..380  y208..220 (bl 212)
 *  b3 | chip row1 (5 values pt1)         | Chip  | x60..460  y245..281
 *  b3 | chip row2 (5 values pt2)         | Chip  | x60..460  y291..327
 *  b4 | "Example 2..." (16,amber,w700)   | T st  | x580..900 y104..119 (bl 110)
 *  b5 | chip formula                     | Chip  | x580..900  y150..194
 *  b6 | margin bar (red)                 | Draw  | x580  y230..280
 *  b6 | mistake note (14,red)            | T st  | x596..900  y242..268 (2 lines)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("The Signature Board Problem", "Sabse Common Board Problem")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — sin x = 3/5, x in QII", "Example 1 — sin x = 3/5, x QII mein")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 430 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — magnitude first */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={15} fill={INK} anchor="start">
          cos²x = 1 - 9/25 = 16/25
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={172} size={15} fill={INK} anchor="start" weight={700}>
          cos x = ±4/5
        </T>
      </Fade>

      {/* beat 2 — the sign decision, red-margin */}
      <Draw on={beat >= 2} d="M 60 195 L 60 225" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={76} y={212} size={14} fill={RED} anchor="start" weight={700}>
          {t("QII: cosine is negative ⇒ take the minus.", "QII: cosine negative hai ⇒ minus lo.")}
        </T>
      </Fade>

      {/* beat 3 — the five values, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={245} w={400} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          cos x=-4/5, tan x=-3/4, cot x=-4/3
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={291} w={400} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          sec x=-5/4, csc x=5/3
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — quadrantal evaluation", "Example 2 — quadrantal evaluation")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 900 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — the quadrantal computation, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={580} y={150} w={320} h={44} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          sin(3π/2)+cosπ-tanπ = -1-1-0 = -2
        </Chip>
      </Fade>

      {/* beat 6 — the most common mistake */}
      <Draw on={beat >= 6} d="M 580 230 L 580 280" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={596} y={247} size={14} fill={RED} anchor="start" weight={700}>
          {t("Writing cos x = +4/5 here is", "Cos x = +4/5 likhna yahan")}
        </T>
        <T x={596} y={269} size={14} fill={RED} anchor="start" weight={700}>
          {t("the most common board mistake.", "sabse common board mistake hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
