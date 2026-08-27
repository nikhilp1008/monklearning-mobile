/**
 * Ch02 · Section 10 — "Core relations and the two averaging results"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.5, 28.8, 46.1, 70.8, 77.7, 96.9, 110.3, 135.2]):
 *  0 title + underline
 *  1 velocity row: average card · instantaneous card
 *  2 acceleration row: average card · instantaneous card
 *  3 squeeze arrows between columns · green symmetry line
 *  4 "exam bait" header
 *  5 harmonic card (equal distances) + why
 *  6 arithmetic card (equal times) + why
 *  7 red note: memorise the distinction
 *  8 inequality chips + green closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  cards: col1 x80..520 · col2 x560..1000 · row1 y96..168 · row2 y182..254
 *  headers bl top+22 script 11 · formulas bl top+54 sans 16
 *  b3 | arrows (528,132)→(552,132) & (528,218)→(552,218) · line cx540 bl 285
 *  b4 | header cx540 bl 322
 *  b5 | card x80..520 y336..408 (hdr bl 358, formula bl 392) · sub cx300 bl 434
 *  b6 | card x560..1000 y336..408 · sub cx780 bl 434
 *  b7 | bar x66 y456..504 · lines st x84 bl 474 / 498
 *  b8 | chips x150..500 / x560..910 y525..560 · line cx540 bl 588
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Card({
  on,
  d1,
  d2,
  x,
  y,
  w,
  header,
  formula,
  stroke,
}: {
  on: boolean;
  d1: number;
  d2: number;
  x: number;
  y: number;
  w: number;
  header: string;
  formula: string;
  stroke: string;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={d1}
        d={`M ${x + 12} ${y} h ${w - 24} q 12 0 12 12 v 48 q 0 12 -12 12 h -${w - 24} q -12 0 -12 -12 v -48 q 0 -12 12 -12`}
        stroke={stroke}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={on} delay={d1 + 0.8}>
        <T x={x + w / 2} y={y + 22} size={11} fill={MUTED} script>
          {header}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={x + w / 2} y={y + 54} size={16} fill={INK} weight={700}>
          {formula}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch02Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={56} size={23} fill={INK} script>
          {t(
            "the toolkit — smaller than you fear",
            "toolkit — jitna darr tha usse chhota"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 380 70 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — velocity level */}
      <Card
        on={beat >= 1}
        d1={dl(1, 0.6)}
        d2={dl(1, 2)}
        x={80}
        y={96}
        w={440}
        header={t("average velocity", "average velocity")}
        formula="v̄ = (x₂ − x₁) ⁄ (t₂ − t₁)"
        stroke={AMBER}
      />
      <Card
        on={beat >= 1}
        d1={dl(1, 8)}
        d2={dl(1, 9.5)}
        x={560}
        y={96}
        w={440}
        header={t("instantaneous velocity", "instantaneous velocity")}
        formula="v = lim Δx⁄Δt = dx⁄dt"
        stroke={GREEN}
      />

      {/* beat 2 — acceleration level */}
      <Card
        on={beat >= 2}
        d1={dl(2, 0.6)}
        d2={dl(2, 2)}
        x={80}
        y={182}
        w={440}
        header={t("average acceleration", "average acceleration")}
        formula="ā = (v₂ − v₁) ⁄ (t₂ − t₁)"
        stroke={AMBER}
      />
      <Card
        on={beat >= 2}
        d1={dl(2, 8)}
        d2={dl(2, 9.5)}
        x={560}
        y={182}
        w={440}
        header={t("instantaneous acceleration", "instantaneous acceleration")}
        formula="a = dv⁄dt = d²x⁄dt²"
        stroke={GREEN}
      />

      {/* beat 3 — one relation, two rungs */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(528, 132, 552, 132)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={arrowD(528, 218, 552, 218)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={540} y={285} size={13} fill={GREEN} script>
          {t(
            "one relation at two rungs: change ⁄ time taken, then squeeze the window",
            "ek hi rishta do paidan par: badlav ⁄ samay, phir window sikodo"
          )}
        </T>
      </Fade>

      {/* beat 4 — exam bait */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={322} size={14} fill={AMBER_DARK} script>
          {t(
            "the two special averaging results — exam bait",
            "do khaas averaging results — exam ka chaara"
          )}
        </T>
      </Fade>

      {/* beat 5 — harmonic */}
      <Card
        on={beat >= 5}
        d1={dl(5, 0.6)}
        d2={dl(5, 2)}
        x={80}
        y={336}
        w={440}
        header={t("equal distances", "equal distances")}
        formula="v̄ = 2v₁v₂ ⁄ (v₁ + v₂)"
        stroke={AMBER}
      />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={300} y={434} size={11} fill={AMBER_DARK} script>
          {t("harmonic — the slow leg hogs the clock", "harmonic — dheemi leg ghadi hadapti hai")}
        </T>
      </Fade>

      {/* beat 6 — arithmetic */}
      <Card
        on={beat >= 6}
        d1={dl(6, 0.6)}
        d2={dl(6, 2)}
        x={560}
        y={336}
        w={440}
        header={t("equal times", "equal times")}
        formula="v̄ = (v₁ + v₂) ⁄ 2"
        stroke={GREEN}
      />
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={780} y={434} size={11} fill={GREEN} script>
          {t("arithmetic — equal slices, no one dominates", "arithmetic — barabar tukde, koi haavi nahi")}
        </T>
      </Fade>

      {/* beat 7 — the most important sentence */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 456 v 48" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={474} size={14} fill={RED} script anchor="start">
          {t(
            "memorise the DISTINCTION, not the formulas —",
            "FARQ ratto, formulas nahi —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={498} size={14} fill={RED} script anchor="start">
          {t(
            "the killer is grabbing arithmetic when the question said equal distances",
            "maut hai equal distances par arithmetic utha lena"
          )}
        </T>
      </Fade>

      {/* beat 8 — the checks, where they belong */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <Chip x={150} y={525} w={350} h={35} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          distance ≥ |displacement|
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3)}>
        <Chip x={560} y={525} w={350} h={35} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          avg speed ≥ |avg velocity|
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={540} y={588} size={12} fill={GREEN} script>
          {t(
            "not decoration — the checks you run on everything the toolkit produces",
            "sajaavat nahi — har jawaab par chalne waali jaanch"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
