/**
 * M11 Ch11 · Section 26 — "Common pitfalls and the pro-move"
 * Canvas 1080x620 · safe x36-1044, y30-596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 2 (Coordinate Axes, Planes, and Octants; secs 15-26).
 * Structural precedent: M11Ch09Sec26.tsx (rounded-rect RED trap cards + a closing GREEN pro-tip
 * card) — same role (tips, closes a subtopic). Palette/coordinate-verification convention copied
 * from M11Ch11Sec15.tsx (this chapter's 3D reference exemplar), though this section stays purely
 * symbolic/notational (signs, distances, reflections) rather than plotting a 3D diagram — no
 * project3D/ThreeDAxes needed here since nothing is drawn in 3D space.
 *
 * board_content has 8 items. item[0]=heading (always-on title). items[1..7] gate at beat>=1..7:
 *  b1 | trap A (red): relying on the octant NAME vs knowing its SIGNS (item2, style=red-margin)
 *  b2 | trap B (red): distance from a plane is |x|, never the raw signed x (item3)
 *  b3 | trap C (red): a zero coordinate -> point is ON a plane/axis, in NO octant (item4)
 *  b4 | trap C annotation: examiners plant that stray zero on purpose (item5) — same card, no
 *      new box; underlines the "0" already drawn in beat3 and adds a caption below it.
 *  b5 | trap D (red): reflection sign-count — plane flips 1, axis 2, origin 3 (item6, red-margin)
 *  b6 | pro-tip (green) box + anchor line: Octant I=(+,+,+), Octant VII=(-,-,-) (item7)
 *  b7 | pro-tip continued: z>0 -> I-IV, z<0 -> V-VIII (item8)
 *
 * HAND-VERIFIED facts (every concrete point/sign claim below is checked against the canonical
 * NCERT octant table x:[+,-,-,+,+,-,-,+] y:[+,+,-,-,+,+,-,-] z:[+,+,+,+,-,-,-,-] for I..VIII):
 *  - Octant II signs = (x-,y+,z+) = (-,+,+). Matches table column II exactly.
 *  - dist((-5,1,2), YZ-plane) = |x| = |-5| = 5 (never -5). Directly the JSON's own example.
 *  - P(4,0,-2): y=0, x=4=/=0, z=-2=/=0 -> lies exactly on the y=0 plane (the zx-plane), not on
 *    any axis (would need 2 zero coords) or the origin (would need 3) -> genuinely "no octant."
 *  - Reflection of P(2,3,4) in the XY-plane (z=0 plane) flips only the perpendicular coordinate:
 *    (2,3,4) -> (2,3,-4) [1 flip]. The tempting wrong answer (-2,-3,-4) is 3 flips, i.e. reflection
 *    through the ORIGIN, not the plane — exactly the mistake the mnemonic "plane 1, axis 2,
 *    origin 3" warns against.
 *  - z>0 rows of the table are exactly I,II,III,IV; z<0 rows are exactly V,VI,VII,VIII. Matches
 *    the pro-move claim precisely.
 *
 * reveals_english = [0, 10.58, 25.34, 45.65, 55.89, 67.58, 79.7, 89.26] (8 values, beats 0-7).
 * reveals_hinglish = [0, 10.07, 26.45, 44.12, 54.36, 66.13, 76.63, 87.3].
 * All inter-beat gaps (>=9.5s, English; similarly Hinglish) comfortably exceed each beat's total
 * choreographed delay (<=2.2s), so nothing rushes even at normal playback speed.
 *
 * Layout plan (all x/y in viewBox units; text boxes via local midBox() using the spec's measured
 * Anek-sans ratios: width = 0.5*size*chars, top = y-0.78*size, bottom = y+0.31*size):
 *  b0 | title (26,red,script,always-on)      | T mid   | x540 y58
 *  b1 | Card A box                            | Draw    | roundRectD(60,96,460,80)  RED
 *     |   L1 wrong (crossed)                  | T mid   | cx290 y130 size14 RED
 *     |   L2 right                            | T mid   | cx290 y163 size15 GREEN_DARK
 *  b2 | Card B box                            | Draw    | roundRectD(560,96,460,80) RED
 *     |   L1 wrong (crossed)                  | T mid   | cx790 y130 size14 RED
 *     |   L2 right                            | T mid   | cx790 y163 size15 GREEN_DARK
 *  b3 | Card C box                            | Draw    | roundRectD(60,200,960,152) RED
 *     |   L1 "P(4, 0, -2)" (3 segments, the   | T start | seg1 x508 seg2("0") x539
 *     |     "0" isolated for beat4's underline)|         | seg3 x548, all y234 — x's are
 *     |     REAL measured glyph widths (Playwright getBoundingClientRect), not the spec's
 *     |     generic char-count estimate: "P(4, "=25.8w, "0"=9.07w, ", -2)"=24.18w. First pass
 *     |     placed segments edge-to-edge on the measured widths, which collided "0" into
 *     |     ", -2)" (SVG trims the trailing space in a <SvgText> node, so the measured width of
 *     |     "P(4, " already excludes it) — fixed by keeping a manual 5px gap after seg1 to
 *     |     stand in for that trimmed space, re-centered on cx540.
 *     |   L2 wrong (crossed)                  | T mid   | cx540 y270 size14 RED
 *     |   L3 right                            | T mid   | cx540 y306 size15 GREEN_DARK
 *  b4 | underline under the "0" from b3       | Draw    | line x534-546 y246
 *     | caption                                | T mid   | cx540 y336 size14 AMBER_DARK
 *  b5 | Card D box                            | Draw    | roundRectD(60,376,960,114) RED
 *     |   L1 setup                             | T mid   | cx540 y408 size15 INK
 *     |   L2 wrong (crossed)                  | T mid   | cx540 y442 size14 RED
 *     |   L3 right                            | T mid   | cx540 y474 size15 GREEN_DARK
 *  b6 | pro-tip box                           | Draw    | roundRectD(60,514,960,76) GREEN
 *     |   anchor line                          | T mid   | cx540 y548 size16 GREEN_DARK
 *  b7 | divider                                | Draw    | line x540 y566-582 AMBER_DARK
 *     |   left half (z>0)                      | T end   | x520 y580 size15 GREEN_DARK
 *     |   right half (z<0)                     | T start | x560 y580 size15 GREEN_DARK
 *
 * Vertical budget check: title bottom ~71 -> Row1(96-176) gap25 -> Row2(200-352) gap24 ->
 * Row3(376-490) gap24 -> ProTip(514-590) gap24, ProTip bottom 590 <= safe596 (6px buffer).
 * Row1/Row2 gap: 60..520 / 560..1020 (40px between), all within safe x36-1044.
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

/** Estimated box for a `middle`-anchored Anek-sans text run (spec's measured ratios). */
function midBox(cx: number, y: number, size: number, chars: number) {
  const w = 0.5 * size * chars;
  const top = y - 0.78 * size;
  const bottom = y + 0.31 * size;
  return { x: cx - w / 2, y: top, w, h: bottom - top };
}

export default function M11Ch11Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Card A (beat 1) — signs, not names
  const a1 = t(`"Octant II" — but which signs...?`, `"Octant II" — par kaunse signs...?`);
  const a1Box = midBox(290, 130, 14, a1.length);
  const a2 = t(`(-, +, +) — the definition, always`, `(-, +, +) — yehi hai definition, hamesha`);

  // Card B (beat 2) — distance is |x|, not x
  const b1 = t(`dist of (-5, 1, 2) from YZ-plane = -5`, `(-5, 1, 2) ki YZ-plane se dist = -5`);
  const b1Box = midBox(790, 130, 14, b1.length);
  const b2 = t(
    `= |-5| = 5 — distance is never negative`,
    `= |-5| = 5 — distance kabhi negative nahi hoti`
  );

  // Card C (beats 3-4) — zero coordinate -> no octant
  const c2 = t(`guessed "Octant I" — ignored that y = 0`, `"Octant I" guess kiya — y = 0 ignore karke`);
  const c2Box = midBox(540, 270, 14, c2.length);
  const c3 = t(
    `y = 0 -> the point lies ON the zx-plane. No octant.`,
    `y = 0 -> point zx-plane PAR hai. Koi octant nahi.`
  );
  const c4 = t(
    `Examiners plant a stray zero exactly to catch this.`,
    `Examiners yeh zero jaan-boojhkar plant karte hain.`
  );

  // Card D (beat 5) — reflection sign count
  const d2 = t(`(-2, -3, -4) — that's 3 flips (origin's rule!)`, `(-2, -3, -4) — ye 3 flips hain (origin ka rule!)`);
  const d2Box = midBox(540, 442, 14, d2.length);
  const d3 = t(`(2, 3, -4) — a plane flips only 1 sign (z)`, `(2, 3, -4) — plane sirf 1 sign flip karta hai (z)`);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Common pitfalls and the pro-move", "Common pitfalls aur pro-move")}
        </T>
      </Fade>

      {/* beat 1 — Card A: names are fragile, signs are the definition */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 96, 460, 80)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={290} y={130} size={14} fill={RED} anchor="middle" weight={700}>
          {a1}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.1)}
        d={crossD(a1Box.x, a1Box.y, a1Box.w, a1Box.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={290} y={163} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {a2}
        </T>
      </Fade>

      {/* beat 2 — Card B: distance is |x|, never the signed x */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(560, 96, 460, 80)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={790} y={130} size={14} fill={RED} anchor="middle" weight={700}>
          {b1}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.1)}
        d={crossD(b1Box.x, b1Box.y, b1Box.w, b1Box.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={790} y={163} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {b2}
        </T>
      </Fade>

      {/* beat 3 — Card C: a zero coordinate means no octant at all */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 200, 960, 152)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={508} y={234} size={15} fill={INK} anchor="start" weight={700}>
          {"P(4, "}
        </T>
        <T x={539} y={234} size={15} fill={INK} anchor="start" weight={700}>
          0
        </T>
        <T x={548} y={234} size={15} fill={INK} anchor="start" weight={700}>
          {", -2)"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={540} y={270} size={14} fill={RED} anchor="middle" weight={700}>
          {c2}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.7)}
        d={crossD(c2Box.x, c2Box.y, c2Box.w, c2Box.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={540} y={306} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {c3}
        </T>
      </Fade>

      {/* beat 4 — annotate the "0" already on the board; the trap examiners plant on purpose */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 536 246 L 552 246" stroke={RED} sw={2.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={336} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {c4}
        </T>
      </Fade>

      {/* beat 5 — Card D: reflection sign count, plane=1 axis=2 origin=3 */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 376, 960, 114)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={408} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Reflect P(2, 3, 4) in the XY-plane", "P(2, 3, 4) ko XY-plane mein reflect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={540} y={442} size={14} fill={RED} anchor="middle" weight={700}>
          {d2}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.7)}
        d={crossD(d2Box.x, d2Box.y, d2Box.w, d2Box.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={474} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {d3}
        </T>
      </Fade>

      {/* beat 6 — pro-tip: anchor on the two clean octants */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(60, 514, 960, 76)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={548} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t(
            "Anchor: Octant I = (+, +, +)    Octant VII = (-, -, -)",
            "Anchor: Octant I = (+,+,+)    Octant VII = (-,-,-)"
          )}
        </T>
      </Fade>

      {/* beat 7 — read the rest off the z-sign */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 540 566 L 540 582" stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={520} y={580} size={15} fill={GREEN_DARK} anchor="end" weight={700}>
          {t("z > 0 -> Octants I-IV", "z > 0 -> Octants I-IV")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={560} y={580} size={15} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("z < 0 -> Octants V-VIII", "z < 0 -> Octants V-VIII")}
        </T>
      </Fade>
    </Scene>
  );
}
