/**
 * M11 Ch02 · Section 4 — "The counting toolkit: cardinality, tuples, subsets, identities"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a growing formula sheet, one identity landed per beat.
 *
 * Beats (board_reveal_at_english [0, 9.22, 27.56, 45.65, 65.54, 82.35, 96.94, 107.09]):
 *  0 title (always-on) · 1 n(A×B)=n(A)·n(B)=pq
 *  2 (x,y)∈A×B ⟺ x∈A and y∈B · 3 n-fold product count + n(A^m)=(n(A))^m
 *  4 caption: n-tuples, R³ is 3-D space · 5 subsets of A×B = 2^pq (boxed)
 *  6 bridge note: each subset → a RELATION · 7 distributivity + the star identity (boxed)
 *
 * Layout plan — single centered column, boxes estimated (Anek ≈ baseline −0.78·size … +0.31·size):
 *  b0 | title (script 28, red)          | T mid | x300..780  y34..84  (bl 70)
 *  b1 | "n(A×B)=n(A)·n(B)=pq" (24,amber)| T mid | x378..702  y101..127 (bl 120)
 *  b2 | "(x,y)∈A×B⇔x∈A and y∈B" (20)    | T mid | x410..670  y155..181 (bl 175)
 *  b3 | n-fold count (18)               | T mid | x330..750  y211..231 (bl 225)
 *  b3 | n(A^m)=(n(A))^m (18)             | T mid | x460..620  y246..266 (bl 260)
 *  b4 | caption (14, muted)             | T mid | x300..780  y281..296 (bl 292)
 *  b5 | chip "Subsets of A×B=2^pq" (22) | Chip  | x388..692  y315..359
 *  b6 | margin bar (red)                 | Draw  | x60  y378..408
 *  b6 | bridge note (16, red)            | T st  | x76..500   y386..403 (bl 398)
 *  b7 | "A×(B∩C)=(A×B)∩(A×C)" (18)       | T mid | x360..720  y431..451 (bl 445)
 *  b7 | chip star identity (18, green)  | Chip  | x385..695  y470..508
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} anchor="middle" script>
          {t("Formulas to memorize — Cartesian product", "Yaad rakhne wale formulas")}
        </T>
      </Fade>

      {/* beat 1 — the counting rule */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={24} fill={AMBER_DARK} anchor="middle" weight={800}>
          n(A × B) = n(A) · n(B) = pq
        </T>
      </Fade>

      {/* beat 2 — the membership test */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={175} size={20} fill={INK} anchor="middle" weight={700}>
          (x, y) ∈ A×B  ⇔  x∈A and y∈B
        </T>
      </Fade>

      {/* beat 3 — n-fold product + the m-fold self-product */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={225} size={18} fill={INK} anchor="middle" weight={700}>
          n(A₁ × A₂ × ...) = n(A₁) · n(A₂) · ...
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={260} size={18} fill={INK} anchor="middle" weight={700}>
          n(A^m) = (n(A))^m
        </T>
      </Fade>

      {/* beat 4 — n-tuples, R³ as 3-D space */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={292} size={14} fill={MUTED} anchor="middle">
          {t(
            "(a₁, a₂, ...) is an ordered n-tuple; R³ = R×R×R is 3-D space",
            "(a₁, a₂, ...) ek ordered n-tuple hai; R³ = R×R×R 3-D space hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the bridge formula: how many subsets does A×B have */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={388} y={315} w={304} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={22} script={false}>
          {t("Subsets of A × B = 2^pq", "A×B ke subsets = 2^pq")}
        </Chip>
      </Fade>

      {/* beat 6 — the bridge note: each subset will be a relation */}
      <Draw on={beat >= 6} d="M 60 378 L 60 408" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={398} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "Each subset of A×B → soon called a RELATION!",
            "A×B ka har subset → jald hi RELATION kehlayega!"
          )}
        </T>
      </Fade>

      {/* beat 7 — distributivity, and the star identity for speed */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={445} size={18} fill={INK} anchor="middle" weight={700}>
          A × (B ∩ C) = (A×B) ∩ (A×C)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={385} y={470} w={310} h={38} fill={GREEN} textFill="#FFFEFB" size={18} script={false}>
          (A×B) ∩ (C×D) = (A∩C) × (B∩D)
        </Chip>
      </Fade>
    </Scene>
  );
}
