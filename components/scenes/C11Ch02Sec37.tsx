/**
 * C11 Ch02 · Section 37 — "Worked example (CBSE): radius and energy of He+ (n=3)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 8.19, 16.98, 30.63, 45.74, 53.76, 61.27, 70.06]):
 *  0 anchor: a clean plug-in exercising the scaling laws
 *  1 given: He⁺ → Z=2, n=3, a₀=0.529 Å
 *  2 formula (high, GREEN): r₃ = 0.529×n²/Z = 2.38 Å
 *  3 formula (high, GREEN): E₃ = −13.6×Z²/n² = −6.04 eV
 *  4 guardrail: use scaling forms directly, no rebuilding from constants
 *  5 explain: negative energy confirms bound electron
 *  6 explain: the answer stated together
 *  7 guardrail (high): the entire method is one plug-in
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 size14 script red
 *  b0 | anchor caption      | T mid | x540 y76             [dims@b1]
 *  b1 | given chip          | Chip  | x310..770 y96..130
 *  b2 | r₃ chip (GREEN)     | Chip  | x320..760 y148..184
 *  b3 | E₃ chip (GREEN)     | Chip  | x310..770 y204..240
 *  b4 | guardrail caption   | T mid | x540 y268
 *  b5 | explain caption     | T mid | x540 y304
 *  b6 | answer caption      | T mid | x540 y336
 *  b7 | guardrail chip      | Chip  | x260..820 y360..400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[CBSE] radius and energy, He⁺, n = 3", "[CBSE] radius aur energy, He⁺, n = 3")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("a clean plug-in exercising the scaling laws", "scaling laws ka clean plug-in")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={310} y={96} w={460} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("GIVEN: He⁺ → Z=2, n=3. Take a₀ = 0.529 Å", "GIVEN: He⁺ → Z=2, n=3. a₀ = 0.529 Å lo")}
        </Chip>
      </Fade>

      {/* beat 2 — radius (high, GREEN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={320} y={148} w={440} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          r₃ = 0.529×n²/Z = 0.529×9/2 = 2.38 Å
        </Chip>
      </Fade>

      {/* beat 3 — energy (high, GREEN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={310} y={204} w={460} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          E₃ = −13.6×Z²/n² = −13.6×4/9 = −6.04 eV
        </Chip>
      </Fade>

      {/* beat 4 — guardrail: use the scaling forms directly */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={268} size={12} fill={RED} script>
          {t(
            "use the scaling forms directly — no need to rebuild from constants",
            "scaling forms seedhe use karo — constants se dobara banane ki zaroorat nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — explain: negative energy means bound */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={304} size={12} fill={INK} script>
          {t("negative energy confirms the electron is bound", "negative energy confirm karti hai electron bound hai")}
        </T>
      </Fade>

      {/* beat 6 — the answer, stated together */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={336} size={13} fill={GREEN} script>
          {t("answer: r = 2.38 Å,  E = −6.04 eV", "answer: r = 2.38 Å,  E = −6.04 eV")}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): the entire method */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={360} w={560} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "plug n, Z into n²/Z and Z²/n² — that's the entire method",
            "n, Z ko n²/Z aur Z²/n² mein daalo — poora method yahi hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
