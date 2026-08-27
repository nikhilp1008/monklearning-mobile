/**
 * C11 Ch09 · Section 27 — "Naming alkenes and dienes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.97, 13.99, 21.5, 31.23, 46.59, 58.62]):
 *  0 heading: IUPAC in 3 moves · 1 (i) longest chain with C=C · 2 (ii) number
 *  from end nearer C=C · 3 (iii) -ane→-ene, cite position · 4 examples:
 *  but-1-ene / but-2-ene · 5 2+ C=C ⇒ -diene/-triene: buta-1,3-diene ·
 *  6 note: isoprene = monomer of natural rubber
 *
 * Layout plan — 3 numbered steps y130/165/200, examples y245, diene y285,
 *  note bar y320..356:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("naming alkenes and dienes", "alkenes aur dienes ke naam")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("IUPAC naming in three moves", "IUPAC naming teen moves mein")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("(i) pick the longest chain that contains the double bond", "(i) sabse lambi chain chuno jisme double bond ho")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={15} fill={INK}>
          {t("(ii) number from the end nearer C=C — lowest locant", "(ii) C=C ke paas wale end se number karo — lowest locant")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={201} size={15} fill={INK}>
          {t("(iii) replace -ane with -ene, cite the position", "(iii) -ane ko -ene se badlo, position batao")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={245} size={16} fill={INK} weight={700}>
          CH3CH2CH=CH2 = but-1-ene  ·  CH3CH=CHCH3 = but-2-ene
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={280} size={15} fill={AMBER_DARK} weight={700}>
          {t("2+ C=C ⇒ -diene, -triene (parent kept): buta-1,3-diene", "2+ C=C ⇒ -diene, -triene (parent wahi): buta-1,3-diene")}
        </T>
      </Fade>

      {/* beat 6 — isoprene */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 318 L 60 354" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={340} size={16} fill={RED} script anchor="start">
          {t(
            "isoprene (2-methylbuta-1,3-diene) — natural rubber's monomer",
            "isoprene (2-methylbuta-1,3-diene) — natural rubber ka monomer"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
