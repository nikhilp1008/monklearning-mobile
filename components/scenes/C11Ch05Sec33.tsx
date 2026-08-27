/**
 * C11 Chemistry Ch05 · Section 33 — "Pitfalls and pro-tips: bomb versus
 * cup, adiabatic versus isothermal" (closes subtopic 4)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,5.55,21.5,35.5,44.12,55.04,69.8,75.61]):
 *  0 heading: Applications traps + underline
 *  1 trap 1: bomb vs cup, don't forget Δngas·RT
 *  2 trap 2: adiabatic ≠ isothermal
 *  3 elaboration: swapping inverts every sign
 *  4 note: lattice enthalpy sign convention
 *  5 trap 3: free expansion (w=0, ΔU=0, ΔT=0, q=0)
 *  6 divider + pro-tip heading (green) + underline
 *  7 pro-tip chip: freeze the variable, then ΔU=nCvΔT always
 *
 * Layout plan (centered x540, 5 rows x780 w, x130..910, y=118+44i):
 *  b0 | heading (20, red, w800)       | T mid | y83..106 (bl100)
 *  b0 | underline                     | Draw  | y112 x400..680
 *  b1-5 | 5 rows (14)                 | Chip  | y118/162/206/250/294
 *  b6 | divider                       | Draw  | y352 x150..930
 *  b6 | pro-tip heading (19, green)   | T mid | y366..385 (bl380)
 *  b6 | underline2                    | Draw  | y390 x260..820
 *  b7 | pro-tip chip (14, green)      | Chip  | x130..910 y405..440
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  MUTED,
  RED,
  GREEN,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  { en: "bomb (const V) → ΔU; coffee-cup (const P) → ΔH — don't forget Δngas·RT",
    hi: "bomb (const V) → ΔU; coffee-cup (const P) → ΔH — Δngas·RT mat bhoolo",
    color: RED },
  { en: "adiabatic ≠ isothermal: adiabatic = q=0 (T changes); isothermal = ΔT=0 (heat flows)",
    hi: "adiabatic ≠ isothermal: adiabatic = q=0 (T badalta hai); isothermal = ΔT=0 (heat flow hota hai)",
    color: RED },
  { en: "swapping the two inverts every sign in the problem",
    hi: "dono ko swap karne se problem ka har sign invert ho jata hai",
    color: MUTED },
  { en: "lattice enthalpy sign: use the POSITIVE dissociation value so the cycle balances",
    hi: "lattice enthalpy ka sign: POSITIVE dissociation value lo taaki cycle balance ho",
    color: AMBER_DARK },
  { en: "free expansion: Pext=0 ⇒ w=0; ideal gas ⇒ ΔU=0 ⇒ ΔT=0, q=0",
    hi: "free expansion: Pext=0 ⇒ w=0; ideal gas ⇒ ΔU=0 ⇒ ΔT=0, q=0",
    color: RED },
];

export default function C11Ch05Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("pitfalls & pro-tips: bomb vs cup, adiabatic vs iso", "pitfalls & pro-tips: bomb vs cup, adiabatic vs iso")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={20} weight={800} fill={RED}>
          {t("Applications traps", "Applications traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={RED} sw={2} dur={0.5} />

      {/* beats 1-5 — trap rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= 1 + i} delay={dl(1 + i, 0.1)}>
          <Chip x={130} y={118 + i * 44} w={780} h={34} fill={CREAM} stroke={row.color} textFill={row.color} size={14} script={false}>
            {t(row.en, row.hi)}
          </Chip>
        </Fade>
      ))}

      {/* beat 6 — pro-tip heading */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 150 352 L 930 352" stroke={GREEN} sw={1.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={380} size={19} weight={800} fill={GREEN}>
          {t("Pro-tip: freeze the variable, then jump", "Pro-tip: variable freeze karo, phir jump karo")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 260 390 C 340 387, 740 387, 820 390" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 7 — pro-tip content */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={130} y={405} w={780} h={35} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "isothermal→T · adiabatic→heat · isobaric→P · isochoric→V — then ΔU=nCvΔT always",
            "isothermal→T · adiabatic→heat · isobaric→P · isochoric→V — phir ΔU=nCvΔT hamesha"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
