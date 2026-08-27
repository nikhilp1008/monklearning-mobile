/**
 * P12Ch04 · Section 41 — "Common Pitfalls and Pro-Tips"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   The interrupted-pass template: three "Badge + numbered prose" blocks and a
 *   full-width footer chip gated on beats 0, 1, 5 and 7 only, out of EIGHT
 *   narration segments. Mistakes two, three and four (beats 2, 3, 4 — some
 *   118 s of narration) changed nothing on the board, and the pro-tip's own
 *   content (beat 6, 56 s) landed with the closing thought rather than with the
 *   pro-tip heading. Drawn elements on the whole board: the title underline
 *   plus two short rules. The narration talks about which way the moment
 *   points, where the factor of two is born, whether the field point is near or
 *   far, and which way the dipole is being turned — four geometric claims, and
 *   the board drew none of them.
 *
 * WHAT THE NARRATION TEACHES
 *   ✗1 Direction of m. It lies along the NORMAL to the loop, fixed by the
 *      right-hand rule (fingers along I, thumb along m) — not along the current
 *      and not in the plane. For an electron, m points OPPOSITE to L, because
 *      the charge is negative; omitting that minus makes the answer incomplete.
 *   ✗2 The dropped factor of two — the most frequently penalised slip here. The
 *      gyromagnetic ratio is e/2m, not e/m; the orbital moment is evr/2, not
 *      evr. The ½ is born in step two, where the area π r² meets the current
 *      e v / 2π r, and it survives all the way to the Bohr magneton. Lose it
 *      and every answer is exactly twice too large — plausible enough to pass.
 *   ✗3 Near-field vs far-field. The exact on-axis expression works at any
 *      distance, so it is never wrong, only slow when you are far. The reverse
 *      error is worse: the dipole far-field formula used close to the loop is
 *      genuinely wrong. Compare x with R before choosing, and write it down.
 *   ✗4 The sign of the rotation work: W = m B (cos θ₁ − cos θ₂). Reason
 *      physically rather than memorising the order — alignment is the stable,
 *      low-energy position, so turning AWAY costs positive work and turning
 *      TOWARD releases energy. A negative W for turning away means the cosines
 *      are the wrong way round.
 *   PRO-TIP Map every magnetic-dipole question onto the electric dipole:
 *      axial : equatorial = 2 : 1 in both, τ = p E sin θ → m B sin θ,
 *      U = − p E cos θ → − m B cos θ, far fields identical in form. It is two
 *      substitutions, p → m and 1/4πε₀ → μ₀/4π, not new physics.
 *   CLOSING The chapter in one sentence: we asked what field a current makes
 *      (Biot–Savart, then Ampère), turned it round and asked what force a field
 *      exerts (circular motion, the cyclotron, forces between wires, the torque
 *      in every motor and meter) — and end by finding that the current loop IS
 *      the elementary magnet. A bar magnet is an enormous number of atomic
 *      current loops all pointing the same way.
 *
 * THE FIGURES (drawn, not asserted)
 *   · ✗1 — the loop with its circulating I and the correct normal m drawn in
 *     green, the two wrong claims chipped and struck through, then a small
 *     orbit with L up against μ_l down.
 *   · ✗2 — the two wrong forms struck through, the correct pair beside them,
 *     and the birth of the ½ written out (I = e v / 2π r meets A = π r²) with
 *     the surviving 2 ringed.
 *   · ✗3 — the loop seen edge-on with its radius marked and TWO field points on
 *     the same axis, one close (red) and one far (green), so "compare x with R"
 *     has a picture.
 *   · ✗4 — the field, the dipole at θ₁ near alignment and at θ₂ further away,
 *     both arcs drawn, and a green arc showing the direction of the rotation
 *     being paid for.
 *
 * BEAT MAP (n_reveals = 8, gates 0…7 — every beat used)
 *   0  four mistakes   title + underline + subtitle
 *   1  ✗1 direction    column 1: loop + normal + the two struck claims + e⁻
 *   2  ✗2 factor of 2  rule + column 2: struck forms, correct pair, where ½ is born
 *   3  ✗3 near vs far  rule + column 3: the two field points + the habit chip
 *   4  ✗4 work sign    rule + column 4: W chip + the θ₁ → θ₂ rotation figure
 *   5  pro-tip heading band rule + heading
 *   6  the translation the four matched results + the two substitution chips
 *   7  the chapter     the closing two lines
 *
 * LAYOUT
 *   MISTAKES y110..470 — C1 x50..295 | rule 299 | C2 x303..548 | rule 552 |
 *                        C3 x556..801 | rule 805 | C4 x809..1044
 *   BAND     y476..596 — rule y476 · head y496 · four results y516 ·
 *                        chips y524..554 · closing y574 / y592
 */

import React from "react";
import { Circle, Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD, ringD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const rad = (d: number) => (d * Math.PI) / 180;

/** Circle as a closed two-arc path. */
function circleD(cx: number, cy: number, r: number): string {
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
}

/** Plain arc about (cx,cy), a0 → a1 in degrees. */
function arcD(cx: number, cy: number, R: number, a0: number, a1: number): string {
  const x0 = cx + R * Math.cos(rad(a0));
  const y0 = cy + R * Math.sin(rad(a0));
  const x1 = cx + R * Math.cos(rad(a1));
  const y1 = cy + R * Math.sin(rad(a1));
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${R} ${R} 0 ${large} ${sweep} ${x1.toFixed(1)} ${y1.toFixed(1)}`;
}

/** Arc from a0° to a1° about (cx,cy) with an arrowhead at the far end. */
function arcArrowD(cx: number, cy: number, R: number, a0: number, a1: number): string {
  const x1 = cx + R * Math.cos(rad(a1));
  const y1 = cy + R * Math.sin(rad(a1));
  const s = a1 > a0 ? 1 : -1;
  const ang = Math.atan2(s * Math.cos(rad(a1)), s * -Math.sin(rad(a1)));
  const h = 9;
  return (
    `${arcD(cx, cy, R, a0, a1)}` +
    ` M ${(x1 - h * Math.cos(ang - 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang - 0.46)).toFixed(1)}` +
    ` L ${x1.toFixed(1)} ${y1.toFixed(1)}` +
    ` L ${(x1 - h * Math.cos(ang + 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang + 0.46)).toFixed(1)}`
  );
}

export default function P12Ch04Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Four Pitfalls, and One Translation Habit",
             "Four Pitfalls, and One Translation Habit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 282 60 C 460 56, 660 64, 798 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t("four mistakes, each with its own error tag — then the chapter in one sentence",
             "four mistakes, each with its own error tag — then the chapter in one sentence")}
        </T>
      </Fade>

      {/* ══════════ ✗1 — the direction of m (beat 1) ══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={126} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ 1 · THE DIRECTION OF m", "✗ 1 · THE DIRECTION OF m")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Ellipse cx={170} cy={196} rx={52} ry={18} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(118, 188, 118, 204)} stroke={GREEN_DARK} sw={2.2} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(222, 204, 222, 188)} stroke={GREEN_DARK} sw={2.2} dur={0.25} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={170} y={220} size={12} fill={GREEN_DARK} weight={800}>I</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(170, 196, 170, 146)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={180} y={152} size={13.5} fill={GREEN} script anchor="start">m</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={50} y={244} size={11} fill={INK} weight={700} anchor="start">
          {t("along the NORMAL, fixed by the", "along the NORMAL, fixed by the")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={50} y={260} size={11} fill={INK} weight={700} anchor="start">
          {t("right-hand rule: curl the fingers", "right-hand rule: curl the fingers")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={50} y={276} size={11} fill={INK} weight={700} anchor="start">
          {t("along I, the thumb gives m", "along I, the thumb gives m")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Chip x={50} y={286} w={245} h={28} fill={CREAM} stroke={RED} textFill={RED} size={10.5}>
          m along the current
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.9)} d={crossD(62, 290, 221, 20)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <Chip x={50} y={322} w={245} h={28} fill={CREAM} stroke={RED} textFill={RED} size={10.5}>
          m in the plane of the loop
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.9)} d={crossD(62, 326, 221, 20)} stroke={RED} sw={2.2} dur={0.35} />
      {/* the electron half of the pitfall */}
      <Draw on={beat >= 1} delay={dl(1, 6.5)} d={circleD(108, 400, 28)} stroke={MUTED} sw={1.8} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 7.1)} d={circleD(128, 380, 5)} stroke={INK} sw={1.8} dur={0.25} fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={140} y={372} size={10.5} fill={INK} weight={800} anchor="start">e⁻</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7.8)} d={arrowD(190, 398, 190, 364)} stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 8.1)}>
        <T x={200} y={376} size={12.5} fill={AMBER_DARK} script anchor="start">L</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8.5)} d={arrowD(190, 410, 190, 444)} stroke={RED} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 8.8)}>
        <T x={200} y={434} size={12.5} fill={RED} script anchor="start">μ_l</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.3)}>
        <T x={50} y={464} size={10.5} fill={RED} weight={800} anchor="start">
          {t("an electron's μ_l is OPPOSITE to L — never drop that minus",
             "an electron's μ_l is OPPOSITE to L — never drop that minus")}
        </T>
      </Fade>

      {/* ══════════ ✗2 — the dropped factor of two (beat 2) ══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 299 112 V 462" stroke={MUTED} sw={1.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={303} y={126} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ 2 · THE DROPPED FACTOR OF 2", "✗ 2 · THE DROPPED FACTOR OF 2")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={303} y={150} size={11} fill={INK} weight={700} anchor="start">
          {t("the most frequently penalised", "the most frequently penalised")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={303} y={166} size={11} fill={INK} weight={700} anchor="start">
          {t("slip in this whole subtopic", "slip in this whole subtopic")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Chip x={303} y={178} w={245} h={28} fill={CREAM} stroke={RED} textFill={RED} size={11}>
          μ_l / L = e / m
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={crossD(315, 182, 221, 20)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Chip x={303} y={214} w={245} h={28} fill={CREAM} stroke={RED} textFill={RED} size={11}>
          μ_l = e v r
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d={crossD(315, 218, 221, 20)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <Chip x={303} y={252} w={245} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={11.5}>
          e / 2m   and   e v r / 2
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.7)}>
        <T x={303} y={310} size={11} fill={INK} weight={700} anchor="start">
          {t("where the ½ is born, in step two:", "where the ½ is born, in step two:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={303} y={332} size={11.5} fill={INK} weight={800} anchor="start">
          {t("I = e v / 2π r      A = π r²", "I = e v / 2π r      A = π r²")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={303} y={356} size={11.5} fill={INK} weight={800} anchor="start">
          {t("μ_l = I A = e v r / 2", "μ_l = I A = e v r / 2")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.4)} d={ringD(418, 352, 12, 11)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 7.0)}>
        <T x={303} y={392} size={11} fill={RED} weight={800} anchor="start">
          {t("it survives all the way to the", "it survives all the way to the")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={303} y={408} size={11} fill={RED} weight={800} anchor="start">
          {t("Bohr magneton. Lose it and every", "Bohr magneton. Lose it and every")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={303} y={424} size={11} fill={RED} weight={800} anchor="start">
          {t("answer is exactly twice too large —", "answer is exactly twice too large —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.2)}>
        <T x={303} y={440} size={11} fill={RED} weight={800} anchor="start">
          {t("plausible enough to go unnoticed", "plausible enough to go unnoticed")}
        </T>
      </Fade>

      {/* ══════════ ✗3 — near formula vs far (beat 3) ══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 552 112 V 462" stroke={MUTED} sw={1.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={556} y={126} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ 3 · NEAR FORMULA vs FAR", "✗ 3 · NEAR FORMULA vs FAR")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Ellipse cx={600} cy={200} rx={8} ry={24} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 600 200 L 600 178" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={590} y={172} size={10.5} fill={INK} weight={800} anchor="end">R</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Line x1={600} y1={200} x2={786} y2={200} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Circle cx={640} cy={200} r={5} fill={RED} />
        <T x={640} y={182} size={10.5} fill={RED} weight={800}>close</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <Circle cx={772} cy={200} r={5} fill={GREEN} />
        <T x={772} y={182} size={10.5} fill={GREEN} weight={800}>far</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={556} y={246} size={11} fill={INK} weight={700} anchor="start">
          {t("the exact on-axis formula works at", "the exact on-axis formula works at")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={556} y={262} size={11} fill={INK} weight={700} anchor="start">
          {t("ANY distance — never wrong, just", "ANY distance — never wrong, just")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={556} y={278} size={11} fill={INK} weight={700} anchor="start">
          {t("a slow route when you are far", "a slow route when you are far")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={556} y={304} size={11} fill={RED} weight={800} anchor="start">
          {t("the reverse error is worse: the", "the reverse error is worse: the")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={556} y={320} size={11} fill={RED} weight={800} anchor="start">
          {t("far-field formula used close to", "far-field formula used close to")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={556} y={336} size={11} fill={RED} weight={800} anchor="start">
          {t("the loop is genuinely wrong", "the loop is genuinely wrong")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <Chip x={556} y={350} w={245} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={10.5}>
          compare x with R — and write it down
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.0)}>
        <T x={556} y={406} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("far  (x ≫ R)  →  dipole formula", "far  (x ≫ R)  →  dipole formula")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={556} y={424} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("close (x ~ R)  →  exact formula", "close (x ~ R)  →  exact formula")}
        </T>
      </Fade>

      {/* ══════════ ✗4 — the sign of the work (beat 4) ══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 805 112 V 462" stroke={MUTED} sw={1.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={809} y={126} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ 4 · THE SIGN OF THE WORK", "✗ 4 · THE SIGN OF THE WORK")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Chip x={809} y={138} w={235} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={10.5}>
          W = m B (cos θ₁ − cos θ₂)
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(900, 300, 900, 214)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={888} y={214} size={11.5} fill={AMBER_DARK} weight={800} anchor="end">B</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={arrowD(900, 266, 929, 215.8)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 3.0)} d={arcD(900, 266, 40, -90, -60)} stroke={INK} sw={1.5} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={924} y={246} size={10.5} fill={INK} weight={800} anchor="start">θ₁</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.7)} d={arrowD(900, 266, 956, 251)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 4.1)} d={arcD(900, 266, 54, -90, -15)} stroke={RED} sw={1.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={954} y={286} size={10.5} fill={RED} weight={800} anchor="start">θ₂</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.8)} d={arcArrowD(900, 266, 70, -60, -18)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 5.3)}>
        <T x={809} y={324} size={11} fill={INK} weight={700} anchor="start">
          {t("turning AWAY from alignment costs", "turning AWAY from alignment costs")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.7)}>
        <T x={809} y={340} size={11} fill={INK} weight={700} anchor="start">
          {t("positive work — alignment is the", "positive work — alignment is the")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.1)}>
        <T x={809} y={356} size={11} fill={INK} weight={700} anchor="start">
          {t("stable, low-energy position", "stable, low-energy position")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.7)}>
        <T x={809} y={382} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("turning TOWARD alignment releases", "turning TOWARD alignment releases")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.1)}>
        <T x={809} y={398} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("energy — reason it, don't memorise", "energy — reason it, don't memorise")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.7)}>
        <T x={809} y={424} size={11} fill={RED} weight={800} anchor="start">
          {t("a NEGATIVE W for turning away", "a NEGATIVE W for turning away")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.1)}>
        <T x={809} y={440} size={11} fill={RED} weight={800} anchor="start">
          {t("⇒ your cosines are swapped", "⇒ your cosines are swapped")}
        </T>
      </Fade>

      {/* ══════════ BAND — the pro-tip and the closing thought ══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 50 476 H 1044" stroke={INK} sw={1.5} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={50} y={496} size={13.5} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP · MAP EVERY MAGNETIC-DIPOLE QUESTION ONTO THE ELECTRIC DIPOLE YOU ALREADY KNOW",
             "PRO-TIP · MAP EVERY MAGNETIC-DIPOLE QUESTION ONTO THE ELECTRIC DIPOLE YOU ALREADY KNOW")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={50} y={516} size={11} fill={INK} weight={700} anchor="start">
          {t("axial : equatorial = 2 : 1", "axial : equatorial = 2 : 1")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={300} y={516} size={11} fill={INK} weight={700} anchor="start">
          {t("τ = p E sin θ → m B sin θ", "τ = p E sin θ → m B sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={560} y={516} size={11} fill={INK} weight={700} anchor="start">
          {t("U = − p E cos θ → − m B cos θ", "U = − p E cos θ → − m B cos θ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={820} y={516} size={11} fill={INK} weight={700} anchor="start">
          {t("far fields identical in form", "far fields identical in form")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <Chip x={50} y={524} w={220} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12}>
          p → m
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Chip x={290} y={524} w={250} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12}>
          1/4πε₀ → μ₀/4π
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={560} y={545} size={11.5} fill={RED} weight={800} anchor="start">
          {t("blank in the exam hall? write the electric one you DO remember and translate it",
             "blank in the exam hall? write the electric one you DO remember and translate it")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={50} y={574} size={11} fill={INK} weight={700} anchor="start">
          {t("the chapter in one sentence — what field does a current make (Biot–Savart, then Ampère), what force does a field exert (circular motion, the cyclotron, wires, motor torque),",
             "the chapter in one sentence — what field does a current make (Biot–Savart, then Ampère), what force does a field exert (circular motion, the cyclotron, wires, motor torque),")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={50} y={592} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("and finally: the loop is not merely affected by magnetism — it IS the elementary magnet. A bar magnet is an enormous number of atomic loops, all aligned.",
             "and finally: the loop is not merely affected by magnetism — it IS the elementary magnet. A bar magnet is an enormous number of atomic loops, all aligned.")}
        </T>
      </Fade>
    </Scene>
  );
}
