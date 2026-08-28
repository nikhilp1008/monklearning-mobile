/**
 * Ch04 · Section 89 — "Worked Example 4 [JEE Advanced]: leaving a smooth sphere"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 23.81, 42.67, 67.5, 92.33, 93.33, 94.33]):
 *  0 title
 *  1 problem: block released from rest at top of smooth sphere R, find θ & v where it leaves
 *  2 diagram (left): sphere, block at leaving angle θ, N outward, mg down, θ arc, caption
 *  3 formula (right): toward centre mgcosθ−N=mv²/R, leaves when N=0: v²=gRcosθ
 *  4 formula (right): energy: v²=2gR(1−cosθ)
 *  5 hero box: cosθ=2/3, θ≈48.2° · v=√(2gR/3)
 *  6 red margin: independent of mass and R — universal angle, N=0+energy is the master key
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  L fig | sphere c(280,220) r70 · top dot(280,150) · leaving dot(330,170) ·
 *    radius line(280,220→330,170) · θ arc near centre · N arr(330,170→345,155) lbl(352,150) ·
 *    mg arr(330,170→330,200) lbl(335,215) · caption cx280 bl 310
 *  R col x580..1020 | b3 bl 150 / 172 · b4 bl 210
 *  b5 box x260..820 y350..394 bl 378
 *  b6 | bar x66 y420..490 · lines st x84 bl 440 / 466
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec89({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — leaving a smooth sphere",
            "Example 4 [JEE Advanced] — smooth sphere chhodna"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "block released from rest at the top of a smooth sphere, radius R",
            "smooth sphere ke top se aaraam se chhoda gaya block, radius R"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: angle θ where it leaves the surface, and its speed there",
            "nikaalo: θ jahan surface chhodta, aur wahaan ki speed"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={circleD(280, 220, 70)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={ringD(280, 150, 5, 5)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d="M 280 220 L 330 170"
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={ringD(330, 170, 6, 6)} stroke={INK} sw={2} dur={0.3} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.6)}
        d="M 280 195 Q 275 187 265 190"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={258} y={200} size={11} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d={arrowD(330, 170, 345, 155)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d={arrowD(330, 170, 330, 200)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={352} y={150} size={11} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={335} y={215} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={280} y={310} size={11} fill={MUTED} script>
          {t(
            "N = 0 plus energy conservation — the key Advanced move",
            "N = 0 plus energy conservation — Advanced ki mukhya chaal"
          )}
        </T>
      </Fade>

      {/* beat 3 — toward centre, N=0 */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={580} y={150} size={13} fill={INK} weight={700} anchor="start">
          mg·cosθ − N = mv²⁄R
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={580} y={172} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("leaves when N=0: v² = gR·cosθ", "N=0 par chhodta: v² = gR·cosθ")}
        </T>
      </Fade>

      {/* beat 4 — energy */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={580} y={210} size={13} fill={INK} weight={700} anchor="start">
          v² = 2gR(1−cosθ)
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 260 350 h 560 q 12 0 12 12 v 22 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={378} size={16} fill={INK} weight={800}>
          cosθ = 2⁄3, θ ≈ 48.2° · v = √(2gR⁄3)
        </T>
      </Fade>

      {/* beat 6 — the deep insight */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 420 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={440} size={14} fill={RED} script anchor="start">
          {t(
            "independent of MASS and R — a universal angle, cos⁻¹(2⁄3)",
            "MASS aur R se azaad — ek universal angle, cos⁻¹(2⁄3)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={466} size={14} fill={GREEN} script anchor="start">
          {t(
            "N=0 + energy — the master key for every leaving-the-surface problem",
            "N=0 + energy — surface-chhodne waale har problem ki master key"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
