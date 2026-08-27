/**
 * C11 Chemistry Ch04 · Section 16 — "Worked examples: PCl3 shape and XeF2 hybridisation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats. Part A erases before Part B.
 *
 * Beats (en [0, 14.34, 29.95, 39.77, 59.14, 74.07, 92.16]):
 *  0 intro: two molecules, CBSE shape + NEET trap
 *  1 Part A: PCl3 setup + structure (trigonal pyramidal build)
 *  2 SN = 4 → e-geom tetrahedral
 *  3 shape: trigonal pyramidal, angle ~100°
 *  4 Part A erases; Part B: XeF2 setup V/M/C/A
 *  5 H=5 → sp3d, structure with 3 equatorial lone pairs, linear
 *  6 trap chip: hybridisation is sp3d NOT sp
 *
 * Layout plan:
 *  b1-3 | PCl3 structure + calc | Draw/T | x215..345 y195..385 (erases at b4)
 *  b4-6 | XeF2 structure + calc | Draw/T | x440..640 y140..385
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const pActive = beat >= 1 && beat < 4;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked examples: PCl₃ and XeF₂", "Worked examples: PCl₃ aur XeF₂")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("two molecules: CBSE shape + NEET trap", "do molecules: CBSE shape + NEET trap")}
        </T>
      </Fade>

      {/* beat 1 — Part A: PCl3 */}
      <Fade on={pActive} delay={dl(1, 0.2)}>
        <T x={540} y={120} size={12} fill={INK}>
          {t(
            "PCl₃: P central, 5 valence e⁻ → 3 P–Cl bonds (3e⁻) → 1 lone pair left",
            "PCl₃: P central, 5 valence e⁻ → 3 P–Cl bonds (3e⁻) → 1 lone pair left"
          )}
        </T>
      </Fade>
      <Fade on={pActive} delay={dl(1, 0.7)}>
        <T x={280} y={230} size={18} weight={700} fill={INK}>
          P
        </T>
      </Fade>
      <Fade on={pActive} delay={dl(1, 1.0)}>
        <T x={215} y={290} size={14} weight={700} fill={INK}>
          Cl
        </T>
        <T x={280} y={315} size={14} weight={700} fill={INK}>
          Cl
        </T>
        <T x={345} y={290} size={14} weight={700} fill={INK}>
          Cl
        </T>
      </Fade>
      <Draw on={pActive} delay={dl(1, 1.4)} d={bondD(270.5, 238.8, 224.5, 281.2)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={pActive} delay={dl(1, 1.6)} d={bondD(280, 243, 280, 302)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={pActive} delay={dl(1, 1.8)} d={bondD(289.5, 238.8, 335.5, 281.2)} stroke={INK} sw={2} dur={0.35} />
      <LonePair on={pActive} delay={dl(1, 2.2)} cx={280} cy={195} angle={0} spread={9} r={3.5} />

      {/* beat 2 */}
      <Fade on={pActive && beat >= 2} delay={dl(2, 0.3)}>
        <T x={280} y={345} size={11.5} fill={INK}>
          {t("SN = 3σ + 1 LP = 4 → e-geom: tetrahedral", "SN = 3σ + 1 LP = 4 → e-geom: tetrahedral")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={pActive && beat >= 3} delay={dl(3, 0.3)}>
        <T x={280} y={368} size={12} weight={700} fill={GREEN}>
          {t(
            "shape: trigonal pyramidal (like NH₃) · angle ≈ 100°",
            "shape: trigonal pyramidal (NH₃ jaisa) · angle ≈ 100°"
          )}
        </T>
      </Fade>

      {/* beat 4 — Part B: XeF2 setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={140} size={12.5} fill={INK}>
          XeF₂: V = 8 (Xe), M = 2 (F), C = 0, A = 0
        </T>
      </Fade>

      {/* beat 5 — calc + structure */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={170} size={13} weight={700} fill={INK}>
          H = ½(8 + 2) = 5 → sp³d
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={255} size={18} weight={700} fill={INK}>
          Xe
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={440} y={255} size={16} weight={700} fill={INK}>
          F
        </T>
        <T x={640} y={255} size={16} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={bondD(520, 253, 455, 253)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={bondD(560, 253, 625, 253)} stroke={INK} sw={2} dur={0.35} />
      <LonePair on={beat >= 5} delay={dl(5, 1.8)} cx={540} cy={218} angle={0} spread={8} r={3.5} />
      <LonePair on={beat >= 5} delay={dl(5, 2.0)} cx={505} cy={295} angle={0} spread={8} r={3.5} />
      <LonePair on={beat >= 5} delay={dl(5, 2.2)} cx={575} cy={295} angle={0} spread={8} r={3.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={540} y={330} size={11.5} fill={INK}>
          {t("3 lone pairs (equatorial) → linear F–Xe–F", "3 lone pairs (equatorial) → linear F–Xe–F")}
        </T>
      </Fade>

      {/* beat 6 — trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={355} w={760} h={30} fill={RED} textFill="#fff" size={12} script={false}>
          {t(
            "trap: 2 bonds ≠ sp — 3 lone pairs count too! shape=linear, hybridisation=sp³d NOT sp",
            "trap: 2 bonds ≠ sp — 3 lone pairs bhi count hoti! shape=linear, hybridisation=sp³d hai, sp NAHI"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
