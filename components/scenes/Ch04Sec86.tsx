/**
 * Ch04 · Section 86 — "Worked Example 1 [CBSE Board]: a stone just completing a loop"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.27, 36.01, 51.8, 71.17, 95.91, 120.75]):
 *  0 title
 *  1 problem: stone m=0.5kg, string r=1m, minimum speed to just complete loop, g=10
 *  2 diagram: vertical circle, T=0 at top, T&mg at bottom, caption
 *  3 line (a): v_top = √gr = √10 ≈ 3.16 m/s
 *  4 line (b): v_bottom = √5gr = √50 ≈ 7.07 m/s
 *  5 formula box (c): T_bottom = 0.5×50/1 + 0.5×10 = 25+5 = 30 N
 *  6 red margin: 6mg check — T_bottom−T_top=30−0=30N=6mg, confirms arithmetic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | circle c(540,255) r65 · T=0 squiggle top · mg arr top(540,190→215) lbl(555,208) ·
 *    T arr bot(540,320→297) lbl(530,287) · mg arr bot(565,318→343) lbl(573,343) · caption cx540 bl 365
 *  b3 line cx540 bl 400 · b4 line cx540 bl 424
 *  b5 box x300..780 y450..494 bl 478
 *  b6 | bar x66 y520..590 · lines st x84 bl 540 / 566
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec86({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — a stone just completing a loop",
            "Example 1 [CBSE Board] — patthar jo bas loop poora karta"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "stone m = 0.5 kg on a string r = 1 m, whirled at minimum speed",
            "string r = 1 m par m = 0.5 kg patthar, minimum speed par ghumaaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: (a) v_top (b) v_bottom (c) T_bottom · g = 10 m⁄s²",
            "nikaalo: (a) v_top (b) v_bottom (c) T_bottom · g = 10 m⁄s²"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={circleD(540, 255, 65)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 540 190 q 15 -8 8 -20 q -15 6 -6 20"
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={540} y={158} size={11} fill={RED} weight={700}>
          T = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d={arrowD(540, 190, 540, 215)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={555} y={208} size={11} fill={GREEN} weight={700} anchor="start">
          mg = mv²⁄r
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d={arrowD(540, 320, 540, 297)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d={arrowD(565, 318, 565, 343)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={530} y={287} size={11} fill={GREEN} weight={700} anchor="end">
          T
        </T>
        <T x={573} y={343} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={540} y={365} size={11} fill={MUTED} script>
          {t(
            "the 6mg rule confirms the arithmetic",
            "6mg niyam arithmetic ki pushti karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — v_top */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={400} size={14} fill={INK} weight={700}>
          (a) v_top = √gr = √10 ≈ 3.16 m⁄s
        </T>
      </Fade>

      {/* beat 4 — v_bottom */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={424} size={14} fill={INK} weight={700}>
          (b) v_bottom = √5gr = √50 ≈ 7.07 m⁄s
        </T>
      </Fade>

      {/* beat 5 — T_bottom */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 300 450 h 480 q 12 0 12 12 v 20 q 0 12 -12 12 h -480 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={478} size={14} fill={INK} weight={800}>
          (c) T_bottom = 0.5×50÷1 + 0.5×10 = 25+5 = 30 N
        </T>
      </Fade>

      {/* beat 6 — the 6mg check */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 520 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={540} size={14} fill={RED} script anchor="start">
          {t(
            "check: T_bottom − T_top = 30 − 0 = 30 N",
            "check: T_bottom − T_top = 30 − 0 = 30 N"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={566} size={14} fill={GREEN} script anchor="start">
          {t(
            "6mg = 6(0.5)(10) = 30 N — matches, arithmetic confirmed",
            "6mg = 6(0.5)(10) = 30 N — milta hai, arithmetic sahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
