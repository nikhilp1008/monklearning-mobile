/**
 * C11 Ch08 · Section 25 — "Counting tools — Degree of Unsaturation & 2ⁿ"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.25, 17.75, 30.63, 46.34, 60.25, 69.21, 83.97]):
 *  0 title (always-on, seq1) · 1 DoU def (each ring/π = 1) · 2 DoU formula (boxed)
 *  · 3 variable key (n,m,q; O doesn't count) · 4 payoff (= rings + π, prunes
 *  skeletons) · 5 2ⁿ formula (boxed, right side) · 6 red note (2ⁿ upper bound
 *  only) · 7 red closer (configuration vs conformation)
 *
 * LEFT column x60-500 (DoU tool). RIGHT column x580-1020 (2ⁿ tool).
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t("Counting tools — Degree of Unsaturation & 2ⁿ", "Counting tools — Degree of Unsaturation & 2ⁿ")}
        </T>
      </Fade>

      {/* beat 1 — DoU definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={280} y={100} size={14} fill={AMBER_DARK} weight={700}>
          {t("Tool 1: Degree of Unsaturation", "Tool 1: Degree of Unsaturation")}
        </T>
      </Fade>

      {/* beat 2 — the DoU formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={100} y={130} width={360} height={45} rx={9} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={280} y={159} size={19} fill={INK} weight={800}>
          DoU = (2n+2+q−m) / 2
        </T>
      </Fade>

      {/* beat 3 — what the letters mean */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={280} y={205} size={13} fill={INK}>
          {t("n = carbons, m = hydrogens, q = nitrogens", "n = carbons, m = hydrogens, q = nitrogens")}
        </T>
      </Fade>

      {/* beat 4 — the payoff */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={280} y={235} size={13} fill={INK}>
          {t("= rings + π bonds — prunes impossible skeletons", "= rings + π bonds — impossible skeletons hataata")}
        </T>
      </Fade>

      {/* beat 5 — the 2^n formula, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={800} y={140} size={14} fill={AMBER_DARK} weight={700}>
          {t("Tool 2: stereoisomer count", "Tool 2: stereoisomer count")}
        </T>
        <Rect x={620} y={150} width={360} height={45} rx={9} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={800} y={179} size={19} fill={INK} weight={800}>
          {t("max stereoisomers = 2ⁿ", "max stereoisomers = 2ⁿ")}
        </T>
        <T x={800} y={215} size={12} fill={MUTED}>
          {t("(n = stereocentres)", "(n = stereocentres)")}
        </T>
      </Fade>

      {/* beat 6 — red note: only an upper bound */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 260 L 60 290" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={278} size={15} fill={RED} script anchor="start">
          {t(
            "2ⁿ is only an UPPER bound — internal symmetry (a meso form) reduces the real count",
            "2ⁿ sirf UPPER bound hai — internal symmetry (meso form) real count ghata deta"
          )}
        </T>
      </Fade>

      {/* beat 7 — configuration vs conformation */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 310 L 60 340" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={328} size={15} fill={RED} script anchor="start">
          {t(
            "configurations (cis/trans, d/l) need bond-breaking; conformations rotate freely",
            "configurations (cis/trans, d/l) ke liye bond todna padta; conformations free rotate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
