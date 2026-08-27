/**
 * C11 Ch06 · Section 27 — "The five levers, and the only one that changes K"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.4, 18.9, 29.9, 35, 40.6, 50.2, 57.8]):
 *  0 title + underline
 *  1 5 lever chips: concentration, pressure, volume, inert gas, temperature
 *  2 guardrail: a shift changes AMOUNTS — never the value of K
 *  3 ring the temperature chip: the ONE exception
 *  4 land, ringed: only heating/cooling REWRITES K
 *  5 note: every other lever slides the same fixed K curve
 *  6 summary rows: +reactant/−product ⇒ forward; reverse ⇒ backward
 *  7 inert gas: const V ⇒ no shift; const P ⇒ shifts to more gas moles
 *
 * Layout plan (5-chip row, centers evenly spaced; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x200..880  y30..88  (bl 64)
 *  b1 | 5 lever chips               | Chip   | x85..995  y110..150
 *  b2 | guardrail (15, red)         | T mid  | x364..716 y183..200 (bl 195)
 *  b3 | ring on temperature chip    | Draw   | c(910,130) rx100 ry30
 *  b3 | "the ONE exception" (13,rd) | T mid  | x838..982 y212..236 (bl 230)
 *  b4 | landed statement ringed(20) | T mid  | x366..714 y254..276 (bl 270)
 *  b5 | note (14, muted, script)    | T mid  | y310..335 (bl 328)
 *  b6 | summary line1 (15, green)   | T mid  | y353..370 (bl 365)
 *  b6 | summary line2 (15, red)     | T mid  | y383..400 (bl 395)
 *  b7 | inert-gas note (14, ink)    | T mid  | y423..440 (bl 435)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("five levers — only one changes K", "paanch levers — sirf ek K badalta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the five levers */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={85} y={110} w={170} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("concentration", "concentration")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={270} y={110} w={170} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("pressure", "pressure")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Chip x={455} y={110} w={170} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("volume", "volume")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={640} y={110} w={170} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("inert gas", "inert gas")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Chip x={825} y={110} w={170} h={40} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("temperature", "temperature")}
        </Chip>
      </Fade>

      {/* beat 2 — the guardrail */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={195} size={15} fill={RED} weight={600} anchor="middle">
          {t(
            "a shift changes AMOUNTS — never the value of K",
            "shift AMOUNTS badalta — K ki value kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the one exception */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d={ringD(910, 130, 100, 30)}
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={910} y={230} size={13} fill={RED} script anchor="middle">
          {t("the ONE exception", "ek hi exception")}
        </T>
      </Fade>

      {/* beat 4 — only temperature rewrites K */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={270} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("only heating/cooling REWRITES K", "sirf heating/cooling K REWRITE karta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 265, 174, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — every other lever */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={328} size={14} fill={MUTED} script anchor="middle">
          {t(
            "every other lever slides along the SAME fixed K curve",
            "baaki har lever wahi fixed K curve par slide karta"
          )}
        </T>
      </Fade>

      {/* beat 6 — direction summary */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={365} size={15} fill={GREEN} anchor="middle">
          {t("+ reactant or − product ⇒ forward", "+ reactant ya − product ⇒ forward")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={395} size={15} fill={RED} anchor="middle">
          {t("the reverse ⇒ backward", "iska reverse ⇒ backward")}
        </T>
      </Fade>

      {/* beat 7 — inert gas note */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={435} size={14} fill={INK} anchor="middle">
          {t(
            "inert gas: const V ⇒ no shift;  const P ⇒ shifts to more gas moles",
            "inert gas: const V ⇒ no shift;  const P ⇒ zyada gas moles ki taraf"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
