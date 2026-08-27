/**
 * P12Ch04 · Section 34 — "Common Pitfalls and Pro-Tips"
 * Subtopic: Galvanometers and Their Conversion
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   Two columns of "1. … 2. … 3. … 4. …" prose plus a summary block, gated on
 *   beats 0, 1, 5 and 7 only — so mistakes one to four all appeared together
 *   at 17 s and the board then stood unchanged for the 158 s covering beats
 *   2, 3 and 4, which is where three of the four mistakes are actually
 *   explained. Four drawn strokes on the whole board. The narration builds an
 *   explicit picture — "a wide bypass beside the booth", "a long narrow road
 *   in front of the booth" — and nothing was drawn.
 *
 * WHAT THE NARRATION TEACHES
 *   Four reasoning slips: swapping the two recipes (low-R shunt in parallel vs
 *   high-R multiplier in series); dropping the − G from R = V/I_g − G; using I
 *   instead of the excess I − I_g in S = I_g G/(I − I_g); and treating a real
 *   meter as ideal when its resistance is given (Example 4's 20% error). Then
 *   the pro-tip: check the SIZE of the answer — a shunt belongs in milliohms
 *   to a few ohms, a multiplier in kilohms; a 3000 Ω shunt or a 0.02 Ω
 *   multiplier means the formulas were swapped. Closing: it all comes from one
 *   question — where does the unwanted current go?
 *
 * BEAT MAP (n_reveals = 8, gates 0..7)
 *   0  framing              title + underline + "every error is a reasoning slip"
 *   1  mistake one          badge 1 + the TOLL-BOOTH pair DRAWN (wide bypass /
 *                           long narrow road) with both recipes spelled out
 *   2  mistake two          badge 2 — the − G in R = V/I_g − G
 *   3  mistake three        badge 3 — I − I_g, not I
 *   4  mistake four         badge 4 — real meters, and Example 4's 20%
 *   5  "now the pro-tip"    divider + pro-tip heading
 *   6  the size check       a DRAWN resistance scale: the shunt band in mΩ…Ω,
 *                           the multiplier band in kΩ, + the swap warning
 *   7  closing thought      where does the unwanted current go? → the dipole
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

function Mistake({
  n, y, on, delay, head, d1, d2, accent,
}: {
  n: number; y: number; on: boolean; delay: number;
  head: string; d1: string; d2: string; accent: string;
}) {
  return (
    <G>
      <Badge n={n} cx={62} cy={y - 5} on={on} delay={delay} />
      <Fade on={on} delay={delay + 0.35}>
        <T x={90} y={y} size={14.5} fill={accent} weight={800} anchor="start">{head}</T>
      </Fade>
      <Fade on={on} delay={delay + 0.9}>
        <T x={90} y={y + 22} size={12.5} fill={INK} weight={700} anchor="start">{d1}</T>
      </Fade>
      <Fade on={on} delay={delay + 1.6}>
        <T x={90} y={y + 42} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">{d2}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch04Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Four reasoning slips — and the one-second size check",
             "Four reasoning slips — and the one-second size check")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 230 60 C 430 56, 670 64, 850 59" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={44} y={86} size={13} fill={MUTED} weight={600} anchor="start">
          {t("almost every error here is a reasoning slip, not a calculation slip — read them as habits",
             "almost every error here is a reasoning slip, not a calculation slip — read them as habits")}
        </T>
      </Fade>

      {/* ================= LEFT — THE FOUR MISTAKES ================= */}
      <Mistake
        n={1} y={122} on={beat >= 1} delay={dl(1, 0.2)} accent={RED}
        head={t("Swapping the two recipes", "Swapping the two recipes")}
        d1={t("ammeter → LOW resistance (shunt), in PARALLEL",
              "ammeter → LOW resistance (shunt), in PARALLEL")}
        d2={t("voltmeter → HIGH resistance (multiplier), in SERIES",
              "voltmeter → HIGH resistance (multiplier), in SERIES")}
      />
      <Mistake
        n={2} y={206} on={beat >= 2} delay={dl(2, 0.2)} accent={AMBER_DARK}
        head={t("Forgetting the − G", "Forgetting the − G")}
        d1={t("R = V ⁄ I_g − G — the coil is already in the series chain",
              "R = V ⁄ I_g − G — the coil is already in the series chain")}
        d2={t("Example 2: only a 2% correction, which is why it is examined",
              "Example 2: only a 2% correction, which is why it is examined")}
      />
      <Mistake
        n={3} y={290} on={beat >= 3} delay={dl(3, 0.2)} accent={GREEN_DARK}
        head={t("Using I instead of I − I_g", "Using I instead of I − I_g")}
        d1={t("S = I_g G ⁄ (I − I_g) — only what misses the coil bypasses it",
              "S = I_g G ⁄ (I − I_g) — only what misses the coil bypasses it")}
        d2={t("usually numerically tiny; the reasoning it reveals is not",
              "usually numerically tiny; the reasoning it reveals is not")}
      />
      <Mistake
        n={4} y={374} on={beat >= 4} delay={dl(4, 0.2)} accent={INK}
        head={t("Treating a real meter as ideal", "Treating a real meter as ideal")}
        d1={t("ideal ammeter R = 0 · ideal voltmeter R = ∞ — assume only if told",
              "ideal ammeter R = 0 · ideal voltmeter R = ∞ — assume only if told")}
        d2={t("a given meter resistance is there to be used — Example 4: 20%",
              "a given meter resistance is there to be used — Example 4: 20%")}
      />

      {/* ================= RIGHT — THE TOLL-BOOTH PICTURE (beat 1) ================= */}
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={580} y={104} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE TOLL-BOOTH PICTURE — REBUILD THE RECIPE, NEVER MEMORISE IT",
             "THE TOLL-BOOTH PICTURE — REBUILD THE RECIPE, NEVER MEMORISE IT")}
        </T>
      </Fade>

      {/* ammeter: wide bypass beside the booth */}
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={580} y={140} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">AMMETER</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={arrowD(596, 166, 660, 166)} stroke={GREEN_DARK} sw={3.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 660 166 H 1020" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <Rect x={806} y={150} width={34} height={32} rx={3} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={823} y={143} size={12.5} fill={INK_LIGHT} weight={700}>coil</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.0)}
        d="M 764 166 C 786 208, 862 208, 884 166" stroke={GREEN_DARK} sw={3.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={824} y={222} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("a wide bypass takes the flood ⇒ LOW R, in PARALLEL",
             "a wide bypass takes the flood ⇒ LOW R, in PARALLEL")}
        </T>
      </Fade>

      {/* voltmeter: a long narrow road in front of the booth */}
      <Fade on={beat >= 1} delay={dl(1, 5.1)}>
        <T x={580} y={262} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">VOLTMETER</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.3)} d={arrowD(596, 292, 656, 292)} stroke={GREEN_DARK} sw={3.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 5.6)} d="M 660 285 H 862 M 660 299 H 862" stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 6.1)}>
        <T x={760} y={276} size={12.5} fill={AMBER_DARK} weight={700}>
          {t("a long, narrow road", "a long, narrow road")}
        </T>
        <Rect x={876} y={276} width={34} height={32} rx={3} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={893} y={269} size={12.5} fill={INK_LIGHT} weight={700}>coil</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.5)} d={arrowD(918, 292, 946, 292)} stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 6.8)}>
        <T x={956} y={296} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("a whisper", "a whisper")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={760} y={340} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("sample without draining ⇒ HIGH R, in SERIES",
             "sample without draining ⇒ HIGH R, in SERIES")}
        </T>
      </Fade>

      {/* ================= BOTTOM — THE PRO-TIP ================= */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 44 430 H 1036" stroke={MUTED} sw={1.6} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={44} y={454} size={15} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP — THE ONE-SECOND SIZE CHECK", "PRO-TIP — THE ONE-SECOND SIZE CHECK")}
        </T>
      </Fade>

      {/* beat 6 — the resistance scale, drawn */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={315} y={476} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("SHUNT — milliohms to a few ohms", "SHUNT — milliohms to a few ohms")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 160 488 H 470" stroke={GREEN} sw={9} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={770} y={476} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("MULTIPLIER — kilohms", "MULTIPLIER — kilohms")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 640 488 H 900" stroke={AMBER_DARK} sw={9} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d="M 140 504 H 960" stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)}
        d="M 200 498 V 510 M 450 498 V 510 M 780 498 V 510" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={200} y={524} size={12.5} fill={INK} weight={800}>mΩ</T>
        <T x={450} y={524} size={12.5} fill={INK} weight={800}>Ω</T>
        <T x={780} y={524} size={12.5} fill={INK} weight={800}>kΩ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={540} y={546} size={13} fill={RED} weight={800}>
          {t("a shunt of 3000 Ω, or a multiplier of 0.02 Ω ⇒ you have swapped the formulas",
             "a shunt of 3000 Ω, or a multiplier of 0.02 Ω ⇒ you have swapped the formulas")}
        </T>
      </Fade>

      {/* beat 7 — the closing thought */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={44} y={558} w={992} h={36} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ one question runs the whole subtopic — where does the unwanted current go? ammeter: give it a bypass · voltmeter: refuse it a path · next, the loop as a magnetic dipole",
             "★ one question runs the whole subtopic — where does the unwanted current go? ammeter: give it a bypass · voltmeter: refuse it a path · next, the loop as a magnetic dipole")}
        </Chip>
      </Fade>
    </Scene>
  );
}
