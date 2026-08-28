/**
 * Ch06 · Section 61 — "The energy of rolling, and the role of friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,8.7,15.79,22.27,33.02,51.11,62.72,63.72] — b6,b7 fast in EN;
 * hi [0,1,2,3,14.78,31.59,41.31,57.02] — b0,b1,b2 fast in HI →
 * b0,b1,b2,b6,b7 kept ≤0.9 s; b3,b4,b5 have room in both):
 *  0 title + subline
 *  1 figure: moving icon + spinning icon, side by side
 *  2 rolling carries two kinds of KE at once
 *  3 K_trans = ½Mv², K_rot = ½Iω²
 *  4 combine: K = ½Mv²(1 + K²/R²) — depends only on shape
 *  5 consequence: rolling > sliding at the same speed
 *  6 friction supplies the torque, does no net work
 *  7 punchline: no friction, no rolling
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circleA c(200,170) r40 · arrow (200,170)→(260,170) · "½Mv²" cx200 bl230 ·
 *       "+" cx300 bl180 size24 · circleB c(400,170) r40 · rot arc r55 ·
 *       "½Iω²" cx400 bl230
 *  b2 | script13 cx540 bl270
 *  b3 | sans15 st x80 bl310 / bl340
 *  b4 | sans14 st x80 bl375 · script11 st x80 bl400
 *  b5 | script13 cx540 bl430
 *  b6 | script13 cx540 bl460
 *  b7 | script13 cx540 bl springs 495 · underline y springs 513 x springs 300..780
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — energy in two parts */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "the energy of rolling, and the role of friction",
            "rolling ki energy, aur friction ka role"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "understand the split — unlock every rolling problem",
            "split samjho — har rolling problem khul jaata"
          )}
        </T>
      </Fade>

      {/* beat 1 — moving + spinning, side by side */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 160 170 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(200, 170, 260, 170)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={200} y={230} size={14} fill={AMBER_DARK} weight={700}>
          ½Mv²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={300} y={180} size={22} fill={INK} weight={700}>
          +
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 360 170 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.75)}
        d="M 400 108 A 62 62 0 0 1 460 165 M 449 155 L 460 165 L 447 168"
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={400} y={230} size={14} fill={GREEN_DARK} weight={700}>
          ½Iω²
        </T>
      </Fade>

      {/* beat 2 — two kinds of KE at once */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={270} size={13} fill={INK} script>
          {t(
            "a rolling body carries BOTH kinds of KE at once",
            "rolling body EK saath DONO tarah ki KE rakhti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two pieces, formally */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={310} size={15} fill={INK} anchor="start" weight={700}>
          {t("translational: ", "translational: ")}K
          <TSpan dy={5} fontSize={11}>
            trans
          </TSpan>
          <TSpan dy={-5}> = ½Mv²</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={80} y={340} size={15} fill={INK} anchor="start" weight={700}>
          {t("rotational: ", "rotational: ")}K
          <TSpan dy={5} fontSize={11}>
            rot
          </TSpan>
          <TSpan dy={-5}> = ½Iω²</TSpan>
        </T>
      </Fade>

      {/* beat 4 — combine, using v = ωR */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={375} size={14} fill={INK} anchor="start" weight={700}>
          {t("total: ", "total: ")}½Mv²(1 + K²/R²)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={80} y={400} size={11} fill={MUTED} script anchor="start">
          {t(
            "the bracket depends ONLY on the shape",
            "bracket SIRF shape par nirbhar karta"
          )}
        </T>
      </Fade>

      {/* beat 5 — rolling beats sliding */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={430} size={13} fill={GREEN_DARK} script>
          {t(
            "rolling always has MORE KE than sliding at the same speed",
            "rolling mein hamesha ZYADA KE hai sliding se, same speed par"
          )}
        </T>
      </Fade>

      {/* beat 6 — friction's subtle role (fast) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={460} size={13} fill={INK} script>
          {t(
            "static friction supplies the torque — but does NO net work",
            "static friction torque deti hai — par NO net work"
          )}
        </T>
      </Fade>

      {/* beat 7 — the punchline (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={495} size={14} fill={GREEN_DARK} script>
          {t(
            "no friction, no rolling — it would only slide",
            "no friction, no rolling — bas slide karti"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 513 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
