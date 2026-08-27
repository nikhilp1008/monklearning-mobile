/**
 * M11 Ch05 · Section 18 — "The key forms: general inequality, intercepts, shoelace"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas: assemble the reference
 * card band by band. Shoelace uses numeral subscripts (₁₂₃, confirmed
 * native/safe) for the concrete 3-vertex case rather than Σ with i/i+1
 * bounds (no 2-D stacked-bounds primitive exists yet).
 *
 * Beats (en [0,8.7,26.03,35.16,45.31,54.02,73.22], hi
 * [0,8.02,23.89,35.58,45.14,53.67,71.17]):
 *  0 heading — "FORMULAS" label + underline
 *  1 formula (high): ax+by (≤,≥,<,>) c, (a,b)≠(0,0)
 *  2 text: draw the boundary by plotting its two intercepts
 *  3 formula: (c/a, 0) and (0, c/b)
 *  4 text: area of a bounded polygon — cyclic order + shoelace
 *  5 formula (high): Area = ½|x₁y₂−x₂y₁+x₂y₃−x₃y₂+x₃y₁−x₁y₃|
 *  6 note (red-margin, high): cyclic order first — mis-ordered ruins area
 *
 * Layout plan:
 *  b0 | "FORMULAS" + underline    | T/Draw | bl 100 / y107
 *  b1 | formula1 (24,ink,w800)    | T mid  | bl 145
 *  b1 | caveat (13,muted)         | T mid  | bl 178
 *  b2 | caption (15,ink,scr)      | T mid  | bl 220
 *  b3 | formula2 (19,ink,w700)    | T mid  | bl 262
 *  b4 | caption2 (15,ink,scr)     | T mid  | bl 310
 *  b5 | formula3/shoelace (18,w700)| T mid | bl 350
 *  b6 | boxed guardrail (16,red)  | Chip   | x140..940 y400..454
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch05Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("forms to keep on hand: boundary, intercepts, shoelace", "yaad rakhne wale forms: boundary, intercepts, shoelace")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          FORMULAS
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(495, 107, 585, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — the general inequality */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={24} fill={INK} weight={800}>
          ax + by (≤, ≥, &lt;, &gt;) c
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={178} size={13} fill={MUTED}>
          (a, b) ≠ (0, 0)
        </T>
      </Fade>

      {/* beat 2 — draw the boundary via intercepts */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={220} size={15} fill={INK} script>
          {t("draw the boundary ax+by=c by plotting its two intercepts", "boundary ax+by=c ko dono intercepts se draw karo")}
        </T>
      </Fade>

      {/* beat 3 — the intercept formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={262} size={19} fill={INK} weight={700}>
          (c/a, 0) {t("and", "aur")} (0, c/b)
        </T>
      </Fade>

      {/* beat 4 — shoelace setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={310} size={15} fill={INK} script>
          {t(
            "area of a bounded polygon: cyclic order, then shoelace",
            "bounded polygon ka area: cyclic order, phir shoelace"
          )}
        </T>
      </Fade>

      {/* beat 5 — the shoelace formula (concrete 3-vertex case) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={350} size={18} fill={INK} weight={700}>
          Area = ½ |x₁y₂ − x₂y₁ + x₂y₃ − x₃y₂ + x₃y₁ − x₁y₃|
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={140} y={400} w={800} h={54} fill={CREAM} stroke={RED} textFill={RED} size={16}>
          {t(
            "list vertices in cyclic order before shoelace — a mis-ordered vertex ruins the area",
            "shoelace se pehle vertices cyclic order mein likho — galat order area barbaad kar deta hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
