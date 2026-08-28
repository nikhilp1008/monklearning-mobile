/**
 * Ch04 · Section 83 — "Derivation: critical speeds on a string"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 27.39, 52.22, 77.06, 98.47, 123.31, 148.14]):
 *  0 title
 *  1 setup: mass m on string length r, vertical circle, find v_min to complete loop
 *  2 diagram (left): circle, T=0 at top, T & mg at bottom, caption
 *  3 formula (right): top: T+mg=mv²_top/r, string can't push → T=0
 *  4 formula (right): mg=mv²_top/r → v_top,min=√gr
 *  5 formula (right): v_bottom²=v_top²+4gr=gr+4gr → v_bottom,min=√5gr
 *  6 hero box: T_bottom − T_top = 6mg
 *  7 red margin: holds at ANY speed, not just minimum — one-line check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  L fig | circle c(280,255) r65 · T=0 squiggle top · mg arr top(280,190→215) lbl(295,208) ·
 *    T arr bot(280,320→297) lbl(270,287) · mg arr bot(305,318→343) lbl(313,343) · caption cx280 bl 365
 *  R col x600..1020 | b3 bl 150 / 172(note) · b4 bl 210 · b5 bl 250 / 272
 *  b6 box x260..820 y400..444 bl 428
 *  b7 | bar x66 y460..530 · lines st x84 bl 480 / 506
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec83({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "CBSE Derivation — the string loop, and the 6mg bonus",
            "CBSE Derivation — string loop, aur 6mg bonus"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "mass m on a string of length r, moving in a vertical circle",
            "vertical circle mein chalti, r lambaai ki string par mass m"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: minimum speed to just complete the loop", "nikaalo: loop poora karne ki minimum speed")}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={circleD(280, 255, 65)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 280 190 q 15 -8 8 -20 q -15 6 -6 20"
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={280} y={158} size={11} fill={RED} weight={700}>
          T = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d={arrowD(280, 190, 280, 215)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={295} y={208} size={11} fill={GREEN} weight={700} anchor="start">
          mg = mv²⁄r
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d={arrowD(280, 320, 280, 297)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d={arrowD(305, 318, 305, 343)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={270} y={287} size={11} fill={GREEN} weight={700} anchor="end">
          T
        </T>
        <T x={313} y={343} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={280} y={365} size={11} fill={MUTED} script>
          {t(
            "T = 0 at the top, then energy conservation to the bottom",
            "top par T = 0, phir bottom tak energy conservation"
          )}
        </T>
      </Fade>

      {/* beat 3 — top equation, T=0 */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={150} size={14} fill={INK} weight={700} anchor="start">
          top: T + mg = mv²_top⁄r
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={600} y={172} size={11} fill={MUTED} script anchor="start">
          {t("string can't push → T = 0", "string dhakel nahi sakti → T = 0")}
        </T>
      </Fade>

      {/* beat 4 — v_top,min */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={210} size={14} fill={INK} weight={700} anchor="start">
          mg = mv²_top⁄r → v_top,min = √gr
        </T>
      </Fade>

      {/* beat 5 — v_bottom,min */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={600} y={250} size={13} fill={INK} weight={700} anchor="start">
          v²_bottom = v²_top + 4gr = gr+4gr
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={600} y={272} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          → v_bottom,min = √5gr
        </T>
      </Fade>

      {/* beat 6 — the 6mg bonus */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 260 400 h 560 q 12 0 12 12 v 22 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={428} size={17} fill={INK} weight={800}>
          T_bottom − T_top = 6mg
        </T>
      </Fade>

      {/* beat 7 — holds at any speed */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 460 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "holds at ANY speed on the circle, not just the minimum",
            "circle par KISI bhi speed par lagta, sirf minimum par nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={506} size={14} fill={GREEN} script anchor="start">
          {t(
            "check: tensions don't differ by 6mg? recheck your arithmetic",
            "check: tensions mein 6mg ka fark nahi? arithmetic dobara dekho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
