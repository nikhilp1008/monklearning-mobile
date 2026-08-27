/**
 * C11 Ch08 · Section 22 — "Structural isomerism — six types"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 12.8, 24.06, 36.52, 48.98, 70.31, 88.15, 107.78]):
 *  0 title (always-on, seq1) · 1 chain · 2 position · 3 functional · 4 metamerism ·
 *  5 ring-chain · 6 tautomerism · 7 red closer (memorise the 3 pairs)
 *
 * 3x2 card grid, x=60/390/720 (w300), row1 y95-195, row2 y210-310.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    x,
    y,
    title,
    def,
    example,
  }: {
    x: number;
    y: number;
    title: string;
    def: string;
    example: string;
  }) => (
    <>
      <Rect x={x} y={y} width={300} height={100} rx={9} fill={CREAM} stroke={AMBER} strokeWidth={1.6} />
      <T x={x + 150} y={y + 24} size={15} fill={INK} weight={700}>
        {title}
      </T>
      <T x={x + 150} y={y + 50} size={12} fill={MUTED}>
        {def}
      </T>
      <T x={x + 150} y={y + 75} size={11} fill={INK}>
        {example}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Structural isomerism — six types", "Structural isomerism — chhe types")}
        </T>
      </Fade>

      {/* beat 1 — chain */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={95}
          title={t("1. Chain", "1. Chain")}
          def={t("carbon-skeleton branches", "carbon-skeleton branches")}
          example="n-butane vs 2-methylpropane (C4H10)"
        />
      </Fade>

      {/* beat 2 — position */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={390}
          y={95}
          title={t("2. Position", "2. Position")}
          def={t("group/bond moves along chain", "group/bond chain par khisakta")}
          example="but-1-ene vs but-2-ene (C4H8)"
        />
      </Fade>

      {/* beat 3 — functional */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={720}
          y={95}
          title={t("3. Functional", "3. Functional")}
          def={t("the functional group itself changes", "functional group hi badal jaata")}
          example="alcohol vs ether (C2H6O)"
        />
      </Fade>

      {/* beat 4 — metamerism */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={60}
          y={210}
          title={t("4. Metamerism", "4. Metamerism")}
          def={t("alkyl split around -O-/-S-/-NH-/-CO-", "alkyl split -O-/-S-/-NH-/-CO- ke aas-paas")}
          example="methoxypropane vs ethoxyethane (C4H10O)"
        />
      </Fade>

      {/* beat 5 — ring-chain */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Card
          x={390}
          y={210}
          title={t("5. Ring-chain", "5. Ring-chain")}
          def={t("open chain vs closed ring", "open chain vs closed ring")}
          example="but-1-ene vs cyclobutane (C4H8)"
        />
      </Fade>

      {/* beat 6 — tautomerism */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Card
          x={720}
          y={210}
          title={t("6. Tautomerism", "6. Tautomerism")}
          def={t("dynamic 1,3-H shift — equilibrium!", "dynamic 1,3-H shift — equilibrium!")}
          example="keto ⇌ enol"
        />
      </Fade>

      {/* beat 7 — the pairs to memorise */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 335 L 60 365" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={353} size={15} fill={RED} script anchor="start">
          {t(
            "memorise: alcohols ↔ ethers · aldehydes ↔ ketones · acids ↔ esters",
            "yaad rakho: alcohols ↔ ethers · aldehydes ↔ ketones · acids ↔ esters"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
