/**
 * Ch06 · Section 63 — "Rolling energy and the incline acceleration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,10.67,20.57,32.94,47.45,60.67,61.67,62.67] — b5,b6,b7 fast in EN;
 * hi [0,1,2,13.09,28.28,41.17,55.85,73.85] — b0,b1 fast in HI →
 * b0,b1,b5,b6,b7 kept ≤0.9 s; b2,b3,b4 have room in both):
 *  0 title + subline
 *  1 figure: Mgh at the top → K at the bottom
 *  2 K = ½Mv² + ½Iω², ω = v/R
 *  3 = ½Mv²(1 + I/MR²)
 *  4 Mgh = ½Mv²(1 + K²/R²)
 *  5 mass cancels — v set by h and shape alone
 *  6 force method agrees: a = gsinθ/(1+I/MR²)
 *  7 deep result: shape decides, never size — marble ties boulder
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle top c(200,140) r35 "Mgh" cx200 bl148 · arrow (200,178)→(200,222) ·
 *       circle bottom c(200,260) r35 "K" cx200 bl268 ·
 *       caption script11 cx200 bl320
 *  b2 | sans14 st x340 bl springs 150
 *  b3 | sans14 st x340 bl springs 185
 *  b4 | sans14 st x340 bl springs 225
 *  b5 | script13 cx540 bl springs 400
 *  b6 | script13 cx540 bl springs 435
 *  b7 | script13 cx540 bl springs 475 · underline y springs 495 x springs 300..780
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two derivations that power all of rolling */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "rolling energy and the incline acceleration",
            "rolling energy aur incline ka acceleration"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "energy route in full — force route by comparison",
            "energy route poora — force route comparison se"
          )}
        </T>
      </Fade>

      {/* beat 1 — the energy bookkeeping */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 165 140 a 35 35 0 1 0 70 0 a 35 35 0 1 0 -70 0"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={200} y={148} size={14} fill={INK} weight={700}>
          Mgh
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={arrowD(200, 178, 200, 222)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.55)}
        d="M 165 260 a 35 35 0 1 0 70 0 a 35 35 0 1 0 -70 0"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={200} y={268} size={16} fill={GREEN_DARK} weight={700}>
          K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={200} y={320} size={11} fill={MUTED} script>
          {t("height energy → rolling KE", "height energy → rolling KE")}
        </T>
      </Fade>

      {/* beat 2 — the total KE and the rolling condition */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={340} y={150} size={14} fill={INK} anchor="start" weight={700}>
          K = ½Mv² + ½Iω² ,   ω = v/R
        </T>
      </Fade>

      {/* beat 3 — factor it */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={340} y={185} size={14} fill={INK} anchor="start" weight={700}>
          = ½Mv²(1 + I/MR²)
        </T>
      </Fade>

      {/* beat 4 — energy conservation on the incline */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={340} y={225} size={14} fill={INK} anchor="start" weight={700}>
          Mgh = ½Mv²(1 + K²/R²)
        </T>
      </Fade>

      {/* beat 5 — mass cancels (fast) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={13} fill={GREEN_DARK} script>
          {t(
            "mass cancels — v is set by h and shape alone",
            "mass cancel — v sirf h aur shape tay karte"
          )}
        </T>
      </Fade>

      {/* beat 6 — the force method agrees (fast) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={435} size={13} fill={INK} script>
          {t(
            "force method: a = gsinθ/(1+I/MR²) — both agree perfectly",
            "force method: a = gsinθ/(1+I/MR²) — dono bilkul milte"
          )}
        </T>
      </Fade>

      {/* beat 7 — the deep result (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={475} size={13} fill={GREEN_DARK} script>
          {t(
            "shape decides, never size — a marble ties a boulder of the same shape",
            "shape tay karta, size kabhi nahi — ek marble aur boulder barabar aate"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 495 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
