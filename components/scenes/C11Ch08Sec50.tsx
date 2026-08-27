/**
 * C11 Ch08 · Section 50 — "Pitfalls & pro-tips — Purification & Analysis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.96, 21.76, 38.66, 52.99, 65.45, 78.17, 97.02]):
 *  0 title (always-on, seq1) · 1 Pitfall 1 (method mismatch) · 2 Pitfall 2 RED
 *  (color confusion N vs N&S) · 3 Pitfall 3 (method-element mismatch) · 4 Pitfall
 *  4 (aqueous-tension slip) · 5 Pitfall 5 (oxygen directly) · 6 pro-tip (3
 *  numbers) · 7 red closer (finite concepts, high return)
 *
 * Row1: 3 cards x=60/390/720 (w310), y95-175. Row2: 2 cards x=60/560 (w460),
 * y195-275. Pro-tip banner y295-330. Red closer y350-380.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec50({ currentTime, reveals, language }: SceneProps) {
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
  }: {
    x: number;
    y: number;
    w: number;
    stroke: string;
    title: string;
    body: string;
  }) => (
    <>
      <Rect x={x} y={y} width={w} height={80} rx={9} fill={CREAM} stroke={stroke} strokeWidth={stroke === RED ? 2.4 : 1.6} />
      <T x={x + w / 2} y={y + 26} size={13.5} fill={stroke === RED ? RED : INK} weight={700}>
        {title}
      </T>
      <T x={x + w / 2} y={y + 52} size={11} fill={MUTED}>
        {body}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Pitfalls & pro-tips — Purification & Analysis", "Pitfalls & pro-tips — Purification & Analysis")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={95}
          w={310}
          stroke={AMBER}
          title={t("✗ Pitfall 1: method mismatch", "✗ Pitfall 1: method mismatch")}
          body={t("bp→distillation, solubility→crystallisation, sublimes→sublimation", "bp→distillation, solubility→crystallisation, sublimes→sublimation")}
        />
      </Fade>

      {/* beat 2 — pitfall 2, red */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={390}
          y={95}
          w={310}
          stroke={RED}
          title={t("✗ Pitfall 2: colour confusion", "✗ Pitfall 2: colour confusion")}
          body={t("Prussian blue = N; blood-red = N AND S together", "Prussian blue = N; blood-red = N AUR S saath")}
        />
      </Fade>

      {/* beat 3 — pitfall 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={720}
          y={95}
          w={310}
          stroke={AMBER}
          title={t("✗ Pitfall 3: method-element mismatch", "✗ Pitfall 3: method-element mismatch")}
          body={t("Carius→halogen/S; Dumas&Kjeldahl→N; Liebig→C&H", "Carius→halogen/S; Dumas&Kjeldahl→N; Liebig→C&H")}
        />
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={60}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 4: aqueous-tension slip", "✗ Pitfall 4: aqueous-tension slip")}
          body={t("subtract water-vapour pressure BEFORE converting to STP", "STP mein convert karne se PEHLE water-vapour pressure ghatao")}
        />
      </Fade>

      {/* beat 5 — pitfall 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Card
          x={560}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 5: estimating oxygen directly", "✗ Pitfall 5: oxygen directly estimate karna")}
          body={t("never — get it by difference", "kabhi nahi — difference se nikalo")}
        />
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={150} y={295} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={319} size={14} fill={GREEN} weight={700}>
          {t("⚡ memorise: 12/44 (C), 2/18 (H), 1.4 (Kjeldahl) → most problems in one line", "⚡ yaad rakho: 12/44 (C), 2/18 (H), 1.4 (Kjeldahl) → zyadatar problems ek line mein")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 350 L 60 380" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={368} size={15} fill={RED} script anchor="start">
          {t(
            "concepts are finite, numericals are formula-driven — high return for the effort",
            "concepts finite hain, numericals formula-driven — effort ka high return"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
