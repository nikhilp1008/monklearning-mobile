/**
 * C11 Ch09 · Section 6 — "Saturated hydrocarbons: the paraffins"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.21, 21.96, 28.75, 38.57, 45.58, 56.52]):
 *  0 methane-like icon: every valency filled · 1 "all 4 valencies → single
 *  bonds" · 2 double bond drawn then crossed out — none waiting to react ·
 *  3 "paraffins" = parum affinis, little affinity · 4 formula CnH2n+2 ·
 *  5 CH4 (n=1) / C2H6 (n=2) · 6 RED: unreactive means toward acids/bases,
 *  NOT oxygen or radicals
 *
 * Layout plan:
 *  b0 | 4-bond icon + "H"×4    | Draw+T| c(150,150) span x95..215 y100..205
 *  b1 | "all 4 valencies…"     | T st  | x320 y158 (bl)
 *  b2 | double bond + cross    | Draw  | x470..540 y150
 *  b2 | "no double/triple…"    | T st  | x570 y158
 *  b3 | paraffins line         | T mid | y230
 *  b4 | chip "CnH2n+2"         | Chip  | y255..291 x502..580
 *  b5 | CH4 / C2H6 examples    | T mid | y325 x350 / x650
 *  b6 | margin bar + red note  | Draw+T| bar x60 y365..401 · text bl385
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
  crossD,
  INK,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD } from "./chem-kit";

export default function C11Ch09Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} script>
          {t("saturated hydrocarbons: the paraffins", "saturated hydrocarbons: the paraffins")}
        </T>
      </Fade>

      {/* beat 0 — every valency is filled */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 150 150 L 150 105 M 150 150 L 105 180 M 150 150 L 195 180" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 1.1)} d="M 150 150 L 150 195 M 141 187 L 150 195 L 159 187" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={150} y={95} size={14} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={90} y={192} size={14} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.1)}>
        <T x={210} y={192} size={14} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={150} y={218} size={14} fill={INK}>H</T>
      </Fade>

      {/* beat 1 — all 4 valencies on single bonds */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={300} y={140} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          {t("all 4 valencies → single bonds", "sabhi 4 valencies → single bonds")}
        </T>
      </Fade>

      {/* beat 2 — no double/triple bonds waiting */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={doubleBondD(300, 185, 370, 185)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={crossD(300, 178, 70, 14)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={400} y={190} size={15} fill={INK} anchor="start">
          {t("no double/triple bonds waiting", "koi double/triple bond wait nahi karta")}
        </T>
      </Fade>

      {/* beat 3 — the old name */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={17} fill={INK} script>
          {t("“paraffins” — Latin parum affinis, “little affinity”", "“paraffins” — Latin parum affinis, “little affinity”")}
        </T>
      </Fade>

      {/* beat 4 — general formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={502} y={255} w={78} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n+2
        </Chip>
      </Fade>

      {/* beat 5 — methane and ethane */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={350} y={330} size={19} fill={INK} weight={700}>
          CH₄ ({t("n=1, methane", "n=1, methane")})
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={650} y={330} size={19} fill={INK} weight={700}>
          C₂H₆ ({t("n=2, ethane", "n=2, ethane")})
        </T>
      </Fade>

      {/* beat 6 — the unreactive caveat */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 368 L 60 404" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={388} size={16} fill={RED} script anchor="start">
          {t(
            "“unreactive” = toward acids/bases — NOT oxygen or radicals",
            "“unreactive” = acids/bases ke against — oxygen ya radicals ke nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
