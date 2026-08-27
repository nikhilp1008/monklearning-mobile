/**
 * Ch01 · Section 45 — "Pitfalls and pro-tips: errors in measurement"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.8, 22.2, 38.9, 57.1, 74.2, 91.5, 98.3]):
 *  0 title + tally
 *  1 pitfall 1: subtracting errors in a difference
 *  2 the mantra: the minus never reaches the error (underlined)
 *  3 pitfall 2: dropping the power factor
 *  4 pitfall 3: comparing absolute errors across units
 *  5 pitfall 4: averaging is blind to systematic
 *  6 the whisper
 *  7 the ten-second habit box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | badge c(76,110) · line x104 st bl 116
 *  b2 | mantra (script 16, amber) x104 st bl 158 · underline y174
 *  b3-5 | badges c(76, 206/258/310) · lines x104 st bl 212/264/316
 *  b6 | whisper (script 15, muted) mid bl 372
 *  b7 | box x60..1020 y392..520 · lines bl 428 (sans 16) / 466 (script 14) / 502 (script 13)
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

function Badge({
  n,
  cy,
  on,
  delay,
}: {
  n: number;
  cy: number;
  on: boolean;
  delay: number;
}) {
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

export default function Ch01Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four pitfalls, one habit */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "four pitfalls — and the ten-second habit",
            "chaar pitfalls — aur das-second waali aadat"
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
            "subtracting errors in a − b ✗ — the worst case REINFORCES, they add",
            "a − b mein errors ghatana ✗ — worst case mein dono MILKAR dhakelte, judte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — the mantra */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={104} y={158} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "the − in the quantity NEVER becomes a − in the error",
            "quantity ka − kabhi error ka − NAHI banta"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 8)}
        d="M 104 174 C 250 170, 440 176, 600 172"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 3 — pitfall 2 */}
      <Badge n={2} cy={206} on={beat >= 3} delay={dl(3, 0.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={104} y={212} size={15} fill={RED} script anchor="start">
          {t(
            "dropping the power factor — ² doubles, √ halves (the trap that almost won)",
            "power factor chhodna — ² dugna, √ aadha (wahi trap jo jeet hi gaya tha)"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 3 */}
      <Badge n={3} cy={258} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={264} size={15} fill={RED} script anchor="start">
          {t(
            "0.5 cm 'worse than' 0.1 s ✗ — different units; convert to % before judging",
            "0.5 cm '0.1 s se bura' ✗ — units alag; pehle % banao, phir raay do"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 4 */}
      <Badge n={4} cy={310} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={104} y={316} size={15} fill={RED} script anchor="start">
          {t(
            "believing averaging fixes everything — it is BLIND to systematic error",
            "sochna ki average sab theek karta hai — systematic error ke liye ye ANDHA hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whisper */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={372} size={15} fill={MUTED} script>
          {t(
            "now the habit that collapses three minutes into ten seconds:",
            "ab wo aadat jo teen minute ko das second bana deti hai:"
          )}
        </T>
      </Fade>

      {/* beat 7 — the ten-second habit */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 72 392 h 936 q 12 0 12 12 v 104 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -104 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={428} size={16} fill={INK} weight={700}>
          {t(
            "x = aᵖ bᵍ / cʳ  →  δx = p·δa + q·δb + r·δc — percentages straight in",
            "x = aᵖ bᵍ / cʳ  →  δx = p·δa + q·δb + r·δc — % seedha daalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={540} y={466} size={14} fill={AMBER_DARK} script>
          {t(
            "absolute errors: only for ± and the reciprocal cases that need differentials",
            "absolute errors: sirf ± ke liye, aur reciprocal cases jinko differentials chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={540} y={502} size={13} fill={GREEN} script>
          {t(
            "then glance: which term won? (the highest power) → that's where an experiment spends its care",
            "phir dekho: kaunsa term jeeta? (sabse unchi power) → wahin asli experiment apna dhyaan lagata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
