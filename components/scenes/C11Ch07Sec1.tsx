/**
 * C11 Ch07 · Section 1 — "Redox as one inseparable transaction: classical & electronic lenses"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 15.7, 31.06, 40.45, 49.75, 56.75, 70.49, 77.31, 91.14]):
 *  0 hook: kirana shop — shopkeeper/customer chips + crossing dal/cash arrows + caption
 *  1 the universal quote: "no giving without a taker — that IS redox" (erases beat0 at beat2)
 *  2 LENS 1 tag (classical view)
 *  3 oxidation/reduction classical definitions (two rows)
 *  4 THE DEMO: 2Mg + O₂ → 2MgO equation, O₂ highlighted amber
 *  5 "oxidised ✓" callout under Mg + red guardrail note (lens fails w/o O,H)
 *     (beats 2–5 erase at beat6)
 *  6 LENS 2 tag (electronic view)
 *  7 THE DEMO: Zn + Cu²⁺ → Zn²⁺ + Cu, oxidation numbers above every atom,
 *    red curved e⁻-transfer arrow Zn→Cu²⁺ labelled "2e⁻"
 *  8 OIL RIG mnemonic, red margin bar, stamped box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | chip "shopkeeper"        | Chip  | x64..254   y98..138
 *  b0 | chip "customer"          | Chip  | x826..1016 y98..138
 *  b0 | dal arrow (red, →)       | Draw  | y111 x266..818
 *  b0 | cash arrow (green, ←)    | Draw  | y128 x814..259
 *  b0 | caption (script 17)      | T mid | x540 bl178 box y155..187
 *  b1 | quote (script 20 green)  | T mid | x540 bl238 box y212..248, underline y256
 *  b2 | LENS1 chip (script 20)   | Chip  | x64..384 y100..146
 *  b3 | "OXIDATION" (sans20 800) | T st  | x64 bl210
 *  b3 | "+O₂ or −H₂" (sans19 red)| T st  | x310 bl210
 *  b3 | "REDUCTION" (sans20 800) | T st  | x64 bl403 (30px pitch fixed below)
 *  b3 | "−O₂ or +H₂" (sans19 grn)| T st  | x310 bl403
 *  b4 | "2Mg" (sans28 800 ink)   | T mid | x250 bl340
 *  b4 | "+" (sans24 ink)         | T mid | x310 bl340
 *  b4 | "O₂" (sans28 800 amber) | T mid | x370 bl340
 *  b4 | reaction arrow           | Draw  | y340 x430..650, under "burns" bl364
 *  b4 | "2MgO" (sans28 800 grn) | T mid | x760 bl340
 *  b5 | "oxidised ✓" (script17) | T mid | x250 bl400, arrow (250,392)→(250,354)
 *  b5 | margin bar (red)         | Draw  | x64 y440..470
 *  b5 | guardrail note (script18)| T st  | x80 bl460
 *  b6 | LENS2 chip (script 20)   | Chip  | x64..474 y100..146
 *  b7 | e⁻ arc + "2e⁻" (red)    | Draw+T| apex y180, endpoints (140,223)→(290,226)
 *  b7 | ox#s "0/+2/+2/0"(amber)  | T mid | y245, x140/290/680/830
 *  b7 | "Zn"/"+"/"Cu²⁺"/→/"Zn²⁺"/"+"/"Cu" | T mid | y295, x140/210/290/(arr360-590)/680/760/830
 *  b8 | margin bar (red)         | Draw  | x64 y380..450
 *  b8 | "OIL RIG" stamp box      | Draw  | x70..228 y388..442
 *  b8 | "OIL RIG" (sans32 800)   | T st  | x90 bl425
 *  b8 | subtext (script18)       | T st  | x250 bl425
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow, curvedArrowD } from "./chem-kit";

export default function C11Ch07Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={28} fill={RED} script>
          {t("redox = give ⇄ take, at the same instant", "redox = dena ⇄ lena, ek hi instant mein")}
        </T>
      </Fade>

      {/* ===== beat 0 — kirana shop hook (erases at beat 2) ===== */}
      <Fade on={beat >= 0 && beat < 2} delay={dl(0, 0.3)}>
        <Chip x={64} y={98} w={190} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          {t("shopkeeper", "dukaandar")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0 && beat < 2} delay={dl(0, 0.6)}>
        <Chip x={826} y={98} w={190} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          {t("customer", "customer")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0 && beat < 2}
        delay={dl(0, 1.6)}
        d="M 266 111 L 818 111 M 806 105 L 818 111 L 806 117"
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 0 && beat < 2}
        delay={dl(0, 2.6)}
        d="M 814 128 L 259 128 M 271 122 L 259 128 L 271 134"
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 0 && beat < 2} delay={dl(0, 3.8)}>
        <T x={540} y={178} size={17} fill={INK} script>
          {t("one gives, another takes — same instant", "ek deta hai, doosra leta hai — same instant")}
        </T>
      </Fade>

      {/* ===== beat 1 — universal quote (erases at beat 2) ===== */}
      <Fade on={beat >= 1 && beat < 2} delay={dl(1, 0.4)}>
        <T x={540} y={238} size={20} fill={GREEN} script>
          {t(
            "“no giving without a taker — that IS redox”",
            "“bina lene wale ke dena hota hi nahi — yahi hai redox”"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1 && beat < 2}
        delay={dl(1, 2)}
        d="M 300 256 C 400 252, 680 260, 780 254"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* ===== beat 2 — LENS 1 tag (erases at beat 6) ===== */}
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 0.3)}>
        <Chip x={64} y={100} w={320} h={46} fill={CREAM} stroke={AMBER} textFill={INK} size={20}>
          {t("LENS 1 · CLASSICAL (O / H)", "LENS 1 · CLASSICAL (O / H)")}
        </Chip>
      </Fade>

      {/* ===== beat 3 — classical definitions (erases at beat 6) ===== */}
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 0.3)}>
        <T x={64} y={210} size={20} fill={INK} weight={800} anchor="start">
          {t("OXIDATION", "OXIDATION")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 1)}>
        <T x={310} y={210} size={19} fill={RED} anchor="start">
          {t("+ O₂  or  − H₂", "+ O₂  ya  − H₂")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 1.8)}>
        <T x={64} y={241} size={20} fill={INK} weight={800} anchor="start">
          {t("REDUCTION", "REDUCTION")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 2.5)}>
        <T x={310} y={241} size={19} fill={GREEN} anchor="start">
          {t("− O₂  or  + H₂", "− O₂  ya  + H₂")}
        </T>
      </Fade>

      {/* ===== beat 4 — THE DEMO: 2Mg + O2 -> 2MgO (erases at beat 6) ===== */}
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 0.2)}>
        <T x={250} y={340} size={28} fill={INK} weight={800}>
          2Mg
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 0.7)}>
        <T x={310} y={340} size={24} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 1.2)}>
        <T x={370} y={340} size={28} fill={AMBER_DARK} weight={800}>
          O₂
        </T>
      </Fade>
      <ReactionArrow
        on={beat >= 4 && beat < 6}
        delay={dl(4, 2)}
        x1={430}
        x2={650}
        y={340}
        under={t("burns", "jalta hai")}
      />
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 3)}>
        <T x={760} y={340} size={28} fill={GREEN} weight={800}>
          2MgO
        </T>
      </Fade>

      {/* ===== beat 5 — oxidised callout + guardrail (erases at beat 6) ===== */}
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 0.4)}>
        <T x={250} y={400} size={17} fill={GREEN} script>
          {t("oxidised ✓", "oxidise hua ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5 && beat < 6}
        delay={dl(5, 1)}
        d="M 250 392 L 250 358 M 244 366 L 250 358 L 256 366"
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5 && beat < 6}
        delay={dl(5, 2)}
        d="M 64 440 L 64 470"
        stroke={RED}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 2.5)}>
        <T x={80} y={460} size={18} fill={RED} script anchor="start">
          {t("fails when there's no O and no H at all", "fail hota hai jab O aur H bilkul na ho")}
        </T>
      </Fade>

      {/* ===== beat 6 — LENS 2 tag ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={64} y={100} w={410} h={46} fill={CREAM} stroke={AMBER} textFill={INK} size={20}>
          {t("LENS 2 · ELECTRONIC (deeper truth)", "LENS 2 · ELECTRONIC (asli sach)")}
        </Chip>
      </Fade>

      {/* ===== beat 7 — THE DEMO: Zn + Cu2+ -> Zn2+ + Cu, ox numbers + e- arrow ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={220} y={180} size={18} fill={RED} weight={800}>
          {t("2e⁻", "2e⁻")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d={curvedArrowD(140, 223, 290, 226, -45)}
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={140} y={245} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={290} y={245} size={18} fill={AMBER_DARK} weight={800}>
          +2
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={140} y={295} size={30} fill={INK} weight={800}>
          Zn
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={210} y={295} size={26} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={290} y={295} size={30} fill={INK} weight={800}>
          Cu²⁺
        </T>
      </Fade>
      <ReactionArrow on={beat >= 7} delay={dl(7, 3.6)} x1={360} x2={590} y={295} />
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={680} y={245} size={18} fill={AMBER_DARK} weight={800}>
          +2
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={830} y={245} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={680} y={295} size={30} fill={GREEN} weight={800}>
          Zn²⁺
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={760} y={295} size={26} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={830} y={295} size={30} fill={GREEN} weight={800}>
          Cu
        </T>
      </Fade>

      {/* ===== beat 8 — OIL RIG mnemonic ===== */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.3)}
        d="M 64 380 L 64 450"
        stroke={RED}
        sw={3.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.8)}
        d="M 70 388 L 228 388 L 228 442 L 70 442 Z"
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.7)}>
        <T x={90} y={425} size={32} fill={RED} weight={800} anchor="start">
          {t("OIL RIG", "OIL RIG")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={250} y={425} size={18} fill={INK} script anchor="start">
          {t(
            "Oxidation Is Loss · Reduction Is Gain — of electrons",
            "Oxidation Is Loss · Reduction Is Gain — electrons ka"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
