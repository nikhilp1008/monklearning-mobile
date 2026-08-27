/**
 * M11 Ch14 · Section 28 — "Common pitfalls and pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: tips — closes Subtopic 2.
 * Numbered-badge pitfall ladder + amber pro-tip closer, same motif as
 * Sec14. The pro-tip previews Sec30's "at least one" strategy.
 *
 * Beats (board_reveal_at_english [0,8.28,27.14,46.59,67.84,82.09,98.22]):
 *  0 heading
 *  1 (HIGH) Pitfall 1: n(A)/n(S) on a loaded experiment — consequence, not definition
 *  2 Pitfall 2: forgetting to subtract the overlap
 *  3 (HIGH) Pitfall 3: ME ≠ independent — different formulas
 *  4 Pitfall 4: probability outside [0,1] = arithmetic error
 *  5 (HIGH) PRO-TIP: "at least one" → complement: P(at least one) = 1 − P(none)
 *  6 closing: turns a messy union into one easy count
 *
 * Layout plan (badges cx=120, rows y130/172/214/256, text x150 start):
 *  b1 | badge "1" + line (15.5, red)                | Fade/T | y119..141
 *  b2 | badge "2" + line (15.5, ink)                  | Fade/T | y161..183
 *  b3 | badge "3" + line (15.5, red)                    | Fade/T | y203..225
 *  b4 | badge "4" + line (15.5, ink)                      | Fade/T | y245..267
 *  b5 | pro-tip card (amber, w780 h74, HIGH)                | Draw/T | x150..930 y300..374
 *  b6 | closing caption (14, muted)                            | T mid | x230..850 y400..414
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Badge({ on, delay, n }: { on: boolean; delay: number; n: number }) {
  const y = [130, 172, 214, 256][n - 1];
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={120} cy={y - 5} r={14} fill={RED} />
      <T x={120} y={y} size={15} fill="#fff" weight={800}>
        {n}
      </T>
    </Fade>
  );
}

export default function M11Ch14Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t('see "at least one" → reach for the complement, always', '"at least one" dikhe → complement pakdo, hamesha')}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Pitfalls & Pro-Tips", "Pitfalls & Pro-Tips")}
        </T>
      </Fade>

      {/* pitfall 1 — HIGH */}
      <Badge on={beat >= 1} delay={dl(1, 0.2)} n={1} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={150} y={130} size={15.5} fill={RED} anchor="start" weight={700}>
          {t("n(A)/n(S) on a loaded/unfair experiment — consequence, not a definition", "n(A)/n(S), loaded/unfair experiment pe — consequence hai, definition nahi")}
        </T>
      </Fade>

      {/* pitfall 2 */}
      <Badge on={beat >= 2} delay={dl(2, 0.2)} n={2} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={150} y={172} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("forgetting to subtract the overlap — only drop −P(A∩B) once ME is checked", "overlap subtract karna bhool jaana — ME check karke hi −P(A∩B) hatao")}
        </T>
      </Fade>

      {/* pitfall 3 — HIGH */}
      <Badge on={beat >= 3} delay={dl(3, 0.2)} n={3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={150} y={214} size={15.5} fill={RED} anchor="start" weight={700}>
          {"ME ≠ independent: ME → P(A∩B)=0, independent → P(A∩B)=P(A)P(B)"}
        </T>
      </Fade>

      {/* pitfall 4 */}
      <Badge on={beat >= 4} delay={dl(4, 0.2)} n={4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={150} y={256} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("probability outside [0,1] = arithmetic error, full stop — free sanity check", "probability [0,1] ke bahar = arithmetic error, bas — free sanity check")}
        </T>
      </Fade>

      {/* beat 5 — HIGH pro-tip */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={roundRectD(150, 300, 780, 74, 12)} stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={330} size={17} fill={AMBER_DARK} weight={800}>
          {t('PRO-TIP: "at least one" → reach for the complement', 'PRO-TIP: "at least one" → complement pakdo')}
        </T>
        <T x={540} y={358} size={17} fill={INK} weight={700}>
          {"P(at least one) = 1 − P(none)"}
        </T>
      </Fade>

      {/* beat 6 — closing */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={404} size={14} fill={MUTED}>
          {t("turns a messy union into one easy count — highest leverage in the chapter", "messy union ko ek easy count bana deta hai — chapter ka highest leverage")}
        </T>
      </Fade>
    </Scene>
  );
}
