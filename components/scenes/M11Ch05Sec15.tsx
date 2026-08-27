/**
 * M11 Ch05 · Section 15 — "The four working rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Two-column: rule list (left) + one evolving
 * mini-diagram (right) that builds a rule at a time; erased at beat 5 for
 * the two practical notes.
 *
 * Beats (en [0,9.47,22.95,42.58,55.3,70.31,86.87], hi
 * [0,9.22,21.5,39.68,51.11,64.77,79.79]):
 *  0 heading — divider, "RULES"/"PICTURE" headers
 *  1 text: boundary line — set =, draw ax+by=c (mini axes + line)
 *  2 text: line style — solid ≤≥, dotted <> (legend swatch)
 *  3 text: test-point rule — off-line, fits→shade its side (dot + shade)
 *  4 text: system → shade the intersection (2nd line + shade)
 *  5 text: real problems add x≥0,y≥0 → first quadrant (erase, new diagram)
 *  6 note (red-margin, high): (0,0) fails on the origin — use (1,0)/(0,1)
 *
 * Layout plan:
 *  b0 | divider                   | Draw  | x600 y95..560
 *  b0 | "RULES"/"PICTURE" (18,w800)| T mid | x300,115 / x810,115
 *  b1-4| 4 rule rows (15,ink,st)  | T st  | x80  y155/215/275/335
 *  b1 | mini axes + boundary line | Draw  | origin(700,470) x650..1020 y195..470
 *  b2 | solid/dashed legend       | Draw+T| x650..700 y150/175
 *  b3 | test dot + shade          | circle/Fade | (820,350)
 *  b4 | 2nd line + shade (system) | Draw/Fade | x730 vertical
 *  b5 | [erase] quarter-plane     | Draw/Fade | compact, centered
 *  b6 | origin-fails example      | Draw/T | crossed origin, (1,0)/(0,1)
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, INK, MUTED, GREEN, RED, AMBER, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, HalfPlaneShade, checkD, lineD } from "./math-kit";

export default function M11Ch05Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const rules = (k: number) => beat >= k && beat < 5;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("boundary → style → test point → system", "boundary → style → test point → system")}
        </T>
      </Fade>

      {/* beat 0 — structure */}
      <Draw on={rules(0)} delay={dl(0, 0.3)} d={lineD(600, 95, 600, 560)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={rules(0)} delay={dl(0, 0.8)}>
        <T x={300} y={115} size={18} fill={INK} weight={800}>
          RULES
        </T>
      </Fade>
      <Fade on={rules(0)} delay={dl(0, 1.1)}>
        <T x={810} y={115} size={18} fill={INK} weight={800}>
          {t("PICTURE", "PICTURE")}
        </T>
      </Fade>

      {/* beat 1 — boundary line */}
      <Fade on={rules(1)} delay={dl(1, 0.3)}>
        <T x={80} y={155} size={15} fill={INK} anchor="start">
          {t("1. BOUNDARY — set = , draw ax+by=c", "1. BOUNDARY — = lagao, ax+by=c draw karo")}
        </T>
      </Fade>
      <CartesianAxes on={rules(1)} delay={dl(1, 1.0)} originX={700} originY={470} xLeft={650} xRight={1020} yTop={195} yBottom={470} showTicks={false} />
      <Draw on={rules(1)} delay={dl(1, 1.6)} d={lineD(700, 220, 950, 470)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={rules(1)} delay={dl(1, 2.3)}>
        <T x={770} y={280} size={13} fill={MUTED} anchor="start">
          ax + by = c
        </T>
      </Fade>

      {/* beat 2 — line style legend */}
      <Fade on={rules(2)} delay={dl(2, 0.3)}>
        <T x={80} y={215} size={15} fill={INK} anchor="start">
          {t("2. STYLE — solid ≤ ≥ · dotted < >", "2. STYLE — solid ≤ ≥ · dotted < >")}
        </T>
      </Fade>
      <Draw on={rules(2)} delay={dl(2, 1.0)} d={lineD(650, 150, 700, 150)} stroke={INK} sw={2.4} dur={0.3} />
      <Fade on={rules(2)} delay={dl(2, 1.3)}>
        <T x={710} y={154} size={13} fill={MUTED} anchor="start">
          ≤ ≥
        </T>
      </Fade>
      <Fade on={rules(2)} delay={dl(2, 1.6)}>
        <Line x1={650} y1={175} x2={700} y2={175} stroke={INK} strokeWidth={2.4} strokeDasharray="6 4" />
      </Fade>
      <Fade on={rules(2)} delay={dl(2, 1.9)}>
        <T x={710} y={179} size={13} fill={MUTED} anchor="start">
          &lt; &gt;
        </T>
      </Fade>

      {/* beat 3 — test-point rule */}
      <Fade on={rules(3)} delay={dl(3, 0.3)}>
        <T x={80} y={275} size={15} fill={INK} anchor="start">
          {t("3. TEST POINT — off-line: fits→its side, fails→other", "3. TEST POINT — off-line: fit→uski side, fail→dusri")}
        </T>
      </Fade>
      <HalfPlaneShade
        on={rules(3)}
        delay={dl(3, 1.0)}
        x1={700}
        y1={220}
        x2={950}
        y2={470}
        testX={820}
        testY={350}
        boxX={650}
        boxY={195}
        boxW={370}
        boxH={275}
        fill={GREEN}
        opacity={0.16}
      />
      <Fade on={rules(3)} delay={dl(3, 1.6)}>
        <Circle cx={820} cy={350} r={5} fill={GREEN} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Draw on={rules(3)} delay={dl(3, 2.0)} d={checkD(840, 335, 12)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 4 — system: shade the intersection */}
      <Fade on={rules(4)} delay={dl(4, 0.3)}>
        <T x={80} y={335} size={15} fill={INK} anchor="start">
          {t("4. SYSTEM — shade the INTERSECTION", "4. SYSTEM — INTERSECTION shade karo")}
        </T>
      </Fade>
      <Draw on={rules(4)} delay={dl(4, 1.0)} d={lineD(760, 195, 760, 470)} stroke={INK} sw={2.4} dur={0.6} />
      <HalfPlaneShade
        on={rules(4)}
        delay={dl(4, 1.7)}
        x1={760}
        y1={195}
        x2={760}
        y2={470}
        testX={650}
        testY={300}
        boxX={650}
        boxY={195}
        boxW={370}
        boxH={275}
        fill={AMBER}
        opacity={0.2}
      />

      {/* beat 5 — first quadrant only (erase rules, fresh diagram) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={230} size={18} fill={AMBER_DARK} weight={700}>
          {t("real problems add x ≥ 0, y ≥ 0", "real problems mein x ≥ 0, y ≥ 0 aata hai")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 5} delay={dl(5, 1.0)} originX={440} originY={480} xLeft={400} xRight={680} yTop={280} yBottom={480} showTicks={false} />
      <HalfPlaneShade
        on={beat >= 5}
        delay={dl(5, 1.6)}
        x1={440}
        y1={280}
        x2={440}
        y2={480}
        testX={600}
        testY={400}
        boxX={400}
        boxY={280}
        boxW={280}
        boxH={200}
        fill={AMBER}
        opacity={0.14}
      />
      <HalfPlaneShade
        on={beat >= 5}
        delay={dl(5, 1.9)}
        x1={400}
        y1={480}
        x2={680}
        y2={480}
        testX={500}
        testY={330}
        boxX={400}
        boxY={280}
        boxW={280}
        boxH={200}
        fill={AMBER}
        opacity={0.14}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={620} y={330} size={14} fill={AMBER_DARK} weight={700}>
          {t("first quadrant", "pehla quadrant")}
        </T>
      </Fade>

      {/* beat 6 — the origin-fails guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Circle cx={440} cy={480} r={5} fill={RED} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={crossD(435, 475, 10, 10)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Circle cx={490} cy={480} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={498} y={477} size={12} fill={MUTED} anchor="start">
          (1,0)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={540} y={540} size={16} fill={RED} script>
          {t(
            "(0,0) fails when the line passes through the origin — try (1,0) or (0,1)",
            "(0,0) fail hota hai jab line origin se guzre — (1,0) ya (0,1) try karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
