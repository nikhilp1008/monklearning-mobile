/**
 * C11 Ch09 · Section 59 — "The stubborn stability of benzene"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 16.55, 25.77, 35.93, 47.96, 64.17, 73.81]):
 *  0 heading · 1 benzene C6H6, hexagon ring drawn, each C with 1H ·
 *  2 hydrogen-poor, alkene instincts rebel · 3 should decolourise Br2/
 *  Baeyer's but doesn't (crossed arrow) · 4 refuses addition, prefers
 *  substitution · 5 RED: something protecting the ring · 6 theme returns:
 *  aromaticity resists addition
 *
 * Layout plan — ring c(200,300) r=70:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, GREEN, INK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("the stubborn stability of benzene", "benzene ki stubborn stability")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={670} y={140} size={15} fill={INK} weight={700} anchor="start">
          {t("aromatic: a name for a deeper stability", "aromatic: ek gehri stability ka naam")}
        </T>
      </Fade>

      {/* beat 1 — benzene ring, C6H6 */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(200, 280, 70, 6)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Chip x={155} y={365} w={90} h={34} fill={CREAM} stroke={INK} textFill={INK} size={17} script={false}>
          C6H6
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={670} y={180} size={14} fill={INK} anchor="start">
          {t("a flat ring, each C with one H", "flat ring, har C pe ek H")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={600} y={218} size={14} fill={INK} anchor="start">
          {t("hydrogen-poor — alkene instincts should rebel", "hydrogen-poor — alkene instinct bagawat kare")}
        </T>
      </Fade>

      {/* beat 3 — refuses Br2/Baeyer's */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={335} y={195} size={14} fill={INK} weight={700} anchor="start">+ Br2</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d="M 330 210 L 400 210 M 388 204 L 400 210 L 388 216" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={crossD(330, 197, 70, 20)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={600} y={256} size={13} fill={INK} anchor="start">
          {t("should decolourise Br2 water & Baeyer's — it does not", "Br2 water/Baeyer's decolourise hona chahiye — hota nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={670} y={294} size={14} fill={GREEN} weight={700} anchor="start">
          {t("refuses addition, prefers substitution", "addition mana karta, substitution pasand karta")}
        </T>
      </Fade>

      {/* beat 5 — the mystery */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 420 L 60 456" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={442} size={16} fill={RED} script anchor="start">
          {t("something is protecting that ring — this sub-topic explains what", "kuch us ring ko protect kar raha — yeh sub-topic samjhayega kya")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={490} size={15} fill={INK} script>
          {t("the theme returns: aromaticity resists addition", "theme wapas: aromaticity addition resist karti hai")}
        </T>
      </Fade>
    </Scene>
  );
}
