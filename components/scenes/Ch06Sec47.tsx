/**
 * Ch06 · Section 47 — "Worked example: radius of gyration, ring versus disc [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,14.76,23.47,36.18,42.84,53.42,64.43,70.49]; hi [0,1,2,3,4,5,
 * 14.22,19.76] — b0..b4 fast in HI, b7 fast in EN → all kept ≤0.9 s except
 * b5/b6 which have room in both):
 *  0 title + subline
 *  1 mini figures: ring (K=R) and disc (K=R/√2), side by side
 *  2 red trap: skip mass/integrals — K formula makes M cancel
 *  3 definition K = √(I/M)
 *  4 ring: I=MR² ⇒ K_ring = R
 *  5 disc: I=½MR² ⇒ green box K_disc = R/√2 ≈ 0.707R
 *  6 verdict: ring has the larger K
 *  7 sanity: ring keeps mass at the rim
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ring c(230,175) r56/r44 · disc c(470,175) r56 hatched ·
 *       "K = R" cx230 bl262 green · "K = R/√2 ≈ 0.707R" cx470 bl262 amber
 *  b2 | red bar x66 y295..340 · L1 st x84 bl315 · L2 st x84 bl335
 *  b3 | sans16 st x80 bl380
 *  b4 | sans15 st x80 bl415
 *  b5 | sans15 st x80 bl450 · green box x560..1000 y435..490 cx780 bl470
 *  b6 | sans14 st x80 bl520
 *  b7 | script13 cx540 bl560
 */

import React from "react";
import { TSpan } from 'react-native-svg';
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

const HATCH = [-40, -25, -10, 5, 20, 35]
  .map((d) => {
    const h = Math.sqrt(Math.max(0, 56 * 56 - d * d));
    return `M ${470 + d} ${175 - h} V ${175 + h}`;
  })
  .join(" ");

export default function Ch06Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "radius of gyration — ring vs disc [NEET speed trap]",
            "radius of gyration — ring vs disc [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "same mass, same R — find K for each, and which is larger",
            "same mass, same R — dono ka K nikaalo, kaun bada?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the preview */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 174 175 a 56 56 0 1 0 112 0 a 56 56 0 1 0 -112 0 M 186 175 a 44 44 0 1 0 88 0 a 44 44 0 1 0 -88 0"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 414 175 a 56 56 0 1 0 112 0 a 56 56 0 1 0 -112 0"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.65)} d={HATCH} stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={230} y={262} size={13} fill={GREEN_DARK} weight={700}>
          K = R
        </T>
        <T x={470} y={262} size={13} fill={AMBER_DARK} weight={700}>
          K = R/√2 ≈ 0.707R
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 66 295 v 45" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={84} y={315} size={13} fill={RED} script anchor="start">
          {t(
            "TRAP: don't hunt for mass or integrals",
            "TRAP: mass ya integrals mat dhoondo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={335} size={13} fill={RED} script anchor="start">
          {t(
            "K's formula makes the mass cancel",
            "K ke formula mein mass cancel ho jaata"
          )}
        </T>
      </Fade>

      {/* beat 3 — the definition */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={380} size={16} fill={INK} anchor="start" weight={700}>
          K = √(I/M)
        </T>
      </Fade>

      {/* beat 4 — the ring */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={415} size={15} fill={INK} anchor="start" weight={700}>
          {t("ring: ", "ring: ")}I = MR²  ⇒  K
          <Sub>ring</Sub>
          <Up> = √(MR²/M) = R</Up>
        </T>
      </Fade>

      {/* beat 5 — the disc */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={450} size={15} fill={INK} anchor="start" weight={700}>
          {t("disc: ", "disc: ")}I = ½MR²  ⇒  K
          <Sub>disc</Sub>
          <Up> = R/√2</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.5)}
        d="M 572 435 h 416 q 12 0 12 12 v 31 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={780} y={470} size={18} fill={INK} weight={700}>
          K
          <Sub>disc</Sub>
          <Up> ≈ 0.707R</Up>
        </T>
      </Fade>

      {/* beat 6 — the verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={80} y={520} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "the ring has the LARGER K — mass never mattered",
            "ring ka K BADA hai — mass ka koi matlab hi nahi tha"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={560} size={13} fill={GREEN_DARK} script>
          {t(
            "ring keeps mass at the rim — full R; disc spreads inward — below R ✓",
            "ring rim par mass rakhta — poori R; disc andar failta — R se kam ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
