/**
 * Ch03 · Section 32 — "Board derivation: reading off components proves independence"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 21.3, 36.4, 48.0, 61.5, 71.1, 81.1]):
 *  0 heading
 *  1 diagram: curve + x/y progress projections
 *  2 read off the î and ĵ parts
 *  3 î-part: the x-set
 *  4 ĵ-part: the y-set
 *  5 x mentions only x, y only y
 *  6 that IS independence
 *  7 shared t only — the recipe
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | x-axis (100,440)→(480,440) · y-axis (100,440)→(100,180) ·
 *       curve M100 440 C200 260, 330 210, 460 230 · dot (300,270) ·
 *       dashes V440 / H100 · "x progress" cx200 bl 464 s11 · "y progress" end (92,340) s11
 *  b2 | line st x540 bl 120 s12 · underline M540 130 h420
 *  b3 | header st x560 bl 152 s11 · lines st x560 bl 178 / 206 s13
 *  b4 | header st x560 bl 246 s11 · lines st x560 bl 272 / 300 s13
 *  b5 | line st x540 bl 342 s12
 *  b6 | bar M526 362 v48 · lines st x540 bl 380 / 404 s12
 *  b7 | lines st x84 bl 504 / 528 s12 · underline M84 538 h430
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch03Sec32({ currentTime, reveals, language }: SceneProps) {
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
            "Why this PROVES the independence principle",
            "Yeh independence principle ko PROVE kyun karta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — one curve, two progresses */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(100, 440, 480, 440)} stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(100, 440, 100, 180)} stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M 100 440 C 200 260, 330 210, 460 230"
        stroke={INK}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Circle cx={300} cy={270} r={5} fill={AMBER} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 300 270 V 440 M 300 270 H 100" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={200} y={464} size={11} fill={AMBER_DARK} script>
          {t("x progress", "x ki pragati")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={92} y={340} size={11} fill={GREEN} script anchor="end">
          {t("y progress", "y ki pragati")}
        </T>
      </Fade>

      {/* beat 2 — read the parts */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={120} size={12} fill={INK} script anchor="start">
          {t(
            "a vector equation is TWO scalar equations — read the î and ĵ parts",
            "vector equation asal mein DO scalar equations hai — î aur ĵ parts padho"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 540 130 h 420" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — the x-set */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={152} size={11} fill={AMBER_DARK} script anchor="start">
          {t("î-part — pure x, start to finish", "î-part — shuddh x, shuru se aakhir")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={560} y={178} size={13} fill={INK} weight={700} anchor="start">
          vx = v₀x + ax t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={560} y={206} size={13} fill={INK} weight={700} anchor="start">
          x = x₀ + v₀x t + ½ ax t²
        </T>
      </Fade>

      {/* beat 4 — the y-set */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={246} size={11} fill={GREEN} script anchor="start">
          {t("ĵ-part — pure y throughout", "ĵ-part — poora shuddh y")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={272} size={13} fill={INK} weight={700} anchor="start">
          vy = v₀y + ay t
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={560} y={300} size={13} fill={INK} weight={700} anchor="start">
          y = y₀ + v₀y t + ½ ay t²
        </T>
      </Fade>

      {/* beat 5 — look inside each set */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={342} size={12} fill={INK} script anchor="start">
          {t(
            "x-set mentions ONLY x-quantities · y-set mentions ONLY y-quantities",
            "x-set mein SIRF x-cheezein · y-set mein SIRF y-cheezein"
          )}
        </T>
      </Fade>

      {/* beat 6 — that IS independence */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 526 362 v 48" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={380} size={12} fill={GREEN} script anchor="start">
          {t(
            "neither set refers to the other, at all",
            "koi bhi set doosre ka zikr tak nahi karta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={540} y={404} size={12} fill={GREEN} script anchor="start">
          {t(
            "that IS independence — written out in symbols",
            "yahi independence HAI — symbols mein likhi hui"
          )}
        </T>
      </Fade>

      {/* beat 7 — the recipe */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={504} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the only coupling: the shared t, sitting quietly in both sets",
            "ek hi jod: shared t, dono sets mein chupchaap baitha hua"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={84} y={528} size={12} fill={GREEN} script anchor="start">
          {t(
            "solve each axis as its own 1-D problem → recombine — the recipe never fails",
            "har axis apna alag 1-D sawaal → phir jodo — yeh recipe kabhi fail nahi hoti"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 7)} d="M 84 538 h 430" stroke={GREEN} sw={1.8} dur={0.5} />
    </Scene>
  );
}
