/**
 * C11 Ch02 · Section 10 — "Worked example (CBSE): identify the ion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples` — given →
 * set up → work it → answer box → sanity check.
 *
 * Beats (en [0, 8.45, 20.91, 35.33, 41.98, 61.7, 69.21, 76.54]):
 *  0 anchor: "a clean identification problem — free marks"
 *  1 given: cation M³⁺ has 23 electrons, 30 neutrons
 *  2 step 1: lost 3e⁻ ⇒ neutral atom had 23+3 = 26 electrons
 *  3 formula (high): Z = 26
 *  4 guardrail (high): always write the charge-adjustment line — step mark
 *  5 step 2: Z = 26 ⇒ iron (Fe)
 *  6 formula: A = Z + N = 26 + 30 = 56
 *  7 land (boxed GREEN): the full species ⁵⁶₂₆Fe³⁺
 *
 * Layout plan (single column, x540 center):
 *  title (always)             | T mid | x540 y60 size17 script red
 *  b0 | anchor caption         | T mid | x540 y92            [dims@b1]
 *  b1 | GIVEN chip              | Chip  | x280..800 y110..148
 *  b2 | step-1 text            | T mid | x540 y180
 *  b3 | Z=26 chip (AMBER)      | Chip  | x480..600 y200..238
 *  b4 | guardrail chip (RED)   | Chip  | x280..860 y250..282
 *  b5 | step-2 text            | T mid | x540 y310
 *  b6 | A=56 chip              | Chip  | x340..740 y335..373
 *  b7 | answer box (GREEN)     | Draw  | x460..660 y400..470
 *  b7 | 56 / Fe / 26 / 3+      | T     | inside the box, white
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={17} fill={RED} script>
          {t("[CBSE] identify the element and full symbol", "[CBSE] element aur poora symbol pehchano")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={13} fill={RED} script>
          {t("a clean identification problem — free marks", "ek clean identification problem — free marks")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={280} y={110} w={520} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          {t("GIVEN: cation M³⁺ → 23 electrons, 30 neutrons", "GIVEN: cation M³⁺ → 23 electrons, 30 neutrons")}
        </Chip>
      </Fade>

      {/* beat 2 — step 1: charge-adjustment */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={14} fill={INK} script>
          {t("Step 1 — lost 3e⁻: 23 + 3 = 26 electrons", "Step 1 — 3e⁻ khoye: 23 + 3 = 26 electrons")}
        </T>
      </Fade>

      {/* beat 3 — Z = 26 (high emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={480} y={200} w={120} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={20} script={false}>
          Z = 26
        </Chip>
      </Fade>

      {/* beat 4 — guardrail (high): the step-mark line */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={280} y={250} w={580} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "always write the charge-adjustment line — step mark!",
            "charge-adjustment line hamesha likho — step mark milta hai!"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — step 2: identify the element */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={14} fill={INK} script>
          {t("Step 2 — Z = 26 ⇒ iron (Fe)", "Step 2 — Z = 26 ⇒ iron (Fe)")}
        </T>
      </Fade>

      {/* beat 6 — A = Z + N */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={340} y={335} w={400} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          A = Z + N = 26 + 30 = 56
        </Chip>
      </Fade>

      {/* beat 7 — land: the full species */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.2)}
        d="M 460 400 h 200 v 70 h -200 z"
        stroke={GREEN}
        sw={2}
        dur={0.6}
        fill={GREEN}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={555} y={445} size={28} fill="#fff" weight={700}>
          Fe
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={515} y={418} size={15} fill="#fff" weight={700}>
          56
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={515} y={460} size={15} fill="#fff" weight={700}>
          26
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={605} y={422} size={15} fill="#fff" weight={700}>
          3+
        </T>
      </Fade>
    </Scene>
  );
}
