/**
 * M11 Ch11 · Section 23 — "Speed trap: how many lie below the floor?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples, JSON-flagged "speed trap" -> a tempting WRONG answer is staged,
 * crossed out in red, THEN the correct one lands (not skipped straight to). FLAGGED HIGH-SCRUTINY.
 *
 * Points: A(-1,-2,-3), B(2,-5,4), C(-6,7,-1), D(3,8,-2). "Below the XY-plane" = z<0.
 * Independently hand-verified z-signs (not just trusting the JSON's claimed answer):
 *   A: z=-3 -> below.  B: z=4 -> NOT below.  C: z=-1 -> below.  D: z=-2 -> below.
 *   count(z<0) = 3 (A, C, D). Matches JSON's seq5/seq6 exactly.
 *
 * THE STAGED TRAP (invented visual, grounded in a real classic error — every one of the 4 points
 * has *some* negative coordinate: A(-,-,-), B(+,-,+), C(-,+,-), D(+,+,-). A rushed "does it have a
 * minus sign anywhere?" scan (ignoring which axis) wrongly flags all 4 -> tempting wrong count = 4.
 * The corrective rule ("ignore x and y entirely") is exactly what invalidates that scan — B's only
 * minus is on y, not z. So: beat2 stages the naive "any negative?" tally at 4, beat3's rule crosses
 * it out (crossD, red), beat4 shows the real per-point z-only scan (JSON's own line, reused as-is),
 * beat5 lands the correct boxed count=3. This is the required "wrong -> cross-out -> right" beat,
 * not a footnote.
 *
 * RIGHT-SIDE DIAGRAM: deliberately NOT a full 3D octant plot (that would itself be the over-
 * computation the section warns against). Instead a single z-axis "floor" diagram — every point
 * plotted only by its z-height against a floor line at z=0 — visually enacts the section's own
 * instruction ("ignore x and y entirely"): x and y are simply never drawn.
 *   axis: arrowD(650,560,650,170) (z increases upward, standard convention)
 *   floor (z=0): lineD(600,380,1000,380)
 *   scale 36px/unit, y(z) = 380 - 36*z:
 *     A z=-3 -> y=380+108=488   B z=4 -> y=380-144=236
 *     C z=-1 -> y=380+36=416    D z=-2 -> y=380+72=452
 *   All safe-area-checked (x in[36,1044] y in[30,596]); labels at x670 (A/C/D y-spacing 36px,
 *   text box ~15.6px tall -> ~20px clear; B isolated far above, no crowding).
 *   Point colour is a plain function of `beat` (beat<4 -> neutral INK; beat>=4 -> GREEN filled if
 *   z<0, hollow MUTED-outline if not) — same element recolours in place rather than swapping nodes,
 *   since a colour change needs no draw-in animation of its own.
 *
 * reveals_english = [0, 9.64, 22.87, 38.57, 48.73, 69.29, 76.89, 88.83] (8 values, beats 0-7).
 * reveals_hinglish = [0, 8.19, 21.08, 34.9, 43.35, 54.95, 61.95, 73.39].
 *
 * Beats:
 *  0 (title, always-on) | "Speed trap: how many lie below the floor?"
 *  1 | given: list the 4 points (left) + plot them neutral on the z-floor diagram (right)
 *  2 | rule: "below" means z<0 + shade the below-floor region + STAGE the wrong tally "= 4?"
 *  3 | corrective rule: "scan only z, ignore x,y" -> cross out the wrong tally
 *  4 | JSON's own per-point scan (red note) + recolour diagram dots correctly + check marks
 *  5 | boxed correct answer: count(z<0) = 3
 *  6 | meta: the trap wastes a minute (underline emphasis)
 *  7 | red-margin closing tip: read what's asked before you compute
 *
 * Left column (narration/tally) x60-480. Right diagram (z-floor) x560-1044. Gutter ~80px.
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
  MUTED,
  AMBER,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD } from "./math-kit";

const AXIS_X = 650;
const Z0_Y = 380; // floor (z=0) screen y
const ZSCALE = 36;
const zY = (z: number) => Z0_Y - ZSCALE * z;

type Pt = { name: string; coord: string; z: number; below: boolean };
const POINTS: Pt[] = [
  { name: "A", coord: "A(-1, -2, -3)", z: -3, below: true },
  { name: "B", coord: "B(2, -5, 4)", z: 4, below: false },
  { name: "C", coord: "C(-6, 7, -1)", z: -1, below: true },
  { name: "D", coord: "D(3, 8, -2)", z: -2, below: true },
];
// hand-verified y's: A=488, B=236, C=416, D=452 (all within safe y 30-596)

const BADGE_XS = [100, 140, 180, 220];

export default function M11Ch11Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Speed trap: how many lie below the floor?", "Speed trap: kitne floor ke neeche hain?")}
        </T>
      </Fade>

      {/* beat 1 — given: list the points, plot them neutral on the z-floor diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          Points A(-1, -2, -3), B(2, -5, 4),
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          C(-6, 7, -1), D(3, 8, -2).
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={arrowD(AXIS_X, 560, AXIS_X, 170)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(600, Z0_Y, 1000, Z0_Y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={AXIS_X} y={158} size={14} fill={INK} anchor="middle" weight={700}>z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={605} y={373} size={12} fill={MUTED} anchor="start">
          {t("z = 0 (floor)", "z = 0 (floor)")}
        </T>
      </Fade>
      {POINTS.map((p, i) => (
        <Fade key={p.name} on={beat >= 1} delay={dl(1, 1.9 + i * 0.35)}>
          <Circle
            cx={AXIS_X}
            cy={zY(p.z)}
            r={5}
            fill={beat >= 4 ? (p.below ? GREEN : CREAM) : INK}
            stroke={beat >= 4 && !p.below ? MUTED : "none"}
            strokeWidth={2}
          />
          <T x={670} y={zY(p.z) + 4} size={13} fill={INK} anchor="start">
            {p.coord}
          </T>
        </Fade>
      ))}

      {/* beat 2 — rule: below = z<0; shade the below-floor region; STAGE the wrong tally */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t(
            "'Below the XY-plane' just means z < 0",
            "'Neeche' ka matlab z < 0 hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={600} y={Z0_Y} width={400} height={180} fill={GREEN} opacity={0.08} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={60} y={185} size={13} fill={MUTED} anchor="start">
          {t("First glance: 'has a -' anywhere?", "Pehli nazar: kahin bhi '-' hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        {BADGE_XS.map((x, i) => (
          <T key={i} x={x} y={212} size={12} fill={INK} anchor="middle" weight={700}>
            {POINTS[i].name}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        {BADGE_XS.map((x, i) => (
          <Circle key={i} cx={x} cy={234} r={7} fill={AMBER} stroke={INK} strokeWidth={1} />
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={250} y={239} size={18} fill={RED} anchor="start" weight={700}>
          = 4?
        </T>
      </Fade>

      {/* beat 3 — corrective rule: scan only z, ignore x and y -> cross out the wrong tally */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={295} size={14} fill={INK} anchor="start">
          {t("So scan only the z-coordinate;", "Toh sirf z-coordinate dekho;")}
        </T>
        <T x={60} y={318} size={14} fill={INK} anchor="start">
          {t("ignore x and y entirely.", "x aur y ko pura ignore karo.")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={crossD(85, 198, 205, 50)} stroke={RED} sw={3} dur={0.6} />

      {/* beat 4 — the real scan (JSON's own line) + recolour the diagram + check marks */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={352} size={14} fill={RED} anchor="start" weight={700}>
          A: z=-3 yes.  B: z=4 no.  C: z=-1 yes.  D: z=-2 yes.
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        {BADGE_XS.map((x, i) => (
          <T key={i} x={x} y={385} size={12} fill={INK} anchor="middle" weight={700}>
            {POINTS[i].name}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.85)}>
        {BADGE_XS.map((x, i) => (
          <Circle
            key={i}
            cx={x}
            cy={407}
            r={7}
            fill={POINTS[i].below ? GREEN : CREAM}
            stroke={POINTS[i].below ? INK : MUTED}
            strokeWidth={POINTS[i].below ? 1 : 2}
          />
        ))}
      </Fade>
      {POINTS.filter((p) => p.below).map((p, i) => {
        const x = BADGE_XS[POINTS.indexOf(p)];
        return (
          <Draw
            key={p.name}
            on={beat >= 4}
            delay={dl(4, 1.1 + i * 0.2)}
            d={checkD(x, 396, 12)}
            stroke={GREEN_DARK}
            sw={2}
            dur={0.3}
          />
        );
      })}

      {/* beat 5 — boxed correct answer */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={255} y={391} w={170} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          count(z &lt; 0) = 3
        </Chip>
      </Fade>

      {/* beat 6 — meta: the trap wastes a minute */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={453} size={14} fill={INK} anchor="start">
          {t("The trap: fully classifying", "Trap ye hai: har point ko")}
        </T>
        <T x={60} y={476} size={14} fill={INK} anchor="start">
          {t("each point wastes a minute.", "poora classify karna time waste karta hai.")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d={lineD(60, 483, en ? 253 : 300, 483)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />

      {/* beat 7 — red-margin closing tip */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 507 L 60 547" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={531} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Read what is actually asked before you compute.",
            "Compute karne se pehle padho ki actually poocha kya gaya hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
