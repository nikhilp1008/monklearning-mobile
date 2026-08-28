/**
 * Ch08 · Section 62 — "Pitfalls and the power-law pro-tip"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Subtopic 5 wrap-up: 4 pitfall cards (2×2) + a pro-tip box + closing line.
 * Note: hi beats 2..4 are ~1s apart — short delays there.
 *
 * Beats (en [0, 6.74, 22.27, 42.75, 58.37, 76.71, 89.94]):
 *  0 title only
 *  1 card ① thermal stress has no length
 *  2 card ② Ig is the area moment, not the rotational one
 *  3 card ③ depth cubed, breadth linear — not equal partners
 *  4 card ④ beam stiffness & torsion both scale as r⁴
 *  5 pro-tip box: dimension changes? write the power law, take the ratio
 *  6 closing line: most questions just test the exponent
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

export default function Ch08Sec62({ currentTime, reveals, language }: SceneProps) {
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

      {/* beat 1 — card 1: thermal stress has no length */}
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
          {t("① thermal stress has no length", "① thermal stress mein length nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={80} y={185} size={12} fill={MUTED} script anchor="start">
          {t("length sets prevented expansion, not stress", "length prevented expansion tay karti, stress nahi")}
        </T>
      </Fade>

      {/* beat 2 — card 2: Ig is the area moment */}
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
          {t("② Ig is area moment, not rotational", "② Ig area moment hai, rotational nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={580} y={185} size={12} fill={MUTED} script anchor="start">
          {t("∫y²dA in m⁴ — not Σmr² from mechanics", "∫y²dA m⁴ mein — Σmr² se alag")}
        </T>
      </Fade>

      {/* beat 3 — card 3: depth and breadth are not equal partners */}
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
          {t("③ depth cubed, breadth only linear", "③ depth cubed, breadth sirf linear")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={80} y={280} size={12} fill={MUTED} script anchor="start">
          {t("doubling depth is 8× doubling breadth", "depth double karna breadth se 8× asardar")}
        </T>
      </Fade>

      {/* beat 4 — card 4: both scale as r⁴ */}
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
          {t("④ stiffness & torsion both scale r⁴", "④ stiffness aur torsion dono r⁴")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={280} size={12} fill={MUTED} script anchor="start">
          {t("small radius changes, outsized effects", "chhota radius change, bada asar")}
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
          {t("dimension changes in the question? skip the recompute —", "sawaal mein dimension badla? recompute skip karo —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={80} y={418} size={18} fill={AMBER_DARK} weight={700} anchor="start">
          {t("write the power law, take the ratio", "power law likho, ratio nikalo")}
        </T>
      </Fade>

      {/* beat 6 — closing line */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={460} size={14} fill={GREEN} script>
          {t("most questions just test whether you know the exponent", "zyada sawaal bas exponent test karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M420 474 Q540 478 660 474" stroke={GREEN} sw={1.6} dur={0.3} />
    </Scene>
  );
}
