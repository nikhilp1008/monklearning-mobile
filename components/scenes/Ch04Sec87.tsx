/**
 * Ch04 · Section 87 — "Worked Example 2 [NEET Speed Trap]: a universal ratio"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.24, 27.9, 47.79, 72.62, 97.45, 105.39]):
 *  0 title
 *  1 problem: body on string, just completing loop, find v_bottom:v_top ratio
 *  2 red margin: the trap — reaching for energy equations with numbers, ratio is universal
 *  3 diagram: circle with 3 marked points (1, √3, √5), caption
 *  4 line: at minimum, v_top=√gr, v_bottom=√5gr
 *  5 hero box: v_bottom / v_top = √5 ≈ 2.24
 *  6 red margin: memorize the trio 1:√3:√5, pick two numbers for any ratio
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..195 · lines st x84 bl 160 / 183
 *  fig | circle c(540,290) r65 · top dot(540,225) lbl(540,208) · side dot(605,290) lbl(618,294) ·
 *    bottom dot(540,355) lbl(540,383) · caption cx540 bl 410
 *  b4 line cx540 bl 440
 *  b5 box x300..780 y460..504 bl 488
 *  b6 | bar x66 y525..590 · lines st x84 bl 545 / 571
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec87({ currentTime, reveals, language }: SceneProps) {
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
            "Example 2 [NEET Speed Trap] — a universal ratio",
            "Example 2 [NEET Speed Trap] — ek universal ratio"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "a body on a string, vertical circle, just completing the loop",
            "string par ek body, vertical circle, loop bas poora karti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: v_bottom ⁄ v_top", "nikaalo: v_bottom ⁄ v_top")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 55" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "the trap: reaching for energy equations with numbers",
            "trap: numbers ke saath energy equations ki taraf badhna"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={84} y={183} size={14} fill={RED} script anchor="start">
          {t(
            "the ratio is universal — it depends on nothing",
            "ratio universal hai — kisi par nirbhar nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the trio diagram */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={circleD(540, 290, 65)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={ringD(540, 225, 6, 6)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={ringD(605, 290, 6, 6)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 3)} d={ringD(540, 355, 6, 6)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={540} y={208} size={12} fill={GREEN} weight={700}>
          v_top = 1
        </T>
        <T x={618} y={294} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          v_mid = √3
        </T>
        <T x={540} y={383} size={12} fill={RED} weight={700}>
          v_bottom = √5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={540} y={410} size={11} fill={MUTED} script>
          {t(
            "the trio 1 : √3 : √5 answers every ratio question",
            "tikdi 1 : √3 : √5 har ratio sawaal ka jawaab deti"
          )}
        </T>
      </Fade>

      {/* beat 4 — the two speeds */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={440} size={14} fill={INK} weight={700}>
          {t(
            "at minimum: v_top = √gr · v_bottom = √5gr",
            "minimum par: v_top = √gr · v_bottom = √5gr"
          )}
        </T>
      </Fade>

      {/* beat 5 — the ratio */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 300 460 h 480 q 12 0 12 12 v 20 q 0 12 -12 12 h -480 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={488} size={17} fill={INK} weight={800}>
          v_bottom ⁄ v_top = √5 ≈ 2.24
        </T>
      </Fade>

      {/* beat 6 — bank the trio */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 525 v 65" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={545} size={14} fill={RED} script anchor="start">
          {t(
            "memorize the trio: v_top : v_mid : v_bottom = 1 : √3 : √5",
            "tikdi ratto: v_top : v_mid : v_bottom = 1 : √3 : √5"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={571} size={14} fill={GREEN} script anchor="start">
          {t(
            "any ratio question? just pick two of these three numbers",
            "koi bhi ratio sawaal? in teen mein se do numbers chuno"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
