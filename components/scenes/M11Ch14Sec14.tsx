/**
 * M11 Ch14 · Section 14 — "Common pitfalls and pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: tips — closes Subtopic 1.
 * Numbered-badge pitfall ladder + amber pro-tip closer (house motif).
 *
 * Beats (board_reveal_at_english [0,7.68,27.31,52.14,68.86,79.36,95.23]):
 *  0 heading
 *  1 (HIGH) Pitfall 1: outcome ≠ event — write {4} ✓, not 4 ✗
 *  2 Pitfall 2: mutually exclusive ⇏ exhaustive — test A∩B, A∪B separately
 *  3 Pitfall 3: mis-built S poisons every later event — draw the tree
 *  4 Pitfall 4: ME is NOT the same as independent (Class 12 trap ahead)
 *  5 formula: mutually exclusive ⇔ A∩B=∅ (about SETS, not probabilities)
 *  6 (HIGH) PRO-TIP: hunt for ONE common outcome — a search, not a calc
 *
 * Layout plan (badges cx=120, rows y130/172/214/256, text x150 start):
 *  b1 | badge "1" + mixed-color line (16)          | Fade/T | y119..141
 *  b2 | badge "2" + line (16, ink)                  | Fade/T | y161..183
 *  b3 | badge "3" + line (16, ink)                   | Fade/T | y203..225
 *  b4 | badge "4" + line (16, red)                    | Fade/T | y245..267
 *  b5 | boxed formula (15, ink)                        | Draw/T | x150..930 y292..324
 *  b6 | pro-tip card (amber, w780 h64, HIGH)             | Draw/T | x150..930 y350..414
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Badge({ on, delay, n }: { on: boolean; delay: number; n: number }) {
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={120} cy={-5 + [130, 172, 214, 256][n - 1]} r={14} fill={RED} />
      <T x={120} y={[130, 172, 214, 256][n - 1]} size={15} fill="#fff" weight={800}>
        {n}
      </T>
    </Fade>
  );
}

export default function M11Ch14Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("mutually exclusive is a search, not a calculation", "mutually exclusive ek search hai, calculation nahi")}
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
        <T x={150} y={130} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("Outcome ≠ event — write the event as ", "Outcome ≠ event — event ko likho ")}
          <TSpan fill={GREEN} fontWeight={800}>{"{4} ✓"}</TSpan>
          {", "}
          {t("not just", "na ki sirf")}
          {" "}
          <TSpan fill={RED} fontWeight={800}>{"4 ✗"}</TSpan>
        </T>
      </Fade>

      {/* pitfall 2 */}
      <Badge on={beat >= 2} delay={dl(2, 0.2)} n={2} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={150} y={172} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("Mutually exclusive ⇏ exhaustive — test A∩B and A∪B separately", "Mutually exclusive ⇏ exhaustive — A∩B aur A∪B alag test karo")}
        </T>
      </Fade>

      {/* pitfall 3 */}
      <Badge on={beat >= 3} delay={dl(3, 0.2)} n={3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={150} y={214} size={15.5} fill={INK} anchor="start" weight={600}>
          {t("A mis-built S poisons every later event — draw the tree", "Galat S banaya toh har event poison ho jaata hai — tree banao")}
        </T>
      </Fade>

      {/* pitfall 4 */}
      <Badge on={beat >= 4} delay={dl(4, 0.2)} n={4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={150} y={256} size={15.5} fill={RED} anchor="start" weight={700}>
          {t("Early warning: ME is NOT the same as independent (Class 12 trap)", "Warning: ME independent JAISA NAHI hai (Class 12 ka trap)")}
        </T>
      </Fade>

      {/* beat 5 — formula clarification */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={roundRectD(150, 292, 780, 34, 6)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={314} size={15} fill={INK} weight={700}>
          {"mutually exclusive ⇔ A ∩ B = ∅   (about SETS, not probabilities)"}
        </T>
      </Fade>

      {/* beat 6 — HIGH pro-tip closer */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={roundRectD(150, 350, 780, 64, 10)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={376} size={16} fill={AMBER_DARK} weight={800}>
          {t("PRO-TIP: hunt for ONE common outcome", "PRO-TIP: ek common outcome dhoondo")}
        </T>
        <T x={540} y={400} size={14} fill={INK} weight={600}>
          {t("that's a search, not a calculation", "yeh ek search hai, calculation nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
