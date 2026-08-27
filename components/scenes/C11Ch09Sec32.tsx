/**
 * C11 Ch09 · Section 32 — "HX addition and Markovnikov's rule"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.15, 17.83, 23.47, 32.0, 41.56, 55.3]):
 *  0 heading · 1 reagent adds through MORE stable carbocation · 2 formula
 *  CH3CH=CH2+HBr -> CH3CHBrCH3 (2-bromopropane, major) · 3 step1: π grabs
 *  H+, curved arrow, opens to carbocation · 4 routes through more stable
 *  cation · 5 step2: Br- attacks cation, curved arrow, 2°>1° · 6 RED:
 *  Markovnikov restated
 *
 * Layout plan — propene skeleton C1(150,220) C2(220,190)=C3(290,220):
 *  b3 | curved arrow π→H+, "+" on C2   | Draw+T | x220..350 y160..230
 *  b5 | curved arrow Br⁻→C2, Br label  | Draw+T | x220..380 y150..230
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, curvedArrowD, LonePair } from "./chem-kit";

export default function C11Ch09Sec32({ currentTime, reveals, language }: SceneProps) {
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
          {t("HX addition and Markovnikov's rule", "HX addition aur Markovnikov ka rule")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("adding H–X: which carbon gets what?", "H–X add hote: kaunse carbon ko kya milta?")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={INK}>
          {t("the reagent adds through the MORE stable carbocation", "reagent us route se add hota jahan carbocation ZYADA stable ho")}
        </T>
      </Fade>

      {/* beat 2 — the propene skeleton + product formula */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={bondD(C1.x, C1.y, C2.x, C2.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={doubleBondD(C2.x, C2.y, C3.x, C3.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={260} size={16} fill={INK} weight={700}>
          CH3–CH=CH2 + HBr → CH3–CHBr–CH3 ({t("2-bromopropane, major", "2-bromopropane, major")})
        </T>
      </Fade>

      {/* beat 3 — step 1: pi electrons grab the proton */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={365} y={210} size={15} fill={RED} weight={700} anchor="start">H⁺</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={curvedArrowD(255, 205, 350, 208, -24, false)}
        stroke={RED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={220} y={162} size={17} fill={RED} weight={800}>+</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={430} y={225} size={13} fill={MUTED} script anchor="start">
          {t("H lands on C3 — carbocation forms on C2", "H C3 pe lagta — carbocation C2 pe banta")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={300} size={15} fill={INK}>
          {t("the reaction routes through whichever cation is more stable", "reaction usi cation se hoti jo zyada stable hai")}
        </T>
      </Fade>

      {/* beat 5 — step 2: bromide attacks the cation */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={380} y={150} size={15} fill={RED} weight={700} anchor="start">Br⁻</T>
      </Fade>
      <LonePair on={beat >= 5} delay={dl(5, 0.6)} cx={397} cy={150} angle={0} r={2.2} fill={RED} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={curvedArrowD(378, 155, 228, 178, 20, false)}
        stroke={RED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={335} size={15} fill={GREEN} weight={700}>
          {t("2° beats 1° — 2-bromopropane wins", "2° 1° se jeetta — 2-bromopropane wins")}
        </T>
      </Fade>

      {/* beat 6 — Markovnikov restated */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 365 L 60 401" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={387} size={16} fill={RED} script anchor="start">
          {t(
            "Markovnikov, restated: via the most stable accessible carbocation",
            "Markovnikov, dobara: sabse stable accessible carbocation ke through"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
