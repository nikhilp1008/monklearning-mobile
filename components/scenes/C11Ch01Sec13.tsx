/**
 * C11 Ch01 · Section 13 — "Worked examples: density conversion and -40"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,20.74,36.78,50.26,71.6,82.69,95.41,113.24]):
 *  0 Example 3 (JEE Main) given: Hg density 13.6 g/cm³ → SI, then mass of 250 mL
 *  1 convert by two factors at once: ×(1kg/1000g)×(10⁶cm³/1m³)
 *  2 = 13,600 kg/m³ — the cube factor is 10⁶, not 100
 *  3 mass shortcut: no SI needed, 13.6×250 = 3400 g = 3.4 kg
 *  (example 3 dims at beat 4, freeing its given-slot)
 *  4 Example 4 (JEE Advanced) given: at what T do °C and °F read the same?
 *  5 the conceptual leap: same reading ⇒ x = (9/5)x + 32
 *  6 rearrange → x = −40  ⇒  −40°C = −40°F
 *  7 verify + the elegance: not a plug-in, one linear equation
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script14 ink)         | T mid | x540  y90  [dims@b4]
 *  b1 | conversion (16 bold ink)     | T mid | x540  y125 [dims@b4]
 *  b2 | result (16 bold ink)         | T mid | x540  y155 [dims@b4]
 *  b2 | trap note (script13 red)     | T mid | x540  y178 [dims@b4]
 *  b3 | shortcut (script14 ink)      | T mid | x540  y212 [dims@b4]
 *  b3 | answer box (16 bold, boxed)  | Chip  | x340..740 y238..280 [dims@b4]
 *  b4 | given 2 (script14 ink)       | T mid | x540  y90  (same slot as b0)
 *  b5 | equation (16 bold ink)       | T mid | x540  y125
 *  b6 | rearrange (15 ink)           | T mid | x540  y158
 *  b6 | answer box (18 bold, boxed)  | Chip  | x300..780 y185..223
 *  b7 | check (13 muted)             | T mid | x540  y255
 *  b7 | note (script13 ink)          | T mid | x540  y292
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, RED, CREAM, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("worked examples: density conversion and −40", "worked examples: density conversion aur −40")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully removed (not dimmed) once
          Example 4 takes over the board at beat 4, freeing real space for it */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 3 (JEE Main): density of Hg = 13.6 g/cm³ → SI units, then mass of 250 mL in kg",
            "Example 3 (JEE Main): Hg density 13.6 g/cm³ → SI units, phir 250 mL Hg ka mass kg mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — convert by two factors at once */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={16} fill={INK} weight={700} script={false}>
          × (1 kg / 1000 g) × (10⁶ cm³ / 1 m³) = 13.6 × 1000
        </T>
      </Fade>

      {/* beat 2 — result + the cube trap */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.4)}>
        <T x={540} y={155} size={16} fill={INK} weight={700} script={false}>
          = 13,600 kg/m³
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 1.4)}>
        <T x={540} y={178} size={13} fill={RED} script>
          {t("cube factor = 10⁶, NOT 100!", "cube factor = 10⁶, 100 NAHI!")}
        </T>
      </Fade>

      {/* beat 3 — mass shortcut, no SI needed */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.4)}>
        <T x={540} y={212} size={14} fill={INK} script>
          {t("mass: 250 mL = 250 cm³ — no need for SI!", "mass: 250 mL = 250 cm³ — SI ki zaroorat nahi!")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.4)}>
        <Chip x={340} y={238} w={400} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          13.6 × 250 = 3400 g = 3.4 kg
        </Chip>
      </Fade>

      {/* beat 4 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): at what T do °C and °F show the SAME reading?",
            "Example 4 (JEE Advanced): kis T par °C aur °F SAME reading dikhate hain?"
          )}
        </T>
      </Fade>

      {/* beat 5 — the conceptual leap */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={125} size={16} fill={INK} weight={700} script={false}>
          same reading ⇒ x = (9/5)x + 32
        </T>
      </Fade>

      {/* beat 6 — rearrange to the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={158} size={15} fill={INK} weight={700} script={false}>
          x − (9/5)x = 32 ⇒ −(4/5)x = 32
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={300} y={185} w={480} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          x = −40 ⇒ −40°C = −40°F
        </Chip>
      </Fade>

      {/* beat 7 — verify + the elegance */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={255} size={13} fill={MUTED} script>
          check: (9/5)(−40) + 32 = −72 + 32 = −40 ✓
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={292} size={13} fill={INK} script>
          {t(
            "not a plug-in — one linear equation once you see “same reading”",
            "plug-in nahi hai — bas ek linear equation jab “same reading” samajh aaye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
