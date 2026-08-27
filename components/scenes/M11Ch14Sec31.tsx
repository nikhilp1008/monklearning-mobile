/**
 * M11 Ch14 · Section 31 — "More than two events: inclusion–exclusion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Extends the Sec22
 * VennShade technique to three circles — VennShade's clip-path
 * composition computes the TRUE triple intersection automatically
 * (include:[A,B,C]), not a hand-approximated center lens.
 *
 * Beats (board_reveal_at_english [0,10.41,25.86,36.78,48.64,60.33,70.74,83.63]):
 *  0 heading
 *  1 two events double-count the overlap once; three events worse
 *  2 recap: P(A∪B) = P(A)+P(B)−P(A∩B)
 *  3 (HIGH) P(A∪B∪C) = ΣP(single) − Σ P(pair) + P(triple)
 *  4 GUARDRAIL: pattern — add singles, subtract pairs, add back triple
 *  5 the same pieces answer "exactly one" and "neither" too
 *  6 P(exactly one of A,B) = P(A)+P(B)−2P(A∩B)
 *  [group A erased at beat>=7]
 *  7 diagram: 3-circle Venn, true triple-overlap shaded green ("add back")
 *
 * Layout plan (Group A compact centered, erased beat>=7; Group B fresh
 * full-canvas 3-circle diagram, A(370,250,95)/B(490,250,95)/C(430,345,95);
 * longer language counts):
 *  b1 | sentence (15, ink)                          | T mid | x180..900 y127..143
 *  b2 | "P(A∪B)=P(A)+P(B)−P(A∩B)" (16, ink)          | T mid | y172
 *  b3 | HIGH formula, 2 lines (17/16, green)           | T mid | y210 / y235
 *  b4 | guardrail chip (red, w720 h40)                   | Chip  | x180..900 y265..305
 *  b5 | sentence (15, ink)                                | T mid | y335
 *  b6 | "P(exactly one)=P(A)+P(B)−2P(A∩B)" (16)             | T mid | y365
 *  [group A erased beat>=7]
 *  b7 | 3 circles + labels + shaded triple center             | Draw/T/VennShade
 *  b7 | formula recap (right column) + caption (below)          | T
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, VennShade } from "./math-kit";

const GREEN_FILL = "#1C9B57";

export default function M11Ch14Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 7;

  const A = { cx: 340, cy: 250, r: 95 };
  const B = { cx: 460, cy: 250, r: 95 };
  const C = { cx: 400, cy: 345, r: 95 };
  const box = { x: 200, y: 140, w: 400, h: 350 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("add singles, subtract pairs, add back the triple", "singles jodo, pairs ghatao, triple wapas jodo")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-6 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("More than two events: inclusion–exclusion", "Do se zyada events: inclusion–exclusion")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={135} size={15} fill={INK} weight={600}>
          {t("two events double-count the overlap once — three events, worse", "do events overlap ek baar double-count karte hain — teen mein, aur zyada")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={16} fill={INK} weight={700}>
          {"P(A∪B) = P(A)+P(B)−P(A∩B)"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={212} size={17} fill={GREEN} weight={800}>
          {"P(A∪B∪C) = P(A)+P(B)+P(C)"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.0)}>
        <T x={540} y={236} size={16} fill={GREEN} weight={800}>
          {"−P(A∩B)−P(B∩C)−P(A∩C) +P(A∩B∩C)"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={180} y={264} w={720} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("add singles, subtract pairs, add back the triple — alternating signs", "singles jodo, pairs ghatao, triple wapas jodo — alternating signs")}
        </Chip>
      </Fade>

      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={335} size={15} fill={INK} weight={600}>
          {t('the same pieces answer "exactly one" and "neither" too', '"exactly one" aur "neither" bhi inhi pieces se aata hai')}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={368} size={16} fill={INK} weight={700}>
          {"P(exactly one of A,B) = P(A)+P(B)−2P(A∩B)"}
        </T>
      </Fade>

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={circleD(C.cx, C.cy, C.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={300} y={175} size={17} fill={INK} weight={700}>A</T>
        <T x={500} y={175} size={17} fill={INK} weight={700}>B</T>
        <T x={400} y={455} size={17} fill={INK} weight={700}>C</T>
      </Fade>
      <VennShade on={beat >= 7} delay={dl(7, 2.0)} include={[A, B, C]} fill={GREEN_FILL} opacity={0.55} {...box} />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={400} y={285} size={13} fill="#fff" weight={800}>ABC</T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={700} y={220} size={16} fill={INK} anchor="start" weight={700}>
          {"+P(A) +P(B) +P(C)"}
        </T>
        <T x={700} y={250} size={16} fill={RED} anchor="start" weight={700}>
          {"−P(A∩B) −P(B∩C) −P(A∩C)"}
        </T>
        <T x={700} y={280} size={16} fill={GREEN} anchor="start" weight={800}>
          {"+P(A∩B∩C)"}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={540} y={500} size={14} fill={GREEN} weight={700}>
          {t("center = A∩B∩C — subtracted 3× by the pairs, added back once", "center = A∩B∩C — pairs se 3× ghata, wapas ek baar jodo")}
        </T>
      </Fade>
    </Scene>
  );
}
