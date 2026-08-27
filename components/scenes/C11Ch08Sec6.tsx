/**
 * C11 Ch08 · Section 6 — "Worked example — draw 2-methylbutane (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.68, 14.76, 26.28, 36.52, 49.24, 63.91, 74.84]):
 *  0 title (always-on, seq1) · 1 task statement · 2 skeleton (4-C chain + methyl
 *  on C2) · 3 condensed formula · 4 bond-line zig-zag + branch (the diagram) ·
 *  5 red note (no H/C labels) · 6 board-habit tip chip · 7 final check stamp
 *
 * Worked-example arc: given → set up → work it → answer → sanity check.
 * Layout plan:
 *  b1 | task (15, ink)                 | T mid | x330..750 y88..104 (bl 100)
 *  b2 | skeleton (14, muted)           | T mid | x372..708 y124..139 (bl 135)
 *  b3 | condensed (24, w800)           | T mid | x438..642 y166..192 (bl 185)
 *  b4 | zig-zag P1..P4 + branch        | Draw  | x300..540 y240..320
 *  b5 | margin bar + red note          | Draw+T| x60 y360..390 · x76 y380
 *  b6 | tip chip (green border)        | rect+T| x300..780 y415..455
 *  b7 | check box (green border)       | rect+T| x300..780 y480..540
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={25} fill={RED} script>
          {t("Worked example — draw 2-methylbutane (CBSE)", "Worked example — 2-methylbutane banao (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK}>
          {t(
            "task: write condensed + bond-line formula for 2-methylbutane",
            "task: 2-methylbutane ka condensed + bond-line formula likho"
          )}
        </T>
      </Fade>

      {/* beat 2 — skeleton */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={14} fill={MUTED}>
          {t("skeleton: 4-C main chain + methyl branch on C2", "skeleton: 4-C main chain + methyl branch C2 par")}
        </T>
      </Fade>

      {/* beat 3 — condensed formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={185} size={24} fill={INK} weight={800}>
          CH₃CH(CH₃)CH₂CH₃
        </T>
      </Fade>

      {/* beat 4 — the bond-line diagram */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 300 320 L 380 285 L 460 320 L 540 285"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.3)}
        d="M 380 285 L 380 240"
        stroke={INK}
        sw={2.6}
        dur={0.4}
      />

      {/* beat 5 — no H's, no C's written */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 360 L 60 390" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={380} size={15} fill={RED} script anchor="start">
          {t(
            "no H's, no C labels — every vertex/end silently carries a carbon",
            "koi H nahi, koi C label nahi — har vertex/end carbon chupa ke rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — board habit */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={300} y={415} width={480} height={40} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={440} size={15} fill={GREEN}>
          {t(
            "TIP: state the longest chain first, then attach branches",
            "TIP: pehle longest chain batao, phir branches lagao"
          )}
        </T>
      </Fade>

      {/* beat 7 — check */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Rect x={300} y={480} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={505} size={17} fill={GREEN} weight={700}>
          {t("4 chain C + 1 branch C = 5 carbons", "4 chain C + 1 branch C = 5 carbons")}
        </T>
        <T x={540} y={528} size={17} fill={GREEN} weight={700}>
          {t("= butane (4) + 2-methyl ✓", "= butane (4) + 2-methyl ✓")}
        </T>
      </Fade>
    </Scene>
  );
}
