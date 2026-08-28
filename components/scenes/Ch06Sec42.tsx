/**
 * Ch06 · Section 42 — "The fine print, and radius of gyration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 19.96, 30.88, 39.84] — b0..b3 are 1 s in EN;
 * hi b4..b7 are 1 s → ALL staggers ≤0.9 s):
 *  0 title (instant)
 *  1 K figure: real blob spinning about axis → equivalent point mass M at K
 *  2 fine print 1: always about a specific axis
 *  3 fine print 2: r = perpendicular distance from the AXIS
 *  4 fine print 3: never depends on ω
 *  5 K definition line
 *  6 amber card I = MK² ⇒ K = √(I/M)
 *  7 green closing line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | axis (200,140)→(200,400) dashed · blob c(300,270) rx70 ry55 · dots ·
 *       "real body, I" cx300 bl 350 · arrow (390,270)→(450,270) · axis2 x560 ·
 *       point M (700,270) r12 · K dash (560,300)→(700,300) + ticks · "K" cx630 bl 325 ·
 *       "M" cx700 bl 245 · caption script11 cx660 bl 360
 *  b2 | script13 st x80 bl 425 · sub script11 st x100 bl 449
 *  b3 | script13 st x80 bl 480 · sub script11 st x100 bl 504
 *  b4 | script13 st x80 bl 535
 *  b5 | script12 st x560 bl 425
 *  b6 | amber card x560..1000 y445..505 · cx780 bl 482
 *  b7 | script12 st x560 bl 545 · underline y560 x560..1000
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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

const BLOB_DOTS = [
  [265, 245],
  [300, 232],
  [335, 252],
  [270, 285],
  [310, 275],
  [345, 288],
  [285, 305],
  [325, 300],
]
  .map(([x, y]) => `M ${x - 3} ${y} a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0`)
  .join(" ");

export default function Ch06Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — fine print + one new idea */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t(
            "the fine print, and radius of gyration",
            "fine print, aur radius of gyration"
          )}
        </T>
      </Fade>

      {/* beat 1 — sweep the mass to one distance K */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Path
          d="M 200 140 V 400"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="8 6"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 230 270 a 70 55 0 1 0 140 0 a 70 55 0 1 0 -140 0"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={BLOB_DOTS} stroke={INK} fill={INK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={300} y={350} size={12} fill={MUTED} script>
          {t("real body — moment of inertia I", "asli body — moment of inertia I")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(390, 270, 450, 270)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Path
          d="M 560 140 V 400"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="8 6"
        />
        <Circle cx={700} cy={270} r={12} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={700} y={245} size={14} fill={INK} weight={700}>
          M
        </T>
        <Path
          d="M 560 300 H 700 M 560 294 v 12 M 700 294 v 12"
          fill="none"
          stroke={GREEN}
          strokeWidth={1.8}
        />
        <T x={630} y={325} size={14} fill={GREEN_DARK} weight={700}>
          K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={660} y={360} size={11} fill={GREEN_DARK} script>
          {t("all the mass at ONE distance — same I", "saari mass EK distance par — wahi I")}
        </T>
      </Fade>

      {/* beat 2 — fine print 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={80} y={425} size={13} fill={RED} script anchor="start">
          {t(
            "1 · always ABOUT a specific axis — never one single value",
            "1 · hamesha kisi ek axis KE BAARE MEIN — koi ek value nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={100} y={449} size={11} fill={MUTED} script anchor="start">
          {t("ask 'about which axis?' first", "pehle poocho — 'kis axis ke baare mein?'")}
        </T>
      </Fade>

      {/* beat 3 — fine print 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={80} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "2 · r = ⊥ distance from the AXIS",
            "2 · r = AXIS se ⊥ distance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={100} y={504} size={11} fill={MUTED} script anchor="start">
          {t(
            "not from a point, not from the CoM — marks are lost here",
            "kisi point se nahi, CoM se nahi — yahin marks jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — fine print 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={80} y={535} size={13} fill={RED} script anchor="start">
          {t(
            "3 · never depends on ω — spinning fast, slow or still, I is the same",
            "3 · ω par kabhi nahi — tez, dheema ya sthir, I wahi rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — what K is */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={425} size={12} fill={INK} script anchor="start">
          {t(
            "K = the ONE distance that reproduces the real I",
            "K = wo EK distance jo asli I dobara deti hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the definition */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 572 445 h 416 q 12 0 12 12 v 36 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={780} y={482} size={19} fill={INK} weight={700}>
          I = M K²  ⇒  K = √(I/M)
        </T>
      </Fade>

      {/* beat 7 — why it's handy */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={545} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "one number for how far the mass effectively sits — collapses problems to a line",
            "ek number: mass asar mein kitni door hai — problems ek line mein simat jaati"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 560 560 h 440" stroke={GREEN} sw={2.2} dur={0.5} />
    </Scene>
  );
}
