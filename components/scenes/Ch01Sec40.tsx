/**
 * Ch01 · Section 40 — "Derivation C: error in a power, and the rules put to work"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 34.5, 54.5, 65.8, 88.4, 113.2, 136.2]):
 *  0 title + x = aᵖ
 *  1 the repeated-product trick → Δx/x = p·Δa/a, and the stacked general form
 *  2 takeaway chips: square doubles, root halves; denominator still +
 *  3 divider — now a real plate
 *  4 the plate drawn with its two measurements; product rule fires
 *  5 into relative currency: 0.00307 + 0.00362 = 0.00669
 *  6 back to absolute: A = 224.94, ΔA ≈ 1.5 cm²
 *  7 report chip 225 ± 2 + the currency-fluency moral
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 62 · "x = aᵖ" (sans 22) (150, bl 116)
 *  b1 | trick (script 15) x300 st bl 116 · result (sans 20) x60 st bl 164 ·
 *       general (sans 17) x340 st bl 164
 *  b2 | chips y196..234: x60..340 / 380..640
 *  b3 | divider y252 · line (script 15) mid bl 284
 *  b4 | rect x60..300 y310..470 · l-label mid-180 bl 496 · b-label x310 st bl 394 ·
 *       rule note (script 14) x520 st bl 330
 *  b5 | rows (sans 16) x520 st bl 370 · x560 st bl 402 · note (script 13, red) x520 st bl 436
 *  b6 | rows (sans 16) x520 st bl 474 / 506
 *  b7 | chip x520..760 y530..574 · moral (script 14, green) x60..480 bl 556
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the shortest derivation */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("derivation C — powers, then a real plate", "derivation C — powers, phir asli plate")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={150} y={116} size={22} fill={INK} weight={800}>
          x = aᵖ
        </T>
      </Fade>

      {/* beat 1 — a repeated product */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={300} y={116} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "= a · a · … · a, p times over — that's just a product!",
            "= a · a · … · a, p baar — ye toh product hi hai!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={60} y={164} size={20} fill={INK} weight={800} anchor="start">
          Δx/x = p · Δa/a
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 17)}>
        <T x={340} y={164} size={17} fill={INK} weight={700} anchor="start">
          aᵖ bᵍ / cʳ  →  Δx/x = p·Δa/a + q·Δb/b + r·Δc/c
        </T>
      </Fade>

      {/* beat 2 — the two takeaways */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={60} y={196} w={300} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("square → ×2 · root → ×½", "square → ×2 · root → ×½")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <Chip x={400} y={196} w={280} h={38} fill={PAPER} stroke={RED} textFill={RED} size={15}>
          {t("denominator: STILL a plus", "denominator: PHIR BHI plus")}
        </Chip>
      </Fade>

      {/* beat 3 — to something concrete */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 60 252 H 1020"
        stroke={MUTED}
        sw={1.4}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={284} size={15} fill={MUTED} script>
          {t(
            "now a real plate — and watch the currencies switch",
            "ab ek asli plate — aur currency badalte dekho"
          )}
        </T>
      </Fade>

      {/* beat 4 — the plate */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 60 310 H 300 V 470 H 60 Z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={180} y={496} size={14} fill={INK} weight={600}>
          l = 16.30 ± 0.05 cm
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={314} y={394} size={14} fill={INK} weight={600} anchor="start">
          b = 13.80 ± 0.05 cm
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={540} y={330} size={14} fill={AMBER_DARK} script anchor="start">
          {t("area = l × b → a product → RELATIVE errors add", "area = l × b → product → RELATIVE errors judenge")}
        </T>
      </Fade>

      {/* beat 5 — into relative currency */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={370} size={16} fill={INK} weight={700} anchor="start">
          ΔA/A = 0.05/16.30 + 0.05/13.80
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={580} y={402} size={16} fill={INK} weight={700} anchor="start">
          = 0.00307 + 0.00362 = 0.00669
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={540} y={436} size={13} fill={RED} script anchor="start">
          {t(
            "same 0.05 cm — but the smaller quantity shouts louder",
            "0.05 cm dono ka — par chhoti quantity zyada chillati hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — back to absolute */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={474} size={16} fill={INK} weight={700} anchor="start">
          A = 16.30 × 13.80 = 224.94 cm²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={540} y={506} size={16} fill={INK} weight={700} anchor="start">
          ΔA = 224.94 × 0.00669 ≈ 1.5 cm²
        </T>
      </Fade>

      {/* beat 7 — report, and the moral */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={520} y={530} w={240} h={44} fill={INK} textFill={CREAM} size={19} script={false}>
          A = 225 ± 2 cm²
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={60} y={556} size={14} fill={GREEN} script anchor="start">
          {t(
            "absolute → relative (the rule) → absolute (the answer): know your currency",
            "absolute → relative (rule ke liye) → absolute (jawab ke liye): currency pehchano"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
