/**
 * Ch04 · Section 92 — "Master cheat sheet: every key relation, all eight subtopics"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * FINAL SECTION OF CHAPTER 4.
 *
 * Beats (en [0, 19.54, 44.37, 69.21, 94.04, 113.83, 136.7, 137.7, 138.7]):
 *  0 title
 *  1 subtitle: every key relation of Laws of Motion on one page
 *  2 band1: Newton's Laws & Momentum
 *  3 band2: Equilibrium & Apparent Weight
 *  4 band3: Friction
 *  5 band4: Circular Motion & Banking
 *  6 band5: Springs & the Atwood Machine
 *  7 band6: Vertical Circular Motion
 *  8 red margin: the memory chain — four phrases for the four hardest subtopics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 48 · subtitle cx540 bl 68
 *  bands x60..1020 h50, pitch 64:
 *  b1 y84..134 hdr bl102 · form bl124 · b2 y148..198 hdr bl166 · form bl188
 *  b3 y212..262 hdr bl230 · form bl252 · b4 y276..326 hdr bl294 · form bl316
 *  b5 y340..390 hdr bl358 · form bl380 · b6 y404..454 hdr bl422 · form bl444
 *  b8 | bar x66 y480..585 · lines st x84 bl 500 / 524 / 548 / 572
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 60 ${y} h 960 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -960 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec92({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={80} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={17} fill={INK} script>
          {t(
            "the single page to revise the night before",
            "raat pehle dohraane ka ek page"
          )}
        </T>
      </Fade>

      {/* beat 1 — subtitle */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={68} size={11} fill={MUTED} script>
          {t(
            "every key relation of Laws of Motion, on one page",
            "Laws of Motion ka har mukhya relation, ek page par"
          )}
        </T>
      </Fade>

      {/* beat 2 — Newton's Laws & Momentum */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(84, 50)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(2, 102, t("Newton's Laws & Momentum", "Newton's Laws & Momentum"))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={124} size={12} fill={INK} weight={700}>
          F=ma=dp⁄dt · J=FΔt=Δp · conserved: m₁u₁+m₂u₂=m₁v₁+m₂v₂
        </T>
      </Fade>

      {/* beat 3 — Equilibrium & Apparent Weight */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(148, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 166, t("Equilibrium & Apparent Weight", "Equilibrium & Apparent Weight"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={188} size={12} fill={INK} weight={700}>
          ΣF=0 · Lami: P/sinα=Q/sinβ=R/sinγ · lift: R=m(g±a), R=0 free fall
        </T>
      </Fade>

      {/* beat 4 — Friction */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(212, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(4, 230, t("Friction", "Friction"))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={252} size={12} fill={INK} weight={700}>
          fs≤μsN, fk=μkN · tanθr=μs=tanλ · incline: a=g(sinθ−μcosθ)
        </T>
      </Fade>

      {/* beat 5 — Circular Motion & Banking */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(276, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 294, t("Circular Motion & Banking", "Circular Motion & Banking"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={316} size={12} fill={INK} weight={700}>
          flat v_max=√(μrg) · bank tanθ=v²⁄rg · well v_min=√(gr⁄μ)
        </T>
      </Fade>

      {/* beat 6 — Springs & the Atwood Machine */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={band(340, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(6, 358, t("Springs & the Atwood Machine", "Springs & the Atwood Machine"))}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={380} size={12} fill={INK} weight={700}>
          series 1⁄k=Σ1⁄ki, parallel k=Σki · a=(m₁−m₂)g⁄(m₁+m₂), T=2m₁m₂g⁄(m₁+m₂)
        </T>
      </Fade>

      {/* beat 7 — Vertical Circular Motion */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(404, 50)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(7, 422, t("Vertical Circular Motion", "Vertical Circular Motion"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={444} size={12} fill={INK} weight={700}>
          string: v_top=√gr, v_bottom=√5gr, Tb−Tt=6mg · sphere: cosθ=2⁄3
        </T>
      </Fade>

      {/* beat 8 — the memory chain */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 480 v 105" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={500} size={13} fill={RED} script anchor="start">
          {t(
            "'cut, draw, add — tension falls out' (connected bodies)",
            "'cut, draw, add — tension nikal aati' (connected bodies)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={524} size={13} fill={RED} script anchor="start">
          {t(
            "'difference over sum, times g' (Atwood)",
            "'antar upon jod, guna g' (Atwood)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10.5)}>
        <T x={84} y={548} size={13} fill={RED} script anchor="start">
          {t(
            "'top √gr, bottom √5gr, six mg apart' (vertical circle)",
            "'top √gr, bottom √5gr, six mg alag' (vertical circle)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 15)}>
        <T x={84} y={572} size={13} fill={GREEN} script anchor="start">
          {t(
            "'it lets go when the push hits zero' (leaving a surface)",
            "'chhodta hai jab dhakka zero ho jaaye' (surface chhodna)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
