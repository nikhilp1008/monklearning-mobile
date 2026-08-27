/**
 * C11 Ch02 · Section 26 — "Worked example (JEE Advanced): two stopping potentials"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 8.11, 22.7, 33.96, 44.63, 52.39, 65.11, 78.25]):
 *  0 anchor: the signature JEE Advanced move — almost mechanical once seen
 *  1 given: 300nm→V₀=1.85V; 400nm→V₀=0.82V. Find h and W₀
 *  2 formula: eV₁=hc/λ₁−W₀, eV₂=hc/λ₂−W₀
 *  3 guardrail (high, RED): subtract the two equations to KILL W₀
 *  4 formula: e(V₁−V₂) = hc(1/λ₁ − 1/λ₂)
 *  5 formula (high, GREEN): 1.85−0.82 = 1240(1/300−1/400) = 1.03 eV
 *  6 explain: 1.03 V = 1.03 eV — they match, confirming h
 *  7 formula (high, GREEN): W₀ = 1240/300 − 1.85 = 4.13 − 1.85 = 2.28 eV
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x230..850 y96..130
 *  b2 | formula chip        | Chip  | x270..810 y148..182
 *  b3 | guardrail caption   | T mid | x540 y208
 *  b4 | formula chip        | Chip  | x310..770 y234..266
 *  b5 | formula chip (GRN)  | Chip  | x260..820 y282..318
 *  b6 | explain caption     | T mid | x540 y346
 *  b7 | formula chip (GRN)  | Chip  | x260..820 y372..408
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("[JEE Advanced] verify h and find the work function", "[JEE Advanced] h verify karo, work function nikaalo")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the signature JEE Advanced move — almost mechanical once you see it",
            "signature JEE Advanced move — dekhte hi lagbhag mechanical"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={230} y={96} w={620} h={34} fill={CREAM} stroke={MUTED} textFill={RED} size={12} script={false}>
          {t(
            "GIVEN: 300nm→V₀=1.85V; 400nm→V₀=0.82V. Find h and W₀",
            "GIVEN: 300nm→V₀=1.85V; 400nm→V₀=0.82V. h aur W₀ nikaalo"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={270} y={148} w={540} h={34} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"eV₁ = hc/λ₁ − W₀,   eV₂ = hc/λ₂ − W₀"}
        </Chip>
      </Fade>

      {/* beat 3 — guardrail (high, RED): the signature move */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={208} size={12} fill={RED} script>
          {t(
            "subtract the two equations to KILL W₀ — the signature move",
            "dono equations subtract karo W₀ KILL karne ke liye — signature move"
          )}
        </T>
      </Fade>

      {/* beat 4 — formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={310} y={234} w={460} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"e(V₁ − V₂) = hc(1/λ₁ − 1/λ₂)"}
        </Chip>
      </Fade>

      {/* beat 5 — formula (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={260} y={282} w={560} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"1.85 − 0.82 = 1240(1/300 − 1/400) = 1.03 eV"}
        </Chip>
      </Fade>

      {/* beat 6 — explain: the match */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={346} size={12} fill={INK} script>
          {t(
            "left side 1.03 V, right side 1.03 eV — they match, confirming h",
            "baayi side 1.03 V, daayi side 1.03 eV — match karte hain, h confirm"
          )}
        </T>
      </Fade>

      {/* beat 7 — formula (high, GREEN): the work function */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={372} w={560} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"W₀ = 1240/300 − 1.85 = 4.13 − 1.85 = 2.28 eV"}
        </Chip>
      </Fade>
    </Scene>
  );
}
