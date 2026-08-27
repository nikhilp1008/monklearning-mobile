/**
 * Ch06 · Section 18 — "Worked example: angle from the cross product [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.35, 19.71, 31.23, 37.89, 51.03, 60.59, 72.45]):
 *  0 title + given subline
 *  1 mini vector diagram (A, B, θ arc) + amber formula card |A×B| = AB sinθ
 *  2 red trap note (right)
 *  3 givens line
 *  4 substitution line
 *  5 green θ = 30° box
 *  6 sanity bar 0..30 with half marker
 *  7 green wrap line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script21 cx540 bl 52 · sub script13 cx540 bl 92
 *  b1 | A (120,250)→(320,250) "A"(328,256)st · B →(295,150) "B"(303,142)st ·
 *       θ arc r40 · "θ"(185,232) · card x430..760 y160..230 · formula cx595 bl 203
 *  b2 | red bar x810 y150..220 · L1 st x828 bl 175 · L2 st x828 bl 205
 *  b3 | sans16 st x80 bl 330
 *  b4 | sans17 st x80 bl 380
 *  b5 | green box x640..900 y350..410 · cx770 bl 388
 *  b6 | bar (80,480)→(560,480) · end ticks · labels bl 505 · half marker x320 ·
 *       label script12 cx320 bl 452
 *  b7 | script13 st x80 bl 560 · underline y580 x80..520
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the speed trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "angle from the cross product [NEET speed trap]",
            "cross product se angle [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={92} size={13} fill={MUTED} script>
          {t(
            "|A| = 6 · |B| = 5 · |A × B| = 15 → θ = ?",
            "|A| = 6 · |B| = 5 · |A × B| = 15 → θ = ?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the only relationship you need */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(120, 250, 320, 250)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={328} y={256} size={15} fill={INK} anchor="start" weight={700}>
          A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(120, 250, 295, 150)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={303} y={142} size={15} fill={INK} anchor="start" weight={700}>
          B
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 160 250 A 40 40 0 0 0 155 230"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={185} y={232} size={13} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 442 160 h 306 q 12 0 12 12 v 46 q 0 12 -12 12 h -306 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <T x={595} y={203} size={22} fill={INK} weight={700}>
          |A × B| = AB sinθ
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 810 150 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={828} y={175} size={13} fill={RED} script anchor="start">
          {t("TRAP: skip the machinery", "TRAP: machinery mat lagao")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={828} y={205} size={13} fill={RED} script anchor="start">
          {t("only magnitudes matter", "sirf magnitudes chahiye")}
        </T>
      </Fade>

      {/* beat 3 — givens */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={80} y={330} size={16} fill={INK} anchor="start" weight={700}>
          {t("given:  A = 6 ,  B = 5 ,  |A × B| = 15", "diya:  A = 6 ,  B = 5 ,  |A × B| = 15")}
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={80} y={380} size={17} fill={INK} anchor="start" weight={700}>
          15 = (6)(5) sinθ  ⇒  sinθ = 15/30 = ½
        </T>
      </Fade>

      {/* beat 5 — thirty degrees */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 652 350 h 236 q 12 0 12 12 v 36 q 0 12 -12 12 h -236 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={770} y={388} size={24} fill={INK} weight={700}>
          θ = 30°
        </T>
      </Fade>

      {/* beat 6 — sanity against the maximum */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 80 480 H 560 M 80 470 V 490 M 560 470 V 490" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={80} y={505} size={12} fill={INK} weight={700}>
          0
        </T>
        <T x={560} y={505} size={12} fill={INK} weight={700}>
          {t("30 — max (at 90°)", "30 — max (90° par)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d="M 320 468 V 492" stroke={AMBER} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={320} y={452} size={12} fill={AMBER_DARK} script>
          {t("15 — exactly half", "15 — theek aadha")}
        </T>
      </Fade>

      {/* beat 7 — one line, no determinant */}
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={80} y={560} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "half the max ⇒ sinθ = ½ ⇒ 30° fits — one line, no determinant ✓",
            "max ka aadha ⇒ sinθ = ½ ⇒ 30° fit — ek line, koi determinant nahi ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.5)} d="M 80 580 h 440" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
