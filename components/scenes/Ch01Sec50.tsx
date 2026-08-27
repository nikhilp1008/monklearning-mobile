/**
 * Ch01 · Section 50 — "Procedure 1: counting significant figures"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.5, 23.6, 35.6, 60, 75.3, 100.1, 118.7]):
 *  0 title + underline
 *  1 skeleton: seven numbered circles + colour legend chips
 *  2 rule 1 row: 42.3 (all green) → 3 sf
 *  3 rule 2 row: 5.004 sandwiched zeros green → 4 sf
 *  4 rule 3 row: 0.0067 leading red → 2 sf
 *  5 rule 4 row: 4.330 → 4 sf · 0.05000 both cases at once → 4 sf
 *  6 rule 5 row: 4500 trailing amber → 2? 3? 4?
 *  7 rules 6+7 rows: 7.00×10⁸ → 3 sf · 164 mm = 0.164 m → 3 → 3 · closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s; sans digit ≈0.43×size):
 *  b0 | title script 26 mid bl 56 · underline y72
 *  b1 | legend chips y82..108: x560..700 / x715..855 / x870..1010 · circles cx66 cy bl−5 r13
 *  rows bl 150/206/262/318/374/430/486: rule script 15 st x96 · example sans 20 spans st x440 · chip x880..1010 y bl−21 h30
 *  r4b | second example spans st x560
 *  b7 | closing script 15 mid 540 bl 560
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
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS_Y = [150, 206, 262, 318, 374, 430, 486];

function RuleCircle({ n, on, delay }: { n: number; on: boolean; delay: number }) {
  const cy = ROWS_Y[n - 1] - 5;
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 53 ${cy} A 13 13 0 1 1 79 ${cy} A 13 13 0 1 1 53 ${cy}`}
        stroke={INK_LIGHT}
        sw={2}
        dur={0.3}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={66} y={cy + 5} size={14} fill={INK_LIGHT} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch01Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const countChip = (bl: number, label: string, color: string, on: boolean, delay: number) => (
    <Fade on={on} delay={delay}>
      <Chip
        x={880}
        y={bl - 21}
        w={130}
        h={30}
        fill={CREAM}
        stroke={color}
        textFill={color === AMBER ? AMBER_DARK : color}
        size={14}
        script={false}
      >
        {label}
      </Chip>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t("the seven counting rules", "counting ke saat niyam")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 380 72 C 440 68, 620 76, 700 71"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 1 — skeleton + legend */}
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <RuleCircle key={n} n={n} on={beat >= 1} delay={dl(1, 0.5 + n * 0.5)} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <Chip x={560} y={82} w={140} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          significant
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <Chip x={715} y={82} w={140} h={26} fill={CREAM} stroke={RED} textFill={RED} size={13}>
          {t("not significant", "nahi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.1)}>
        <Chip x={870} y={82} w={140} h={26} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t("awkward", "atpata")}
        </Chip>
      </Fade>

      {/* beat 2 — rule 1 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={96} y={150} size={15} fill={INK} script anchor="start">
          {t("non-zero digits count", "non-zero digits ginte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={440} y={150} size={20} fill={GREEN} weight={700} anchor="start">42.3</T>
      </Fade>
      {countChip(150, "3 sf", GREEN, beat >= 2, dl(2, 6))}

      {/* beat 3 — rule 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={96} y={206} size={15} fill={INK} script anchor="start">
          {t("sandwiched zeros count", "beech mein phanse zeros ginte")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={440} y={206} size={20} fill={INK} weight={700} anchor="start">5.</T>
        <T x={458} y={206} size={20} fill={GREEN} weight={700} anchor="start">00</T>
        <T x={484} y={206} size={20} fill={INK} weight={700} anchor="start">4</T>
      </Fade>
      {countChip(206, "4 sf", GREEN, beat >= 3, dl(3, 8))}

      {/* beat 4 — rule 3 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={96} y={262} size={15} fill={INK} script anchor="start">
          {t("leading zeros — never", "shuru ke zeros — kabhi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={440} y={262} size={20} fill={RED} weight={700} anchor="start">0.00</T>
        <T x={483} y={262} size={20} fill={GREEN} weight={700} anchor="start">67</T>
      </Fade>
      {countChip(262, "2 sf", GREEN, beat >= 4, dl(4, 6))}
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={560} y={262} size={13} fill={MUTED} script anchor="start">
          {t("= 6.7 × 10⁻³ — they evaporate", "= 6.7 × 10⁻³ — bhaap ban jaate")}
        </T>
      </Fade>

      {/* beat 5 — rule 4, both cases at once */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={96} y={318} size={15} fill={INK} script anchor="start">
          {t("trailing zeros after decimal", "decimal ke baad waale zeros")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={440} y={318} size={20} fill={INK} weight={700} anchor="start">4.33</T>
        <T x={479} y={318} size={20} fill={GREEN} weight={700} anchor="start">0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={560} y={318} size={20} fill={RED} weight={700} anchor="start">0.0</T>
        <T x={590} y={318} size={20} fill={INK} weight={700} anchor="start">5</T>
        <T x={603} y={318} size={20} fill={GREEN} weight={700} anchor="start">000</T>
      </Fade>
      {countChip(318, "4 sf · 4 sf", GREEN, beat >= 5, dl(5, 14))}

      {/* beat 6 — rule 5, the awkward one */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={96} y={374} size={15} fill={INK} script anchor="start">
          {t("bare trailing zeros: ambiguous", "bina decimal: ambiguous")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={440} y={374} size={20} fill={INK} weight={700} anchor="start">45</T>
        <T x={464} y={374} size={20} fill={AMBER_DARK} weight={700} anchor="start">00</T>
      </Fade>
      {countChip(374, "2? 3? 4?", AMBER, beat >= 6, dl(6, 6))}
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={560} y={374} size={13} fill={MUTED} script anchor="start">
          {t("honest answer: demand sci. notation", "imaandar jawab: sci. notation maango")}
        </T>
      </Fade>

      {/* beat 7 — rules 6 and 7 */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={96} y={430} size={15} fill={INK} script anchor="start">
          {t("the power of ten — never", "ten ki power — kabhi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={440} y={430} size={20} fill={GREEN} weight={700} anchor="start">7.00</T>
        <T x={481} y={430} size={20} fill={RED} weight={700} anchor="start">× 10⁸</T>
      </Fade>
      {countChip(430, "3 sf — not 11", GREEN, beat >= 7, dl(7, 6))}
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={96} y={486} size={15} fill={INK} script anchor="start">
          {t("unit change never changes count", "unit badlo — count wahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={440} y={486} size={20} fill={GREEN} weight={700} anchor="start">164 mm</T>
        <T x={528} y={486} size={20} fill={INK_LIGHT} weight={600} anchor="start">=</T>
        <T x={549} y={486} size={20} fill={GREEN} weight={700} anchor="start">0.164 m</T>
      </Fade>
      {countChip(486, "3 sf → 3 sf", GREEN, beat >= 7, dl(7, 16))}
      <Fade on={beat >= 7} delay={dl(7, 20)}>
        <T x={540} y={560} size={15} fill={GREEN} script>
          {t(
            "the measurement didn't change — so the count cannot",
            "measurement nahi badla — to count badal hi nahi sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
