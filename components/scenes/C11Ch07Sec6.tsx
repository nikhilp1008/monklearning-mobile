/**
 * C11 Ch07 · Section 6 — "The charge-balance master relation & the O.N. reference values"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * section_type: formulas — a clean reference sheet, everything accumulates (no erasing).
 *
 * Beats (en [0, 7.08, 16.73, 26.03, 33.28, 43.01, 49.83, 64.85]):
 *  0 heading "the ONE engine of this subtopic"
 *  1 master formula boxed: Σ(O.N.) = net charge
 *  2 sub-note: neutral → 0 · ion → its charge
 *  3 heading "usual O.N. values to memorise" + underline
 *  4 row of 4 chips: Group1=+1, Group2=+2, Al=+3, F=−1
 *  5 line: H=+1 (metal hydrides → −1)
 *  6 line: O=−2 (peroxide/superoxide/OF₂/O₂F₂ exceptions)
 *  7 red-margin closer: O.N. is dimensionless, no SI unit, has a sign
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)     | T mid | x540 bl108
 *  b1 | box + formula (sans28)   | Fade+rect+T | x200..880 y140..200, text bl178
 *  b2 | sub-note (sans18 amber)  | T mid | x540 bl225
 *  b3 | heading (sans20 800)     | T st  | x64 bl270, underline y280
 *  b4 | 4 chips (h36)            | Chip  | y290..326 x64/214/364/474
 *  b5 | line (sans19)            | T st  | x64 bl360
 *  b6 | line (sans17)            | T st  | x64 bl410
 *  b7 | margin bar + line (sans18)| Draw+T| x64 y440..475, text bl462
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("one equation runs this whole subtopic", "ek hi equation is poore subtopic ko chalata hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={18} fill={INK} weight={700}>
          {t("the ONE engine of this subtopic", "is subtopic ka EK hi engine")}
        </T>
      </Fade>

      {/* ===== beat 1 — master formula, boxed ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Rect x={200} y={140} width={680} height={60} rx={8} fill={CREAM} stroke={RED} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={178} size={26} fill={RED} weight={800}>
          Σ (O.N.) = net charge
        </T>
      </Fade>

      {/* ===== beat 2 — sub-note ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={225} size={18} fill={AMBER_DARK}>
          {t("neutral molecule → 0   ·   ion → its charge", "neutral molecule → 0   ·   ion → apna charge")}
        </T>
      </Fade>

      {/* ===== beat 3 — reference-values heading ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={64} y={270} size={20} fill={INK} weight={800} anchor="start">
          {t("USUAL O.N. VALUES TO MEMORISE", "USUAL O.N. VALUES — yaad rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 64 280 L 560 280" stroke={AMBER} sw={2} dur={0.6} />

      {/* ===== beat 4 — group/Al/F chips ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={64} y={290} w={140} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {t("Group 1 = +1", "Group 1 = +1")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Chip x={214} y={290} w={140} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {t("Group 2 = +2", "Group 2 = +2")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={364} y={290} w={100} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          Al = +3
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={474} y={290} w={100} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          F = −1
        </Chip>
      </Fade>

      {/* ===== beat 5 — hydrogen ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={360} size={19} fill={INK} anchor="start">
          {t("H = +1   (metal hydrides → −1)", "H = +1   (metal hydrides mein → −1)")}
        </T>
      </Fade>

      {/* ===== beat 6 — oxygen ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={64} y={410} size={17} fill={INK} anchor="start">
          O = −2   (peroxide −1  ·  superoxide −½  ·  OF₂ +2  ·  O₂F₂ +1)
        </T>
      </Fade>

      {/* ===== beat 7 — dimensionless closer ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 440 L 64 475" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={462} size={18} fill={RED} script anchor="start">
          {t("O.N. is dimensionless — no SI unit, just a signed count", "O.N. dimensionless hai — SI unit nahi, bas ek signed count")}
        </T>
      </Fade>
    </Scene>
  );
}
