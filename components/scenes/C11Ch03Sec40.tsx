/**
 * C11 Chemistry Ch03 · Section 40 — "Worked example: why PCl5 exists but NCl5 does not"
 * Canvas 1080×620 · safe x36–1044, y30–596. JEE Advanced closer.
 *
 * Beats (en [0, 17.24, 34.39, 54.61, 73.56, 89.86, 106.15, 130.39]):
 *  0 title + underline
 *  1 to form 5 bonds: unpair ns², promote into empty orbital
 *  2 red-margin: P — 5 singly-occupied orbitals (3s,3p×3,3d) ⇒ PCl5
 *  3 N — only 2s,2p×3 (4 orbitals), no 2d available
 *  4 red-margin: 5th slot blocked (dashed, crossed) ⇒ NCl5 does not exist
 *  5 N max covalency = 4 (NH4+), never higher
 *  6 O: also no 2d ⇒ no OF6/+6; max typically +2 (OF2)
 *  7 closing green stamp: barrier = orbital availability, not thermodynamics
 *
 * Layout plan:
 *  b2 | P: 5 orbital boxes           | Draw  | x140..334 y135..165
 *  b3 | N: 4 orbital boxes           | Draw  | x640..794 y135..165
 *  b4 | N: blocked 5th box (dashed)  | Draw  | x800..834 y135..165
 *  b5-6 | 2 lines                    | T mid | x?..?     y224..259 (bl230/253)
 *  b7 | closing stamp (green)        | Chip  | x210..870 y270..306
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { OrbitalBox } from "./chem-kit";

export default function C11Ch03Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("why PCl5 exists, NCl5 does not", "PCl5 kyun exist karta, NCl5 nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the promotion argument */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("form 5 bonds: unpair ns² electron, promote into empty orbital", "5 bonds: ns² e⁻ unpair karo, empty orbital mein promote")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: phosphorus succeeds */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={280} y={120} size={13} weight={800} fill={INK}>P: [Ne]3s²3p³</T>
      </Fade>
      <OrbitalBox on={beat >= 2} delay={dl(2, 0.5)} x={140} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 2} delay={dl(2, 0.65)} x={180} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 2} delay={dl(2, 0.8)} x={220} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 2} delay={dl(2, 0.95)} x={260} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 2} delay={dl(2, 1.2)} x={300} y={135} w={34} h={30} up={1} down={0} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={220} y={185} size={11} fill={GREEN} weight={700}>
          {t("5 singly-occupied ⇒ PCl₅", "5 singly-occupied ⇒ PCl₅")}
        </T>
      </Fade>

      {/* beat 3 — nitrogen: only 4 orbitals */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={720} y={120} size={13} weight={800} fill={INK}>N: [He]2s²2p³</T>
      </Fade>
      <OrbitalBox on={beat >= 3} delay={dl(3, 0.5)} x={640} y={135} w={34} h={30} up={1} down={1} />
      <OrbitalBox on={beat >= 3} delay={dl(3, 0.65)} x={680} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 3} delay={dl(3, 0.8)} x={720} y={135} w={34} h={30} up={1} down={0} />
      <OrbitalBox on={beat >= 3} delay={dl(3, 0.95)} x={760} y={135} w={34} h={30} up={1} down={0} />

      {/* beat 4 — red-margin: the blocked 5th slot */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={800} y={135} width={34} height={30} rx={2} fill="none" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" />
        <T x={800} y={128} size={13} fill={RED} weight={700}>✗</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={720} y={185} size={11} fill={RED} weight={700}>
          {t("no 2d ⇒ NCl₅ does not exist", "2d nahi ⇒ NCl₅ exist nahi karta")}
        </T>
      </Fade>

      {/* beat 5 — nitrogen's covalency ceiling */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={230} size={13} weight={700} fill={AMBER_DARK}>
          {t("N max covalency = 4 (e.g. NH₄⁺), never higher", "N max covalency = 4 (jaise NH₄⁺), kabhi zyada nahi")}
        </T>
      </Fade>

      {/* beat 6 — oxygen generalises */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={253} size={13} fill={INK}>
          {"O: also no 2d ⇒ no OF₆/+6; max typically +2 (OF₂)"}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={270} w={660} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("barrier = orbital availability, not thermodynamics", "barrier = orbital availability, thermodynamics nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}
