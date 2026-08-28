/**
 * Ch08 · Section 50 — "Pitfalls and the read-in-order pro-tip"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Subtopic 4 wrap-up: 4 pitfall cards (2×2) + a pro-tip box + closing line.
 * Note: en beats 1..6 are all ~1s apart — short delays throughout.
 *
 * Beats (en [0, 5.29, 6.29, 7.29, 8.29, 9.29, 10.29]):
 *  0 title only
 *  1 card ① ductility ≠ malleability ≠ elasticity
 *  2 card ② "rubber>steel" is loose talk, not physics
 *  3 card ③ slope=Y; areas are energies
 *  4 card ④ yielding ≠ breaking
 *  5 pro-tip box: decode in order — slope, height, reach, area
 *  6 closing line: the checklist stops the bundling
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b1 | card1 box          | Draw | x60..530 y130..215
 *  b2 | card2 box          | Draw | x560..1030 y130..215
 *  b3 | card3 box          | Draw | x60..530 y225..310
 *  b4 | card4 box          | Draw | x560..1030 y225..310
 *  b5 | protip box         | Draw | x60..1030 y330..435
 *  b6 | closing (14)       | T mid| x~ bl460
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

export default function Ch08Sec50({ currentTime, reveals, language }: SceneProps) {
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

      {/* beat 1 — card 1: three distinct properties */}
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
          {t("① ductility ≠ malleability ≠ elasticity", "① ductility ≠ malleability ≠ elasticity")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={80} y={185} size={12} fill={MUTED} script anchor="start">
          {t("wires/tension, sheets/compression, recovery", "wires/tension, sheets/compression, recovery")}
        </T>
      </Fade>

      {/* beat 2 — card 2: the loose everyday claim */}
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
          {t("② rubber>steel is loose talk", "② rubber>steel loose baat hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={580} y={185} size={12} fill={MUTED} script anchor="start">
          {t("by Young's modulus, steel is more elastic", "Young's modulus se, steel zyada elastic")}
        </T>
      </Fade>

      {/* beat 3 — card 3: slope vs area */}
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
          {t("③ slope=Y; areas are energies", "③ slope=Y; areas energies hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={80} y={280} size={12} fill={MUTED} script anchor="start">
          {t("resilience to yield, toughness to fracture", "resilience yield tak, toughness fracture tak")}
        </T>
      </Fade>

      {/* beat 4 — card 4: yielding is not breaking */}
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
          {t("④ yielding ≠ breaking", "④ yielding ≠ breaking")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={280} size={12} fill={MUTED} script anchor="start">
          {t("plastic range still carries load", "plastic range mein bhi load chalta")}
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
          {t("decode each property from one feature, in order —", "har property ko ek feature se padho, isi order mein —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={80} y={418} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          slope→stiff, height→strong, reach→ductile, area→tough
        </T>
      </Fade>

      {/* beat 6 — closing line */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={460} size={14} fill={GREEN} script>
          {t("a fixed checklist stops the bundling", "fixed checklist bundling rok deta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M420 474 Q540 478 660 474" stroke={GREEN} sw={1.6} dur={0.3} />
    </Scene>
  );
}
