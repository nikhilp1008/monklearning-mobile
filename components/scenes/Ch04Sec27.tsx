/**
 * Ch04 · Section 27 — "Lifts, pseudo-force, and equilibrium that only looks real"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.2, 27.5, 43.1, 63.0, 87.8, 112.6, 133.6]):
 *  0 title
 *  1 four lift panels (a↑ · a↓ · v const · free fall) + caption
 *  2 right: scale reads its own push lines
 *  3 formula box R = m(g±a)
 *  4 extremes lines (constant v · free fall)
 *  5 bus + tilted pendulum + two-observer labels
 *  6 pseudo-force box + rules notes
 *  7 red margin: non-inertial only, opposite a₀
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  panels x100/220/340/460 w90 y95..185 · person c(x+38,130) r7 body→165 ·
 *    inner arrow x+72 · lbls bl 205 · caption cx300 bl 232
 *  b2 | st x620 bl 105 / 129
 *  b3 | box x620..1010 y150..202 bl 182
 *  b4 | st x620 bl 230 / 254
 *  bus | rect x100..340 y300..390 wheels cy398 r10 · arr (350,345)→(420,345) "a₀" ·
 *    pendulum (220,305)→(190,370) bob c(187,376) r8 · lbls cx220 bl 425 / 447
 *  b6 | box x620..900 y300..348 bl 331 · notes st x620 bl 380 / 404
 *  b7 | bar x66 y480..550 · lines st x84 bl 500 / 526
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

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const panel = (x: number) =>
    `M ${x} 95 h 90 v 90 h -90 z ${circleD(x + 38, 130, 7)} M ${x + 38} 137 V 165`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "what the weighing scale actually reads",
            "weighing scale asal mein kya padhta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — four lifts, one mass */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={panel(100)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.9)}
        d={arrowD(172, 165, 172, 115)}
        stroke={AMBER}
        sw={2.4}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={panel(220)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(292, 115, 292, 165)}
        stroke={AMBER}
        sw={2.4}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 4)} d={panel(340)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.9)}
        d={arrowD(412, 160, 412, 120)}
        stroke={MUTED}
        sw={2}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 5.5)} d={panel(460)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.4)}
        d={arrowD(532, 115, 532, 168)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={145} y={205} size={11} fill={MUTED} script>
          {t("a up", "a upar")}
        </T>
        <T x={265} y={205} size={11} fill={MUTED} script>
          {t("a down", "a neeche")}
        </T>
        <T x={385} y={205} size={11} fill={MUTED} script>
          {t("v const", "v const")}
        </T>
        <T x={505} y={205} size={11} fill={MUTED} script>
          {t("free fall", "free fall")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={320} y={232} size={13} fill={AMBER_DARK} script>
          {t(
            "mass and weight mg: identical in all four",
            "mass aur weight mg: chaaron mein bilkul same"
          )}
        </T>
      </Fade>

      {/* beat 2 — what the scale reads */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={620} y={105} size={13} fill={INK} script anchor="start">
          {t(
            "a scale never measures your weight —",
            "scale kabhi aapka weight nahi napta —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={620} y={129} size={13} fill={INK} script anchor="start">
          {t(
            "it reads its own PUSH: normal reaction = apparent weight",
            "wo apna PUSH padhta hai: normal reaction = apparent weight"
          )}
        </T>
      </Fade>

      {/* beat 3 — the readings */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 632 150 h 366 q 12 0 12 12 v 28 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={815} y={182} size={16} fill={INK} weight={800}>
          R = m(g+a) accel ↑&nbsp;&nbsp;·&nbsp;&nbsp;R = m(g−a) accel ↓
        </T>
      </Fade>

      {/* beat 4 — the two extremes */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={620} y={230} size={13} fill={INK} script anchor="start">
          {t(
            "constant v: R = mg — moving up ≠ accelerating up",
            "constant v: R = mg — upar jaana ≠ upar accelerate karna"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={620} y={254} size={13} fill={GREEN} script anchor="start">
          {t(
            "free fall, a = g: R = 0 — weightless, yet simply FALLING",
            "free fall, a = g: R = 0 — weightless, par bas GIR rahe hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the tilted bob */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={`M 100 300 h 240 v 90 h -240 z ${circleD(140, 398, 10)} ${circleD(300, 398, 10)}`}
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={arrowD(350, 345, 420, 345)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={385} y={328} size={13} fill={AMBER_DARK} weight={700}>
          a₀
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.4)}
        d={`M 220 305 L 190 370 ${circleD(187, 377, 8)}`}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={220} y={425} size={12} fill={GREEN} script>
          {t("passenger: 'perfectly balanced!'", "passenger: 'bilkul balanced!'")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={220} y={447} size={12} fill={RED} script>
          {t("road: 'clearly accelerating!'", "sadak se: 'saaf accelerate kar raha!'")}
        </T>
      </Fade>

      {/* beat 6 — the bookkeeping force */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 632 300 h 256 q 12 0 12 12 v 24 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={760} y={331} size={18} fill={INK} weight={800}>
          F_pseudo = −m·a₀
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={620} y={380} size={12} fill={INK} script anchor="start">
          {t(
            "both are right — in their OWN frames",
            "dono sahi hain — apne-apne frame mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={620} y={404} size={12} fill={GREEN} script anchor="start">
          {t(
            "add it → the passenger may honestly write ΣF = 0",
            "jod do → passenger imaandaari se ΣF = 0 likh sakta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the discipline */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 480 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "pseudo-force ONLY in a non-inertial frame — NEVER in the ground frame",
            "pseudo-force SIRF non-inertial frame mein — ground frame mein KABHI nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "ALWAYS opposite the frame's acceleration — both slips are fatal",
            "HAMESHA frame ke acceleration ke ulta — dono galtiyan jaanleva hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
