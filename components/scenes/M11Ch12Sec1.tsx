/**
 * M11 Ch12 · Section 1 — "A limit is a destination, not an arrival"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens the chapter and subtopic 1 (Limits: Concepts & Algebra).
 * Reference exemplar for Chapter 12 — first use of <Frac>/<Limit> in this chapter.
 *
 * board_reveal_at_english = [0, 13.48, 24.15, 34.56, 40.36, 53.33, 71.08, 80.13] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 11.78, 20.22, 29.18, 35.93, 45.14, 62.46, 72.45].
 *
 * Two-column layout: LEFT (x60-650) carries the algebra build (statement → red note is
 * on the RIGHT instead, paired with the graph); RIGHT (x700-1044) carries the red-margin
 * guardrail note + the graph demo. Columns separated by a >=200px gutter.
 *
 * Beats:
 *  0(title, always-on) | "A limit is a destination, not an arrival"
 *  1 | LEFT: statement "As x→a, the limit is the value f(x) heads toward" + underline
 *  2 | RIGHT: red-margin note — depends on neighbourhood of a, never f(a) itself
 *  3 | LEFT: f(x) = (x²−1)/(x−1)  [<Frac>, high emphasis]
 *  4 | LEFT: f(1) = (1²−1)/(1−1) = 0/0, ringed, stamped "undefined"
 *  5 | RIGHT: THE GRAPH — y=x+1 line with open hole at (1,2), approach arrows both sides
 *  6 | LEFT: for x≠1, (x²−1)/(x−1) = (x−1)(x+1)/(x−1) = x+1 [cancel ticks]
 *  7 | LEFT: lim(x→1) (x²−1)/(x−1) = 2  [<Limit>+<Frac>, boxed green "2", high emphasis]
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | statement line (15,ink)            | T st   | x60..465(en)/525(hi) y100..117 (bl108)
 *  b1 | underline under statement          | Draw   | x58..469(en)/527(hi) y126
 *  b2 | red bar                            | Draw   | x700 y92..155
 *  b2 | note line1/2 (15,red,w700)         | T st   | x716..~950 y112/140
 *  b3 | "f(x) =" (24,ink,w700)             | T st   | x60..144   y210 (bl210)
 *  b3 | Frac x²−1 / x−1 (24,ink)           | Frac   | x145..270  y~177..234
 *  b4 | "f(1) =" (22,red,w700)             | T st   | x60..137   y300
 *  b4 | Frac 1²−1 / 1−1 (22,red)           | Frac   | x180..270  y~267..324
 *  b4 | "=" (22,red)                       | T mid  | x318..332  y300
 *  b4 | Frac 0/0 (26,red)                  | Frac   | x316..374  y~249..334
 *  b4 | ring around 0/0                    | Draw   | ringD(345,291,29,32)
 *  b4 | "— undefined" (20,red,w800)        | T st   | x390..~560 y300
 *  b5 | axes o(760,420) x700-910 y250-430  | Cartesian | box x700..910 y250..430
 *  b5 | line y=x+1 (ink)                   | Draw   | (740,400)..(892,248)
 *  b5 | dashed guides to (1,2) (muted)     | path(Fade)| x760..800 y340..420
 *  b5 | open hole at (1,2) (red)           | IntervalDot | (800,340) r5
 *  b5 | tick "1"/"2" (13,muted)            | T      | (800,436) / (748,344)
 *  b5 | "y = x+1" label (14,ink,w700)      | T end  | x823..886  y223..238
 *  b5 | approach arrows both sides (red)   | Draw   | (770,370)->(792,348) / (830,310)->(808,332)
 *  b5 | "from left"/"from right" (12,red)  | T st   | x735 y395 / x828 y298
 *  b5 | "(1, 2)" label (13,muted)          | T st   | x812 y328
 *  b5 | caption (13,muted)                 | T mid  | x805 y456
 *  b6 | "For x ≠ 1:" (16,ink,w600)         | T st   | x60..140   y380
 *  b6 | Frac (x−1)(x+1) / x−1 (22,ink)     | Frac   | x155..305  y~360..410
 *  b6 | cancel ticks (amber)               | Draw   | over num/denom (x−1) terms
 *  b6 | "=" (22,ink)                       | T mid  | x318..332  y390
 *  b6 | "x + 1" (24,ink,w700)              | T st   | x370..430  y390
 *  b7 | Limit x→1 (26,ink)                 | Limit  | x70..116   y~482..522
 *  b7 | Frac x²−1 / x−1 (26,ink)           | Frac   | x145..255  y~467..519
 *  b7 | "=" (28,ink)                       | T mid  | x266..294  y502
 *  b7 | boxed "2" (24,green)               | Chip   | x305..361  y485..523
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, IntervalDot, Frac, Limit } from "./math-kit";

export default function M11Ch12Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("A limit is a destination, not an arrival", "Limit ek destination hai, arrival nahin")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: the statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={108} size={15} fill={INK} anchor="start">
          {t(
            "As x → a, the limit is the value f(x) heads toward.",
            "Jaise x → a, f(x) jis value ki taraf jaata hai — wahi limit."
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        d={en ? "M58 126 L469 126" : "M58 126 L527 126"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(1, 0.9)}
      />

      {/* beat 2 — RIGHT: red-margin guardrail note */}
      <Draw on={beat >= 2} d="M700 92 L700 155" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={716} y={112} size={15} fill={RED} anchor="start" weight={700}>
          {t("Depends on the neighbourhood of a —", "Sirf a ke aas-paas par depend —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={716} y={140} size={15} fill={RED} anchor="start" weight={700}>
          {t("never on f(a) itself.", "kabhi f(a) par nahin.")}
        </T>
      </Fade>

      {/* beat 3 — LEFT: f(x) = (x²-1)/(x-1) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={210} size={24} fill={INK} anchor="start" weight={700}>
          f(x) =
        </T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 0.4)} x={215} y={210} size={24} numerator="x² − 1" denominator="x − 1" width={110} fill={INK} />

      {/* beat 4 — LEFT: substitute x=1, land on 0/0, ring it, stamp undefined */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={300} size={22} fill={RED} anchor="start" weight={700}>
          f(1) =
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 0.3)} x={225} y={300} size={22} numerator="1² − 1" denominator="1 − 1" width={90} fill={RED} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={325} y={300} size={22} fill={RED} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 0.9)} x={345} y={300} size={26} numerator="0" denominator="0" width={30} fill={RED} />
      <Draw on={beat >= 4} d={ringD(345, 291, 29, 32)} stroke={RED} sw={2} delay={dl(4, 1.3)} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={390} y={300} size={20} fill={RED} anchor="start" weight={800}>
          {t("— undefined!", "— undefined hai!")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: the graph — y=x+1 with a hole at (1,2), approached from both sides */}
      <CartesianAxes on={beat >= 5} delay={dl(5, 0)} originX={760} originY={420} xLeft={700} xRight={910} yTop={250} yBottom={430} step={40} />
      <Draw on={beat >= 5} d={lineD(740, 400, 892, 248)} stroke={INK} sw={2.4} delay={dl(5, 0.9)} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Path d="M800 420 L800 340" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
        <Path d="M760 340 L800 340" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      </Fade>
      <IntervalDot on={beat >= 5} delay={dl(5, 2.1)} x={800} y={340} open r={5.5} stroke={RED} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={800} y={436} size={13} fill={MUTED} anchor="middle">
          1
        </T>
        <T x={748} y={344} size={13} fill={MUTED} anchor="end">
          2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={886} y={234} size={14} fill={INK} anchor="end" weight={700}>
          y = x + 1
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M770 370 L792 348 M786 350 L792 348 L788 356" stroke={RED} sw={2} delay={dl(5, 2.6)} />
      <Draw on={beat >= 5} d="M830 310 L808 332 M814 328 L808 332 L812 324" stroke={RED} sw={2} delay={dl(5, 3.3)} />
      <Fade on={beat >= 5} delay={dl(5, 3.7)}>
        <T x={735} y={395} size={12} fill={RED} anchor="start">
          {t("from left", "left se")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <T x={828} y={298} size={12} fill={RED} anchor="start">
          {t("from right", "right se")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={812} y={328} size={13} fill={MUTED} anchor="start">
          (1, 2)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={805} y={456} size={13} fill={MUTED} anchor="middle">
          {t("approaching the hole from both sides", "dono taraf se hole ke paas")}
        </T>
      </Fade>

      {/* beat 6 — LEFT: factor and cancel, x≠1 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={385} size={16} fill={INK} anchor="start" weight={600}>
          {t("For x ≠ 1:", "x ≠ 1 ke liye:")}
        </T>
      </Fade>
      <Frac on={beat >= 6} delay={dl(6, 0.5)} x={230} y={390} size={22} numerator="(x−1)(x+1)" denominator="x − 1" width={150} fill={INK} />
      <Draw on={beat >= 6} d="M181 378 L233 361" stroke={AMBER_DARK} sw={1.8} delay={dl(6, 1.2)} />
      <Draw on={beat >= 6} d="M214 394 L246 404" stroke={AMBER_DARK} sw={1.8} delay={dl(6, 1.5)} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={325} y={390} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={370} y={390} size={24} fill={INK} anchor="start" weight={700}>
          x + 1
        </T>
      </Fade>

      {/* beat 7 — LEFT: land the result, boxed */}
      <Limit on={beat >= 7} delay={dl(7, 0)} x={70} y={502} size={26} condition="x → 1" anchor="start" fill={INK} />
      <Frac on={beat >= 7} delay={dl(7, 0.4)} x={200} y={502} size={26} numerator="x² − 1" denominator="x − 1" width={110} fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={280} y={502} size={28} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)} dim={false}>
        <Chip x={305} y={485} w={56} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={24} script={false}>
          2
        </Chip>
      </Fade>
    </Scene>
  );
}
