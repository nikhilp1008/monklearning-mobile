/**
 * M11 Ch03 · Section 9 — "General definitions, reciprocal pairings and the sign engine"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the ASTC quadrant-sign diagram (CartesianAxes + T labels per
 * quadrant, per spec — no new primitive needed).
 *
 * Beats (board_reveal_at_english [0, 5.12, 17.66, 26.79, 41.39, 55.21, 60.33, 71.77, 79.19]):
 *  0 subtitle: six functions for any radius r
 *  1 formula: sinθ=y/r, cosθ=x/r, tanθ=y/x
 *  2 formula: cscθ=r/y, secθ=r/x, cotθ=x/y
 *  3 explain: r>0 always ⇒ sign fixed by quadrant (data bug: literal — → "-")
 *  4 red-margin (high): pairing rule - cosec↔sine, sec↔cosine, read the third letter
 *  5 heading: All Silver Tea Cups (ASTC)
 *  6 the four quadrant sign labels (pre-placed, color-coded)
 *  7 THE DIAGRAM: axes drawn around the labels + anticlockwise A→S→T→C arc
 *  8 red-margin closer: reciprocals share their parent's sign
 *
 * Layout plan — left column (definitions) x60-460, right region (ASTC) x580-940:
 *  b0 | subtitle (15,amber)                | T st  | x60..330  y88..103 (bl 96)
 *  b1 | chip "sinθ=y/r, cosθ=x/r, tanθ=y/x"| Chip  | x60..460  y120..162
 *  b2 | chip "cscθ=r/y, secθ=r/x, cotθ=x/y"| Chip  | x60..460  y172..214
 *  b3 | "r>0 always..." (15)               | T st  | x60..440  y242..258 (bl 250)
 *  b3 | "(the signs of x and y)." (15)     | T st  | x60..300  y267..283 (bl 275)
 *  b4 | margin bar (red)                   | Draw  | x60  y300..350
 *  b4 | pairing note (14,red)              | T st  | x76..430   y313..347 (2 lines)
 *  b5 | "All Silver Tea Cups (ASTC)" (17,amber,w700)| T mid | x600..920 y104..119 (bl 110)
 *  b6 | 4 quadrant sign labels (color)     | T     | around axes corners
 *  b6 | small I/II/III/IV numerals (muted) | T     | near origin
 *  b7 | axes c(760,270) 300×300, no ticks  | Draw  | x610..910 y120..420
 *  b7 | anticlockwise arc + caption        | Draw/T| r90, caption y460
 *  b8 | margin bar (red)                    | Draw | x60  y500..540
 *  b8 | closer (15,red)                     | T st | x76..500   y520..536 (bl 528)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, angleArcD } from "./math-kit";

const BLUE = "#2563EB";
const PURPLE = "#9333EA";
const OX = 760;
const OY = 270;

export default function M11Ch03Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Definitions, Reciprocals and the Sign Engine", "Definitions, Reciprocals aur Sign Engine")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={96} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Six functions for any radius r", "Kisi bhi radius r ke liye chhe functions")}
        </T>
      </Fade>

      {/* beat 1 — the three primary definitions */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={120} w={400} h={42} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
          sinθ=y/r, cosθ=x/r, tanθ=y/x
        </Chip>
      </Fade>

      {/* beat 2 — the three reciprocal definitions */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={172} w={400} h={42} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
          cscθ=r/y, secθ=r/x, cotθ=x/y
        </Chip>
      </Fade>

      {/* beat 3 — the sign engine */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={250} size={15} fill={INK} anchor="start">
          {t("r > 0 always ⇒ sign fixed by quadrant", "r > 0 hamesha ⇒ sign quadrant se tay")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={60} y={275} size={15} fill={INK} anchor="start">
          {t("- the signs of x and y.", "- x aur y ke signs se.")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: the pairing rule */}
      <Draw on={beat >= 4} d="M 60 300 L 60 350" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={76} y={318} size={14} fill={RED} anchor="start" weight={700}>
          {t("cosec ↔ sine, sec ↔ cosine -", "cosec ↔ sine, sec ↔ cosine -")}
        </T>
        <T x={76} y={340} size={14} fill={RED} anchor="start" weight={700}>
          {t("read the third letter!", "teesra letter padho!")}
        </T>
      </Fade>

      {/* beat 5 — ASTC heading */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={760} y={110} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("All Silver Tea Cups (ASTC)", "All Silver Tea Cups (ASTC)")}
        </T>
      </Fade>

      {/* beat 6 — the four quadrant sign labels, pre-placed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={845} y={160} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("All +", "All +")}
        </T>
        <T x={675} y={160} size={14} fill={BLUE} anchor="end" weight={700}>
          {t("sin, csc +", "sin, csc +")}
        </T>
        <T x={675} y={385} size={14} fill={PURPLE} anchor="end" weight={700}>
          {t("tan, cot +", "tan, cot +")}
        </T>
        <T x={845} y={385} size={14} fill={RED} anchor="start" weight={700}>
          {t("cos, sec +", "cos, sec +")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={792} y={250} size={12} fill={MUTED} anchor="middle">
          I
        </T>
        <T x={728} y={250} size={12} fill={MUTED} anchor="middle">
          II
        </T>
        <T x={728} y={294} size={12} fill={MUTED} anchor="middle">
          III
        </T>
        <T x={792} y={294} size={12} fill={MUTED} anchor="middle">
          IV
        </T>
      </Fade>

      {/* beat 7 — THE DIAGRAM: axes drawn around the labels + rotation arc */}
      <CartesianAxes on={beat >= 7} delay={dl(7, 0)} originX={OX} originY={OY} xLeft={610} xRight={910} yTop={120} yBottom={420} showTicks={false} />
      <Draw on={beat >= 7} d={angleArcD(OX, OY, 95, 0.3, 2.8)} stroke={INK} sw={1.6} delay={dl(7, 0.6)} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={760} y={460} size={13} fill={MUTED} anchor="middle">
          {t("A → S → T → C (anticlockwise)", "A → S → T → C (anticlockwise)")}
        </T>
      </Fade>

      {/* beat 8 — red-margin closer: reciprocals share their parent's sign */}
      <Draw on={beat >= 8} d="M 60 500 L 60 540" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={76} y={524} size={15} fill={RED} anchor="start" weight={700}>
          {t("Reciprocals always share their parent's sign.", "Reciprocal hamesha apne parent ka sign rakhta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
