/**
 * M11 Ch01 · Section 4 — "The standard number sets and their nesting"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 11.52, 26.88, 43.43, 57.77, 70.49, 89.77]):
 *  0 title (always-on)
 *  1 N = {1,2,3,…} naturals; W = {0,1,2,…} wholes
 *  2 Z = {…,-2,-1,0,1,2,…} integers; Q = {p/q : p,q∈Z, q≠0} rationals
 *  3 R = reals (the full line); T = R − Q irrationals
 *  4 build the chain N ⊂ W ⊂ Z ⊂ Q ⊂ R token by token
 *  5 REPRESENT: NestedSets diagram (defs+chain erased, diagram takes the board),
 *    √2/π marked in the R∖Q band
 *  6 GUARDRAIL (story band, above the diagram): universe decides the answer —
 *    {x:x²=2} empty over N, doubleton over R
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "N = {1,2,3,…}" / "W = {0,1,2,…}" | T st (22) | x100/560 y130
 *  b2 | "Z = {…,-2,-1,0,1,2,…}" / "Q = {p/q:p,q∈Z,q≠0}" | T st (19) | x100/560 y174
 *  b3 | "R = reals…" / "T = R − Q…"        | T st (17) | x100/560 y216
 *  b4 | chain N⊂W⊂Z⊂Q⊂R ×9 tokens (28,mid) | T mid | x320..760 y300 step55
 *  b4 | "each is a subset of the next"     | T mid script | x540 y345
 *  b5 | NestedSets R,Q,Z,W,N (staggered)   | NestedSets | c(430,350) outer620×340
 *  b5 | "T = irrationals" / "= R − Q" / "e.g. √2, π" | T st | x820 y170/195/220
 *  b5 | arrow into R∖Q band + "√2"/"π" markers | Draw+T | tip(725,240); (718,300)/(400,510)
 *  b6 | "{x : x² = 2}"                     | T st (19) | x300 y104
 *  b6 | chip "empty over N ✗" / "doubleton over R ✓" | Chip | x100/380 y122 w240/260 h36
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { NestedSets } from "./math-kit";

const CHAIN = [
  { s: "N", op: false },
  { s: "⊂", op: true },
  { s: "W", op: false },
  { s: "⊂", op: true },
  { s: "Z", op: false },
  { s: "⊂", op: true },
  { s: "Q", op: false },
  { s: "⊂", op: true },
  { s: "R", op: false },
];

export default function M11Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const showDefs = beat >= 1 && beat < 5;
  const nestOn = [beat >= 5, beat >= 5, beat >= 5, beat >= 5, beat >= 5];
  const nestDelays = [0.2, 1.0, 1.8, 2.6, 3.4].map((d) => dl(5, d));

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={28} fill={RED} script>
          {t("the universes you’ll meet everywhere", "universes jo hamesha milenge")}
        </T>
      </Fade>

      {/* beat 1 — N, W */}
      <Fade on={showDefs} delay={dl(1, 0.3)}>
        <T x={100} y={130} size={22} fill={INK} anchor="start" weight={700}>
          {"N = {1, 2, 3, …}"}
        </T>
      </Fade>
      <Fade on={showDefs} delay={dl(1, 1.2)}>
        <T x={560} y={130} size={22} fill={INK} anchor="start" weight={700}>
          {"W = {0, 1, 2, …}"}
        </T>
      </Fade>

      {/* beat 2 — Z, Q */}
      <Fade on={showDefs && beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={174} size={19} fill={INK} anchor="start" weight={700}>
          {"Z = {…, -2, -1, 0, 1, 2, …}"}
        </T>
      </Fade>
      <Fade on={showDefs && beat >= 2} delay={dl(2, 1.2)}>
        <T x={560} y={174} size={18} fill={INK} anchor="start" weight={700}>
          {"Q = {p/q : p, q ∈ Z, q ≠ 0}"}
        </T>
      </Fade>

      {/* beat 3 — R, T */}
      <Fade on={showDefs && beat >= 3} delay={dl(3, 0.3)}>
        <T x={100} y={216} size={17} fill={INK} anchor="start" weight={700}>
          {t("R = reals (the full number line)", "R = reals (poori number line)")}
        </T>
      </Fade>
      <Fade on={showDefs && beat >= 3} delay={dl(3, 1.2)}>
        <T x={560} y={216} size={16} fill={INK} anchor="start" weight={700}>
          {t("T = R − Q (reals, not rational)", "T = R − Q (reals, rational nahi)")}
        </T>
      </Fade>

      {/* beat 4 — build the nesting chain */}
      {CHAIN.map((tok, i) => (
        <Fade key={i} on={showDefs && beat >= 4} delay={dl(4, 0.3 + i * 0.35)}>
          <T x={320 + i * 55} y={300} size={28} fill={tok.op ? AMBER_DARK : INK} weight={800}>
            {tok.s}
          </T>
        </Fade>
      ))}
      <Fade on={showDefs && beat >= 4} delay={dl(4, 4.2)}>
        <T x={540} y={345} size={16} fill={MUTED} script>
          {t("each is a subset of the next", "har ek agle ka subset hai")}
        </T>
      </Fade>

      {/* beat 5 — REPRESENT: the nested-set diagram */}
      <NestedSets
        on={nestOn}
        delays={nestDelays}
        cx={430}
        cy={350}
        levels={["R", "Q", "Z", "W", "N"]}
        stroke={INK}
        labelFill={INK}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={820} y={170} size={17} fill={RED} anchor="start" weight={700}>
          {t("T = irrationals", "T = irrationals")}
        </T>
        <T x={820} y={195} size={15} fill={RED} anchor="start">
          {"= R − Q"}
        </T>
        <T x={820} y={220} size={14} fill={MUTED} script anchor="start">
          {t("e.g. √2, π", "jaise √2, π")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        d={arrowD(818, 232, 727, 238)}
        stroke={RED}
        sw={2}
        delay={dl(5, 5)}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={718} y={304} size={14} fill={RED} weight={700}>
          {"√2"}
        </T>
        <T x={400} y={514} size={14} fill={RED} weight={700}>
          {"π"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: the universe decides the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={300} y={104} size={19} fill={INK} anchor="start" weight={700}>
          {"{x : x² = 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={100} y={122} w={240} h={36} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          {t("empty over N ✗", "N par empty ✗")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Chip x={380} y={122} w={260} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          {t("doubleton over R ✓", "R par doubleton ✓")}
        </Chip>
      </Fade>
    </Scene>
  );
}
