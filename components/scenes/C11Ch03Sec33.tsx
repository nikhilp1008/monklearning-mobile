/**
 * C11 Chemistry Ch03 · Section 33 — "Oxidation state: a signed charge by electronegativity"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.53, 18.94, 43.78, 59.14, 79.02, 93.1, 107.09]):
 *  0 title + underline
 *  1 definition: charge when shared pair goes to the more EN atom
 *  2 red-margin: Na2O (O=-2, Na=+1) vs OF2 (O=+2, F=-1) — same O flips sign!
 *  3 procedure: assign to more EN, free element=0, states sum to charge
 *  4 halogen family OS ladder: -1, +1, +3, +5, +7
 *  5 red-margin: max (group) OS = total valence electrons
 *  6 lower states step by 2 — inert-pair effect (Tl+, Pb2+)
 *  7 closing green stamp: valence unsigned; OS carries a sign
 *
 * Layout plan:
 *  b2 | Na2O molecule (Na-O-Na)      | Draw  | x200..380 y118..178
 *  b2 | OF2 molecule (F-O-F)         | Draw  | x650..830 y118..178
 *  b2 | "same O, opposite sign!"     | T mid | x?..?     y196..205 (bl 205)
 *  b3 | procedure line               | T mid | x?..?     y216..229 (bl 225)
 *  b4 | label + 5 OS chips           | Chip  | x335..745 y265..297
 *  b5 | red margin bar + line        | Draw  | x70 y310..342 (bl 332)
 *  b6 | inert-pair line              | T mid | x?..?     y355..366 (bl 365)
 *  b7 | closing stamp (green)        | Chip  | x210..870 y380..416
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const OS_CHIPS = ["−1", "+1", "+3", "+5", "+7"];

export default function C11Ch03Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("oxidation state: a signed charge", "oxidation state: signed charge")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("charge when each shared pair goes to the more EN atom", "charge jab har shared pair zyada EN atom ko jaaye")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: the sign-flip */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={290} y={118} size={12} fill={MUTED}>Na₂O</T>
        <T x={740} y={118} size={12} fill={MUTED}>OF₂</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 230 150 L 270 150 M 310 150 L 350 150" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 680 150 L 720 150 M 760 150 L 800 150" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={200} y={155} size={18} weight={800} fill={INK}>Na</T>
        <T x={290} y={155} size={18} weight={800} fill={INK}>O</T>
        <T x={380} y={155} size={18} weight={800} fill={INK}>Na</T>
        <T x={650} y={155} size={18} weight={800} fill={INK}>F</T>
        <T x={740} y={155} size={18} weight={800} fill={INK}>O</T>
        <T x={830} y={155} size={18} weight={800} fill={INK}>F</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={200} y={178} size={13} weight={700} fill={GREEN}>+1</T>
        <T x={290} y={178} size={14} weight={800} fill={RED}>−2</T>
        <T x={380} y={178} size={13} weight={700} fill={GREEN}>+1</T>
        <T x={650} y={178} size={13} weight={700} fill={GREEN}>−1</T>
        <T x={740} y={178} size={14} weight={800} fill={RED}>+2</T>
        <T x={830} y={178} size={13} weight={700} fill={GREEN}>−1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={205} size={13} weight={700} fill={RED}>
          {t("same O, opposite sign!", "same O, opposite sign!")}
        </T>
      </Fade>

      {/* beat 3 — the procedure */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={225} size={13} weight={700} fill={AMBER_DARK}>
          {t("assign pair to more EN atom; free element=0; states sum to charge", "pair zyada EN atom ko do; free element=0; states charge tak sum")}
        </T>
      </Fade>

      {/* beat 4 — the halogen-family OS ladder */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={255} size={12} weight={700} fill={INK}>
          {t("climbs with config → halogens (ns²np⁵):", "config ke saath chadhta → halogens (ns²np⁵):")}
        </T>
      </Fade>
      {OS_CHIPS.map((c, i) => (
        <Fade key={c} on={beat >= 4} delay={dl(4, 0.5 + i * 0.15)}>
          <Chip x={335 + i * 85} y={265} w={70} h={32} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
            {c}
          </Chip>
        </Fade>
      ))}

      {/* beat 5 — red-margin: the ceiling */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 310 L 70 342" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={332} size={15} weight={700} fill={INK} anchor="start">
          {t("max (group) oxidation state = total valence electrons", "max (group) oxidation state = total valence electrons")}
        </T>
      </Fade>

      {/* beat 6 — inert-pair effect */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={365} size={13} fill={INK}>
          {"lower states step by 2 — inert-pair effect: Tl⁺, Pb²⁺"}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={380} w={660} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("valence is unsigned; oxidation state carries a SIGN", "valence unsigned hai; oxidation state ek SIGN rakhta")}
        </Chip>
      </Fade>
    </Scene>
  );
}
