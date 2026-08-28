/**
 * Ch04 · Section 42 — "Worked Example 1 [CBSE Board]: one block, three pushes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 31.7, 56.6, 65.0, 85.3, 105.1, 129.4]):
 *  0 title
 *  1 problem + find
 *  2 threshold box: f_max = 8 N + decides-everything note
 *  3 three case cards (outlines + headers)
 *  4 card (a): 5 < 8, doesn't move, f = 5 N
 *  5 card (b): 8 = 8, verge, f = 8 N (only true μsN case)
 *  6 card (c): 12 > 8, slides, f_k = 6 N (12 never used)
 *  7 red margin: 5, 8, 6 — the drop is the lurch
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 box x120..560 y150..194 bl 178 · note st x580 bl 178
 *  cards y230..415 at x80/x400/x720 w300 · hdr bl 258 · compare bl 300 ·
 *    result box y330..368 bl 354 · note bl 395
 *  b7 | bar x66 y460..560 · lines st x84 bl 480 / 506 / 532
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function card(x: number) {
  return `M ${x + 12} 230 h 276 q 12 0 12 12 v 161 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -161 q 0 -12 12 -12`;
}

function resultBox(cx: number, w: number) {
  const x = cx - w / 2;
  return `M ${x + 12} 330 h ${w - 24} q 12 0 12 12 v 14 q 0 12 -12 12 h -${w - 24} q -12 0 -12 -12 v -14 q 0 -12 12 -12`;
}

export default function Ch04Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — one block, three pushes",
            "Example 1 [CBSE Board] — ek block, teen dhakke"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "2 kg on a rough horizontal floor · μs = 0.4 · μk = 0.3 · g = 10",
            "rough horizontal farsh par 2 kg · μs = 0.4 · μk = 0.3 · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find the friction when P = (a) 5 N (b) 8 N (c) 12 N",
            "friction nikaalo jab P = (a) 5 N (b) 8 N (c) 12 N"
          )}
        </T>
      </Fade>

      {/* beat 2 — the threshold */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 132 150 h 416 q 12 0 12 12 v 20 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={340} y={178} size={15} fill={INK} weight={800}>
          {t("FIRST: f_max = μs·mg = 0.4×2×10 = 8 N", "PEHLE: f_max = μs·mg = 0.4×2×10 = 8 N")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={580} y={178} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "this ONE number decides all three cases",
            "yahi EK number teeno cases tay karta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the three cards */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={card(80)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={card(400)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={card(720)} stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={230} y={258} size={14} fill={INK} weight={700}>
          (a) P = 5 N
        </T>
        <T x={550} y={258} size={14} fill={INK} weight={700}>
          (b) P = 8 N
        </T>
        <T x={870} y={258} size={14} fill={INK} weight={700}>
          (c) P = 12 N
        </T>
      </Fade>

      {/* beat 4 — case (a) */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={230} y={300} size={13} fill={AMBER_DARK} script>
          {t("5 < 8 → does NOT move", "5 < 8 → hilta hi NAHI")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d={resultBox(230, 170)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={230} y={354} size={15} fill={INK} weight={800}>
          f = 5 N
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={230} y={395} size={11} fill={GREEN} script>
          {t("it matches you — not 8!", "aapki barabari — 8 nahi!")}
        </T>
      </Fade>

      {/* beat 5 — case (b) */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={550} y={300} size={13} fill={AMBER_DARK} script>
          {t("8 = 8 → on the VERGE", "8 = 8 → theek KAGAR par")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 4)}
        d={resultBox(550, 200)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={550} y={354} size={15} fill={INK} weight={800}>
          f = 8 N = μs·N
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={550} y={395} size={11} fill={GREEN} script>
          {t("the ONLY true μsN case here", "yahi EKLAUTA sachcha μsN case")}
        </T>
      </Fade>

      {/* beat 6 — case (c) */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={870} y={300} size={13} fill={RED} script>
          {t("12 > 8 → it SLIDES", "12 > 8 → sarak jaata hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={resultBox(870, 220)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={870} y={354} size={15} fill={INK} weight={800}>
          f_k = μk·mg = 6 N
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={870} y={395} size={11} fill={RED} script>
          {t("the 12 is never used again", "12 dobara istemaal hi nahi hota")}
        </T>
      </Fade>

      {/* beat 7 — the sequence */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 460 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "the sequence 5 N, 8 N, 6 N — friction is NOT μs·N until the verge",
            "kram 5 N, 8 N, 6 N — friction KAGAR tak μs·N NAHI hoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={506} size={14} fill={RED} script anchor="start">
          {t(
            "between (b) and (c) friction DROPPED, 8 → 6, the instant motion began",
            "(b) aur (c) ke beech friction GIRI, 8 → 6, jaise hi motion shuru hui"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={532} size={14} fill={GREEN} script anchor="start">
          {t(
            "that drop is the almirah's little lurch",
            "wahi girawat almirah ka chhota jhatka hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
