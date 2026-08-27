/**
 * Ch01 · Section 38 — "Derivation A: error in a sum, and why a difference ALSO adds"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.2, 34.5, 49.2, 67.7, 80.3, 105.1, 130.0]):
 *  0 title + the worst-case guiding chip
 *  1 setup: x = a + b with errors Δa, Δb
 *  2 the error bars drawn for a and b
 *  3 write it out and group
 *  4 worst case → Δx = Δa + Δb
 *  5 the difference: distribute the minus carefully
 *  6 a high AND b low → reinforce → STILL a plus
 *  7 the consequence box: near-equal subtraction explodes % error
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 62 · chip x330..750 y84..122
 *  b1 | setup (sans 18) x60 st bl 152
 *  b2 | bars y196: a (200..300) dot 250 · b (420..560) dot 490 · labels bl 226
 *  b3 | rows (sans 18) x60 st bl 268 · x120 st bl 306
 *  b4 | chip x640..880 y276..320 · note x640 st bl 346
 *  b5 | rows x60 st bl 386 · x120 st bl 422 · note (script 13) x470 st bl 422
 *  b6 | line (script 15, red) x60..410 bl 462 · chip x640..940 y436..480
 *  b7 | box x60..1020 y496..584 · line1 (sans 16) bl 528 · line2 (script 14, red) bl 564
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — full marks, one guiding idea */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("derivation A — sum, and the sneaky difference", "derivation A — jod, aur chalaak ghata")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <Chip x={330} y={84} w={420} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t("worst case: every error pushes one way", "worst case: har error ek hi taraf dhakele")}
        </Chip>
      </Fade>

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={60} y={152} size={18} fill={INK} weight={700} anchor="start">
          {t("x = a + b ,   errors Δa and Δb", "x = a + b ,   errors Δa aur Δb")}
        </T>
      </Fade>

      {/* beat 2 — the error bars */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 200 196 H 300 M 200 189 V 203 M 300 189 V 203"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={250} cy={196} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={250} y={226} size={14} fill={INK} weight={600}>
          a ± Δa
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d="M 420 196 H 560 M 420 189 V 203 M 560 189 V 203"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <Circle cx={490} cy={196} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={490} y={226} size={14} fill={INK} weight={600}>
          b ± Δb
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={650} y={200} size={14} fill={MUTED} script anchor="start">
          {t("how far off can their sum be?", "inka jod kitna door ja sakta hai?")}
        </T>
      </Fade>

      {/* beat 3 — write it out */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={268} size={18} fill={INK} weight={700} anchor="start">
          x ± Δx = (a ± Δa) + (b ± Δb)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={120} y={306} size={18} fill={INK} weight={700} anchor="start">
          = (a + b) ± (Δa + Δb)
        </T>
      </Fade>

      {/* beat 4 — the sum's result */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={640} y={276} w={240} h={44} fill={INK} textFill={CREAM} size={19} script={false}>
          Δx = Δa + Δb
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={640} y={346} size={13} fill={MUTED} script anchor="start">
          {t("straightforward — as expected", "seedha — jaisa socha tha")}
        </T>
      </Fade>

      {/* beat 5 — the difference */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={386} size={17} fill={INK} weight={700} anchor="start">
          x = a − b :   x ± Δx = (a ± Δa) − (b ± Δb)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={120} y={422} size={17} fill={INK} weight={700} anchor="start">
          = (a − b) ± Δa ∓ Δb
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={470} y={422} size={13} fill={AMBER_DARK} script anchor="start">
          {t("watch the minus distribute!", "minus ko dhyaan se failao!")}
        </T>
      </Fade>

      {/* beat 6 — they reinforce */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={462} size={15} fill={RED} script anchor="start">
          {t(
            "worst case: a reads high AND b reads low → they REINFORCE",
            "worst case: a upar aaya AUR b neeche → dono MILKAR dhakelte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <Chip x={640} y={436} w={300} h={44} fill={PAPER} stroke={RED} textFill={RED} size={17} script={false}>
          Δx = Δa + Δb — still +
        </Chip>
      </Fade>

      {/* beat 7 — the explosion */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 72 496 h 936 q 12 0 12 12 v 64 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -64 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={528} size={16} fill={INK} weight={700}>
          5.00 − 4.00  (each ± 0.02)  →  1.00 ± 0.04  →  4 % !
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={564} size={14} fill={RED} script>
          {t(
            "subtracting near-equals explodes the % error — design around it",
            "kareeb-barabar ghatana % error ko phula deta hai — experiment hi aisa mat banao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
