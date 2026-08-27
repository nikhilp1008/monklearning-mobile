/**
 * C11 Ch06 · Section 5 — "Heterogeneous equilibria: the pure-phase rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.36, 9.36, 10.36, 11.36, 12.36, 13.36, 14.36]):
 *  0 title + underline
 *  1 LEFT: active mass of a pure solid/liquid = fixed by density
 *  2 LEFT: two-lump demo — small lump vs big lump, "same active mass"
 *  3 LEFT: ⇒ folded into K, omitted from the expression
 *  4 RIGHT: CaCO3(s) ⇌ CaO(s) + CO2(g)
 *  5 RIGHT: full Kc fraction, cross out the two solid terms, land Kp = p(CO2)
 *  6 RIGHT: callback — no matter how big the lump!
 *  7 guardrail (full width): writing [CaO]/[CaCO3] = most penalised mistake
 *
 * Layout plan (two columns; longer language counts):
 *  b0 | title (script 26, red)        | T mid  | x213..867  y30..92  (bl 64)
 *  b1 | active-mass note (16, ink)    | T st   | x60..464  y117..135 (bl 130)
 *  b2 | beaker①/② + blobs             | Draw   | x80..320  y195..280
 *  b2 | labels + "same active mass"   | T/Chip | y296..340
 *  b3 | conclusion note (14, amber)   | T st   | x60..430  y361..376 (bl 372)
 *  b4 | equation (18, ink)            | T mid  | x613..857 y157..176 (bl 170)
 *  b5 | Kc = [CaO]/[CaCO3] fraction   | T      | x560..760 y221..273
 *  b5 | cross-outs (red) on solids    | Draw   | over [CaO] and [CaCO3]
 *  b5 | "Kp = p(CO2)" ringed (green)  | T mid  | x675..796 y293..317 (bl 310)
 *  b6 | callback (14, amber, script)  | T mid  | x635..835 y347..372 (bl 365)
 *  b7 | warning box (red)             | rect   | x60..980  y490..554
 *  b7 | warning text (16, red)        | T mid  | y517..535 (bl 528)
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t(
            "pure solids & liquids drop out of K",
            "pure solids aur liquids K se drop ho jaate"
          )}
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

      {/* beat 1 — active mass fixed by density */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={130} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "active mass of a pure solid = fixed by density",
            "pure solid ka active mass = density se fixed"
          )}
        </T>
      </Fade>

      {/* beat 2 — two lumps, same active mass */}
      <Draw
        on={beat >= 2}
        d="M 80 205 V 280 H 170 V 205"
        stroke={INK}
        sw={2.2}
        dur={beat > 2 ? 0.3 : 0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d="M 210 195 V 280 H 320 V 195"
        stroke={INK}
        sw={2.2}
        dur={beat > 2 ? 0.3 : 0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={125} cy={255} r={14} fill={AMBER_DARK} />
        <Circle cx={265} cy={245} r={24} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={125} y={296} size={12} fill={MUTED} anchor="middle">
          {t("small lump", "chhota lump")}
        </T>
        <T x={265} y={296} size={12} fill={MUTED} anchor="middle">
          {t("big lump", "bada lump")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={90} y={306} w={290} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14} script={false}>
          {t("same active mass, any amount", "same active mass, kitna bhi ho")}
        </Chip>
      </Fade>

      {/* beat 3 — folded into K, omitted */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={372} size={14} fill={AMBER_DARK} anchor="start">
          {t(
            "⇒ folded into K, omitted from the expression",
            "⇒ K mein fold hokar expression se omit ho jaata"
          )}
        </T>
      </Fade>

      {/* beat 4 — the worked example equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={735} y={170} size={18} fill={INK} weight={600} anchor="middle">
          CaCO₃(s) ⇌ CaO(s) + CO₂(g)
        </T>
      </Fade>

      {/* beat 5 — full Kc, cross out the solids, land Kp = p(CO2) */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={250} size={19} fill={INK} weight={700} anchor="end">
          Kc =
        </T>
        <T x={575} y={235} size={17} fill={INK} anchor="start">
          [CaO]
        </T>
        <T x={622} y={235} size={17} fill={INK} anchor="start">
          [CO₂]
        </T>
        <Line x1={570} y1={245} x2={760} y2={245} stroke={INK} strokeWidth={1.8} />
        <T x={575} y={268} size={17} fill={INK} anchor="start">
          [CaCO₃]
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={crossD(575, 221, 43, 19)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.5)}
        d={crossD(575, 255, 63, 19)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={735} y={310} size={22} fill={GREEN} weight={800} anchor="middle">
          Kp = p(CO₂)
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.8)}
        d={ringD(735, 305, 75, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 6 — no matter how big the lump */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={735} y={365} size={14} fill={AMBER_DARK} script anchor="middle">
          {t("no matter how big the lump!", "lump kitna bhi bada ho!")}
        </T>
      </Fade>

      {/* beat 7 — the guardrail: the most penalised Board mistake */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={60} y={490} width={920} height={64} rx={12} fill={CREAM} stroke={RED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={540} y={528} size={16} fill={RED} weight={700} anchor="middle">
          {t(
            "writing [CaO] or [CaCO3] = ✗ most penalised Board mistake",
            "[CaO] ya [CaCO3] likhna = ✗ sabse zyada penalise hone wali galti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
