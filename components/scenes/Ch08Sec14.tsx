/**
 * Ch08 · Section 14 — "Pitfalls and the same-material pro-tip"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Subtopic 1 wrap-up: 4 pitfall cards (2×2) + a pro-tip box + closing line.
 *
 * Beats (en [0, 6.4, 23.98, 36.61, 48.47, 49.47, 50.47, 62.59]):
 *  0 title only
 *  1 card ① radius vs DIAMETER
 *  2 card ② stretch ≠ elastic
 *  3 card ③ strain: no units
 *  4 card ④ don't drop the ½ (short beat)
 *  5 pro-tip box: label + text (short beat)
 *  6 pro-tip formula: ΔL ∝ L/r²
 *  7 closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b1 | card1 box          | Draw | x60..530 y130..215
 *  b1 | title1 (15)        | T st | x80..~330 bl160 (y145..164)
 *  b1 | sub1 (12)          | T st | x80..~400 bl185 (y170..191)
 *  b2 | card2 box          | Draw | x560..1030 y130..215
 *  b2 | title2 (15)        | T st | x580..~810 bl160 (y145..164)
 *  b2 | sub2 (12)          | T st | x580..~800 bl185 (y170..191)
 *  b3 | card3 box          | Draw | x60..530 y225..310
 *  b3 | title3 (15)        | T st | x80..~300 bl255 (y240..259)
 *  b3 | sub3 (12)          | T st | x80..~370 bl280 (y265..286)
 *  b4 | card4 box          | Draw | x560..1030 y225..310
 *  b4 | title4 (15)        | T st | x580..~810 bl255 (y240..259)
 *  b4 | sub4 (12)          | T st | x580..~940 bl280 (y265..286)
 *  b5 | protip box         | Draw | x60..1030 y330..435
 *  b5 | "PRO-TIP" (14)     | T st | x80..~180 bl360 (y349..364)
 *  b5 | tip text (15)      | T st | x80..~640 bl390 (y378..396)
 *  b6 | formula (16)       | T st | x80..~430 bl422 (y410..428)
 *  b7 | closing (14)       | T mid| x374..706 bl460 (y442..467)
 *  b7 | underline          | Draw | x420..660 y472..476
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

export default function Ch08Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("common pitfalls and one pro-tip", "common pitfalls aur ek pro-tip")}
        </T>
      </Fade>

      {/* beat 1 — card 1: radius vs diameter */}
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
          {t("① radius vs DIAMETER", "① radius vs DIAMETER")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={80} y={185} size={12} fill={MUTED} script anchor="start">
          {t("halve before squaring — else area off ×4", "square se pehle aadha kariye — warna area ×4 galat")}
        </T>
      </Fade>

      {/* beat 2 — card 2: stretch ≠ elastic */}
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
          {t("② stretch ≠ elastic", "② stretch ≠ elastic")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={580} y={185} size={12} fill={MUTED} script anchor="start">
          {t("higher Young's modulus = more elastic", "zyada Young's modulus = zyada elastic")}
        </T>
      </Fade>

      {/* beat 3 — card 3: strain has no units */}
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
          {t("③ strain: NO units", "③ strain: NO units")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={80} y={280} size={12} fill={MUTED} script anchor="start">
          {t("pure ratio — never pascals or metres", "pure ratio — kabhi pascals ya metres nahi")}
        </T>
      </Fade>

      {/* beat 4 — card 4: don't drop the half (short beat) */}
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
          {t("④ don't drop the ½", "④ ½ mat girao")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={280} size={12} fill={MUTED} script anchor="start">
          {t("energy=½FΔL, self-weight L_eff=L/2", "energy=½FΔL, self-weight L_eff=L/2")}
        </T>
      </Fade>

      {/* beat 5 — the pro-tip box (short beat) */}
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
          {t("PRO-TIP", "PRO-TIP")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={80} y={390} size={15} fill={INK} weight={600} anchor="start">
          {t("same material? never compute Y — reduce to a proportionality", "same material? Y kabhi compute mat kariye — proportionality banaiye")}
        </T>
      </Fade>

      {/* beat 6 — the working formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={80} y={422} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          ΔL ∝ L / r² (or FL / r²)
        </T>
      </Fade>

      {/* beat 7 — closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={460} size={14} fill={GREEN} script>
          {t("a 30-second ratio beats a messy calculation", "30-second ratio messy calculation se behtar")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M420 474 Q540 478 660 474" stroke={GREEN} sw={1.6} dur={0.3} />
    </Scene>
  );
}
