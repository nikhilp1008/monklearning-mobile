/**
 * C11 Ch02 · Section 13 — "Worked example (JEE Advanced): closest approach on gold"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 8.7, 25.94, 40.45, 48.13, 58.71, 67.5, 80.13]):
 *  0 anchor: "the closest-approach formula meets a physical interpretation"
 *  1 given: 5.0 MeV α fired head-on at gold (Z=79) — find r₀, does it touch?
 *  2 formula: KE = 5.0×10⁶ × 1.6×10⁻¹⁹ = 8.0×10⁻¹³ J
 *  3 represent: the general r₀ = 2Ze²/(4πε₀·KE) fraction
 *  4 land (high, GREEN): plug in numbers ⇒ r₀ ≈ 4.5×10⁻¹⁴ m
 *  5 guardrail (high): to-scale bars — 45 fm ≫ 7 fm nuclear radius
 *  6 explain: turned back by pure Coulomb repulsion, never reaches surface
 *  7 guardrail: why Rutherford could treat the nucleus as a point charge
 *
 * Layout plan (single column, x540 center):
 *  title (always)            | T mid | x540 y58 size15 script red
 *  b0 | anchor caption        | T mid | x540 y86            [dims@b1]
 *  b1 | given chip            | Chip  | x160..920 y104..140
 *  b2 | KE conversion chip    | Chip  | x230..850 y152..184
 *  b3 | r₀ fraction (general) | T/Draw| numer y214 bar y226 denom y244
 *  b4 | plug-in box (GREEN)   | Chip  | x160..920 y270..312
 *  b5 | "to scale:" caption   | T mid | x540 y330
 *  b5 | nucleus bar (short)   | Fade  | x440..460 y345..361 (RED)
 *  b5 | r₀ bar (long)         | Fade  | x440..569 y375..391 (AMBER)
 *  b6 | "turned back…" text   | T mid | x540 y420
 *  b7 | guardrail (point Q)   | T mid | x540 y455
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={15} fill={RED} script>
          {t("[JEE Advanced] α-particle on a gold nucleus", "[JEE Advanced] α-particle gold nucleus par")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={86} size={12} fill={RED} script>
          {t(
            "the closest-approach formula meets a physical interpretation",
            "closest-approach formula ka physical interpretation"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={160} y={104} w={760} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t(
            "GIVEN: 5.0 MeV α → gold (Z=79). Find r₀ — does it touch?",
            "GIVEN: 5.0 MeV α → gold (Z=79). r₀ nikaalo — kya chhuta hai?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — KE conversion */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={230} y={152} w={620} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          KE = 5.0×10⁶ × 1.6×10⁻¹⁹ = 8.0×10⁻¹³ J
        </Chip>
      </Fade>

      {/* beat 3 — represent: the general formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={214} size={14} fill={INK}>
          2Ze²
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 505 226 L 575 226" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={244} size={14} fill={INK}>
          4πε₀ · KE
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={498} y={230} size={15} fill={INK} anchor="end">
          r₀ =
        </T>
      </Fade>

      {/* beat 4 — land (high, GREEN): plug in the numbers */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={160} y={270} w={760} h={42} fill={GREEN} textFill="#fff" size={14} script={false}>
          r₀ = 8.99×10⁹ × 2 × 79 × (1.6×10⁻¹⁹)² ÷ 8.0×10⁻¹³ ≈ 4.5×10⁻¹⁴ m
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high): to-scale comparison */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={330} size={11} fill={MUTED} script>
          {t("to scale (relative lengths):", "to scale (relative lengths):")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={440} y={345} width={20} height={16} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={470} y={357} size={12} fill={RED} anchor="start">
          {t("~7 fm (nucleus)", "~7 fm (nucleus)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Rect x={440} y={375} width={129} height={16} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={580} y={387} size={12} fill={AMBER_DARK} anchor="start">
          {t("~45 fm (r₀ — α stops here)", "~45 fm (r₀ — α yahin rukta hai)")}
        </T>
      </Fade>

      {/* beat 6 — explain: pure Coulomb repulsion */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={420} size={13} fill={INK} script>
          {t(
            "turned back by pure Coulomb repulsion — never reaches the surface",
            "pure Coulomb repulsion se wapas — surface tak kabhi nahi pahunchta"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: the point-charge approximation */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={455} size={13} fill={GREEN} script>
          {t(
            "this is why Rutherford could treat the nucleus as a point charge",
            "isiliye Rutherford nucleus ko point charge maan sakta tha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
