/**
 * C11 Ch07 · Section 8 — Worked example (NEET speed trap): order chlorine's oxidation states
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 7.51, 18.35, 32.34, 49.15, 57.51, 65.54, 73.9]):
 *  0 heading: arrange by increasing O.N. of chlorine
 *  1 species chips: HCl, Cl₂, HClO, HClO₃, HClO₄
 *  2 red-margin trap: "Cl = −1 everywhere?" crossed out; bonds to O ⇒ forced positive
 *  3 Cl₂=0 · HCl: +1+x=0 ⇒ x=−1
 *  4 HClO: +1+x−2=0 ⇒ x=+1
 *  5 HClO₃: +1+x−6=0 ⇒ x=+5
 *  6 HClO₄: +1+x−8=0 ⇒ x=+7
 *  7 number line (−1→+7) + final inequality chain
 *  (everything stays — the whole worked solution is the notes photo)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)   | T mid | x540 bl100
 *  b1 | 5 chips (h34)          | Chip  | y118..152 x64/150/236/342/458
 *  b2 | margin bar x64 y172..258; line1(sans17 red, crossed) bl192; line2(sans15) bl222
 *  b3 | derivation (sans17) x64 bl270
 *  b4 | derivation (sans17) x64 bl304
 *  b5 | derivation (sans17) x64 bl338
 *  b6 | derivation (sans17) x64 bl372
 *  b7 | axis y430 x80..960; 5 ticks+labels; inequality chain (sans18) bl500
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const SPECIES: [string, number, number][] = [
  ["HCl", -1, 100],
  ["Cl₂", 0, 200],
  ["HClO", 1, 300],
  ["HClO₃", 5, 700],
  ["HClO₄", 7, 900],
];

export default function C11Ch07Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("watch the oxygen count, the order fixes itself", "oxygen count dekho, order khud fix ho jaata hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("arrange by increasing O.N. of chlorine", "chlorine ke badhte O.N. se arrange karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — species chips ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={64} y={118} w={70} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          HCl
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={150} y={118} w={70} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          Cl₂
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={236} y={118} w={90} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          HClO
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Chip x={342} y={118} w={100} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          HClO₃
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={458} y={118} w={100} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          HClO₄
        </Chip>
      </Fade>

      {/* ===== beat 2 — the trap ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 64 172 L 64 258" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={80} y={192} size={17} fill={RED} weight={700} anchor="start">
          {t("TRAP: Cl = −1 everywhere?", "TRAP: Cl = −1 har jagah?")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={crossD(80, 179, 221, 19)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={80} y={222} size={15} fill={AMBER_DARK} anchor="start">
          {t("the moment Cl bonds to O, it's forced positive", "jaise hi Cl, O se bond karta hai, forced positive")}
        </T>
      </Fade>

      {/* ===== beats 3-6 — derivations ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={64} y={270} size={17} fill={INK} anchor="start">
          {t("Cl₂: free element ⇒ 0    ·    HCl: +1 + x = 0 ⇒ x = −1", "Cl₂: free element ⇒ 0    ·    HCl: +1 + x = 0 ⇒ x = −1")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={304} size={17} fill={INK} anchor="start">
          HClO:  +1 + x − 2 = 0  ⇒  x = +1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={338} size={17} fill={INK} anchor="start">
          HClO₃:  +1 + x − 6 = 0  ⇒  x = +5
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={64} y={372} size={17} fill={INK} anchor="start">
          HClO₄:  +1 + x − 8 = 0  ⇒  x = +7
        </T>
      </Fade>

      {/* ===== beat 7 — number line + answer ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 80 430 L 960 430 M 948 424 L 960 430 L 948 436" stroke={INK} sw={2.2} dur={0.8} />
      {SPECIES.map(([name, on, x], i) => (
        <React.Fragment key={name}>
          <Draw
            on={beat >= 7}
            delay={dl(7, 1 + i * 0.3)}
            d={`M ${x} 422 L ${x} 438`}
            stroke={GREEN}
            sw={2.2}
            dur={0.3}
          />
          <Fade on={beat >= 7} delay={dl(7, 1.2 + i * 0.3)}>
            <T x={x} y={412} size={13} fill={INK} weight={700}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 7} delay={dl(7, 1.3 + i * 0.3)}>
            <T x={x} y={456} size={15} fill={GREEN} weight={800}>
              {on > 0 ? `+${on}` : on}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={540} y={500} size={18} fill={GREEN} weight={800}>
          HCl(−1) &lt; Cl₂(0) &lt; HClO(+1) &lt; HClO₃(+5) &lt; HClO₄(+7)
        </T>
      </Fade>
    </Scene>
  );
}
