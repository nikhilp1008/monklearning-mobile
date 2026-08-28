/**
 * Ch04 · Section 60 — "The normal reaction is not always mg"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 38.2, 63.1, 64.1, 73.6, 98.5]):
 *  0 title
 *  1 definition: perpendicular push, never pull
 *  2 red margin: the biggest beginner error — N=mg only on flat ground alone
 *  3 four mini panels: flat / incline / lift up / pulled at angle, each with N=
 *  4 amber line: no single formula — only a method
 *  5 green chip: self-adjusting, like static friction
 *  6 red margin: train out the reflex, five-second habit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · b1 st x84 bl 92 / 116
 *  b2 | bar x66 y145..210 · lines st x84 bl 165 / 191
 *  four panels y240..340 at x84/x300/x516/x732 w190:
 *    each: mini figure y240..300 · N= label bl 330
 *  b4 line cx540 bl 375
 *  b5 chip x210..870 y400..440
 *  b6 | bar x66 y475..550 · lines st x84 bl 495 / 521 / 545
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const block = (x: number) => `M ${x} 265 h 60 v 30 h -60 z`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "the single biggest beginner error in mechanics",
            "mechanics ki sabse badi shuruaati galti"
          )}
        </T>
      </Fade>

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "N = the push a surface gives, perpendicular to itself",
            "N = surface jo dhakka deta hai, apne perpendicular"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a surface can only PUSH, never pull — the table cannot grab your book",
            "surface sirf DHAKEL sakta hai, kabhi kheench nahi — mez kitaab pakad nahi sakti"
          )}
        </T>
      </Fade>

      {/* beat 2 — the biggest error */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 145 v 65" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={165} size={14} fill={RED} script anchor="start">
          {t(
            "the reflex 'N = mg' is TRUE only on flat ground, nothing else touching",
            "reflex 'N = mg' SIRF flat zameen par sahi, jab aur kuchh na chhue"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={84} y={191} size={14} fill={RED} script anchor="start">
          {t("change anything, and N changes", "kuchh bhi badlo, N badal jaata hai")}
        </T>
      </Fade>

      {/* beat 3 — four panels */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 84 300 H 260" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={block(114)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={arrowD(144, 265, 144, 232)}
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={144} y={330} size={12} fill={INK} weight={700}>
          N = mg
        </T>
        <T x={144} y={350} size={11} fill={MUTED} script>
          {t("flat ground", "flat zameen")}
        </T>
      </Fade>

      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d="M 300 300 L 460 300 L 460 275 L 320 268 Z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 365 270 h 40 v 22 h -40 z" stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d={arrowD(385, 270, 400, 235)}
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={380} y={330} size={12} fill={INK} weight={700}>
          N = mg·cosθ
        </T>
        <T x={380} y={350} size={11} fill={MUTED} script>
          {t("incline", "incline")}
        </T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 4.6)} d="M 516 300 H 692" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5)} d={block(575)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.6)}
        d={arrowD(605, 265, 605, 225)}
        stroke={GREEN}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={605} y={330} size={12} fill={INK} weight={700}>
          N = m(g+a)
        </T>
        <T x={605} y={350} size={11} fill={MUTED} script>
          {t("lift accelerating up", "lift upar accelerate")}
        </T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 6.6)} d="M 732 300 H 908" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 7)} d={block(791)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 7.6)}
        d={arrowD(821, 265, 821, 245)}
        stroke={GREEN}
        sw={2}
        dur={0.3}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 8.2)}
        d={arrowD(851, 280, 890, 250)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 8.8)}>
        <T x={821} y={330} size={11} fill={INK} weight={700}>
          N = mg−F·sinθ
        </T>
        <T x={821} y={350} size={11} fill={MUTED} script>
          {t("pulled at an angle", "angle par khincha")}
        </T>
      </Fade>

      {/* beat 4 — no single formula */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={375} size={14} fill={AMBER_DARK} script>
          {t(
            "no single formula for N — only a method: write the ACTUAL perpendicular balance",
            "N ke liye ek formula nahi — sirf method: ASLI perpendicular balance likho"
          )}
        </T>
      </Fade>

      {/* beat 5 — self-adjusting */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={210} y={400} w={660} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "N is SELF-ADJUSTING, just like static friction — takes whatever stops penetration",
            "N SELF-ADJUSTING hai, static friction jaisa — jitna dhansne se roke, utna leta hai"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — train out the reflex */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 475 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={495} size={14} fill={RED} script anchor="start">
          {t(
            "see a body on a surface? do NOT write mg by reflex",
            "surface par body dikhi? reflex mein mg MAT likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={521} size={14} fill={GREEN} script anchor="start">
          {t(
            "check every other force with a vertical part first",
            "pehle har doosri force ka vertical hissa dekho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={545} size={14} fill={GREEN} script anchor="start">
          {t(
            "five seconds — prevents the most common mistake in the subject",
            "paanch second — vishay ki sabse aam galti rokta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
