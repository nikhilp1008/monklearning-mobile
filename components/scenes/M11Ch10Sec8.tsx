/**
 * M11 Ch10 · Section 8 — "A circle: all points at a fixed distance from a centre"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 2 (The Circle), sec 8 of 13 in the chapter.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 4.78, 19.88, 33.45, 43.35, 54.19, 66.47,
 * 76.12]; reveals_hinglish = [0, 5.46, 20.05, 31.23, 38.83, 47.62, 60.07, 69.8].
 *
 * LEFT (x100-460): the goat-and-peg intuition (beat1) formalizes in place into
 * the coordinate definition (beat2) — same circle+radius geometry persists,
 * only "peg"/"goat" labels swap for "C(h,k)"/"P(x,y)" (erase, don't overlay)
 * and CartesianAxes appears underneath.
 * RIGHT (x560-1020): ties back to Sec2's e=0, the limiting-ellipse guardrail
 * (a faint ellipse + circle sharing a center, two foci merged to one point),
 * then previews standard vs general form (both fully derived in Sec9).
 *
 * Beats:
 *  0(title,always-on) | "A circle: all points at a fixed distance from a centre"
 *  1 | goat-peg intuition: peg, rope=r, goat traces circleD
 *  2 | formalize in place: axes appear, "peg"/"goat" -> "C(h,k)"/"P(x,y)"
 *  3 | tie to eccentricity: e = 0, calmest member
 *  4 | guardrail (red,HIGH): limiting ellipse, foci merged into centre
 *  5 | standard form: (x-h)² + (y-k)² = r²
 *  6 | general form: x² + y² + 2gx + 2fy + c = 0
 *  7 | closing: same circle, two costumes
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, circleD, ellipseD, lineD, pointOnCircle } from "./math-kit";

const C = { x: 280, y: 220 };
const R = 70;
const P = pointOnCircle(C.x, C.y, R, (35 * Math.PI) / 180);

export default function M11Ch10Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("A circle: all points at a fixed distance from a centre", "Ek circle: centre se fixed distance par sab points")}
        </T>
      </Fade>

      {/* beat 1 — goat/peg intuition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "Tie a goat to a peg with a taut rope; the path it traces is a circle of radius r.",
            "Bakri ko peg se taut rope se baandho; uska path ek circle hota hai, radius r ka."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={circleD(C.x, C.y, R)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={C.x} cy={C.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 1.3)}>
        <T x={255} y={208} size={12} fill={MUTED} anchor="end">{t("peg", "peg")}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={lineD(C.x, C.y, P.x, P.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Circle cx={P.x} cy={P.y} r={3.5} fill={INK} />
        <T x={300} y={193} size={12} fill={INK} anchor="end">r</T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 2.4)}>
        <T x={345} y={176} size={12} fill={MUTED} anchor="start">{t("goat", "goat")}</T>
      </Fade>

      {/* beat 2 — formalize: axes appear, labels swap */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={140} originY={320} xLeft={100} xRight={460} yTop={140} yBottom={340} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={255} y={208} size={12} fill={INK} anchor="end" weight={700}>C(h, k)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={345} y={176} size={12} fill={INK} anchor="start" weight={700}>P(x, y)</T>
      </Fade>

      {/* beat 3 — eccentricity tie-in */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={140} size={14} fill={INK} anchor="middle">
          {t("In the conic family, the circle is", "Is chapter ki eccentricity language mein,")}
        </T>
        <T x={780} y={162} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("the calmest member — eccentricity e = 0.", "circle sabse calm member hai — e = 0.")}
        </T>
      </Fade>

      {/* beat 4 — guardrail: limiting ellipse */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ellipseD(780, 225, 38, 24)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={circleD(780, 225, 30)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Circle cx={772} cy={225} r={2.5} fill={RED} />
        <Circle cx={788} cy={225} r={2.5} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={780} y={268} size={12} fill={RED} anchor="middle" weight={700}>
          {t("foci merge into the centre", "foci centre mein merge ho jaate hain")}
        </T>
      </Fade>

      {/* beat 5 — standard form */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={290} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Standard form — centre and radius, in the open:", "Standard form — centre aur radius, khule mein:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={780} y={318} size={16} fill={INK} anchor="middle">(x − h)² + (y − k)² = r²</T>
      </Fade>

      {/* beat 6 — general form */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={780} y={340} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("General form — complete the square to recover them:", "General form — complete the square se nikaalo:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={780} y={368} size={15} fill={INK} anchor="middle">x² + y² + 2gx + 2fy + c = 0</T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={398} size={13} fill={MUTED} anchor="middle">
          {t("Same circle, two costumes — that recognition is most of this topic.", "Ek hi circle, do costumes — yahi is topic ka zyada hissa hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
