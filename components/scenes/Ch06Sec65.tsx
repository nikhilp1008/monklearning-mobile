/**
 * Ch06 · Section 65 — "Worked example: the race down an incline [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,14.43,26.64,34.15,45.5]; hi [0,12.54,19.03,20.03,21.03,
 * 22.03,23.03,24.03] — b0,b1 fast in EN, b2..b7 fast in HI → ALL kept ≤0.9 s):
 *  0 title + subline
 *  1 figure: incline, ring behind, disc middle, sphere ahead
 *  2 trap: mass & radius don't matter — only I/MR² decides
 *  3 a = gsinθ/(1+I/MR²) — smaller factor = faster
 *  4 rank: ring=1 > disc=½ > sphere=2/5
 *  5 order REVERSES the ranking
 *  6 green box: sphere 5/7 > disc ⅔ > ring ½ (×gsinθ)
 *  7 finish order: sphere, disc, ring — every time
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | hyp (100,150)→(350,280) · ring (annulus) c(150,176) r15/11 "ring" cx150 bl200 ·
 *       disc (hatched) c(225,215) r15 "disc" cx225 bl239 ·
 *       sphere (dotted) c(300,254) r15 "sphere" cx300 bl278 · "1st" st(320,258)
 *  b2 | script13 cx540 bl310
 *  b3 | sans14 cx540 bl340
 *  b4 | sans14 cx540 bl370
 *  b5 | script13 cx540 bl400
 *  b6 | green box x springs 560..1000 y springs 425..475 cx780 bl springs 455
 *  b7 | script13 cx540 bl springs 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the classic conceptual trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "the race down an incline [NEET speed trap]",
            "incline se neeche race [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "ring, disc, sphere — released together — finish order?",
            "ring, disc, sphere — saath chhode — finish order?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the ending, given away */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 100 150 L 350 280" stroke={INK} sw={2.2} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 135 176 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0 M 139 176 a 11 11 0 1 0 22 0 a 11 11 0 1 0 -22 0"
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={150} y={205} size={11} fill={MUTED} script>
          ring
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.45)}
        d="M 210 215 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0 M 218 202 v 26 M 225 200 v 30 M 232 202 v 26"
        stroke={INK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.55)}>
        <T x={225} y={244} size={11} fill={MUTED} script>
          disc
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 285 254 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0 M 292 248 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 M 302 250 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0 M 296 260 a 2 2 0 1 0 4 0 a 2 2 0 1 0 -4 0"
        stroke={INK}
        fill={INK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={300} y={283} size={11} fill={GREEN_DARK} script>
          sphere
        </T>
        <T x={322} y={258} size={11} fill={GREEN_DARK} anchor="start" weight={700}>
          1st!
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={310} size={13} fill={INK} script>
          {t(
            "TRAP: mass and radius don't matter — only I/MR² decides",
            "TRAP: mass aur radius matter nahi — sirf I/MR² tay karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={340} size={14} fill={INK} weight={700}>
          a = gsinθ/(1+I/MR²) — {t("smaller factor = faster", "chhota factor = tez")}
        </T>
      </Fade>

      {/* beat 4 — rank the factors */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={370} size={14} fill={INK} weight={700}>
          {t("ring: 1 > disc: ½ > sphere: 2/5", "ring: 1 > disc: ½ > sphere: 2/5")}
        </T>
      </Fade>

      {/* beat 5 — the reversal */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={13} fill={GREEN_DARK} script>
          {t(
            "smaller factor → bigger a — the finish order REVERSES this ranking",
            "chhota factor → bada a — finish order is ranking ko ULTA deta"
          )}
        </T>
      </Fade>

      {/* beat 6 — the numbers */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 560 425 h 440 q 12 0 12 12 v 26 q 0 12 -12 12 h -440 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={780} y={455} size={14} fill={INK} weight={700}>
          {t(
            "sphere: 5/7 > disc: 2/3 > ring: ½  (×gsinθ)",
            "sphere: 5/7 > disc: 2/3 > ring: ½  (×gsinθ)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the finish order, every time */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={505} size={13} fill={GREEN_DARK} script>
          {t(
            "sphere → disc → ring, every single time — no matter the mass or size",
            "sphere → disc → ring, har baar — mass ya size kuch bhi ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
