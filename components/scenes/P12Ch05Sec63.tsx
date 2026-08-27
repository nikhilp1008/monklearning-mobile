/**
 * P12Ch05 · Section 63 — "Reading the loop to choose a material"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: magnetic shielding by a high-μ shell —
 * B_in ≈ [9 / (2μ_r(1 − a³/b³))] B_ext and the shielding factor S = (2/9)μ_r,
 * with mu-metal numbers. Nothing about shielding is spoken in this section.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: read the hysteresis loop as a two-way
 * decision chart. Q1 "must it stay magnetised?" → high coercivity + high
 * retentivity → wide loop → steel or Alnico (check coercivity first).
 * Q2 "must it switch off cleanly and waste little energy?" → low coercivity,
 * low retentivity, high permeability, small loop area → soft iron. Then the
 * area of the loop is the energy dissipated per unit volume per cycle, so at
 * 50–60 Hz a fat loop cooks the core; and finally B = μ₀μ_r n I gives
 * amplification plus clean switch-off. The board is now that chart, drawn as
 * two real B–H loops.
 *
 * BEAT MAP (n_reveals = 9 → valid gates 0..8):
 *   0  "the loop is a decision chart, not a graph"   title + underline
 *   1  "the chart runs in both directions"           the two-way banner
 *   2  "Q1 — does it need to STAY magnetised?"       Q1 heading + two demands
 *   3  "wide loop: steel or Alnico"                  the wide loop, drawn
 *   4  "Q2 — switch off cleanly, waste little?"      Q2 heading + four demands
 *   5  "that combination is soft iron"               the thin loop, drawn
 *   6  "the area = energy per unit volume per cycle" both loops shaded + the law
 *   7  "cycled fifty or sixty times a second"        why a fat A.C. core cooks
 *   8  "amplification plus clean switch off"         B = μ₀ μ_r n I footer
 */

import React from "react";
import { Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

/** closed B–H hysteresis loop: hw/hh = saturation box, c = coercivity, r = retentivity */
function loopD(cx: number, cy: number, hw: number, hh: number, c: number, r: number): string {
  return [
    `M ${cx + hw} ${cy - hh}`,
    `C ${cx + hw * 0.4} ${cy - hh} ${cx + c} ${cy - r * 1.15} ${cx} ${cy - r}`,
    `C ${cx - c * 0.9} ${cy - r * 0.85} ${cx - c} ${cy - r * 0.35} ${cx - c} ${cy}`,
    `C ${cx - c} ${cy + r * 0.55} ${cx - hw * 0.45} ${cy + hh * 0.8} ${cx - hw} ${cy + hh}`,
    `C ${cx - hw * 0.4} ${cy + hh} ${cx - c} ${cy + r * 1.15} ${cx} ${cy + r}`,
    `C ${cx + c * 0.9} ${cy + r * 0.85} ${cx + c} ${cy + r * 0.35} ${cx + c} ${cy}`,
    `C ${cx + c} ${cy - r * 0.55} ${cx + hw * 0.45} ${cy - hh * 0.8} ${cx + hw} ${cy - hh}`,
    "Z",
  ].join(" ");
}

const WIDE = loopD(280, 296, 150, 78, 88, 62);
const THIN = loopD(800, 296, 150, 78, 20, 54);

export default function P12Ch05Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const axes = (cx: number, on: boolean, delay: number) => (
    <Fade on={on} delay={delay}>
      <Line x1={cx - 168} y1={296} x2={cx + 172} y2={296} stroke={MUTED} strokeWidth={1.5} />
      <Line x1={cx} y1={212} x2={cx} y2={384} stroke={MUTED} strokeWidth={1.5} />
      <T x={cx + 180} y={300} size={12.5} fill={MUTED} weight={700}>H</T>
      <T x={cx - 8} y={212} size={12.5} fill={MUTED} anchor="end" weight={700}>B</T>
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Reading the loop to choose a material", "Loop padhkar material chunna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 300 62 C 480 58, 660 66, 790 60" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the chart runs both ways ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={90} size={14} fill={AMBER_DARK} weight={800}>
          {t("the loop is a DECISION CHART — and it runs both ways",
             "loop ek DECISION CHART hai — aur dono taraf chalta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)}
        d={`${arrowD(540, 108, 418, 108)} ${arrowD(540, 108, 662, 108)}`}
        stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={300} y={112} size={12.5} fill={MUTED} weight={700}>
          {t("requirement → material", "requirement → material")}
        </T>
        <T x={780} y={112} size={12.5} fill={MUTED} weight={700}>
          {t("loop shape → what it's for", "loop shape → kis kaam ke liye")}
        </T>
      </Fade>

      {/* ================= LEFT · Q1 ================= */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={48} y={142} size={14} fill={RED} weight={800} anchor="start">
          {t("Q1 · MUST IT STAY MAGNETISED?", "Q1 · KYA ISE MAGNETISED RAHNA HAI?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={54} y={168} size={13} fill={INK} weight={700} anchor="start">
          {t("• high COERCIVITY — knocks and stray fields can't erase it",
             "• high COERCIVITY — jhatke aur stray fields mita na sakein")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={54} y={190} size={13} fill={INK} weight={700} anchor="start">
          {t("• high RETENTIVITY — the field it keeps is worth having",
             "• high RETENTIVITY — jo field bachta hai wo kaam ka ho")}
        </T>
      </Fade>

      {axes(280, beat >= 3, dl(3, 0.2))}
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={WIDE} stroke={RED} sw={2.8} dur={1.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={280} y={404} size={15} fill={RED} weight={900}>
          {t("WIDE LOOP → steel or Alnico", "WIDE LOOP → steel ya Alnico")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={280} y={426} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("check COERCIVITY first — it is what lets it KEEP a field",
             "pehle COERCIVITY dekho — wahi field ko rakhne deta hai")}
        </T>
      </Fade>

      {/* ================= RIGHT · Q2 ================= */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={568} y={142} size={14} fill={RED} weight={800} anchor="start">
          {t("Q2 · MUST IT SWITCH OFF CLEANLY?", "Q2 · KYA ISE SAAF-SAAF BAND HONA HAI?")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={574} y={168} size={13} fill={INK} weight={700} anchor="start">
          {t("• low coercivity   • low retentivity",
             "• low coercivity   • low retentivity")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={574} y={190} size={13} fill={INK} weight={700} anchor="start">
          {t("• high permeability   • small enclosed loop AREA",
             "• high permeability   • chhota loop AREA")}
        </T>
      </Fade>

      {axes(800, beat >= 5, dl(5, 0.2))}
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={THIN} stroke={GREEN} sw={2.8} dur={1.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={800} y={404} size={15} fill={GREEN} weight={900}>
          {t("THIN LOOP → soft iron", "THIN LOOP → soft iron")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={800} y={426} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("high μ for field per amp; low retentivity so nothing survives",
             "high μ se har amp par zyada field; low retentivity se kuchh bachta nahi")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — the area IS the energy ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Path d={WIDE} fill={RED} opacity={0.16} />
        <Path d={THIN} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={48} y={458} size={13.5} fill={RED} weight={800} anchor="start">
          {t("The AREA enclosed = the energy dissipated per unit volume per cycle — lost as heat.",
             "Loop ka AREA = har cycle mein per unit volume kharch hui energy — heat ban kar.")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — 50–60 times a second ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={48} y={486} size={13} fill={INK} weight={700} anchor="start">
          {t("A transformer core — any A.C. electromagnet — is cycled fifty or sixty times every second.",
             "Transformer core — koi bhi A.C. electromagnet — har second mein 50–60 baar cycle hota hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={48} y={508} size={13} fill={INK} weight={700} anchor="start">
          {t("Multiply a fat loop's area by that many cycles per second and the core simply cooks.",
             "Mote loop ke area ko itni cycles se guna karo aur core seedha pak jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={48} y={530} size={13} fill={RED} weight={800} anchor="start">
          {t("A thin loop is not a refinement there — it is a requirement.",
             "Wahaan thin loop koi luxury nahi — requirement hai.")}
        </T>
      </Fade>

      {/* ---------------- beat 8 — amplification + clean switch-off ---------------- */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <Chip x={40} y={550} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ B = μ₀ μ_r n I — soft iron multiplies the field hundreds of times, then relaxes the instant the current stops",
             "★ B = μ₀ μ_r n I — soft iron field ko sau-guna karta hai, aur current rukte hi chhod deta hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
