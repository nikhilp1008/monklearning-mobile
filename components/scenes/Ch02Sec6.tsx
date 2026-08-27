/**
 * Ch02 · Section 6 — "The two inequalities that never break"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.9, 37, 57.9, 80.2, 101.2, 122.8, 138]):
 *  0 title — the fences
 *  1 1-D line with − / + ends · "direction collapses to ±"
 *  2 box 1: distance ≥ |displacement| · "no shortcut shorter than the shortcut"
 *  3 box 2: avg speed ≥ |avg velocity| · ÷ total time arrow between boxes
 *  4 green panel: straight one-way · '=' fires
 *  5 red panel: out-and-partly-back · '>' forever
 *  6 red note: ineq2 = ineq1 ÷ total time
 *  7 green ✓ + one-line error-catch verdict
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | line y130 x220..700 · "−" end (205,136) · "+" st (715,136) · note cx460 bl 162
 *  b2 | box x180..540 y198..272 · formula cx360 bl 232 · sub cx360 bl 260
 *  b3 | box x640..1030 y198..272 · formula cx835 bl 232 · sub cx835 bl 260 ·
 *       arrow (545,235)→(635,235) · "÷ total time" cx590 bl 218
 *  b4 | header cx295 bl 322 · A(130,380) B(460,380) arrow between · verdict bl 425 · note bl 452
 *  b5 | header cx800 bl 322 · out (620,370)→(980,370) · back (980,395)→(800,395) ·
 *       verdict cx800 bl 425 · note cx800 bl 452
 *  b6 | bar x66 y486..534 · lines st x84 bl 504 / 528
 *  b7 | ✓ at (243,578) · line cx540 bl 580
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — collect the fences */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t(
            "the two fences — free checks on every answer",
            "do baad — har jawaab par muft jaanch"
          )}
        </T>
      </Fade>

      {/* beat 1 — one dimension, one sign */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 220 130 H 700"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={205} y={136} size={18} fill={INK} anchor="end" weight={800}>
          −
        </T>
        <T x={715} y={136} size={18} fill={INK} anchor="start" weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={460} y={162} size={13} fill={MUTED} script>
          {t(
            "1-D: a direction collapses to a ± sign",
            "1-D: direction sirf ek ± sign ban jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the first inequality */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 192 198 h 336 q 12 0 12 12 v 50 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -50 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={360} y={232} size={24} fill={INK} weight={800}>
          distance ≥ |displacement|
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={360} y={260} size={13} fill={AMBER_DARK} script>
          {t(
            "no shortcut shorter than the shortcut",
            "shortcut se chhota koi shortcut nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — divide by the shared time */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(545, 235, 635, 235)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={590} y={218} size={12} fill={AMBER_DARK} script>
          {t("÷ total time", "÷ total time")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d="M 652 198 h 366 q 12 0 12 12 v 50 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -50 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={835} y={232} size={22} fill={INK} weight={800}>
          avg speed ≥ |avg velocity|
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={835} y={260} size={12} fill={MUTED} script>
          {t("same total time underneath both", "dono ke neeche wahi total time")}
        </T>
      </Fade>

      {/* beat 4 — when '=' fires */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={295} y={322} size={14} fill={GREEN} script>
          {t("straight, one-way — the '=' case", "seedha, ek hi disha — '=' wala case")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d="M 125 380 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 455 380 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={arrowD(140, 380, 448, 380)}
        stroke={GREEN}
        sw={2.8}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={295} y={425} size={15} fill={GREEN} weight={700}>
          distance = |displacement|
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={295} y={452} size={12} fill={MUTED} script>
          {t(
            "path never leaves the straight gap",
            "raasta seedhe gap se hata hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the reversal breaks it forever */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={800} y={322} size={14} fill={RED} script>
          {t("out and partly back — '>' forever", "aage jaake thoda waapas — hamesha '>'")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d={arrowD(620, 370, 980, 370)}
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.4)}
        d={arrowD(980, 395, 800, 395)}
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={800} y={425} size={15} fill={RED} weight={700}>
          {t("distance > |displacement|", "distance > |displacement|")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={800} y={452} size={12} fill={MUTED} script>
          {t(
            "reverse ⇒ distance adds, displacement subtracts",
            "palte hi distance judta hai, displacement ghat'ta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — one fact, not two */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 486 v 48" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={504} size={14} fill={RED} script anchor="start">
          {t(
            "inequality #2 = inequality #1 ÷ (same total time) —",
            "inequality #2 = inequality #1 ÷ (wahi total time) —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={84} y={528} size={14} fill={RED} script anchor="start">
          {t(
            "learn the distance one properly, the speed one is automatic",
            "distance wali achhi tarah seekho, speed wali apne aap"
          )}
        </T>
      </Fade>

      {/* beat 7 — free error-catchers */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 243 578 l 6 7 l 12 -14"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={580} size={13} fill={GREEN} script>
          {t(
            "distance < |displacement| in your answer? you slipped a sign — caught for free",
            "jawaab mein distance < |displacement|? sign phisla hai — muft mein pakda gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
