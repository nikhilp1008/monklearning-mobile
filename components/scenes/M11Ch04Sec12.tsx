/**
 * M11 Ch04 · Section 12 — "The conjugate: a mirror reflection"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 2 (The Modulus and the Conjugate).
 *
 * Beats (board_reveal_at_english [0, 9.05, 18.18, 26.54, 37.97, 54.44, 63.23, 72.19]):
 *  0 anchor: heading "the conjugate reflects across the real axis"
 *  1 represent: formula z̄ = a - ib (the definition, built with a drawn Overline bar)
 *  2 explain: only the imaginary sign flips
 *  3 guardrail (red-margin): contrast -z = -a - ib — BOTH signs flip
 *  4 THE DIAGRAM: Argand axes, point z in Q1, point z̄ mirrored in Q4, thin
 *    construction line crossing the real axis, caption "real axis = the waterline"
 *  5 explain: Q1 number's conjugate lands in Q4 (right-column caption)
 *  6 land (boxed): z = z̄ ⇔ z purely real
 *  7 explain: true only when z sits on the real axis
 *
 * Layout plan:
 *  b0 | subtitle (16,amber_dark,w700)     | T mid  | x540  y92
 *  b1 | "z" + bar                         | ZBar   | x430  y135 size24 (Overline #1)
 *  b1 | "= a - ib"                        | T st   | x455  y135 size24
 *  b2 | explain line (15,ink)             | T mid  | x540  y178
 *  b3 | red bar                           | Draw   | x60 y204..236
 *  b3 | guardrail line (17,red,w700)      | T st   | x76  y220
 *  b4 | axes c(540,380) 370..760/280..460 | CartesianAxes (no ticks)
 *  b4 | Re/Im labels (13, mirrors Sec1)   | T st   | (745,398) (552,290)
 *  b4 | O dot                             | circle | (540,380) r3.5
 *  b4 | line O→z, dot, label "z"          | Draw/T | (540,380)→(620,322)
 *  b4 | line O→z̄, dot, label "z̄"          | Draw/T | (540,380)→(620,438) (Overline #2)
 *  b4 | mirror construction line (muted)  | Draw   | (620,322)→(620,438)
 *  b4 | caption (14,amber_dark,script)    | T mid  | x565  y495
 *  b5 | right-col caption (14,ink)        | T st   | x790  y270
 *  b6 | boxed formula "z=z̄⇔z purely real" | Draw+T | box x780..1030 y300..350 (Overline #3)
 *  b7 | right-col closer (14,ink)         | T st   | x790  y395
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, roundRectD, Overline } from "./math-kit";

/** "z" with a drawn overline (conjugate). x/y/size/anchor must match the plain
 * T call it sits above — see SCENE_AUTHORING_MATHS.md's Overline guidance. */
function ZBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.62;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          z
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch04Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Conjugate: A Mirror Reflection", "Conjugate: Ek Mirror Reflection")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The conjugate reflects across the real axis", "Conjugate real axis ke paar reflect karta hai")}
        </T>
      </Fade>

      {/* beat 1 — represent: z̄ = a - ib */}
      <ZBar on={beat >= 1} delay={dl(1, 0)} x={430} y={135} size={24} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={455} y={135} size={24} fill={INK} anchor="start" weight={700}>
          = a - ib
        </T>
      </Fade>

      {/* beat 2 — explain */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={178} size={15} fill={INK} anchor="middle">
          {t("Only the sign of the imaginary part flips.", "Sirf imaginary part ka sign flip hota hai.")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: contrast with additive inverse */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 204 L 60 236" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={220} size={17} fill={RED} anchor="start" weight={700}>
          {t("-z = -a - ib — BOTH signs flip, not just one!", "-z = -a - ib — DONO signs flip, sirf ek nahi!")}
        </T>
      </Fade>

      {/* beat 4 — THE DIAGRAM: Argand axes, z and its mirror z̄ */}
      <CartesianAxes on={beat >= 4} delay={dl(4, 0)} originX={540} originY={380} xLeft={370} xRight={760} yTop={280} yBottom={460} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={745} y={398} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={290} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={540} cy={380} r={3.5} fill={INK} />
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={lineD(540, 380, 620, 322)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Circle cx={620} cy={322} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={634} y={318} size={16} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={lineD(540, 380, 620, 438)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Circle cx={620} cy={438} r={4} fill={INK} />
      </Fade>
      <ZBar on={beat >= 4} delay={dl(4, 1.9)} x={634} y={454} size={16} />

      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={lineD(620, 322, 620, 438)} stroke={MUTED} sw={1.4} dur={0.4} />

      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={565} y={495} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("real axis = the waterline", "real axis hi hai waterline")}
        </T>
      </Fade>

      {/* beat 5 — explain: Q1 conjugate lands in Q4 (right column) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={790} y={270} size={14} fill={INK} anchor="start">
          {t("Q1 number's conjugate lands in Q4.", "Q1 ka number, conjugate Q4 mein.")}
        </T>
      </Fade>

      {/* beat 6 — land (boxed): z = z̄ ⇔ purely real */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(780, 300, 250, 50)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={800} y={330} size={16} fill={INK} anchor="start" weight={700}>z</T>
        <T x={816} y={330} size={16} fill={INK} anchor="start" weight={700}>=</T>
      </Fade>
      <ZBar on={beat >= 6} delay={dl(6, 1.1)} x={832} y={330} size={16} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={850} y={330} size={16} fill={INK} anchor="start" weight={700}>{"⇔"}</T>
        <T x={874} y={330} size={16} fill={INK} anchor="start" weight={700}>z purely real</T>
      </Fade>

      {/* beat 7 — explain: true only on the real axis */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={790} y={395} size={14} fill={INK} anchor="start">
          {t("True only on the real axis itself.", "Sach sirf real axis par hi hota hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
