/**
 * M11 Ch03 · Section 22 — "Periods, the scaling rule and the transform summary"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — real tan x graph (branch by branch, NOT waveD-sin/cos), extra
 * eye-check for the asymptote geometry.
 *
 * Beats (board_reveal_at_english [0, 5.12, 14.17, 26.97, 37.12, 39.77, 54.27, 67.75]):
 *  0 subtitle: base periods of the six functions
 *  1 HERO (high): sin,cos,sec,csc T=2π; tan,cot T=π
 *  2 formula: period of f(bx+c) = base/|b|  (c only shifts)
 *  3 THE DIAGRAM: y=tan x, two branches, 3 asymptotes at odd π/2
 *  4 subheading: special composites
 *  5 formula: |sinx|,|cosx|,sin²x,cos²x T=π; sum ⇒ LCM
 *  6 text: asymptotes - tan,sec where cos=0; cot,csc where sin=0
 *  7 formula: the master transform line (amp, T, phase, range)
 *
 * Layout plan — single column: base periods, tan graph, composites+asymptotes+master line:
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y72..87  (bl 80)
 *  b1 | hero chip                        | Chip  | x330..750   y92..130
 *  b2 | scaling-rule line (14)           | T mid | x376..704   y143..157 (bl 150)
 *  b3 | caption (13,w700)                | T mid | x420..694  y171..185 (bl 178)
 *  b3 | 3 dashed asymptotes x243,557,871 | Draw  | y190..390
 *  b3 | branch B (waveD tan) x250..550   | Draw  | y195..385
 *  b3 | branch C (waveD tan) x564..864   | Draw  | y195..385
 *  b3 | x-labels -π/2,π/2,3π/2           | T mid | y405
 *  b4 | "Special composites" (16,amber)  | T st  | x60..300  y427..443 (bl 435)
 *  b4 | underline                        | Draw  | x60..300  y443
 *  b5 | chip composites formula          | Chip  | x60..460   y450..486
 *  b6 | asymptote text (13)              | T mid | x270..810  y502..514 (bl 508)
 *  b7 | master transform line1 (13)      | T st  | x60..500   y521..533 (bl 528)
 *  b7 | master transform line2 (13)      | T st  | x60..430   y543..555 (bl 550)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { waveD } from "./math-kit";

const S = 6.738;
const OY = 315;

export default function M11Ch03Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={18} fill={RED} anchor="middle" script>
          {t("Periods, the Scaling Rule and the Transform Summary", "Periods, Scaling Rule aur Transform Summary")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={94} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Base periods of the six functions", "Chhe functions ke base periods")}
        </T>
      </Fade>

      {/* beat 1 — HERO: base periods */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={330} y={110} w={420} h={38} fill={AMBER} textFill={INK} size={16} script={false}>
          sin,cos,sec,csc: T=2π   tan,cot: T=π
        </Chip>
      </Fade>

      {/* beat 2 — the scaling rule */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={175} size={14} fill={INK} anchor="middle">
          {t("period of f(bx+c) = base/|b|  (c only shifts)", "period of f(bx+c) = base/|b|  (c sirf shift karta hai)")}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: y = tan x, branch by branch */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={557} y={200} size={13} fill={INK} anchor="middle" weight={700}>
          {t("y = tan x (period π, asymptotes at odd π/2)", "y = tan x (period π, odd π/2 par asymptotes)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 243 214 L 243 426" stroke={RED} sw={1.4} delay={dl(3, 0.3)} />
      <Draw on={beat >= 3} d="M 557 214 L 557 426" stroke={RED} sw={1.4} delay={dl(3, 0.4)} />
      <Draw on={beat >= 3} d="M 871 214 L 871 426" stroke={RED} sw={1.4} delay={dl(3, 0.5)} />
      <Draw on={beat >= 3} d={waveD(250, 550, OY, S, 100, 1.5, Math.tan)} stroke={INK} sw={2.4} delay={dl(3, 0.8)} dur={1.2} />
      <Draw on={beat >= 3} d={waveD(564, 864, OY, S, 100, -1.64, Math.tan)} stroke={INK} sw={2.4} delay={dl(3, 1.3)} dur={1.2} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={243} y={441} size={12} fill={RED} anchor="middle">-π/2</T>
        <T x={557} y={441} size={12} fill={RED} anchor="middle">π/2</T>
        <T x={871} y={441} size={12} fill={RED} anchor="middle">3π/2</T>
      </Fade>

      {/* beat 4 — special composites, subheading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={475} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Special composites", "Special composites")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 60 483 L 300 483" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — composite periods, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={492} w={400} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          |sinx|,|cosx|,sin²x,cos²x: T=π; sum⇒LCM
        </Chip>
      </Fade>

      {/* beat 6 — asymptote rule */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={555} size={13} fill={INK} anchor="middle">
          {t(
            "Asymptotes: tan,sec where cos=0 (odd π/2); cot,csc where sin=0 (nπ).",
            "Asymptotes: tan,sec jahan cos=0 (odd π/2); cot,csc jahan sin=0 (nπ)."
          )}
        </T>
      </Fade>

      {/* beat 7 — the master transform line */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={720} y={507} size={13} fill={INK} anchor="start">
          y=a·sin(bx+c)+d: amp=|a|, T=2π/|b|,
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={720} y={529} size={13} fill={INK} anchor="start" weight={700}>
          phase=-c/b, range=[d-|a|, d+|a|]
        </T>
      </Fade>
    </Scene>
  );
}
