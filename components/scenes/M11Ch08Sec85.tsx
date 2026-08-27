/**
 * M11 Ch08 · Section 85 — "Quick-recall cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=cheat_sheet. FINAL section of
 * the chapter — one line per subtopic, closing on the golden habit that
 * ran through every section.
 *
 * Beats (en [0, 7.34, 23.55, 39.08, 50.77, 67.16, 79.62, 92.16, 101.55]):
 *  0 title (always-on)
 *  1-7 one line per subtopic (AP, GP, HP, Means, AGP, Sums, Telescope)
 *  8 red-margin: the golden habit, closing the chapter
 *
 * Layout plan:
 *  b1 | text bl95 cx540
 *  b2 | text bl123 cx540
 *  b3 | text bl151 cx540
 *  b4 | text bl179 cx540
 *  b5 | text bl207 cx540
 *  b6 | text bl235 cx540
 *  b7 | text bl263 cx540
 *  b8 | red bar x76 y295..375 · text bl318/358 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec85({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const lines = [
    {
      beat: 1,
      en: "AP: a_n = a+(n-1)d; test — a_n linear, or S_n quadratic with zero constant",
      hi: "AP: a_n = a+(n-1)d; test — a_n linear, ya S_n quadratic zero constant ke saath",
    },
    {
      beat: 2,
      en: "GP: a_n = a·r^(n-1); S_∞ needs |r|<1; for 'a,b,c in GP' use b²=ac",
      hi: "GP: a_n = a·r^(n-1); S_∞ ko |r|<1 chahiye; 'a,b,c GP mein' → b²=ac",
    },
    {
      beat: 3,
      en: "HP: reciprocate → AP; H = 2ab/(a+b); no general sum formula",
      hi: "HP: reciprocate → AP; H = 2ab/(a+b); general sum formula nahi",
    },
    {
      beat: 4,
      en: "Means: A ≥ G ≥ H; AH = G²; recover via x²-2Ax+G²=0",
      hi: "Means: A ≥ G ≥ H; AH = G²; x²-2Ax+G²=0 se recover karo",
    },
    {
      beat: 5,
      en: "AGP: multiply by r, shift, subtract; S_∞ = a/(1-r) + dr/(1-r)²",
      hi: "AGP: r se multiply, shift, subtract; S_∞ = a/(1-r) + dr/(1-r)²",
    },
    {
      beat: 6,
      en: "Special sums: find t_n → powers of n → apply; shortcut Σn³=(Σn)²",
      hi: "Special sums: t_n dhoondo → n ki powers → apply; shortcut Σn³=(Σn)²",
    },
    {
      beat: 7,
      en: "Telescope: write t_r as a difference; only V_1 - V_(n+1) survives",
      hi: "Telescope: t_r ko difference likho; sirf V_1 - V_(n+1) bachta hai",
    },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("Fast recall: one line per idea", "Fast recall: ek line, ek idea")}
        </T>
      </Fade>

      {lines.map((l, i) => (
        <Fade key={i} on={beat >= l.beat} delay={dl(l.beat, 0.2)}>
          <T x={540} y={95 + i * 28} size={14} fill={INK} anchor="middle">
            {t(l.en, l.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 8 — red-margin: the golden habit, closing the chapter */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 76 295 v 80" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={96} y={318} size={16} fill={RED} anchor="start" weight={700} script>
          {t("golden habit throughout: position →", "golden habit poore chapter mein: position →")}
        </T>
        <T x={96} y={358} size={16} fill={RED} anchor="start" weight={700}>
          {"general term a_n → then list or sum"}
        </T>
      </Fade>
    </Scene>
  );
}
