/**
 * M11 Ch10 · Section 21 — "Ellipse: constant total distance to TWO foci"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 4 (The Ellipse), sec 21 of 27 in the chapter.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.94, 20.05, 31.91, 40.79, 50.6,
 * 61.35, 70.74]; reveals_hinglish = [0, 9.56, 19.46, 29.95, 37.63, 46.08,
 * 55.13, 64.43].
 *
 * LEFT (x80-480): the chapter's first real ellipse, drawn with the new
 * ellipseD primitive (a genuine rx≠ry ellipse, not a squished circle). Two
 * foci F1/F2 (computed via c=√(a²−b²) off the ACTUAL rx/ry, not guessed) +
 * a point P with PF1/PF2 drawn — literally the two-pins-and-a-string
 * picture. RIGHT (x560-1020): eccentricity range text + two small ellipseD
 * comparison icons (near-circular for e→0, elongated for e→1), each icon's
 * own foci likewise computed from its own rx/ry so "foci merge"/"foci
 * spread" is demonstrably true of the drawn shape, not just asserted.
 *
 * Beats:
 *  0(title,always-on) | "Ellipse: constant total distance to TWO foci"
 *  1 | string/tacks diagram: ellipse, F1, F2, P, PF1, PF2
 *  2 | PF1 + PF2 = constant = 2a
 *  3 | guardrail (red,HIGH): tacks=foci, string length fixes 2a
 *  4 | RIGHT: 0<e<1, squashed closed curve
 *  5 | RIGHT: e->0 icon (foci merge, near-circular)
 *  6 | RIGHT: e->1 icon (foci spread, elongated)
 *  7 | guardrail (red,HIGH): circle = ellipse with both foci at centre
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ellipseD, lineD } from "./math-kit";

const C1 = { x: 280, y: 300 };
const RX1 = 140, RY1 = 90;
const CF1 = Math.sqrt(RX1 * RX1 - RY1 * RY1);
const F1 = { x: C1.x - CF1, y: C1.y };
const F2 = { x: C1.x + CF1, y: C1.y };
const PELL = { x: C1.x + RX1 * Math.cos((50 * Math.PI) / 180), y: C1.y - RY1 * Math.sin((50 * Math.PI) / 180) };

const IC1 = { x: 780, y: 216 }, IRX1 = 40, IRY1 = 36;
const ICF1 = Math.sqrt(IRX1 * IRX1 - IRY1 * IRY1);
const IC2 = { x: 780, y: 340 }, IRX2 = 55, IRY2 = 18;
const ICF2 = Math.sqrt(IRX2 * IRX2 - IRY2 * IRY2);

export default function M11Ch10Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Ellipse: constant total distance to TWO foci", "Ellipse: DO foci se constant total distance")}
        </T>
      </Fade>

      {/* beat 1 — string/tacks diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "Pin a loop of string over two tacks and trace it taut: the path is an ellipse.",
            "Do tacks par string ka loop pin karo aur taut trace karo: path ek ellipse hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={ellipseD(C1.x, C1.y, RX1, RY1)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={F1.x} cy={F1.y} r={3.5} fill={INK} />
        <T x={F1.x} y={318} size={12} fill={INK} anchor="middle">F₁</T>
        <Circle cx={F2.x} cy={F2.y} r={3.5} fill={INK} />
        <T x={F2.x} y={318} size={12} fill={INK} anchor="middle">F₂</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={PELL.x} cy={PELL.y} r={3.5} fill={INK} />
        <T x={PELL.x + 8} y={PELL.y - 6} size={11} fill={INK} anchor="start">P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={lineD(PELL.x, PELL.y, F1.x, F1.y)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={lineD(PELL.x, PELL.y, F2.x, F2.y)} stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 2 — sum condition */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={280} y={420} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>PF₁ + PF₂ = constant = 2a</T>
      </Fade>

      {/* beat 3 — guardrail (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={280} y={448} size={13} fill={RED} anchor="middle" weight={700}>
          {t("The two tacks are the foci; string length fixes 2a.", "Do tacks hi foci hain; string ki length 2a fix karti hai.")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT: eccentricity range */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={140} size={13} fill={INK} anchor="middle">
          {t("0 < e < 1: eccentricity lives strictly between —", "0 < e < 1: eccentricity inke beech strictly rehta —")}
        </T>
        <T x={780} y={162} size={13} fill={INK} anchor="middle">
          {t("a squashed, CLOSED curve.", "ek squashed, CLOSED curve.")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: e -> 0 icon */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={ellipseD(IC1.x, IC1.y, IRX1, IRY1)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={IC1.x - ICF1} cy={IC1.y} r={2.5} fill={AMBER_DARK} />
        <Circle cx={IC1.x + ICF1} cy={IC1.y} r={2.5} fill={AMBER_DARK} />
        <T x={780} y={272} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("e → 0 (foci merge)", "e → 0 (foci merge)")}</T>
      </Fade>

      {/* beat 6 — RIGHT: e -> 1 icon */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={ellipseD(IC2.x, IC2.y, IRX2, IRY2)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Circle cx={IC2.x - ICF2} cy={IC2.y} r={2.5} fill={AMBER_DARK} />
        <Circle cx={IC2.x + ICF2} cy={IC2.y} r={2.5} fill={AMBER_DARK} />
        <T x={780} y={380} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("e → 1 (foci spread)", "e → 1 (foci spread)")}</T>
      </Fade>

      {/* beat 7 — guardrail (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={412} size={13} fill={RED} anchor="middle" weight={700}>
          {t("A circle is just the ellipse with", "Circle bas wo ellipse hai jiske")}
        </T>
        <T x={780} y={434} size={13} fill={RED} anchor="middle" weight={700}>
          {t("both foci at the CENTRE.", "dono foci CENTRE par hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
