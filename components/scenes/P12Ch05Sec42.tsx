/**
 * P12Ch05 · Section 42 — "Advanced: saturation magnetisation of a single domain"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: superconductor levitation and the Meissner
 * effect — χ = −1, μ_r = 0, maglev. That belongs to section 33's closing beat;
 * this section never mentions superconductors.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: a JEE-Advanced counting estimate of the
 * saturation magnetisation of a single iron domain, a cube of side 1.5 µm, with
 * ρ = 7.9 × 10³ kg m⁻³, molar mass 56 g mol⁻¹ and an atomic moment of
 * 9.3 × 10⁻²⁴ A m². Every printed number is recomputed from those givens:
 *     V     = (1.5 × 10⁻⁶)³                      = 3.375 × 10⁻¹⁸ m³
 *     mass  = 7.9 × 10³ × 3.375 × 10⁻¹⁸          = 2.67 × 10⁻¹⁴ kg = 2.67 × 10⁻¹¹ g
 *     moles = 2.67 × 10⁻¹¹ / 56                  = 4.76 × 10⁻¹³ mol
 *     atoms = 4.76 × 10⁻¹³ × 6.022 × 10²³        = 2.87 × 10¹¹
 *     m_tot = 2.87 × 10¹¹ × 9.3 × 10⁻²⁴          = 2.67 × 10⁻¹² A m²
 *     M     = 2.67 × 10⁻¹² / 3.375 × 10⁻¹⁸       = 7.9 × 10⁵ A m⁻¹
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 15.2, 31.3, 58.9, 78.5, 104.3,
 * 127.0, 147.0):
 *   0  "a counting problem"                       title + subtitle
 *   1  "the route is laid out beside the cube"    the domain cube + the 6-node route
 *   2  "here is what we are given"                the givens
 *   3  "step one is the volume"                   V, and cube the power of ten
 *   4  "step two, mass then moles"                mass → grams → moles
 *   5  "step three, multiply by Avogadro"         the atom count, order 10¹¹
 *   6  "step four, the maximum possible moment"   m_tot
 *   7  "step five, divide by the volume"          M ≈ 7.9 × 10⁵ + why samples show less
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const CHAIN: string[] = ["V", "mass", "moles", "atoms", "total moment", "M = m_tot / V"];

export default function P12Ch05Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* moments inside the domain cube — all parallel */
  const domainArrows: [number, number][] = [];
  for (const x of [155, 200, 245]) for (const y of [200, 240, 280]) domainArrows.push([x, y]);

  /* the multi-domain sample: four blocks, each pointing its own way */
  const blocks: [number, number, number][] = [
    [220, 522, 90], [260, 522, 0], [220, 552, 200], [260, 552, 300],
  ];

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Saturation magnetisation of one domain", "Ek domain ka saturation magnetisation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 288 58 C 440 54, 640 62, 792 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("the numbers look heavy, but it is only a counting problem",
             "numbers bhaari lagte hain, par yeh sirf ginti ka sawaal hai")}
        </T>
      </Fade>

      {/* ── beat 1 — the cube and the route ────────────────────────── */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} dur={0.8}
        d="M 120 160 H 280 V 320 H 120 Z" stroke={INK} sw={2.2} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} dur={0.6}
        d="M 120 160 L 172 118 H 332 L 280 160" stroke={INK} sw={2.2} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} dur={0.6}
        d="M 332 118 V 278 L 280 320" stroke={INK} sw={2.2} />
      {domainArrows.map(([x, y], i) => (
        <Draw key={`${x}-${y}`} on={beat >= 1} delay={dl(1, 1.3 + i * 0.06)} dur={0.28}
          d={arrowD(x, y + 14, x, y - 14)} stroke={GREEN_DARK} sw={2.1} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={60} y={346} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("a single domain of iron — every moment already parallel",
             "lohe ka ek domain — har moment pehle se parallel")}
        </T>
      </Fade>

      {CHAIN.map((label, i) => (
        <Fade key={label} on={beat >= 1} delay={dl(1, 0.5 + i * 0.22)}>
          <Chip
            x={366} y={104 + i * 38} w={168} h={26}
            fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}
          >
            {label}
          </Chip>
        </Fade>
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <Draw key={i} on={beat >= 1} delay={dl(1, 0.68 + i * 0.22)} dur={0.2}
          d={arrowD(450, 130 + i * 38, 450, 141 + i * 38)} stroke={AMBER_DARK} sw={1.8} />
      ))}

      {/* ── beat 2 — the givens ────────────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={60} y={366} width={480} height={92} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={78} y={392} size={13.5} fill={INK} weight={900} anchor="start">
          {t("side  a = 1.5 µm = 1.5 × 10⁻⁶ m", "side  a = 1.5 µm = 1.5 × 10⁻⁶ m")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={78} y={416} size={13.5} fill={INK} weight={800} anchor="start">
          {t("density  ρ = 7.9 × 10³ kg m⁻³", "density  ρ = 7.9 × 10³ kg m⁻³")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={78} y={440} size={13} fill={INK} weight={800} anchor="start">
          {t("molar mass = 56 g mol⁻¹   ·   atom moment = 9.3 × 10⁻²⁴ A m²",
             "molar mass = 56 g mol⁻¹   ·   atom moment = 9.3 × 10⁻²⁴ A m²")}
        </T>
      </Fade>

      {/* ── beat 3 — step 1, volume ────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={570} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STEP 1 — VOLUME", "STEP 1 — VOLUME")}
        </T>
        <T x={570} y={146} size={14} fill={INK} weight={900} anchor="start">
          V = (1.5 × 10⁻⁶ m)³ = 3.375 × 10⁻¹⁸ m³
        </T>
        <T x={570} y={168} size={12.5} fill={RED} weight={800} anchor="start">
          {t("cube the power of ten as well — that is where answers go wrong",
             "power of ten ko bhi cube karo — yahin par jawab bigadte hain")}
        </T>
      </Fade>

      {/* ── beat 4 — step 2, mass then moles ───────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={570} y={204} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STEP 2 — MASS, THEN MOLES", "STEP 2 — MASS, PHIR MOLES")}
        </T>
        <T x={570} y={232} size={13.5} fill={INK} weight={800} anchor="start">
          m = ρV = 7.9 × 10³ × 3.375 × 10⁻¹⁸ = 2.67 × 10⁻¹⁴ kg
        </T>
        <T x={570} y={254} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("= 2.67 × 10⁻¹¹ g   (molar mass is in grams)",
             "= 2.67 × 10⁻¹¹ g   (molar mass grams mein hai)")}
        </T>
        <T x={570} y={276} size={13.5} fill={INK} weight={800} anchor="start">
          n = 2.67 × 10⁻¹¹ / 56 = 4.76 × 10⁻¹³ mol
        </T>
      </Fade>

      {/* ── beat 5 — step 3, count the atoms ───────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={570} y={312} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STEP 3 — COUNT THE ATOMS", "STEP 3 — ATOMS GINO")}
        </T>
        <T x={570} y={340} size={13.5} fill={INK} weight={800} anchor="start">
          N = 4.76 × 10⁻¹³ × 6.022 × 10²³ ≈ 2.87 × 10¹¹
        </T>
        <T x={570} y={362} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("exactly the 10¹¹ order quoted earlier for a domain",
             "domain ke liye pehle bataya gaya 10¹¹ order — wahi")}
        </T>
      </Fade>

      {/* ── beat 6 — step 4, the maximum moment ────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={570} y={398} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STEP 4 — THE MAXIMUM POSSIBLE MOMENT", "STEP 4 — ADHIKTAM SAMBHAV MOMENT")}
        </T>
        <T x={570} y={426} size={13.5} fill={INK} weight={800} anchor="start">
          m_tot = 2.87 × 10¹¹ × 9.3 × 10⁻²⁴ ≈ 2.67 × 10⁻¹² A m²
        </T>
        <T x={570} y={448} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("what you get if every atomic moment points the same way",
             "jab har atomic moment ek hi taraf ho, tab yeh milta hai")}
        </T>
      </Fade>

      {/* ── beat 7 — step 5, and what it means ─────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.5} d="M 570 468 H 1030" stroke={INK} sw={1.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={570} y={494} size={13.5} fill={RED} weight={800} anchor="start">
          {t("STEP 5 — DIVIDE BY THE VOLUME", "STEP 5 — VOLUME SE BHAAG DO")}
        </T>
        <T x={570} y={524} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          M = 2.67 × 10⁻¹² / 3.375 × 10⁻¹⁸ ≈ 7.9 × 10⁵ A m⁻¹
        </T>
        <T x={570} y={552} size={13} fill={INK} weight={700} anchor="start">
          {t("orders of magnitude beyond anything a paramagnet reaches —",
             "kisi bhi paramagnet se kai orders of magnitude zyada —")}
        </T>
        <T x={570} y={574} size={13} fill={RED} weight={800} anchor="start">
          {t("that is why ferromagnets are the loud family",
             "isiliye ferromagnets sabse zor waale hain")}
        </T>
      </Fade>

      {/* beat 7 — why a whole sample shows far less */}
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={60} y={494} size={13} fill={INK} weight={800} anchor="start">
          {t("so why does a whole iron bar show far less?", "to poora loha itna kam kyun dikhata hai?")}
        </T>
        <Rect x={80} y={506} width={80} height={72} rx={4} fill="none" stroke={GREEN_DARK} strokeWidth={1.8} />
        <Rect x={200} y={506} width={80} height={72} rx={4} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} />
        <Line x1={240} y1={506} x2={240} y2={578} stroke={AMBER_DARK} strokeWidth={1.2} />
        <Line x1={200} y1={542} x2={280} y2={542} stroke={AMBER_DARK} strokeWidth={1.2} />
        <T x={120} y={594} size={12.5} fill={GREEN_DARK} weight={800}>{t("one domain", "ek domain")}</T>
        <T x={240} y={594} size={12.5} fill={AMBER_DARK} weight={800}>{t("a whole sample", "poora sample")}</T>
      </Fade>
      {[[100, 524], [120, 524], [140, 524], [100, 560], [120, 560], [140, 560]].map(([x, y]) => (
        <Draw key={`d${x}-${y}`} on={beat >= 7} delay={dl(7, 1.2)} dur={0.25}
          d={arrowD(x, y + 11, x, y - 11)} stroke={GREEN_DARK} sw={1.9} />
      ))}
      {blocks.map(([x, y, deg]) => {
        const a = (deg * Math.PI) / 180;
        return (
          <Draw key={`b${x}-${y}`} on={beat >= 7} delay={dl(7, 1.4)} dur={0.25}
            d={arrowD(x - 11 * Math.cos(a), y - 11 * Math.sin(a), x + 11 * Math.cos(a), y + 11 * Math.sin(a))}
            stroke={AMBER_DARK} sw={1.9} />
        );
      })}
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={302} y={536} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("its domains start out", "iske domains shuru mein")}
        </T>
        <T x={302} y={556} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("pointing every which way", "har taraf mudhe hote hain")}
        </T>
      </Fade>
    </Scene>
  );
}
