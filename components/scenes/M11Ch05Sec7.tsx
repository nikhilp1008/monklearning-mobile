/**
 * M11 Ch05 · Section 7 — "The order axioms and the language of intervals"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type = formulas: assemble the reference
 * card band by band, in the order the chapter built each rule.
 *
 * Beats (en [0,8.19,20.14,32.77,43.95,53.25,57.77,76.37,90.54], hi
 * [0,7.08,18.18,30.21,40.11,48.38,52.22,67.07,81.41]):
 *  0 heading — "AXIOMS" label + underline, column divider
 *  1 formula (high): add/subtract — a<b ⇒ a+c<b+c
 *  2 formula: ×÷ positive — a<b,c>0 ⇒ ac<bc, a/c<b/c
 *  3 formula (high, red): ×÷ negative — a<b,c<0 ⇒ ac>bc, a/c>b/c
 *  4 formula: transitive — a<b,b<c ⇒ a<c
 *  5 heading — "GENERAL LINEAR INEQUALITY" label + underline
 *  6 formula (high, piecewise): ax+b>0 ⇒ {x>-b/a if a>0; x<-b/a if a<0}
 *  7 text: three languages — mini number line, set-builder, interval
 *  8 note (red-margin, high): [ ] includes, ( ) excludes, ∞ always round
 *
 * Layout plan:
 *  b0 | "AXIOMS" + underline      | T/Draw | x505..575 y88..107 (bl 100)
 *  b0 | column divider            | Draw   | x380 y115..295
 *  b1 | "add/subtract" | formula  | T st   | x200/420 y122..145 (bl 140)
 *  b2 | "× ÷ positive" | formula  | T st   | x200/420 y170..193 (bl 188)
 *  b3 | "× ÷ negative" | formula (red) | T st | x200/420 y218..241 (bl 236)
 *  b4 | "transitive"   | formula  | T st   | x200/420 y266..289 (bl 284)
 *  b5 | "GENERAL LINEAR INEQUALITY" + underline | T/Draw | y318..337 (bl 330)
 *  b6 | "ax + b > 0 ⇒" (20,ink)   | T st   | x400  bl 380
 *  b6 | bracket + 2 cases         | Draw+T | x560 y365..412 · x580 bl372/405
 *  b7 | "same set, three…" (16)  | T mid  | x540  y440..460 (bl 455)
 *  b7 | mini number line          | Draw   | x200..320 y490
 *  b7 | "{x : x ≥ a}" / "[a, ∞)"  | T mid  | x540/760 bl 490
 *  b8 | boxed guardrail (red)     | Chip   | x200..880 y525..575
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, AMBER_DARK, CREAM, GREEN,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot, lineD } from "./math-kit";

export default function M11Ch05Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("same set, three languages: line, set, interval", "ek hi set, teen languages: line, set, interval")}
        </T>
      </Fade>

      {/* beat 0 — header + divider */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          AXIOMS
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(505, 107, 575, 107)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 1.1)} d={lineD(380, 115, 380, 295)} stroke={MUTED} sw={1.4} dur={0.5} />

      {/* beat 1 — add/subtract */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={200} y={140} size={17} fill={INK} weight={700} anchor="start">
          {t("add/subtract", "add/subtract")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={420} y={140} size={18} fill={INK} weight={700} anchor="start">
          a &lt; b ⇒ a + c &lt; b + c
        </T>
      </Fade>

      {/* beat 2 — × ÷ positive */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={200} y={188} size={17} fill={INK} weight={700} anchor="start">
          {t("× ÷ positive", "× ÷ positive")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={420} y={188} size={18} fill={INK} weight={700} anchor="start">
          a&lt;b, c&gt;0 ⇒ ac&lt;bc, a/c&lt;b/c
        </T>
      </Fade>

      {/* beat 3 — × ÷ negative (the flip axiom) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={200} y={236} size={17} fill={RED} weight={700} anchor="start">
          {t("× ÷ negative", "× ÷ negative")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={420} y={236} size={18} fill={RED} weight={700} anchor="start">
          a&lt;b, c&lt;0 ⇒ ac&gt;bc, a/c&gt;b/c
        </T>
      </Fade>

      {/* beat 4 — transitive */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={200} y={284} size={17} fill={INK} weight={700} anchor="start">
          {t("transitive", "transitive")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={420} y={284} size={18} fill={INK} weight={700} anchor="start">
          a &lt; b, b &lt; c ⇒ a &lt; c
        </T>
      </Fade>

      {/* beat 5 — general linear inequality header */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={330} size={15} fill={MUTED} weight={800}>
          {t("GENERAL LINEAR INEQUALITY", "GENERAL LINEAR INEQUALITY")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={lineD(446, 337, 634, 337)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 6 — the piecewise general form */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={400} y={380} size={20} fill={INK} weight={700} anchor="start">
          ax + b &gt; 0 ⇒
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d="M 560 365 h 10 M 560 365 v 47 M 560 412 h 10" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={580} y={372} size={18} fill={INK} weight={700} anchor="start">
          {t("x > -b/a", "x > -b/a")} &nbsp; (a &gt; 0)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={580} y={405} size={18} fill={AMBER_DARK} weight={700} anchor="start">
          {t("x < -b/a", "x < -b/a")} &nbsp; (a &lt; 0)
        </T>
      </Fade>

      {/* beat 7 — three equivalent languages */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={455} size={16} fill={INK} script>
          {t("the same set, three languages:", "ek hi set, teen languages mein:")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={axisD(200, 320, 490)} stroke={INK} sw={1.8} dur={0.5} />
      <IntervalDot on={beat >= 7} delay={dl(7, 1.7)} x={260} y={490} open={false} r={4} stroke={GREEN} />
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={lineD(260, 490, 312, 490)} stroke={GREEN} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <T x={540} y={490} size={18} fill={INK}>
          {"{x : x ≥ a}"}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={760} y={490} size={18} fill={INK}>
          [a, ∞)
        </T>
      </Fade>

      {/* beat 8 — the bracket rule */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={200} y={525} w={680} h={50} fill={CREAM} stroke={RED} textFill={RED} size={18}>
          {t(
            "[ ] includes · ( ) excludes · ∞ always gets a round bracket",
            "[ ] includes · ( ) excludes · ∞ ko hamesha round bracket"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
