/**
 * Ch01 · Section 62 — "The vernier's trick: two combs, deliberately mismatched"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.5, 25.3, 47.7, 69, 85.7, 103.2, 121.6]):
 *  0 title + how do you get underneath the marks?
 *  1 mismatched on purpose
 *  2 diagram 1: main scale (1 mm ticks) + vernier (10 div over 9 mm) + green agree-lines
 *  3 bracket: 10 across 9 ⇒ 0.9 mm each — short by 0.1
 *  4 diagram 2: vernier slid 0.4 mm — exactly ONE line coincides
 *  5 amber ring at the 4th line → 0.4 mm past the mark
 *  6 combs metaphor at right — one aligned pair
 *  7 verdict: swaps a hard judgement for an easy one
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b2 | main y140 x130..790 ticks ↓ every 60 x150..750 · vernier y180 ticks ↑ every 54 x150..690
 *  b2 | green dashed x150 / x690 y128..192 · side labels script 13 st x820 bl 150/186
 *  b3 | bracket x150..690 y196 · label cx420 bl 226
 *  b4 | main y290 ticks x150..750 · vernier y330 ticks ↑ x174..714 (+24 shift) · label st x800 bl 310
 *  b5 | ring c(390,310) rx14 ry28 · label cx390 bl 380
 *  b6 | combs x640..900 y390..440 · label cx770 bl 470
 *  b7 | script 14 mid bl 525 · green bl 555
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const mainTicks = (y: number) => {
    const p: string[] = [`M 130 ${y} h 660`];
    for (let x = 150; x <= 750; x += 60) p.push(`M ${x} ${y} v 16`);
    return p.join(" ");
  };
  const vernTicks = (y: number, x0: number) => {
    const p: string[] = [`M ${x0 - 20} ${y} h 600`];
    for (let i = 0; i <= 10; i++) p.push(`M ${x0 + i * 54} ${y} v -16`);
    return p.join(" ");
  };
  const comb = (x0: number, y: number, step: number, dir: number, n: number) => {
    const p: string[] = [`M ${x0 - 10} ${y} h ${step * (n - 1) + 20}`];
    for (let i = 0; i < n; i++) p.push(`M ${x0 + i * step} ${y} v ${dir * 22}`);
    return p.join(" ");
  };

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t(
            "the vernier's trick — two combs, deliberately mismatched",
            "vernier ki trick — do kanghiyan, jaanbujhkar bemel"
          )}
        </T>
      </Fade>

      {/* beat 1 — on purpose */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} script>
          {t(
            "vernier divisions are slightly SMALLER — on purpose",
            "vernier divisions zara si CHHOTI hain — jaanbujhkar"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two scales */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={mainTicks(140)} stroke={INK} sw={1.8} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={820} y={150} size={13} fill={INK} script anchor="start">
          {t("main — 1 mm marks", "main — 1 mm nishaan")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d={vernTicks(180, 150)} stroke={AMBER_DARK} sw={1.8} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={820} y={186} size={13} fill={AMBER_DARK} script anchor="start">
          {t("vernier — 10 divisions", "vernier — 10 divisions")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <Line x1={150} y1={128} x2={150} y2={192} stroke={GREEN} strokeWidth={2} strokeDasharray="5 4" />
        <Line x1={690} y1={128} x2={690} y2={192} stroke={GREEN} strokeWidth={2} strokeDasharray="5 4" />
      </Fade>

      {/* beat 3 — the arithmetic of the mismatch */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 150 198 q 2 8 10 8 h 250 M 690 198 q -2 8 -10 8 h -250"
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={420} y={230} size={14} fill={INK} script>
          {t(
            "10 divisions across 9 mm ⇒ each = 0.9 mm — short by exactly 0.1",
            "9 mm mein 10 divisions ⇒ har ek = 0.9 mm — theek 0.1 kam"
          )}
        </T>
      </Fade>

      {/* beat 4 — slide it: exactly one coincides */}
      <Draw on={beat >= 4} delay={dl(4, 2)} d={mainTicks(290)} stroke={INK} sw={1.8} dur={1} />
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={vernTicks(330, 174)} stroke={AMBER_DARK} sw={1.8} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={810} y={316} size={13} fill={AMBER_DARK} script anchor="start">
          {t("not two, not none — exactly ONE", "do nahi, zero nahi — theek EK")}
        </T>
      </Fade>

      {/* beat 5 — which one tells the fraction */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={ringD(390, 310, 14, 28)}
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={390} y={382} size={14} fill={GREEN} script>
          {t(
            "the 4th line coincides → 0.4 mm past the main mark",
            "chauthi line milti hai → main nishaan se 0.4 mm aage"
          )}
        </T>
      </Fade>

      {/* beat 6 — the combs */}
      <Draw on={beat >= 6} delay={dl(6, 2)} d={comb(640, 396, 26, -1, 10)} stroke={INK_LIGHT} sw={1.8} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d={comb(650, 412, 29, 1, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.9} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d={ringD(796, 404, 13, 24)}
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={770} y={470} size={13} fill={MUTED} script>
          {t(
            "two combs — only one pair of teeth aligns at a time",
            "do kanghiyan — ek waqt par sirf ek jodi daant milti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the deep idea */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={525} size={14} fill={INK} script>
          {t(
            "your eye is bad at judging fractions — but brilliant at spotting coincidence",
            "aankh hisse aankne mein kharab hai — par milan pakadne mein shaandaar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={555} size={14} fill={GREEN} script>
          {t(
            "the vernier swaps a hard judgement for an easy one",
            "vernier mushkil faisle ki jagah aasaan faisla rakh deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
