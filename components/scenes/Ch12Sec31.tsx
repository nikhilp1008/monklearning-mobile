/**
 * Ch12 · Section 31 — "Speeds, temperature, and the distribution" (formula sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.07, 28.16, 40.28, 59.99, 77.31, 90.71]):
 *  0 title + underline · 1 central bridge (½m⟨v²⟩=3/2kT, totals) · 2 three
 *    speed formulas · 3 ordering + ratio + RAM mnemonic · 4 scaling (∝√T,
 *    ∝1/√M) · 5 Maxwell distribution definition · 6 unit warnings + monatomic U
 *
 * Layout plan (Anek width≈0.5×size×chars):
 *  b0 | title (script 22, red)          | T mid | x270..810 y33..70 (bl58)
 *  b0 | underline                        | Draw  | y80 x330..750
 *  b1 | bridge chip                       | Chip  | x220..860 y98..134
 *  b2 | 3 speed chips                     | Chip  | y150..184 x120/420/720
 *  b3 | ordering line (13, ink, script)  | T mid | x540 y212
 *  b4 | scaling line (13, ink, script)   | T mid | x540 y240
 *  b5 | distribution line (13, ink)      | T mid | x540 y268
 *  b6 | unit warning (14, red)           | T mid | x540 y308
 *  b6 | monatomic U (14, green)          | T mid | x540 y334
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
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("speeds, temperature, and the distribution", "speeds, temperature, aur distribution")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 80 C 420 76, 660 84, 750 78" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — the central bridge */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={200} y={98} w={680} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          ½m⟨v²⟩ = (3/2)kʙT ⇒ total = (3/2)NkʙT = (3/2)nRT
        </Chip>
      </Fade>

      {/* beat 2 — three speed formulas */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={110} y={150} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          vrms = √(3RT/M)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={410} y={150} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          v̄ = √(8RT/πM)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Chip x={710} y={150} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          vₚ = √(2RT/M)
        </Chip>
      </Fade>

      {/* beat 3 — ordering, ratio, mnemonic */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={212} size={13} fill={INK} script>
          {t(
            "vrms > v̄ > vₚ, ratio ≈1.22:1.13:1 — hook: R·A·M, largest to smallest",
            "vrms > v̄ > vₚ, ratio ≈1.22:1.13:1 — hook: R·A·M"
          )}
        </T>
      </Fade>

      {/* beat 4 — scaling */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={13} fill={INK} script>
          {t(
            "all ∝ √T, ∝ 1/√M — ratio = √(T ratio) or √(inverse mass ratio)",
            "sab ∝ √T, ∝ 1/√M — ratio = √(T ratio) ya √(inverse mass ratio)"
          )}
        </T>
      </Fade>

      {/* beat 5 — the distribution itself */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={268} size={13} fill={INK}>
          {t(
            "Maxwell-Boltzmann: fraction between v & v+dv — peak at vₚ, area = 1",
            "Maxwell-Boltzmann: v aur v+dv ke beech fraction — peak vₚ par, area = 1"
          )}
        </T>
      </Fade>

      {/* beat 6 — unit warnings + monatomic U */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={308} size={14} fill={RED} weight={700}>
          {t("M must be kg/mol, T must be kelvin!", "M kg/mol mein, T kelvin mein hi!")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={334} size={14} fill={GREEN} script>
          {t(
            "monatomic: U = (3/2)nRT — the entire internal energy",
            "monatomic: U = (3/2)nRT — poori internal energy"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
