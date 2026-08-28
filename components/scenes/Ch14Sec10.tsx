/**
 * Ch14 · Section 10 — "The principle of superposition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.63, 24.07, 36.27, 43.77, 51.9, 60.65, 74.41]):
 *  0 hook: two pebbles, ripples meet, keep going — what happened?
 *  1 the figure: in-step waves add; out-of-step waves flatten; both pass through
 *  2 the principle: resultant = algebraic sum of each wave
 *  3 in symbols: y = y1 + y2 + y3 + ...
 *  4 constructive (extra high) vs destructive (nearly zero), ringed
 *  5 mental picture: waves don't bounce like cricket balls
 *  6 general formula: A = √(A1²+A2²+2A1A2 cosφ)
 *  7 extremes: φ=0 → max; φ=π → min/zero
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | 2 drop pts + ripple rings     | Draw  | c(140,130)/(220,130) r15/28
 *  b0 | "?" (16)                      | T mid | x270 bl150            y137..154
 *  b1 | "IN STEP" (13,muted)          | T mid | x290 bl320            y309..323
 *  b1 | wave1+wave2 overlay (left)    | Draw  | x120..460 y333..357
 *  b1 | resultant (left, green)       | Draw  | x120..460 y389..441
 *  b1 | "OUT OF STEP" (13,muted)      | T mid | x800 bl320            y309..323
 *  b1 | wave1+wave2 overlay (right)   | Draw  | x620..960 y333..357
 *  b1 | resultant (right, red)        | Draw  | x620..960 y412..418
 *  b2 | principle chip (h42)          | Chip  | x230..850 y200..242
 *  b3 | symbol chip (h32)             | Chip  | x390..690 y270..302
 *  b4 | ring (left peak)              | Draw  | c(290,389) r18/22
 *  b4 | "CONSTRUCTIVE..." (13,green)  | T mid | x290 bl448            y437..451
 *  b4 | ring (right, flat)            | Draw  | c(800,415) r18/10
 *  b4 | "DESTRUCTIVE..." (13,red)     | T mid | x800 bl448            y437..451
 *  b5 | mental picture (12,muted)     | T mid | x540 bl472            y462..476
 *  b6 | formula chip (h44,s16)        | Chip  | x340..740 y495..539
 *  b7 | "φ=0 → MAX" chip (13)         | T st  | x150 bl560            y549..563
 *  b7 | "φ=π → MIN/zero" chip (13)    | T st  | x580 bl560            y549..563
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function sineD(x1: number, baseline: number, amp: number, cycles: number, width: number, invert = false): string {
  const n = 24;
  let d = `M ${x1} ${baseline}`;
  const sign = invert ? -1 : 1;
  for (let i = 1; i <= n; i++) {
    const x = x1 + (width * i) / n;
    const y = baseline - sign * amp * Math.sin((2 * Math.PI * cycles * i) / n);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

export default function Ch14Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={27} fill={RED} script>
          {t("the principle of superposition", "superposition ka principle")}
        </T>
      </Fade>

      {/* beat 0 — two pebbles hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Circle cx={140} cy={130} r={2.5} fill={INK} />
        <Circle cx={220} cy={130} r={2.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 125 130 A 15 15 0 1 1 155 130 A 15 15 0 1 1 125 130" stroke={AMBER} sw={1.6} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 1.0)} d="M 112 130 A 28 28 0 1 1 168 130 A 28 28 0 1 1 112 130" stroke={AMBER} sw={1.6} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 205 130 A 15 15 0 1 1 235 130 A 15 15 0 1 1 205 130" stroke={GREEN} sw={1.6} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 1.8)} d="M 192 130 A 28 28 0 1 1 248 130 A 28 28 0 1 1 192 130" stroke={GREEN} sw={1.6} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={270} y={150} size={16} fill={INK}>
          ?
        </T>
      </Fade>

      {/* beat 1 — the figure */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={290} y={320} size={13} fill={MUTED} script>
          {t("in step", "in step")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={sineD(120, 345, 12, 2, 340)} stroke={INK} sw={1.8} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={sineD(120, 345, 12, 2, 340)} stroke={AMBER} sw={1.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={sineD(120, 415, 26, 2, 340)} stroke={GREEN} sw={2.6} dur={0.8} />

      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={800} y={320} size={13} fill={MUTED} script>
          {t("out of step", "out of step")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.0)} d={sineD(620, 345, 12, 2, 340)} stroke={INK} sw={1.8} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={sineD(620, 345, 12, 2, 340, true)} stroke={AMBER} sw={1.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d="M 620 415 L 960 415" stroke={RED} sw={2.6} dur={0.6} />

      {/* beat 2 — the principle */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={230} y={200} w={620} h={42} fill="#fff" stroke={GREEN} textFill={INK} size={15} script={false}>
          {t(
            "superposition: resultant = ALGEBRAIC SUM of each wave",
            "superposition: resultant = har wave ka ALGEBRAIC SUM"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — in symbols */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={390} y={270} w={300} h={32} fill="#fff" stroke={AMBER} textFill={INK} size={16} script={false}>
          y = y₁ + y₂ + y₃ + ...
        </Chip>
      </Fade>

      {/* beat 4 — constructive vs destructive, ringed */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(290, 389, 18, 22)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={290} y={448} size={13} fill={GREEN} script>
          {t("CONSTRUCTIVE — extra high!", "CONSTRUCTIVE — extra high!")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={ringD(800, 415, 18, 10)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={800} y={448} size={13} fill={RED} script>
          {t("DESTRUCTIVE — nearly zero!", "DESTRUCTIVE — near zero!")}
        </T>
      </Fade>

      {/* beat 5 — mental picture */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={472} size={12} fill={MUTED} script>
          {t(
            "waves don't bounce like cricket balls — they add, then continue unchanged",
            "waves cricket ball jaisi bounce nahi hoti — add hoti, phir unchanged chalti"
          )}
        </T>
      </Fade>

      {/* beat 6 — general formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={340} y={495} w={400} h={44} fill="#fff" stroke={AMBER} textFill={INK} size={16} script={false}>
          A = √(A₁² + A₂² + 2A₁A₂ cosφ)
        </Chip>
      </Fade>

      {/* beat 7 — the extremes */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={560} size={13} fill={GREEN} anchor="start">
          {t("φ=0 → cos=+1 → MAX (brightest)", "φ=0 → cos=+1 → MAX (brightest)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={580} y={560} size={13} fill={RED} anchor="start">
          {t("φ=π → cos=−1 → MIN (darkest/zero)", "φ=π → cos=−1 → MIN (darkest/zero)")}
        </T>
      </Fade>
    </Scene>
  );
}
