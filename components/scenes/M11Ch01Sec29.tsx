/**
 * M11 Ch01 · Section 29 — "Three sets and the include–exclude–include pattern"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 REPRESENT: 3-circle Venn drawn + labeled; center tally shows "3" (add all 3)
 *  2 center tally flips to "0" (subtract 3 pairwise overlaps)
 *  3 center tally flips to "1" (add triple back — everything counted once)
 *  4 formula: n(A∪B∪C) = ΣnA − Σn(pairs) + n(triple)
 *  5 "none" region labeled (8th region, outside all three)
 *  6 GUARDRAIL: signs alternate +,−,+ = inclusion–exclusion
 *
 * Layout plan (estimated render boxes; 3 circles A(360,270,85) B(480,270,85) C(420,370,85)):
 *  b1 | U box x230..610 y150..490          | Draw |
 *  b1 | "A"/"B"/"C" labels                  | T | x300,195 / x545,195 / x420,468
 *  b1 | region labels only-A/B/C, A∩B, A∩C, B∩C | T | scattered
 *  b1 | center tally "3"/"0"/"1" (gated beat===1/2/3) | T mid | x420 y310
 *  b1-3 | evolving caption (gated beat===1/2/3) | T mid | x420 y500
 *  b4 | formula (13)                        | T mid | x540 y525
 *  b5 | "none" label                        | T st  | x590 y475
 *  b6 | guardrail (red)                      | T mid | x540 y555
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD } from "./math-kit";

export default function M11Ch01Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const A = { cx: 360, cy: 270, r: 85 };
  const B = { cx: 480, cy: 270, r: 85 };
  const C = { cx: 420, cy: 370, r: 85 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("scaling to three sets", "teen sets tak scale karna")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: draw the 3-circle Venn */}
      <Draw on={beat >= 1} d={roundRectD(230, 150, 380, 340, 8)} stroke={MUTED} sw={1.8} delay={dl(1, 0.2)} dur={0.9} />
      <Draw on={beat >= 1} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(1, 1)} dur={0.6} />
      <Draw on={beat >= 1} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(1, 1.5)} dur={0.6} />
      <Draw on={beat >= 1} d={circleD(C.cx, C.cy, C.r)} stroke={INK} sw={2} delay={dl(1, 2)} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={250} y={175} size={13} fill={MUTED} anchor="start" weight={700}>U</T>
        <T x={295} y={195} size={16} fill={INK} weight={700}>A</T>
        <T x={545} y={195} size={16} fill={INK} weight={700}>B</T>
        <T x={420} y={470} size={16} fill={INK} weight={700}>C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={300} y={225} size={11} fill={INK}>{t("only A", "sirf A")}</T>
        <T x={545} y={225} size={11} fill={INK}>{t("only B", "sirf B")}</T>
        <T x={420} y={440} size={11} fill={INK}>{t("only C", "sirf C")}</T>
        <T x={420} y={230} size={11} fill={INK}>{"A∩B"}</T>
        <T x={335} y={335} size={11} fill={INK}>{"A∩C"}</T>
        <T x={505} y={335} size={11} fill={INK}>{"B∩C"}</T>
      </Fade>

      {/* dynamic center tally: 3 → 0 → 1, each its own crossfade */}
      <Fade on={beat === 1} delay={dl(1, 3.8)}>
        <T x={420} y={310} size={26} fill={RED} weight={800}>3</T>
      </Fade>
      <Fade on={beat === 2} delay={0}>
        <T x={420} y={310} size={26} fill={RED} weight={800}>0</T>
      </Fade>
      <Fade on={beat >= 3} delay={0}>
        <T x={420} y={310} size={26} fill={GREEN} weight={800}>1</T>
      </Fade>

      {/* evolving caption under the diagram */}
      <Fade on={beat === 1} delay={dl(1, 4.4)}>
        <T x={420} y={505} size={13} fill={INK} weight={600}>
          {t("add 3 sizes → pairs counted 2×, center counted 3×", "3 sizes jodo → pairs 2×, center 3×")}
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.3)}>
        <T x={420} y={505} size={13} fill={INK} weight={600}>
          {t("subtract 3 pairwise overlaps → center now 0×", "3 pairwise overlaps ghatao → center ab 0×")}
        </T>
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 0.3)}>
        <T x={420} y={505} size={13} fill={GREEN} weight={700}>
          {t("add triple back → center now 1× ✓ everyone counted once", "triple wapas jodo → center ab 1× ✓ sab ek baar")}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={545} size={13} fill={INK} weight={700}>
          {"n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(B∩C) − n(C∩A) + n(A∩B∩C)"}
        </T>
      </Fade>

      {/* beat 5 — the "none" region */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={595} y={475} size={12} fill={MUTED} anchor="start" weight={700}>
          {t("(none)", "(koi nahi)")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={572} size={14} fill={RED} script weight={700}>
          {t(
            "signs alternate +, −, +  →  include, exclude, include",
            "signs alternate +, −, +  →  include, exclude, include"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
