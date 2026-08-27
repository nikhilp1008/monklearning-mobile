/**
 * Ch01 · Section 75 — "Pitfalls and pro-tips: measuring instruments"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.2, 21, 39.1, 60.7, 83.9, 108.7, 116.1]):
 *  0 title + tally of four
 *  1 pitfall 1: zero-error sign
 *  2 the one-rule mantra (underlined)
 *  3 pitfall 2: assuming pitch = 1 mm
 *  4 pitfall 3: MSD/VSD order
 *  5 pitfall 4: division number ≠ length
 *  6 whisper
 *  7 pro-tip box: the fixed sequence + LC sanity check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 110/206/258/310) · lines st x104 bl 116/212/264/316 script 15
 *  b2 | green script 16 st x104 bl 158 · underline y174
 *  b6 | whisper muted mid bl 372
 *  b7 | box x60..1020 y392..540 · lines bl 428 (16) / 462 (14) / 496 (13) / 522 (12)
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

export default function Ch01Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "four pitfalls — then the fixed sequence",
            "chaar pitfalls — phir wo tay kram"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24"
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />

      {/* beat 1 — pitfall 1 */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={15} fill={RED} script anchor="start">
          {t(
            "the zero-error sign — +ve subtracts, −ve effectively adds: the biggest mark-loser here",
            "zero-error ka sign — +ve ghatata, −ve asal mein jodta: yahan ka sabse bada mark-loser"
          )}
        </T>
      </Fade>

      {/* beat 2 — the mantra */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={104} y={158} size={16} fill={GREEN} script anchor="start">
          {t(
            "never two cases — ONE rule: corrected = observed − zero error, sign included",
            "do maamle kabhi nahi — EK niyam: corrected = observed − zero error, sign samet"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 10)}
        d="M 104 174 C 260 170, 480 178, 660 173"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 3 — pitfall 2 */}
      <Badge n={2} cy={206} on={beat >= 3} delay={dl(3, 0.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={104} y={212} size={15} fill={RED} script anchor="start">
          {t(
            "assuming pitch = 1 mm — compute it from spindle travel; Advanced made it 3 mm",
            "pitch = 1 mm maan lena — spindle ki chaal se nikaalo; Advanced ne 3 mm rakha tha"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 3 */}
      <Badge n={3} cy={258} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={264} size={15} fill={RED} script anchor="start">
          {t(
            "LC = MSD − VSD, main minus vernier IN ORDER — swapped ⇒ negative length, the standing distractor",
            "LC = MSD − VSD, main minus vernier ISI KRAM mein — ulta ⇒ negative lambai, jama hua distractor"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 4 */}
      <Badge n={4} cy={310} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={104} y={316} size={15} fill={RED} script anchor="start">
          {t(
            "the 45th division is NOT 45 mm — a count becomes a length only after × LC (45 × 0.01 = 0.45 mm)",
            "45vi division 45 mm NAHI hai — ginti lambai tabhi banti jab × LC ho (45 × 0.01 = 0.45 mm)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whisper */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={372} size={15} fill={MUTED} script>
          {t(
            "now the fixed sequence — the fixedness is the point:",
            "ab wo tay kram — tay hona hi asli baat hai:"
          )}
        </T>
      </Fade>

      {/* beat 7 — the pro-tip box */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 72 392 h 936 q 12 0 12 12 v 124 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -124 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={428} size={16} fill={INK} weight={700}>
          {t(
            "LC first, every time — vernier: MSD ÷ n · screw: pitch, then ÷ divisions",
            "LC pehle, har baar — vernier: MSD ÷ n · screw: pitch, phir ÷ divisions"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={462} size={14} fill={AMBER_DARK} script>
          {t(
            "then every reading is just MSR + div × LC → the universal correction",
            "phir har reading bas MSR + div × LC hai → wahi saarvbhaumik correction"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={540} y={496} size={13} fill={GREEN} script>
          {t(
            "exam-hall sanity check: the answer's last decimal place must match the least count",
            "exam-hall sanity check: answer ki aakhri decimal place least count se milni chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 22)}>
        <T x={540} y={522} size={12} fill={MUTED} script>
          {t(
            "more precision than the LC allows ⇒ you slipped somewhere",
            "LC ki ijazat se zyada precision ⇒ kahin phisle ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
