/**
 * Ch05 · Section 24 — "PE on a shelf, and the momentum-energy trap" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.6, 33.2, 47.3, 64.7, 89.5, 105.8, 118.5, 139.6] · dur 164.4;
 *        hi [0, 11.6, 31.7, 43.4, 60.2, 85.0, 99.7, 112.5, 132.9] · dur 157.7):
 *  0 title + subtitle
 *  1 Ex1 shelf drawing + reference note
 *  2 U = mgh = 150 J
 *  3 K on landing = 90 J
 *  4 60 J missing — air resistance
 *  5 Ex2 setup: K → 9K, p ×?
 *  6 the trap: hand wants ×9
 *  7 relation: p ∝ √K → ×3
 *  8 verdict chip + sticky rules
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex1: lbl st x80 bl116 · floor (90,330)-(420,330) · wall x400 y150..330
 *   shelf (300,180)-(400,180) · stone (350,168) r11 · dash (350,190)-(350,325)
 *   "3 m" end x325 bl260 · note cx250 bl360 · b2 st x90 bl395 · muted cx250 bl421
 *   b3 st x90 bl455 · b4 red st x90 bl483 · muted bl509
 *  Ex2: lbl st x560 bl116 · chip x560..1020 y126..164 · b6 red st x560 bl195
 *   b7 st x560 bl235 / bl265 / bl295 · b8 chip x560..760 y320..358
 *   green st x560 bl390 / bl416 · muted bl442
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("PE on a Shelf & the Momentum-Energy Trap", "Shelf par PE & Momentum-Energy Trap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "a clean storage question — then a trap for fast reasoners",
            "ek saaf storage sawaal — phir jaldi sochne walon ka trap"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 drawing */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — stone on a shelf (5 kg, 3 m)", "Ex 1 — shelf par patthar (5 kg, 3 m)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M 90 330 H 420" stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 400 150 V 330" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 300 180 H 400" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d="M 339 168 a 11 11 0 1 0 22 0 a 11 11 0 1 0 -22 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d="M 350 190 v 14 m 0 12 v 14 m 0 12 v 14 m 0 12 v 14 m 0 12 v 15" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={325} y={260} size={13} fill={INK} anchor="end" weight={700}>
          3 m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={250} y={360} size={13} fill={AMBER_DARK} script>
          {t(
            "'relative to the floor' → U = 0 at the floor",
            "'farsh ke saapeksh' → farsh par U = 0"
          )}
        </T>
      </Fade>

      {/* beat 2 — part (a) */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={395} size={15} fill={INK} anchor="start" weight={800}>
          U = mgh = 5 × 10 × 3 = 150 J
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={250} y={421} size={12.5} fill={MUTED} script>
          {t(
            "deposited into the stone-Earth system",
            "patthar-Earth system mein jama hui"
          )}
        </T>
      </Fade>

      {/* beat 3 — part (b) */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={90} y={455} size={15} fill={INK} anchor="start" weight={800}>
          K = ½ · 5 · 6² = 90 J
        </T>
      </Fade>

      {/* beat 4 — the missing 60 J */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={90} y={483} size={13} fill={RED} script anchor="start">
          {t(
            "150 → 90 : 60 J went missing — air resistance",
            "150 → 90 : 60 J gayab — air resistance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={90} y={509} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "an ideal drop would match exactly — the gap is real physics",
            "aadarsh girawat mein dono milte — ye gap khud asli physics hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex2 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={116} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET speed trap", "Ex 2 — NEET speed trap")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={126} w={460} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          {t(
            "K → 9 K · momentum grows by ? (options: 3 … 9)",
            "K → 9 K · momentum kitna badhega ? (options: 3 … 9)"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={195} size={13} fill={RED} script anchor="start">
          {t(
            "your hand wants ×9 — it feels right, it is wrong",
            "haath ×9 likhna chahta hai — sahi lagta hai, galat hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the relation */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={235} size={15} fill={INK} anchor="start" weight={700}>
          K = p² ⁄ 2m → p = √(2mK)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={560} y={265} size={15} fill={INK} anchor="start" weight={700}>
          {t("m unchanged → p ∝ √K", "m wahi → p ∝ √K")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={560} y={295} size={15} fill={INK} anchor="start" weight={800}>
          ratio = √9 = 3
        </T>
      </Fade>

      {/* beat 8 — verdict + sticky note */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <Chip x={560} y={320} w={200} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          {t("× 3, not × 9", "× 3, × 9 nahi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={560} y={390} size={13} fill={GREEN} script anchor="start">
          {t("energy ×n → momentum ×√n", "energy ×n → momentum ×√n")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={560} y={416} size={13} fill={GREEN} script anchor="start">
          {t("momentum ×n → energy ×n²", "momentum ×n → energy ×n²")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 18)}>
        <T x={560} y={442} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "the most-tested relation in this subtopic",
            "is subtopic ka sabse zyada test hone waala relation"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
