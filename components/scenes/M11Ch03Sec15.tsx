/**
 * M11 Ch03 · Section 15 — "Standard values come from two special triangles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, real triangle geometry, extra eye-check.
 * Opens subtopic 3 (Standard Values, Even-Odd Nature and Allied Angles).
 *
 * Beats (board_reveal_at_english [0, 7.51, 20.82, 35.67, 45.14, 54.02, 75.18]):
 *  0 subtitle: why only a handful of angles are 'nice'
 *  1 every standard value is a side ratio in one of two triangles
 *  2 THE DIAGRAM: 45-45-90 triangle + 30-60-90 triangle, legs/hyp/angles labeled
 *  3 45° values read off triangle 1
 *  4 30°/60° values read off triangle 2
 *  5 red-margin (high): the sine-row pattern √0/2..√4/2, cosine row reversed
 *  6 0° and 90° read straight off the circle: (1,0) and (0,1)
 *
 * Layout plan — two triangles side by side, values below each, pattern row beneath both:
 *  b0 | subtitle (15,amber)                | T mid | x300..780  y84..99  (bl 92)
 *  b1 | two intro lines (15)                | T mid | x300..780  y112..156
 *  b2 | triangle 1 (45-45-90) x150..270     | Draw  | y180..300
 *  b2 | triangle 2 (30-60-90) x450..590     | Draw  | y180..300
 *  b3 | "sin45=cos45=1/√2, tan45=1" (15)    | T mid | x210 center y337..351 (bl 345)
 *  b4 | "sin30=1/2,cos30=√3/2,sin60=√3/2"   | T mid | x520 center y337..351 (bl 345)
 *  b5 | 5 chips (√0/2..√4/2) + angle labels | Chip  | x150..1010  y400..450
 *  b5 | "cosine row = reversed" (14,red)    | T mid | x540 center y470..484 (bl 478)
 *  b6 | closer 2 lines (15)                 | T st  | x60..500   y507..533
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const T1 = { RA: { x: 150, y: 300 }, B: { x: 270, y: 300 }, C: { x: 150, y: 180 } };
const T2 = { RA: { x: 450, y: 300 }, B: { x: 590, y: 300 }, C: { x: 450, y: 180 } };

const ROW = [
  { x: 150, val: "√0/2", ang: "0°" },
  { x: 330, val: "√1/2", ang: "30°" },
  { x: 510, val: "√2/2", ang: "45°" },
  { x: 690, val: "√3/2", ang: "60°" },
  { x: 870, val: "√4/2", ang: "90°" },
];

export default function M11Ch03Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Standard Values, From Two Special Triangles", "Standard Values, Do Special Triangles Se")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER} anchor="middle" weight={700}>
          {t("Why only a handful of angles are 'nice'", "Kyun sirf kuch angles hi 'nice' hain")}
        </T>
      </Fade>

      {/* beat 1 — every value is a side ratio */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={116} size={15} fill={INK} anchor="middle">
          {t("Every standard value is a side ratio in one of two triangles:", "Har standard value do triangles mein se ek ka side ratio hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={140} size={15} fill={INK} anchor="middle" weight={700}>
          {t("the 45-45-90 and the 30-60-90.", "45-45-90 aur 30-60-90.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: the two special triangles */}
      <Draw on={beat >= 2} d={`M ${T1.RA.x} ${T1.RA.y} L ${T1.B.x} ${T1.B.y}`} stroke={INK} sw={2.2} delay={dl(2, 0)} />
      <Draw on={beat >= 2} d={`M ${T1.RA.x} ${T1.RA.y} L ${T1.C.x} ${T1.C.y}`} stroke={INK} sw={2.2} delay={dl(2, 0.3)} />
      <Draw on={beat >= 2} d={`M ${T1.B.x} ${T1.B.y} L ${T1.C.x} ${T1.C.y}`} stroke={GREEN_DARK} sw={2.2} delay={dl(2, 0.6)} />
      <Draw on={beat >= 2} d="M 150 294 L 156 294 L 156 300" stroke={INK} sw={1.3} delay={dl(2, 0.9)} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={210} y={314} size={13} fill={MUTED} anchor="middle">1</T>
        <T x={132} y={244} size={13} fill={MUTED} anchor="middle">1</T>
        <T x={230} y={230} size={13} fill={GREEN_DARK} anchor="middle" weight={700}>√2</T>
        <T x={250} y={290} size={11} fill={MUTED} anchor="middle">45°</T>
        <T x={164} y={196} size={11} fill={MUTED} anchor="middle">45°</T>
      </Fade>

      <Draw on={beat >= 2} d={`M ${T2.RA.x} ${T2.RA.y} L ${T2.B.x} ${T2.B.y}`} stroke={INK} sw={2.2} delay={dl(2, 1.4)} />
      <Draw on={beat >= 2} d={`M ${T2.RA.x} ${T2.RA.y} L ${T2.C.x} ${T2.C.y}`} stroke={INK} sw={2.2} delay={dl(2, 1.7)} />
      <Draw on={beat >= 2} d={`M ${T2.B.x} ${T2.B.y} L ${T2.C.x} ${T2.C.y}`} stroke={GREEN_DARK} sw={2.2} delay={dl(2, 2.0)} />
      <Draw on={beat >= 2} d="M 450 294 L 456 294 L 456 300" stroke={INK} sw={1.3} delay={dl(2, 2.3)} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={520} y={314} size={13} fill={MUTED} anchor="middle">√3</T>
        <T x={432} y={244} size={13} fill={MUTED} anchor="middle">1</T>
        <T x={540} y={230} size={13} fill={GREEN_DARK} anchor="middle" weight={700}>2</T>
        <T x={565} y={290} size={11} fill={MUTED} anchor="middle">30°</T>
        <T x={466} y={198} size={11} fill={MUTED} anchor="middle">60°</T>
      </Fade>

      {/* beat 3 — 45° values, read off triangle 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={210} y={345} size={15} fill={INK} anchor="middle">
          sin45°=cos45°=1/√2, tan45°=1
        </T>
      </Fade>

      {/* beat 4 — 30°/60° values, read off triangle 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={520} y={345} size={15} fill={INK} anchor="middle">
          sin30°=1/2, cos30°=√3/2, sin60°=√3/2
        </T>
      </Fade>

      {/* beat 5 — the sine-row pattern, and cosine reversed */}
      {ROW.map((r, i) => (
        <Fade key={r.val} on={beat >= 5} delay={dl(5, 0.2 * i)}>
          <Chip x={r.x} y={400} w={140} h={34} fill={AMBER} textFill={INK} size={16} script={false}>
            {r.val}
          </Chip>
          <T x={r.x + 70} y={450} size={12} fill={MUTED} anchor="middle">
            {r.ang}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={478} size={14} fill={RED} anchor="middle" weight={700}>
          {t("cosine row = same list, reversed ↔", "cosine row = wahi list, ulti ↔")}
        </T>
      </Fade>

      {/* beat 6 — 0° and 90°, read off the circle */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={515} size={15} fill={INK} anchor="start">
          {t("0° and 90° read straight off the circle:", "0° aur 90° circle se seedha padhte hain:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={60} y={537} size={15} fill={INK} anchor="start" weight={700}>
          {t("the points (1, 0) and (0, 1).", "points (1, 0) aur (0, 1).")}
        </T>
      </Fade>
    </Scene>
  );
}
