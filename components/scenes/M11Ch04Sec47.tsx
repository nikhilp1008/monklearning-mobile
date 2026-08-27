/**
 * M11 Ch04 · Section 47 — "Factorization identities using omega"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — mostly algebraic; keeps the cube-roots-of-unity triangle as a
 * standing callback (top-right) since every identity below is built from 1, ω, ω².
 *
 * Beats (board_reveal_at_english [0, 9.81, 19.37, 30.46, 44.89, 58.97, 75.01, 86.02]):
 *  0 heading: omega turns sums into products (subtitle)
 *  1 formula: a²+ab+b² = (a-bω)(a-bω²) — triangle callback appears
 *  2 formula: a²-ab+b² = (a+bω)(a+bω²)
 *  3 formula: a³+b³ = (a+b)(a+bω)(a+bω²)
 *  4 formula: a³-b³ = (a-b)(a-bω)(a-bω²)
 *  5 formula (high): a³+b³+c³-3abc = (a+b+c)(a+bω+cω²)(a+bω²+cω)
 *  6 text: these come from splitting a real polynomial into complex linear factors
 *  7 guardrail (red-margin): heavily used in JEE Advanced — memorize the cubic-sum one
 *
 * Layout plan (left column formula list x=140 start, right column callback triangle):
 *  b0 | subtitle (15,amber_dark,w700)  | T mid | x540 y90
 *  b1 | formula row 1 (15,ink)         | T st  | x140 y132
 *  b1 | triangle circle + 1,ω,ω²       | Draw/T| c(830,280) r70
 *  b2 | formula row 2                  | T st  | x140 y164
 *  b3 | formula row 3                  | T st  | x140 y196
 *  b4 | formula row 4                  | T st  | x140 y228
 *  b5 | formula row 5 (chip, high)     | Chip  | x110 y255..295
 *  b6 | text line                      | T st  | x140 y330
 *  b7 | red bar + guardrail text       | Draw/T| x120 y505..539 / x136 y527
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD } from "./math-kit";

const TCX = 830, TCY = 280, TR = 70;
const triPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR + 22, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

export default function M11Ch04Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Factorization Identities Using Omega", "Omega Se Factorization Identities")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("ω turns sums into products", "ω sums ko products mein badal deta hai")}
        </T>
      </Fade>

      {/* callback: the cube-roots-of-unity triangle, standing reference for every identity below */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={circleD(TCX, TCY, TR)} stroke={MUTED} sw={1.4} dur={0.6} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 1} delay={dl(1, 1 + i * 0.3)} d={arrowD(TCX, TCY, triPts[k].x, triPts[k].y)} stroke={k === 0 ? INK : AMBER_DARK} sw={2} dur={0.4} />
          <Fade on={beat >= 1} delay={dl(1, 1.2 + i * 0.3)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={13} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={TCX} y={TCY + TR + 48} size={12} fill={MUTED} anchor="middle" script>
          {t("cube roots of 1", "1 ke cube roots")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={132} size={15} fill={INK} anchor="start">
          a² + ab + b² = (a-bω)(a-bω²)
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={140} y={168} size={15} fill={INK} anchor="start">
          a² - ab + b² = (a+bω)(a+bω²)
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={140} y={204} size={15} fill={INK} anchor="start">
          a³ + b³ = (a+b)(a+bω)(a+bω²)
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={140} y={240} size={15} fill={INK} anchor="start">
          a³ - b³ = (a-b)(a-bω)(a-bω²)
        </T>
      </Fade>

      {/* beat 5 — the star identity, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={110} y={266} w={560} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          a³+b³+c³-3abc = (a+b+c)(a+bω+cω²)(a+bω²+cω)
        </Chip>
      </Fade>

      {/* beat 6 — where these come from */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={140} y={350} size={14} fill={INK} anchor="start">
          {t(
            "These split a real polynomial into complex linear factors.",
            "Ye ek real polynomial ko complex linear factors mein split karte hain."
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 120 490 L 120 524" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={136} y={512} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Heavily used in JEE Advanced — memorize the cubic-sum one.",
            "JEE Advanced mein bahut aata hai — cubic-sum wala yaad karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
