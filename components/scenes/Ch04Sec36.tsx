/**
 * Ch04 · Section 36 — "The almirah that refuses, then suddenly gives way"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 37.3, 55.9, 80.7, 100.4, 119.4, 144.2]):
 *  0 title + almirah doodle + push arrow + refuses label
 *  1 graph axes (P vs f)
 *  2 definition lines (right col)
 *  3 rising static line + self-adjusting notes
 *  4 ceiling dashed + f_max label + inequality box
 *  5 peak ring + snap line
 *  6 drop + kinetic flat line + f_k box + lurch line
 *  7 red margin: not automatically μsN
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  almirah | rect x100..170 y92..162 + door line · push arr (60,127)→(95,127) ·
 *    lbl cx135 bl 185
 *  graph | x-axis (245,440)→(620,440) "applied force P" cx430 bl 465 ·
 *    y-axis (250,445)→(250,190) "f"(233,200) ·
 *    static (250,440)→(450,240) · "static — self-adjusting" cx430 bl 420 ·
 *    ceiling dash y240 x250..470 · "f_max = μs·N" st x260 bl 228 ·
 *    peak ring c(450,240) · drop (450,240)→(458,275) · kinetic (458,275)→(620,275) ·
 *    "kinetic" st x480 bl 260
 *  R col x660 | b2 bl 130/154 · b3 bl 200/224 · b4 box x660..1020 y250..298 bl 282 ·
 *    b5 bl 330 · b6 box x660..1020 y355..399 bl 385 · lurch bl 430
 *  b7 | bar x66 y490..570 · lines st x84 bl 510 / 536 / 560
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the almirah drama */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "friction's whole drama, in one graph",
            "friction ka poora natak, ek graph mein"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 100 92 h 70 v 70 h -70 z M 135 92 V 162"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={arrowD(60, 127, 93, 127)}
        stroke={AMBER}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <T x={135} y={185} size={11} fill={MUTED} script>
          {t("refuses… refuses… JERK — it gives", "adti… adti… JHATKA — sarak gayi")}
        </T>
      </Fade>

      {/* beat 1 — the graph frame */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(245, 440, 620, 440)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={arrowD(250, 445, 250, 190)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={430} y={465} size={12} fill={INK} script>
          {t("applied force P →", "applied force P →")}
        </T>
        <T x={233} y={200} size={13} fill={INK} weight={700}>
          f
        </T>
      </Fade>

      {/* beat 2 — what friction is */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={660} y={130} size={13} fill={INK} script anchor="start">
          {t(
            "friction opposes relative sliding —",
            "friction relative sliding ka virodh karti hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={660} y={154} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "or even just the TENDENCY to slide",
            "ya sirf sarakne ki TENDENCY ka bhi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the rising line */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 250 440 L 450 240"
        stroke={AMBER}
        sw={3}
        dur={1}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={430} y={420} size={12} fill={AMBER_DARK} script>
          {t("static — self-adjusting", "static — self-adjusting")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={660} y={200} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "static friction is SELF-ADJUSTING:",
            "static friction SELF-ADJUSTING hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={660} y={224} size={13} fill={INK} script anchor="start">
          {t(
            "it matches your push exactly — but only up to a ceiling",
            "aapke dhakke ki theek barabari karti hai — par ek chhat tak"
          )}
        </T>
      </Fade>

      {/* beat 4 — the ceiling */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Path
          d="M 250 240 H 470"
          stroke={MUTED}
          strokeWidth={2}
          strokeDasharray="7 6"
          fill="none"
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={260} y={228} size={12} fill={AMBER_DARK} script anchor="start">
          f_max = μs·N
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d="M 672 250 h 336 q 12 0 12 12 v 24 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={840} y={282} size={16} fill={INK} weight={800}>
          0 ≤ f_s ≤ μs·N&nbsp;&nbsp;·&nbsp;&nbsp;an inequality!
        </T>
      </Fade>

      {/* beat 5 — the snap */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={ringD(450, 240, 24, 18)}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={660} y={330} size={13} fill={RED} script anchor="start">
          {t(
            "ask beyond the ceiling → the hold SNAPS, the body breaks free",
            "chhat se zyada maango → pakad TOOT jaati hai, body chhoot jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — kinetic takes over */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 450 240 L 458 275 M 458 275 H 620"
        stroke={RED}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={480} y={260} size={12} fill={RED} script anchor="start">
          {t("kinetic — flat", "kinetic — sapat")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d="M 672 355 h 336 q 12 0 12 12 v 20 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={840} y={385} size={16} fill={INK} weight={800}>
          f_k = μk·N&nbsp;&nbsp;·&nbsp;&nbsp;μs ≳ μk
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={660} y={430} size={12} fill={GREEN} script anchor="start">
          {t(
            "the small drop IS the lurch — keeping it moving beats starting it",
            "wahi chhota girna JHATKA hai — chalate rehna shuru karne se aasaan"
          )}
        </T>
      </Fade>

      {/* beat 7 — the warning that matters most */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 490 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={510} size={14} fill={RED} script anchor="start">
          {t(
            "not yet sliding? friction is WHATEVER IT NEEDS TO BE: anywhere in 0 … μs·N",
            "abhi sarak nahi rahi? friction UTNI hai JITNI ZAROORAT hai: 0 … μs·N mein kahin bhi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={536} size={14} fill={RED} script anchor="start">
          {t(
            "it is NOT automatically μs·N — the reflex 'μN' loses the mark before you start",
            "wo apne aap μs·N NAHI hai — reflex mein 'μN' likha to shuru se pehle mark gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={84} y={560} size={14} fill={GREEN} script anchor="start">
          {t(
            "every point on the rising line is a legitimate static friction",
            "chadhti line ka har point static friction ki jayaz value hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
