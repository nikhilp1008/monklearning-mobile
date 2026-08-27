/**
 * C11 Ch09 · Section 14 — "Conformational analysis of ethane"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.8, 21.59, 30.72, 39.85, 50.18, 63.15, 71.51]):
 *  0 heading · 1 eclipsed Newman icon, dihedral 0° · 2 max strain, highest
 *  energy · 3 staggered Newman icon, dihedral 60° · 4 min strain, lowest
 *  energy, most stable · 5 energy bars (eclipsed tall / staggered short) +
 *  dashed gap · 6 ΔE ≈ 12.5 kJ/mol · 7 RED: gap tiny, can't isolate conformers
 *
 * Layout plan — Newman icons at cy=230: staggered c(220,230) r32,
 *  eclipsed c(820,230) r32:
 *  b1 | eclipsed icon + label   | Draw+T | x788..852 y198..262 · label y280/300
 *  b2 | mid text                | T mid  | x540 y250
 *  b3 | staggered icon + label  | Draw+T | x188..252 y198..262 · label y280/300
 *  b4 | mid text                | T mid  | x540 y335
 *  b5 | bars + dashed connector | Draw   | staggered x205..235 y390..430 ·
 *      eclipsed x805..835 y350..430
 *  b6 | ΔE label                | T mid  | x520 y368
 *  b7 | margin bar + red note   | Draw+T | bar x60 y445..485 · text bl467
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function newmanD(cx: number, cy: number, r: number, eclipsed: boolean) {
  const frontAngles = [-90, 30, 150];
  const backAngles = eclipsed ? [-82, 38, 158] : [-30, 90, 210];
  let d = "";
  for (const a of frontAngles) {
    const rad = (a * Math.PI) / 180;
    d += `M ${cx} ${cy} L ${cx + r * Math.cos(rad)} ${cy + r * Math.sin(rad)} `;
  }
  for (const a of backAngles) {
    const rad = (a * Math.PI) / 180;
    const x1 = cx + r * Math.cos(rad), y1 = cy + r * Math.sin(rad);
    const x2 = cx + (r + 16) * Math.cos(rad), y2 = cy + (r + 16) * Math.sin(rad);
    d += `M ${x1} ${y1} L ${x2} ${y2} `;
  }
  return d;
}

export default function C11Ch09Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("conformational analysis of ethane", "ethane ka conformational analysis")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK}>
          {t("rotate one carbon of ethane and watch the energy", "ethane ke ek carbon ko rotate karo, energy dekho")}
        </T>
      </Fade>

      {/* beat 1 — eclipsed Newman projection */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 820 198 A 32 32 0 1 1 819.9 198" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1)} d={newmanD(820, 230, 32, true)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={820} y={282} size={16} fill={RED} weight={700}>{t("eclipsed", "eclipsed")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={820} y={301} size={13} fill={RED} script>{t("dihedral 0°", "dihedral 0°")}</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={250} size={15} fill={INK}>
          {t("clouds closest ⇒ max torsional strain, highest energy", "clouds sabse paas ⇒ max torsional strain, highest energy")}
        </T>
      </Fade>

      {/* beat 3 — staggered Newman projection */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 220 198 A 32 32 0 1 1 219.9 198" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={newmanD(220, 230, 32, false)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={220} y={282} size={16} fill={GREEN} weight={700}>{t("staggered", "staggered")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={220} y={301} size={13} fill={GREEN} script>{t("dihedral 60°", "dihedral 60°")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={335} size={15} fill={INK}>
          {t("clouds farthest ⇒ min strain, lowest energy, most stable", "clouds sabse door ⇒ min strain, lowest energy, most stable")}
        </T>
      </Fade>

      {/* beat 5 — energy bars */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 205 430 H 235 V 390 H 205 Z" stroke={GREEN} sw={2} dur={0.5} fill="none" />
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 805 430 H 835 V 350 H 805 Z" stroke={RED} sw={2} dur={0.6} fill="none" />
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 220 390 L 820 350" stroke={RED} sw={1.4} dur={0.6} />

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={520} y={368} size={15} fill={RED} weight={700}>
          ΔE ≈ 12.5 kJ/mol
        </T>
      </Fade>

      {/* beat 7 — gap too tiny to isolate */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 445 L 60 485" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={467} size={16} fill={RED} script anchor="start">
          {t(
            "gap is tiny, so conformers cannot be isolated",
            "gap itna chhota hai ki conformers isolate nahi ho sakte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
