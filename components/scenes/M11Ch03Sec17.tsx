/**
 * M11 Ch03 · Section 17 — "Evaluating by reduction — basic to large angles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — four short examples in a 2×2 grid, applying Sec16's one rule.
 *
 * Beats (board_reveal_at_english [0, 3.33, 18.09, 22.02, 35.16, 40.87, 54.95, 59.73, 73.64]):
 *  0 Ex1 heading: sin 210° · 1 formula: = sin(180+30) = -sin30 = -1/2
 *  2 Ex2 heading: cos(-300°) · 3 formula: = cos300 = cos(360-60) = +cos60 = 1/2
 *  4 Ex3 heading: sin 1230° (reduce first) · 5 formula: 1230-1080=150, sin150=sin30=1/2
 *  6 Ex4 heading: tan 135° (co-function) · 7 formula: = tan(90+45) = -cot45 = -1
 *  8 red-margin: cross-check - 135°=180°-45° gives -tan45°=-1 too
 *
 * Layout plan — 2×2 grid, TL/TR y100-160, BL/BR y200-260, closer spans bottom:
 *  b0 | "Example 1..." (16,amber,w700)   | T st | x60..320  y104..119 (bl 110)
 *  b1 | formula (14)                     | T st | x60..326  y139..151 (bl 145)
 *  b2 | "Example 2..." (16,amber,w700)   | T st | x580..830 y104..119 (bl 110)
 *  b3 | formula (13)                     | T st | x580..892  y139..151 (bl 145)
 *  b4 | "Example 3..." (16,amber,w700)   | T st | x60..390  y204..219 (bl 210)
 *  b5 | formula (14)                     | T st | x60..340   y239..251 (bl 245)
 *  b6 | "Example 4..." (16,amber,w700)   | T st | x580..900 y204..219 (bl 210)
 *  b7 | formula (14)                     | T st | x580..818  y239..251 (bl 245)
 *  b8 | margin bar (red)                  | Draw | x60  y280..330
 *  b8 | closer 2 lines (14,red)           | T st | x76..600   y292..324
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Evaluating by Reduction", "Reduction Se Evaluate Karna")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — sin 210°", "Example 1 — sin 210°")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 320 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the reduction */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={14} fill={INK} anchor="start">
          sin210°=sin(180°+30°)=-sin30°=-1/2
        </T>
      </Fade>

      {/* beat 2 — Example 2 heading */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={580} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — cos(-300°)", "Example 2 — cos(-300°)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M 580 118 L 830 118" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.4)} />

      {/* beat 3 — the reduction */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={580} y={145} size={13} fill={INK} anchor="start">
          cos(-300°)=cos300°=cos(360°-60°)=+cos60°=1/2
        </T>
      </Fade>

      {/* beat 4 — Example 3 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={210} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — sin 1230° (reduce first)", "Example 3 — sin 1230° (pehle reduce)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 60 218 L 390 218" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.4)} />

      {/* beat 5 — the reduction */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={245} size={14} fill={INK} anchor="start">
          1230°-1080°=150°, sin150°=sin30°=1/2
        </T>
      </Fade>

      {/* beat 6 — Example 4 heading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={580} y={210} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — tan 135° (co-function case)", "Example 4 — tan 135° (co-function case)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M 580 218 L 900 218" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.4)} />

      {/* beat 7 — the reduction */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={580} y={245} size={14} fill={INK} anchor="start">
          tan135°=tan(90°+45°)=-cot45°=-1
        </T>
      </Fade>

      {/* beat 8 — red-margin: the cross-check */}
      <Draw on={beat >= 8} d="M 60 280 L 60 330" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={76} y={300} size={14} fill={RED} anchor="start">
          {t("Two routes agree: 135°=180°-45°", "Do routes agree: 135°=180°-45°")}
        </T>
        <T x={76} y={322} size={14} fill={RED} anchor="start" weight={700}>
          {t("gives -tan45°=-1 too.", "se bhi -tan45°=-1 milta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
