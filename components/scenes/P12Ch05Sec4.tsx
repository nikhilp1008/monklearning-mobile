/**
 * P12Ch05 · Section 4 — "Limiting conditions: when the clean formulas are allowed"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: only the first of the three idealisations —
 * the far-field short-dipole condition, written out with the exact
 * finite-length expression B = (μ₀/4π)·2mx/(x²−l²)², the 2:1 axial:equatorial
 * ratio and a "near-field vs far-field" exam trap. Two thirds of the voice had
 * no board at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: three idealisations, each a trap.
 *   (1) short magnet — the r³ formulas need r ≫ l; up close you must use the
 *       full finite-length expressions (which the voice explicitly defers to a
 *       later section, so they are NOT written out here);
 *   (2) uniform field — "the net force on a magnet is zero" assumes both poles
 *       sit in the same field strength; a non-uniform field gives a real net
 *       force, and that is the entire reason a magnet picks anything up;
 *   (3) pole strength — ±q_m at the ends separated by 2l is bookkeeping only,
 *       never physically real, because isolated poles do not exist.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "three idealizations, every one a trap"   title + underline
 *   1  "half length l, point at distance r"      geometry diagram
 *   2  "first idealization: r ≫ l"               block 1 heading + valid case
 *   3  "get up close and they stop being true"   block 1 near-field warning
 *   4  "net force is zero — uniform field"       block 2 heading + uniform panel
 *   5  "field varies → unequal forces"           block 2 non-uniform panel
 *   6  "pole strength model, ±q_m over 2l"       block 3 diagram
 *   7  "never physically real"                   block 3 verdict + summary chip
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

/** A small bar magnet: S half in cream, N half in blush. */
function Magnet({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const mid = x + w / 2;
  return (
    <G>
      <Rect x={x} y={y} width={w / 2} height={h} fill={CREAM} stroke={INK} strokeWidth={2} />
      <Rect x={mid} y={y} width={w / 2} height={h} fill="#fdece9" stroke={INK} strokeWidth={2} />
      <T x={x + w / 4} y={y + h / 2 + 5} size={14} fill={INK} weight={800}>S</T>
      <T x={mid + w / 4} y={y + h / 2 + 5} size={14} fill={RED} weight={800}>N</T>
    </G>
  );
}

export default function P12Ch05Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Three idealizations — and where each one breaks",
             "Three idealizations — and where each one breaks")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the geometry ---------------- */}
      <G transform="translate(50, 78)">
        <Fade on={beat >= 1} delay={dl(1, 0.2)}>
          <T x={0} y={14} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            {t("THE GEOMETRY THAT MATTERS", "THE GEOMETRY THAT MATTERS")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.6)}>
          <Magnet x={40} y={46} w={160} h={34} />
          <Circle cx={120} cy={63} r={4} fill={INK} />
        </Fade>

        {/* half length l */}
        <Draw on={beat >= 1} delay={dl(1, 1.0)}
          d="M 120 96 L 200 96 M 120 90 L 120 102 M 200 90 L 200 102"
          stroke={AMBER_DARK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={160} y={118} size={13.5} fill={AMBER_DARK} weight={800}>l</T>
        </Fade>

        {/* distance r to the field point */}
        <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 120 63 L 396 63" stroke={INK} sw={1.8} dur={0.7} />
        <Fade on={beat >= 1} delay={dl(1, 2.0)}>
          <T x={300} y={52} size={13.5} fill={INK} weight={800}>r</T>
          <Circle cx={400} cy={63} r={5} fill={RED} />
          <T x={414} y={54} size={13} fill={RED} weight={800} anchor="start">P</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 2.4)}>
          <T x={0} y={148} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("half length l · field point P a distance r from the centre — everything turns on how they compare",
               "half length l · field point P a distance r from the centre — everything turns on how they compare")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 2 & 3 — idealization 1 ---------------- */}
      <G transform="translate(596, 78)">
        <Badge n={1} cx={14} cy={10} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={38} y={15} size={14} fill={RED} weight={800} anchor="start">
            {t("THE SHORT-MAGNET APPROXIMATION", "THE SHORT-MAGNET APPROXIMATION")}
          </T>
        </Fade>

        <Fade on={beat >= 2} delay={dl(2, 0.9)}>
          <T x={38} y={48} size={14.5} fill={GREEN} weight={800} anchor="start">
            {t("r ≫ l   ⇒   the r³ forms are allowed", "r ≫ l   ⇒   the r³ forms are allowed")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.3)}>
          <T x={38} y={74} size={13} fill={INK} weight={600} anchor="start">
            {t("the famous axial and equatorial expressions, the ones with r³ underneath",
               "the famous axial and equatorial expressions, the ones with r³ underneath")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={38} y={112} size={14.5} fill={RED} weight={800} anchor="start">
            {t("r comparable to l   ⇒   they quietly stop being true",
               "r comparable to l   ⇒   they quietly stop being true")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.7)}>
          <T x={38} y={138} size={13} fill={INK} weight={600} anchor="start">
            {t("up close you must use the full finite-length expressions instead",
               "up close you must use the full finite-length expressions instead")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.1)}>
          <T x={38} y={162} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("and those reduce back to the short forms once r is large",
               "and those reduce back to the short forms once r is large")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 4 & 5 — idealization 2 ---------------- */}
      <G transform="translate(50, 250)">
        <Badge n={2} cx={14} cy={10} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={38} y={15} size={14} fill={RED} weight={800} anchor="start">
            {t("“THE NET FORCE ON A MAGNET IS ZERO” — ONLY IN A UNIFORM FIELD",
               "“THE NET FORCE ON A MAGNET IS ZERO” — ONLY IN A UNIFORM FIELD")}
          </T>
        </Fade>

        {/* --- uniform panel (beat 4) --- */}
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={30} y={44} size={13} fill={INK} weight={800} anchor="start">
            {t("UNIFORM B", "UNIFORM B")}
          </T>
        </Fade>
        <Draw on={beat >= 4} delay={dl(4, 1.1)} d={arrowD(30, 60, 330, 60)} stroke={MUTED} sw={1.7} dur={0.6} />
        <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(30, 140, 330, 140)} stroke={MUTED} sw={1.7} dur={0.6} />
        <Fade on={beat >= 4} delay={dl(4, 1.4)}>
          <Magnet x={130} y={85} w={120} h={30} />
        </Fade>
        <Draw on={beat >= 4} delay={dl(4, 1.7)} d={arrowD(128, 100, 62, 100)} stroke={GREEN} sw={2.4} dur={0.4} />
        <Draw on={beat >= 4} delay={dl(4, 1.7)} d={arrowD(252, 100, 318, 100)} stroke={GREEN} sw={2.4} dur={0.4} />
        <Fade on={beat >= 4} delay={dl(4, 2.1)}>
          <T x={62} y={90} size={12.5} fill={GREEN} weight={800}>F</T>
          <T x={318} y={90} size={12.5} fill={GREEN} weight={800}>F</T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 2.4)}>
          <T x={30} y={168} size={13} fill={INK} weight={700} anchor="start">
            {t("both poles sit in exactly the same field strength",
               "both poles sit in exactly the same field strength")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 2.7)}>
          <T x={30} y={190} size={13.5} fill={GREEN} weight={800} anchor="start">
            {t("equal and opposite  ⇒  F_net = 0, a torque only",
               "equal and opposite  ⇒  F_net = 0, a torque only")}
          </T>
        </Fade>

        {/* --- non-uniform panel (beat 5) --- */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={520} y={44} size={13} fill={INK} weight={800} anchor="start">
            {t("NON-UNIFORM B", "NON-UNIFORM B")}
          </T>
        </Fade>
        <Draw on={beat >= 5} delay={dl(5, 0.4)}
          d="M 520 56 C 650 56, 740 76, 950 86" stroke={MUTED} sw={1.7} dur={0.7} />
        <Draw on={beat >= 5} delay={dl(5, 0.5)}
          d="M 520 146 C 650 146, 740 126, 950 116" stroke={MUTED} sw={1.7} dur={0.7} />
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <Magnet x={700} y={85} w={120} h={30} />
        </Fade>
        <Draw on={beat >= 5} delay={dl(5, 1.1)} d={arrowD(698, 100, 660, 100)} stroke={RED} sw={2.4} dur={0.35} />
        <Draw on={beat >= 5} delay={dl(5, 1.1)} d={arrowD(822, 100, 930, 100)} stroke={RED} sw={2.4} dur={0.5} />
        <Fade on={beat >= 5} delay={dl(5, 1.5)}>
          <T x={660} y={90} size={12.5} fill={RED} weight={800}>F</T>
          <T x={926} y={90} size={12.5} fill={RED} weight={800}>F′ &gt; F</T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.9)}>
          <T x={520} y={168} size={13} fill={INK} weight={700} anchor="start">
            {t("unequal field at the two poles ⇒ the forces no longer cancel",
               "unequal field at the two poles ⇒ the forces no longer cancel")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 2.2)}>
          <T x={520} y={190} size={13.5} fill={RED} weight={800} anchor="start">
            {t("a genuine net force drags it — this is why a magnet picks anything up",
               "a genuine net force drags it — this is why a magnet picks anything up")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 6 & 7 — idealization 3 ---------------- */}
      <G transform="translate(50, 440)">
        <Badge n={3} cx={14} cy={10} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={38} y={15} size={14} fill={RED} weight={800} anchor="start">
            {t("THE POLE-STRENGTH MODEL", "THE POLE-STRENGTH MODEL")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 0.9)}>
          <Rect x={30} y={34} width={300} height={54} rx={10}
            fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="7 6" />
          <Line x1={93} y1={61} x2={267} y2={61} stroke={INK} strokeWidth={1.6} strokeDasharray="5 5" />
          <Circle cx={75} cy={61} r={16} fill={CREAM} stroke={INK} strokeWidth={2} />
          <T x={75} y={66} size={12.5} fill={INK} weight={800}>−q_m</T>
          <Circle cx={285} cy={61} r={16} fill="#fdece9" stroke={RED} strokeWidth={2} />
          <T x={285} y={66} size={12.5} fill={RED} weight={800}>+q_m</T>
          <T x={180} y={52} size={13} fill={INK} weight={800}>2l</T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 1.4)}>
          <T x={370} y={48} size={13.5} fill={INK} weight={700} anchor="start">
            {t("we pretend the magnet carries magnetic charges ±q_m at its ends, separated by 2l",
               "we pretend the magnet carries magnetic charges ±q_m at its ends, separated by 2l")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.8)}>
          <T x={370} y={72} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("a calculational convenience, nothing more", "a calculational convenience, nothing more")}
          </T>
        </Fade>
        <Fade on={beat >= 7} delay={dl(7, 0.2)}>
          <T x={370} y={98} size={13.5} fill={RED} weight={800} anchor="start">
            {t("never physically real — isolated poles do not exist",
               "never physically real — isolated poles do not exist")}
          </T>
        </Fade>
      </G>

      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={40} y={552} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ r ≫ l · uniform field for zero net force · pole strength is bookkeeping, not what sits inside the magnet",
             "★ r ≫ l · uniform field for zero net force · pole strength is bookkeeping, not what sits inside the magnet")}
        </Chip>
      </Fade>
    </Scene>
  );
}
