/**
 * M11 Ch04 · Section 35 — "The conjugate-root theorem (real coefficients only)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 8.62, 22.44, 31.4, 49.24, 60.33, 70.23, 81.41]):
 *  0 heading: complex roots travel in mirror-image pairs
 *  1 anchor + REPRESENT: real coeff, p+iq root ⇒ p-iq also a root — small mirror-pair
 *    Argand corner diagram, point z above the real axis, z̄ (Overline) mirrored below
 *  2 formula: a z̄² + b z̄ + c = 0 (conjugating the equation) — two Overline instances
 *  3 text: proof sketch — conjugate the whole equation, real coefficients stay fixed
 *  4 guardrail: holds ONLY for real coefficients
 *  5 text: so you only ever need to find one complex root
 *  6 text: with complex coefficients the symmetry breaks
 *  7 guardrail: assuming conjugate pairs with complex coefficients is the classic error
 *
 * Layout plan:
 *  b0 | heading (15,amber_dark,w700)      | T mid  | x540 y94  + underline y108
 *  b1 | anchor text (15,ink)               | T mid  | x540 y128 + underline y144, range x270..810
 *  b1 | mini Argand corner diagram          | Draw/T | axis x850..1020 y170; z (960,135); z̄ (960,205)
 *  b2 | formula run "a z̄²+bz̄+c=0" (20,ink,w700) | T start slots | x410..674 y210 + underline y228
 *  b3 | proof sketch (14,ink)               | T mid  | x540 y270 + underline y286, range x298..782
 *  b4 | red bar + guardrail (16,red)        | Draw/T | bar x60 y323..357, text x76 y340
 *  b5 | text (14,ink)                       | T mid  | x540 y395 + underline y410
 *  b6 | text (14,ink)                       | T mid  | x540 y450 + underline y466
 *  b7 | red bar + guardrail (15,red)        | Draw/T | bar x60 y490..524, text x76 y507
 *
 * Overline usage (flag for review): two instances in the b2 formula run (each z̄,
 * size20, anchor start, textWidth 11) and one in the b1 diagram label (z̄, size16,
 * anchor start, textWidth 10) — each Overline's x/y/size/anchor exactly matches
 * the <T> glyph it sits above.
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
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, Overline } from "./math-kit";

export default function M11Ch04Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Conjugate-Root Theorem", "Conjugate-Root Theorem")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={94} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Complex roots travel in mirror-image pairs", "Complex roots hamesha mirror-image pairs mein aate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(320, 108, 760, 108)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — anchor sentence + mini mirror-pair Argand diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={128} size={15} fill={INK} anchor="middle">
          {t(
            "If a polynomial has real coefficients and p+iq (q≠0) is a root, so is p-iq.",
            "Agar polynomial ke real coefficients hain aur p+iq (q≠0) ek root hai, to p-iq bhi hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(270, 144, 810, 144)} stroke={INK} sw={1.6} dur={0.6} />

      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={lineD(850, 170, 1020, 170)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={960} cy={135} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={978} y={135} size={16} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(960, 135, 960, 205)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={960} cy={205} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={978} y={205} size={16} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Overline on={beat >= 1} delay={dl(1, 2.2)} x={978} y={205} size={16} textWidth={10} anchor="start" script={false} stroke={INK} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={935} y={232} size={11} fill={MUTED} anchor="middle">real axis</T>
      </Fade>

      {/* beat 2 — the conjugated equation, a z̄² + b z̄ + c = 0 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={410} y={210} size={20} fill={INK} anchor="start" weight={700}>a</T>
        <T x={434} y={210} size={20} fill={INK} anchor="start" weight={700}>z</T>
        <T x={458} y={210} size={20} fill={INK} anchor="start" weight={700}>²</T>
        <T x={482} y={210} size={20} fill={INK} anchor="start" weight={700}>+</T>
        <T x={506} y={210} size={20} fill={INK} anchor="start" weight={700}>b</T>
        <T x={530} y={210} size={20} fill={INK} anchor="start" weight={700}>z</T>
        <T x={554} y={210} size={20} fill={INK} anchor="start" weight={700}>²</T>
        <T x={578} y={210} size={20} fill={INK} anchor="start" weight={700}>+</T>
        <T x={602} y={210} size={20} fill={INK} anchor="start" weight={700}>c</T>
        <T x={626} y={210} size={20} fill={INK} anchor="start" weight={700}>=</T>
        <T x={650} y={210} size={20} fill={INK} anchor="start" weight={700}>0</T>
      </Fade>
      <Overline on={beat >= 2} delay={dl(2, 0)} x={434} y={210} size={20} textWidth={11} anchor="start" script={false} stroke={INK} />
      <Overline on={beat >= 2} delay={dl(2, 0)} x={530} y={210} size={20} textWidth={11} anchor="start" script={false} stroke={INK} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(400, 228, 684, 228)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — proof sketch */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={270} size={14} fill={INK} anchor="middle">
          {t(
            "The proof conjugates the whole equation — real coefficients stay fixed.",
            "Poori equation conjugate karo — real coefficients fixed rehte hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={lineD(298, 286, 782, 286)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 4 — guardrail: real coefficients only */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 60 323 L 60 357" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={340} size={16} fill={RED} anchor="start" weight={700}>
          {t("Holds ONLY for real coefficients — with complex ones it fails.", "Sirf real coefficients ke liye hota hai — complex ke saath fail ho jaata hai.")}
        </T>
      </Fade>

      {/* beat 5 — practical upside */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={395} size={14} fill={INK} anchor="middle">
          {t(
            "So with real coefficients you only ever find one complex root; the other is its conjugate.",
            "To real coefficients ke saath sirf ek complex root dhoondo; doosra uska conjugate hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(210, 410, 870, 410)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 6 — the symmetry breaks with complex coefficients */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={450} size={14} fill={INK} anchor="middle">
          {t(
            "Change to complex coefficients and the symmetry breaks: roots can be any two numbers.",
            "Coefficients complex karo aur symmetry toot jaati hai: roots koi bhi do numbers ho sakte hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(218, 466, 862, 466)} stroke={RED} sw={1.6} dur={0.6} />

      {/* beat 7 — guardrail: the classic conceptual error */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 490 L 60 524" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={507} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Assuming conjugate pairs with complex coefficients is the classic error.",
            "Complex coefficients ke saath conjugate pairs maan lena classic error hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
