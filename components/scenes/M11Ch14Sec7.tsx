/**
 * M11 Ch14 · Section 7 — "Mutually exclusive, exhaustive, and partitions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,8.87,17.07,31.06,37.97,44.97,56.06,72.7]):
 *  0 heading: "How two events relate"
 *  1 formula (HIGH): Mutually exclusive: A ∩ B = ∅
 *  2 caption: cannot occur together
 *  3 formula: Exhaustive: E₁ ∪ E₂ ∪ ⋯ ∪ Eₙ = S
 *  4 caption: at least one must occur
 *  5 formula (HIGH, ringed): Partition = both conditions together
 *  6 GUARDRAIL: partition needs BOTH — neither alone is enough
 *  [group A erased at beat>=7]
 *  7 final diagram: two Venn panels — overlapping (NOT me) vs disjoint (me)
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "Mutually exclusive: A∩B = ∅" (18,ink)   | T mid | x330..750 y131..151
 *  b2 | caption (13, muted)                       | T mid | x310..770 y166..179
 *  b3 | "Exhaustive: E₁∪E₂∪⋯∪Eₙ = S" (17,ink)     | T mid | x320..760 y203..224
 *  b4 | caption (13, muted)                       | T mid | x400..680 y233..246
 *  b5 | "Partition:" (16,green) + condition (17)  | T mid | x460..620 y263..283 / x260..820 y292..313
 *  b5 | ring around condition line                | Draw  | x260..820 y275..320
 *  b6 | guardrail chip (red, w700 h44)             | Chip  | x190..890 y345..389
 *  [group A erased beat>=7]
 *  b7 | left box(120,150,380,270) overlap A/B      | Draw/VennShade
 *  b7 | right box(580,150,380,270) disjoint A/B    | Draw/VennShade
 *  b7 | captions under each panel (14)              | T mid | y440..460
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";
const GREEN_FILL = "#1C9B57";

export default function M11Ch14Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 7;

  const leftBox = { x: 120, y: 150, w: 380, h: 270 };
  const A_left = { cx: 260, cy: 285, r: 78 };
  const B_left = { cx: 370, cy: 285, r: 78 };

  const rightBox = { x: 580, y: 150, w: 380, h: 270 };
  const A_right = { cx: 700, cy: 285, r: 60 };
  const B_right = { cx: 840, cy: 285, r: 60 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("a partition needs BOTH conditions at once", "partition ke liye DONO conditions chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={20} fill={INK} weight={700}>
          {t("How two events relate", "Do events kaise related hain")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 1-6 ===================== */}

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={18} fill={INK} weight={800}>
          {"Mutually exclusive: A ∩ B = ∅"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={13} fill={MUTED}>
          {t("cannot occur together — e.g. even & three, one roll", "saath nahi ho sakte — jaise even aur teen, ek roll")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={215} size={17} fill={INK} weight={700}>
          {"Exhaustive: E₁ ∪ E₂ ∪ ⋯ ∪ Eₙ = S"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={240} size={13} fill={MUTED}>
          {t("at least one of them must occur", "inmein se kam se kam ek hona chahiye")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={278} size={16} fill={GREEN} weight={800}>
          {t("Partition = both, together:", "Partition = dono, ek saath:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={306} size={16} fill={INK} weight={700}>
          {"Eᵢ ∩ Eⱼ = ∅ (i ≠ j)  and  E₁ ∪ ⋯ ∪ Eₙ = S"}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 5}
        delay={dl(5, 1.7)}
        d={ringD(540, 297, 300, 38)}
        stroke={AMBER_FILL}
        sw={2.2}
        dur={0.8}
      />

      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={190} y={352} w={700} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("needs BOTH conditions — neither alone is enough", "DONO conditions chahiye — akela kaafi nahi")}
        </Chip>
      </Fade>

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={roundRectD(leftBox.x, leftBox.y, leftBox.w, leftBox.h, 6)} stroke={MUTED} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={leftBox.x + 24} y={leftBox.y + 24} size={14} fill={MUTED} anchor="start" weight={700}>S</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={circleD(A_left.cx, A_left.cy, A_left.r)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={circleD(B_left.cx, B_left.cy, B_left.r)} stroke={INK} sw={2} dur={0.5} />
      <VennShade on={beat >= 7} delay={dl(7, 1.9)} include={[A_left, B_left]} fill={AMBER_FILL} {...leftBox} />
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <T x={A_left.cx - 30} y={leftBox.y + 40} size={16} fill={INK} weight={700}>A</T>
        <T x={B_left.cx + 30} y={leftBox.y + 40} size={16} fill={INK} weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={leftBox.x + leftBox.w / 2} y={445} size={14} fill={RED} weight={700}>
          {t("A ∩ B ≠ ∅ — NOT mutually exclusive", "A ∩ B ≠ ∅ — mutually exclusive nahi")}
        </T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 3.3)} d={roundRectD(rightBox.x, rightBox.y, rightBox.w, rightBox.h, 6)} stroke={MUTED} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 3.9)}>
        <T x={rightBox.x + 24} y={rightBox.y + 24} size={14} fill={MUTED} anchor="start" weight={700}>S</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.2)} d={circleD(A_right.cx, A_right.cy, A_right.r)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 4.6)} d={circleD(B_right.cx, B_right.cy, B_right.r)} stroke={INK} sw={2} dur={0.5} />
      <VennShade on={beat >= 7} delay={dl(7, 5.0)} include={[A_right]} fill={AMBER_FILL} {...rightBox} />
      <VennShade on={beat >= 7} delay={dl(7, 5.0)} include={[B_right]} fill={GREEN_FILL} {...rightBox} />
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <T x={A_right.cx} y={rightBox.y + 34} size={16} fill={INK} weight={700}>A</T>
        <T x={B_right.cx} y={rightBox.y + 34} size={16} fill={INK} weight={700}>B</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.0)}>
        <T x={rightBox.x + rightBox.w / 2} y={445} size={14} fill={GREEN} weight={700}>
          {t("A ∩ B = ∅ — mutually exclusive", "A ∩ B = ∅ — mutually exclusive")}
        </T>
      </Fade>
    </Scene>
  );
}
