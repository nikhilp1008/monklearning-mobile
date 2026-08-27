/**
 * Ch02 · Section 43 — "Pitfalls and pro-tips: equations of motion and free fall"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.8, 37.6, 62.5, 87.3, 112.1, 130.4, 152.7]):
 *  0 title + tally of five
 *  1 trap 1: equations with varying a — INVALID
 *  2 trap 2: sign chaos in free fall
 *  3 trap 3: nth second ≠ n seconds
 *  4 trap 4: a ≠ 0 at the top
 *  5 trap 5: mixing 9.8 and 10
 *  6 pro-tip box + tips 1 & 2
 *  7 tip 3: expect two roots — reject only what physics forbids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 104/158/212/266/320) · mains st x104 bl 110..326 step 54 script 13
 *  box x60..1020 y356..540 · header cx540 bl 384 · tips st x140 bl 420/452/484/516
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

export default function Ch02Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const traps = [
    t(
      "the cardinal error: three equations with varying a — not off, INVALID: back to calculus",
      "sabse badi bhool: badalte a par teen equations — galat nahi, INVALID: waapas calculus"
    ),
    t(
      "sign chaos in free fall — sign u, a and s together, BEFORE any equation",
      "free fall mein sign ka gadbad — u, a, s ko saath sign do, equation se PEHLE"
    ),
    t(
      "nth second (an interval) ≠ n seconds (a running total) — 1:3:5 vs 1:4:9",
      "nth second (antraal) ≠ n seconds (kul jod) — 1:3:5 banaam 1:4:9"
    ),
    t(
      "a is NOT zero at the top of a throw — v = 0 there, a is still a full g",
      "throw ki choti par a zero NAHI — wahan v = 0 hai, a poora g hai"
    ),
    t(
      "mixing 9.8 and 10 in one problem — pick one, first line to last",
      "ek sawaal mein 9.8 aur 10 milana — ek chuno, pehli se aakhri line tak"
    ),
  ];

  return (
    <Scene>
      {/* beat 0 — the heavyweight's traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={25} fill={RED} script>
          {t(
            "five traps in the most-examined sub-topic",
            "sabse zyada poochhe jaane waale sub-topic ke paanch traps"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 950 44 v 22 M 965 44 v 22 M 980 44 v 22 M 995 44 v 22 M 943 66 l 60 -18"
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

      {/* beat 6 — the pro-tip box */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 72 356 h 936 q 12 0 12 12 v 160 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -160 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={384} size={15} fill={INK} weight={700}>
          {t("pro-tips:", "pro-tips:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={140} y={420} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "lock in up = + and a = −g for every vertical problem — never re-decide mid-solution",
            "har vertical sawaal mein upar = + aur a = −g pakka — beech mein kabhi mat badlo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={140} y={452} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "'speed doubled, same braking' → d ∝ v²: square the factor, skip the algebra",
            "'speed dugni, wahi brake' → d ∝ v²: factor ka varg, algebra chhodo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the strategic insight */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={140} y={484} size={14} fill={GREEN} script anchor="start">
          {t(
            "height questions: expect TWO real roots — passing up, and passing back down",
            "height ke sawaal: DO asli roots ki umeed rakho — chadhte hue, aur utarte hue"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={140} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "'how long above 40 m' = the gap between them · reject a root only when physics forbids it",
            "'40 m ke upar kitni der' = unka antar · root tabhi khaarij karo jab physics mana kare"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
