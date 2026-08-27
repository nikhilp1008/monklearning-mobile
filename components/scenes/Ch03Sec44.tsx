/**
 * Ch03 · Section 44 — "Board derivation: range, and the parabola equation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.7, 27.5, 39.1, 49.9, 66.3, 77.9, 88.6]):
 *  0 heading
 *  1 range = ucosθ × T
 *  2 R = u² sin2θ / g box
 *  3 sin2θ peaks at 45°
 *  4 Rmax = u²/g box
 *  5 trajectory: eliminate t
 *  6 y = x tanθ − gx²/2u²cos²θ box
 *  7 form y = ax − bx² → PARABOLA
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  L col: b1 st x84 bl 118 s12 · st x84 bl 146 s13
 *  b2 | box x84..500 y166..212 text cx292 bl 196 s16
 *  b3 | st x84 bl 250 s12 · st x84 bl 278 s13
 *  b4 | box x84..500 y298..344 text cx292 bl 328 s16 · caption st x84 bl 368 s11
 *  R col: b5 st x570 bl 118 s12 · st x570 bl 146 s13
 *  b6 | box x570..1030 y166..216 text cx800 bl 198 s14
 *  b7 | st x570 bl 254 s13 · bar M556 280 v52 · lines st x570 bl 298 / 322 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE DERIVATION — range & the trajectory",
            "CBSE DERIVATION — range aur trajectory"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — uniform drift × T */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "RANGE — the horizontal motion is uniform, so distance = speed × time",
            "RANGE — horizontal motion uniform hai, isliye doori = speed × time"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={146} size={13} fill={INK} weight={700} anchor="start">
          R = u cosθ × T = u cosθ × 2u sinθ ⁄ g
        </T>
      </Fade>

      {/* beat 2 — the double angle collapses it */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 96 166 h 392 q 12 0 12 12 v 22 q 0 12 -12 12 h -392 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={292} y={196} size={16} fill={INK} weight={800}>
          R = u² sin 2θ ⁄ g
        </T>
      </Fade>

      {/* beat 3 — where sin2θ peaks */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={250} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "sin 2θ is largest (= 1) when 2θ = 90°",
            "sin 2θ sabse bada (= 1) jab 2θ = 90°"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={278} size={13} fill={INK} weight={700} anchor="start">
          → θ = 45°
        </T>
      </Fade>

      {/* beat 4 — the famous maximum */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 298 h 392 q 12 0 12 12 v 22 q 0 12 -12 12 h -392 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={292} y={328} size={16} fill={INK} weight={800}>
          R max = u² ⁄ g   at 45°
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={368} size={11} fill={GREEN} script anchor="start">
          {t(
            "the famous result — straight out of the sine reaching its peak",
            "mashhoor result — seedha sine ke peak chhoone se"
          )}
        </T>
      </Fade>

      {/* beat 5 — eliminate t */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={118} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "TRAJECTORY — the shape y(x), with time eliminated",
            "TRAJECTORY — y(x) ka roop, time hata kar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={570} y={146} size={13} fill={INK} weight={700} anchor="start">
          x = u cosθ · t  →  t = x ⁄ (u cosθ)
        </T>
      </Fade>

      {/* beat 6 — the trajectory equation */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 582 166 h 436 q 12 0 12 12 v 26 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={800} y={198} size={14} fill={INK} weight={800}>
          y = x tanθ − g x² ⁄ (2u² cos²θ)
        </T>
      </Fade>

      {/* beat 7 — read the structure */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={570} y={254} size={13} fill={INK} weight={700} anchor="start">
          {t("the structure:  y = a·x − b·x²", "dhaancha:  y = a·x − b·x²")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3)} d="M 556 280 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={570} y={298} size={12} fill={GREEN} script anchor="start">
          {t(
            "that is the equation of a PARABOLA — the arch, confirmed by algebra",
            "yahi PARABOLA ki equation hai — arch, algebra se pakka"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={570} y={322} size={12} fill={INK} script anchor="start">
          {t(
            "no assumption required — it drops out of the two channels",
            "koi assumption nahi chahiye — do channels se khud nikalta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
