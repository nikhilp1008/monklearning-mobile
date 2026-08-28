/**
 * Ch04 · Section 91 — "Formula recap: the whole chapter in one frame"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.19, 47.02, 71.85, 96.68, 121.51, 146.35, 147.35, 169.45]):
 *  0 title
 *  1 subtitle: the eight subtopics of Laws of Motion, one panel each
 *  2 band1: Laws & Impulse
 *  3 band2: Momentum Conservation & Equilibrium (incl. Lami)
 *  4 band3: Friction
 *  5 band4: Circular Motion (horizontal)
 *  6 band5: Common Forces & FBDs
 *  7 band6: Connected Bodies & Pulleys
 *  8 band7: Vertical Circular Motion
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · subtitle cx540 bl 72
 *  bands x60..1020 h50, pitch 64:
 *  b1 y90..140 hdr bl108 · form bl130 · b2 y154..204 hdr bl172 · form bl194
 *  b3 y218..268 hdr bl236 · form bl258 · b4 y282..332 hdr bl300 · form bl322
 *  b5 y346..396 hdr bl364 · form bl386 · b6 y410..460 hdr bl428 · form bl450
 *  b7 y474..524 hdr bl492 · form bl514
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 60 ${y} h 960 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -960 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec91({ currentTime, reveals, language }: SceneProps) {
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
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "every governing relation, subtopic by subtopic",
            "har governing relation, subtopic dar subtopic"
          )}
        </T>
      </Fade>

      {/* beat 1 — subtitle */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={72} size={11} fill={MUTED} script>
          {t(
            "the eight subtopics of Laws of Motion, one panel each",
            "Laws of Motion ke aath subtopics, ek panel har ek"
          )}
        </T>
      </Fade>

      {/* beat 2 — Laws & Impulse */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(90, 50)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(2, 108, t("1 · Laws & Impulse", "1 · Laws & Impulse"))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={130} size={12} fill={INK} weight={700}>
          F = ma = dp⁄dt · J = FΔt = Δp · 3rd law: equal & opposite, on TWO bodies
        </T>
      </Fade>

      {/* beat 3 — Momentum & Equilibrium */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(154, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 172, t("2-3 · Momentum & Equilibrium", "2-3 · Momentum & Equilibrium"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={194} size={12} fill={INK} weight={700}>
          conserved if F_ext=0 · ΣF=0 · Lami: P/sinα = Q/sinβ = R/sinγ
        </T>
      </Fade>

      {/* beat 4 — Friction */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(218, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(4, 236, t("4 · Friction", "4 · Friction"))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={258} size={12} fill={INK} weight={700}>
          fs≤μsN, fk=μkN, μs≥μk · tanθ_repose=μs · incline: a=g(sinθ−μcosθ)
        </T>
      </Fade>

      {/* beat 5 — Circular Motion (horizontal) */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(282, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 300, t("5 · Circular Motion (horizontal)", "5 · Circular Motion (horizontal)"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={322} size={12} fill={INK} weight={700}>
          Fc=mv²⁄r · flat v_max=√(μrg) · bank tanθ=v²⁄rg · well v_min=√(gr⁄μ)
        </T>
      </Fade>

      {/* beat 6 — Common Forces & FBDs */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={band(346, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(6, 364, t("6 · Common Forces & FBDs", "6 · Common Forces & FBDs"))}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={386} size={12} fill={INK} weight={700}>
          N=m(g±a) (lift) · springs: series 1⁄k=Σ1⁄ki, parallel k=Σki · F=−kx
        </T>
      </Fade>

      {/* beat 7 — Connected Bodies & Pulleys */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(410, 50)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(7, 428, t("7 · Connected Bodies & Pulleys", "7 · Connected Bodies & Pulleys"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={450} size={12} fill={INK} weight={700}>
          Atwood: a=(m₁−m₂)g⁄(m₁+m₂), T=2m₁m₂g⁄(m₁+m₂) · frame: g_eff=g±a₀
        </T>
      </Fade>

      {/* beat 8 — Vertical Circular Motion */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d={band(474, 50)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(8, 492, t("8 · Vertical Circular Motion", "8 · Vertical Circular Motion"))}
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={514} size={12} fill={INK} weight={700}>
          string: v_top=√gr, v_bottom=√5gr, Tb−Tt=6mg · rod: v_bottom=2√gr
        </T>
      </Fade>
    </Scene>
  );
}
