/**
 * P12Ch04 · Section 30 — "Derivation B: Converting a Galvanometer Into a Voltmeter"
 * (Subtopic 4 · Galvanometers and Their Conversion)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template gated on 0/1/3/4/5/6 — bold sentences and
 * three drawn rules. The narration describes a specific picture ("the multiplier,
 * the wide red block… the arrow shows the current… compare this with the shunt
 * diagram, one splits current, the other shares it") and none of it was drawn.
 *
 * NARRATION TEACHES: the mirror of Derivation A — the goal (make a chosen V drive
 * exactly I_g), the series arrangement, the series fact (one current, voltages
 * add), V = I_g (G + R) ⇒ R = V ⁄ I_g − G, an emphatic warning about the −G, and
 * the design rationale R_V = V ⁄ I_g, which is large because I_g is tiny.
 *
 * BEAT MAP (n_reveals = 7 — gates 0..6, every beat used):
 *   0 title + "the mirror image — notice the mirroring at every step"
 *   1 THE GOAL — a galvanometer answers to current, so engineer the voltage
 *   2 THE DIAGRAM — terminals, wide multiplier block, coil, V spanning both,
 *     one current arrow; plus the splits-vs-shares comparison panel
 *   3 the series fact + the I_g R and I_g G brackets drawn on the chain
 *   4 apply it: V = I_g (G + R)  ⇒  R = V ⁄ I_g − G
 *   5 the −G warning, with the wrong version crossed out
 *   6 design rationale: R_V = G + R = V ⁄ I_g is large; V goes in parallel;
 *     the mirror sentence
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const line = (
    k: number,
    x: number,
    y: number,
    d: number,
    tone: string,
    s: string,
    size = 12.6
  ) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={size} fill={tone} weight={600} anchor="start">
        {s}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Derivation B — Galvanometer into a Voltmeter", "Derivation B — Galvanometer into a Voltmeter")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d="M 248 60 C 460 55, 660 66, 832 58"
        stroke={RED}
        sw={2.2}
        dur={0.65}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={12.8} fill={MUTED} script>
          {t(
            "the mirror image of Derivation A — notice the mirroring at every single step",
            "the mirror image of Derivation A — notice the mirroring at every single step"
          )}
        </T>
      </Fade>

      {/* ================= beat 1 — the goal ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={112} size={14} fill={INK} weight={800} anchor="start">
          {t("THE GOAL", "THE GOAL")}
        </T>
      </Fade>
      {line(1, 44, 136, 0.6, INK_LIGHT, t("a voltmeter reads a voltage — but a galvanometer only answers to current", "a voltmeter reads a voltage — but a galvanometer only answers to current"))}
      {line(1, 44, 156, 1.0, AMBER_DARK, t("so arrange things until the chosen V drives exactly I_g through the coil: a large multiplier R in SERIES", "so arrange things until the chosen V drives exactly I_g through the coil: a large multiplier R in SERIES"))}

      {/* ================= beat 2 — the series diagram ================= */}
      {line(2, 44, 178, 0.2, INK, t("ONE current only — it passes through the multiplier and the coil one after the other", "ONE current only — it passes through the multiplier and the coil one after the other"))}

      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 100 214 L 100 202 L 566 202 L 566 214" stroke={INK_LIGHT} sw={1.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={580} y={208} size={13.5} fill={INK_LIGHT} weight={800} anchor="start">
          V
        </T>
        <Circle cx={100} cy={250} r={6} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={566} cy={250} r={6} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 106 250 L 180 250" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Rect x={180} y={230} width={140} height={40} fill={CREAM} stroke={RED} strokeWidth={2.6} />
        <T x={250} y={256} size={15} fill={RED} weight={800}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.65)} d="M 320 250 L 441 250" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.85)}>
        <Circle cx={460} cy={250} r={19} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.4} />
        <T x={460} y={255} size={13.5} fill={GREEN_DARK} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.05)} d="M 479 250 L 560 250" stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d={arrowD(352, 250, 412, 250)} stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={382} y={240} size={12.5} fill={AMBER_DARK} weight={800}>
          I_g
        </T>
      </Fade>

      {/* the splits-vs-shares comparison */}
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={660} y={190} size={14} fill={INK} weight={800} anchor="start">
          {t("COMPARE WITH THE SHUNT DIAGRAM", "COMPARE WITH THE SHUNT DIAGRAM")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.1)} d="M 690 234 L 730 234 M 730 234 L 730 214 L 870 214 L 870 234 M 730 234 L 730 254 L 870 254 L 870 234 M 870 234 L 910 234" stroke={GREEN_DARK} sw={1.8} dur={1.0} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={800} y={276} size={12.6} fill={GREEN_DARK} weight={700}>
          {t("parallel — SPLITS the current", "parallel — SPLITS the current")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.85)} d="M 690 300 L 780 300 M 840 300 L 910 300" stroke={RED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <Rect x={780} y={288} width={60} height={24} fill={CREAM} stroke={RED} strokeWidth={2} />
        <T x={800} y={332} size={12.6} fill={RED} weight={700}>
          {t("series — SHARES the voltage", "series — SHARES the voltage")}
        </T>
      </Fade>

      {/* ================= beat 3 — the series fact ================= */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 180 282 L 180 292 L 320 292 L 320 282" stroke={RED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.35)} d="M 441 282 L 441 292 L 479 292 L 479 282" stroke={GREEN_DARK} sw={1.5} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={250} y={312} size={12.5} fill={RED} weight={800}>
          I_g R
        </T>
        <T x={460} y={312} size={12.5} fill={GREEN_DARK} weight={800}>
          I_g G
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={44} y={358} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("THE SERIES FACT — the exact counterpart of the parallel one", "THE SERIES FACT — the exact counterpart of the parallel one")}
        </T>
      </Fade>
      {line(3, 44, 380, 1.3, INK, t("the same current flows through every element  ·  the element voltages add to the total", "the same current flows through every element  ·  the element voltages add to the total"))}
      {line(3, 44, 400, 1.6, INK_LIGHT, t("again a general property of series connection, not an assumption about this circuit", "again a general property of series connection, not an assumption about this circuit"))}

      {/* ================= beat 4 — apply it ================= */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={44} y={414} w={336} h={44} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={19}>
          V = I_g (G + R)
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={arrowD(396, 436, 452, 436)} stroke={MUTED} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.95)}>
        <Chip x={468} y={414} w={336} h={44} fill={CREAM} stroke={RED} textFill={INK} size={19}>
          R = V ⁄ I_g − G
        </Chip>
      </Fade>
      {line(4, 822, 442, 1.3, INK_LIGHT, t("rearranged for the multiplier", "rearranged for the multiplier"))}

      {/* ================= beat 5 — the −G warning ================= */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={488} size={14} fill={RED} weight={800} anchor="start">
          {t("THE −G IS WHERE THE MARKS ARE LOST", "THE −G IS WHERE THE MARKS ARE LOST")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={44} y={498} w={250} h={36} fill={CREAM} stroke={MUTED} textFill={MUTED} size={17}>
          R = V ⁄ I_g
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} d={crossD(52, 502, 234, 28)} stroke={RED} sw={2.6} dur={0.45} />
      {line(5, 316, 514, 1.3, INK, t("the coil is already in the chain, so the multiplier only supplies the remainder", "the coil is already in the chain, so the multiplier only supplies the remainder"))}
      {line(5, 316, 534, 1.6, INK_LIGHT, t("examiners award for it specifically — and in low-range voltmeters it matters a great deal", "examiners award for it specifically — and in low-range voltmeters it matters a great deal"))}

      {/* ================= beat 6 — the design rationale ================= */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 44 550 L 1036 550" stroke={INK} sw={1.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={44} y={558} w={392} h={30} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={13} script={false}>
          {t("R_voltmeter = G + R = V ⁄ I_g   → very large", "R_voltmeter = G + R = V ⁄ I_g   → very large")}
        </Chip>
      </Fade>
      {/* the finished voltmeter, bridged across an element */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 460 556 L 512 556 M 572 556 L 624 556 L 624 592 L 460 592 L 460 556" stroke={INK_LIGHT} sw={1.6} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Rect x={512} y={546} width={60} height={20} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        <Circle cx={542} cy={578} r={12} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.2} />
        <T x={542} y={583} size={12.5} fill={AMBER_DARK} weight={800}>
          V
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.45)} d="M 512 556 L 512 578 L 530 578 M 554 578 L 572 578 L 572 556" stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      {line(6, 648, 570, 1.7, GREEN_DARK, t("I_g is tiny, so R is huge — bridged across the element it draws almost nothing,", "I_g is tiny, so R is huge — bridged across the element it draws almost nothing,"))}
      {line(6, 648, 590, 2.0, RED, t("low R in PARALLEL → ammeter    ·    high R in SERIES → voltmeter", "low R in PARALLEL → ammeter    ·    high R in SERIES → voltmeter"), 13)}
    </Scene>
  );
}
