/**
 * C11 Ch07 · Section 39 — Worked example (NEET speed trap): which pair reacts?
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 7.42, 19.46, 31.57, 37.63, 44.46, 55.47, 62.21]):
 *  0 heading: a metal reacts only if it sits ABOVE the salt's metal
 *  1 4 option chips: (a) Cu+ZnSO₄ (b) Ag+CuSO₄ (c) Zn+FeSO₄ (d) Cu+Al₂(SO₄)₃
 *  2 red-margin: check the direction in the activity series before predicting
 *  3 (a) Cu below Zn — cross out, ✗
 *  4 (b) Ag below Cu — cross out, ✗
 *  5 (c) Zn above Fe — ring green, ✓ REACTS + full equation
 *  6 (d) Cu below Al — cross out, ✗
 *  7 answer (c) + trap note
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | 4 chips (h36) x64/284/504/704 y130..166
 *  b2 | margin bar x64 y230..264, text (sans15 red) x80 bl248
 *  b3 | cross chip(a); verdict (sans12 red) x164 bl200
 *  b4 | cross chip(b); verdict (sans12 red) x384 bl200
 *  b5 | ring chip(c); verdict (sans12 green) x594 bl200; eqn (sans16 800 green) x540 bl290
 *  b6 | cross chip(d); verdict (sans12 red) x819 bl200
 *  b7 | answer (sans17 700) x540 bl330; trap (sans14 muted) x540 bl356
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
  crossD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("direction matters, not vibe", "direction matter karta hai, vibe nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("a metal reacts only if it sits ABOVE the salt's metal", "metal tabhi react karta jab wo salt ke metal se UPAR ho")}
        </T>
      </Fade>

      {/* ===== beat 1 — options ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={64} y={130} w={200} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          (a) Cu + ZnSO₄
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={284} y={130} w={200} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          (b) Ag + CuSO₄
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Chip x={504} y={130} w={180} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          (c) Zn + FeSO₄
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={704} y={130} w={230} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          (d) Cu + Al₂(SO₄)₃
        </Chip>
      </Fade>

      {/* ===== beat 2 — mental rule ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 64 230 L 64 264" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={80} y={248} size={15} fill={RED} weight={700} anchor="start">
          {t("check the direction in the activity series before predicting", "predict karne se pehle activity series ki direction check karo")}
        </T>
      </Fade>

      {/* ===== beat 3 — (a) no reaction ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={crossD(64, 130, 200, 36)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={164} y={200} size={12} fill={RED} weight={700}>
          Cu&lt;Zn ✗
        </T>
      </Fade>

      {/* ===== beat 4 — (b) no reaction ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={crossD(284, 130, 200, 36)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={384} y={200} size={12} fill={RED} weight={700}>
          Ag&lt;Cu ✗
        </T>
      </Fade>

      {/* ===== beat 5 — (c) reacts! ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={ringD(594, 148, 100, 26)} stroke={GREEN} sw={2.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={594} y={200} size={12} fill={GREEN} weight={700}>
          Zn&gt;Fe ✓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={540} y={290} size={17} fill={GREEN} weight={800}>
          Zn + FeSO₄ → ZnSO₄ + Fe
        </T>
      </Fade>

      {/* ===== beat 6 — (d) no reaction ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={crossD(704, 130, 230, 36)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={819} y={200} size={12} fill={RED} weight={700}>
          Cu&lt;Al ✗
        </T>
      </Fade>

      {/* ===== beat 7 — answer + trap ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={330} size={17} fill={GREEN} weight={700}>
          {t("Answer: (c)", "Answer: (c)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={356} size={14} fill={MUTED}>
          {t(
            "trap: picking (a)/(b) because the metals 'look reactive' — direction matters, not vibe",
            "trap: (a)/(b) chunna kyunki metals 'reactive lagte hain' — direction matter karta hai, vibe nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
