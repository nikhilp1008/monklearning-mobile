/**
 * M11 Ch03 · Section 16 — "Even/odd nature and the one rule for all reductions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — single top-to-bottom column, mirror diagram then the master rule.
 *
 * Beats (board_reveal_at_english [0, 5.63, 20.91, 28.67, 38.91, 50.43, 68.95, 80.64]):
 *  0 subtitle: even and odd - the mirror across the x-axis
 *  1 mirror diagram: P(a,b) at θ and P'(a,-b) at -θ, reflected across the x-axis
 *  2 formula: cos(-θ)=cosθ, sec(-θ)=secθ (even)
 *  3 formula: sin(-θ)=-sinθ, tan(-θ)=-tanθ (odd)
 *  4 subheading: one rule - "90° flips, 180° doesn't"
 *  5 text: n odd ⇒ co-function; n even ⇒ same function
 *  6 text: sign from the quadrant of the whole angle, via ASTC
 *  7 red-margin (high): odd multiples of 90° swap sin ↔ cos
 *
 * Layout plan — mirror diagram top-left, formulas below, rule text further below:
 *  b0 | subtitle (15,amber)                | T mid | x300..780  y84..99  (bl 92)
 *  b1 | mirror circle c(170,185) r65        | Draw  | x105..255  y120..250
 *  b1 | text 2 lines (15)                   | T st  | x320..760  y144..179
 *  b2 | chip "cos(-θ)=cosθ,sec(-θ)=secθ"    | Chip  | x60..500   y270..308
 *  b3 | chip "sin(-θ)=-sinθ,tan(-θ)=-tanθ"  | Chip  | x60..500   y318..356
 *  b4 | "One rule..." (17,amber,w700)       | T st  | x60..500   y387..403 (bl 395)
 *  b4 | underline                           | Draw  | x60..500  y403
 *  b5 | rule text (15)                      | T st  | x60..435   y412..428 (bl 420)
 *  b6 | sign text (14)                      | T st  | x60..522   y437..453 (bl 445)
 *  b7 | margin bar (red)                    | Draw  | x60  y475..520
 *  b7 | closer 2 lines (14,red)             | T st  | x76..500   y487..519
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle } from "./math-kit";

const CX = 170;
const CY = 185;
const R = 65;
const THETA = 1.0;
const P = pointOnCircle(CX, CY, R, THETA);
const PP = pointOnCircle(CX, CY, R, -THETA);
const TH_LABEL = pointOnCircle(CX, CY, 26, THETA / 2);
const NTH_LABEL = pointOnCircle(CX, CY, 26, -THETA / 2);

export default function M11Ch03Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} anchor="middle" script>
          {t("Even/Odd Nature and the One Rule", "Even/Odd Nature aur Ek Rule")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Even and odd - the mirror across the x-axis", "Even aur odd - x-axis ke paar mirror")}
        </T>
      </Fade>

      {/* beat 1 — the mirror diagram */}
      <Draw on={beat >= 1} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.4} delay={dl(1, 0)} />
      <Draw on={beat >= 1} d={lineD(CX - 85, CY, CX + 85, CY)} stroke={AMBER_DARK} sw={1.8} delay={dl(1, 0.3)} />
      <Draw on={beat >= 1} d={lineD(CX, CY, P.x, P.y)} stroke={INK} sw={2.2} delay={dl(1, 0.6)} />
      <Draw on={beat >= 1} d={lineD(CX, CY, PP.x, PP.y)} stroke={MUTED} sw={1.8} delay={dl(1, 0.9)} />
      <Draw on={beat >= 1} d={lineD(P.x, P.y, PP.x, PP.y)} stroke={MUTED} sw={1.2} delay={dl(1, 1.2)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={TH_LABEL.x + 10} y={TH_LABEL.y} size={12} fill={AMBER_DARK} anchor="middle">θ</T>
        <T x={NTH_LABEL.x + 12} y={NTH_LABEL.y + 4} size={12} fill={AMBER_DARK} anchor="middle">-θ</T>
        <T x={P.x + 8} y={P.y - 8} size={12} fill={INK} anchor="start">P(a,b)</T>
        <T x={PP.x + 8} y={PP.y + 16} size={12} fill={MUTED} anchor="start">P'(a,-b)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={320} y={150} size={15} fill={INK} anchor="start">
          {t("Replacing θ by -θ reflects P across the x-axis:", "θ ko -θ se replace karna P ko x-axis ke paar reflect karta hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={320} y={175} size={15} fill={INK} anchor="start" weight={700}>
          {t("cosine (x-coord) unchanged, sine (y-coord) flips.", "cosine (x-coord) same, sine (y-coord) flip.")}
        </T>
      </Fade>

      {/* beat 2 — even functions */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={270} w={440} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
          cos(-θ)=cosθ, sec(-θ)=secθ (even)
        </Chip>
      </Fade>

      {/* beat 3 — odd functions */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={318} w={440} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
          sin(-θ)=-sinθ, tan(-θ)=-tanθ (odd)
        </Chip>
      </Fade>

      {/* beat 4 — the one rule, subheading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={395} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("One rule: '90° flips, 180° doesn't'", "Ek rule: '90° flips, 180° nahi'")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 60 403 L 500 403" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — co-function switching */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={420} size={15} fill={INK} anchor="start">
          {t("For f(n·90°±θ): n odd ⇒ co-function; n even ⇒ same.", "f(n·90°±θ) ke liye: n odd ⇒ co-function; n even ⇒ same.")}
        </T>
      </Fade>

      {/* beat 6 — the sign */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={445} size={14} fill={INK} anchor="start">
          {t("Sign: quadrant of the whole angle → ASTC on the original function.", "Sign: poore angle ka quadrant → ASTC original function par.")}
        </T>
      </Fade>

      {/* beat 7 — red-margin closer: why odd flips */}
      <Draw on={beat >= 7} d="M 60 475 L 60 520" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={492} size={14} fill={RED} anchor="start">
          {t("Odd multiples of 90° sit on the vertical axis", "90° ke odd multiples vertical axis par hain")}
        </T>
        <T x={76} y={514} size={14} fill={RED} anchor="start" weight={700}>
          {t("and swap sin ↔ cos.", "aur sin ↔ cos swap karte hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
