/**
 * M11 Ch01 · Section 33 — "Three-set survey: at least one, exactly two, none"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 REPRESENT: 3-circle Venn (C,F,H) drawn+labeled; center filled 20 (triple, given);
 *    right column: Σn=245, Σpairwise=105, triple=20
 *  2 at least one = union = 245−105+20 = 160
 *  3 exactly two = 105−60 = 45; fill the 3 pairwise-only regions (20,10,15)
 *  4 no sport = 200−160 = 40; fill only-C/F/H (50,25,20) and "none"=40
 *  5 GUARDRAIL: exactly two → −3×center; at least two → −2×center
 *  6 pro-tip: fill centre first, then work outward
 *
 * Layout plan (reuses Sec29's 3-circle geometry: C(360,270,85) F(480,270,85) H(420,370,85),
 * box(230,150,380,340); right column formulas at x660 start):
 *  b1 | circles+box, "C"/"F"/"H"/"n(U)=200", center "20" | Draw/T |
 *  b1 | right col: Σn / Σpairwise / triple (13)          | T st | x660 y190/215/240
 *  b2 | "at least one = 245−105+20 = 160" (green)         | T st | x660 y290
 *  b3 | "exactly two = 105−60 = 45" (green)                | T st | x660 y325
 *  b3 | pairwise-only fills 20/10/15                       | T mid | x420,230 / x335,335 / x505,335
 *  b4 | "no sport = 200−160 = 40" (green)                   | T st | x660 y360
 *  b4 | only-C/F/H fills 50/25/20 + none 40                 | T mid | x300,225 / x545,225 / x420,440 / x595,475
 *  b5 | guardrail (red)                                     | T st | x660 y410
 *  b6 | pro-tip (script)                                    | T st | x660 y445
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD } from "./math-kit";

export default function M11Ch01Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const C = { cx: 360, cy: 270, r: 85 };
  const F = { cx: 480, cy: 270, r: 85 };
  const H = { cx: 420, cy: 370, r: 85 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("cricket, football, hockey (200 students)", "cricket, football, hockey (200 students)")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: draw the 3-circle Venn, fill the given centre */}
      <Draw on={beat >= 1} d={roundRectD(230, 150, 380, 340, 8)} stroke={MUTED} sw={1.8} delay={dl(1, 0.2)} dur={0.9} />
      <Draw on={beat >= 1} d={circleD(C.cx, C.cy, C.r)} stroke={INK} sw={2} delay={dl(1, 1)} dur={0.6} />
      <Draw on={beat >= 1} d={circleD(F.cx, F.cy, F.r)} stroke={INK} sw={2} delay={dl(1, 1.5)} dur={0.6} />
      <Draw on={beat >= 1} d={circleD(H.cx, H.cy, H.r)} stroke={INK} sw={2} delay={dl(1, 2)} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={250} y={175} size={12} fill={MUTED} anchor="start" weight={700}>{"n(U)=200"}</T>
        <T x={295} y={195} size={15} fill={INK} weight={700}>C</T>
        <T x={545} y={195} size={15} fill={INK} weight={700}>F</T>
        <T x={420} y={470} size={15} fill={INK} weight={700}>H</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={420} y={310} size={20} fill={RED} weight={800}>20</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={660} y={190} size={13} fill={INK} anchor="start" weight={600}>
          {"Σn = 100+80+65 = 245"}
        </T>
        <T x={660} y={215} size={13} fill={INK} anchor="start" weight={600}>
          {"Σpairwise = 40+30+35 = 105"}
        </T>
        <T x={660} y={240} size={13} fill={INK} anchor="start" weight={600}>
          {"triple = 20"}
        </T>
      </Fade>

      {/* beat 2 — at least one */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={660} y={290} size={14} fill={GREEN} anchor="start" weight={800}>
          {"at least one = 245−105+20 = 160"}
        </T>
      </Fade>

      {/* beat 3 — exactly two; fill pairwise-only regions */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={660} y={325} size={14} fill={GREEN} anchor="start" weight={800}>
          {"exactly two = 105−60 = 45"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={420} y={235} size={15} fill={INK} weight={800}>20</T>
        <T x={335} y={335} size={15} fill={INK} weight={800}>10</T>
        <T x={505} y={335} size={15} fill={INK} weight={800}>15</T>
      </Fade>

      {/* beat 4 — no sport; fill single-only regions and none */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={660} y={360} size={14} fill={GREEN} anchor="start" weight={800}>
          {"no sport = 200−160 = 40"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={300} y={225} size={15} fill={INK} weight={800}>50</T>
        <T x={545} y={225} size={15} fill={INK} weight={800}>25</T>
        <T x={420} y={440} size={15} fill={INK} weight={800}>20</T>
        <T x={595} y={475} size={15} fill={GREEN} weight={800}>40</T>
      </Fade>

      {/* beat 5 — GUARDRAIL: the coefficient */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={660} y={410} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "exactly two: −3×centre.  at least two: −2×centre",
            "exactly two: −3×centre.  at least two: −2×centre"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={660} y={445} size={13} fill={MUTED} script anchor="start">
          {t("fill the centre first, then work outward", "pehle centre bharo, phir bahar ki taraf")}
        </T>
      </Fade>
    </Scene>
  );
}
