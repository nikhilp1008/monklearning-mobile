/**
 * Ch02 · Section 22 — "Procedure B: converting between graph types"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.1, 29, 45.9, 70.7, 95.6, 107.2, 132]):
 *  0 title
 *  1 three panels: x-t parabola · v-t rising line · a-t horizontal
 *  2 red slope arrows rightward + "plot the SLOPE, not the height"
 *  3 retraces + shape-rules line
 *  4 green area arrows leftward + running-area line
 *  5 second climb line (+ x₀)
 *  6 red note: change not absolute · v₀ essential
 *  7 green: calculus, drawn
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  panels x80/400/720 (w 280) · headers bl 96 · axes M+30,120 V260 H+250
 *  slope arrows y190 (340→420, 660→740) labels bl 172
 *  area arrows y240 (420→340, 740→660) labels bl 266
 *  rule lines cx540: b2 bl 320 · b3 bl 350 · b4 bl 380 · b5 bl 410
 *  b6 | bar x66 y436..508 · lines st x84 bl 454 / 478 / 502
 *  b7 | bar x56 y530..582 · lines st x72 bl 550 / 576
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const P = [80, 400, 720];
const CURVES = [
  `M ${80 + 45} 250 Q ${80 + 130} 245, ${80 + 230} 140`,
  `M ${400 + 45} 252 L ${400 + 230} 155`,
  `M ${720 + 45} 200 h 185`,
];

export default function Ch02Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — climbing two rungs */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "converting graphs — the two-rung climb",
            "graph badalna — do paidan ki chadhaai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three panels */}
      {P.map((px, i) => (
        <G key={i}>
          <Fade on={beat >= 1} delay={dl(1, 0.5 + i * 2.6)}>
            <T x={px + 140} y={96} size={13} fill={MUTED} script>
              {["x-t", "v-t", "a-t"][i]}
            </T>
          </Fade>
          <Draw
            on={beat >= 1}
            delay={dl(1, 1 + i * 2.6)}
            d={`M ${px + 30} 120 V 260 H ${px + 250}`}
            stroke={MUTED}
            sw={1.8}
            dur={0.6}
          />
          <Draw
            on={beat >= 1}
            delay={dl(1, 1.8 + i * 2.6)}
            d={CURVES[i]}
            stroke={INK}
            sw={2.4}
            dur={0.8}
          />
        </G>
      ))}

      {/* beat 2 — down by slope */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(340, 190, 420, 190)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={380} y={172} size={12} fill={RED} script>
          slope
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(660, 190, 740, 190)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={700} y={172} size={12} fill={RED} script>
          slope
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={320} size={12} fill={RED} script>
          {t(
            "downhill = differentiate: plot the SLOPE at each instant — not the height",
            "neeche = differentiate: har pal ka SLOPE plot karo — oonchaai nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the shape rules */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={CURVES[0]} stroke={AMBER} sw={3.2} dur={0.9} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={CURVES[1]} stroke={AMBER} sw={3.2} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={540} y={350} size={12} fill={AMBER_DARK} script>
          {t(
            "straight x-t → horizontal v-t · parabola x-t → sloped v-t line",
            "seedhi x-t → horizontal v-t · parabola x-t → dhalvaan v-t line"
          )}
        </T>
      </Fade>

      {/* beat 4 — up by running area */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(420, 240, 340, 240)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={380} y={266} size={12} fill={GREEN} script>
          area
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={arrowD(740, 240, 660, 240)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={700} y={266} size={12} fill={GREEN} script>
          area
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={540} y={380} size={12} fill={GREEN} script>
          {t(
            "uphill = integrate: bank the RUNNING area onto v₀ as you sweep across",
            "upar = integrate: sweep karte hue RUNNING area ko v₀ par jodte jao"
          )}
        </T>
      </Fade>

      {/* beat 5 — and again */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={410} size={12} fill={GREEN} script>
          {t(
            "then again onto x₀ — two rungs, the same operation twice",
            "phir wahi x₀ par — do paidan, wahi operation do baar"
          )}
        </T>
      </Fade>

      {/* beat 6 — the warning, repeated on purpose */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 436 v 72" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={454} size={13} fill={RED} script anchor="start">
          {t(
            "area gives the CHANGE, never the absolute value",
            "area BADLAV deta hai, kabhi poori value nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={84} y={478} size={13} fill={RED} script anchor="start">
          {t(
            "an a-t graph alone can never tell you v — only how much v changed",
            "akela a-t graph v nahi bata sakta — sirf v kitna badla"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={502} size={13} fill={RED} script anchor="start">
          {t(
            "a given v₀ is not scenery — it is essential data",
            "diya hua v₀ sajaavat nahi — zaroori data hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — calculus, drawn */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 530 v 52" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={550} size={13} fill={GREEN} script anchor="start">
          {t(
            "slope = derivative · area = integral — inverse operations",
            "slope = derivative · area = integral — ulta-seedha jode"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={72} y={576} size={13} fill={GREEN} script anchor="start">
          {t(
            "converting graphs is not a new skill: it is calculus, drawn",
            "graph badalna nayi kala nahi: yeh calculus hai, kheencha hua"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
