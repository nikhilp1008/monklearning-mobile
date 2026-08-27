/**
 * C11 Ch09 · Section 45 — "The orbital picture of ethyne"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.79, 18.18, 26.71, 38.83, 46.25, 58.54]):
 *  0 heading: each C is sp · 1 2 sp orbitals 180° apart: 1 C-C σ, 1 C-H σ ·
 *  2 2 leftover p orbitals ⊥ to axis and to each other · 3 diagram: linear
 *  skeleton + 2 perpendicular π systems · 4 overlap sideways -> 2π bonds ·
 *  5 strictly linear · 6 RED: 2π clouds = electron-rich cylinder
 *
 * Layout plan — skeleton H(190,215)-C(230,215)≡C(310,215)-H(350,215):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, tripleBondD } from "./chem-kit";

export default function C11Ch09Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("the orbital picture of ethyne", "ethyne ki orbital picture")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={720} y={140} size={15} fill={INK} weight={700} anchor="start">
          {t("each carbon is sp hybridised", "har carbon sp hybridised hai")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={720} y={178} size={14} fill={INK} anchor="start">
          {t("2 sp orbitals 180° apart: 1 C–C σ, 1 C–H σ", "2 sp orbitals 180° door: 1 C–C σ, 1 C–H σ")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={690} y={216} size={13} fill={INK} anchor="start">
          {t("2 leftover p orbitals ⊥ to axis & to each other", "2 bache p orbitals axis ke ⊥, aur ek-doosre ke bhi")}
        </T>
      </Fade>

      {/* beat 3 — the linear skeleton with two perpendicular pi systems */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={bondD(150, 215, 190, 215)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={tripleBondD(195, 215, 305, 215)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={bondD(310, 215, 350, 215)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={135} y={220} size={14} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={365} y={220} size={14} fill={INK}>H</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 165 178 A 85 22 0 1 1 334.9 177.9" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d="M 165 252 A 85 22 0 1 0 334.9 252.1" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.1)} d="M 250 165 A 95 44 0 1 1 250.1 165" stroke={GREEN} sw={1.4} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={250} y={143} size={11} fill={AMBER_DARK} script>{t("π lobes (up/down)", "π lobes (up/down)")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.1)}>
        <T x={365} y={155} size={11} fill={GREEN} script anchor="start">{t("2nd π (⊥)", "2nd π (⊥)")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={320} size={15} fill={INK}>
          {t("the two perpendicular p pairs overlap sideways → two π bonds", "do perpendicular p pairs sideways overlap karte → do π bonds")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={353} size={15} fill={INK}>
          {t("the molecule is strictly linear (H–C–C–H on one line)", "molecule bilkul linear hai (H–C–C–H ek line mein)")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 380 L 60 416" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={402} size={16} fill={RED} script anchor="start">
          {t("two π clouds = an electron-rich cylinder, room to add twice", "do π clouds = electron-rich cylinder, do baar add karne ki jagah")}
        </T>
      </Fade>
    </Scene>
  );
}
