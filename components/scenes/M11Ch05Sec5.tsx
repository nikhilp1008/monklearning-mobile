/**
 * M11 Ch05 · Section 5 — "Proof: why dividing by a negative reverses the sign"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,10.33,20.65,28.42,37.63,46.17,59.48,66.73], hi
 * [0,8.28,18.52,26.88,35.93,43.01,57.77,65.54]) — a single accumulating proof,
 * nothing erased (a real handwritten proof stays on the board):
 *  0 heading — "PROOF" label + underline
 *  1 text: order means b-a positive (setup caption)
 *  2 formula (boxed): a < b ⇔ b - a > 0
 *  3 text: take any c < 0, positive×negative=negative (setup caption)
 *  4 formula (boxed, high): c(b - a) < 0
 *  5 text (promoted to formula row): cb-ca<0 ⇒ cb<ca ⇒ ca>cb
 *  6 formula (high): a < b   but   ca > cb  (the flip, "but"+red)
 *  7 note (red-margin, high): boxed conclusion + ∎
 *
 * Layout plan:
 *  b0 | "PROOF" (15,muted,w800)    | T mid  | x505..575 y93..106 (bl 105)
 *  b0 | underline                  | Draw   | x505..575 y112
 *  b1 | caption (16,muted,scr)     | T mid  | x340..740 y138..155 (bl 150)
 *  b2 | boxed formula (22,ink)     | Chip   | x400..680 y180..230
 *  b3 | caption (16,muted,scr)     | T mid  | x290..790 y260..273 (bl 272)
 *  b4 | boxed formula (22,ink)     | Chip   | x430..650 y300..350
 *  b5 | formula (20,ink,w700)      | T mid  | x330..750 y381..396 (bl 395)
 *  b6 | "a<b"/"but"/"ca>cb" (24/18)| T st   | x440.. y427..452 (bl 445)
 *  b7 | boxed conclusion (19,red)  | Chip   | x290..790 y490..546
 *  b7 | "Q.E.D." (17,red,w800)     | T mid  | x810  y508..524 (bl 520)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, AMBER, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch05Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t(
            "the flip isn't a convention — it's a proof",
            "flip koi convention nahi — yeh ek proof hai"
          )}
        </T>
      </Fade>

      {/* beat 0 — proof header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={105} size={15} fill={MUTED} weight={800}>
          PROOF
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.8)} d={lineD(505, 112, 575, 112)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — what order means */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={150} size={16} fill={MUTED} script>
          {t("start from what order actually means", "order ka matlab yahi hai — wahi se shuru")}
        </T>
      </Fade>

      {/* beat 2 — a < b ⇔ b - a > 0 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={400} y={180} w={280} h={50} fill={CREAM} stroke={AMBER} textFill={INK} size={22} script={false}>
          a &lt; b ⇔ b - a &gt; 0
        </Chip>
      </Fade>

      {/* beat 3 — take any negative c */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={272} size={16} fill={MUTED} script>
          {t(
            "now take any negative c — positive × negative = negative",
            "ab koi bhi negative c lo — positive × negative = negative"
          )}
        </T>
      </Fade>

      {/* beat 4 — c(b - a) < 0 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={430} y={300} w={220} h={50} fill={CREAM} stroke={AMBER} textFill={INK} size={22} script={false}>
          c(b - a) &lt; 0
        </Chip>
      </Fade>

      {/* beat 5 — distribute, chase the inequality */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={395} size={20} fill={INK} weight={700}>
          cb - ca &lt; 0 ⇒ cb &lt; ca ⇒ ca &gt; cb
        </T>
      </Fade>

      {/* beat 6 — the flip: a<b but ca>cb */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={440} y={445} size={24} fill={INK} weight={800} anchor="start">
          a &lt; b
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={515} y={445} size={18} fill={MUTED} anchor="start">
          {t("but", "par")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={557} y={445} size={24} fill={RED} weight={800} anchor="start">
          ca &gt; cb
        </T>
      </Fade>

      {/* beat 7 — the direction genuinely flipped */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={290} y={490} w={500} h={56} fill={CREAM} stroke={RED} textFill={RED} size={19}>
          {t(
            "a < b ⇒ ca > cb — the direction flipped",
            "a < b ⇒ ca > cb — direction flip ho gaya"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={810} y={520} size={17} fill={RED} weight={800}>
          Q.E.D.
        </T>
      </Fade>
    </Scene>
  );
}
