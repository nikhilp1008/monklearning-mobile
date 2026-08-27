/**
 * Ch02 · Section 13 — "Example 3 [JEE Main]: differentiate, then find distance vs displacement"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.9, 37.7, 60.9, 81.5, 96, 120.8, 145, 159.9]):
 *  0 title + given card x(t) = t³ − 6t² + 9t + 5
 *  1 fusion note: calculus + reversal thinking
 *  2 ladder card: v, factorised, a — amber underline on the factorisation
 *  3 (a) at rest: t = 1 s, 3 s
 *  4 (b) a = 0 at t = 2 s · v(2) = −3 m/s
 *  5 red note: sign = direction, not deceleration
 *  6 picture: axis 5→9, forward +4 arrow, back −4 arrow, position labels
 *  7 two boxes: displacement 0 · distance 8 m
 *  8 green verdict bar: the reversal is the culprit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl 52 · card x400..680 y66..104, formula bl 92
 *  b1 | note cx540 bl 132
 *  b2 | card x60..520 y155..290 · header bl 174 · lines bl 206/238/272 ·
 *       underline y246 x222..358
 *  b3 | card x560..1020 y155..218 · header bl 176 · line bl 204
 *  b4 | card x560..1020 y232..295 · header bl 252 · line bl 280
 *  b5 | bar x66 y316..372 · lines st x84 bl 336 / 362
 *  b6 | fwd label cx540 bl 397 · fwd arrow y414 (348→732) · back arrow y434 (732→348) ·
 *       axis y452 x300..780, ticks x340/x740 · tick labels bl 476 · back label cx540 bl 476
 *  b7 | boxes x160..500 / x560..900 y495..555 · texts bl 530
 *  b8 | bar x232 y560..590 · line cx540 bl 582
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the cubic */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — differentiate, then distance vs displacement",
            "Example 3 [JEE Main] — differentiate karo, phir distance vs displacement"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 412 66 h 256 q 12 0 12 12 v 14 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={92} size={17} fill={INK} weight={700}>
          x(t) = t³ − 6t² + 9t + 5
        </T>
      </Fade>

      {/* beat 1 — why it catches people */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={132} size={12} fill={MUTED} script>
          {t(
            "calculus + reversal-thinking — both, in the same three minutes",
            "calculus + palatne ki soch — dono, unhi teen minute mein"
          )}
        </T>
      </Fade>

      {/* beat 2 — down the ladder, then factorise */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 72 155 h 436 q 12 0 12 12 v 111 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -111 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={290} y={177} size={12} fill={AMBER_DARK} script>
          {t("down the ladder — then FACTORISE", "seedhi se neeche — phir FACTORISE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={290} y={206} size={16} fill={INK} weight={700}>
          v = dx⁄dt = 3t² − 12t + 9
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={290} y={238} size={16} fill={INK} weight={700}>
          = 3(t − 1)(t − 3)
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 10)}
        d="M 222 246 h 136"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={290} y={272} size={16} fill={INK} weight={700}>
          a = dv⁄dt = 6t − 12
        </T>
      </Fade>

      {/* beat 3 — (a) momentarily at rest */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 572 155 h 436 q 12 0 12 12 v 39 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -39 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={790} y={176} size={12} fill={GREEN} script>
          {t("(a) at rest ⇔ v = 0", "(a) at rest ⇔ v = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={790} y={204} size={15} fill={INK} weight={700}>
          3(t−1)(t−3) = 0 → t = 1 s, 3 s
        </T>
      </Fade>

      {/* beat 4 — (b) where a vanishes */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 572 232 h 436 q 12 0 12 12 v 39 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -39 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={790} y={252} size={12} fill={GREEN} script>
          {t("(b) a = 0: 6t − 12 = 0 → t = 2 s", "(b) a = 0: 6t − 12 = 0 → t = 2 s")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={790} y={280} size={15} fill={INK} weight={700}>
          v(2) = 3(1)(−1) = −3 m/s
        </T>
      </Fade>

      {/* beat 5 — where marks leak */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 316 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={336} size={14} fill={RED} script anchor="start">
          {t(
            "−3 does NOT mean decelerating — it means moving in −x",
            "−3 ka matlab decelerate NAHI — matlab −x mein chal raha hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={84} y={362} size={14} fill={RED} script anchor="start">
          {t(
            "sign of v = direction · deceleration = v and a opposed",
            "v ka sign = disha · deceleration = v aur a aamne-saamne"
          )}
        </T>
      </Fade>

      {/* beat 6 — the picture is the whole answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={397} size={12} fill={GREEN} script>
          {t("+4 m forward (0 → 1 s)", "+4 m aage (0 → 1 s)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.8)}
        d={arrowD(348, 414, 732, 414)}
        stroke={GREEN}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d={arrowD(732, 434, 348, 434)}
        stroke={RED}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 300 452 H 780 M 340 445 v 14 M 740 445 v 14"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 9.5)}>
        <T x={340} y={476} size={11} fill={MUTED} script>
          {t("x = 5 (t=0 & t=3)", "x = 5 (t=0 & t=3)")}
        </T>
        <T x={740} y={476} size={11} fill={MUTED} script>
          {t("x = 9 (t=1)", "x = 9 (t=1)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={540} y={476} size={12} fill={RED} script>
          {t("−4 m back (1 → 3 s)", "−4 m peechhe (1 → 3 s)")}
        </T>
      </Fade>

      {/* beat 7 — the two boxes */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 172 495 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={330} y={530} size={15} fill={INK} weight={700}>
          {t("displacement = 5 − 5 = 0", "displacement = 5 − 5 = 0")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 5)}
        d="M 572 495 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 6.5)}>
        <T x={730} y={530} size={15} fill={INK} weight={700}>
          {t("distance = |+4| + |−4| = 8 m", "distance = |+4| + |−4| = 8 m")}
        </T>
      </Fade>

      {/* beat 8 — the culprit */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 232 560 v 30" stroke={GREEN} sw={3.2} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={582} size={13} fill={GREEN} script>
          {t(
            "ends where it started, yet 8 m of path — the reversal at t = 1 s: the jogger, in a cubic",
            "jahan se chala wahin khatam, phir bhi 8 m raasta — t = 1 s ka palatna: jogger, cubic mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
