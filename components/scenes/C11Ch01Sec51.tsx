/**
 * C11 Ch01 · Section 51 — "What concentration measures, and the denominators"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Opens subtopic 8: Concentration Terms.
 *
 * Beats (en [0,11.86,25.09,49.92,67.67,84.57,101.55]):
 *  0 anchor: nimbu paani — 2 spoons vs 6, same drink, different strength
 *  1 concentration = how crowded the dissolved particles are
 *  2 hub-and-spoke: moles of solute ÷ FOUR different denominators
 *  3 the identity lives in the denominator; recipe: moles first
 *  4 whisper: molality uses SOLVENT mass, mass%/density use SOLUTION mass
 *  5 very dilute → ppm; the unit follows the scale
 *  6 each measure's moment: molarity/molality/mole fraction
 *
 * Layout plan:
 *  b0 | anchor (script13 ink)         | T mid | x540  y86
 *  b1 | l (script12 muted)            | T mid | x540  y110
 *  b2 | hub "moles of SOLUTE" (13 bold)| T mid | x540  y172
 *  b2 | 4 spokes (Draw lines)         | Draw  | (540,180)→(x,195)
 *  b2 | denom label / term (4 cols)   | T mid | x=160/400/640/880 y212/232
 *  b3 | l1 (13 bold red) / l2 (green) | T mid | x540  y290/312
 *  b4 | l1 (script12 red) / l2 (amber)| T mid | x540  y340/362
 *  b5 | l (script12 muted)            | T mid | x540  y390
 *  b6 | l1/l2/l3 (script12 ink)       | T mid | x540  y415/435/455
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const COLS = [
  { x: 160, denom: "÷ VOLUME (solution)", term: "= MOLARITY" },
  { x: 400, denom: "÷ MASS (solvent)", term: "= MOLALITY" },
  { x: 640, denom: "÷ TOTAL MOLES", term: "= MOLE FRACTION" },
  { x: 880, denom: "÷ TOTAL MASS ×100", term: "= MASS %" },
];

export default function C11Ch01Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("what concentration measures, and the denominators", "concentration kya naapta hai, aur denominators")}
        </T>
      </Fade>

      {/* beat 0 — anchor: nimbu paani */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "two people make nimbu paani — one stirs in 2 spoons sugar, the other 6: same drink, different STRENGTH",
            "do log nimbu paani banate — ek 2 spoon cheeni dalta, doosra 6: same drink, alag STRENGTH"
          )}
        </T>
      </Fade>

      {/* beat 1 — concentration = crowding */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={12} fill={MUTED} script>
          {t(
            "concentration = how much solute is crammed into how much solution/solvent — how CROWDED the particles are",
            "concentration = kitna solute, kitne solution/solvent mein hai — particles kitne CROWDED hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — hub and spoke: moles of solute over four denominators */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={13} fill={INK} weight={700} script={false}>
          {t("moles of SOLUTE ÷ ...", "moles of SOLUTE ÷ ...")}
        </T>
      </Fade>
      {COLS.map((c, i) => (
        <Draw
          key={`spoke${i}`}
          on={beat >= 2}
          delay={dl(2, 0.6 + i * 0.15)}
          d={`M 540 180 L ${c.x} 195`}
          stroke={MUTED}
          sw={1.3}
          dur={0.5}
        />
      ))}
      {COLS.map((c, i) => (
        <Fade key={`denom${i}`} on={beat >= 2} delay={dl(2, 1.1 + i * 0.15)}>
          <T x={c.x} y={214} size={11} fill={MUTED} script>
            {c.denom}
          </T>
        </Fade>
      ))}
      {COLS.map((c, i) => (
        <Fade key={`term${i}`} on={beat >= 2} delay={dl(2, 1.7 + i * 0.15)}>
          <T x={c.x} y={234} size={12} fill={GREEN} weight={700} script={false}>
            {c.term}
          </T>
        </Fade>
      ))}

      {/* beat 3 — identity lives in the denominator */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={290} size={13} fill={RED} weight={700} script={false}>
          {t(
            "the ENTIRE identity of a term lives in its DENOMINATOR",
            "kisi term ki poori pehchaan uske DENOMINATOR mein hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={312} size={12} fill={GREEN} script>
          {t(
            "recipe: get moles of solute FIRST, then divide by the correct denominator",
            "recipe: pehle solute ke moles nikalo, phir sahi denominator se ÷ karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — whisper: the common error */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={340} size={12} fill={RED} script>
          {t(
            "molality → mass of SOLVENT (not solution!) · mass%/density → mass of SOLUTION",
            "molality → SOLVENT ka mass (solution ka nahi!) · mass%/density → SOLUTION ka mass"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={362} size={12} fill={AMBER_DARK} script>
          {t(
            "read which one the problem gives — NEVER substitute one for the other",
            "padho sawaal kaunsa deta hai — ek ki jagah doosra KABHI mat rakho"
          )}
        </T>
      </Fade>

      {/* beat 5 — dilute solutions, ppm */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={390} size={12} fill={MUTED} script>
          {t(
            "very dilute (a pinch in a LOT of water)? switch to ppm — the unit follows the SCALE",
            "bahut dilute (bahut paani mein chutki bhar)? ppm par jao — unit problem ke SCALE ka peecha karti"
          )}
        </T>
      </Fade>

      {/* beat 6 — each measure's moment */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={415} size={12} fill={INK} script>
          {t(
            "molarity → reactions in solution (just measure a volume)",
            "molarity → solution mein reactions (bas ek volume naapo)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={435} size={12} fill={INK} script>
          {t(
            "molality → temperature changes (BP/FP — Class 12 Solutions uses it)",
            "molality → temperature badle (BP/FP — Class 12 Solutions mein use hota)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={455} size={12} fill={INK} script>
          {t("mole fraction → proportions of particles", "mole fraction → particles ke proportions")}
        </T>
      </Fade>
    </Scene>
  );
}
