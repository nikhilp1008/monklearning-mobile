/**
 * C11 Ch01 · Section 39 — "The empirical routine and combustion analysis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,11.44,35.84,54.7,73.13,92.25,113.5,138.33]):
 *  0 anchor: no theorem — a clean, repeatable algorithm
 *  1 the 5-step routine, listed
 *  2 step 2 is the whole game: atoms combine in mole ratios, not mass
 *  3 fraction-clearing rules (.5→×2, .33/.67→×3, .25→×4)
 *  4 genuine fraction vs rounding noise
 *  5 combustion variant: C→CO₂, H→H₂O
 *  6 oxygen by difference, and why
 *  7 shortcut when molar mass is known from the start
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | steps ①-⑤ (13 ink, start)    | T st  | x220  y110/132/154/176/198
 *  b2 | insight (script12 green)     | T mid | x540  y225
 *  b3 | l (script12 amber-drk)       | T mid | x540  y250
 *  b4 | l (script12 red)             | T mid | x540  y275
 *  b5 | l (13 bold ink)              | T mid | x540  y300
 *  b6 | l1 (13 bold ink)             | T mid | x540  y325
 *  b6 | l2 (script12 muted)          | T mid | x540  y350
 *  b7 | l (script13 amber-drk)       | T mid | x540  y378
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const STEPS = [
  "① assume 100g sample → % = grams",
  "② ÷ atomic mass → MOLES",
  "③ ÷ by the SMALLEST mole value",
  "④ clear stubborn fractions",
  "⑤ write whole numbers as subscripts",
];

export default function C11Ch01Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("the empirical routine and combustion analysis", "empirical routine aur combustion analysis")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t("no theorem here — just a clean, repeatable algorithm", "yahaan koi theorem nahi — bas ek clean, repeatable algorithm")}
        </T>
      </Fade>

      {/* beat 1 — the 5-step routine */}
      {STEPS.map((step, i) => (
        <Fade key={step} on={beat >= 1} delay={dl(1, 0.3 + i * 0.5)}>
          <T x={220} y={[110, 132, 154, 176, 198][i]} size={13} fill={INK} script anchor="start">
            {step}
          </T>
        </Fade>
      ))}

      {/* beat 2 — step 2 is the whole game */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={225} size={12} fill={GREEN} script>
          {t(
            "STEP ② IS THE WHOLE GAME: atoms combine in NUMBER ratios (moles), never mass ratios!",
            "STEP ② HI SAB KUCH HAI: atoms NUMBER ratios (moles) mein combine hote, mass ratios mein kabhi nahi!"
          )}
        </T>
      </Fade>

      {/* beat 3 — fraction-clearing rules */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={250} size={12} fill={AMBER_DARK} script>
          {t(
            ".5→×2 · .33/.67→×3 · .25→×4 — atoms are WHOLE numbers, no half-atoms",
            ".5→×2 · .33/.67→×3 · .25→×4 — atoms WHOLE numbers hain, aadha atom nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — genuine fraction vs rounding noise */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={275} size={12} fill={RED} script>
          {t(
            "1.98≈2, 3.03≈3 (rounding noise) — but 1.5 must NOT round to 2 (real fraction)!",
            "1.98≈2, 3.03≈3 (rounding noise) — par 1.5 ko 2 round mat karo (real fraction)!"
          )}
        </T>
      </Fade>

      {/* beat 5 — combustion variant */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={300} size={13} fill={INK} weight={700} script={false}>
          combustion: C → CO₂ (×12/44) · H → H₂O (×2/18)
        </T>
      </Fade>

      {/* beat 6 — oxygen by difference, and why */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={325} size={13} fill={INK} weight={700} script={false}>
          O ({t("if present", "agar hai")}) = compound mass − C − H
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={350} size={12} fill={MUTED} script>
          {t(
            "why: O in products partly from AIR supply — can't measure it directly",
            "kyun: products mein O ka kuch hissa AIR supply se — seedha naap nahi sakte"
          )}
        </T>
      </Fade>

      {/* beat 7 — shortcut when molar mass is known */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={378} size={13} fill={AMBER_DARK} script>
          {t(
            "shortcut (M known): atoms of X = (%/100) × M / atomic mass — single pass!",
            "shortcut (M pata ho): atoms of X = (%/100) × M / atomic mass — ek hi pass!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
