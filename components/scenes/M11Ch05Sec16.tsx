/**
 * M11 Ch05 · Section 16 — "Bounded, unbounded, empty — and corner points"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Three small sketch-panels (beats 0-2), erased
 * at beat 3 for the corner-points triangle + line-style legend.
 *
 * Beats (en [0,8.53,22.27,32.6,43.09,56.66,68.86], hi
 * [0,9.3,21.42,31.83,41.73,53.59,63.74]):
 *  0 heading — 3 panel frames drawn
 *  1 text: bounded (finite, triangle) vs unbounded (extends forever)
 *  2 text: EMPTY — half-planes share no common point
 *  3 text: corner points — [erase panels] triangle + 3 vertices, P/Q/R
 *  4 note (red-margin): vertices decisive in Class 12 Linear Programming
 *  5 text: solid⇔filled, dotted⇔hollow — one idea, two costumes (legend)
 *  6 text: the strictness convention reappears as line style (closing)
 *
 * Layout plan:
 *  b0 | 3 panel frames             | Draw  | x60..340/400..680/740..1020 y150..310
 *  b1 | bounded triangle (green)   | Draw  | panel1 · unbounded shape (amber) panel2
 *  b2 | 2 non-touching shapes (red)| Draw  | panel3, "∅ EMPTY" label
 *  b3 | [erase] corner triangle    | Draw  | (340,430)(740,430)(540,220)
 *  b3 | P/Q/R vertex labels        | circle/T
 *  b3 | caption (14,ink,scr)       | T mid | bl 360 (above triangle)
 *  b4 | guardrail caption (14,red) | T mid | bl 520
 *  b5 | solid/dotted legend        | Draw+T| y130
 *  b6 | closing caption (15,ink)   | T mid | bl 560
 */

import React from "react";
import { Circle, Line, Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, IntervalDot } from "./math-kit";

export default function M11Ch05Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const panels = (k: number) => beat >= k && beat < 3;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("read the region: bounded, unbounded, or empty", "region padho: bounded, unbounded, ya empty")}
        </T>
      </Fade>

      {/* beat 0 — 3 panel frames */}
      <Draw on={panels(0)} delay={dl(0, 0.3)} d="M60 150 h280 v160 h-280 z" stroke={MUTED} sw={1.4} dur={0.6} />
      <Draw on={panels(0)} delay={dl(0, 0.7)} d="M400 150 h280 v160 h-280 z" stroke={MUTED} sw={1.4} dur={0.6} />
      <Draw on={panels(0)} delay={dl(0, 1.1)} d="M740 150 h280 v160 h-280 z" stroke={MUTED} sw={1.4} dur={0.6} />

      {/* beat 1 — bounded vs unbounded */}
      <Fade on={panels(1)} delay={dl(1, 0.3)}>
        <Path d="M100 290 L320 290 L210 170 Z" fill={GREEN} opacity={0.22} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={panels(1)} delay={dl(1, 0.7)}>
        <T x={200} y={306} size={13} fill={INK} weight={700}>
          {t("BOUNDED", "BOUNDED")}
        </T>
      </Fade>
      <Fade on={panels(1)} delay={dl(1, 1.3)}>
        <Path d="M460 290 L460 190 L680 160 L680 290 Z" fill={AMBER} opacity={0.22} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={panels(1)} delay={dl(1, 1.7)}>
        <T x={560} y={306} size={13} fill={INK} weight={700}>
          {t("UNBOUNDED", "UNBOUNDED")}
        </T>
      </Fade>

      {/* beat 2 — empty solution set */}
      <Fade on={panels(2)} delay={dl(2, 0.3)}>
        <Path d="M760 170 L860 170 L760 230 Z" fill={RED} opacity={0.2} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={panels(2)} delay={dl(2, 0.7)}>
        <Path d="M900 250 L1000 250 L1000 290 L900 290 Z" fill={RED} opacity={0.2} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={panels(2)} delay={dl(2, 1.2)}>
        <T x={880} y={306} size={13} fill={RED} weight={700}>
          ∅ {t("EMPTY", "EMPTY")}
        </T>
      </Fade>

      {/* beat 3 — corner points (panels erased) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={14} fill={INK} script>
          {t("corner points: solve boundary lines two at a time", "corner points: boundary lines do-do karke solve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={lineD(340, 430, 740, 430)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={lineD(740, 430, 540, 220)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={lineD(540, 220, 340, 430)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <Circle cx={340} cy={430} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={320} y={450} size={13} fill={MUTED} anchor="end">
          P
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <Circle cx={740} cy={430} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={760} y={450} size={13} fill={MUTED} anchor="start">
          Q
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <Circle cx={540} cy={220} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={540} y={205} size={13} fill={MUTED}>
          R
        </T>
      </Fade>

      {/* beat 4 — decisive in Class 12 LP */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={480} size={14} fill={RED} script>
          {t(
            "these vertices become decisive in Class 12 Linear Programming",
            "yeh vertices Class 12 Linear Programming mein decisive hote hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — solid ⇔ filled, dotted ⇔ hollow */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={lineD(200, 530, 280, 530)} stroke={INK} sw={2.4} dur={0.4} />
      <IntervalDot on={beat >= 5} delay={dl(5, 0.8)} x={280} y={530} open={false} r={5} stroke={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={300} y={534} size={13} fill={MUTED} anchor="start">
          {t("solid ⇔ filled", "solid ⇔ filled")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <Line x1={620} y1={530} x2={700} y2={530} stroke={INK} strokeWidth={2.4} strokeDasharray="6 4" />
      </Fade>
      <IntervalDot on={beat >= 5} delay={dl(5, 2.1)} x={700} y={530} open={true} r={5} stroke={INK} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={720} y={534} size={13} fill={MUTED} anchor="start">
          {t("dotted ⇔ hollow", "dotted ⇔ hollow")}
        </T>
      </Fade>

      {/* beat 6 — the callback */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={568} size={15} fill={INK} script>
          {t(
            "the number line's strictness convention reappears as line style",
            "number line ka strictness convention line style mein wapas aata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
