/**
 * M11 Ch14 · Section 39 — "Common pitfalls and pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: tips — closes Subtopic 3.
 * Numbered-badge pitfall ladder + amber pro-tip closer, same motif as
 * Sec14/Sec28.
 *
 * Beats (board_reveal_at_english [0,9.81,23.3,36.35,51.63,64.6,79.27]):
 *  0 heading
 *  1 (HIGH) Pitfall 1: mixing ordered/unordered — count n(E), n(S) the SAME way
 *  2 (HIGH) Pitfall 2: odds ≠ probability — m:n → m/(m+n), NOT m/n
 *  3 Pitfall 3: forgetting +triple in 3-event inclusion-exclusion
 *  4 Pitfall 4: enumerating "at least one" instead of the complement
 *  5 (HIGH) PRO-TIP: read for order FIRST, then the "at least" trigger
 *  6 closing: counting decision + complement reflex cover the bulk of marks
 *
 * Layout plan (badges cx=120, rows y130/172/214/256, text x150 start):
 *  b1 | badge "1" + line (15.5, red)                | Fade/T | y119..141
 *  b2 | badge "2" + line (15.5, red)                  | Fade/T | y161..183
 *  b3 | badge "3" + line (15.5, ink)                    | Fade/T | y203..225
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

export default function M11Ch14Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("order first, then \"at least\" — two reflexes, most of the marks", "order pehle, phir \"at least\" — do reflexes, zyada marks")}
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
          {t("mixing ordered/unordered counts — n(E) and n(S) need the SAME method", "ordered/unordered mix karna — n(E) aur n(S) SAME method se")}
        </T>
      </Fade>

      {/* pitfall 2 — HIGH */}
      <Badge on={beat >= 2} delay={dl(2, 0.2)} n={2} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={150} y={172} size={15.5} fill={RED} anchor="start" weight={700}>
          {"odds ≠ probability: m:n → m/(m+n), NOT m/n"}
        </T>
      </Fade>

      {/* pitfall 3 */}
      <Badge on={beat >= 3} delay={dl(3, 0.2)} n={3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={150} y={214} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("forgetting the +triple in three-event inclusion–exclusion (or a sign slip)", "teen-event inclusion–exclusion mein +triple bhool jaana (ya sign galat)")}
        </T>
      </Fade>

      {/* pitfall 4 */}
      <Badge on={beat >= 4} delay={dl(4, 0.2)} n={4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={150} y={256} size={15.5} fill={INK} anchor="start" weight={600}>
          {t('enumerating "at least one" case-by-case instead of the complement', '"at least one" ko case-by-case karna, complement ki jagah')}
        </T>
      </Fade>

      {/* beat 5 — HIGH pro-tip */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={roundRectD(150, 300, 780, 74, 12)} stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={330} size={17} fill={AMBER_DARK} weight={800}>
          {t("PRO-TIP: read for ORDER first", "PRO-TIP: pehle ORDER padho")}
        </T>
        <T x={540} y={358} size={16} fill={INK} weight={700}>
          {t('then the "at least" trigger — two reflexes', '"at least" trigger — do reflexes')}
        </T>
      </Fade>

      {/* beat 6 — closing */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={404} size={14} fill={MUTED}>
          {t("nPr vs nCr + the complement reflex cover the bulk of this subtopic's marks", "nPr vs nCr + complement reflex — is subtopic ke zyada marks")}
        </T>
      </Fade>
    </Scene>
  );
}
