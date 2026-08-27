/**
 * Ch02 · Section 47 — "Where the relations come from: differentiate the separation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.8, 25.5, 35.5, 60.3, 85.2, 101, 125.8]):
 *  0 title
 *  1 picture: axis, A and B dots, red separation bracket
 *  2 claim card: x_AB = x_A − x_B
 *  3 why: B sits at its own origin
 *  4 differentiate twice: the chain x → v → a
 *  5 "one fact, turning a handle" tag
 *  6 red note: relative quantities obey the same equations
 *  7 green: clear conscience — a_rel must be constant
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  axis y150 x120..960 · A (420,150) lbl bl 128 · B (760,150) lbl bl 128 ·
 *  bracket M420,170 v10 h340 v-10 · lbl cx590 bl 208
 *  b2 card x300..780 y235..295 (bl 272) · b3 lines cx540 bl 322 / 346
 *  chain st x110: bl 385 / 445 / 505 · d/dt arrows x180 + labels st x195 ·
 *  "derived" tag st x360 bl 445 (short — clears the red note)
 *  b6 | bar x520 y390..455 · lines st x536 bl 410 / 436
 *  b7 | bar x520 y475..535 · lines st x536 bl 495 / 521
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

export default function Ch02Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one line of reasoning */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "three formulas, one idea — differentiate the separation",
            "teen formulas, ek vichaar — separation ko differentiate karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the separation */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(120, 150, 960, 150)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 414 150 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 M 754 150 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={420} y={128} size={13} fill={INK} weight={700}>
          A · x_A
        </T>
        <T x={760} y={128} size={13} fill={INK} weight={700}>
          B · x_B
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d="M 420 170 v 10 h 340 v -10"
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={590} y={208} size={12} fill={RED} script>
          {t("x_A − x_B — the separation", "x_A − x_B — beech ka faasla")}
        </T>
      </Fade>

      {/* beat 2 — the claim */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 312 235 h 456 q 12 0 12 12 v 36 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={272} size={20} fill={INK} weight={800}>
          x_AB = x_A − x_B
        </T>
      </Fade>

      {/* beat 3 — what 'as seen by B' means */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={322} size={12} fill={AMBER_DARK} script>
          {t(
            "not a new assumption — it is what 'as seen by B' MEANS",
            "koi nayi maanya-ta nahi — 'B ki nazar se' ka MATLAB hi yahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={540} y={346} size={12} fill={MUTED} script>
          {t(
            "B sits at its own origin — B is always right where B is",
            "B apne hi origin par baitha hai — B hamesha wahin hai jahan B hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — turn the handle */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={110} y={385} size={15} fill={INK} anchor="start" weight={700}>
          x_AB = x_A − x_B
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={arrowD(180, 395, 180, 420)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={195} y={412} size={11} fill={GREEN} script anchor="start">
          d⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={110} y={445} size={15} fill={INK} anchor="start" weight={700}>
          v_AB = v_A − v_B
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 9)}
        d={arrowD(180, 455, 180, 480)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 9.6)}>
        <T x={195} y={472} size={11} fill={GREEN} script anchor="start">
          d⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={110} y={505} size={15} fill={INK} anchor="start" weight={700}>
          a_AB = a_A − a_B
        </T>
      </Fade>

      {/* beat 5 — one fact, a handle */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={360} y={445} size={11} fill={GREEN} script anchor="start">
          {t("derived, not assumed", "nikaala hai, maana nahi")}
        </T>
      </Fade>

      {/* beat 6 — the legitimacy */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 520 390 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={536} y={410} size={13} fill={RED} script anchor="start">
          {t(
            "relative quantities obey the SAME equations of motion",
            "relative quantities WAHI equations of motion maante hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={536} y={436} size={13} fill={RED} script anchor="start">
          {t(
            "differences of things that obey them, obey them too",
            "jo cheezein inhe maanti hain, unke antar bhi maante hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — clear conscience, with the stamp */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 520 475 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={536} y={495} size={13} fill={GREEN} script anchor="start">
          {t(
            "so write v_rel = u_rel + a_rel·t with a clear conscience",
            "to v_rel = u_rel + a_rel·t saaf dil se likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={536} y={521} size={13} fill={GREEN} script anchor="start">
          {t(
            "the stamp rides along: a_rel must be CONSTANT",
            "stamp saath chalti hai: a_rel CONSTANT hona chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
