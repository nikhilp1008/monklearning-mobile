/**
 * C11 Ch02 · Section 9 — "Counting the atom: A, Z, N and closest approach"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — bookkeeping recap.
 *
 * Beats (en [0, 6.57, 17.15, 28.33, 40.19, 51.8, 59.48, 68.78]):
 *  0 anchor: "the bookkeeping formulas"
 *  1 formula (high, GREEN): A = Z + N ⇒ N = A − Z
 *  2 represent: the ᴬZX isotope notation, labelled
 *  3 guardrail (high): ions — start from Z, subtract cation / ADD anion
 *  4 formula: r₀ = z₁Ze² / (4πε₀·KE)
 *  5 guardrail: for an α-particle, z₁ = 2
 *  6 formula: Ā = Σaᵢ Aᵢ / 100
 *  7 note: aᵢ = % abundance, Aᵢ = isotopic mass
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y62 size18 script red
 *  b0 | anchor caption      | T mid | x540 y90            [dims@b1]
 *  b1 | A=Z+N card (GREEN)  | Chip  | x350..730 y108..142
 *  b2 | ᴬZX notation        | T     | Asup y200 X y225 Zsub y245
 *  b2 | label A / label Z   | T sta | x650 y200 / y245
 *  b2 | "N = A−Z" note      | T mid | x560 y275
 *  b3 | ion guardrail (RED) | Chip  | x270..810 y296..328
 *  b4 | r₀ fraction         | T/Draw| numer y354 bar y366 denom y384
 *  b5 | "z₁=2 for α" note   | T mid | x540 y414
 *  b6 | Ā fraction          | T/Draw| numer y448 bar y460 denom y478
 *  b7 | "aᵢ, Aᵢ" note       | T mid | x540 y508
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
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={18} fill={RED} script>
          {t("counting the atom: A, Z, N and closest approach", "atom counting: A, Z, N aur closest approach")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={90} size={13} fill={RED} script>
          {t("the bookkeeping formulas — straight off the page", "bookkeeping formulas — seedhe page se")}
        </T>
      </Fade>

      {/* beat 1 — A = Z + N (high emphasis) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={350} y={108} w={380} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          A = Z + N  ⇒  N = A − Z
        </Chip>
      </Fade>

      {/* beat 2 — represent: the isotope notation */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={530} y={200} size={18} fill={INK} weight={700}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={560} y={225} size={36} fill={INK} weight={700}>
          X
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={530} y={245} size={18} fill={INK} weight={700}>
          Z
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={650} y={200} size={12} fill={INK} anchor="start">
          {t("A = mass number (p+n)", "A = mass number (p+n)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={650} y={245} size={12} fill={INK} anchor="start">
          {t("Z = protons (atomic number)", "Z = protons (atomic number)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={560} y={275} size={12} fill={MUTED} script>
          N = A − Z
        </T>
      </Fade>

      {/* beat 3 — guardrail (high): ion counting */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={270} y={296} w={540} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "ions: start from Z — subtract for cation, ADD for anion",
            "ions: Z se shuru karo — cation ke liye ghatao, anion mein jodo"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — r₀ = z₁Ze² / (4πε₀·KE) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={354} size={15} fill={INK}>
          z₁Ze²
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 505 366 L 575 366" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={384} size={15} fill={INK}>
          4πε₀ · KE
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={498} y={370} size={16} fill={INK} anchor="end">
          r₀ =
        </T>
      </Fade>

      {/* beat 5 — guardrail: z₁ = 2 for an alpha particle */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={414} size={12} fill={RED} script>
          {t("for an α-particle, z₁ = 2", "α-particle ke liye, z₁ = 2")}
        </T>
      </Fade>

      {/* beat 6 — Ā = Σaᵢ Aᵢ / 100 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={448} size={15} fill={INK}>
          Σ aᵢAᵢ
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 505 460 L 575 460" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={478} size={15} fill={INK}>
          100
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={498} y={464} size={16} fill={INK} anchor="end">
          Ā =
        </T>
      </Fade>

      {/* beat 7 — note: what aᵢ and Aᵢ mean */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={508} size={12} fill={MUTED} script>
          {t("aᵢ = % abundance,  Aᵢ = isotopic mass", "aᵢ = % abundance,  Aᵢ = isotopic mass")}
        </T>
      </Fade>
    </Scene>
  );
}
