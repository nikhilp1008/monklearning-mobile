/**
 * P12Ch05 · Section 68 — "Pitfalls: swapped materials, missing cores and lost faces"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork sat on materially different ground
 * from the voice (verdict PARTIAL).
 *
 * WHAT THE BOARD USED TO SHOW: only one of the spoken slips (retentivity alone
 * is not enough) plus two that are never mentioned here — eddy currents in
 * solid A.C. cores, and aluminium/copper being useless for magnetic shielding.
 * The two slips the section title actually names — forgetting the μ_r core
 * factor, and losing the second pole face — were missing entirely.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: four slips, in order —
 *   ① swapping steel and soft iron (and that fixing it first fixes three more)
 *   ② forgetting the core factor: B = μ₀ μ_r n I, not μ₀ n I
 *   ③ missing the second pole face: F = B²A/μ₀ = 2 × B²A/2μ₀
 *   ④ confusing retentivity (the field left at zero H) with coercivity (the
 *      reverse field needed to zero it) — and, if forced to rank them for a
 *      permanent magnet, coercivity is the make-or-break one.
 * Slip ④ is drawn on a real B–H loop with B_r and H_c marked at their places.
 *
 * NOTE: beat 1 says the four slips are "collected with the unit warning
 * underneath". The narration does not restate which unit warning, so the
 * footer carries this subtopic's one (cm² → 10⁻⁴ m², taught in sections 61
 * and 66) rather than inventing a new one.
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "four slips, all checkable in seconds"      title + underline
 *   1  "collected, with the unit warning underneath" subtitle + footer warning
 *   2  "the first slip is swapping steel and soft iron"  slip ①
 *   3  "reverse those and everything downstream inverts" fix-this-first line
 *   4  "the second slip is forgetting the core factor"   slip ②
 *   5  "the third is missing the second pole face"       slip ③ + horseshoe glyph
 *   6  "the fourth is confusing retentivity with coercivity" slip ④ on the loop
 *   7  "coercivity is the make-or-break one"             the ranking refinement
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** closed B–H hysteresis loop */
function loopD(cx: number, cy: number, hw: number, hh: number, c: number, r: number): string {
  return [
    `M ${cx + hw} ${cy - hh}`,
    `C ${cx + hw * 0.4} ${cy - hh} ${cx + c} ${cy - r * 1.15} ${cx} ${cy - r}`,
    `C ${cx - c * 0.9} ${cy - r * 0.85} ${cx - c} ${cy - r * 0.35} ${cx - c} ${cy}`,
    `C ${cx - c} ${cy + r * 0.55} ${cx - hw * 0.45} ${cy + hh * 0.8} ${cx - hw} ${cy + hh}`,
    `C ${cx - hw * 0.4} ${cy + hh} ${cx - c} ${cy + r * 1.15} ${cx} ${cy + r}`,
    `C ${cx + c * 0.9} ${cy + r * 0.85} ${cx + c} ${cy + r * 0.35} ${cx + c} ${cy}`,
    `C ${cx + c} ${cy - r * 0.55} ${cx + hw * 0.45} ${cy - hh * 0.8} ${cx + hw} ${cy - hh}`,
  ].join(" ");
}

export default function P12Ch05Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Four slips that close the subtopic", "Chaar galtiyaan jo subtopic band karti hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 310 60 C 480 56, 650 64, 780 58" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — collected, with the unit warning underneath ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("all four are checkable in a few seconds before you hand the paper in",
             "chaaron ko paper dene se pehle kuch second mein check kiya ja sakta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={40} y={548} w={1000} h={44} fill={RED} textFill="#ffffff" size={14}>
          {t("★ the unit warning: 1 cm² = 10⁻⁴ m² — convert every pole-face area before substituting",
             "★ unit warning: 1 cm² = 10⁻⁴ m² — har pole-face area substitute se pehle convert karo")}
        </Chip>
      </Fade>

      {/* ================= slip ① (beat 2) ================= */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={48} y={120} size={14} fill={RED} weight={800} anchor="start">
          {t("① STEEL ⇄ SOFT IRON, SWAPPED", "① STEEL ⇄ SOFT IRON, ULTE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={54} y={146} size={12.5} fill={INK} weight={700} anchor="start">
          {t("STEEL — high coercivity, wide loop → PERMANENT MAGNETS",
             "STEEL — high coercivity, wide loop → PERMANENT MAGNETS")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={54} y={168} size={12.5} fill={INK} weight={700} anchor="start">
          {t("SOFT IRON — high μ, low retentivity, thin loop → CORES",
             "SOFT IRON — high μ, low retentivity, thin loop → CORES")}
        </T>
      </Fade>

      {/* ---- beat 3 — fix this one first ---- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={54} y={196} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("reverse those and every downstream answer inverts with them",
             "inhe ulta karo aur aage ke saare answers ulte ho jaate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={54} y={220} size={13} fill={RED} weight={800} anchor="start">
          {t("fix this one FIRST — three other questions depend on it",
             "isse PEHLE theek karo — teen aur sawaal isi par tike hain")}
        </T>
      </Fade>

      {/* ================= slip ② (beat 4) ================= */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={48} y={258} size={14} fill={RED} weight={800} anchor="start">
          {t("② FORGETTING THE CORE FACTOR", "② CORE FACTOR BHOOL JAANA")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={54} y={292} size={18} fill={GREEN} weight={900} anchor="start">
          B = μ₀ μ_r n I
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={54} y={322} size={16} fill={RED} weight={800} anchor="start">
          B = μ₀ n I
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={crossD(52, 308, 108, 18)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={54} y={348} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("dropping μ_r undercounts the field by hundreds or thousands of times",
             "μ_r chhodne se field sau-hazaar guna kam nikalta hai")}
        </T>
      </Fade>

      {/* ================= slip ③ (beat 5) ================= */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={48} y={384} size={14} fill={RED} weight={800} anchor="start">
          {t("③ MISSING THE SECOND POLE FACE", "③ DOOSRA POLE FACE CHHOOT JAANA")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)}
        d="M 78 456 L 78 428 A 22 22 0 0 1 122 428 L 122 456"
        stroke={INK_LIGHT} sw={12} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Rect x={68} y={452} width={20} height={10} rx={2} fill={RED} />
        <Rect x={112} y={452} width={20} height={10} rx={2} fill={GREEN} />
        <Rect x={62} y={462} width={76} height={18} rx={3} fill={CREAM} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={162} y={418} size={13} fill={INK} weight={700} anchor="start">
          {t("a horseshoe grips with TWO faces", "horseshoe DO faces se pakadta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={162} y={446} size={14.5} fill={GREEN} weight={900} anchor="start">
          F = B² A / μ₀ = 2 × B² A / 2μ₀
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={162} y={472} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("count the faces before you pick the formula — every single time",
             "formula chunne se pehle faces gino — har baar")}
        </T>
      </Fade>

      {/* ================= slip ④ (beat 6) ================= */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={568} y={120} size={14} fill={RED} weight={800} anchor="start">
          {t("④ RETENTIVITY IS NOT COERCIVITY", "④ RETENTIVITY, COERCIVITY NAHI HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Line x1={620} y1={300} x2={985} y2={300} stroke={MUTED} strokeWidth={1.5} />
        <Line x1={800} y1={190} x2={800} y2={412} stroke={MUTED} strokeWidth={1.5} />
        <T x={995} y={304} size={12.5} fill={MUTED} weight={700}>H</T>
        <T x={792} y={192} size={12.5} fill={MUTED} anchor="end" weight={700}>B</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={loopD(800, 300, 160, 96, 90, 72)} stroke={AMBER_DARK} sw={2.6} dur={1.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <Circle cx={800} cy={228} r={5} fill={RED} />
        <T x={818} y={224} size={13} fill={RED} anchor="start" weight={900}>B_r</T>
        <Circle cx={710} cy={300} r={5} fill={GREEN} />
        <T x={702} y={324} size={13} fill={GREEN} anchor="end" weight={900}>H_c</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={568} y={432} size={12.5} fill={RED} weight={800} anchor="start">
          {t("B_r retentivity — the field left at zero applied field: how much it KEEPS",
             "B_r retentivity — zero applied field par bacha field: kitna RAKHTA hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={568} y={456} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("H_c coercivity — the reverse field needed to zero it: how hard to ERASE",
             "H_c coercivity — use zero karne ka reverse field: kitna MUSHKIL mitana hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={568} y={480} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("different questions, different quantities, different units",
             "alag sawaal, alag quantities, alag units")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — which one ranks higher ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={568} y={508} size={13} fill={INK} weight={700} anchor="start">
          {t("Both high for a permanent magnet — but rank coercivity first:",
             "Permanent magnet ko dono chahiye — par coercivity pehle:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={568} y={530} size={13} fill={RED} weight={800} anchor="start">
          {t("high B_r with low H_c starts strong, then quietly fades.",
             "high B_r + low H_c shuru mein strong, phir chupchaap khatam.")}
        </T>
      </Fade>
    </Scene>
  );
}
