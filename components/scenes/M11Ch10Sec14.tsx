/**
 * M11 Ch10 · Section 14 — "Parabola: equidistant from a focus and a directrix"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 3 (The Parabola), sec 14 of 20 in the chapter.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 9.64, 22.1, 34.9, 44.54, 55.64,
 * 67.33, 77.4]; reveals_hinglish = [0, 9.3, 20.82, 31.06, 40.28, 50.94,
 * 62.29, 72.96].
 *
 * MAIN diagram (x150-500): the chapter's first real parabola, opening right,
 * vertex V(280,340), focus F(350,340) i.e. a=70px, directrix x=210. Curve is
 * SAMPLED off the real equation (Y-Vy)² = 4a(X-Vx) — parametrized by the
 * y-offset s, X = Vx + s²/(4a) — and threaded through curveD, per the task
 * brief (no dedicated parabola generator). The reflected rays in beat4 are
 * NOT schematic: their endpoints are genuine points on the sampled curve and
 * the true focus, so the ray-to-focus lines are mathematically the real
 * reflected rays, not an approximation.
 * RIGHT column (x560-1020): e=1 tie-in, applications, the ONE-focus contrast.
 *
 * Beats:
 *  0(title,always-on) | "Parabola: equidistant from a focus and a directrix"
 *  1 | definition diagram: directrix, F, a point P with PF=PM
 *  2 | full curve draws + RIGHT: distance-to-focus = distance-to-directrix, e=1
 *  3 | guardrail (red,HIGH): vertex V midway between F and directrix (tick marks)
 *  4 | reflective property: 2 parallel rays reflect through F
 *  5 | RIGHT: applications — headlights, dish antennas, solar cookers
 *  6 | axis of symmetry drawn through V and F
 *  7 | guardrail (red,HIGH): ONE focus, ONE directrix (contrast w/ ellipse/hyperbola)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD } from "./math-kit";

const VX = 280, VY = 340, A = 70;
const F = { x: VX + A, y: VY };
const DIR_X = VX - A;

function curvePt(s: number) {
  return { x: VX + (s * s) / (4 * A), y: VY + s };
}
const CURVE_D = curveD(Array.from({ length: 15 }, (_, i) => curvePt(-140 + i * 20)));
const P1 = curvePt(80);
const M1 = { x: DIR_X, y: P1.y };
const RAY_TOP = curvePt(-60);
const RAY_BOT = curvePt(60);

export default function M11Ch10Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Parabola: equidistant from a focus and a directrix", "Parabola: focus aur directrix se equidistant")}
        </T>
      </Fade>

      {/* beat 1 — definition diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "Every point equally far from a fixed point (focus) and a fixed line (directrix).",
            "Har point ek fixed point (focus) aur fixed line (directrix) se equal door."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={lineD(DIR_X, 200, DIR_X, 480)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={195} y={210} size={11} fill={MUTED} anchor="end">{t("directrix", "directrix")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={F.x} cy={F.y} r={3.5} fill={INK} />
        <T x={362} y={324} size={12} fill={INK} anchor="start" weight={700}>F</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={P1.x} cy={P1.y} r={3.5} fill={INK} />
        <T x={312} y={424} size={11} fill={INK} anchor="start">P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(P1.x, P1.y, M1.x, M1.y)} stroke={MUTED} sw={1.6} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.05)} d={lineD(P1.x, P1.y, F.x, F.y)} stroke={INK} sw={2} dur={0.4} />

      {/* beat 2 — curve draws + RIGHT: e=1 */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={CURVE_D} stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={780} y={140} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("focus distance = directrix distance → e = 1", "focus distance = directrix distance → e = 1")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: vertex midway (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={VX} cy={VY} r={3.5} fill={INK} />
        <T x={280} y={366} size={11} fill={INK} anchor="middle" weight={700}>V</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={`${lineD(DIR_X, VY - 6, DIR_X, VY + 6)} ${lineD(VX, VY - 6, VX, VY + 6)} ${lineD(F.x, VY - 6, F.x, VY + 6)}`} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={245} y={322} size={11} fill={RED} anchor="middle" weight={700}>a</T>
        <T x={315} y={322} size={11} fill={RED} anchor="middle" weight={700}>a</T>
      </Fade>

      {/* beat 4 — reflective property: parallel rays through F */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={lineD(150, RAY_TOP.y, RAY_TOP.x, RAY_TOP.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(RAY_TOP.x, RAY_TOP.y, F.x, F.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={lineD(150, RAY_BOT.y, RAY_BOT.x, RAY_BOT.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={lineD(RAY_BOT.x, RAY_BOT.y, F.x, F.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 5 — RIGHT: applications */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={180} size={13} fill={INK} anchor="middle">
          {t("This is why headlights, dish antennas", "Isiliye headlights, dish antennas")}
        </T>
        <T x={780} y={202} size={13} fill={INK} anchor="middle">
          {t("and solar cookers are parabolic.", "aur solar cookers parabolic hote hain.")}
        </T>
      </Fade>

      {/* beat 6 — axis of symmetry */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(DIR_X, VY, 420, VY)} stroke={INK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={400} y={324} size={11} fill={MUTED} anchor="start">{t("axis of symmetry", "axis of symmetry")}</T>
      </Fade>

      {/* beat 7 — guardrail: ONE focus, ONE directrix (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={245} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Unlike ellipse/hyperbola, a parabola has", "Ellipse/hyperbola ke ulat, parabola mein")}
        </T>
        <T x={780} y={267} size={13} fill={RED} anchor="middle" weight={700}>
          {t("ONE focus and ONE directrix.", "sirf EK focus aur EK directrix hota hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
