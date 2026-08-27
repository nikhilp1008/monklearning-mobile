/**
 * P12Ch04 · Section 8 — "Common Pitfalls and Pro-Tips"
 *
 * Beats map 1:1 onto the eight narration segments, so the board writes a line
 * exactly when Drona speaks it:
 *
 *   0  intro — "the four mistakes examiners see most often"
 *   1  mistake one   — scalar addition of a vector field
 *   2  mistake two   — collinear leads contribute nothing
 *   3  mistake three — the arc fraction
 *   4  mistake four  — the number of turns
 *   5  "now the pro-tip…"  (strategy header)
 *   6  the two formulas worth memorising
 *   7  closing verdict
 *
 * The previous version fired everything on beats 0/1/4/7: all four mistakes
 * appeared at once ~26s in, then the board sat unchanged through 109s of
 * narration covering mistakes two and three.
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
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

/** One mistake: badge, headline, and the line that makes it stick. */
function Mistake({
  n, y, on, delay, head, detail, accent,
}: {
  n: number; y: number; on: boolean; delay: number;
  head: string; detail: string; accent: string;
}) {
  return (
    <G>
      <Badge n={n} cx={58} cy={y} on={on} delay={delay} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={86} y={y + 5} size={14.5} fill={accent} weight={800} anchor="start">{head}</T>
      </Fade>
      <Fade on={on} delay={delay + 0.55}>
        <T x={86} y={y + 27} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">{detail}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch04Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title — beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={26} fill={RED} script>
          {t("Common Pitfalls & Exam Pro-Tips — Biot–Savart",
             "Common Pitfalls & Exam Pro-Tips — Biot–Savart")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 210 60 C 460 56, 640 64, 870 58" stroke={RED} sw={2.2} dur={0.65} />

      {/* ---------------- LEFT: the four mistakes ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 2.1)}>
        <T x={44} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("FOUR MISTAKES THAT COST MARKS", "FOUR MISTAKES THAT COST MARKS")}
        </T>
      </Fade>

      <Mistake
        n={1} y={148} on={beat >= 1} delay={dl(1, 0.2)} accent={RED}
        head={t("Adding B as a scalar", "Adding B as a scalar")}
        detail={t("Two equal fields give 0 → 2B. Example 3 was off by ~40%.",
                  "Two equal fields give 0 → 2B. Example 3 was off by ~40%.")}
      />
      <Mistake
        n={2} y={222} on={beat >= 2} delay={dl(2, 0.2)} accent={AMBER_DARK}
        head={t("Counting collinear leads", "Counting collinear leads")}
        detail={t("dl × r̂ = 0 along the line through P. Cross them out on sight.",
                  "dl × r̂ = 0 along the line through P. Cross them out on sight.")}
      />
      <Mistake
        n={3} y={296} on={beat >= 3} delay={dl(3, 0.2)} accent={GREEN}
        head={t("Wrong arc fraction", "Wrong arc fraction")}
        detail={t("Use the angle that REMAINS, not the one removed. Radians vs degrees.",
                  "Use the angle that REMAINS, not the one removed. Radians vs degrees.")}
      />
      <Mistake
        n={4} y={370} on={beat >= 4} delay={dl(4, 0.2)} accent={INK}
        head={t("Forgetting the turns", "Forgetting the turns")}
        detail={t("“Loop” = 1.   “Coil of N turns” = × N.   Circle the word coil.",
                  "“Loop” = 1.   “Coil of N turns” = × N.   Circle the word coil.")}
      />

      {/* ---------------- RIGHT: the pro-tip ---------------- */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)}
        d="M 556 96 L 556 430" stroke={MUTED} sw={1.2} dur={0.5} />

      <Fade on={beat >= 5} delay={dl(5, 0.35)}>
        <T x={592} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP — MEMORISE TWO, SCALE THE REST",
             "PRO-TIP — MEMORISE TWO, SCALE THE REST")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={592} y={130} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Never re-derive the integral in the exam hall.",
             "Never re-derive the integral in the exam hall.")}
        </T>
      </Fade>

      {/* The two anchor formulas — beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={592} y={152} w={430} h={54} fill={CREAM} stroke={RED} textFill={INK} size={17}>
          B centre = μ₀I / 2R
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.45)}>
        <T x={598} y={224} size={11.8} fill={MUTED} weight={600} anchor="start">
          {t("full loop, at its centre", "full loop, at its centre")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={592} y={240} w={430} h={54} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          B wire = μ₀I / 4πa · (sin θ₁ + sin θ₂)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.95)}>
        <T x={598} y={312} size={11.8} fill={MUTED} weight={600} anchor="start">
          {t("finite straight wire", "finite straight wire")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={592} y={348} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Arc = fraction of a loop.    Polygon = sum of wires.",
             "Arc = fraction of a loop.    Polygon = sum of wires.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.45)}>
        <T x={592} y={372} size={13} fill={GREEN} weight={800} anchor="start">
          {t("Semicircle + straight leads = half a loop + two zeroes.",
             "Semicircle + straight leads = half a loop + two zeroes.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={592} y={402} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Turns a two-page integration into a two-line calculation.",
             "Turns a two-page integration into a two-line calculation.")}
        </T>
      </Fade>

      {/* ---------------- Closing verdict — beat 7 ---------------- */}
      <Draw on={beat >= 7} delay={dl(7, 0.15)}
        d="M 44 452 L 1036 452" stroke={INK} sw={1.6} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={44} y={484} size={14} fill={INK} weight={800} anchor="start">
          {t("Scale the two anchors, then add vectorially — that is the whole subtopic.",
             "Scale the two anchors, then add vectorially — that is the whole subtopic.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.85)}>
        <Chip x={40} y={508} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ Vectors, not magnitudes · drop collinear leads · keep the angle that remains · × N for a coil",
             "★ Vectors, not magnitudes · drop collinear leads · keep the angle that remains · × N for a coil")}
        </Chip>
      </Fade>
    </Scene>
  );
}
