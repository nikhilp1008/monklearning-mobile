/**
 * Ch03 · Section 45 — "The toolkit: components, velocity, position, and trajectory"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.7, 17.2, 26.1, 38.4, 48.4, 59.0, 75.5]):
 *  0 heading
 *  1 resolve: ux, uy
 *  2 velocity header (horizontal fixed)
 *  3 vx / vy formulas
 *  4 position header
 *  5 x(t) formula
 *  6 y(t) + trajectory
 *  7 apex fact: speed = u cosθ
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 116 s14 · caption st x84 bl 140 s11
 *  b2 | header st x84 bl 184 s13 · underline M84 192 h330
 *  b3 | st x104 bl 222 / 250 s14 · caption st x104 bl 274 s11
 *  b4 | header st x570 bl 184 s13 · underline M570 192 h300
 *  b5 | st x590 bl 222 s14
 *  b6 | st x590 bl 250 s14 · box x570..1030 y276..322 text cx800 bl 306 s14
 *  b7 | bar M66 380 v52 · lines st x84 bl 398 / 422 s12
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

export default function Ch03Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("PROJECTILE TOOLKIT 1 — the two channels", "PROJECTILE TOOLKIT 1 — dono channels")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — resolve */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={116} size={14} fill={INK} weight={700} anchor="start">
          ux = u cosθ (constant) · uy = u sinθ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={140} size={11} fill={MUTED} script anchor="start">
          {t(
            "the one setup move every projectile problem needs",
            "har projectile sawaal ki pehli aur zaroori chaal"
          )}
        </T>
      </Fade>

      {/* beat 2 — velocity header */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={184} size={13} fill={INK} script anchor="start">
          {t("VELOCITY at time t", "time t par VELOCITY")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 84 192 h 330" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — the two velocity components */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={104} y={222} size={14} fill={INK} weight={700} anchor="start">
          vx = u cosθ  (fixed)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={104} y={250} size={14} fill={INK} weight={700} anchor="start">
          vy = u sinθ − g t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={104} y={274} size={11} fill={MUTED} script anchor="start">
          {t(
            "gravity erodes it: zero at the top, negative on the way down",
            "gravity use ghisti hai: top par zero, utarte hue negative"
          )}
        </T>
      </Fade>

      {/* beat 4 — position header */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={570} y={184} size={13} fill={INK} script anchor="start">
          {t("POSITION at time t", "time t par POSITION")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 570 192 h 300" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — x(t) */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={590} y={222} size={14} fill={INK} weight={700} anchor="start">
          x = u cosθ · t
        </T>
      </Fade>

      {/* beat 6 — y(t) and the trajectory */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={590} y={250} size={14} fill={INK} weight={700} anchor="start">
          y = u sinθ · t − ½ g t²
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 582 276 h 436 q 12 0 12 12 v 22 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={800} y={306} size={14} fill={INK} weight={800}>
          y = x tanθ − g x² ⁄ (2u² cos²θ)
        </T>
      </Fade>

      {/* beat 7 — the apex fact */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 380 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={398} size={12} fill={GREEN} script anchor="start">
          {t(
            "at the apex vy = 0 → the speed there is exactly u cosθ",
            "apex par vy = 0 → wahan speed theek u cosθ hoti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={422} size={12} fill={RED} script anchor="start">
          {t(
            "never zero — unless the launch was straight up",
            "kabhi zero nahi — jab tak seedha upar na phenka ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
