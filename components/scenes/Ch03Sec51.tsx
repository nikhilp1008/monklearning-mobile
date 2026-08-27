/**
 * Ch03 · Section 51 — "The five pitfalls in projectile motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.4, 28.4, 46.3, 59.1, 73.3, 74.3, 86.3]):
 *  0 heading
 *  1 ① "velocity zero at the top"
 *  2 ② "acceleration zero at the top"
 *  3 ③ coupling the channels
 *  4 ④ mixing H and R formulas
 *  5 ⑤ uy = 0 for horizontal launch (title)
 *  6 the dropped-object detail
 *  7 the theme: sealed channels
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: circles cx100 r14 · titles st x130
 *  r1 | cy140 title bl 146 · sub bl 172
 *  r2 | cy215 title bl 221 · sub bl 247
 *  r3 | cy290 title bl 296 · sub bl 322
 *  r4 | cy365 title bl 371
 *  r5 | cy425 title bl 431 · b6 sub bl 457
 *  b7 | bar M66 500 v52 · lines st x84 bl 518 / 542 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function NumCircle({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${cy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={cy + 4.5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </>
  );
}

export default function Ch03Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "FIVE PITFALLS in projectile motion",
            "Projectile motion ke PAANCH PITFALLS"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① velocity zero at the top */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={14} fill={INK} weight={700} anchor="start">
          {t("“velocity is zero at the top”", "“top par velocity zero hoti hai”")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={130} y={172} size={12} fill={RED} script anchor="start">
          {t(
            "only the vertical part vanishes — u cosθ sails on, untouched",
            "sirf vertical hissa khatam hota hai — u cosθ waise hi behta rehta hai"
          )}
        </T>
      </Fade>

      {/* ② acceleration zero at the top */}
      <NumCircle on={beat >= 2} delay={dl(2, 0.6)} cy={215} n="2" />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={130} y={221} size={14} fill={INK} weight={700} anchor="start">
          {t("“acceleration is zero at the top”", "“top par acceleration zero hoti hai”")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={130} y={247} size={12} fill={RED} script anchor="start">
          {t(
            "it is ALWAYS g, downward — gravity never switches off, apex included",
            "woh HAMESHA g hai, neeche — gravity kabhi band nahi hoti, apex par bhi"
          )}
        </T>
      </Fade>

      {/* ③ coupling */}
      <NumCircle on={beat >= 3} delay={dl(3, 0.6)} cy={290} n="3" />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={130} y={296} size={14} fill={INK} weight={700} anchor="start">
          {t("coupling the two motions", "dono motions ko jod dena")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={130} y={322} size={12} fill={GREEN} script anchor="start">
          {t(
            "they share only TIME — never let one channel leak into the other's equation",
            "sirf TIME share hota hai — ek channel doosre ki equation mein na ghuse"
          )}
        </T>
      </Fade>

      {/* ④ mixing H and R */}
      <NumCircle on={beat >= 4} delay={dl(4, 0.6)} cy={365} n="4" />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={130} y={371} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "mixing the formulas: H uses sin²θ · R uses sin 2θ",
            "formulas milana: H mein sin²θ · R mein sin 2θ"
          )}
        </T>
      </Fade>

      {/* ⑤ horizontal launch */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={425} n="5" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={431} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "forgetting uy = 0 for a horizontal launch",
            "horizontal launch mein uy = 0 bhool jana"
          )}
        </T>
      </Fade>

      {/* beat 6 — the dropped-object detail */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={130} y={457} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "fired horizontally from a height → its fall is identical to a dropped object",
            "height se horizontal fire → uska girna gire hue object jaisa hi hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sealed channels */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "the pattern: every mistake is one channel leaking into the other",
            "pattern: har galti ek channel ka doosre mein risna hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={542} size={12} fill={INK} script anchor="start">
          {t(
            "keep the channels sealed, sharing only time — the whole family of errors dies",
            "channels ko seal rakho, sirf time share ho — galtiyon ka poora khandaan khatam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
