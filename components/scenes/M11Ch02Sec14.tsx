/**
 * M11 Ch02 · Section 14 — "Worked: roster form of y = x + 2, and counting relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (TOP = Ex1 roster form, BOTTOM = Ex2 counting speed trap).
 *
 * Beats (board_reveal_at_english [0, 17.32, 38.57, 53.08, 71.42, 91.48, 112.13, 128.51]):
 *  0 Ex1 given: R={(x,y):y=x+2} on A={1,...,6}
 *  1 filter chips: 1→3✓ 2→4✓ 3→5✓ 4→6✓ 5→7∉A✗ 6→8∉A✗
 *  2 boxed roster: R={(1,3),(2,4),(3,5),(4,6)}
 *  3 Domain/Range/Codomain line
 *  4 guardrail: 5,6∈A but NOT in domain
 *  5 Ex2 heading: n(A)=3, n(B)=4 — how many relations?
 *  6 boxed: 2^12=4096, non-empty=4095
 *  7 wrong reflexes: 3×4=12 (pairs), 2^(3+4)=128 (added exponent)
 *
 * Layout plan — TOP zone (Ex1, y89..280) + divider + BOTTOM zone (Ex2, y316..434):
 *  b0 | given (18,amber,w700)            | T mid | x342..738  y90..110 (bl 104)
 *  b1 | 6 filter chips (13, h30)          | Chip  | x304..776  y130..160
 *  b2 | chip roster (18,green)           | Chip  | x383..697  y178..214
 *  b3 | Dom/Range/Codomain (15)           | T mid | x326..754  y228..245 (bl 240)
 *  b4 | margin bar (red)                  | Draw  | x60  y258..288
 *  b4 | guardrail (14, red)               | T st  | x76..405   y264..279 (bl 275)
 *  --divider-- y=300
 *  b5 | Ex2 heading (18,amber,w800)      | T mid | x288..792  y311..331 (bl 325)
 *  b6 | chip "2^12=4096;non-empty=4095"  | Chip  | x384..695  y360..402
 *  b7 | wrong reflexes (14)               | T mid | x337..743  y419..434 (bl 430)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

const FILTER: { text: string; ok: boolean }[] = [
  { text: "1→3 ✓", ok: true },
  { text: "2→4 ✓", ok: true },
  { text: "3→5 ✓", ok: true },
  { text: "4→6 ✓", ok: true },
  { text: "5→7 ✗", ok: false },
  { text: "6→8 ✗", ok: false },
];
const CHIP_W = 72;
const CHIP_GAP = 8;
const ROW_START_X = 540 - (6 * CHIP_W + 5 * CHIP_GAP) / 2;

export default function M11Ch02Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} anchor="middle" script>
          {t("Worked Examples — Relations", "Solved Examples — Relations")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={104} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Example 1: R={(x,y): y=x+2} on A={1,...,6}"}
        </T>
      </Fade>

      {/* beat 1 — the filter, six candidates checked */}
      {FILTER.map((f, i) => (
        <Fade key={f.text} on={beat >= 1} delay={dl(1, 0.3 + i * 0.25)}>
          <Chip
            x={ROW_START_X + i * (CHIP_W + CHIP_GAP)}
            y={130}
            w={CHIP_W}
            h={30}
            fill={f.ok ? "#E8F5EC" : "#FCEAE7"}
            stroke={f.ok ? GREEN_DARK : RED}
            textFill={f.ok ? GREEN_DARK : RED}
            size={13}
            script={false}
          >
            {f.text}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — the roster form, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={383} y={178} w={314} h={36} fill={GREEN} textFill="#FFFEFB" size={18} script={false}>
          {"R = {(1,3), (2,4), (3,5), (4,6)}"}
        </Chip>
      </Fade>

      {/* beat 3 — domain, range, codomain */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={240} size={15} fill={INK} anchor="middle">
          {"Domain={1,2,3,4},  Range={3,4,5,6},  Codomain=A={1,...,6}"}
        </T>
      </Fade>

      {/* beat 4 — guardrail: 5,6 in A but not in domain */}
      <Draw on={beat >= 4} d="M 60 258 L 60 288" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={76} y={275} size={14} fill={RED} anchor="start">
          {t(
            "5,6 ∈ A but NOT in domain — domain⊆A ≠ all of A",
            "5,6 A mein hain par domain mein NAHI — domain⊆A, poora A nahi"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 5} d="M 100 300 L 980 300" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — Example 2 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={325} size={18} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t(
            "Example 2 (JEE speed trap): n(A)=3, n(B)=4 — relations?",
            "Example 2 (JEE speed trap): n(A)=3, n(B)=4 — kitne relations?"
          )}
        </T>
      </Fade>

      {/* beat 6 — the correct count, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={384} y={360} w={311} h={42} fill={GREEN} textFill="#FFFEFB" size={19} script={false}>
          {"2^12 = 4096;  non-empty = 4095"}
        </Chip>
      </Fade>

      {/* beat 7 — the wrong reflexes, named */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={430} size={14} fill={INK} anchor="middle">
          {t(
            "Wrong: 3×4=12 (PAIR count); 2^(3+4)=128 (added exponent)",
            "Galat: 3×4=12 (PAIR count); 2^(3+4)=128 (exponent mein add)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
