/**
 * Ch05 · Section 33 — "Stitching two energy regimes, and testing a 2-D force"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.2, 36.2, 61.0, 74.8, 75.8, 100.7, 113.6, 136.7, 161.5] · dur 186.3 —
 *        b4 lasts ~1s in en → en-tiny; hi b2 lasts ~1s → hi-tiny;
 *        hi [0, 13.6, 32.9, 33.9, 45.5, 61.0, 85.8, 98.8, 120.9, 145.7] · dur 170.6):
 *  0 title · 1 Ex3 setup + ramp drawing · 2 stage 1: E conserved → 90 J
 *  3 f = 20 N line · 4 stage 2 header · 5 s = 4.5 m + two regimes
 *  6 Ex4 setup F = y î + x ĵ · 7 cross-derivative test · 8 two paths, both 1 J
 *  9 recover U = −xy + C + toolkit verdict
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex3: lbl st x80 bl114 · chip x260..500 y120..156 · ramp M100,160 Q150,250 210,250
 *   floor →470 + hatch · block x95..120 y135..158
 *   b2 st x90: amber bl300 · bold bl328 · muted cx280 bl354
 *   b3 bold bl388 · b4 amber bl420 · b5 bold bl452 · green cx270 bl484 · muted bl510
 *  Ex4: lbl st x550 bl114 · chip x550..900 y124..160
 *   b7 st x560 bl200 · green cx760 bl228 · b8 bl264 / bl292 · green cx760 bl320
 *   b9 bl356 · chip x560..860 y374..412 · muted cx740 bl438 · bar x540 y456..526
 *   lines st x555 bl476 / bl502
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

export default function Ch05Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Stitching Two Regimes & Testing a 2-D Force", "Do Regimes ki Silai & 2-D Force ka Test")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "a stitched JEE Main ramp — then the full toolkit on an unfamiliar force",
            "JEE Main ki sili hui ramp — phir anjaan force par poora toolkit"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 3 — JEE Main: ramp + rough floor", "Ex 3 — JEE Main: ramp + rough floor")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={260} y={120} w={240} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t("5 kg · rest · h = 1.8 m · μ = 0.4", "5 kg · aaram · h = 1.8 m · μ = 0.4")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d="M 95 158 v -18 q 0 -5 5 -5 h 15 q 5 0 5 5 v 18" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 6)} d="M 100 160 Q 150 250 210 250 H 470" stroke={INK} sw={2.4} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 7.5)} d="M 240 252 l 10 8 M 290 252 l 10 8 M 340 252 l 10 8 M 390 252 l 10 8 M 440 252 l 10 8" stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 2 — stage 1: conserved (hi: ~1s beat) */}
      <Fade on={beat >= 2} delay={dl(2, en ? 1.5 : 0.2)}>
        <T x={90} y={300} size={13} fill={AMBER_DARK} script anchor="start">
          {t("stage 1 — smooth ramp: E conserved", "stage 1 — smooth ramp: E conserve")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, en ? 6 : 0.4)}>
        <T x={90} y={328} size={14} fill={INK} anchor="start" weight={800}>
          K_bottom = mgh = 5·10·1.8 = 90 J
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, en ? 14 : 0.7)}>
        <T x={280} y={354} size={12.5} fill={MUTED} script>
          {t(
            "the ramp's shape never analysed — only the height",
            "ramp ki shape kabhi nahi dekhi — sirf height"
          )}
        </T>
      </Fade>

      {/* beat 3 — the friction force */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={90} y={388} size={14} fill={INK} anchor="start" weight={800}>
          f = μ m g = 0.4·5·10 = 20 N
        </T>
      </Fade>

      {/* beat 4 — stage 2 header (en: ~1s beat) */}
      <Fade on={beat >= 4} delay={dl(4, en ? 0.3 : 2)}>
        <T x={90} y={420} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "stage 2 — rough floor: friction bleeds E away",
            "stage 2 — rough floor: friction E ko risa deta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — solve + the shape of it */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={90} y={452} size={15} fill={INK} anchor="start" weight={800}>
          20 × s = 90 → s = 4.5 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={270} y={484} size={12.5} fill={GREEN} script>
          {t(
            "a conserved stretch stitched to a dissipative one",
            "ek conserved hissa, dissipative hisse se sila hua"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={270} y={510} size={12.5} fill={MUTED} script>
          {t("spotting the two regimes IS the skill", "do regimes pehchanna hi asli hunar hai")}
        </T>
      </Fade>

      {/* beat 6 — Ex4 setup */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={550} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 4 — JEE Advanced: unfamiliar force", "Ex 4 — JEE Advanced: anjaan force")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={550} y={124} w={350} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          F = y î + x ĵ — conservative ?
        </Chip>
      </Fade>

      {/* beat 7 — cross-derivative test */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={200} size={13.5} fill={INK} anchor="start" weight={700}>
          ∂Fy⁄∂x = ∂(x)⁄∂x = 1 · ∂Fx⁄∂y = ∂(y)⁄∂y = 1
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={760} y={228} size={13} fill={GREEN} script>
          {t("equal → conservative ✓", "barabar → conservative ✓")}
        </T>
      </Fade>

      {/* beat 8 — two paths */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={560} y={264} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("path 1 (right, then up): 0 + 1 = 1 J", "path 1 (dayen, phir upar): 0 + 1 = 1 J")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={560} y={292} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("path 2 (up, then right): 0 + 1 = 1 J", "path 2 (upar, phir dayen): 0 + 1 = 1 J")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 17)}>
        <T x={760} y={320} size={13} fill={GREEN} script>
          {t(
            "both 1 J — path independence confirmed",
            "dono 1 J — path independence pakki"
          )}
        </T>
      </Fade>

      {/* beat 9 — recover U */}
      <Fade on={beat >= 9} delay={dl(9, 2)}>
        <T x={560} y={356} size={13.5} fill={INK} anchor="start" weight={700}>
          −∂U⁄∂x = y · −∂U⁄∂y = x
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 7)}>
        <Chip x={560} y={374} w={300} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          U(x, y) = −x y + C
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 13)}>
        <T x={740} y={438} size={12.5} fill={MUTED} script>
          {t(
            "check: both derivatives come back right",
            "check: dono derivatives sahi wapas aate hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 17)} d="M 540 456 v 62" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 18)}>
        <T x={555} y={476} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the full toolkit: test → verify → recover U",
            "poora toolkit: test → verify → U wapas nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 21)}>
        <T x={555} y={502} size={13} fill={GREEN} script anchor="start">
          {t(
            "handle all three and nothing can surprise you",
            "teeno sambhal lo — koi sawaal chaunka nahi sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
