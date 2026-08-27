/**
 * M11 Ch03 · Section 13 — "Range as the engine — a sin x + b cos x, and impossibility"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 4.86, 15.7, 24.75, 36.61, 43.52, 58.54, 73.47]):
 *  0 Ex5 heading: range of 5 sin x - 12 cos x + 3
 *  1 formula: R = √(5²+12²) = 13
 *  2 text: 5sinx-12cosx ∈ [-13,13]; +3 shifts the interval
 *  3 formula: f(x) ∈ [-10, 16] (boxed)
 *  4 Ex6 heading: when no solution can exist
 *  5 text: sinx=(a²+b²)/2ab, AM-GM ⇒ ≥1, but sinx≤1 (data bug: literal — → "-")
 *  6 formula: sinx=1 ⇒ x=π/2+2nπ, only if |a|=|b| (boxed)
 *  7 red-margin: bounded range turns a trig equation into an inequality constraint
 *
 * Layout plan — left column (Ex5) x60-460, right column (Ex6) x580-980:
 *  b0 | "Example 5..." (16,amber,w700)  | T st  | x60..430  y104..119 (bl 110)
 *  b1 | chip "R=√(5²+12²)=13"           | Chip  | x60..340  y140..182
 *  b2 | "5sinx-12cosx∈[-13,13];" (14)   | T st  | x60..320  y210..222 (bl 216)
 *  b2 | "+3 shifts the interval." (14) | T st  | x60..270   y233..245 (bl 239)
 *  b3 | chip "f(x)∈[-10,16]" (green)   | Chip  | x60..300  y260..302
 *  b4 | "Example 6..." (16,amber,w700) | T st  | x580..930 y104..119 (bl 110)
 *  b5 | "sinx=(a²+b²)/2ab" (14)        | T st  | x580..770  y139..151 (bl 145)
 *  b5 | "AM-GM ⇒ ≥1, but sinx≤1" (14)  | T st  | x580..800  y166..178 (bl 172)
 *  b6 | chip formula (sinx=1⇒...)      | Chip  | x580..1000  y200..244
 *  b7 | margin bar (red)               | Draw  | x580  y275..320
 *  b7 | closer (14,red) 2 lines        | T st  | x596..980   y287..309
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Range as the Engine, and Impossibility", "Range Hi Engine Hai, aur Impossibility")}
        </T>
      </Fade>

      {/* beat 0 — Example 5 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — range of 5 sin x - 12 cos x + 3", "Example 5 — 5 sin x - 12 cos x + 3 ki range")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 430 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — the amplitude */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={140} w={280} h={42} fill="#FCF4E0" stroke={INK} textFill={INK} size={17} script={false}>
          R = √(5²+12²) = 13
        </Chip>
      </Fade>

      {/* beat 2 — the interval, and the shift */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          5sinx - 12cosx ∈ [-13, 13];
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("+3 shifts the whole interval.", "+3 poora interval shift kar deta hai.")}
        </T>
      </Fade>

      {/* beat 3 — the final range, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={260} w={240} h={42} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          f(x) ∈ [-10, 16]
        </Chip>
      </Fade>

      {/* beat 4 — Example 6 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — when no solution can exist", "Example 6 — jab koi solution ho hi nahi sakta")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 930 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — the AM-GM squeeze */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={145} size={14} fill={INK} anchor="start">
          sinx = (a²+b²)/2ab
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={172} size={14} fill={INK} anchor="start" weight={700}>
          {t("AM-GM ⇒ ≥ 1, but sinx ≤ 1", "AM-GM ⇒ ≥ 1, par sinx ≤ 1")}
        </T>
      </Fade>

      {/* beat 6 — the only possible resolution, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={580} y={200} w={420} h={44} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          sinx=1 ⇒ x=π/2+2nπ, only if |a|=|b|
        </Chip>
      </Fade>

      {/* beat 7 — red-margin: the deep move */}
      <Draw on={beat >= 7} d="M 580 275 L 580 320" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={596} y={292} size={14} fill={RED} anchor="start">
          {t("The bounded range turns a trig equation", "Bounded range ek trig equation ko")}
        </T>
        <T x={596} y={314} size={14} fill={RED} anchor="start">
          {t("into an inequality constraint.", "inequality constraint bana deta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
