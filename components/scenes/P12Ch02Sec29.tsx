/**
 * P12Ch02 · Section 29 — "The battery fork — is the battery still connected?"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 *
 * BOARD (unchanged): the two branches of the dielectric-insertion fork —
 *  - Branch A, battery CONNECTED  → V = V₀ fixed; C → KC₀, Q → KQ₀, E = E₀, U → KU₀
 *  - Branch B, battery DISCONNECTED → Q = Q₀ trapped; C → KC₀, V → V₀/K, E → E₀/K, U → U₀/K
 *
 * BEAT GATING FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The formula-selection badge, its heading,
 *    its two lines and the footer chip were gated on `beat >= 7`. This section
 *    has 7 narration segments, so useBeat only ever returns 0..6 — the exam
 *    takeaway was invisible in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,2,4,7}: beats 3, 5 and 6 were unused
 *    and each five-line branch dumped in one go, so the board was complete by
 *    17s and then sat still for the remaining 64s of narration.
 *
 * 3. THE BRANCHES WERE IN THE WRONG ORDER. The voice teaches DISCONNECTED
 *    first ("Q is king"), then CONNECTED ("V is king"). The right-hand panel
 *    therefore now fills at beats 2–3 and the left-hand panel at beats 4–5;
 *    both branch headings still appear together at beat 1, when the voice
 *    states the fork itself, so neither column starts cold. Layout untouched.
 *
 *      0  "make it this fork"                     title
 *      1  "connected, or has it been removed?"    both branch headings
 *      2  "charge is trapped — Q is king"         Q = Q₀, C = KC₀   (branch B)
 *      3  "V, E and U all fall by K"              V, E, U ÷ K       (branch B)
 *      4  "it clamps V — V is king"               V = V₀, C = KC₀   (branch A)
 *      5  "Q and U rise by K, E unchanged"        Q, E, U           (branch A)
 *      6  "decide it first, every single time"    fork rule + formula guide
 *
 * No numbers were changed: every factor on the board (K, 1/K, the unchanged E)
 * is exactly what the narration states for its branch.
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Battery Fork: Battery Connected (V Constant) vs Disconnected (Q Constant)", "The Battery Fork: Battery Connected (V Constant) vs Disconnected (Q Constant)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: BRANCH 1 — BATTERY STILL CONNECTED */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BRANCH A: BATTERY CONNECTED (V = V₀)", "BRANCH A: BATTERY CONNECTED (V = V₀)")}
          </T>
        </Fade>

        {/* beat 4 — the battery clamps V at its own EMF, so V is king */}
        <Fade on={beat >= 4} delay={dl(4, 0.3)}>
          <T x={45} y={75} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            • Voltage: V = V₀  (Constant, fixed by battery!)
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.7)}>
          <T x={45} y={115} size={14} fill={GREEN} weight={800} anchor="start">
            • Capacitance: C = K C₀  (Increases by K)
          </T>
        </Fade>

        {/* beat 5 — Q and U rise by K; E is untouched (V and d both unchanged) */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={45} y={155} size={14} fill={GREEN} weight={800} anchor="start">
            • Charge: Q = K Q₀  (Increases — Battery pumps charge!)
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.6)}>
          <T x={45} y={195} size={14} fill={INK} weight={800} anchor="start">
            • Field: E = E₀  (Constant)
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.0)}>
          <T x={45} y={235} size={14} fill={GREEN} weight={800} anchor="start">
            • Stored Energy: U = ½ C V² = K U₀  (Increases!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: BRANCH 2 — BATTERY DISCONNECTED */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.9)} />
        <Fade on={beat >= 1} delay={dl(1, 1.2)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BRANCH B: BATTERY DISCONNECTED (Q = Q₀)", "BRANCH B: BATTERY DISCONNECTED (Q = Q₀)")}
          </T>
        </Fade>

        {/* beat 2 — the charge is trapped with nowhere to go, so Q is king */}
        <Fade on={beat >= 2} delay={dl(2, 0.3)}>
          <T x={45} y={75} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            • Charge: Q = Q₀  (Constant — Charge is trapped!)
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.7)}>
          <T x={45} y={115} size={14} fill={GREEN} weight={800} anchor="start">
            • Capacitance: C = K C₀  (Increases by K)
          </T>
        </Fade>

        {/* beat 3 — V, E and U all fall by K while Q stays locked in place */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={45} y={155} size={14} fill={RED} weight={800} anchor="start">
            • Voltage: V = V₀ / K  (Decreases by 1/K)
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.6)}>
          <T x={45} y={195} size={14} fill={RED} weight={800} anchor="start">
            • Field: E = E₀ / K  (Decreases by 1/K)
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.0)}>
          <T x={45} y={235} size={14} fill={RED} weight={800} anchor="start">
            • Stored Energy: U = Q² / (2C) = U₀ / K  (Decreases!)
          </T>
        </Fade>
      </G>

      {/* MIDDLE BRIDGE FORK — beat 6: decide it first, every single time */}
      <G transform="translate(40, 325)">
        <Fade on={beat >= 6} delay={dl(6, 0.2)}>
          <Line x1="20" y1="10" x2="980" y2="10" stroke={INK} strokeWidth={1.8} />
          <T x={500} y={38} anchor="middle" size={17} fill={RED} weight={800}>
            THE #1 EXAM FORK RULE: Identify battery state BEFORE choosing formula!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.6)} />
        <Fade on={beat >= 6} delay={dl(6, 0.9)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FORMULA SELECTION GUIDE", "FORMULA SELECTION GUIDE")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 1.2)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Battery Connected → Use U = ½ C V² (since V is constant)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Battery Disconnected → Use U = Q² / (2C) (since Q is constant)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip — beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Battery Fork Mastered: Connected -> V constant & U increases; Disconnected -> Q constant & U decreases! ✓",
            "★ Battery Fork Mastered: Connected -> V constant & U increases; Disconnected -> Q constant & U decreases! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
