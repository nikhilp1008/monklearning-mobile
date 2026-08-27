/**
 * C11 Ch02 · Section 25 — "Worked example (JEE Main): photons per second from a laser"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 7.59, 20.22, 35.41, 46.68, 51.46, 58.11, 71.51]):
 *  0 anchor: a very common JEE Main structure: power → photons per second
 *  1 given: He-Ne laser, λ=632.8nm, P=5.0mW. Photons/sec?
 *  2 formula: E = 1240/632.8 = 1.96 eV = 3.14×10⁻¹⁹ J
 *  3 explain: power is energy/sec, so divide power by energy per photon
 *  4 formula: N = P/E = 5.0×10⁻³/3.14×10⁻¹⁹
 *  5 formula (high, GREEN): N = 1.59×10¹⁶ photons s⁻¹
 *  6 land: answer, about 1.6×10¹⁶ photons every second
 *  7 guardrail (high, RED): template — wavelength → energy, then power/energy
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x260..820 y96..130
 *  b2 | formula chip        | Chip  | x260..820 y148..182
 *  b3 | explain caption     | T mid | x540 y208
 *  b4 | formula chip        | Chip  | x300..780 y234..266
 *  b5 | formula chip (GRN)  | Chip  | x330..750 y282..318
 *  b6 | answer caption      | T mid | x540 y346
 *  b7 | guardrail (RED)     | Chip  | x210..870 y372..408
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[JEE Main] photons per second from a laser", "[JEE Main] laser se photons per second")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "a very common JEE Main structure: power → photons per second",
            "ek bahut common JEE Main structure: power → photons per second"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={260} y={96} w={560} h={34} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          {t(
            "GIVEN: He-Ne laser, λ=632.8 nm, P=5.0 mW. Photons/sec?",
            "GIVEN: He-Ne laser, λ=632.8 nm, P=5.0 mW. Photons/sec?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={260} y={148} w={560} h={34} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"E = 1240/632.8 = 1.96 eV = 3.14×10⁻¹⁹ J"}
        </Chip>
      </Fade>

      {/* beat 3 — explain */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={208} size={12} fill={INK} script>
          {t(
            "power is energy per second, so divide power by energy per photon",
            "power energy per second hai, toh power ko energy per photon se divide karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={300} y={234} w={480} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"N = P/E = 5.0×10⁻³ / 3.14×10⁻¹⁹"}
        </Chip>
      </Fade>

      {/* beat 5 — formula (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={282} w={420} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"N = 1.59×10¹⁶ photons s⁻¹"}
        </Chip>
      </Fade>

      {/* beat 6 — land: the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={346} size={13} fill={GREEN} script>
          {t(
            "answer: about 1.6×10¹⁶ photons every second",
            "answer: lagbhag 1.6×10¹⁶ photons har second"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high, RED): the template */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={372} w={660} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "template: wavelength → energy, then power over energy",
            "template: wavelength → energy, phir power over energy"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
