/**
 * Ch03 · Section 41 — "Free fall with a sideways drift"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.7, 26.8, 39.7, 52.3, 63.7, 75.0, 86.1]):
 *  0 heading
 *  1 the arch — two motions
 *  2 gravity arrows: straight down only
 *  3 horizontal: uniform drift
 *  4 vertical: exact free fall
 *  5 bullet demo: fire one, drop one
 *  6 they land TOGETHER
 *  7 verdict: free fall + sideways drift
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | ground M80 290 h400 · arc M100 290 Q280 130 460 290 · lbl cx280 bl 322 s12
 *  b2 | g-arrows (180,230→270)(280,170→210)(380,230→270) · line st x540 bl 130 s13
 *  b3 | st x540 bl 170 s13
 *  b4 | st x540 bl 210 s13 · st x540 bl 234 s11
 *  b5 | gun dot (140,410) · fired curve M140 410 C250 415, 360 470, 460 540 ·
 *       dropped dash M150 410 V540 · ground M80 545 h420 · lbls st (200,398) /
 *       end (142,480) s11
 *  b6 | chip x560 y430 w300 h38 · caption st x560 bl 492 s11
 *  b7 | bar M546 520 v56 · lines st x560 bl 538 / 562 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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

export default function Ch03Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "Projectile motion — free fall with a sideways drift",
            "Projectile motion — free fall, saath mein sideways drift"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the arch */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 80 290 h 400" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 100 290 Q 280 130 460 290" stroke={INK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={280} y={322} size={12} fill={INK_LIGHT} script>
          {t(
            "one graceful arch — secretly TWO simple motions",
            "ek khoobsurat arch — chupke se DO seedhi motions"
          )}
        </T>
      </Fade>

      {/* beat 2 — gravity, straight down */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(180, 230, 180, 270)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(280, 170, 280, 210)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(380, 230, 380, 270)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={540} y={130} size={13} fill={RED} script anchor="start">
          {t(
            "the only force: gravity — straight down, ZERO sideways",
            "sirf ek force: gravity — seedha neeche, sideways ZERO"
          )}
        </T>
      </Fade>

      {/* beat 3 — the horizontal channel */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={170} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "HORIZONTAL: no force → vx never changes (uniform drift)",
            "HORIZONTAL: koi force nahi → vx kabhi nahi badalta (uniform drift)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the vertical channel */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={210} size={13} fill={GREEN} script anchor="start">
          {t(
            "VERTICAL: gravity acts fully → exact free fall",
            "VERTICAL: gravity poori lagti hai → bilkul free fall"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={540} y={234} size={11} fill={MUTED} script anchor="start">
          {t(
            "rises, slows, pauses an instant, returns — all governed by g",
            "uthta hai, dheema hota hai, pal bhar rukta hai, lautta hai — sab g ke hawale"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two-bullet demo */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={140} cy={410} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 140 410 C 250 415, 360 470, 460 540" stroke={INK} sw={2.6} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={200} y={398} size={11} fill={INK} script anchor="start">
          {t("fired horizontally →", "horizontal fire kiya →")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d="M 150 410 V 540" stroke={AMBER_DARK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={138} y={480} size={11} fill={AMBER_DARK} script anchor="end">
          {t("simply dropped", "bas chhoda hua")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.4)} d="M 80 545 h 420" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <Circle cx={460} cy={540} r={4} fill={INK} />
        <Circle cx={150} cy={540} r={4} fill={AMBER_DARK} />
      </Fade>

      {/* beat 6 — together */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={560} y={430} w={300} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("they land TOGETHER", "dono SAATH girte hain")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={560} y={492} size={11} fill={GREEN} script anchor="start">
          {t(
            "the huge sideways speed delays the fall by exactly nothing",
            "bhaari sideways speed girne ko bilkul bhi der nahi karati"
          )}
        </T>
      </Fade>

      {/* beat 7 — internalise it */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 546 520 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={560} y={538} size={12} fill={GREEN} script anchor="start">
          {t(
            "horizontal and vertical simply do not talk to each other",
            "horizontal aur vertical aapas mein baat hi nahi karte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={560} y={562} size={12} fill={INK} script anchor="start">
          {t(
            "projectile motion = free fall + a sideways drift. that's all it is",
            "projectile motion = free fall + sideways drift. bas itna hi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
