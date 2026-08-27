/**
 * C11 Ch01 · Section 15 — "Uncertainty and the meaning of a measured digit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,14.59,29.02,52.23,65.03,86.45,104.79,128.52]):
 *  0 anchor: a ruler reading (≈2.5 cm) — the last digit is an estimate
 *  1 science encodes this honesty in how numbers are WRITTEN
 *  2 scientific notation tool: messy decimal → coefficient × 10ⁿ
 *  3 only the coefficient digits count (sets up trailing zeros)
 *  4 sig figs: 12.5 g — the "5" is significant, meaningful
 *  5 contrast: 12.50000 g — extra zeros = a lie (false precision)
 *  6 the last sig digit is always the uncertain one (±0.1 cm)
 *  7 counts and defined relations are EXACT — infinite sig figs
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | question (script15 ink)      | T mid | x540  y88
 *  b0 | ruler ticks                  | Draw  | x400..680 y115
 *  b0 | reading (16 bold ink)        | T mid | x540  y145
 *  b0 | note (script12 red)          | T mid | x540  y163
 *  b1 | caption (script13 ink)       | T mid | x540  y188
 *  b2 | notation row (16 bold ink)   | T mid | x540  y215
 *  b3 | caption (script13 muted)     | T mid | x540  y240
 *  b4 | "12.5 g" (18 bold ink)       | T mid | x540  y272
 *  b4 | label (script13 green)       | T mid | x540  y295
 *  b5 | "12.50000 g" (18 bold ink)   | T mid | x540  y325
 *  b5 | label (script13 red)         | T mid | x540  y348
 *  b6 | "12.5 = 12.5±0.1 cm" (16)    | T mid | x540  y378
 *  b6 | label (script12 muted)       | T mid | x540  y401
 *  b7 | count line (script14 ink)    | T mid | x540  y431
 *  b7 | defined line (script13 muted)| T mid | x540  y454
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ticks = [];
  for (let x = 400; x <= 680; x += 40) ticks.push(x);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("uncertainty and the meaning of a measured digit", "uncertainty aur ek measured digit ka matlab")}
        </T>
      </Fade>

      {/* beat 0 — anchor: a ruler reading */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={15} fill={INK} script>
          {t("how much of a measured number can you trust?", "napi hui number par kitna bharosa kar sakte ho?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 400 115 L 680 115" stroke={MUTED} sw={2} dur={0.5} />
      {ticks.map((x, i) => (
        <Draw key={x} on={beat >= 0} delay={dl(0, 1.4 + i * 0.1)} d={`M ${x} 110 L ${x} 120`} stroke={INK} sw={1.6} dur={0.2} />
      ))}
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={540} y={145} size={16} fill={INK} weight={700} script={false}>
          ≈ 2.5 cm
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={163} size={12} fill={RED} script>
          {t("the final “5” is an estimate", "aakhri “5” ek estimate hai")}
        </T>
      </Fade>

      {/* beat 1 — honesty encoded in how numbers are written */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={188} size={13} fill={INK} script>
          {t(
            "science encodes this honesty in how numbers are WRITTEN",
            "science yeh honesty numbers likhne ke tarike mein encode karta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — scientific notation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={215} size={16} fill={INK} weight={700} script={false}>
          0.000…166 g ⇒ 1.66 × 10⁻²⁴ g
        </T>
      </Fade>

      {/* beat 3 — only the coefficient digits count */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={240} size={13} fill={MUTED} script>
          {t(
            "only the COEFFICIENT digits count (1.66 → 3 sig figs)",
            "sirf COEFFICIENT ke digits ginte hain (1.66 → 3 sig figs)"
          )}
        </T>
      </Fade>

      {/* beat 4 — 12.5 g: the 5 is significant */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={272} size={18} fill={INK} weight={700} script={false}>
          12.5 g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={295} size={13} fill={GREEN} script>
          {t("the “5” is significant — meaningful ✓", "“5” significant hai — meaningful ✓")}
        </T>
      </Fade>

      {/* beat 5 — contrast: false precision */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={325} size={18} fill={INK} weight={700} script={false}>
          12.50000 g
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={348} size={13} fill={RED} script>
          {t("extra zeros = a LIE (false precision)", "extra zeros = ek JHOOTH (false precision)")}
        </T>
      </Fade>

      {/* beat 6 — the last sig digit is always the uncertain one */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={378} size={16} fill={INK} weight={700} script={false}>
          12.5 cm = 12.5 ± 0.1 cm
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={401} size={12} fill={MUTED} script>
          {t("1, 2 = certain · 5 = estimated", "1, 2 = certain · 5 = estimated")}
        </T>
      </Fade>

      {/* beat 7 — counts and defined relations are exact */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={431} size={14} fill={INK} script>
          {t("24 students = EXACT (∞ sig figs)", "24 students = EXACT (∞ sig figs)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={454} size={13} fill={MUTED} script>
          {t("1 m = 100 cm — exactly, by definition", "1 m = 100 cm — exactly, definition se")}
        </T>
      </Fade>
    </Scene>
  );
}
