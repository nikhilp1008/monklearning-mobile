/**
 * P12Ch05 · Section 33 — "Magnetising field, magnetisation and susceptibility"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: the hysteresis loop — retentivity B_r,
 * coercivity H_c, loop area as energy loss per cycle, and soft-iron-vs-Alnico
 * material selection. None of that is in this section's audio; it belongs to
 * sections 37 and 38.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the four quantitative definitions of
 * the magnetic response — H = B₀/μ₀, M = m_net/V, B = μ₀(H + M), χ = M/H —
 * each with its SI unit and dimensional formula, then where the three families
 * sit on the χ scale, and the superconductor as the extreme perfect diamagnet.
 *
 * BEAT MAP (9 segments → gates 0..8; reveals 0, 11.7, 28.2, 42.9, 58.8, 79.3,
 * 96.7, 111.9, 134.5):
 *   0  "four definitions, each with a unit"     title + subtitle
 *   1  "H = applied field / mu nought"          solenoid + specimen, H = B₀/μ₀
 *   2  "A per metre · inverse length, current"  H's unit + dimensions
 *   3  "M = net moment / volume"                specimen with aligned moments
 *   4  "A m² ÷ m³ leaves A per metre"           M's unit — identical to H
 *   5  "field inside is mu nought (H + M)"      the sum, with both terms named
 *   6  "chi = M over H, dimensionless"          χ = M/H, a pure number
 *   7  "where the three families sit"           χ number line: dia/para/ferro
 *   8  "superconductor, chi exactly minus one"  χ = −1 marker + Meissner chip
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** Little numbered circle, house style. */
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

export default function P12Ch05Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* solenoid turns for the H picture */
  const turns = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => 112 + i * 26);
  /* aligned atomic moments inside the specimen for the M picture */
  const moments: [number, number][] = [];
  for (let r = 0; r < 2; r++)
    for (let c = 0; c < 7; c++) moments.push([636 + c * 26, 116 + r * 30]);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Four definitions — H, M, B and χ", "Chaar definitions — H, M, B aur χ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 300 60 C 500 56, 660 64, 790 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t("each one comes with a unit and a dimensional formula",
             "har ek ke saath ek unit aur ek dimensional formula aata hai")}
        </T>
      </Fade>

      {/* ── LEFT: magnetic intensity H (beats 1, 2) ─────────────────── */}
      <Badge n="1" cx={54} cy={106} on={beat >= 1} delay={dl(1, 0.2)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={78} y={111} size={14} fill={RED} weight={800} anchor="start">
          {t("MAGNETIC INTENSITY H — what you apply", "MAGNETIC INTENSITY H — jo tum lagate ho")}
        </T>
      </Fade>

      {/* the specimen sitting in a solenoid's applied field */}
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Rect x={100} y={140} width={210} height={44} rx={5} fill={CREAM} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" />
        <T x={205} y={167} size={12.5} fill={MUTED} weight={700}>{t("any sample", "koi bhi sample")}</T>
      </Fade>
      {turns.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 0.5 + i * 0.05)} dur={0.3}
          d={`M ${x} 124 A 9 38 0 1 0 ${x} 200 A 9 38 0 1 0 ${x} 124`}
          stroke={AMBER_DARK} sw={1.7} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.2)} dur={0.5} d={arrowD(58, 162, 94, 162)} stroke={AMBER_DARK} sw={2.2} />
      <Draw on={beat >= 1} delay={dl(1, 1.35)} dur={0.5} d={arrowD(316, 162, 352, 162)} stroke={AMBER_DARK} sw={2.2} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={205} y={218} size={12.5} fill={AMBER_DARK} weight={700}>
          {t("externally applied field B₀", "bahar se lagaya field B₀")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={54} y={252} size={17} fill={INK} weight={900} anchor="start">H = B₀ / μ₀</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={54} y={276} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("describes what you are doing to the sample —",
             "yeh batata hai ki tum sample ke saath kya kar rahe ho —")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={54} y={296} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("independent of what the sample is made of.", "sample kis cheez ka bana hai, usse bilkul alag.")}
        </T>
      </Fade>

      {/* beat 2 — unit + dimensions of H */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={54} y={310} width={420} height={62} rx={9} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={72} y={333} size={13.5} fill={INK} weight={800} anchor="start">
          SI unit:  ampere per metre,  A m⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={72} y={359} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("dimensions:  [M⁰ L⁻¹ T⁰ A¹]  — no mass, no time",
             "dimensions:  [M⁰ L⁻¹ T⁰ A¹]  — na mass, na time")}
        </T>
      </Fade>

      {/* ── RIGHT: magnetisation M (beats 3, 4) ─────────────────────── */}
      <Badge n="2" cx={584} cy={106} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={608} y={111} size={14} fill={RED} weight={800} anchor="start">
          {t("MAGNETISATION M — what the sample answers with",
             "MAGNETISATION M — sample kya jawab deta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Rect x={620} y={128} width={196} height={74} rx={5} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
      </Fade>
      {moments.map(([x, y], i) => (
        <Draw key={`${x}-${y}`} on={beat >= 3} delay={dl(3, 1.1 + i * 0.03)} dur={0.25}
          d={arrowD(x - 8, y + 36, x + 8, y + 36)} stroke={GREEN_DARK} sw={1.7} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={834} y={150} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("vector sum of every", "har chhote atomic")}
        </T>
        <T x={834} y={170} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("little atomic moment", "moment ka vector sum")}
        </T>
        <T x={834} y={192} size={13} fill={GREEN_DARK} weight={800} anchor="start">= m_net</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={718} y={222} size={12.5} fill={MUTED} weight={700}>
          {t("volume V of the sample", "sample ka volume V")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={584} y={252} size={17} fill={INK} weight={900} anchor="start">M = m_net / V</T>
      </Fade>

      {/* beat 4 — unit of M, identical to H */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={584} y={310} width={420} height={62} rx={9} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={602} y={333} size={13.5} fill={INK} weight={800} anchor="start">
          A m² ÷ m³  =  A m⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={602} y={359} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("exactly H's unit and dimensions — a common trap",
             "bilkul H jaisi unit aur dimensions — ek common trap")}
        </T>
      </Fade>

      {/* ── beat 5 — the field inside is the sum ────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={54} y={406} size={14} fill={RED} weight={800} anchor="start">
          {t("THE FIELD INSIDE IS GENUINELY BOTH", "ANDAR KA FIELD SACH MEIN DONO HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={54} y={440} size={19} fill={INK} weight={900} anchor="start">B  =  μ₀ (  H  +  M  )</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} dur={0.5} d="M 150 450 C 154 464, 170 464, 174 450" stroke={AMBER_DARK} sw={1.8} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} dur={0.5} d="M 212 450 C 216 464, 232 464, 236 450" stroke={GREEN_DARK} sw={1.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={162} y={484} size={12.5} fill={AMBER_DARK} weight={800}>{t("you applied", "tumne lagaya")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={256} y={484} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the material contributed", "material ne diya")}
        </T>
      </Fade>

      {/* ── beat 6 — susceptibility ─────────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={584} y={406} size={14} fill={RED} weight={800} anchor="start">
          {t("SUSCEPTIBILITY χ — A PURE NUMBER", "SUSCEPTIBILITY χ — EK PURE NUMBER")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={584} y={440} size={19} fill={INK} weight={900} anchor="start">χ = M / H    ⇔    M = χ H</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={584} y={474} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("(A m⁻¹) ÷ (A m⁻¹) → dimensionless", "(A m⁻¹) ÷ (A m⁻¹) → dimensionless")}
        </T>
      </Fade>

      {/* ── beat 7 — the χ scale ────────────────────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.8} d={arrowD(96, 528, 1006, 528)} stroke={INK} sw={2} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={1006} y={552} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">χ</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} dur={0.3} d="M 500 519 L 500 537" stroke={MUTED} sw={1.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={500} y={554} size={12.5} fill={MUTED} weight={700}>0</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.0)} dur={0.3} d="M 380 514 L 380 542" stroke={AMBER_DARK} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={380} y={506} size={13} fill={AMBER_DARK} weight={800}>χ ≈ −10⁻⁵</T>
        <T x={380} y={562} size={13} fill={AMBER_DARK} weight={800}>DIAMAGNET</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} dur={0.3} d="M 626 514 L 626 542" stroke={GREEN_DARK} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={626} y={506} size={13} fill={GREEN_DARK} weight={800}>χ ≈ +10⁻⁵</T>
        <T x={626} y={562} size={13} fill={GREEN_DARK} weight={800}>PARAMAGNET</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} dur={0.3} d="M 930 514 L 930 542" stroke={RED} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={930} y={506} size={13} fill={RED} weight={800}>χ ≈ +10³</T>
        <T x={930} y={562} size={13} fill={RED} weight={800}>FERROMAGNET</T>
      </Fade>

      {/* ── beat 8 — the superconductor extreme ─────────────────────── */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} dur={0.35} d="M 140 512 L 140 544" stroke={RED} sw={3} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={140} y={504} size={13} fill={RED} weight={900}>χ = −1</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={140} y={562} size={12.5} fill={RED} weight={800}>SUPERCONDUCTOR</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.0)}>
        <Chip x={236} y={572} w={770} h={24} fill={GREEN} textFill="#ffffff" size={12.5} script={false}>
          {t("perfect diamagnet · μ_r = 0 · the field is expelled completely — the Meissner effect",
             "perfect diamagnet · μ_r = 0 · field poora bahar nikal jaata hai — Meissner effect")}
        </Chip>
      </Fade>
    </Scene>
  );
}
