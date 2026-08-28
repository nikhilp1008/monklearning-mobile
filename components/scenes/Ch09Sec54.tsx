/**
 * Ch09 · Section 54 — "Raindrop splitting into eight droplets" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.69, 14.85, 24.41, 25.41, 26.41, 27.41]):
 *  0 title (always-on)
 *  1 text: a raindrop of radius r, terminal velocity v, splits into 8
 *  2 big drop → arrow → 8 small drops (4×2 grid) + labels
 *  3 red-margin note: terminal velocity scales as r², not r or volume
 *  4 formula (4/3)πr³ = 8×(4/3)πr'³ ⇒ r' = r/2
 *  5 formula (green) v' = v(r'/r)² = v/4
 *  6 red-margin note: 8 droplets — radius halves, speed quarters
 *
 * Layout plan:
 *  b2 | big drop (cream)         | circle | c(280,280) r40
 *  b2 | "r, v" (13)              | T mid  | x280  bl 340
 *  b2 | arrow                    | Draw   | (340,280)→(590,280)
 *  b2 | 8 small drops (cream)    | circle | cx650/690/730/770 cy255/295 r14
 *  b2 | "r/2, v/4" (13)          | T mid  | x710  bl 340
 *  b1 | text (14, script)        | T mid  | x540  bl 114
 *  b3 | margin bar (red)         | Draw   | x460  y362..386
 *  b3 | note (script 14, red)    | T st   | x476.. bl 382
 *  b4 | formula (16, w700)       | T mid  | x540  bl 415
 *  b5 | formula (19, w800, grn)  | T mid  | x540  bl 450
 *  b6 | margin bar (red)         | Draw   | x460  y475..499
 *  b6 | note (script 14, red)    | T st   | x476.. bl 495
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("NEET speed trap: splitting drop", "NEET speed trap: splitting drop")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("raindrop radius r, terminal velocity v, splits into 8", "raindrop radius r, terminal velocity v, 8 mein split hota")}
        </T>
      </Fade>

      {/* beat 2 — one drop becomes eight */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={40} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={280} y={340} size={13} fill={MUTED} anchor="middle">
          r, v
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Draw on={beat >= 2} d={arrowD(340, 280, 590, 280)} stroke={INK} sw={2.4} dur={0.5} />
      </Fade>
      {[650, 690, 730, 770].flatMap((x) =>
        [255, 295].map((y) => (
          <Fade key={`${x}-${y}`} on={beat >= 2} delay={dl(2, 2.1 + (x - 650) / 200)}>
            <Circle cx={x} cy={y} r={14} fill={CREAM} stroke={INK} strokeWidth={1.6} />
          </Fade>
        ))
      )}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={710} y={340} size={13} fill={MUTED} anchor="middle">
          r/2, v/4
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 362 L 460 386" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={382} size={14} fill={RED} script anchor="start">
          {t("terminal velocity scales as r², not r or volume", "terminal velocity r² ki tarah scale hoti, r ya volume ki nahi")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={415} size={16} fill={INK} weight={700} anchor="middle">
          (4/3)πr³ = 8×(4/3)πr′³ ⇒ r′ = r/2
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={450} size={19} fill={GREEN} weight={800} anchor="middle">
          v′ = v(r′/r)² = v/4
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 475 L 460 499" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={495} size={14} fill={RED} script anchor="start">
          {t("8 droplets: radius halves, so speed quarters", "8 droplets: radius half, isliye speed quarter")}
        </T>
      </Fade>
    </Scene>
  );
}
