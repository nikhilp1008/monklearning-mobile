/**
 * M11 Ch05 · Section 11 — "Worked example: the parameter that makes it true
 * for every x (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Three-case analysis, laid out as three cards:
 * two get crossed out (half-line ≠ "every x"), one wins.
 *
 * Beats (en [0,20.31,25.43,39,52.39,65.79,75.95,93.87,98.47], hi
 * [0,19.8,24.75,37.63,49.15,62.89,74.41,92.07,96.94]):
 *  0 heading: the problem — a(x-1) < 2x+3 for EVERY real x
 *  1 text: expand, gather x-terms (caption)
 *  2 formula: ax-a<2x+3 ⇒ (a-2)x<a+3
 *  3 text: everything hinges on (a-2) — it can VANISH (amber callout)
 *  4 card 1: a>2 ⇒ x<(a+3)/(a-2), half-line — REJECTED (crossed)
 *  5 card 2: a<2 ⇒ x>(a+3)/(a-2), half-line — REJECTED (crossed)
 *  6 card 3 (red-margin, high): a=2 ⇒ 0·x<5 i.e. 0<5 — TRUE for every x
 *  7 formula (high, boxed green): a = 2
 *  8 text: 'linear' stops being linear when the leading coefficient is 0
 *
 * Layout plan:
 *  b0 | problem (20,ink,w800)      | T mid | bl 110
 *  b1 | caption (15,muted,scr)     | T mid | bl 145
 *  b2 | formula (20,ink,w700)      | T mid | bl 180
 *  b3 | callout (16,amber,scr)     | T mid | bl 215
 *  b4 | card 1 "a>2"               | Draw+T| x80..360  y260..370
 *  b5 | card 2 "a<2"               | Draw+T| x400..680 y260..370
 *  b6 | card 3 "a=2" (green)       | Draw+T| x720..1000 y260..370
 *  b7 | boxed "a = 2" (green)      | Chip  | x440..640 y400..450
 *  b8 | caption (15,ink,scr)       | T mid | bl 485
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

function Card({
  on,
  delay,
  x,
  y,
  w,
  h,
  stroke,
  header,
  formula,
  verdict,
  verdictColor,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  header: string;
  formula: string;
  verdict: string;
  verdictColor: string;
}) {
  const cx = x + w / 2;
  return (
    <>
      <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 10)} stroke={stroke} sw={2} dur={0.6} />
      <Fade on={on} delay={delay + 0.5}>
        <T x={cx} y={y + 30} size={18} fill={INK} weight={800}>
          {header}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 1.0}>
        <T x={cx} y={y + 52} size={14} fill={INK}>
          {formula}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 1.5}>
        <T x={cx} y={y + 82} size={12} fill={verdictColor}>
          {verdict}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch05Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("when does a coefficient need to vanish?", "coefficient ko kab vanish hona padta hai?")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={20} fill={INK} weight={800}>
          a(x - 1) &lt; 2x + 3 &nbsp; for EVERY real x
        </T>
      </Fade>

      {/* beat 1 — expand, gather x-terms */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={15} fill={MUTED} script>
          {t("expand, gather x-terms on one side", "expand karo, x-terms ek side")}
        </T>
      </Fade>

      {/* beat 2 — ax-a<2x+3 ⇒ (a-2)x<a+3 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={20} fill={INK} weight={700}>
          ax - a &lt; 2x + 3 ⇒ (a - 2)x &lt; a + 3
        </T>
      </Fade>

      {/* beat 3 — everything hinges on (a-2) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={215} size={16} fill={AMBER_DARK} script>
          {t("everything hinges on (a - 2) — it can VANISH", "sab kuch (a - 2) pe depend karta hai — yeh VANISH ho sakta hai")}
        </T>
      </Fade>

      {/* beat 4 — case a > 2, rejected */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0.3)}
        x={80}
        y={260}
        w={280}
        h={110}
        stroke={INK}
        header="a > 2"
        formula="x < (a+3)/(a-2)"
        verdict={t("half-line — REJECTED", "half-line — REJECTED")}
        verdictColor={RED}
      />
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={crossD(80, 260, 280, 110)} stroke={RED} sw={2.4} dur={0.5} />

      {/* beat 5 — case a < 2, rejected */}
      <Card
        on={beat >= 5}
        delay={dl(5, 0.3)}
        x={400}
        y={260}
        w={280}
        h={110}
        stroke={INK}
        header="a < 2"
        formula="x > (a+3)/(a-2)"
        verdict={t("half-line — REJECTED", "half-line — REJECTED")}
        verdictColor={RED}
      />
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={crossD(400, 260, 280, 110)} stroke={RED} sw={2.4} dur={0.5} />

      {/* beat 6 — case a = 2, the winner */}
      <Card
        on={beat >= 6}
        delay={dl(6, 0.3)}
        x={720}
        y={260}
        w={280}
        h={110}
        stroke={GREEN}
        header="a = 2"
        formula="0·x < 5, i.e. 0 < 5"
        verdict={t("TRUE for every x", "TRUE, har x ke liye")}
        verdictColor={GREEN}
      />
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={checkD(940, 358, 14)} stroke={GREEN} sw={2.6} dur={0.4} />

      {/* beat 7 — the answer, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={440} y={400} w={200} h={50} fill={GREEN} textFill="#fff" size={24} script={false}>
          a = 2
        </Chip>
      </Fade>

      {/* beat 8 — the deeper insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={485} size={15} fill={INK} script>
          {t(
            "'linear' stops being linear when the leading coefficient is 0",
            "'linear' tab linear nahi rehta jab leading coefficient 0 ho jaaye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
