/**
 * M11 Ch05 · Section 10 — "Worked example: intersect two solutions, then count integers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,18.52,29.78,43.86,54.27,65.71,73.73,89.17], hi
 * [0,16.73,30.04,47.7,57.69,66.9,74.84,88.75]) — one shared number line,
 * built up: two amber half-shades (one per inequality) overlap into a green
 * intersection bar, then integers inside it get counted:
 *  0 heading: the problem — 3x-2>4 AND 2(x-1)≤x+3
 *  1 formula: 3x-2>4 ⇒ 3x>6 ⇒ x>2
 *  2 formula: 2x-2≤x+3 ⇒ x≤5
 *  3 text: both must be true → intersect (caption + axis drawn)
 *  4 formula (high): x>2 and x≤5 ⇒ x∈(2,5] — amber shades + green overlap bar
 *  5 text: translate continuous interval to integers (caption)
 *  6 note (red-margin, high): 2 excluded, 5 included → integers 3,4,5 (2 dots)
 *  7 formula: count=3, sum=3+4+5=12 (boxed)
 *
 * Layout plan:
 *  b0 | problem (20,ink,w800)     | T mid | bl 110
 *  b1 | formula (18,ink,w700)     | T mid | bl 148
 *  b2 | formula (18,ink,w700)     | T mid | bl 184
 *  b3 | caption (15,muted,scr)    | T mid | bl 230 · axis x300..790 y280
 *  b4 | amber shades ×2, dots     | Draw  | y280 · overlay green y300 x460..640
 *  b4 | numerals "2"/"5" (13,muted)| T mid | x460/640 bl328
 *  b4 | boxed "x∈(2,5]" (green)   | Chip  | x460..620 y355..395
 *  b5 | caption (15,muted,scr)    | T mid | bl 430
 *  b6 | 2 red dots (3,4)          | circle| x520/580 y255
 *  b6 | caption (15,red,scr)      | T mid | bl 475
 *  b7 | boxed count/sum (green)   | Chip  | x340..740 y495..545
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot, lineD } from "./math-kit";

const VAL_X0 = 340;
const STEP = 60;
const X2 = VAL_X0 + 2 * STEP; // 460
const X5 = VAL_X0 + 5 * STEP; // 640

export default function M11Ch05Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("intersect first, then count the integers", "pehle intersect karo, phir integers count karo")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={20} fill={INK} weight={800}>
          3x - 2 &gt; 4 &nbsp; and &nbsp; 2(x - 1) ≤ x + 3
        </T>
      </Fade>

      {/* beat 1 — solve the first */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={148} size={18} fill={INK} weight={700}>
          3x - 2 &gt; 4 ⇒ 3x &gt; 6 ⇒ x &gt; 2
        </T>
      </Fade>

      {/* beat 2 — solve the second */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={184} size={18} fill={INK} weight={700}>
          2x - 2 ≤ x + 3 ⇒ x ≤ 5
        </T>
      </Fade>

      {/* beat 3 — both must be true: intersect */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={230} size={15} fill={MUTED} script>
          {t("both must be true → intersect", "dono true chahiye → intersect karo")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={axisD(300, 790, 280)} stroke={INK} sw={2} dur={0.8} />

      {/* beat 4 — the intersection, shown live */}
      <IntervalDot on={beat >= 4} delay={dl(4, 0.3)} x={X2} y={280} open={true} r={5} stroke={AMBER} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={lineD(X2, 280, 780, 280)} stroke={AMBER} sw={5} dur={0.6} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.5)} x={X5} y={280} open={false} r={5} stroke={AMBER} />
      <Draw on={beat >= 4} delay={dl(4, 2.0)} d={lineD(X5, 280, 310, 280)} stroke={AMBER} sw={5} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={lineD(X2, 300, X5, 300)} stroke={GREEN} sw={6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={X2} y={328} size={13} fill={MUTED}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={X5} y={328} size={13} fill={MUTED}>
          5
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <Chip x={460} y={355} w={160} h={40} fill={GREEN} textFill="#fff" size={19} script={false}>
          x ∈ (2, 5]
        </Chip>
      </Fade>

      {/* beat 5 — translate to integers */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={430} size={15} fill={MUTED} script>
          {t("now translate to integers", "ab integers mein translate karo")}
        </T>
      </Fade>

      {/* beat 6 — the boundary rule, and the integers it selects */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Circle cx={520} cy={255} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={580} cy={255} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={475} size={15} fill={RED} script>
          {t("2 excluded, 5 included → integers 3, 4, 5", "2 excluded, 5 included → integers 3, 4, 5")}
        </T>
      </Fade>

      {/* beat 7 — count and sum */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={340} y={495} w={400} h={50} fill={GREEN} textFill="#fff" size={19} script={false}>
          count = 3, sum = 3 + 4 + 5 = 12
        </Chip>
      </Fade>
    </Scene>
  );
}
