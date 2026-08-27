/**
 * M11 Ch03 · Section 2 — "The cornerstone definition and the master conversion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (formula-building arc) — top-to-bottom single column, the board fills
 * like a notebook page (deviates from the story/demo/verdict bands — too much sequential content).
 *
 * Beats (board_reveal_at_english [0, 4.95, 17.49, 32.34, 37.55, 44.03, 58.2, 72.79, 88.58]):
 *  0 title (always-on) · 1 mini sector diagram (r, s, θ) + build θ=s/r term by term
 *  2 explain: s,r both lengths ⇒ θ dimensionless - pure number (data bug: literal — → "-")
 *  3 subheading: master conversion relation · 4 HERO: π radian = 180°
 *  5 two conversion-factor lines (deg→rad, rad→deg) · 6 red-margin: the two benchmarks
 *  7 standard-angle table (6 chips) · 8 red-margin guardrail: bare number = radians
 *
 * Layout plan — top-to-bottom column, boxes estimated:
 *  b0 | title (script 27, red)             | T mid | x210..870  y34..80  (bl 66)
 *  b1 | sector diagram c(150,165) r55       | Draw  | x95..205  y110..220
 *  b1 | "θ" "=" "s" "/" "r" (26,w800)        | T st  | x290..400  y136..164 (bl 150)
 *  b1 | "(θ in radians)" (14, muted)         | T st  | x290..430  y168..182 (bl 178)
 *  b2 | explain line (15)                    | T st  | x60..500   y238..252 (bl 245)
 *  b3 | "Master conversion relation" (18,amber,w700)| T st | x60..300 y277..292 (bl 285)
 *  b3 | underline                            | Draw  | x60..300  y292
 *  b4 | hero box "π radian = 180°"           | Chip  | x390..690  y310..362
 *  b5 | "degrees × π/180 → radians" (16)     | T mid | x432..648  y393..409 (bl 400)
 *  b5 | "radians × 180/π → degrees" (16)     | T mid | x432..648  y425..441 (bl 432)
 *  b6 | margin bar (red)                     | Draw  | x60  y460..490
 *  b6 | benchmark note (14,red)              | T st  | x76..760  y472..486 (bl 480)
 *  b7 | 6 angle chips (h34)                  | Chip  | row y500..534, x 55/220/385/550/715/880
 *  b8 | margin bar (red)                     | Draw  | x60  y558..588
 *  b8 | guardrail (15,red,w700)              | T st  | x76..520  y566..582 (bl 578)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, pointOnCircle, angleArcD } from "./math-kit";

const CX = 150;
const CY = 165;
const R = 55;
const TH1 = 0.25;
const TH2 = 1.3;
const P1 = pointOnCircle(CX, CY, R, TH1);
const P2 = pointOnCircle(CX, CY, R, TH2);
const S_MID = pointOnCircle(CX, CY, R + 16, (TH1 + TH2) / 2);
const TH_MID = pointOnCircle(CX, CY, 30, (TH1 + TH2) / 2);
const R_MID = { x: (CX + P1.x) / 2 + 4, y: (CY + P1.y) / 2 - 8 };

const ANGLES: { deg: string; rad: string }[] = [
  { deg: "30°", rad: "π/6" },
  { deg: "45°", rad: "π/4" },
  { deg: "60°", rad: "π/3" },
  { deg: "90°", rad: "π/2" },
  { deg: "180°", rad: "π" },
  { deg: "360°", rad: "2π" },
];
const CHIP_X = [55, 220, 385, 550, 715, 880];

export default function M11Ch03Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={66} size={27} fill={RED} anchor="middle" script>
          {t("The Cornerstone Definition", "Cornerstone Definition")}
        </T>
      </Fade>

      {/* beat 1 — mini sector diagram + build θ = s/r term by term */}
      <Draw on={beat >= 1} d={lineD(CX, CY, P1.x, P1.y)} stroke={INK} sw={2} delay={dl(1, 0)} />
      <Draw on={beat >= 1} d={lineD(CX, CY, P2.x, P2.y)} stroke={INK} sw={2} delay={dl(1, 0.3)} />
      <Draw on={beat >= 1} d={angleArcD(CX, CY, R, TH1, TH2)} stroke={GREEN_DARK} sw={3.2} delay={dl(1, 0.6)} />
      <Draw on={beat >= 1} d={angleArcD(CX, CY, 18, TH1, TH2)} stroke={AMBER_DARK} sw={1.8} delay={dl(1, 1.0)} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={R_MID.x} y={R_MID.y} size={13} fill={MUTED} anchor="middle">
          r
        </T>
        <T x={S_MID.x} y={S_MID.y} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          s
        </T>
        <T x={TH_MID.x} y={TH_MID.y} size={13} fill={AMBER_DARK} anchor="middle">
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={290} y={150} size={26} fill={AMBER_DARK} anchor="start" weight={800}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={318} y={150} size={26} fill={INK} anchor="start" weight={800}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={350} y={150} size={26} fill={GREEN_DARK} anchor="start" weight={800}>
          s
        </T>
        <T x={368} y={150} size={26} fill={INK} anchor="start" weight={800}>
          /
        </T>
        <T x={380} y={150} size={26} fill={INK} anchor="start" weight={800}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={290} y={178} size={14} fill={MUTED} anchor="start">
          {t("(θ in radians)", "(θ radians mein)")}
        </T>
      </Fade>

      {/* beat 2 — explain: dimensionless */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={245} size={15} fill={INK} anchor="start">
          {t(
            "s and r are both lengths, so θ is dimensionless - a pure number.",
            "s aur r dono lengths hain, so θ dimensionless hai - ek pure number."
          )}
        </T>
      </Fade>

      {/* beat 3 — subheading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={285} size={18} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Master conversion relation", "Master conversion relation")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 60 292 L 300 292" stroke={AMBER_DARK} sw={2} delay={dl(3, 0.5)} />

      {/* beat 4 — HERO: π radian = 180° */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={390} y={310} w={300} h={52} fill={AMBER} textFill={INK} size={24} script={false}>
          π radian = 180°
        </Chip>
      </Fade>

      {/* beat 5 — the two conversion-factor directions */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={400} size={16} fill={INK} anchor="middle">
          {t("degrees × π/180 → radians", "degrees × π/180 → radians")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={432} size={16} fill={INK} anchor="middle">
          {t("radians × 180/π → degrees", "radians × 180/π → degrees")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the two benchmark numbers */}
      <Draw on={beat >= 6} d="M 60 460 L 60 490" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={480} size={14} fill={RED} anchor="start">
          {t(
            "1° ≈ 0.01746 rad; 1 rad ≈ 57°16′ — reciprocal factors.",
            "1° ≈ 0.01746 rad; 1 rad ≈ 57°16′ — reciprocal factors."
          )}
        </T>
      </Fade>

      {/* beat 7 — the standard-angle table, one chip at a time */}
      {ANGLES.map((a, i) => (
        <Fade key={a.deg} on={beat >= 7} delay={dl(7, 0.25 * i)}>
          <Chip x={CHIP_X[i]} y={500} w={150} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
            {`${a.deg} = ${a.rad}`}
          </Chip>
        </Fade>
      ))}

      {/* beat 8 — guardrail: bare number always means radians */}
      <Draw on={beat >= 8} d="M 60 558 L 60 588" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={76} y={578} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "A bare number in this chapter always means radians.",
            "Bina degree sign ke number hamesha radians hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
