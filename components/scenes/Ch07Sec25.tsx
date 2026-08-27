/**
 * Ch07 · Section 25 — "Pitfalls and pro-tips for gravitational field"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 21.57, 32.32, 49.38, 62.01, 73.11, 86.93]):
 *  0 title
 *  1 trap 1: shell vs solid inside (two lines)
 *  2 trap 2: field is a vector
 *  3 trap 3: zero field ≠ zero potential (two lines)
 *  4 trap 4: enclosed mass only
 *  5 green habit box: sketch E–r first
 *  6 amber pro-tip 1: −(4/3)πGρ·r interior
 *  7 amber pro-tip 2: outside point / inside enclosed
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  t1 bar y92..148, lines st x84 bl112 / 138 · t2 bar y168..196, bl188 ·
 *  t3 bar y218..272, bl238 / 264 · t4 bar y294..322, bl314
 *  b5 green box x140..940 y350..402, text bl382
 *  b6 bar y430..458, bl450 · b7 bar y480..508, bl500
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — closing the field part */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The field — four traps, one habit, two shortcuts",
            "Field — chaar traps, ek aadat, do shortcuts"
          )}
        </T>
      </Fade>

      {/* beat 1 — shell vs solid inside */}
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 66 94 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — confusing shell and solid INSIDE:",
            "trap 1 — shell aur solid ko ANDAR se confuse karna:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={84} y={138} size={13} fill={RED} script anchor="start">
          {t(
            "shell: E = 0 everywhere · solid: E = GMr ⁄ R³ rising — wrong graph, lost marks",
            "shell: E = 0 har jagah · solid: E = GMr ⁄ R³ badhta — galat graph, marks gaye"
          )}
        </T>
      </Fade>

      {/* beat 2 — field is a vector */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 66 170 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={188} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — field is a VECTOR: equal-opposite fields cancel — resolve first",
            "trap 2 — field ek VECTOR hai: barabar-ulti fields cancel — pehle resolve karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — zero field ≠ zero potential */}
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 66 220 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={238} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 (deep) — zero field ≠ zero potential: shell inside has E = 0 but V = −GM ⁄ R",
            "trap 3 (gehra) — zero field ≠ zero potential: shell ke andar E = 0 par V = −GM ⁄ R"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={264} size={13} fill={RED} script anchor="start">
          {t(
            "field is the SLOPE of potential — not its value",
            "field potential ka SLOPE hai — uski value nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — enclosed mass only */}
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 66 296 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={314} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — inside a sphere only the ENCLOSED mass pulls; outer shells do nothing",
            "trap 4 — sphere ke andar sirf ENCLOSED mass kheenchta hai; bahari shells kuch nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the one habit */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 152 350 h 776 q 12 0 12 12 v 28 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={540} y={382} size={14} fill={INK} weight={700}>
          {t(
            "the habit: sketch the E–r graph BEFORE answering any shell/sphere question",
            "aadat: kisi bhi shell/sphere sawaal se PEHLE E–r graph sketch karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip 1 */}
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 66 432 v 26" stroke={AMBER_DARK} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={450} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pro-tip 1 — uniform interior: E = −(4⁄3)πGρ·r — cracks every cavity problem",
            "pro-tip 1 — uniform interior: E = −(4⁄3)πGρ·r — har cavity problem crack"
          )}
        </T>
      </Fade>

      {/* beat 7 — pro-tip 2 */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 482 v 26" stroke={AMBER_DARK} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={500} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pro-tip 2 — outside = point mass · inside = enclosed mass only: one-line answers",
            "pro-tip 2 — outside = point mass · inside = sirf enclosed mass: one-line jawab"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
