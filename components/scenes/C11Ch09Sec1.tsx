/**
 * C11 Ch09 · Section 1 — "The hydrocarbon family tree"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. First scene to use chem-kit.tsx — the house
 * exemplar for this chapter once verified.
 *
 * House convention (this chapter): SPECIFIC molecular formulas use verified
 * subscript digits (H₂O style, U+2080–2089). GENERAL formulas with a variable
 * "n" (CnH2n+2 etc.) are written as plain characters — subscript letter/sign
 * glyphs (ₙ ₊ ₋) are NOT in the notation guide's verified set, so we don't
 * risk tofu on them.
 *
 * Beats (board_reveal_at, en [0, 13.06, 22.82, 31.75, 38.54, 47.62, 55.13, 61.66]):
 *  0 root "HYDROCARBONS (only C, H)" lands · 1 three branch lines + labels
 *    (ALIPHATIC / ALICYCLIC / AROMATIC) fan out · 2 aliphatic = open chain
 *    (zigzag icon) splitting into saturated / unsaturated leaves · 3 alkanes
 *    formula chip lands under "saturated" · 4 alkenes + alkynes formula chips
 *    land under "unsaturated" · 5 alicyclic ring drawn (no inner circle) ·
 *    6 aromatic ring + inner delocalisation circle drawn · 7 red theme banner:
 *    unsaturation invites addition, aromaticity resists it
 *
 * Layout plan — boxes are ESTIMATED render boxes (Kalam ink box ≈ baseline
 * −1.3·size … +0.5·size; Anek ≈ −0.78 … +0.31), longer language counts:
 *  b0 | title (script 30, red)         | T mid  | x290..790  y33..87  (bl 72)
 *  b0 | "HYDROCARBONS" (22 w800)       | T mid  | x474..606  y101..125 (bl 118)
 *  b0 | underline                      | Draw   | y127 x480..600
 *  b0 | "(only C and H)" (script 14)   | T mid  | x452..628  y137..162 (bl 155)
 *  b1 | branch lines ×3                | Draw   | (540,175) → (210/540/870,205)
 *  b1 | ALIPHATIC/ALICYCLIC/AROMATIC   | T mid  | y218..238 (bl 232) x169..251/500..581/834..906
 *  b2 | zigzag chain icon              | Draw   | x170..250 y246..268
 *  b2 | "(open chains)" (script 14)    | T mid  | x150..270  y286..311 (bl 304)
 *  b2 | split lines ×2                 | Draw   | (210,322) → (110/310,332)
 *  b2 | "saturated"/"unsaturated"(15)  | T mid  | x76..144 / x269..352  y343..360 (bl 355)
 *  b3 | alkanes chip "CnH2n+2"         | Chip   | x63..157   y386..424
 *  b3 | "alkanes" (script 14)          | T mid  | x110  y438..463 (bl 456)
 *  b4 | alkenes chip "CnH2n"           | Chip   | x212.5..287.5 y386..424
 *  b4 | "alkenes" (script 14)          | T mid  | x250  y438..463 (bl 456)
 *  b4 | alkynes chip "CnH2n-2"         | Chip   | x323..417  y386..424
 *  b4 | "alkynes" (script 14)          | T mid  | x370  y438..463 (bl 456)
 *  b5 | "(non-aromatic rings)" (14)    | T mid  | x459..621  y252..277 (bl 270)
 *  b5 | alicyclic ring                 | Draw   | ring c(540,350) r55 → y295..405
 *  b5 | "cycloalkanes" (script 14)     | T mid  | x540  y417..442 (bl 435)
 *  b6 | "(specially stable rings)"(14) | T mid  | x774..966  y252..277 (bl 270)
 *  b6 | aromatic ring + inner circle   | Draw   | ring c(870,350) r55 · circle r32
 *  b6 | "benzene" (script 14)          | T mid  | x870  y417..442 (bl 435)
 *  b7 | margin bar (red)               | Draw   | x60  y480..522
 *  b7 | theme banner (script 19, red)  | T st   | x76..745(en)/901(hi) y485..520 (bl 510)
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
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={72} size={30} fill={RED} script>
          {t("the hydrocarbon family tree", "hydrocarbon ka family tree")}
        </T>
      </Fade>

      {/* beat 0 — root: what a hydrocarbon is */}
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={540} y={118} size={22} fill={INK} weight={800}>
          HYDROCARBONS
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d="M 480 127 C 505 124, 565 130, 600 127"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={155} size={14} fill={MUTED} script>
          {t("(only C and H)", "(sirf C aur H)")}
        </T>
      </Fade>

      {/* beat 1 — three branches fan out */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 540 175 L 210 205" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={210} y={232} size={18} fill={AMBER_DARK} weight={700}>
          ALIPHATIC
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 540 175 L 540 205" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={232} size={18} fill={AMBER_DARK} weight={700}>
          ALICYCLIC
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M 540 175 L 870 205" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={870} y={232} size={18} fill={AMBER_DARK} weight={700}>
          AROMATIC
        </T>
      </Fade>

      {/* beat 2 — aliphatic = open chain, splits by saturation */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d="M 170 268 L 190 256 L 210 268 L 230 256 L 250 268"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={210} y={304} size={14} fill={MUTED} script>
          {t("(open chains)", "(khuli chains)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 210 322 L 110 332" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={110} y={355} size={15} fill={AMBER_DARK} weight={700}>
          saturated
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d="M 210 322 L 310 332" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={310} y={355} size={15} fill={AMBER_DARK} weight={700}>
          unsaturated
        </T>
      </Fade>

      {/* beat 3 — alkanes formula lands under "saturated" */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={63} y={386} w={94} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n+2
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={110} y={456} size={14} fill={AMBER_DARK} script>
          alkanes
        </T>
      </Fade>

      {/* beat 4 — alkenes + alkynes formulas land under "unsaturated" */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={212.5} y={386} w={75} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={250} y={456} size={14} fill={AMBER_DARK} script>
          alkenes
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Chip x={323} y={386} w={94} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n-2
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={370} y={456} size={14} fill={AMBER_DARK} script>
          alkynes
        </T>
      </Fade>

      {/* beat 5 — alicyclic: a ring, but not aromatic */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={270} size={14} fill={MUTED} script>
          {t("(non-aromatic rings)", "(non-aromatic rings)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={ringD(540, 350, 55)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={540} y={435} size={14} fill={AMBER_DARK} script>
          cycloalkanes
        </T>
      </Fade>

      {/* beat 6 — aromatic: a ring with the special delocalised circle */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={870} y={270} size={14} fill={MUTED} script>
          {t("(specially stable rings)", "(khaas stable rings)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ringD(870, 350, 55)} stroke={INK} sw={2.4} dur={0.9} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.3)}
        d={`M ${870 + 32} 350 A 32 32 0 1 1 ${870 - 32} 350 A 32 32 0 1 1 ${870 + 32} 350`}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.1)}>
        <T x={870} y={435} size={14} fill={AMBER_DARK} script>
          benzene
        </T>
      </Fade>

      {/* beat 7 — the theme for the whole chapter */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 60 480 L 60 522" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={510} size={19} fill={RED} script anchor="start">
          {t(
            "Theme: unsaturation invites addition — aromaticity resists it",
            "Yaad rakho: unsaturation addition invite karti — aromaticity resist karti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
