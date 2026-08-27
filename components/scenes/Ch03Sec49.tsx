/**
 * Ch03 · Section 49 — "JEE Main: velocity and height one second in"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.0, 31.7, 43.8, 56.6, 65.5, 77.7, 89.3]):
 *  0 heading + problem
 *  1 not the standard formulas — resolve first
 *  2 ux = 12, uy = 16
 *  3 (a) at t = 1: vx = 12, vy = 6
 *  4 speed = √180 ≈ 13.4
 *  5 direction: tanφ = ½ → 26.6°
 *  6 (b) height = 11 m
 *  7 read the answer: climbing more gently
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13 · chips x84/x300 y134 w200/w200 h32
 *  b2 | st x84 bl 210 / 238 s14
 *  b3 | st x84 bl 278 / 306 s14
 *  b4 | st x570 bl 210 s14
 *  b5 | st x570 bl 238 s14 · caption st x570 bl 262 s11
 *  b6 | st x570 bl 302 s14 · box x570..1010 y322..368 text cx790 bl 354 s15
 *  b7 | bar M66 420 v52 · lines st x84 bl 438 / 462 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE MAIN — velocity & height, one second in",
            "JEE MAIN — ek second baad velocity aur height"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "u = 20 m/s at 53° (sin53 = 0.8, cos53 = 0.6, g = 10) — find v and y at t = 1 s",
            "u = 20 m/s, 53° par (sin53 = 0.8, cos53 = 0.6, g = 10) — t = 1 s par v aur y"
          )}
        </T>
      </Fade>

      {/* beat 1 — resolve first */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a mid-flight instant — T, H, R don't fit. track the COMPONENTS instead",
            "beech-udaan ka pal — T, H, R fit nahi. COMPONENTS ko track karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Chip x={84} y={134} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          sin 53° = 0.8
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <Chip x={304} y={134} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          cos 53° = 0.6
        </Chip>
      </Fade>

      {/* beat 2 — the launch components */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={210} size={14} fill={INK} weight={700} anchor="start">
          ux = 20 × 0.6 = 12 m/s
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={238} size={14} fill={INK} weight={700} anchor="start">
          uy = 20 × 0.8 = 16 m/s
        </T>
      </Fade>

      {/* beat 3 — at t = 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={278} size={14} fill={INK} weight={700} anchor="start">
          (a) at t = 1:  vx = 12 (unchanged)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={84} y={306} size={14} fill={INK} weight={700} anchor="start">
          vy = 16 − 10×1 = 6 m/s
        </T>
      </Fade>

      {/* beat 4 — the speed */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={570} y={210} size={14} fill={INK} weight={800} anchor="start">
          speed = √(144 + 36) = √180 ≈ 13.4 m/s
        </T>
      </Fade>

      {/* beat 5 — the direction */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={238} size={14} fill={INK} weight={700} anchor="start">
          tan φ = 6 ⁄ 12 = ½ → φ ≈ 26.6°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={570} y={262} size={11} fill={MUTED} script anchor="start">
          {t("measured above the horizontal", "horizontal se upar naapa gaya")}
        </T>
      </Fade>

      {/* beat 6 — the height */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={570} y={302} size={14} fill={INK} weight={700} anchor="start">
          (b) y = 16×1 − ½·10·1² = 16 − 5
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 582 322 h 416 q 12 0 12 12 v 22 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={790} y={354} size={15} fill={INK} weight={800}>
          v ≈ 13.4 m/s at 26.6° · y = 11 m
        </T>
      </Fade>

      {/* beat 7 — read the physics */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 420 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={438} size={12} fill={GREEN} script anchor="start">
          {t(
            "the velocity now tilts at 26.6°, down from 53° — gravity eroded the upward part",
            "velocity ab 26.6° par jhuki hai, 53° se kam — gravity ne upar wala hissa ghisa"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={462} size={12} fill={INK} script anchor="start">
          {t(
            "the horizontal never changed — so the climb keeps getting gentler",
            "horizontal kabhi nahi badla — isliye chadhai narm hoti jaati hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
