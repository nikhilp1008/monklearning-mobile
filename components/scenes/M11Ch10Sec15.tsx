/**
 * M11 Ch10 · Section 15 — "Set up: focus (a,0), directrix x=-a, vertex at the origin"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 3 (The Parabola), sec 15 of 20. FLAGGED
 * derivation section (task brief) — extra scrutiny on the algebra.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 17.58, 26.71, 38.57, 51.97, 65.11,
 * 78.59, 90.97, 101.12]; reveals_hinglish = [0, 14.34, 24.49, 33.88, 44.71,
 * 55.81, 67.58, 77.91, 88.32].
 *
 * LEFT (x60-400): one persistent coordinate diagram — axes + directrix + F +
 * generic P (beat1), later extended (beat6, NOT redrawn) with the full curve
 * + latus rectum. The curve is sampled off the true parametrization
 * X = Vx + s²/(4a); at s=±2a the sampled points land exactly on the latus
 * rectum's endpoints (y = Vy ± 2a), which is not a coincidence — it's the
 * same identity the algebra proves, so the two halves of the scene agree by
 * construction, not by eye.
 * RIGHT (x520-1020): the algebra stack -> boxed y²=4ax (HIGH) -> geometry
 * readout -> latus rectum length -> guardrail on what "a" controls.
 *
 * Hand-verified algebra: √((x-a)²+y²)=x+a → square → (x-a)²+y²=(x+a)² →
 * expand: x²-2ax+a²+y² = x²+2ax+a² → y² = 4ax ✓ (x², a² cancel; -2ax moves
 * to combine with 2ax on the right, giving 4ax).
 *
 * Beats:
 *  0(title,always-on) | "Set up: focus (a,0), directrix x=-a, vertex at the origin"
 *  1 | setup diagram: axes, directrix, F, generic P, PF, PM
 *  2 | √((x-a)²+y²) = x+a
 *  3 | (x-a)²+y² = (x+a)²
 *  4 | (HIGH) boxed: y² = 4ax
 *  5 | geometry readout: vertex/focus/directrix/axis
 *  6 | diagram extends: full curve + latus rectum
 *  7 | latus rectum length = 4a
 *  8 | guardrail (red,HIGH): a>0 is focal distance, larger a = wider
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, curveD } from "./math-kit";

const OX = 200, OY = 340, A = 70;
const F = { x: OX + A, y: OY };
const DIR_X = OX - A;

function curvePt(s: number) {
  return { x: OX + (s * s) / (4 * A), y: OY + s };
}
const P1 = curvePt(60);
const M1 = { x: DIR_X, y: P1.y };
const CURVE_D = curveD(Array.from({ length: 15 }, (_, i) => curvePt(-140 + i * 20)));

export default function M11Ch10Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Set up: focus (a,0), directrix x = −a, vertex at the origin", "Set up: focus (a,0), directrix x = −a, vertex origin par")}
        </T>
      </Fade>

      {/* beat 1 — setup diagram */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} xLeft={100} xRight={350} yTop={190} yBottom={490} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={208} y={354} size={11} fill={MUTED} anchor="start">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(DIR_X, 190, DIR_X, 490)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={115} y={205} size={11} fill={MUTED} anchor="end">x = −a</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={F.x} cy={F.y} r={3.5} fill={INK} />
        <T x={280} y={330} size={11} fill={INK} anchor="start" weight={700}>F</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={P1.x} cy={P1.y} r={3.5} fill={INK} />
        <T x={222} y={394} size={11} fill={INK} anchor="start">P(x, y)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={lineD(P1.x, P1.y, M1.x, M1.y)} stroke={MUTED} sw={1.6} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={lineD(P1.x, P1.y, F.x, F.y)} stroke={INK} sw={2} dur={0.4} />

      {/* beat 2 — distance equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={760} y={140} size={16} fill={INK} anchor="middle">√((x − a)² + y²) = x + a</T>
      </Fade>

      {/* beat 3 — squared */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={760} y={172} size={16} fill={INK} anchor="middle">(x − a)² + y² = (x + a)²</T>
      </Fade>

      {/* beat 4 — boxed result (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={670} y={198} w={180} h={50} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={22} script={false}>
          y² = 4ax
        </Chip>
      </Fade>

      {/* beat 5 — geometry readout */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={760} y={280} size={13} fill={INK} anchor="middle">
          {t("Vertex (0,0) · Focus (a,0)", "Vertex (0,0) · Focus (a,0)")}
        </T>
        <T x={760} y={302} size={13} fill={INK} anchor="middle">
          {t("Directrix x = −a · Axis = x-axis", "Directrix x = −a · Axis = x-axis")}
        </T>
      </Fade>

      {/* beat 6 — diagram extends: full curve + latus rectum */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={CURVE_D} stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={lineD(F.x, 200, F.x, 480)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Circle cx={F.x} cy={200} r={3} fill={GREEN_DARK} />
        <Circle cx={F.x} cy={480} r={3} fill={GREEN_DARK} />
        <T x={280} y={270} size={10} fill={GREEN_DARK} anchor="start">{t("latus rectum", "latus rectum")}</T>
      </Fade>

      {/* beat 7 — latus rectum length */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={760} y={340} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("latus rectum length = 4a", "latus rectum length = 4a")}
        </T>
      </Fade>

      {/* beat 8 — guardrail (HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={760} y={378} size={13} fill={RED} anchor="middle" weight={700}>
          {t("a > 0 is the focal distance —", "a > 0 focal distance hai —")}
        </T>
        <T x={760} y={400} size={13} fill={RED} anchor="middle" weight={700}>
          {t("larger a means a WIDER parabola.", "bada a matlab WIDER parabola.")}
        </T>
      </Fade>
    </Scene>
  );
}
