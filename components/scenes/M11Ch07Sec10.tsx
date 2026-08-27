/**
 * M11 Ch07 · Section 10 — "Middle term and independent term — the intuition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. 7 board_content items, seq1 = title (sections 1-5 pattern).
 *
 * Beats (en [0, 7.77, 30.12, 41.64, 62.04, 76.03, 96.34]):
 *  0 title (always-on)
 *  1 seat diagram: n+1 seats, middle = centre seat(s) — n even (1 middle) vs n odd (2)
 *  2 independent term definition: net power of x collapses to 0
 *  3 diagram: tug-of-war on the exponent of x, arrows meet at "net = 0"
 *  4 red-margin HIGH: r must be an integer, 0≤r≤n
 *  5 red-margin HIGH: never round r
 *  6 red-margin: positive-index expansion need not have every power
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, INK, MUTED, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROW1 = [180, 220, 260, 300, 340, 380, 420]; // n=6 (even), 7 seats, middle idx 3
const ROW2 = [650, 690, 730, 770, 810, 850]; // n=5 (odd), 6 seats, middles idx 2,3

export default function M11Ch07Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("where do the middle and constant terms sit?", "middle aur constant term kahaan baithte hain?")}
        </T>
      </Fade>

      {/* beat 1 — seat diagrams */}
      {ROW1.map((x, i) => (
        <Fade key={`r1-${i}`} on={beat >= 1} delay={dl(1, 0.2 + i * 0.12)}>
          <Circle cx={x} cy={108} r={7} fill={i === 3 ? GREEN : "none"} stroke={i === 3 ? GREEN : INK} strokeWidth={2} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={300} y={140} size={14} fill={GREEN_DARK} script>
          {t("n=6 (even) → 1 middle", "n=6 (even) → 1 middle")}
        </T>
      </Fade>
      {ROW2.map((x, i) => (
        <Fade key={`r2-${i}`} on={beat >= 1} delay={dl(1, 1.6 + i * 0.12)}>
          <Circle
            cx={x}
            cy={108}
            r={7}
            fill={i === 2 || i === 3 ? GREEN : "none"}
            stroke={i === 2 || i === 3 ? GREEN : INK}
            strokeWidth={2}
          />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={750} y={140} size={14} fill={GREEN_DARK} script>
          {t("n=5 (odd) → 2 middles", "n=5 (odd) → 2 middles")}
        </T>
      </Fade>

      {/* beat 2 — independent term definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={185} size={16} fill={INK} script>
          {t("independent term: net power of x → 0 (a pure number)", "independent term: x ki net power → 0 (pure number)")}
        </T>
      </Fade>

      {/* beat 3 — tug-of-war diagram */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(230, 250, 500, 250)} stroke={GREEN_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={280} y={230} size={14} fill={GREEN_DARK} script anchor="start">
          {t("a^(n-r): pulls power up", "a^(n-r): power upar khinchta")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(850, 250, 580, 250)} stroke={RED} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={800} y={230} size={14} fill={RED} script anchor="end">
          {t("b^r: pulls power down", "b^r: power neeche khinchta")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={ringD(540, 250, 26, 20)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={540} y={295} size={15} fill={INK} script>
          {t("net power = 0  ⇒  solve for r", "net power = 0  ⇒  r nikaalo")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: integer constraint */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 150 340 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={170} y={362} size={16} fill={RED} script anchor="start">
          {t("the solved r MUST be an integer, 0 ≤ r ≤ n", "solved r ek integer HONA CHAHIYE, 0 ≤ r ≤ n")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: never round */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 395 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={417} size={16} fill={RED} script anchor="start">
          {t("never round r to force an answer — heavily punished", "r ko round mat karo answer ke liye — bahut punish hota")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: no guarantee of every power */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 450 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={472} size={15} fill={RED} script anchor="start">
          {t("an expansion need not have a constant term, or every power", "expansion mein constant term, ya har power, zaroori nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
