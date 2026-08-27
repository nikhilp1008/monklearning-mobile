/**
 * M11 Ch12 · Section 8 — "A 0/0 you cannot factor"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS subtopic 2 (Standard Limits, secs 8-14). Motivates WHY
 * standard limits exist: sin x isn't a polynomial, so the secs1-7 factoring toolkit fails,
 * so mathematicians pre-proved a handful of "junction" limits to reuse.
 *
 * board_reveal_at_english  = [0, 16.3, 26.79, 39.34, 54.61, 62.63, 79.79, 93.53] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 17.83, 29.87, 42.33, 58.45, 66.9, 84.14, 96.85].
 * beat0 = seq1 heading, always-on title — ALSO carries the anchor limit itself
 * (lim(x→0) sin x/x = 0/0, ringed) since seq1 IS the section's anchor/trap. The anchor
 * is gated `beat >= 0` (not `on={true}`) so it still draws-in on cue, only the heading
 * text itself is truly always-on. beats 1-7 = seq2-8, gated `beat >= k`.
 *
 * Two-column layout: LEFT (x60-460) carries the setup narrative (beats1-3, short lines +
 * one small Draw gesture each) then the landed flagship result (beat4, <Limit>, boxed
 * green, HIGH). RIGHT (x630-1040) carries THE DIAGRAM (beat5 — CartesianAxes + y=x line
 * + y=sin x curve, colour-legend distinguishing them, "twins near 0, diverge further out")
 * then the two sibling approximations (beat6) and their landed standard limits (beat7,
 * HIGH, two <Limit>s side by side). Gutter LEFT-end(≤460) to RIGHT-start(650) ≈190-230px.
 *
 * Beats:
 *  0(title, always-on text; anchor gated beat>=0) | "A 0/0 you cannot factor" +
 *    lim(x→0) sin x/x = 0/0 (ringed red)
 *  1 | seq2: sin x is not a polynomial — the factoring toolkit fails. Red underline.
 *  2 | seq3: so we prove a few stubborn limits once, memorise + reuse. Green checkmark.
 *  3 | seq4: standard limits = the junctions of calculus. Small junction/fork icon.
 *  4 | seq5 HIGH: flagship — lim(x→0) sin x/x = 1, boxed green.
 *  5 | seq6: THE DIAGRAM — y=x (amber) and y=sin x (ink) drawn near the origin, legend.
 *  6 | seq7: sibling approximations — e^x ≈ 1+x, ln(1+x) ≈ x (as x→0).
 *  7 | seq8 HIGH: sibling standard limits landed — lim(e^x−1)/x=1, lim ln(1+x)/x=1.
 *
 * Layout plan (x-range × y-range per element):
 *  b0 | title (26,red,script,mid)              | T mid  | x~369..711(en)/297..783(hi) y24..71 (bl58)
 *  b0 | Limit x→0 (20,ink,start)                | Limit  | x395..425  y88..120 (bl104+cond)
 *  b0 | "sin x/x" (20,ink,w700,start)            | T st   | x445..515  y88..110 (bl104)
 *  b0 | "=" (22,ink,mid)                          | T mid  | x549..571  y86..111 (bl104)
 *  b0 | "0/0" (22,red,w800,start)                 | T st   | x600..633  y87..111 (bl104)
 *  b0 | ring around 0/0                           | Draw   | ringD(617,99,31,24)
 *  b1 | line1 (15,ink,start)                      | T st   | x60..270(en)/307(hi) y136..161 (bl148)
 *  b1 | line2 (15,ink,start)                      | T st   | x60..360(en)/383(hi) y160..177 (bl172)
 *  b1 | red underline under line2                 | Draw   | x60..390 y188
 *  b2 | line1 (15,ink,start)                      | T st   | x60..360(en)/420(hi) y202..227 (bl214)
 *  b2 | line2 (15,ink,start)                      | T st   | x60..285(en)/338(hi) y226..251 (bl238)
 *  b2 | checkmark                                 | Draw   | checkD(90,264,14)
 *  b3 | line1 (15,ink,start)                      | T st   | x60..323(en)/336(hi) y288..313 (bl300)
 *  b3 | line2 (15,ink,start)                      | T st   | x60..270(en)/302(hi) y312..337 (bl324)
 *  b3 | junction icon (amber)                     | Draw   | x87..147 y344..368
 *  b4 | Limit x→0 (24,ink,start)                  | Limit  | x70..106  y391..422 (bl410+cond)
 *  b4 | "sin x/x" (24,ink,w700,start)             | T st   | x125..209 y391..410 (bl410)
 *  b4 | "=" (26,ink,mid)                           | T mid  | x229..242 y389..415 (bl410)
 *  b4 | boxed "1" (26,green)                       | Chip   | x260..312 y390..430
 *  b5 | caption (15,amber,w700,mid)                | T mid  | x600..960(en)/~955(hi) y240..257 (bl252)
 *  b5 | legend swatch "y=sin x" (ink)               | Draw+T | x650..742  y270..293
 *  b5 | legend swatch "y=x" (amber)                 | Draw+T | x760..827  y270..293
 *  b5 | axes origin(780,376) x650..920 y300..453    | Cartesian | box x650..920 y300..453
 *  b5 | line y=x (amber)                            | Draw   | (711,445)..(849,307)
 *  b5 | curve y=sin x (ink)                         | Draw   | waveD 711..849 around y376
 *  b6 | "e^x ≈ 1 + x" (17,ink,w700,start)           | T st   | x650..743.5 y478..493 (bl492)
 *  b6 | "ln(1+x) ≈ x" (17,ink,w700,start)           | T st   | x850..943.5 y478..493 (bl492)
 *  b6 | amber underline under both                  | Draw   | x635..965 y509
 *  b6 | "(x → 0)" tag (12,muted,mid)                 | T mid  | x779..821 y520..534 (bl530)
 *  b7 | Limit x→0 A (16,ink,start)                   | Limit  | x630..654  y562..584 (bl574+cond)
 *  b7 | "(e^x−1)/x" (15,ink,start)                    | T st   | x668..735.5 y562..579 (bl574)
 *  b7 | "=" A (17,ink,mid)                            | T mid  | x749.75..758.25 y560..580 (bl574)
 *  b7 | boxed "1" A (16,green)                        | Chip   | x773..807  y560..586
 *  b7 | Limit x→0 B (16,ink,start)                    | Limit  | x833..857  y562..584 (bl574+cond)
 *  b7 | "ln(1+x)/x" (15,ink,start)                     | T st   | x871..938.5 y562..579 (bl574)
 *  b7 | "=" B (17,ink,mid)                             | T mid  | x952.75..961.25 y560..580 (bl574)
 *  b7 | boxed "1" B (16,green)                         | Chip   | x976..1010 y560..586
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
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, waveD, Limit, checkD } from "./math-kit";

const OX = 780;
const OY = 376;
const CURVE_X0 = 711;
const CURVE_X1 = 849;
const PPR = 60;
const AMP = 60;
const PHASE = 1.15;

export default function M11Ch12Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("A 0/0 you cannot factor", "Ye 0/0 jo factor nahi hota")}
        </T>
      </Fade>

      {/* beat 0 — the anchor limit itself, gated (not always-on): lim sin x/x = 0/0 */}
      <Limit on={beat >= 0} delay={dl(0, 0)} x={395} y={104} size={20} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={445} y={104} size={20} fill={INK} anchor="start" weight={700}>
          sin x/x
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={560} y={104} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <T x={600} y={104} size={22} fill={RED} anchor="start" weight={800}>
          0/0
        </T>
      </Fade>
      <Draw on={beat >= 0} d={ringD(617, 99, 31, 24)} stroke={RED} sw={2} delay={dl(0, 1.5)} dur={0.6} />

      {/* beat 1 — LEFT: sin x is not a polynomial, factoring toolkit fails */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={148} size={15} fill={INK} anchor="start">
          {t("sin x is not a polynomial —", "sine x koi polynomial nahi hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={172} size={15} fill={INK} anchor="start">
          {t("the factoring toolkit fails completely.", "poori factoring toolkit fail ho jaati hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M60 188 L390 188" stroke={RED} sw={1.6} delay={dl(1, 0.9)} dur={0.6} />

      {/* beat 2 — LEFT: prove stubborn limits once, memorise + reuse */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={214} size={15} fill={INK} anchor="start">
          {t("So we prove a few stubborn limits once,", "To in ziddi limits ko ek baar prove karte hain,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={238} size={15} fill={INK} anchor="start">
          {t("then memorise and reuse them.", "phir memorise karke reuse karte hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={checkD(90, 264, 14)} stroke={GREEN_DARK} sw={2.2} delay={dl(2, 0.9)} dur={0.5} />

      {/* beat 3 — LEFT: standard limits = the junctions of calculus, small fork icon */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={300} size={15} fill={INK} anchor="start">
          {t("These pre-proven results are the standard", "Ye pehle se proven results hi standard")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={324} size={15} fill={INK} anchor="start">
          {t("limits — the junctions of calculus.", "limits hain — calculus ke junctions.")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        d="M87 344 L112 356 M87 368 L112 356 M112 356 L147 356"
        stroke={AMBER_DARK}
        sw={2}
        delay={dl(3, 0.9)}
        dur={0.6}
      />

      {/* beat 4 — LEFT: flagship result, boxed green, HIGH */}
      <Limit on={beat >= 4} delay={dl(4, 0)} x={70} y={410} size={24} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={125} y={410} size={24} fill={INK} anchor="start" weight={700}>
          sin x/x
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={235} y={410} size={26} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Chip x={260} y={390} w={52} h={40} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={26} script={false}>
          1
        </Chip>
      </Fade>

      {/* beat 5 — RIGHT: THE DIAGRAM — y=x and y=sin x, twins near the origin */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={252} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "Near the origin, y = sin x and y = x are twins",
            "Origin ke paas, y = sin x aur y = x twins hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M650 280 L674 280" stroke={INK} sw={2.4} delay={dl(5, 0.4)} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={684} y={284} size={13} fill={INK} anchor="start">
          y = sin x
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M760 280 L784 280" stroke={AMBER_DARK} sw={2.4} delay={dl(5, 0.9)} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={794} y={284} size={13} fill={AMBER_DARK} anchor="start">
          y = x
        </T>
      </Fade>
      <CartesianAxes
        on={beat >= 5}
        delay={dl(5, 1.6)}
        originX={OX}
        originY={OY}
        xLeft={650}
        xRight={920}
        yTop={300}
        yBottom={453}
        showTicks={false}
      />
      <Draw
        on={beat >= 5}
        d={lineD(CURVE_X0, OY + PHASE * PPR, CURVE_X1, OY - PHASE * PPR)}
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(5, 2.7)}
        dur={1.2}
      />
      <Draw
        on={beat >= 5}
        d={waveD(CURVE_X0, CURVE_X1, OY, AMP, PPR, PHASE, Math.sin)}
        stroke={INK}
        sw={2.6}
        delay={dl(5, 4.0)}
        dur={1.4}
      />

      {/* beat 6 — RIGHT: the sibling approximations */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={650} y={492} size={17} fill={INK} anchor="start" weight={700}>
          e^x ≈ 1 + x
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={850} y={492} size={17} fill={INK} anchor="start" weight={700}>
          ln(1+x) ≈ x
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M635 509 L965 509" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.8)} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={800} y={530} size={12} fill={MUTED} anchor="middle">
          (x → 0)
        </T>
      </Fade>

      {/* beat 7 — RIGHT: sibling standard limits landed, boxed green, HIGH */}
      <Limit on={beat >= 7} delay={dl(7, 0)} x={630} y={574} size={16} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={668} y={574} size={15} fill={INK} anchor="start">
          (e^x−1)/x
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={754} y={574} size={17} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={773} y={560} w={34} h={26} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          1
        </Chip>
      </Fade>
      <Limit on={beat >= 7} delay={dl(7, 1.3)} x={833} y={574} size={16} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={871} y={574} size={15} fill={INK} anchor="start">
          ln(1+x)/x
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={957} y={574} size={17} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Chip x={976} y={560} w={34} h={26} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          1
        </Chip>
      </Fade>
    </Scene>
  );
}
