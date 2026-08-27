/**
 * M11 Ch05 · Section 24 — "The hard half is translation, not solving"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First section of subtopic 3 (Applications).
 *
 * Beats (en [0,16.73,29.44,50.26,59.9,79.96,92.59], hi
 * [0,14.42,27.31,45.91,53.16,73.64,85.85]):
 *  0 heading — TRANSLATE → SOLVE → INTERPRET, 3 boxes + arrows
 *  1 text: solving is easy, translating is hard — TRANSLATE ringed amber
 *  2 text: "at least/more than/no more than 80" → ≥/>/≤ 80, mini table
 *  3 note (red-margin, high): careless reading flips the entire answer
 *  4 text: Diwali sweet shop — 3 constraint chips (cost, boxes, sugar)
 *  5 text: each leaves a whole RANGE, never a single number
 *  6 text: spot the HIDDEN constraints never stated out loud
 *
 * Layout plan:
 *  b0 | 3 boxes + 2 arrows (18,ink)| Chip/Draw | x200/460/720 y130..180
 *  b1 | ring on TRANSLATE (amber)  | Draw  | ringD(290,155,104,37)
 *  b1 | caption (15,ink,scr)       | T mid | bl 238
 *  b2 | 3-row table (15,ink)       | T st  | x260/700 y278/316/354
 *  b3 | boxed guardrail (14,red)   | Chip  | x180..900 y385..429
 *  b4 | 3 constraint chips         | Chip  | y455..499 x160/430/700
 *  b5 | caption (15,ink,scr)       | T mid | bl 535
 *  b6 | caption (15,ink,scr)       | T mid | bl 578
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, MUTED, AMBER, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch05Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("translating is the real test — solving is easy", "translate karna hi asli test hai — solve karna easy hai")}
        </T>
      </Fade>

      {/* beat 0 — the three-step framework */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={200} y={130} w={180} h={50} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          TRANSLATE
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.8)} d={arrowD(388, 155, 452, 155)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <Chip x={460} y={130} w={180} h={50} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          SOLVE
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d={arrowD(648, 155, 712, 155)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <Chip x={720} y={130} w={180} h={50} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          INTERPRET
        </Chip>
      </Fade>

      {/* beat 1 — translate is the hard half */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(290, 155, 104, 37)} stroke={AMBER} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={238} size={15} fill={INK} script>
          {t("solving is the easy half — translating is the hard half", "solve karna easy half hai — translate karna hard half hai")}
        </T>
      </Fade>

      {/* beat 2 — the translation dictionary */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={260} y={278} size={15} fill={INK} anchor="start">
          {t("'at least 80'", "'at least 80'")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={700} y={278} size={15} fill={INK} weight={700} anchor="start">
          ≥ 80
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={260} y={316} size={15} fill={INK} anchor="start">
          {t("'more than 80'", "'more than 80'")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={700} y={316} size={15} fill={INK} weight={700} anchor="start">
          &gt; 80
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={260} y={354} size={15} fill={INK} anchor="start">
          {t("'no more than 80'", "'no more than 80'")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={700} y={354} size={15} fill={INK} weight={700} anchor="start">
          ≤ 80
        </T>
      </Fade>

      {/* beat 3 — the guardrail */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={180} y={385} w={720} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "a careless reading of the comparison word flips the ENTIRE answer",
            "comparison word ki careless reading POORA answer flip kar deti hai"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the Diwali sweet shop */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={160} y={455} w={220} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          cost ≤ ₹5000
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Chip x={430} y={455} w={220} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          boxes ≥ 200
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={700} y={455} w={220} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          sugar &lt; 60 kg
        </Chip>
      </Fade>

      {/* beat 5 — a range, never a single number */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={535} size={15} fill={INK} script>
          {t(
            "each leaves a whole RANGE of legal choices — never a single number",
            "har ek RANGE chodta hai legal choices ki — kabhi ek number nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the quieter second skill */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={578} size={15} fill={INK} script>
          {t(
            "a quieter skill: spot the HIDDEN constraints never stated out loud",
            "ek quiet skill: HIDDEN constraints dhoondo jo bole nahi jaate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
