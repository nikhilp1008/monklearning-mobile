/**
 * M11 Ch13 · Section 31 — "Same mean or different mean: which comparison to use"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 9.39, 22.1, 35.5, 52.48, 63.83, 73.98]):
 *  0 anchor: heading
 *  1 represent: THE DIAGRAM (YES branch) — same mean → compare σ directly
 *  2 represent: THE DIAGRAM (NO branch) — different means/units → use C.V.
 *  3 note (red-margin, high emphasis): equal means → same ranking, σ enough
 *  4 explain: C.V.'s extra work only earns its keep when means differ
 *  5 land (boxed): x̄1 = x̄2 ⇒ compare σ directly
 *  6 explain: the classic exam trap
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b0 | decision box "Same mean?"        | Draw+T| x440..640 y96..136
 *  b1 | YES arrow + box (green, LEFT)    | Draw+T| x140..460 y190..240
 *  b2 | NO arrow + box (amber, RIGHT)    | Draw+T| x620..940 y190..240
 *  b3 | red bar + note (14)              | Draw+T| x60 y262..280 · text y276
 *  b4 | text (13, ink)                   | T mid | x540 y300
 *  b5 | boxed formula (16, green)        | Draw+T| box x330..750 y320..362
 *  b6 | text (13, ink)                   | T mid | x540 y392
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED, arrowD,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch13Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={19} fill={RED} anchor="middle" script>
          {t("Same Mean or Different Mean?", "Same Mean Ya Different Mean?")}
        </T>
      </Fade>

      {/* beat 0 — anchor + the decision box */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Pick the right tool for the comparison", "Comparison ke liye sahi tool chuno")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={roundRectD(440, 96, 200, 40)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 1.3)}>
        <T x={540} y={121} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Same mean?", "Same mean?")}
        </T>
      </Fade>

      {/* beat 1 — YES branch: compare σ directly */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(480, 138, 340, 186)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={385} y={168} size={13} fill={GREEN} anchor="middle" weight={700}>{t("YES", "HAAN")}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={roundRectD(140, 190, 340, 52)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={310} y={213} size={13} fill={INK} anchor="middle" weight={700}>
          {t("Compare σ directly.", "σ seedhe compare karo.")}
        </T>
        <T x={310} y={232} size={13} fill={INK} anchor="middle">
          {t("Smaller σ = steadier.", "Chhoti σ = steadier.")}
        </T>
      </Fade>

      {/* beat 2 — NO branch: use C.V. */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(600, 138, 740, 186)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={695} y={168} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>{t("NO", "NAHI")}</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={roundRectD(600, 190, 340, 52)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={770} y={213} size={13} fill={INK} anchor="middle" weight={700}>
          {t("Different means/units?", "Different means/units?")}
        </T>
        <T x={770} y={232} size={13} fill={INK} anchor="middle">
          {t("MUST use C.V.", "C.V. use karna hi hoga.")}
        </T>
      </Fade>

      {/* beat 3 — note: equal means give the same ranking */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 262 L 60 280" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={276} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "When means are equal, C.V. and σ give the SAME ranking — σ is enough.",
            "Means barabar hon toh C.V. aur σ SAME ranking dete hain — σ kaafi hai."
          )}
        </T>
      </Fade>

      {/* beat 4 — explain: extra work only earns its keep */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={300} size={13} fill={INK} anchor="middle">
          {t(
            "The extra work of C.V. only earns its keep when the means differ.",
            "C.V. ka extra kaam tabhi kaam aata hai jab means alag hon."
          )}
        </T>
      </Fade>

      {/* beat 5 — land (boxed): the rule */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(300, 320, 480, 42)} stroke={GREEN} sw={2.2} dur={0.8} />
      <XBar on={beat >= 5} delay={dl(5, 1)} x={378} y={347} size={16} fill={GREEN} weight={800} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={392} y={347} size={16} fill={GREEN} anchor="start" weight={800}>{"₁ = "}</T>
      </Fade>
      <XBar on={beat >= 5} delay={dl(5, 1)} x={430} y={347} size={16} fill={GREEN} weight={800} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={444} y={347} size={16} fill={GREEN} anchor="start" weight={800}>{"₂  ⇒  compare σ directly"}</T>
      </Fade>

      {/* beat 6 — explain: the classic exam trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={392} size={13} fill={INK} anchor="middle">
          {t(
            "The classic exam trap: comparing different-mean series by σ instead of C.V.",
            "Classic exam trap: different-mean series ko C.V. ke bajaye σ se compare karna."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
