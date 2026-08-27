/**
 * M11 Ch10 · Section 23 — "Which axis is major? The larger denominator wins"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 4 (The Ellipse), sec 23 of 27. FLAGGED
 * orientation-reading section (task brief) — extra scrutiny: does the
 * horizontal-vs-vertical ellipse actually match which denominator is larger?
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.59, 22.02, 34.47, 46.85, 59.9,
 * 69.97, 80.04]; reveals_hinglish = [0, 7.0, 18.18, 29.44, 42.92, 55.3,
 * 62.72, 72.87].
 *
 * LEFT (x60-480): the fully-labeled horizontal ellipse from seq2's own
 * diagram — centre, both vertices, both foci, semi-axes a/b, both
 * directrices. All coordinates computed from a_px=150, b_px=85 via the real
 * relation c=√(a²−b²)=123.6 and directrix x=±a²/c=±182.0 — not eyeballed.
 * RIGHT (x560-1020): the two equation forms + a small vertical-ellipse icon
 * (rx<ry, genuinely taller than wide, confirming "major axis = y-axis" is
 * true of the drawn shape) + the anatomy facts.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ellipseD, lineD } from "./math-kit";

const C = { x: 270, y: 300 };
const APX = 150, BPX = 85;
const CPX = Math.sqrt(APX * APX - BPX * BPX); // 123.6
const DIRX = (APX * APX) / CPX; // a/e = a²/c = 182.0
const V1 = { x: C.x - APX, y: C.y }, V2 = { x: C.x + APX, y: C.y };
const F1 = { x: C.x - CPX, y: C.y }, F2 = { x: C.x + CPX, y: C.y };
const D1X = C.x - DIRX, D2X = C.x + DIRX;
const TOP = { x: C.x, y: C.y - BPX };

const IC = { x: 975, y: 120 }, IRX = 28, IRY = 40;

export default function M11Ch10Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Which axis is major? The larger denominator wins", "Kaunsa axis major hai? Bada denominator jeetta hai")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: fully-labeled horizontal ellipse */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={ellipseD(C.x, C.y, APX, BPX)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={C.x} cy={C.y} r={3} fill={INK} />
        <T x={C.x} y={314} size={10} fill={MUTED} anchor="middle">C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={V1.x} cy={V1.y} r={3.5} fill={INK} />
        <T x={V1.x} y={318} size={10} fill={INK} anchor="middle">(−a, 0)</T>
        <Circle cx={V2.x} cy={V2.y} r={3.5} fill={INK} />
        <T x={V2.x} y={318} size={10} fill={INK} anchor="middle">(a, 0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={F1.x} cy={F1.y} r={3} fill={AMBER_DARK} />
        <T x={F1.x} y={288} size={9} fill={AMBER_DARK} anchor="middle">(−c, 0)</T>
        <Circle cx={F2.x} cy={F2.y} r={3} fill={AMBER_DARK} />
        <T x={F2.x} y={288} size={9} fill={AMBER_DARK} anchor="middle">(c, 0)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(C.x, C.y, TOP.x, TOP.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={C.x + 12} y={260} size={11} fill={INK} anchor="start">b</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={345} y={290} size={11} fill={INK} anchor="middle">a</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={`${lineD(D1X, 210, D1X, 390)} ${lineD(D2X, 210, D2X, 390)}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={D1X} y={202} size={9} fill={MUTED} anchor="middle">x=−a/e</T>
        <T x={D2X} y={202} size={9} fill={MUTED} anchor="middle">x=a/e</T>
      </Fade>

      {/* beat 2 — RIGHT: horizontal-form equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={780} y={120} size={13} fill={INK} anchor="middle">x²/a² + y²/b² = 1 (a&gt;b): major axis = x-axis</T>
      </Fade>

      {/* beat 3 — RIGHT: vertical-form equation + comparison icon */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={148} size={13} fill={INK} anchor="middle">x²/b² + y²/a² = 1 (a&gt;b): major axis = y-axis</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={ellipseD(IC.x, IC.y, IRX, IRY)} stroke={INK} sw={1.6} dur={0.35} />

      {/* beat 4 — guardrail (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={185} size={13} fill={RED} anchor="middle" weight={700}>
          {t("a² is ALWAYS the larger denominator —", "a² HAMESHA bada denominator hai —")}
        </T>
        <T x={780} y={207} size={13} fill={RED} anchor="middle" weight={700}>
          {t("it sits under the major axis's variable.", "ye major axis ke variable ke neeche baithta hai.")}
        </T>
      </Fade>

      {/* beat 5 — vertices/minor axis */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={239} size={13} fill={INK} anchor="middle">
          {t("Vertices are 2a apart on the major axis;", "Vertices major axis par 2a door hain;")}
        </T>
        <T x={780} y={261} size={13} fill={INK} anchor="middle">
          {t("minor axis has length 2b.", "minor axis ki length 2b hai.")}
        </T>
      </Fade>

      {/* beat 6 — foci */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={780} y={293} size={13} fill={INK} anchor="middle">
          {t("Foci lie ON the major axis, at distance", "Foci major axis PAR hote hain, distance")}
        </T>
        <T x={780} y={315} size={13} fill={INK} anchor="middle">c = √(a² − b²) {t("from centre.", "centre se.")}</T>
      </Fade>

      {/* beat 7 — directrices */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={347} size={13} fill={INK} anchor="middle">
          {t("Directrices: lines ⊥ to the major axis", "Directrices: major axis ke ⊥ lines")}
        </T>
        <T x={780} y={369} size={13} fill={INK} anchor="middle">{t("at x = ±a/e.", "x = ±a/e par.")}</T>
      </Fade>
    </Scene>
  );
}
