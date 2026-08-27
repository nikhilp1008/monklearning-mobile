/**
 * M11 Ch03 · Section 4 — "Converting an angle and finding a radius"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two independent examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 4.18, 18.6, 34.39, 38.23, 51.8, 67.41]):
 *  0 Ex1 heading: convert 40°20′ to radians
 *  1 fold minutes: 40°20′ = 40+20/60 = 121/3°
 *  2 formula: 121/3 × π/180 = 121π/540 rad (boxed)
 *  3 Ex2 heading: find the radius
 *  4 given + convert: 60° arc s=37.4cm; 60° = π/3
 *  5 formula chain: r = s/θ = 37.4/(π/3) = (112.2×7)/22 = 35.7 cm (boxed)
 *  6 red-margin guardrail: convert BEFORE using s=rθ
 *
 * Layout plan — left column (Ex1) x60-460, right column (Ex2) x580-820, guardrail full width:
 *  b0 | title (script 23, red)              | T mid | x210..870  y34..76  (bl 62)
 *  b0 | "Example 1..." (17,amber,w700)       | T st  | x60..355   y104..119 (bl 110)
 *  b0 | underline                            | Draw  | x60..355  y118
 *  b1 | "40°20′ = 40 + 20/60" (16)            | T st  | x60..270   y139..151 (bl 145)
 *  b1 | "= 121/3 degrees" (16,w700)           | T st  | x60..230   y166..178 (bl 172)
 *  b2 | chip "121/3×π/180=121π/540 rad"       | Chip  | x60..460   y205..253
 *  b3 | "Example 2..." (17,amber,w700)        | T st  | x580..818  y104..119 (bl 110)
 *  b3 | underline                             | Draw  | x580..818 y118
 *  b4 | "60° arc, s = 37.4 cm" (16)            | T st  | x580..788  y139..151 (bl 145)
 *  b4 | "convert: 60° = π/3" (16,w700)         | T st  | x580..732  y166..178 (bl 172)
 *  b5 | "r = s / θ" (17)                       | T st  | x580..680  y204..219 (bl 210)
 *  b5 | "= 37.4 / (π/3)" (17)                  | T st  | x580..750  y234..249 (bl 240)
 *  b5 | "= (112.2 × 7) / 22" (16)              | T st  | x580..810  y264..279 (bl 270)
 *  b5 | chip "r = 35.7 cm" (green)             | Chip  | x580..800  y295..339
 *  b6 | margin bar (red)                       | Draw  | x60  y450..480
 *  b6 | guardrail (15,red)                     | T st  | x76..980   y462..478 (bl 472)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} anchor="middle" script>
          {t("Converting an Angle and Finding a Radius", "Angle Convert Karo, Radius Nikalo")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — convert 40°20′ to radians", "Example 1 — 40°20′ ko radians mein")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 355 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — fold minutes into degrees */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={16} fill={INK} anchor="start">
          40°20′ = 40 + 20/60
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={172} size={16} fill={INK} anchor="start" weight={700}>
          {t("= 121/3 degrees", "= 121/3 degrees")}
        </T>
      </Fade>

      {/* beat 2 — the radian answer, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={205} w={400} h={48} fill={AMBER} textFill={INK} size={17} script={false}>
          121/3 × π/180 = 121π/540 rad
        </Chip>
      </Fade>

      {/* beat 3 — Example 2 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={580} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — find the radius", "Example 2 — radius nikalo")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 580 118 L 818 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.5)} />

      {/* beat 4 — given + convert */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={145} size={16} fill={INK} anchor="start">
          {t("60° arc, s = 37.4 cm", "60° arc, s = 37.4 cm")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={580} y={172} size={16} fill={INK} anchor="start" weight={700}>
          {t("convert: 60° = π/3", "convert: 60° = π/3")}
        </T>
      </Fade>

      {/* beat 5 — the formula chain, one step at a time */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={210} size={17} fill={INK} anchor="start">
          r = s / θ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={580} y={240} size={17} fill={INK} anchor="start">
          = 37.4 / (π/3)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={580} y={270} size={16} fill={INK} anchor="start">
          = (112.2 × 7) / 22
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip x={580} y={295} w={220} h={44} fill={GREEN} textFill="#FFFEFB" size={20} script={false}>
          r = 35.7 cm
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: convert before s = rθ */}
      <Draw on={beat >= 6} d="M 60 450 L 60 480" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={472} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Signature trap: forgetting to convert 60° to radians before s = rθ.",
            "Sabse badi galti: 60° ko radians mein convert kiye bina s = rθ mein daalna."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
