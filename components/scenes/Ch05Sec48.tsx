/**
 * Ch05 · Section 48 — "Power on an incline, and constant-power kinematics"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 36.9, 37.9, 62.7, 74.1, 92.7, 115.4, 140.2, 165.0] · dur 181.1 —
 *        b2 lasts ~1s in en → en-tiny; b0 lasts ~1s in hi → hi-tiny title;
 *        hi [0, 1, 19.4, 44.3, 69.1, 80.9, 98.8, 119.4, 144.3, 169.1] · dur 184.4):
 *  0 title (hi tiny) · 1 Ex3 setup chip · 2 resolve forces → 1500 N (en tiny)
 *  3 P = 30 kW + planted halves · 4 pivot line · 5 Ex4 setup chip
 *  6 v = 6 m/s · 7 x = 12 m · 8 why-Advanced lines · 9 red kinematics warning
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  Ex3: lbl st x80 bl114 · chip x80..520 y124..160 · st x90 bl205 / bl233
 *   chip x90..400 y255..293 · red cx280 bl320
 *  b4 | cx790 bl114 · b5 | lbl st x550 bl146 · chip x550..1010 y156..192
 *  b6 | st x560 bl237 / bl265 · b7 | bl305 / bl333
 *  b8 | cx780: red bl375 · muted bl401 · green bl427
 *  b9 | bar x66 y470..545 · lines st x84 bl490 / bl516
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

export default function Ch05Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title (hi: ~1s beat) */}
      <Fade on={beat >= 0} delay={dl(0, en ? 0.3 : 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Power on an Incline & Constant-P Kinematics", "Incline par Power & Constant-P Kinematics")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, en ? 5 : 0.5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "resolve first, then power — and never reach for v = a t",
            "pehle resolve, phir power — aur v = a t ki taraf haath kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 3 — JEE Main: the climb", "Ex 3 — JEE Main: chadhai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={440} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "1000 kg · sin θ = 0.1 · v = 20 m/s const · f = 500 N · P?",
            "1000 kg · sin θ = 0.1 · v = 20 m/s const · f = 500 N · P?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — resolve (en: ~1s beat) */}
      <Fade on={beat >= 2} delay={dl(2, en ? 0.2 : 2)}>
        <T x={90} y={205} size={13} fill={INK} script anchor="start">
          {t(
            "constant v → a = 0 → the engine balances everything",
            "constant v → a = 0 → engine sab kuchh balance karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, en ? 0.5 : 10)}>
        <T x={90} y={233} size={14} fill={INK} anchor="start" weight={800}>
          F = mg sinθ + f = 1000 + 500 = 1500 N
        </T>
      </Fade>

      {/* beat 3 — the power */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={90} y={255} w={310} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14.5} script={false}>
          P = 1500 × 20 = 30 kW
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={280} y={320} size={12} fill={RED} script>
          {t(
            "forget friction → 20 kW ✗ · forget gravity → 10 kW ✗ — both planted",
            "friction bhoole → 20 kW ✗ · gravity bhoole → 10 kW ✗ — dono rakhe hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — the pivot */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={790} y={114} size={13} fill={AMBER_DARK} script>
          {t(
            "now: no incline, no friction — constant P from rest",
            "ab: na incline, na friction — aaram se constant P"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex4 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={550} y={146} size={13} fill={RED} script anchor="start">
          Ex 4 — JEE Advanced
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={550} y={156} w={460} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "2 kg from rest · P = 12 W · v(3 s) ? x(3 s) ?",
            "2 kg aaram se · P = 12 W · v(3 s) ? x(3 s) ?"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the speed */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={237} size={14} fill={INK} anchor="start" weight={700}>
          K = Pt : ½·2·v² = 12 × 3 = 36
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={560} y={265} size={15} fill={GREEN} anchor="start" weight={800}>
          v² = 36 → v = 6 m/s
        </T>
      </Fade>

      {/* beat 7 — the distance */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={305} size={14} fill={INK} anchor="start" weight={700}>
          x = ⅔ √(2P⁄m) · t^(3/2) = ⅔ · 2√3 · 3√3
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={560} y={333} size={15} fill={GREEN} anchor="start" weight={800}>
          = ⅔ × 18 = 12 m
        </T>
      </Fade>

      {/* beat 8 — why this is Advanced */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={780} y={375} size={13} fill={RED} script>
          {t(
            "constant POWER ≠ constant force — a is NOT constant",
            "constant POWER ≠ constant force — a constant NAHI hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={780} y={401} size={12.5} fill={MUTED} script>
          {t(
            "a blows up at t = 0, then fades — a huge push easing off",
            "a, t = 0 par uchhalta hai, phir feeka padta — bada dhakka dhalta hua"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 18)}>
        <T x={780} y={427} size={13} fill={GREEN} script>
          {t(
            "recognise constant power → the energy result, never kinematics",
            "constant power pehchano → energy result, kinematics kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 9 — the red note */}
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 66 470 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 2)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "under constant power: v = a t ✗ · s = ½ a t² ✗",
            "constant power ke under: v = a t ✗ · s = ½ a t² ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 9)}>
        <T x={84} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "those assume constant acceleration — there is none here",
            "wo constant acceleration maante hain — yahan hai hi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
