/**
 * C11 Chemistry Ch03 · Section 11 — "Worked example: spotting false universals (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.01, 17.15, 24.58, 30.63, 39.17, 54.19, 67.58, 75.86]):
 *  0 title + underline
 *  1 Statement I: octaves stayed valid up to and beyond iron
 *  2 Statement II: Doebereiner's rule applies to every triad-like trio
 *  3 Statement III: Mendeleev arranged elements primarily by atomic weight
 *  4 instruction: eliminate on known limits, don't compute
 *  5 red-margin: I ✗ FALSE — strike-through + reason (broke after calcium)
 *  6 II ✗ FALSE — strike-through + reason (many trios aren't triads)
 *  7 III ✓ TRUE — reason (textbook definition)
 *  8 answer stamp: exactly 1 correct (III) + closing insight
 *
 * Layout plan:
 *  b1 | Statement I row             | Draw  | x70..1010 y96..146
 *  b2 | Statement II row            | Draw  | x70..1010 y154..204
 *  b3 | Statement III row           | Draw  | x70..1010 y212..262
 *  b4 | instruction (script 15)     | T mid | x?..?     y271..296 (bl 290)
 *  b5 | I strike + FALSE tag        | Draw  | row1
 *  b5 | reason 1 (14, red)          | T st  | x94..?    y316..330 (bl 330)
 *  b6 | II strike + FALSE tag       | Draw  | row2
 *  b6 | reason 2 (14, red)          | T st  | x94..?    y342..356 (bl 356)
 *  b7 | III TRUE tag                | Chip  | row3
 *  b7 | reason 3 (14, green)        | T st  | x94..?    y368..382 (bl 382)
 *  b8 | answer stamp (green)        | Chip  | x280..800 y410..450
 *  b8 | note (script 13, muted)     | T mid | x?..?     y460..474 (bl 470)
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
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function StatementRow({
  on,
  delay,
  y,
  numeral,
  text,
}: {
  on: boolean;
  delay: number;
  y: number;
  numeral: string;
  text: string;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Rect x={70} y={y} width={940} height={50} rx={4} fill="none" stroke={MUTED} strokeWidth={1.6} />
      <Circle cx={100} cy={y + 25} r={16} fill="none" stroke={INK} strokeWidth={1.6} />
      <T x={100} y={y + 30.5} size={14} fill={INK} weight={800}>{numeral}</T>
      <T x={130} y={y + 30} size={15} fill={INK} anchor="start">{text}</T>
    </Fade>
  );
}

export default function C11Ch03Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("how many statements are correct? (NEET)", "kitne statements sahi hain? (NEET)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      <StatementRow
        on={beat >= 1}
        delay={dl(1, 0.2)}
        y={96}
        numeral="I"
        text={t("Newlands' octaves stayed valid up to and beyond iron", "Newlands ke octaves iron tak aur uske aage valid rahe")}
      />
      <StatementRow
        on={beat >= 2}
        delay={dl(2, 0.2)}
        y={154}
        numeral="II"
        text={t("Doebereiner's mass-rule applies to every triad-like trio", "Doebereiner ka mass-rule har triad-like trio par lagu hota")}
      />
      <StatementRow
        on={beat >= 3}
        delay={dl(3, 0.2)}
        y={212}
        numeral="III"
        text={t("Mendeleev arranged elements primarily by atomic weight", "Mendeleev ne elements ko mainly atomic weight se arrange kiya")}
      />

      {/* beat 4 — the strategy: eliminate, don't compute */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={290} size={15} fill={MUTED} script>
          {t("eliminate on known limits — don't compute", "known limits pe eliminate karo — compute mat karo")}
        </T>
      </Fade>

      {/* beat 5 — I is false */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 130 121 L 620 121" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={900} y={104} w={100} h={34} fill={RED} textFill="#fff" size={13} script={false}>
          {t("FALSE", "FALSE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={94} y={330} size={14} fill={RED} anchor="start">
          {t("I ✗ — octaves broke after CALCIUM (Z=20), not iron", "I ✗ — octaves CALCIUM (Z=20) ke baad toote, iron nahi")}
        </T>
      </Fade>

      {/* beat 6 — II is false */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 130 179 L 650 179" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={900} y={162} w={100} h={34} fill={RED} textFill="#fff" size={13} script={false}>
          {t("FALSE", "FALSE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={94} y={356} size={14} fill={RED} anchor="start">
          {t("II ✗ — many trios aren't real triads (averaging fails)", "II ✗ — kai trios asli triad nahi (averaging fail)")}
        </T>
      </Fade>

      {/* beat 7 — III is true */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={900} y={220} w={100} h={34} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("TRUE", "TRUE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={94} y={382} size={14} fill={GREEN} anchor="start">
          {t("III ✓ — textbook definition of Mendeleev's law", "III ✓ — Mendeleev ki law ki textbook definition")}
        </T>
      </Fade>

      {/* beat 8 — the answer */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={280} y={410} w={520} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("exactly 1 statement is correct (III)", "sirf 1 statement sahi hai (III)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <T x={540} y={470} size={13} fill={MUTED} script>
          {t("both false ones oversell a limited pattern as a universal law", "dono false ek limited pattern ko universal law bata dete")}
        </T>
      </Fade>
    </Scene>
  );
}
