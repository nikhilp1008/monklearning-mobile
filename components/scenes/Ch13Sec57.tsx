/**
 * Ch13 · Section 57 — "Formula recap: the whole chapter on one board"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.29, 11.52, 18.74, 27.1, 37.49, 42.68, 48.55]):
 *  0 shelf
 *  1 Kinematics: a=-ω²x , v=±ω√(A²-x²) , vmax=Aω , amax=Aω²
 *  2 Energy: E=½kA² , K=U at x=A/√2 , K,U oscillate at 2f
 *  3 Pendulum T=2π√(L/g) ; spring T=2π√(m/k) ; series/parallel keff
 *  4 Damped: A∝e^(-bt/2m) , E∝e^(-bt/m) ; Q=mω₀/b , N≈Q/2π
 *  5 Resonance at ω≈ω₀ ; Ares≈F₀/(bω₀)
 *  6 Phasor add: A=√(A₁²+A₂²+2A₁A₂cosδ)
 *  7 Standard systems: T=2π√(L/2g) , 2π√(h/g) , 2π√(R/g)
 *
 * Layout plan (Anek bl−0.78s..+0.31s), full-board recap, no diagram — generous spacing:
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl120 size14
 *  b2 | st x70 bl175 size14
 *  b3 | st x70 bl230 size14
 *  b4 | st x70 bl285 size14
 *  b5 | st x70 bl340 size14
 *  b6 | st x70 bl395 size14
 *  b7 | st x70 bl450 size14
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Every key relation of Oscillations", "Oscillations ke har key relation")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — kinematics */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={120} size={14} fill={INK} anchor="start" weight={700}>
          Kinematics: a=-ω²x , v=±ω√(A²-x²) , vmax=Aω , amax=Aω²
        </T>
      </Fade>

      {/* beat 2 — energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={175} size={14} fill={INK} anchor="start" weight={700}>
          Energy: E=½kA² , K=U at x=A/√2 , K,U oscillate at 2f
        </T>
      </Fade>

      {/* beat 3 — pendulum and spring */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={230} size={14} fill={INK} anchor="start" weight={700}>
          Pendulum T=2π√(L/g) ; spring T=2π√(m/k) ; series/parallel keff
        </T>
      </Fade>

      {/* beat 4 — damping */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={285} size={14} fill={INK} anchor="start" weight={700}>
          Damped: A∝e^(-bt/2m) , E∝e^(-bt/m) ; Q=mω₀/b , N≈Q/2π
        </T>
      </Fade>

      {/* beat 5 — resonance */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={340} size={14} fill={INK} anchor="start" weight={700}>
          Resonance at ω≈ω₀ ; Ares≈F₀/(bω₀)
        </T>
      </Fade>

      {/* beat 6 — phasor addition */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={395} size={14} fill={INK} anchor="start" weight={700}>
          Phasor add: A=√(A₁²+A₂²+2A₁A₂cosδ)
        </T>
      </Fade>

      {/* beat 7 — standard systems */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={450} size={14} fill={INK} anchor="start" weight={700}>
          Standard systems: T=2π√(L/2g) , 2π√(h/g) , 2π√(R/g)
        </T>
      </Fade>
    </Scene>
  );
}
