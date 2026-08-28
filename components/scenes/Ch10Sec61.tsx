/**
 * Ch10 · Section 61 — "Pitfalls and pro-tips for thermometry"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closes Subtopic 5 (Thermometry, the Ideal-Gas Equation and Absolute
 * Temperature). Five pitfalls this time (not the usual four) + pro-tip.
 *
 * Beats (en [0,4.1,22.44,32.85,46.08,64.77,65.77]):
 *  0 close: the traps of thermometry
 *  1 pitfall 1 (deadliest): Celsius in a gas law — all need kelvin
 *  2 pitfall 2: absolute zero is NOT attainable — an extrapolated limit
 *  3 pitfall 3: confusing the three gas laws — hold the right variable fixed
 *  4 pitfall 4: triple point ≠ ice point (273.16K low-P vs 1atm ordinary)
 *  5 pitfall 5: a thermometer outside its range gives nonsense
 *  6 pro-tip: combine as P₁V₁/T₁=P₂V₂/T₂, kelvin throughout — one identity
 *
 * Layout plan (badge cx76 r15, Kalam bl−1.3s..+0.5s):
 *  b1 | badge cy90 · text st x104 bl96
 *  b2 | badge cy135 · text st x104 bl141
 *  b3 | badge cy180 · text st x104 bl186
 *  b4 | badge cy225 · text st x104 bl231
 *  b5 | badge cy270 · text st x104 bl276
 *  b6 | box x70..1010 y305..375 · header mid x540 bl330 · content mid x540 bl358
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
  AMBER,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={on} delay={delay + 0.25}>
        <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch10Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("pitfalls and pro-tips for thermometry", "thermometry ke pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1: Celsius in a gas law */}
      <Badge n={1} cy={90} on={beat >= 1} delay={dl(1, 0.15)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={104} y={96} size={13} fill={RED} script anchor="start">
          {t(
            "the deadliest: Celsius in a gas law — everything needs kelvin",
            "sabse ghatak: gas law mein Celsius — sabko kelvin chahiye"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2: absolute zero not attainable */}
      <Badge n={2} cy={135} on={beat >= 2} delay={dl(2, 0.15)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={104} y={141} size={13} fill={RED} script anchor="start">
          {t(
            "absolute zero is NOT attainable — an extrapolated limit only",
            "absolute zero paaya nahi ja sakta — sirf extrapolated limit"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3: confusing the three laws */}
      <Badge n={3} cy={180} on={beat >= 3} delay={dl(3, 0.15)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={104} y={186} size={13} fill={RED} script anchor="start">
          {t(
            "confusing the three gas laws — hold the right variable fixed",
            "teen gas laws ka ghaalmel — sahi variable fix rakho"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4: triple point vs ice point */}
      <Badge n={4} cy={225} on={beat >= 4} delay={dl(4, 0.15)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={104} y={231} size={13} fill={RED} script anchor="start">
          {t(
            "triple point ≠ ice point — 273.16K low-P vs 1atm ordinary",
            "triple point ≠ ice point — 273.16K low-P vs 1atm normal"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 5: thermometer outside its range */}
      <Badge n={5} cy={270} on={beat >= 5} delay={dl(5, 0.15)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={104} y={276} size={13} fill={RED} script anchor="start">
          {t(
            "a thermometer outside its range gives nonsense",
            "range se bahar thermometer bakwaas deta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip box */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M70 305 h940 v70 h-940 z" stroke={AMBER} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={330} size={15} fill={INK} script weight={700} anchor="middle">
          {t("pro-tip:", "pro-tip:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={358} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "combine as P₁V₁/T₁=P₂V₂/T₂, kelvin throughout — one identity always",
            "P₁V₁/T₁=P₂V₂/T₂ jodo, hamesha kelvin — ek hi identity"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
