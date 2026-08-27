/**
 * M11 Ch02 · Section 2 — "The Cartesian product A × B and the grid picture"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED for extra eye-check (grid-picture geometry).
 *
 * Beats (board_reveal_at_english [0, 10.92, 30.63, 47.53, 67.84, 81.92, 95.91]):
 *  0 title (heading, always-on) · 1 formula A×B={(a,b):a∈A and b∈B}, built term by term
 *  2 pronunciation/slot-rule note · 3 THE GRID: A up the side, B along the bottom,
 *    6 green meeting points labelled with their pairs (hand-placed, no grid primitive)
 *  4 contrast: A×B vs B×A (same info, opposite slots) · 5 guardrail: A×B ≠ B×A in general
 *  6 land: R×R = every point of the plane
 *
 * Layout plan — boxes are estimated render boxes (Anek ≈ baseline −0.78·size … +0.31·size),
 * longer language counts:
 *  b0 | title (script 28, red)         | T mid   | x310..770  y34..84  (bl 70)
 *  b1 | "A × B" (28,amber,w800)        | T st    | x335..405  y102..138 (bl 130)
 *  b1 | "=" (28)                        | T st    | x425..439  y102..138 (bl 130)
 *  b1 | "{(a,b): a∈A and b∈B}" (22)    | T st    | x459..745  y107..137 (bl 130)
 *  b2 | pronunciation note (17)        | T st    | x120..528  y171..191 (bl 185)
 *  b3 | vertical axis                   | Draw    | x220  y250..430
 *  b3 | horizontal axis                 | Draw    | x220..650  y430
 *  b3 | row labels L/M/S (14,amber)     | T end   | x188..195  y270/330/390
 *  b3 | "A" label (14,amber)            | T end   | x188..195  y242
 *  b3 | col labels Adrak/Elaichi (14,green) | T mid | x495..545 / x495..545  y452
 *  b3 | "B" label (14,green)            | T st    | x665..672  y452
 *  b3 | 3 horiz + 2 vert gridlines (muted, thin) | Draw | within x220..650 y250..430
 *  b3 | 6 green dots + pair labels (12) | dot+T   | cols x350/520  rows y270/330/390
 *  b4 | contrast line (16)              | T mid   | x292..788  y480..500 (bl 495)
 *  b5 | margin bar (red)                | Draw    | x60  y515..545
 *  b5 | guardrail text (16, red)        | T st    | x76..476   y518..541 (bl 535)
 *  b6 | R×R statement (16)              | T mid   | x328..752  y560..580 (bl 575)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, IntervalDot } from "./math-kit";

const AXIS_X = 220;
const AXIS_Y_TOP = 250;
const AXIS_Y_BOTTOM = 430;
const AXIS_X_RIGHT = 650;

const ROWS = [
  { label: "L", y: 270 },
  { label: "M", y: 330 },
  { label: "S", y: 390 },
];
const COLS = [
  { label: "Adrak", x: 350 },
  { label: "Elaichi", x: 520 },
];

export default function M11Ch02Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} anchor="middle" script>
          {t("The Cartesian Product A × B", "Cartesian Product A × B")}
        </T>
      </Fade>

      {/* beat 1 — build the formula term by term */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={335} y={130} size={28} fill={AMBER_DARK} anchor="start" weight={800}>
          A × B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={425} y={130} size={28} fill={INK} anchor="start" weight={800}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={459} y={130} size={22} fill={INK} anchor="start" weight={700}>
          {"{(a, b) : a ∈ A and b ∈ B}"}
        </T>
      </Fade>

      {/* beat 2 — how to read it aloud, the slot rule */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={120} y={185} size={17} fill={INK_LIGHT} anchor="start">
          {t(
            '"A cross B": 1st coordinate from A, 2nd from B',
            '"A cross B": pehla coordinate A se, dusra B se'
          )}
        </T>
      </Fade>

      {/* beat 3 — THE GRID: hand-placed A×B meeting points */}
      <Draw
        on={beat >= 3}
        d={lineD(AXIS_X, AXIS_Y_TOP, AXIS_X, AXIS_Y_BOTTOM)}
        stroke={INK}
        sw={2}
        delay={dl(3, 0)}
      />
      <Draw
        on={beat >= 3}
        d={lineD(AXIS_X, AXIS_Y_BOTTOM, AXIS_X_RIGHT, AXIS_Y_BOTTOM)}
        stroke={INK}
        sw={2}
        delay={dl(3, 0.15)}
      />
      {ROWS.map((r) => (
        <Fade key={`rl-${r.label}`} on={beat >= 3} delay={dl(3, 0.4)}>
          <T x={195} y={r.y + 5} size={14} fill={AMBER_DARK} anchor="end">
            {r.label}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={195} y={242} size={14} fill={AMBER_DARK} anchor="end" weight={700}>
          A
        </T>
      </Fade>
      {COLS.map((c) => (
        <Fade key={`cl-${c.label}`} on={beat >= 3} delay={dl(3, 0.6)}>
          <T x={c.x} y={452} size={14} fill={GREEN_DARK} anchor="middle">
            {c.label}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={665} y={452} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          B
        </T>
      </Fade>
      {ROWS.map((r) => (
        <Draw
          key={`gh-${r.label}`}
          on={beat >= 3}
          d={lineD(AXIS_X, r.y, AXIS_X_RIGHT, r.y)}
          stroke={MUTED}
          sw={1}
          delay={dl(3, 0.85)}
        />
      ))}
      {COLS.map((c) => (
        <Draw
          key={`gv-${c.label}`}
          on={beat >= 3}
          d={lineD(c.x, AXIS_Y_TOP, c.x, AXIS_Y_BOTTOM)}
          stroke={MUTED}
          sw={1}
          delay={dl(3, 0.85)}
        />
      ))}
      {ROWS.map((r, ri) =>
        COLS.map((c, ci) => {
          const idx = ri * COLS.length + ci;
          return (
            <React.Fragment key={`d-${r.label}-${c.label}`}>
              <IntervalDot on={beat >= 3} delay={dl(3, 1.1 + idx * 0.25)} x={c.x} y={r.y} open={false} r={5} stroke={GREEN} />
              <Fade on={beat >= 3} delay={dl(3, 1.1 + idx * 0.25)}>
                <T x={c.x + 10} y={r.y - 8} size={12} fill={INK} anchor="start">
                  {`(${r.label}, ${c.label})`}
                </T>
              </Fade>
            </React.Fragment>
          );
        })
      )}

      {/* beat 4 — contrast: A×B vs B×A */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={495} size={16} fill={INK} anchor="middle">
          {t(
            "A×B pairs sizes-then-flavours; B×A pairs flavours-then-sizes",
            "A×B mein size-phir-flavour; B×A mein flavour-phir-size"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: A×B ≠ B×A in general */}
      <Draw on={beat >= 5} d={lineD(60, 515, 60, 545)} stroke={RED} sw={3} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={76} y={535} size={16} fill={RED} anchor="start">
          {t(
            "A×B ≠ B×A in general — same info, opposite slots",
            "A×B ≠ B×A generally — same info, ulte slots mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — land: R×R is the whole plane */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={575} size={16} fill={GREEN} anchor="middle" weight={700}>
          {t(
            "R × R = all pairs (x, y) = every point of the plane",
            "R × R = sabhi (x, y) pairs = plane ka har point"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
