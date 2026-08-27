/**
 * Ch01 · Section 19 — "Where the method goes blind — the five sharp boundaries"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.4, 19.3, 38.1, 59.1, 79.5, 104.4, 112.9]):
 *  0 title · 1 five red index squares — recognise on sight
 *  2 LIM 1 panel: blind to pure numbers (½, 2π)
 *  3 the demo line: s = ut + at² passes and is wrong
 *  4 LIM 2 panel: four unknowns, three equations
 *  5 LIM 3 + LIM 4 panels
 *  6 LIM 5 panel opens: same recipe, can't tell apart
 *  7 work = [ML²T⁻²] = torque — same recipe, different dish
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)  | T mid | x309..771 y30..76 (bl 62)
 *  b1 | squares 40×40 (drawn)   | Draw  | y90..130 x350+70i · digits bl 116
 *  b1 | note (script 14)        | T st  | x720..870 bl 116
 *  b2 | panel x60..520 y160..244 · header (script 15, red) bl 190 · body (sans 14) bl 226
 *  b3 | demo: eq (sans 18) x60 st bl 274 · note (script 14, red) x220 st ·
 *       verdict (script 15) x420 st bl 274
 *  b4 | panel x560..1020 y160..244 (same innards)
 *  b5 | panels x60..520 & x560..1020 y304..388 · headers bl 334 · bodies bl 370
 *  b6 | panel x60..1020 y428..512 · header (script 15, red) bl 458
 *  b7 | formula (sans 18) mid bl 494 · verdict (script 15, red) mid bl 546
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Panel({
  x,
  y,
  w,
  h,
  on,
  delay,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  on: boolean;
  delay: number;
}) {
  return (
    <Draw
      on={on}
      delay={delay}
      d={`M ${x + 12} ${y} h ${w - 24} q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -${
        w - 24
      } q -12 0 -12 -12 v -${h - 24} q 0 -12 12 -12`}
      stroke={RED}
      sw={2}
      dur={0.8}
    />
  );
}

export default function Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — sharp boundaries */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("five places the method goes blind", "paanch jagah ye method andha hai")}
        </T>
      </Fade>

      {/* beat 1 — the five red squares */}
      {[0, 1, 2, 3, 4].map((i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 0.5)}
            d={`M ${358 + i * 70} 90 h 24 q 8 0 8 8 v 24 q 0 8 -8 8 h -24 q -8 0 -8 -8 v -24 q 0 -8 8 -8`}
            stroke={RED}
            sw={2.2}
            dur={0.4}
          />
          <Fade on={beat >= 1} delay={dl(1, 0.9 + i * 0.5)}>
            <T x={370 + i * 70} y={116} size={16} fill={RED} weight={800}>
              {i + 1}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={720} y={116} size={14} fill={MUTED} script anchor="start">
          {t("recognise each on sight", "har ek ko dekhte hi pehchano")}
        </T>
      </Fade>

      {/* beat 2 — limitation 1: pure numbers */}
      <Panel x={60} y={160} w={460} h={84} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={80} y={190} size={15} fill={RED} script anchor="start">
          {t("1 · blind to pure numbers", "1 · pure numbers nahi dikhte")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={80} y={226} size={14} fill={INK} weight={600} anchor="start">
          {t(
            "dimensionally right ≠ physically right — ½ and 2π invisible",
            "dimensionally sahi ≠ physically sahi — ½ aur 2π gayab"
          )}
        </T>
      </Fade>

      {/* beat 3 — the missing half */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={274} size={18} fill={INK} weight={700} anchor="start">
          s = u t + a t²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={220} y={274} size={14} fill={RED} script anchor="start">
          {t("(the ½ is missing!)", "(½ gayab hai!)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={420} y={274} size={15} fill={RED} script anchor="start">
          {t("passes the check ✓ — and is WRONG ✗", "check paas ✓ — phir bhi GALAT ✗")}
        </T>
      </Fade>

      {/* beat 4 — limitation 2: too many unknowns */}
      <Panel x={560} y={160} w={460} h={84} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={580} y={190} size={15} fill={RED} script anchor="start">
          {t("2 · too many unknowns", "2 · unknowns zyada")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={580} y={226} size={14} fill={INK} weight={600} anchor="start">
          {t(
            "M·L·T give only 3 equations — a 4th unknown stays loose",
            "M·L·T se sirf 3 equations — 4th unknown khula reh jaata"
          )}
        </T>
      </Fade>

      {/* beat 5 — limitations 3 and 4 */}
      <Panel x={60} y={304} w={460} h={84} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={80} y={334} size={15} fill={RED} script anchor="start">
          {t("3 · can't derive sums", "3 · sums derive nahi hote")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={80} y={370} size={14} fill={INK} weight={600} anchor="start">
          {t("no power-law product makes ut + ½at²", "koi power-law ut + ½at² nahi banata")}
        </T>
      </Fade>
      <Panel x={560} y={304} w={460} h={84} on={beat >= 5} delay={dl(5, 8)} />
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={580} y={334} size={15} fill={RED} script anchor="start">
          {t("4 · sin / log / exp arguments", "4 · sin / log / exp ke andar")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={580} y={370} size={14} fill={INK} weight={600} anchor="start">
          {t("sin θ · eˣ · log y — arguments must be dimensionless", "sin θ · eˣ · log y — andar dimensionless hi chahiye")}
        </T>
      </Fade>

      {/* beat 6 — limitation 5 opens */}
      <Panel x={60} y={428} w={960} h={84} on={beat >= 6} delay={dl(6, 0.5)} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={458} size={15} fill={RED} script>
          {t("5 · same recipe — can't tell two quantities apart", "5 · same recipe — do quantities alag nahi hoti")}
        </T>
      </Fade>

      {/* beat 7 — work vs torque */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={494} size={18} fill={INK} weight={700}>
          work = [M L² T⁻²] = torque
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={546} size={15} fill={RED} script>
          {t(
            "same recipe — completely different dish",
            "recipe same — dish bilkul alag"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
