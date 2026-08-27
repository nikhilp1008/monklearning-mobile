/**
 * C11 Chemistry Ch03 · Section 16 — "The mandi walk: how atomic size changes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.19, 26.97, 42.15, 56.92, 67.93, 75.01, 94.81]):
 *  0 title + underline
 *  1 across a period: 4 shrinking circles, left to right
 *  2 red-margin: poor shielding ⇒ Zeff tightens ⇒ atoms SHRINK across a period
 *  3 down a group: 4 growing circles, top to bottom
 *  4 red-margin: distance + shielding win ⇒ atoms GROW down a group
 *  5 transition: from this one picture, the rest cascades
 *  6 smaller atom ⇒ tighter grip: IE↑, EGE more negative, EN↑
 *  7 master-line box: across period vs down a group, all five properties
 *
 * Layout plan:
 *  b1 | 4 circles, r 32→14, bottom-aligned y195 | Draw | x140..432
 *  b2 | label below (13, amber_dark)  | T mid | x270  y211..224 (bl 220)
 *  b3 | 4 circles, r 14→32, stacked   | Draw | cx790 y136..337
 *  b4 | label below (13, green)       | T mid | x790  y351..364 (bl 360)
 *  b5 | transition (script 15, muted) | T mid | x?..? y377..404 (bl 396)
 *  b6 | cascade line (15,w700,ink)    | T mid | x?..? y417..433 (bl 428)
 *  b7 | master box                    | Draw  | x140..940 y448..518
 *  b7 | 2 lines inside                | T mid | x?..? y460..509 (bl 474/504)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PERIOD_R = [32, 26, 20, 14];
const PERIOD_X = [172, 262, 340, 404];
const GROUP_R = [14, 19, 25, 32];
const GROUP_Y = [150, 195, 245, 305];

export default function C11Ch03Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the mandi walk: how atomic size changes", "mandi walk: atomic size kaise badalta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — across a period: atoms shrink */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={290} y={100} size={14} weight={800} fill={AMBER_DARK}>
          {t("across a period →", "period ke across →")}
        </T>
      </Fade>
      {PERIOD_R.map((r, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.5 + i * 0.3)}>
          <Circle cx={PERIOD_X[i]} cy={195 - r} r={r} fill={AMBER} fillOpacity={0.35} stroke={AMBER_DARK} strokeWidth={2} />
        </Fade>
      ))}

      {/* beat 2 — red-margin: shrink across a period */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={270} y={220} size={13} weight={700} fill={AMBER_DARK}>
          {t("size ↓ (Zeff ↑)", "size ↓ (Zeff ↑)")}
        </T>
      </Fade>

      {/* beat 3 — down a group: atoms grow */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={790} y={100} size={14} weight={800} fill={GREEN}>
          {t("down a group ↓", "group mein neeche ↓")}
        </T>
      </Fade>
      {GROUP_R.map((r, i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, 0.5 + i * 0.3)}>
          <Circle cx={790} cy={GROUP_Y[i]} r={r} fill={GREEN} fillOpacity={0.28} stroke={GREEN} strokeWidth={2} />
        </Fade>
      ))}

      {/* beat 4 — red-margin: grow down a group */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={790} y={360} size={13} weight={700} fill={GREEN}>
          {t("size ↑", "size ↑")}
        </T>
      </Fade>

      {/* beat 5 — the transition */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={396} size={15} fill={INK} script>
          {t("from this one picture, the rest cascades", "isi ek tasveer se baaki sab cascade karta")}
        </T>
      </Fade>

      {/* beat 6 — smaller atom, tighter grip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={428} size={15} weight={700} fill={INK}>
          {t("smaller atom ⇒ tighter grip: IE↑, EGE more −, EN↑", "chhota atom ⇒ tight grip: IE↑, EGE zyada −, EN↑")}
        </T>
      </Fade>

      {/* beat 7 — the master line */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 140 448 h 800 v 70 h -800 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={474} size={15} weight={700} fill={AMBER_DARK}>
          {t("across period: size ↓, Zeff ↑, IE ↑, EGE more −, EN ↑", "period ke across: size ↓, Zeff ↑, IE ↑, EGE zyada −, EN ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={504} size={15} weight={700} fill={GREEN}>
          {t("down a group: every one of these REVERSES", "group mein neeche: ye sab REVERSE ho jaate")}
        </T>
      </Fade>
    </Scene>
  );
}
