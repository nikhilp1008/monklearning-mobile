/**
 * Ch05 · Section 54 — "Collisions — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.0, 29.4, 43.9, 67.6, 92.4, 117.3, 135.1, 149.5] · dur 174.3;
 *        hi [0, 10.7, 28.7, 40.5, 65.4, 89.0, 113.8, 132.5, 146.1] · dur 170.9):
 *  0 title · 1 momentum ALWAYS chip · 2 elastic-only energy (avoid)
 *  3 shortcut + e chips · 4 explicit v₁ v₂ solution · 5 stick results
 *  6 units · 7 equal-mass box · 8 strategy band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  S1 chip x80..520 y108..146 · amber cx300 bl172
 *  S2 chip x560..940 y108..146 · red cx750 bl172
 *  S3 chips x80..340 / x370..640 y200..238 · note cx360 bl264
 *  S4 st x680 bl210 / bl236 (size 12) · muted cx800 bl264
 *  S5 st x80 bl310 / bl340 · muted cx320 bl366
 *  S6 st x640 bl310 / bl338 · S7 chip x640..1020 y360..398 · note cx830 bl424
 *  b8 | bar x66 y450..540 · lines st x84 bl470 / bl496
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

export default function Ch05Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Collisions — Key Formulas", "Collisions — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "formula-heavy — a clean full page, slotted into the strategy",
            "formula-bhaari — ek saaf poora page, strategy mein fit"
          )}
        </T>
      </Fade>

      {/* beat 1 — momentum, always */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={80} y={108} w={440} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={300} y={172} size={13} fill={AMBER_DARK} script>
          {t("ALWAYS — every collision, first line", "ALWAYS — har collision, pehli line")}
        </T>
      </Fade>

      {/* beat 2 — elastic-only energy */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={560} y={108} w={380} h={38} fill={CREAM} stroke={RED} textFill={INK} size={13} script={false}>
          {t("ΣK_before = ΣK_after (elastic only)", "ΣK_pehle = ΣK_baad (sirf elastic)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={750} y={172} size={13} fill={RED} script>
          {t("quadratic — we prefer to avoid it", "quadratic — hum isse bachna pasand karte hain")}
        </T>
      </Fade>

      {/* beat 3 — the shortcut and e */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={80} y={200} w={260} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          u₁ − u₂ = v₂ − v₁
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Chip x={370} y={200} w={270} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          e = (v₂−v₁) ⁄ (u₁−u₂)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={360} y={264} size={12.5} fill={AMBER_DARK} script>
          {t(
            "e = 1 → the shortcut · partial → given e = 2nd equation",
            "e = 1 → shortcut · partial → diya e = doosri equation"
          )}
        </T>
      </Fade>

      {/* beat 4 — the explicit solution */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={680} y={210} size={12} fill={INK} anchor="start" weight={700}>
          v₁ = ((m₁−m₂)u₁ + 2m₂u₂)⁄(m₁+m₂)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={680} y={236} size={12} fill={INK} anchor="start" weight={700}>
          v₂ = ((m₂−m₁)u₂ + 2m₁u₁)⁄(m₁+m₂)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={800} y={264} size={12.5} fill={MUTED} script>
          {t(
            "derive in seconds — just recognise the structure",
            "seconds mein derive karo — bas dhancha pehchano"
          )}
        </T>
      </Fade>

      {/* beat 5 — perfectly inelastic */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={80} y={310} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("stick: V = (m₁u₁ + m₂u₂) ⁄ (m₁+m₂)", "chipke: V = (m₁u₁ + m₂u₂) ⁄ (m₁+m₂)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={80} y={340} size={13.5} fill={INK} anchor="start" weight={700}>
          ΔK_lost = ½ · m₁m₂⁄(m₁+m₂) · (u₁−u₂)²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={320} y={366} size={12.5} fill={MUTED} script>
          {t(
            "exactly how much went to heat & crumple",
            "theek kitna heat aur crumple mein gaya"
          )}
        </T>
      </Fade>

      {/* beat 6 — units */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={640} y={310} size={13} fill={INK} anchor="start" weight={700}>
          [p] = kg·m/s = M L T⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={640} y={338} size={13} fill={INK} anchor="start" weight={700}>
          {t("e: dimensionless · v: m/s", "e: dimensionless · v: m/s")}
        </T>
      </Fade>

      {/* beat 7 — the equal-mass box */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={640} y={360} w={380} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={12.5} script={false}>
          {t(
            "equal masses, target at rest: v₁ = 0, v₂ = u₁",
            "barabar masses, target aaram par: v₁ = 0, v₂ = u₁"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={830} y={424} size={12.5} fill={GREEN} script>
          {t("the swap — Newton's cradle in one line", "swap — Newton's cradle ek line mein")}
        </T>
      </Fade>

      {/* beat 8 — the strategy */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 450 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={470} size={13} fill={GREEN} script anchor="start">
          {t(
            "momentum ALWAYS · energy IF elastic (use the shortcut) · restitution bridges the gap",
            "momentum HAMESHA · energy AGAR elastic (shortcut lo) · restitution beech ka pul"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={84} y={496} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "that single sentence is the entire subtopic",
            "wo ek vaakya hi poora subtopic hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
