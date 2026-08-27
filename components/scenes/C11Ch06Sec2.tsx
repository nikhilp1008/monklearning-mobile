/**
 * C11 Ch06 · Section 2 — "Physical equilibria all around us"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 34.8, 125.9, 152.7, 222.4, 246.5, 329.6, 353.7]):
 *  0 title + underline
 *  1 sealed bottle: evaporation ↑ / condensation ↓ arrows in the neck
 *  2 stamp: H2O(l) ⇌ H2O(g)
 *  3 ice-glass: slush division line, ice above / water below
 *  4 stamp: H2O(s) ⇌ H2O(l)
 *  5 sugar-glass: crystals settled, dissolve squiggles in the liquid
 *  6 stamp: sugar(s) ⇌ sugar(aq)
 *  7 Thums-Up can: sealed bubbles → cracked cap → gas escapes, "seal broken"
 *
 * Layout plan — four columns (icon box y140..280, equation/label row bl 310),
 * centers x=170 / 420 / 670 / 920, each icon ~100–150px wide, ≥100px gaps:
 *  b0 | title (script 26, red)      | T mid  | x197..883  y30..92  (bl 64)
 *  b0 | underline                   | Draw   | y83..87  x460..620
 *  b1 | bottle body+neck+cap        | Draw   | x120..220 y130..280
 *  b1 | evap ↑ (red) / cond ↓ (grn) | Draw   | x163/178  y183..218
 *  b2 | "H2O(l) ⇌ H2O(g)"           | T mid  | x102..238 y296..316 (bl 310)
 *  b3 | ice-glass beaker            | Draw   | x370..470 y170..280
 *  b3 | slush division + ice hatch  | Draw   | x372..468 y185..212
 *  b4 | "H2O(s) ⇌ H2O(l)"           | T mid  | x352..488 y296..316 (bl 310)
 *  b5 | sugar-glass beaker          | Draw   | x620..720 y170..280
 *  b5 | crystal dots + dissolve mk  | Fade   | x635..705 y190..278
 *  b6 | "sugar(s) ⇌ sugar(aq)"      | T mid  | x596..744 y296..316 (bl 310)
 *  b7 | can body+cap                | Draw   | x870..970 y155..280
 *  b7 | inside bubbles              | Fade   | x885..955 y190..260
 *  b7 | crack mark (red) + escaping | Fade   | x895..945 y95..172
 *  b7 | "seal broken ✗" (red)       | T mid  | x845..995 y296..316 (bl 310)
 */

import React from "react";
import { Circle, Line, Path, Rect } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t(
            "physical equilibrium: no bond needs to break",
            "physical equilibrium: bond todne ki zaroorat nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — sealed bottle: evaporation / condensation */}
      <Draw
        on={beat >= 1}
        d="M 155 130 H 185 V 180 H 220 V 280 H 120 V 180 H 155 Z"
        stroke={INK}
        sw={2.6}
        dur={beat > 1 ? 0.3 : 1.1}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Rect x={122} y={220} width={96} height={58} fill={AMBER} opacity={0.15} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={arrowD(163, 218, 163, 183)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={arrowD(178, 183, 178, 218)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />

      {/* beat 2 — stamp: H2O(l) ⇌ H2O(g) */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={170} y={310} size={17} fill={INK} anchor="middle">
          H₂O(l) ⇌ H₂O(g)
        </T>
      </Fade>

      {/* beat 3 — ice-glass: slush */}
      <Draw
        on={beat >= 3}
        d="M 370 170 V 280 H 470 V 170"
        stroke={INK}
        sw={2.6}
        dur={beat > 3 ? 0.3 : 1}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Rect x={372} y={212} width={96} height={66} fill={AMBER} opacity={0.13} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d="M 372 210 Q 396 200 420 210 T 468 210"
        stroke={INK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Line x1={390} y1={200} x2={382} y2={188} stroke={MUTED} strokeWidth={1.3} />
        <Line x1={412} y1={202} x2={404} y2={190} stroke={MUTED} strokeWidth={1.3} />
        <Line x1={436} y1={200} x2={428} y2={188} stroke={MUTED} strokeWidth={1.3} />
      </Fade>

      {/* beat 4 — stamp: H2O(s) ⇌ H2O(l) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={420} y={310} size={17} fill={INK} anchor="middle">
          H₂O(s) ⇌ H₂O(l)
        </T>
      </Fade>

      {/* beat 5 — sugar-glass: saturated solution */}
      <Draw
        on={beat >= 5}
        d="M 620 170 V 280 H 720 V 170"
        stroke={INK}
        sw={2.6}
        dur={beat > 5 ? 0.3 : 1}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={622} y={172} width={96} height={106} fill={AMBER} opacity={0.1} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Circle cx={640} cy={268} r={3} fill={INK} />
        <Circle cx={655} cy={272} r={3} fill={INK} />
        <Circle cx={670} cy={266} r={3} fill={INK} />
        <Circle cx={685} cy={272} r={3} fill={INK} />
        <Circle cx={700} cy={268} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Path d="M 640 205 q 6 -7 12 0 q 6 7 12 0" stroke={MUTED} strokeWidth={1.3} fill="none" />
        <Path d="M 665 225 q 6 -7 12 0 q 6 7 12 0" stroke={MUTED} strokeWidth={1.3} fill="none" />
      </Fade>

      {/* beat 6 — stamp: sugar(s) ⇌ sugar(aq) */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={670} y={310} size={17} fill={INK} anchor="middle">
          {t("sugar(s) ⇌ sugar(aq)", "sugar(s) ⇌ sugar(aq)")}
        </T>
      </Fade>

      {/* beat 7 — Thums-Up can: sealed, then the seal breaks */}
      <Draw
        on={beat >= 7}
        d="M 895 155 H 945 V 172 H 970 V 280 H 870 V 172 H 895 Z"
        stroke={INK}
        sw={2.6}
        dur={beat > 7 ? 0.3 : 1}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Circle cx={888} cy={200} r={2.6} fill={MUTED} />
        <Circle cx={905} cy={230} r={2.6} fill={MUTED} />
        <Circle cx={925} cy={210} r={2.6} fill={MUTED} />
        <Circle cx={945} cy={245} r={2.6} fill={MUTED} />
        <Circle cx={935} cy={190} r={2.6} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Path d="M 903 165 l 8 -7 l 6 9 l 8 -7" stroke={RED} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Circle cx={908} cy={140} r={2.6} fill={MUTED} />
        <Circle cx={922} cy={124} r={2.6} fill={MUTED} />
        <Circle cx={936} cy={108} r={2.6} fill={MUTED} />
        <Circle cx={916} cy={108} r={2.2} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={920} y={310} size={16} fill={RED} anchor="middle" script>
          {t("seal broken ✗", "seal toota ✗")}
        </T>
      </Fade>
    </Scene>
  );
}
