/**
 * Ch05 · Section 25 — "Force and equilibrium from a PE function" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.3, 26.7, 51.5, 62.4, 84.1, 96.3, 121.2, 137.7, 162.6] · dur 187.4;
 *        hi [0, 12.5, 24.9, 48.5, 59.4, 79.5, 91.9, 116.7, 128.9, 153.8] · dur 178.6):
 *  0 title · 1 Ex3 setup · 2 drill work → −2 N · 3 formula chip
 *  4 part b: x = 2 stable · 5 Ex4 setup · 6 cubic curve + force
 *  7 factored chip · 8 classify both equilibria (dots) · 9 trapping band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex3: lbl st x80 bl114 · chip x80..470 y124..160 · work st x90 bl194/224
 *   red cx270 bl252 · chip x90..400 y272..308 · b4 st x90 bl344/374 · green cx240 bl402
 *  Ex4: lbl st x540 bl114 · chip x540..900 y124..160
 *   curve M580,379 C.. peak (666,303) valley (773,329) end (880,254)
 *   labels cx655 bl285 (red) / cx790 bl370 (green)
 *   b6 force st x540 bl410 · b7 chip x540..900 y425..461 · amber cx720 bl487
 *   b8 st x540 bl515
 *  b9 | bar x66 y440..545 · lines st x84 bl460 / bl486 / bl512
 */

import React from "react";
import { Circle } from 'react-native-svg';
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

export default function Ch05Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Force & Equilibrium from U(x)", "U(x) se Force & Equilibrium")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the three-line drill — then a cubic and the physics of trapping",
            "three-line drill — phir ek cubic aur trapping ki physics"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          Ex 3 — JEE Main
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={390} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          U(x) = x² − 4x + 3 J · (a) F at x = 3 ?
        </Chip>
      </Fade>

      {/* beat 2 — the drill */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={90} y={194} size={15} fill={INK} anchor="start" weight={700}>
          F = −dU⁄dx = −(2x − 4) = 4 − 2x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={90} y={224} size={15} fill={INK} anchor="start" weight={800}>
          F(3) = 4 − 6 = −2 N
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={270} y={252} size={13} fill={RED} script>
          {t(
            "don't drop the sign — the sign IS the direction",
            "sign mat girao — sign hi direction hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the formula chip */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={90} y={272} w={310} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          F = 4 − 2x · F(3) = −2 N
        </Chip>
      </Fade>

      {/* beat 4 — part b */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={90} y={344} size={15} fill={INK} anchor="start" weight={700}>
          F = 0 → x = 2 m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={90} y={374} size={15} fill={GREEN} anchor="start" weight={800}>
          U″ = 2 &gt; 0 → valley → STABLE
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={240} y={402} size={13} fill={GREEN} script>
          {t("three lines, done", "teen lines, ho gaya")}
        </T>
      </Fade>

      {/* beat 5 — Ex4 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 4 — JEE Advanced: a cubic", "Ex 4 — JEE Advanced: ek cubic")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={540} y={124} w={360} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          U = 2x³ − 9x² + 12x
        </Chip>
      </Fade>

      {/* beat 6 — the curve and the force */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 580 379 C 620 330, 640 303, 666 303 C 692 303, 745 329, 773 329 C 800 329, 840 290, 880 254"
        stroke={INK}
        sw={2.8}
        dur={1.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={540} y={410} size={14} fill={INK} anchor="start" weight={700}>
          F = −(6x² − 18x + 12)
        </T>
      </Fade>

      {/* beat 7 — factored */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={540} y={425} w={360} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          F = −6(x−1)(x−2) → x = 1, 2
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={720} y={487} size={13} fill={AMBER_DARK} script>
          {t("factor first — roots by inspection", "pehle factor karo — roots dekhte hi mil jaati hain")}
        </T>
      </Fade>

      {/* beat 8 — classify both */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={540} y={515} size={13.5} fill={INK} anchor="start" weight={700}>
          U″ = 12x − 18 : U″(1) = −6 · U″(2) = +6
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <Circle cx={666} cy={303} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={655} y={285} size={12.5} fill={RED} script>
          {t("x = 1 — hilltop, unstable", "x = 1 — hilltop, unstable")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <Circle cx={773} cy={329} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={790} y={370} size={12.5} fill={GREEN} script>
          {t("x = 2 — valley, stable", "x = 2 — valley, stable")}
        </T>
      </Fade>

      {/* beat 9 — trapping */}
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 66 440 v 84" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 2)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "small nudge → trapped, rocking in the well at x = 2",
            "chhota nudge → x = 2 ke well mein qaid, jhoolta hua"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 9)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "the peak at x = 1 is an energy BARRIER — cross it, escape for good",
            "x = 1 ka peak ek energy BARRIER hai — paar karo, hamesha ke liye azad"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 16)}>
        <T x={84} y={512} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "molecular bonds → planetary orbits — that's why they test it",
            "molecular bonds → planetary orbits — isiliye ye pucha jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
