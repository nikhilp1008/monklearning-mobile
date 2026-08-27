/**
 * C11 Ch02 · Section 1 — "Seeing the unseeable: how we probe the atom"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.23, 24.41, 35.24, 45.65, 55.89, 67.75, 84.05]):
 *  0 anchor: sealed-tiffin-box analogy — "what's inside, if you can never open it?"
 *  1 the atom's story: nobody has ever seen it directly — a dashed "?" circle
 *  2 represent (wrong model): Dalton's solid, indivisible atom (1808)
 *  3 explain the move: build the cathode-ray tube — cathode, anode, straight beam
 *  4 the beam bends toward the + plate ⇒ negative charge (deflection plates added)
 *  5 the giveaway: same bend for every gas (H₂/He/air chips)
 *  6 land: the universal particle is named — the electron
 *  7 guardrail: Dalton's "indivisible" is crossed out — the atom has parts
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (always)                | T mid | x540 y62 size24 script red
 *  b0 | tiffin box (dashed-look) | Draw  | x230..370 y90..145
 *  b0 | "?" in box               | T mid | cx300 y126 size26
 *  b0 | "sealed tiffin box" lbl  | T mid | cx300 y172 size13  [dims@b1]
 *  b1 | atom circle (dashed)     | Fade  | cx770 cy130 r40 → x730..810 y90..170
 *  b1 | "?" in circle            | T mid | cx770 y138 size22
 *  b1 | "never seen directly"    | T mid | cx770 y188 size13
 *  b2 | Dalton circle (solid)    | Fade  | cx150 cy340 r45 → x105..195 y295..385
 *  b2 | "Dalton (1808)" lbl      | T mid | cx150 y280 size14
 *  b2 | "indivisible atom" lbl   | T mid | cx150 y413 size13         [crossed@b7]
 *  b3 | tube outline             | Draw  | x280..960 y300..390
 *  b3 | cathode plate            | Fade  | x290..304 y323..377
 *  b3 | anode plate              | Fade  | x946..960 y323..377
 *  b3 | "cathode (−)" lbl        | T mid | cx297 y288
 *  b3 | "anode (+)" lbl          | T mid | cx953 y288
 *  b3 | straight beam (b3 only)  | Draw  | x304..946 y350            [removed@b4]
 *  b3 | "straight line" lbl(b3)  | T mid | cx625 y331               [removed@b4]
 *  b4 | + deflect plate          | Fade  | x650..850 y308..316
 *  b4 | − deflect plate          | Fade  | x650..850 y374..382
 *  b4 | "+"/"−" plate labels     | T     | cx860 y316 / y382
 *  b4 | bent beam                | Draw  | (304,350) curve → (946,350)
 *  b4 | "negative charge" chip   | Chip  | x448 y448 w440 h34 (RED)
 *  b5 | H₂/He/air chips ×3       | Chip  | y402..430  x245..405/475..635/705..865
 *  b6 | "the electron" chip      | Chip  | x350 y498 w380 h36 (GREEN)
 *  b7 | cross-out on Dalton grp  | Draw  | x100..210 y265..425 (annotation)
 *  b7 | guardrail line           | T mid | x540 y574 size16 script green
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { curvedArrowD } from "./chem-kit";

export default function C11Ch02Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t(
            "how do you study something you can never see?",
            "kabhi na dekhi cheez ko kaise samjhein?"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor: sealed tiffin box you can never open */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.2)}
        d="M 230 90 h 140 v 55 h -140 z"
        stroke={MUTED}
        sw={2}
        dur={0.9}
      />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.3)}>
        <T x={300} y={126} size={26} fill={MUTED}>
          ?
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 2.2)}>
        <T x={300} y={172} size={13} fill={MUTED} script>
          {t("sealed tiffin box", "band tiffin dabba")}
        </T>
      </Fade>

      {/* beat 1 — the atom: deduced, never seen directly */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Circle cx={770} cy={130} r={40} fill="none" stroke={MUTED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={770} y={138} size={22} fill={MUTED}>
          ?
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={770} y={188} size={13} fill={MUTED} script>
          {t("the atom — never seen directly", "atom — kabhi seedha nahi dekha")}
        </T>
      </Fade>

      {/* beat 2 — represent (the old model): Dalton's solid, indivisible atom */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Circle cx={150} cy={340} r={45} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={150} y={280} size={14} fill={INK} weight={700}>
          Dalton (1808)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={150} y={413} size={13} fill={AMBER_DARK} script>
          {t("the indivisible atom", "atom = indivisible")}
        </T>
      </Fade>

      {/* beat 3 — explain the move: build the cathode-ray tube */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.1)}
        d="M 280 300 h 680 v 90 h -680 z"
        stroke={INK}
        sw={2.2}
        dur={1.1}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Rect x={290} y={323} width={14} height={54} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Rect x={946} y={323} width={14} height={54} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={297} y={288} size={13} fill={INK}>
          {t("cathode (−)", "cathode (−)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={953} y={288} size={13} fill={INK}>
          {t("anode (+)", "anode (+)")}
        </T>
      </Fade>
      <Draw
        on={beat === 3}
        delay={dl(3, 3.2)}
        d={arrowD(304, 350, 946, 350)}
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat === 3} delay={dl(3, 4.2)}>
        <T x={625} y={331} size={13} fill={RED} script>
          {t("cathode rays — straight line", "cathode rays — seedhi lines")}
        </T>
      </Fade>

      {/* beat 4 — the beam bends toward the + plate: negative charge */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Rect x={650} y={308} width={200} height={8} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Rect x={650} y={374} width={200} height={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={860} y={316} size={14} fill={AMBER_DARK} anchor="start">
          +
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={860} y={382} size={14} fill={INK} anchor="start">
          −
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.8)}
        d={curvedArrowD(304, 350, 946, 350, 40)}
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <Chip x={448} y={448} w={440} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("bends toward + ⇒ carries negative charge", "+ ki taraf mudta hai ⇒ negative charge")}
        </Chip>
      </Fade>

      {/* beat 5 — the giveaway: same bend for every gas (clear of the Dalton
          label's column, x≤~225, so this chip row's fill never paints over it) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={245} y={402} w={160} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("H₂ tube → same bend", "H₂ tube → wahi mod")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Chip x={475} y={402} w={160} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("He tube → same bend", "He tube → wahi mod")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip x={705} y={402} w={160} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("air tube → same bend", "hawa tube → wahi mod")}
        </Chip>
      </Fade>

      {/* beat 6 — land: the universal particle is named */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={350} y={498} w={380} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("universal particle → the electron ⁻", "universal particle → electron ⁻")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: Dalton's "indivisible" breaks, the atom has parts */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0)}
        d={crossD(100, 265, 110, 160)}
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={574} size={16} fill={GREEN} script>
          {t(
            "the atom has parts — finding them is this whole chapter",
            "atom ke parts hain — unhe dhoondhna hi is chapter ka kaam hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
