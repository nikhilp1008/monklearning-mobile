/**
 * Ch01 · Section 44 — "Example 4 [JEE Advanced]: when the standard rules simply fail"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 23.0, 37.4, 59.0, 83.8, 102.2, 126.0, 150.1]):
 *  0 tag + question card: parallel resistors with errors
 *  1 the circuit drawn + 1/R = 1/R₁ + 1/R₂
 *  2 step 1: R = 66.7 Ω (just circuit theory)
 *  3 the failure panel: coupled variables — quotient rule would double-count
 *  4 the clean route: the reciprocal form separates the variables
 *  5 differentiate → the boxed relation
 *  6 substitute → ΔR ≈ 1.3 Ω
 *  7 result chip + the whole family this unlocks
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..310 y40..78 · card x140..980 y88..148 · question bl 122
 *  b1 | circuit x60..300 y170..300 (two zigzag branches) · labels bl 182 / 296 ·
 *       relation (sans 18) x340 st bl 210 · note x340 st bl 242
 *  b2 | line (sans 17) x340 st bl 290
 *  b3 | panel x60..1020 y330..402 · line1 (script 14, red) bl 358 · line2 (script 13) bl 388
 *  b4 | route (script 14, green) x60..330 bl 432
 *  b5 | boxed result (sans 19) x400 st bl 432 · box x390..800 y408..444
 *  b6 | rows (sans 15/17) x60 st bl 476 / 508
 *  b7 | chip x620..880 y460..504 · family (script 14, green) x62 st bl 552 · bar x51
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const zig = (x: number, y: number) =>
  `M ${x} ${y} l 10 0 l 6 -10 l 12 20 l 12 -20 l 12 20 l 12 -20 l 6 10 l 10 0`;

export default function Ch01Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — do you know when your tools stop working? */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={250} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 4 · JEE ADVANCED", "EXAMPLE 4 · JEE ADVANCED")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 88 h 816 q 12 0 12 12 v 36 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={560} y={122} size={17} fill={INK} weight={700}>
          {t(
            "R₁ = 100 ± 2 Ω ∥ R₂ = 200 ± 4 Ω  →  find R and ΔR",
            "R₁ = 100 ± 2 Ω ∥ R₂ = 200 ± 4 Ω  →  R aur ΔR nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the circuit */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 60 235 H 100 M 100 200 V 270 M 100 200 H 130 M 100 270 H 130 M 230 200 H 260 M 230 270 H 260 M 260 200 V 270 M 260 235 H 300"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={zig(130, 200)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 3)} d={zig(130, 270)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={180} y={182} size={13} fill={INK} weight={600}>
          R₁ = 100 ± 2 Ω
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={180} y={298} size={13} fill={INK} weight={600}>
          R₂ = 200 ± 4 Ω
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={340} y={210} size={18} fill={INK} weight={800} anchor="start">
          1/R = 1/R₁ + 1/R₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={340} y={242} size={13} fill={MUTED} script anchor="start">
          {t("reciprocals add", "ulte judte hain")}
        </T>
      </Fade>

      {/* beat 2 — the resistance itself */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={340} y={290} size={17} fill={INK} weight={700} anchor="start">
          R = R₁R₂/(R₁+R₂) = 20000/300 = 66.7 Ω
        </T>
      </Fade>

      {/* beat 3 — where the question actually begins */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 72 330 h 936 q 12 0 12 12 v 48 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -48 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={540} y={358} size={14} fill={RED} script>
          {t(
            "quotient rule? NO — R₁ sits upstairs AND downstairs. the variables are COUPLED.",
            "quotient rule? NAHI — R₁ upar BHI hai, neeche BHI. variables COUPLED hain."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={540} y={388} size={13} fill={INK} script>
          {t(
            "blindly adding relative errors counts every error twice → confidently wrong",
            "aankh band karke relative errors jodo → har error do baar gina → poore bharose se galat"
          )}
        </T>
      </Fade>

      {/* beat 4 — the clean route */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={60} y={432} size={14} fill={GREEN} script anchor="start">
          {t("go back to 1/R — nothing is coupled there", "1/R par lauto — wahan kuch coupled nahi")}
        </T>
      </Fade>

      {/* beat 5 — differentiate: the boxed relation */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.5)}
        d="M 402 408 h 386 q 12 0 12 12 v 12 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={412} y={432} size={19} fill={INK} weight={800} anchor="start">
          ΔR = R² ( ΔR₁/R₁² + ΔR₂/R₂² )
        </T>
      </Fade>

      {/* beat 6 — substitute */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={476} size={15} fill={INK} weight={700} anchor="start">
          R² = 4448.9 ·   bracket = 0.0002 + 0.0001 = 0.0003
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={60} y={508} size={17} fill={INK} weight={700} anchor="start">
          ΔR = 4448.9 × 0.0003 ≈ 1.3 Ω
        </T>
      </Fade>

      {/* beat 7 — the result, and the family it unlocks */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={620} y={460} w={260} h={44} fill={INK} textFill={CREAM} size={18} script={false}>
          R = 66.7 ± 1.3 Ω
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 12)}
        d="M 51 530 L 51 560"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={62} y={552} size={14} fill={GREEN} script anchor="start">
          {t(
            "one technique: parallel resistors · thin lenses · series capacitors — the whole family unlocks",
            "ek technique: parallel resistors · thin lenses · series capacitors — poora khandaan khul gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
