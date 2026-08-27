/**
 * C11 Ch02 · Section 39 — "Worked example (JEE Main): standing wave in the n=2 orbit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 8.96, 19.11, 34.3, 44.97, 60.5, 67.93, 75.01]):
 *  0 anchor: turning the standing-wave idea into a numerical check
 *  1 given: n=2 (H), v₁=2.18×10⁶ m/s. Find λ, confirm 2πr=nλ
 *  2 formula: v₂ = v₁/n = 1.09×10⁶ m/s
 *  3 formula: λ = h/mv₂ = 6.68×10⁻¹⁰ m
 *  4 formula: r₂ = 2.116 Å, 2πr₂ = 1.33×10⁻⁹ m
 *  5 formula (high, GREEN): 2πr₂/λ ≈ 2 = n
 *  6 represent + guardrail (high): a 2-hump standing wave, exactly n=2
 *  7 explain: direct confirmation of the standing-wave derivation
 *
 * Layout plan (single column + small diagram, x540 center):
 *  title (always)          | T mid | x540 y52 size13 script red
 *  b0 | anchor caption      | T mid | x540 y76             [dims@b1]
 *  b1 | given chip          | Chip  | x230..850 y96..128
 *  b2 | v₂ chip             | Chip  | x310..770 y144..174
 *  b3 | λ chip              | Chip  | x200..880 y188..218
 *  b4 | r₂,2πr₂ chip        | Chip  | x300..780 y232..262
 *  b5 | ratio chip (GREEN)  | Chip  | x310..770 y276..310
 *  b6 | 2-hump wave diagram | Draw  | center (540,410) R55
 *  b6 | guardrail caption   | T mid | x540 y506
 *  b7 | confirmation cap    | T mid | x540 y540
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, RED, GREEN, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

function waveOrbitD(cx: number, cy: number, r: number, amp: number, bumps: number, steps = 140): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    const rr = r + amp * Math.cos(bumps * theta);
    const x = cx + rr * Math.cos(theta);
    const y = cy + rr * Math.sin(theta);
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d + "Z";
}

const WAVE2_D = waveOrbitD(540, 410, 55, 10, 2);

export default function C11Ch02Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("[JEE Main] de Broglie wave in the n=2 orbit", "[JEE Main] n=2 orbit mein de Broglie wave")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("turning the standing-wave idea into a numerical check", "standing-wave idea ko numerical check banana")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={230} y={96} w={620} h={32} fill={CREAM} stroke={MUTED} textFill={RED} size={12} script={false}>
          {t("GIVEN: n=2 (H), v₁=2.18×10⁶ m/s. Find λ, confirm 2πr=nλ", "GIVEN: n=2 (H), v₁=2.18×10⁶ m/s. λ nikaalo, 2πr=nλ confirm karo")}
        </Chip>
      </Fade>

      {/* beat 2 — v₂ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={310} y={144} w={460} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          v₂ = v₁/n = 2.18×10⁶/2 = 1.09×10⁶ m/s
        </Chip>
      </Fade>

      {/* beat 3 — λ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={200} y={188} w={680} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={11} script={false}>
          λ = h/mv₂ = 6.626×10⁻³⁴/(9.1×10⁻³¹)(1.09×10⁶) = 6.68×10⁻¹⁰ m
        </Chip>
      </Fade>

      {/* beat 4 — r₂ and circumference */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={300} y={232} w={480} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          r₂ = 0.529×4 = 2.116 Å,  2πr₂ = 1.33×10⁻⁹ m
        </Chip>
      </Fade>

      {/* beat 5 — the ratio (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={310} y={276} w={460} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          2πr₂/λ = 1.33×10⁻⁹/6.68×10⁻¹⁰ ≈ 2 = n
        </Chip>
      </Fade>

      {/* beat 6 — represent + guardrail: exactly 2 waves fit */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 485 410 A 55 55 0 1 1 595 410 A 55 55 0 1 1 485 410"
        stroke={MUTED}
        sw={1.2}
        dur={0.5}
      />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={WAVE2_D} stroke={RED} sw={2.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Circle cx={540} cy={410} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={506} size={13} fill={RED} script>
          {t(
            "exactly TWO de Broglie wavelengths fit the n=2 orbit!",
            "exactly TWO de Broglie wavelengths n=2 orbit mein fit!"
          )}
        </T>
      </Fade>

      {/* beat 7 — explain: direct confirmation */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={540} size={12} fill={GREEN} script>
          {t(
            "a direct confirmation of the standing-wave derivation",
            "standing-wave derivation ka direct confirmation"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
