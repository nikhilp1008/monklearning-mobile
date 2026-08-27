/**
 * M11 Ch04 · Section 18 — "Worked: inverse via conjugate & a modulus proof"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples back to back: a direct computation,
 * then a proof that leans on "take the modulus of both sides."
 *
 * Beats (board_reveal_at_english [0, 4.61, 17.49, 29.87, 44.03, 52.74, 64, 76.71]):
 *  0 heading: "inverse from z-bar over |z|², and a modulus proof"
 *  1 given/setup: z = 4-3i — |z|²=16+9=25, z̄=4+3i
 *  2 answer (boxed): z⁻¹ = (4+3i)/25 = 4/25 + 3/25 i
 *  3 given: prove a+ib = (c+i)/(c-i), c real ⇒ a²+b²=1
 *  4 step: take the modulus of both sides
 *  5 step: |a+ib| = |c+i|/|c-i| = √(c²+1)/√(c²+1) = 1
 *  6 answer (boxed): √(a²+b²)=1 ⇒ a²+b²=1
 *  7 guardrail (red-margin): |·| across a quotient beats expanding into a+ib
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | z card, 3 lines (18,ink,w700)     | T/Bar  | x140  y140/175/210 (Overline #1)
 *  b2 | boxed inverse result              | Draw+T | box x310..770 y240..288
 *  b3 | proof statement (15,ink)          | T mid  | x540  y330
 *  b4 | step note (15,ink)                | T mid  | x540  y365
 *  b5 | modulus-of-both-sides (17,ink,w700)| T mid | x540  y405
 *  b6 | boxed proof conclusion            | Draw+T | box x340..740 y440..486
 *  b7 | red bar + guardrail (15,red,w700) | Draw+T | x60 y520..550, text x76 y537
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract. */
function Bar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
  text = "z",
  barWidth,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
  text?: string;
  barWidth?: number;
}) {
  const w = barWidth ?? size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          {text}
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch04Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Inverse via Conjugate & a Modulus Proof", "Solved: Conjugate se Inverse & Modulus Proof")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Inverse from z-bar over |z|², and a modulus proof", "z-bar over |z|² se inverse, aur ek modulus proof")}
        </T>
      </Fade>

      {/* beat 1 — z card */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={140} size={18} fill={INK} anchor="start" weight={700}>z = 4 - 3i</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={140} y={175} size={18} fill={INK} anchor="start" weight={700}>|z|² = 16 + 9 = 25</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 1.0)} x={140} y={210} size={18} barWidth={10.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={162} y={210} size={18} fill={INK} anchor="start" weight={700}>= 4 + 3i</T>
      </Fade>

      {/* beat 2 — boxed inverse result */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(310, 240, 460, 48)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={270} size={18} fill={INK} anchor="middle" weight={700}>
          z⁻¹ = (4+3i)/25 = 4/25 + 3/25 i
        </T>
      </Fade>

      {/* beat 3 — proof statement */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={330} size={15} fill={INK} anchor="middle">
          {t(
            "Prove: if a+ib = (c+i)/(c-i) with c real, then a²+b²=1.",
            "Prove karo: agar a+ib = (c+i)/(c-i), c real hai, to a²+b²=1."
          )}
        </T>
      </Fade>

      {/* beat 4 — step note */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={365} size={15} fill={INK} anchor="middle">
          {t(
            "Take the modulus of both sides — moduli are multiplicative.",
            "Dono taraf ka modulus lo — moduli multiplicative hain."
          )}
        </T>
      </Fade>

      {/* beat 5 — the cancellation step */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={405} size={17} fill={INK} anchor="middle" weight={700}>
          |a+ib| = |c+i|/|c-i| = √(c²+1)/√(c²+1) = 1
        </T>
      </Fade>

      {/* beat 6 — boxed conclusion */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(340, 440, 400, 46)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={469} size={18} fill={INK} anchor="middle" weight={700}>
          √(a² + b²) = 1  ⇒  a² + b² = 1
        </T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 520 L 60 550" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={537} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Taking |·| across a quotient beats expanding into a+ib.",
            "Quotient par |·| lena a+ib mein expand karne se behtar hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
