/**
 * C11 Ch02 · Section 40 — "Worked example (JEE Advanced): line count to shortest wavelength"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 9.05, 26.71, 39.94, 55.21, 66.22, 78.76, 88.32]):
 *  0 anchor: the signature JEE Advanced chain — three ideas, one cascade
 *  1 given: H-like ion, ground→excited, 6 lines. Find n; then He⁺ ΔE & λmin
 *  2 formula (high, GREEN): n(n−1)/2=6 ⇒ n=4
 *  3 formula: E₁=−54.4eV, E₄=−3.4eV (He⁺, Z=2) + represent: two energy levels
 *  4 formula (high, GREEN): ΔE = E₄−E₁ = 51.0 eV + red absorption arrow (1→4)
 *  5 explain: shortest λ = largest emission gap = direct 4→1 drop, same 51.0 eV
 *  6 formula (high, GREEN): λmin = hc/ΔE = 1240/51.0 = 24.3 nm + green emission arrow (4→1)
 *  7 guardrail (high): chain — line count → n → energy levels → photon wavelength
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 size13 script red
 *  b0 | anchor caption      | T mid | x540 y74             [dims@b1]
 *  b1 | given chip          | Chip  | x110..970 y92..122
 *  b2 | n=4 chip (GREEN)    | Chip  | x320..760 y134..166
 *  b3 | E levels chip       | Chip  | x240..840 y178..208
 *  b3 | level lines+labels  | Draw/T| x460..630 y280 / y400
 *  b4 | ΔE chip (GREEN)     | Chip  | x370..710 y220..252
 *  b4 | absorption arrow    | Draw  | x505 y400→280 (RED)
 *  b5 | explain caption     | T mid | x540 y444
 *  b6 | λmin chip (GREEN)   | Chip  | x330..750 y460..492
 *  b6 | emission arrow      | Draw  | x580 y280→400 (GREEN)
 *  b7 | guardrail chip      | Chip  | x170..910 y506..546
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
  arrowD,
  INK,
  GREEN,
  RED,
  CREAM,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

const LEVELS_D = "M 460 280 H 630 M 460 400 H 630";

export default function C11Ch02Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("[JEE Advanced] line count → n → shortest λ", "[JEE Advanced] line count → n → shortest λ")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t("the signature JEE Advanced chain — three ideas, one cascade", "signature JEE Advanced chain — teen ideas, ek cascade")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={110} y={92} w={860} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={11} script={false}>
          {t(
            "GIVEN: H-like ion, ground→excited, emits 6 lines. Find n; then He⁺: absorbed ΔE & λmin",
            "GIVEN: H-like ion, ground→excited, 6 lines emit. n nikaalo; phir He⁺: absorbed ΔE & λmin"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — n (high, GREEN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={320} y={134} w={440} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          n(n−1)/2 = 6 ⇒ n(n−1) = 12 ⇒ n = 4
        </Chip>
      </Fade>

      {/* beat 3 — energy levels (He⁺, Z=2) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={240} y={178} w={600} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={12} script={false}>
          E₁ = −13.6×4/1 = −54.4 eV,  E₄ = −13.6×4/16 = −3.4 eV
        </Chip>
      </Fade>

      {/* beat 3 — represent: the two-level ladder */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d={LEVELS_D} stroke={INK} sw={1.8} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={270} size={11} fill={INK}>
          n = 4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={418} size={11} fill={INK}>
          n = 1
        </T>
      </Fade>

      {/* beat 4 — absorbed energy gap (high, GREEN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={370} y={220} w={340} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          ΔE = E₄ − E₁ = 51.0 eV
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={arrowD(505, 400, 505, 280)} stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 5 — explain: shortest λ = largest gap = direct 4→1 drop */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={444} size={11} fill={INK} script>
          {t(
            "shortest λ = largest emission gap = direct 4→1 drop, same 51.0 eV",
            "shortest λ = sabse bada emission gap = direct 4→1 drop, wahi 51.0 eV"
          )}
        </T>
      </Fade>

      {/* beat 6 — shortest wavelength (high, GREEN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={330} y={460} w={420} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          λmin = hc/ΔE = 1240/51.0 = 24.3 nm
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={arrowD(580, 280, 580, 400)} stroke={GREEN} sw={2.2} dur={0.6} />

      {/* beat 7 — guardrail (high): the chain */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={170} y={506} w={740} h={40} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "chain: line count → n → energy levels → photon wavelength",
            "chain: line count → n → energy levels → photon wavelength"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
