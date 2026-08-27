/**
 * C11 Ch09 · Section 33 — "The peroxide (Kharasch) effect"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.07, 16.98, 25.69, 34.65, 54.27, 60.84]):
 *  0 heading: peroxide flips orientation, only HBr · 1 with peroxide, HBr
 *  anti-Markovnikov → 1-bromopropane · 2 runs by free-radical chain ·
 *  3 Br• adds to give more stable 2° radical (fishhook arrow) · 4 RED:
 *  HBr-only (HCl too strong, HI too weak) · 5 memory hook "Br Breaks the
 *  Rule" · 6 HCl/HI always follow plain Markovnikov
 *
 * Layout plan — propene skeleton C1(150,220) C2(220,190)=C3(290,220):
 *  b3 | fishhook Br•→C3, "•" radical on C2 | Draw+T | x220..360 y160..230
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, curvedArrowD } from "./chem-kit";

export default function C11Ch09Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const C1 = { x: 150, y: 220 };
  const C2 = { x: 220, y: 190 };
  const C3 = { x: 290, y: 220 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("the peroxide (Kharasch) effect", "peroxide (Kharasch) effect")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("peroxide flips the orientation — but only for HBr", "peroxide orientation flip karta — sirf HBr ke liye")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={INK}>
          {t("with peroxide, HBr adds anti-Markovnikov → 1-bromopropane", "peroxide ke saath, HBr anti-Markovnikov add hota → 1-bromopropane")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={160} size={15} fill={INK}>
          {t("it runs by a free-radical chain (initiation, propagation, termination)", "yeh free-radical chain se chalta (initiation, propagation, termination)")}
        </T>
      </Fade>

      {/* beat 3 — Br radical adds to the terminal carbon */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={bondD(C1.x, C1.y, C2.x, C2.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={doubleBondD(C2.x, C2.y, C3.x, C3.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={360} y={228} size={15} fill={RED} weight={700} anchor="start">Br•</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={curvedArrowD(340, 222, 300, 218, -10, true)}
        stroke={RED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={220} y={162} size={17} fill={RED} weight={800}>•</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={540} y={270} size={15} fill={INK}>
          {t("Br• adds to the end carbon, giving the more stable 2° radical", "Br• end carbon pe lagta, zyada stable 2° radical banta")}
        </T>
      </Fade>

      {/* beat 4 — HBr only */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 60 300 L 60 336" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={76} y={322} size={15} fill={RED} script anchor="start">
          {t("HBr-only: H–Cl (~431) too strong; H–I (~297) too weak, I• recombines", "HBr-hi: H–Cl (~431) bahut strong; H–I (~297) bahut weak, I• recombine ho jaata")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={365} size={16} fill={INK} weight={700} script>
          {t("memory hook: “Br Breaks the Rule”", "memory hook: “Br Breaks the Rule”")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={398} size={15} fill={MUTED} script>
          {t("HCl and HI always follow plain Markovnikov, peroxide or not", "HCl aur HI hamesha plain Markovnikov follow karte, peroxide ho ya na ho")}
        </T>
      </Fade>
    </Scene>
  );
}
