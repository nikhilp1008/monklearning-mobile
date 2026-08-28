/**
 * Ch04 · Section 53 — "Circular Motion and Banking: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.4, 32.3, 48.4, 59.2, 79.6, 104.5, 122.5, 123.5]):
 *  0 title · 1 band1 the root formulas · 2 band2 flat road ·
 *  3 band3 banking frictionless · 4 band3 v_max/v_min line ·
 *  5 band4 cyclist/pendulum · 6 band4 well of death line ·
 *  7 band5 centrifugal · 8 red margin: mass-cancel alarm
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y84..148  hdr bl 104 · line cx540 bl 132
 *  band2 y158..222 hdr bl 178 · line cx540 bl 206
 *  band3 y232..320 hdr bl 252 · lines cx540 bl 278 / 306
 *  band4 y330..418 hdr bl 350 · lines cx540 bl 376 / 404
 *  band5 y428..492 hdr bl 448 · line cx540 bl 474
 *  b8 | bar x66 y510..580 · lines st x84 bl 530 / 556
 */

import React from "react";
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={84} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "every circular-motion relation, on one board",
            "har circular-motion relation, ek board par"
          )}
        </T>
      </Fade>

      {/* beat 1 — the root formulas */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(84, 64)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(1, 104, t("1 · everything grows from here", "1 · sab yahin se ugta hai"))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={132} size={15} fill={INK} weight={700}>
          a_c = v²⁄r = ω²r&nbsp;&nbsp;·&nbsp;&nbsp;F_c = mv²⁄r = mω²r
        </T>
      </Fade>

      {/* beat 2 — flat road */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(158, 64)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(2, 178, t("2 · flat road — friction only", "2 · flat road — sirf friction"))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={206} size={15} fill={INK} weight={700}>
          {t(
            "v_max = √(μs·rg) — mass-free",
            "v_max = √(μs·rg) — mass-free"
          )}
        </T>
      </Fade>

      {/* beat 3 — banking, frictionless */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(232, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 252, t("3 · banking", "3 · banking"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={278} size={15} fill={INK} weight={700}>
          {t(
            "frictionless: tanθ = v²⁄rg — the most examined formula here",
            "friction ke bina: tanθ = v²⁄rg — yahan ka sabse zyada poocha formula"
          )}
        </T>
      </Fade>

      {/* beat 4 — v_max/v_min */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={306} size={14} fill={INK} weight={600}>
          {t(
            "with friction: v_max = √[rg(tanθ+μ)⁄(1−μtanθ)] · v_min flips both signs",
            "friction ke saath: v_max = √[rg(tanθ+μ)⁄(1−μtanθ)] · v_min dono sign palte"
          )}
        </T>
      </Fade>

      {/* beat 5 — cyclist / conical pendulum */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(330, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 350, t("4 · same geometry, different picture", "4 · geometry wahi, tasveer alag"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={376} size={15} fill={INK} weight={700}>
          {t(
            "leaning cyclist · conical pendulum: tanθ = v²⁄rg",
            "jhukta cyclist · conical pendulum: tanθ = v²⁄rg"
          )}
        </T>
      </Fade>

      {/* beat 6 — well of death */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={404} size={14} fill={GREEN} weight={700}>
          {t(
            "well of death: v_min = √(gr⁄μ) — friction acts VERTICAL here",
            "maut ka kuaan: v_min = √(gr⁄μ) — yahan friction VERTICAL lagti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — centrifugal */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(428, 64)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(7, 448, t("5 · centrifugal (rotating frame only)", "5 · centrifugal (sirf rotating frame)"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={474} size={15} fill={INK} weight={700}>
          {t(
            "F_cf = mv²⁄r, outward — never in a ground-frame equation",
            "F_cf = mv²⁄r, bahar — ground-frame equation mein kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — the mass-cancel alarm */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 510 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={530} size={14} fill={RED} script anchor="start">
          {t(
            "mass cancels in nearly EVERY result on this board",
            "is poore board mein LAGBHAG har result se mass kat'ta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={556} size={14} fill={GREEN} script anchor="start">
          {t(
            "final answer still has an m? stop — you missed a cancellation",
            "final answer mein abhi bhi m hai? ruko — cancellation chhoot gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
