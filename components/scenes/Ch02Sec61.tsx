/**
 * Ch02 · Section 61 — "Terminal velocity: what a = f(v) gives you for free"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.8, 27.7, 45.4, 63.4, 83.1, 101, 125.9]):
 *  0 title
 *  1 the drop: gravity down, drag up (grows with v)
 *  2 card: a = g − k·v
 *  3 graph: steep start, flattening curve
 *  4 note: drag cancels g — stops speeding up
 *  5 v_t = g/k card + red dashed asymptote
 *  6 red note: no integration — one question
 *  7 green: the boundary is sometimes all you wanted
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  drop c(180,170) r10 · gravity (180,186)→(180,248) "g" st (196,222) ·
 *  drag (180,154)→(180,96) "drag ∝ v" st (196,118)
 *  b2 card x340..760 y90..150 (bl 118 · sub bl 140)
 *  graph: axes o(390,400)→(1000,400)/(390,200) · curve M400,390 → 980,222 ·
 *  asymptote y218 dashed (b5) · "v_t" end (382,222)
 *  b4 note st x430 bl 462 · b5 card x70..320 y300..370 (bl 340)
 *  b6 | bar x66 y490..544 · lines st x84 bl 508 / 534
 *  b7 | bar x56 y560..594 · line st x72 bl 582
 */

import React from "react";
import { Path } from 'react-native-svg';
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

export default function Ch02Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a taste of the payoff */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "terminal velocity — why skydivers stop speeding up",
            "terminal velocity — skydiver aur tez kyun nahi hota"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two hands on the drop */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 170 170 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d={arrowD(180, 186, 180, 248)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={196} y={222} size={13} fill={RED} anchor="start" weight={700}>
          g
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d={arrowD(180, 154, 180, 96)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={196} y={118} size={13} fill={GREEN} script anchor="start">
          {t("drag — grows with v", "drag — v ke saath badhta")}
        </T>
      </Fade>

      {/* beat 2 — the model */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 352 90 h 396 q 12 0 12 12 v 36 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={550} y={122} size={22} fill={INK} weight={800}>
          a = g − k·v
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={880} y={122} size={11} fill={MUTED} script anchor="start">
          {t("a depends on v", "a, v par nirbhar")}
        </T>
      </Fade>

      {/* beat 3 — the flattening curve */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(390, 400, 1000, 400)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={arrowD(390, 400, 390, 200)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={1012} y={406} size={13} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={384} y={190} size={13} fill={INK} weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.4)}
        d="M 400 390 C 500 300, 560 260, 700 240 C 800 228, 900 224, 980 222"
        stroke={INK}
        sw={2.6}
        dur={1.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={520} y={280} size={11} fill={MUTED} script>
          {t("steep, then flattening", "pehle teekhi, phir samtal")}
        </T>
      </Fade>

      {/* beat 4 — the cancellation */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={430} y={462} size={12} fill={INK} script anchor="start">
          {t(
            "drag climbs until it exactly cancels g: a → 0 — she stops speeding up",
            "drag tab tak badhta hai jab tak g ko theek kaat de: a → 0 — raftaar badhna band"
          )}
        </T>
      </Fade>

      {/* beat 5 — the one-line answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 82 300 h 226 q 12 0 12 12 v 46 q 0 12 -12 12 h -226 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={195} y={340} size={20} fill={INK} weight={800}>
          v_t = g ⁄ k
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Path
          d="M 390 218 H 1000"
          fill="none"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="8 6"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={382} y={222} size={12} fill={RED} anchor="end" weight={700}>
          v_t
        </T>
      </Fade>

      {/* beat 6 — genuinely lovely */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 490 v 54" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={508} size={13} fill={RED} script anchor="start">
          {t(
            "no integration, no differential equation, no v(t) —",
            "na integration, na differential equation, na v(t) —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={534} size={13} fill={RED} script anchor="start">
          {t(
            "one question — when does a vanish? — and one line of algebra",
            "ek sawaal — a kab shunya hota hai? — aur algebra ki ek line"
          )}
        </T>
      </Fade>

      {/* beat 7 — the boundary was the point */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 560 v 34" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={582} size={13} fill={GREEN} script anchor="start">
          {t(
            "a limiting condition — not the whole story, but the boundary it approaches; sometimes that is all you wanted",
            "ek limiting condition — poori kahaani nahi, par jis kinaare tak woh pahunchti hai; kabhi wahi kaafi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
