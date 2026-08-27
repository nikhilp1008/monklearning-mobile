/**
 * P12Ch05 · Section 39 — "Board level: from magnetisation to susceptibility and field"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: NUMBERS.
 *
 * WHAT THE BOARD USED TO SHOW: a different worked example — χ = 599 given,
 * μ_r = 600, μ = 7.54 × 10⁻⁴ T m/A and M = 7.188 × 10⁵ A/m at H = 1200 A/m. It
 * even asked for a quantity (absolute permeability) the voice never asks for.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: H = 1500 A m⁻¹ produces M = 6 × 10⁵ A m⁻¹;
 * find (a) χ, (b) μ_r, (c) the field inside. Every printed value below is
 * recomputed from those spoken givens:
 *     χ    = M / H          = 6 × 10⁵ / 1500                    = 400
 *     μ_r  = 1 + χ                                              = 401
 *     H + M = 1500 + 600 000                                    = 6.015 × 10⁵ A m⁻¹
 *     B    = μ₀(H + M)     = 1.257 × 10⁻⁶ × 6.015 × 10⁵         = 0.756 ≈ 0.76 T
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 15.2, 31.6, 50.9, 71.5, 90.0,
 * 106.0, 124.5):
 *   0  "walks along the definition chain"      title + the M → χ → μ_r → B chain
 *   1  "the thin bar … the enormous block"     the H-against-M bar picture
 *   2  "given 1500 A/m producing 6 × 10⁵"      the givens and the three asks
 *   3  "part a — chi is M over H"              (a) χ = 400, units cancel
 *   4  "part b — one plus the susceptibility"  (b) μ_r = 401
 *   5  "part c — mu nought times H plus M"     (c) the sum and μ₀
 *   6  "multiplying gives about 0.76 tesla"    the answer + its size
 *   7  "read the answer back for meaning"      ferromagnet · B ≈ μ₀M
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const step = (x: number, w: number, label: string, on: boolean, delay: number) => (
    <Fade on={on} delay={delay}>
      <Chip x={x} y={80} w={w} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
        {label}
      </Chip>
    </Fade>
  );

  return (
    <Scene>
      {/* ── beat 0 — title and the definition chain ────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("From the response to the field inside", "Response se andar ke field tak")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 300 58 C 440 54, 640 62, 780 56" stroke={RED} sw={2.2} dur={0.55} />

      {step(158, 190, en ? "M — the response" : "M — response", beat >= 0, dl(0, 1.8))}
      {step(400, 130, "χ = M / H", beat >= 0, dl(0, 2.1))}
      {step(582, 140, "μ_r = 1 + χ", beat >= 0, dl(0, 2.4))}
      {step(774, 176, en ? "B inside" : "andar ka B", beat >= 0, dl(0, 2.7))}
      <Draw on={beat >= 0} delay={dl(0, 2.0)} dur={0.3} d={arrowD(354, 96, 392, 96)} stroke={AMBER_DARK} sw={2} />
      <Draw on={beat >= 0} delay={dl(0, 2.3)} dur={0.3} d={arrowD(536, 96, 574, 96)} stroke={AMBER_DARK} sw={2} />
      <Draw on={beat >= 0} delay={dl(0, 2.6)} dur={0.3} d={arrowD(728, 96, 766, 96)} stroke={AMBER_DARK} sw={2} />

      {/* ── beat 1 — the picture before any arithmetic ─────────────── */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} dur={0.5} d="M 78 384 H 360" stroke={INK} sw={1.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Rect x={110} y={381} width={54} height={3} fill={AMBER_DARK} />
        <T x={137} y={406} size={13} fill={AMBER_DARK} weight={800}>H</T>
        <T x={137} y={424} size={12.5} fill={AMBER_DARK} weight={700}>
          {t("what you apply", "jo tum lagate ho")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Rect x={230} y={172} width={92} height={212} fill={GREEN_DARK} />
        <T x={276} y={406} size={13} fill={GREEN_DARK} weight={800}>M</T>
        <T x={276} y={424} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("what the material answers", "material ka jawab")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={60} y={452} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("that size difference is the whole story here",
             "yahi size ka farq poori kahani hai")}
        </T>
        <T x={60} y={470} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("(H is drawn thicker than scale — truly it is 0.25 % of M)",
             "(H scale se mota banaya hai — asal mein wo M ka 0.25 % hai)")}
        </T>
      </Fade>

      {/* ── beat 2 — the givens ────────────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={420} y={134} width={604} height={86} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={442} y={166} size={15} fill={INK} weight={900} anchor="start">
          GIVEN:   H = 1500 A m⁻¹      M = 6 × 10⁵ A m⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={442} y={198} size={15} fill={RED} weight={900} anchor="start">
          FIND:    (a) χ        (b) μ_r        (c) B inside
        </T>
      </Fade>

      {/* ── beat 3 — part (a) ──────────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={440} y={262} size={16} fill={INK} weight={900} anchor="start">
          (a)   χ = M / H = (6 × 10⁵) / 1500 = 400
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={440} y={286} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("both are in A m⁻¹ — the units cancel, so χ is a pure number, as it must be",
             "dono A m⁻¹ mein hain — units cancel, isliye χ pure number hai")}
        </T>
      </Fade>

      {/* ── beat 4 — part (b) ──────────────────────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={440} y={330} size={16} fill={INK} weight={900} anchor="start">
          (b)   μ_r = 1 + χ = 1 + 400 = 401
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={440} y={354} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the + 1 barely matters here — never let that become a habit",
             "yahan + 1 se farq na ke barabar — par isko aadat mat banao")}
        </T>
      </Fade>

      {/* ── beat 5 — part (c), set up ──────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={440} y={398} size={16} fill={INK} weight={900} anchor="start">
          (c)   B = μ₀ ( H + M )
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={440} y={424} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          H + M = 1500 + 600 000 = 6.015 × 10⁵ A m⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={440} y={448} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          μ₀ = 1.257 × 10⁻⁶ T m A⁻¹
        </T>
      </Fade>

      {/* ── beat 6 — the answer ────────────────────────────────────── */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} dur={0.5} d="M 440 464 H 1010" stroke={INK} sw={1.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={440} y={492} size={18} fill={GREEN_DARK} weight={900} anchor="start">
          B = 1.257 × 10⁻⁶ × 6.015 × 10⁵ ≈ 0.76 T
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={440} y={516} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("about ten thousand times the Earth's field — from a very modest H",
             "Earth ke field se lagbhag dus hazaar guna — aur H kitna maamuli tha")}
        </T>
      </Fade>

      {/* ── beat 7 — read the answer back ──────────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.6} d={ringD(778, 256, 32, 16)} stroke={RED} sw={2.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={534} size={13.5} fill={RED} weight={800} anchor="start">
          {t("χ = 400 marks this as a ferromagnet at once.",
             "χ = 400 turant bata deta hai ki yeh ferromagnet hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={60} y={556} size={13} fill={INK} weight={700} anchor="start">
          {t("And M dwarfs H in that sum — 600 000 against 1500 — so B ≈ μ₀ M, and the applied field barely contributes.",
             "Aur us sum mein M, H se bahut bada hai — 600 000 vs 1500 — to B ≈ μ₀ M, applied field ka yogdan na ke barabar.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={60} y={568} w={960} h={28} fill={GREEN} textFill="#ffffff" size={13} script={false}>
          {t("★ χ = 400 · μ_r = 401 · B ≈ 0.76 T — the ferromagnet doing the amplifying",
             "★ χ = 400 · μ_r = 401 · B ≈ 0.76 T — amplification ferromagnet kar raha hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
