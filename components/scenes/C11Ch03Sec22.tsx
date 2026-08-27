/**
 * C11 Chemistry Ch03 · Section 22 — "Electronegativity: one idea, three scales"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 * NOTE: "Zeff" contains "Z" — kept OUT of script text (Kalam renders "Z" as
 * "2"); beat 7's closer uses non-script per the Sec 8 gotcha.
 *
 * Beats (en [0, 7.25, 26.37, 38.49, 56.66, 66.13, 80.98, 100.69]):
 *  0 title + underline
 *  1 definition: attracts shared e⁻ pair, dimensionless, 3 scales
 *  2 Pauling card: F = 4.0 (max), from bond energies
 *  3 Mulliken card: χM = (IE+EA)/2, χP ≈ χM/2.8
 *  4-5 Allred-Rochow card: χAR = 0.359(Zeff/r²) + 0.744
 *  6 red-margin: all scales agree on the trend; F highest, Cs lowest
 *  7 closing: same engine as IE — small size + high Zeff ⇒ strong pull
 *
 * Layout plan:
 *  b1 | definition (13, ink)        | T mid | x?..?    y89..104 (bl 100)
 *  b2 | Pauling card                | Draw  | x86..346  y110..230
 *  b3 | Mulliken card               | Draw  | x410..670 y110..230
 *  b4/5 | Allred-Rochow card        | Draw  | x734..994 y110..230
 *  b6 | red margin bar + line       | Draw  | x70 y250..286 (bl 272)
 *  b7 | closing (14,w700,green)     | T mid | x?..?    y301..317 (bl 312)
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
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function ScaleCard({
  on,
  delay,
  x,
  header,
  line1,
  line2,
}: {
  on: boolean;
  delay: number;
  x: number;
  header: string;
  line1: string;
  line2: string;
}) {
  const cx = x + 130;
  return (
    <Fade on={on} delay={delay}>
      <Rect x={x} y={110} width={260} height={120} rx={6} fill="none" stroke={MUTED} strokeWidth={1.6} />
      <T x={cx} y={140} size={15} weight={800} fill={INK}>{header}</T>
      <T x={cx} y={172} size={13} weight={700} fill={INK}>{line1}</T>
      <T x={cx} y={198} size={12} fill={MUTED}>{line2}</T>
    </Fade>
  );
}

export default function C11Ch03Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("electronegativity: one idea, three scales", "electronegativity: ek idea, teen scales")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("tendency to attract the shared e⁻ pair — dimensionless (3 scales)", "shared e⁻ pair khinchne ki tendency — dimensionless (3 scales)")}
        </T>
      </Fade>

      {/* beat 2 — Pauling scale */}
      <ScaleCard
        on={beat >= 2}
        delay={dl(2, 0.2)}
        x={86}
        header="Pauling"
        line1="F = 4.0 (maximum)"
        line2={t("from bond energies", "bond energies se")}
      />

      {/* beat 3 — Mulliken scale */}
      <ScaleCard
        on={beat >= 3}
        delay={dl(3, 0.2)}
        x={410}
        header="Mulliken"
        line1="χM = (IE+EA)/2"
        line2="χP ≈ χM / 2.8"
      />

      {/* beats 4-5 — Allred-Rochow scale */}
      <ScaleCard
        on={beat >= 4}
        delay={dl(4, 0.2)}
        x={734}
        header="Allred-Rochow"
        line1="χAR = 0.359(Zeff/r²)+0.744"
        line2={t("r = covalent radius", "r = covalent radius")}
      />

      {/* beat 6 — red-margin: all scales agree */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 70 250 L 70 286" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={94} y={272} size={15} weight={700} fill={INK} anchor="start">
          {t("all scales agree: EN rises across, falls down group — F highest, Cs lowest", "sab scales agree: EN across badhti, group mein neeche girti — F highest, Cs lowest")}
        </T>
      </Fade>

      {/* beat 7 — closing: same engine as IE */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={312} size={14} weight={700} fill={GREEN}>
          {t("same engine as IE: small size + high Zeff ⇒ strong pull", "same engine jo IE ka: chhota size + high Zeff ⇒ strong pull")}
        </T>
      </Fade>
    </Scene>
  );
}
