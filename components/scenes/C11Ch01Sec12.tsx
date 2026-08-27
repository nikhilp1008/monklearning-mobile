/**
 * C11 Ch01 · Section 12 — "Worked examples: temperature and prefixes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,11.86,25.6,41.39,53.85,71.94,89.35]):
 *  0 Example 1 (CBSE) given: 37°C body temp → K and °F (dims at beat 3)
 *  1 K = 37 + 273.15 = 310.15 K (no ° symbol with K)
 *  2 °F = (9/5)(37) + 32 = 98.6°F (the familiar reading)
 *  3 Example 2 (NEET) given: arrange increasing length — nm/μm/pm/mm
 *    (reuses Example 1's given-slot; example 1 dims here)
 *  4 compare exponents → order: pm < nm < μm < mm
 *  5 guardrail: the trap is vocabulary — compare exponents, not names
 *  6 bonus payoff: the prefix tells you the physical scale
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script14 ink)         | T mid | x540  y92  [dims@b3]
 *  b1 | K calc (16 bold ink)         | T mid | x540  y130 [dims@b3]
 *  b1 | caption (12 muted)           | T mid | x540  y150 [dims@b3]
 *  b2 | F calc (16 bold ink)         | T mid | x540  y185 [dims@b3]
 *  b2 | caption (12 muted)           | T mid | x540  y205 [dims@b3]
 *  b3 | given 2 (script14 ink)       | T mid | x540  y92  (same slot as b0)
 *  b4 | prefix name (14 bold ink)    | T mid | cx220..790 y140
 *  b4 | exponent (11 amber-dark)     | T mid | cx220..790 y175
 *  b4 | order (15 bold green)        | T mid | x540  y205
 *  b5 | guardrail (script15 red)     | T mid | x540  y248
 *  b6 | payoff l1 (script14 ink)     | T mid | x540  y290
 *  b6 | payoff l2 (script13 muted)   | T mid | x540  y330
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const ORDER: [number, string, string][] = [
  [220, "pico", "10⁻¹²"],
  [410, "nano", "10⁻⁹"],
  [600, "micro", "10⁻⁶"],
  [790, "milli", "10⁻³"],
];

export default function C11Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={23} fill={RED} script>
          {t("worked examples: temperature and prefixes", "worked examples: temperature aur prefixes")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully removed (not dimmed) once
          Example 2 takes over the board at beat 3, freeing real space for it */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={14} fill={INK} script>
          {t(
            "Example 1 (CBSE): 37°C body temp → convert to K and °F",
            "Example 1 (CBSE): 37°C body temp → K aur °F mein badlo"
          )}
        </T>
      </Fade>

      {/* beat 1 — kelvin conversion */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={16} fill={INK} weight={700} script={false}>
          K = 37 + 273.15 = 310.15 K
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 1.4)}>
        <T x={540} y={150} size={12} fill={MUTED} script>
          {t("no ° symbol with K", "K ke saath ° symbol nahi")}
        </T>
      </Fade>

      {/* beat 2 — fahrenheit conversion */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={185} size={16} fill={INK} weight={700} script={false}>
          °F = (9/5)(37) + 32 = 98.6 °F
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 1.4)}>
        <T x={540} y={205} size={12} fill={MUTED} script>
          {t("the familiar thermometer reading!", "thermometer wala jana-pehchana reading!")}
        </T>
      </Fade>

      {/* beat 3 — Example 2 given (NEET), same slot as beat 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={92} size={14} fill={INK} script>
          {t(
            "Example 2 (NEET): arrange increasing length — nm, μm, pm, mm",
            "Example 2 (NEET): badhte length mein rakho — nm, μm, pm, mm"
          )}
        </T>
      </Fade>

      {/* beat 4 — compare exponents, land the order */}
      {ORDER.map(([x, name, exp], i) => (
        <React.Fragment key={name}>
          <Fade on={beat >= 4} delay={dl(4, 0.3 + i * 0.4)}>
            <T x={x} y={140} size={14} fill={INK} weight={700} script={false}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 4} delay={dl(4, 0.5 + i * 0.4)}>
            <T x={x} y={175} size={11} fill={AMBER_DARK} script>
              {exp}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={540} y={205} size={15} fill={GREEN} weight={700} script={false}>
          order: pm &lt; nm &lt; μm &lt; mm
        </T>
      </Fade>

      {/* beat 5 — guardrail: the trap is vocabulary */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={248} size={15} fill={RED} script>
          {t(
            "the trap: nano SOUNDS smaller (famous word) — compare EXPONENTS, not names",
            "trap: nano SUNNE mein chhota lagta hai (famous word) — EXPONENTS compare karo, naam nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — bonus payoff: prefix = physical scale */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={290} size={14} fill={INK} script>
          {t("the prefix = the SCALE of the object:", "prefix = object ka SCALE batata hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={330} size={13} fill={MUTED} script>
          {t(
            "nm = molecular · pm ≈ atomic · mm = visible to the eye",
            "nm = molecular · pm ≈ atomic · mm = aankh se dikhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
