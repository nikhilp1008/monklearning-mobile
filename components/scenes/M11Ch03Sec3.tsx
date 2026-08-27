/**
 * M11 Ch03 · Section 3 — "Arc length and sector area — both fall out of one definition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — single centered column, identities land top to bottom, diagram
 * arrives last to visually ground everything just derived.
 *
 * Beats (board_reveal_at_english [0, 5.46, 13.82, 36.01, 42.58, 59.05, 66.65, 75.69]):
 *  0 title (always-on) · 1 HERO: s = rθ (high emphasis)
 *  2 proportion route: s/2πr = θ/2π, 2π cancels only in radians
 *  3 A = ½r²θ (boxed) · 4 same-fraction-of-disc route: A/πr² = θ/2π
 *  5 twin form A = ½rs (boxed, green) · 6 THE DIAGRAM: sector, r, s, θ
 *  7 red-margin guardrail: all three assume radians, degrees ⇒ ~57× too big
 *
 * Layout plan — centered column x410-670, diagram below:
 *  b0 | title (script 26, red)          | T mid | x260..820  y34..78  (bl 64)
 *  b1 | hero "s = rθ (...)"             | Chip  | x400..680  y100..152
 *  b2 | "s / 2πr = θ / 2π" (16)         | T mid | x466..614  y172..188 (bl 180)
 *  b2 | "(2π cancels...)" (13, muted)   | T mid | x396..684  y192..206 (bl 200)
 *  b3 | chip "A = ½r²θ"                 | Chip  | x410..670  y226..270
 *  b4 | "sector = same fraction..." (13)| T mid | x355..725  y288..300 (bl 296)
 *  b4 | "A / πr² = θ / 2π" (16)         | T mid | x466..614  y310..326 (bl 318)
 *  b5 | chip "A = ½rs" (green)          | Chip  | x430..650  y336..380
 *  b6 | sector wedge c(540,500) r70     | Fade  | x540..607  y432..500
 *  b6 | small angle arc (amber) r26     | Draw  | within wedge
 *  b6 | labels O,r,r,s,θ                | T     | around wedge
 *  b7 | margin bar (red)                | Draw  | x60  y555..585
 *  b7 | guardrail (15, red)             | T st  | x76..900   y565..581 (bl 577)
 */

import React from "react";
import { Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, angleArcD } from "./math-kit";

const CX = 540;
const CY = 500;
const R = 70;
const TH1 = 0.3;
const TH2 = 1.35;
const P1 = pointOnCircle(CX, CY, R, TH1);
const P2 = pointOnCircle(CX, CY, R, TH2);
const WEDGE_D = `M ${CX} ${CY} L ${P1.x} ${P1.y} A ${R} ${R} 0 0 0 ${P2.x} ${P2.y} Z`;
const S_LABEL = pointOnCircle(CX, CY, R + 16, (TH1 + TH2) / 2);
const TH_LABEL = pointOnCircle(CX, CY, 34, (TH1 + TH2) / 2);
const R1_MID = { x: (CX + P1.x) / 2 + 6, y: (CY + P1.y) / 2 + 2 };
const R2_MID = { x: (CX + P2.x) / 2 - 16, y: (CY + P2.y) / 2 + 4 };

export default function M11Ch03Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} anchor="middle" script>
          {t("From θ = s/r, Everything Follows", "θ = s/r Se Sab Kuch Nikalta Hai")}
        </T>
      </Fade>

      {/* beat 1 — HERO: s = rθ */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={400} y={100} w={280} h={52} fill={AMBER} textFill={INK} size={24} script={false}>
          s = rθ
        </Chip>
      </Fade>

      {/* beat 2 — the proportion route */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={180} size={16} fill={INK} anchor="middle">
          s / 2πr = θ / 2π
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={200} size={13} fill={MUTED} anchor="middle">
          {t("(2π cancels - only because θ is in radians)", "(2π cancel - sirf kyunki θ radians mein hai)")}
        </T>
      </Fade>

      {/* beat 3 — A = ½r²θ */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={410} y={226} w={260} h={44} fill={AMBER} textFill={INK} size={20} script={false}>
          A = ½r²θ
        </Chip>
      </Fade>

      {/* beat 4 — the same-fraction-of-disc route */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={296} size={13} fill={MUTED} anchor="middle">
          {t("sector = same fraction of disc as θ is of the full turn:", "sector = disc ka utna hi hissa jitna θ full turn ka:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={318} size={16} fill={INK} anchor="middle">
          A / πr² = θ / 2π
        </T>
      </Fade>

      {/* beat 5 — twin form A = ½rs */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={430} y={336} w={220} h={44} fill={GREEN} textFill="#FFFEFB" size={20} script={false}>
          A = ½rs
        </Chip>
      </Fade>

      {/* beat 6 — the diagram: sector wedge with r, s, θ */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Path d={WEDGE_D} fill={CREAM} stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 6} d={angleArcD(CX, CY, 26, TH1, TH2)} stroke={AMBER_DARK} sw={1.8} delay={dl(6, 0.6)} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={526} y={514} size={14} fill={INK} anchor="middle">
          O
        </T>
        <T x={R1_MID.x} y={R1_MID.y} size={13} fill={MUTED} anchor="middle">
          r
        </T>
        <T x={R2_MID.x} y={R2_MID.y} size={13} fill={MUTED} anchor="middle">
          r
        </T>
        <T x={S_LABEL.x} y={S_LABEL.y} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          s
        </T>
        <T x={TH_LABEL.x} y={TH_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle">
          θ
        </T>
      </Fade>

      {/* beat 7 — red-margin guardrail: radians only */}
      <Draw on={beat >= 7} d="M 60 555 L 60 585" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={577} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "All three assume θ in radians - degrees give an answer ~57× too big.",
            "Teeno formulas θ ko radians maante hain - degrees se answer ~57× bada aayega."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
