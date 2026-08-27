/**
 * Ch04 · Section 8 — "Worked Example 1 [CBSE Board]: the cricket ball"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.7, 24.3, 34.6, 47.6, 48.6, 49.6, 63.1] — beats 4–6 rapid in
 * en, spread in hi; delays kept short so both read):
 *  0 title
 *  1 problem data + find lines
 *  2 figure: batsman, in-arrow 30, back-arrow 40, reversal note
 *  3 sign convention: label + amber +x arrow + rule
 *  4 signed values vᵢ = −30, v_f = +40 + "minus is physics"
 *  5 J calculation line + green result box + direction note
 *  6 F_avg line + green result box + small-car note
 *  7 red margin trap: 1.6 N·s ✗, no marks, fix direction first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | batsman head c(150,163) r9 torso→226 · bat (167,190)→(185,170) ·
 *    ballIn c(430,180) r7 arrow (415,180)→(240,180) lbl cx330 bl 162 ·
 *    arrowOut (250,212)→(470,212) lbl cx360 bl 236 · note cx300 bl 262
 *  b3 | st x560 bl 148 · arrow (560,170)→(700,170) · "+x" (716,175) ·
 *    rule st x560 bl 198
 *  b4 | values st x560 bl 232 sz16 · note st x560 bl 258
 *  b5 | l1 st x120 bl 316 · box x120..380 y330..372 bl 358 · note st x400 bl 358
 *  b6 | line st x120 bl 408 · box x340..560 y386..426 bl 412 · note st x580 bl 412
 *  b7 | bar x66 y470..560 · lines st x84 bl 490 / 516 / 542
 */

import React from "react";
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

export default function Ch04Sec8({ currentTime, reveals, language }: SceneProps) {
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
            "Example 1 [CBSE Board] — the cricket ball",
            "Example 1 [CBSE Board] — cricket ball"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m = 0.16 kg · in at 30 m⁄s · hit straight back at 40 m⁄s · contact 0.01 s",
            "m = 0.16 kg · 30 m⁄s se aati · seedha wapas 40 m⁄s se · contact 0.01 s"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: (a) impulse J on the ball (b) average force by the bat",
            "nikaalo: (a) ball par impulse J (b) bat ki average force"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure: a reversal */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d={`${circleD(150, 163, 9)} M 150 172 V 206 M 150 180 L 136 196 M 150 180 L 167 190 M 167 190 L 185 170 M 150 206 L 140 226 M 150 206 L 160 226`}
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d={`${circleD(430, 180, 7)} ${arrowD(415, 180, 240, 180)}`}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={330} y={162} size={13} fill={RED} script>
          {t("in: 30 m⁄s", "aati hui: 30 m⁄s")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d={arrowD(250, 212, 470, 212)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={360} y={236} size={13} fill={GREEN} script>
          {t("back: 40 m⁄s", "wapas: 40 m⁄s")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={300} y={262} size={13} fill={RED} script>
          {t("the reversal IS the whole problem", "yahi reversal poori problem hai")}
        </T>
      </Fade>

      {/* beat 3 — sign convention first */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={560} y={148} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 1 — sign convention FIRST:", "step 1 — pehle sign convention:")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d={arrowD(560, 170, 700, 170)}
        stroke={AMBER}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={716} y={175} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          +x
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={560} y={198} size={13} fill={INK} script anchor="start">
          {t(
            "away from the batsman (final direction) = positive",
            "batsman se DOOR (final direction) = positive"
          )}
        </T>
      </Fade>

      {/* beat 4 — signed values */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={560} y={232} size={16} fill={INK} weight={700} anchor="start">
          vᵢ = −30 m⁄s&nbsp;&nbsp;&nbsp;v_f = +40 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={258} size={12} fill={RED} script anchor="start">
          {t(
            "the minus is not decoration — it is physics",
            "minus sajawat nahi hai — physics hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — impulse */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={120} y={316} size={16} fill={INK} weight={700} anchor="start">
          J = m·v_f − m·vᵢ = 0.16(+40) − 0.16(−30) = 6.4 + 4.8
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 132 330 h 236 q 12 0 12 12 v 18 q 0 12 -12 12 h -236 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={250} y={358} size={20} fill={INK} weight={800}>
          J = 11.2 N·s
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={400} y={358} size={12} fill={GREEN} script anchor="start">
          {t("away from the batsman", "batsman se door ki taraf")}
        </T>
      </Fade>

      {/* beat 6 — average force */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={120} y={408} size={16} fill={INK} weight={700} anchor="start">
          F_avg = J⁄Δt = 11.2 ÷ 0.01
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 352 386 h 196 q 12 0 12 12 v 16 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={450} y={412} size={18} fill={INK} weight={800}>
          F_avg = 1120 N
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={580} y={412} size={12} fill={GREEN} script anchor="start">
          {t(
            "≈ the weight of a small car, in a blink",
            "≈ chhoti car ka weight, palak jhapakte"
          )}
        </T>
      </Fade>

      {/* beat 7 — the trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 88" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "trap: J = 0.16(40 − 30) = 1.6 N·s ✗ — forgot the ball REVERSED",
            "trap: J = 0.16(40 − 30) = 1.6 N·s ✗ — bhool gaye ki ball PALTI thi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "same numbers, wrong physics, almost no marks",
            "wahi numbers, galat physics, lagbhag zero marks"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={542} size={14} fill={GREEN} script anchor="start">
          {t(
            "fix the direction BEFORE you substitute",
            "substitute karne se PEHLE direction fix karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
