/**
 * M11 Ch01 · Section 2 — "Two ways to describe a set: roster and set-builder"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 9.56, 24.92, 41.22, 53.33, 69.8, 81.92]):
 *  0 title (always-on)
 *  1 REPRESENT: roster form built token by token: {2, 4, 6} + label
 *  2 REPRESENT: set-builder form built token by token: A = {x : P(x)} + label
 *  3 GUARDRAIL: colon reads "such that" (colon highlighted red + inline gloss)
 *  4 why both: roster attempt at "all even numbers" trails into dots vs
 *    set-builder "{x : x is even}" — one line, done
 *  5 dots are only a hint, never a true list (ring the "…")
 *  6 LAND: roster lists every YES; set-builder writes the YES/NO question
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | roster tokens ×3 "{2, "/"4, "/"6}" | T st | x100/164/212 y135 (bl 135)
 *  b1 | "roster (tabular) form"       | T st script | x100 y172 (bl 172)
 *  b2 | set-builder tokens ×3         | T st | x100/208/224/318(colon split for b3) y215
 *  b2 | "set-builder form"            | T st script | x100 y253 (bl 253)
 *  b3 | colon → RED weight800 (same token, recolored)
 *  b3 | "= “such that”"               | T st (red) | x340 y215 (bl 215)
 *  b4 | roster-attempt tokens (split) | T st | x100/300/314 y300 (bl 300)
 *  b4 | "endless — roster can’t finish" | T st script red | x100 y340 (bl 340)
 *  b4 | set-builder result "{x : x is even}" | T mid green | x520 y400 (bl 400)
 *  b4 | "captures infinity in ONE line" | T mid script green | x520 y440 (bl 440)
 *  b5 | ring around "…" (tok2 of b4 roster-attempt) | Draw | c(307,296) rx20 ry17
 *  b5 | "hint only — never a true list" | T st script red | x360 y310 (bl 310)
 *  b6 | verdict box (green)            | rect+T | x140..940 y495..570
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={30} fill={RED} script>
          {t("two languages for one set", "ek set, do languages")}
        </T>
      </Fade>

      {/* beat 1 — roster form */}
      {[
        { s: "{2, ", x: 100 },
        { s: "4, ", x: 164 },
        { s: "6}", x: 212 },
      ].map((tok, i) => (
        <Fade key={tok.s} on={beat >= 1} delay={dl(1, 0.3 + i * 0.7)}>
          <T x={tok.x} y={135} size={28} fill={INK} anchor="start" weight={800}>
            {tok.s}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={100} y={172} size={16} fill={AMBER_DARK} script anchor="start">
          {t("roster (tabular) form — list every member", "roster (tabular) form — har member likho")}
        </T>
      </Fade>

      {/* beat 2 — set-builder form (tokenised so beat 3 can isolate the colon) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={215} size={24} fill={INK} anchor="start" weight={800}>
          {"A = { x "}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={208} y={215} size={24} fill={beat >= 3 ? RED : INK} anchor="start" weight={800}>
          {":"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={224} y={215} size={24} fill={INK} anchor="start" weight={800}>
          {"P(x) }"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={100} y={253} size={16} fill={AMBER_DARK} script anchor="start">
          {t("set-builder form — state the rule", "set-builder form — rule likho")}
        </T>
      </Fade>

      {/* beat 3 — the colon reads "such that" */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={340} y={215} size={18} fill={RED} anchor="start" weight={700}>
          {t("= “such that”", "= “such that”")}
        </T>
      </Fade>

      {/* beat 4 — why keep both: same set, roster trails off vs one clean rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={100} y={300} size={22} fill={INK} anchor="start" weight={700}>
          {"{2, 4, 6, 8, 10, "}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={300} y={300} size={22} fill={INK} anchor="start" weight={700}>
          {"…"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={314} y={300} size={22} fill={INK} anchor="start" weight={700}>
          {"}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={100} y={340} size={15} fill={RED} script anchor="start">
          {t("endless — roster can’t finish", "endless — roster kabhi khatam nahi hota")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={520} y={400} size={24} fill={GREEN} weight={800}>
          {"{x : x is even}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={520} y={440} size={16} fill={GREEN} script>
          {t("captures infinity in ONE line", "infinity ko ek hi line mein pakadta hai")}
        </T>
      </Fade>

      {/* beat 5 — dots are only a hint, never a true list */}
      <Draw
        on={beat >= 5}
        d={ringD(307, 296, 20, 17)}
        stroke={RED}
        sw={2.4}
        delay={dl(5, 0.4)}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={360} y={310} size={15} fill={RED} script anchor="start">
          {t("hint only — never a true list", "sirf hint — kabhi bhi puri list nahi")}
        </T>
      </Fade>

      {/* beat 6 — LAND */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={140} y={495} width={800} height={75} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={525} size={18} fill={INK} weight={700}>
          {t("roster lists every YES.", "roster har YES ko list karta hai.")}
        </T>
        <T x={540} y={552} size={19} fill={GREEN} weight={800}>
          {t("set-builder writes the YES/NO question itself.", "set-builder khud YES/NO sawaal likhta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
