/**
 * Ch02 · Section 21 — "Procedure A: extracting motion data from a single graph"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 25.5, 50.4, 71.9, 93, 115.9]):
 *  0 title
 *  1 flow skeleton: five boxes + connectors (one decision, then mechanical)
 *  2 step 1 box turns red: identify the AXES + aside (v-t rules on x-t graph)
 *  3 left branch: rate → SLOPE (tangent/chord)
 *  4 right branch: amount → AREA (triangles/rectangles/trapezia)
 *  5 signs box: below axis −, sum twice
 *  6 green check box: sanity — free marks
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  box1 x330..750 y90..140 (text bl 122) · aside st x770 bl 108/130
 *  decision x360..720 y170..214 (bl 198)
 *  branches: L x90..510 y252..332 (bl 284/312) · R x570..1030 y252..332 (bl 284/312)
 *  signs x300..780 y370..440 (bl 398/426) · check x270..810 y468..538 (bl 496/524)
 *  connectors: (540,140→166) · (450,214→305,248) · (630,214→775,248) ·
 *              (300,332→448,366) · (780,332→632,366) · (540,440→464)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function box(x1: number, y1: number, x2: number, y2: number) {
  const w = x2 - x1 - 24;
  const h = y2 - y1 - 24;
  return `M ${x1 + 12} ${y1} h ${w} q 12 0 12 12 v ${h} q 0 12 -12 12 h -${w} q -12 0 -12 -12 v -${h} q 0 -12 12 -12`;
}

export default function Ch02Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — make it a procedure */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "reading a graph — five steps, one decision",
            "graph padhna — paanch kadam, ek faisla"
          )}
        </T>
      </Fade>

      {/* beat 1 — the skeleton */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={box(330, 90, 750, 140)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(540, 140, 540, 166)} stroke={MUTED} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={box(360, 170, 720, 214)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(450, 214, 305, 248)} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={arrowD(630, 214, 775, 248)} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={box(90, 252, 510, 332)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={box(570, 252, 1030, 332)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={arrowD(300, 332, 448, 366)} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 5.7)} d={arrowD(780, 332, 632, 366)} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 6.3)} d={box(300, 370, 780, 440)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 7)} d={arrowD(540, 440, 540, 464)} stroke={MUTED} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 7.5)} d={box(270, 468, 810, 538)} stroke={MUTED} sw={2} dur={0.5} />

      {/* beat 2 — the red first step */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={box(330, 90, 750, 140)} stroke={RED} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={122} size={14} fill={RED} script>
          {t(
            "STEP 1 — identify the AXES first",
            "STEP 1 — pehle AXES pehchaano"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={770} y={108} size={11} fill={RED} script anchor="start">
          {t("most wrong answers:", "zyadatar galat jawaab:")}
        </T>
        <T x={770} y={130} size={11} fill={RED} script anchor="start">
          {t("v-t rules on an x-t graph", "x-t graph par v-t ke rules")}
        </T>
      </Fade>

      {/* beat 3 — the one decision, left branch */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={198} size={13} fill={INK} script>
          {t("what does the question want?", "sawaal kya maang raha hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d={box(90, 252, 510, 332)} stroke={AMBER} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={300} y={284} size={13} fill={AMBER_DARK} script>
          {t("a rate (v or a) → take the SLOPE", "rate (v ya a) → SLOPE lo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={300} y={312} size={13} fill={MUTED} script>
          {t(
            "tangent = instant · chord = average",
            "tangent = ek pal · chord = average"
          )}
        </T>
      </Fade>

      {/* beat 4 — right branch */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={box(570, 252, 1030, 332)} stroke={GREEN} sw={2.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={800} y={284} size={13} fill={GREEN} script>
          {t("an amount (Δx or Δv) → take the AREA", "amount (Δx ya Δv) → AREA lo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={800} y={312} size={13} fill={MUTED} script>
          {t(
            "triangles · rectangles · trapezia — piece by piece",
            "triangle · rectangle · trapezium — tukda-tukda"
          )}
        </T>
      </Fade>

      {/* beat 5 — where the #1 mistake lives */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={box(300, 370, 780, 440)} stroke={RED} sw={2.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={398} size={13} fill={RED} script>
          {t("STEP 4 — apply the SIGNS", "STEP 4 — SIGNS lagao")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={540} y={426} size={12} fill={MUTED} script>
          {t(
            "below axis = − · signs → displacement · magnitudes → distance",
            "axis ke neeche = − · signs → displacement · magnitudes → distance"
          )}
        </T>
      </Fade>

      {/* beat 6 — the free marks */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={box(270, 468, 810, 538)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={496} size={13} fill={GREEN} script>
          {t(
            "STEP 5 — sanity check (the free marks)",
            "STEP 5 — sanity check (muft ke marks)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={540} y={524} size={12} fill={MUTED} script>
          {t(
            "distance ≥ |Δx| · a reasonable · v continuous — ten seconds",
            "distance ≥ |Δx| · a munaasib · v continuous — das second"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
