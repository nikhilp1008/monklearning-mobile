/**
 * Ch02 · Section 4 — "Chord to tangent: why instantaneous velocity is a derivative"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.9, 31.7, 54.3, 79.1, 103.9, 124.9, 142.4]):
 *  0 title · x–t axes draw
 *  1 the starting card: v̄ = Δx/Δt
 *  2 curve · A & B dots · red dashed chord · green tangent · tags
 *  3 rise/run lines + Δt/Δx labels · "v̄ = slope of the CHORD" chip
 *  4 squeeze: orange arrow, B′/B″ dots, pivoting chords
 *  5 tangent retraced · "tangent's slope = v at A" chip
 *  6 formula card: v = lim Δx/Δt = dx/dt
 *  7 red note: kinematics is where calculus was born
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 58 · axes o(140,470) → (620,470)/(140,120) · t (635,476) · x (134,105)
 *  b2 | curve M170,450→590,228 · A(260,410) B(530,247) · A tag (242,395) · B tag (554,220) ·
 *       curve tag cx605 bl 195 · chord dashed A→B · tangent (180,446)→(420,338) ·
 *       "tangent" tag st x465 bl 316 · "chord" tag cx470 bl 350 (color-matched, no leader)
 *  b3 | run y410 x260..530 · rise x530 y247..410 · "Δt (run)" cx395 bl 438 ·
 *       "Δx (rise)" st x545 bl 330 · chip x660..940 y220..254 · line cx800 bl 282
 *  b4 | arrow (530,484)→(290,484) · label cx410 bl 512 · dots B′(470,282) B″(400,303) ·
 *       pivot chords A→B′, A→B″
 *  b5 | tangent retrace · chip x660..1000 y320..354 · line cx830 bl 382
 *  b6 | card x660..1020 y410..480 · formula cx840 bl 445 · sub cx840 bl 468
 *  b7 | bar x66 y528..588 · lines st x84 bl 550 / 580
 *  b1 | card x660..1020 y120..190 · formula cx840 bl 152 · sub cx840 bl 178
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CURVE =
  "M 170 450 C 260 415, 340 350, 430 300 C 500 262, 530 248, 590 228";

export default function Ch02Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t(
            "the bridge: average → instantaneous",
            "pul: average se instantaneous tak"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d={arrowD(140, 470, 620, 470)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d={arrowD(140, 470, 140, 120)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={635} y={476} size={16} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={134} y={105} size={16} fill={INK} weight={700}>
          x
        </T>
      </Fade>

      {/* beat 1 — where we already are */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 672 120 h 336 q 12 0 12 12 v 46 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={840} y={152} size={22} fill={INK} weight={700}>
          v̄ = Δx ⁄ Δt
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={840} y={178} size={12} fill={MUTED} script>
          {t("nothing new yet — the old definition", "kuchh naya nahi — wahi purani definition")}
        </T>
      </Fade>

      {/* beat 2 — the picture: curve, A, B, chord, tangent */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={CURVE} stroke={INK} sw={2.6} dur={1.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={605} y={195} size={12} fill={MUTED} script>
          {t("the motion", "motion ka raasta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 255 410 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 525 247 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={242} y={395} size={15} fill={INK} weight={800}>
          A
        </T>
        <T x={554} y={220} size={15} fill={INK} weight={800}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Path
          d="M 260 410 L 530 247"
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeDasharray="7 5"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={470} y={350} size={12} fill={RED} script>
          {t("chord (A → B)", "chord (A → B)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 12)}
        d="M 180 446 L 420 338"
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 13.2)}>
        <T x={465} y={316} size={12} fill={GREEN} script anchor="start">
          {t("tangent — touches only at A", "tangent — sirf A par chhoota hai")}
        </T>
      </Fade>

      {/* beat 3 — rise over run IS the chord's slope */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 260 410 H 530"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={395} y={438} size={13} fill={MUTED} script>
          {t("Δt (run)", "Δt (run)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d="M 530 410 V 247"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={545} y={380} size={13} fill={MUTED} script anchor="start">
          {t("Δx (rise)", "Δx (rise)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d="M 672 220 h 256 q 12 0 12 12 v 10 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -10 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={800} y={244} size={15} fill={AMBER_DARK} script>
          {t("v̄ = slope of the CHORD", "v̄ = CHORD ka slope")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={800} y={282} size={13} fill={AMBER_DARK} script>
          {t("not LIKE a slope — it IS a slope", "slope JAISA nahi — slope HI hai")}
        </T>
      </Fade>

      {/* beat 4 — squeeze the interval */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(530, 484, 290, 484)}
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={410} y={512} size={13} fill={AMBER_DARK} script>
          {t("slide B toward A — squeeze Δt", "B ko A ki taraf sarkao — Δt sikodo")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5)}
        d="M 466 282 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M 260 410 L 470 282"
        stroke={RED}
        sw={1.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 7.5)}
        d="M 396 303 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M 260 410 L 400 303"
        stroke={RED}
        sw={1.4}
        dur={0.8}
      />

      {/* beat 5 — the chord becomes the tangent */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 180 446 L 420 338"
        stroke={GREEN}
        sw={3.6}
        dur={1}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.4)}
        d="M 672 320 h 316 q 12 0 12 12 v 10 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -10 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={830} y={344} size={15} fill={GREEN} script>
          {t("tangent's slope = v at A", "tangent ka slope = A par v")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={830} y={382} size={13} fill={GREEN} script>
          {t(
            "chord → tangent · average → instantaneous",
            "chord → tangent · average → instantaneous"
          )}
        </T>
      </Fade>

      {/* beat 6 — the honest end point */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 672 410 h 336 q 12 0 12 12 v 46 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={840} y={445} size={20} fill={INK} weight={700}>
          v = lim Δx ⁄ Δt = dx ⁄ dt
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={840} y={468} size={12} fill={MUTED} script>
          {t(
            "Δt → 0 — the honest end point of a squeezed chord",
            "Δt → 0 — nichode hue chord ka imaandaar ant"
          )}
        </T>
      </Fade>

      {/* beat 7 — why calculus turns up here */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 528 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={84} y={550} size={14} fill={RED} script anchor="start">
          {t(
            "why calculus? velocity at an instant IS a limiting slope —",
            "calculus kyun? ek pal ki velocity hai hi limiting slope —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={580} size={14} fill={RED} script anchor="start">
          {t(
            "not bolted on: kinematics is where calculus was born",
            "bahar se nahi juda: kinematics hi calculus ka janmasthan hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
