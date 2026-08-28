/**
 * Ch10 · Section 8 — "Density change and thermal stress"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.4, 7.4, 8.4, 9.4, 10.4, 22.35] — beats 1-4 only 1s apart,
 * so those Fade delays stay ≤ ~0.4s):
 *  0 two consequences fall out of expansion — density, and stress
 *  1 density: ρ = ρ₀⁄(1+γΔT) ≈ ρ₀(1−γΔT)
 *  2 logic: same mass, more volume ⇒ lighter per unit volume
 *  3 stress: σ = Y α ΔT (clamped rod can't expand)
 *  4 setup: walls forbid expansion — rod squeezed back
 *  5 strain = αΔT, stress = Y × strain (pascals)
 *  6 notice: length is missing — short/long rod, same stress
 *
 * Layout plan (halves x=300/780, strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl100
 *  b1 | formula mid x290 bl165
 *  b2 | small box x150..230 y210..260 · big box x260..380 y195..275 ·
 *       dots inside each · label mid x290 bl300
 *  b3 | formula mid x790 bl165
 *  b4 | wall1 x650..670 · wall2 x900..920 y195..235 · rod x670..900 y210..220 ·
 *       arrows · label mid x790 bl275
 *  b5 | note mid x790 bl315
 *  b6 | short rod x650..720 y360 · long rod x650..950 y385 · caption mid x790 bl415
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
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const dotPath = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const dotsPath = (pts: [number, number][], r: number) =>
  pts.map(([x, y]) => dotPath(x, y, r)).join(" ");

export default function Ch10Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const smallDots = dotsPath(
    [[175, 230], [200, 240], [175, 248], [200, 222], [190, 235], [210, 250]],
    2.6
  );
  const bigDots = dotsPath(
    [[285, 215], [335, 230], [280, 255], [350, 250], [310, 210], [320, 260]],
    2.6
  );

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("density change and thermal stress", "density change aur thermal stress")}
        </T>
      </Fade>

      {/* beat 0 — two consequences */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={INK} script anchor="middle">
          {t(
            "two consequences fall out — density, and stress",
            "expansion se do cheezein nikalti hain — density, aur stress"
          )}
        </T>
      </Fade>

      {/* beat 1 — density formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={290} y={165} size={14} fill={INK} anchor="middle">
          ρ = ρ₀⁄(1+γΔT) ≈ ρ₀(1−γΔT)
        </T>
      </Fade>

      {/* beat 2 — same mass, more volume, lighter */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M150 210 h80 v50 h-80 z" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={smallDots} stroke={RED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M260 195 h120 v80 h-120 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.75)} d={bigDots} stroke={RED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={290} y={300} size={12} fill={GREEN} script anchor="middle">
          {t("same mass, more volume ⇒ lighter", "mass wahi, volume zyada ⇒ halka")}
        </T>
      </Fade>

      {/* beat 3 — stress formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={790} y={165} size={16} fill={RED} weight={700} anchor="middle">
          σ = Y α ΔT
        </T>
      </Fade>

      {/* beat 4 — walls forbid expansion */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M650 195 h20 v40 h-20 z M650 195 l20 40 M650 215 l20 20 M650 235 l20 -20" stroke={INK} sw={1.6} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M900 195 h20 v40 h-20 z M900 195 l20 40 M900 215 l20 20 M900 235 l20 -20" stroke={INK} sw={1.6} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M670 213 h230 v8 h-230 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.85)} d={`${arrowD(710, 217, 685, 217)} ${arrowD(860, 217, 885, 217)}`} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.15)}>
        <T x={790} y={275} size={12} fill={INK} script anchor="middle">
          {t("walls forbid expansion — rod squeezed back", "deewaarein expand nahi hone deti — rod dabta hai")}
        </T>
      </Fade>

      {/* beat 5 — strain and stress */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={790} y={315} size={13} fill={INK} script anchor="middle">
          {t("strain = αΔT, stress = Y × strain (pascals)", "strain = αΔT, stress = Y × strain (pascals)")}
        </T>
      </Fade>

      {/* beat 6 — length is missing */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M650 360 h70" stroke={AMBER_DARK} sw={5} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={730} y={364} size={10} fill={MUTED} anchor="start">{t("short", "chhota")}</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M650 385 h300" stroke={AMBER_DARK} sw={5} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.75)}>
        <T x={960} y={389} size={10} fill={MUTED} anchor="start">{t("long", "lamba")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={790} y={415} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("same stress — length is missing from σ!", "same stress — σ mein length hai hi nahi!")}
        </T>
      </Fade>
    </Scene>
  );
}
