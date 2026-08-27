/**
 * M11 Ch08 · Section 75 — "The collapsing telescope: only the ends survive"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 8
 * (Telescoping). Uses base kit's crossD+dim (per task brief), no new
 * primitive.
 *
 * Beats (en [0, 11.86, 26.2, 40.79, 52.14, 61.95, 75.61, 89.77]):
 *  0 title (always-on)
 *  1 THE DEMO: chain V1..V(n+1), interior crossed out, ends survive
 *  2 formula: t_r = V_r - V_(r+1) ⇒ Σt_r = V_1 - V_(n+1)
 *  3 text: relay analogy
 *  4 text: partial fractions produce the difference-form
 *  5 formula: the classic partial-fraction example
 *  6 text: V_n method for products, rationalise for surds
 *  7 red-margin: the tool for non-polynomial t_n
 *
 * Layout plan:
 *  b1 | 6 boxes/slots y100..138 cx120/230/340/430(⋯)/520/630 ·
 *       crossD on V2,V3,Vn · caption bl165 · caption2 bl185
 *  b2 | text bl215 cx540
 *  b3 | text bl248 cx540
 *  b4 | text bl278 cx540
 *  b5 | text bl310 cx540
 *  b6 | text bl340 cx540
 *  b7 | red bar x76 y365..435 · text bl385/425 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, MUTED, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const boxW = 70;
  const boxH = 38;
  const boxY = 100;
  const cxList = [120, 230, 340, 520, 630];
  const labels = ["V₁", "V₂", "V₃", "V_n", "V_(n+1)"];
  const colors = [GREEN_DARK, MUTED, MUTED, MUTED, RED];
  const crossed = [false, true, true, true, false];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Telescoping: write each term as a difference of consecutive things", "Telescoping: har term ko consecutive cheezon ke difference se likho")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: chain, interior crossed out */}
      {cxList.map((cx, i) => (
        <React.Fragment key={i}>
          <Draw on={beat >= 1} delay={dl(1, 0.2 + i * 0.25)} d={roundRectD(cx - boxW / 2, boxY, boxW, boxH, 5)} stroke={colors[i]} sw={1.8} dur={0.4} />
          <Fade on={beat >= 1} delay={dl(1, 0.4 + i * 0.25)}>
            <T x={cx} y={124} size={13} fill={colors[i]} anchor="middle">{labels[i]}</T>
          </Fade>
          {crossed[i] && (
            <Draw on={beat >= 1} delay={dl(1, 0.6 + i * 0.25)} d={`M ${cx - boxW / 2 + 4} ${boxY + 4} L ${cx + boxW / 2 - 4} ${boxY + boxH - 4} M ${cx + boxW / 2 - 4} ${boxY + 4} L ${cx - boxW / 2 + 4} ${boxY + boxH - 4}`} stroke={MUTED} sw={1.6} dur={0.4} />
          )}
        </React.Fragment>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={430} y={124} size={16} fill={MUTED} anchor="middle">⋯</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={375} y={165} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("only the ends survive: Σ = V_1 - V_(n+1)", "sirf ends bachte hain: Σ = V_1 - V_(n+1)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={375} y={185} size={12} fill={INK_LIGHT} anchor="middle" script>
          {t("each term cancels part of the next, like a folding telescope", "har term agle ka hissa cancel karta hai, jaise ek folding telescope")}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={215} size={16} fill={INK} anchor="middle">
          {"t_r = V_r - V_(r+1)  ⇒  Σt_r = V_1 - V_(n+1)"}
        </T>
      </Fade>

      {/* beat 3 — relay analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={248} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "like a relay: only the starting baton and the finish-line position matter",
            "relay jaisa: sirf starting baton aur finish-line position matter karti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — partial fractions */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={278} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("for fractions, partial fractions produce the difference-form", "fractions ke liye, partial fractions difference-form dete hain")}
        </T>
      </Fade>

      {/* beat 5 — the classic example */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={310} size={17} fill={INK} anchor="middle">
          {"1/(r(r+1)) = 1/r - 1/(r+1)"}
        </T>
      </Fade>

      {/* beat 6 — V_n method / surds */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={340} size={14} fill={INK} anchor="middle" script>
          {t(
            "for products of integers, use the V_n method; for surds, rationalise",
            "integers ke products ke liye V_n method, surds ke liye rationalise"
          )}
        </T>
      </Fade>

      {/* beat 7 — red-margin: the tool for non-polynomial t_n */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 365 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={385} size={15} fill={RED} anchor="start" script>
          {t("this is the tool for non-polynomial t_n —", "yeh non-polynomial t_n ka tool hai —")}
        </T>
        <T x={96} y={425} size={15} fill={RED} anchor="start" script>
          {t("where Unit 7's formulas fail", "jahan Unit 7 ke formulas fail hote hain")}
        </T>
      </Fade>
    </Scene>
  );
}
