/**
 * C11 Ch02 · Section 23 — "Worked example (CBSE): FM radio photon"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Re-verified against real audio/reveals (en [0,6.83,17.24,29.44,38.06,
 * 45.31,55.72,66.9]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: a friendly warm-up problem
 *  1 given: FM station at 95.0 MHz — find λ and E(photon)
 *  2 formula: λ = c/ν = 3×10⁸/95.0×10⁶ = 3.16 m
 *  3 formula: E = hν = (6.626×10⁻³⁴)(95.0×10⁶)
 *  4 land (high, GREEN): E = 6.29×10⁻²⁶ J
 *  5 explain: the answer stated together
 *  6 guardrail (high): tiny photon energy — why radio is harmless
 *  7 explain: the reusable template
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 size15 script red
 *  b0 | anchor caption      | T mid | x540 y76             [dims@b1]
 *  b1 | given chip          | Chip  | x260..820 y96..132
 *  b2 | λ formula chip      | Chip  | x310..770 y150..182
 *  b3 | E formula chip      | Chip  | x320..760 y200..232
 *  b4 | land box (GREEN)    | Chip  | x390..690 y250..288
 *  b5 | answer caption      | T mid | x540 y320
 *  b6 | guardrail (RED)     | Chip  | x300..780 y350..386
 *  b7 | template caption    | T mid | x540 y420
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("[CBSE] wavelength and photon energy of an FM signal", "[CBSE] FM signal ki wavelength aur photon energy")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("a friendly warm-up problem", "ek friendly warm-up problem")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={260} y={96} w={560} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("GIVEN: FM station, ν = 95.0 MHz. Find (a) λ  (b) E(photon)", "GIVEN: FM station, ν = 95.0 MHz. (a) λ  (b) E(photon) nikaalo")}
        </Chip>
      </Fade>

      {/* beat 2 — wavelength */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={310} y={150} w={460} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          λ = c/ν = 3×10⁸ / 95.0×10⁶ = 3.16 m
        </Chip>
      </Fade>

      {/* beat 3 — photon energy setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={320} y={200} w={440} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          E = hν = (6.626×10⁻³⁴)(95.0×10⁶)
        </Chip>
      </Fade>

      {/* beat 4 — land (high, GREEN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={390} y={250} w={300} h={38} fill={GREEN} textFill="#fff" size={18} script={false}>
          E = 6.29 × 10⁻²⁶ J
        </Chip>
      </Fade>

      {/* beat 5 — the answer, stated together */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={320} size={13} fill={GREEN} script>
          {t("answer: λ = 3.16 m;  E ≈ 6.29×10⁻²⁶ J", "answer: λ = 3.16 m;  E ≈ 6.29×10⁻²⁶ J")}
        </T>
      </Fade>

      {/* beat 6 — guardrail (high): why radio is harmless */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={300} y={350} w={480} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("tiny per-photon energy — why radio waves are harmless", "tiny per-photon energy — isliye radio waves harmless hain")}
        </Chip>
      </Fade>

      {/* beat 7 — the reusable template */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={420} size={12} fill={INK} script>
          {t("template: c = νλ → λ, then E = hν → photon", "template: c = νλ → λ, phir E = hν → photon")}
        </T>
      </Fade>
    </Scene>
  );
}
