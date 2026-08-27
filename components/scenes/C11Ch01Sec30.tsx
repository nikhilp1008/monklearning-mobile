/**
 * C11 Ch01 · Section 30 — "The mole: chemistry's counting unit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,18.69,37.46,51.46,65.37,87.9,108.04,130.4]):
 *  0 anchor: eggs=dozen, rice=quintals — counting units, not individual counts
 *  1 atoms push this to the extreme: one grain of sand's atoms
 *  2 chemists' own dozen = the MOLE
 *  3 Avogadro's number, boxed: Nₐ = 6.022×10²³
 *  4 same count, wildly different scale: marbles vs water molecules
 *  5 the genius: mass of 1 mole (g) = relative atomic mass, numerically
 *  6 the bridge: invisible atoms ↔ visible balance
 *  7 the mustard-seed shopkeeper analogy: weigh, don't count
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y88
 *  b1 | l1 (script13 ink)            | T mid | x540  y113
 *  b2 | l2 (script13 amber-drk)      | T mid | x540  y140
 *  b3 | box (dashed amber, w340h40)  | Draw  | x370..710 y165..205
 *  b3 | Nₐ formula (20 bold ink)     | T mid | x540  y193
 *  b4 | l3 (script13 ink)            | T mid | x540  y232
 *  b5 | l4 (script13 green)          | T mid | x540  y260
 *  b6 | l5 (script13 red)            | T mid | x540  y290
 *  b7 | l6/l7 (script13 ink/muted)   | T mid | x540  y320/345
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("the mole: chemistry's counting unit", "the mole: chemistry ki counting unit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={14} fill={INK} script>
          {t(
            "eggs: a dozen · rice: quintals — counting UNITS, not individual counts",
            "eggs: a dozen · rice: quintals — counting UNITS, ek-ek gin ke nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — atoms push this to the extreme */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} script>
          {t(
            "atoms push this to the extreme: 1 grain of sand > all of India's beach-sand atoms",
            "atoms ise extreme tak le jaate: 1 ret ka dana > India ke saare beach-sand atoms"
          )}
        </T>
      </Fade>

      {/* beat 2 — chemists' own dozen */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={140} size={13} fill={AMBER_DARK} script>
          {t("chemists' own dozen = the MOLE — a fixed, colossal number", "chemists ka apna dozen = MOLE — ek fixed, colossal number")}
        </T>
      </Fade>

      {/* beat 3 — Avogadro's number, boxed */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M 386 165 h 308 q 16 0 16 16 v 8 q 0 16 -16 16 h -308 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={193} size={20} fill={INK} weight={700} script={false}>
          Nₐ = 6.022 × 10²³
        </T>
      </Fade>

      {/* beat 4 — same count, wildly different scale */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={232} size={13} fill={INK} script>
          {t(
            "1 mole marbles buries Earth · 1 mole water molecules fits in a spoon — SAME count!",
            "1 mole marbles Earth ko dabaa de · 1 mole water molecules ek chammach mein — SAME count!"
          )}
        </T>
      </Fade>

      {/* beat 5 — the genius: mass = relative atomic mass */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={260} size={13} fill={GREEN} script>
          {t(
            "genius: mass of 1 mole (g) = relative atomic mass — C: RAM=12 → 1 mol C = 12 g",
            "genius: 1 mole ka mass (g) = relative atomic mass — C: RAM=12 → 1 mol C = 12 g"
          )}
        </T>
      </Fade>

      {/* beat 6 — the bridge */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={290} size={13} fill={RED} script>
          {t(
            "THE BRIDGE: invisible atoms (u) ↔ visible balance (grams) — weigh 12g C = Nₐ atoms!",
            "THE BRIDGE: invisible atoms (u) ↔ visible balance (grams) — 12g C tolo = Nₐ atoms!"
          )}
        </T>
      </Fade>

      {/* beat 7 — the mustard-seed shopkeeper analogy */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={320} size={13} fill={INK} script>
          {t(
            "shopkeeper: 1000 mustard seeds = 5 g — he WEIGHS, never counts",
            "dukaandaar: 1000 sarson ke daane = 5 g — wo WEIGH karta, kabhi ginta nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={345} size={12} fill={MUTED} script>
          {t(
            "the mole = chemist's “1000 seeds” — reached by WEIGHING, not counting",
            "mole = chemist ka “1000 seeds” — WEIGHING se milta, counting se nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
