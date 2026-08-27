/**
 * C11 Ch06 · Section 16 — "ΔG versus ΔG°: the slope now vs the fixed landscape"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 10.2, 18.4, 28.8, 40.2, 50, 60.2, 69.7]):
 *  0 title + underline + column divider
 *  1 LEFT header: ΔG — slope of the landscape NOW
 *  2 LEFT sign rows: <0 forward, >0 backward, =0 equilibrium
 *  3 RIGHT header: ΔG° — fixed number, at given T
 *  4 RIGHT detail: standard states ⇒ locates the valley, fixes K
 *  5 central: ΔG° = −RT ln K  (never plain ΔG)
 *  6 two chips: large −ΔG° ⇒ K>1 · large +ΔG° ⇒ K<1
 *  7 land: ΔG° and K — same thing, two languages (ringed)
 *
 * Layout plan (two columns, centers x=270 / 810; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x220..860  y30..88  (bl 64)
 *  b0 | divider                     | Draw   | x540  y108..258
 *  b1 | "ΔG" (28, ink)              | T mid  | x230..310  y92..129 (bl 120)
 *  b1 | subtitle (13, muted)        | T mid  | y140..154 (bl 150)
 *  b2 | 3 sign rows (14)            | T mid  | y167..236
 *  b3 | "ΔG°" (28, amber-dark)      | T mid  | x765..855  y92..129 (bl 120)
 *  b3 | subtitle (13, muted)        | T mid  | y140..154 (bl 150)
 *  b4 | detail (14, ink)            | T mid  | x649..971 y169..184 (bl 180)
 *  b5 | "ΔG°=−RT ln K" (22, ink)    | T mid  | x457..623 y283..307 (bl 300)
 *  b5 | "(never plain ΔG)" (13,red) | T mid  | x475..605 y323..340 (bl 340)
 *  b6 | "large −ΔG°⇒K>1" chip       | Chip   | x310..530 y375..419
 *  b6 | "large +ΔG°⇒K<1" chip       | Chip   | x550..770 y375..419
 *  b7 | landing statement, ringed   | T mid  | x334..746 y443..466 (bl 460)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("ΔG vs ΔG°: the slope now vs the fixed landscape", "ΔG vs ΔG°: abhi ka slope vs fixed landscape")}
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
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d="M 540 108 L 540 258" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* beat 1 — ΔG header */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={270} y={120} size={28} fill={INK} weight={800} anchor="middle">ΔG</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={150} size={13} fill={MUTED} anchor="middle">
          {t("slope of the landscape NOW", "abhi ke landscape ka slope")}
        </T>
      </Fade>

      {/* beat 2 — sign rows */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={270} y={178} size={14} fill={GREEN} anchor="middle">ΔG &lt; 0 → forward</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={270} y={205} size={14} fill={RED} anchor="middle">ΔG &gt; 0 → backward</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={270} y={232} size={14} fill={INK} anchor="middle">ΔG = 0 → equilibrium</T>
      </Fade>

      {/* beat 3 — ΔG° header */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={810} y={120} size={28} fill={AMBER_DARK} weight={800} anchor="middle">ΔG°</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={810} y={150} size={13} fill={MUTED} anchor="middle">
          {t("fixed number, at given T", "fixed number, di gayi T par")}
        </T>
      </Fade>

      {/* beat 4 — ΔG° detail */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={810} y={180} size={14} fill={INK} anchor="middle">
          {t("standard states ⇒ locates the valley, fixes K", "standard states ⇒ valley locate, K fix karta")}
        </T>
      </Fade>

      {/* beat 5 — the relation */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={300} size={22} fill={INK} weight={700} anchor="middle">
          ΔG° = −RT ln K
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={340} size={13} fill={RED} script anchor="middle">
          {t("(never plain ΔG)", "(kabhi plain ΔG nahi)")}
        </T>
      </Fade>

      {/* beat 6 — the K relation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={310} y={375} w={220} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          large −ΔG° ⇒ K &gt; 1
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={550} y={375} w={220} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          large +ΔG° ⇒ K &lt; 1
        </Chip>
      </Fade>

      {/* beat 7 — land it */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={460} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("ΔG° and K — same thing, two languages", "ΔG° aur K — same baat, do languages")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 454, 206, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
