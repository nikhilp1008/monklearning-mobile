/**
 * Ch03 · Section 30 — "The equations of motion, promoted to vectors"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.9, 22.7, 32.7, 46.3, 57.0, 67.4, 77.9]):
 *  0 heading
 *  1 the two vector equations
 *  2 identical — just promoted
 *  3 x-set / y-set split
 *  4 projectile special case
 *  5 circular special case
 *  6 subtlety: the averages differ
 *  7 displacement vs path length
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box1 x140..500 y84..130 text cx320 bl 114 s16 · box2 x560..960 y84..130
 *       text cx760 bl 114 s16
 *  b2 | line cx540 bl 164 s12 · underline M300 174 h480
 *  b3 | headers st x160/x600 bl 224 · lines st x160 bl 250/276 · st x600 bl 250/276 ·
 *       caption cx540 bl 310 s11
 *  b4 | st x84 bl 352 s12
 *  b5 | st x84 bl 380 s12 · st x84 bl 404 s11
 *  b6 | bar M66 436 v78 · line st x84 bl 454 s12
 *  b7 | lines st x84 bl 478 / 502 s12
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

export default function Ch03Sec30({ currentTime, reveals, language }: SceneProps) {
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
            "The 1-D equations get a VECTOR upgrade",
            "1-D equations ka VECTOR upgrade"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the two equations */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 152 84 h 336 q 12 0 12 12 v 22 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={320} y={114} size={16} fill={INK} weight={800}>
          v = v₀ + a t
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 572 84 h 376 q 12 0 12 12 v 22 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={760} y={114} size={16} fill={INK} weight={800}>
          r = r₀ + v₀t + ½ a t²
        </T>
      </Fade>

      {/* beat 2 — promoted, not new */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={164} size={12} fill={INK} script>
          {t(
            "they look identical to the 1-D versions — because they ARE, just promoted to vectors",
            "yeh 1-D versions jaise hi dikhte hain — kyunki yeh WAHI hain, bas vector bana diye gaye"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 300 174 h 480" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — the split */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={160} y={224} size={13} fill={AMBER_DARK} script anchor="start">x-set</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={160} y={250} size={13} fill={INK} weight={700} anchor="start">
          vx = v₀x + ax t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={160} y={276} size={13} fill={INK} weight={700} anchor="start">
          x = x₀ + v₀x t + ½ ax t²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={600} y={224} size={13} fill={GREEN} script anchor="start">y-set</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={600} y={250} size={13} fill={INK} weight={700} anchor="start">
          vy = v₀y + ay t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={600} y={276} size={13} fill={INK} weight={700} anchor="start">
          y = y₀ + v₀y t + ½ ay t²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={540} y={310} size={11} fill={MUTED} script>
          {t(
            "two independent 1-D stories — same clock",
            "do azaad 1-D kahaniyan — wahi ghadi"
          )}
        </T>
      </Fade>

      {/* beat 4 — projectile preview */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={352} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "projectile motion = the special case a = −g ĵ  (gravity only, nothing horizontal)",
            "projectile motion = special case a = −g ĵ  (sirf gravity, horizontal kuchh nahi)"
          )}
        </T>
      </Fade>

      {/* beat 5 — circular preview */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={84} y={380} size={12} fill={GREEN} script anchor="start">
          {t(
            "uniform circular motion = the case where a always aims at a centre",
            "uniform circular motion = jab a hamesha kisi centre par tana rahe"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={84} y={404} size={11} fill={MUTED} script anchor="start">
          {t(
            "master the framework, and both special cases become effortless",
            "framework pakka karo, dono special cases aasaan ho jate hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — the averages subtlety */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 436 v 78" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={454} size={12} fill={RED} script anchor="start">
          {t(
            "subtlety: speed = |velocity| at an instant — but the AVERAGES differ",
            "subtlety: kisi pal par speed = |velocity| — par AVERAGES alag hote hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — why they differ */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={478} size={12} fill={RED} script anchor="start">
          {t(
            "avg velocity uses straight-line DISPLACEMENT · avg speed uses PATH length",
            "avg velocity seedha DISPLACEMENT leti hai · avg speed PATH ki lambai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={502} size={12} fill={INK} script anchor="start">
          {t(
            "on any curved path they genuinely differ — same as the straight-line chapter",
            "kisi bhi curved path par dono sach mein alag — straight-line chapter jaisa hi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
