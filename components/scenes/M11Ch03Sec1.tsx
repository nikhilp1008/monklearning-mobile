/**
 * M11 Ch03 · Section 1 — "Why degrees are arbitrary and the radian is the circle's own ruler"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 5.29, 29.1, 44.71, 57.17, 67.93, 88.06, 106.92]):
 *  0 title (always-on) · 1 anchor: a degree = 1/360 of a turn, Babylonian convention
 *  2 represent (words): a radian — walk the rim a distance = radius, that angle = 1 rad
 *  3 THE DIAGRAM: circle, radii OA/OB, rim arc AB (=radius) in red, small angle arc at O
 *  4 land: 1 radian ≈ 57.3° (a little under 60°)
 *  5 explain: radian = arc/radius = length/length ⇒ pure number, no units
 *  6 formula: rim = 2π radius-lengths ⇒ full turn = 2π radians
 *  7 guardrail: anticlockwise = positive, clockwise = negative
 *
 * Layout plan — left column: degree/radian words (b1,b2); center: the diagram (b3,b4);
 * right column: the two boxed facts (b5,b6); bottom band: sign convention (b7).
 *  b0 | title (script 27, red)            | T mid  | x260..820  y34..80  (bl 66)
 *  b1 | "A degree = 1/360..." (17)          | T st   | x60..339   y104..121 (bl 114)
 *  b1 | "Why 360? Babylonian..." (16,red,sc)| T st   | x60..336   y134..151 (bl 144)
 *  b1 | "nothing about a circle..." (14,red)| T st   | x60..294   y158..172 (bl 168)
 *  b2 | "A radian: walk the rim..." (16)     | T st   | x60..401   y206..222 (bl 216)
 *  b2 | "...that angle = 1 radian." (16,w700)| T st   | x60..332   y234..250 (bl 246)
 *  b3 | circle r=110 c(330,392)              | Draw   | x220..440  y282..502
 *  b3 | faint full circle                    | Draw   | (same, MUTED)
 *  b3 | radius OA                            | Draw   | (330,392)->(440,392)
 *  b3 | radius OB                            | Draw   | (330,392)->(389,297)
 *  b3 | rim arc AB (red, thick)               | Draw   | on circle, θ0..1
 *  b3 | small angle arc at O (amber)          | Draw   | r=32, θ0..1
 *  b3 | "O" (14)                              | T mid  | x316..324 y404..418 (bl 412)
 *  b3 | "A" (14)                              | T mid  | x448..462 y388..402 (bl 397)
 *  b3 | "B" (14)                              | T mid  | x382..396 y278..292 (bl 288)
 *  b3 | "r" (13, muted)                        | T mid  | x379..389 y378..391 (bl 386)
 *  b3 | "1 rad" (14, amber)                    | T mid  | x349..391 y362..377 (bl 372)
 *  b3 | "arc = radius" (14, red) + leader       | T st   | x452..556 y327..342 (bl 337)
 *  b4 | chip "1 radian ≈ 57.3° (< 60°)"         | Chip   | x220..500  y512..550
 *  b5 | header "radian =" (15)                  | T st   | x616..706  y294..311 (bl 305)
 *  b5 | "arc / radius" (16,w700)                | T st   | x616..752  y322..340 (bl 334)
 *  b5 | "= length / length" (15)                 | T st   | x616..814  y350..366 (bl 360)
 *  b5 | chip "pure number, no units" (green)      | Chip   | x616..966  y378..416
 *  b6 | "rim = 2πr = 2π radius-lengths" (15)      | T st   | x616..952  y444..460 (bl 454)
 *  b6 | chip "1 full turn = 2π radians" (amber)   | Chip   | x616..936  y470..508
 *  b7 | margin bar (red)                           | Draw  | x60 y528..558
 *  b7 | guardrail line (15,red)                    | T st  | x76..520  y536..552 (bl 548)
 *  b7 | ccw arc (green) + "+"                       | Draw  | c(760,548) r22
 *  b7 | cw arc (red) + "−"                          | Draw  | c(860,548) r22
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle, angleArcD } from "./math-kit";

const CX = 330;
const CY = 392;
const R = 110;
const PT_A = pointOnCircle(CX, CY, R, 0);
const PT_B = pointOnCircle(CX, CY, R, 1);
const MID_ARC = pointOnCircle(CX, CY, R, 0.5);
const MID_ANGLE = pointOnCircle(CX, CY, 32, 0.5);

export default function M11Ch03Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={66} size={27} fill={RED} anchor="middle" script>
          {t("Degrees vs Radians: whose ruler?", "Degrees vs Radians: kiska ruler?")}
        </T>
      </Fade>

      {/* beat 1 — anchor: the degree is an arbitrary convention */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={114} size={17} fill={INK} anchor="start">
          {t("A degree = 1/360 of a full turn.", "Ek degree = 1/360 poore turn ka.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={144} size={16} fill={RED} anchor="start" script>
          {t("Why 360? Babylonian convention -", "Kyun 360? Babylonian convention -")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={60} y={168} size={14} fill={RED} anchor="start">
          {t("nothing about a circle demands it.", "circle mein aisa kuch nahi jo maange.")}
        </T>
      </Fade>

      {/* beat 2 — represent in words: the radian's own definition */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={216} size={16} fill={INK} anchor="start">
          {t("A radian: walk the rim a distance = radius...", "Radian: rim par utna chalo jitna radius hai...")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={60} y={246} size={16} fill={INK} anchor="start" weight={700}>
          {t("...that swept angle = 1 radian.", "...wo angle = 1 radian.")}
        </T>
      </Fade>

      {/* beat 3 — the diagram: circle, two radii, the rim arc, the angle */}
      <Draw on={beat >= 3} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} delay={dl(3, 0)} />
      <Draw on={beat >= 3} d={lineD(CX, CY, PT_A.x, PT_A.y)} stroke={INK} sw={2.2} delay={dl(3, 0.4)} />
      <Draw on={beat >= 3} d={lineD(CX, CY, PT_B.x, PT_B.y)} stroke={INK} sw={2.2} delay={dl(3, 0.8)} />
      <Draw on={beat >= 3} d={angleArcD(CX, CY, R, 0, 1)} stroke={RED} sw={3.6} delay={dl(3, 1.3)} />
      <Draw on={beat >= 3} d={angleArcD(CX, CY, 32, 0, 1)} stroke={AMBER_DARK} sw={2} delay={dl(3, 1.9)} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={320} y={412} size={14} fill={INK} anchor="middle">
          O
        </T>
        <T x={455} y={397} size={14} fill={INK} anchor="middle">
          A
        </T>
        <T x={389} y={285} size={14} fill={INK} anchor="middle">
          B
        </T>
        <T x={384} y={386} size={13} fill={MUTED} anchor="middle">
          r
        </T>
        <T x={MID_ANGLE.x} y={MID_ANGLE.y - 4} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          1 rad
        </T>
      </Fade>
      <Draw on={beat >= 3} d={lineD(MID_ARC.x + 12, MID_ARC.y + 8, MID_ARC.x + 40, MID_ARC.y + 20)} stroke={RED} sw={1.4} delay={dl(3, 2.6)} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={452} y={342} size={14} fill={RED} anchor="start">
          {t("arc = radius", "arc = radius")}
        </T>
      </Fade>

      {/* beat 4 — land: the numeric size of one radian */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={220} y={512} w={280} h={36} fill={RED} textFill="#FFFEFB" size={16} script={false}>
          {t("1 radian ≈ 57.3° (< 60°)", "1 radian ≈ 57.3° (60° se kam)")}
        </Chip>
      </Fade>

      {/* beat 5 — explain: pure number, term by term */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={616} y={305} size={15} fill={INK} anchor="start">
          {t("radian =", "radian =")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={616} y={334} size={16} fill={INK} anchor="start" weight={700}>
          {t("arc / radius", "arc / radius")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={616} y={360} size={15} fill={INK} anchor="start">
          {t("= length / length", "= length / length")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip x={616} y={378} w={350} h={38} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          {t("pure number, no units", "pure number, koi unit nahi")}
        </Chip>
      </Fade>

      {/* beat 6 — formula: the full turn in radians */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={616} y={454} size={15} fill={INK} anchor="start">
          {t("rim = 2πr = 2π radius-lengths", "rim = 2πr = 2π radius-lengths")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={616} y={470} w={320} h={38} fill={AMBER} textFill={INK} size={17} script={false}>
          {t("1 full turn = 2π radians", "1 full turn = 2π radians")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: sign convention */}
      <Draw on={beat >= 7} d="M 60 566 L 60 592" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={585} size={15} fill={RED} anchor="start" weight={700}>
          {t("Anticlockwise = positive; clockwise = negative.", "Anticlockwise = positive; clockwise = negative.")}
        </T>
      </Fade>
    </Scene>
  );
}
