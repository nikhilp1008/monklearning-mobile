/**
 * M11 Ch09 · Section 52 — "Foot, Image and Reflection"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS Subtopic 7 (Foot of Perpendicular, Image and Reflection, secs
 * 52-59), the chapter's final content subtopic. Torch/wall anchor -> real diagram (foot Q +
 * image P') -> "halfway / twice as far" restatement -> normal-direction setup -> step-size
 * formula -> red-margin guardrail (one step vs two steps).
 *
 * board_content has 8 items (seq1..seq8). seq1 (heading) is the always-on title. seq2..seq8 gate
 * at beat>=1..beat>=7. reveals_english=[0.0,7.85,21.08,34.39,47.36,55.47,67.84,80.73] (8 values).
 * reveals_hinglish=[0.0,7.08,23.21,33.79,46.51,54.1,65.96,77.04] (8 values).
 *
 * DIAGRAM geometry (beat 2) — built fresh (not any embedded svg), schematic (non-Cartesian),
 * all computed from real vector projection so it can never drift (same discipline as Sec45's
 * footOnRay use, adapted here to footOnLine for a full line rather than a ray from a vertex).
 * Mirror line through M1=(230,280), M2=(830,260). P=(420,210) is picked OFF the line; Q is the
 * REAL projection of P onto the line (footOnLine, unclamped dot-product projection — the same
 * technique as Sec45, just against two points instead of vertex+angle); P' = 2Q - P is the REAL
 * reflection, so "Q is the midpoint of P and P'" is true by construction, not asserted.
 *
 * Verified numerically (Node, same formulas as the component below):
 *   Q  = (422.11986681465044, 273.59600443951166)
 *   P' = (424.2397336293009,  337.1920088790233)
 *   dist(P,Q)  = 63.6313 px
 *   dist(Q,P') = 63.6313 px   — EQUAL, confirmed to 2 decimal places (in fact identical to full
 *                                float precision, since P'-Q = Q-P algebraically for P'=2Q-P).
 *   midpoint check: (P.x+P'.x)/2 = 422.11986681465044 = Q.x  (exact)
 *                   (P.y+P'.y)/2 = 273.59600443951166 = Q.y  (exact)
 *   t (projection param) = 192.23, line length = 600.33 -> t/len ≈ 0.32, so Q falls well inside
 *   the drawn M1-M2 segment (not near either end).
 *
 * Beats:
 *  0(title, always-on) | "Foot, Image & Reflection"
 *  1 | text: torch-at-a-wall anchor for "foot of the perpendicular"
 *  2 | THE DIAGRAM: mirror line -> P -> drop+tick -> Q(foot) -> drop+tick -> P'(image) -> caption
 *  3 | text: walk the same distance past the wall, you reach the image
 *  4 | text: foot is halfway to the image; image is twice as far
 *  5 | text: line ax+by+c=0's normal direction (a,b); step from P along it
 *  6 | formula (normal emphasis): step size ∝ (ax1+by1+c)/(a²+b²)
 *  7 | RED-MARGIN guardrail (high emphasis): one step -> foot, two steps -> mirror image
 *
 * Layout plan (prose/formula centered x540 unless noted; point cluster P/Q/P' sits x420-470,
 * mirror line spans the full x230-830 width; all sizes/positions re-checked against char-width
 * estimates in the authoring pass, all well under the safe half-width):
 *  b0  | title (26,red,script)                        | T mid | x540 y62
 *  b1  | 2-line text (16,ink)                          | T mid | x540 y100 / y128
 *  b2  | mirror line M1->M2 (ink)                      | Draw | (230,280)->(830,260)
 *  b2  | "mirror line" tag (ink,13,w700)                | T st | (844,248)
 *  b2  | P dot (ink,r4) + "P" tag (ink,14,w700)         | circle+T | (420,210) tag (442,194)
 *  b2  | drop1 (muted) P->Q + tick1 (muted)             | Draw | (420,210)->(422.12,273.60)
 *  b2  | Q dot (amber_dark,r4.5) + "Q (foot)" tag       | circle+T | (422.12,273.60) tag (444.12,253.60)
 *  b2  | drop2 (muted) Q->P' + tick2 (muted)            | Draw | (422.12,273.60)->(424.24,337.19)
 *  b2  | P' dot (green,r4.5) + "P' (image)" tag         | circle+T | (424.24,337.19) tag (446.24,355.19)
 *  b2  | caption (15,green,w700)                        | T mid | x540 y388
 *  b3  | text (15,ink)                                  | T mid | x540 y420
 *  b4  | text (15,ink)                                  | T mid | x540 y452
 *  b5  | text (14,ink)                                  | T mid | x540 y482
 *  b6  | formula (20,ink,w700)                          | T mid | x540 y517
 *  b7  | red bar x320 y534..586                         | Draw
 *  b7  | guardrail 2-line text (16,red,w700,start)       | T st | x352 y554 / y578
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

type Pt = { x: number; y: number };

// mirror line — two points define it (schematic pixel space, not Cartesian axes)
const M1: Pt = { x: 230, y: 280 };
const M2: Pt = { x: 830, y: 260 };

// P is picked OFF the line; everything else is derived by real computation.
const P: Pt = { x: 420, y: 210 };

/** Real vector projection of P onto the infinite line through A,B (unclamped dot product —
 * same technique as Sec45's footOnRay, generalized from a ray to a full line). */
function footOnLine(pt: Pt, a: Pt, b: Pt) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const vx = pt.x - a.x;
  const vy = pt.y - a.y;
  const t = vx * ux + vy * uy;
  return { x: a.x + t * ux, y: a.y + t * uy };
}

const Q: Pt = footOnLine(P, M1, M2);
const Pp: Pt = { x: 2 * Q.x - P.x, y: 2 * Q.y - P.y }; // real reflection: P' = 2Q - P

/** Short perpendicular hash mark at the midpoint of a-b, for the "equal distance" tick
 * convention (same "d" tick intent as the source sketch, drawn as a simple geometric mark). */
function tickD(a: Pt, b: Pt, len = 7): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const segLen = Math.hypot(dx, dy) || 1;
  const ux = dx / segLen;
  const uy = dy / segLen;
  const px = -uy;
  const py = ux;
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  return `M ${mx - px * len} ${my - py * len} L ${mx + px * len} ${my + py * len}`;
}

const P_LABEL: Pt = { x: P.x + 22, y: P.y - 16 };
const Q_LABEL: Pt = { x: Q.x + 22, y: Q.y - 20 };
const Pp_LABEL: Pt = { x: Pp.x + 22, y: Pp.y + 18 };
const MIRROR_LABEL: Pt = { x: M2.x + 14, y: M2.y - 12 };

export default function M11Ch09Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Foot, Image & Reflection", "Foot, Image aur Reflection")}
        </T>
      </Fade>

      {/* beat 1 — torch-at-a-wall anchor */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t("Shine a torch straight at a wall —", "Torch ko wall pe seedha maaro —")}
        </T>
        <T x={540} y={128} size={16} fill={INK} anchor="middle">
          {t(
            "where the beam lands perpendicular is the foot.",
            "jaha beam perpendicular gire, wahi foot hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: mirror line, P, foot Q, image P', equal-distance ticks */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(M1.x, M1.y, M2.x, M2.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={MIRROR_LABEL.x} y={MIRROR_LABEL.y} size={13} fill={INK} anchor="start" weight={700}>
          {t("mirror line", "mirror line")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={P_LABEL.x} y={P_LABEL.y} size={14} fill={INK} anchor="start" weight={700}>
          P
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={tickD(P, Q)} stroke={MUTED} sw={1.8} dur={0.2} />

      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={Q.x} cy={Q.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={Q_LABEL.x} y={Q_LABEL.y} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          Q ({t("foot", "foot")})
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={lineD(Q.x, Q.y, Pp.x, Pp.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={tickD(Q, Pp)} stroke={MUTED} sw={1.8} dur={0.2} />

      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Circle cx={Pp.x} cy={Pp.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={Pp_LABEL.x} y={Pp_LABEL.y} size={14} fill={GREEN} anchor="start" weight={700}>
          P&apos; ({t("image", "image")})
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={540} y={388} size={15} fill={GREEN} anchor="middle" weight={700}>
          {t(
            "The foot Q is the midpoint of P and its image P-prime.",
            "Foot Q hamesha P aur P-prime ka exact midpoint hota hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — walk the same distance past the wall, reach the image */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={420} size={15} fill={INK} anchor="middle">
          {t(
            "Walk the same distance past the wall — you reach the image.",
            "Wall ke paar utni hi distance chalo — image mil jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 4 — foot is halfway to the image, image is twice as far */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={452} size={15} fill={INK} anchor="middle">
          {t(
            "The foot is halfway to the image — the image is twice as far.",
            "Foot hamesha aadha raasta hai — image usse double door hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — normal direction (a,b), step from P along it */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={482} size={14} fill={INK} anchor="middle">
          {t(
            "Normal direction (a, b) for ax+by+c=0 — step from P along it.",
            "ax+by+c=0 ka normal direction (a, b) hai — P se usi disha chalo."
          )}
        </T>
      </Fade>

      {/* beat 6 — the step-size formula (normal emphasis) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={517} size={20} fill={INK} anchor="middle" weight={700}>
          step size ∝ (ax₁ + by₁ + c) / (a² + b²)
        </T>
      </Fade>

      {/* beat 7 — RED-MARGIN guardrail: one step -> foot, two steps -> mirror image */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 320 534 L 320 586" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={352} y={554} size={16} fill={RED} anchor="start" weight={700}>
          {t("One step reaches the foot —", "Ek step lagao, foot mil jaata hai —")}
        </T>
        <T x={352} y={578} size={16} fill={RED} anchor="start" weight={700}>
          {t("two steps reach the mirror image.", "do step lagao, mirror image mil jaata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
