/**
 * M11 Ch07 · Section 16 — "Two different 'biggest' questions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 3.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 15.53, 37.21, 52.74, 77.57, 94.21, 111.27]):
 *  0 title
 *  1 left col: greatest binomial coefficient — depends on n only
 *  2 red-margin HIGH: Pascal rows peak in the middle
 *  3 right col: numerically greatest TERM — depends on a,b,n
 *  4 formula HIGH, boxed: |T(r+1)/Tr| > 1 growing, < 1 shrinking
 *  5 diagram: bar chart, magnitudes rise then fall
 *  6 red-margin: (a-b)^n alternates sign, greatest term may be negative
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const BARS = [
  { x: 250, h: 30 },
  { x: 340, h: 60 },
  { x: 430, h: 90 },
  { x: 520, h: 110 },
  { x: 610, h: 90 },
  { x: 700, h: 60 },
  { x: 790, h: 30 },
];
const BASE_Y = 380;

export default function M11Ch07Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("two 'biggest' questions students confuse", "do 'biggest' sawaal jo confuse karte hain")}
        </T>
      </Fade>

      {/* beat 1 — left column: greatest coefficient */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={98} size={14} fill={AMBER_DARK} script anchor="start">
          {t("GREATEST COEFFICIENT", "GREATEST COEFFICIENT")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={150} y={124} size={15} fill={INK} script anchor="start">
          {t("which of nC0 ... nCn is largest?", "nC0 ... nCn mein sabse bada kaun?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={150} y={148} size={15} fill={MUTED} script anchor="start">
          {t("depends on n only", "sirf n pe depend karta hai")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: Pascal peaks in middle */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 150 180 v 60" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={170} y={198} size={14} fill={RED} script anchor="start">
          {t("Pascal rows peak", "Pascal rows peak")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={170} y={230} size={14} fill={RED} script anchor="start">
          {t("in the middle — always", "middle mein — hamesha")}
        </T>
      </Fade>

      {/* beat 3 — right column: numerically greatest term */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={580} y={98} size={14} fill={AMBER_DARK} script anchor="start">
          {t("GREATEST TERM (numeric)", "GREATEST TERM (numeric)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={580} y={124} size={15} fill={INK} script anchor="start">
          {t("which term is largest in actual (a+b)^n?", "asal (a+b)^n mein sabse bada term kaunsa?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={580} y={148} size={15} fill={MUTED} script anchor="start">
          {t("depends on a, b AND n", "depend karta a, b AUR n pe")}
        </T>
      </Fade>

      {/* beat 4 — the ratio formula, boxed HIGH */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={580} y={200} size={15} fill={AMBER_DARK} script anchor="start">
          |T(r+1)/Tr| &gt; 1 ⇒ growing;  &lt; 1 ⇒ shrinking
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(565, 178, 430, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — bar-chart diagram: rise, peak, fall */}
      {BARS.map((b, i) => (
        <Draw
          key={i}
          on={beat >= 5}
          delay={dl(5, 0.2 + i * 0.15)}
          d={`M ${b.x} ${BASE_Y} L ${b.x} ${BASE_Y - b.h}`}
          stroke={AMBER_DARK}
          sw={16}
          dur={0.5}
        />
      ))}
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={`M 220 ${BASE_Y} h 640`} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={410} size={14} fill={MUTED} script>
          {t("term magnitudes rise, peak, then fall", "term magnitudes badhte, peak, phir ghatate")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: sign alternation */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 448 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={472} size={15} fill={RED} script anchor="start">
          {t("(a-b)^n alternates sign — greatest term may be negative", "(a-b)^n mein sign alternate — greatest term negative bhi ho sakta")}
        </T>
      </Fade>
    </Scene>
  );
}
