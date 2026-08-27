/**
 * P12Ch02 · Section 10 — "NEET Speed trap: V equals zero does not mean E equals zero"
 * Subtopic: Electrostatic Potential & Equipotentials
 * OPEN CHALKBOARD DESIGN WITH TWO SPEED TRAP EXAMPLES (NO CONTAINER BOXES):
 *  - Trap 1: Dipole Equatorial Line where V = 0 but E ≠ 0
 *  - Trap 2: Interior of Charged Shell where E = 0 but V = kQ/R ≠ 0
 *  - Independence of Electric Field derivative E = -dV/dr vs Potential V
 *  - Zero card box containers
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: V = 0 Does NOT Mean E = 0 (and Vice Versa!)", "NEET Speed Trap: V = 0 Does NOT Mean E = 0 (and Vice Versa!)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TRAP 1 — DIPOLE EQUATORIAL LINE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("TRAP 1: DIPOLE EQUATORIAL LINE", "TRAP 1: DIPOLE EQUATORIAL LINE")}
          </T>
        </Fade>

        {/* Dipole Equatorial Line Visual */}
        <Fade on={beat >= 1}>
          {/* Dipole Axis */}
          <Line x1="80" y1="240" x2="380" y2="240" stroke={INK} strokeWidth={2.5} />

          {/* +q and -q Charges */}
          <Circle cx={80} cy={240} r={17} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={80} y={245} size={15} fill={RED} weight={800}>+q</T>

          <Circle cx={380} cy={240} r={17} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={380} y={245} size={15} fill={GREEN} weight={800}>-q</T>

          {/* Equatorial Dashed Line (V = 0) */}
          <Line x1="230" y1="80" x2="230" y2="280" stroke={AMBER_DARK} strokeWidth={2.5} strokeDasharray="5 5" />

          {/* Observation Point P on Equatorial Line */}
          <Circle cx={230} cy={150} r={6} fill={AMBER_DARK} />
          <T x={245} y={145} size={14} fill={AMBER_DARK} weight={800} anchor="start">Point P</T>

          {/* E-field Vector Arrow (Non-zero E pointing left) */}
          <Path d={arrowD(230, 150, 150, 150)} stroke={RED} strokeWidth={3} />
          <T x={185} y={135} size={13} fill={RED} weight={800} anchor="middle">E ≠ 0</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 2}>
          <T x={230} y={305} anchor="middle" size={15} fill={RED} weight={800}>
            ★ V = 0 V everywhere on equatorial line, BUT E = kp/r³ ≠ 0 !
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: TRAP 2 — INSIDE CHARGED CONDUCTING SHELL */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("TRAP 2: INSIDE CHARGED SHELL", "TRAP 2: INSIDE CHARGED SHELL")}
          </T>
        </Fade>

        {/* Charged Shell Diagram */}
        <Fade on={beat >= 3}>
          <Circle cx={230} cy={180} r={75} stroke={RED} strokeWidth={3} fill="none" />
          <T x={230} y={92} size={13} fill={RED} weight={800} anchor="middle">Charged Shell (+Q, Radius R)</T>

          {/* Interior point */}
          <Circle cx={190} cy={180} r={6} fill={GREEN} />
          <T x={205} y={160} size={12} fill={GREEN} weight={800} anchor="start">Interior (r &lt; R)</T>
          <T x={205} y={185} size={13} fill={GREEN} weight={800} anchor="start">E_inside = 0 N/C</T>
          <T x={205} y={208} size={13} fill={AMBER_DARK} weight={800} anchor="start">V_inside = kQ/R ≠ 0 V !</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 5}>
          <T x={230} y={305} anchor="middle" size={15} fill={GREEN} weight={800}>
            ★ E = 0 inside shell, BUT V is constant non-zero (V = kQ/R)!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUMMARY: FIELD VS POTENTIAL INDEPENDENCE", "SUMMARY: FIELD VS POTENTIAL INDEPENDENCE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} fill={GREEN} weight={800} anchor="start">
            {t("Electric Field E = derivative (−dV/dr)  |  Potential V = scalar work accumulation!", "Electric Field E = derivative (−dV/dr)  |  Potential V = scalar work accumulation!")}
          </T>
          <T x={45} y={72} size={13} fill={INK} weight={700} anchor="start">
            {t("Never assume V = 0 implies E = 0, or E = 0 implies V = 0! Always test E = −dV/dr!", "Never assume V = 0 implies E = 0, or E = 0 implies V = 0! Always test E = −dV/dr!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ NEET Speed Trap Neutralized: Dipole equatorial line has V=0 but E≠0; Shell interior has E=0 but V=kQ/R! ✓",
            "★ NEET Speed Trap Neutralized: Dipole equatorial line has V=0 but E≠0; Shell interior has E=0 but V=kQ/R! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
