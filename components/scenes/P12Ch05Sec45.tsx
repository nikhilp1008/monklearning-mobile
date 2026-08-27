/**
 * P12Ch05 · Section 45 — "What flux actually means"
 * Subtopic: Magnetism and Gauss's Law
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: Gauss's law for electrostatics against Gauss's
 * law for magnetism — ∮E·dA = q/ε₀ versus ∮B·dA = 0. The voice states neither
 * law in this section; that is the NEXT section's job, and this one says so
 * explicitly ("before we can state the law…").
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the meaning of flux, built from the
 * ring-in-the-wind picture — the same ring in the same wind held three ways,
 * the three things that decide how much gets through, Φ = B A cos θ, and the
 * convention that θ is measured from the NORMAL, never from the surface.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 14.6, 32.9, 47.0, 59.3, 74.2,
 * 88.9, 105.3):
 *   0  "one piece of vocabulary, from a picture"  title + subtitle
 *   1  "the same ring, three ways"                three panels, wind lines counted
 *   2  "it depends on three separate things"      the framing line
 *   3  "how strong · how big · how tilted"        the three factor chips
 *   4  "edge on catches almost nothing"           the tilt is circled and stressed
 *   5  "magnetic flux measures exactly this"      the transfer from wind to field
 *   6  "field × area × cosine of the tilt"        Φ = B A cos θ, with cos 1 and 0
 *   7  "the angle is from the normal"             the normal diagram + the warning
 */

import React from "react";
import { Ellipse, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [140, 165, 190, 215, 240];

/** which wind lines actually thread the ring in each panel */
const THROUGH: Record<number, boolean[]> = {
  210: [true, true, true, true, true],
  540: [false, true, true, true, false],
  870: [false, false, true, false, false],
};
const TILT: Record<number, number> = { 210: 0, 540: 55, 870: 90 };

export default function P12Ch05Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("What flux actually means", "Flux ka matlab asal mein kya hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 356 58 C 460 54, 620 62, 724 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("build it from a picture — the formula is easy, the conventions are not",
             "picture se samjho — formula aasan hai, conventions nahi")}
        </T>
      </Fade>

      {/* ── beat 1 — the same ring, in the same wind, held three ways ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={210} y={106} size={14} fill={GREEN_DARK} weight={800}>{t("face on", "seedha saamne")}</T>
        <T x={540} y={106} size={14} fill={AMBER_DARK} weight={800}>{t("tilted", "tirchha")}</T>
        <T x={870} y={106} size={14} fill={RED} weight={800}>{t("edge on", "kinaare se")}</T>
      </Fade>

      {[210, 540, 870].map((cx) =>
        ROWS.map((y, i) => (
          <Draw
            key={`${cx}-${y}`}
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 0.08)}
            dur={0.5}
            d={arrowD(cx - 140, y, cx + 140, y)}
            stroke={THROUGH[cx][i] ? GREEN_DARK : MUTED}
            sw={THROUGH[cx][i] ? 2.2 : 1.4}
          />
        ))
      )}

      {[210, 540, 870].map((cx) => (
        <Fade key={`ring-${cx}`} on={beat >= 1} delay={dl(1, 1.1)}>
          <G transform={`rotate(${TILT[cx]} ${cx} 190)`}>
            <Ellipse cx={cx} cy={190} rx={24} ry={64} fill="none" stroke={INK} strokeWidth={3} />
          </G>
        </Fade>
      ))}

      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={210} y={290} size={13} fill={GREEN_DARK} weight={800}>
          {t("catches everything", "sab kuch pakadta hai")}
        </T>
        <T x={540} y={290} size={13} fill={AMBER_DARK} weight={800}>
          {t("catches some", "thoda pakadta hai")}
        </T>
        <T x={870} y={290} size={13} fill={RED} weight={800}>
          {t("catches almost nothing", "lagbhag kuch nahi pakadta")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={540} y={312} size={12.5} fill={MUTED} weight={700}>
          {t("the wind has not changed at all — only the orientation has",
             "hawa bilkul nahi badli — sirf orientation badla hai")}
        </T>
      </Fade>

      {/* ── beat 2 — three separate things ─────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={340} size={13.5} fill={INK} weight={800}>
          {t("hold a wire ring out in a breeze: how much gets through depends on three separate things",
             "ek taar ka ring hawa mein pakdo: kitna guzarta hai, yeh teen alag cheezon par nirbhar hai")}
        </T>
      </Fade>

      {/* ── beat 3 — the three factors ─────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={80} y={356} w={300} h={38} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={13.5} script={false}>
          {t("① how strong the wind is", "① hawa kitni tez hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={400} y={356} w={280} h={38} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={13.5} script={false}>
          {t("② how big the ring is", "② ring kitna bada hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Chip x={700} y={356} w={300} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13.5} script={false}>
          {t("③ how you have tilted it", "③ tumne ise kitna tirchha kiya")}
        </Chip>
      </Fade>

      {/* ── beat 4 — the tilt is the underestimated one ────────────── */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} dur={0.7} d={ringD(850, 375, 168, 28)} stroke={RED} sw={2.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={422} size={13} fill={RED} weight={800}>
          {t("edge on, almost nothing passes — even in a gale. Face on, you catch the maximum.",
             "kinaare se, kuch bhi nahi guzarta — toofan mein bhi. Seedha saamne, poora maximum.")}
        </T>
      </Fade>

      {/* ── beat 5 — the transfer to a magnetic field ──────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={446} size={13.5} fill={GREEN_DARK} weight={800}>
          {t("Magnetic flux measures exactly this, for a field instead of wind — it counts orientation, not just area.",
             "Magnetic flux bilkul yahi naapta hai, hawa ki jagah field ke liye — sirf area nahi, orientation bhi.")}
        </T>
      </Fade>

      {/* ── beat 6 — the formula ───────────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={60} y={464} width={480} height={126} rx={12} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={300} y={490} size={13} fill={GREEN_DARK} weight={800}>
          {t("MAGNETIC FLUX THROUGH A SURFACE", "KISI SURFACE SE MAGNETIC FLUX")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={300} y={528} size={26} fill={INK} weight={900}>Φ  =  B A cos θ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={300} y={556} size={13} fill={INK} weight={800}>
          {t("cos θ = 1 face on   ·   cos θ = 0 edge on", "cos θ = 1 seedha saamne   ·   cos θ = 0 kinaare se")}
        </T>
        <T x={300} y={578} size={12.5} fill={INK_LIGHT} weight={700}>
          {t("and something in between for a tilt", "aur tirchhe par beech ka kuch")}
        </T>
      </Fade>

      {/* ── beat 7 — θ is measured from the normal ─────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.5} d="M 620 540 L 760 500" stroke={INK} sw={2.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} dur={0.5} d={arrowD(690, 520, 673.5, 462.3)} stroke={RED} sw={2.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} dur={0.5} d={arrowD(690, 520, 738, 456)} stroke={GREEN_DARK} sw={2.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.0)} dur={0.5}
        d="M 680.7 487.3 A 34 34 0 0 1 710.4 492.8" stroke={AMBER_DARK} sw={2} />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={700} y={481} size={13} fill={AMBER_DARK} weight={900} anchor="start">θ</T>
        <T x={660} y={457} size={12.5} fill={RED} weight={800} anchor="end">n</T>
        <T x={748} y={453} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">B</T>
        <T x={612} y={556} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the surface", "surface")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={800} y={480} size={13} fill={RED} weight={800} anchor="start">
          {t("MEASURE θ FROM THE NORMAL", "θ NORMAL SE NAAPO")}
        </T>
        <T x={800} y={504} size={12.5} fill={INK} weight={700} anchor="start">
          {t("n — the perpendicular sticking", "n — surface se bahar nikalta")}
        </T>
        <T x={800} y={522} size={12.5} fill={INK} weight={700} anchor="start">
          {t("out of the surface", "lambvat (perpendicular)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={572} y={572} size={12.5} fill={INK} weight={800} anchor="start">
          {t("never from the surface itself — this costs marks every year",
             "surface se kabhi nahi — har saal isi mein marks jaate hain")}
        </T>
        <T x={572} y={592} size={12.5} fill={RED} weight={800} anchor="start">
          {t("given the angle with the PLANE? take the complement first: θ = 90° − that",
             "agar angle PLANE ke saath diya ho? pehle complement lo: θ = 90° − wo")}
        </T>
      </Fade>
    </Scene>
  );
}
