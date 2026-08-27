/**
 * C11 Ch01 · Section 49 — "Worked examples: excess reactant and yield"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,19.12,38.49,53.51,78.34,97.71,117.59,135.86,149.08]):
 *  0 Example 3 (JEE Main) given: 28g N₂ + 9g H₂ → NH₃ — LR? NH₃ mass? excess?
 *  1 moles + ÷coefficient: N₂=1.0/1=1.0, H₂=4.5/3=1.5
 *  2 smallest=N₂ is LIMITING (less by mass, still wins) → NH₃=2.0mol=34g
 *  3 excess: H₂ consumed=3.0mol=6g, 9g supplied → 3g left; anchored to LR
 *  (example 3 fully fades at beat 4, freeing the board for example 4)
 *  4 Example 4 (JEE Advanced) given: 50g N₂+10g H₂ → actual 40g NH₃ — LR? yields?
 *  5 moles + ÷coefficient: N₂=1.79/1=1.79, H₂=5.0/3=1.67
 *  6 notice: this time H₂ is LIMITING (opposite!) — recompute, don't remember
 *  7 NH₃=5.0×2/3=3.33mol=56.7g (theoretical yield)
 *  8 % yield=40/56.7×100=70.6% — LR before theoretical yield, always
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script12 ink)          | T mid | x540  y88  [fade@b4]
 *  b1 | l (script12 ink)              | T mid | x540  y113 [fade@b4]
 *  b2 | l1 (13 bold ink)/l2(13 bold green) | T mid | x540 y138/160 [fade@b4]
 *  b3 | l1 (script12 ink)/l2(amber-drk)| T mid | x540  y185/207 [fade@b4]
 *  b4 | given2 (script12 ink)         | T mid | x540  y88  (same slot)
 *  b5 | l (script12 ink)              | T mid | x540  y113
 *  b6 | l1 (13 bold red)/l2(amber-drk)| T mid | x540  y138/160
 *  b7 | l (13 bold green)             | T mid | x540  y185
 *  b8 | l1 (13 bold ink)/l2(muted)    | T mid | x540  y210/232
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("worked examples: excess reactant and yield", "worked examples: excess reactant aur yield")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully fades at beat 4 */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 3 (JEE Main): 28g N₂ + 9g H₂ → NH₃. Limiting reagent? NH₃ mass? excess left?",
            "Example 3 (JEE Main): 28g N₂ + 9g H₂ → NH₃. Limiting reagent? NH₃ mass? excess bacha?"
          )}
        </T>
      </Fade>

      {/* beat 1 — moles + divide */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={12} fill={INK} script>
          N₂=28/28=1.0mol → ÷1=1.0 · H₂=9/2=4.5mol → ÷3=1.5
        </T>
      </Fade>

      {/* beat 2 — limiting reagent + NH3 mass */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={INK} weight={700} script={false}>
          {t(
            "smallest quotient = N₂ → N₂ is LIMITING (less by mass, still wins!)",
            "sabse chhota quotient = N₂ → N₂ LIMITING hai (mass mein kam, phir bhi jeeta!)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 1.2)}>
        <T x={540} y={160} size={13} fill={GREEN} weight={700} script={false}>
          1 N₂ → 2 NH₃ → NH₃ = 2.0 mol = 34g
        </T>
      </Fade>

      {/* beat 3 — excess reactant + discipline */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.4)}>
        <T x={540} y={185} size={12} fill={INK} script>
          {t(
            "H₂ consumed = 3×1.0 = 3.0mol = 6g → 9g supplied → 3g left unreacted",
            "H₂ consumed = 3×1.0 = 3.0mol = 6g → 9g diya tha → 3g unreacted bacha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.2)}>
        <T x={540} y={207} size={12} fill={AMBER_DARK} script>
          {t(
            "everything is anchored to the LIMITING reagent — JEE Main's discipline",
            "sab kuch LIMITING reagent se bandha — yehi JEE Main ka discipline hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — Example 4 given (JEE Advanced), same slot as beat 0 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 4 (JEE Advanced): 50g N₂ + 10g H₂ react → actual yield 40g NH₃. LR? yields?",
            "Example 4 (JEE Advanced): 50g N₂ + 10g H₂ react — actual yield 40g NH₃. LR? yields?"
          )}
        </T>
      </Fade>

      {/* beat 5 — moles + divide */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={113} size={12} fill={INK} script>
          N₂=50/28=1.79mol → ÷1=1.79 · H₂=10/2=5.0mol → ÷3=1.67
        </T>
      </Fade>

      {/* beat 6 — notice: reversed limiting reagent */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={138} size={13} fill={RED} weight={700} script={false}>
          {t(
            "notice: this time smallest = H₂ → H₂ is LIMITING (opposite of before!)",
            "dhyan do: is baar sabse chhota H₂ → H₂ LIMITING hai (pehle se ulta!)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={160} size={12} fill={AMBER_DARK} script>
          {t(
            "recompute, don't remember — change the amounts and the limiting reagent changes",
            "dobara nikalo, yaad mat rakho — matra badlo to limiting reagent badal jaata"
          )}
        </T>
      </Fade>

      {/* beat 7 — theoretical yield */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={185} size={13} fill={GREEN} weight={700} script={false}>
          3H₂→2NH₃ → NH₃ = 5.0×(2/3) = 3.33 mol = 56.7g
        </T>
      </Fade>

      {/* beat 8 — percentage yield + rigor */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={210} size={13} fill={INK} weight={700} script={false}>
          % yield = 40 / 56.7 × 100 = 70.6%
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={232} size={12} fill={MUTED} script>
          {t(
            "LIMITING reagent BEFORE theoretical yield — only then does %yield mean anything",
            "LIMITING reagent PEHLE, theoretical yield baad mein — tabhi %yield ka matlab banta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
