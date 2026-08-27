/**
 * Ch02 · Section 28 — "Pitfalls and pro-tips: graphical analysis"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 34.9, 59.7, 80.9, 103.8, 121.6, 141.7]):
 *  0 title + tally of five
 *  1 trap 1: wrong graph's rule — read the axis first
 *  2 trap 2: rising ≠ speeding up
 *  3 trap 3: ignoring signed area
 *  4 trap 4: negative a ≠ backward
 *  5 trap 5: curved x-t ≠ curved path
 *  6 pro-tip box + the ladder line
 *  7 tips 2 & 3: shade first · straight-or-curve filter
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 104/158/212/266/320) · mains st x104 bl 110/164/218/272/326 script 13
 *  box x60..1020 y356..532 · header cx540 bl 386 · tips st x140 bl 422/458/494
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch02Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const traps = [
    t(
      "wrong graph's rule — slope is v on x-t but a on v-t: READ THE AXIS FIRST",
      "galat graph ka rule — slope x-t par v hai, v-t par a: PEHLE AXIS PADHO"
    ),
    t(
      "rising ≠ speeding up — rising x-t is steady speed; rising v-t is accelerating",
      "chadhna ≠ tez hona — chadhti x-t steady speed hai; chadhti v-t acceleration"
    ),
    t(
      "ignoring signed area — all-positive sums give distance labelled displacement",
      "signed area bhoolna — sab + jodne par distance nikalta hai, naam displacement"
    ),
    t(
      "negative a ≠ backward — it is slowing, until v actually crosses zero",
      "negative a ≠ peechhe — woh dheema karna hai, jab tak v zero paar na kare"
    ),
    t(
      "curved x-t ≠ curved path — no road in the picture, just position and a clock",
      "curved x-t ≠ ghumaavdar raasta — tasveer mein sadak hai hi nahi, bas position aur ghadi"
    ),
  ];

  return (
    <Scene>
      {/* beat 0 — five traps, five habits */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={25} fill={RED} script>
          {t(
            "five traps — each avoided by a habit, not a fact",
            "paanch traps — har ek aadat se bachta hai, gyaan se nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 940 44 v 22 M 955 44 v 22 M 970 44 v 22 M 985 44 v 22 M 933 66 l 60 -18"
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />

      {traps.map((txt, i) => (
        <G key={i}>
          <Badge n={i + 1} cy={104 + i * 54} on={beat >= i + 1} delay={dl(i + 1, 0.5)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.5)}>
            <T x={104} y={110 + i * 54} size={13} fill={RED} script anchor="start">
              {txt}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 6 — the pro-tip box + the ladder */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 72 356 h 936 q 12 0 12 12 v 152 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -152 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={386} size={15} fill={INK} weight={700}>
          {t("pro-tips — the habits that pay:", "pro-tips — aadatein jo kaam aati hain:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={140} y={422} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "carry the ladder: slope steps down (x→v→a) · area climbs up (a→v→x)",
            "ladder saath rakho: slope neeche (x→v→a) · area upar (a→v→x)"
          )}
        </T>
      </Fade>

      {/* beat 7 — shade first, then the fastest filter */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={140} y={458} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "shade + and − on the pieces BEFORE summing — one pass, both answers",
            "jodne se PEHLE tukdon par + aur − likho — ek pass, dono jawaab"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={140} y={494} size={14} fill={GREEN} script anchor="start">
          {t(
            "fastest MCQ filter: straight line, or curve? — kills half the options unread",
            "sabse tez MCQ filter: seedhi line, ya curve? — aadhe options bina padhe khatam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
