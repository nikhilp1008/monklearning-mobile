/**
 * Ch06 · Section 53 — "The rotational motion toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,14.89,26.92,41.34,58.75,72.4] — b0,b1 fast in EN;
 * hi [0,7.77,15.87,16.87,17.87,30.33,44.75,57.04] — b2,b3 fast in HI →
 * b0..b3 kept ≤0.9 s; b4..b7 have room in both languages):
 *  0 title
 *  1 figure: point P at radius r, tangent v = ωr
 *  2 ω = ω₀ + αt
 *  3 θ = ω₀t + ½αt²
 *  4 ω² = ω₀² + 2αθ — the "timeless" one, underlined
 *  5 dynamics + energy row: τ=Iα, K=½Iω², W=τθ, P=τω
 *  6 linear bridge row: v=ωr, a_t=αr, a_c=ω²r
 *  7 red caution: constant α only
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(200,150) r55 · crosshair centre · radius (200,150)→(248,123) ·
 *       "r" st(215,130) · tangent (248,123)→(290,105) · "v = ωr" st(296,100)
 *  b2 | sans16 st x60 bl235
 *  b3 | sans16 st x60 bl270
 *  b4 | sans17 st x60 bl305 · amber underline y315 x60..300
 *  b5 | chips y345 h34: x60 w220 / x300 w220 / x540 w220 / x780 w220
 *  b6 | chips y400 h34: x60 w300 / x390 w300 / x720 w300
 *  b7 | red bar x66 y460..510 · L1 st x84 bl483 · L2 st x84 bl508
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
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the compact toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t("the rotational motion toolkit", "rotational motion ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the bridge in a picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 145 150 a 55 55 0 1 0 110 0 a 55 55 0 1 0 -110 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 200 150 a 4 4 0 1 0 0.1 0 M 194 150 h -6 M 206 150 h 6 M 200 144 v -6 M 200 156 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 200 150 L 248 123" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={215} y={130} size={11} fill={INK} anchor="start" weight={700}>
          r
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 248 123 L 290 105 M 279 100 L 290 105 L 281 113"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={296} y={100} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          v = ωr
        </T>
      </Fade>

      {/* beat 2 — the first kinematic equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={235} size={16} fill={INK} anchor="start" weight={700}>
          ω = ω₀ + αt
        </T>
      </Fade>

      {/* beat 3 — the second */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={270} size={16} fill={INK} anchor="start" weight={700}>
          θ = ω₀t + ½αt²
        </T>
      </Fade>

      {/* beat 4 — the timeless one */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={60} y={305} size={17} fill={INK} anchor="start" weight={700}>
          ω² = ω₀² + 2αθ
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 60 315 h 240" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 5 — dynamics and energy, one line */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={60} y={345} w={220} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          τ = Iα
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={300} y={345} w={220} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          K = ½Iω²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Chip x={540} y={345} w={220} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          W = τθ
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={780} y={345} w={220} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          P = τω
        </Chip>
      </Fade>

      {/* beat 6 — the linear bridge */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={60} y={400} w={300} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          v = ωr
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={390} y={400} w={300} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("tangential: a = αr", "tangential: a = αr")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Chip x={720} y={400} w={300} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("centripetal: a = ω²r", "centripetal: a = ω²r")}
        </Chip>
      </Fade>

      {/* beat 7 — the caution */}
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 66 460 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={483} size={13} fill={RED} script anchor="start">
          {t(
            "the three kinematic equations need CONSTANT α",
            "teen kinematic equations ko CONSTANT α chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={508} size={13} fill={RED} script anchor="start">
          {t(
            "exactly as their linear cousins need constant a",
            "bilkul jaise unke linear cousins ko constant a chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
