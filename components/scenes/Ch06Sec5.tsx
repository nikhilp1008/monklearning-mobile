/**
 * Ch06 · Section 5 — "The centre-of-mass toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.75, 24.66, 36.44, 47.45, 59.82, 75.95, 85.59]):
 *  0 title + underline
 *  1 master definition card (amber box, drawn fraction bar)
 *  2 component equations x/y/z (right col, three lines)
 *  3 two-particle collapse (left col, fraction)
 *  4 continuous body integral (right col)
 *  5 hero: F⃗ext = M a⃗cm in green box
 *  6 origin-at-CoM property (dashed amber box)
 *  7 densities strip: λ/σ/ρ chips
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52 · underline y70 x330..750
 *  b1 | box x80..510 y100..205 · "r⃗cm =" st x110 bl 160 · num cx300 bl 135 ·
 *       bar x225..380 y152 · den bl 188 · caption script12 cx295 bl 228
 *  b2 | lines st x640 bl 135/170/205 size17 · caption script12 cx795 bl 232
 *  b3 | header script13 st x84 bl 278 · "xcm =" st x110 bl 345 · num cx330 bl 320 ·
 *       bar x235..425 y337 · den cx330 bl 368
 *  b4 | header script13 cx795 bl 278 · "r⃗cm =" st x640 bl 345 · 1/M frac cx722
 *       (num bl 320 · bar x706..738 y337 · den bl 368) · "∫ r⃗ dm" st x752 bl 345
 *  b5 | green box x560..1030 y412..508 · formula size26 cx795 bl 452 ·
 *       caption script12 cx795 bl 492
 *  b6 | dashed amber box x70..520 y412..508 · line sans17 cx295 bl 452 ·
 *       caption script12 cx295 bl 492
 *  b7 | header script13 st x84 bl 540 · chips y556 h34: λ x84 w270 ·
 *       σ x384 w300 · ρ x714 w310
 */

import React from "react";
import { Rect, TSpan } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

// (no combining vector arrow — U+20D7 tofu-boxes in the board fonts; plain symbols)
const VEC = "";

export default function Ch06Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit promise */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("the centre-of-mass toolkit", "centre of mass ka poora toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4.5)} d="M 330 70 h 420" stroke={AMBER} sw={2.2} dur={0.7} />

      {/* beat 1 — the master definition */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 92 100 h 406 q 12 0 12 12 v 81 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -81 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={110} y={160} size={21} fill={INK} anchor="start" weight={700}>
          r{VEC}
          <TSpan dy={6} fontSize={13}>
            cm
          </TSpan>
          <TSpan dy={-6}> =</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={300} y={135} size={20} fill={INK} weight={700}>
          Σ mᵢ r{VEC}ᵢ
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d="M 225 152 h 155" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={300} y={188} size={20} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        <T x={295} y={228} size={12} fill={AMBER_DARK} script>
          {t(
            "a weighted average — mass is the weight",
            "weighted average — weight hai mass"
          )}
        </T>
      </Fade>

      {/* beat 2 — the three component equations */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={640} y={135} size={17} fill={INK} anchor="start" weight={700}>
          x
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = Σ mᵢxᵢ / M</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={640} y={170} size={17} fill={INK} anchor="start" weight={700}>
          y
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = Σ mᵢyᵢ / M</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={640} y={205} size={17} fill={INK} anchor="start" weight={700}>
          z
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = Σ mᵢzᵢ / M</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={795} y={232} size={12} fill={MUTED} script>
          {t(
            "same recipe — coordinate by coordinate",
            "wahi recipe — har coordinate ke liye"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two-particle quick check */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={84} y={278} size={13} fill={INK} script anchor="start">
          {t(
            "just two particles — the quick-check weapon",
            "sirf do particles — quick check ka hathiyaar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={110} y={345} size={20} fill={INK} anchor="start" weight={700}>
          x
          <TSpan dy={6} fontSize={13}>
            cm
          </TSpan>
          <TSpan dy={-6}> =</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={330} y={320} size={19} fill={INK} weight={700}>
          m₁x₁ + m₂x₂
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.5)} d="M 235 337 h 190" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={330} y={368} size={19} fill={INK} weight={700}>
          m₁ + m₂
        </T>
      </Fade>

      {/* beat 4 — continuous body: the integral */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={795} y={278} size={13} fill={INK} script>
          {t(
            "continuous body → the sum becomes an integral",
            "body continuous ho → sum ban jaata integral"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={640} y={345} size={20} fill={INK} anchor="start" weight={700}>
          r{VEC}
          <TSpan dy={6} fontSize={13}>
            cm
          </TSpan>
          <TSpan dy={-6}> =</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={722} y={320} size={18} fill={INK} weight={700}>
          1
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d="M 706 337 h 32" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={722} y={368} size={18} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.8)}>
        <T x={752} y={345} size={22} fill={INK} anchor="start" weight={700}>
          ∫ r{VEC} dm
        </T>
      </Fade>

      {/* beat 5 — the single most powerful line */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 572 412 h 446 q 12 0 12 12 v 72 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -72 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={795} y={452} size={26} fill={INK} weight={700}>
          F{VEC}
          <TSpan dy={7} fontSize={16}>
            ext
          </TSpan>
          <TSpan dy={-7}> = M a{VEC}</TSpan>
          <TSpan dy={7} fontSize={16}>
            cm
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={795} y={492} size={12} fill={GREEN} script>
          {t(
            "the whole system obeys Newton II — as ONE particle",
            "poora system Newton II maanta hai — EK particle ki tarah"
          )}
        </T>
      </Fade>

      {/* beat 6 — origin at the CoM */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Rect
          x={70}
          y={412}
          width={450}
          height={96}
          rx={12}
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
          strokeDasharray="8 6"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={295} y={452} size={17} fill={INK} weight={700}>
          {t("origin at the CoM ⇒ Σ mᵢ r", "origin CoM par rakho ⇒ Σ mᵢ r")}
          {VEC}ᵢ = 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={295} y={492} size={12} fill={AMBER_DARK} script>
          {t(
            "elegant — and handy in derivations",
            "elegant — aur derivations mein kaam ka"
          )}
        </T>
      </Fade>

      {/* beat 7 — pick the right density */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={84} y={540} size={13} fill={INK} script anchor="start">
          {t(
            "continuous body? first choose the density —",
            "continuous body? pehle density chuno —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Chip x={84} y={556} w={270} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("λ — wire — kg/m", "λ — wire — kg/m")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Chip x={384} y={556} w={300} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("σ — sheet — kg/m²", "σ — sheet — kg/m²")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <Chip x={714} y={556} w={310} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("ρ — solid — kg/m³", "ρ — solid — kg/m³")}
        </Chip>
      </Fade>
    </Scene>
  );
}
