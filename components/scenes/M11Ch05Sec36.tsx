/**
 * M11 Ch05 · Section 36 — "Standard results: modulus and quadratic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas — the modulus results get
 * a small side-by-side number-line pair (interval vs two rays) since these
 * are notoriously error-prone; the quadratic results extend Sec 35 directly.
 *
 * Beats (en [0,11.43,25.09,43.52,59.31,67.75,76.12,84.48], hi
 * [0,10.07,25.6,40.87,56.92,64.77,72.19,80.9]):
 *  0 heading — "RESULTS (a > 0)" label + underline
 *  1 formula (high): |x|<a ⟺ -a<x<a — left mini number line (interval)
 *  2 formula (high): |x|>a ⟺ x<-a or x>a — right mini number line (2 rays)
 *  3 formula: x²<a² ⟺ |x|<a,  x²>a² ⟺ |x|>a
 *  4 text: quadratic ax²+bx+c, a>0, real roots α<β
 *  5 formula (high, boxed green): ax²+bx+c<0 ⟺ α<x<β (between)
 *  6 formula (high, boxed green): ax²+bx+c>0 ⟺ x<α or x>β (outside)
 *  7 note (red-margin, high): no real roots, a>0 ⇒ positive for ALL x
 *
 * Layout plan:
 *  b0 | "RESULTS (a > 0)" + underline | T/Draw | bl 100 / y107
 *  b1 | formula (18,ink,w700)     | T mid  | bl 140
 *  b1 | left mini line (interval) | Draw/circle/T | y180, x150..450
 *  b2 | formula (18,ink,w700)     | T mid  | bl 245
 *  b2 | right mini line (2 rays)  | Draw/circle/T | y180, x630..930
 *  b3 | formula (16,ink,w700)     | T mid  | bl 290
 *  b4 | caption (14,ink,scr)      | T mid  | bl 330
 *  b5 | boxed formula (16,green)  | Chip   | x230..790 y365..407
 *  b6 | boxed formula (16,green)  | Chip   | x230..790 y422..464
 *  b7 | boxed guardrail (15,red)  | Chip   | x160..920 y480..524
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { IntervalDot, lineD } from "./math-kit";

export default function M11Ch05Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={21} fill={RED} script>
          {t("|x|<a is an interval; |x|>a is two rays", "|x|<a ek interval hai; |x|>a do rays hain")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          RESULTS (a &gt; 0)
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(465, 107, 615, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — |x| < a, an interval */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={140} size={18} fill={INK} weight={700}>
          |x| &lt; a ⟺ -a &lt; x &lt; a
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(150, 180, 450, 180)} stroke={INK} sw={1.8} dur={0.5} />
      <IntervalDot on={beat >= 1} delay={dl(1, 1.6)} x={220} y={180} open={true} r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 1} delay={dl(1, 1.9)} x={380} y={180} open={true} r={5} stroke={GREEN} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={lineD(220, 180, 380, 180)} stroke={GREEN} sw={4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={220} y={200} size={12} fill={MUTED}>
          -a
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={380} y={200} size={12} fill={MUTED}>
          a
        </T>
      </Fade>

      {/* beat 2 — |x| > a, two rays */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={245} size={18} fill={INK} weight={700}>
          {t("|x| > a ⟺ x < -a or x > a", "|x| > a ⟺ x < -a ya x > a")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={lineD(630, 180, 930, 180)} stroke={INK} sw={1.8} dur={0.5} />
      <IntervalDot on={beat >= 2} delay={dl(2, 1.6)} x={700} y={180} open={true} r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 2} delay={dl(2, 1.9)} x={860} y={180} open={true} r={5} stroke={GREEN} />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={lineD(630, 180, 700, 180)} stroke={GREEN} sw={4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={lineD(860, 180, 930, 180)} stroke={GREEN} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={700} y={200} size={12} fill={MUTED}>
          -a
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={860} y={200} size={12} fill={MUTED}>
          a
        </T>
      </Fade>

      {/* beat 3 — squared form */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={290} size={16} fill={INK} weight={700}>
          x² &lt; a² ⟺ |x| &lt; a, &nbsp; x² &gt; a² ⟺ |x| &gt; a
        </T>
      </Fade>

      {/* beat 4 — the quadratic setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={330} size={14} fill={INK} script>
          {t("quadratic ax²+bx+c, a>0, real roots α<β:", "quadratic ax²+bx+c, a>0, real roots α<β:")}
        </T>
      </Fade>

      {/* beat 5 — between */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={365} w={560} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          ax²+bx+c &lt; 0 ⟺ α &lt; x &lt; β (between)
        </Chip>
      </Fade>

      {/* beat 6 — outside */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={230} y={422} w={560} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          {t("ax²+bx+c > 0 ⟺ x<α or x>β (outside)", "ax²+bx+c > 0 ⟺ x<α ya x>β (outside)")}
        </Chip>
      </Fade>

      {/* beat 7 — no real roots */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={160} y={480} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "no real roots and a>0 ⇒ the expression is positive for ALL x",
            "real roots nahi hain aur a>0 ⇒ expression har x ke liye positive hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
