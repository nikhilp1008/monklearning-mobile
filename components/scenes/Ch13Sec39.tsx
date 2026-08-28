/**
 * Ch13 · Section 39 — "Framework: forced oscillation, steady state, and resonance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.5, 15.28, 30.88, 41.61, 49.41, 58.84, 70.55]):
 *  0 shelf
 *  1 mẍ + bẋ + kx = F₀cosωt
 *  2 steady state: x = A cos(ωt−δ) at driving frequency
 *  3 A = (F₀/m) / √((ω²−ω₀²)² + (bω/m)²)
 *  4 diagram: amplitude vs frequency — F₀/k plateau, peak, capped by damping
 *  5 (ω²−ω₀²)² → 0 at ω=ω₀ ⇒ amplitude shoots up
 *  6 note (high): damping alone caps it — A_res ≈ F₀/(bω₀)
 *  7 ω→0 ⇒ A→F₀/k
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size14
 *  b2 | st x70 bl140 size12
 *  b3 | st x70 bl175 size12
 *  b4 | x-axis y260 x630..1010 → · y-axis x760 y275..90 ↑ · ω₀-dashed x760 y100..260 · "ω₀" cx760 bl278 ·
 *      curve M630,235 Q710,235 745,110 Q760,95 775,110 Q810,235 890,245 Q950,248 1010,250 (green) ·
 *      dot1(630,235) red + "A→F₀/k" x635 bl222 · dot2(760,97) green + "capped ≈F₀/(bω₀)" x772 bl112
 *  b5 | st x70 bl215 size12
 *  b6 | st x70 bl250 size13 amber weight700
 *  b7 | script12 st x70 bl290
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("Reading the whole resonance story off one denominator", "Poori resonance kahani ek denominator se padhna")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the driven equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={14} fill={INK} anchor="start" weight={700}>
          mẍ + bẋ + kx = F₀cosωt
        </T>
      </Fade>

      {/* beat 2 — the steady-state form */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={140} size={12} fill={INK} anchor="start">
          {t("steady state: x = A cos(ωt−δ) at driving frequency", "steady state: x = A cos(ωt−δ) driving frequency par")}
        </T>
      </Fade>

      {/* beat 3 — the amplitude */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={175} size={12} fill={INK} anchor="start" weight={700}>
          A = (F₀/m) / √((ω²−ω₀²)² + (bω/m)²)
        </T>
      </Fade>

      {/* beat 4 — the picture: read every feature off the denominator */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(630, 260, 1010, 260)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(760, 275, 760, 90)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Path d="M 760 100 V 260" stroke={AMBER_DARK} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
        <T x={760} y={278} size={11} fill={INK}>
          ω₀
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.7)}
        d="M630 235 Q710 235 745 110 Q760 95 775 110 Q810 235 890 245 Q950 248 1010 250"
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <Circle cx={630} cy={235} r={4} fill={RED} />
        <T x={635} y={222} size={10} fill={RED} anchor="start">
          A→F₀/k
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Circle cx={760} cy={97} r={4} fill={GREEN} />
        <T x={772} y={112} size={10} fill={GREEN} anchor="start">
          capped ≈F₀/(bω₀)
        </T>
      </Fade>

      {/* beat 5 — resonance shoots the amplitude up */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={215} size={12} fill={INK} anchor="start">
          {t(
            "(ω²−ω₀²)² → 0 at ω=ω₀ ⇒ amplitude shoots up",
            "(ω²−ω₀²)² → 0 jab ω=ω₀ ⇒ amplitude uchal jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — damping caps it, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={250} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("damping alone caps it: A_res ≈ F₀/(bω₀)", "sirf damping ise cap karti hai: A_res ≈ F₀/(bω₀)")}
        </T>
      </Fade>

      {/* beat 7 — the low-frequency limit */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={290} size={12} fill={INK} script anchor="start">
          {t(
            "ω→0 ⇒ A→F₀/k (slow push just stretches the spring)",
            "ω→0 ⇒ A→F₀/k (slow push bas spring ko statically stretch karta hai)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
