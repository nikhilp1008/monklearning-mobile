/**
 * Ch06 · Section 24 — "The torque and angular-momentum toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.19, 21.25, 33.19, 49.92, 50.92, 51.92, 52.92] — b4..b6 are 1 s
 * in EN → staggers ≤0.9 s):
 *  0 title
 *  1 moment-arm figure right: O, r horizontal to P, F at 120°, θ arc,
 *    dashed r-extension, green perp r⊥ with right-angle mark, caption
 *  2 τ = r × F line
 *  3 green hero box τ_net = Iα = dL/dt + caption
 *  4 L definitions line
 *  5 amber conservation card + skater caption
 *  6 K_rot and power line
 *  7 red N·m-never-joules note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | O(720,340) · r → P(950,340) · "r" cx835 bl 365 · ext dash →(1020,340) ·
 *       F (950,340)→(880,218) · "F" st(866,210) · θ arc r30 · "θ"(975,312) ·
 *       perp (720,340)→(893,241) green dash · "r⊥ = moment arm" cx806 bl 320 ·
 *       caption script12 cx840 bl 420
 *  b2 | sans17 st x70 bl 150
 *  b3 | green box x70..560 y185..255 · cx315 bl 228 · caption script12 cx315 bl 280
 *  b4 | sans16 st x70 bl 330
 *  b5 | amber card x70..560 y360..420 · cx315 bl 396 · caption script11 cx315 bl 445
 *  b6 | sans16 st x70 bl 490
 *  b7 | red bar x66 y520..580 · L1 st x84 bl 545 · L2 st x84 bl 572
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t(
            "the torque & angular-momentum toolkit",
            "torque & angular momentum ka toolkit"
          )}
        </T>
      </Fade>

      {/* beat 1 — the moment-arm picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 715 340 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={712} y={362} size={11} fill={MUTED} script anchor="end">
          {t("axis O", "axis O")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(720, 340, 950, 340)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={835} y={365} size={14} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Path
          d="M 950 340 H 1020"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={arrowD(950, 340, 880, 218)} stroke={AMBER} sw={3} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <T x={866} y={210} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          F
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 980 340 A 30 30 0 0 0 935 314"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={985} y={315} size={13} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        <Path
          d="M 720 340 L 893 241 M 886 233 L 896 246 M 879 237 L 889 250"
          fill="none"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.3)}>
        <T x={806} y={320} size={12} fill={GREEN_DARK} script>
          {t("r⊥ = moment arm", "r⊥ = moment arm")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={840} y={420} size={12} fill={AMBER_DARK} script>
          {t("torque = r F sinθ = r⊥ × F", "torque = r F sinθ = r⊥ × F")}
        </T>
      </Fade>

      {/* beat 2 — the definition */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={70} y={150} size={17} fill={INK} anchor="start" weight={700}>
          τ = r × F ,   |τ| = rF sinθ = r
          <Sub>⊥</Sub>
          <Up>F</Up>
        </T>
      </Fade>

      {/* beat 3 — the master equation */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 82 185 h 466 q 12 0 12 12 v 46 q 0 12 -12 12 h -466 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={315} y={228} size={20} fill={INK} weight={700}>
          τ
          <Sub>net</Sub>
          <Up> = I α = dL/dt</Up>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={315} y={280} size={12} fill={GREEN_DARK} script>
          {t(
            "Newton II — in rotational language",
            "Newton II — rotational bhasha mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — what L is (1 s in EN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={70} y={330} size={16} fill={INK} anchor="start" weight={700}>
          L = r × p = r × mv ,    L = Iω
        </T>
      </Fade>

      {/* beat 5 — conservation (1 s in EN) */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M 82 360 h 466 q 12 0 12 12 v 36 q 0 12 -12 12 h -466 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={315} y={396} size={17} fill={INK} weight={700}>
          τ
          <Sub>ext</Sub>
          <Up> = 0  ⇒  L constant  ⇒  I₁ω₁ = I₂ω₂</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={315} y={445} size={11} fill={MUTED} script>
          {t(
            "skater · planets · coupling wheels — one line",
            "skater · planets · coupling wheels — ek hi line"
          )}
        </T>
      </Fade>

      {/* beat 6 — energy and power (1 s in EN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={70} y={490} size={16} fill={INK} anchor="start" weight={700}>
          K
          <Sub>rot</Sub>
          <Up> = ½ I ω² = L²/2I ,    P = τ · ω</Up>
        </T>
      </Fade>

      {/* beat 7 — units warning */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 520 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={545} size={13} fill={RED} script anchor="start">
          {t(
            "torque = N·m and a VECTOR — never write it in joules",
            "torque = N·m aur ek VECTOR — kabhi joules mein mat likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={572} size={13} fill={RED} script anchor="start">
          {t(
            "same dimensions as energy — completely different animal",
            "energy jaisi dimensions — par bilkul alag cheez"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
