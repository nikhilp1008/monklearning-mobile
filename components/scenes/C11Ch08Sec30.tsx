/**
 * C11 Ch08 · Section 30 — "Pitfalls & pro-tips — Isomerism"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.17, 23.72, 40.02, 58.54, 68.95, 82.35, 94.29]):
 *  0 title (always-on, seq1) · 1 Pitfall 1 (classification order) · 2 Pitfall 2
 *  (double bond ⇒ geometrical) · 3 Pitfall 3 RED (racemic ≠ meso) · 4 Pitfall 4
 *  (2ⁿ over-count) · 5 pro-tip: optical shortcut · 6 pro-tip: E/Z priority ·
 *  7 red closer (relationships, not labels)
 *
 * 2x2 card grid x=60/560 (w460), row1 y95-175, row2 y195-275; 2 pro-tip
 * banners y295-330 / 345-380; red closer y405-435.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    x,
    y,
    stroke,
    title,
    body,
  }: {
    x: number;
    y: number;
    stroke: string;
    title: string;
    body: string;
  }) => (
    <>
      <Rect x={x} y={y} width={460} height={80} rx={9} fill={CREAM} stroke={stroke} strokeWidth={stroke === RED ? 2.4 : 1.6} />
      <T x={x + 230} y={y + 26} size={14} fill={stroke === RED ? RED : INK} weight={700}>
        {title}
      </T>
      <T x={x + 230} y={y + 52} size={12} fill={MUTED}>
        {body}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Pitfalls & pro-tips — Isomerism", "Pitfalls & pro-tips — Isomerism")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={95}
          stroke={AMBER}
          title={t("✗ Pitfall 1: classification order", "✗ Pitfall 1: classification order")}
          body={t("run formula → connectivity → space, in order", "formula → connectivity → space, isi order mein")}
        />
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={560}
          y={95}
          stroke={AMBER}
          title={t("✗ Pitfall 2: 'double bond ⇒ geometrical'", "✗ Pitfall 2: 'double bond ⇒ geometrical'")}
          body={t("terminal & gem-disubstituted carbons fail", "terminal & gem-disubstituted carbons fail")}
        />
      </Fade>

      {/* beat 3 — pitfall 3, red */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={60}
          y={195}
          stroke={RED}
          title={t("✗ Pitfall 3: racemic ≠ meso", "✗ Pitfall 3: racemic ≠ meso")}
          body={t("racemic = 2 compounds (external); meso = 1 (internal)", "racemic = 2 compounds (external); meso = 1 (internal)")}
        />
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={560}
          y={195}
          stroke={AMBER}
          title={t("✗ Pitfall 4: 2ⁿ over-count", "✗ Pitfall 4: 2ⁿ over-count")}
          body={t("check equivalent stereocentres + meso forms first", "pehle equivalent stereocentres + meso forms check karo")}
        />
      </Fade>

      {/* beat 5 — pro-tip: optical shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={150} y={295} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={319} size={14} fill={GREEN} weight={700}>
          {t("⚡ optical: don't draw mirrors — find 1 C with 4 diff groups, then a 2-sec symmetry check", "⚡ optical: mirror mat banao — 1 C dhoondo 4 alag groups wala, phir 2-sec symmetry check")}
        </T>
      </Fade>

      {/* beat 6 — pro-tip: E/Z priority */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={150} y={345} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={369} size={14} fill={GREEN} weight={700}>
          {t("⚡ E/Z: priority = atomic number, not size — a single Br beats a whole alkyl chain", "⚡ E/Z: priority = atomic number, size nahi — ek Br pura alkyl chain se jeet jaata")}
        </T>
      </Fade>

      {/* beat 7 — the deepest habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 405 L 60 435" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={423} size={15} fill={RED} script anchor="start">
          {t(
            "master relationships, not labels — 'connect first, then arrange' unlocks the whole family",
            "relationships master karo, labels nahi — 'pehle connect, phir arrange' sab kholta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
