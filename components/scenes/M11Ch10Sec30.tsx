/**
 * M11 Ch10 · Section 30 — "The asymptotes are the hyperbola's skeleton"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 5 (The Hyperbola), sec 30 of 34. FLAGGED
 * orientation-reading section (task brief) — extra scrutiny: the hyperbola's
 * orientation rule is the OPPOSITE of the ellipse's (sign, not size), so a
 * wrong icon here would teach the exact confusion the section warns against.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 9.98, 23.89, 42.84, 59.56, 75.09,
 * 89.34, 104.45]; reveals_hinglish = [0, 9.81, 20.14, 36.44, 52.22, 66.82,
 * 75.86, 88.41].
 *
 * LEFT (x60-480): fully-labeled horizontal hyperbola (x²/a²-y²/b²=1,
 * a=70,b=60,c=92.2 — same numbers as Sec28 for continuity) — vertices, foci,
 * transverse axis, asymptotes. RIGHT (x560-1020): asymptote formula, the
 * positive-term orientation rule, a small VERTICAL-opening hyperbola icon
 * (branches genuinely above/below, built via the same cosh/sinh
 * parametrization with x/y roles swapped — not a relabeled copy of the
 * horizontal one), the sign-not-size guardrail, and the rectangular case.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD } from "./math-kit";

const C = { x: 270, y: 300 };
const A = 70, B = 60;
const CFOC = Math.sqrt(A * A + B * B);
const V1 = { x: C.x - A, y: C.y }, V2 = { x: C.x + A, y: C.y };
const F1 = { x: C.x - CFOC, y: C.y }, F2 = { x: C.x + CFOC, y: C.y };

function hBranch(sign: 1 | -1) {
  const pts: { x: number; y: number }[] = [];
  for (let u = -1.3; u <= 1.3 + 0.001; u += 0.26) {
    pts.push({ x: C.x + sign * A * Math.cosh(u), y: C.y - B * Math.sinh(u) });
  }
  return curveD(pts);
}
const RIGHT_BRANCH = hBranch(1);
const LEFT_BRANCH = hBranch(-1);
const ASY1 = { x1: 120, y1: C.y + (B / A) * 160, x2: 420, y2: C.y - (B / A) * 160 };
const ASY2 = { x1: 120, y1: C.y - (B / A) * 160, x2: 420, y2: C.y + (B / A) * 160 };

const IC = { x: 960, y: 258 };
const IA = 25, IB = 18;
function vBranch(sign: 1 | -1) {
  const pts: { x: number; y: number }[] = [];
  for (let u = -1.0; u <= 1.0 + 0.001; u += 0.25) {
    pts.push({ x: IC.x + IB * Math.sinh(u), y: IC.y + sign * IA * Math.cosh(u) });
  }
  return curveD(pts);
}
const ITOP = vBranch(-1);
const IBOT = vBranch(1);

export default function M11Ch10Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The asymptotes are the hyperbola's skeleton", "Asymptotes hi hyperbola ka skeleton hain")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: fully-labeled diagram */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={RIGHT_BRANCH} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={LEFT_BRANCH} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={V1.x} cy={V1.y} r={3} fill={INK} />
        <T x={V1.x} y={318} size={10} fill={INK} anchor="middle">(−a,0)</T>
        <Circle cx={V2.x} cy={V2.y} r={3} fill={INK} />
        <T x={V2.x} y={318} size={10} fill={INK} anchor="middle">(a,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={F1.x} cy={F1.y} r={3.5} fill={INK} />
        <T x={F1.x} y={282} size={9} fill={MUTED} anchor="middle">(−c,0)</T>
        <Circle cx={F2.x} cy={F2.y} r={3.5} fill={INK} />
        <T x={F2.x} y={282} size={9} fill={MUTED} anchor="middle">(c,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={C.x} y={340} size={9} fill={MUTED} anchor="middle">{t("transverse axis", "transverse axis")}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={lineD(ASY1.x1, ASY1.y1, ASY1.x2, ASY1.y2)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={lineD(ASY2.x1, ASY2.y1, ASY2.x2, ASY2.y2)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={425} y={165} size={10} fill={MUTED} anchor="start">{t("asymptotes", "asymptotes")}</T>
      </Fade>

      {/* beat 2 — RIGHT: asymptote formula */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={780} y={120} size={15} fill={INK} anchor="middle">asymptotes: y = ±(b/a)x</T>
      </Fade>

      {/* beat 3 — RIGHT: orientation rule (positive term) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={150} size={13} fill={INK} anchor="middle">
          {t("POSITIVE term marks the transverse axis.", "POSITIVE term transverse axis marks karta hai.")}
        </T>
        <T x={780} y={172} size={13} fill={INK} anchor="middle">
          {t("x² positive → opens LEFT-RIGHT.", "x² positive → LEFT-RIGHT khulta hai.")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT: vertical form + comparison icon */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={204} size={13} fill={INK} anchor="middle">y²/a² − x²/b² = 1 → {t("opens UP-DOWN", "UP-DOWN khulta hai")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={ITOP} stroke={INK} sw={1.6} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={IBOT} stroke={INK} sw={1.6} dur={0.35} />

      {/* beat 5 — guardrail (HIGH) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={330} size={13} fill={RED} anchor="middle" weight={700}>
          {t("For a hyperbola, the SIGN decides orientation,", "Hyperbola mein, SIGN orientation decide karta hai,")}
        </T>
        <T x={780} y={354} size={13} fill={RED} anchor="middle" weight={700}>
          {t("NOT the larger denominator (unlike ellipse!).", "bada denominator NAHI (ellipse ke ulat!).")}
        </T>
      </Fade>

      {/* beat 6 — rectangular hyperbola */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={780} y={388} size={13} fill={INK} anchor="middle">
          {t("Rectangular hyperbola: a = b → e = √2,", "Rectangular hyperbola: a = b → e = √2,")}
        </T>
        <T x={780} y={410} size={13} fill={INK} anchor="middle">
          {t("asymptotes are PERPENDICULAR.", "asymptotes PERPENDICULAR hote hain.")}
        </T>
      </Fade>

      {/* beat 7 — xy=c² form */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={446} size={13} fill={INK} anchor="middle">
          {t("xy = c² is the same curve, rotated —", "xy = c² wahi curve hai, rotated —")}
        </T>
        <T x={780} y={470} size={13} fill={INK} anchor="middle">
          {t("axes themselves become the asymptotes.", "axes khud asymptotes ban jaate hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
