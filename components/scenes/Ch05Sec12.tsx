/**
 * Ch05 · Section 12 — "Work as the area under the F-x graph"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.6, 35.2, 52.1, 53.1, 72.7, 96.2, 121.0, 138.9] · dur 160.3 —
 *        b3 lasts ~1s in en → en-tiny delays;
 *        hi [0, 17.9, 35.6, 49.4, 65.0, 82.5, 106.2, 131.1, 147.9] · dur 172.3):
 *  0 title + subtitle
 *  1 setup lines: graph not formula, students panic
 *  2 axes + piecewise curve (rise, flat, fall, dip below)
 *  3 green hatch above axis + "shaded region answers it"
 *  4 chip W = ∫F dx = AREA
 *  5 triangle + rectangle breakdown
 *  6 red hatch below axis — signed total
 *  7 thin strip at x≈330 — the strip IS the work
 *  8 verdict: 30 s of school geometry
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  graph: y-axis (140,250)-(140,440) · x-axis (120,420)-(700,420)
 *   curve M140,420 L260,330 L420,330 L500,420 L560,465 L660,420
 *  b1 | right col cx880: bl130 · red bl162 / bl188
 *  b3 | green hatch verticals · script cx320 bl505
 *  b4 | chip x740..1000 y240..278 · script cx865 bl305
 *  b5 | tri (140,420)-(260,420)-(260,330) · rect x260..420 y330..420 · "△"(222,400) "▭"(340,380)
 *     | script cx870 bl350
 *  b6 | red hatch x520..630 · "below axis → NEGATIVE" cx580 bl495 · right col bl395 / bl421
 *  b7 | strip x325..341 y332..418 · right col bl460 / bl486
 *  b8 | bar x66 y525..585 · lines st x84 bl545 / bl571
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Work = Area Under the F-x Graph", "Work = F-x Graph ke Neeche ka Area")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the no-calculus procedure CBSE and JEE Main both love",
            "bina calculus waala tareeqa — CBSE aur JEE Main dono ka favourite"
          )}
        </T>
      </Fade>

      {/* beat 1 — graph, not formula */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={880} y={130} size={13} fill={INK} script>
          {t("force arrives as a GRAPH, not a formula", "force GRAPH bankar aata hai, formula nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={880} y={162} size={13} fill={RED} script>
          {t("students panic, hunt for an equation", "students ghabra ke equation dhoondhte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={880} y={188} size={13} fill={RED} script>
          {t("— you do not need one", "— zaroorat hi nahi hai")}
        </T>
      </Fade>

      {/* beat 2 — axes and the curve */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(140, 440, 140, 250)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(120, 420, 700, 420)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={126} y={245} size={14} fill={INK} anchor="end" weight={700}>
          F
        </T>
        <T x={712} y={425} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 140 420 L 260 330 L 420 330 L 500 420 L 560 465 L 660 420"
        stroke={INK}
        sw={2.8}
        dur={1.6}
      />

      {/* beat 3 — the shaded region (en: ~1s beat) */}
      <Draw
        on={beat >= 3}
        delay={dl(3, en ? 0.2 : 1.5)}
        d="M 170 420 V 398 M 200 420 V 375 M 230 420 V 353 M 270 420 V 332 M 310 420 V 332 M 350 420 V 332 M 390 420 V 332 M 450 420 V 364 M 480 420 V 398"
        stroke={GREEN}
        sw={1.4}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, en ? 0.5 : 5)}>
        <T x={320} y={505} size={13} fill={GREEN} script>
          {t(
            "the shaded region already answers it",
            "shaded region pehle se jawab de chuka hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — integral = area */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={740} y={240} w={260} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          W = ∫ F dx = AREA
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={865} y={305} size={12.5} fill={MUTED} script>
          {t(
            "calculus & geometry — same statement, different clothes",
            "calculus aur geometry — wahi baat, alag kapde"
          )}
        </T>
      </Fade>

      {/* beat 5 — school shapes */}
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 140 420 H 260 V 330 Z" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={228} y={404} size={14} fill={AMBER_DARK} weight={700}>
          △
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d="M 260 330 H 420 V 420 H 260 Z" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <T x={340} y={380} size={14} fill={AMBER_DARK} weight={700}>
          ▭
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={870} y={350} size={13} fill={AMBER_DARK} script>
          {t(
            "break into school shapes, add — no integration",
            "school waale shapes mein todo, jodo — no integration"
          )}
        </T>
      </Fade>

      {/* beat 6 — the negative region */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.5)}
        d="M 520 420 V 435 M 545 420 V 453 M 570 420 V 460 M 600 420 V 447 M 630 420 V 434"
        stroke={RED}
        sw={1.4}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={580} y={495} size={13} fill={RED} script>
          {t("below axis → NEGATIVE", "axis ke neeche → NEGATIVE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={740} y={395} size={13} fill={RED} script anchor="start">
          {t("force reversed — it opposes the motion", "force palat gaya — ab motion ka virodh")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={740} y={421} size={13} fill={RED} script anchor="start">
          {t("you need the SIGNED total, not magnitudes", "SIGNED total chahiye, magnitudes ka jod nahi")}
        </T>
      </Fade>

      {/* beat 7 — the strip IS the work */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Rect x={325} y={332} width={16} height={86} fill={AMBER} opacity={0.85} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={740} y={460} size={13} fill={AMBER_DARK} script anchor="start">
          {t("one strip: height F × width dx = dW", "ek patti: unchai F × chaudai dx = dW")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={740} y={486} size={13} fill={GREEN} script anchor="start">
          {t("the strip IS the work", "patti hi work HAI")}
        </T>
      </Fade>

      {/* beat 8 — the reflex */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 525 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={545} size={13} fill={GREEN} script anchor="start">
          {t(
            "see an F-x picture? count squares, add triangles, watch the signs",
            "F-x picture dikhi? squares gino, triangles jodo, signs par nazar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={571} size={13} fill={GREEN} script anchor="start">
          {t(
            "the variable-force nightmare collapses into 30 s of school geometry",
            "variable-force ka daraawna sapna 30 s ki school geometry ban jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
