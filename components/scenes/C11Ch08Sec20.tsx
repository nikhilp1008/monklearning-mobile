/**
 * C11 Ch08 · Section 20 — "Pitfalls & pro-tips — Hybridization & Naming"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.11, 23.55, 35.67, 57.26, 69.12, 80.9, 96.6]):
 *  0 title (always-on, seq1) · 1 Pitfall 1 (wrong suffix group) · 2 Pitfall 2
 *  (missed longest chain) · 3 Pitfall 3 RED (locant tie-break, first point of
 *  difference) · 4 Pitfall 4 (carbonyl is sp2) · 5 Pitfall 5 (charged centres) ·
 *  6 pro-tip: hybridization shortcut · 7 pro-tip: naming shortcut
 *
 * Row1: 3 cards x=60/390/720 (w300, y95-170). Row2: 2 cards x=60/560 (w460,
 * y195-270). Pro-tips: 2 full-width boxes y295-330 / 350-385.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    x,
    y,
    w,
    stroke,
    title,
    body,
    body2,
  }: {
    x: number;
    y: number;
    w: number;
    stroke: string;
    title: string;
    body: string;
    body2?: string;
  }) => (
    <>
      <Rect x={x} y={y} width={w} height={75} rx={9} fill={CREAM} stroke={stroke} strokeWidth={stroke === RED ? 2.4 : 1.6} />
      <T x={x + w / 2} y={y + 22} size={13} fill={stroke === RED ? RED : INK} weight={700}>
        {title}
      </T>
      <T x={x + w / 2} y={y + (body2 ? 42 : 46)} size={12} fill={MUTED}>
        {body}
      </T>
      {body2 && (
        <T x={x + w / 2} y={y + 60} size={12} fill={MUTED}>
          {body2}
        </T>
      )}
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Pitfalls & pro-tips — Hybridization & Naming", "Pitfalls & pro-tips — Hybridization & Naming")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={95}
          w={300}
          stroke={AMBER}
          title={t("✗ Pitfall 1: wrong suffix group", "✗ Pitfall 1: galat suffix group")}
          body={t("run seniority first; demote the rest", "pehle seniority chalao; baaki demote karo")}
        />
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={390}
          y={95}
          w={300}
          stroke={AMBER}
          title={t("✗ Pitfall 2: missed longest chain", "✗ Pitfall 2: longest chain chhoot gayi")}
          body={t("it may bend through a 'branch'", "ye ek 'branch' se hoke bhi mud sakti")}
        />
      </Fade>

      {/* beat 3 — pitfall 3, red */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={720}
          y={95}
          w={300}
          stroke={RED}
          title={t("✗ Pitfall 3: locant tie-break", "✗ Pitfall 3: locant tie-break")}
          body={t("first point of difference, not sum:", "first point of difference, sum nahi:")}
          body2="{2,7,8} beats {3,4,8}"
        />
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={60}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 4: carbonyl is sp²", "✗ Pitfall 4: carbonyl sp² hai")}
          body={t("the most-forgotten sp² centre", "sabse zyada bhoola jaane wala sp² centre")}
        />
      </Fade>

      {/* beat 5 — pitfall 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Card
          x={560}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 5: charged centres", "✗ Pitfall 5: charged centres")}
          body={t("add lone pairs — don't blindly use the neutral shortcut", "lone pairs jodo — neutral shortcut blindly mat lagao")}
        />
      </Fade>

      {/* beat 6 — pro-tip: hybridization */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={150} y={295} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={319} size={14} fill={GREEN} weight={700}>
          {t("⚡ hybridization: never draw orbitals — σ-count (+lp) = 4,3,2 → sp³,sp²,sp", "⚡ hybridization: orbitals mat banao — σ-count (+lp) = 4,3,2 → sp³,sp²,sp")}
        </T>
      </Fade>

      {/* beat 7 — pro-tip: naming */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Rect x={150} y={350} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={374} size={14} fill={GREEN} weight={700}>
          {t("⚡ naming: lock suffix before chain — fixes parent + C1, stops ~80% locant errors", "⚡ naming: chain se pehle suffix lock karo — parent + C1 fix, 80% locant errors rukein")}
        </T>
      </Fade>
    </Scene>
  );
}
