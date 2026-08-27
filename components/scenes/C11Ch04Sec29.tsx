/**
 * C11 Chemistry Ch04 · Section 29 — "Coordinate (dative) bonds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 4. Only 7 beats.
 *
 * Beats (en [0, 18.52, 30.46, 45.23, 65.02, 82.43, 98.22]):
 *  0 anchor: covalent = 50/50, but sometimes one atom brings the whole pair
 *  1 shop analogy: one funds it all, other gives empty space
 *  2 erasure rule: indistinguishable once formed
 *  3 build NH3 + H+ approaching, curved arrow from lone pair
 *  4 NH4+ forms: LP becomes 4th N-H bond, all identical
 *  5 other examples list
 *  6 requirement + arrow notation
 *
 * Layout plan:
 *  b3-4 | NH3 + H+ -> NH4+ | Draw/T | x290..550 y195..330
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD, LonePair } from "./chem-kit";

export default function C11Ch04Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Coordinate (dative) bonds", "Coordinate (dative) bonds")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("covalent = 50/50, but sometimes ONE atom brings the whole pair", "covalent = 50/50, par kabhi EK atom poora pair laata")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={119} size={11.5} fill={INK}>
          {t(
            "like 2 friends opening a shop: one funds it all, other gives empty space",
            "2 dost dukaan khol rahe: ek poora funds deta, doosra sirf khaali jagah"
          )}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={143} size={12} weight={700} fill={RED}>
          {t(
            "erasure rule: once formed, INDISTINGUISHABLE from a normal covalent bond",
            "erasure rule: banne ke baad, normal covalent bond se INDISTINGUISHABLE"
          )}
        </T>
      </Fade>

      {/* beat 3 — build NH3 + H+ approaching */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={350} y={260} size={18} weight={700} fill={INK}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={290} y={305} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={350} y={325} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={410} y={305} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={bondD(339.6, 267.8, 300.4, 297.2)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={bondD(350, 273, 350, 312)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={bondD(360.4, 267.8, 399.6, 297.2)} stroke={INK} sw={2} dur={0.3} />
      <LonePair on={beat === 3} delay={dl(3, 1.7)} cx={350} cy={222} angle={0} spread={7} />
      <Fade on={beat === 3} delay={dl(3, 2.1)}>
        <T x={555} y={222} size={16} weight={700} fill={INK}>
          H⁺
        </T>
      </Fade>
      <Draw on={beat === 3} delay={dl(3, 2.5)} d={curvedArrowD(360, 222, 525, 222, -22)} stroke={RED} sw={2} dur={0.6} />

      {/* beat 4 — NH4+ forms */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={bondD(350, 246, 350, 208)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={350} y={196} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={378} y={190} size={13} fill={INK}>
          ⁺
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={350} y={352} size={12} weight={700} fill={GREEN}>
          {t("4 N–H bonds — all IDENTICAL", "4 N–H bonds — sab IDENTICAL")}
        </T>
      </Fade>

      {/* beat 5 — other examples */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={385} size={11.5} fill={INK}>
          {t(
            "same script: H₃O⁺, ozone, CO, NH₃→BF₃ adduct, Al₂Cl₆ bridges",
            "yahi script: H₃O⁺, ozone, CO, NH₃→BF₃ adduct, Al₂Cl₆ bridges"
          )}
        </T>
      </Fade>

      {/* beat 6 — requirement + notation */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={410} size={12} weight={700} fill={INK}>
          {t("needs: donor (lone pair) + acceptor (vacant orbital)", "chahiye: donor (lone pair) + acceptor (vacant orbital)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={432} size={11} fill={MUTED}>
          {t("drawn as an arrow: donor → acceptor", "arrow ki tarah banate: donor → acceptor")}
        </T>
      </Fade>
    </Scene>
  );
}
