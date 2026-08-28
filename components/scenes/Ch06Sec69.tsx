/**
 * Ch06 · Section 69 — "Chapter formula recap"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,15.69,28.23,39.41,48.89,61.17] — b0..b3 fast in EN;
 * hi [0,9.81,20.39,21.39,22.39,23.39,24.39,25.39,26.39,37.74] — b2..b7 fast in
 * HI → b0..b7 kept ≤0.9 s; b8,b9 have room in both):
 *  0 title + subline
 *  1 CoM: r_cm = Σmr/M, Ma_cm = F_ext
 *  2 cross product: A×B = ABsinθ n̂, |A×B| = ABsinθ
 *  3 torque + master law: τ = r×F, τ_net = Iα = dL/dt
 *  4 angular momentum: L = r×p = Iω, τ_ext=0 ⇒ L const
 *  5 equilibrium: ΣF=0, Στ=0, F₁d₁=F₂d₂
 *  6 MOI: I=Σmr², I=Icm+Md², Iz=Ix+Iy
 *  7 kinematics: ω=ω₀+αt, θ=ω₀t+½αt², ω²=ω₀²+2αθ
 *  8 energy + bridge: Krot=½Iω², v=ωr, a=αr
 *  9 rolling: vcm=ωR, a=gsinθ/(1+I/MR²), K=½Mv²(1+K²/R²) + closing tagline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  LEFT x60: b1 bl110 · b2 bl150 · b3 bl190 · b4 bl230 · b5 bl270
 *  RIGHT x560: b6 bl110 · b7 bl150 · b8 bl190 · b9 bl230
 *  b9 closing: script13 cx540 bl springs 320 · underline y springs 340 x springs 300..780
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={4} fontSize={9}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-4}>{children}</TSpan>
);

export default function Ch06Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the whole chapter, distilled */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("chapter formula recap", "chapter ka formula recap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={80} size={11} fill={MUTED} script>
          {t("your final revision pass", "aapka final revision pass")}
        </T>
      </Fade>

      {/* beat 1 — centre of mass */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={12} fill={INK} anchor="start" weight={700}>
          {t("CoM: ", "CoM: ")}r
          <Sub>cm</Sub>
          <Up> = Σmᵢrᵢ/M ,  Ma</Up>
          <Sub>cm</Sub>
          <Up> = F</Up>
          <Sub>ext</Sub>
        </T>
      </Fade>

      {/* beat 2 — cross product */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={150} size={12} fill={INK} anchor="start" weight={700}>
          {t("Cross: ", "Cross: ")}A×B = ABsinθ·n ,  |A×B| = ABsinθ
        </T>
      </Fade>

      {/* beat 3 — torque + master law */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={190} size={12} fill={INK} anchor="start" weight={700}>
          {t("Torque: ", "Torque: ")}τ = r×F ,  τ
          <Sub>net</Sub>
          <Up> = Iα = dL/dt</Up>
        </T>
      </Fade>

      {/* beat 4 — angular momentum */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={230} size={12} fill={INK} anchor="start" weight={700}>
          {t("L: ", "L: ")}L = r×p = Iω ,  τ
          <Sub>ext</Sub>
          <Up> = 0 ⇒ L const</Up>
        </T>
      </Fade>

      {/* beat 5 — equilibrium */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={270} size={12} fill={INK} anchor="start" weight={700}>
          {t("Equil: ", "Equil: ")}ΣF = 0 , Στ = 0 ,  F₁d₁ = F₂d₂
        </T>
      </Fade>

      {/* beat 6 — moment of inertia */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={110} size={12} fill={INK} anchor="start" weight={700}>
          {t("MOI: ", "MOI: ")}I = Σmᵢrᵢ² ,  I = I
          <Sub>cm</Sub>
          <Up> + Md² ,  I</Up>
          <Sub>z</Sub>
          <Up> = I</Up>
          <Sub>x</Sub>
          <Up> + I</Up>
          <Sub>y</Sub>
        </T>
      </Fade>

      {/* beat 7 — the three kinematic equations */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={560} y={150} size={12} fill={INK} anchor="start" weight={700}>
          {t("Kinematics: ", "Kinematics: ")}ω=ω₀+αt , θ=ω₀t+½αt² , ω²=ω₀²+2αθ
        </T>
      </Fade>

      {/* beat 8 — energy and the linear bridge */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={560} y={190} size={12} fill={INK} anchor="start" weight={700}>
          {t("Energy: ", "Energy: ")}K
          <Sub>rot</Sub>
          <Up> = ½Iω² ,  v = ωr ,  a = αr</Up>
        </T>
      </Fade>

      {/* beat 9 — rolling, and the whole chapter on one page */}
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={560} y={230} size={11} fill={INK} anchor="start" weight={700}>
          {t("Rolling: ", "Rolling: ")}v
          <Sub>cm</Sub>
          <Up> = ωR , a = gsinθ/(1+I/MR²) , K = ½Mv²(1+K²/R²)</Up>
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4)}>
        <T x={540} y={320} size={13} fill={GREEN_DARK} script>
          {t("the whole chapter — on one page", "poora chapter — ek page par")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 6.5)} d="M 300 340 h 480" stroke={GREEN_DARK} sw={2.2} dur={0.6} />
    </Scene>
  );
}
