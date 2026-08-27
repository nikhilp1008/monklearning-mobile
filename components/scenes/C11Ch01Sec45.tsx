/**
 * C11 Ch01 · Section 45 — "The limiting reagent and percentage yield"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,11.35,32.68,53.85,70.66,86.62,99.76,120.33]):
 *  0 anchor: reactants are rarely mixed in exact recipe ratios
 *  1 dhaba analogy: 10 roti + 3 dal → recipe 2 roti:1 dal → only 3 thalis
 *  2 naming: dal = limiting reagent, roti = excess
 *  (whole analogy zone, incl. anchor, fades at beat 3 to free the board)
 *  3 procedure: moles → ÷ coefficient → smallest = limiting reagent
 *  4 why dividing works: same per-recipe footing
 *  5 excess reactant: moles left = supplied − consumed (from limiting only)
 *  6 yield: theoretical vs actual, boxed % yield formula
 *  7 order matters: limiting → theoretical yield → % yield
 *
 * Layout plan:
 *  b0 | anchor (script13 ink)         | T mid | x540  y86  [fade@b3]
 *  b1 | recipe (script12 muted)       | T mid | x540  y106 [fade@b3]
 *  b1 | roti label/icons              | T/○   | x540  y126/140 [fade@b3]
 *  b1 | dal label/icons               | T/●   | x540  y162/178 [fade@b3]
 *  b1 | result l1/l2 (script12/13)    | T mid | x540  y200/222 [fade@b3]
 *  b2 | def l1 (13 red) / l2 (13 grn) | T mid | x540  y246/266 [fade@b3]
 *  b3 | l1/l2 (script13 ink/red)      | T mid | x540  y96/122
 *  b4 | l (script12 amber-drk)        | T mid | x540  y150
 *  b5 | l (script12 ink)              | T mid | x540  y178
 *  b6 | box (dashed amber, w560h95)   | Draw  | x260..820 y210..305
 *  b6 | l1/l2/formula inside          | T mid | x540  y233/258/288
 *  b7 | l (script13 red)              | T mid | x540  y335
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROTI_X = Array.from({ length: 10 }, (_, i) => 405 + i * 30);
const DAL_X = [510, 540, 570];

export default function C11Ch01Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("the limiting reagent and percentage yield", "limiting reagent aur percentage yield")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "reactants are RARELY mixed in exact recipe ratios — the real-world problem",
            "reactants shayad hi kabhi exact recipe ratio mein milte — yehi real-world problem hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — dhaba analogy: 10 roti + 3 dal */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={12} fill={MUTED} script>
          {t("dhaba recipe: 2 roti + 1 dal → 1 thali", "dhaba recipe: 2 roti + 1 dal → 1 thali")}
        </T>
      </Fade>

      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.6)}>
        <T x={540} y={126} size={11} fill={MUTED} script>
          10 roti
        </T>
      </Fade>
      {ROTI_X.map((x, i) => (
        <Fade key={`roti${i}`} on={beat >= 1 && beat < 3} delay={dl(1, 0.9 + i * 0.06)}>
          <Circle cx={x} cy={140} r={7} fill="none" stroke={i < 6 ? INK : RED} strokeWidth={1.6} />
        </Fade>
      ))}

      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 1.6)}>
        <T x={540} y={162} size={11} fill={MUTED} script>
          3 dal
        </T>
      </Fade>
      {DAL_X.map((x, i) => (
        <Fade key={`dal${i}`} on={beat >= 1 && beat < 3} delay={dl(1, 1.9 + i * 0.15)}>
          <Circle cx={x} cy={178} r={8} fill={AMBER_DARK} stroke={INK} strokeWidth={1} />
        </Fade>
      ))}

      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 2.4)}>
        <T x={540} y={200} size={12} fill={MUTED} script>
          {t(
            "rotis alone → 5 thalis · dal alone → only 3 thalis",
            "sirf roti se → 5 thali · sirf dal se → sirf 3 thali"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 3.1)}>
        <T x={540} y={222} size={13} fill={INK} script>
          {t(
            "serve 3 thalis — dal runs out FIRST, 4 roti left over",
            "3 thali serve hoti — dal PEHLE khatam, 4 roti bach jaati"
          )}
        </T>
      </Fade>

      {/* beat 2 — naming: limiting reagent vs excess */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={246} size={13} fill={RED} weight={700} script={false}>
          {t(
            "dal → LIMITING REAGENT (runs out first, caps the product)",
            "dal → LIMITING REAGENT (pehle khatam, product ko cap karta)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 1.2)}>
        <T x={540} y={266} size={13} fill={GREEN} weight={700} script={false}>
          {t("roti → EXCESS (some left unreacted)", "roti → EXCESS (kuch unreacted bach jaati)")}
        </T>
      </Fade>

      {/* beat 3 — the procedure */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={96} size={13} fill={INK} script>
          {t(
            "convert each reactant to MOLES, then ÷ by its COEFFICIENT",
            "har reactant ko MOLES mein badlo, phir apne COEFFICIENT se ÷ karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={122} size={13} fill={RED} script>
          {t(
            "smallest quotient = LIMITING REAGENT — never compare raw mole counts!",
            "sabse chhota quotient = LIMITING REAGENT — raw mole counts kabhi compare mat karo!"
          )}
        </T>
      </Fade>

      {/* beat 4 — why dividing works */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={150} size={12} fill={AMBER_DARK} script>
          {t(
            "dividing puts every reactant on the same per-recipe footing — smallest runs out first",
            "÷ karne se har reactant ek hi per-recipe footing par aata — sabse chhota pehle khatam"
          )}
        </T>
      </Fade>

      {/* beat 5 — excess reactant */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={178} size={12} fill={INK} script>
          {t(
            "excess reactant: moles left = supplied − consumed (consumed from the LIMITING reagent only)",
            "excess reactant: bachi moles = supplied − consumed (consumed sirf LIMITING reagent se)"
          )}
        </T>
      </Fade>

      {/* beat 6 — yield: theoretical vs actual, boxed formula */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 260 210 h 560 q 16 0 16 16 v 63 q 0 16 -16 16 h -560 q -16 0 -16 -16 v -63 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={233} size={13} fill={INK} weight={700} script={false}>
          {t(
            "THEORETICAL YIELD = max possible product (from the limiting reagent)",
            "THEORETICAL YIELD = max possible product (limiting reagent se)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={258} size={12} fill={INK} script>
          {t(
            "actual yield < theoretical — lost to incomplete reaction, side reactions, spillage",
            "actual yield < theoretical — incomplete reaction, side reactions, spillage mein kho jaata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={540} y={288} size={14} fill={GREEN} weight={700} script={false}>
          % YIELD = (actual / theoretical) × 100
        </T>
      </Fade>

      {/* beat 7 — order matters */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={335} size={13} fill={RED} script>
          {t(
            "order is FIXED: limiting reagent → THEN theoretical yield → THEN % yield",
            "order FIXED hai: limiting reagent → PHIR theoretical yield → PHIR % yield"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
