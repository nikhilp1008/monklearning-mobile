/**
 * B11 Ch01 · Section 2 — "Growth fails: intrinsic vs extrinsic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.74, 28.44, 38.33, 66.88, 87.91, 104.19, 130.67]):
 *  0 title + drawn underline · kitten→cat/seedling→tree hook [dim@1]
 *  1 4 non-living "grows too" chips (mountain/dune/boulder/crystal) + rule
 *    "not one is alive" [dim@2]
 *  2 transition caption: same result, different mechanism + underline
 *  3 DIAGRAM: INTRINSIC circle (living) — outer ring drawn, dashed cross
 *    through center, "new cells from WITHIN — cell division"
 *  4 DIAGRAM: EXTRINSIC crystal (non-living) — polygon drawn, accretion
 *    dots land on its faces, "material piles on the OUTER surface"
 *  5 twofold note: living growth = ↑ mass AND ↑ number, drawn underline
 *  6 single-cell caveat: growing in number = reproducing (ringed bullet)
 *  7 verdict: GROWTH chip crossed out — fails the first gate
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script26 red)        | T mid  | x?..?  y30..77  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y90  x340..740
 *  b0 | hook (script18 muted)       | T mid  | x223..857 y107..139 (bl130) [dim@1]
 *  b1 | 4 chips (script12)          | Chip   | y176..206  x159/345/541/747 [dim@2]
 *  b1 | rule (script16 red)         | T mid  | x302..778 y213..242 (bl234) [dim@2]
 *  b2 | caption (16 anek ink)       | T mid  | x395..685 y237..255 (bl250)
 *  b2 | underline                   | Draw   | y268  x400..680
 *  b3 | "INTRINSIC (living)" (16)   | T mid  | x218..362  y275..293 (bl288)
 *  b3 | outer circle (green)        | Draw   | c(290,370) r70
 *  b3 | dashed cross (green)        | line   | v300..440 / h220..360 @cx290
 *  b3 | caption (script13 green)    | T mid  | x155..425 y453..477 (bl470)
 *  b4 | "EXTRINSIC (non-living)"    | T mid  | x706..874  y275..293 (bl288)
 *  b4 | crystal polygon (red)       | Draw   | x722..858  y300..440
 *  b4 | 3 accretion dots (red)      | circle | (840,318)/(865,378)/(715,378)
 *  b4 | caption (script13 red)      | T mid  | x604..976 y453..477 (bl470)
 *  b5 | twofold (script16 green)    | T mid  | x302..778 y486..513 (bl505)
 *  b5 | underline                   | Draw   | y516  x350..730
 *  b6 | ring bullet (amber-d)       | Draw   | c(162,539) rx9 ry7
 *  b6 | caveat (script15 amber-d)   | T st   | x185..737 y526..553 (bl545)
 *  b7 | "GROWTH — REJECTED ✗" chip  | Chip   | x390..690  y563..591
 *  b7 | cross-out over chip         | Draw   | x390 y563 w300 h28
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const NONLIVING: [number, number, string, string][] = [
  [159, 170, "mountain — rises", "mountain — uthta hai"],
  [345, 180, "sand dune — spreads", "sand dune — failta hai"],
  [541, 190, "boulder — enlarges", "boulder — bada hota hai"],
  [747, 175, "crystal — swells", "crystal — phoolta hai"],
];

export default function B11Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("Candidate 1 — GROWTH: caught faking?", "Candidate 1 — GROWTH: pakadi gayi faking?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 340 90 C 440 86, 640 86, 740 90" stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <T x={540} y={130} size={18} fill={MUTED} script>
          {t(
            "kitten → cat, seedling → tree — surely THIS defines life?",
            "kitten → cat, seedling → ped — yehi to life define karta hoga?"
          )}
        </T>
      </Fade>

      {/* beat 1 — non-living things grow too */}
      {NONLIVING.map(([x, w, e2, h2], i) => (
        <Fade key={e2} on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.3 + i * 0.5)}>
          <Chip x={x} y={176} w={w} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script>
            {t(e2, h2)}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 2.6)}>
        <T x={540} y={234} size={16} fill={RED} script>
          {t(
            "not so fast — all of these grow, and NOT ONE is alive",
            "itni jaldi nahi — sab badhte hain, aur ek bhi alive nahin"
          )}
        </T>
      </Fade>

      {/* beat 2 — transition: same result, different mechanism */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={250} size={17} fill={INK} weight={700}>
          {t("same result — different mechanism", "result same — mechanism alag hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 400 268 C 460 265, 620 265, 680 268" stroke={INK} sw={2} dur={0.5} />

      {/* beat 3 — INTRINSIC (living): outer ring drawn from within */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={290} y={288} size={16} fill={GREEN} weight={700}>
          INTRINSIC ({t("living", "living")})
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 220 370 a 70 70 0 1 0 140 0 a 70 70 0 1 0 -140 0" stroke={GREEN} sw={2.6} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <G opacity={0.6}>
          <Line x1={290} y1={300} x2={290} y2={440} stroke={GREEN} strokeWidth={1.4} strokeDasharray="4 3" />
          <Line x1={220} y1={370} x2={360} y2={370} stroke={GREEN} strokeWidth={1.4} strokeDasharray="4 3" />
        </G>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={290} y={470} size={13} fill={GREEN} script>
          {t("new cells from WITHIN — cell division", "naye cells ANDAR se — cell division")}
        </T>
      </Fade>

      {/* beat 4 — EXTRINSIC (non-living): accretion on the outer surface */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={790} y={288} size={16} fill={RED} weight={700}>
          EXTRINSIC ({t("non-living", "non-living")})
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 790 300 L 835 325 L 858 378 L 822 440 L 758 440 L 722 378 Z"
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <Circle cx={840} cy={318} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Circle cx={865} cy={378} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <Circle cx={715} cy={378} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={790} y={470} size={13} fill={RED} script>
          {t(
            "material piles on the OUTER surface — accretion",
            "material BAHAR ki surface par jamta hai — accretion"
          )}
        </T>
      </Fade>

      {/* beat 5 — living growth is twofold */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={505} size={16} fill={GREEN} script>
          {t(
            "living growth is twofold: ↑ mass AND ↑ number of cells",
            "living growth twofold hai: ↑ mass AUR ↑ cells ki number"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 350 516 C 420 513, 660 513, 730 516" stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 6 — single-cell caveat */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={ringD(162, 539, 9, 7)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={185} y={545} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "in single-celled organisms: growing in number = reproducing",
            "single-celled organisms mein: number badhna hi reproduce karna hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — verdict: GROWTH is rejected */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={390} y={563} w={300} h={28} fill={INK} textFill={CREAM} size={15} script={false}>
          GROWTH — REJECTED ✗
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={crossD(390, 563, 300, 28)} stroke={RED} sw={3} dur={0.6} />
    </Scene>
  );
}
