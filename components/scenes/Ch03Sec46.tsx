/**
 * Ch03 · Section 46 — "The toolkit: flight, height, range, and the handy relations"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.9, 10.9, 22.8, 33.6, 47.3, 59.5, 73.0]):
 *  0 heading
 *  1 T / H / R boxes
 *  2 Rmax = u²/g = 4Hmax
 *  3 handy relations: complementary range
 *  4 heights add, R = 4H cotθ
 *  5 horizontal projectile header
 *  6 t = √(2h/g), R = u√(2h/g)
 *  7 sin²θ vs sin2θ warning
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | boxes y96..142: x84..350 (cx217) · x380..660 (cx520) · x690..1000 (cx845) ·
 *       caption cx540 bl 168 s11
 *  b2 | st x84 bl 206 s14
 *  b3 | header st x84 bl 248 s13 · underline M84 256 h300 · st x104 bl 282 s13
 *  b4 | st x104 bl 310 / 338 s13
 *  b5 | header st x570 bl 248 s13 · underline M570 256 h380
 *  b6 | st x590 bl 282 / 310 s13 · caption st x590 bl 334 s11
 *  b7 | bar M66 386 v52 · lines st x84 bl 404 / 428 s12
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

export default function Ch03Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("PROJECTILE TOOLKIT 2 — the standard results", "PROJECTILE TOOLKIT 2 — standard results")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the three plug-in results */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 96 96 h 242 q 12 0 12 12 v 22 q 0 12 -12 12 h -242 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={217} y={126} size={14} fill={INK} weight={800}>T = 2u sinθ ⁄ g</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 392 96 h 256 q 12 0 12 12 v 22 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={520} y={126} size={14} fill={INK} weight={800}>H = u² sin²θ ⁄ 2g</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d="M 702 96 h 286 q 12 0 12 12 v 22 q 0 12 -12 12 h -286 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={845} y={126} size={14} fill={INK} weight={800}>R = u² sin 2θ ⁄ g</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={540} y={168} size={11} fill={MUTED} script>
          {t(
            "the shape to learn: T and H carry sin — R carries sin 2θ",
            "yaad rakhne ka pattern: T aur H mein sin — R mein sin 2θ"
          )}
        </T>
      </Fade>

      {/* beat 2 — the maximum */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={206} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "R max = u² ⁄ g at 45° — and there, R max = 4 H max",
            "R max = u² ⁄ g, 45° par — aur wahan R max = 4 H max"
          )}
        </T>
      </Fade>

      {/* beat 3 — complementary angles */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={248} size={13} fill={INK} script anchor="start">
          {t("HANDY RELATIONS — one-liner makers", "HANDY RELATIONS — one-liner banane waale")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 84 256 h 300" stroke={AMBER} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={104} y={282} size={13} fill={INK} weight={700} anchor="start">
          {t("θ and (90° − θ) → the SAME range", "θ aur (90° − θ) → EK hi range")}
        </T>
      </Fade>

      {/* beat 4 — the pair's bonuses */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={104} y={310} size={13} fill={INK} weight={700} anchor="start">
          H₁ + H₂ = u² ⁄ 2g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={104} y={338} size={13} fill={INK} weight={700} anchor="start">
          R = 4 H cotθ
        </T>
      </Fade>

      {/* beat 5 — horizontal projectile */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={570} y={248} size={13} fill={INK} script anchor="start">
          {t(
            "HORIZONTAL PROJECTILE from height h (uy = 0)",
            "height h se HORIZONTAL PROJECTILE (uy = 0)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 570 256 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 6 — its two formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={590} y={282} size={13} fill={INK} weight={700} anchor="start">
          t fall = √(2h ⁄ g)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={590} y={310} size={13} fill={INK} weight={700} anchor="start">
          R = u · √(2h ⁄ g)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={590} y={334} size={11} fill={MUTED} script anchor="start">
          {t(
            "a dropped object, with a sideways drift added",
            "girta hua object, bas sideways drift ke saath"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sin²θ vs sin2θ warning */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 386 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={404} size={12} fill={RED} script anchor="start">
          {t(
            "keep them apart: HEIGHT uses sin²θ · RANGE uses sin 2θ",
            "alag rakho: HEIGHT mein sin²θ · RANGE mein sin 2θ"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={428} size={12} fill={RED} script anchor="start">
          {t(
            "mixing the two is the most common slip in the whole topic",
            "in dono ko milana poore topic ki sabse aam galti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
