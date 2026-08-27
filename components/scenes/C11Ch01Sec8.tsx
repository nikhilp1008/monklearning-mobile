/**
 * C11 Ch01 · Section 8 — "Quantity, unit, and the seven SI base units"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,10.5,26.63,43.61,58.29,74.67,93.02]):
 *  0 anchor: "five sugar" — five WHAT?
 *  1 land: quantity = number × unit
 *  2 SI system intro: the world agreed, built on 7 base units
 *  3 represent: the 7 base-unit cards (quantity/unit/symbol), built together
 *  4 spotlight: ring the mole — the engine of this chapter
 *  5 derived units 1: area, volume, speed, density
 *  6 derived units 2: pressure, energy — not now, just recognise
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | shopkeeper story (script16)  | T mid | x540  y95
 *  b1 | landing (script15 ink)       | T mid | x540  y122
 *  b2 | SI intro (14 amber-dark)     | T mid | x540  y149
 *  b3 | 7 cards (top/mid/bottom)     | T mid | cx100..940 y213/235/255
 *  b4 | ring around card 6 (mole)    | Draw  | c(800,230) rx70 ry43
 *  b4 | caption (script15 red)       | T mid | x540  y302
 *  b5 | derived-1 line (13 muted)    | T mid | x540  y330
 *  b6 | derived-2 line (13 muted)    | T mid | x540  y354
 *  b6 | note (12 muted script)       | T mid | x540  y390
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const UNITS: [string, string, string][] = [
  ["length", "metre", "(m)"],
  ["mass", "kilogram", "(kg)"],
  ["time", "second", "(s)"],
  ["current", "ampere", "(A)"],
  ["temp.", "kelvin", "(K)"],
  ["amount", "mole", "(mol)"],
  ["luminous", "candela", "(cd)"],
];
const CX = [100, 240, 380, 520, 660, 800, 940];

export default function C11Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={23} fill={RED} script>
          {t("quantity, unit, and the seven SI base units", "quantity, unit, aur saat SI base units")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={16} fill={INK} script>
          {t(
            "“five sugar” — five WHAT? grams? kilograms? sacks?",
            "“paanch cheeni” — paanch KYA? grams? kilograms? bore?"
          )}
        </T>
      </Fade>

      {/* beat 1 — land: quantity = number x unit */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={15} fill={INK} weight={700} script={false}>
          {t("quantity = number × unit (5 kg, not just “5”)", "quantity = number × unit (5 kg, sirf “5” nahi)")}
        </T>
      </Fade>

      {/* beat 2 — SI system intro */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={149} size={14} fill={AMBER_DARK} script>
          {t(
            "chaos stops: the world agreed on SI — Système International",
            "afra-tafri rukti hai: duniya ne SI system maana — Système International"
          )}
        </T>
      </Fade>

      {/* beat 3 — the seven base-unit cards */}
      {UNITS.map(([q, u, s], i) => (
        <React.Fragment key={u}>
          <Fade on={beat >= 3} delay={dl(3, 0.3 + i * 0.35)}>
            <T x={CX[i]} y={213} size={11} fill={MUTED} script>
              {q}
            </T>
          </Fade>
          <Fade on={beat >= 3} delay={dl(3, 0.5 + i * 0.35)}>
            <T x={CX[i]} y={235} size={14} fill={INK} weight={700} script={false}>
              {u}
            </T>
          </Fade>
          <Fade on={beat >= 3} delay={dl(3, 0.7 + i * 0.35)}>
            <T x={CX[i]} y={255} size={11} fill={AMBER_DARK} script>
              {s}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 4 — spotlight the mole */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(800, 230, 70, 43)} stroke={RED} sw={2.6} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={540} y={302} size={15} fill={RED} script>
          {t("the ENGINE of this chapter", "is chapter ka ENGINE")}
        </T>
      </Fade>

      {/* beat 5 — derived units 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={330} size={13} fill={MUTED} script>
          {t(
            "derived: area = m² · volume = m³ · speed = m/s · density = kg/m³ (or g/cm³)",
            "derived: area = m² · volume = m³ · speed = m/s · density = kg/m³ (ya g/cm³)"
          )}
        </T>
      </Fade>

      {/* beat 6 — derived units 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={354} size={13} fill={MUTED} script>
          {t(
            "pressure: Pa (also atm, bar, mmHg) · energy: J (also calorie)",
            "pressure: Pa (atm, bar, mmHg bhi) · energy: J (calorie bhi)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={390} size={12} fill={MUTED} script>
          {t("not now — just recognise: built from the seven", "abhi nahi — bas pehchano: saaton se bane hain")}
        </T>
      </Fade>
    </Scene>
  );
}
