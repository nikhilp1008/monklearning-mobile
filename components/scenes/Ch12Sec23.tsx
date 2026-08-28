/**
 * Ch12 · Section 23 — Worked example [CBSE]: rms speed from pressure and density
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.81, 17.81, 18.81, 19.81, 20.81, 32.42]):
 *  0 title + problem · 1 reach for density form (ρ bundles m, N) · 2
 *    rearranged formula vrms=√(3P/ρ) · 3 substitute · 4 answer ≈480 m/s · 5
 *    comparison bars: sound in air vs vrms(O2) · 6 takeaway
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (14, ink, script)       | T mid | x540 y94
 *  b1 | reasoning (14, ink, script)     | T mid | x540 y126
 *  b2 | formula (16, ink)               | T mid | x540 y158
 *  b3 | substitute (15, ink)            | T mid | x540 y188
 *  b4 | answer (20, amber_dark, bold)   | T mid | x540 y222
 *  b5 | bar "sound ~340 m/s"             | rect  | x150..433 y263..277
 *  b5 | bar "vrms(O2) ~480 m/s"          | rect  | x150..550 y298..312
 *  b6 | takeaway (script 15, green)     | T mid | x540 y360
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("rms speed from pressure and density [CBSE]", "pressure aur density se rms speed [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} script>
          {t("O₂: P = 1×10⁵ Pa, ρ = 1.30 kg/m³ ⇒ vrms?", "O₂: P = 1×10⁵ Pa, ρ = 1.30 kg/m³ ⇒ vrms?")}
        </T>
      </Fade>

      {/* beat 1 — reach for density form */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={126} size={14} fill={INK} script>
          {t(
            "reach for the density form: ρ already bundles m and N",
            "density form uthao: ρ pehle se m aur N bundle karta"
          )}
        </T>
      </Fade>

      {/* beat 2 — rearranged formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={16} fill={INK} weight={700}>
          vrms = √(3P/ρ)
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={15} fill={INK}>
          = √(3×10⁵ / 1.30) = √(2.31×10⁵)
        </T>
      </Fade>

      {/* beat 4 — answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={222} size={20} fill={AMBER_DARK} weight={700}>
          ≈ 480 m/s
        </T>
      </Fade>

      {/* beat 5 — comparison bars: sound vs vrms */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={150} y={263} width={283} height={14} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={445} y={274} size={13} fill={MUTED} anchor="start">
          {t("sound in air ~340 m/s", "hawa mein sound ~340 m/s")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Rect x={150} y={298} width={400} height={14} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={562} y={309} size={13} fill={GREEN} anchor="start">
          O₂ vrms ~480 m/s
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={360} size={15} fill={GREEN} script>
          {t(
            "P and ρ given ⇒ vrms needs nothing else — ρ hides m and N",
            "P aur ρ diye ⇒ vrms ko aur kuch nahi chahiye — ρ mein m aur N chhupe"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
