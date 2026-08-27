/**
 * Ch02 · Section 37 — "The three equations and their companions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 23.2, 36.7, 50.4, 75.2, 96.9, 113.2, 138]):
 *  0 title
 *  1 card ①: v = u + at
 *  2 card ②: s = ut + ½at²
 *  3 card ③: v² = u² + 2as
 *  4 symbols panel (right) with sign reminder
 *  5 companion 1: average-velocity form
 *  6 companion 2: nth-second with u
 *  7 red note: pick by what's withheld
 *  8 red note: constant a or invalid
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  eq cards x80..520: y90..160 / y170..240 / y250..320 (formula bl 122/202/282 ·
 *  notes bl 146/226/306)
 *  symbols box x560..1030 y90..320: lines st x580 bl 120..232 step 28 · amber bl 264
 *  companions: x80..520 & x560..1030 y345..415 (formula bl 378 · note bl 402)
 *  b7 | bar x66 y440..500 · lines st x84 bl 460 / 486
 *  b8 | bar x66 y518..570 · lines st x84 bl 538 / 562
 */

import React from "react";
import { G } from 'react-native-svg';
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

function EqCard({
  on,
  d1,
  d2,
  y,
  formula,
  note,
}: {
  on: boolean;
  d1: number;
  d2: number;
  y: number;
  formula: string;
  note: string;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={d1}
        d={`M 92 ${y} h 416 q 12 0 12 12 v 46 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -46 q 0 -12 12 -12`}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={on} delay={d1 + 0.8}>
        <T x={300} y={y + 32} size={20} fill={INK} weight={800}>
          {formula}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={300} y={y + 56} size={11} fill={MUTED} script>
          {note}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch02Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — gathered together */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the three equations, side by side",
            "teeno equations, ek saath aamne-saamne"
          )}
        </T>
      </Fade>

      {/* beats 1–3 — the three cards */}
      <EqCard
        on={beat >= 1}
        d1={dl(1, 0.8)}
        d2={dl(1, 4)}
        y={90}
        formula="① v = u + at"
        note={t("from the definition — two lines", "definition se — do lines")}
      />
      <EqCard
        on={beat >= 2}
        d1={dl(2, 0.8)}
        d2={dl(2, 4)}
        y={170}
        formula="② s = ut + ½at²"
        note={t("from the area under v-t", "v-t ke area se")}
      />
      <EqCard
        on={beat >= 3}
        d1={dl(3, 0.8)}
        d2={dl(3, 4)}
        y={250}
        formula="③ v² = u² + 2as"
        note={t("time eliminated by the chain rule", "chain rule se samay hataya")}
      />

      {/* beat 4 — the symbols, unambiguous */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 572 90 h 446 q 12 0 12 12 v 206 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -206 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={580} y={120} size={12} fill={INK} script anchor="start">
          {t("u — initial velocity (m/s)", "u — shuruaati velocity (m/s)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={580} y={148} size={12} fill={INK} script anchor="start">
          {t("v — final velocity (m/s)", "v — aakhri velocity (m/s)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={580} y={176} size={12} fill={INK} script anchor="start">
          {t("a — CONSTANT acceleration (m/s²)", "a — CONSTANT acceleration (m/s²)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={580} y={204} size={12} fill={INK} script anchor="start">
          {t("t — time elapsed (s)", "t — beeta samay (s)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={580} y={232} size={12} fill={INK} script anchor="start">
          {t("s — DISPLACEMENT, not distance (m)", "s — DISPLACEMENT, distance nahi (m)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={580} y={264} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "s carries a sign — sub-topic 1's convention rides along",
            "s sign ke saath chalta hai — sub-topic 1 ki convention saath hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — companion 1 */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 92 345 h 416 q 12 0 12 12 v 46 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={300} y={378} size={16} fill={INK} weight={700}>
          s = ((u + v) ⁄ 2) · t
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={300} y={402} size={11} fill={MUTED} script>
          {t(
            "average velocity × time — fastest with both v's and t",
            "average velocity × samay — dono v aur t ho to sabse tez"
          )}
        </T>
      </Fade>

      {/* beat 6 — companion 2 */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 345 h 446 q 12 0 12 12 v 46 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={795} y={378} size={16} fill={INK} weight={700}>
          s (nth s) = u + (a⁄2)(2n − 1)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={795} y={402} size={11} fill={MUTED} script>
          {t(
            "keeps u — set u = 0 to recover Galileo's odd numbers",
            "u rakha hai — u = 0 karo to Galileo ke odd numbers"
          )}
        </T>
      </Fade>

      {/* beat 7 — one decision */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 440 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={460} size={14} fill={RED} script anchor="start">
          {t(
            "pick by what the question WITHHOLDS: ① no s · ② no v · ③ no t",
            "sawaal jo ROKTA hai usi se chuno: ① s nahi · ② v nahi · ③ t nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={486} size={14} fill={RED} script anchor="start">
          {t(
            "find the quantity neither given nor asked — use the equation without it",
            "jo cheez na di hai na poochhi — usi ke bina waala equation lo"
          )}
        </T>
      </Fade>

      {/* beat 8 — the stamp, again */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 518 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={538} size={13} fill={RED} script anchor="start">
          {t(
            "all three require CONSTANT a — if a varies they are not approximate, they are INVALID",
            "teeno ko CONSTANT a chahiye — a badla to yeh approximate nahi, INVALID hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={562} size={13} fill={RED} script anchor="start">
          {t(
            "no partial credit outside the domain — and exams test exactly this",
            "domain ke bahar koi partial credit nahi — aur exams yahi poochhte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
