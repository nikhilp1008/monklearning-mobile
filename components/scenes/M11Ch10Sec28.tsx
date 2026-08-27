/**
 * M11 Ch10 · Section 28 — "Hyperbola: constant DIFFERENCE of distances to two foci"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 5 (The Hyperbola), sec 28 of 34 in
 * the chapter. The chapter's first real hyperbola: two branches sampled and
 * curveD'd INDEPENDENTLY (per the task brief — a single curve would wrongly
 * bridge them), asymptotes drawn as plain straight lineD segments through
 * the centre.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.59, 20.48, 31.23, 42.58, 54.61,
 * 68.69, 77.99]; reveals_hinglish = [0, 8.79, 20.65, 31.15, 43.43, 55.21,
 * 66.39, 74.92].
 *
 * LEFT (x80-480): both branches (a=70,b=60,c=√(a²+b²)=92.2 — the hyperbola
 * relation, NOT a²−b² — verified c>a=92.2>70), foci OUTSIDE the vertices, a
 * point P on the right branch with PF1/PF2 drawn. Hand-verified the
 * constant-difference property numerically at P (u=0.6 on the branch
 * parametrization): PF2≈39.3, PF1≈179.3, difference≈140.0 = 2a=140 ✓.
 * RIGHT (x560-1020): ellipse-vs-hyperbola contrast, e>1, applications, the
 * foci-outside-vertices guardrail.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD } from "./math-kit";

const C = { x: 280, y: 300 };
const A = 70, B = 60;
const CFOC = Math.sqrt(A * A + B * B); // 92.2
const V1 = { x: C.x - A, y: C.y }, V2 = { x: C.x + A, y: C.y };
const F1 = { x: C.x - CFOC, y: C.y }, F2 = { x: C.x + CFOC, y: C.y };

function branch(sign: 1 | -1) {
  const pts: { x: number; y: number }[] = [];
  for (let u = -1.3; u <= 1.3 + 0.001; u += 0.26) {
    pts.push({ x: C.x + sign * A * Math.cosh(u), y: C.y - B * Math.sinh(u) });
  }
  return curveD(pts);
}
const RIGHT_BRANCH = branch(1);
const LEFT_BRANCH = branch(-1);
const P = { x: C.x + A * Math.cosh(0.6), y: C.y - B * Math.sinh(0.6) };

const ASY1 = { x1: 130, y1: C.y + (B / A) * 150, x2: 430, y2: C.y - (B / A) * 150 };
const ASY2 = { x1: 130, y1: C.y - (B / A) * 150, x2: 430, y2: C.y + (B / A) * 150 };

export default function M11Ch10Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Hyperbola: constant DIFFERENCE of distances to two foci", "Hyperbola: do foci ke distances ka constant DIFFERENCE")}
        </T>
      </Fade>

      {/* beat 1 — branches, foci, P, PF1/PF2 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "For every point, |PF₁ − PF₂| = constant = 2a. Difference, not sum.",
            "Har point ke liye, |PF₁ − PF₂| = constant = 2a. Difference, sum nahi."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={RIGHT_BRANCH} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={LEFT_BRANCH} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={V1.x} cy={V1.y} r={3} fill={INK} />
        <T x={V1.x} y={318} size={10} fill={INK} anchor="middle">(−a,0)</T>
        <Circle cx={V2.x} cy={V2.y} r={3} fill={INK} />
        <T x={V2.x} y={318} size={10} fill={INK} anchor="middle">(a,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={F1.x} cy={F1.y} r={3.5} fill={INK} />
        <T x={F1.x} y={282} size={9} fill={MUTED} anchor="middle">(−c,0)</T>
        <Circle cx={F2.x} cy={F2.y} r={3.5} fill={INK} />
        <T x={F2.x} y={282} size={9} fill={MUTED} anchor="middle">(c,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={P.x} cy={P.y} r={3.5} fill={INK} />
        <T x={P.x + 8} y={P.y - 4} size={10} fill={INK} anchor="start">P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={lineD(P.x, P.y, F1.x, F1.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={lineD(P.x, P.y, F2.x, F2.y)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 2 — RIGHT guardrail (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={780} y={120} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Ellipse ADDS the two distances;", "Ellipse dono distances ko ADD karta hai;")}
        </T>
        <T x={780} y={144} size={13} fill={RED} anchor="middle" weight={700}>
          {t("hyperbola SUBTRACTS them.", "hyperbola SUBTRACT karta hai.")}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: eccentricity */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={174} size={13} fill={INK} anchor="middle">
          {t("Eccentricity is greater than 1 —", "Eccentricity one se bada hai —")}
        </T>
        <T x={780} y={198} size={13} fill={INK} anchor="middle">
          {t("the curve is open, two branches.", "curve open hai, do branches.")}
        </T>
      </Fade>

      {/* beat 4 — asymptotes on the diagram */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={lineD(ASY1.x1, ASY1.y1, ASY1.x2, ASY1.y2)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={lineD(ASY2.x1, ASY2.y1, ASY2.x2, ASY2.y2)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={435} y={168} size={10} fill={MUTED} anchor="start">{t("asymptotes", "asymptotes")}</T>
      </Fade>

      {/* beat 5 — RIGHT: applications */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={230} size={13} fill={INK} anchor="middle">
          {t("Used in navigation (LORAN), cooling", "LORAN navigation, cooling towers,")}
        </T>
        <T x={780} y={254} size={13} fill={INK} anchor="middle">
          {t("towers, and fast comets' orbits.", "aur fast comets ki orbits mein.")}
        </T>
      </Fade>

      {/* beat 6 — transverse/conjugate axes */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(C.x, C.y - B, C.x, C.y + B)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={288} y={236} size={9} fill={MUTED} anchor="start">{t("conjugate axis", "conjugate axis")}</T>
        <T x={280} y={335} size={9} fill={MUTED} anchor="middle">{t("transverse axis", "transverse axis")}</T>
      </Fade>

      {/* beat 7 — RIGHT guardrail (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={290} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Foci sit OUTSIDE the vertices: c > a —", "Foci vertices ke BAHAR hote hain: c > a —")}
        </T>
        <T x={780} y={314} size={13} fill={RED} anchor="middle" weight={700}>
          {t("unlike the ellipse, where a > c.", "ellipse ke ulat, jahan a > c tha.")}
        </T>
      </Fade>
    </Scene>
  );
}
