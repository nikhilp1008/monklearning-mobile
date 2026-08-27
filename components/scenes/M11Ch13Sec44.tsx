/**
 * M11 Ch13 · Section 44 — "Chapter 13: rapid-recall cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — FINAL section of the chapter. board_content's seq2 is a
 * genuine `type: diagram` (a 4-box refinement-ladder SVG) — per "diagram beats formula"
 * this is hand-translated into real boxes+arrows (roundRectD + arrowD/Draw), not flattened
 * to text: Range → Mean Deviation → Variance → Standard Deviation, last box highlighted
 * red (the "smoothest, most sophisticated" measure), boxes/arrows drawn one at a time (the
 * "one hand" rule), closing on the same muted caption as the source SVG.
 *
 * Beats (board_reveal_at_english [0, 12.12, 28.16, 46.25, 60.5, 79.96, 94.04]):
 *  0 anchor: heading
 *  1 represent (diagram): the refinement ladder — Range → M.D. → Variance → SD
 *  2 note (red-margin, high): the two minimisation crowns — median/mean-deviation, mean/mean-square
 *  3 represent: frequency-table divisor is always N = ∑f_i
 *  4 represent: transformation mnemonic — add doesn't matter, multiply scales
 *  5 represent: consistency — lower C.V. wins; same mean skips C.V.
 *  6 land (red-margin, high): the reverse-problem kit + sanity trio
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 17, red, always-on)     | T mid | x540 y48
 *  b0 | heading (script 13, amber_dark)  | T mid | x540 y72
 *  b1 | 4 boxes + 3 arrows + caption     | Draw+T| boxes y96..146 · caption y170
 *  b2 | red bar + text (13)              | Draw+T| x60 y188..206 · text y200
 *  b3 | text (13, ink)                   | T mid | x540 y226
 *  b4 | text (13, ink)                   | T mid | x540 y250
 *  b5 | text (13, ink)                   | T mid | x540 y274
 *  b6 | red bar + 2-line text (13)       | Draw+T| x60 y296..332 · text y310/330
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, AMBER_DARK, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const B1 = { x: 95, w: 170 };
  const B2 = { x: 335, w: 170 };
  const B3 = { x: 575, w: 170 };
  const B4 = { x: 815, w: 170 };
  const BY = 96;
  const BH = 50;
  const BMID = BY + BH / 2 + 5;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={48} size={17} fill={RED} anchor="middle" script>
          {t("Rapid-Recall Cheat Sheet", "Rapid-Recall Cheat Sheet")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={72} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("One glance before the exam", "Exam se pehle ek nazar")}
        </T>
      </Fade>

      {/* beat 1 — the refinement ladder diagram, built one hand at a time */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(B1.x, BY, B1.w, BH, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={B1.x + B1.w / 2} y={BMID} size={13} fill={INK} anchor="middle" weight={700}>
          {t("Range", "Range")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(B1.x + B1.w, BY + BH / 2, B2.x, BY + BH / 2)} stroke={MUTED} sw={1.6} dur={0.3} />

      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={roundRectD(B2.x, BY, B2.w, BH, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={B2.x + B2.w / 2} y={BMID - 8} size={12} fill={INK} anchor="middle" weight={700}>
          {t("Mean", "Mean")}
        </T>
        <T x={B2.x + B2.w / 2} y={BMID + 8} size={12} fill={INK} anchor="middle" weight={700}>
          {t("Deviation", "Deviation")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(B2.x + B2.w, BY + BH / 2, B3.x, BY + BH / 2)} stroke={MUTED} sw={1.6} dur={0.3} />

      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={roundRectD(B3.x, BY, B3.w, BH, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={B3.x + B3.w / 2} y={BMID} size={13} fill={INK} anchor="middle" weight={700}>
          {t("Variance", "Variance")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 3.0)} d={arrowD(B3.x + B3.w, BY + BH / 2, B4.x, BY + BH / 2)} stroke={MUTED} sw={1.6} dur={0.3} />

      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={roundRectD(B4.x, BY, B4.w, BH, 8)} stroke={RED} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={B4.x + B4.w / 2} y={BMID - 8} size={12} fill={RED} anchor="middle" weight={800}>
          {t("Standard", "Standard")}
        </T>
        <T x={B4.x + B4.w / 2} y={BMID + 8} size={12} fill={RED} anchor="middle" weight={800}>
          {t("Deviation", "Deviation")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={540} y={170} size={11} fill={MUTED} anchor="middle">
          {t(
            "crude → smooth, differentiable, unit-restored",
            "crude → smooth, differentiable, unit-restored"
          )}
        </T>
      </Fade>

      {/* beat 2 — note (red-margin, high): the two minimisation crowns */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 60 188 L 60 206" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={76} y={200} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Median Minimises Mean-deviation (3 M's). The MEAN minimises mean-square deviation.",
            "Median Mean-deviation ko Minimise karta hai (3 M's). MEAN mean-square deviation minimise karta hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — frequency-table divisor is always N */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={226} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "Frequency tables: the divisor is ALWAYS N = Σf_i — never the number of rows/classes.",
            "Frequency tables: divisor hamesha N = Σf_i hai — kabhi rows/classes ki number nahi."
          )}
        </T>
      </Fade>

      {/* beat 4 — transformation mnemonic */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={250} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "“Add doesn't matter, Multiply scales”: |a| for Range/M.D./SD, a² for variance.",
            "“Add doesn't matter, Multiply scales”: |a| Range/M.D./SD ke liye, a² variance ke liye."
          )}
        </T>
      </Fade>

      {/* beat 5 — consistency shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={274} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "Consistency: lower C.V. wins. Same mean? Skip C.V. and just compare σ.",
            "Consistency: kam C.V. jeetta hai. Same mean? C.V. skip karo, bas σ compare karo."
          )}
        </T>
      </Fade>

      {/* beat 6 — land (red-margin, high): reverse-problem kit + sanity trio */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 296 L 60 332" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={310} size={13} fill={RED} anchor="start" weight={700}>
          {"Reverse: Σx=n·x_bar, Σx²=n(σ²+x_bar²); correct with −w+c and −w²+c²."}
        </T>
        <T x={76} y={330} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Sanity: M.D. ≤ Range, σ² ≥ 0, σ ≤ Range.",
            "Sanity: M.D. ≤ Range, σ² ≥ 0, σ ≤ Range."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
