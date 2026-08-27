/**
 * C11 Ch09 · Section 5 — "Two classic cycloalkane traps" (tips)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.29, 15.12, 24.89, 38.95, 46.25, 55.2]):
 *  0 heading · 1 TRAP 1: CnH2n chip = shared formula · 2 RED: same formula ≠
 *  double bond · 3 cyclopropane even adds, but from strain not π · 4 TRAP 2:
 *  assuming every ring is flat · 5 RED: cyclohexane is puckered, not planar
 *  (+ chair icon) · 6 AMBER pro-tip: planarity safe only for smallest rings
 *
 * Layout plan:
 *  b0 | heading                | T mid | y91..109 (bl 105)
 *  b1 | "TRAP 1" + chip + text | T+Chip| y140..189
 *  b2 | margin bar + red note  | Draw+T| bar x60 y200..232 · text bl220
 *  b3 | triangle icon + note   | Draw+T| icon c(110,270) r18 · text bl275
 *  b4 | "TRAP 2" + text        | T     | y320..355
 *  b5 | margin bar + red note + chair icon | Draw+T | bar x60 y380..412 · bl400
 *  b6 | amber pro-tip bar      | Draw+T| bar x60 y430..462 · bl450
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
  INK,
  AMBER_DARK,
  AMBER,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

function chairD(cx: number, cy: number, s = 1) {
  return `M ${cx - 17 * s} ${cy + 5 * s} L ${cx - 8.5 * s} ${cy - 7 * s} L ${cx} ${cy + 3 * s} L ${cx + 8.5 * s} ${cy - 7 * s} L ${cx + 17 * s} ${cy + 5 * s}`;
}

export default function C11Ch09Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} script>
          {t("two classic cycloalkane traps", "do classic cycloalkane traps")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={105} size={18} fill={INK} weight={700}>
          {t("the two mistakes examiners exploit most", "wo do mistakes jo examiners sabse zyada exploit karte")}
        </T>
      </Fade>

      {/* beat 1 — trap 1: shared formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={155} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={165} y={140} w={75} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          CnH2n
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={260} y={163} size={16} fill={INK} anchor="start">
          {t("= shared by alkenes AND cycloalkanes", "= alkenes AUR cycloalkanes dono ka")}
        </T>
      </Fade>

      {/* beat 2 — red trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 200 L 60 232" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={76} y={220} size={17} fill={RED} script anchor="start">
          {t("same formula ≠ a double bond exists", "same formula ka matlab double bond nahi")}
        </T>
      </Fade>

      {/* beat 3 — cyclopropane still adds, but from strain */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(110, 270, 18, 3)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={150} y={275} size={14} fill={AMBER_DARK} script anchor="start">
          {t("cyclopropane even ADDS like an alkene — from strain, not a π bond", "cyclopropane bhi alkene jaisa ADD karta — strain se, π bond se nahi")}
        </T>
      </Fade>

      {/* beat 4 — trap 2: assuming flat */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={335} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={165} y={335} size={16} fill={INK} anchor="start">
          {t("assuming every ring is flat", "har ring ko flat maan lena")}
        </T>
      </Fade>

      {/* beat 5 — red: cyclohexane is puckered */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 380 L 60 412" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={400} size={17} fill={RED} script anchor="start">
          {t("cyclohexane is puckered (chair) — not planar", "cyclohexane puckered hai (chair) — planar nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={chairD(940, 396, 1.3)} stroke={INK} sw={2.4} dur={0.6} />

      {/* beat 6 — pro-tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 430 L 60 462" stroke={AMBER} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={450} size={17} fill={AMBER_DARK} script anchor="start">
          {t("Pro-tip: planarity is safe only for the smallest rings", "Pro-tip: planarity sirf sabse chhote rings ke liye safe hai")}
        </T>
      </Fade>
    </Scene>
  );
}
