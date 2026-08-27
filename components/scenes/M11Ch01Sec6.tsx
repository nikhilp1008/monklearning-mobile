/**
 * M11 Ch01 · Section 6 — "Speed trap: which set is empty?"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (SPEED TRAP).
 *
 * Beats (board_reveal_at_english [0, 10.84, 25.69, 39.25, 49.49, 66.99]):
 *  0 title (always-on)
 *  1 present the four options (a)(b)(c)(d)
 *  2 (a): x² = -1, no real solution → EMPTY
 *  3 (d): smallest natural is 1, none < 1 → EMPTY
 *  4 SPEED TRAP: stage "EMPTY?" on (b)/(c) (the decoys), cross it out, land the
 *    correction — (b)={2} NOT empty, (c)={0} NOT empty
 *  5 LAND: check the universe FIRST — N starts at 1 kills (d) instantly
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | rows (a)-(d)                | T st (18) | x100 y120/150/180/210
 *  b2 | "EMPTY ✓" chip row a        | Chip      | x420 y103 w100 h26
 *  b3 | "EMPTY ✓" chip row d        | Chip      | x420 y193 w100 h26
 *  b4 | "EMPTY?" chip row b (red)   | Chip      | x420 y133 w100 h26
 *  b4 | cross-out over it           | Draw      | x420 y133 w100 h26
 *  b4 | "= {2} NOT empty" (green)   | Chip      | x540 y133 w180 h26
 *  b4 | "EMPTY?" chip row c (red)   | Chip      | x420 y163 w100 h26
 *  b4 | cross-out over it           | Draw      | x420 y163 w100 h26
 *  b4 | "= {0} NOT empty" (green)   | Chip      | x540 y163 w180 h26
 *  b5 | verdict box, 2 lines        | rect+T    | x180..900 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  { s: "(a)   {x ∈ R : x² + 1 = 0}", y: 120 },
  { s: "(b)   {x : x is an even prime}", y: 150 },
  { s: "(c)   {0}", y: 180 },
  { s: "(d)   {x ∈ N : x < 1}", y: 210 },
];

export default function M11Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("spot the empty set — fast", "empty set pehchano — fast")}
        </T>
      </Fade>

      {/* beat 1 — the four options */}
      {ROWS.map((row, i) => (
        <Fade key={row.s} on={beat >= 1} delay={dl(1, 0.3 + i * 0.6)}>
          <T x={100} y={row.y} size={18} fill={INK} anchor="start" weight={600}>
            {row.s}
          </T>
        </Fade>
      ))}

      {/* beat 2 — (a) is empty: no real solution */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={420} y={103} w={100} h={26} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"EMPTY ✓"}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={120} size={14} fill={AMBER_DARK} script anchor="start">
          {t("x² = -1 has no real solution", "x² = -1 ka real solution nahi")}
        </T>
      </Fade>

      {/* beat 3 — (d) is empty: naturals start at 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={420} y={193} w={100} h={26} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"EMPTY ✓"}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={210} size={14} fill={AMBER_DARK} script anchor="start">
          {t("smallest natural is 1 — none < 1", "smallest natural 1 hai — koi < 1 nahi")}
        </T>
      </Fade>

      {/* beat 4 — SPEED TRAP: stage the decoy guess, cross it, land correction */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={420} y={133} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"EMPTY?"}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 4}
        d={crossD(420, 133, 100, 26)}
        stroke={RED}
        sw={2.2}
        delay={dl(4, 1.1)}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <Chip x={540} y={133} w={190} h={26} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("= {2} — NOT empty", "= {2} — empty NAHI")}
        </Chip>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <Chip x={420} y={163} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"EMPTY?"}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 4}
        d={crossD(420, 163, 100, 26)}
        stroke={RED}
        sw={2.2}
        delay={dl(4, 3.7)}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <Chip x={540} y={163} w={190} h={26} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("= {0} — NOT empty", "= {0} — empty NAHI")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={100} y={245} size={15} fill={RED} script anchor="start">
          {t("both are decoys — don't fall for them", "dono decoys hain — inme mat phaso")}
        </T>
      </Fade>

      {/* beat 5 — LAND: check the universe first */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={180} y={495} width={720} height={80} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={528} size={18} fill={INK} weight={700}>
          {t("speed move: check the universe FIRST", "speed move: pehle universe check karo")}
        </T>
        <T x={540} y={556} size={16} fill={AMBER_DARK} weight={700}>
          {t("N starts at 1 ⇒ (d) empty INSTANTLY — no arithmetic", "N 1 se shuru — (d) turant EMPTY, calculation nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
