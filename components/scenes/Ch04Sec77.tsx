/**
 * Ch04 · Section 77 — "Worked Example 3 [JEE Main]: incline and hanging block"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.98, 37.38, 62.21, 87.04, 105.39, 121.6]):
 *  0 title
 *  1 problem: m1=4kg on frictionless 30° incline, string over pulley to hanging m2=3kg
 *  2 diagram (left col): incline wedge, pulley, m1 on slope, m2 hanging, caption
 *  3 text (right col): which way? m2g=30N vs m1g·sin30=20N, 30>20 → m2 descends
 *  4 text (right col): two equations — hanging 30−T=3a, incline T−20=4a
 *  5 formula box: a = 10/7 ≈ 1.43 m/s²
 *  6 formula box: T = 180/7 ≈ 25.7 N
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  L fig | wedge M150 300 L400 300 L400 285 L150 210 Z · pulley c(150,195) r13 ·
 *    slope string (160,202)→(270,240) · vert string (150,208)→(150,250) ·
 *    m1 x260..315 y235..265 lbl(287,285) · m2 x120..175 y250..290 lbl(147,308) ·
 *    30° lbl (370,295) · caption cx270 bl 342
 *  R col x580..1020 | b3 st bl 150/174 · b4 st bl 210/234 ·
 *    b5 box y260..304 bl 292 · b6 box y324..368 bl 356
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — incline and hanging block",
            "Example 3 [JEE Main] — incline aur latakta block"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ = 4 kg on a frictionless 30° incline, string over a pulley at the top",
            "m₁ = 4 kg frictionless 30° incline par, top ki pulley ke upar string"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "down to a freely hanging m₂ = 3 kg · find a and T · g = 10 m⁄s²",
            "neeche azaad latakte m₂ = 3 kg tak · a aur T nikaalo · g = 10 m⁄s²"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 150 300 L 400 300 L 400 285 L 150 210 Z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={ringD(150, 195, 13, 13)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d="M 160 202 L 270 240"
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M 150 208 L 150 250"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 260 235 h 55 v 30 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.8)}
        d="M 120 250 h 55 v 40 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={287} y={285} size={12} fill={INK} weight={700}>
          m₁ = 4 kg
        </T>
        <T x={147} y={308} size={12} fill={INK} weight={700}>
          m₂ = 3 kg
        </T>
        <T x={370} y={295} size={11} fill={MUTED} weight={700}>
          30°
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={270} y={342} size={11} fill={MUTED} script>
          {t(
            "check which pull wins before writing equations",
            "equations likhne se pehle dekho kaunsi khinchaai jeetegi"
          )}
        </T>
      </Fade>

      {/* beat 3 — which way */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={580} y={150} size={12} fill={INK} script anchor="start">
          {t(
            "m₂g = 30 N (hanging, wants to descend)",
            "m₂g = 30 N (latakta, utarna chahta)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={580} y={174} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "m₁g·sin30° = 20 N (down-slope) — 30 > 20, m₂ wins",
            "m₁g·sin30° = 20 N (slope-neeche) — 30 > 20, m₂ jeeta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the two equations */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={580} y={210} size={13} fill={INK} weight={700} anchor="start">
          {t("hanging: 30 − T = 3a", "latakta: 30 − T = 3a")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={580} y={234} size={13} fill={INK} weight={700} anchor="start">
          {t("incline: T − 20 = 4a", "incline: T − 20 = 4a")}
        </T>
      </Fade>

      {/* beat 5 — the acceleration */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 580 260 h 400 q 12 0 12 12 v 20 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={780} y={292} size={15} fill={INK} weight={800}>
          a = 10 ÷ 7 ≈ 1.43 m⁄s²
        </T>
      </Fade>

      {/* beat 6 — the tension */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 580 324 h 400 q 12 0 12 12 v 20 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={780} y={356} size={15} fill={INK} weight={800}>
          T = 180 ÷ 7 ≈ 25.7 N
        </T>
      </Fade>
    </Scene>
  );
}
