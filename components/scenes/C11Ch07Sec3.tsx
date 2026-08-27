/**
 * C11 Ch07 · Section 3 — "Core definitions: oxidant, reductant, redox, disproportionation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.11, 20.57, 30.04, 38.23, 53.93, 67.16, 76.54]):
 *  0 intro line + underline (erases at beat1)
 *  1 OXIDATION row: 4 equivalent chips (+O · −H · −e⁻ · ↑O.N.)
 *  2 REDUCTION row: 4 equivalent chips (−O · +H · +e⁻ · ↓O.N.)
 *  3 red-margin rule: "the agent does the OPPOSITE to itself"
 *  4 OXIDISING AGENT card: def + examples (KMnO₄, K₂Cr₂O₇, HNO₃)
 *  5 REDUCING AGENT card: def + examples (active metals, H₂S, I⁻)
 *  6 REDOX definition, green-stroked stamp box
 *  7 DISPROPORTIONATION caution line (amber)
 *  (beats 1-7 all stay on screen — the whole vocabulary ladder is the "notes photo")
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s · Kalam bl−1.3s..+0.5s; longer language counts):
 *  b0 | intro (script 18 muted)  | T mid | x540 bl108, underline y120
 *  b1 | "OXIDATION" (sans20 red) | T st  | x64 bl121
 *  b1 | 4 chips (h36)            | Chip  | y97..133 x280/360/440/530
 *  b2 | "REDUCTION" (sans20 grn) | T st  | x64 bl191
 *  b2 | 4 chips (h36)            | Chip  | y167..203 x280/360/440/530
 *  b3 | margin bar + rule (red)  | Draw+T| x64 y222..252, text x80 bl245
 *  b4 | header (sans19 800 amb)  | T st  | x64 bl290
 *  b4 | def line (sans16)        | T st  | x64 bl316
 *  b4 | 3 example chips (h32)    | Chip  | y330..362 x64/176/318
 *  b5 | header (sans19 800 amb)  | T st  | x64 bl402
 *  b5 | def line (sans16)        | T st  | x64 bl428
 *  b5 | 3 example chips (h32)    | Chip  | y442..474 x64/228/312
 *  b6 | redox stamp box          | Fade+rect+T | x64..624 y488..534, text bl517
 *  b7 | "DISPROPORTIONATION"     | T st  | x64 bl552 (red)
 *  b7 | caution line (amber 15)  | T st  | x64 bl578
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the agent does the OPPOSITE to itself", "agent khud ke saath ULTA karta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — intro (erases at beat 1) ===== */}
      <Fade on={beat >= 0 && beat < 1} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={18} fill={MUTED} script>
          {t("the vocabulary that unlocks every problem", "yeh vocabulary har problem khol deti hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0 && beat < 1}
        delay={dl(0, 1.6)}
        d="M 320 120 C 420 116, 660 124, 760 118"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.7}
      />

      {/* ===== beat 1 — OXIDATION row (stays) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={64} y={121} size={20} fill={RED} weight={800} anchor="start">
          {t("OXIDATION", "OXIDATION")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={280} y={97} w={70} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          +O
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Chip x={360} y={97} w={70} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          −H
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Chip x={440} y={97} w={80} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          −e⁻
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Chip x={530} y={97} w={90} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          ↑ O.N.
        </Chip>
      </Fade>

      {/* ===== beat 2 — REDUCTION row (stays) ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={64} y={191} size={20} fill={GREEN} weight={800} anchor="start">
          {t("REDUCTION", "REDUCTION")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={280} y={167} w={70} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          −O
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Chip x={360} y={167} w={70} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          +H
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={440} y={167} w={80} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          +e⁻
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Chip x={530} y={167} w={90} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          ↓ O.N.
        </Chip>
      </Fade>

      {/* ===== beat 3 — the agent rule (stays) ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 222 L 64 252" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={245} size={18} fill={RED} script anchor="start">
          {t("the agent does the OPPOSITE to itself", "agent khud ke saath ULTA karta hai")}
        </T>
      </Fade>

      {/* ===== beat 4 — oxidising agent card (stays) ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={290} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          {t("OXIDISING AGENT (oxidant)", "OXIDISING AGENT (oxidant)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={64} y={316} size={16} fill={INK} anchor="start">
          {t("raises another's O.N. → itself REDUCED (gains e⁻)", "doosre ka O.N. badhata hai → khud REDUCED (e⁻ gain)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Chip x={64} y={330} w={100} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          KMnO₄
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <Chip x={176} y={330} w={130} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          K₂Cr₂O₇
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Chip x={318} y={330} w={90} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          HNO₃
        </Chip>
      </Fade>

      {/* ===== beat 5 — reducing agent card (stays) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={402} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          {t("REDUCING AGENT (reductant)", "REDUCING AGENT (reductant)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={64} y={428} size={16} fill={INK} anchor="start">
          {t("lowers another's O.N. → itself OXIDISED (loses e⁻)", "doosre ka O.N. ghataata hai → khud OXIDISED (e⁻ lose)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Chip x={64} y={442} w={150} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          {t("active metals", "active metals")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <Chip x={228} y={442} w={70} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          H₂S
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Chip x={312} y={442} w={60} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          I⁻
        </Chip>
      </Fade>

      {/* ===== beat 6 — redox definition stamp (stays) ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={64} y={488} width={560} height={46} rx={6} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={344} y={517} size={17} fill={GREEN} weight={800}>
          {t("REDOX = O.N. of ≥ 1 element changes", "REDOX = ≥1 element ka O.N. change hota hai")}
        </T>
      </Fade>

      {/* ===== beat 7 — disproportionation (stays) ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={64} y={552} size={18} fill={RED} weight={800} anchor="start">
          {t("DISPROPORTIONATION", "DISPROPORTIONATION")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={64} y={578} size={15} fill={AMBER_DARK} anchor="start">
          {t(
            "same element, one O.N. → oxidised AND reduced at once",
            "same element, ek O.N. → oxidise AND reduce ek saath"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
