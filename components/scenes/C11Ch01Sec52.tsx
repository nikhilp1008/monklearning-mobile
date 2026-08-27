/**
 * C11 Ch01 · Section 52 — "Temperature dependence and interconversion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7.6,32.43,52.74,70.32,91.48,110.09]):
 *  0 anchor: the single most important intuition, tested almost every year
 *  1 Mumbai local analogy: per-coach (volume) vs per-tonne (mass)
 *  2 the rule, two columns: volume-based drifts, mass/moles-based is steady
 *  3 physical reason: liquids expand when heated, molarity falls
 *  4 speed tip, boxed: scan the denominator
 *  5 caution: never assume molarity = molality
 *  6 the absolute: interconverting needs density
 *
 * Layout plan:
 *  b0 | anchor (script13 ink)          | T mid | x540  y84
 *  b1 | l1 (script12 ink)/l2(amber-drk)| T mid | x540  y108/130
 *  b2 | header (script12 muted)        | T mid | x540  y158
 *  b2 | col headers (13 bold red/green)| T mid | x270/810 y182
 *  b2 | col rows (script12 ink) ×3     | T mid | x270/810 y204/224/244
 *  b3 | l1 (script12 ink)/l2(13 bold red)| T mid | x540 y278/300
 *  b4 | box (dashed amber, w680h45)    | Draw  | x200..880 y328..373
 *  b4 | l inside (12 bold ink)         | T mid | x540  y354
 *  b5 | l (script12 red)               | T mid | x540  y400
 *  b6 | l (13 bold green)              | T mid | x540  y425
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("temperature dependence and interconversion", "temperature dependence aur interconversion")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "the single most important intuition about concentration — tested almost every year",
            "concentration ki sabse zaroori samajh — lagbhag har saal poochi jaati"
          )}
        </T>
      </Fade>

      {/* beat 1 — Mumbai local analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={108} size={12} fill={INK} script>
          {t(
            "Mumbai local: passengers per COACH (fixed volume, like MOLARITY) vs per TONNE (fixed mass, like MOLALITY)",
            "Mumbai local: har COACH mein passengers (fixed volume, MOLARITY jaisa) vs har TONNE mein (fixed mass, MOLALITY jaisa)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={130} size={12} fill={AMBER_DARK} script>
          {t(
            "hot afternoon: the coach expands a hair → per-volume drifts; per-tonne NEVER does",
            "garam dopahar: coach thoda phailta → per-volume khiskta; per-tonne KABHI nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the rule, two columns */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={12} fill={MUTED} script>
          {t("which terms drift with temperature?", "kaunse terms temperature ke saath khiskte hain?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={270} y={182} size={13} fill={RED} weight={700} script={false}>
          VOLUME-based → DRIFTS
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={810} y={182} size={13} fill={GREEN} weight={700} script={false}>
          MASS/MOLES-based → STEADY
        </T>
      </Fade>
      {["MOLARITY", "NORMALITY", "FORMALITY"].map((term, i) => (
        <Fade key={`vol${i}`} on={beat >= 2} delay={dl(2, 1.3 + i * 0.2)}>
          <T x={270} y={204 + i * 20} size={12} fill={INK} script={false}>
            {term}
          </T>
        </Fade>
      ))}
      {["MOLALITY", "MOLE FRACTION", "MASS %"].map((term, i) => (
        <Fade key={`mass${i}`} on={beat >= 2} delay={dl(2, 1.3 + i * 0.2)}>
          <T x={810} y={204 + i * 20} size={12} fill={INK} script={false}>
            {term}
          </T>
        </Fade>
      ))}

      {/* beat 3 — physical reason */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={278} size={12} fill={INK} script>
          {t(
            "liquids EXPAND when heated — 1L at 50°C holds FEWER moles than 1L at 25°C",
            "garam hone par liquids PHAILTE — 50°C par 1L mein 25°C se KAM moles hote"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={300} size={13} fill={RED} weight={700} script={false}>
          {t(
            "molarity FALLS — even though nothing was added or removed!",
            "molarity GHATTI hai — jabki kuch bhi jodha ya hataya nahi gaya!"
          )}
        </T>
      </Fade>

      {/* beat 4 — the speed tip, boxed */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d="M 200 328 h 648 q 16 0 16 16 v 13 q 0 16 -16 16 h -648 q -16 0 -16 -16 v -13 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={354} size={12} fill={INK} weight={700} script={false}>
          {t(
            "scan the DENOMINATOR: volume (L/mL/dm³) → temp-DEPENDENT · mass/moles → temp-INDEPENDENT",
            "DENOMINATOR dekho: volume (L/mL/dm³) → temp-DEPENDENT · mass/moles → temp-INDEPENDENT"
          )}
        </T>
      </Fade>

      {/* beat 5 — caution */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={400} size={12} fill={RED} script>
          {t(
            "NEVER assume molarity = molality — they coincide only for very dilute AQUEOUS solutions (1L≈1kg water)",
            "kabhi mat maano molarity = molality — sirf bahut dilute AQUEOUS solutions mein milte (1L≈1kg paani)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the absolute: density needed */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={425} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "interconverting molarity ↔ molality REQUIRES the solution's DENSITY",
            "molarity ↔ molality badalne ke liye solution ki DENSITY zaroori hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
