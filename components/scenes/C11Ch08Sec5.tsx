/**
 * C11 Ch08 · Section 5 — "Functional groups & the homologous series"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 5.63, 17.07, 37.89, 48.55, 60.16, 66.22, 71.85, 79.62]):
 *  0 title (always-on, seq1) · 1 functional-group definition · 2 seven group cards
 *  (-OH/-CHO/C=O/-COOH/-NH2/-C≡N/-X) · 3 "homologous series" sub-heading · 4 same
 *  group + general formula, differ by CH2 · 5 alkanes card CnH2n+2 · 6 alkenes card
 *  CnH2n · 7 alkynes card CnH2n-2 · 8 red note (boiling pt rises, chemistry similar)
 *
 * Layout plan:
 *  b1 | definition (15, ink)           | T mid | x338..742 y88..105 (bl 100)
 *  b2 | 7 group cards ×(110×56)        | rect  | centers x100/240/380/520/660/800/940 y130..186
 *  b3 | sub-heading (20, amber, w700)  | T mid | x540 y220
 *  b4 | text (15, ink)                 | T mid | x540 y248
 *  b5-7 | 3 series cards ×(260×90)     | rect  | centers x260/540/820 y270..360
 *  b8 | margin bar + red note          | Draw+T| x60 y385..413 · x76 y405
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, tripleBondD } from "./chem-kit";

const GROUPS = [
  { sym: "-OH", cls: "alcohol" },
  { sym: "-CHO", cls: "aldehyde" },
  { sym: "C=O", cls: "ketone" },
  { sym: "-COOH", cls: "acid" },
  { sym: "-NH₂", cls: "amine" },
  { sym: "-C≡N", cls: "nitrile" },
  { sym: "-X", cls: "haloalkane" },
];

export default function C11Ch08Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cardX = [100, 240, 380, 520, 660, 800, 940];

  const SeriesCard = ({
    cx,
    header,
    formula,
    icon,
  }: {
    cx: number;
    header: string;
    formula: string;
    icon: React.ReactNode;
  }) => (
    <>
      <Rect x={cx - 130} y={270} width={260} height={90} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.6} />
      <T x={cx} y={292} size={13} fill={AMBER_DARK} weight={700}>
        {header}
      </T>
      <G transform={`translate(${cx - 20},308)`}>{icon}</G>
      <T x={cx} y={350} size={19} fill={INK} weight={800}>
        {formula}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={27} fill={RED} script>
          {t("Functional group = the reactive heart", "Functional group = reactive heart")}
        </T>
      </Fade>

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK}>
          {t(
            "the atom/group that defines characteristic chemistry",
            "atom/group jo characteristic chemistry decide karta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — seven common functional groups */}
      {GROUPS.map((g, i) => (
        <Fade key={g.sym} on={beat >= 2} delay={dl(2, 0.3 + i * 0.5)}>
          <Rect x={cardX[i] - 55} y={130} width={110} height={56} rx={7} fill={CREAM} stroke={AMBER} strokeWidth={1.4} />
          <T x={cardX[i]} y={158} size={16} fill={INK} weight={700}>
            {g.sym}
          </T>
          <T x={cardX[i]} y={177} size={11} fill={MUTED}>
            {g.cls}
          </T>
        </Fade>
      ))}

      {/* beat 3 — homologous series heading */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={220} size={20} fill={AMBER_DARK} weight={700}>
          {t("Homologous series = a chemical family", "Homologous series = ek chemical family")}
        </T>
      </Fade>

      {/* beat 4 — same group, general formula, +CH2 each step */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={248} size={15} fill={INK}>
          {t(
            "one group + one formula — each member differs by −CH₂−",
            "ek group + ek formula — har member −CH₂− se alag"
          )}
        </T>
      </Fade>

      {/* beat 5 — alkanes */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <SeriesCard
          cx={260}
          header={t("ALKANES", "ALKANES")}
          formula="CnH2n+2"
          icon={<Draw on={beat >= 5} delay={dl(5, 0.5)} d={bondD(0, 0, 40, 0)} stroke={INK} sw={2.2} dur={0.4} />}
        />
      </Fade>

      {/* beat 6 — alkenes */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <SeriesCard
          cx={540}
          header={t("ALKENES", "ALKENES")}
          formula="CnH2n"
          icon={<Draw on={beat >= 6} delay={dl(6, 0.5)} d={doubleBondD(0, 0, 40, 0, 3)} stroke={INK} sw={2.2} dur={0.4} />}
        />
      </Fade>

      {/* beat 7 — alkynes */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <SeriesCard
          cx={820}
          header={t("ALKYNES", "ALKYNES")}
          formula="CnH2n-2"
          icon={<Draw on={beat >= 7} delay={dl(7, 0.5)} d={tripleBondD(0, 0, 40, 0, 5)} stroke={INK} sw={2.2} dur={0.4} />}
        />
      </Fade>

      {/* beat 8 — the payoff: prediction */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 60 385 L 60 413" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={76} y={405} size={15} fill={RED} script anchor="start">
          {t(
            "boiling point rises steadily; chemistry stays similar (same functional group)",
            "boiling point steadily badhta hai; chemistry same rehti hai (same group)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
