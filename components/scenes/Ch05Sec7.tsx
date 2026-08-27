/**
 * Ch05 · Section 7 — "Pitfalls, and the dot-product reflex" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.0, 31.1, 55.9, 74.6, 91.4, 112.6, 113.6] · dur 136.3 —
 *        b6 lasts ~1s in en → en-tiny delays;
 *        hi [0, 8.9, 29.6, 53.2, 71.4, 87.4, 109.7, 130.4] · dur 153.3):
 *  0 title + subtitle
 *  1 P1: answer is not a vector (crossed arrow-chip)
 *  2 P2: signs must survive (−12 not +12)
 *  3 P3: dot vs cross panels
 *  4 formulas line + "work is a DOT"
 *  5 P4: zero dot ≠ zero vector
 *  6 reflex header (green bar)
 *  7 sign sanity + three carry lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  P1: title st x80 bl118 · chip x80..280 y130..166 · wrong chip x300..420 y130..166
 *      + mini arrow (355,140)→(370,140) + red cross · green cx245 bl205
 *  P2: title st x580 bl118 · work st x580 bl150 · "+12" cx790 bl150 + cross
 *      red cx700 bl190 · muted cx700 bl214
 *  P3: title st x80 bl258 · boxes x80..280 / x300..500 y270..350
 *      labels bl292 · texts bl320 · b4 formula st x80 bl376 · green cx280 bl414
 *  P4: title st x580 bl258 · lines st x580 bl290 / bl320 / bl348
 *  b6 | bar x66 y436..545 · header st x84 bl452
 *  b7 | lines st x84 bl482 / bl510 / bl538
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
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Dot-Product Reflex", "Pitfalls & the Dot-Product Reflex")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "four pitfalls — each one a mark someone loses this year",
            "chaar pitfalls — har ek wo mark jo is saal koi gawayega"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1: not a vector */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={118} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — the answer is NOT a vector", "pitfall 1 — answer vector NAHI hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={130} w={200} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          A · B = scalar
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Chip x={300} y={130} w={120} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          C
        </Chip>
        <Draw on={beat >= 1} delay={dl(1, 6)} d={arrowD(353, 140, 368, 140)} stroke={INK} sw={1.8} dur={0.2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8)} d={crossD(300, 130, 120, 36)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={245} y={205} size={13} fill={GREEN} script>
          {t(
            "the sign is real physics — but no direction, no arrow",
            "sign asli physics hai — par koi direction nahi, koi arrow nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2: signs must survive */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={580} y={118} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — every sign must survive", "pitfall 2 — har sign zinda bache")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={580} y={150} size={16} fill={INK} anchor="start" weight={700}>
          3 × (−4) = −12
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={790} y={150} size={16} fill={INK} weight={700}>
          +12
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 10)} d={crossD(773, 135, 34, 22)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={700} y={190} size={13} fill={RED} script>
          {t("slow down on exactly that step", "theek usi step par dheere chalo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 18)}>
        <T x={700} y={214} size={13} fill={MUTED} script>
          {t(
            "the only step where this error can happen",
            "yehi akela step hai jahan ye galti ho sakti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3: dot vs cross panels */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={258} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — dot vs cross", "pitfall 3 — dot vs cross")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 80 270 H 280 V 350 H 80 Z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={180} y={292} size={13} fill={AMBER_DARK} script>
          dot ·
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={180} y={320} size={13} fill={INK} weight={600}>
          {t("2 vectors → 1 number", "2 vectors → 1 number")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 7)} d="M 300 270 H 500 V 350 H 300 Z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={400} y={292} size={13} fill={AMBER_DARK} script>
          cross ×
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.2)}>
        <T x={400} y={320} size={12.5} fill={INK} weight={600}>
          {t("2 vectors → vector ⊥ both", "2 vectors → vector ⊥ dono")}
        </T>
      </Fade>

      {/* beat 4 — formulas + work is a DOT */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={376} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "dot: A B cos θ → scalar · cross: A B sin θ → vector",
            "dot: A B cos θ → scalar · cross: A B sin θ → vector"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={280} y={414} size={13} fill={GREEN} script>
          {t(
            "work is a DOT product — every single time",
            "work ek DOT product hai — har baar"
          )}
        </T>
      </Fade>

      {/* beat 5 — P4: zero dot ≠ zero vector */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={580} y={258} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — zero dot ≠ zero vector", "pitfall 4 — zero dot ≠ zero vector")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={580} y={290} size={13} fill={RED} script anchor="start">
          {t(
            "number-instinct: 'one of them must be zero' — ✗",
            "number waali instinct: 'koi ek zero hoga' — ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={580} y={320} size={13} fill={GREEN} script anchor="start">
          {t(
            "almost always: they are PERPENDICULAR",
            "lagbhag hamesha: wo PERPENDICULAR hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={580} y={348} size={13} fill={MUTED} script anchor="start">
          {t(
            "usually the whole point of the question",
            "aam taur par sawaal ka poora maqsad yahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the reflex (en: ~1s beat) */}
      <Draw on={beat >= 6} delay={dl(6, en ? 0.2 : 1)} d="M 66 436 v 109" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, en ? 0.4 : 2.5)}>
        <T x={84} y={452} size={13} fill={GREEN} script anchor="start">
          {t(
            "the reflex: dot product FIRST — zero? → 90° instantly, no magnitudes",
            "reflex: SABSE PEHLE dot product — zero? → turant 90°, koi magnitude nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — sign sanity + carry lines */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={482} size={13} fill={GREEN} script anchor="start">
          {t(
            "sign sanity: + → expect acute · − → expect obtuse — before the calculator",
            "sign sanity: + → acute expect karo · − → obtuse — calculator se pehle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={510} size={13} fill={INK} script anchor="start">
          {t(
            "carry three lines: dot → scalar · cross → vector",
            "teen lines saath rakho: dot → scalar · cross → vector"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={538} size={13} fill={INK} script anchor="start">
          {t(
            "like units → 1, unlike → 0 · zero dot → right angle",
            "same units → 1, alag → 0 · zero dot → right angle"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
