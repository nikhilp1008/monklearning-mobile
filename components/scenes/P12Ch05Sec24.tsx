/**
 * P12Ch05 · Section 24 — "Board level: rebuilding the field from two given numbers"
 * Subtopic: Earth's Magnetism
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: a different instance — B_H = 0.36×10⁻⁴ T with
 * a dip of 60°, giving B_V = 0.624×10⁻⁴ T and B = 0.72×10⁻⁴ T. Not one of
 * those numbers is spoken.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: B_H = 0.40 G, dip δ = 30°.
 *     (a)  B_H = B cos δ  ⇒  B = B_H / cos δ = 0.40 / 0.866 = 0.46 G
 *          (bigger than B_H, as a hypotenuse must be)
 *     (b)  B_V = B sin δ = 0.46 × 0.5 = 0.23 G
 *     check: B_V = B_H tan δ = 0.40 × 0.577 = 0.23 G  — a second, independent
 *          route that never touches B.
 * The triangle is drawn to scale: the horizontal leg is 300 units and the
 * vertical leg 173, so tan⁻¹(173/300) really is 30°.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "did you draw the triangle first?"    title + underline
 *   1  "here is that triangle"               the labelled right triangle
 *   2  "we are told… we want…"               givens and asks
 *   3  "part a — the relation"               B = B_H / cos δ
 *   4  "put the numbers in"                  B = 0.46 G, and why it must be bigger
 *   5  "part b"                              B_V = 0.23 G
 *   6  "the check that costs ten seconds"    B_V = B_H tan δ = 0.23 G
 *   7  "both routes land on the same answer" the two confirmations + chip
 */

import React from "react";
import { G, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Draw the triangle — then it is only trigonometry",
             "Draw the triangle — then it is only trigonometry")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the triangle (to scale, 30°) ---------------- */}
      <G transform="translate(60, 90)">
        <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 20 40 L 320 40" stroke={INK} sw={2.4} dur={0.6} />
        <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 20 40 L 320 213" stroke={RED} sw={2.4} dur={0.8} />
        <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 320 40 L 320 213" stroke={GREEN} sw={2.4} dur={0.5} />
        <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 75 40 A 55 55 0 0 1 67.6 67.5" stroke={AMBER_DARK} sw={2} dur={0.4} />
        <Fade on={beat >= 1} delay={dl(1, 2.4)}>
          <Path d="M 306 40 L 306 54 L 320 54" fill="none" stroke={INK} strokeWidth={1.5} />
          <T x={170} y={28} size={13.5} fill={INK} weight={800}>B_H = 0.40 G</T>
          <T x={86} y={68} size={13} fill={AMBER_DARK} weight={800} anchor="start">δ = 30°</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 2.8)} dim={beat >= 4}>
          <T x={108} y={128} size={13.5} fill={RED} weight={800} anchor="start">B = ?</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 3.0)} dim={beat >= 5}>
          <T x={334} y={118} size={13.5} fill={GREEN} weight={800} anchor="start">B_V = ?</T>
        </Fade>

        <Fade on={beat >= 4} delay={dl(4, 1.4)}>
          <T x={108} y={152} size={14} fill={RED} weight={900} anchor="start">B = 0.46 G</T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.4)}>
          <T x={334} y={142} size={14} fill={GREEN} weight={900} anchor="start">B_V = 0.23 G</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 3.3)}>
          <T x={20} y={252} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("horizontal leg known, angle at the left known — the hypotenuse and the vertical leg are what we want",
               "horizontal leg known, angle at the left known — the hypotenuse and the vertical leg are what we want")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 2–5 — the working ---------------- */}
      <G transform="translate(560, 90)">
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("GIVEN", "GIVEN")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={0} y={46} size={14.5} fill={INK} weight={800} anchor="start">
            B_H = 0.40 G   ·   angle of dip δ = 30°
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.1)}>
          <T x={0} y={72} size={13} fill={AMBER_DARK} weight={700} anchor="start">
            {t("want: (a) the total field B   (b) the vertical component B_V",
               "want: (a) the total field B   (b) the vertical component B_V")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={0} y={112} size={14} fill={RED} weight={800} anchor="start">
            {t("(a)  START FROM WHAT CONNECTS THEM", "(a)  START FROM WHAT CONNECTS THEM")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={0} y={144} size={15} fill={INK} weight={800} anchor="start">
            B_H = B cos δ   ⇒   B = B_H / cos δ
          </T>
        </Fade>

        <Fade on={beat >= 4} delay={dl(4, 0.3)}>
          <T x={0} y={184} size={15} fill={INK} weight={800} anchor="start">
            B = 0.40 / 0.866 = 0.46 G
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={0} y={210} size={13} fill={GREEN} weight={800} anchor="start">
            {t("larger than B_H — exactly what a hypotenuse has to be",
               "larger than B_H — exactly what a hypotenuse has to be")}
          </T>
        </Fade>

        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={0} y={250} size={14} fill={RED} weight={800} anchor="start">
            {t("(b)  B_V = B sin δ,  and sin 30° = ½", "(b)  B_V = B sin δ,  and sin 30° = ½")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={0} y={282} size={15} fill={INK} weight={800} anchor="start">
            B_V = 0.46 × 0.5 = 0.23 G
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 6 — the second route ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 66 388 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={84} y={410} size={14} fill={GREEN} weight={800} anchor="start">
          {t("the ten-second check — a second route to B_V that skips the total field entirely",
             "the ten-second check — a second route to B_V that skips the total field entirely")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={438} size={15} fill={INK} weight={800} anchor="start">
          B_V = B_H tan δ = 0.40 × 0.577 = 0.23 G
        </T>
      </Fade>

      {/* ---------------- beat 7 — both routes agree ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={84} y={480} size={13.5} fill={INK} weight={700} anchor="start">
          {t("both routes land on 0.23 G, so the arithmetic is confirmed",
             "both routes land on 0.23 G, so the arithmetic is confirmed")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={84} y={506} size={13.5} fill={INK} weight={700} anchor="start">
          {t("and B = 0.46 G came out bigger than B_H = 0.40 G, as it must",
             "and B = 0.46 G came out bigger than B_H = 0.40 G, as it must")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={532} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("two independent checks, almost no extra work — build the habit now",
             "two independent checks, almost no extra work — build the habit now")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Chip x={40} y={548} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ B = 0.46 G · B_V = 0.23 G · confirmed independently by B_H tan δ = 0.23 G",
             "★ B = 0.46 G · B_V = 0.23 G · confirmed independently by B_H tan δ = 0.23 G")}
        </Chip>
      </Fade>
    </Scene>
  );
}
