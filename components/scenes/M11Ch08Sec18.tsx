/**
 * M11 Ch08 · Section 18 — "The savings word problem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: months 1-3 flat ₹200 (=600 total); months 4..n form an AP
 * a=240,d=40, (n-3) terms, sum=(n-3)/2[480+40(n-4)]=20(n-3)(n+8). Total
 * 600+20(n-3)(n+8)=11040 ⇒ (n-3)(n+8)=522 ⇒ n²+5n-546=0, discriminant
 * 25+2184=2209=47² ⇒ n=(-5+47)/2=21 (positive integer root) ✓.
 *
 * Beats (en [0, 13.82, 25, 35.58, 43.95, 52.91, 63.57]):
 *  0 title (always-on)
 *  1 THE DEMO: bar chart of monthly savings, flat then rising
 *  2 insight: translating word → a, d
 *  3 target: S_n = 11040
 *  4 text: quadratic in n
 *  5 boxed: n = 21 months
 *  6 red-margin: reject non-integer/negative root
 *
 * Layout plan:
 *  b1 | 5 bars baseline y180 cx200/320/440/560/680 · caption bl200 cx440... moved to 220
 *  b2 | text bl250 cx540
 *  b3 | chip x420 y275 w240 h40 (text bl~300)
 *  b4 | text bl335 cx540
 *  b5 | chip x380 y355 w320 h44 (text bl~382)
 *  b6 | red bar x76 y420..490 · text bl440/480 x96
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const bars = [
    { cx: 200, val: 200 },
    { cx: 320, val: 200 },
    { cx: 440, val: 200 },
    { cx: 560, val: 240 },
    { cx: 680, val: 280 },
  ];
  const baseline = 180;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={18} fill={INK} anchor="middle" script>
          {t(
            "Saves ₹200/month for 3 months, then ₹40 more each month. When is total ₹11040?",
            "3 mahine ₹200/month bachata hai, phir har mahine ₹40 zyada. Total kab ₹11040 hoga?"
          )}
        </T>
      </Fade>

      {/* beat 1 — monthly savings bars, flat then rising */}
      {bars.map((b, i) => {
        const h = b.val * 0.2;
        return (
          <Fade key={i} on={beat >= 1} delay={dl(1, 0.2 + i * 0.25)}>
            <Rect x={b.cx - 20} y={baseline - h} width={40} height={h} fill={CREAM} stroke={i < 3 ? AMBER_DARK : GREEN_DARK} strokeWidth={2} />
            <T x={b.cx} y={baseline - h - 8} size={11} fill={INK} anchor="middle">{`₹${b.val}`}</T>
          </Fade>
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={440} y={220} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("model the pattern as a, d — then sum", "pattern ko a, d se model karo — phir sum")}
        </T>
      </Fade>

      {/* beat 2 — the whole skill */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={250} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("translating the word problem into a and d is the whole skill", "word problem ko a aur d mein translate karna hi asli skill hai")}
        </T>
      </Fade>

      {/* beat 3 — target */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={420} y={275} w={240} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"S_n = 11040"}
        </Chip>
      </Fade>

      {/* beat 4 — quadratic in n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={335} size={14} fill={INK} anchor="middle" script>
          {t("summing all n months gives a quadratic in n", "n mahino ka sum lene se n mein ek quadratic milta hai")}
        </T>
      </Fade>

      {/* beat 5 — boxed n = 21 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={380} y={355} w={320} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("n = 21 months", "n = 21 mahine")}
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: reject the wrong root */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 420 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={440} size={15} fill={RED} anchor="start" script>
          {t("the ₹-savings archetype: reject the", "₹-savings archetype: reject karo")}
        </T>
        <T x={96} y={480} size={15} fill={RED} anchor="start" script>
          {t("non-integer / negative root", "non-integer / negative root ko")}
        </T>
      </Fade>
    </Scene>
  );
}
