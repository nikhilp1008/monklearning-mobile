/**
 * Ch06 · Section 31 — "Common pitfalls and pro-tips" (Torque & Angular Momentum)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.28, 19.03, 27.05, 45.74, 60.16, 75.01, 76.01] — b6/b7 are 1 s
 * in EN → instant staggers there):
 *  0 title + red underline
 *  1 trap 1: reference point + mini figure right (F, two ref dots, τ_A ≠ τ_B)
 *  2 anchor-first sub-line
 *  3 trap 2: only L conserved + examples sub
 *  4 trap 3: F sinθ only + dead-weight sub
 *  5 trap 4: N·m never joules + sub
 *  6 pro-tip green box (instant)
 *  7 one-line-conservation tail + underline (instant)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | script14 st x80 bl 125 · fig: F arrow (900,180)→(960,140) · dots A(790,250)
 *       B(990,260) · dashed lines to (900,180) · "τ_A ≠ τ_B" cx890 bl 300
 *  b2 | script12 st x100 bl 155
 *  b3 | script14 st x80 bl 205 · sub script12 st x100 bl 233
 *  b4 | script14 st x80 bl 285 · sub script12 st x100 bl 313
 *  b5 | script14 st x80 bl 365 · sub script12 st x100 bl 393
 *  b6 | green box x80..1000 y430..500 · L1 script14 cx540 bl 460 · L2 script12 cx540 bl 488
 *  b7 | script13 st x80 bl 545 · underline y565 x80..620
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "torque & angular-momentum traps",
            "torque & angular momentum ke traps"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 310 72 h 460" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — trap 1 + reference-point figure */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · no reference point named ⇒ τ and L are MEANINGLESS",
            "1 · reference point nahi bataya ⇒ τ aur L BEMAANI hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d={arrowD(900, 180, 960, 140)} stroke={AMBER} sw={2.8} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 785 250 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 985 260 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={775} y={270} size={12} fill={INK} anchor="end" weight={700}>
          A
        </T>
        <T x={1003} y={266} size={12} fill={INK} anchor="start" weight={700}>
          B
        </T>
        <Path
          d="M 790 250 L 896 184 M 990 260 L 904 184"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={890} y={300} size={14} fill={RED} weight={700}>
          τ
          <Sub>A</Sub>
          <Up> ≠ τ</Up>
          <Sub>B</Sub>
        </T>
      </Fade>

      {/* beat 2 — anchor first */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={100} y={155} size={12} fill={RED} script anchor="start">
          {t(
            "anchor the reference FIRST — never switch it mid-solution",
            "reference PEHLE anchor karo — beech mein kabhi mat badlo"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={205} size={14} fill={RED} script anchor="start">
          {t(
            "2 · only L is conserved — NOT kinetic energy",
            "2 · sirf L conserved hai — kinetic energy NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={100} y={233} size={12} fill={MUTED} script anchor="start">
          {t(
            "skater spins · wheel coupling · inelastic hits — L survives, K does not",
            "skater spins · wheel coupling · inelastic hits — L bachta hai, K nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 3 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={285} size={14} fill={RED} script anchor="start">
          {t(
            "3 · not the full F — only F sinθ turns the body",
            "3 · poora F nahi — sirf F sinθ body ghumata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={100} y={313} size={12} fill={MUTED} script anchor="start">
          {t(
            "the radial part is dead weight for rotation",
            "radial hissa rotation ke liye dead weight hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 4 */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={365} size={14} fill={RED} script anchor="start">
          {t(
            "4 · torque in N·m — NEVER in joules",
            "4 · torque N·m mein — joules mein KABHI nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={100} y={393} size={12} fill={MUTED} script anchor="start">
          {t(
            "torque: vector in N·m · energy: scalar in J — keep them apart",
            "torque: vector, N·m · energy: scalar, J — alag rakho"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip (1 s in EN) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 92 430 h 896 q 12 0 12 12 v 46 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={460} size={14} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: collision + rotation → take L about the PIVOT",
            "PRO-TIP: collision + rotation → L PIVOT ke baare mein lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={488} size={12} fill={MUTED} script>
          {t(
            "the unknown impulsive reaction has zero arm — it drops out automatically",
            "unknown impulsive reaction ka arm zero — apne aap nikal jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the fastest tool (1 s in EN) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "messy two-unknown problem → one-line conservation — the fastest tool in this subtopic",
            "messy two-unknown problem → one-line conservation — is subtopic ka sabse tez tool"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 80 565 h 600" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
