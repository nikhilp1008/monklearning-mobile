/**
 * Ch04 · Section 33 — "Worked Example 3 [JEE Main]: the horizontal string"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 30.9, 55.1, 72.3, 97.1, 117.9, 138.2, 161.8]):
 *  0 title
 *  1 problem + find
 *  2 figure: incline, block, horizontal string to wall, T/N/mg arrows, caption
 *  3 axes choice notes (right col)
 *  4 resolve N: 30° from the VERTICAL + components
 *  5 vertical balance → N box
 *  6 horizontal balance → T box
 *  7 red bar (right): slope-axes cross-check
 *  8 red margin: bank the pair, both larger
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | wall M120 380 V210 + hatches · incline M120 380 L500 380 L500 190 Z ·
 *    block ~(330,268) quad · string (315,262)→(120,262) ·
 *    T arr (300,262)→(200,262) "T"(250,244) · N arr (325,255)→(305,215)... "N"(296,206) ·
 *    mg arr (335,285)→(335,350) "mg"(351,332) · "30°"(176,368) · caption cx310 bl 425
 *  b3 | st x560 bl 150 / 174 · b4 | st x560 bl 214 / 238
 *  b5 line st x560 bl 282 · box x790..1010 y258..296 bl 282
 *  b6 line st x560 bl 330 · box x790..1010 y306..344 bl 330
 *  b7 | bar x560 y370..428 · lines st x578 bl 390 / 414
 *  b8 | bar x66 y470..548 · lines st x84 bl 490 / 516 / 540
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

export default function Ch04Sec33({ currentTime, reveals, language }: SceneProps) {
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
            "Example 3 [JEE Main] — the horizontal string",
            "Example 3 [JEE Main] — horizontal string"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "5 kg on a smooth 30° incline · held by a HORIZONTAL string to a wall · g = 10",
            "smooth 30° incline par 5 kg · deewar se bandhi HORIZONTAL string thame hai · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: tension T and normal reaction N", "nikaalo: tension T aur normal reaction N")}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 120 380 V 210 M 120 230 l -10 8 M 120 270 l -10 8 M 120 310 l -10 8 M 120 350 l -10 8"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 120 380 L 500 380 L 500 190 Z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M 316 288 L 352 270 L 338 242 L 302 260 Z M 315 262 H 120"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={176} y={368} size={12} fill={AMBER_DARK} weight={700}>
          30°
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d={arrowD(290, 250, 200, 250)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.4)}
        d={arrowD(322, 240, 302, 200)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.2)}
        d={arrowD(335, 292, 335, 352)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={248} y={232} size={13} fill={AMBER_DARK} weight={700}>
          T
        </T>
        <T x={294} y={192} size={13} fill={GREEN} weight={700} anchor="end">
          N
        </T>
        <T x={351} y={334} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={310} y={425} size={13} fill={RED} script>
          {t(
            "the one word that matters: HORIZONTAL",
            "wo ek shabd jo sab badal deta hai: HORIZONTAL"
          )}
        </T>
      </Fade>

      {/* beat 3 — for once, plain axes */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "for once, PLAIN horizontal–vertical axes win:",
            "is baar SEEDHE horizontal–vertical axes jeette hain:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={560} y={174} size={13} fill={INK} script anchor="start">
          {t(
            "weight and tension already lie on them — only N resolves",
            "weight aur tension pehle se unpar hain — sirf N resolve hota hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the deciding step */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={214} size={13} fill={RED} script anchor="start">
          {t(
            "incline 30° from horizontal ⇒ N is 30° from the VERTICAL — read it twice",
            "incline horizontal se 30° ⇒ N VERTICAL se 30° — do baar padho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={560} y={238} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "components: N·cos30° up · N·sin30° horizontal",
            "components: N·cos30° upar · N·sin30° horizontal"
          )}
        </T>
      </Fade>

      {/* beat 5 — vertical balance */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={560} y={282} size={14} fill={INK} weight={700} anchor="start">
          vertical: N·cos30° = mg
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 6)}
        d="M 802 258 h 196 q 12 0 12 12 v 14 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={900} y={282} size={15} fill={INK} weight={800}>
          N = 100⁄√3 ≈ 57.7 N
        </T>
      </Fade>

      {/* beat 6 — horizontal balance */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={330} size={14} fill={INK} weight={700} anchor="start">
          horizontal: T = N·sin30°
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d="M 802 306 h 196 q 12 0 12 12 v 14 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <T x={900} y={330} size={15} fill={INK} weight={800}>
          T = 50⁄√3 ≈ 28.9 N
        </T>
      </Fade>

      {/* beat 7 — the ten-second cross-check */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 560 370 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={578} y={390} size={13} fill={RED} script anchor="start">
          {t(
            "cross-check via slope axes: T = mg·tan30° ≈ 28.9 N ✓",
            "slope axes se cross-check: T = mg·tan30° ≈ 28.9 N ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={578} y={414} size={13} fill={GREEN} script anchor="start">
          {t(
            "same answer, fewer steps — ten seconds of real confidence",
            "wahi answer, kam steps — das second mein sachcha bharosa"
          )}
        </T>
      </Fade>

      {/* beat 8 — bank the pair */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 470 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "bank the pair: horizontal string ⇒ T = mg·tanθ · N = mg⁄cosθ",
            "jodi bank karo: horizontal string ⇒ T = mg·tanθ · N = mg⁄cosθ"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "both LARGER than the parallel-string case (mg·sinθ, mg·cosθ)",
            "dono parallel-string waale case (mg·sinθ, mg·cosθ) se BADE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={84} y={540} size={14} fill={GREEN} script anchor="start">
          {t(
            "a horizontal string fights gravity awkwardly — and pays extra tension",
            "horizontal string gravity se tedhe angle par ladti hai — aur zyada tension chukati hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
