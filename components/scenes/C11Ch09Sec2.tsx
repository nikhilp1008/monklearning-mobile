/**
 * C11 Ch09 · Section 2 — "Cycloalkanes and Baeyer's ring strain"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.17, 16.3, 24.74, 34.73, 45.24, 52.61, 61.58, 73.39]):
 *  0 chain→ring pictogram · 1 −2H, formula CnH2n lands · 2 RED trap: same
 *  formula as alkenes, no double bond · 3 naming: cyclo- + hexane = cyclohexane
 *  · 4 109.5° ideal angle + tetrahedral icon · 5 deviation = angle strain
 *  (Baeyer) · 6 cyclopropane 60°/cyclobutane 90° — strained · 7 cyclopentane
 *  ~108° near strain-free / cyclohexane chair — stable · 8 RED note: larger
 *  rings not planar
 *
 * Layout plan (estimated boxes, longer language counts):
 *  b0 | chain zigzag           | Draw  | x70..145  y102..118
 *  b0 | arrow                  | Draw  | x158..196 y110
 *  b0 | ring hexagon           | Draw  | c(228,110) r24 → x204..252 y86..134
 *  b0 | "closes into a ring"   | T mid | x162  y151..166 (bl 158, script14)
 *  b1 | "-2H" (red 13)         | T mid | x177  y83..98  (bl 95)
 *  b1 | chip "CnH2n"           | Chip  | x310..388 y92..128
 *  b2 | margin bar + banner    | Draw+T| bar x60 y180..214 · text bl202 x76..
 *  b3 | cyclo- + hexane = cyclohexane | T row | y246 (bl) x320..660
 *  b3 | underline under result | Draw  | x545..655 y254
 *  b4 | "109.5°" / sublabel    | T mid | x470  y279..325 (bl 296/318)
 *  b4 | tetrahedral icon       | Draw  | c(610,296) r≈22
 *  b5 | strain line + underline| T+Draw| bl350 x346..734 · underline y360
 *  b6 | triangle (60°, strained)   | Draw+T | c(150,435) r34
 *  b6 | square (90°, strained)     | Draw+T | c(390,435) r34
 *  b7 | pentagon (~108°, ~strain-free) | Draw+T | c(630,435) r36
 *  b7 | chair zigzag (cyclohexane, stable) | Draw+T | c(870,435)
 *  b8 | margin bar + final note | Draw+T | bar x60 y551..590 · text bl578
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} script>
          {t("cycloalkanes and Baeyer's ring strain", "cycloalkanes aur Baeyer ka ring strain")}
        </T>
      </Fade>

      {/* beat 0 — chain closes into a ring */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 70 118 L 95 102 L 120 118 L 145 102" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 1.1)} d={arrowD(158, 110, 196, 110)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 1.7)} d={ringD(228, 110, 24, 6)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <T x={162} y={158} size={14} fill={MUTED} script>
          {t("closes into a ring", "ring mein band ho jaata hai")}
        </T>
      </Fade>

      {/* beat 1 — lose 2H, formula CnH2n */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={177} y={95} size={13} fill={RED} weight={700}>
          −2H
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={310} y={92} w={78} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n
        </Chip>
      </Fade>

      {/* beat 2 — the trap: same formula, no double bond */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 180 L 60 214" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={76} y={202} size={18} fill={RED} script anchor="start">
          {t("same formula as alkenes — no double bond", "formula alkene jaisa — par double bond nahi")}
        </T>
      </Fade>

      {/* beat 3 — naming: cyclo- + alkane name */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={350} y={246} size={18} fill={AMBER_DARK} weight={700}>
          cyclo-
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={400} y={246} size={16} fill={MUTED}>+</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={445} y={246} size={18} fill={INK} weight={700}>
          hexane
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={495} y={246} size={16} fill={MUTED}>=</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={600} y={246} size={20} fill={INK} weight={800}>
          cyclohexane
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 545 254 L 655 254" stroke={INK} sw={2} dur={0.4} />

      {/* beat 4 — the ideal tetrahedral angle */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={470} y={296} size={22} fill={INK} weight={800}>
          109.5°
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={470} y={318} size={13} fill={MUTED} script>
          {t("ideal C–C–C angle", "ideal C–C–C angle")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d="M 610 280 L 610 314 M 610 296 L 596 312 M 610 296 L 624 312" stroke={INK} sw={2} dur={0.5} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.3)}
        d="M 601 305 L 596 316 L 605 313 M 619 305 L 624 316 L 615 313"
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />

      {/* beat 5 — deviation = angle strain */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={350} size={16} fill={INK}>
          {t("deviation = angle strain (Baeyer's theory)", "ideal se hatna = angle strain (Baeyer's theory)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 346 360 L 734 360" stroke={AMBER_DARK} sw={1.6} dur={0.6} />

      {/* beat 6 — cyclopropane + cyclobutane: badly strained */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={385} size={16} fill={RED} weight={700}>60°</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={ringD(150, 435, 34, 3)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={150} y={498} size={13} fill={AMBER_DARK} script>cyclopropane</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={150} y={531} size={12} fill={RED} script>{t("strained", "strained")}</T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={390} y={385} size={16} fill={RED} weight={700}>90°</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d={ringD(390, 435, 34, 4)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={390} y={498} size={13} fill={AMBER_DARK} script>cyclobutane</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={390} y={531} size={12} fill={RED} script>{t("strained", "strained")}</T>
      </Fade>

      {/* beat 7 — cyclopentane near strain-free, cyclohexane chair stable */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={630} y={385} size={16} fill={AMBER_DARK} weight={700}>~108°</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d={ringD(630, 435, 36, 5)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={630} y={498} size={13} fill={AMBER_DARK} script>cyclopentane</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={630} y={531} size={12} fill={GREEN} script>{t("~strain-free", "~strain-free")}</T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={870} y={385} size={16} fill={GREEN} weight={700}>≈109.5°</T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 3.6)}
        d="M 836 441 L 853 421 L 868 445 L 872 425 L 887 449 L 904 429"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={870} y={498} size={13} fill={AMBER_DARK} script>cyclohexane (chair)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.1)}>
        <T x={870} y={531} size={12} fill={GREEN} script>{t("stable", "stable")}</T>
      </Fade>

      {/* beat 8 — larger rings are not planar */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d="M 60 551 L 60 590" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={76} y={578} size={18} fill={RED} script anchor="start">
          {t(
            "larger rings are NOT planar — cyclohexane is three-dimensional",
            "bade rings planar NAHI hote — cyclohexane three-dimensional hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
