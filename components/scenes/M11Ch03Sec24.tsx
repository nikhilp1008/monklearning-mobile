/**
 * M11 Ch03 · Section 24 — "Composite and identity periods"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 5.21, 24.41, 40.02, 49.58, 53.93, 67.5]):
 *  0 Ex4 heading: period of |sinx|+|cosx|
 *  1 each has period π, but |cosx|=|sin(x+π/2)| - roles swap
 *  2 formula: f(x+π/2)=f(x) ⇒ T=π/2
 *  3 red-margin: hidden shrink - sum's period smaller than either part
 *  4 Ex5 heading: period of sin²x
 *  5 formula: sin²x=(1-cos2x)/2, cos2x period=π
 *  6 text: sin²x period π, not 2π (data bug: literal — → "-")
 *
 * Layout plan — left column (Ex4) x60-500, right column (Ex5) x580-1020:
 *  b0 | "Example 4..." (15,amber,w700)  | T st | x60..430  y104..119 (bl 110)
 *  b1 | 2 lines (14)                    | T st | x60..460   y139..174
 *  b2 | chip "f(x+π/2)=f(x)⇒T=π/2"      | Chip | x60..400   y195..233
 *  b3 | margin bar (red)                | Draw | x60  y260..305
 *  b3 | closer 2 lines (13,red)         | T st | x76..470   y280..302
 *  b4 | "Example 5..." (15,amber,w700)  | T st | x580..870 y104..119 (bl 110)
 *  b5 | chip "sin²x=(1-cos2x)/2,..."    | Chip | x580..1020  y145..183
 *  b6 | 2 lines (14)                    | T st | x580..1000  y210..233
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Composite and Identity Periods", "Composite aur Identity Periods")}
        </T>
      </Fade>

      {/* beat 0 — Example 4 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — period of |sinx|+|cosx|", "Example 4 — |sinx|+|cosx| ka period")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 430 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — each has period π, but they swap roles */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={14} fill={INK} anchor="start">
          {t("|sinx|, |cosx| each have period π.", "|sinx|, |cosx| dono ka period π hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={14} fill={INK} anchor="start" weight={700}>
          {t("But |cosx|=|sin(x+π/2)| - roles swap.", "Par |cosx|=|sin(x+π/2)| - roles swap.")}
        </T>
      </Fade>

      {/* beat 2 — the shrunk period, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={195} w={340} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          f(x+π/2)=f(x) ⇒ T=π/2
        </Chip>
      </Fade>

      {/* beat 3 — red-margin: the hidden shrink */}
      <Draw on={beat >= 3} d="M 60 260 L 60 305" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={280} size={13} fill={RED} anchor="start">
          {t("Hidden shrink: sum's period <", "Hidden shrink: sum ka period <")}
        </T>
        <T x={76} y={302} size={13} fill={RED} anchor="start" weight={700}>
          {t("either part - don't just take the larger.", "kisi bhi part se - bada wala mat lo.")}
        </T>
      </Fade>

      {/* beat 4 — Example 5 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — period of sin²x", "Example 5 — sin²x ka period")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 870 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.4)} />

      {/* beat 5 — the power-reduction identity, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={580} y={145} w={440} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          sin²x=(1-cos2x)/2, cos2x period=π
        </Chip>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={580} y={210} size={14} fill={INK} anchor="start">
          {t("So sin²x has period π, not 2π -", "So sin²x ka period π hai, 2π nahi -")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={580} y={233} size={14} fill={INK} anchor="start" weight={700}>
          {t("squaring halves the period here.", "squaring ne yahan period aadha kar diya.")}
        </T>
      </Fade>
    </Scene>
  );
}
