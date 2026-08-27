/**
 * Ch02 · Section 34 — "Derivation 2: s = ut + ½at², from the area under v-t"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 31, 55.8, 74, 91.2, 106.3, 129.9]):
 *  0 title
 *  1 observation lines: straight line + area rule ⇒ school geometry
 *  2 picture: line u→v, rectangle + triangle split, labels
 *  3 area sum line: s = u·t + ½·t·(v−u)
 *  4 red height bracket + substitute v−u = at
 *  5 result box: s = ut + ½at²
 *  6 red note: cruising term + extra term
 *  7 green: graphs generate the formulas
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | lines cx540 bl 88 / 114
 *  graph: axes M160,440 V180 H540 · line (160,360)→(500,210) · guides dashed ·
 *  "u" end (152,364) · "v" end (152,214) · "t" (500,462) ·
 *  rect label (330,410) · tri label (400,335) · bracket M516,360 V210 ·
 *  bracket label st x524 bl 288
 *  b3 | st x620 bl 200 · b4 | st x620 bl 240
 *  b5 | box x620..1000 y270..335 · formula cx810 bl 312 · underline y322
 *  b6 | bar x620 y360..436 · lines st x636 bl 380 / 404 / 428
 *  b7 | bar x66 y500..552 · lines st x84 bl 520 / 546
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

export default function Ch02Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — cashing in the graphs */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={22} fill={INK} script>
          {t(
            "Derivation 2 — s = ut + ½at², from the area under v-t",
            "Derivation 2 — s = ut + ½at², v-t ke area se"
          )}
        </T>
      </Fade>

      {/* beat 1 — the observation */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={88} size={12} fill={AMBER_DARK} script>
          {t(
            "straight v-t line (derivation 1) + 'area = displacement' (sub-topic 2)",
            "seedhi v-t line (derivation 1) + 'area = displacement' (sub-topic 2)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={540} y={114} size={12} fill={AMBER_DARK} script>
          {t(
            "⇒ displacement = area under a straight line — school geometry",
            "⇒ displacement = seedhi line ke neeche ka area — school geometry"
          )}
        </T>
      </Fade>

      {/* beat 2 — the split picture */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(160, 440, 540, 440)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.8)}
        d={arrowD(160, 440, 160, 180)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d="M 160 360 L 500 210"
        stroke={INK}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Path
          d="M 500 210 V 440 M 160 210 H 500"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={152} y={364} size={14} fill={INK} anchor="end" weight={700}>
          u
        </T>
        <T x={152} y={214} size={14} fill={INK} anchor="end" weight={700}>
          v
        </T>
        <T x={500} y={462} size={14} fill={INK} weight={700}>
          t
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 7)}
        d="M 160 360 H 500 M 220 440 V 360 M 300 440 V 360 M 380 440 V 360 M 460 440 V 360"
        stroke={AMBER}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 8.5)}>
        <T x={330} y={410} size={15} fill={AMBER_DARK} weight={700}>
          u·t
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 10.5)}
        d="M 280 340 l 40 -18 M 330 335 l 46 -20 M 385 330 l 50 -22 M 435 328 l 42 -19"
        stroke={GREEN}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={400} y={335} size={13} fill={GREEN} weight={700}>
          ½·t·(v−u)
        </T>
      </Fade>

      {/* beat 3 — write the area down */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={620} y={200} size={15} fill={INK} anchor="start" weight={700}>
          s = u·t + ½·t·(v − u)
        </T>
      </Fade>

      {/* beat 4 — the elegant substitution */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 516 360 V 210 M 510 360 h 12 M 510 210 h 12"
        stroke={RED}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={524} y={288} size={12} fill={RED} script anchor="start">
          v−u
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={620} y={240} size={12} fill={RED} script anchor="start">
          {t(
            "but v − u = at (equation 1) — substitute it in",
            "par v − u = at (equation 1) — usse badal do"
          )}
        </T>
      </Fade>

      {/* beat 5 — equation two */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 632 270 h 356 q 12 0 12 12 v 41 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={810} y={312} size={24} fill={INK} weight={800}>
          s = ut + ½at²
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d="M 710 322 h 200"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />

      {/* beat 6 — the physical reading */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 620 360 v 76" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={636} y={380} size={12} fill={RED} script anchor="start">
          {t(
            "u·t — the cruising distance at the starting speed",
            "u·t — shuruaati speed par cruise ki doori"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={636} y={404} size={12} fill={RED} script anchor="start">
          {t(
            "½at² — the EXTRA the speeding-up added",
            "½at² — tez hone ne jo EXTRA joda"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={636} y={428} size={12} fill={RED} script anchor="start">
          {t(
            "every term is a physical thing, not a symbol",
            "har term ek asli cheez hai, nishaan nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the method lesson */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "this is sub-topic 2's area rule doing real work",
            "yeh sub-topic 2 ka area rule asli kaam par laga hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={546} size={13} fill={GREEN} script anchor="start">
          {t(
            "graphs weren't a detour before the formulas — they GENERATE them",
            "graphs formulas se pehle ka chakkar nahi the — wahi inhe BANATE hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
