/**
 * M11 Ch08 · Section 40 — "The HP formula set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Beats (en [0, 7.94, 22.78, 34.22, 42.75, 53.59, 67.24, 80.04]):
 *  0 title (always-on)
 *  1-6 six formula cards in a 3x2 grid
 *  7 red-margin: the '2' is essential; no sum formula
 *
 * Layout plan — 3 cols x2 rows, cx180/540/900, w260:
 *  row1 | label bl108 · chip y118 w260 h44 (bl~145)
 *  row2 | label bl193 · chip y203 w260 h44 (bl~230)
 *  b7 | red bar x76 y280..350 · text bl300/340 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1 = [
    { beat: 1, cx: 180, label: t("definition", "definition"), formula: "a_n in HP ⟺ 1/a_n in AP" },
    { beat: 2, cx: 540, label: t("nth term", "nth term"), formula: "a_n = 1/(1/a+(n-1)d)" },
    { beat: 3, cx: 900, label: t("HM, two numbers", "HM, do numbers"), formula: "H = 2ab/(a+b)" },
  ];
  const row2 = [
    { beat: 4, cx: 180, label: t("HM, n numbers", "HM, n numbers"), formula: "n/(1/a_1+...+1/a_n)" },
    { beat: 5, cx: 540, label: t("insert n HMs", "n HMs insert karo"), formula: "1/H_k = 1/a + kD" },
    { beat: 6, cx: 900, label: t("the mean chain", "mean chain"), formula: "AH = G², A ≥ G ≥ H" },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Definition, nth term, means — all via the reciprocal AP", "Definition, nth term, means — sab reciprocal AP se")}
        </T>
      </Fade>

      {row1.map((c, i) => (
        <Fade key={i} on={beat >= c.beat} delay={dl(c.beat, 0.2)}>
          <T x={c.cx} y={108} size={12.5} fill={AMBER_DARK} anchor="middle" weight={700} script>{c.label}</T>
          <Chip x={c.cx - 130} y={118} w={260} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
            {c.formula}
          </Chip>
        </Fade>
      ))}

      {row2.map((c, i) => (
        <Fade key={i} on={beat >= c.beat} delay={dl(c.beat, 0.2)}>
          <T x={c.cx} y={193} size={12.5} fill={AMBER_DARK} anchor="middle" weight={700} script>{c.label}</T>
          <Chip x={c.cx - 130} y={203} w={260} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
            {c.formula}
          </Chip>
        </Fade>
      ))}

      {/* beat 7 — red-margin: the '2' is essential */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 280 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={300} size={15} fill={RED} anchor="start" script>
          {t("HM uses 2ab/(a+b) — the '2' is essential;", "HM 2ab/(a+b) use karta hai — '2' zaroori hai;")}
        </T>
        <T x={96} y={340} size={15} fill={RED} anchor="start" script>
          {t("and there is NO sum formula", "aur koi sum formula NAHI hai")}
        </T>
      </Fade>
    </Scene>
  );
}
