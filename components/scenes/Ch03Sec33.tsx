/**
 * Ch03 · Section 33 — "The toolkit: position, velocity, acceleration, and magnitudes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.1, 17.0, 30.2, 37.6, 52.3, 58.0, 68.7]):
 *  0 heading
 *  1 r → (d/dt) → v
 *  2 v → (d/dt) → a + chain caption
 *  3 magnitudes header
 *  4 speed + direction formulas
 *  5 averages header
 *  6 average formulas
 *  7 working rule
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | "r = x î + y ĵ" st x104 bl 120 s15 · arrow (160,134)→(160,164) lbl st (172,152) ·
 *       "v = vx î + vy ĵ" st x104 bl 190 s15
 *  b2 | arrow (160,204)→(160,234) lbl st (172,222) · "a = ax î + ay ĵ" st x104 bl 260 s15 ·
 *       caption st x104 bl 288 s11
 *  b3 | header st x560 bl 120 s13 · underline M560 128 h400
 *  b4 | st x580 bl 156 / 184 s14 · caption st x580 bl 208 s11
 *  b5 | header st x560 bl 250 s13 · underline M560 258 h340
 *  b6 | st x580 bl 286 s14 · caption st x580 bl 310 s11
 *  b7 | bar M66 360 v52 · lines st x84 bl 378 / 402 s12
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("TOOLKIT — the plane in components", "TOOLKIT — plane, components mein")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — r, differentiate, v */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={104} y={120} size={15} fill={INK} weight={800} anchor="start">
          r = x î + y ĵ
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(160, 134, 160, 164)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={172} y={152} size={11} fill={AMBER_DARK} weight={700} anchor="start">d⁄dt</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={104} y={190} size={15} fill={INK} weight={800} anchor="start">
          v = vx î + vy ĵ
        </T>
      </Fade>

      {/* beat 2 — differentiate again */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(160, 204, 160, 234)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={172} y={222} size={11} fill={AMBER_DARK} weight={700} anchor="start">d⁄dt</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={104} y={260} size={15} fill={INK} weight={800} anchor="start">
          a = ax î + ay ĵ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={104} y={288} size={11} fill={MUTED} script anchor="start">
          {t(
            "each is the time-derivative of the one before",
            "har ek pichhle waale ka time-derivative hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — magnitudes header */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={560} y={120} size={13} fill={INK} script anchor="start">
          {t(
            "MAGNITUDES — always Pythagoras (components are ⊥)",
            "MAGNITUDES — hamesha Pythagoras (components ⊥ hain)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 560 128 h 400" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — speed and direction */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={156} size={14} fill={INK} weight={700} anchor="start">
          speed = √(vx² + vy²)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={580} y={184} size={14} fill={INK} weight={700} anchor="start">
          tan θ = vy ⁄ vx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={580} y={208} size={11} fill={MUTED} script anchor="start">
          {t("the same pattern gives |r|", "wahi pattern |r| bhi deta hai")}
        </T>
      </Fade>

      {/* beat 5 — averages header */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={250} size={13} fill={INK} script anchor="start">
          {t(
            "AVERAGES — the change over the interval",
            "AVERAGES — interval bhar ka badlav"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 560 258 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 6 — the average formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={580} y={286} size={14} fill={INK} weight={700} anchor="start">
          v̄ = Δr ⁄ Δt   ·   ā = Δv ⁄ Δt
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={580} y={310} size={11} fill={MUTED} script anchor="start">
          {t(
            "net change across the interval — not the instantaneous derivative",
            "poore interval ka net badlav — instantaneous derivative nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the working rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 360 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={378} size={12} fill={GREEN} script anchor="start">
          {t(
            "given x(t) and y(t): differentiate once → velocity, twice → acceleration",
            "x(t) aur y(t) diye hon: ek baar differentiate → velocity, do baar → acceleration"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={402} size={12} fill={RED} script anchor="start">
          {t(
            "and do not forget the chain-rule factors",
            "aur chain-rule ke factors mat bhoolna"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
