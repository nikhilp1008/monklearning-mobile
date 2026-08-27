/**
 * Ch05 · Section 26 — "Pitfalls, and the PE-curve drill" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 35.0, 59.8, 80.7, 104.8, 129.6, 144.3] · dur 169.1;
 *        hi [0, 11.4, 36.3, 61.1, 82.3, 105.5, 130.3, 142.5] · dur 167.3):
 *  0 title · 1 P1 no PE for non-conservative · 2 P2 dropped minus flips all
 *  3 P3 K ∝ p² · 4 P4 spring difference of squares · 5 P5 mgh regime
 *  6 drill: three boxes · 7 drill verdict band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  P1: lbl st x80 bl114 · lines st x90 bl142 / bl168
 *  P2: lbl bl210 · bl238 / bl264 · P3: lbl bl306 · bl334 / bl360
 *  P4: lbl st x570 bl114 · bl142 / bl168 · P5: lbl bl210 · bl238 / bl264
 *  b6 | boxes x600..1000: y300..340 / y360..400 / y420..460 · arrows x800
 *  b7 | bar x66 y490..575 · lines st x84 bl510 / bl536 / bl562
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the PE-Curve Drill", "Pitfalls & the PE-Curve Drill")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "five pitfalls — then one drill that answers a whole family",
            "paanch pitfalls — phir ek drill jo poore parivar ka jawab de"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — invented PE", "pitfall 1 — gadhi hui PE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={142} size={12.5} fill={RED} script anchor="start">
          {t(
            "friction PE ✗ · air-drag PE ✗ — nothing stored, nothing to retrieve",
            "friction PE ✗ · air-drag PE ✗ — kuchh jama nahi, wapas kuchh nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={90} y={168} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "U exists only for conservative: gravity, spring, electrostatic",
            "U sirf conservative ke liye: gravity, spring, electrostatic"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — the lost minus", "pitfall 2 — khoya hua minus")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={238} size={12.5} fill={RED} script anchor="start">
          {t(
            "drop the minus in F = −dU⁄dx → every force flips direction",
            "F = −dU⁄dx ka minus giraya → har force ki direction palti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={90} y={264} size={12.5} fill={RED} script anchor="start">
          {t(
            "stable ↔ unstable — the whole classification inverts",
            "stable ↔ unstable — poora classification ulta"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={306} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — K vs p", "pitfall 3 — K vs p")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={90} y={334} size={12.5} fill={INK} script anchor="start">
          {t(
            "K ∝ p², not p — double v: 2× p but 4× K",
            "K ∝ p², p nahi — v dugna: 2× p par 4× K"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={90} y={360} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "NEET traps are built on exactly this confusion",
            "NEET ke traps isi confusion par bane hote hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — P4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={570} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — the spring, again", "pitfall 4 — spring, phir se")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={142} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "W = ½k(x₂² − x₁²) — difference of squares ✓",
            "W = ½k(x₂² − x₁²) — squares ka difference ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={580} y={168} size={12.5} fill={RED} script anchor="start">
          {t("½k(x₂ − x₁)² ✗ — wrong every single time", "½k(x₂ − x₁)² ✗ — har baar galat")}
        </T>
      </Fade>

      {/* beat 5 — P5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={570} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 5 — the wrong regime", "pitfall 5 — galat regime")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={580} y={238} size={12.5} fill={RED} script anchor="start">
          {t(
            "large distances: m g h ✗ — g is not constant there",
            "badi dooriyan: m g h ✗ — wahan g constant nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={580} y={264} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "switch to −G m₁ m₂ ⁄ r — decide the regime up front",
            "−G m₁ m₂ ⁄ r par jao — regime ka faisla pehle karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the drill boxes */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 612 300 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={800} y={326} size={13.5} fill={INK} weight={700}>
          {t("1 · differentiate: F = −U′(x)", "1 · differentiate: F = −U′(x)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={arrowD(800, 342, 800, 358)} stroke={MUTED} sw={2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 3)} d="M 612 360 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={800} y={386} size={13.5} fill={INK} weight={700}>
          {t("2 · set F = 0 → equilibria", "2 · F = 0 rakho → equilibria")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.4)} d={arrowD(800, 402, 800, 418)} stroke={MUTED} sw={2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 5)} d="M 612 420 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={800} y={446} size={13.5} fill={INK} weight={700}>
          {t("3 · sign of U″ → classify", "3 · U″ ka sign → classify")}
        </T>
      </Fade>

      {/* beat 7 — the drill verdict */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 490 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={510} size={13} fill={GREEN} script anchor="start">
          {t(
            "U″ + → valley → STABLE · U″ − → hilltop → UNSTABLE",
            "U″ + → valley → STABLE · U″ − → hilltop → UNSTABLE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={536} size={13} fill={GREEN} script anchor="start">
          {t(
            "same three lines every time — the family falls in under a minute",
            "har baar wahi teen lines — poora parivar ek minute se pehle girta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={84} y={562} size={13} fill={AMBER_DARK} script anchor="start">
          {t("memorise the pairing", "jodi yaad rakho")}
        </T>
      </Fade>
    </Scene>
  );
}
