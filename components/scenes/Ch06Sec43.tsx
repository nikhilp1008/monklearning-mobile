/**
 * Ch06 · Section 43 — "The moment-of-inertia toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.81, 21.33, 34.05, 35.05, 36.05, 37.05, 38.05] — b3..b7 are 1 s
 * in EN; hi spreads them out normally → ALL staggers kept ≤0.9 s):
 *  0 title
 *  1 two mini figures: parallel-axis (blob, two dashed axes, d) and
 *    perpendicular-axis (lamina with x/y in-plane, z out-of-plane dot)
 *  2 definition: I = Σmᵢrᵢ²  or  I = ∫r²dm
 *  3 parallel-axis formula (instant)
 *  4 perpendicular-axis formula (instant)
 *  5 standard-values row 1: ring, disc, rod-centre, rod-end (instant)
 *  6 standard-values row 2: sphere, shell, cylinder (instant)
 *  7 red rule: r = ⊥ distance always, unit kg·m² (instant)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | left: ellipse c(200,175) rx55 ry42 · axis1 x200 y95..235 dashed ·
 *       axis2 x320 y95..235 dashed · "I_cm" cx200 bl85 · "I" cx320 bl85 ·
 *       d ticks y245 x200..320 · "d" cx260 bl262 · caption script11 cx260 bl282
 *       right: rect x620..820 y140..230 · x-axis →(870,230) "x" st(878,236) ·
 *       y-axis →(620,120) "y" cx620 bl108 · z circle r8 (598,248) "z" end(582,254) ·
 *       caption script11 cx740 bl282
 *  b2 | sans17 cx540 bl318
 *  b3 | sans16 cx540 bl352
 *  b4 | sans16 cx540 bl386
 *  b5 | chips y415 h40: x60 w230 / x300 w230 / x540 w230 / x780 w230
 *  b6 | chips y472 h40: x60 w300 / x380 w300 / x700 w300
 *  b7 | red bar x66 y505..565 · L1 st x84 bl530 · L2 st x84 bl558
 */

import React from "react";
import { Circle, Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the full toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t("the moment-of-inertia toolkit", "moment of inertia ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the two axis theorems, side by side */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 145 175 a 55 42 0 1 0 110 0 a 55 42 0 1 0 -110 0"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Path
          d="M 200 95 V 235 M 320 95 V 235"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={200} y={85} size={11} fill={INK} weight={700}>
          I
          <Sub>cm</Sub>
        </T>
        <T x={320} y={85} size={11} fill={INK} weight={700}>
          I
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Path
          d="M 200 245 H 320 M 200 240 v 10 M 320 240 v 10"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={1.8}
        />
        <T x={260} y={262} size={12} fill={AMBER_DARK} weight={700}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={260} y={282} size={11} fill={MUTED} script>
          {t("parallel axis — shifts by d", "parallel axis — d se shift")}
        </T>
      </Fade>

      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 620 140 h 200 v 90 h -200 z"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.2)}
        d={`${arrowD(620, 230, 870, 230)} ${arrowD(620, 230, 620, 120)}`}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={878} y={236} size={13} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={620} y={108} size={13} fill={INK} weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <Circle cx={598} cy={248} r={8} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} />
        <Circle cx={598} cy={248} r={2.5} fill={AMBER_DARK} />
        <T x={582} y={254} size={13} fill={AMBER_DARK} anchor="end" weight={700}>
          z
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.6)}>
        <T x={740} y={282} size={11} fill={MUTED} script>
          {t(
            "perpendicular axis — flat lamina only",
            "perpendicular axis — sirf flat lamina"
          )}
        </T>
      </Fade>

      {/* beat 2 — the definition, discrete and continuous */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={318} size={17} fill={INK} weight={700}>
          I = Σ mᵢrᵢ²    {t("or", "ya")}    I = ∫ r² dm
        </T>
      </Fade>

      {/* beat 3 — parallel axis theorem (instant) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={352} size={16} fill={INK} weight={700}>
          I = I
          <Sub>cm</Sub>
          <Up> + M d²   {t("(parallel axis — any body)", "(parallel axis — koi bhi body)")}</Up>
        </T>
      </Fade>

      {/* beat 4 — perpendicular axis theorem (instant) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={386} size={16} fill={INK} weight={700}>
          I
          <Sub>z</Sub>
          <Up> = I</Up>
          <Sub>x</Sub>
          <Up> + I</Up>
          <Sub>y</Sub>
          <Up>   {t("(perpendicular — laminae only)", "(perpendicular — sirf laminae)")}</Up>
        </T>
      </Fade>

      {/* beat 5 — the must-know values, row 1 (instant) */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Chip x={60} y={415} w={230} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          ring — MR²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={300} y={415} w={230} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          disc — ½MR²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={540} y={415} w={230} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          rod, centre — ML²/12
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={780} y={415} w={230} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          rod, end — ML²/3
        </Chip>
      </Fade>

      {/* beat 6 — round bodies, row 2 (instant) */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <Chip x={60} y={472} w={300} h={40} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={13} script={false}>
          sphere, solid — (2/5)MR²
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={380} y={472} w={300} h={40} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={13} script={false}>
          shell, hollow — (2/3)MR²
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={700} y={472} w={300} h={40} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={13} script={false}>
          cylinder, solid — ½MR²
        </Chip>
      </Fade>

      {/* beat 7 — the rule to keep in your ear (instant) */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 66 505 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={84} y={530} size={13} fill={RED} script anchor="start">
          {t(
            "r is ALWAYS the ⊥ distance from the axis",
            "r HAMESHA axis se ⊥ distance hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={84} y={558} size={13} fill={RED} script anchor="start">
          {t("unit: kg·m²", "unit: kg·m²")}
        </T>
      </Fade>
    </Scene>
  );
}
