/**
 * Ch04 · Section 31 — "Worked Example 1 [CBSE Board]: the lamp on two ropes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.7, 30.5, 48.7, 62.8, 84.0, 98.9, 112.0]):
 *  0 title
 *  1 problem + sin-vs-cos warning
 *  2 figure: beam, two 30° ropes, junction, lamp, W arrow + symmetry note
 *  3 FBD of junction (right col)
 *  4 horizontal balance line
 *  5 vertical balance equation
 *  6 numbers + T = 100 N box
 *  7 red margin: full weight, flatter → bigger, clothesline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | beam M100 160 H480 + hatches · ropes (140,160)/(440,160)→(290,255) ·
 *    lamp line →(290,300), bulb c(290,315) r14 · W arr (290,335)→(290,390) ·
 *    "W = 100 N" cx290 bl 412 · 30° lbls (232,186)/(348,186) · sym note cx290 bl 440
 *  FBD | pt (720,220) · T arrs →(640,174)/(800,174) · W arr →(720,300) ·
 *    lbls T(632,168 end)/T(808,168 st)/W(736,290 st) · caption cx720 bl 330
 *  b4 st x560 bl 370 · b5 st x560 bl 404 · b6 line st x560 bl 442 ·
 *    box x800..1000 y418..456 bl 442
 *  b7 | bar x66 y480..560 · lines st x84 bl 500 / 526 / 550
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — the lamp on two ropes",
            "Example 1 [CBSE Board] — do ropes par lamp"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "lamp W = 100 N · two ropes from a ceiling beam · each at 30° to the BEAM",
            "lamp W = 100 N · ceiling beam se do ropes · har ek BEAM se 30° par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: tension in each rope — the angle is from the HORIZONTAL (sin vs cos!)",
            "nikaalo: har rope ki tension — angle HORIZONTAL se hai (sin ya cos!)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 100 160 H 480 M 140 160 l -10 -10 M 220 160 l -10 -10 M 300 160 l -10 -10 M 380 160 l -10 -10 M 460 160 l -10 -10"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.8)}
        d="M 140 160 L 290 255 M 440 160 L 290 255"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d={`M 290 255 V 300 ${circleD(290, 315, 14)}`}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={232} y={186} size={12} fill={AMBER_DARK} weight={700}>
          30°
        </T>
        <T x={348} y={186} size={12} fill={AMBER_DARK} weight={700}>
          30°
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(290, 335, 290, 390)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={290} y={412} size={13} fill={RED} script>
          W = 100 N
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={290} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "symmetry ⇒ both tensions equal — call each T",
            "symmetry ⇒ dono tensions barabar — dono ko T kaho"
          )}
        </T>
      </Fade>

      {/* beat 3 — FBD of the junction */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Circle cx={720} cy={220} r={4.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={`${arrowD(720, 220, 640, 174)} ${arrowD(720, 220, 800, 174)}`}
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.8)}
        d={arrowD(720, 220, 720, 300)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={632} y={168} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          T
        </T>
        <T x={808} y={168} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          T
        </T>
        <T x={736} y={290} size={13} fill={RED} weight={700} anchor="start">
          W
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={720} y={330} size={12} fill={INK} script>
          {t(
            "FBD of the JUNCTION — not of the lamp",
            "JUNCTION ka FBD — lamp ka nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — horizontal balance */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={370} size={13} fill={INK} script anchor="start">
          {t(
            "horizontal: T·cos30° ← and → T·cos30° cancel by symmetry — write it anyway",
            "horizontal: T·cos30° ← aur → T·cos30° symmetry se cancel — phir bhi likho"
          )}
        </T>
      </Fade>

      {/* beat 5 — vertical balance */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={404} size={15} fill={INK} weight={700} anchor="start">
          {t("vertical:  2·T·sin30° = W", "vertical:  2·T·sin30° = W")}
        </T>
      </Fade>

      {/* beat 6 — the numbers */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={442} size={15} fill={INK} weight={700} anchor="start">
          2·T·(0.5) = 100
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 812 418 h 176 q 12 0 12 12 v 14 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={900} y={442} size={17} fill={INK} weight={800}>
          T = 100 N
        </T>
      </Fade>

      {/* beat 7 — the surprise */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 480 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "each rope carries the FULL 100 N — not half!",
            "har rope poora 100 N uthati hai — aadha NAHI!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "shallow ropes: only T·sin30° lifts — the flatter the rope, the bigger T",
            "dhalwaan ropes: sirf T·sin30° uthata hai — rope jitni sapat, T utna bada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={550} size={14} fill={GREEN} script anchor="start">
          {t(
            "why a tight clothesline sags a little, yet pulls its posts ferociously",
            "isiliye tani clothesline zara sa jhoolti hai, par khambon ko berahmi se kheenchti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
