/**
 * Ch08 · Section 26 — "Pitfalls and the spring-picture pro-tip"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Subtopic 2 wrap-up: 4 pitfall cards (2×2) + a pro-tip box + closing line.
 * Note: hi beats 1..4 are ~1s each — short delays there.
 *
 * Beats (en [0, 6.14, 24.06, 39.59, 53.16, 71.34, 84.91]):
 *  0 title only
 *  1 card ① don't average series Y
 *  2 card ② gas has no fixed B
 *  3 card ③ only 2 of 4 independent
 *  4 card ④ k ≠ Y (geometry vs material)
 *  5 pro-tip box: redraw wires as springs, use spring rules
 *  6 closing line: unfamiliar problem → Class 11 spring problem
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b1 | card1 box          | Draw | x60..530 y130..215
 *  b1 | title1/sub1        | T st | x80 bl160/185
 *  b2 | card2 box          | Draw | x560..1030 y130..215
 *  b2 | title2/sub2        | T st | x580 bl160/185
 *  b3 | card3 box          | Draw | x60..530 y225..310
 *  b3 | title3/sub3        | T st | x80 bl255/280
 *  b4 | card4 box          | Draw | x560..1030 y225..310
 *  b4 | title4/sub4        | T st | x580 bl255/280
 *  b5 | protip box         | Draw | x60..1030 y330..435
 *  b5 | "PRO-TIP"/text/formula | T st | x80 bl360/390/422
 *  b6 | closing (14)       | T mid| x~ bl460
 *  b6 | underline          | Draw | x420..660 y472..476
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("pitfalls and one pro-tip", "pitfalls aur ek pro-tip")}
        </T>
      </Fade>

      {/* beat 1 — card 1: don't average series Y */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M72 130 h446 q12 0 12 12 v49 q0 12 -12 12 h-446 q-12 0 -12 -12 v-49 q0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={160} size={15} fill={RED} weight={800} anchor="start">
          {t("① don't average series Y", "① series Y average mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={80} y={185} size={12} fill={MUTED} script anchor="start">
          {t("use 2Y₁Y₂/(Y₁+Y₂), not (Y₁+Y₂)/2", "2Y₁Y₂/(Y₁+Y₂) use karo, (Y₁+Y₂)/2 nahi")}
        </T>
      </Fade>

      {/* beat 2 — card 2: gas has no fixed B */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.1)}
        d="M572 130 h446 q12 0 12 12 v49 q0 12 -12 12 h-446 q-12 0 -12 -12 v-49 q0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={580} y={160} size={15} fill={RED} weight={800} anchor="start">
          {t("② gas has no fixed B", "② gas ka fixed B nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={580} y={185} size={12} fill={MUTED} script anchor="start">
          {t("ask: isothermal B=P or adiabatic B=γP", "puchho: isothermal B=P ya adiabatic B=γP")}
        </T>
      </Fade>

      {/* beat 3 — card 3: only 2 of 4 independent */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.1)}
        d="M72 225 h446 q12 0 12 12 v49 q0 12 -12 12 h-446 q-12 0 -12 -12 v-49 q0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={80} y={255} size={15} fill={RED} weight={800} anchor="start">
          {t("③ only 2 of 4 independent", "③ 4 mein sirf 2 independent")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={80} y={280} size={12} fill={MUTED} script anchor="start">
          {t("don't treat Y,B,η,ν as 4 free numbers", "Y,B,η,ν ko 4 free numbers mat maano")}
        </T>
      </Fade>

      {/* beat 4 — card 4: k ≠ Y */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M572 225 h446 q12 0 12 12 v49 q0 12 -12 12 h-446 q-12 0 -12 -12 v-49 q0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={580} y={255} size={15} fill={RED} weight={800} anchor="start">
          {t("④ k ≠ Y", "④ k ≠ Y")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={280} size={12} fill={MUTED} script anchor="start">
          {t("k=YA/L is geometry; Y is material only", "k=YA/L geometry hai; Y sirf material ki")}
        </T>
      </Fade>

      {/* beat 5 — the pro-tip box */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M72 330 h946 q12 0 12 12 v81 q0 12 -12 12 h-946 q-12 0 -12 -12 v-81 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={80} y={360} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          PRO-TIP
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={80} y={390} size={15} fill={INK} weight={600} anchor="start">
          {t("redraw connected wires as springs — use the spring rules", "connected wires ko springs ki tarah redraw karo — spring rules use karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={80} y={418} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          k = YA / L
        </T>
      </Fade>

      {/* beat 6 — closing line */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={460} size={14} fill={GREEN} script>
          {t("unfamiliar elasticity problem → Class 11 spring problem", "anjaan elasticity problem → Class 11 spring problem")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M420 474 Q540 478 660 474" stroke={GREEN} sw={1.6} dur={0.3} />
    </Scene>
  );
}
