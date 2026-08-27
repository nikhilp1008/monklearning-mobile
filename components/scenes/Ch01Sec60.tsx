/**
 * Ch01 · Section 60 — "Pitfalls and pro-tips: significant figures"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.8, 24.8, 39.1, 63.9, 88.8, 107.2, 114]):
 *  0 title + tally of five
 *  1..5 red-badged pitfall lines
 *  6 the whisper
 *  7 pro-tip box: scientific notation FIRST
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 110/162/214/266/318) · lines st x104 bl 116/168/220/272/324 script 15
 *  b6 | whisper script 15 muted mid bl 380
 *  b7 | box x60..1020 y400..540 · lines bl 440 (sans 17) / 478 (script 14) / 514 (script 13)
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

export default function Ch01Sec60({ currentTime, reveals, language }: SceneProps) {
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
            "five pitfalls — and the habit that dissolves them",
            "paanch pitfalls — aur wo aadat jo unhe ghol deti hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24 M 990 48 v 24"
        stroke={RED}
        sw={2.6}
        dur={0.9}
      />

      {/* beat 1 — pitfall 1 */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={15} fill={RED} script anchor="start">
          {t(
            "swapping the two rules — ×÷ → sig figs · +− → decimal places (ask the operation FIRST)",
            "dono niyam badalna — ×÷ → sig figs · +− → decimal places (pehle operation poochho)"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Badge n={2} cy={162} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={104} y={168} size={15} fill={RED} script anchor="start">
          {t(
            "rounding every intermediate step ✗ — carry the digits, round ONCE at the end",
            "har beech ke step par rounding ✗ — digits saath rakho, round EK baar aakhir mein"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3 */}
      <Badge n={3} cy={214} on={beat >= 3} delay={dl(3, 0.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={104} y={220} size={15} fill={RED} script anchor="start">
          {t(
            "letting exact numbers limit you — ÷5, π, ½ have ∞ sig figs; only MEASURED things constrain",
            "exact numbers se bandh jaana — ÷5, π, ½ mein ∞ sig figs; sirf NAPI cheezein bandhti hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Badge n={4} cy={266} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={272} size={15} fill={RED} script anchor="start">
          {t(
            "blurring the zeros — leading ✗ · sandwiched ✓ · after decimal ✓ · bare trailing ?",
            "zeros ko gholna — leading ✗ · sandwich ✓ · decimal ke baad ✓ · nanga trailing ?"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 5 */}
      <Badge n={5} cy={318} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={104} y={324} size={15} fill={RED} script anchor="start">
          {t(
            "reading order off the exponent — 9.1×10⁻³¹ → order 10⁻³⁰ (check the mantissa vs 5)",
            "order seedha exponent se — 9.1×10⁻³¹ → order 10⁻³⁰ (mantissa ko 5 se jaancho)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whisper */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={380} size={15} fill={MUTED} script>
          {t(
            "now the habit that dissolves the minefield:",
            "ab wo aadat jo baaroodi surang ghol deti hai:"
          )}
        </T>
      </Fade>

      {/* beat 7 — the pro-tip */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 72 400 h 936 q 12 0 12 12 v 116 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={440} size={17} fill={INK} weight={700}>
          {t(
            "convert to SCIENTIFIC NOTATION first — before counting anything",
            "pehle SCIENTIFIC NOTATION mein badlo — kuchh bhi ginne se pehle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={478} size={14} fill={AMBER_DARK} script>
          {t(
            "the mantissa's digits ARE the sig figs — all of them, only them",
            "mantissa ke digits HI sig figs hain — wo saare, sirf wahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={540} y={514} size={13} fill={GREEN} script>
          {t(
            "leading zeros migrate into the exponent — the minefield dissolves before your first step",
            "shuru ke zeros exponent mein chale jaate — surang tumhare pehle kadam se pehle ghul jaati"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
