/**
 * Ch01 · Section 90 — "Pitfalls and pro-tips: measuring length, mass and time"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.7, 28.8, 45.7, 65.2, 81.8, 98.7, 120.7]):
 *  0 title + tally of four
 *  1 pitfall 1: the echo ÷2
 *  2 pitfall 2: AU < ly < parsec order
 *  3 divide, don't multiply (green)
 *  4 pitfall 3: radians only
 *  5 the two conversions to memorise
 *  6 pitfall 4: the estimate is an estimate
 *  7 pro-tip box: clue word → formula · radians · order-of-magnitude glance
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 108/160/244/328) · lines st x104 bl 114/166/250/334 script 15
 *  b3 | green st x124 bl 202 · b5 amber st x124 bl 286
 *  b7 | box x60..1020 y360..560 · header bl 396 · rows bl 428/456/484 · amber bl 514 · green bl 542
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

export default function Ch01Sec90({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={26} fill={RED} script>
          {t(
            "four pitfalls — and the ten-second habit",
            "chaar pitfalls — aur das-second waali aadat"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 940 46 v 22 M 955 46 v 22 M 970 46 v 22 M 985 46 v 22"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — the ÷2 */}
      <Badge n={1} cy={108} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={114} size={15} fill={RED} script anchor="start">
          {t(
            "the echo ÷2 — D = vt⁄2, never vt: halve the round trip FIRST, or the answer doubles",
            "echo ka ÷2 — D = vt⁄2, kabhi vt nahi: pehle round trip aadha karo, warna answer dugna"
          )}
        </T>
      </Fade>

      {/* beat 2 — the order */}
      <Badge n={2} cy={160} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={104} y={166} size={15} fill={RED} script anchor="start">
          {t(
            "mixing the units — smallest to largest: AU, light year, parsec (1 pc = 3.26 ly = 3.08 × 10¹⁶ m)",
            "units ka ghaalmel — chhoti se badi: AU, light year, parsec (1 pc = 3.26 ly = 3.08 × 10¹⁶ m)"
          )}
        </T>
      </Fade>

      {/* beat 3 — divide */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={124} y={202} size={14} fill={GREEN} script anchor="start">
          {t(
            "parsec is biggest ⇒ fewest parsecs — ly → pc means DIVIDE (bigger unit, smaller number)",
            "parsec sabse badi ⇒ parsec sabse kam — ly → pc yaani BHAAG do (badi unit, chhoti sankhya)"
          )}
        </T>
      </Fade>

      {/* beat 4 — radians */}
      <Badge n={3} cy={244} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={250} size={15} fill={RED} script anchor="start">
          {t(
            "degrees into D = b⁄θ or d = αD — no version of these accepts degrees; convert immediately",
            "D = b⁄θ ya d = αD mein degree — inka koi roop degree leta hi nahi; foran badlo"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two conversions */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={124} y={286} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "carry these: 1° = π⁄180 rad · 1 arc-second = 4.85 × 10⁻⁶ rad (stellar parallax's favourite)",
            "yeh saath rakho: 1° = π⁄180 rad · 1 arc-second = 4.85 × 10⁻⁶ rad (parallax ka pasandeeda)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the estimate */}
      <Badge n={4} cy={328} on={beat >= 6} delay={dl(6, 0.5)} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={104} y={334} size={15} fill={RED} script anchor="start">
          {t(
            "treating the monolayer answer as exact — it's an order-of-magnitude ESTIMATE (~10⁻⁹ m), nothing more",
            "monolayer ka answer sateek maanna — wo order-of-magnitude ANUMAAN hai (~10⁻⁹ m), bas"
          )}
        </T>
      </Fade>

      {/* beat 7 — the pro-tip box */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 72 360 h 936 q 12 0 12 12 v 176 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -176 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={396} size={15} fill={INK} weight={700}>
          {t(
            "name the method from the CLUE WORD, before anything else:",
            "kuchh bhi karne se pehle, CLUE WORD se vidhi ka naam lo:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={140} y={428} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "'subtends an angle' → D = b ⁄ θ  or  d = α D",
            "'kon banata hai' → D = b ⁄ θ  ya  d = α D"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={140} y={456} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "'echo returns in time t' → D = v t ⁄ 2",
            "'echo time t mein lautta hai' → D = v t ⁄ 2"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={140} y={484} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "'film · drop · monolayer' → t = V ⁄ A",
            "'film · boond · monolayer' → t = V ⁄ A"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={540} y={514} size={13} fill={INK} script>
          {t(
            "three clue words, three formulas — half solved before you write a line · angles → radians before substituting",
            "teen clue words, teen formulas — line likhne se pehle aadha hal · substitute se pehle kon → radians"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 21)}>
        <T x={540} y={542} size={13} fill={GREEN} script>
          {t(
            "then glance at the order: Moon ~10⁸ m · nearby star ~10¹⁶ · molecule ~10⁻⁹ — a two-second catch",
            "phir order dekho: chaand ~10⁸ m · paas ka taara ~10¹⁶ · anu ~10⁻⁹ — do second ki pakad"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
