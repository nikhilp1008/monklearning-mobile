/**
 * M11 Ch03 · Section 37 — "The two great dangers: dividing and squaring"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — two dangers, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 6.14, 17.41, 24.23, 36.35, 46.59, 65.19, 73.47]):
 *  0 heading: losing roots by dividing
 *  1 text: cancel cosθ from sinθcosθ=cosθ, throws away cosθ=0 solutions
 *  2 red-margin (high): cancelling assumes non-zero - factor, never divide
 *  3 heading: gaining roots by squaring
 *  4 text: squaring can make false look true, (-1)²=1²
 *  5 formula: sinx+cosx=1 → square → sin2x=0, but x=π fails original
 *  6 text: every solution from squaring must be checked back
 *  7 red-margin: signature traps - conceptual, not careless
 *
 * Layout plan — left column (dividing) x60-500, right column (squaring) x580-1020:
 *  b0 | "Losing roots..." (16,amber,w700) | T st | x60..380  y104..119 (bl 110)
 *  b1 | 2 lines (13)                      | T st | x60..440   y139..174
 *  b2 | margin bar (red)                  | Draw | x60  y195..245
 *  b2 | 2 lines (13,red)                  | T st | x76..460   y215..237
 *  b3 | "Gaining roots..." (16,amber,w700)| T st | x580..900 y104..119 (bl 110)
 *  b4 | 2 lines (13)                      | T st | x580..940   y139..174
 *  b5 | chip                              | Chip | x580..960   y185..221
 *  b5 | text (13,red,w700)                | T st | x580..900   y240..254 (bl 246)
 *  b6 | 2 lines (13)                      | T st | x580..940   y264..286
 *  b7 | margin bar (red)                  | Draw | x580  y300..345
 *  b7 | 2 lines (13,red)                  | T st | x596..1000   y320..342
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("The Two Great Dangers: Dividing and Squaring", "Do Bade Dangers: Dividing aur Squaring")}
        </T>
      </Fade>

      {/* beat 0 — losing roots heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Losing roots by dividing", "Divide karke roots khona")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 380 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the example */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">
          sinθcosθ=cosθ, cancel cosθ →
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={13} fill={INK} anchor="start" weight={700}>
          {t("throws away every cosθ=0 solution!", "cosθ=0 wale solutions phenk deta hai!")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: factor never divide */}
      <Draw on={beat >= 2} d="M 60 195 L 60 245" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={76} y={215} size={13} fill={RED} anchor="start" weight={700}>
          {t("Cancelling assumes non-zero -", "Cancel karna non-zero maanta hai -")}
        </T>
        <T x={76} y={237} size={13} fill={RED} anchor="start">
          {t("but it can be zero. FACTOR, never divide.", "par wo zero ho sakta. FACTOR karo, divide nahi.")}
        </T>
      </Fade>

      {/* beat 3 — gaining roots heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={580} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Gaining roots by squaring", "Square karke roots paana")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 580 118 L 900 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — why squaring is dangerous */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={145} size={13} fill={INK} anchor="start">
          {t("Squaring can make FALSE look TRUE,", "Squaring FALSE ko TRUE dikha sakta hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={580} y={168} size={13} fill={INK} anchor="start" weight={700}>
          since (-1)²=1².
        </T>
      </Fade>

      {/* beat 5 — the worked counter-example */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={580} y={185} w={380} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          sinx+cosx=1 →(square)→ sin2x=0
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={580} y={246} size={13} fill={RED} anchor="start" weight={700}>
          {t("but x=π fails the original!", "par x=π original mein fail hota!")}
        </T>
      </Fade>

      {/* beat 6 — check back in the original */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={580} y={270} size={13} fill={INK} anchor="start">
          {t("Every solution from squaring must be", "Squaring se aaya har solution")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={580} y={292} size={13} fill={INK} anchor="start" weight={700}>
          {t("checked back in the original.", "original mein wapas check hona chahiye.")}
        </T>
      </Fade>

      {/* beat 7 — red-margin closer */}
      <Draw on={beat >= 7} d="M 580 312 L 580 357" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={596} y={332} size={13} fill={RED} anchor="start" weight={700}>
          {t("Signature traps -", "Signature traps -")}
        </T>
        <T x={596} y={354} size={13} fill={RED} anchor="start">
          {t("conceptual gaps, not careless slips.", "samajh ki kami, careless slip nahi.")}
        </T>
      </Fade>
    </Scene>
  );
}
