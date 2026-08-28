/**
 * Ch06 · Section 45 — "Chaining: ring to disc, and a parallel-axis check"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,13.46,29.25,43.5,61.07,75.5,93.33] — b0,b7 fast in EN;
 * hi [0,1,2,3,4,5,16.01,33.07] — b1..b4 fast in HI → those kept ≤0.9 s;
 * b5/b6 have room in both languages so use gentler pacing):
 *  0 title
 *  1 LEFT: disc-as-nested-rings figure — band at r, thickness dr
 *  2 LEFT: I_ring = ∫R²dm = R²∫dm = MR² (R pulls straight out)
 *  3 LEFT: ring mass dm = σ(2πr dr)
 *  4 LEFT: integral → green box I_disc = ½MR²
 *  5 RIGHT: verify I_end via parallel axis, d = L/2 → I_end = I_cm + M(L/2)²
 *  6 RIGHT: = ML²/12 + ML²/4 → green box I_end = ML²/3 ✓
 *  7 full width: chain point mass→ring→disc→sphere + parallel-axis, underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  divider x540 y90..510 (beat1)
 *  b1 | disc c(270,175) r85 fill CREAM · band circle r64 sw8 amber ·
 *       radial dash (270,175)→(325,143) · "r" st(298,165) · "dr" st(332,138) ·
 *       caption script12 cx270 bl280
 *  b2 | sans14 st x60 bl315 · sub script11 st x60 bl338
 *  b3 | sans13 st x60 bl372
 *  b4 | sans12 st x60 bl400 / bl422 · green box x60..460 y438..478 cx260 bl463 ·
 *       caption script11 cx260 bl498
 *  b5 | script13 st x560 bl150 · sans15 st x560 bl185
 *  b6 | sans15 st x560 bl220 · green box x560..1000 y245..300 cx780 bl280 ·
 *       caption script12 cx780 bl320
 *  b7 | script14 cx540 bl552 · script12 cx540 bl578 · underline y592 x300..780
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
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

export default function Ch06Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one derivation feeds the next */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "chaining: ring to disc, and a parallel-axis check",
            "chaining: ring se disc, aur parallel-axis check"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Path d="M 540 90 V 510" fill="none" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 6" />
      </Fade>

      {/* beat 1 — LEFT: a disc is nested rings */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 185 175 a 85 85 0 1 0 170 0 a 85 85 0 1 0 -170 0"
        stroke={INK}
        sw={2.2}
        fill={CREAM}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 206 175 a 64 64 0 1 0 128 0 a 64 64 0 1 0 -128 0"
        stroke={AMBER}
        sw={8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Path
          d="M 270 175 L 325 143"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <T x={298} y={165} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          r
        </T>
        <T x={332} y={138} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          dr
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={280} size={12} fill={MUTED} script>
          {t("a disc = nested rings", "disc = ek doosre ke andar rings")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: the ring is the easy one */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={315} size={14} fill={INK} anchor="start" weight={700}>
          I
          <Sub>ring</Sub>
          <Up> = ∫R²dm = R²∫dm = MR²</Up>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={338} size={11} fill={MUTED} script anchor="start">
          {t(
            "every point at R — R pulls straight out, no calculus",
            "har point R par — R seedha bahar aata hai, calculus nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — LEFT: the ring element's mass */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={372} size={13} fill={INK} anchor="start" weight={700}>
          dm = σ (2πr dr)
        </T>
      </Fade>

      {/* beat 4 — LEFT: integrate to ½MR² */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={60} y={400} size={12} fill={INK} anchor="start" weight={700}>
          I
          <Sub>disc</Sub>
          <Up> = ∫₀</Up>
          <TSpan dy={-6} fontSize={9}>
            R
          </TSpan>
          <TSpan dy={6}> r²(σ2πr dr)</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={422} size={12} fill={INK} anchor="start" weight={700}>
          = 2πσ (R⁴/4)
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 60 438 h 400 q 12 0 12 12 v 16 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={260} y={463} size={17} fill={INK} weight={700}>
          I
          <Sub>disc</Sub>
          <Up> = ½MR²</Up>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={260} y={498} size={11} fill={GREEN_DARK} script>
          {t(
            "built directly from the ring result",
            "seedha ring result se banaya"
          )}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: set up the parallel-axis check */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={150} size={13} fill={INK} script anchor="start">
          {t(
            "verify I_end via parallel axis — d = L/2",
            "I_end ko parallel axis se verify karo — d = L/2"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={560} y={185} size={15} fill={INK} anchor="start" weight={700}>
          I
          <Sub>end</Sub>
          <Up> = I</Up>
          <Sub>cm</Sub>
          <Up> + M(L/2)²</Up>
        </T>
      </Fade>

      {/* beat 6 — RIGHT: it matches the table */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={220} size={15} fill={INK} anchor="start" weight={700}>
          = ML²/12 + ML²/4
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.5)}
        d="M 572 245 h 416 q 12 0 12 12 v 31 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={780} y={280} size={18} fill={INK} weight={700}>
          I
          <Sub>end</Sub>
          <Up> = ML²/3</Up>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={780} y={320} size={12} fill={GREEN_DARK} script>
          {t("✓ matches the table value", "✓ table value se milta hai")}
        </T>
      </Fade>

      {/* beat 7 — the master technique */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={552} size={14} fill={GREEN_DARK} script>
          {t(
            "CHAIN: point mass → ring → disc → sphere",
            "CHAIN: point mass → ring → disc → sphere"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={578} size={12} fill={MUTED} script>
          {t(
            "+ parallel-axis to shift anywhere — the master technique of this subtopic",
            "+ parallel-axis kahin bhi shift karne ke liye — is subtopic ki master technique"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
