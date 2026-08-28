/**
 * Ch13 · Section 3 — "Key formulas and definitions" (the kinematics toolkit)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.91, 20.63, 34.04, 43.33, 53.65, 65.34, 74.97]):
 *  0 toolkit shelf underline
 *  1 x(t) = A sin(ωt+φ)
 *  2 v(t) = Aω cos(ωt+φ) = ±ω√(A²−x²)
 *  3 a(t) = −Aω² sin(ωt+φ) = −ω²x
 *  4 ω = 2π/T = 2πf
 *  5 green hero box: v_max = Aω (x=0) / a_max = Aω² (x=±A)
 *  6 phase diagram: x(t), v(t) leading by quarter cycle, a(t) anti-phase
 *  7 red shortcuts: ω = a_max/v_max , A = (v_max)²/a_max
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl145 (box 70..332,132..150)
 *  b2 | st x70 bl185 (box 70..355,172..190)
 *  b3 | st x70 bl225 (box 70..318,212..230)
 *  b4 | st x70 bl265 (box 70..206,252..270)
 *  b5 | box x82..560 y280..362 rx14 · L1 cx321 bl310 · L2 cx321 bl344
 *  b6 | row1(x) baseline130 x650..1010 · row2(v) baseline200 x605..965 (shifted −45=leads) ·
 *      row3(a) baseline270 x650..1010 (flipped amp=anti-phase) ·
 *      labels anchor-end: "x(t)" x640 bl135 · "v(t)" x595 bl205 · "a(t)" x640 bl275
 *  b7 | red bar x66 y548..594 · L1 st x84 bl560 · L2 st x84 bl590
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
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

export default function Ch13Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The complete kinematics toolkit", "Kinematics ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 0 — the shelf everything sits on */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — displacement */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={145} size={17} fill={INK} anchor="start" weight={700}>
          x(t) = A sin(ωt + φ)
        </T>
      </Fade>

      {/* beat 2 — velocity */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={185} size={15} fill={INK} anchor="start" weight={700}>
          v(t) = Aω cos(ωt + φ) = ±ω√(A² − x²)
        </T>
      </Fade>

      {/* beat 3 — acceleration, closing back on the ID card */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={225} size={15} fill={INK} anchor="start" weight={700}>
          a(t) = −Aω² sin(ωt + φ) = −ω² x
        </T>
      </Fade>

      {/* beat 4 — the ω bridge */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={265} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          ω = 2π / T = 2π f
        </T>
      </Fade>

      {/* beat 5 — the two headline maxima */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 96 280 h 450 q 14 0 14 14 v 54 q 0 14 -14 14 h -450 q -14 0 -14 -14 v -54 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={321} y={310} size={18} fill={INK} weight={800}>
          v<Sub>max</Sub>
          <Up> = A ω   (x = 0)</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={321} y={344} size={18} fill={INK} weight={800}>
          a<Sub>max</Sub>
          <Up> = A ω²   (x = ±A)</Up>
        </T>
      </Fade>

      {/* beat 6 — the phase picture: v leads x by a quarter cycle, a is anti-phase */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M650 130 C672 98 718 98 740 130 C762 162 808 162 830 130 C852 98 898 98 920 130 C942 162 988 162 1010 130"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.3)}
        d="M605 200 C627 168 673 168 695 200 C717 232 763 232 785 200 C807 168 853 168 875 200 C897 232 943 232 965 200"
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.3)}
        d="M650 270 C672 302 718 302 740 270 C762 238 808 238 830 270 C852 302 898 302 920 270 C942 238 988 238 1010 270"
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.0)}>
        <T x={640} y={135} size={13} fill={INK} anchor="end">
          x(t)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={595} y={205} size={13} fill={GREEN} anchor="end">
          v(t)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={640} y={275} size={13} fill={RED} anchor="end">
          a(t)
        </T>
      </Fade>

      {/* beat 7 — two shortcuts worth gold */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 540 V 584" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={84} y={552} size={13} fill={RED} anchor="start">
          shortcut 1: ω = a<Sub>max</Sub>
          <Up> / v</Up>
          <Sub>max</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={580} size={13} fill={RED} anchor="start">
          shortcut 2: A = (v<Sub>max</Sub>
          <Up>)² / a</Up>
          <Sub>max</Sub>
        </T>
      </Fade>
    </Scene>
  );
}
