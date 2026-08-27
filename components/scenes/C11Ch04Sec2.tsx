/**
 * C11 Chemistry Ch04 · Section 2 — "Polar bonds, dipole moment, and why symmetry cancels"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 19.63, 38.49, 55.64, 70.57, 90.71, 104.02, 128.85]):
 *  0 H–Cl bond, shared pair drawn asymmetric (pulled toward Cl)
 *  1 δ⁺/δ⁻ labels, crossed-tail dipole arrow, "polar bond · μ" chip
 *  2 small vector icon: "pulls are vectors: add or cancel"
 *  3 BF3 trigonal-planar 3-arrow cancellation, "net μ = 0" green
 *  4 CO2 (linear, cancels) vs H2O (bent, doesn't) mini diagrams
 *  5 red-margin warning + 3 empty boxes (octet exceptions)
 *  6 fill boxes: electron-deficient / expanded octet / odd-electron
 *  7 closing chip: Lewis = connectivity map, not geometry
 *
 * Layout plan:
 *  b0-1 | H-Cl polar bond      | Draw/T | x380..720 y96..192
 *  b2   | vector icon+label    | Draw/T | x200..320 y244..286
 *  b3   | BF3 3-arrow cancel   | Draw/T | x746..854 y206..349
 *  b4   | CO2 mini diagram     | Draw/T | x185..315 y364..444
 *  b4   | H2O mini diagram     | Draw/T | x715..845 y364..444
 *  b5   | red line + 3 boxes   | T/Draw | x90..990 y454..544
 *  b6   | box contents         | T      | inside same 3 boxes
 *  b7   | closing chip         | Chip   | x260..820 y556..582
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Polar bonds and the dipole moment", "Polar bonds aur dipole moment")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d="M 400 80 C 470 76, 610 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — H-Cl bond, pair pulled toward Cl */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={380} y={132} size={22} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={720} y={132} size={22} weight={700} fill={INK}>
          Cl
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d={bondD(402, 132, 698, 132)} stroke={INK} sw={2.2} dur={0.5} />
      <LonePair on={beat >= 0} delay={dl(0, 1.5)} cx={610} cy={132} angle={Math.PI / 2} spread={7} />

      {/* beat 1 — polarity labels + dipole arrow + chip */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={380} y={100} size={13} fill={INK}>
          δ⁺
        </T>
        <T x={720} y={100} size={13} fill={INK}>
          δ⁻
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d="M 410 152 L 690 152 M 679 146 L 690 152 L 679 158 M 410 145 L 410 159"
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={380} y={168} w={340} h={24} fill={AMBER} textFill={INK} size={13} script={false}>
          {t("polar bond · μ = dipole moment", "polar bond · μ = dipole moment")}
        </Chip>
      </Fade>

      {/* beat 2 — vectors can add or cancel */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d="M 200 250 L 260 250 M 248 244 L 260 250 L 248 256 M 212 244 L 200 250 L 212 256"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={230} y={276} size={12} fill={MUTED} script>
          {t("pulls are vectors: add or cancel", "pulls vectors hain: add ya cancel")}
        </T>
      </Fade>

      {/* beat 3 — BF3 trigonal planar, three dipoles cancel */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={800} y={286} size={17} weight={700} fill={INK}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={800} y={218} size={17} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(800, 266, 800, 232)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={853.7} y={311} size={17} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={arrowD(812, 288, 841, 304)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={746.3} y={311} size={17} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={arrowD(788, 288, 759, 304)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={800} y={345} size={13} fill={GREEN}>
          {t("net μ = 0 (symmetry cancels)", "net μ = 0 (symmetry cancel)")}
        </T>
      </Fade>

      {/* beat 4 — CO2 (linear, cancels) vs H2O (bent, doesn't) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={250} y={404} size={17} weight={700} fill={INK}>
          C
        </T>
        <T x={185} y={404} size={17} weight={700} fill={INK}>
          O
        </T>
        <T x={315} y={404} size={17} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={doubleBondD(199, 404, 236, 404)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={doubleBondD(264, 404, 301, 404)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={arrowD(250, 380, 215, 380)} stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(250, 380, 285, 380)} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={250} y={440} size={13} fill={GREEN}>
          {t("CO₂: linear → μ = 0", "CO₂: linear → μ = 0")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={780} y={390} size={17} weight={700} fill={INK}>
          O
        </T>
        <T x={725} y={432} size={15} weight={700} fill={INK}>
          H
        </T>
        <T x={835} y={432} size={15} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={bondD(766, 398, 733, 424)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.0)} d={bondD(794, 398, 827, 424)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d={arrowD(780, 420, 780, 392)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={780} y={440} size={13} fill={GREEN}>
          {t("H₂O: bent → μ ≠ 0", "H₂O: bent → μ ≠ 0")}
        </T>
      </Fade>

      {/* beat 5 — octet rule is a guide, not a law */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={464} size={13} fill={RED}>
          {t(
            "octet rule: a guide, not a law — 3 families break it",
            "octet rule: guide hai, iron law nahi — 3 families todti hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M 90 478 h 260 v 66 h -260 z" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d="M 410 478 h 260 v 66 h -260 z" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 730 478 h 260 v 66 h -260 z" stroke={INK} sw={1.6} dur={0.4} />

      {/* beat 6 — fill the three boxes */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={220} y={508} size={13} weight={700} fill={INK}>
          {t("electron-deficient", "electron-deficient")}
        </T>
        <T x={220} y={530} size={12} fill={RED}>
          BeCl₂, BCl₃
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={508} size={13} weight={700} fill={INK}>
          {t("expanded octet", "expanded octet")}
        </T>
        <T x={540} y={530} size={12} fill={RED}>
          SF₆, PCl₅
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={860} y={508} size={13} weight={700} fill={INK}>
          {t("odd-electron", "odd-electron")}
        </T>
        <T x={860} y={530} size={12} fill={RED}>
          NO
        </T>
      </Fade>

      {/* beat 7 — closing verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={556} w={560} h={26} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t(
            "Lewis = connectivity map, not geometry (VSEPR/VBT/MOT next)",
            "Lewis = connectivity ka map, geometry ka nahi (VSEPR/VBT/MOT next)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
