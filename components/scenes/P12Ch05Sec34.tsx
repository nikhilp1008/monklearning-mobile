/**
 * P12Ch05 · Section 34 — "Permeability relations, Curie's law and Curie–Weiss"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: PARTIAL.
 *
 * WHAT THE BOARD USED TO TEACH: only the response parameters (M, H, χ, μ_r and
 * B = μ₀(H + M)) — i.e. the previous section's ground. It carried nothing about
 * temperature, so the voice kept pointing at things that were not drawn: "the
 * solid curve", "the dashed curve", "that vertical red line".
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: three permeability relations
 * (μ_r = 1 + χ, μ = μ₀μ_r, B = μH) with their units and dimensions, then the
 * two temperature laws — Curie (χ = Cμ₀/T, the solid hyperbola) and Curie–Weiss
 * (χ = C′/(T − T_c), the dashed curve that diverges at the vertical red line) —
 * and closes with real Curie temperatures for iron, nickel and gadolinium.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 13.4, 30.8, 55.1, 84.7, 100.7,
 * 121.4, 138.3):
 *   0  "three relations and two temperature laws"  title + subtitle
 *   1  "mu_r = 1 + chi, mu = mu0 mu_r, B = mu H"   the three relations
 *   2  "units: dimensionless · T m/A ≡ H/m"        units + dimensional formula
 *   3  "alignment energy vs thermal energy"        χ = Cμ₀/T + tug-of-war sketch
 *                                                  + the empty χ–T axes
 *   4  "the solid curve — a hyperbola"             Curie hyperbola drawn
 *   5  "now the dashed curve — Curie Weiss"        dashed curve above T_c
 *   6  "that vertical red line"                    T_c asymptote, χ blows up
 *   7  "iron 1043 K, nickel 631 K, gadolinium 317" the three Curie points
 */

import React from "react";
import { G, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- χ–T graph frame ------------------------------------------------ */
const X0 = 610;   // T = 0
const Y0 = 414;   // χ = 0
const K = 16000;  // Curie constant in board pixels

function sampleD(f: (u: number) => number, u0: number, u1: number, n = 64): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n;
    pts.push(`${i === 0 ? "M" : "L"} ${(X0 + u).toFixed(1)} ${(Y0 - f(u)).toFixed(1)}`);
  }
  return pts.join(" ");
}

const curieD = sampleD((u) => K / u, 60, 420);
const weissD = sampleD((u) => K / (u - 150), 205.2, 420);

function Badge({ n, cx, cy, on, delay }: { n: string; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 12} ${cy} A 12 12 0 1 1 ${cx + 12} ${cy} A 12 12 0 1 1 ${cx - 12} ${cy}`}
        stroke={RED} sw={2.1} dur={0.38} />
      <Fade on={on} delay={delay + 0.26}>
        <T x={cx} y={cy + 5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* randomised moments for the "heat wins" half of the tug-of-war */
  const messy: [number, number][] = [
    [372, 462], [406, 486], [440, 460], [386, 494], [426, 498],
  ];
  const messyAng = [25, 200, 115, 300, 70];

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Permeability, and the two temperature laws",
             "Permeability, aur do temperature laws")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 268 60 C 500 56, 680 64, 812 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("the two temperature laws look almost identical — that is the whole danger",
             "dono temperature laws lagbhag ek jaise dikhte hain — wahi asli khatra hai")}
        </T>
      </Fade>

      {/* ── LEFT · beat 1 — the three permeability relations ────────── */}
      <Badge n="1" cx={62} cy={104} on={beat >= 1} delay={dl(1, 0.2)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={86} y={109} size={14} fill={RED} weight={800} anchor="start">
          {t("THREE PERMEABILITY RELATIONS", "TEEN PERMEABILITY RELATIONS")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={62} y={146} size={18} fill={INK} weight={900} anchor="start">μ_r  =  1 + χ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={62} y={180} size={18} fill={INK} weight={900} anchor="start">μ  =  μ₀ μ_r</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={62} y={214} size={18} fill={GREEN_DARK} weight={900} anchor="start">B  =  μ H</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={200} y={214} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("— the compact form of B = μ₀(H + M)", "— B = μ₀(H + M) ka compact roop")}
        </T>
      </Fade>

      {/* ── LEFT · beat 2 — units and dimensions ────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={62} y={236} width={452} height={92} rx={9} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={262} size={13} fill={INK} weight={800} anchor="start">
          {t("μ_r : dimensionless — it is 1 + a pure number",
             "μ_r : dimensionless — yeh 1 + ek pure number hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={80} y={288} size={13} fill={INK} weight={800} anchor="start">
          {t("μ : tesla metre per ampere  ≡  henry per metre",
             "μ : tesla metre per ampere  ≡  henry per metre")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={80} y={314} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("dimensions of μ :  [M¹ L¹ T⁻² A⁻²]", "μ ke dimensions :  [M¹ L¹ T⁻² A⁻²]")}
        </T>
      </Fade>

      {/* ── LEFT · beat 3 — Curie's law + the competition ───────────── */}
      <Badge n="2" cx={62} cy={362} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={86} y={367} size={14} fill={RED} weight={800} anchor="start">
          {t("CURIE'S LAW — THE PARAMAGNET", "CURIE'S LAW — PARAMAGNET")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={62} y={402} size={19} fill={INK} weight={900} anchor="start">χ  =  C μ₀ / T</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={250} y={402} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("so χ ∝ 1 / T", "yaani χ ∝ 1 / T")}
        </T>
      </Fade>

      {/* the tug-of-war: the field aligning against thermal jostling */}
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Rect x={62} y={426} width={452} height={92} rx={9} fill={CREAM} stroke={MUTED} strokeWidth={1.5} />
        <T x={140} y={446} size={12} fill={GREEN_DARK} weight={800}>{t("field aligns", "field align karta hai")}</T>
        <T x={412} y={446} size={12} fill={RED} weight={800}>{t("heat randomises", "garmi bikher deti hai")}</T>
      </Fade>
      {[110, 140, 170, 200].map((x, i) => (
        <Draw key={x} on={beat >= 3} delay={dl(3, 2.0 + i * 0.08)} dur={0.3}
          d={arrowD(x, 502, x, 458)} stroke={GREEN_DARK} sw={2} />
      ))}
      {messy.map(([x, y], i) => {
        const a = (messyAng[i] * Math.PI) / 180;
        return (
          <Draw key={`${x}-${y}`} on={beat >= 3} delay={dl(3, 2.3 + i * 0.08)} dur={0.3}
            d={arrowD(x - 20 * Math.cos(a), y - 20 * Math.sin(a), x + 20 * Math.cos(a), y + 20 * Math.sin(a))}
            stroke={RED} sw={2} />
        );
      })}
      <Draw on={beat >= 3} delay={dl(3, 2.7)} dur={0.5} d={arrowD(238, 480, 328, 480)} stroke={INK_LIGHT} sw={1.8} />
      <Draw on={beat >= 3} delay={dl(3, 2.8)} dur={0.5} d={arrowD(328, 496, 238, 496)} stroke={INK_LIGHT} sw={1.8} />
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={283} y={466} size={12.5} fill={INK} weight={800}>
          {t("cooler ⇒ the field wins", "thanda ⇒ field jeetta hai")}
        </T>
      </Fade>

      {/* ── RIGHT · the χ–T graph ───────────────────────────────────── */}
      {/* axes appear with Curie's law (beat 3) */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} dur={0.6} d={arrowD(X0, Y0, 1034, Y0)} stroke={INK} sw={2} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} dur={0.6} d={arrowD(X0, Y0, X0, 104)} stroke={INK} sw={2} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={594} y={112} size={14} fill={INK} weight={800} anchor="end">χ</T>
        <T x={1034} y={438} size={14} fill={INK} weight={800} anchor="end">T</T>
      </Fade>

      {/* beat 4 — the solid Curie hyperbola */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} dur={1.5} d={curieD} stroke={GREEN_DARK} sw={2.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={1030} y={468} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">
          {t("solid — paramagnet: a plain 1/T hyperbola, no special temperature",
             "solid — paramagnet: seedha 1/T hyperbola, koi khaas temperature nahi")}
        </T>
      </Fade>

      {/* beat 5 — the dashed Curie–Weiss curve */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Path d={weissD} fill="none" stroke={AMBER_DARK} strokeWidth={2.6} strokeDasharray="8 6" strokeLinecap="round" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={1030} y={492} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">
          {t("dashed — ferromagnet above its Curie point: χ = C′ / (T − T_c)",
             "dashed — Curie point ke upar ferromagnet: χ = C′ / (T − T_c)")}
        </T>
      </Fade>

      {/* beat 6 — the vertical asymptote at T_c */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} dur={0.6} d="M 760 118 L 760 414" stroke={RED} sw={2.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={760} y={438} size={13} fill={RED} weight={900}>T_c</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={1030} y={516} size={12.5} fill={RED} weight={800} anchor="end">
          {t("χ does not merely grow — it blows up as T → T_c from above",
             "χ sirf badhta nahi — T → T_c ke paas jaate hi phat jaata hai")}
        </T>
      </Fade>

      {/* ── beat 7 — real Curie points ──────────────────────────────── */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={544} size={13.5} fill={INK} weight={800}>
          {t("where real ferromagnets actually give up:", "asli ferromagnets kahan haar maante hain:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={60} y={556} w={300} h={38} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={14} script={false}>
          {t("Iron · T_c ≈ 1043 K", "Iron · T_c ≈ 1043 K")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={380} y={556} w={300} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          {t("Nickel · T_c ≈ 631 K", "Nickel · T_c ≈ 631 K")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={700} y={556} w={320} h={38} fill={RED} textFill="#ffffff" size={12.5} script={false}>
          {t("Gadolinium · 317 K — barely above room temperature",
             "Gadolinium · 317 K — room temperature se bas thoda upar")}
        </Chip>
      </Fade>
    </Scene>
  );
}
